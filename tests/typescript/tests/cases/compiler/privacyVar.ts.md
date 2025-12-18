__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 7,
    "end": 16,
    "range": [
      7,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 17,
    "end": 19,
    "range": [
      17,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 26,
    "end": 32,
    "range": [
      26,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 33,
    "end": 38,
    "range": [
      33,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 39,
    "end": 48,
    "range": [
      39,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 59,
    "end": 66,
    "range": [
      59,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 67,
    "end": 69,
    "range": [
      67,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 95,
    "end": 100,
    "range": [
      95,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 101,
    "end": 111,
    "range": [
      101,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 125,
    "end": 131,
    "range": [
      125,
      131
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 132,
    "end": 137,
    "range": [
      132,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "C3_public",
    "start": 138,
    "end": 147,
    "range": [
      138,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 158,
    "end": 165,
    "range": [
      158,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "C3_v1_private",
    "start": 166,
    "end": 179,
    "range": [
      166,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 181,
    "end": 190,
    "range": [
      181,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 200,
    "end": 206,
    "range": [
      200,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "C3_v2_public",
    "start": 207,
    "end": 219,
    "range": [
      207,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 221,
    "end": 230,
    "range": [
      221,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 240,
    "end": 247,
    "range": [
      240,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "C3_v3_private",
    "start": 248,
    "end": 261,
    "range": [
      248,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 263,
    "end": 273,
    "range": [
      263,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 283,
    "end": 289,
    "range": [
      283,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "C3_v4_public",
    "start": 290,
    "end": 302,
    "range": [
      290,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 304,
    "end": 314,
    "range": [
      304,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 334,
    "end": 341,
    "range": [
      334,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "C3_v11_private",
    "start": 342,
    "end": 356,
    "range": [
      342,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 359,
    "end": 362,
    "range": [
      359,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 363,
    "end": 372,
    "range": [
      363,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 384,
    "end": 390,
    "range": [
      384,
      390
    ]
  },
  {
    "type": "Identifier",
    "value": "C3_v12_public",
    "start": 391,
    "end": 404,
    "range": [
      391,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 407,
    "end": 410,
    "range": [
      407,
      410
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 411,
    "end": 420,
    "range": [
      411,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 432,
    "end": 439,
    "range": [
      432,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "C3_v13_private",
    "start": 440,
    "end": 454,
    "range": [
      440,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 457,
    "end": 460,
    "range": [
      457,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 461,
    "end": 471,
    "range": [
      461,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 483,
    "end": 489,
    "range": [
      483,
      489
    ]
  },
  {
    "type": "Identifier",
    "value": "C3_v14_public",
    "start": 490,
    "end": 503,
    "range": [
      490,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 506,
    "end": 509,
    "range": [
      506,
      509
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 510,
    "end": 520,
    "range": [
      510,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 542,
    "end": 549,
    "range": [
      542,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "C3_v21_private",
    "start": 550,
    "end": 564,
    "range": [
      550,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 566,
    "end": 575,
    "range": [
      566,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 578,
    "end": 581,
    "range": [
      578,
      581
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 582,
    "end": 591,
    "range": [
      582,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 603,
    "end": 609,
    "range": [
      603,
      609
    ]
  },
  {
    "type": "Identifier",
    "value": "C3_v22_public",
    "start": 610,
    "end": 623,
    "range": [
      610,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 625,
    "end": 634,
    "range": [
      625,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 637,
    "end": 640,
    "range": [
      637,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 641,
    "end": 650,
    "range": [
      641,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 662,
    "end": 669,
    "range": [
      662,
      669
    ]
  },
  {
    "type": "Identifier",
    "value": "C3_v23_private",
    "start": 670,
    "end": 684,
    "range": [
      670,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 686,
    "end": 696,
    "range": [
      686,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 699,
    "end": 702,
    "range": [
      699,
      702
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 703,
    "end": 713,
    "range": [
      703,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 725,
    "end": 731,
    "range": [
      725,
      731
    ]
  },
  {
    "type": "Identifier",
    "value": "C3_v24_public",
    "start": 732,
    "end": 745,
    "range": [
      732,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 747,
    "end": 757,
    "range": [
      747,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 760,
    "end": 763,
    "range": [
      760,
      763
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 764,
    "end": 774,
    "range": [
      764,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 798,
    "end": 803,
    "range": [
      798,
      803
    ]
  },
  {
    "type": "Identifier",
    "value": "C4_public",
    "start": 804,
    "end": 813,
    "range": [
      804,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 824,
    "end": 831,
    "range": [
      824,
      831
    ]
  },
  {
    "type": "Identifier",
    "value": "C4_v1_private",
    "start": 832,
    "end": 845,
    "range": [
      832,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 847,
    "end": 856,
    "range": [
      847,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 866,
    "end": 872,
    "range": [
      866,
      872
    ]
  },
  {
    "type": "Identifier",
    "value": "C4_v2_public",
    "start": 873,
    "end": 885,
    "range": [
      873,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 887,
    "end": 896,
    "range": [
      887,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 906,
    "end": 913,
    "range": [
      906,
      913
    ]
  },
  {
    "type": "Identifier",
    "value": "C4_v3_private",
    "start": 914,
    "end": 927,
    "range": [
      914,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 929,
    "end": 939,
    "range": [
      929,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
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
    "type": "Identifier",
    "value": "C4_v4_public",
    "start": 956,
    "end": 968,
    "range": [
      956,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 970,
    "end": 980,
    "range": [
      970,
      980
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 980,
    "end": 981,
    "range": [
      980,
      981
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 991,
    "end": 998,
    "range": [
      991,
      998
    ]
  },
  {
    "type": "Identifier",
    "value": "C4_v11_private",
    "start": 999,
    "end": 1013,
    "range": [
      999,
      1013
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1014,
    "end": 1015,
    "range": [
      1014,
      1015
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1016,
    "end": 1019,
    "range": [
      1016,
      1019
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1020,
    "end": 1029,
    "range": [
      1020,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1041,
    "end": 1047,
    "range": [
      1041,
      1047
    ]
  },
  {
    "type": "Identifier",
    "value": "C4_v12_public",
    "start": 1048,
    "end": 1061,
    "range": [
      1048,
      1061
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1062,
    "end": 1063,
    "range": [
      1062,
      1063
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1064,
    "end": 1067,
    "range": [
      1064,
      1067
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1068,
    "end": 1077,
    "range": [
      1068,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1079,
    "end": 1080,
    "range": [
      1079,
      1080
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1089,
    "end": 1096,
    "range": [
      1089,
      1096
    ]
  },
  {
    "type": "Identifier",
    "value": "C4_v13_private",
    "start": 1097,
    "end": 1111,
    "range": [
      1097,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1114,
    "end": 1117,
    "range": [
      1114,
      1117
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1118,
    "end": 1128,
    "range": [
      1118,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1140,
    "end": 1146,
    "range": [
      1140,
      1146
    ]
  },
  {
    "type": "Identifier",
    "value": "C4_v14_public",
    "start": 1147,
    "end": 1160,
    "range": [
      1147,
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
    "type": "Keyword",
    "value": "new",
    "start": 1163,
    "end": 1166,
    "range": [
      1163,
      1166
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1167,
    "end": 1177,
    "range": [
      1167,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1178,
    "end": 1179,
    "range": [
      1178,
      1179
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1190,
    "end": 1197,
    "range": [
      1190,
      1197
    ]
  },
  {
    "type": "Identifier",
    "value": "C4_v21_private",
    "start": 1198,
    "end": 1212,
    "range": [
      1198,
      1212
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1212,
    "end": 1213,
    "range": [
      1212,
      1213
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1214,
    "end": 1223,
    "range": [
      1214,
      1223
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1226,
    "end": 1229,
    "range": [
      1226,
      1229
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1230,
    "end": 1239,
    "range": [
      1230,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1251,
    "end": 1257,
    "range": [
      1251,
      1257
    ]
  },
  {
    "type": "Identifier",
    "value": "C4_v22_public",
    "start": 1258,
    "end": 1271,
    "range": [
      1258,
      1271
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1273,
    "end": 1282,
    "range": [
      1273,
      1282
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1283,
    "end": 1284,
    "range": [
      1283,
      1284
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1285,
    "end": 1288,
    "range": [
      1285,
      1288
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1289,
    "end": 1298,
    "range": [
      1289,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
      1300
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1310,
    "end": 1317,
    "range": [
      1310,
      1317
    ]
  },
  {
    "type": "Identifier",
    "value": "C4_v23_private",
    "start": 1318,
    "end": 1332,
    "range": [
      1318,
      1332
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1334,
    "end": 1344,
    "range": [
      1334,
      1344
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1347,
    "end": 1350,
    "range": [
      1347,
      1350
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1351,
    "end": 1361,
    "range": [
      1351,
      1361
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1361,
    "end": 1362,
    "range": [
      1361,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1373,
    "end": 1379,
    "range": [
      1373,
      1379
    ]
  },
  {
    "type": "Identifier",
    "value": "C4_v24_public",
    "start": 1380,
    "end": 1393,
    "range": [
      1380,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1395,
    "end": 1405,
    "range": [
      1395,
      1405
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1406,
    "end": 1407,
    "range": [
      1406,
      1407
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1408,
    "end": 1411,
    "range": [
      1408,
      1411
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1412,
    "end": 1422,
    "range": [
      1412,
      1422
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1422,
    "end": 1423,
    "range": [
      1422,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1437,
    "end": 1440,
    "range": [
      1437,
      1440
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_v1_private",
    "start": 1441,
    "end": 1454,
    "range": [
      1441,
      1454
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1454,
    "end": 1455,
    "range": [
      1454,
      1455
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1456,
    "end": 1465,
    "range": [
      1456,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1471,
    "end": 1477,
    "range": [
      1471,
      1477
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1478,
    "end": 1481,
    "range": [
      1478,
      1481
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_v2_public",
    "start": 1482,
    "end": 1494,
    "range": [
      1482,
      1494
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1496,
    "end": 1505,
    "range": [
      1496,
      1505
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1511,
    "end": 1514,
    "range": [
      1511,
      1514
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_v3_private",
    "start": 1515,
    "end": 1528,
    "range": [
      1515,
      1528
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1528,
    "end": 1529,
    "range": [
      1528,
      1529
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1530,
    "end": 1540,
    "range": [
      1530,
      1540
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1540,
    "end": 1541,
    "range": [
      1540,
      1541
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1546,
    "end": 1552,
    "range": [
      1546,
      1552
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1553,
    "end": 1556,
    "range": [
      1553,
      1556
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_v4_public",
    "start": 1557,
    "end": 1569,
    "range": [
      1557,
      1569
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1569,
    "end": 1570,
    "range": [
      1569,
      1570
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
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
    "value": "var",
    "start": 1597,
    "end": 1600,
    "range": [
      1597,
      1600
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_v11_private",
    "start": 1601,
    "end": 1615,
    "range": [
      1601,
      1615
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1616,
    "end": 1617,
    "range": [
      1616,
      1617
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1618,
    "end": 1621,
    "range": [
      1618,
      1621
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1622,
    "end": 1631,
    "range": [
      1622,
      1631
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1631,
    "end": 1632,
    "range": [
      1631,
      1632
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1633,
    "end": 1634,
    "range": [
      1633,
      1634
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1639,
    "end": 1645,
    "range": [
      1639,
      1645
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1646,
    "end": 1649,
    "range": [
      1646,
      1649
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_v12_public",
    "start": 1650,
    "end": 1663,
    "range": [
      1650,
      1663
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1664,
    "end": 1665,
    "range": [
      1664,
      1665
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1666,
    "end": 1669,
    "range": [
      1666,
      1669
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1670,
    "end": 1679,
    "range": [
      1670,
      1679
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1679,
    "end": 1680,
    "range": [
      1679,
      1680
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1680,
    "end": 1681,
    "range": [
      1680,
      1681
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1687,
    "end": 1690,
    "range": [
      1687,
      1690
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_v13_private",
    "start": 1691,
    "end": 1705,
    "range": [
      1691,
      1705
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1708,
    "end": 1711,
    "range": [
      1708,
      1711
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1712,
    "end": 1722,
    "range": [
      1712,
      1722
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1730,
    "end": 1736,
    "range": [
      1730,
      1736
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1737,
    "end": 1740,
    "range": [
      1737,
      1740
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_v14_public",
    "start": 1741,
    "end": 1754,
    "range": [
      1741,
      1754
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1755,
    "end": 1756,
    "range": [
      1755,
      1756
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1757,
    "end": 1760,
    "range": [
      1757,
      1760
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1761,
    "end": 1771,
    "range": [
      1761,
      1771
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1772,
    "end": 1773,
    "range": [
      1772,
      1773
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1773,
    "end": 1774,
    "range": [
      1773,
      1774
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1789,
    "end": 1792,
    "range": [
      1789,
      1792
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_v21_private",
    "start": 1793,
    "end": 1807,
    "range": [
      1793,
      1807
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1807,
    "end": 1808,
    "range": [
      1807,
      1808
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1809,
    "end": 1818,
    "range": [
      1809,
      1818
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1819,
    "end": 1820,
    "range": [
      1819,
      1820
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1821,
    "end": 1824,
    "range": [
      1821,
      1824
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1825,
    "end": 1834,
    "range": [
      1825,
      1834
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1834,
    "end": 1835,
    "range": [
      1834,
      1835
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1836,
    "end": 1837,
    "range": [
      1836,
      1837
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1842,
    "end": 1848,
    "range": [
      1842,
      1848
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1849,
    "end": 1852,
    "range": [
      1849,
      1852
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_v22_public",
    "start": 1853,
    "end": 1866,
    "range": [
      1853,
      1866
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1866,
    "end": 1867,
    "range": [
      1866,
      1867
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1868,
    "end": 1877,
    "range": [
      1868,
      1877
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1878,
    "end": 1879,
    "range": [
      1878,
      1879
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1880,
    "end": 1883,
    "range": [
      1880,
      1883
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1884,
    "end": 1893,
    "range": [
      1884,
      1893
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1893,
    "end": 1894,
    "range": [
      1893,
      1894
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1894,
    "end": 1895,
    "range": [
      1894,
      1895
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1895,
    "end": 1896,
    "range": [
      1895,
      1896
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1901,
    "end": 1904,
    "range": [
      1901,
      1904
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_v23_private",
    "start": 1905,
    "end": 1919,
    "range": [
      1905,
      1919
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1919,
    "end": 1920,
    "range": [
      1919,
      1920
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1921,
    "end": 1931,
    "range": [
      1921,
      1931
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1932,
    "end": 1933,
    "range": [
      1932,
      1933
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1934,
    "end": 1937,
    "range": [
      1934,
      1937
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1938,
    "end": 1948,
    "range": [
      1938,
      1948
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1948,
    "end": 1949,
    "range": [
      1948,
      1949
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1949,
    "end": 1950,
    "range": [
      1949,
      1950
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1950,
    "end": 1951,
    "range": [
      1950,
      1951
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1956,
    "end": 1962,
    "range": [
      1956,
      1962
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1963,
    "end": 1966,
    "range": [
      1963,
      1966
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_v24_public",
    "start": 1967,
    "end": 1980,
    "range": [
      1967,
      1980
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1980,
    "end": 1981,
    "range": [
      1980,
      1981
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1982,
    "end": 1992,
    "range": [
      1982,
      1992
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1993,
    "end": 1994,
    "range": [
      1993,
      1994
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1995,
    "end": 1998,
    "range": [
      1995,
      1998
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1999,
    "end": 2009,
    "range": [
      1999,
      2009
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2009,
    "end": 2010,
    "range": [
      2009,
      2010
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2010,
    "end": 2011,
    "range": [
      2010,
      2011
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2011,
    "end": 2012,
    "range": [
      2011,
      2012
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2022,
    "end": 2023,
    "range": [
      2022,
      2023
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2025,
    "end": 2034,
    "range": [
      2025,
      2034
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 2035,
    "end": 2037,
    "range": [
      2035,
      2037
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2038,
    "end": 2039,
    "range": [
      2038,
      2039
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2044,
    "end": 2050,
    "range": [
      2044,
      2050
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2051,
    "end": 2056,
    "range": [
      2051,
      2056
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 2057,
    "end": 2069,
    "range": [
      2057,
      2069
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2070,
    "end": 2071,
    "range": [
      2070,
      2071
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2080,
    "end": 2087,
    "range": [
      2080,
      2087
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2088,
    "end": 2090,
    "range": [
      2088,
      2090
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2090,
    "end": 2091,
    "range": [
      2090,
      2091
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2091,
    "end": 2092,
    "range": [
      2091,
      2092
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2093,
    "end": 2094,
    "range": [
      2093,
      2094
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2103,
    "end": 2104,
    "range": [
      2103,
      2104
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2109,
    "end": 2110,
    "range": [
      2109,
      2110
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2116,
    "end": 2121,
    "range": [
      2116,
      2121
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 2122,
    "end": 2135,
    "range": [
      2122,
      2135
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2136,
    "end": 2137,
    "range": [
      2136,
      2137
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2142,
    "end": 2143,
    "range": [
      2142,
      2143
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2149,
    "end": 2155,
    "range": [
      2149,
      2155
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2156,
    "end": 2161,
    "range": [
      2156,
      2161
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C3_public",
    "start": 2162,
    "end": 2174,
    "range": [
      2162,
      2174
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2175,
    "end": 2176,
    "range": [
      2175,
      2176
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2185,
    "end": 2192,
    "range": [
      2185,
      2192
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C3_v1_private",
    "start": 2193,
    "end": 2209,
    "range": [
      2193,
      2209
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2209,
    "end": 2210,
    "range": [
      2209,
      2210
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 2211,
    "end": 2223,
    "range": [
      2211,
      2223
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2223,
    "end": 2224,
    "range": [
      2223,
      2224
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2233,
    "end": 2239,
    "range": [
      2233,
      2239
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C3_v2_public",
    "start": 2240,
    "end": 2255,
    "range": [
      2240,
      2255
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2255,
    "end": 2256,
    "range": [
      2255,
      2256
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 2257,
    "end": 2269,
    "range": [
      2257,
      2269
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2269,
    "end": 2270,
    "range": [
      2269,
      2270
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2279,
    "end": 2286,
    "range": [
      2279,
      2286
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C3_v3_private",
    "start": 2287,
    "end": 2303,
    "range": [
      2287,
      2303
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2303,
    "end": 2304,
    "range": [
      2303,
      2304
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 2305,
    "end": 2318,
    "range": [
      2305,
      2318
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2318,
    "end": 2319,
    "range": [
      2318,
      2319
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2328,
    "end": 2334,
    "range": [
      2328,
      2334
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C3_v4_public",
    "start": 2335,
    "end": 2350,
    "range": [
      2335,
      2350
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2350,
    "end": 2351,
    "range": [
      2350,
      2351
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 2352,
    "end": 2365,
    "range": [
      2352,
      2365
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2365,
    "end": 2366,
    "range": [
      2365,
      2366
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2376,
    "end": 2383,
    "range": [
      2376,
      2383
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C3_v11_private",
    "start": 2384,
    "end": 2401,
    "range": [
      2384,
      2401
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2402,
    "end": 2403,
    "range": [
      2402,
      2403
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2404,
    "end": 2407,
    "range": [
      2404,
      2407
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 2408,
    "end": 2420,
    "range": [
      2408,
      2420
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2420,
    "end": 2421,
    "range": [
      2420,
      2421
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2421,
    "end": 2422,
    "range": [
      2421,
      2422
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2422,
    "end": 2423,
    "range": [
      2422,
      2423
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2432,
    "end": 2438,
    "range": [
      2432,
      2438
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C3_v12_public",
    "start": 2439,
    "end": 2455,
    "range": [
      2439,
      2455
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2456,
    "end": 2457,
    "range": [
      2456,
      2457
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2458,
    "end": 2461,
    "range": [
      2458,
      2461
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 2462,
    "end": 2474,
    "range": [
      2462,
      2474
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2474,
    "end": 2475,
    "range": [
      2474,
      2475
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2475,
    "end": 2476,
    "range": [
      2475,
      2476
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2476,
    "end": 2477,
    "range": [
      2476,
      2477
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2486,
    "end": 2493,
    "range": [
      2486,
      2493
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C3_v13_private",
    "start": 2494,
    "end": 2511,
    "range": [
      2494,
      2511
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2512,
    "end": 2513,
    "range": [
      2512,
      2513
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2514,
    "end": 2517,
    "range": [
      2514,
      2517
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 2518,
    "end": 2531,
    "range": [
      2518,
      2531
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2531,
    "end": 2532,
    "range": [
      2531,
      2532
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2532,
    "end": 2533,
    "range": [
      2532,
      2533
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2533,
    "end": 2534,
    "range": [
      2533,
      2534
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2543,
    "end": 2549,
    "range": [
      2543,
      2549
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C3_v14_public",
    "start": 2550,
    "end": 2566,
    "range": [
      2550,
      2566
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2567,
    "end": 2568,
    "range": [
      2567,
      2568
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2569,
    "end": 2572,
    "range": [
      2569,
      2572
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 2573,
    "end": 2586,
    "range": [
      2573,
      2586
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2586,
    "end": 2587,
    "range": [
      2586,
      2587
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2587,
    "end": 2588,
    "range": [
      2587,
      2588
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2588,
    "end": 2589,
    "range": [
      2588,
      2589
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2600,
    "end": 2607,
    "range": [
      2600,
      2607
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C3_v21_private",
    "start": 2608,
    "end": 2625,
    "range": [
      2608,
      2625
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2625,
    "end": 2626,
    "range": [
      2625,
      2626
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 2627,
    "end": 2639,
    "range": [
      2627,
      2639
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2640,
    "end": 2641,
    "range": [
      2640,
      2641
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2642,
    "end": 2645,
    "range": [
      2642,
      2645
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 2646,
    "end": 2658,
    "range": [
      2646,
      2658
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2658,
    "end": 2659,
    "range": [
      2658,
      2659
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2659,
    "end": 2660,
    "range": [
      2659,
      2660
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2660,
    "end": 2661,
    "range": [
      2660,
      2661
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2670,
    "end": 2676,
    "range": [
      2670,
      2676
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C3_v22_public",
    "start": 2677,
    "end": 2693,
    "range": [
      2677,
      2693
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2693,
    "end": 2694,
    "range": [
      2693,
      2694
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 2695,
    "end": 2707,
    "range": [
      2695,
      2707
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2708,
    "end": 2709,
    "range": [
      2708,
      2709
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2710,
    "end": 2713,
    "range": [
      2710,
      2713
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 2714,
    "end": 2726,
    "range": [
      2714,
      2726
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2726,
    "end": 2727,
    "range": [
      2726,
      2727
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2727,
    "end": 2728,
    "range": [
      2727,
      2728
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2728,
    "end": 2729,
    "range": [
      2728,
      2729
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2738,
    "end": 2745,
    "range": [
      2738,
      2745
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C3_v23_private",
    "start": 2746,
    "end": 2763,
    "range": [
      2746,
      2763
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2763,
    "end": 2764,
    "range": [
      2763,
      2764
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 2765,
    "end": 2778,
    "range": [
      2765,
      2778
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2779,
    "end": 2780,
    "range": [
      2779,
      2780
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2781,
    "end": 2784,
    "range": [
      2781,
      2784
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 2785,
    "end": 2798,
    "range": [
      2785,
      2798
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2798,
    "end": 2799,
    "range": [
      2798,
      2799
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2799,
    "end": 2800,
    "range": [
      2799,
      2800
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2800,
    "end": 2801,
    "range": [
      2800,
      2801
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2810,
    "end": 2816,
    "range": [
      2810,
      2816
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C3_v24_public",
    "start": 2817,
    "end": 2833,
    "range": [
      2817,
      2833
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2833,
    "end": 2834,
    "range": [
      2833,
      2834
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 2835,
    "end": 2848,
    "range": [
      2835,
      2848
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2849,
    "end": 2850,
    "range": [
      2849,
      2850
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2851,
    "end": 2854,
    "range": [
      2851,
      2854
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 2855,
    "end": 2868,
    "range": [
      2855,
      2868
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2868,
    "end": 2869,
    "range": [
      2868,
      2869
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2869,
    "end": 2870,
    "range": [
      2869,
      2870
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2870,
    "end": 2871,
    "range": [
      2870,
      2871
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2876,
    "end": 2877,
    "range": [
      2876,
      2877
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2883,
    "end": 2888,
    "range": [
      2883,
      2888
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C4_public",
    "start": 2889,
    "end": 2901,
    "range": [
      2889,
      2901
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2902,
    "end": 2903,
    "range": [
      2902,
      2903
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2912,
    "end": 2919,
    "range": [
      2912,
      2919
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C4_v1_private",
    "start": 2920,
    "end": 2936,
    "range": [
      2920,
      2936
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2936,
    "end": 2937,
    "range": [
      2936,
      2937
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 2938,
    "end": 2950,
    "range": [
      2938,
      2950
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2950,
    "end": 2951,
    "range": [
      2950,
      2951
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2960,
    "end": 2966,
    "range": [
      2960,
      2966
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C4_v2_public",
    "start": 2967,
    "end": 2982,
    "range": [
      2967,
      2982
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2982,
    "end": 2983,
    "range": [
      2982,
      2983
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 2984,
    "end": 2996,
    "range": [
      2984,
      2996
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2996,
    "end": 2997,
    "range": [
      2996,
      2997
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3006,
    "end": 3013,
    "range": [
      3006,
      3013
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C4_v3_private",
    "start": 3014,
    "end": 3030,
    "range": [
      3014,
      3030
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3030,
    "end": 3031,
    "range": [
      3030,
      3031
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 3032,
    "end": 3045,
    "range": [
      3032,
      3045
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3045,
    "end": 3046,
    "range": [
      3045,
      3046
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3055,
    "end": 3061,
    "range": [
      3055,
      3061
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C4_v4_public",
    "start": 3062,
    "end": 3077,
    "range": [
      3062,
      3077
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3077,
    "end": 3078,
    "range": [
      3077,
      3078
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 3079,
    "end": 3092,
    "range": [
      3079,
      3092
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3092,
    "end": 3093,
    "range": [
      3092,
      3093
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3103,
    "end": 3110,
    "range": [
      3103,
      3110
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C4_v11_private",
    "start": 3111,
    "end": 3128,
    "range": [
      3111,
      3128
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3129,
    "end": 3130,
    "range": [
      3129,
      3130
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3131,
    "end": 3134,
    "range": [
      3131,
      3134
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 3135,
    "end": 3147,
    "range": [
      3135,
      3147
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3147,
    "end": 3148,
    "range": [
      3147,
      3148
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3148,
    "end": 3149,
    "range": [
      3148,
      3149
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3149,
    "end": 3150,
    "range": [
      3149,
      3150
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3159,
    "end": 3165,
    "range": [
      3159,
      3165
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C4_v12_public",
    "start": 3166,
    "end": 3182,
    "range": [
      3166,
      3182
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3183,
    "end": 3184,
    "range": [
      3183,
      3184
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3185,
    "end": 3188,
    "range": [
      3185,
      3188
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 3189,
    "end": 3201,
    "range": [
      3189,
      3201
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3201,
    "end": 3202,
    "range": [
      3201,
      3202
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3202,
    "end": 3203,
    "range": [
      3202,
      3203
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3203,
    "end": 3204,
    "range": [
      3203,
      3204
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3213,
    "end": 3220,
    "range": [
      3213,
      3220
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C4_v13_private",
    "start": 3221,
    "end": 3238,
    "range": [
      3221,
      3238
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3239,
    "end": 3240,
    "range": [
      3239,
      3240
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3241,
    "end": 3244,
    "range": [
      3241,
      3244
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 3245,
    "end": 3258,
    "range": [
      3245,
      3258
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3258,
    "end": 3259,
    "range": [
      3258,
      3259
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3259,
    "end": 3260,
    "range": [
      3259,
      3260
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3260,
    "end": 3261,
    "range": [
      3260,
      3261
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3270,
    "end": 3276,
    "range": [
      3270,
      3276
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C4_v14_public",
    "start": 3277,
    "end": 3293,
    "range": [
      3277,
      3293
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3294,
    "end": 3295,
    "range": [
      3294,
      3295
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3296,
    "end": 3299,
    "range": [
      3296,
      3299
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 3300,
    "end": 3313,
    "range": [
      3300,
      3313
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3313,
    "end": 3314,
    "range": [
      3313,
      3314
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3314,
    "end": 3315,
    "range": [
      3314,
      3315
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3315,
    "end": 3316,
    "range": [
      3315,
      3316
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3326,
    "end": 3333,
    "range": [
      3326,
      3333
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C4_v21_private",
    "start": 3334,
    "end": 3351,
    "range": [
      3334,
      3351
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3351,
    "end": 3352,
    "range": [
      3351,
      3352
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 3353,
    "end": 3365,
    "range": [
      3353,
      3365
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3366,
    "end": 3367,
    "range": [
      3366,
      3367
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3368,
    "end": 3371,
    "range": [
      3368,
      3371
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 3372,
    "end": 3384,
    "range": [
      3372,
      3384
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3384,
    "end": 3385,
    "range": [
      3384,
      3385
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3385,
    "end": 3386,
    "range": [
      3385,
      3386
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3386,
    "end": 3387,
    "range": [
      3386,
      3387
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3396,
    "end": 3402,
    "range": [
      3396,
      3402
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C4_v22_public",
    "start": 3403,
    "end": 3419,
    "range": [
      3403,
      3419
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3419,
    "end": 3420,
    "range": [
      3419,
      3420
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 3421,
    "end": 3433,
    "range": [
      3421,
      3433
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3434,
    "end": 3435,
    "range": [
      3434,
      3435
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3436,
    "end": 3439,
    "range": [
      3436,
      3439
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 3440,
    "end": 3452,
    "range": [
      3440,
      3452
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3452,
    "end": 3453,
    "range": [
      3452,
      3453
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3453,
    "end": 3454,
    "range": [
      3453,
      3454
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3454,
    "end": 3455,
    "range": [
      3454,
      3455
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3464,
    "end": 3471,
    "range": [
      3464,
      3471
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C4_v23_private",
    "start": 3472,
    "end": 3489,
    "range": [
      3472,
      3489
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3489,
    "end": 3490,
    "range": [
      3489,
      3490
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 3491,
    "end": 3504,
    "range": [
      3491,
      3504
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3505,
    "end": 3506,
    "range": [
      3505,
      3506
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3507,
    "end": 3510,
    "range": [
      3507,
      3510
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 3511,
    "end": 3524,
    "range": [
      3511,
      3524
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3524,
    "end": 3525,
    "range": [
      3524,
      3525
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3525,
    "end": 3526,
    "range": [
      3525,
      3526
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3526,
    "end": 3527,
    "range": [
      3526,
      3527
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3536,
    "end": 3542,
    "range": [
      3536,
      3542
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C4_v24_public",
    "start": 3543,
    "end": 3559,
    "range": [
      3543,
      3559
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3559,
    "end": 3560,
    "range": [
      3559,
      3560
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 3561,
    "end": 3574,
    "range": [
      3561,
      3574
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3575,
    "end": 3576,
    "range": [
      3575,
      3576
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3577,
    "end": 3580,
    "range": [
      3577,
      3580
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 3581,
    "end": 3594,
    "range": [
      3581,
      3594
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3594,
    "end": 3595,
    "range": [
      3594,
      3595
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3595,
    "end": 3596,
    "range": [
      3595,
      3596
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3596,
    "end": 3597,
    "range": [
      3596,
      3597
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3602,
    "end": 3603,
    "range": [
      3602,
      3603
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3609,
    "end": 3612,
    "range": [
      3609,
      3612
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_v1_private",
    "start": 3613,
    "end": 3626,
    "range": [
      3613,
      3626
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3626,
    "end": 3627,
    "range": [
      3626,
      3627
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 3628,
    "end": 3640,
    "range": [
      3628,
      3640
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3640,
    "end": 3641,
    "range": [
      3640,
      3641
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3646,
    "end": 3652,
    "range": [
      3646,
      3652
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3653,
    "end": 3656,
    "range": [
      3653,
      3656
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_v2_public",
    "start": 3657,
    "end": 3669,
    "range": [
      3657,
      3669
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3669,
    "end": 3670,
    "range": [
      3669,
      3670
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 3671,
    "end": 3683,
    "range": [
      3671,
      3683
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3683,
    "end": 3684,
    "range": [
      3683,
      3684
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3689,
    "end": 3692,
    "range": [
      3689,
      3692
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_v3_private",
    "start": 3693,
    "end": 3706,
    "range": [
      3693,
      3706
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3706,
    "end": 3707,
    "range": [
      3706,
      3707
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 3708,
    "end": 3721,
    "range": [
      3708,
      3721
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3721,
    "end": 3722,
    "range": [
      3721,
      3722
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3727,
    "end": 3733,
    "range": [
      3727,
      3733
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3734,
    "end": 3737,
    "range": [
      3734,
      3737
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_v4_public",
    "start": 3738,
    "end": 3750,
    "range": [
      3738,
      3750
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3750,
    "end": 3751,
    "range": [
      3750,
      3751
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 3752,
    "end": 3765,
    "range": [
      3752,
      3765
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3765,
    "end": 3766,
    "range": [
      3765,
      3766
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3773,
    "end": 3776,
    "range": [
      3773,
      3776
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_v11_private",
    "start": 3777,
    "end": 3791,
    "range": [
      3777,
      3791
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3792,
    "end": 3793,
    "range": [
      3792,
      3793
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3794,
    "end": 3797,
    "range": [
      3794,
      3797
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 3798,
    "end": 3810,
    "range": [
      3798,
      3810
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3810,
    "end": 3811,
    "range": [
      3810,
      3811
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3811,
    "end": 3812,
    "range": [
      3811,
      3812
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3812,
    "end": 3813,
    "range": [
      3812,
      3813
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3818,
    "end": 3824,
    "range": [
      3818,
      3824
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3825,
    "end": 3828,
    "range": [
      3825,
      3828
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_v12_public",
    "start": 3829,
    "end": 3842,
    "range": [
      3829,
      3842
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3843,
    "end": 3844,
    "range": [
      3843,
      3844
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3845,
    "end": 3848,
    "range": [
      3845,
      3848
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 3849,
    "end": 3861,
    "range": [
      3849,
      3861
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3861,
    "end": 3862,
    "range": [
      3861,
      3862
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3862,
    "end": 3863,
    "range": [
      3862,
      3863
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3863,
    "end": 3864,
    "range": [
      3863,
      3864
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3869,
    "end": 3872,
    "range": [
      3869,
      3872
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_v13_private",
    "start": 3873,
    "end": 3887,
    "range": [
      3873,
      3887
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3888,
    "end": 3889,
    "range": [
      3888,
      3889
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3890,
    "end": 3893,
    "range": [
      3890,
      3893
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 3894,
    "end": 3907,
    "range": [
      3894,
      3907
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3907,
    "end": 3908,
    "range": [
      3907,
      3908
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3908,
    "end": 3909,
    "range": [
      3908,
      3909
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3909,
    "end": 3910,
    "range": [
      3909,
      3910
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3915,
    "end": 3921,
    "range": [
      3915,
      3921
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3922,
    "end": 3925,
    "range": [
      3922,
      3925
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_v14_public",
    "start": 3926,
    "end": 3939,
    "range": [
      3926,
      3939
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3940,
    "end": 3941,
    "range": [
      3940,
      3941
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3942,
    "end": 3945,
    "range": [
      3942,
      3945
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 3946,
    "end": 3959,
    "range": [
      3946,
      3959
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3959,
    "end": 3960,
    "range": [
      3959,
      3960
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3960,
    "end": 3961,
    "range": [
      3960,
      3961
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3961,
    "end": 3962,
    "range": [
      3961,
      3962
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3969,
    "end": 3972,
    "range": [
      3969,
      3972
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_v21_private",
    "start": 3973,
    "end": 3987,
    "range": [
      3973,
      3987
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3987,
    "end": 3988,
    "range": [
      3987,
      3988
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 3989,
    "end": 4001,
    "range": [
      3989,
      4001
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4002,
    "end": 4003,
    "range": [
      4002,
      4003
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4004,
    "end": 4007,
    "range": [
      4004,
      4007
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 4008,
    "end": 4020,
    "range": [
      4008,
      4020
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4020,
    "end": 4021,
    "range": [
      4020,
      4021
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4021,
    "end": 4022,
    "range": [
      4021,
      4022
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4022,
    "end": 4023,
    "range": [
      4022,
      4023
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4028,
    "end": 4034,
    "range": [
      4028,
      4034
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4035,
    "end": 4038,
    "range": [
      4035,
      4038
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_v22_public",
    "start": 4039,
    "end": 4052,
    "range": [
      4039,
      4052
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4052,
    "end": 4053,
    "range": [
      4052,
      4053
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 4054,
    "end": 4066,
    "range": [
      4054,
      4066
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4067,
    "end": 4068,
    "range": [
      4067,
      4068
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4069,
    "end": 4072,
    "range": [
      4069,
      4072
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 4073,
    "end": 4085,
    "range": [
      4073,
      4085
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4085,
    "end": 4086,
    "range": [
      4085,
      4086
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4086,
    "end": 4087,
    "range": [
      4086,
      4087
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4087,
    "end": 4088,
    "range": [
      4087,
      4088
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4093,
    "end": 4096,
    "range": [
      4093,
      4096
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_v23_private",
    "start": 4097,
    "end": 4111,
    "range": [
      4097,
      4111
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4111,
    "end": 4112,
    "range": [
      4111,
      4112
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 4113,
    "end": 4126,
    "range": [
      4113,
      4126
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4127,
    "end": 4128,
    "range": [
      4127,
      4128
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4129,
    "end": 4132,
    "range": [
      4129,
      4132
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 4133,
    "end": 4146,
    "range": [
      4133,
      4146
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4146,
    "end": 4147,
    "range": [
      4146,
      4147
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4147,
    "end": 4148,
    "range": [
      4147,
      4148
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4148,
    "end": 4149,
    "range": [
      4148,
      4149
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4154,
    "end": 4160,
    "range": [
      4154,
      4160
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4161,
    "end": 4164,
    "range": [
      4161,
      4164
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_v24_public",
    "start": 4165,
    "end": 4178,
    "range": [
      4165,
      4178
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4178,
    "end": 4179,
    "range": [
      4178,
      4179
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 4180,
    "end": 4193,
    "range": [
      4180,
      4193
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4194,
    "end": 4195,
    "range": [
      4194,
      4195
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4196,
    "end": 4199,
    "range": [
      4196,
      4199
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 4200,
    "end": 4213,
    "range": [
      4200,
      4213
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4213,
    "end": 4214,
    "range": [
      4213,
      4214
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4214,
    "end": 4215,
    "range": [
      4214,
      4215
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4215,
    "end": 4216,
    "range": [
      4215,
      4216
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4218,
    "end": 4219,
    "range": [
      4218,
      4219
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4221,
    "end": 4227,
    "range": [
      4221,
      4227
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4228,
    "end": 4233,
    "range": [
      4228,
      4233
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 4234,
    "end": 4247,
    "range": [
      4234,
      4247
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4248,
    "end": 4249,
    "range": [
      4248,
      4249
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4254,
    "end": 4261,
    "range": [
      4254,
      4261
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 4262,
    "end": 4264,
    "range": [
      4262,
      4264
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4264,
    "end": 4265,
    "range": [
      4264,
      4265
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4265,
    "end": 4266,
    "range": [
      4265,
      4266
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4267,
    "end": 4268,
    "range": [
      4267,
      4268
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4273,
    "end": 4274,
    "range": [
      4273,
      4274
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4275,
    "end": 4276,
    "range": [
      4275,
      4276
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4278,
    "end": 4283,
    "range": [
      4278,
      4283
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 4284,
    "end": 4298,
    "range": [
      4284,
      4298
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4299,
    "end": 4300,
    "range": [
      4299,
      4300
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4301,
    "end": 4302,
    "range": [
      4301,
      4302
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4304,
    "end": 4310,
    "range": [
      4304,
      4310
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4311,
    "end": 4316,
    "range": [
      4311,
      4316
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C3_public",
    "start": 4317,
    "end": 4330,
    "range": [
      4317,
      4330
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4331,
    "end": 4332,
    "range": [
      4331,
      4332
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4337,
    "end": 4344,
    "range": [
      4337,
      4344
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C3_v1_private",
    "start": 4345,
    "end": 4362,
    "range": [
      4345,
      4362
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4362,
    "end": 4363,
    "range": [
      4362,
      4363
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 4364,
    "end": 4377,
    "range": [
      4364,
      4377
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4377,
    "end": 4378,
    "range": [
      4377,
      4378
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4383,
    "end": 4389,
    "range": [
      4383,
      4389
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C3_v2_public",
    "start": 4390,
    "end": 4406,
    "range": [
      4390,
      4406
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4406,
    "end": 4407,
    "range": [
      4406,
      4407
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 4408,
    "end": 4421,
    "range": [
      4408,
      4421
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4421,
    "end": 4422,
    "range": [
      4421,
      4422
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4427,
    "end": 4434,
    "range": [
      4427,
      4434
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C3_v3_private",
    "start": 4435,
    "end": 4452,
    "range": [
      4435,
      4452
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4452,
    "end": 4453,
    "range": [
      4452,
      4453
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 4454,
    "end": 4468,
    "range": [
      4454,
      4468
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4468,
    "end": 4469,
    "range": [
      4468,
      4469
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4474,
    "end": 4480,
    "range": [
      4474,
      4480
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C3_v4_public",
    "start": 4481,
    "end": 4497,
    "range": [
      4481,
      4497
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4497,
    "end": 4498,
    "range": [
      4497,
      4498
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 4499,
    "end": 4513,
    "range": [
      4499,
      4513
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4513,
    "end": 4514,
    "range": [
      4513,
      4514
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4528,
    "end": 4535,
    "range": [
      4528,
      4535
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C3_v11_private",
    "start": 4536,
    "end": 4554,
    "range": [
      4536,
      4554
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4555,
    "end": 4556,
    "range": [
      4555,
      4556
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4557,
    "end": 4560,
    "range": [
      4557,
      4560
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 4561,
    "end": 4574,
    "range": [
      4561,
      4574
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4574,
    "end": 4575,
    "range": [
      4574,
      4575
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4575,
    "end": 4576,
    "range": [
      4575,
      4576
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4576,
    "end": 4577,
    "range": [
      4576,
      4577
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4582,
    "end": 4588,
    "range": [
      4582,
      4588
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C3_v12_public",
    "start": 4589,
    "end": 4606,
    "range": [
      4589,
      4606
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4607,
    "end": 4608,
    "range": [
      4607,
      4608
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4609,
    "end": 4612,
    "range": [
      4609,
      4612
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 4613,
    "end": 4626,
    "range": [
      4613,
      4626
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4626,
    "end": 4627,
    "range": [
      4626,
      4627
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4627,
    "end": 4628,
    "range": [
      4627,
      4628
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4628,
    "end": 4629,
    "range": [
      4628,
      4629
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4634,
    "end": 4641,
    "range": [
      4634,
      4641
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C3_v13_private",
    "start": 4642,
    "end": 4660,
    "range": [
      4642,
      4660
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4661,
    "end": 4662,
    "range": [
      4661,
      4662
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4663,
    "end": 4666,
    "range": [
      4663,
      4666
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 4667,
    "end": 4681,
    "range": [
      4667,
      4681
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4681,
    "end": 4682,
    "range": [
      4681,
      4682
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4682,
    "end": 4683,
    "range": [
      4682,
      4683
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4683,
    "end": 4684,
    "range": [
      4683,
      4684
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4689,
    "end": 4695,
    "range": [
      4689,
      4695
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C3_v14_public",
    "start": 4696,
    "end": 4713,
    "range": [
      4696,
      4713
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4714,
    "end": 4715,
    "range": [
      4714,
      4715
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4716,
    "end": 4719,
    "range": [
      4716,
      4719
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 4720,
    "end": 4734,
    "range": [
      4720,
      4734
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4734,
    "end": 4735,
    "range": [
      4734,
      4735
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4735,
    "end": 4736,
    "range": [
      4735,
      4736
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4736,
    "end": 4737,
    "range": [
      4736,
      4737
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4753,
    "end": 4760,
    "range": [
      4753,
      4760
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C3_v21_private",
    "start": 4761,
    "end": 4779,
    "range": [
      4761,
      4779
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4779,
    "end": 4780,
    "range": [
      4779,
      4780
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 4781,
    "end": 4794,
    "range": [
      4781,
      4794
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4795,
    "end": 4796,
    "range": [
      4795,
      4796
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4797,
    "end": 4800,
    "range": [
      4797,
      4800
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 4801,
    "end": 4814,
    "range": [
      4801,
      4814
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4814,
    "end": 4815,
    "range": [
      4814,
      4815
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4815,
    "end": 4816,
    "range": [
      4815,
      4816
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4816,
    "end": 4817,
    "range": [
      4816,
      4817
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4822,
    "end": 4828,
    "range": [
      4822,
      4828
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C3_v22_public",
    "start": 4829,
    "end": 4846,
    "range": [
      4829,
      4846
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4846,
    "end": 4847,
    "range": [
      4846,
      4847
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 4848,
    "end": 4861,
    "range": [
      4848,
      4861
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4862,
    "end": 4863,
    "range": [
      4862,
      4863
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4864,
    "end": 4867,
    "range": [
      4864,
      4867
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 4868,
    "end": 4881,
    "range": [
      4868,
      4881
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4881,
    "end": 4882,
    "range": [
      4881,
      4882
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4882,
    "end": 4883,
    "range": [
      4882,
      4883
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4883,
    "end": 4884,
    "range": [
      4883,
      4884
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4889,
    "end": 4896,
    "range": [
      4889,
      4896
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C3_v23_private",
    "start": 4897,
    "end": 4915,
    "range": [
      4897,
      4915
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4915,
    "end": 4916,
    "range": [
      4915,
      4916
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 4917,
    "end": 4931,
    "range": [
      4917,
      4931
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4932,
    "end": 4933,
    "range": [
      4932,
      4933
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4934,
    "end": 4937,
    "range": [
      4934,
      4937
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 4938,
    "end": 4952,
    "range": [
      4938,
      4952
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4952,
    "end": 4953,
    "range": [
      4952,
      4953
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4953,
    "end": 4954,
    "range": [
      4953,
      4954
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4954,
    "end": 4955,
    "range": [
      4954,
      4955
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4960,
    "end": 4966,
    "range": [
      4960,
      4966
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C3_v24_public",
    "start": 4967,
    "end": 4984,
    "range": [
      4967,
      4984
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4984,
    "end": 4985,
    "range": [
      4984,
      4985
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 4986,
    "end": 5000,
    "range": [
      4986,
      5000
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5001,
    "end": 5002,
    "range": [
      5001,
      5002
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5003,
    "end": 5006,
    "range": [
      5003,
      5006
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 5007,
    "end": 5021,
    "range": [
      5007,
      5021
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5021,
    "end": 5022,
    "range": [
      5021,
      5022
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5022,
    "end": 5023,
    "range": [
      5022,
      5023
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5023,
    "end": 5024,
    "range": [
      5023,
      5024
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5033,
    "end": 5034,
    "range": [
      5033,
      5034
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 5036,
    "end": 5041,
    "range": [
      5036,
      5041
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C4_public",
    "start": 5042,
    "end": 5055,
    "range": [
      5042,
      5055
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5056,
    "end": 5057,
    "range": [
      5056,
      5057
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5062,
    "end": 5069,
    "range": [
      5062,
      5069
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C4_v1_private",
    "start": 5070,
    "end": 5087,
    "range": [
      5070,
      5087
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5087,
    "end": 5088,
    "range": [
      5087,
      5088
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 5089,
    "end": 5102,
    "range": [
      5089,
      5102
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5102,
    "end": 5103,
    "range": [
      5102,
      5103
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 5108,
    "end": 5114,
    "range": [
      5108,
      5114
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C4_v2_public",
    "start": 5115,
    "end": 5131,
    "range": [
      5115,
      5131
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5131,
    "end": 5132,
    "range": [
      5131,
      5132
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 5133,
    "end": 5146,
    "range": [
      5133,
      5146
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5146,
    "end": 5147,
    "range": [
      5146,
      5147
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5152,
    "end": 5159,
    "range": [
      5152,
      5159
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C4_v3_private",
    "start": 5160,
    "end": 5177,
    "range": [
      5160,
      5177
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5177,
    "end": 5178,
    "range": [
      5177,
      5178
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 5179,
    "end": 5193,
    "range": [
      5179,
      5193
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5193,
    "end": 5194,
    "range": [
      5193,
      5194
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 5199,
    "end": 5205,
    "range": [
      5199,
      5205
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C4_v4_public",
    "start": 5206,
    "end": 5222,
    "range": [
      5206,
      5222
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5222,
    "end": 5223,
    "range": [
      5222,
      5223
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 5224,
    "end": 5238,
    "range": [
      5224,
      5238
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5238,
    "end": 5239,
    "range": [
      5238,
      5239
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5245,
    "end": 5252,
    "range": [
      5245,
      5252
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C4_v11_private",
    "start": 5253,
    "end": 5271,
    "range": [
      5253,
      5271
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5272,
    "end": 5273,
    "range": [
      5272,
      5273
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5274,
    "end": 5277,
    "range": [
      5274,
      5277
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 5278,
    "end": 5291,
    "range": [
      5278,
      5291
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5291,
    "end": 5292,
    "range": [
      5291,
      5292
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5292,
    "end": 5293,
    "range": [
      5292,
      5293
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5293,
    "end": 5294,
    "range": [
      5293,
      5294
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 5299,
    "end": 5305,
    "range": [
      5299,
      5305
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C4_v12_public",
    "start": 5306,
    "end": 5323,
    "range": [
      5306,
      5323
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5324,
    "end": 5325,
    "range": [
      5324,
      5325
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5326,
    "end": 5329,
    "range": [
      5326,
      5329
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 5330,
    "end": 5343,
    "range": [
      5330,
      5343
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5343,
    "end": 5344,
    "range": [
      5343,
      5344
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5344,
    "end": 5345,
    "range": [
      5344,
      5345
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5345,
    "end": 5346,
    "range": [
      5345,
      5346
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5351,
    "end": 5358,
    "range": [
      5351,
      5358
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C4_v13_private",
    "start": 5359,
    "end": 5377,
    "range": [
      5359,
      5377
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5378,
    "end": 5379,
    "range": [
      5378,
      5379
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5380,
    "end": 5383,
    "range": [
      5380,
      5383
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 5384,
    "end": 5398,
    "range": [
      5384,
      5398
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5398,
    "end": 5399,
    "range": [
      5398,
      5399
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5399,
    "end": 5400,
    "range": [
      5399,
      5400
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5400,
    "end": 5401,
    "range": [
      5400,
      5401
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 5406,
    "end": 5412,
    "range": [
      5406,
      5412
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C4_v14_public",
    "start": 5413,
    "end": 5430,
    "range": [
      5413,
      5430
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5431,
    "end": 5432,
    "range": [
      5431,
      5432
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5433,
    "end": 5436,
    "range": [
      5433,
      5436
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 5437,
    "end": 5451,
    "range": [
      5437,
      5451
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5451,
    "end": 5452,
    "range": [
      5451,
      5452
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5452,
    "end": 5453,
    "range": [
      5452,
      5453
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5453,
    "end": 5454,
    "range": [
      5453,
      5454
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5460,
    "end": 5467,
    "range": [
      5460,
      5467
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C4_v21_private",
    "start": 5468,
    "end": 5486,
    "range": [
      5468,
      5486
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5486,
    "end": 5487,
    "range": [
      5486,
      5487
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 5488,
    "end": 5501,
    "range": [
      5488,
      5501
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5502,
    "end": 5503,
    "range": [
      5502,
      5503
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5504,
    "end": 5507,
    "range": [
      5504,
      5507
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 5508,
    "end": 5521,
    "range": [
      5508,
      5521
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5521,
    "end": 5522,
    "range": [
      5521,
      5522
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5522,
    "end": 5523,
    "range": [
      5522,
      5523
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5523,
    "end": 5524,
    "range": [
      5523,
      5524
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 5529,
    "end": 5535,
    "range": [
      5529,
      5535
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C4_v22_public",
    "start": 5536,
    "end": 5553,
    "range": [
      5536,
      5553
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5553,
    "end": 5554,
    "range": [
      5553,
      5554
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 5555,
    "end": 5568,
    "range": [
      5555,
      5568
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5569,
    "end": 5570,
    "range": [
      5569,
      5570
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5571,
    "end": 5574,
    "range": [
      5571,
      5574
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 5575,
    "end": 5588,
    "range": [
      5575,
      5588
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5588,
    "end": 5589,
    "range": [
      5588,
      5589
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5589,
    "end": 5590,
    "range": [
      5589,
      5590
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5590,
    "end": 5591,
    "range": [
      5590,
      5591
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5596,
    "end": 5603,
    "range": [
      5596,
      5603
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C4_v23_private",
    "start": 5604,
    "end": 5622,
    "range": [
      5604,
      5622
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5622,
    "end": 5623,
    "range": [
      5622,
      5623
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 5624,
    "end": 5638,
    "range": [
      5624,
      5638
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5639,
    "end": 5640,
    "range": [
      5639,
      5640
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5641,
    "end": 5644,
    "range": [
      5641,
      5644
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 5645,
    "end": 5659,
    "range": [
      5645,
      5659
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5659,
    "end": 5660,
    "range": [
      5659,
      5660
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5660,
    "end": 5661,
    "range": [
      5660,
      5661
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5661,
    "end": 5662,
    "range": [
      5661,
      5662
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 5667,
    "end": 5673,
    "range": [
      5667,
      5673
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C4_v24_public",
    "start": 5674,
    "end": 5691,
    "range": [
      5674,
      5691
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5691,
    "end": 5692,
    "range": [
      5691,
      5692
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 5693,
    "end": 5707,
    "range": [
      5693,
      5707
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5708,
    "end": 5709,
    "range": [
      5708,
      5709
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5710,
    "end": 5713,
    "range": [
      5710,
      5713
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 5714,
    "end": 5728,
    "range": [
      5714,
      5728
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5728,
    "end": 5729,
    "range": [
      5728,
      5729
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5729,
    "end": 5730,
    "range": [
      5729,
      5730
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5730,
    "end": 5731,
    "range": [
      5730,
      5731
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5732,
    "end": 5733,
    "range": [
      5732,
      5733
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5735,
    "end": 5738,
    "range": [
      5735,
      5738
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_v1_private",
    "start": 5739,
    "end": 5753,
    "range": [
      5739,
      5753
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5753,
    "end": 5754,
    "range": [
      5753,
      5754
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 5755,
    "end": 5768,
    "range": [
      5755,
      5768
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5768,
    "end": 5769,
    "range": [
      5768,
      5769
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5770,
    "end": 5776,
    "range": [
      5770,
      5776
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5777,
    "end": 5780,
    "range": [
      5777,
      5780
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_v2_public",
    "start": 5781,
    "end": 5794,
    "range": [
      5781,
      5794
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5794,
    "end": 5795,
    "range": [
      5794,
      5795
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 5796,
    "end": 5809,
    "range": [
      5796,
      5809
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5809,
    "end": 5810,
    "range": [
      5809,
      5810
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5811,
    "end": 5814,
    "range": [
      5811,
      5814
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_v3_private",
    "start": 5815,
    "end": 5829,
    "range": [
      5815,
      5829
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5829,
    "end": 5830,
    "range": [
      5829,
      5830
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 5831,
    "end": 5845,
    "range": [
      5831,
      5845
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5845,
    "end": 5846,
    "range": [
      5845,
      5846
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5847,
    "end": 5853,
    "range": [
      5847,
      5853
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5854,
    "end": 5857,
    "range": [
      5854,
      5857
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_v4_public",
    "start": 5858,
    "end": 5871,
    "range": [
      5858,
      5871
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5871,
    "end": 5872,
    "range": [
      5871,
      5872
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 5873,
    "end": 5887,
    "range": [
      5873,
      5887
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5887,
    "end": 5888,
    "range": [
      5887,
      5888
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5899,
    "end": 5902,
    "range": [
      5899,
      5902
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_v11_private",
    "start": 5903,
    "end": 5918,
    "range": [
      5903,
      5918
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5919,
    "end": 5920,
    "range": [
      5919,
      5920
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5921,
    "end": 5924,
    "range": [
      5921,
      5924
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 5925,
    "end": 5938,
    "range": [
      5925,
      5938
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5938,
    "end": 5939,
    "range": [
      5938,
      5939
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5939,
    "end": 5940,
    "range": [
      5939,
      5940
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5940,
    "end": 5941,
    "range": [
      5940,
      5941
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5942,
    "end": 5948,
    "range": [
      5942,
      5948
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5949,
    "end": 5952,
    "range": [
      5949,
      5952
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_v12_public",
    "start": 5953,
    "end": 5967,
    "range": [
      5953,
      5967
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5968,
    "end": 5969,
    "range": [
      5968,
      5969
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5970,
    "end": 5973,
    "range": [
      5970,
      5973
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 5974,
    "end": 5987,
    "range": [
      5974,
      5987
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5987,
    "end": 5988,
    "range": [
      5987,
      5988
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5988,
    "end": 5989,
    "range": [
      5988,
      5989
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5989,
    "end": 5990,
    "range": [
      5989,
      5990
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5991,
    "end": 5994,
    "range": [
      5991,
      5994
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_v13_private",
    "start": 5995,
    "end": 6010,
    "range": [
      5995,
      6010
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6011,
    "end": 6012,
    "range": [
      6011,
      6012
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6013,
    "end": 6016,
    "range": [
      6013,
      6016
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 6017,
    "end": 6031,
    "range": [
      6017,
      6031
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6031,
    "end": 6032,
    "range": [
      6031,
      6032
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6032,
    "end": 6033,
    "range": [
      6032,
      6033
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6033,
    "end": 6034,
    "range": [
      6033,
      6034
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6035,
    "end": 6041,
    "range": [
      6035,
      6041
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6042,
    "end": 6045,
    "range": [
      6042,
      6045
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_v14_public",
    "start": 6046,
    "end": 6060,
    "range": [
      6046,
      6060
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6061,
    "end": 6062,
    "range": [
      6061,
      6062
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6063,
    "end": 6066,
    "range": [
      6063,
      6066
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 6067,
    "end": 6081,
    "range": [
      6067,
      6081
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6081,
    "end": 6082,
    "range": [
      6081,
      6082
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6082,
    "end": 6083,
    "range": [
      6082,
      6083
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6083,
    "end": 6084,
    "range": [
      6083,
      6084
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6095,
    "end": 6098,
    "range": [
      6095,
      6098
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_v21_private",
    "start": 6099,
    "end": 6114,
    "range": [
      6099,
      6114
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6114,
    "end": 6115,
    "range": [
      6114,
      6115
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 6116,
    "end": 6129,
    "range": [
      6116,
      6129
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6130,
    "end": 6131,
    "range": [
      6130,
      6131
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6132,
    "end": 6135,
    "range": [
      6132,
      6135
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 6136,
    "end": 6149,
    "range": [
      6136,
      6149
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6149,
    "end": 6150,
    "range": [
      6149,
      6150
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6150,
    "end": 6151,
    "range": [
      6150,
      6151
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6151,
    "end": 6152,
    "range": [
      6151,
      6152
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6153,
    "end": 6159,
    "range": [
      6153,
      6159
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6160,
    "end": 6163,
    "range": [
      6160,
      6163
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_v22_public",
    "start": 6164,
    "end": 6178,
    "range": [
      6164,
      6178
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6178,
    "end": 6179,
    "range": [
      6178,
      6179
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 6180,
    "end": 6193,
    "range": [
      6180,
      6193
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6194,
    "end": 6195,
    "range": [
      6194,
      6195
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6196,
    "end": 6199,
    "range": [
      6196,
      6199
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 6200,
    "end": 6213,
    "range": [
      6200,
      6213
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6213,
    "end": 6214,
    "range": [
      6213,
      6214
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6214,
    "end": 6215,
    "range": [
      6214,
      6215
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6215,
    "end": 6216,
    "range": [
      6215,
      6216
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6217,
    "end": 6220,
    "range": [
      6217,
      6220
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_v23_private",
    "start": 6221,
    "end": 6236,
    "range": [
      6221,
      6236
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6236,
    "end": 6237,
    "range": [
      6236,
      6237
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 6238,
    "end": 6252,
    "range": [
      6238,
      6252
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6253,
    "end": 6254,
    "range": [
      6253,
      6254
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6255,
    "end": 6258,
    "range": [
      6255,
      6258
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 6259,
    "end": 6273,
    "range": [
      6259,
      6273
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6273,
    "end": 6274,
    "range": [
      6273,
      6274
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6274,
    "end": 6275,
    "range": [
      6274,
      6275
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6275,
    "end": 6276,
    "range": [
      6275,
      6276
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6277,
    "end": 6283,
    "range": [
      6277,
      6283
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6284,
    "end": 6287,
    "range": [
      6284,
      6287
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_v24_public",
    "start": 6288,
    "end": 6302,
    "range": [
      6288,
      6302
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6302,
    "end": 6303,
    "range": [
      6302,
      6303
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 6304,
    "end": 6318,
    "range": [
      6304,
      6318
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6319,
    "end": 6320,
    "range": [
      6319,
      6320
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6321,
    "end": 6324,
    "range": [
      6321,
      6324
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 6325,
    "end": 6339,
    "range": [
      6325,
      6339
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6339,
    "end": 6340,
    "range": [
      6339,
      6340
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6340,
    "end": 6341,
    "range": [
      6340,
      6341
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6341,
    "end": 6342,
    "range": [
      6341,
      6342
    ]
  }
]
```
