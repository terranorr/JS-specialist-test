/*
**	����� ����������
**		url - ������ �� �����������
**		doc - ������ �� ��������, � ������� ���������� �������� �����������
*/
function Photo(url, doc){
	// �������� ������
	this.url = url;
	this.doc = doc;
	this.img = doc.createElement("IMG");

	// ������ ������
	this.load = load;
	this.isLoaded = isLoaded;
	
	/*
	**	����� ��������� �������� �������� src
	**	�� ����, ������� ������ ������ �������� �����������
	*/
	function load(){
		this.img.src = this.url;
	}
	/*
	** ����� ���������� ��������� �� ����������
	*/
	function isLoaded(){
		return (this.img.src == "") ? false : true;
	}
}
