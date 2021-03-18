const Kittens = () => {
    return (
        <div className="gallery_main layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="about_taital"><strong>Kittens</strong></h1>
                        <p className="sed_text">Introduction to kittens with a few images and link to view all</p>
                    </div>
                </div>
                <div className="gallery_images">
                    <div className="row">
                        <div className="col-sm-7">
                            <div className="gallery_blog">
                                <img src="images/gallery-img1.jpg"
                                     style={{maxWidth: '100%', height: '300px', width: '100%'}}/>
                                <div className="overlay">
                                    <div className="text"><strong>PuppyDogPetAnimal</strong></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="gallery_blog">
                                <img src="images/gallery-img2.jpg"
                                     style={{maxWidth: '100%', height: '300px', width: '100%'}}/>
                                <div className="overlay">
                                    <div className="text"><strong>PuppyDogPetAnimal</strong></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gallery_images">
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="gallery_blog">
                                <img src="images/gallery-img3.jpg" style={{maxWidth: '100%', width: '100%'}}/>
                                <div className="overlay">
                                    <div className="text"><strong>PuppyDogPetAnimal</strong></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <div className="gallery_blog">
                                <img src="images/gallery-img4.jpg"
                                     style={{maxWidth: '100%', height: '300px', width: '100%'}}/>
                                <div className="overlay">
                                    <div className="text"><strong>PuppyDogPetAnimal</strong></div>
                                </div>
                            </div>
                            <div className="gallery_blog">
                                <img src="images/gallery-img5.jpg"
                                     style={{maxWidth: '100%', height: '297px', width: '100%'}}/>
                                <div className="overlay">
                                    <div className="text"><strong>PuppyDogPetAnimal</strong></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kittens;