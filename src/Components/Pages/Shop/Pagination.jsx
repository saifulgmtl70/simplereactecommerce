
const Pagination = ({productsPerPage, totalProducts, paginate, activerPage}) => {

   const pageNumbers = [];
   for(let i =1; i<= Math.ceil(totalProducts / productsPerPage); i++ ){
    pageNumbers.push(i);
   }


    return (

        <ul className="default-pagination lab-ul">

            <li>
                <a href="#" onClick={() =>{
                    if(activerPage < pageNumbers.length){
                        paginate(activerPage - 1);
                    }
                }}>
                    <i className="icofont-rounded-left"></i>
                </a>
            </li>

            {
                pageNumbers.map((number) =>(
                    <li key={number} >
                        <a href="#" onClick={() => paginate(number)} className={`page-item   ${number === activerPage ? " bg-warning text-white  " : "bg-transparent text-dark "}`}>{number}</a>
                    </li>
                ))
            }
             <li>
                <a href="#" onClick={() =>{
                    if(activerPage < pageNumbers.length){
                        paginate(activerPage + 1)
                    }
                }}>
                    <i className="icofont-rounded-right"></i>
                </a>
            </li>
        </ul>
    );
};

export default Pagination;