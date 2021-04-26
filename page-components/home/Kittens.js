const Kittens = () => {
    return (
        <div className="gallery_main layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="about_taital"><strong>Kittens</strong></h1>
                    </div>
                </div>
                <div className="gallery_images">
                    <div className="row">
                        <div className="col-sm-7">
                            <div className="gallery_blog">
                                <img src="/images/Kittens/first_1.jpg"
                                     style={{maxWidth: '100%', height: 'auto', width: 'auto'}}/>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="gallery_blog">
                                <img src="/images/Kittens/second_1.jpg"
                                     style={{maxWidth: '100%', height: 'auto', width: '100%'}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gallery_images">
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="gallery_blog">
                                <img src="/images/Kittens/second_2.jpg" style={{maxWidth: '100%', width: 'auto'}}/>
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <div className="gallery_blog">
                                <img src="/images/Kittens/third_1.jpg"
                                     style={{maxWidth: '100%', height: '600px', width: 'auto'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kittens;