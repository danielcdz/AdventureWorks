use "AdventureWorks2017"
go
create PROCEDURE PR_GETSALES
	@TerritoryID int = NULL,
	@NombreTerritorio varchar(100) = NULL,
	@NumeroOrden varchar (100) = NULL,
	@ProductID int = NULL,
	@NombreProducto varchar(100) = NULL
	AS
	BEGIN 
		SELECT SH.SalesOrderID,SH.ShipMethodID,PM.Name as NombreShipMethod ,SH.TerritoryID,ST.Name as NombreTerritorio,
		SD.ProductID,P.Name as NombreProducto,
		concat(PP.LastName,' ',PP.MiddleName,' ',PP.FirstName) as NombreCustomer
		FROM Sales.SalesOrderHeader SH
		INNER JOIN Sales.SalesOrderDetail SD on SH.SalesOrderID = SD.SalesOrderID
		INNER JOIN Sales.SalesTerritory ST on SH.TerritoryID = ST.TerritoryID
		INNER JOIN Purchasing.ShipMethod PM on SH.ShipMethodID = PM.ShipMethodID
		INNER JOIN Production.Product P on SD.ProductID = P.ProductID
		INNER JOIN Sales.Customer SC on SH.CustomerID = SC.CustomerID
		INNER JOIN Person.Person PP on SC.PersonID = PP.BusinessEntityID
		WHERE (@TerritoryID IS NULL OR @TerritoryID = SH.TerritoryID)
		AND (@NombreTerritorio IS NULL OR lower(ST.Name) like lower('%'+@NombreTerritorio+'%'))
		AND (@NumeroOrden IS NULL OR lower(SH.SalesOrderNumber) like lower('%'+@NumeroOrden+'%'))
		AND (@ProductID IS NULL OR @ProductID = SD.ProductID)
		AND (@NombreProducto IS NULL OR lower(P.Name) like lower('%'+@NombreProducto+'%'))
	END