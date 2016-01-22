/*
**	Класс ФОТОАЛЬБОМ
**		doc - документ, в котором следует размещать изображения
**		elementID - ID элемента DIV, в котором следует размещать изображения
*/
function Album(doc, elementID)
{
	// Свойства объекта
	this.doc = doc;
	// Проверим наличие элемента
	this.photoDIV = doc.getElementById(elementID);
	if (!this.photoDIV)
	{
		// Создадим нужный элемент
		this.photoDIV = doc.createElement("DIV");
		this.photoDIV.id = elementID;
		doc.body.appendChild(this.photoDIV);
		var img = doc.createElement("IMG");
		this.photoDIV.appendChild(img);
	}
	// Массив объектов Photo и указатель на текущую фотографию
	this.photos = new Array();
	this.currentPhotoIndex = -1;
	
	// Методы объекта
	this.add = add;
	this.getNextIndex = getNextIndex;
	this.getPreviousIndex = getPreviousIndex;
	this.showPhoto = showPhoto;
	this.showNext = showNext;
	this.showPrevious = showPrevious;	


	/*
	** Метод добавляет новую фотографию
	*/
	function add(objPhoto)
	{
		this.photos[this.photos.length] = objPhoto;
	}
	/*
	**	Метод возвращает индекс следующей фотографии
	*/
	function getNextIndex()
	{
		var index = this.currentPhotoIndex;
		index++;
		if (index >= this.photos.length) index = 0;
		return index;
	}
	/*
	**	Метод возвращает индекс предыдущей фотографии
	*/
	function getPreviousIndex()
	{
		var index = this.currentPhotoIndex;
		index--;
		if (index <= 0) index = this.photos.length - 1;
		return index;
	}
	/*
	**	Объект показывает фотографию на экране
	*/
	function showPhoto(objPhoto)
	{
		this.photoDIV.firstChild.src = objPhoto.url;
	}
	/*
	**	Метод показывает следующую фотографию на экране
	**	и кеширует следующу фотографию, по отношению к только что показанной
	*/
	function showNext()
	{
		 var index = this.getNextIndex();
		 this.currentPhotoIndex = index;
		 this.showPhoto(this.photos[index]);
		 index = this.getNextIndex();
		 if (!this.photos[index].isLoaded) this.photos[index].load();
	}
	/*
	**	Метод показывает следующую фотографию на экране
	**	и кеширует следующу фотографию, по отношению к только что показанной
	*/
	function showPrevious()
	{
		 var index = this.getPreviousIndex();
		 this.currentPhotoIndex = index;
		 this.showPhoto(this.photos[index]);
		 index = this.getPreviousIndex();
		 if (!this.photos[index].isLoaded) this.photos[index].load();
	}
}															  