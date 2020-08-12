create procedure PR_GETPURCHASINGVENDOR
    @nombreVendedor varchar(100)= null,
    @nombreShipMetod varchar(100) = null,
    @nombreProducto varchar(100)= null,
    @idProducto int = null,
    @precio1 int = null,
    @precio2 int = null
    as
    begin
        select
            PO.PurchaseOrderID,V.Name as VendorName,S.ShipMethodID,PR.ProductID,PR.Name as ProductName,PO.TotalDue
        from
            Purchasing.Vendor V
            inner join
                Purchasing.ProductVendor PV on PV.BusinessEntityID=V.BusinessEntityID
            inner join
                Purchasing.PurchaseOrderHeader PO on PO.VendorID=PV.BusinessEntityID
            inner join
                Purchasing.ShipMethod S on PO.ShipMethodID=S.ShipMethodID
            inner join
                Purchasing.PurchaseOrderDetail POD on POD.PurchaseOrderID=PO.PurchaseOrderID
            inner join
                Production.Product PR on PR.ProductID=POD.ProductID
        where
            (@nombreVendedor IS NULL OR lower(V.Name) like lower('%'+@nombreVendedor+'%'))and
            (@nombreShipMetod IS NULL OR lower(S.Name) like lower('%'+@nombreShipMetod+'%'))and
            (@nombreProducto IS NULL OR lower(PR.Name) like lower('%'+@nombreProducto+'%'))and
            (@idProducto is null or @idProducto= POD.ProductID)and
            (@precio1 IS NULL OR PO.TotalDue BETWEEN @precio1 and @precio2)
    end