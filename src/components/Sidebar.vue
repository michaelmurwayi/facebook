<template>
    <div class="container-fluid row">
        <div class="col-md-3" style="border-right: 1px solid grey;">
            <div class="col-md-12">
            <div class="col-md-4 mt-5 ">
                <div class="avatar-upload">
                    <div class="avatar-edit">
                        <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                        <label for="imageUpload"></label>
                    </div>
                    <div class="avatar-preview">
                        <div id="imagePreview" style="background-image: url(require('../assets/place.jpeg'));">
                        </div>
                    </div>
                </div>
                <ul class="mt-3 row">
                    <div class="col-md-3 mt-2">
                    <i class="fas fa-camera-retro col-md-12"></i>
                    </div>
                    <div class="col-md-6 mt-2">
                        <li>Wall</li>
                    </div>
                    
                    <div class="col-md-6 mt-2">
                    <i class="fas fa-camera-retro col-md-12"></i>
                    </div>
                    <div class="col-md-6 mt-2">
                        <li>Info</li>
                    </div>
                    
                    <div class="col-md-6 mt-2">
                    <i class="fas fa-camera-retro col-md-12"></i>
                    </div>
                    <div class="col-md-6 mt-2">
                        <li>Photos</li>
                    </div>
                    <div class="col-md-6 mt-2">
                    <i class="fas fa-camera-retro col-md-12"></i>
                    </div>
                    <div class="col-md-6 mt-2">
                        <li>Friends</li>
                    </div>
                    
                    
                </ul>
            </div>
            </div>
        <hr>
        <div class="col-md-12 text-left row" style="width:100%;">
            <div class="col-md-12" style="color:blue;">
                <p class="">In a relationship with</p>
            </div>
            
            <div class="col-md-6 mt-2 ">
                <img :src="require('../assets/jessica.jpeg')" class="friends" alt="profile picture">
            </div>
            <div class="col-md-6 mt-2">
                    <h5>Jessica Sanchez</h5>
                    <p>Dreamville</p>
            </div>
        </div>
        <div class="col-md-12 mt-4 text-left row" style="width:100%">
            <div class="col-md-12">
            <p style="color:blue;">Roommates(3)</p>
            </div>
            <div class="col-md-6 mt-2 ">
                <img :src="require('../assets/bird.jpeg')" class="friends" alt="profile picture">
            </div>
            <div class="col-md-6 mt-2">
                    <h5>Bird Person</h5>
                    <p>Nestville</p>
            </div>
            <div class="col-md-6 mt-2 ">
                <img :src="require('../assets/morty.jpeg')" class="friends" alt="profile picture">
            </div>
            <div class="col-md-6 mt-2">
                    <h5>Morty Sanchez</h5>
                    <p>Harry Harperson</p>
            </div>
            <div class="col-md-6 mt-2 ">
                <img :src="require('../assets/jessica.jpeg')" class="friends" alt="profile picture">
            </div>
            <div class="col-md-6 mt-2">
                    <h5>Mr Mr </h5>
                    <p>Middle Of Nowhere</p>
            </div>

        </div>
    </div>
    <div class="col-md-6">
        <div class="intro mt-4">
            <h2>Rick Sanchez</h2>
            <p>Rick Sanchez from Earth Dimension C-137 is the father of Beth Smith, and the grandfather of Morty Smith and Summer Smith.He frequently travels on adventures through space, visiting other planets and dimensions with his grandson Morty. 70 years old.</p>
            </div>
    <div class="row">
        <div class="frame col-md-2">
        <img :src="require('../assets/place.jpeg')" alt="Club Card"  style="width:130%; margin-left:5px; height:150px">
        </div>
        <br>
        <!-- Alignment of vertically oversized image -->
        <div class="frame col-md-2">
            <img :src="require('../assets/place.jpeg')" alt="Flying Kites"  style="width:130%; margin-left:5px; height:150px">
        </div>
        <br>
        <!-- Alignment of horizontally oversized image -->
        <div class="frame col-md-2">
            <img :src="require('../assets/place.jpeg')" alt="Cloudy Sky" style="width:130%; margin-left: 5px; height:150px">
        </div>
        <div class="frame col-md-2">
            <img :src="require('../assets/place.jpeg')" alt="Cloudy Sky"  style="width:130%; margin-left: 5px; height:150px">
        </div>
        <div class="frame col-md-2">
            <img :src="require('../assets/place.jpeg')" alt="Cloudy Sky"  style="width:130%; margin-left: 5px; height:150px">
        </div> 
    </div> 
    
    <div class="mt-4 col-md-9" style="font-weight:700;">
        <div class="navbar navbar-sm" style=" height:40px;">
        <p class="mt-2">Education and Work</p>
        </div>
            <div class="col-md-12 mt-4 text-left row" style="width:100%">
                
                <div class="col-md-6 mt-2">
                        <h5>Employment</h5>
                </div>
                <div class="col-md-6  row mt-2" style="">
                    <img :src="require('../assets/logos.png')" class="friends col-md-6" alt="profile picture">
                    <p class="col-md-6"> Fineteklabs Ltd  Worked as a junior Developer</p>
                </div>
                
                <div class="col-md-6 mt-2">
                        <h5>Collegue</h5>
                </div>
                <div class="col-md-6 row mt-2 ">
                    <img :src="require('../assets/school-logo.jpeg')" class="friends col-md-6" alt="profile picture">
                    <p class="col-md-6">Harry Harperson State Collegue</p>
                </div>
                

                <div class="col-md-6 mt-2">
                        <h5>High School </h5>
                       
                </div>
                <div class="col-md-6 row mt-2 ">
                    <img :src="require('../assets/school-logo.jpeg')" class="friends col-md-6" alt="profile picture">
                    <p class="col-md-6">Harry Harperson High School (H.H.H.S)</p>
                </div>

        </div>

    </div>
    <div class=" col-md-10  mt-5 row" style="font-weight:700;">
        <div class="navbar navbar-sm col-md-12" style="height:50px;">
        <p class="mt-2">Philosophy</p>
        </div>
        <div class="col-md-2 mt-3">
            <p>My Favourite Quote</p>
        </div>
        <div class="philosophy col-md-9 mt-2">
            <p> It is not about the size of the man in the war but the size of the war in the man </p>
        </div>
        </div>
    </div>
    

    <div class="col-md-3">
            <div class="col-md-12">
                <div class="col-md-12 mt-5 ">
                    <div class="navbar navbar-sm col-md-12" style="height:30px; width:100%;">
                    <p class="mt-1">You And Morty</p>
                    <p> <a href="">See Friendship</a></p>
                    </div>
                </div>
            </div>
        <div class="row mt-0">
        <div class="frame col-md-5 ">
        <img :src="require('../assets/place.jpeg')" alt="Club Card"  style="width:130%; margin-left:5px; height:150px">
        </div>
        <!-- Alignment of vertically oversized image -->
        <div class="frame col-md-5">
            <img :src="require('../assets/place.jpeg')" alt="Flying Kites"  style="width:130%; margin-left:5px; height:150px">
        </div>
        <br> 
            <div class="navbar navbar-sm col-md-10 ml-4" style="height:30px; width:100%;">
                    <p class="mt-1">Pokes</p>
                    
            </div>
            <div class="mt-3 ml-4 row">
                <div class="col-md-3"><i class="fas fa-caret-right"></i></div>
                <div class="col-md-9">
                <p> Squanchy just poked you.Poke back? </p>
                </div>
            </div>
            </div>
        </div>


        <!-- <div class="col-md-12 text-left row" style="width:100%;">
            <div class="col-md-12" style="color:blue;">
                <p class="">In a relationship with</p>
            </div>
            
            <div class="col-md-6 mt-2 ">
                <img :src="require('../assets/jessica.jpeg')" class="friends" alt="profile picture">
            </div>
            <div class="col-md-6 mt-2">
                    <h5>Jessica Sanchez</h5>
                    <p>Dreamville</p>
            </div>
        </div>
        <div class="col-md-12 mt-4 text-left row" style="width:100%">
            <div class="col-md-12">
            <p style="color:blue;">Roommates(3)</p>
            </div>
            <div class="col-md-6 mt-2 ">
                <img :src="require('../assets/bird.jpeg')" class="friends" alt="profile picture">
            </div>
            <div class="col-md-6 mt-2">
                    <h5>Bird Person</h5>
                    <p>Nestville</p>
            </div>
            <div class="col-md-6 mt-2 ">
                <img :src="require('../assets/morty.jpeg')" class="friends" alt="profile picture">
            </div>
            <div class="col-md-6 mt-2">
                    <h5>Morty Sanchez</h5>
                    <p>Harry Harperson</p>
            </div>
            <div class="col-md-6 mt-2 ">
                <img :src="require('../assets/jessica.jpeg')" class="friends" alt="profile picture">
            </div>
            <div class="col-md-6 mt-2">
                    <h5>Mr Mr </h5>
                    <p>Middle Of Nowhere</p>
            </div> -->

    </div>

</template>
<script>
export default {
    name: 'Sidebar'
}
</script>
<style scoped>
/* .container-fluid{
    background-color: grey;
} */
ul{
    list-style-type: none;
}
.profile-pic{
    height: 200px;
    width: 250% ;
    position: relative;
    left: 0;
}
.friends{
    height: 100px;
    width: 80px ;
    position: relative;
    left: 0;
}
h5{
    font-size: 15px;
    font-weight: 800;
}
.intro{
    position: relative;
    top: 15px;
    left: 0;
    text-align: left;
}
h2{
    font-weight: 800;
}
.frame{
    margin: 10px;
    width: 100%;
}

.avatar-upload {
    position: relative;
    max-width: 205px;
    margin: 50px auto;
}
.avatar-edit {
    position: absolute;
    right: 12px;
    z-index: 1;
    top: 10px;
}
input {
    display: none;
    }v>
label {
        display: inline-block;
        width: 34px;
        height: 34px;
        margin-bottom: 0;
        border-radius: 100%;
        background: #FFFFFF;
        border: 1px solid transparent;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
        cursor: pointer;
        font-weight: normal;
        transition: all .2s ease-in-out;

}
.avatar-preview {
    width: 192px;
    height: 192px;
    position: relative;
    border-radius: 100%;
    border: 6px solid #F8F8F8;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
    } 
.avatar-edit {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    }
    
</style>