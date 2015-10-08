exports.generateBoard = function(hash, callback)
{

var freeze_cells = _freezeCellsArray(hash);
var table_html=''
table_html += '<table>'
	for (var a=0; a < hash.row; a++) {
            table_html +="<tr>";
            for(var b=0; b<hash.col; b++) {
            	var temp = {row:a,col:b};
            	  if(freeze_cells.contains(temp))
            	   table_html +="<td class='freeze'></td>";
            	  else
                   table_html +="<td class='cell'></td>";
          
            }
        table_html +="</tr>";
    }
table_html +='</table>'
callback(null,table_html);
}

_freezeCellsArray = function(hash){
var freeze_cells = [];
  for (var a=0; a < hash.row; a++) {
	freeze_Row = Math.floor( (Math.random() * 1000)%hash.row);
    freeze_Col = Math.floor( (Math.random() * 1000)%hash.col);
    freeze_cells.push({row:freeze_Row,col:freeze_Col});
  }
  return freeze_cells;
}

Array.prototype.contains = Array.prototype.contains || function(obj)
{
  var i, l = this.length;
  for (i = 0; i < l; i++)
  {
  	if (this[i].row == obj.row && this[i].col== obj.col)
  		return true;  	
  }
  return false;
};
