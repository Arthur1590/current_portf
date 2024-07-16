import{u as Ne,j as m,L as Lt,R as Nt,r as Le}from"./index-DnIeEByY.js";const Ot="_App_w85ny_22",It="_header_w85ny_22",bt="_nav__mq_w85ny_1",Ft="_active_w85ny_51",wt="_menu_w85ny_55",yt="_container__mq_w85ny_1",Bt="_footer__mq_w85ny_1",Ct="_project__detail_w85ny_1",Mt="_contacts__inputs_w85ny_1",Yt="_contacts__wrapper_w85ny_1",Xt="_projects_w85ny_127",zt="_projects__card_holder_w85ny_127",Pt="_container_w85ny_132",Vt="_tabs__content_w85ny_132",Qt="_tabs__content_tab_w85ny_136",Gt="_about__mq_w85ny_1",Ht="_box_w85ny_160",qt="_main_w85ny_180",Wt="_Light_w85ny_250",kt="_Dark_w85ny_263",Jt="_intro_w85ny_276",Kt="_intro__content_w85ny_293",jt="_intro__status_w85ny_331",Zt="_intro__status_box_w85ny_345",$t="_blink_w85ny_1",q={App:Ot,header:It,nav__mq:bt,active:Ft,menu:wt,container__mq:yt,footer__mq:Bt,project__detail:Ct,contacts__inputs:Mt,contacts__wrapper:Yt,projects:Xt,projects__card_holder:zt,container:Pt,tabs__content:Vt,tabs__content_tab:Qt,about__mq:Gt,box:Ht,main:qt,Light:Wt,Dark:kt,intro:Jt,intro__content:Kt,intro__status:jt,intro__status_box:Zt,blink:$t},er=()=>{const{t:l}=Ne();return m.jsx(m.Fragment,{children:m.jsx("div",{className:q.intro,children:m.jsx("div",{id:"container__mq",className:q.container,children:m.jsxs("article",{className:q.intro__content,children:[m.jsxs("h5",{children:[l("Hi, I am a")," ",m.jsx("span",{children:l("web designer")})," ",l("and"),m.jsxs("span",{children:[" ",l("front-end developer")]})]}),m.jsx("p",{children:l("I craft responsive websites where technologies meet creativity")}),m.jsx("div",{className:q.intro__socials,children:m.jsx(Lt,{to:Nt.CONTACTS,children:m.jsxs("button",{children:["< ",l("Contact me")," />"]})})})]})})})})};var c={SIM_RESOLUTION:128,DYE_RESOLUTION:1024,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:1,VELOCITY_DISSIPATION:.2,PRESSURE:.8,PRESSURE_ITERATIONS:20,CURL:30,INITIAL:!0,SPLAT_AMOUNT:5,SPLAT_RADIUS:.25,SPLAT_FORCE:6e3,SPLAT_KEY:"Space",SHADING:!0,COLORFUL:!0,COLOR_UPDATE_SPEED:10,COLOR_PALETTE:[],HOVER:!0,BACK_COLOR:"#000000",TRANSPARENT:!1,BRIGHTNESS:.5,BLOOM:!0,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.6,BLOOM_SOFT_KNEE:.7,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:1},W=[],ie=[],M=!1,oe=!1,ne=!1,tr={splats(){W.push(Math.random()*c.SPLAT_AMOUNT*4+c.SPLAT_AMOUNT)},splat(l,D,w,x,U=void 0){ie.push([l,D,w,x,U])},screenshot(){ne=!0},pause(l=!1){M?M=!1:M=!0,l?oe=!0:oe=!1},config(l){Object.assign(c,l)},simulation(l,D={}){Object.assign(c,D),xe();function w(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[30,0,300]}let x=[],U=[];x.push(new w);const{gl:t,ext:R}=Oe(l);R.supportLinearFiltering||(c.DYE_RESOLUTION=512,c.SHADING=!1,c.BLOOM=!1,c.SUNRAYS=!1);function Oe(e){const i={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let r=e.getContext("webgl2",i);const o=!!r;o||(r=e.getContext("webgl",i)||e.getContext("experimental-webgl",i));let n,a;o?(r.getExtension("EXT_color_buffer_float"),a=r.getExtension("OES_texture_float_linear")):(n=r.getExtension("OES_texture_half_float"),a=r.getExtension("OES_texture_half_float_linear")),r.clearColor(0,0,0,1);const u=o?r.HALF_FLOAT:n.HALF_FLOAT_OES;let s,v,_;return o?(s=L(r,r.RGBA16F,r.RGBA,u),v=L(r,r.RG16F,r.RG,u),_=L(r,r.R16F,r.RED,u)):(s=L(r,r.RGBA,r.RGBA,u),v=L(r,r.RGBA,r.RGBA,u),_=L(r,r.RGBA,r.RGBA,u)),{gl:r,ext:{formatRGBA:s,formatRG:v,formatR:_,halfFloatTexType:u,supportLinearFiltering:a}}}function L(e,i,r,o){if(!Ie(e,i,r,o))switch(i){case e.R16F:return L(e,e.RG16F,e.RG,o);case e.RG16F:return L(e,e.RGBA16F,e.RGBA,o);default:return null}return{internalFormat:i,format:r}}function Ie(e,i,r,o){let n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,i,4,4,0,r,o,null);let a=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0),e.checkFramebufferStatus(e.FRAMEBUFFER)==e.FRAMEBUFFER_COMPLETE}function be(){let e=C(c.CAPTURE_RESOLUTION),i=p(e.width,e.height,R.formatRGBA.internalFormat,R.formatRGBA.format,R.halfFloatTexType,t.NEAREST);Re(i);let r=Fe(i);r=we(r,i.width,i.height);let o=ye(r,i.width,i.height).toDataURL();Be("fluid.png",o),URL.revokeObjectURL(o)}function Fe(e){t.bindFramebuffer(t.FRAMEBUFFER,e.fbo);let i=e.width*e.height*4,r=new Float32Array(i);return t.readPixels(0,0,e.width,e.height,t.RGBA,t.FLOAT,r),r}function we(e,i,r){let o=new Uint8Array(e.length),n=0;for(let a=r-1;a>=0;a--)for(let u=0;u<i;u++){let s=a*i*4+u*4;o[s+0]=Y(e[n+0])*255,o[s+1]=Y(e[n+1])*255,o[s+2]=Y(e[n+2])*255,o[s+3]=Y(e[n+3])*255,n+=4}return o}function Y(e){return Math.min(Math.max(e,0),1)}function ye(e,i,r){let o=document.createElement("canvas"),n=o.getContext("2d");o.width=i,o.height=r;let a=n.createImageData(i,r);return a.data.set(e),n.putImageData(a,0,0),o}function Be(e,i){let r=document.createElement("a");r.download=e,r.href=i,document.body.appendChild(r),r.click(),document.body.removeChild(r)}class Ce{constructor(i,r){this.vertexShader=i,this.fragmentShaderSource=r,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(i){let r=0;for(let n=0;n<i.length;n++)r+=Dt(i[n]);let o=this.programs[r];if(o==null){let n=T(t.FRAGMENT_SHADER,this.fragmentShaderSource,i);o=ue(this.vertexShader,n),this.programs[r]=o}o!=this.activeProgram&&(this.uniforms=ce(o),this.activeProgram=o)}bind(){t.useProgram(this.activeProgram)}}class d{constructor(i,r){this.uniforms={},this.program=ue(i,r),this.uniforms=ce(this.program)}bind(){t.useProgram(this.program)}}function ue(e,i){let r=t.createProgram();return t.attachShader(r,e),t.attachShader(r,i),t.linkProgram(r),!t.getProgramParameter(r,t.LINK_STATUS)&&console.trace(t.getProgramInfoLog(r)),r}function ce(e){let i=[],r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<r;o++){let n=t.getActiveUniform(e,o).name;i[n]=t.getUniformLocation(e,n)}return i}function T(e,i,r){i=Me(i,r);const o=t.createShader(e);return t.shaderSource(o,i),t.compileShader(o),!t.getShaderParameter(o,t.COMPILE_STATUS)&&console.trace(t.getShaderInfoLog(o)),o}function Me(e,i){if(i==null)return e;let r="";return i.forEach(o=>{r+="#define "+o+`
`}),r+e}const A=T(t.VERTEX_SHADER,`
    precision highp float;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`),Ye=T(t.VERTEX_SHADER,`
    precision highp float;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        float offset = 1.33333333;
        vL = vUv - texelSize * offset;
        vR = vUv + texelSize * offset;
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`),Xe=T(t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform sampler2D uTexture;

    void main () {
        vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
        sum += texture2D(uTexture, vL) * 0.35294117;
        sum += texture2D(uTexture, vR) * 0.35294117;
        gl_FragColor = sum;
    }
`),ze=T(t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;

    void main () {
        gl_FragColor = texture2D(uTexture, vUv);
    }
`),Pe=T(t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;

    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }
`),Ve=T(t.FRAGMENT_SHADER,`
    precision mediump float;

    uniform vec4 color;

    void main () {
        gl_FragColor = color;
    }
`),Qe=T(t.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float aspectRatio;

    #define SCALE 25.0

    void main () {
        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
        float v = mod(uv.x + uv.y, 2.0);
        v = v * 0.1 + 0.8;
        gl_FragColor = vec4(vec3(v), 1.0);
    }
`),Ge=`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform sampler2D uBloom;
    uniform sampler2D uSunrays;
    uniform sampler2D uDithering;
    uniform vec2 ditherScale;
    uniform vec2 texelSize;

    vec3 linearToGamma (vec3 color) {
        color = max(color, vec3(0));
        return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
    }

    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;

    #ifdef SHADING
        vec3 lc = texture2D(uTexture, vL).rgb;
        vec3 rc = texture2D(uTexture, vR).rgb;
        vec3 tc = texture2D(uTexture, vT).rgb;
        vec3 bc = texture2D(uTexture, vB).rgb;

        float dx = length(rc) - length(lc);
        float dy = length(tc) - length(bc);

        vec3 n = normalize(vec3(dx, dy, length(texelSize)));
        vec3 l = vec3(0.0, 0.0, 1.0);

        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
        c *= diffuse;
    #endif

    #ifdef BLOOM
        vec3 bloom = texture2D(uBloom, vUv).rgb;
    #endif

    #ifdef SUNRAYS
        float sunrays = texture2D(uSunrays, vUv).r;
        c *= sunrays;
    #ifdef BLOOM
        bloom *= sunrays;
    #endif
    #endif

    #ifdef BLOOM
        float noise = texture2D(uDithering, vUv * ditherScale).r;
        noise = noise * 2.0 - 1.0;
        bloom += noise / 255.0;
        bloom = linearToGamma(bloom);
        c += bloom;
    #endif

        float a = max(c.r, max(c.g, c.b));
        gl_FragColor = vec4(c, a);
    }
`,He=T(t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform vec3 curve;
    uniform float threshold;

    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        float br = max(c.r, max(c.g, c.b));
        float rq = clamp(br - curve.x, 0.0, curve.y);
        rq = curve.z * rq * rq;
        c *= max(rq, br - threshold) / max(br, 0.0001);
        gl_FragColor = vec4(c, 0.0);
    }
`),qe=T(t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;

    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum;
    }
`),We=T(t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform float intensity;

    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum * intensity;
    }
`),ke=T(t.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;

    void main () {
        vec4 c = texture2D(uTexture, vUv);
        float br = max(c.r, max(c.g, c.b));
        c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);
        gl_FragColor = c;
    }
`),Je=T(t.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float weight;

    #define ITERATIONS 16

    void main () {
        float Density = 0.3;
        float Decay = 0.95;
        float Exposure = 0.7;

        vec2 coord = vUv;
        vec2 dir = vUv - 0.5;

        dir *= 1.0 / float(ITERATIONS) * Density;
        float illuminationDecay = 1.0;

        float color = texture2D(uTexture, vUv).a;

        for (int i = 0; i < ITERATIONS; i++)
        {
            coord -= dir;
            float col = texture2D(uTexture, coord).a;
            color += col * illuminationDecay * weight;
            illuminationDecay *= Decay;
        }

        gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);
    }
`),Ke=T(t.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;

    void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
    }
`),je=T(t.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform vec2 dyeTexelSize;
    uniform float dt;
    uniform float dissipation;

    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
        vec2 st = uv / tsize - 0.5;

        vec2 iuv = floor(st);
        vec2 fuv = fract(st);

        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
    }

    void main () {
    #ifdef MANUAL_FILTERING
        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
        vec4 result = bilerp(uSource, coord, dyeTexelSize);
    #else
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        vec4 result = texture2D(uSource, coord);
    #endif
        float decay = 1.0 + dissipation * dt;
        gl_FragColor = result / decay;
    }`,R.supportLinearFiltering?null:["MANUAL_FILTERING"]),Ze=T(t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;

        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }

        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }
`),$e=T(t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
    }
`),et=T(t.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curl;
    uniform float dt;

    void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;

        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;

        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity += force * dt;
        velocity = min(max(velocity, -1000.0), 1000.0);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`),tt=T(t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float C = texture2D(uPressure, vUv).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }
`),rt=T(t.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`),h=(t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),t.STATIC_DRAW),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(0),(e,i=!1)=>{e==null?(t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.bindFramebuffer(t.FRAMEBUFFER,null)):(t.viewport(0,0,e.width,e.height),t.bindFramebuffer(t.FRAMEBUFFER,e.fbo)),i&&(t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)});let g,f,k,J,N,K,X,le,se=at("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAeK0lEQVR4AT3aBbRuVdUG4HW5hNLdSHd3CyjdEtLd3Y1wKZHuLgFJRenuBqW7u7tTlu8zx//9ZwwG8J397b3WnG/NtU9bYokl+nfffdf//e9/96uuuqrPN998/ZRTTukbb7xxP/zww/u+++7bf/vb3/YddtihP/roo32SSSbpL7zwQj/99NP7Vltt1X/88ce+8sor13Vvv/12Hzp0aF999dX7Bx980P/617/2WWedtX/55Zd9++237zPMMEP/05/+1DfYYIP+0EMP9amnnrq/9957/ZZbbum//PJLf+yxx/pJJ53URxtttL7WWmv1P//5z/3bb7/t9913X63t9ddf7wsvvHBff/31+6GHHtovu+yyPuecc/YbbrihH3300fXshRZaqF900UW1zv/85z991FFHrfXce++9ffjhh+/nnXdeXe8e7tsuv/zy+vKEE07YDzzwwNpoz4/FPfnkk32VVVbpd911V7/66qv7Mccc0y+99NI+yiij9KWWWqoffPDB/frrr6+HWfjss8/e77jjju6ev/vd72ojNrfiiiv21lo98Pzzz6/fnXjiif0f//hH33rrrWujFr7JJpvU/d5///1+wQUX9N12261PNdVUfbnlluvDDTdc//TTT+vzW2+9tY844oj9q6++6i+++GKffPLJaz3W+fXXX1fx3N/6vv/++3rOG2+8Uc/66KOP+njjjVff22OPPXr7+OOPq4oqftZZZ3VdtLkxxhijX3zxxd0XFGeOOebof/zjH/tee+1VC7nnnnv6uuuuWwt55ZVXqurbbLNNH3fccdWv77333t0innrqqX7QQQf1tddeu3uWh88zzzz9m2++6WONNVZt7txzz61njDTSSP2AAw7oM888c1988cX77bffXgvdaKON+rBhw/oEE0xQKJltttn6Lrvs0k844YS+5ppr9i233LK/8847tTYo23bbbfurr75ahYYQaFUk9/Zd31twwQX7yCOP3JuO6cIzzzxTEJppppmqUzrrc50dMmRIf+211/rPP//cF1lkkeqKToK3ii+66KL98ccf74cddlhfZ511+gMPPNCnnXbavsACC9RGJ5tssv7Pf/6zFrLrrrvWxp5++ulC3DXXXFMFff7557uigjy6TTzxxP3zzz8vNM0999zVHDT6wx/+0H/44Yc+6aST1vXW869//aufccYZfZxxxql1oLIGQp/naQLaLbvssoVkdF9ttdUKTUPcaJZZZmnbbbddW2yxxVoW2rKolg0oTgtn0KTluvbggw+2VVddtWXxLbxvJ598cptuuulaqt/CxxZet2hHW2ONNdr444/fbrrpppYCtUCxhUr1WXShpRMtm2tZaJtxxhlbEFf3iP60LLq+Hzq18Lxlg/X9l156qT3yyCP17JtvvrmFw23eeedtvhO0tf3337+eEU1pKVRbYYUV2hZbbNGuu+46KG/Rl5ZN138HPW333Xdv1tJwRJfxjcDoIjHSAb9bb731+u9///uC0MMPP1y8JnogN+aYY5aYqSYhAm1dG3vssTtagPRRRx3VL7zwwu67BImwTTHFFP1vf/tbJ2r3339/T+H7lFNO+f/d9nkWXx3NQquDUObaaaaZpr/55pt9n332qa6iVZrQ05zSEDq133771f1Qw/OJIo2xt3POOafEkMin+L2BK9VNhfumm25am3rrrbf68ccf36effvp+2223lYh88sknxbtUvT7DJ4W54oor+tlnn103tWgLALt0qzaGYoR0zz337F988UUPKop/xx13XBXYIs8888wqqE0RS4JrU6eeempPt8shUIuKe4Zn0g+/41o777xzv+SSS+q7zz33XLmaooK6vaA1rXj55ZeLvhpMY9wHpDuOuRne/v3vfy9h2nHHHTue//rXv64v4h6r0TkbmWiiiTpx+u9//1uL9eC77767ukjEPJDlsUnCR5zYKx7TC87gc0oNGRBEYzbccMNyH88gnksuuSSKVhe5FEvlNoQN8o499tjSp2WWWaZ0gaYQa41TQAJ+5ZVXlk3TtBtvvLGa9Nlnn5VQN/bA71XYZiyanbAYAsOaQMoiRhhhhE683Cj873PNNVc93Pep/vLLL19dJXooQt0hhig9++yz5QTuwUp15c477ywnIcC+S4/cCxVlCcW3Ps2QP6i3Qi+99NKFsJ9++qlHa6rwHMyawZzS/+pXvypas1CiOfroo1c2WWmllaqAHAXyhqZDw6LmJWpZeEsh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");const y=new d(Ye,Xe),fe=new d(A,ze),j=new d(A,Pe),ve=new d(A,Ve),me=new d(A,Qe),z=new d(A,He),B=new d(A,qe),P=new d(A,We),he=new d(A,ke),Z=new d(A,Je),O=new d(A,Ke),E=new d(A,je),$=new d(A,Ze),ee=new d(A,$e),F=new d(A,et),V=new d(A,tt),Q=new d(A,rt),I=new Ce(A,Ge);function Te(){let e=C(c.SIM_RESOLUTION),i=C(c.DYE_RESOLUTION);const{halfFloatTexType:r,formatRGBA:o,formatRG:n,formatR:a}=R,u=R.supportLinearFiltering?t.LINEAR:t.NEAREST;t.disable(t.BLEND),g==null?g=te(i.width,i.height,o.internalFormat,o.format,r,u):g=de(g,i.width,i.height,o.internalFormat,o.format,r,u),f==null?f=te(e.width,e.height,n.internalFormat,n.format,r,u):f=de(f,e.width,e.height,n.internalFormat,n.format,r,u),k=p(e.width,e.height,a.internalFormat,a.format,r,t.NEAREST),J=p(e.width,e.height,a.internalFormat,a.format,r,t.NEAREST),N=te(e.width,e.height,a.internalFormat,a.format,r,t.NEAREST),it(),ot()}function it(){let e=C(c.BLOOM_RESOLUTION);const{halfFloatTexType:i,formatRGBA:r}=R,o=R.supportLinearFiltering?t.LINEAR:t.NEAREST;K=p(e.width,e.height,r.internalFormat,r.format,i,o),U.length=0;for(let n=0;n<c.BLOOM_ITERATIONS;n++){let a=e.width>>n+1,u=e.height>>n+1;if(a<2||u<2)break;let s=p(a,u,r.internalFormat,r.format,i,o);U.push(s)}}function ot(){let e=C(c.SUNRAYS_RESOLUTION);const{halfFloatTexType:i,formatR:r}=R,o=R.supportLinearFiltering?t.LINEAR:t.NEAREST;X=p(e.width,e.height,r.internalFormat,r.format,i,o),le=p(e.width,e.height,r.internalFormat,r.format,i,o)}function p(e,i,r,o,n,a){t.activeTexture(t.TEXTURE0);let u=t.createTexture();t.bindTexture(t.TEXTURE_2D,u),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,a),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,a),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,r,e,i,0,o,n,null);let s=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,s),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,u,0),t.viewport(0,0,e,i),t.clear(t.COLOR_BUFFER_BIT);let v=1/e,_=1/i;return{texture:u,fbo:s,width:e,height:i,texelSizeX:v,texelSizeY:_,attach(b){return t.activeTexture(t.TEXTURE0+b),t.bindTexture(t.TEXTURE_2D,u),b}}}function te(e,i,r,o,n,a){let u=p(e,i,r,o,n,a),s=p(e,i,r,o,n,a);return{width:e,height:i,texelSizeX:u.texelSizeX,texelSizeY:u.texelSizeY,get read(){return u},set read(v){u=v},get write(){return s},set write(v){s=v},swap(){let v=u;u=s,s=v}}}function nt(e,i,r,o,n,a,u){let s=p(i,r,o,n,a,u);return fe.bind(),t.uniform1i(fe.uniforms.uTexture,e.attach(0)),h(s),s}function de(e,i,r,o,n,a,u){return e.width==i&&e.height==r||(e.read=nt(e.read,i,r,o,n,a,u),e.write=p(i,r,o,n,a,u),e.width=i,e.height=r,e.texelSizeX=1/i,e.texelSizeY=1/r),e}function at(e){let i=t.createTexture();t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT),t.texImage2D(t.TEXTURE_2D,0,t.RGB,1,1,0,t.RGB,t.UNSIGNED_BYTE,new Uint8Array([255,255,255]));let r={texture:i,width:1,height:1,attach(n){return t.activeTexture(t.TEXTURE0+n),t.bindTexture(t.TEXTURE_2D,i),n}},o=new Image;return o.onload=()=>{r.width=o.width,r.height=o.height,t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGB,t.RGB,t.UNSIGNED_BYTE,o)},o.src=e,r}function ut(){let e=[];c.SHADING&&e.push("SHADING"),c.BLOOM&&e.push("BLOOM"),c.SUNRAYS&&e.push("SUNRAYS"),I.setKeywords(e)}ut(),Te(),c.INITIAL&&Ee(parseInt(Math.random()*c.SPLAT_AMOUNT*4+c.SPLAT_AMOUNT));let Ae=Date.now(),G=0;ge();function ge(){const e=ct();xe()&&Te(),lt(e),st(),ne&&(be(),ne=!1),M||ft(e),Re(null),requestAnimationFrame(ge)}function ct(){let e=Date.now(),i=(e-Ae)/1e3;return i=Math.min(i,.016666),Ae=e,i}function xe(){let e=S(l.clientWidth),i=S(l.clientHeight);return l.width!=e||l.height!=i?(l.width=e,l.height=i,!0):!1}function lt(e){c.COLORFUL&&(G+=e*c.COLOR_UPDATE_SPEED,G>=1&&(G=_t(G,0,1),x.forEach(i=>{i.color=H()})))}function st(){if(W.length>0&&Ee(W.pop()),ie.length>0){const e=ie.pop(),i=e[0]/l.clientWidth;console.log(i);const r=1-e[1]/l.clientHeight,o=e[2]/2,n=e[3]/2;let a;if(e[4]!=null){const u=Ue(e[4]),s=De(u.h,u.s,c.BRIGHTNESS);s.r*=.15,s.g*=.15,s.b*=.15,a=s}else a=H();a.r*=10,a.g*=10,a.b*=10,re(i,r,o,n,a)}x.forEach(e=>{e.moved&&(e.moved=!1,gt(e))})}function ft(e){t.disable(t.BLEND),ee.bind(),t.uniform2f(ee.uniforms.texelSize,f.texelSizeX,f.texelSizeY),t.uniform1i(ee.uniforms.uVelocity,f.read.attach(0)),h(J),F.bind(),t.uniform2f(F.uniforms.texelSize,f.texelSizeX,f.texelSizeY),t.uniform1i(F.uniforms.uVelocity,f.read.attach(0)),t.uniform1i(F.uniforms.uCurl,J.attach(1)),t.uniform1f(F.uniforms.curl,c.CURL),t.uniform1f(F.uniforms.dt,e),h(f.write),f.swap(),$.bind(),t.uniform2f($.uniforms.texelSize,f.texelSizeX,f.texelSizeY),t.uniform1i($.uniforms.uVelocity,f.read.attach(0)),h(k),j.bind(),t.uniform1i(j.uniforms.uTexture,N.read.attach(0)),t.uniform1f(j.uniforms.value,c.PRESSURE),h(N.write),N.swap(),V.bind(),t.uniform2f(V.uniforms.texelSize,f.texelSizeX,f.texelSizeY),t.uniform1i(V.uniforms.uDivergence,k.attach(0));for(let r=0;r<c.PRESSURE_ITERATIONS;r++)t.uniform1i(V.uniforms.uPressure,N.read.attach(1)),h(N.write),N.swap();Q.bind(),t.uniform2f(Q.uniforms.texelSize,f.texelSizeX,f.texelSizeY),t.uniform1i(Q.uniforms.uPressure,N.read.attach(0)),t.uniform1i(Q.uniforms.uVelocity,f.read.attach(1)),h(f.write),f.swap(),E.bind(),t.uniform2f(E.uniforms.texelSize,f.texelSizeX,f.texelSizeY),!R.supportLinearFiltering&&t.uniform2f(E.uniforms.dyeTexelSize,f.texelSizeX,f.texelSizeY);let i=f.read.attach(0);t.uniform1i(E.uniforms.uVelocity,i),t.uniform1i(E.uniforms.uSource,i),t.uniform1f(E.uniforms.dt,e),t.uniform1f(E.uniforms.dissipation,c.VELOCITY_DISSIPATION),h(f.write),f.swap(),!R.supportLinearFiltering&&t.uniform2f(E.uniforms.dyeTexelSize,g.texelSizeX,g.texelSizeY),t.uniform1i(E.uniforms.uVelocity,f.read.attach(0)),t.uniform1i(E.uniforms.uSource,g.read.attach(1)),t.uniform1f(E.uniforms.dissipation,c.DENSITY_DISSIPATION),h(g.write),g.swap()}function Re(e){c.BLOOM&&Tt(g.read,K),c.SUNRAYS&&(dt(g.read,g.write,X),At(X,le,1)),e==null||!c.TRANSPARENT?(t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.enable(t.BLEND)):t.disable(t.BLEND),c.TRANSPARENT||vt(e,St(pt(c.BACK_COLOR))),e==null&&c.TRANSPARENT&&mt(e),ht(e)}function vt(e,i){ve.bind(),t.uniform4f(ve.uniforms.color,i.r,i.g,i.b,1),h(e)}function mt(e){me.bind(),t.uniform1f(me.uniforms.aspectRatio,l.width/l.height),h(e)}function ht(e){let i=e==null?t.drawingBufferWidth:e.width,r=e==null?t.drawingBufferHeight:e.height;if(I.bind(),c.SHADING&&t.uniform2f(I.uniforms.texelSize,1/i,1/r),t.uniform1i(I.uniforms.uTexture,g.read.attach(0)),c.BLOOM){t.uniform1i(I.uniforms.uBloom,K.attach(1)),t.uniform1i(I.uniforms.uDithering,se.attach(2));let o=Ut(se,i,r);t.uniform2f(I.uniforms.ditherScale,o.x,o.y)}c.SUNRAYS&&t.uniform1i(I.uniforms.uSunrays,X.attach(3)),h(e)}function Tt(e,i){if(U.length<2)return;let r=i;t.disable(t.BLEND),z.bind();let o=c.BLOOM_THRESHOLD*c.BLOOM_SOFT_KNEE+1e-4,n=c.BLOOM_THRESHOLD-o,a=o*2,u=.25/o;t.uniform3f(z.uniforms.curve,n,a,u),t.uniform1f(z.uniforms.threshold,c.BLOOM_THRESHOLD),t.uniform1i(z.uniforms.uTexture,e.attach(0)),h(r),B.bind();for(let s=0;s<U.length;s++){let v=U[s];t.uniform2f(B.uniforms.texelSize,r.texelSizeX,r.texelSizeY),t.uniform1i(B.uniforms.uTexture,r.attach(0)),h(v),r=v}t.blendFunc(t.ONE,t.ONE),t.enable(t.BLEND);for(let s=U.length-2;s>=0;s--){let v=U[s];t.uniform2f(B.uniforms.texelSize,r.texelSizeX,r.texelSizeY),t.uniform1i(B.uniforms.uTexture,r.attach(0)),t.viewport(0,0,v.width,v.height),h(v),r=v}t.disable(t.BLEND),P.bind(),t.uniform2f(P.uniforms.texelSize,r.texelSizeX,r.texelSizeY),t.uniform1i(P.uniforms.uTexture,r.attach(0)),t.uniform1f(P.uniforms.intensity,c.BLOOM_INTENSITY),h(i)}function dt(e,i,r){t.disable(t.BLEND),he.bind(),t.uniform1i(he.uniforms.uTexture,e.attach(0)),h(i),Z.bind(),t.uniform1f(Z.uniforms.weight,c.SUNRAYS_WEIGHT),t.uniform1i(Z.uniforms.uTexture,i.attach(0)),h(r)}function At(e,i,r){y.bind();for(let o=0;o<r;o++)t.uniform2f(y.uniforms.texelSize,e.texelSizeX,0),t.uniform1i(y.uniforms.uTexture,e.attach(0)),h(i),t.uniform2f(y.uniforms.texelSize,0,e.texelSizeY),t.uniform1i(y.uniforms.uTexture,i.attach(0)),h(e)}function gt(e){if(M&&!oe)return;let i=e.deltaX*c.SPLAT_FORCE,r=e.deltaY*c.SPLAT_FORCE;re(e.texcoordX,e.texcoordY,i,r,e.color)}function Ee(e){for(let i=0;i<e;i++){const r=H();r.r*=10,r.g*=10,r.b*=10;const o=Math.random(),n=Math.random(),a=1e3*(Math.random()-.5),u=1e3*(Math.random()-.5);re(o,n,a,u,r)}}function re(e,i,r,o,n){O.bind(),t.uniform1i(O.uniforms.uTarget,f.read.attach(0)),t.uniform1f(O.uniforms.aspectRatio,l.width/l.height),t.uniform2f(O.uniforms.point,e,i),t.uniform3f(O.uniforms.color,r,o,0),t.uniform1f(O.uniforms.radius,xt(c.SPLAT_RADIUS/100)),h(f.write),f.swap(),t.uniform1i(O.uniforms.uTarget,g.read.attach(0)),t.uniform3f(O.uniforms.color,n.r,n.g,n.b),h(g.write),g.swap()}function xt(e){let i=l.width/l.height;return i>1&&(e*=i),e}l.addEventListener("mousedown",e=>{let i=S(e.offsetX),r=S(e.offsetY),o=x.find(n=>n.id==-1);o==null&&(o=new w),pe(o,-1,i,r)}),setTimeout(()=>{l.addEventListener("mousemove",e=>{let i=x[0],r=S(e.offsetX),o=S(e.offsetY);Se(i,r,o)})},500),window.addEventListener("mouseup",()=>{_e(x[0])}),l.addEventListener("touchstart",e=>{const i=e.targetTouches;for(;i.length>=x.length;)x.push(new w);for(let r=0;r<i.length;r++){let o=S(i[r].pageX),n=S(i[r].pageY);pe(x[r+1],i[r].identifier,o,n)}},{passive:!1,capture:!0}),l.addEventListener("touchmove",e=>{const i=e.targetTouches;for(let r=0;r<i.length;r++){let o=x[r+1],n=S(i[r].pageX),a=S(i[r].pageY);Se(o,n,a)}},{passive:!1,capture:!0}),window.addEventListener("touchend",e=>{const i=e.changedTouches;for(let r=0;r<i.length;r++){let o=x.find(n=>n.id==i[r].identifier);o!=null&&_e(o)}}),window.addEventListener("keydown",e=>{e.code===c.SPLAT_KEY&&W.push(parseInt(Math.random()*c.SPLAT_AMOUNT*4+c.SPLAT_AMOUNT))});function pe(e,i,r,o){e.id=i,e.down=!0,e.moved=!1,e.texcoordX=r/l.width,e.texcoordY=1-o/l.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=H()}function Se(e,i,r){e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=i/l.width,e.texcoordY=1-r/l.height,e.deltaX=Rt(e.texcoordX-e.prevTexcoordX),e.deltaY=Et(e.texcoordY-e.prevTexcoordY),c.HOVER?e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0:e.moved=e.down}function _e(e){e.down=!1}function Rt(e){let i=l.width/l.height;return i<1&&(e*=i),e}function Et(e){let i=l.width/l.height;return i>1&&(e/=i),e}function H(){let e,i;if(c.COLOR_PALETTE.length==0)e=Math.random(),i=1;else{const o=Math.floor(Math.random()*c.COLOR_PALETTE.length),n=c.COLOR_PALETTE[o],a=Ue(n);e=a.h,i=a.s}let r=De(e,i,c.BRIGHTNESS);return r.r*=.15,r.g*=.15,r.b*=.15,r}function Ue(e){e=e.replace("#","");const i=parseInt(e.substring(0,2),16)/255,r=parseInt(e.substring(2,4),16)/255,o=parseInt(e.substring(4,6),16)/255,n=Math.max(i,r,o),a=Math.min(i,r,o);let u,s,v;return n===a?u=0:n===i?u=((r-o)/(n-a)+6)%6:n===r?u=(o-i)/(n-a)+2:u=(i-r)/(n-a)+4,u/=6,n===0?s=0:s=(n-a)/n,v=n,{h:u,s,v}}function pt(e){e=e.replace("#","");const i=parseInt(e.substr(0,2),16),r=parseInt(e.substr(2,2),16),o=parseInt(e.substr(4,2),16);return{r:i,g:r,b:o}}function De(e,i,r){let o,n,a,u,s,v,_,b;switch(u=Math.floor(e*6),s=e*6-u,v=r*(1-i),_=r*(1-s*i),b=r*(1-(1-s)*i),u%6){case 0:o=r,n=b,a=v;break;case 1:o=_,n=r,a=v;break;case 2:o=v,n=r,a=b;break;case 3:o=v,n=_,a=r;break;case 4:o=b,n=v,a=r;break;case 5:o=r,n=v,a=_;break}return{r:o,g:n,b:a}}function St(e){return{r:e.r/255,g:e.g/255,b:e.b/255}}function _t(e,i,r){let o=r-i;return(e-i)%o+i}function C(e){let i=t.drawingBufferWidth/t.drawingBufferHeight;i<1&&(i=1/i);let r=Math.round(e),o=Math.round(e*i);return t.drawingBufferWidth>t.drawingBufferHeight?{width:o,height:r}:{width:r,height:o}}function Ut(e,i,r){return{x:i/e.width,y:r/e.height}}function S(e){let i=window.devicePixelRatio||1;return Math.floor(e*i)}function Dt(e){if(e.length==0)return 0;let i=0;for(let r=0;r<e.length;r++)i=(i<<5)-i+e.charCodeAt(r),i|=0;return i}}},rr=tr;const ir="_fluid_animation_2831t_1",or="_container_2831t_14",nr="_fluid_intro_2831t_20",ae={fluid_animation:ir,container:or,fluid_intro:nr},ar=()=>{const l=Le.useRef(null),{t:D}=Ne();return Le.useEffect(()=>{l.current&&rr.simulation(l.current,{SIM_RESOLUTION:128,DYE_RESOLUTION:512,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:.98,VELOCITY_DISSIPATION:.25,PRESSURE:.8,PRESSURE_ITERATIONS:7,CURL:30,INITIAL:!0,SPLAT_AMOUNT:4,SPLAT_RADIUS:.2,SPLAT_FORCE:5e3,SPLAT_KEY:"Enter",SHADING:!1,COLORFUL:!0,COLOR_UPDATE_SPEED:8,COLOR_PALETTE:[],HOVER:!0,BACK_COLOR:"#000",TRANSPARENT:!1,BRIGHTNESS:.6,BLOOM:!0,BLOOM_ITERATIONS:3,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.7,BLOOM_THRESHOLD:.5,BLOOM_SOFT_KNEE:.6,SUNRAYS:!0,SUNRAYS_RESOLUTION:256,SUNRAYS_WEIGHT:1})},[]),m.jsx(m.Fragment,{children:m.jsxs("div",{className:ae.fluid_animation,children:[m.jsx("canvas",{ref:l,style:{width:"100%",height:"100vh"}}),m.jsx("div",{className:ae.fluid_intro,children:m.jsx("div",{className:ae.container,children:m.jsxs("article",{children:[m.jsxs("p",{children:[D("Hi, I'm")," "]}),m.jsxs("h1",{children:[D("Artur"),"|"]}),m.jsxs("h4",{children:["<","Web Developer",">"]})]})})})]})})},cr=({setTrue:l})=>{const D=()=>{l(!0)};return m.jsxs("div",{onClick:D,children:[m.jsx(ar,{}),m.jsx(er,{})]})};export{cr as default};
