use "AdventureWorks2017"
go 
create table Auditoria
(
	ID_Auditoria int not null Primary key identity(1,1),
	Fecha datetime,
	Mensaje varchar(500)
)
go
create TRIGGER TR_PersonUpdate
	on Person.Person
	after update
	as
	BEGIN 
		declare @Variable nvarchar(100)
		declare @Variable2 XML
		IF UPDATE(PersonType)
			BEGIN
				select @Variable = ins.PersonType from inserted ins
				insert into Auditoria values (getdate(),concat('Tabla Person.Person se actualizó la columna PersonType con el valor ',@Variable))
			END
		IF UPDATE(NameStyle)
			BEGIN
				select @Variable = ins.NameStyle from inserted ins
				insert into Auditoria values (getdate(),concat('Tabla Person.Person se actualizó la columna NameStyle con el valor ',@Variable))
			END
		IF UPDATE(Title)
			BEGIN
				select @Variable = ins.Title from inserted ins
				insert into Auditoria values (getdate(),concat('Tabla Person.Person se actualizó la columna Title con el valor ',@Variable))
			END
		IF UPDATE(FirstName)
			BEGIN
				select @Variable = ins.FirstName from inserted ins
				insert into Auditoria values (getdate(),concat('Tabla Person.Person se actualizó la columna FirstName con el valor ',@Variable))
			END
		IF UPDATE(MiddleName)
			BEGIN
				select @Variable = ins.MiddleName from inserted ins
				insert into Auditoria values (getdate(),concat('Tabla Person.Person se actualizó la columna MiddleName con el valor ',@Variable))
			END
		IF UPDATE(LastName)
			BEGIN
				select @Variable = ins.LastName from inserted ins
				insert into Auditoria values (getdate(),concat('Tabla Person.Person se actualizó la columna LastName con el valor ',@Variable))
			END
		IF UPDATE(Suffix)
			BEGIN
				select @Variable = ins.Suffix from inserted ins
				insert into Auditoria values (getdate(),concat('Tabla Person.Person se actualizó la columna Suffix con el valor ',@Variable))
			END
		IF UPDATE(EmailPromotion)
			BEGIN
				select @Variable = ins.EmailPromotion from inserted ins
				insert into Auditoria values (getdate(),concat('Tabla Person.Person se actualizó la columna EmailPromotion con el valor ',@Variable))
			END
		IF UPDATE(AdditionalContactInfo)
			BEGIN
				select @Variable2 = ins.AdditionalContactInfo from inserted ins
				insert into Auditoria values (getdate(),concat('Tabla Person.Person se actualizó la columna AdditionalContactInfo con el valor ',convert(varchar(300),@Variable2)))
			END
		IF UPDATE(Demographics)
			BEGIN
				select @Variable2 = ins.Demographics from inserted ins
				insert into Auditoria values (getdate(),concat('Tabla Person.Person se actualizó la columna Demographics con el valor ',convert(varchar(300),@Variable2)))
			END
		IF UPDATE(rowguid)
			BEGIN
				select @Variable = ins.rowguid from inserted ins
				insert into Auditoria values (getdate(),concat('Tabla Person.Person se actualizó la columna rowguid con el valor ',@Variable))
			END
		IF UPDATE(ModifiedDate)
			BEGIN
				select @Variable = ins.ModifiedDate from inserted ins
				insert into Auditoria values (getdate(),concat('Tabla Person.Person se actualizó la columna ModifiedDate con el valor ',@Variable))
			END
	END
go
create TRIGGER TR_InsteadOfCreditCard
	on Sales.CreditCard
	instead of delete
	as
	BEGIN
		DECLARE @Variable varchar (100)
		DECLARE @String nvarchar (255)
		select @Variable = ins.CreditCardID from inserted ins
		IF @Variable IS NULL
			BEGIN
				set @String = 'Se intentó eliminar la columna de ID ='
				select @Variable = del.CreditCardID from deleted del
				set @String = concat(@String,@Variable,',')
				select @Variable = del.CardType from deleted del
				set @String = concat(@String,'CardType=',@Variable,',')
				select @Variable = del.CardNumber from deleted del
				set @String = concat(@String,'CardNumber=',@Variable,',')
				select @Variable = del.ExpMonth from deleted del
				set @String = concat(@String,'ExpMonth=',@Variable,',')
				select @Variable =  del.ExpYear from deleted del
				set @String = concat(@String,'ExpYear=',@Variable)

				insert into Auditoria values (getdate(),@String)
			END
	END
