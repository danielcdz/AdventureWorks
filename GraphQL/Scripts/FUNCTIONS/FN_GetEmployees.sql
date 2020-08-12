create FUNCTION FN_GETEMPLOYEES(@NombreEmpleado varchar(100))
	RETURNS TABLE
	AS
	RETURN
	(
		SELECT concat(PP.LastName,' ',PP.MiddleName,' ',PP.FirstName) as NombreEmpleado,HE.Gender,HE.JobTitle,HE.LoginID
		FROM HumanResources.Employee HE
		INNER JOIN Person.Person PP on HE.BusinessEntityID = PP.BusinessEntityID
		WHERE lower(PP.FirstName) like lower('%'+@NombreEmpleado+'%')
	);