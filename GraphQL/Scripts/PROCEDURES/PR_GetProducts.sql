use "AdventureWorks2017"
go
create PROCEDURE PR_GETPRODUCTS
	@Nombre varchar (100) = NULL,
	@NumeroProducto varchar (100) = NULL,
	@NombreCategoria varchar (100) = NULL,
	@Precio1 int = NULL,
	@Precio2 int = NULL,
	@NombreModelo varchar (100) = NULL
	AS
	BEGIN
		SELECT DISTINCT P.ProductID,
		P.Name as ProductName,
		P.ProductNumber,
		PC.Name as ProductCategoryName,
		P.Color,
		P.Size,
		PM.Name as ProductModelName,
		P.StandardCost,P.SellStartDate,PQ.Quantity
		FROM Production.Product P
		INNER JOIN Production.ProductSubcategory PS on P.ProductSubcategoryID = PS.ProductSubcategoryID
		INNER JOIN Production.ProductCategory PC on PS.ProductCategoryID = PC.ProductCategoryID
		INNER JOIN Production.ProductModel PM on P.ProductModelID = PM.ProductModelID
		INNER JOIN Production.ProductInventory PQ on P.ProductID = PQ.ProductID
		WHERE (@Nombre IS NULL OR lower(P.Name) like lower('%'+@Nombre+'%'))
		AND (@NumeroProducto IS NULL OR lower(P.ProductNumber) like lower('%'+@NumeroProducto+'%'))
		AND (@NombreCategoria IS NULL OR lower(PC.Name) like lower('%'+@NombreCategoria+'%'))
		AND (@Precio1 IS NULL OR P.StandardCost BETWEEN @Precio1 and @Precio2)
		AND (@NombreModelo IS NULL OR @NombreModelo = PM.Name)
		ORDER BY P.ProductID
	END
	execute PR_GETPRODUCTS null,null,null,null,null,null