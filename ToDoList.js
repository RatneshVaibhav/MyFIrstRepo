let todo= [];
let p= prompt("Enter your choice");
p= p.toLowerCase();

if (p=="add"){
    while(p=="add"){
        let r= prompt("Enter the task to be added")
        r= r.toLowerCase();
        if (r=="quit")
            break;
        else
           todo.push(r);
           p= prompt("Enter your choice");
           p= p.toLowerCase();
    }
    for (tasks of todo){
        console.log(tasks);
    }
}
else if (p=="list"){
    for (element of todo){
        console.log(element);
    }
}
else if(p=="delete"){
    let h= prompt("Enter the task to be deleted");
    todo.remove(h);
    for (items of todo){
        console.log(items);
    }
}
