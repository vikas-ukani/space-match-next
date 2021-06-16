function viewEnquiry(enquiryId)
{
  $.ajax({
    url: api_url+"enquiry/"+enquiryId,
    method: 'GET',
    headers: {
      'Authorization': 'Bearer '+ token,
      "Accept": "application/json",
    },
    beforeSend: function() {
      $('.loader').show().css('opacity','0.4');
    },
    success: function (data) {
        $(".loader").hide();


      //  $("#entity_individually").hide();
        $("#entity_behalf").hide();

        var enquiry_detail = data.data;

        $("#modalEnquirydetail #enquiry_created_date").html('');
        $("#modalEnquirydetail #enquiry_address").html('');
        $("#modalEnquirydetail #enquiry_property_name").html('');
        $("#modalEnquirydetail #enquiry_property_size").html('');
        $("#modalEnquirydetail #enquiry_price").html('');
        $("#modalEnquirydetail #enquiry_days").html('');
        $("#modalEnquirydetail #enquiry_start_date").html('');
        $("#modalEnquirydetail #enquiry_end_date").html('');
        $("#modalEnquirydetail #entity_name").html('');
        $("#modalEnquirydetail #entity_vat").html('');
        $("#modalEnquirydetail #website_url").html('');
        $("#modalEnquirydetail #space_used_for").html('');
        $("#modalEnquirydetail #project_name").html('');
        $("#modalEnquirydetail #project_desc").html('');
        $("#modalEnquirydetail #space_look_like").html('');
        $("#modalEnquirydetail #enquiry_iamges").html('');
        $("#modalEnquirydetail #property_images").html('');
        $("#modalEnquirydetail #entity_individually").html('');
        $("#modalEnquirydetail #view_tenant_name").html('');

        $("#modalEnquirydetail #landlord_name").html('');
        $("#modalEnquirydetail #landlord_mobile").html('');
        $("#modalEnquirydetail #landlord_email").html('');

        $("#modalEnquirydetail #landlord_name").html(enquiry_detail['property']['space_owner_contact_person']);
        $("#modalEnquirydetail #landlord_mobile").html(enquiry_detail['property']['space_owner_contact_person_mobile']);
        $("#modalEnquirydetail #landlord_email").html(enquiry_detail['property']['space_owner_contact_person_email']);


        $("#modalEnquirydetail #enquiry_property_name").removeAttr('href');

        $("#modalEnquirydetail #view_tenant_name").html(enquiry_detail['tenant_detail']['firstname']+' '+enquiry_detail['tenant_detail']['surname']);

        if(enquiry_detail['bookingentity'] == 0)
            $("#entity_individually").html("No");
        if(enquiry_detail['bookingentity'] == 1)
            $("#entity_individually").html("Yes");


        if(enquiry_detail['bookingentity'] == 1)
        {
            $("#entity_behalf").show();
            $("#modalEnquirydetail #entity_name").html(enquiry_detail['entityname']);
            $("#modalEnquirydetail #entity_vat").html(enquiry_detail['vatnumber']);


            if(enquiry_detail['dontwebsite'] == 1)
                $("#website_detail").hide();
            if(enquiry_detail['dontwebsite'] == 0)
            {
                $("#website_detail").show();
                $("#website_url").html(enquiry_detail['website']);
            }
        }

        var postal_code = '';
        if(enquiry_detail['property']['address_postal_code'] != '' && enquiry_detail['property']['address_postal_code'] != null)
          postal_code = ","+enquiry_detail['property']['address_postal_code'];

        $("#modalEnquirydetail #enquiry_created_date").html(enquiry_detail.created_date);
        $("#modalEnquirydetail #enquiry_property_name").html(enquiry_detail['property']['name']);

        $("#modalEnquirydetail #enquiry_property_name").attr('href',base_url+'/space/'+enquiry_detail['property']['slug']);

        $("#modalEnquirydetail #enquiry_address").html(enquiry_detail['property']['full_address']+postal_code);
        $("#modalEnquirydetail #enquiry_property_size").html(enquiry_detail['property']['property_size']+' '+enquiry_detail['property']['property_size_type']);
        $("#modalEnquirydetail #enquiry_price").html(enquiry_detail['property']['property_size']+' '+enquiry_detail['property']['property_size_type']);
        $("#modalEnquirydetail #enquiry_price").html(enquiry_detail['property_rate_details']['tenant_amount_with_vat']);
        $("#modalEnquirydetail #enquiry_days").html(enquiry_detail['property_rate_details']['total_days']);

        $("#modalEnquirydetail #enquiry_start_date").html(enquiry_detail['start_date']);
        $("#modalEnquirydetail #enquiry_end_date").html(enquiry_detail['end_date']);
        $("#modalEnquirydetail #project_name").html(enquiry_detail['project_name']);
        $("#modalEnquirydetail #project_desc").html( $.parseHTML(enquiry_detail['project_desc']));
        $("#modalEnquirydetail #space_look_like").html($.parseHTML(enquiry_detail['talkspaceowner']));
        var space_used_for = enquiry_detail['spaceUsedFor'];
        for(sp=0;sp<space_used_for.length;sp++)
        {
            $("#space_used_for").append('<a href="javascript:void(0)" class="text-grey text-center"> <span><i class="icon '+space_used_for[sp]['space_used_for_image_class']+' d-block mb-3"></i></span>'+space_used_for[sp]['title']+'</a>');
        }

        var property_images = enquiry_detail['property']['spacePropertyImages'];
        for(pi=0;pi<property_images.length;pi++)
        {
           var image_path = property_images[pi]['property_image_path'];
           var image_name = property_images[pi]['property_image_name'];
           var image_details = image_path.split(image_name);
           var new_image_path = image_details[0]+'medium_'+image_name;

           var  image_type = property_images[pi]['property_image_type'];
           if(image_type == 1)
           {
                var image_name = property_images[pi]['property_image_path'];
                if(image_name.includes("_collage.jpg") == true)
                    $("#modalEnquirydetail #property_images").append('<div class="space-image-item"><img src="'+property_images[pi]['property_image_path']+'" class="img-fluid" alt="'+property_images[pi]['property_image_name']+'"/></div>');
           }
           if(image_type == 2)
           {
                $("#modalEnquirydetail #property_images").append('<div class="space-image-item"><img src="'+new_image_path+'" class="img-fluid" alt="'+property_images[pi]['property_image_name']+'"/></div>');
           }
        }


        var enquiry_images = enquiry_detail['spaceEnquiryImages'];

        for(si=0;si<enquiry_images.length;si++)
        {
            $("#enquiry_iamges").append('<li class="col-sm-4 col-6"><img src="'+enquiry_images[si]['enquiry_image_path']+'" class="img-fluid rounded w-100"/></li>');
        }
        $('#modalEnquirydetail').modal('show');

        setTimeout(function() {

          var $modalRentalSlider = $('#modalEnquirydetail .spaceinnerRental-carousel');

          if($modalRentalSlider.hasClass('slick-initialized')) {
            $modalRentalSlider.unslick();
          }

          $modalRentalSlider.slick({
            autoplay: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            adaptiveHeight: true,
            prevArrow: "<div class='slick-arrow-parent right'><i class='icon icon-small-chevron-right'></i></div>",
            nextArrow: "<div class='slick-arrow-parent left'><i class='icon icon-small-chevron-left'></i></div>",
          });

          $modalRentalSlider.slick("setPosition", 0);

          $(".modal").on("hidden.bs.modal", function() {
            $(".slick-slider").slick('destroy').html("");
          });

        },200);
    },
    error: function (data) {
      $(".loader").hide();
    }
});
}
