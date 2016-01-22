/*
**	Класс ФОТОГРАФИЯ
**		url - ссылка на изображение
**		doc - ссылка на документ, в котором происходит создание изображения
*/
function Photo(url, doc){
	// Свойства класса
	this.url = url;
	this.doc = doc;
	this.img = doc.createElement("IMG");

	// Методы класса
	this.load = load;
	this.isLoaded = isLoaded;
	
	/*
	**	Метод назначает элементу свойство src
	**	по идее, браузер ДОЛЖЕН начать загрузку изображения
	*/
	function load(){
		this.img.src = this.url;
	}
	/*
	** Метод возвращает загружена ли фотография
	*/
	function isLoaded(){
		return (this.img.src == "") ? false : true;
	}
}
