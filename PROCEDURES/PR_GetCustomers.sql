create procedure PR_GETCUSTOMERS
        @personID int = null,
        @nombreCliente varchar(100) = null,
        @territorioID int = null,
        @nombreTerritorio varchar(100) = null,
        @nombreProducto varchar(100) = null,
        @idProducto varchar(100) = null
as
begin
    select 
        C.CustomerID,concat(PP.FirstName,' ',PP.MiddleName,' ',PP.LastName) CustomerName, C.TerritoryID , ST.Name as TerritoryName,P.ProductID,P.Name as ProductName
    from
        Sales.Customer C
    inner join
        Person.Person PP on PP.BusinessEntityID=C.CustomerID
    inner join
        Sales.SalesOrderHeader SO on SO.CustomerID=C.CustomerID
    inner join
        Sales.SalesOrderDetail SD on SO.SalesOrderID=SD.SalesOrderID
    inner join    
        Production.Product P on SD.ProductID=P.ProductID
    inner join
        Sales.SalesTerritory ST on C.TerritoryID=ST.TerritoryID
    where
        (@nombreTerritorio IS NULL OR lower(ST.Name) like lower('%'+@nombreTerritorio+'%'))and
        (@nombreProducto IS NULL OR lower(P.Name) like lower('%'+@nombreProducto+'%'))and
        (@nombreCliente IS NULL OR lower(concat(PP.FirstName,PP.MiddleName,PP.LastName)) like lower('%'+@nombreCliente+'%'))and
        (@idProducto is null or @idProducto= P.ProductID)and
        (@territorioID is null or @territorioID= C.TerritoryID)and
        (@personID is null or @personID= C.CustomerID)
end