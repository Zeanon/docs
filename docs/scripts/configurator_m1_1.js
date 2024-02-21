//This file will aid in building the configurator.
// Written by #KaizenKody#9426

var _partsList = {
    hotends: [
        { id: "sliceworks_mosquito", name: "Mosquito", dependencies: ["mosquito_face.stl", "mosquito_support.stl", "EVA2_4_Trihorn_2-6-wide.stl", "optional_ducts/EVA2_4_Trihorn_3-4-wide.stl", "optional_ducts/EVA2_4_Trihorn_4-3-wide.stl"] },
        { id: "sliceworks_copperhead", name: "Copperhead", dependencies: ["copperhead_face.stl", "copperhead_support_a.stl", "copperhead_support_b.stl", "EVA2_4_Trihorn_2-6-wide.stl", "optional_ducts/EVA2_4_Trihorn_3-4-wide.stl", "optional_ducts/EVA2_4_Trihorn_4-3-wide.stl"] },
        { id: "rapido", name: "Rapido HF", dependencies: ["face_rapido.stl", "EVA2_4_Trihorn_2-6-narrow.stl", "optional_ducts/EVA2_4_Trihorn_3-4-narrow.stl", "optional_ducts/EVA2_4_Trihorn_4-3-narrow.stl"] },
        { id: "dragon_red_lizard", name: "Dragon HF / Red Lizard", dependencies: ["dragon_face.stl", "v6_support.stl", "EVA2_4_Trihorn_2-6-narrow.stl", "optional_ducts/EVA2_4_Trihorn_3-4-narrow.stl", "optional_ducts/EVA2_4_Trihorn_4-3-narrow.stl"] },
        { id: "dragonfly_bmo", name: "DragonFly BMO", dependencies: ["bmo_face.stl", "bmo_support.stl", "EVA2_4_Trihorn_2-6-narrow.stl", "optional_ducts/EVA2_4_Trihorn_3-4-narrow.stl", "optional_ducts/EVA2_4_Trihorn_4-3-narrow.stl"] },
        { id: "e3d_v6", name: "E3D V6", dependencies: ["v6_face.stl", "v6_face_clamp.stl", "v6_support.stl", "EVA2_4_Trihorn_2-6-narrow.stl", "optional_ducts/EVA2_4_Trihorn_3-4-narrow.stl", "optional_ducts/EVA2_4_Trihorn_4-3-narrow.stl"] }
    ],
    extruders: [
        { id: "sherpa_mini", name: "Sherpa Mini", dependencies: ["Sherpa_Mini_TOP.stl"] },
        { id: "lgx_lite", name: "LGX Lite", dependencies: ["LGX_Lite_TOP.stl"] },
        { id: "lgx", name: "LGX", dependencies: ["LGX_TOP_a.stl", "LGX_TOP__b.stl"] },
        { id: "orbiter_1_5", name: "Orbiter 1.5", dependencies: ["Orbiter_1_5_TOP.stl"] },
        { id: "orbiter_2", name: "Orbiter 2.0", dependencies: ["Orbiter_2_0_TOP.stl"] },
        { id: "bmg", name: "BMG", dependencies: ["BMG_TOP.stl"] },
        { id: "titan", name: "Titan", dependencies: ["Titan_TOP.stl"] },
        { id: "bowden", name: "bowden", dependencies: ["TOP.stl"] }
    ],
    probes: [
        { id: "bl_touch", name: "BLTouch", dependencies: ["bl_touch_mount.stl", "bl_touch_mount_alt.stl"] },
        { id: "cr_touch", name: "CRTouch", dependencies: ["cr_touch_mount.stl"] },
        //{id: "euclid", name: "Euclid", dependencies: ["soon.stl"]},
        { id: "inductive", name: "Inductive", dependencies: ["LJ8_probe_mount.stl", "LJ12_probe_mount.stl", "LJ18_probe_mount.stl"] },
        { id: "none", name: "None", dependencies: [] }
    ],
    tensionplates: [
        { id: "t-nut", name: "T-nut", dependencies: ["front_tension_plate_t-nut_1.stl", "front_tension_plate_t-nut_2.stl"] },
        { id: "tapped", name: "Tapped", dependencies: ["front_tension_plate_tapped_1.stl", "front_tension_plate_tapped_2.stl"] }
    ],
    tidlers: [
        { id: "85m", name: "8.5mm", dependencies: ["a_Xjoint_8mm_Idler_Spacers.stl"] },
        { id: "9mm", name: "9mm", dependencies: ["a_Xjoint_9mm_Idler_Spacers.stl"] },
        { id: "10mm", name: "10mm", dependencies: ["a_Xjoint_10mm_Idler_Spacers.stl"] }
    ],
    zadapters: [
        { id: "5pro", name: "Ender 5/Pro", dependencies: ["Z_DropBracket_5Pro_1.stl", "Z_DropBracket_5Pro_2.stl"] },
        { id: "5plus", name: "Ender 5 Plus", dependencies: ["plus_only_bed_raiser_1.stl", "plus_only_bed_raiser_2.stl", "plus_only_bed_raiser_3.stl", "plus_only_bed_raiser_4.stl"] },
        { id: "none", name: "None", dependencies: [] }
    ],
    eva_generic: ["Belt_clamp_1.stl", "Belt_clamp_2.stl", "a_X_Limit_Stop_Block.stl", "RearCableArm_V1-1.stl", "a_EVA_Backplate_Merc_Support_V1-1.stl", "a_EVA_FrontPlate_HD_V-1-1.stl", "optional_ducts/info.pdf"],
    mercury_generic: ["a_stepper_mount_bottom_left.stl", "a_stepper_mount_bottom_right.stl", "a_stepper_mount_top_left.stl", "a_stepper_mount_top_right.stl",
        "a_front_tower_right.stl", "a_front_tower_left.stl", "a_FlangeSpacer_pair.stl", "front_tower_tool_brass.stl", "y_endstop.stl",
        "XJoint_left_bottom.stl", "XJoint_left_top.stl", "XJoint_right_bottom.stl", "XJoint_right_top.stl", "RearSplitloomArm_V1-1-0.stl", "left_pulley_alignment_tool.stl", "right_pulley_alignment_tool.stl", "front_tower_tool.stl",
        "rail_alignment_tool.stl", "customExtrusion/what_are_these_files_for.pdf", "customExtrusion/x_endstop_block.stl", "customExtrusion/x_endstop_block_PLUS.stl"
    ]
}

var getDocumentList = (option) => {
    // stop the page from changing
    event.preventDefault();

    // get selections
    var hotendSelected = document.getElementById('hotend');
    var extruderSelected = document.getElementById('extruder');
    var probeSelected = document.getElementById('probe');
    var tidlerSelected = document.getElementById('tidler');
    var tensionplateSelected = document.getElementById('tensionplate');
    var zadapterSelected = document.getElementById('zadapter');

    // aggregate the files
    var fileList = [];

    if (option == 'Mercury') {
      fileList = fileList.concat(_partsList.mercury_generic);

      // add tension plates
      fileList = fileList.concat(_partsList.tidlers.map(item => {
        if (item.id == tidlerSelected.value)
          return item.dependencies;
      }));

      // add tension plates
      fileList = fileList.concat(_partsList.tensionplates.map(item => {
        if (item.id == tensionplateSelected.value)
          return item.dependencies;
      }));

      // add Z Adapters
      fileList = fileList.concat(_partsList.zadapters.map(item => {
        if (item.id == zadapterSelected.value)
          return item.dependencies;
      }));
    } else {
      // add generic files
      fileList = fileList.concat(_partsList.eva_generic);

      // add hotends
      fileList = fileList.concat(_partsList.hotends.map(item => {
        if (item.id == hotendSelected.value)
          return item.dependencies;
      }));

      // add extruder
      fileList = fileList.concat(_partsList.extruders.map(item => {
        if (item.id == extruderSelected.value)
          return item.dependencies;
      }));

      // add probes
      fileList = fileList.concat(_partsList.probes.map(item => {
        if (item.id == probeSelected.value)
          return item.dependencies;
      }));
    }

    // cleanup because I'm lazy... and this is a PoC
    fileList = fileList.flat().filter(item => item != undefined);

    console.log(fileList);
    return fileList;
    // zipAndDownload(getDocumentList(), "/assets/stl/downloads");
  }

const loadDataSet = () => {
    const hotendSelect = document.getElementById('hotend');
    const extruderSelect = document.getElementById('extruder');
    const probeSelect = document.getElementById('probe');
    const tensionplateSelect = document.getElementById('tensionplate');
    const toothidlerSelect = document.getElementById('tidler');
    const zadapterSelect = document.getElementById('zadapter');

    hotendSelect.innerHTML = _partsList.hotends.reduce((prev, element) => {
      return `${prev}<option value="${element.id}">${element.name}</option>\r\n`;
    }, '');

    extruderSelect.innerHTML = _partsList.extruders.reduce((prev, element) => {
      return `${prev}<option value="${element.id}">${element.name}</option>\r\n`;
    }, '');

    probeSelect.innerHTML = _partsList.probes.reduce((prev, element) => {
      return `${prev}<option value="${element.id}">${element.name}</option>\r\n`;
    }, '');

    toothidlerSelect.innerHTML = _partsList.tidlers.reduce((prev, element) => {
      return `${prev}<option value="${element.id}">${element.name}</option>\r\n`;
    }, '');

    tensionplateSelect.innerHTML = _partsList.tensionplates.reduce((prev, element) => {
      return `${prev}<option value="${element.id}">${element.name}</option>\r\n`;
    }, '');

    zadapterSelect.innerHTML = _partsList.zadapters.reduce((prev, element) => {
      return `${prev}<option value="${element.id}">${element.name}</option>\r\n`;
    }, '');
};

const exportZip = (blobs, docArray, option) => {
    // use the jszip module to do the heavy lifting
    const zip = new JSZip();
    blobs.forEach((blob, i) => {
      zip.file(docArray[i], blob);
    });

    // zoom zoom
    zip.generateAsync({ type: 'blob' }).then(zipFile => {
      const fileName = option === 'Mercury'
        ? `Mercury1_1-${new Date().getTime()}.zip`
        : `EVA-Toolhead-${new Date().getTime()}.zip`;

      // use the fileSave module to handle security issues
      return saveAs(zipFile, fileName);
    });
  };

const download2Blob = urls => {
    // download all the files, then get the blob response
    return Promise.all(
        urls.map(url => {
        return fetch(url).then(resp => resp.blob());
        })
    );
};

const zipAndDownload = (docArray, base_uri = '', option) => {
    const elementToChange = option === 'Mercury' ? 'progressMerc' : 'progressEVA';
    document.getElementById(elementToChange).innerHTML = `<h5>The file is large and may take a while to download depending on your internet speed. If you encounter issues, try using a different browser.</h5>`;

    // Parent function to call from frontend
    // Base URI to be updated to change the file location
    const urls = docArray.map(item => `${base_uri}/${item}`);
    return download2Blob(urls, 5)
      .then(blobs => exportZip(blobs, docArray, option));
  };