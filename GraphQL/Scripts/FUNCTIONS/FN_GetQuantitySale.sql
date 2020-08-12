create FUNCTION FN_GETQUANTITYSALE(@ProductID int)
	RETURNS int
	AS
	BEGIN
		DECLARE @Resultado int
		SELECT @Resultado = SUM(OrderQty) 
		FROM Sales.SalesOrderDetail SD
		WHERE @ProductID = SD.ProductID 
		IF @Resultado IS NULL
			SET @Resultado = 0;
		RETURN @Resultado;
	END
	select dbo.FN_GETQUANTITYSALE(735) 
