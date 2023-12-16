import React, { useState } from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap';
import { useProductListData } from '../redux/hooks';
import { updateProduct } from '../redux/productsSlice';
import { BiSolidPencil } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { updateItemsInInvoices } from '../redux/invoicesSlice';

const ProductList = () => {

  const { productList, listSize } = useProductListData();

  const dispatch= useDispatch();

  const [editingRow, setEditingRow] = useState(null);
  const [editedValues, setEditedValues] = useState({});

  const handleEditRow = (row) => {
    setEditingRow(row.name);
    setEditedValues({
      number: row.number,
      name: row.name,
      description: row.description,
      group: row.group,
    });
  };

  const handleSaveEdit = () => {
    console.log(editedValues);
    dispatch(updateProduct({updatedProduct: editedValues,updatedProductName: editingRow}));
    dispatch(updateItemsInInvoices({itemName:editingRow, updatedItemDetails:{itemName:editedValues.name,itemDescription:editedValues.description,itemGroup:editedValues.group}}))
    setEditedValues({});
    setEditingRow(null);

  };

  const handleCancelEdit = () => {
    setEditingRow(null);
    setEditedValues({});
  };

  return (
    <Row>
      <Col className="mx-auto" xs={12} md={8} lg={9}>
        <Card className="d-flex p-3 p-md-4 my-3 my-md-4 ">
          {listSize === 0 ? (
            <div className="d-flex flex-column align-items-center">
              <h3 className="fw-bold pb-2 pb-md-4">No Product present</h3>

              {/* <Button variant="primary">Add Product</Button> */}

            </div>
          ) : (
            <div className="d-flex flex-column">
              <div className="d-flex flex-row align-items-center justify-content-between">
                <h3 className="fw-bold pb-2 pb-md-4">Product List</h3>
              </div>
              <Table responsive className="data-table">
                <thead>
                  <tr>
                    <th>Product No.</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Group</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {productList.map((product) =>
                    editingRow === product.name ? (
                      <tr key={`${product.name}-edit`} className="edit-row">
                        <td>
                          {product.number}
                        </td>
                        <td className='edit-row-entry'>
                          <input
                            type="text"
                            value={editedValues.name}
                            onChange={(e) => setEditedValues({ ...editedValues, name: e.target.value })}

                          />
                        </td>
                        <td className='edit-row-entry'>
                          <input
                            type="text"
                            value={editedValues.description}
                            onChange={(e) => setEditedValues({ ...editedValues, description: e.target.value })}
                          />
                        </td>
                        <td className='edit-row-entry'>
                          <input
                            type="text"
                            value={editedValues.group}
                            onChange={(e) => setEditedValues({ ...editedValues, group: e.target.value })}
                          />
                        </td>
                        <td className='edit-row-entry' >
                          <button  className="save-button mx-1 "  onClick={handleSaveEdit}>
                            Save
                          </button>
                          <button className="cancel-button mx-1 "  onClick={handleCancelEdit}>
                            Cancel
                          </button>
                        </td>
                      </tr>
                    )
                      :
                      (
                        <tr key={product.number}>
                          <td>{product.number}</td>
                          <td>{product.name}</td>
                          <td>{product.description}</td>
                          <td>{product.group}</td>
                          <td>
                            <button  onClick={() => handleEditRow(product)} className="mx-1">
                              Edit
                            </button>
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
              </Table>
            </div>
          )}
        </Card>
      </Col>
    </Row>
  )
}

export default ProductList