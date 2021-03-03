import React, { Component } from 'react';
import NewsItem from './NewsItem';
import dl from './dulieu.json'

class News extends Component {
    
    render() {
      // var so = [1,2,3,4,5,6,9];
      // var so2 = so.map((value, key) => value*3 + ' va chi so la: ' + key );
      // console.log(so2);
      // console.log(dl);
      
        return (
            <div>
                <div>
                <header className="masthead tintuc">
                  <div className="container h-100">
                    <div className="row h-100">
                      <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto ">
                          <h1 className="mb-1 text-center">Trang danh sách tin </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
                {/* begin tintuc */}
                <div className="container mt-5">
                  <div className="row">
                    
                    {dl.map((value, key) => (
                       <NewsItem key={key} 
                       tinId={value.id}
                       anh={value.anh} 
                       tieuDe={value.tieuDe} 
                       trichDan={value.trichDan}/>
                    ))}



                    {/* <NewsItem anh="https://photo-zmp3.zadn.vn/banner/c/4/7/6/c476e5cdaf0cd83c63f9cbed91118ea6.jpg" tieuDe="Gặp Nhưng Không Ở Lại" trichDan="Coteccons không công bố giá trị hợp đồng ký mới gần đây khiến VCSC lo ngại công ty chịu tác động từ thị trường và quá trình tái cơ cấu."/>
                    
                    <NewsItem anh="https://photo-zmp3.zadn.vn/banner/c/4/7/6/c476e5cdaf0cd83c63f9cbed91118ea6.jpg" tieuDe="Gặp Nhưng Không Ở Lại" trichDan="Coteccons không công bố giá trị hợp đồng ký mới gần đây khiến VCSC lo ngại công ty chịu tác động từ thị trường và quá trình tái cơ cấu."/>
                    
                    <NewsItem anh="https://photo-zmp3.zadn.vn/banner/c/4/7/6/c476e5cdaf0cd83c63f9cbed91118ea6.jpg" tieuDe="Gặp Nhưng Không Ở Lại" trichDan="Coteccons không công bố giá trị hợp đồng ký mới gần đây khiến VCSC lo ngại công ty chịu tác động từ thị trường và quá trình tái cơ cấu."/>
                    
                    <NewsItem anh="https://photo-zmp3.zadn.vn/banner/c/4/7/6/c476e5cdaf0cd83c63f9cbed91118ea6.jpg" tieuDe="Gặp Nhưng Không Ở Lại" trichDan="Coteccons không công bố giá trị hợp đồng ký mới gần đây khiến VCSC lo ngại công ty chịu tác động từ thị trường và quá trình tái cơ cấu."/> */}
                    
                  </div>
                </div>
                {/* end tintuc */}
              </div>

            </div>
        );
    }
}

export default News;