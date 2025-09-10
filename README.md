/** 
Header
  -Logo
  -Nav Items
Body
  -Search
  -ResturantCards
Footer
  -Copyright
  -Links
  -Address
  -Contact
*/

=> Two types of Export/Import
1) Default Export/Import
  export default comp;
  import comp from "path";

2) Named Export/Import
  export const comp;
  import {comp} from "path";

=> two types of routing
 - client side routing
 - server side routing

=> in react life cycle:-
  first const is load than render is load than react updates the dom once it updated after this comp did mount is load that'swhy in class based comp API call is in comp did mount just like useEffect in fuctional based comp.
 
=> In class based component if multiple child in parent than life cycle follows like that batches render phase and commit phase (this batches is done bcz dom manipulation or updation is costly task).
  - parent const
  - parent render
    - 1st child const
    - 1st child render
    - 2nd child const
    - 2nd child render
    - 1st child comp did mount
    - 2ns child comp did mount
  - parent comp did mount 