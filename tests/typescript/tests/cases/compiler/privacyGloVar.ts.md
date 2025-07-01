__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 9
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 38
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 57,
                      "end": 59
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 62,
                        "end": 73
                      },
                      "expression": false,
                      "start": 59,
                      "end": 73
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 49,
                    "end": 73
                  }
                ],
                "start": 39,
                "end": 79
              },
              "abstract": false,
              "declare": false,
              "start": 23,
              "end": 79
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16,
            "end": 79
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 101
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 102,
              "end": 109
            },
            "abstract": false,
            "declare": false,
            "start": 85,
            "end": 109
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C3_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 137
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 156,
                      "end": 169
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 171,
                          "end": 180
                        },
                        "typeArguments": null,
                        "start": 171,
                        "end": 180
                      },
                      "start": 169,
                      "end": 180
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 148,
                    "end": 181
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v2_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 197,
                      "end": 209
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 211,
                          "end": 220
                        },
                        "typeArguments": null,
                        "start": 211,
                        "end": 220
                      },
                      "start": 209,
                      "end": 220
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 190,
                    "end": 221
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 238,
                      "end": 251
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 253,
                          "end": 263
                        },
                        "typeArguments": null,
                        "start": 253,
                        "end": 263
                      },
                      "start": 251,
                      "end": 263
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 230,
                    "end": 264
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v4_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 280,
                      "end": 292
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 294,
                          "end": 304
                        },
                        "typeArguments": null,
                        "start": 294,
                        "end": 304
                      },
                      "start": 292,
                      "end": 304
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 273,
                    "end": 305
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v11_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 332,
                      "end": 346
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 353,
                        "end": 362
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 349,
                      "end": 364
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 324,
                    "end": 365
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v12_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 381,
                      "end": 394
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 401,
                        "end": 410
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 397,
                      "end": 412
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 374,
                    "end": 413
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v13_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 430,
                      "end": 444
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 451,
                        "end": 461
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 447,
                      "end": 463
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 422,
                    "end": 464
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v14_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 480,
                      "end": 493
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 500,
                        "end": 510
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 496,
                      "end": 512
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 473,
                    "end": 513
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v21_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 540,
                      "end": 554
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 556,
                          "end": 565
                        },
                        "typeArguments": null,
                        "start": 556,
                        "end": 565
                      },
                      "start": 554,
                      "end": 565
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 572,
                        "end": 581
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 568,
                      "end": 583
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 532,
                    "end": 584
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v22_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 600,
                      "end": 613
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 615,
                          "end": 624
                        },
                        "typeArguments": null,
                        "start": 615,
                        "end": 624
                      },
                      "start": 613,
                      "end": 624
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 631,
                        "end": 640
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 627,
                      "end": 642
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 593,
                    "end": 643
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v23_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 660,
                      "end": 674
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 676,
                          "end": 686
                        },
                        "typeArguments": null,
                        "start": 676,
                        "end": 686
                      },
                      "start": 674,
                      "end": 686
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 693,
                        "end": 703
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 689,
                      "end": 705
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 652,
                    "end": 706
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v24_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 722,
                      "end": 735
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 737,
                          "end": 747
                        },
                        "typeArguments": null,
                        "start": 737,
                        "end": 747
                      },
                      "start": 735,
                      "end": 747
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 754,
                        "end": 764
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 750,
                      "end": 766
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 715,
                    "end": 767
                  }
                ],
                "start": 138,
                "end": 782
              },
              "abstract": false,
              "declare": false,
              "start": 122,
              "end": 782
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 115,
            "end": 782
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C4_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 794,
              "end": 803
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 822,
                    "end": 835
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 837,
                        "end": 846
                      },
                      "typeArguments": null,
                      "start": 837,
                      "end": 846
                    },
                    "start": 835,
                    "end": 846
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 814,
                  "end": 847
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v2_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 863,
                    "end": 875
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 877,
                        "end": 886
                      },
                      "typeArguments": null,
                      "start": 877,
                      "end": 886
                    },
                    "start": 875,
                    "end": 886
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 856,
                  "end": 887
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 904,
                    "end": 917
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 919,
                        "end": 929
                      },
                      "typeArguments": null,
                      "start": 919,
                      "end": 929
                    },
                    "start": 917,
                    "end": 929
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 896,
                  "end": 930
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v4_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 946,
                    "end": 958
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 960,
                        "end": 970
                      },
                      "typeArguments": null,
                      "start": 960,
                      "end": 970
                    },
                    "start": 958,
                    "end": 970
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 939,
                  "end": 971
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v11_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 989,
                    "end": 1003
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1010,
                      "end": 1019
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1006,
                    "end": 1021
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 981,
                  "end": 1022
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v12_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1038,
                    "end": 1051
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1058,
                      "end": 1067
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1054,
                    "end": 1069
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 1031,
                  "end": 1070
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v13_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1087,
                    "end": 1101
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1108,
                      "end": 1118
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1104,
                    "end": 1120
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 1079,
                  "end": 1121
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v14_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1137,
                    "end": 1150
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1157,
                      "end": 1167
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1153,
                    "end": 1169
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 1130,
                  "end": 1170
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v21_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1188,
                    "end": 1202
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1204,
                        "end": 1213
                      },
                      "typeArguments": null,
                      "start": 1204,
                      "end": 1213
                    },
                    "start": 1202,
                    "end": 1213
                  },
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1220,
                      "end": 1229
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1216,
                    "end": 1231
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 1180,
                  "end": 1232
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v22_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1248,
                    "end": 1261
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1263,
                        "end": 1272
                      },
                      "typeArguments": null,
                      "start": 1263,
                      "end": 1272
                    },
                    "start": 1261,
                    "end": 1272
                  },
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1279,
                      "end": 1288
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1275,
                    "end": 1290
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 1241,
                  "end": 1291
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v23_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1308,
                    "end": 1322
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1324,
                        "end": 1334
                      },
                      "typeArguments": null,
                      "start": 1324,
                      "end": 1334
                    },
                    "start": 1322,
                    "end": 1334
                  },
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1341,
                      "end": 1351
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1337,
                    "end": 1353
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 1300,
                  "end": 1354
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v24_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1370,
                    "end": 1383
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1385,
                        "end": 1395
                      },
                      "typeArguments": null,
                      "start": 1385,
                      "end": 1395
                    },
                    "start": 1383,
                    "end": 1395
                  },
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1402,
                      "end": 1412
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1398,
                    "end": 1414
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 1363,
                  "end": 1415
                }
              ],
              "start": 804,
              "end": 1421
            },
            "abstract": false,
            "declare": false,
            "start": 788,
            "end": 1421
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_v1_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1446,
                        "end": 1455
                      },
                      "typeArguments": null,
                      "start": 1446,
                      "end": 1455
                    },
                    "start": 1444,
                    "end": 1455
                  },
                  "start": 1431,
                  "end": 1455
                },
                "init": null,
                "definite": false,
                "start": 1431,
                "end": 1455
              }
            ],
            "declare": false,
            "start": 1427,
            "end": 1456
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_v2_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1486,
                          "end": 1495
                        },
                        "typeArguments": null,
                        "start": 1486,
                        "end": 1495
                      },
                      "start": 1484,
                      "end": 1495
                    },
                    "start": 1472,
                    "end": 1495
                  },
                  "init": null,
                  "definite": false,
                  "start": 1472,
                  "end": 1495
                }
              ],
              "declare": false,
              "start": 1468,
              "end": 1496
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1461,
            "end": 1496
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_v3_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1520,
                        "end": 1530
                      },
                      "typeArguments": null,
                      "start": 1520,
                      "end": 1530
                    },
                    "start": 1518,
                    "end": 1530
                  },
                  "start": 1505,
                  "end": 1530
                },
                "init": null,
                "definite": false,
                "start": 1505,
                "end": 1530
              }
            ],
            "declare": false,
            "start": 1501,
            "end": 1531
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_v4_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1561,
                          "end": 1571
                        },
                        "typeArguments": null,
                        "start": 1561,
                        "end": 1571
                      },
                      "start": 1559,
                      "end": 1571
                    },
                    "start": 1547,
                    "end": 1571
                  },
                  "init": null,
                  "definite": false,
                  "start": 1547,
                  "end": 1571
                }
              ],
              "declare": false,
              "start": 1543,
              "end": 1572
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1536,
            "end": 1572
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_v11_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1591,
                  "end": 1605
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1612,
                    "end": 1621
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 1608,
                  "end": 1623
                },
                "definite": false,
                "start": 1591,
                "end": 1623
              }
            ],
            "declare": false,
            "start": 1587,
            "end": 1624
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_v12_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1640,
                    "end": 1653
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1660,
                      "end": 1669
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1656,
                    "end": 1671
                  },
                  "definite": false,
                  "start": 1640,
                  "end": 1671
                }
              ],
              "declare": false,
              "start": 1636,
              "end": 1672
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1629,
            "end": 1672
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_v13_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1681,
                  "end": 1695
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1702,
                    "end": 1712
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 1698,
                  "end": 1714
                },
                "definite": false,
                "start": 1681,
                "end": 1714
              }
            ],
            "declare": false,
            "start": 1677,
            "end": 1715
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_v14_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1731,
                    "end": 1744
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1751,
                      "end": 1761
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1747,
                    "end": 1763
                  },
                  "definite": false,
                  "start": 1731,
                  "end": 1763
                }
              ],
              "declare": false,
              "start": 1727,
              "end": 1764
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1720,
            "end": 1764
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_v21_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1799,
                        "end": 1808
                      },
                      "typeArguments": null,
                      "start": 1799,
                      "end": 1808
                    },
                    "start": 1797,
                    "end": 1808
                  },
                  "start": 1783,
                  "end": 1808
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1815,
                    "end": 1824
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 1811,
                  "end": 1826
                },
                "definite": false,
                "start": 1783,
                "end": 1826
              }
            ],
            "declare": false,
            "start": 1779,
            "end": 1827
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_v22_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1858,
                          "end": 1867
                        },
                        "typeArguments": null,
                        "start": 1858,
                        "end": 1867
                      },
                      "start": 1856,
                      "end": 1867
                    },
                    "start": 1843,
                    "end": 1867
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1874,
                      "end": 1883
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1870,
                    "end": 1885
                  },
                  "definite": false,
                  "start": 1843,
                  "end": 1885
                }
              ],
              "declare": false,
              "start": 1839,
              "end": 1886
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1832,
            "end": 1886
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_v23_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1911,
                        "end": 1921
                      },
                      "typeArguments": null,
                      "start": 1911,
                      "end": 1921
                    },
                    "start": 1909,
                    "end": 1921
                  },
                  "start": 1895,
                  "end": 1921
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1928,
                    "end": 1938
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 1924,
                  "end": 1940
                },
                "definite": false,
                "start": 1895,
                "end": 1940
              }
            ],
            "declare": false,
            "start": 1891,
            "end": 1941
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_v24_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1972,
                          "end": 1982
                        },
                        "typeArguments": null,
                        "start": 1972,
                        "end": 1982
                      },
                      "start": 1970,
                      "end": 1982
                    },
                    "start": 1957,
                    "end": 1982
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1989,
                      "end": 1999
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1985,
                    "end": 2001
                  },
                  "definite": false,
                  "start": 1957,
                  "end": 2001
                }
              ],
              "declare": false,
              "start": 1953,
              "end": 2002
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1946,
            "end": 2002
          }
        ],
        "start": 10,
        "end": 2013
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 2013
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C1_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2021,
        "end": 2034
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2049,
              "end": 2051
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2054,
                "end": 2061
              },
              "expression": false,
              "start": 2051,
              "end": 2061
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2041,
            "end": 2061
          }
        ],
        "start": 2035,
        "end": 2063
      },
      "abstract": false,
      "declare": false,
      "start": 2015,
      "end": 2063
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C3_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2071,
        "end": 2084
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C3_v1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 2099,
              "end": 2116
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2118,
                  "end": 2131
                },
                "typeArguments": null,
                "start": 2118,
                "end": 2131
              },
              "start": 2116,
              "end": 2131
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 2091,
            "end": 2132
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C3_v2_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2144,
              "end": 2160
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2162,
                  "end": 2175
                },
                "typeArguments": null,
                "start": 2162,
                "end": 2175
              },
              "start": 2160,
              "end": 2175
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 2137,
            "end": 2176
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C3_v11_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 2190,
              "end": 2208
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2215,
                "end": 2228
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2211,
              "end": 2230
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 2182,
            "end": 2231
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C3_v12_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2243,
              "end": 2260
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2267,
                "end": 2280
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2263,
              "end": 2282
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 2236,
            "end": 2283
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C3_v21_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 2297,
              "end": 2315
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2317,
                  "end": 2330
                },
                "typeArguments": null,
                "start": 2317,
                "end": 2330
              },
              "start": 2315,
              "end": 2330
            },
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2337,
                "end": 2350
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2333,
              "end": 2352
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 2289,
            "end": 2353
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C3_v22_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2365,
              "end": 2382
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2384,
                  "end": 2397
                },
                "typeArguments": null,
                "start": 2384,
                "end": 2397
              },
              "start": 2382,
              "end": 2397
            },
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2404,
                "end": 2417
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2400,
              "end": 2419
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 2358,
            "end": 2420
          }
        ],
        "start": 2085,
        "end": 2422
      },
      "abstract": false,
      "declare": false,
      "start": 2065,
      "end": 2422
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "glo_v2_public",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2444,
                  "end": 2457
                },
                "typeArguments": null,
                "start": 2444,
                "end": 2457
              },
              "start": 2442,
              "end": 2457
            },
            "start": 2429,
            "end": 2457
          },
          "init": null,
          "definite": false,
          "start": 2429,
          "end": 2457
        }
      ],
      "declare": false,
      "start": 2425,
      "end": 2458
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "glo_v12_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2463,
            "end": 2477
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2484,
              "end": 2497
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2480,
            "end": 2499
          },
          "definite": false,
          "start": 2463,
          "end": 2499
        }
      ],
      "declare": false,
      "start": 2459,
      "end": 2500
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "glo_v22_public",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2521,
                  "end": 2534
                },
                "typeArguments": null,
                "start": 2521,
                "end": 2534
              },
              "start": 2519,
              "end": 2534
            },
            "start": 2505,
            "end": 2534
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2541,
              "end": 2554
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2537,
            "end": 2556
          },
          "definite": false,
          "start": 2505,
          "end": 2556
        }
      ],
      "declare": false,
      "start": 2501,
      "end": 2557
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2557
}
```
