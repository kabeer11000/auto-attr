<h1>Auto  Attr JS</h1>

<p>Kabeers Auto Attr JS is a compact Javascript Library to Auto Add attributes to Elements in bulk. For example writing bootstrap Code.</p>

<h2>Usage</h2>
Convert  This Code...
<pre><code class="language-html">&lt;div class=&quot;container&quot;&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;col-md-12&quot;&gt;
           &lt;div class=&quot;h1 display-1&quot;&gt;Hello World&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
<pre>----------------------------------------</pre>
...To Just
<pre><code class="language-html">&lt;container&gt;
    &lt;row&gt;
        &lt;col-md-12&gt;
           &lt;div class=&quot;h1 display-1&quot;&gt;Hello World&lt;/div&gt;
        &lt;/col-md-12&gt;
    &lt;/row&gt;
&lt;/container&gt;</code></pre>
<pre>----------------------------------------</pre>
...And instantiate Javascript.
<pre><code class="language-js">&lt;script&gt;
        //Define Data
        //Tags with name Container will be given a container Class
        var data = {
            container: &quot;container&quot;,
            row: &quot;row&quot;,
            col-md-12: &quot;col-md-12&quot;,
        };
        var type = { from: &quot;tag&quot;, to: &quot;class&quot; };
        //Tell Auto Attr to search By TagName and add Class attribute
        //Tag is the Global Variable Which Comes with Auto Attr
        tag(data, type);
&lt;/script&gt;</code></pre>
<p>Now Kabeers Auto Attr JS will add Defined Attributes to the Defined Tags or attributes in Bulk<br> Read Proper Documentation from our offical Docs Page by Clicking <a href="http://kabeersnetwork.dx.am/apis#section-9">Here</a></p>
