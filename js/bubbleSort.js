
function bubbleSort() {
    c_delay = 0;
    for(let i=0;i<array_size-1;i++) {
        for(let j=0;j<array_size-i-1;j++) {
            div_update(divs[j],div_sizes[j],"yellow");
            div_update(divs[j+1],div_sizes[j+1],"yellow");
            if(div_sizes[j]>div_sizes[j+1]) {
                div_update(divs[j],div_sizes[j],"red");
                div_update(divs[j+1],div_sizes[j+1],"red");
                let temp = div_sizes[j];
                div_sizes[j] = div_sizes[j+1];
                div_sizes[j+1] = temp;
                div_update(divs[j],div_sizes[j],"yellow");
                div_update(divs[j+1],div_sizes[j+1],"yellow");
            }
            div_update(divs[j],div_sizes[j],"blue");
            div_update(divs[j+1],div_sizes[j+1],"blue");
        }
        div_update(divs[array_size-i-1],div_sizes[array_size-i-1],"green");
    }
    div_update(divs[0],div_sizes[0],"green");
    enable_buttons();
}