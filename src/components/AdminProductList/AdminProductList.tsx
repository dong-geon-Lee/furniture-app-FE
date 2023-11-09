import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
  // GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
// import {
//   randomCreatedDate,
//   randomTraderName,
//   randomId,
//   randomArrayItem,
// } from "@mui/x-data-grid-generator";
import axios from "axios";

// const roles = ["All", "Chair", "Table", "Armchair", "Bed"];
// const randomRole = () => {
//   return randomArrayItem(roles);
// };

const initialRows: GridRowsProp = [];

// interface EditToolbarProps {
//   setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
//   setRowModesModel: (
//     newModel: (oldModel: GridRowModesModel) => GridRowModesModel
//   ) => void;
// }

// function EditToolbar(props: EditToolbarProps) {
//   const { setRows, setRowModesModel } = props;

//   const handleClick = () => {
//     const id = randomId();
//     setRows((oldRows) => [...oldRows, { id, name: "", age: "", isNew: true }]);
//     setRowModesModel((oldModel) => ({
//       ...oldModel,
//       [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
//     }));
//   };

//   return (
//     <GridToolbarContainer>
//       <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
//         Add record
//       </Button>
//     </GridToolbarContainer>
//   );
// }

const AdminProductList = () => {
  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = async (id: GridRowId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      setRows(rows.filter((row) => row.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow: GridRowModel) => {
    try {
      await axios.patch(`http://localhost:5000/products/${newRow.id}`, newRow);
      setRows(rows.map((row) => (row.id === newRow.id ? newRow : row)));
      return newRow;
    } catch (error) {
      console.error(error);
    }
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", width: 100, editable: true },
    {
      field: "name",
      headerName: "Name",
      type: "string",
      width: 140,
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "description",
      headerName: "Description",
      type: "string",
      width: 240,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
      editable: true,
      type: "string",
    },
    {
      field: "category",
      headerName: "Category",
      width: 100,
      editable: true,
      type: "singleSelect",
      valueOptions: ["All", "Chair", "Table", "Armchair", "Bed"],
    },
    {
      field: "imageURL",
      headerName: "ImageURL",
      width: 200,
      editable: true,
      type: "string",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/products");
      const datas = response.data;
      console.log(datas);
      setRows(datas);
    };
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <h1>제품 목록</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={
          {
            // toolbar: EditToolbar,
          }
        }
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
        sx={{
          ".css-t89xny-MuiDataGrid-columnHeaderTitle": {
            fontSize: " 1.4rem",
          },
          ".MuiDataGrid-cellContent": {
            fontSize: "1.3rem",
          },
        }}
      />
    </Box>
  );
};

export default AdminProductList;
