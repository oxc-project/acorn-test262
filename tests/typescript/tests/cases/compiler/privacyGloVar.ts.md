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
        "start": 10,
        "end": 12
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
                "start": 32,
                "end": 41
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
                      "start": 60,
                      "end": 62
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
                        "start": 65,
                        "end": 76
                      },
                      "expression": false,
                      "start": 62,
                      "end": 76
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 52,
                    "end": 76
                  }
                ],
                "start": 42,
                "end": 82
              },
              "abstract": false,
              "declare": false,
              "start": 26,
              "end": 82
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 82
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
              "start": 94,
              "end": 104
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 105,
              "end": 112
            },
            "abstract": false,
            "declare": false,
            "start": 88,
            "end": 112
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
                "start": 131,
                "end": 140
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
                      "start": 159,
                      "end": 172
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
                          "start": 174,
                          "end": 183
                        },
                        "typeArguments": null,
                        "start": 174,
                        "end": 183
                      },
                      "start": 172,
                      "end": 183
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
                    "start": 151,
                    "end": 184
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
                      "start": 200,
                      "end": 212
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
                          "start": 214,
                          "end": 223
                        },
                        "typeArguments": null,
                        "start": 214,
                        "end": 223
                      },
                      "start": 212,
                      "end": 223
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
                    "start": 193,
                    "end": 224
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
                      "start": 241,
                      "end": 254
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
                          "start": 256,
                          "end": 266
                        },
                        "typeArguments": null,
                        "start": 256,
                        "end": 266
                      },
                      "start": 254,
                      "end": 266
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
                    "start": 233,
                    "end": 267
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
                      "start": 283,
                      "end": 295
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
                          "start": 297,
                          "end": 307
                        },
                        "typeArguments": null,
                        "start": 297,
                        "end": 307
                      },
                      "start": 295,
                      "end": 307
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
                    "start": 276,
                    "end": 308
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
                      "start": 335,
                      "end": 349
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
                        "start": 356,
                        "end": 365
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 352,
                      "end": 367
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 327,
                    "end": 368
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
                      "start": 384,
                      "end": 397
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
                        "start": 404,
                        "end": 413
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 400,
                      "end": 415
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 377,
                    "end": 416
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
                      "start": 433,
                      "end": 447
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
                        "start": 454,
                        "end": 464
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 450,
                      "end": 466
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 425,
                    "end": 467
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
                      "start": 483,
                      "end": 496
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
                        "start": 503,
                        "end": 513
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 499,
                      "end": 515
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 476,
                    "end": 516
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
                      "start": 543,
                      "end": 557
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
                          "start": 559,
                          "end": 568
                        },
                        "typeArguments": null,
                        "start": 559,
                        "end": 568
                      },
                      "start": 557,
                      "end": 568
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 575,
                        "end": 584
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 571,
                      "end": 586
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 535,
                    "end": 587
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
                      "start": 603,
                      "end": 616
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
                          "start": 618,
                          "end": 627
                        },
                        "typeArguments": null,
                        "start": 618,
                        "end": 627
                      },
                      "start": 616,
                      "end": 627
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 634,
                        "end": 643
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 630,
                      "end": 645
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 596,
                    "end": 646
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
                      "start": 663,
                      "end": 677
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
                          "start": 679,
                          "end": 689
                        },
                        "typeArguments": null,
                        "start": 679,
                        "end": 689
                      },
                      "start": 677,
                      "end": 689
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 696,
                        "end": 706
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 692,
                      "end": 708
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 655,
                    "end": 709
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
                      "start": 725,
                      "end": 738
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
                          "start": 740,
                          "end": 750
                        },
                        "typeArguments": null,
                        "start": 740,
                        "end": 750
                      },
                      "start": 738,
                      "end": 750
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 757,
                        "end": 767
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 753,
                      "end": 769
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 718,
                    "end": 770
                  }
                ],
                "start": 141,
                "end": 785
              },
              "abstract": false,
              "declare": false,
              "start": 125,
              "end": 785
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 118,
            "end": 785
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
              "start": 797,
              "end": 806
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
                    "start": 825,
                    "end": 838
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
                        "start": 840,
                        "end": 849
                      },
                      "typeArguments": null,
                      "start": 840,
                      "end": 849
                    },
                    "start": 838,
                    "end": 849
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
                  "start": 817,
                  "end": 850
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
                    "start": 866,
                    "end": 878
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
                        "start": 880,
                        "end": 889
                      },
                      "typeArguments": null,
                      "start": 880,
                      "end": 889
                    },
                    "start": 878,
                    "end": 889
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
                  "start": 859,
                  "end": 890
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
                    "start": 907,
                    "end": 920
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
                        "start": 922,
                        "end": 932
                      },
                      "typeArguments": null,
                      "start": 922,
                      "end": 932
                    },
                    "start": 920,
                    "end": 932
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
                  "start": 899,
                  "end": 933
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
                    "start": 949,
                    "end": 961
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
                        "start": 963,
                        "end": 973
                      },
                      "typeArguments": null,
                      "start": 963,
                      "end": 973
                    },
                    "start": 961,
                    "end": 973
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
                  "start": 942,
                  "end": 974
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
                    "start": 992,
                    "end": 1006
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
                      "start": 1013,
                      "end": 1022
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1009,
                    "end": 1024
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 984,
                  "end": 1025
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
                    "start": 1041,
                    "end": 1054
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
                      "start": 1061,
                      "end": 1070
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1057,
                    "end": 1072
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 1034,
                  "end": 1073
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
                    "start": 1090,
                    "end": 1104
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
                      "start": 1111,
                      "end": 1121
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1107,
                    "end": 1123
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 1082,
                  "end": 1124
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
                    "start": 1140,
                    "end": 1153
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
                      "start": 1160,
                      "end": 1170
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1156,
                    "end": 1172
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 1133,
                  "end": 1173
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
                    "start": 1191,
                    "end": 1205
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
                        "start": 1207,
                        "end": 1216
                      },
                      "typeArguments": null,
                      "start": 1207,
                      "end": 1216
                    },
                    "start": 1205,
                    "end": 1216
                  },
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1223,
                      "end": 1232
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1219,
                    "end": 1234
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 1183,
                  "end": 1235
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
                    "start": 1251,
                    "end": 1264
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
                        "start": 1266,
                        "end": 1275
                      },
                      "typeArguments": null,
                      "start": 1266,
                      "end": 1275
                    },
                    "start": 1264,
                    "end": 1275
                  },
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1282,
                      "end": 1291
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1278,
                    "end": 1293
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 1244,
                  "end": 1294
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
                    "start": 1311,
                    "end": 1325
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
                        "start": 1327,
                        "end": 1337
                      },
                      "typeArguments": null,
                      "start": 1327,
                      "end": 1337
                    },
                    "start": 1325,
                    "end": 1337
                  },
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1344,
                      "end": 1354
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1340,
                    "end": 1356
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 1303,
                  "end": 1357
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
                    "start": 1373,
                    "end": 1386
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
                        "start": 1388,
                        "end": 1398
                      },
                      "typeArguments": null,
                      "start": 1388,
                      "end": 1398
                    },
                    "start": 1386,
                    "end": 1398
                  },
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1405,
                      "end": 1415
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1401,
                    "end": 1417
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 1366,
                  "end": 1418
                }
              ],
              "start": 807,
              "end": 1424
            },
            "abstract": false,
            "declare": false,
            "start": 791,
            "end": 1424
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
                        "start": 1449,
                        "end": 1458
                      },
                      "typeArguments": null,
                      "start": 1449,
                      "end": 1458
                    },
                    "start": 1447,
                    "end": 1458
                  },
                  "start": 1434,
                  "end": 1458
                },
                "init": null,
                "definite": false,
                "start": 1434,
                "end": 1458
              }
            ],
            "declare": false,
            "start": 1430,
            "end": 1459
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
                          "start": 1489,
                          "end": 1498
                        },
                        "typeArguments": null,
                        "start": 1489,
                        "end": 1498
                      },
                      "start": 1487,
                      "end": 1498
                    },
                    "start": 1475,
                    "end": 1498
                  },
                  "init": null,
                  "definite": false,
                  "start": 1475,
                  "end": 1498
                }
              ],
              "declare": false,
              "start": 1471,
              "end": 1499
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1464,
            "end": 1499
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
                        "start": 1523,
                        "end": 1533
                      },
                      "typeArguments": null,
                      "start": 1523,
                      "end": 1533
                    },
                    "start": 1521,
                    "end": 1533
                  },
                  "start": 1508,
                  "end": 1533
                },
                "init": null,
                "definite": false,
                "start": 1508,
                "end": 1533
              }
            ],
            "declare": false,
            "start": 1504,
            "end": 1534
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
                          "start": 1564,
                          "end": 1574
                        },
                        "typeArguments": null,
                        "start": 1564,
                        "end": 1574
                      },
                      "start": 1562,
                      "end": 1574
                    },
                    "start": 1550,
                    "end": 1574
                  },
                  "init": null,
                  "definite": false,
                  "start": 1550,
                  "end": 1574
                }
              ],
              "declare": false,
              "start": 1546,
              "end": 1575
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1539,
            "end": 1575
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
                  "start": 1594,
                  "end": 1608
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1615,
                    "end": 1624
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 1611,
                  "end": 1626
                },
                "definite": false,
                "start": 1594,
                "end": 1626
              }
            ],
            "declare": false,
            "start": 1590,
            "end": 1627
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
                    "start": 1643,
                    "end": 1656
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1663,
                      "end": 1672
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1659,
                    "end": 1674
                  },
                  "definite": false,
                  "start": 1643,
                  "end": 1674
                }
              ],
              "declare": false,
              "start": 1639,
              "end": 1675
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1632,
            "end": 1675
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
                  "start": 1684,
                  "end": 1698
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1705,
                    "end": 1715
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 1701,
                  "end": 1717
                },
                "definite": false,
                "start": 1684,
                "end": 1717
              }
            ],
            "declare": false,
            "start": 1680,
            "end": 1718
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
                    "start": 1734,
                    "end": 1747
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1754,
                      "end": 1764
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1750,
                    "end": 1766
                  },
                  "definite": false,
                  "start": 1734,
                  "end": 1766
                }
              ],
              "declare": false,
              "start": 1730,
              "end": 1767
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1723,
            "end": 1767
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
                        "start": 1802,
                        "end": 1811
                      },
                      "typeArguments": null,
                      "start": 1802,
                      "end": 1811
                    },
                    "start": 1800,
                    "end": 1811
                  },
                  "start": 1786,
                  "end": 1811
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1818,
                    "end": 1827
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 1814,
                  "end": 1829
                },
                "definite": false,
                "start": 1786,
                "end": 1829
              }
            ],
            "declare": false,
            "start": 1782,
            "end": 1830
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
                          "start": 1861,
                          "end": 1870
                        },
                        "typeArguments": null,
                        "start": 1861,
                        "end": 1870
                      },
                      "start": 1859,
                      "end": 1870
                    },
                    "start": 1846,
                    "end": 1870
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1877,
                      "end": 1886
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1873,
                    "end": 1888
                  },
                  "definite": false,
                  "start": 1846,
                  "end": 1888
                }
              ],
              "declare": false,
              "start": 1842,
              "end": 1889
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1835,
            "end": 1889
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
                        "start": 1914,
                        "end": 1924
                      },
                      "typeArguments": null,
                      "start": 1914,
                      "end": 1924
                    },
                    "start": 1912,
                    "end": 1924
                  },
                  "start": 1898,
                  "end": 1924
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1931,
                    "end": 1941
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 1927,
                  "end": 1943
                },
                "definite": false,
                "start": 1898,
                "end": 1943
              }
            ],
            "declare": false,
            "start": 1894,
            "end": 1944
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
                          "start": 1975,
                          "end": 1985
                        },
                        "typeArguments": null,
                        "start": 1975,
                        "end": 1985
                      },
                      "start": 1973,
                      "end": 1985
                    },
                    "start": 1960,
                    "end": 1985
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1992,
                      "end": 2002
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1988,
                    "end": 2004
                  },
                  "definite": false,
                  "start": 1960,
                  "end": 2004
                }
              ],
              "declare": false,
              "start": 1956,
              "end": 2005
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1949,
            "end": 2005
          }
        ],
        "start": 13,
        "end": 2016
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 2016
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
        "start": 2024,
        "end": 2037
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
              "start": 2052,
              "end": 2054
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
                "start": 2057,
                "end": 2064
              },
              "expression": false,
              "start": 2054,
              "end": 2064
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2044,
            "end": 2064
          }
        ],
        "start": 2038,
        "end": 2066
      },
      "abstract": false,
      "declare": false,
      "start": 2018,
      "end": 2066
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
        "start": 2074,
        "end": 2087
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
              "start": 2102,
              "end": 2119
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
                  "start": 2121,
                  "end": 2134
                },
                "typeArguments": null,
                "start": 2121,
                "end": 2134
              },
              "start": 2119,
              "end": 2134
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
            "start": 2094,
            "end": 2135
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
              "start": 2147,
              "end": 2163
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
                  "start": 2165,
                  "end": 2178
                },
                "typeArguments": null,
                "start": 2165,
                "end": 2178
              },
              "start": 2163,
              "end": 2178
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
            "start": 2140,
            "end": 2179
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
              "start": 2193,
              "end": 2211
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
                "start": 2218,
                "end": 2231
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2214,
              "end": 2233
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 2185,
            "end": 2234
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
              "start": 2246,
              "end": 2263
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
                "start": 2270,
                "end": 2283
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2266,
              "end": 2285
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 2239,
            "end": 2286
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
              "start": 2300,
              "end": 2318
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
                  "start": 2320,
                  "end": 2333
                },
                "typeArguments": null,
                "start": 2320,
                "end": 2333
              },
              "start": 2318,
              "end": 2333
            },
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2340,
                "end": 2353
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2336,
              "end": 2355
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 2292,
            "end": 2356
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
              "start": 2368,
              "end": 2385
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
                  "start": 2387,
                  "end": 2400
                },
                "typeArguments": null,
                "start": 2387,
                "end": 2400
              },
              "start": 2385,
              "end": 2400
            },
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2407,
                "end": 2420
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2403,
              "end": 2422
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 2361,
            "end": 2423
          }
        ],
        "start": 2088,
        "end": 2425
      },
      "abstract": false,
      "declare": false,
      "start": 2068,
      "end": 2425
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
                  "start": 2447,
                  "end": 2460
                },
                "typeArguments": null,
                "start": 2447,
                "end": 2460
              },
              "start": 2445,
              "end": 2460
            },
            "start": 2432,
            "end": 2460
          },
          "init": null,
          "definite": false,
          "start": 2432,
          "end": 2460
        }
      ],
      "declare": false,
      "start": 2428,
      "end": 2461
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
            "start": 2466,
            "end": 2480
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2487,
              "end": 2500
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2483,
            "end": 2502
          },
          "definite": false,
          "start": 2466,
          "end": 2502
        }
      ],
      "declare": false,
      "start": 2462,
      "end": 2503
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
                  "start": 2524,
                  "end": 2537
                },
                "typeArguments": null,
                "start": 2524,
                "end": 2537
              },
              "start": 2522,
              "end": 2537
            },
            "start": 2508,
            "end": 2537
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2544,
              "end": 2557
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2540,
            "end": 2559
          },
          "definite": false,
          "start": 2508,
          "end": 2559
        }
      ],
      "declare": false,
      "start": 2504,
      "end": 2560
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2560
}
```
