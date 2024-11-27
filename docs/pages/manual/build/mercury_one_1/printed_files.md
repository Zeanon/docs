---
layout: default
title: Files
nav_order: 30
has_toc: false
parent: Mercury One.1
grand_parent: Manual
permalink: /manual/build/mercury_eva/printed_files
img_instr: ../../../assets/images/instructions
js_path: ../../../scripts
docs_path: https://api.github.com/repos/ZeroGDesign/docs/contents/docs
merc_path: https://api.github.com/repos/ZeroGDesign/docs/contents/docs/assets/stl/m1_1
eva_path: https://api.github.com/repos/ZeroGDesign/docs/contents/docs/assets/stl/eva2_4
---

<!-- Configurator Mercury One.1 -->
## Mercury One.1 Configurator

The configurator has been developed to generate a Zip file. The zip file will contain all the Stl files for your Mercury One.1. The files you receive from our website are made by us.
{: .fs-4 .fw-300 }

<div class="code-example" markdown="1">

<form action="post">

Z-Adapters*
<select class="list_dark" name="zadapter" id="zadapter">
    <option value="option0">Select</option>

</select><br/>

Toothed idler*
<select class="list_dark" name="tidler" id="tidler">
    <option value="option0">Select</option>
</select><br/>
<div class="fs-3 fw-300">If unsure which to choose, download the PDF file by clicking <a href="{{page.docs_path}}/assets/images/instructions/m1_1/spacer_instruction.pdf" download >here</a>, and it will guide you through the process.</div>

Tension plate*
<select class="list_dark" name="tensionplate" id="tensionplate">
    <option value="option0">Select</option>

</select><br/>

<div class="fs-3 fw-300">*Tapped, you must tap threads into an extrusion. T-nut uses two m5 bolts that connect to T-nuts.</div>

<p class="fs-3 fw-300">Double check your selected values before clicking the button below..</p>

<button class="btn" onclick="zipAndDownload(getDocumentList('Mercury'), '{{page.merc_path}}' ,'Mercury');" type="submit"><i class="bi bi-cloud-arrow-down"></i> Get Files!</button>

<div class="status_text" id="progressMerc"></div>

</form>
</div>

<!-- End configurator Mercury One.1 -->

<!-- Configurators EVA 2.4 -->

## EVA 2.4 Toolhead Configurator

The configurator has been developed to generate a Zip file. The zip file will contain all the Stl files for your print head. The files you receive from our website are made by us to fit the Mercury 1.1 or by Paweł Kucmus of EVA. You can find more information about EVA on their website [https://2.eva-3d.page/](https://2.eva-3d.page/){:target="_blank"}.
{: .fs-4 .fw-300 }

<script src="{{page.js_path}}/file-saver.js" type="module"></script>
<script src="{{page.js_path}}/configurator_m1_1.js"></script>
<script src="{{page.js_path}}/jszip.min.js" type="module"></script>

<div class="code-example" markdown="1">

<form action="post">

Hotend*
<select class="list_dark" name="hotend" id="hotend">
    <option value="option0">Select</option>

</select><br/>

Extruder*
<select class="list_dark" name="extruder" id="extruder">
    <option value="option0">Select</option>

</select><br/>

Probe*
<select class="list_dark" name="probe" id="probe">
    <option value="option0">Select</option>

</select><br/>

<p class="fs-3 fw-300">Double check your selected values before clicking the button below..</p>

<button class="btn" onclick="zipAndDownload(getDocumentList('Eva'), '{{page.eva_path}}', 'Eva');" type="submit"><i class="bi bi-cloud-arrow-down"></i> Get Files!</button>

<div class="status_text" id="progressEVA"></div>

</form>

<script>
    window.addEventListener('load', function(event) {
        loadDataSet();
    });
</script>

</div>

<i class="bi bi-chat-square-text"></i> Special thanks to @KaizenKody#9426 for helping us create this amazing configurator.
{: .fs-1 .fw-300 }

<!-- End configurator EVA 2.4 -->

{: style="text-align: center" .fs-8}
[Next step &rarr;](/manual/build/mercury_eva/empty_frame){: .btn .btn-red }

{% include license_agreement.md %}
