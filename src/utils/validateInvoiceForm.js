const validateInvoiceForm=( formData)=>{

    if (
        !formData.billTo.trim() ||
        !formData.billToEmail.trim() ||
        !formData.billToAddress.trim() ||
        !formData.billFrom.trim() ||
        !formData.billFromEmail.trim() ||
        !formData.billFromAddress.trim() ||
        !formData.dateOfIssue.trim() ||
        formData.items.length === 0 ||
        formData.items.some(
          (item) =>
            item.itemName.trim() === '' || item.itemDescription.trim() === ''
        )
      ) {
        
        return false;
      }else{
        return true;
      }

}

export default validateInvoiceForm