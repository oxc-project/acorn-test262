__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 18,
                    "end": 24
                  },
                  "start": 16,
                  "end": 24
                },
                "start": 15,
                "end": 24
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 27,
                "end": 33
              },
              "start": 25,
              "end": 33
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 14,
            "end": 34
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 174,
              "end": 177
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 179,
                "end": 185
              },
              "start": 177,
              "end": 185
            },
            "value": {
              "type": "Literal",
              "value": "number",
              "raw": "\"number\"",
              "start": 188,
              "end": 196
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 167,
            "end": 197
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "-1",
              "raw": "\"-1\"",
              "start": 218,
              "end": 222
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 224,
                "end": 230
              },
              "start": 222,
              "end": 230
            },
            "value": {
              "type": "Literal",
              "value": "negative number",
              "raw": "\"negative number\"",
              "start": 233,
              "end": 250
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 211,
            "end": 251
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "-2.5",
              "raw": "\"-2.5\"",
              "start": 272,
              "end": 278
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 280,
                "end": 286
              },
              "start": 278,
              "end": 286
            },
            "value": {
              "type": "Literal",
              "value": "negative number",
              "raw": "\"negative number\"",
              "start": 289,
              "end": 306
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 265,
            "end": 307
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "3.141592",
              "raw": "\"3.141592\"",
              "start": 328,
              "end": 338
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 340,
                "end": 346
              },
              "start": 338,
              "end": 346
            },
            "value": {
              "type": "Literal",
              "value": "pi-sitive number",
              "raw": "\"pi-sitive number\"",
              "start": 349,
              "end": 367
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 321,
            "end": 368
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "1.2e-20",
              "raw": "\"1.2e-20\"",
              "start": 389,
              "end": 398
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 400,
                "end": 406
              },
              "start": 398,
              "end": 406
            },
            "value": {
              "type": "Literal",
              "value": "really small number",
              "raw": "\"really small number\"",
              "start": 409,
              "end": 430
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 382,
            "end": 431
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "Infinity",
              "raw": "\"Infinity\"",
              "start": 452,
              "end": 462
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 464,
                "end": 470
              },
              "start": 462,
              "end": 470
            },
            "value": {
              "type": "Literal",
              "value": "A gillion",
              "raw": "\"A gillion\"",
              "start": 473,
              "end": 484
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 445,
            "end": 485
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "-Infinity",
              "raw": "\"-Infinity\"",
              "start": 506,
              "end": 517
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 519,
                "end": 525
              },
              "start": 517,
              "end": 525
            },
            "value": {
              "type": "Literal",
              "value": "Negative-a-gillion",
              "raw": "\"Negative-a-gillion\"",
              "start": 528,
              "end": 548
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 499,
            "end": 549
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "NaN",
              "raw": "\"NaN\"",
              "start": 570,
              "end": 575
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 577,
                "end": 583
              },
              "start": 575,
              "end": 583
            },
            "value": {
              "type": "Literal",
              "value": "not a number",
              "raw": "\"not a number\"",
              "start": 586,
              "end": 600
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 563,
            "end": 601
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": " 1",
              "raw": "\" 1\"",
              "start": 738,
              "end": 742
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 744,
                "end": 750
              },
              "start": 742,
              "end": 750
            },
            "value": {
              "type": "Literal",
              "value": "leading space",
              "raw": "\"leading space\"",
              "start": 753,
              "end": 768
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 731,
            "end": 769
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "1    ",
              "raw": "\"1    \"",
              "start": 793,
              "end": 800
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 802,
                "end": 808
              },
              "start": 800,
              "end": 808
            },
            "value": {
              "type": "Literal",
              "value": "trailing space",
              "raw": "\"trailing space\"",
              "start": 811,
              "end": 827
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 786,
            "end": 828
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 852,
              "end": 854
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 856,
                "end": 862
              },
              "start": 854,
              "end": 862
            },
            "value": {
              "type": "Literal",
              "value": "no nothing",
              "raw": "\"no nothing\"",
              "start": 865,
              "end": 877
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 845,
            "end": 878
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "    ",
              "raw": "\"    \"",
              "start": 902,
              "end": 908
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 910,
                "end": 916
              },
              "start": 908,
              "end": 916
            },
            "value": {
              "type": "Literal",
              "value": "just space",
              "raw": "\"just space\"",
              "start": 919,
              "end": 931
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 895,
            "end": 932
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "1 0 1",
              "raw": "\"1 0 1\"",
              "start": 956,
              "end": 963
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 965,
                "end": 971
              },
              "start": 963,
              "end": 971
            },
            "value": {
              "type": "Literal",
              "value": "several numbers and spaces",
              "raw": "\"several numbers and spaces\"",
              "start": 974,
              "end": 1002
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 949,
            "end": 1003
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "hunter2",
              "raw": "\"hunter2\"",
              "start": 1027,
              "end": 1036
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1038,
                "end": 1044
              },
              "start": 1036,
              "end": 1044
            },
            "value": {
              "type": "Literal",
              "value": "not a password",
              "raw": "\"not a password\"",
              "start": 1047,
              "end": 1063
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1020,
            "end": 1064
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "+Infinity",
              "raw": "\"+Infinity\"",
              "start": 1088,
              "end": 1099
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1101,
                "end": 1107
              },
              "start": 1099,
              "end": 1107
            },
            "value": {
              "type": "Literal",
              "value": "A gillion",
              "raw": "\"A gillion\"",
              "start": 1110,
              "end": 1121
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1081,
            "end": 1122
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "+NaN",
              "raw": "\"+NaN\"",
              "start": 1146,
              "end": 1152
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1154,
                "end": 1160
              },
              "start": 1152,
              "end": 1160
            },
            "value": {
              "type": "Literal",
              "value": "not a positive number",
              "raw": "\"not a positive number\"",
              "start": 1163,
              "end": 1186
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1139,
            "end": 1187
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "-NaN",
              "raw": "\"-NaN\"",
              "start": 1211,
              "end": 1217
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1219,
                "end": 1225
              },
              "start": 1217,
              "end": 1225
            },
            "value": {
              "type": "Literal",
              "value": "not a negative number",
              "raw": "\"not a negative number\"",
              "start": 1228,
              "end": 1251
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1204,
            "end": 1252
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "+1",
              "raw": "\"+1\"",
              "start": 1479,
              "end": 1483
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1485,
                "end": 1491
              },
              "start": 1483,
              "end": 1491
            },
            "value": {
              "type": "Literal",
              "value": "positive number (for the paranoid)",
              "raw": "\"positive number (for the paranoid)\"",
              "start": 1494,
              "end": 1530
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1472,
            "end": 1531
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "1e0",
              "raw": "\"1e0\"",
              "start": 1555,
              "end": 1560
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1562,
                "end": 1568
              },
              "start": 1560,
              "end": 1568
            },
            "value": {
              "type": "Literal",
              "value": "just one",
              "raw": "\"just one\"",
              "start": 1571,
              "end": 1581
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1548,
            "end": 1582
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "-0",
              "raw": "\"-0\"",
              "start": 1606,
              "end": 1610
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1612,
                "end": 1618
              },
              "start": 1610,
              "end": 1618
            },
            "value": {
              "type": "Literal",
              "value": "just zero",
              "raw": "\"just zero\"",
              "start": 1621,
              "end": 1632
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1599,
            "end": 1633
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "-0e0",
              "raw": "\"-0e0\"",
              "start": 1657,
              "end": 1663
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1665,
                "end": 1671
              },
              "start": 1663,
              "end": 1671
            },
            "value": {
              "type": "Literal",
              "value": "just zero",
              "raw": "\"just zero\"",
              "start": 1674,
              "end": 1685
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1650,
            "end": 1686
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "0xF00D",
              "raw": "\"0xF00D\"",
              "start": 1710,
              "end": 1718
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1720,
                "end": 1726
              },
              "start": 1718,
              "end": 1726
            },
            "value": {
              "type": "Literal",
              "value": "hex food",
              "raw": "\"hex food\"",
              "start": 1729,
              "end": 1739
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1703,
            "end": 1740
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "0xBEEF",
              "raw": "\"0xBEEF\"",
              "start": 1764,
              "end": 1772
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1774,
                "end": 1780
              },
              "start": 1772,
              "end": 1780
            },
            "value": {
              "type": "Literal",
              "value": "hex beef",
              "raw": "\"hex beef\"",
              "start": 1783,
              "end": 1793
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1757,
            "end": 1794
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "0123",
              "raw": "\"0123\"",
              "start": 1818,
              "end": 1824
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1826,
                "end": 1832
              },
              "start": 1824,
              "end": 1832
            },
            "value": {
              "type": "Literal",
              "value": "oct 83",
              "raw": "\"oct 83\"",
              "start": 1835,
              "end": 1843
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1811,
            "end": 1844
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "0o123",
              "raw": "\"0o123\"",
              "start": 1868,
              "end": 1875
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1877,
                "end": 1883
              },
              "start": 1875,
              "end": 1883
            },
            "value": {
              "type": "Literal",
              "value": "explicit oct 83",
              "raw": "\"explicit oct 83\"",
              "start": 1886,
              "end": 1903
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1861,
            "end": 1904
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "0b101101001010",
              "raw": "\"0b101101001010\"",
              "start": 1928,
              "end": 1944
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1946,
                "end": 1952
              },
              "start": 1944,
              "end": 1952
            },
            "value": {
              "type": "Literal",
              "value": "explicit binary",
              "raw": "\"explicit binary\"",
              "start": 1955,
              "end": 1972
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1921,
            "end": 1973
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "0.000000000000000000012",
              "raw": "\"0.000000000000000000012\"",
              "start": 1997,
              "end": 2022
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2024,
                "end": 2030
              },
              "start": 2022,
              "end": 2030
            },
            "value": {
              "type": "Literal",
              "value": "should've been in exponential form",
              "raw": "\"should've been in exponential form\"",
              "start": 2033,
              "end": 2069
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1990,
            "end": 2070
          }
        ],
        "start": 8,
        "end": 2084
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 2084
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2084
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 18,
    "end": 24,
    "range": [
      18,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 27,
    "end": 33,
    "range": [
      27,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 167,
    "end": 173,
    "range": [
      167,
      173
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 174,
    "end": 177,
    "range": [
      174,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 179,
    "end": 185,
    "range": [
      179,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 188,
    "end": 196,
    "range": [
      188,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 211,
    "end": 217,
    "range": [
      211,
      217
    ]
  },
  {
    "type": "String",
    "value": "\"-1\"",
    "start": 218,
    "end": 222,
    "range": [
      218,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 224,
    "end": 230,
    "range": [
      224,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "String",
    "value": "\"negative number\"",
    "start": 233,
    "end": 250,
    "range": [
      233,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 265,
    "end": 271,
    "range": [
      265,
      271
    ]
  },
  {
    "type": "String",
    "value": "\"-2.5\"",
    "start": 272,
    "end": 278,
    "range": [
      272,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 280,
    "end": 286,
    "range": [
      280,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "String",
    "value": "\"negative number\"",
    "start": 289,
    "end": 306,
    "range": [
      289,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 321,
    "end": 327,
    "range": [
      321,
      327
    ]
  },
  {
    "type": "String",
    "value": "\"3.141592\"",
    "start": 328,
    "end": 338,
    "range": [
      328,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 340,
    "end": 346,
    "range": [
      340,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "String",
    "value": "\"pi-sitive number\"",
    "start": 349,
    "end": 367,
    "range": [
      349,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 382,
    "end": 388,
    "range": [
      382,
      388
    ]
  },
  {
    "type": "String",
    "value": "\"1.2e-20\"",
    "start": 389,
    "end": 398,
    "range": [
      389,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 400,
    "end": 406,
    "range": [
      400,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "String",
    "value": "\"really small number\"",
    "start": 409,
    "end": 430,
    "range": [
      409,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 445,
    "end": 451,
    "range": [
      445,
      451
    ]
  },
  {
    "type": "String",
    "value": "\"Infinity\"",
    "start": 452,
    "end": 462,
    "range": [
      452,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 464,
    "end": 470,
    "range": [
      464,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "String",
    "value": "\"A gillion\"",
    "start": 473,
    "end": 484,
    "range": [
      473,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 499,
    "end": 505,
    "range": [
      499,
      505
    ]
  },
  {
    "type": "String",
    "value": "\"-Infinity\"",
    "start": 506,
    "end": 517,
    "range": [
      506,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 519,
    "end": 525,
    "range": [
      519,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "String",
    "value": "\"Negative-a-gillion\"",
    "start": 528,
    "end": 548,
    "range": [
      528,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 563,
    "end": 569,
    "range": [
      563,
      569
    ]
  },
  {
    "type": "String",
    "value": "\"NaN\"",
    "start": 570,
    "end": 575,
    "range": [
      570,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 577,
    "end": 583,
    "range": [
      577,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "String",
    "value": "\"not a number\"",
    "start": 586,
    "end": 600,
    "range": [
      586,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 731,
    "end": 737,
    "range": [
      731,
      737
    ]
  },
  {
    "type": "String",
    "value": "\" 1\"",
    "start": 738,
    "end": 742,
    "range": [
      738,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 744,
    "end": 750,
    "range": [
      744,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "String",
    "value": "\"leading space\"",
    "start": 753,
    "end": 768,
    "range": [
      753,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 786,
    "end": 792,
    "range": [
      786,
      792
    ]
  },
  {
    "type": "String",
    "value": "\"1    \"",
    "start": 793,
    "end": 800,
    "range": [
      793,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 802,
    "end": 808,
    "range": [
      802,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "String",
    "value": "\"trailing space\"",
    "start": 811,
    "end": 827,
    "range": [
      811,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 845,
    "end": 851,
    "range": [
      845,
      851
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 852,
    "end": 854,
    "range": [
      852,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 856,
    "end": 862,
    "range": [
      856,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "String",
    "value": "\"no nothing\"",
    "start": 865,
    "end": 877,
    "range": [
      865,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 895,
    "end": 901,
    "range": [
      895,
      901
    ]
  },
  {
    "type": "String",
    "value": "\"    \"",
    "start": 902,
    "end": 908,
    "range": [
      902,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 910,
    "end": 916,
    "range": [
      910,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "String",
    "value": "\"just space\"",
    "start": 919,
    "end": 931,
    "range": [
      919,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 949,
    "end": 955,
    "range": [
      949,
      955
    ]
  },
  {
    "type": "String",
    "value": "\"1 0 1\"",
    "start": 956,
    "end": 963,
    "range": [
      956,
      963
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 965,
    "end": 971,
    "range": [
      965,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "String",
    "value": "\"several numbers and spaces\"",
    "start": 974,
    "end": 1002,
    "range": [
      974,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1020,
    "end": 1026,
    "range": [
      1020,
      1026
    ]
  },
  {
    "type": "String",
    "value": "\"hunter2\"",
    "start": 1027,
    "end": 1036,
    "range": [
      1027,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1038,
    "end": 1044,
    "range": [
      1038,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "String",
    "value": "\"not a password\"",
    "start": 1047,
    "end": 1063,
    "range": [
      1047,
      1063
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1081,
    "end": 1087,
    "range": [
      1081,
      1087
    ]
  },
  {
    "type": "String",
    "value": "\"+Infinity\"",
    "start": 1088,
    "end": 1099,
    "range": [
      1088,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1101,
    "end": 1107,
    "range": [
      1101,
      1107
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "String",
    "value": "\"A gillion\"",
    "start": 1110,
    "end": 1121,
    "range": [
      1110,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1139,
    "end": 1145,
    "range": [
      1139,
      1145
    ]
  },
  {
    "type": "String",
    "value": "\"+NaN\"",
    "start": 1146,
    "end": 1152,
    "range": [
      1146,
      1152
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1154,
    "end": 1160,
    "range": [
      1154,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "String",
    "value": "\"not a positive number\"",
    "start": 1163,
    "end": 1186,
    "range": [
      1163,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1204,
    "end": 1210,
    "range": [
      1204,
      1210
    ]
  },
  {
    "type": "String",
    "value": "\"-NaN\"",
    "start": 1211,
    "end": 1217,
    "range": [
      1211,
      1217
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1219,
    "end": 1225,
    "range": [
      1219,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1226,
    "end": 1227,
    "range": [
      1226,
      1227
    ]
  },
  {
    "type": "String",
    "value": "\"not a negative number\"",
    "start": 1228,
    "end": 1251,
    "range": [
      1228,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1472,
    "end": 1478,
    "range": [
      1472,
      1478
    ]
  },
  {
    "type": "String",
    "value": "\"+1\"",
    "start": 1479,
    "end": 1483,
    "range": [
      1479,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1485,
    "end": 1491,
    "range": [
      1485,
      1491
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1492,
    "end": 1493,
    "range": [
      1492,
      1493
    ]
  },
  {
    "type": "String",
    "value": "\"positive number (for the paranoid)\"",
    "start": 1494,
    "end": 1530,
    "range": [
      1494,
      1530
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1548,
    "end": 1554,
    "range": [
      1548,
      1554
    ]
  },
  {
    "type": "String",
    "value": "\"1e0\"",
    "start": 1555,
    "end": 1560,
    "range": [
      1555,
      1560
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1560,
    "end": 1561,
    "range": [
      1560,
      1561
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1562,
    "end": 1568,
    "range": [
      1562,
      1568
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1569,
    "end": 1570,
    "range": [
      1569,
      1570
    ]
  },
  {
    "type": "String",
    "value": "\"just one\"",
    "start": 1571,
    "end": 1581,
    "range": [
      1571,
      1581
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1599,
    "end": 1605,
    "range": [
      1599,
      1605
    ]
  },
  {
    "type": "String",
    "value": "\"-0\"",
    "start": 1606,
    "end": 1610,
    "range": [
      1606,
      1610
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1610,
    "end": 1611,
    "range": [
      1610,
      1611
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1612,
    "end": 1618,
    "range": [
      1612,
      1618
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1619,
    "end": 1620,
    "range": [
      1619,
      1620
    ]
  },
  {
    "type": "String",
    "value": "\"just zero\"",
    "start": 1621,
    "end": 1632,
    "range": [
      1621,
      1632
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1650,
    "end": 1656,
    "range": [
      1650,
      1656
    ]
  },
  {
    "type": "String",
    "value": "\"-0e0\"",
    "start": 1657,
    "end": 1663,
    "range": [
      1657,
      1663
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1663,
    "end": 1664,
    "range": [
      1663,
      1664
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1665,
    "end": 1671,
    "range": [
      1665,
      1671
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1672,
    "end": 1673,
    "range": [
      1672,
      1673
    ]
  },
  {
    "type": "String",
    "value": "\"just zero\"",
    "start": 1674,
    "end": 1685,
    "range": [
      1674,
      1685
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1685,
    "end": 1686,
    "range": [
      1685,
      1686
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1703,
    "end": 1709,
    "range": [
      1703,
      1709
    ]
  },
  {
    "type": "String",
    "value": "\"0xF00D\"",
    "start": 1710,
    "end": 1718,
    "range": [
      1710,
      1718
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1718,
    "end": 1719,
    "range": [
      1718,
      1719
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1720,
    "end": 1726,
    "range": [
      1720,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1727,
    "end": 1728,
    "range": [
      1727,
      1728
    ]
  },
  {
    "type": "String",
    "value": "\"hex food\"",
    "start": 1729,
    "end": 1739,
    "range": [
      1729,
      1739
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1757,
    "end": 1763,
    "range": [
      1757,
      1763
    ]
  },
  {
    "type": "String",
    "value": "\"0xBEEF\"",
    "start": 1764,
    "end": 1772,
    "range": [
      1764,
      1772
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1772,
    "end": 1773,
    "range": [
      1772,
      1773
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1774,
    "end": 1780,
    "range": [
      1774,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "String",
    "value": "\"hex beef\"",
    "start": 1783,
    "end": 1793,
    "range": [
      1783,
      1793
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1793,
    "end": 1794,
    "range": [
      1793,
      1794
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1811,
    "end": 1817,
    "range": [
      1811,
      1817
    ]
  },
  {
    "type": "String",
    "value": "\"0123\"",
    "start": 1818,
    "end": 1824,
    "range": [
      1818,
      1824
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1824,
    "end": 1825,
    "range": [
      1824,
      1825
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1826,
    "end": 1832,
    "range": [
      1826,
      1832
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "String",
    "value": "\"oct 83\"",
    "start": 1835,
    "end": 1843,
    "range": [
      1835,
      1843
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1843,
    "end": 1844,
    "range": [
      1843,
      1844
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1861,
    "end": 1867,
    "range": [
      1861,
      1867
    ]
  },
  {
    "type": "String",
    "value": "\"0o123\"",
    "start": 1868,
    "end": 1875,
    "range": [
      1868,
      1875
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1875,
    "end": 1876,
    "range": [
      1875,
      1876
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1877,
    "end": 1883,
    "range": [
      1877,
      1883
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "String",
    "value": "\"explicit oct 83\"",
    "start": 1886,
    "end": 1903,
    "range": [
      1886,
      1903
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1903,
    "end": 1904,
    "range": [
      1903,
      1904
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1921,
    "end": 1927,
    "range": [
      1921,
      1927
    ]
  },
  {
    "type": "String",
    "value": "\"0b101101001010\"",
    "start": 1928,
    "end": 1944,
    "range": [
      1928,
      1944
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1944,
    "end": 1945,
    "range": [
      1944,
      1945
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1946,
    "end": 1952,
    "range": [
      1946,
      1952
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1953,
    "end": 1954,
    "range": [
      1953,
      1954
    ]
  },
  {
    "type": "String",
    "value": "\"explicit binary\"",
    "start": 1955,
    "end": 1972,
    "range": [
      1955,
      1972
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1972,
    "end": 1973,
    "range": [
      1972,
      1973
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1990,
    "end": 1996,
    "range": [
      1990,
      1996
    ]
  },
  {
    "type": "String",
    "value": "\"0.000000000000000000012\"",
    "start": 1997,
    "end": 2022,
    "range": [
      1997,
      2022
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2022,
    "end": 2023,
    "range": [
      2022,
      2023
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2024,
    "end": 2030,
    "range": [
      2024,
      2030
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2031,
    "end": 2032,
    "range": [
      2031,
      2032
    ]
  },
  {
    "type": "String",
    "value": "\"should've been in exponential form\"",
    "start": 2033,
    "end": 2069,
    "range": [
      2033,
      2069
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2069,
    "end": 2070,
    "range": [
      2069,
      2070
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2083,
    "end": 2084,
    "range": [
      2083,
      2084
    ]
  }
]
```
