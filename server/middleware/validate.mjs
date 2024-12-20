export function Validate(data) {

  for (const [key, value] of Object.entries(data)) {
   
    if (typeof value !== "string") {
      return `fill in the ${key} field`;
   
    } 
     
    if (value === " " || value === "") {
      return `fill in the field of ${key}`;
   
    } 
    
      if (typeof value !== "number") {
      return `fill in the ${key} field`;
    }

  }
}
