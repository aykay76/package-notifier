function onload()
{
    var s = document.getElementById("seperator")

    first = s.parentElement.getElementsByClassName('first')[0]
    second = s.parentElement.getElementsByClassName('second')[0]
    
    if (s.classList.contains("vertical"))
    {
        dragElement(s, first, second, "V")
    }
    else
    {
        dragElement(s, first, second, "H")
    }
}

// function is used for dragging and moving
function dragElement( element, firstPane, secondPane, direction, handler )
{
  // Two variables for tracking positions of the cursor
  const drag = { x : 0, y : 0 };
  const delta = { x : 0, y : 0 };
  /* if present, the handler is where you move the DIV from
     otherwise, move the DIV from anywhere inside the DIV */
  handler ? ( handler.onmousedown = dragMouseDown ): ( element.onmousedown = dragMouseDown );

  // function that will be called whenever the down event of the mouse is raised
  function dragMouseDown( e )
  {
    drag.x = e.clientX;
    drag.y = e.clientY;
    document.onmousemove = onMouseMove;
    document.onmouseup = () => { document.onmousemove = document.onmouseup = null; }
  }

  // function that will be called whenever the up event of the mouse is raised
  function onMouseMove( e )
  {
    const currentX = e.clientX;
    const currentY = e.clientY;

    delta.x = currentX - drag.x;
    delta.y = currentY - drag.y;

    const offsetLeft = element.offsetLeft;
    const offsetTop = element.offsetTop;
	
	const first = firstPane //document.getElementById("first");
    const second = secondPane //document.getElementById("second");
    
    if (direction === "H") {
        let firstWidth = first.offsetWidth;
        let secondWidth = second.offsetWidth;
        element.style.left = offsetLeft + delta.x + "px";
		firstWidth += delta.x;
		secondWidth -= delta.x;
        first.style.width = firstWidth + "px";
        second.style.width = secondWidth + "px";    
    }
    if (direction === "V")
    {
        let firstHeight = first.offsetHeight
        let secondHeight = second.offsetHeight
        element.style.top = offsetTop + delta.y + "px"
        firstHeight += delta.y
        secondHeight -= delta.y
        first.style.height = firstHeight + "px"
        second.style.height = secondHeight + "px" 
    }
    drag.x = currentX;
    drag.y = currentY;
  }
}