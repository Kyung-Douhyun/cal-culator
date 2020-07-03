import React from "react";
import "@rmwc/data-table/styles";
import {
  SimpleDataTable,
  DataTable,
  DataTableContent,
  DataTableHead,
  DataTableRow,
  DataTableHeadCell,
  DataTableBody,
  DataTableCell,
} from "@rmwc/data-table";
import "@rmwc/select/styles";
import { Select } from "@rmwc/select";
import "@rmwc/checkbox/styles";
import { Checkbox } from "@rmwc/checkbox";
import "@rmwc/switch/styles";
import { Switch } from "@rmwc/switch";
import { SimpleDialog } from "@rmwc/dialog";
import "@rmwc/dialog/styles";
import { Button } from "@rmwc/button";
import "@rmwc/button/styles";

const Cart = () => {
  const [checked, setChecked] = React.useState({});
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const sampleRows = new Array(5).fill(undefined);

  return (
    <div>
      <div>
        <DataTable>
          <DataTableContent>
            <DataTableHead>
              <DataTableRow>
                <DataTableHeadCell hasFormControl>
                  <Checkbox />
                </DataTableHeadCell>
                <DataTableHeadCell>Label</DataTableHeadCell>
                <DataTableHeadCell>Header</DataTableHeadCell>
                <DataTableHeadCell>Header</DataTableHeadCell>
                <DataTableHeadCell>Toggle</DataTableHeadCell>
              </DataTableRow>
            </DataTableHead>
            <DataTableBody>
              {sampleRows.map((v, i) => (
                <DataTableRow key={i} selected={checked[i]}>
                  <DataTableCell hasFormControl>
                    <Checkbox
                      checked={checked[i]}
                      onChange={(evt) => {
                        checked[i] = evt.currentTarget.checked;
                        setChecked({ ...checked });
                      }}
                    />
                  </DataTableCell>
                  <DataTableCell>Label</DataTableCell>
                  <DataTableCell>
                    <Select
                      placeholder="--Select--"
                      options={["Cookies", "Pizza", "Icecream"]}
                    />
                  </DataTableCell>
                  <DataTableCell>R{i} C3</DataTableCell>
                  <DataTableCell>
                    <Switch />
                  </DataTableCell>
                </DataTableRow>
              ))}
            </DataTableBody>
          </DataTableContent>
        </DataTable>
      </div>
      <div className="total-calorie">
        <SimpleDataTable data={[["Total Calorie", "3000 kcal"]]} />
      </div>
      <div>
        <span>
          <SimpleDialog
            title="DELETE"
            body="레알 지울까요?"
            open={deleteOpen}
            onClose={(evt) => {
              console.log(evt.detail.action);
              setDeleteOpen(false);
            }}
          />
          <Button raised onClick={() => setDeleteOpen(true)}>
            DELETE
          </Button>
        </span>
        <span>
          <SimpleDialog
            title="CONFIRM"
            body="등록?"
            open={confirmOpen}
            onClose={(evt) => {
              console.log(evt.detail.action);
              setConfirmOpen(false);
            }}
          />
          <Button raised onClick={() => setConfirmOpen(true)}>
            CONFIRM
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Cart;
