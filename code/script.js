

var comment = [
    {"name": "Hayeong", "date":"20 Dec, 2022", "body":"testt"},
    {"name": "aaa", "date":"22 Dec, 2022", "body":"asdfdsfdfsdsdfsdf"}
];
for(var i=0; i<comment.length; i++){
    var html = "<div class='container'><div class = 'commentBox'><div class ='leftPanelImg'><img src='C:/Users/blueb/dalee/mongmong.jpg' /></div><div class = 'rightPanel'><span>"+comment[i].name+"</span><div class='date'>"+comment[i].date+"</div><p>"+comment[i].body+"</p></div><div class='clear'></div></div></div>";
    $('#container_a').append(html);
}




