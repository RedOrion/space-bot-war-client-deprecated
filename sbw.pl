#!/usr/bin/env perl
use Mojolicious::Lite;

get '/' => sub {
  my $self = shift;
  $self->render('index');
};

app->start;
__DATA__

@@ index.html.ep
<!DOCTYPE html>
<html>
<head>
    <title>SpaceBot War</title>
    
    <!-- Styles -->
    <link href="css/theme/bootstrap.min.css" rel="stylesheet">
    <link type="text/css" href="css/theme/css/jquery-ui-1.10.0.custom.css" rel="stylesheet" />
    <link type="text/css" href="css/theme/font-awesome.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="css/styles.css" type="text/css">
    <link rel="stylesheet" href="css/normalise.css">
</head>

<body id="page">

    <script type="text/javascript">
        // Set up some globals.
        window.server    = undefined;
        window.serverUrl = '//localhost:5000/';
    </script>

    <!-- Get RequreJs, which calls load.js and starts everything. -->
    <script type="text/javascript" data-main="src/load" src="src/js/requirejs.js"></script>

</body>
</html>
