<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Hello React</title>
    <script type="text/javascript" src="react.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.10.0.min.js"></script>
</head>
<body>
<div id="content">${content}</div>
<script type="text/javascript" src="app.js"></script>
<script type="text/javascript">
    $(function () {
        renderClient();
    });
</script>
</body>
</html>