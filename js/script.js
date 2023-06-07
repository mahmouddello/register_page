$(function () {
    const $form = $("#form");
    if ($form.length) {
        $form.validate({
            rules: {
                name: {
                    required: true
                },
                surname: {
                    required: true
                },
                email: {
                    required: true
                },
                password: {
                    required: true,
                },
                password2: {
                    required: true,
                    equalTo: "#password"
                }
            },
            messages: {
                name: {
                    required: "Name is required"
                },
                surname: {
                    required: "Surname is required"
                },
                email: {
                    required: "Email is required"
                },
                password: {
                    required: "Enter your password"
                },
                password2: {
                    required: "Confirm your password",
                    equalTo: "Passwords doesn't match"
                }
            },
        });
    }
});
