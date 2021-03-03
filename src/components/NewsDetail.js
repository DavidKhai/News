import React, { Component } from 'react';
import dl from "./dulieu.json"
import NewsRelated from './NewsRelated';

class NewsDetail extends Component {
    
    render() {
        // var x = 2;
        // var y = "2"
        // y = parseInt(y);
        // console.log(typeof(y));
        // if(x===y){ console.log('bằng nhau');}
        
        // console.log(this.props.match.params.id);
        // console.log(typeof(this.props.match.params.id));

        var dem = 1;

        return (
            
            <div>
                <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto ">
                            <h1 className="mb-1 text-center">Chi tiết tin </h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
                {/* begin chitiet */}
                
                {dl.map((value,key) => {
                    if(value.id === parseInt(this.props.match.params.id)){
                        return (
                            <div className="jumbotron jumbotron-fluid" key={key}>
                                <div className="container">
                                <img src={value.anh} className="img-fluid rong100"  alt="for each" />
                                <h3 className="lead text-center">{value.tieuDe}</h3>
                                <hr className="my-2" />
                                <p>{value.trichDan}</p>
                                <p>{value.noidung}</p>
                                </div>
                            </div>
                        )
                    }
                    return true;
                })}


                <div className="container">
                    <h4 className="card-title text-center">Tin liên quan</h4>
                    <div className="row">
                    <div className="col-12">
                        <div className="card-deck">
                            {
                                
                                dl.map((value,key) => {
                                    if(value.id !== parseInt(this.props.match.params.id)){
                                        if(dem <= 4){ //vì key tăng mãi nên ko đúng với trường hơp này nên sử dụng 1 biến khác là dem.
                                            dem++;
                                            return(
                                                <NewsRelated key={key} 
                                                tinId={value.id} 
                                                anh={value.anh} 
                                                tieuDe={value.tieuDe} 
                                                noiDung={value.noidung}/>
                                            )
                                        }
                                    }
                                    return true;
                                    
                                })
                            }
                            
                        </div>
                    </div>
                    </div>
                </div>
                {/* end chitiet */}
                </div>

            </div>
        );
    }
}

export default NewsDetail;