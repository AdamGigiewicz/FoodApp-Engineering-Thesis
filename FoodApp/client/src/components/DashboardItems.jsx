import React from 'react';
import { DataTable } from '../components';
import { useSelector } from 'react-redux';
import { HiMiniCurrencyDollar } from 'react-icons/hi2';

const DashboardNewItem = () => {
  const products = useSelector(state => state.products);

  return (
    <div className="w-full">
      <DataTable
        columns={[
          {
            title: "Zdjęcie",
            field: "imageURL",
            render: (rowData) => (
              <img
                src={rowData.imageURL}
                className="w-32 h-16 object-contain rounded-md"
              />
            ),
          },
          {
            title: "Nazwa",
            field: "product_name",
          },
          {
            title: "Kategoria",
            field: "product_category",
          },
          {
            title: "Cena",
            field: "product_price",
            render: (rowData) => (
              <p className="text-xl font-semibold text-textColor flex items-center justify-center">
                <HiMiniCurrencyDollar className="text-red-400" />
                {parseFloat(rowData.product_price).toFixed(2)}
              </p>
            ),
          },
        ]}
        data={products}
        title="Lista produktów"
        actions={[
          {
            icon: "edit",
            tooltip: "Edytuj",
            onclick: (event, rowData) => {
              alert("Chcesz edytować " + rowData.productId)
            },
          },
          {
            icon: "delete",
            tooltip: "Usuń",
            onclick: (event, rowData) => {
              alert("Chcesz usunąć " + rowData.productId)
            },
          },
        ]}
      />
    </div>
  );
};

export default DashboardNewItem;