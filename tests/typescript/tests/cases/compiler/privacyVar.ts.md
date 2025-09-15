__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 19
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
                  "start": 39,
                  "end": 48
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
                        "start": 67,
                        "end": 69
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
                          "start": 72,
                          "end": 83
                        },
                        "expression": false,
                        "start": 69,
                        "end": 83
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 59,
                      "end": 83
                    }
                  ],
                  "start": 49,
                  "end": 89
                },
                "abstract": false,
                "declare": false,
                "start": 33,
                "end": 89
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 26,
              "end": 89
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
                "start": 101,
                "end": 111
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 112,
                "end": 119
              },
              "abstract": false,
              "declare": false,
              "start": 95,
              "end": 119
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
                  "start": 138,
                  "end": 147
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
                        "start": 166,
                        "end": 179
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
                            "start": 181,
                            "end": 190
                          },
                          "typeArguments": null,
                          "start": 181,
                          "end": 190
                        },
                        "start": 179,
                        "end": 190
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
                      "start": 158,
                      "end": 191
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
                        "start": 207,
                        "end": 219
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
                            "start": 221,
                            "end": 230
                          },
                          "typeArguments": null,
                          "start": 221,
                          "end": 230
                        },
                        "start": 219,
                        "end": 230
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
                      "start": 200,
                      "end": 231
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
                        "start": 248,
                        "end": 261
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
                            "start": 263,
                            "end": 273
                          },
                          "typeArguments": null,
                          "start": 263,
                          "end": 273
                        },
                        "start": 261,
                        "end": 273
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
                      "start": 240,
                      "end": 274
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
                        "start": 290,
                        "end": 302
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
                            "start": 304,
                            "end": 314
                          },
                          "typeArguments": null,
                          "start": 304,
                          "end": 314
                        },
                        "start": 302,
                        "end": 314
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
                      "start": 283,
                      "end": 315
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
                        "start": 342,
                        "end": 356
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
                          "start": 363,
                          "end": 372
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 359,
                        "end": 374
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "private",
                      "start": 334,
                      "end": 375
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
                        "start": 391,
                        "end": 404
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
                          "start": 411,
                          "end": 420
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 407,
                        "end": 422
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "public",
                      "start": 384,
                      "end": 423
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
                        "start": 440,
                        "end": 454
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
                          "start": 461,
                          "end": 471
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 457,
                        "end": 473
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "private",
                      "start": 432,
                      "end": 474
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
                        "start": 490,
                        "end": 503
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
                          "start": 510,
                          "end": 520
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 506,
                        "end": 522
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "public",
                      "start": 483,
                      "end": 523
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
                        "start": 550,
                        "end": 564
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
                            "start": 566,
                            "end": 575
                          },
                          "typeArguments": null,
                          "start": 566,
                          "end": 575
                        },
                        "start": 564,
                        "end": 575
                      },
                      "value": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 582,
                          "end": 591
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 578,
                        "end": 593
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "private",
                      "start": 542,
                      "end": 594
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
                        "start": 610,
                        "end": 623
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
                            "start": 625,
                            "end": 634
                          },
                          "typeArguments": null,
                          "start": 625,
                          "end": 634
                        },
                        "start": 623,
                        "end": 634
                      },
                      "value": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 641,
                          "end": 650
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 637,
                        "end": 652
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "public",
                      "start": 603,
                      "end": 653
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
                        "start": 670,
                        "end": 684
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
                            "start": 686,
                            "end": 696
                          },
                          "typeArguments": null,
                          "start": 686,
                          "end": 696
                        },
                        "start": 684,
                        "end": 696
                      },
                      "value": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 703,
                          "end": 713
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 699,
                        "end": 715
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "private",
                      "start": 662,
                      "end": 716
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
                        "start": 732,
                        "end": 745
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
                            "start": 747,
                            "end": 757
                          },
                          "typeArguments": null,
                          "start": 747,
                          "end": 757
                        },
                        "start": 745,
                        "end": 757
                      },
                      "value": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 764,
                          "end": 774
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 760,
                        "end": 776
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "public",
                      "start": 725,
                      "end": 777
                    }
                  ],
                  "start": 148,
                  "end": 792
                },
                "abstract": false,
                "declare": false,
                "start": 132,
                "end": 792
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 125,
              "end": 792
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
                "start": 804,
                "end": 813
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
                      "start": 832,
                      "end": 845
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
                          "start": 847,
                          "end": 856
                        },
                        "typeArguments": null,
                        "start": 847,
                        "end": 856
                      },
                      "start": 845,
                      "end": 856
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
                    "start": 824,
                    "end": 857
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
                      "start": 873,
                      "end": 885
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
                          "start": 887,
                          "end": 896
                        },
                        "typeArguments": null,
                        "start": 887,
                        "end": 896
                      },
                      "start": 885,
                      "end": 896
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
                    "start": 866,
                    "end": 897
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
                      "start": 914,
                      "end": 927
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
                          "start": 929,
                          "end": 939
                        },
                        "typeArguments": null,
                        "start": 929,
                        "end": 939
                      },
                      "start": 927,
                      "end": 939
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
                    "start": 906,
                    "end": 940
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
                      "start": 956,
                      "end": 968
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
                          "start": 970,
                          "end": 980
                        },
                        "typeArguments": null,
                        "start": 970,
                        "end": 980
                      },
                      "start": 968,
                      "end": 980
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
                    "start": 949,
                    "end": 981
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
                      "start": 999,
                      "end": 1013
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
                        "start": 1020,
                        "end": 1029
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1016,
                      "end": 1031
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 991,
                    "end": 1032
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
                      "start": 1048,
                      "end": 1061
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
                        "start": 1068,
                        "end": 1077
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1064,
                      "end": 1079
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 1041,
                    "end": 1080
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
                      "start": 1097,
                      "end": 1111
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
                        "start": 1118,
                        "end": 1128
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1114,
                      "end": 1130
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 1089,
                    "end": 1131
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
                      "start": 1147,
                      "end": 1160
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
                        "start": 1167,
                        "end": 1177
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1163,
                      "end": 1179
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 1140,
                    "end": 1180
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
                      "start": 1198,
                      "end": 1212
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
                          "start": 1214,
                          "end": 1223
                        },
                        "typeArguments": null,
                        "start": 1214,
                        "end": 1223
                      },
                      "start": 1212,
                      "end": 1223
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1230,
                        "end": 1239
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1226,
                      "end": 1241
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 1190,
                    "end": 1242
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
                      "start": 1258,
                      "end": 1271
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
                          "start": 1273,
                          "end": 1282
                        },
                        "typeArguments": null,
                        "start": 1273,
                        "end": 1282
                      },
                      "start": 1271,
                      "end": 1282
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1289,
                        "end": 1298
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1285,
                      "end": 1300
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 1251,
                    "end": 1301
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
                      "start": 1318,
                      "end": 1332
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
                          "start": 1334,
                          "end": 1344
                        },
                        "typeArguments": null,
                        "start": 1334,
                        "end": 1344
                      },
                      "start": 1332,
                      "end": 1344
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1351,
                        "end": 1361
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1347,
                      "end": 1363
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 1310,
                    "end": 1364
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
                      "start": 1380,
                      "end": 1393
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
                          "start": 1395,
                          "end": 1405
                        },
                        "typeArguments": null,
                        "start": 1395,
                        "end": 1405
                      },
                      "start": 1393,
                      "end": 1405
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1412,
                        "end": 1422
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1408,
                      "end": 1424
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 1373,
                    "end": 1425
                  }
                ],
                "start": 814,
                "end": 1431
              },
              "abstract": false,
              "declare": false,
              "start": 798,
              "end": 1431
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
                          "start": 1456,
                          "end": 1465
                        },
                        "typeArguments": null,
                        "start": 1456,
                        "end": 1465
                      },
                      "start": 1454,
                      "end": 1465
                    },
                    "start": 1441,
                    "end": 1465
                  },
                  "init": null,
                  "definite": false,
                  "start": 1441,
                  "end": 1465
                }
              ],
              "declare": false,
              "start": 1437,
              "end": 1466
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
                            "start": 1496,
                            "end": 1505
                          },
                          "typeArguments": null,
                          "start": 1496,
                          "end": 1505
                        },
                        "start": 1494,
                        "end": 1505
                      },
                      "start": 1482,
                      "end": 1505
                    },
                    "init": null,
                    "definite": false,
                    "start": 1482,
                    "end": 1505
                  }
                ],
                "declare": false,
                "start": 1478,
                "end": 1506
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1471,
              "end": 1506
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
                          "start": 1530,
                          "end": 1540
                        },
                        "typeArguments": null,
                        "start": 1530,
                        "end": 1540
                      },
                      "start": 1528,
                      "end": 1540
                    },
                    "start": 1515,
                    "end": 1540
                  },
                  "init": null,
                  "definite": false,
                  "start": 1515,
                  "end": 1540
                }
              ],
              "declare": false,
              "start": 1511,
              "end": 1541
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
                            "start": 1571,
                            "end": 1581
                          },
                          "typeArguments": null,
                          "start": 1571,
                          "end": 1581
                        },
                        "start": 1569,
                        "end": 1581
                      },
                      "start": 1557,
                      "end": 1581
                    },
                    "init": null,
                    "definite": false,
                    "start": 1557,
                    "end": 1581
                  }
                ],
                "declare": false,
                "start": 1553,
                "end": 1582
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1546,
              "end": 1582
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
                    "start": 1601,
                    "end": 1615
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1622,
                      "end": 1631
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1618,
                    "end": 1633
                  },
                  "definite": false,
                  "start": 1601,
                  "end": 1633
                }
              ],
              "declare": false,
              "start": 1597,
              "end": 1634
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
                      "start": 1650,
                      "end": 1663
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1670,
                        "end": 1679
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1666,
                      "end": 1681
                    },
                    "definite": false,
                    "start": 1650,
                    "end": 1681
                  }
                ],
                "declare": false,
                "start": 1646,
                "end": 1682
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1639,
              "end": 1682
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
                    "start": 1691,
                    "end": 1705
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1712,
                      "end": 1722
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1708,
                    "end": 1724
                  },
                  "definite": false,
                  "start": 1691,
                  "end": 1724
                }
              ],
              "declare": false,
              "start": 1687,
              "end": 1725
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
                      "start": 1741,
                      "end": 1754
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1761,
                        "end": 1771
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1757,
                      "end": 1773
                    },
                    "definite": false,
                    "start": 1741,
                    "end": 1773
                  }
                ],
                "declare": false,
                "start": 1737,
                "end": 1774
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1730,
              "end": 1774
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
                          "start": 1809,
                          "end": 1818
                        },
                        "typeArguments": null,
                        "start": 1809,
                        "end": 1818
                      },
                      "start": 1807,
                      "end": 1818
                    },
                    "start": 1793,
                    "end": 1818
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1825,
                      "end": 1834
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1821,
                    "end": 1836
                  },
                  "definite": false,
                  "start": 1793,
                  "end": 1836
                }
              ],
              "declare": false,
              "start": 1789,
              "end": 1837
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
                            "start": 1868,
                            "end": 1877
                          },
                          "typeArguments": null,
                          "start": 1868,
                          "end": 1877
                        },
                        "start": 1866,
                        "end": 1877
                      },
                      "start": 1853,
                      "end": 1877
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1884,
                        "end": 1893
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1880,
                      "end": 1895
                    },
                    "definite": false,
                    "start": 1853,
                    "end": 1895
                  }
                ],
                "declare": false,
                "start": 1849,
                "end": 1896
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1842,
              "end": 1896
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
                          "start": 1921,
                          "end": 1931
                        },
                        "typeArguments": null,
                        "start": 1921,
                        "end": 1931
                      },
                      "start": 1919,
                      "end": 1931
                    },
                    "start": 1905,
                    "end": 1931
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1938,
                      "end": 1948
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1934,
                    "end": 1950
                  },
                  "definite": false,
                  "start": 1905,
                  "end": 1950
                }
              ],
              "declare": false,
              "start": 1901,
              "end": 1951
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
                            "start": 1982,
                            "end": 1992
                          },
                          "typeArguments": null,
                          "start": 1982,
                          "end": 1992
                        },
                        "start": 1980,
                        "end": 1992
                      },
                      "start": 1967,
                      "end": 1992
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1999,
                        "end": 2009
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1995,
                      "end": 2011
                    },
                    "definite": false,
                    "start": 1967,
                    "end": 2011
                  }
                ],
                "declare": false,
                "start": 1963,
                "end": 2012
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1956,
              "end": 2012
            }
          ],
          "start": 20,
          "end": 2023
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 2023
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 2023
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2035,
        "end": 2037
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
                "name": "m2_C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2057,
                "end": 2069
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
                      "start": 2088,
                      "end": 2090
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
                        "start": 2093,
                        "end": 2104
                      },
                      "expression": false,
                      "start": 2090,
                      "end": 2104
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 2080,
                    "end": 2104
                  }
                ],
                "start": 2070,
                "end": 2110
              },
              "abstract": false,
              "declare": false,
              "start": 2051,
              "end": 2110
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2044,
            "end": 2110
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_C2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 2122,
              "end": 2135
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 2136,
              "end": 2143
            },
            "abstract": false,
            "declare": false,
            "start": 2116,
            "end": 2143
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_C3_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2162,
                "end": 2174
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
                      "name": "m2_C3_v1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2193,
                      "end": 2209
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m2_C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2211,
                          "end": 2223
                        },
                        "typeArguments": null,
                        "start": 2211,
                        "end": 2223
                      },
                      "start": 2209,
                      "end": 2223
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
                    "start": 2185,
                    "end": 2224
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C3_v2_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2240,
                      "end": 2255
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m2_C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2257,
                          "end": 2269
                        },
                        "typeArguments": null,
                        "start": 2257,
                        "end": 2269
                      },
                      "start": 2255,
                      "end": 2269
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
                    "start": 2233,
                    "end": 2270
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C3_v3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2287,
                      "end": 2303
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m2_C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2305,
                          "end": 2318
                        },
                        "typeArguments": null,
                        "start": 2305,
                        "end": 2318
                      },
                      "start": 2303,
                      "end": 2318
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
                    "start": 2279,
                    "end": 2319
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C3_v4_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2335,
                      "end": 2350
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m2_C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2352,
                          "end": 2365
                        },
                        "typeArguments": null,
                        "start": 2352,
                        "end": 2365
                      },
                      "start": 2350,
                      "end": 2365
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
                    "start": 2328,
                    "end": 2366
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C3_v11_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2384,
                      "end": 2401
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2408,
                        "end": 2420
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2404,
                      "end": 2422
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 2376,
                    "end": 2423
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C3_v12_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2439,
                      "end": 2455
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2462,
                        "end": 2474
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2458,
                      "end": 2476
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 2432,
                    "end": 2477
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C3_v13_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2494,
                      "end": 2511
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2518,
                        "end": 2531
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2514,
                      "end": 2533
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 2486,
                    "end": 2534
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C3_v14_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2550,
                      "end": 2566
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2573,
                        "end": 2586
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2569,
                      "end": 2588
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 2543,
                    "end": 2589
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C3_v21_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2608,
                      "end": 2625
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m2_C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2627,
                          "end": 2639
                        },
                        "typeArguments": null,
                        "start": 2627,
                        "end": 2639
                      },
                      "start": 2625,
                      "end": 2639
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2646,
                        "end": 2658
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2642,
                      "end": 2660
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 2600,
                    "end": 2661
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C3_v22_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2677,
                      "end": 2693
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m2_C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2695,
                          "end": 2707
                        },
                        "typeArguments": null,
                        "start": 2695,
                        "end": 2707
                      },
                      "start": 2693,
                      "end": 2707
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2714,
                        "end": 2726
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2710,
                      "end": 2728
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 2670,
                    "end": 2729
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C3_v23_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2746,
                      "end": 2763
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m2_C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2765,
                          "end": 2778
                        },
                        "typeArguments": null,
                        "start": 2765,
                        "end": 2778
                      },
                      "start": 2763,
                      "end": 2778
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2785,
                        "end": 2798
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2781,
                      "end": 2800
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 2738,
                    "end": 2801
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C3_v24_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2817,
                      "end": 2833
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m2_C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2835,
                          "end": 2848
                        },
                        "typeArguments": null,
                        "start": 2835,
                        "end": 2848
                      },
                      "start": 2833,
                      "end": 2848
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2855,
                        "end": 2868
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2851,
                      "end": 2870
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 2810,
                    "end": 2871
                  }
                ],
                "start": 2175,
                "end": 2877
              },
              "abstract": false,
              "declare": false,
              "start": 2156,
              "end": 2877
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2149,
            "end": 2877
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_C4_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2889,
              "end": 2901
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
                    "name": "m2_C4_v1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2920,
                    "end": 2936
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2938,
                        "end": 2950
                      },
                      "typeArguments": null,
                      "start": 2938,
                      "end": 2950
                    },
                    "start": 2936,
                    "end": 2950
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
                  "start": 2912,
                  "end": 2951
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_C4_v2_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2967,
                    "end": 2982
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2984,
                        "end": 2996
                      },
                      "typeArguments": null,
                      "start": 2984,
                      "end": 2996
                    },
                    "start": 2982,
                    "end": 2996
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
                  "start": 2960,
                  "end": 2997
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_C4_v3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3014,
                    "end": 3030
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3032,
                        "end": 3045
                      },
                      "typeArguments": null,
                      "start": 3032,
                      "end": 3045
                    },
                    "start": 3030,
                    "end": 3045
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
                  "start": 3006,
                  "end": 3046
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_C4_v4_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3062,
                    "end": 3077
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3079,
                        "end": 3092
                      },
                      "typeArguments": null,
                      "start": 3079,
                      "end": 3092
                    },
                    "start": 3077,
                    "end": 3092
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
                  "start": 3055,
                  "end": 3093
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_C4_v11_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3111,
                    "end": 3128
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3135,
                      "end": 3147
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3131,
                    "end": 3149
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 3103,
                  "end": 3150
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_C4_v12_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3166,
                    "end": 3182
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3189,
                      "end": 3201
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3185,
                    "end": 3203
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 3159,
                  "end": 3204
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_C4_v13_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3221,
                    "end": 3238
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3245,
                      "end": 3258
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3241,
                    "end": 3260
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 3213,
                  "end": 3261
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_C4_v14_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3277,
                    "end": 3293
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3300,
                      "end": 3313
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3296,
                    "end": 3315
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 3270,
                  "end": 3316
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_C4_v21_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3334,
                    "end": 3351
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3353,
                        "end": 3365
                      },
                      "typeArguments": null,
                      "start": 3353,
                      "end": 3365
                    },
                    "start": 3351,
                    "end": 3365
                  },
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3372,
                      "end": 3384
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3368,
                    "end": 3386
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 3326,
                  "end": 3387
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_C4_v22_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3403,
                    "end": 3419
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3421,
                        "end": 3433
                      },
                      "typeArguments": null,
                      "start": 3421,
                      "end": 3433
                    },
                    "start": 3419,
                    "end": 3433
                  },
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3440,
                      "end": 3452
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3436,
                    "end": 3454
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 3396,
                  "end": 3455
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_C4_v23_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3472,
                    "end": 3489
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3491,
                        "end": 3504
                      },
                      "typeArguments": null,
                      "start": 3491,
                      "end": 3504
                    },
                    "start": 3489,
                    "end": 3504
                  },
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3511,
                      "end": 3524
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3507,
                    "end": 3526
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 3464,
                  "end": 3527
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_C4_v24_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3543,
                    "end": 3559
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3561,
                        "end": 3574
                      },
                      "typeArguments": null,
                      "start": 3561,
                      "end": 3574
                    },
                    "start": 3559,
                    "end": 3574
                  },
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3581,
                      "end": 3594
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3577,
                    "end": 3596
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 3536,
                  "end": 3597
                }
              ],
              "start": 2902,
              "end": 3603
            },
            "abstract": false,
            "declare": false,
            "start": 2883,
            "end": 3603
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
                  "name": "m2_v1_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3628,
                        "end": 3640
                      },
                      "typeArguments": null,
                      "start": 3628,
                      "end": 3640
                    },
                    "start": 3626,
                    "end": 3640
                  },
                  "start": 3613,
                  "end": 3640
                },
                "init": null,
                "definite": false,
                "start": 3613,
                "end": 3640
              }
            ],
            "declare": false,
            "start": 3609,
            "end": 3641
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
                    "name": "m2_v2_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m2_C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3671,
                          "end": 3683
                        },
                        "typeArguments": null,
                        "start": 3671,
                        "end": 3683
                      },
                      "start": 3669,
                      "end": 3683
                    },
                    "start": 3657,
                    "end": 3683
                  },
                  "init": null,
                  "definite": false,
                  "start": 3657,
                  "end": 3683
                }
              ],
              "declare": false,
              "start": 3653,
              "end": 3684
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3646,
            "end": 3684
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
                  "name": "m2_v3_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3708,
                        "end": 3721
                      },
                      "typeArguments": null,
                      "start": 3708,
                      "end": 3721
                    },
                    "start": 3706,
                    "end": 3721
                  },
                  "start": 3693,
                  "end": 3721
                },
                "init": null,
                "definite": false,
                "start": 3693,
                "end": 3721
              }
            ],
            "declare": false,
            "start": 3689,
            "end": 3722
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
                    "name": "m2_v4_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m2_C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3752,
                          "end": 3765
                        },
                        "typeArguments": null,
                        "start": 3752,
                        "end": 3765
                      },
                      "start": 3750,
                      "end": 3765
                    },
                    "start": 3738,
                    "end": 3765
                  },
                  "init": null,
                  "definite": false,
                  "start": 3738,
                  "end": 3765
                }
              ],
              "declare": false,
              "start": 3734,
              "end": 3766
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3727,
            "end": 3766
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
                  "name": "m2_v11_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3777,
                  "end": 3791
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_C1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3798,
                    "end": 3810
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 3794,
                  "end": 3812
                },
                "definite": false,
                "start": 3777,
                "end": 3812
              }
            ],
            "declare": false,
            "start": 3773,
            "end": 3813
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
                    "name": "m2_v12_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3829,
                    "end": 3842
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3849,
                      "end": 3861
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3845,
                    "end": 3863
                  },
                  "definite": false,
                  "start": 3829,
                  "end": 3863
                }
              ],
              "declare": false,
              "start": 3825,
              "end": 3864
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3818,
            "end": 3864
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
                  "name": "m2_v13_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3873,
                  "end": 3887
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_C2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3894,
                    "end": 3907
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 3890,
                  "end": 3909
                },
                "definite": false,
                "start": 3873,
                "end": 3909
              }
            ],
            "declare": false,
            "start": 3869,
            "end": 3910
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
                    "name": "m2_v14_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3926,
                    "end": 3939
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3946,
                      "end": 3959
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3942,
                    "end": 3961
                  },
                  "definite": false,
                  "start": 3926,
                  "end": 3961
                }
              ],
              "declare": false,
              "start": 3922,
              "end": 3962
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3915,
            "end": 3962
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
                  "name": "m2_v21_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3989,
                        "end": 4001
                      },
                      "typeArguments": null,
                      "start": 3989,
                      "end": 4001
                    },
                    "start": 3987,
                    "end": 4001
                  },
                  "start": 3973,
                  "end": 4001
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_C1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4008,
                    "end": 4020
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 4004,
                  "end": 4022
                },
                "definite": false,
                "start": 3973,
                "end": 4022
              }
            ],
            "declare": false,
            "start": 3969,
            "end": 4023
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
                    "name": "m2_v22_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m2_C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4054,
                          "end": 4066
                        },
                        "typeArguments": null,
                        "start": 4054,
                        "end": 4066
                      },
                      "start": 4052,
                      "end": 4066
                    },
                    "start": 4039,
                    "end": 4066
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4073,
                      "end": 4085
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 4069,
                    "end": 4087
                  },
                  "definite": false,
                  "start": 4039,
                  "end": 4087
                }
              ],
              "declare": false,
              "start": 4035,
              "end": 4088
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4028,
            "end": 4088
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
                  "name": "m2_v23_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4113,
                        "end": 4126
                      },
                      "typeArguments": null,
                      "start": 4113,
                      "end": 4126
                    },
                    "start": 4111,
                    "end": 4126
                  },
                  "start": 4097,
                  "end": 4126
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_C2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4133,
                    "end": 4146
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 4129,
                  "end": 4148
                },
                "definite": false,
                "start": 4097,
                "end": 4148
              }
            ],
            "declare": false,
            "start": 4093,
            "end": 4149
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
                    "name": "m2_v24_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m2_C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4180,
                          "end": 4193
                        },
                        "typeArguments": null,
                        "start": 4180,
                        "end": 4193
                      },
                      "start": 4178,
                      "end": 4193
                    },
                    "start": 4165,
                    "end": 4193
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4200,
                      "end": 4213
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 4196,
                    "end": 4215
                  },
                  "definite": false,
                  "start": 4165,
                  "end": 4215
                }
              ],
              "declare": false,
              "start": 4161,
              "end": 4216
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4154,
            "end": 4216
          }
        ],
        "start": 2038,
        "end": 4219
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2025,
      "end": 4219
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_C1_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 4234,
          "end": 4247
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
                "start": 4262,
                "end": 4264
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
                  "start": 4267,
                  "end": 4274
                },
                "expression": false,
                "start": 4264,
                "end": 4274
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 4254,
              "end": 4274
            }
          ],
          "start": 4248,
          "end": 4276
        },
        "abstract": false,
        "declare": false,
        "start": 4228,
        "end": 4276
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4221,
      "end": 4276
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C2_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 4284,
        "end": 4298
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 4299,
        "end": 4302
      },
      "abstract": false,
      "declare": false,
      "start": 4278,
      "end": 4302
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_C3_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 4317,
          "end": 4330
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
                "start": 4345,
                "end": 4362
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
                    "start": 4364,
                    "end": 4377
                  },
                  "typeArguments": null,
                  "start": 4364,
                  "end": 4377
                },
                "start": 4362,
                "end": 4377
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
              "start": 4337,
              "end": 4378
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
                "start": 4390,
                "end": 4406
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
                    "start": 4408,
                    "end": 4421
                  },
                  "typeArguments": null,
                  "start": 4408,
                  "end": 4421
                },
                "start": 4406,
                "end": 4421
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
              "start": 4383,
              "end": 4422
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C3_v3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4435,
                "end": 4452
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "glo_C2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4454,
                    "end": 4468
                  },
                  "typeArguments": null,
                  "start": 4454,
                  "end": 4468
                },
                "start": 4452,
                "end": 4468
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
              "start": 4427,
              "end": 4469
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C3_v4_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 4481,
                "end": 4497
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "glo_C2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4499,
                    "end": 4513
                  },
                  "typeArguments": null,
                  "start": 4499,
                  "end": 4513
                },
                "start": 4497,
                "end": 4513
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
              "start": 4474,
              "end": 4514
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
                "start": 4536,
                "end": 4554
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
                  "start": 4561,
                  "end": 4574
                },
                "typeArguments": null,
                "arguments": [],
                "start": 4557,
                "end": 4576
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 4528,
              "end": 4577
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
                "start": 4589,
                "end": 4606
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
                  "start": 4613,
                  "end": 4626
                },
                "typeArguments": null,
                "arguments": [],
                "start": 4609,
                "end": 4628
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 4582,
              "end": 4629
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C3_v13_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4642,
                "end": 4660
              },
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4667,
                  "end": 4681
                },
                "typeArguments": null,
                "arguments": [],
                "start": 4663,
                "end": 4683
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 4634,
              "end": 4684
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C3_v14_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 4696,
                "end": 4713
              },
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4720,
                  "end": 4734
                },
                "typeArguments": null,
                "arguments": [],
                "start": 4716,
                "end": 4736
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 4689,
              "end": 4737
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
                "start": 4761,
                "end": 4779
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
                    "start": 4781,
                    "end": 4794
                  },
                  "typeArguments": null,
                  "start": 4781,
                  "end": 4794
                },
                "start": 4779,
                "end": 4794
              },
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4801,
                  "end": 4814
                },
                "typeArguments": null,
                "arguments": [],
                "start": 4797,
                "end": 4816
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 4753,
              "end": 4817
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
                "start": 4829,
                "end": 4846
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
                    "start": 4848,
                    "end": 4861
                  },
                  "typeArguments": null,
                  "start": 4848,
                  "end": 4861
                },
                "start": 4846,
                "end": 4861
              },
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4868,
                  "end": 4881
                },
                "typeArguments": null,
                "arguments": [],
                "start": 4864,
                "end": 4883
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 4822,
              "end": 4884
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C3_v23_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4897,
                "end": 4915
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "glo_C2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4917,
                    "end": 4931
                  },
                  "typeArguments": null,
                  "start": 4917,
                  "end": 4931
                },
                "start": 4915,
                "end": 4931
              },
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4938,
                  "end": 4952
                },
                "typeArguments": null,
                "arguments": [],
                "start": 4934,
                "end": 4954
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 4889,
              "end": 4955
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C3_v24_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 4967,
                "end": 4984
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "glo_C2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4986,
                    "end": 5000
                  },
                  "typeArguments": null,
                  "start": 4986,
                  "end": 5000
                },
                "start": 4984,
                "end": 5000
              },
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5007,
                  "end": 5021
                },
                "typeArguments": null,
                "arguments": [],
                "start": 5003,
                "end": 5023
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 4960,
              "end": 5024
            }
          ],
          "start": 4331,
          "end": 5034
        },
        "abstract": false,
        "declare": false,
        "start": 4311,
        "end": 5034
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4304,
      "end": 5034
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C4_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 5042,
        "end": 5055
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
              "name": "glo_C4_v1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 5070,
              "end": 5087
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
                  "start": 5089,
                  "end": 5102
                },
                "typeArguments": null,
                "start": 5089,
                "end": 5102
              },
              "start": 5087,
              "end": 5102
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
            "start": 5062,
            "end": 5103
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C4_v2_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5115,
              "end": 5131
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
                  "start": 5133,
                  "end": 5146
                },
                "typeArguments": null,
                "start": 5133,
                "end": 5146
              },
              "start": 5131,
              "end": 5146
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
            "start": 5108,
            "end": 5147
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C4_v3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 5160,
              "end": 5177
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5179,
                  "end": 5193
                },
                "typeArguments": null,
                "start": 5179,
                "end": 5193
              },
              "start": 5177,
              "end": 5193
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
            "start": 5152,
            "end": 5194
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C4_v4_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5206,
              "end": 5222
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5224,
                  "end": 5238
                },
                "typeArguments": null,
                "start": 5224,
                "end": 5238
              },
              "start": 5222,
              "end": 5238
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
            "start": 5199,
            "end": 5239
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C4_v11_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 5253,
              "end": 5271
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
                "start": 5278,
                "end": 5291
              },
              "typeArguments": null,
              "arguments": [],
              "start": 5274,
              "end": 5293
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 5245,
            "end": 5294
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C4_v12_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5306,
              "end": 5323
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
                "start": 5330,
                "end": 5343
              },
              "typeArguments": null,
              "arguments": [],
              "start": 5326,
              "end": 5345
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 5299,
            "end": 5346
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C4_v13_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 5359,
              "end": 5377
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 5384,
                "end": 5398
              },
              "typeArguments": null,
              "arguments": [],
              "start": 5380,
              "end": 5400
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 5351,
            "end": 5401
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C4_v14_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5413,
              "end": 5430
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 5437,
                "end": 5451
              },
              "typeArguments": null,
              "arguments": [],
              "start": 5433,
              "end": 5453
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 5406,
            "end": 5454
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C4_v21_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 5468,
              "end": 5486
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
                  "start": 5488,
                  "end": 5501
                },
                "typeArguments": null,
                "start": 5488,
                "end": 5501
              },
              "start": 5486,
              "end": 5501
            },
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5508,
                "end": 5521
              },
              "typeArguments": null,
              "arguments": [],
              "start": 5504,
              "end": 5523
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 5460,
            "end": 5524
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C4_v22_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5536,
              "end": 5553
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
                  "start": 5555,
                  "end": 5568
                },
                "typeArguments": null,
                "start": 5555,
                "end": 5568
              },
              "start": 5553,
              "end": 5568
            },
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5575,
                "end": 5588
              },
              "typeArguments": null,
              "arguments": [],
              "start": 5571,
              "end": 5590
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 5529,
            "end": 5591
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C4_v23_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 5604,
              "end": 5622
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5624,
                  "end": 5638
                },
                "typeArguments": null,
                "start": 5624,
                "end": 5638
              },
              "start": 5622,
              "end": 5638
            },
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 5645,
                "end": 5659
              },
              "typeArguments": null,
              "arguments": [],
              "start": 5641,
              "end": 5661
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 5596,
            "end": 5662
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C4_v24_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5674,
              "end": 5691
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5693,
                  "end": 5707
                },
                "typeArguments": null,
                "start": 5693,
                "end": 5707
              },
              "start": 5691,
              "end": 5707
            },
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 5714,
                "end": 5728
              },
              "typeArguments": null,
              "arguments": [],
              "start": 5710,
              "end": 5730
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 5667,
            "end": 5731
          }
        ],
        "start": 5056,
        "end": 5733
      },
      "abstract": false,
      "declare": false,
      "start": 5036,
      "end": 5733
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
            "name": "glo_v1_private",
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
                  "start": 5755,
                  "end": 5768
                },
                "typeArguments": null,
                "start": 5755,
                "end": 5768
              },
              "start": 5753,
              "end": 5768
            },
            "start": 5739,
            "end": 5768
          },
          "init": null,
          "definite": false,
          "start": 5739,
          "end": 5768
        }
      ],
      "declare": false,
      "start": 5735,
      "end": 5769
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
                    "start": 5796,
                    "end": 5809
                  },
                  "typeArguments": null,
                  "start": 5796,
                  "end": 5809
                },
                "start": 5794,
                "end": 5809
              },
              "start": 5781,
              "end": 5809
            },
            "init": null,
            "definite": false,
            "start": 5781,
            "end": 5809
          }
        ],
        "declare": false,
        "start": 5777,
        "end": 5810
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5770,
      "end": 5810
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
            "name": "glo_v3_private",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5831,
                  "end": 5845
                },
                "typeArguments": null,
                "start": 5831,
                "end": 5845
              },
              "start": 5829,
              "end": 5845
            },
            "start": 5815,
            "end": 5845
          },
          "init": null,
          "definite": false,
          "start": 5815,
          "end": 5845
        }
      ],
      "declare": false,
      "start": 5811,
      "end": 5846
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
              "name": "glo_v4_public",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "glo_C2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5873,
                    "end": 5887
                  },
                  "typeArguments": null,
                  "start": 5873,
                  "end": 5887
                },
                "start": 5871,
                "end": 5887
              },
              "start": 5858,
              "end": 5887
            },
            "init": null,
            "definite": false,
            "start": 5858,
            "end": 5887
          }
        ],
        "declare": false,
        "start": 5854,
        "end": 5888
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5847,
      "end": 5888
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
            "name": "glo_v11_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 5903,
            "end": 5918
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5925,
              "end": 5938
            },
            "typeArguments": null,
            "arguments": [],
            "start": 5921,
            "end": 5940
          },
          "definite": false,
          "start": 5903,
          "end": 5940
        }
      ],
      "declare": false,
      "start": 5899,
      "end": 5941
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
              "name": "glo_v12_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5953,
              "end": 5967
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5974,
                "end": 5987
              },
              "typeArguments": null,
              "arguments": [],
              "start": 5970,
              "end": 5989
            },
            "definite": false,
            "start": 5953,
            "end": 5989
          }
        ],
        "declare": false,
        "start": 5949,
        "end": 5990
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5942,
      "end": 5990
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
            "name": "glo_v13_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 5995,
            "end": 6010
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 6017,
              "end": 6031
            },
            "typeArguments": null,
            "arguments": [],
            "start": 6013,
            "end": 6033
          },
          "definite": false,
          "start": 5995,
          "end": 6033
        }
      ],
      "declare": false,
      "start": 5991,
      "end": 6034
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
              "name": "glo_v14_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 6046,
              "end": 6060
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 6067,
                "end": 6081
              },
              "typeArguments": null,
              "arguments": [],
              "start": 6063,
              "end": 6083
            },
            "definite": false,
            "start": 6046,
            "end": 6083
          }
        ],
        "declare": false,
        "start": 6042,
        "end": 6084
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6035,
      "end": 6084
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
            "name": "glo_v21_private",
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
                  "start": 6116,
                  "end": 6129
                },
                "typeArguments": null,
                "start": 6116,
                "end": 6129
              },
              "start": 6114,
              "end": 6129
            },
            "start": 6099,
            "end": 6129
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 6136,
              "end": 6149
            },
            "typeArguments": null,
            "arguments": [],
            "start": 6132,
            "end": 6151
          },
          "definite": false,
          "start": 6099,
          "end": 6151
        }
      ],
      "declare": false,
      "start": 6095,
      "end": 6152
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
                    "start": 6180,
                    "end": 6193
                  },
                  "typeArguments": null,
                  "start": 6180,
                  "end": 6193
                },
                "start": 6178,
                "end": 6193
              },
              "start": 6164,
              "end": 6193
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 6200,
                "end": 6213
              },
              "typeArguments": null,
              "arguments": [],
              "start": 6196,
              "end": 6215
            },
            "definite": false,
            "start": 6164,
            "end": 6215
          }
        ],
        "declare": false,
        "start": 6160,
        "end": 6216
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6153,
      "end": 6216
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
            "name": "glo_v23_private",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6238,
                  "end": 6252
                },
                "typeArguments": null,
                "start": 6238,
                "end": 6252
              },
              "start": 6236,
              "end": 6252
            },
            "start": 6221,
            "end": 6252
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 6259,
              "end": 6273
            },
            "typeArguments": null,
            "arguments": [],
            "start": 6255,
            "end": 6275
          },
          "definite": false,
          "start": 6221,
          "end": 6275
        }
      ],
      "declare": false,
      "start": 6217,
      "end": 6276
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
              "name": "glo_v24_public",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "glo_C2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6304,
                    "end": 6318
                  },
                  "typeArguments": null,
                  "start": 6304,
                  "end": 6318
                },
                "start": 6302,
                "end": 6318
              },
              "start": 6288,
              "end": 6318
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 6325,
                "end": 6339
              },
              "typeArguments": null,
              "arguments": [],
              "start": 6321,
              "end": 6341
            },
            "definite": false,
            "start": 6288,
            "end": 6341
          }
        ],
        "declare": false,
        "start": 6284,
        "end": 6342
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6277,
      "end": 6342
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 6351
}
```
