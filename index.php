
<!DOCTYPE html>
<html lang="en" dir="ltr" id="modernizrcom" class="no-js">
<head>
   <meta charset="utf-8">
   <title>Paulo Marques - Front-end Developer | UX Designer</title>

   <meta name="description" content="Hello world! I’m Paulo Marques. I am a Front End Developer and Ux Designer, I like to imagine things that people enjoy using and looking at.">
   <meta name="author" content="Paulo Marques">

   <meta name="google-site-verification" content="K8gTYEzkq94tsotSTNu7GWLJbQy_uea5lL44AgYndvU" />
   <meta name="viewport" content="width=device-width">
   <link rel="Shortcut Icon" href="/favicon.ico" type="image/x-icon" />

  <meta name="robots" content="index,follow" />
  <meta name="googlebot" content="index,follow" />
  <meta name="keywords" content="developer, analyst, SEO, web, front end, interface, paulo marques, marques, paulo, web developer" />

  <?php include_once "includes/styles.php"; ?>

</head>

<body data-twttr-rendered="true">

  <div id="content">
    <section id="home">
      <article class="center">
          <h1>hello<strong>I’m Paulo Marques</strong></h1>
          <h2><strong>A FRONT-END DEVELOPER/UX DESIGNER</strong>I like to build sites/apps that people enjoy using and look at.</h2>
      </article>
      <ul class="lists">
        <li class="blue"></li>
        <li class="green"></li>
        <li class="orange"></li>
      </ul>
    </section>
    <section id="work"><h2>WORK</h2></section>
    <section id="works"></section>
    <section id="services"><h2>SKILLS</h2></section>
    <section id="servicesContent">
      <article>
        <h3>Here a list of my works and skills.<br /><strong>If you want to contact me, feel free.</strong></h3>

        <ul class="services">
          <li><p>Website Design</p></li>
          <li><p>Front End Development</p></li>
          <li><p>Website development (CMS)</p></li>
          <li><p>Mobile App</p></li>
          <li><p>SEO</p></li>
          <li><p>Art Direction/Design</p></li>
          <li><p>Social media enhancements</p></li>
          <li><p>General web marketing</p></li>
          <li><p>Email marketing</p></li>
        </ul>
        <ul class="skills">
          <li>HTML 5</li><li>CSS3</li><li>Javascript</li><li>jQuery</li><li>Mootools</li><li>Scriptaculous</li><li>Redesign</li><li>USER INTERFACE DESIGN</li><li>Sass</li><li>ASP</li><li>Bootstrap</li><li>SQL</li><li>PHP</li><li>Angular</li><li>.NET</li><li>AJAX</li><li>Adobe CS</li><li>Email</li><li>JSON</li><li>Web Design</li><li>XML</li><li>APIs</li><li>Code Refactor</li><li>Node.js</li><li>Wordpress</li><li>Wireframes</li><li>Actionscript</li><li>SEO</li><li>SVN</li><li>Git</li><li>Bitbucket</li><li>Responsive Design / DEV</li><li>User Experience</li>
        </ul>

      </article>
    </section>
    <section id="about"><h2>ABOUT</h2></section>
    <section id="info">
      <article>
        <h3>Hello world!<br /><strong>I’m Paulo Marques.</strong></h3>
        <img src="images/paulo_marques.png" alt="Paulo Marques" />
        <p>I am a Front End Developer and Ux Designer, I like to imagine sites/apps that people enjoy using and looking at. I know this is a cliche, but when technology is used to approach and make humans more human, only then a perfect communication is able to really hit the world. If you’re interested in working together or just want to say hi, don’t hesitate, contact me.</p>
        <div class="morph-button morph-button-modal morph-button-modal-2 morph-button-fixed">
          <button type="button" class="contact me" id="contactMe">contact me</button>
          <div class="morph-content">
            <div class="content-style-form content-style-form-1">
              <span class="icon icon-close"></span>
              <h4>Contact me</h4>
              <form method="post" action="scripts/process.php">
                <p><label>Name</label><input type="text" name="name" value="<?php if (isset($name)) { echo htmlspecialchars($name); } ?>" /></p>
                <p><label>Email</label><input type="text" name="email" value="<?php if(isset($email)) { echo htmlspecialchars($email); } ?>" /></p>
                <p><label>Message</label><textarea name="comment"><?php if (isset($message)) { echo htmlspecialchars($message); } ?></textarea></p>
                <p><button class="contact submit progress-button" id="submit" data-style="shrink" data-horizontal>submit</button></p>
              </form>
            </div>
          </div>
        </div>
        <ol>
          <li><a href="http://teamtreehouse.com/paulomarques" class="btns treehouse" target="_blank">treehouse</a></li>
          <li><a href="http://br.linkedin.com/in/pauloedums" class="btns linkedin" target="_blank">linkedin</a></li>
          <li><a href="mailto:pauloedums@gmail.com" class="btns email">email</a></li>
        </ol>
        <p class="copyright"><span>&copy;</span> 2014 <a href="http://pauloedums.com" target="_self">Paulo Marques</a>. All Rights Reserved.</p>
      </article>

    </section>
  </div>

  <header>
    <?php include_once "includes/header.php"; ?>
  </header>
  <?php include_once "includes/scripts.php"; ?>
  <?php include_once "includes/svg.php"; ?>

  <div id="awwwards" class="nominee green top right">
<a href="http://www.awwwards.com/best-websites/paulo-marques-front-end-developer-ux-designer" target="_blank">Awwwards</a>
</div>
</body>
</html>
