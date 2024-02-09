<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup Page</title>
    <link rel="stylesheet" href="signupstyles.css">
</head>
<body>
    <div class="container">
        <div class="left-half"></div>
        <div class="right-half">
            <table>
                <tr>
                    <th><label for="name">Name</label></th>
                    <th><label for="uid">Uid</label></th>
                    <th><label for="password">Password</label></th>
                </tr>
                <tr>
                    <td><input type="text" name="name" id="name" required></td>
                    <td><input type="text" name="uid" id="uid" required></td>
                    <td><input type="password" name="password" id="password" required></td>
                    <td><button class='btn' onclick="create_User()">Create</button></td>
                </tr>
            </table>
        </div>
    </div>

    <script>
        function create_User() {
            // JavaScript function
        }
    </script>
</body>
</html>
