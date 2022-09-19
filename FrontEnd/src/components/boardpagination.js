import { useEffect,useState } from "react";
//npm install react-paginate --save
import ReactPaginate from "react-paginate";
import '../app1.css'
import '../page.css'
import { Link } from "react-router-dom";
import { Table,TableHead,TableBody,TableRow,TableCell } from "@mui/material";

export default function Images(props){
    const {data} = props;
    const [currentItems, setCurrentItems] = useState([]); 
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
  
    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);
  
    
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
    };
  
    return (
      <> 
        
        <Table>
          <TableHead>
          <TableRow >
          <TableCell width="15%">No</TableCell>
          <TableCell width="40%">Title</TableCell>
          <TableCell width="20%">Writer</TableCell>
          <TableCell width="25%">Date</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
          {currentItems.map(post =>{
            return(
          <TableRow key={post.id}>
          <TableCell>{post.id}</TableCell>
          <TableCell><Link to={'/view/'+post.id}>{post.title}</Link></TableCell>
          <TableCell>{post.writer}</TableCell>
          <TableCell>{post.regdate}</TableCell>
          </TableRow>
            )
            })}
          </TableBody>
        </Table>




        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      </>
    );
}