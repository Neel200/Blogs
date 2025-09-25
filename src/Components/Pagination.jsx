import React, { useContext } from "react";
import{ AppContext } from '../Context/AppContext';
export default function Pagination(){
    const {page,handlePageChange,totalPages}=useContext(AppContext);
    return(
        <div className="pagination-container">
            <div className="pagination-content">
                <div className="pagination-buttons">
                    {page>1 &&
                        <button className="pagination-btn"
                        onClick={()=>handlePageChange(page-1)}>
                            Previous
                        </button>
                    }
                    {page<totalPages &&
                        <button className="pagination-btn"
                        onClick={()=>handlePageChange(page+1)}>
                            Next
                        </button>
                    }
                    <p>
                        Page {page} of {totalPages}
                    </p>
                </div>
            </div>
        </div>
    );
};