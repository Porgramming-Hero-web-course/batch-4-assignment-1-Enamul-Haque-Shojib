// problem - 4
type ShapeCircle = {
    shape: "circle";
    radius: number;
  };
  
  type ShapeRectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  
  
  const calculateShapeArea = (shapeArea: ShapeCircle | ShapeRectangle): number => {
    let calculate : number = 0;
    if (shapeArea.shape === "circle") {
    
      calculate= Math.PI * shapeArea.radius ** 2;
    } else if (shapeArea.shape === "rectangle") {
    
      calculate= shapeArea.width * shapeArea.height;
    }
    return calculate;
  }
  
  const circleArea : number = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea.toFixed(2));
  
  const rectangleArea : number = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(rectangleArea); 