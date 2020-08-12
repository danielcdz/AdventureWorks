use "AdventureWorks2017"
go
create PROCEDURE PR_GETSALESPERSON
	@NombreVendedor varchar (100) = NULL,
	@TerritoryID int = NULL,
	@ProductID int = NULL,
	@NombreProducto varchar(100) = NULL,
	@Precio1 int = NULL,
	@Precio2 int = NULL
	AS
	BEGIN
		SELECT SH.SalesOrderID,concat(PP.LastName,' ',PP.MiddleName,' ',PP.FirstName) as NombreVendedor,ST.TerritoryID,
		ST.Name as NombreTerritorio,P.ProductID,P.Name as NombreProducto,SH.TotalDue
		FROM Sales.SalesOrderHeader SH
		INNER JOIN Sales.SalesPerson SP on SH.SalesPersonID = SP.BusinessEntityID
		INNER JOIN Person.Person PP on SP.BusinessEntityID = PP.BusinessEntityID
		INNER JOIN Sales.SalesTerritory ST on SH.TerritoryID = ST.TerritoryID
		INNER JOIN Sales.SalesOrderDetail SD on SH.SalesOrderID = SD.SalesOrderID
		INNER JOIN Production.Product P on SD.ProductID = P.ProductID
		WHERE (@NombreVendedor IS NULL OR lower(PP.FirstName) like lower('%'+@NombreVendedor+'%'))
		AND (@TerritoryID IS NULL OR @TerritoryID = ST.TerritoryID)
		AND (@ProductID IS NULL OR @ProductID = P.ProductID)
		AND (@NombreProducto IS NULL OR lower(P.Name) like ('%'+@NombreProducto+'%'))
		AND (@Precio1 IS NULL OR SH.TotalDue BETWEEN @Precio1 and @Precio2)
	END