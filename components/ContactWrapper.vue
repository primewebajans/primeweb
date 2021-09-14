<template>
    <section class="contact-section-page section-ptb-150 pt-30">
        <div class="container">
            <div class="contact-form-card">
                <div class="row mtn-35">
                    <div class="col-lg-6 mt-35">
                        <div class="section-title">
                            <h3 class="title">Temasta Kalın.</h3>
                            <span class="comment-hr mb-0"></span>
                        </div>
                        <!-- contact media -->
                        <div class="contact-media contact-media-list">
                            <div class="icon">
                                <span class="icofont-send-mail"></span>
                            </div>
                            <div class="content">
                                <span class="text">Email:</span>
                                <a href="mailto:demo@gmail.com" class="number">info@primewebajans.com</a>
                            </div>
                        </div>
                        <!-- contact media end -->
                        <!-- contact media -->
                        <div class="contact-media contact-media-list mt-xl-8">
                            <div class="icon">
                                <span class="icofont-chat"></span>
                            </div>
                            <div class="content">
                                <span class="text">Canlı Destek Alın:</span>
                                <a href="javascript:void(0)" onclick="jivo_api.open()" class="btn btn-warning">
                                    Canlı Destek Alın <i class="icofont-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <!-- contact media end -->
                        <!-- contact media -->
                        <div class="contact-media contact-media-list d-none">
                            <div class="icon">
                                <span class="icofont-map-pins"></span>
                            </div>
                            <div class="content">
                                <span class="text">Adres:</span>
                                <h3 class="number">Chilton, Texas(TX, 766)</h3>
                            </div>
                        </div>
                        <!-- contact media end -->
                    </div>
                    <div class="col-lg-6 mt-35">
                        <div class="section-title">
                            <h3 class="title">İletişime Geçin</h3>
                            <span class="comment-hr mb-0"></span>
                        </div>

                        <div class="comment-form pt-xl-8">
                            <form class="row gx-4" action="https://mailthis.to/info@primewebajans.com" method="POST">
                                <div class="col-12 col-sm-6">
                                    <input class="form-control" placeholder="İsim - Soyisim" type="text" name="name" />
                                </div>
                                <div class="col-12 col-sm-6">
                                    <input class="form-control" placeholder="E-mail" type="text" name="email" />
                                </div>
                                <div class="col-12">
                                    <input class="form-control" placeholder="Konu" type="text" name="subject" />
                                </div>
                                <div class="col-12">
                                    <textarea placeholder="Mesajınız" class="form-control textarea-control" name="message" cols="30" rows="10"></textarea>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-warning">
                                        Mesajı İlet
                                        <i class="icofont-rounded-double-right"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-12 mt-35 d-none">
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {

    };
</script>
