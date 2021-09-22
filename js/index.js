function setREVStartSize(e){									
    try{ e.c=jQuery(e.c);var i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
        if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})					
    }catch(d){console.log("Failure at Presize of Slider:"+d)}						
};
if (setREVStartSize!==undefined) {
    setREVStartSize(
    {c: '#rev_slider_1_1', responsiveLevels: [1240,1240,778,480], gridwidth: [1980,1980,778,700], gridheight: [780,780,960,1020], sliderLayout: 'fullwidth'});
}
            
var revapi1,
    tpj;	
(function() {			
    if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded",onLoad); else onLoad();	
    function onLoad() {				
        if (tpj===undefined) { tpj = jQuery; if("off" == "on") tpj.noConflict();}
    if(tpj("#rev_slider_1_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_1_1");
    }else{
        revapi1 = tpj("#rev_slider_1_1").show().revolution({
            sliderType:"standard",
            jsFileLocation:"https://arcticsalinity.argans.co.uk/wp-content/plugins/revslider/public/assets/js/",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                            mouseScrollReverse:"default",
                onHoverStop:"off",
                touch:{
                    touchenabled:"on",
                    touchOnDesktop:"off",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                arrows: {
                    style:"uranus",
                    enable:true,
                    hide_onmobile:false,
                    hide_onleave:false,
                    tmp:'',
                    left: {
                        h_align:"left",
                        v_align:"center",
                        h_offset:50,
                        v_offset:0
                    },
                    right: {
                        h_align:"right",
                        v_align:"center",
                        h_offset:50,
                        v_offset:0
                    }
                }
            },
            responsiveLevels:[1240,1240,778,480],
            visibilityLevels:[1240,1240,778,480],
            gridwidth:[1980,1980,778,700],
            gridheight:[780,780,960,1020],
            lazyType:"none",
            parallax: {
                type:"mouse",
                origo:"enterpoint",
                speed:200,
                speedbg:0,
                speedls:0,
                levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,20],
            },
            shadow:0,
            spinner:"off",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }; /* END OF revapi call */
    
    }; /* END OF ON LOAD FUNCTION */
}()); /* END OF WRAPPING FUNCTION */


function createForm(action_s, fields){
    const target = 'gf1';

    return new Promise(function(resolve, reject) {
        const $form = document.createElement('form');
        $form.setAttribute('action', action_s);
        $form.setAttribute('method', 'POST');
        $form.setAttribute('target', target);

        Object.keys(fields || {}).forEach(fieldName => {
            const $input = document.createElement('input');
            $input.setAttribute('type', 'hidden');
            $input.setAttribute('name', fieldName);
            $input.setAttribute('value', fields[fieldName]);
            $form.appendChild($input);
        });

        const $iframe = document.createElement('iframe');
        $iframe.setAttribute('id', target);
        $iframe.setAttribute('name', target);
        $iframe.setAttribute('title', target);
        $iframe.onerror = reject;
        $iframe.onload = resolve;
        document.body.appendChild($iframe);
        document.body.appendChild($form);
        $form.submit();
    })
}

function onSubmit(event) {
    event.preventDefault();

    const {
        email: $email,
        message: $message,
        name: $name,
        subject: $subject
    } = event.target?.elements;

    if (typeof($message) === 'undefined' || !$message.value) {
        throw 'Can not find the message input';
    }

    const message = `Name: ${$name.value}<br/>Email: ${$email.value}<br/>Subject: ${$subject.value}<br/>Message: ${$message.value}<br/>`;
    const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdKA6vlDNzOv1iXRrK674pEwEHa0jmn3DRBsNLZb8W6HgW3OQ/formResponse';
    const fields = {
        'entry.546115170': 'SO Fresh: new message', 
        'entry.861590665': message,
        'entry.1470631581': 'rcatany@argans.co.uk',
       };

    createForm(url, fields).then((e) => {
        alert('Thank you for your message!');
        event.target.reset();
    }).catch((e) => {
        console.log('Error');
        console.dir(e);
    });
}
