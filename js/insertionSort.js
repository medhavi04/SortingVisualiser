function insertionSort() {
    c_delay = 0;
    div_update(divs[0],div_sizes[0],"green");
    for(let i=1;i<array_size;i++) {
        for(let j = i;j>0;j--) {
            div_update(divs[j],div_sizes[j],"yellow");
            div_update(divs[j-1],div_sizes[j-1],"yellow");
            if(div_sizes[j]<div_sizes[j-1]) {
                div_update(divs[j],div_sizes[j],"red");
                div_update(divs[j-1],div_sizes[j-1],"red");
                let temp = div_sizes[j];
                div_sizes[j] = div_sizes[j-1];
                div_sizes[j-1] = temp;
                div_update(divs[j],div_sizes[j],"yellow");
                div_update(divs[j-1],div_sizes[j-1],"yellow");
                div_update(divs[j],div_sizes[j],"green");
                div_update(divs[j-1],div_sizes[j-1],"green");
            }
            else {
                div_update(divs[j],div_sizes[j],"green");
                div_update(divs[j-1],div_sizes[j-1],"green");
                break;
            }
            
        }
    }
    enable_buttons();
}