array_art_names = ['Smile Emoji', 'Spectacles', 'Key', 'Basketball', 'Socks'];
random_number = Math.floor((Math.random() * array_art_names.length) + 1);
draw = array_art_names[random_number];
document.getElementById("draw_object").value = draw;
timer_counter = 0;
time_check = "";
draw_sketch = "";
answer_holder = "";
score = 0;