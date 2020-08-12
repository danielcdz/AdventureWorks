create PROCEDURE PR_CREARTABLAEMPLEADOS
	@PrimerNombre varchar(100),
	@PrimerApellido varchar(100),
	@SegundoApellido varchar(100),
	@NombrePuesto varchar(100)
	AS
	BEGIN
		create table #Empleados (PrimerNombre varchar(100),PrimerApellido varchar(100),SegundoApellido varchar(100),NombrePuesto varchar(100));
		insert into #Empleados values(@PrimerNombre,@PrimerApellido,@SegundoApellido,@NombrePuesto)
		SELECT * FROM #Empleados
	END