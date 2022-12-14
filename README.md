
# portfolio - 2차 팀 미니 프로젝트(회사 커뮤니티)




# 개발목적

- SpringBoot로 Backend구현 / React로 Frontend구현
- RestApi를 이용하여 서버(Springboot)와 클라이언트(React)를연결

------------------------------------------------------------------------------------------------------------------------------------------

# 개발환경
>front-end
- JavaScript
- React

>back-end
- Java
- springBoot
- JPA
- oracle DB
- lombok 
- tomcat 





------------------------------------------------------------------------------------------------------------------------------------------

# DB 모델링
<div>
  <img src="https://user-images.githubusercontent.com/105841315/190939702-0500c946-d331-4a35-9071-2d9eaf2d1baa.png">
</div>




------------------------------------------------------------------------------------------------------------------------------------------

# 기능별 주요 로직 SpringBoot 
>  자유게시판 리스트&수정 
- 리스트&수정<br>
### register.jsp: 자유게시판 FreeRepository
~~~java
@Repository
public interface FreeRepojitory extends JpaRepository<Free, Long>{

	

	
}

~~~

### FreeController : Restapi 형식으로 코딩
 ~~~java
 @RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class FreeController {

	@Autowired
	private FreeService freeService;
	
	  @RequestMapping(value = "/findAll", method = RequestMethod.GET) 
	  public List<Free> findAll(){ 
		  return freeService.findAll(); 
		  }
	  @PutMapping("/update/{id}")//글수정
		public ResponseEntity<?> update(@PathVariable Long id,@RequestBody Free free){
			freeService.update(id, free);
			return new ResponseEntity<>(freeService.update(id, free),HttpStatus.OK);
		}
 ~~~
 
### Restapi 리스트 테스트 (Postman)
<div>
  <img src="https://user-images.githubusercontent.com/105841315/190950283-05e149f6-201c-4b7b-8208-dcfa0bd20096.gif">
</div>




### Restapi 수정 테스트 (Postman)
<div>
  <img src="https://user-images.githubusercontent.com/105841315/191146739-95cd4417-5fe7-405b-8b4a-9e0cdec1c357.gif">
</div>
<br>



# 기능별 주요 로직 React 
>  자유게시판 리스트&수정 /페이징 
- 리스트&수정<br>
### boardpagination.js: 리스트 구현 페이지
~~~JavaScript
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
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th width="10%">no</th>
          <th width="55%">title</th>
          <th width="15%">writer</th>
          <th width="20%">date</th>
        </tr>
      </thead>
      <tbody>
        {currentItems.map(post =>{
            return(
        <tr key={post.articleId}>
          <td>{post.articleId}</td>
          <td>{post.title}</td>
          <td>{post.writer}</td>
          <td>{post.regdate}</td>
        </tr>
            )
        })}
        </tbody>
    </Table>
~~~

### 리스트 구현 
<div>
  <img src="https://user-images.githubusercontent.com/105841315/191147715-613da7e6-3e63-4eca-aae4-e813fde1e1af.png">
</div>
<br>


### update.js: 수정 페이지
~~~JavaScript
const Update = (props) =>{
    const id = props.match.params.id;

    const[free, setFree] = useState({
        title:'',
        writer:'',
        content:'',
    });

    useEffect(() =>{
        fetch('http://localhost:9008/view/'+id)
        .then((res) => res.json())
        .then((res) =>{
            setFree(res);
        });
    }, []);

    const changeValue = (e) =>{
        setFree({
            ...free,
            [e.target.name]: e.target.value,
        });
    };

    const submitFree = (e) =>{
        e.preventDefault();

        fetch('http://localhost:9008/update/'+id,{
            method:'PUT',
            headers:{
                'Content-Type' : 'application/json; charset=utf-8',
            },
            body: JSON.stringify(free),
        })
        .then((res) => {
            if(res.status === 200){
                alert('글이 수정되었습니다.')
                return res.json();
            }else{
                return null;
            }
        })
        .then((res)=>{
            if(res !== null){
                props.history.push('/view/'+id);
            }else{
                alert('글 수정에 실패하였습니다.')
            }
        });

    };
~~~


### 글 수정
<div>
  <img src="https://user-images.githubusercontent.com/105841315/191148843-167ebe6a-e688-4dab-be4d-8438bf874c72.gif">
</div>
<br>


### boardpagination.js: rreact pagination 사용한 페이징 구현
~~~JavaScript
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
~~~

### 페이징 구현 
<div>
  <img src="https://user-images.githubusercontent.com/105841315/191148441-8426f174-0886-41d7-a006-734cb0944f63.gif">
</div>
<br>




 

------------------------------------------------------------------------------------------------------------------------------------------

# 스프링부트와 리액트로 진행하며 느낀점
- RestApi를 통해 url을 사용해 데이터를 전달해봤는데 체계적이고 편리해서 신기했다.
- 스프링부트 JPA를 사용해 더욱 쉽게 DB의 테이블과 연결 또는 생성하고 쿼리문을 작성하지 않아도 되서 편리했다.
- 스프링에서 사용하는 설정파일&라이브러리를 따로 추가하지 않아도 되서 스프링부트의 편리성을 느꼈다
- 리액트에서 컴포넌트를 사용해 코드의 재사용을 용이하게 만들어 주는 것을 느꼈다
- 

------------------------------------------------------------------------------------------------------------------------------------------
