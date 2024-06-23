<script>
    import logo from "../assets/logo.svg";
    import LandingImage from "../assets/LandingImage.png";
    import Wave from "../assets/Wave.svg";
</script>

<div class="bg-center py-12 bg-cover flex justify-center relative group">
    <div class="BackgroundContainer absolute bottom-0 w-full -z-10">
        <img src={Wave} class="w-full" alt="">
        <div class="w-full h-[12rem] lg:h-[22rem] bg-darkBlue"></div>
    </div>
    <img src={LandingImage} alt="" class="z-10 w-3/4 lg:w-1/2">
</div>