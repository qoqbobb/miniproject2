
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
  <img src="https://user-images.githubusercontent.com/19407579/69789626-44b36c80-1204-11ea-94ac-d53cf39954ff.gif">
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
  <img src="https://user-images.githubusercontent.com/19407579/69789626-44b36c80-1204-11ea-94ac-d53cf39954ff.gif">
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
  <img src="https://user-images.githubusercontent.com/19407579/69789626-44b36c80-1204-11ea-94ac-d53cf39954ff.gif">
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
  <img src="https://user-images.githubusercontent.com/19407579/69789626-44b36c80-1204-11ea-94ac-d53cf39954ff.gif">
</div>
<br>



 

------------------------------------------------------------------------------------------------------------------------------------------

# 스프링부트와 리액트로 진행하며 느낀점
- jsp model2 mvc에 비해 의존성 주입을 활용한 어노테이션으로 객체 자동 생성이 편하다.
- jsp model2 mvc에서 요청한 URL을 잘라서 String 변수command 를 통해  요청을 해결하는 것보다 @requestmapping 혹은
@postmapping, @getmapping 한방으로 끝나는 요청 분기 나누는게 편하다.
- jsp model2 mvc의 preparedStatment 에 비해 월등히 편한 mybatis
- junit의 단위테스트의 편리함. 꼭 실행화면에서 안해도 된다. was를 사용하지 않아도 되서 실행시간을 엄청 절감 할 수 있다.
일반 main메소드에서 테스트를 한다고하면 해당 클래스를 만들고 메소드를 호출해야하는 번거로움 있다.
그냥 junit 테스트코드에서 단위테스트하면 여러 메소드가 바로 이루어지고 junit탭에 정리가 되어서 나와 에러가 뜨면 바로바로 잡을수 있어서 좋았음.
기능별로 하나의 단위테스트 모듈을 만들어 두면 두고두고 써먹을 수 있을 것 같다.
- 권한에 따른 흐름제어를 내가 1부터 코딩 하는것이 아니고 spring security를 통해 쉽게 제어할 수 있다.
- lombok을 통해 setter, getter, tostring 작성을 생략 가능해 편하다.


------------------------------------------------------------------------------------------------------------------------------------------
