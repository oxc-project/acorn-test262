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
          "start": 14,
          "end": 16
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
                  "start": 36,
                  "end": 45
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
                        "start": 64,
                        "end": 66
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
                          "start": 69,
                          "end": 80
                        },
                        "expression": false,
                        "start": 66,
                        "end": 80
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 56,
                      "end": 80
                    }
                  ],
                  "start": 46,
                  "end": 86
                },
                "abstract": false,
                "declare": false,
                "start": 30,
                "end": 86
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 23,
              "end": 86
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
                "start": 98,
                "end": 108
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 109,
                "end": 116
              },
              "abstract": false,
              "declare": false,
              "start": 92,
              "end": 116
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
                  "start": 135,
                  "end": 144
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
                        "start": 163,
                        "end": 176
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
                            "start": 178,
                            "end": 187
                          },
                          "typeArguments": null,
                          "start": 178,
                          "end": 187
                        },
                        "start": 176,
                        "end": 187
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
                      "start": 155,
                      "end": 188
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
                        "start": 204,
                        "end": 216
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
                            "start": 218,
                            "end": 227
                          },
                          "typeArguments": null,
                          "start": 218,
                          "end": 227
                        },
                        "start": 216,
                        "end": 227
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
                      "start": 197,
                      "end": 228
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
                        "start": 245,
                        "end": 258
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
                            "start": 260,
                            "end": 270
                          },
                          "typeArguments": null,
                          "start": 260,
                          "end": 270
                        },
                        "start": 258,
                        "end": 270
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
                      "start": 237,
                      "end": 271
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
                        "start": 287,
                        "end": 299
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
                            "start": 301,
                            "end": 311
                          },
                          "typeArguments": null,
                          "start": 301,
                          "end": 311
                        },
                        "start": 299,
                        "end": 311
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
                      "start": 280,
                      "end": 312
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
                        "start": 339,
                        "end": 353
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
                          "start": 360,
                          "end": 369
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 356,
                        "end": 371
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "private",
                      "start": 331,
                      "end": 372
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
                        "start": 388,
                        "end": 401
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
                          "start": 408,
                          "end": 417
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 404,
                        "end": 419
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "public",
                      "start": 381,
                      "end": 420
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
                        "start": 437,
                        "end": 451
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
                          "start": 458,
                          "end": 468
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 454,
                        "end": 470
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "private",
                      "start": 429,
                      "end": 471
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
                        "start": 487,
                        "end": 500
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
                          "start": 507,
                          "end": 517
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 503,
                        "end": 519
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "public",
                      "start": 480,
                      "end": 520
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
                        "start": 547,
                        "end": 561
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
                            "start": 563,
                            "end": 572
                          },
                          "typeArguments": null,
                          "start": 563,
                          "end": 572
                        },
                        "start": 561,
                        "end": 572
                      },
                      "value": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 579,
                          "end": 588
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 575,
                        "end": 590
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "private",
                      "start": 539,
                      "end": 591
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
                        "start": 607,
                        "end": 620
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
                            "start": 622,
                            "end": 631
                          },
                          "typeArguments": null,
                          "start": 622,
                          "end": 631
                        },
                        "start": 620,
                        "end": 631
                      },
                      "value": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 638,
                          "end": 647
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 634,
                        "end": 649
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "public",
                      "start": 600,
                      "end": 650
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
                        "start": 667,
                        "end": 681
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
                            "start": 683,
                            "end": 693
                          },
                          "typeArguments": null,
                          "start": 683,
                          "end": 693
                        },
                        "start": 681,
                        "end": 693
                      },
                      "value": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 700,
                          "end": 710
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 696,
                        "end": 712
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "private",
                      "start": 659,
                      "end": 713
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
                        "start": 729,
                        "end": 742
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
                            "start": 744,
                            "end": 754
                          },
                          "typeArguments": null,
                          "start": 744,
                          "end": 754
                        },
                        "start": 742,
                        "end": 754
                      },
                      "value": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 761,
                          "end": 771
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 757,
                        "end": 773
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "public",
                      "start": 722,
                      "end": 774
                    }
                  ],
                  "start": 145,
                  "end": 789
                },
                "abstract": false,
                "declare": false,
                "start": 129,
                "end": 789
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 122,
              "end": 789
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
                "start": 801,
                "end": 810
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
                      "start": 829,
                      "end": 842
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
                          "start": 844,
                          "end": 853
                        },
                        "typeArguments": null,
                        "start": 844,
                        "end": 853
                      },
                      "start": 842,
                      "end": 853
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
                    "start": 821,
                    "end": 854
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
                      "start": 870,
                      "end": 882
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
                          "start": 884,
                          "end": 893
                        },
                        "typeArguments": null,
                        "start": 884,
                        "end": 893
                      },
                      "start": 882,
                      "end": 893
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
                    "start": 863,
                    "end": 894
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
                      "start": 911,
                      "end": 924
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
                          "start": 926,
                          "end": 936
                        },
                        "typeArguments": null,
                        "start": 926,
                        "end": 936
                      },
                      "start": 924,
                      "end": 936
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
                    "start": 903,
                    "end": 937
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
                      "start": 953,
                      "end": 965
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
                          "start": 967,
                          "end": 977
                        },
                        "typeArguments": null,
                        "start": 967,
                        "end": 977
                      },
                      "start": 965,
                      "end": 977
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
                    "start": 946,
                    "end": 978
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
                      "start": 996,
                      "end": 1010
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
                        "start": 1017,
                        "end": 1026
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1013,
                      "end": 1028
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 988,
                    "end": 1029
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
                      "start": 1045,
                      "end": 1058
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
                        "start": 1065,
                        "end": 1074
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1061,
                      "end": 1076
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 1038,
                    "end": 1077
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
                      "start": 1094,
                      "end": 1108
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
                        "start": 1115,
                        "end": 1125
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1111,
                      "end": 1127
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 1086,
                    "end": 1128
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
                      "start": 1144,
                      "end": 1157
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
                        "start": 1164,
                        "end": 1174
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1160,
                      "end": 1176
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 1137,
                    "end": 1177
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
                      "start": 1195,
                      "end": 1209
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
                          "start": 1211,
                          "end": 1220
                        },
                        "typeArguments": null,
                        "start": 1211,
                        "end": 1220
                      },
                      "start": 1209,
                      "end": 1220
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1227,
                        "end": 1236
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1223,
                      "end": 1238
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 1187,
                    "end": 1239
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
                      "start": 1255,
                      "end": 1268
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
                          "start": 1270,
                          "end": 1279
                        },
                        "typeArguments": null,
                        "start": 1270,
                        "end": 1279
                      },
                      "start": 1268,
                      "end": 1279
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1286,
                        "end": 1295
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1282,
                      "end": 1297
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 1248,
                    "end": 1298
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
                      "start": 1315,
                      "end": 1329
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
                          "start": 1331,
                          "end": 1341
                        },
                        "typeArguments": null,
                        "start": 1331,
                        "end": 1341
                      },
                      "start": 1329,
                      "end": 1341
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1348,
                        "end": 1358
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1344,
                      "end": 1360
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 1307,
                    "end": 1361
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
                      "start": 1377,
                      "end": 1390
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
                          "start": 1392,
                          "end": 1402
                        },
                        "typeArguments": null,
                        "start": 1392,
                        "end": 1402
                      },
                      "start": 1390,
                      "end": 1402
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1409,
                        "end": 1419
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1405,
                      "end": 1421
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 1370,
                    "end": 1422
                  }
                ],
                "start": 811,
                "end": 1428
              },
              "abstract": false,
              "declare": false,
              "start": 795,
              "end": 1428
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
                          "start": 1453,
                          "end": 1462
                        },
                        "typeArguments": null,
                        "start": 1453,
                        "end": 1462
                      },
                      "start": 1451,
                      "end": 1462
                    },
                    "start": 1438,
                    "end": 1462
                  },
                  "init": null,
                  "definite": false,
                  "start": 1438,
                  "end": 1462
                }
              ],
              "declare": false,
              "start": 1434,
              "end": 1463
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
                            "start": 1493,
                            "end": 1502
                          },
                          "typeArguments": null,
                          "start": 1493,
                          "end": 1502
                        },
                        "start": 1491,
                        "end": 1502
                      },
                      "start": 1479,
                      "end": 1502
                    },
                    "init": null,
                    "definite": false,
                    "start": 1479,
                    "end": 1502
                  }
                ],
                "declare": false,
                "start": 1475,
                "end": 1503
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1468,
              "end": 1503
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
                          "start": 1527,
                          "end": 1537
                        },
                        "typeArguments": null,
                        "start": 1527,
                        "end": 1537
                      },
                      "start": 1525,
                      "end": 1537
                    },
                    "start": 1512,
                    "end": 1537
                  },
                  "init": null,
                  "definite": false,
                  "start": 1512,
                  "end": 1537
                }
              ],
              "declare": false,
              "start": 1508,
              "end": 1538
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
                            "start": 1568,
                            "end": 1578
                          },
                          "typeArguments": null,
                          "start": 1568,
                          "end": 1578
                        },
                        "start": 1566,
                        "end": 1578
                      },
                      "start": 1554,
                      "end": 1578
                    },
                    "init": null,
                    "definite": false,
                    "start": 1554,
                    "end": 1578
                  }
                ],
                "declare": false,
                "start": 1550,
                "end": 1579
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1543,
              "end": 1579
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
                    "start": 1598,
                    "end": 1612
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1619,
                      "end": 1628
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1615,
                    "end": 1630
                  },
                  "definite": false,
                  "start": 1598,
                  "end": 1630
                }
              ],
              "declare": false,
              "start": 1594,
              "end": 1631
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
                      "start": 1647,
                      "end": 1660
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1667,
                        "end": 1676
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1663,
                      "end": 1678
                    },
                    "definite": false,
                    "start": 1647,
                    "end": 1678
                  }
                ],
                "declare": false,
                "start": 1643,
                "end": 1679
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1636,
              "end": 1679
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
                    "start": 1688,
                    "end": 1702
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1709,
                      "end": 1719
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1705,
                    "end": 1721
                  },
                  "definite": false,
                  "start": 1688,
                  "end": 1721
                }
              ],
              "declare": false,
              "start": 1684,
              "end": 1722
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
                      "start": 1738,
                      "end": 1751
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1758,
                        "end": 1768
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1754,
                      "end": 1770
                    },
                    "definite": false,
                    "start": 1738,
                    "end": 1770
                  }
                ],
                "declare": false,
                "start": 1734,
                "end": 1771
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1727,
              "end": 1771
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
                          "start": 1806,
                          "end": 1815
                        },
                        "typeArguments": null,
                        "start": 1806,
                        "end": 1815
                      },
                      "start": 1804,
                      "end": 1815
                    },
                    "start": 1790,
                    "end": 1815
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1822,
                      "end": 1831
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1818,
                    "end": 1833
                  },
                  "definite": false,
                  "start": 1790,
                  "end": 1833
                }
              ],
              "declare": false,
              "start": 1786,
              "end": 1834
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
                            "start": 1865,
                            "end": 1874
                          },
                          "typeArguments": null,
                          "start": 1865,
                          "end": 1874
                        },
                        "start": 1863,
                        "end": 1874
                      },
                      "start": 1850,
                      "end": 1874
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1881,
                        "end": 1890
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1877,
                      "end": 1892
                    },
                    "definite": false,
                    "start": 1850,
                    "end": 1892
                  }
                ],
                "declare": false,
                "start": 1846,
                "end": 1893
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1839,
              "end": 1893
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
                          "start": 1918,
                          "end": 1928
                        },
                        "typeArguments": null,
                        "start": 1918,
                        "end": 1928
                      },
                      "start": 1916,
                      "end": 1928
                    },
                    "start": 1902,
                    "end": 1928
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1935,
                      "end": 1945
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1931,
                    "end": 1947
                  },
                  "definite": false,
                  "start": 1902,
                  "end": 1947
                }
              ],
              "declare": false,
              "start": 1898,
              "end": 1948
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
                            "start": 1979,
                            "end": 1989
                          },
                          "typeArguments": null,
                          "start": 1979,
                          "end": 1989
                        },
                        "start": 1977,
                        "end": 1989
                      },
                      "start": 1964,
                      "end": 1989
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1996,
                        "end": 2006
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1992,
                      "end": 2008
                    },
                    "definite": false,
                    "start": 1964,
                    "end": 2008
                  }
                ],
                "declare": false,
                "start": 1960,
                "end": 2009
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1953,
              "end": 2009
            }
          ],
          "start": 17,
          "end": 2020
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 2020
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 2020
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2029,
        "end": 2031
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
                "start": 2051,
                "end": 2063
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
                      "start": 2082,
                      "end": 2084
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
                        "start": 2087,
                        "end": 2098
                      },
                      "expression": false,
                      "start": 2084,
                      "end": 2098
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 2074,
                    "end": 2098
                  }
                ],
                "start": 2064,
                "end": 2104
              },
              "abstract": false,
              "declare": false,
              "start": 2045,
              "end": 2104
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2038,
            "end": 2104
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
              "start": 2116,
              "end": 2129
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 2130,
              "end": 2137
            },
            "abstract": false,
            "declare": false,
            "start": 2110,
            "end": 2137
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
                "start": 2156,
                "end": 2168
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
                      "start": 2187,
                      "end": 2203
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
                          "start": 2205,
                          "end": 2217
                        },
                        "typeArguments": null,
                        "start": 2205,
                        "end": 2217
                      },
                      "start": 2203,
                      "end": 2217
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
                    "start": 2179,
                    "end": 2218
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
                      "start": 2234,
                      "end": 2249
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
                          "start": 2251,
                          "end": 2263
                        },
                        "typeArguments": null,
                        "start": 2251,
                        "end": 2263
                      },
                      "start": 2249,
                      "end": 2263
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
                    "start": 2227,
                    "end": 2264
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
                      "start": 2281,
                      "end": 2297
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
                          "start": 2299,
                          "end": 2312
                        },
                        "typeArguments": null,
                        "start": 2299,
                        "end": 2312
                      },
                      "start": 2297,
                      "end": 2312
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
                    "start": 2273,
                    "end": 2313
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
                      "start": 2329,
                      "end": 2344
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
                          "start": 2346,
                          "end": 2359
                        },
                        "typeArguments": null,
                        "start": 2346,
                        "end": 2359
                      },
                      "start": 2344,
                      "end": 2359
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
                    "start": 2322,
                    "end": 2360
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
                      "start": 2378,
                      "end": 2395
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
                        "start": 2402,
                        "end": 2414
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2398,
                      "end": 2416
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 2370,
                    "end": 2417
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
                      "start": 2433,
                      "end": 2449
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
                        "start": 2456,
                        "end": 2468
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2452,
                      "end": 2470
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 2426,
                    "end": 2471
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
                      "start": 2488,
                      "end": 2505
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
                        "start": 2512,
                        "end": 2525
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2508,
                      "end": 2527
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 2480,
                    "end": 2528
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
                      "start": 2544,
                      "end": 2560
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
                        "start": 2567,
                        "end": 2580
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2563,
                      "end": 2582
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 2537,
                    "end": 2583
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
                      "start": 2602,
                      "end": 2619
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
                          "start": 2621,
                          "end": 2633
                        },
                        "typeArguments": null,
                        "start": 2621,
                        "end": 2633
                      },
                      "start": 2619,
                      "end": 2633
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2640,
                        "end": 2652
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2636,
                      "end": 2654
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 2594,
                    "end": 2655
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
                      "start": 2671,
                      "end": 2687
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
                          "start": 2689,
                          "end": 2701
                        },
                        "typeArguments": null,
                        "start": 2689,
                        "end": 2701
                      },
                      "start": 2687,
                      "end": 2701
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2708,
                        "end": 2720
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2704,
                      "end": 2722
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 2664,
                    "end": 2723
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
                      "start": 2740,
                      "end": 2757
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
                          "start": 2759,
                          "end": 2772
                        },
                        "typeArguments": null,
                        "start": 2759,
                        "end": 2772
                      },
                      "start": 2757,
                      "end": 2772
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2779,
                        "end": 2792
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2775,
                      "end": 2794
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 2732,
                    "end": 2795
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
                      "start": 2811,
                      "end": 2827
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
                          "start": 2829,
                          "end": 2842
                        },
                        "typeArguments": null,
                        "start": 2829,
                        "end": 2842
                      },
                      "start": 2827,
                      "end": 2842
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2849,
                        "end": 2862
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2845,
                      "end": 2864
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 2804,
                    "end": 2865
                  }
                ],
                "start": 2169,
                "end": 2871
              },
              "abstract": false,
              "declare": false,
              "start": 2150,
              "end": 2871
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2143,
            "end": 2871
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
              "start": 2883,
              "end": 2895
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
                    "start": 2914,
                    "end": 2930
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
                        "start": 2932,
                        "end": 2944
                      },
                      "typeArguments": null,
                      "start": 2932,
                      "end": 2944
                    },
                    "start": 2930,
                    "end": 2944
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
                  "start": 2906,
                  "end": 2945
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
                    "start": 2961,
                    "end": 2976
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
                        "start": 2978,
                        "end": 2990
                      },
                      "typeArguments": null,
                      "start": 2978,
                      "end": 2990
                    },
                    "start": 2976,
                    "end": 2990
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
                  "start": 2954,
                  "end": 2991
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
                    "start": 3008,
                    "end": 3024
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
                        "start": 3026,
                        "end": 3039
                      },
                      "typeArguments": null,
                      "start": 3026,
                      "end": 3039
                    },
                    "start": 3024,
                    "end": 3039
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
                  "start": 3000,
                  "end": 3040
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
                    "start": 3056,
                    "end": 3071
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
                        "start": 3073,
                        "end": 3086
                      },
                      "typeArguments": null,
                      "start": 3073,
                      "end": 3086
                    },
                    "start": 3071,
                    "end": 3086
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
                  "start": 3049,
                  "end": 3087
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
                    "start": 3105,
                    "end": 3122
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
                      "start": 3129,
                      "end": 3141
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3125,
                    "end": 3143
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 3097,
                  "end": 3144
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
                    "start": 3160,
                    "end": 3176
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
                      "start": 3183,
                      "end": 3195
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3179,
                    "end": 3197
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 3153,
                  "end": 3198
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
                    "start": 3215,
                    "end": 3232
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
                      "start": 3239,
                      "end": 3252
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3235,
                    "end": 3254
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 3207,
                  "end": 3255
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
                    "start": 3271,
                    "end": 3287
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
                      "start": 3294,
                      "end": 3307
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3290,
                    "end": 3309
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 3264,
                  "end": 3310
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
                    "start": 3328,
                    "end": 3345
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
                        "start": 3347,
                        "end": 3359
                      },
                      "typeArguments": null,
                      "start": 3347,
                      "end": 3359
                    },
                    "start": 3345,
                    "end": 3359
                  },
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3366,
                      "end": 3378
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3362,
                    "end": 3380
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 3320,
                  "end": 3381
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
                    "start": 3397,
                    "end": 3413
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
                        "start": 3415,
                        "end": 3427
                      },
                      "typeArguments": null,
                      "start": 3415,
                      "end": 3427
                    },
                    "start": 3413,
                    "end": 3427
                  },
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3434,
                      "end": 3446
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3430,
                    "end": 3448
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 3390,
                  "end": 3449
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
                    "start": 3466,
                    "end": 3483
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
                        "start": 3485,
                        "end": 3498
                      },
                      "typeArguments": null,
                      "start": 3485,
                      "end": 3498
                    },
                    "start": 3483,
                    "end": 3498
                  },
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3505,
                      "end": 3518
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3501,
                    "end": 3520
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 3458,
                  "end": 3521
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
                    "start": 3537,
                    "end": 3553
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
                        "start": 3555,
                        "end": 3568
                      },
                      "typeArguments": null,
                      "start": 3555,
                      "end": 3568
                    },
                    "start": 3553,
                    "end": 3568
                  },
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3575,
                      "end": 3588
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3571,
                    "end": 3590
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 3530,
                  "end": 3591
                }
              ],
              "start": 2896,
              "end": 3597
            },
            "abstract": false,
            "declare": false,
            "start": 2877,
            "end": 3597
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
                        "start": 3622,
                        "end": 3634
                      },
                      "typeArguments": null,
                      "start": 3622,
                      "end": 3634
                    },
                    "start": 3620,
                    "end": 3634
                  },
                  "start": 3607,
                  "end": 3634
                },
                "init": null,
                "definite": false,
                "start": 3607,
                "end": 3634
              }
            ],
            "declare": false,
            "start": 3603,
            "end": 3635
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
                          "start": 3665,
                          "end": 3677
                        },
                        "typeArguments": null,
                        "start": 3665,
                        "end": 3677
                      },
                      "start": 3663,
                      "end": 3677
                    },
                    "start": 3651,
                    "end": 3677
                  },
                  "init": null,
                  "definite": false,
                  "start": 3651,
                  "end": 3677
                }
              ],
              "declare": false,
              "start": 3647,
              "end": 3678
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3640,
            "end": 3678
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
                        "start": 3702,
                        "end": 3715
                      },
                      "typeArguments": null,
                      "start": 3702,
                      "end": 3715
                    },
                    "start": 3700,
                    "end": 3715
                  },
                  "start": 3687,
                  "end": 3715
                },
                "init": null,
                "definite": false,
                "start": 3687,
                "end": 3715
              }
            ],
            "declare": false,
            "start": 3683,
            "end": 3716
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
                          "start": 3746,
                          "end": 3759
                        },
                        "typeArguments": null,
                        "start": 3746,
                        "end": 3759
                      },
                      "start": 3744,
                      "end": 3759
                    },
                    "start": 3732,
                    "end": 3759
                  },
                  "init": null,
                  "definite": false,
                  "start": 3732,
                  "end": 3759
                }
              ],
              "declare": false,
              "start": 3728,
              "end": 3760
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3721,
            "end": 3760
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
                  "start": 3771,
                  "end": 3785
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_C1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3792,
                    "end": 3804
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 3788,
                  "end": 3806
                },
                "definite": false,
                "start": 3771,
                "end": 3806
              }
            ],
            "declare": false,
            "start": 3767,
            "end": 3807
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
                    "start": 3823,
                    "end": 3836
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3843,
                      "end": 3855
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3839,
                    "end": 3857
                  },
                  "definite": false,
                  "start": 3823,
                  "end": 3857
                }
              ],
              "declare": false,
              "start": 3819,
              "end": 3858
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3812,
            "end": 3858
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
                  "start": 3867,
                  "end": 3881
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_C2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3888,
                    "end": 3901
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 3884,
                  "end": 3903
                },
                "definite": false,
                "start": 3867,
                "end": 3903
              }
            ],
            "declare": false,
            "start": 3863,
            "end": 3904
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
                    "start": 3920,
                    "end": 3933
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3940,
                      "end": 3953
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3936,
                    "end": 3955
                  },
                  "definite": false,
                  "start": 3920,
                  "end": 3955
                }
              ],
              "declare": false,
              "start": 3916,
              "end": 3956
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3909,
            "end": 3956
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
                        "start": 3983,
                        "end": 3995
                      },
                      "typeArguments": null,
                      "start": 3983,
                      "end": 3995
                    },
                    "start": 3981,
                    "end": 3995
                  },
                  "start": 3967,
                  "end": 3995
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_C1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4002,
                    "end": 4014
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 3998,
                  "end": 4016
                },
                "definite": false,
                "start": 3967,
                "end": 4016
              }
            ],
            "declare": false,
            "start": 3963,
            "end": 4017
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
                          "start": 4048,
                          "end": 4060
                        },
                        "typeArguments": null,
                        "start": 4048,
                        "end": 4060
                      },
                      "start": 4046,
                      "end": 4060
                    },
                    "start": 4033,
                    "end": 4060
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4067,
                      "end": 4079
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 4063,
                    "end": 4081
                  },
                  "definite": false,
                  "start": 4033,
                  "end": 4081
                }
              ],
              "declare": false,
              "start": 4029,
              "end": 4082
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4022,
            "end": 4082
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
                        "start": 4107,
                        "end": 4120
                      },
                      "typeArguments": null,
                      "start": 4107,
                      "end": 4120
                    },
                    "start": 4105,
                    "end": 4120
                  },
                  "start": 4091,
                  "end": 4120
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_C2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4127,
                    "end": 4140
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 4123,
                  "end": 4142
                },
                "definite": false,
                "start": 4091,
                "end": 4142
              }
            ],
            "declare": false,
            "start": 4087,
            "end": 4143
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
                          "start": 4174,
                          "end": 4187
                        },
                        "typeArguments": null,
                        "start": 4174,
                        "end": 4187
                      },
                      "start": 4172,
                      "end": 4187
                    },
                    "start": 4159,
                    "end": 4187
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4194,
                      "end": 4207
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 4190,
                    "end": 4209
                  },
                  "definite": false,
                  "start": 4159,
                  "end": 4209
                }
              ],
              "declare": false,
              "start": 4155,
              "end": 4210
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4148,
            "end": 4210
          }
        ],
        "start": 2032,
        "end": 4213
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 2022,
      "end": 4213
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
          "start": 4228,
          "end": 4241
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
                "start": 4256,
                "end": 4258
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
                  "start": 4261,
                  "end": 4268
                },
                "expression": false,
                "start": 4258,
                "end": 4268
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 4248,
              "end": 4268
            }
          ],
          "start": 4242,
          "end": 4270
        },
        "abstract": false,
        "declare": false,
        "start": 4222,
        "end": 4270
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4215,
      "end": 4270
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
        "start": 4278,
        "end": 4292
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 4293,
        "end": 4296
      },
      "abstract": false,
      "declare": false,
      "start": 4272,
      "end": 4296
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
          "start": 4311,
          "end": 4324
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
                "start": 4339,
                "end": 4356
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
                    "start": 4358,
                    "end": 4371
                  },
                  "typeArguments": null,
                  "start": 4358,
                  "end": 4371
                },
                "start": 4356,
                "end": 4371
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
              "start": 4331,
              "end": 4372
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
                "start": 4384,
                "end": 4400
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
                    "start": 4402,
                    "end": 4415
                  },
                  "typeArguments": null,
                  "start": 4402,
                  "end": 4415
                },
                "start": 4400,
                "end": 4415
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
              "start": 4377,
              "end": 4416
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
                "start": 4429,
                "end": 4446
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
                    "start": 4448,
                    "end": 4462
                  },
                  "typeArguments": null,
                  "start": 4448,
                  "end": 4462
                },
                "start": 4446,
                "end": 4462
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
              "start": 4421,
              "end": 4463
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
                "start": 4475,
                "end": 4491
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
                    "start": 4493,
                    "end": 4507
                  },
                  "typeArguments": null,
                  "start": 4493,
                  "end": 4507
                },
                "start": 4491,
                "end": 4507
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
              "start": 4468,
              "end": 4508
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
                "start": 4530,
                "end": 4548
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
                  "start": 4555,
                  "end": 4568
                },
                "typeArguments": null,
                "arguments": [],
                "start": 4551,
                "end": 4570
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 4522,
              "end": 4571
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
                "start": 4583,
                "end": 4600
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
                  "start": 4607,
                  "end": 4620
                },
                "typeArguments": null,
                "arguments": [],
                "start": 4603,
                "end": 4622
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 4576,
              "end": 4623
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
                "start": 4636,
                "end": 4654
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
                  "start": 4661,
                  "end": 4675
                },
                "typeArguments": null,
                "arguments": [],
                "start": 4657,
                "end": 4677
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 4628,
              "end": 4678
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
                "start": 4690,
                "end": 4707
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
                  "start": 4714,
                  "end": 4728
                },
                "typeArguments": null,
                "arguments": [],
                "start": 4710,
                "end": 4730
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 4683,
              "end": 4731
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
                "start": 4755,
                "end": 4773
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
                    "start": 4775,
                    "end": 4788
                  },
                  "typeArguments": null,
                  "start": 4775,
                  "end": 4788
                },
                "start": 4773,
                "end": 4788
              },
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4795,
                  "end": 4808
                },
                "typeArguments": null,
                "arguments": [],
                "start": 4791,
                "end": 4810
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 4747,
              "end": 4811
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
                "start": 4823,
                "end": 4840
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
                    "start": 4842,
                    "end": 4855
                  },
                  "typeArguments": null,
                  "start": 4842,
                  "end": 4855
                },
                "start": 4840,
                "end": 4855
              },
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4862,
                  "end": 4875
                },
                "typeArguments": null,
                "arguments": [],
                "start": 4858,
                "end": 4877
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 4816,
              "end": 4878
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
                "start": 4891,
                "end": 4909
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
                    "start": 4911,
                    "end": 4925
                  },
                  "typeArguments": null,
                  "start": 4911,
                  "end": 4925
                },
                "start": 4909,
                "end": 4925
              },
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4932,
                  "end": 4946
                },
                "typeArguments": null,
                "arguments": [],
                "start": 4928,
                "end": 4948
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 4883,
              "end": 4949
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
                "start": 4961,
                "end": 4978
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
                    "start": 4980,
                    "end": 4994
                  },
                  "typeArguments": null,
                  "start": 4980,
                  "end": 4994
                },
                "start": 4978,
                "end": 4994
              },
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5001,
                  "end": 5015
                },
                "typeArguments": null,
                "arguments": [],
                "start": 4997,
                "end": 5017
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 4954,
              "end": 5018
            }
          ],
          "start": 4325,
          "end": 5028
        },
        "abstract": false,
        "declare": false,
        "start": 4305,
        "end": 5028
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4298,
      "end": 5028
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
        "start": 5036,
        "end": 5049
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
              "start": 5064,
              "end": 5081
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
                  "start": 5083,
                  "end": 5096
                },
                "typeArguments": null,
                "start": 5083,
                "end": 5096
              },
              "start": 5081,
              "end": 5096
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
            "start": 5056,
            "end": 5097
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
              "start": 5109,
              "end": 5125
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
                  "start": 5127,
                  "end": 5140
                },
                "typeArguments": null,
                "start": 5127,
                "end": 5140
              },
              "start": 5125,
              "end": 5140
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
            "start": 5102,
            "end": 5141
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
              "start": 5154,
              "end": 5171
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
                  "start": 5173,
                  "end": 5187
                },
                "typeArguments": null,
                "start": 5173,
                "end": 5187
              },
              "start": 5171,
              "end": 5187
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
            "start": 5146,
            "end": 5188
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
              "start": 5200,
              "end": 5216
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
                  "start": 5218,
                  "end": 5232
                },
                "typeArguments": null,
                "start": 5218,
                "end": 5232
              },
              "start": 5216,
              "end": 5232
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
            "start": 5193,
            "end": 5233
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
              "start": 5247,
              "end": 5265
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
                "start": 5272,
                "end": 5285
              },
              "typeArguments": null,
              "arguments": [],
              "start": 5268,
              "end": 5287
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 5239,
            "end": 5288
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
              "start": 5300,
              "end": 5317
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
                "start": 5324,
                "end": 5337
              },
              "typeArguments": null,
              "arguments": [],
              "start": 5320,
              "end": 5339
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 5293,
            "end": 5340
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
              "start": 5353,
              "end": 5371
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
                "start": 5378,
                "end": 5392
              },
              "typeArguments": null,
              "arguments": [],
              "start": 5374,
              "end": 5394
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 5345,
            "end": 5395
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
              "start": 5407,
              "end": 5424
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
                "start": 5431,
                "end": 5445
              },
              "typeArguments": null,
              "arguments": [],
              "start": 5427,
              "end": 5447
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 5400,
            "end": 5448
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
              "start": 5462,
              "end": 5480
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
                  "start": 5482,
                  "end": 5495
                },
                "typeArguments": null,
                "start": 5482,
                "end": 5495
              },
              "start": 5480,
              "end": 5495
            },
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5502,
                "end": 5515
              },
              "typeArguments": null,
              "arguments": [],
              "start": 5498,
              "end": 5517
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 5454,
            "end": 5518
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
              "start": 5530,
              "end": 5547
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
                  "start": 5549,
                  "end": 5562
                },
                "typeArguments": null,
                "start": 5549,
                "end": 5562
              },
              "start": 5547,
              "end": 5562
            },
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5569,
                "end": 5582
              },
              "typeArguments": null,
              "arguments": [],
              "start": 5565,
              "end": 5584
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 5523,
            "end": 5585
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
              "start": 5598,
              "end": 5616
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
                  "start": 5618,
                  "end": 5632
                },
                "typeArguments": null,
                "start": 5618,
                "end": 5632
              },
              "start": 5616,
              "end": 5632
            },
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 5639,
                "end": 5653
              },
              "typeArguments": null,
              "arguments": [],
              "start": 5635,
              "end": 5655
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 5590,
            "end": 5656
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
              "start": 5668,
              "end": 5685
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
                  "start": 5687,
                  "end": 5701
                },
                "typeArguments": null,
                "start": 5687,
                "end": 5701
              },
              "start": 5685,
              "end": 5701
            },
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 5708,
                "end": 5722
              },
              "typeArguments": null,
              "arguments": [],
              "start": 5704,
              "end": 5724
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 5661,
            "end": 5725
          }
        ],
        "start": 5050,
        "end": 5727
      },
      "abstract": false,
      "declare": false,
      "start": 5030,
      "end": 5727
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
                  "start": 5749,
                  "end": 5762
                },
                "typeArguments": null,
                "start": 5749,
                "end": 5762
              },
              "start": 5747,
              "end": 5762
            },
            "start": 5733,
            "end": 5762
          },
          "init": null,
          "definite": false,
          "start": 5733,
          "end": 5762
        }
      ],
      "declare": false,
      "start": 5729,
      "end": 5763
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
                    "start": 5790,
                    "end": 5803
                  },
                  "typeArguments": null,
                  "start": 5790,
                  "end": 5803
                },
                "start": 5788,
                "end": 5803
              },
              "start": 5775,
              "end": 5803
            },
            "init": null,
            "definite": false,
            "start": 5775,
            "end": 5803
          }
        ],
        "declare": false,
        "start": 5771,
        "end": 5804
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5764,
      "end": 5804
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
                  "start": 5825,
                  "end": 5839
                },
                "typeArguments": null,
                "start": 5825,
                "end": 5839
              },
              "start": 5823,
              "end": 5839
            },
            "start": 5809,
            "end": 5839
          },
          "init": null,
          "definite": false,
          "start": 5809,
          "end": 5839
        }
      ],
      "declare": false,
      "start": 5805,
      "end": 5840
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
                    "start": 5867,
                    "end": 5881
                  },
                  "typeArguments": null,
                  "start": 5867,
                  "end": 5881
                },
                "start": 5865,
                "end": 5881
              },
              "start": 5852,
              "end": 5881
            },
            "init": null,
            "definite": false,
            "start": 5852,
            "end": 5881
          }
        ],
        "declare": false,
        "start": 5848,
        "end": 5882
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5841,
      "end": 5882
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
            "start": 5897,
            "end": 5912
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5919,
              "end": 5932
            },
            "typeArguments": null,
            "arguments": [],
            "start": 5915,
            "end": 5934
          },
          "definite": false,
          "start": 5897,
          "end": 5934
        }
      ],
      "declare": false,
      "start": 5893,
      "end": 5935
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
              "start": 5947,
              "end": 5961
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5968,
                "end": 5981
              },
              "typeArguments": null,
              "arguments": [],
              "start": 5964,
              "end": 5983
            },
            "definite": false,
            "start": 5947,
            "end": 5983
          }
        ],
        "declare": false,
        "start": 5943,
        "end": 5984
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5936,
      "end": 5984
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
            "start": 5989,
            "end": 6004
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 6011,
              "end": 6025
            },
            "typeArguments": null,
            "arguments": [],
            "start": 6007,
            "end": 6027
          },
          "definite": false,
          "start": 5989,
          "end": 6027
        }
      ],
      "declare": false,
      "start": 5985,
      "end": 6028
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
              "start": 6040,
              "end": 6054
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 6061,
                "end": 6075
              },
              "typeArguments": null,
              "arguments": [],
              "start": 6057,
              "end": 6077
            },
            "definite": false,
            "start": 6040,
            "end": 6077
          }
        ],
        "declare": false,
        "start": 6036,
        "end": 6078
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6029,
      "end": 6078
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
                  "start": 6110,
                  "end": 6123
                },
                "typeArguments": null,
                "start": 6110,
                "end": 6123
              },
              "start": 6108,
              "end": 6123
            },
            "start": 6093,
            "end": 6123
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 6130,
              "end": 6143
            },
            "typeArguments": null,
            "arguments": [],
            "start": 6126,
            "end": 6145
          },
          "definite": false,
          "start": 6093,
          "end": 6145
        }
      ],
      "declare": false,
      "start": 6089,
      "end": 6146
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
                    "start": 6174,
                    "end": 6187
                  },
                  "typeArguments": null,
                  "start": 6174,
                  "end": 6187
                },
                "start": 6172,
                "end": 6187
              },
              "start": 6158,
              "end": 6187
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 6194,
                "end": 6207
              },
              "typeArguments": null,
              "arguments": [],
              "start": 6190,
              "end": 6209
            },
            "definite": false,
            "start": 6158,
            "end": 6209
          }
        ],
        "declare": false,
        "start": 6154,
        "end": 6210
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6147,
      "end": 6210
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
                  "start": 6232,
                  "end": 6246
                },
                "typeArguments": null,
                "start": 6232,
                "end": 6246
              },
              "start": 6230,
              "end": 6246
            },
            "start": 6215,
            "end": 6246
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 6253,
              "end": 6267
            },
            "typeArguments": null,
            "arguments": [],
            "start": 6249,
            "end": 6269
          },
          "definite": false,
          "start": 6215,
          "end": 6269
        }
      ],
      "declare": false,
      "start": 6211,
      "end": 6270
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
                    "start": 6298,
                    "end": 6312
                  },
                  "typeArguments": null,
                  "start": 6298,
                  "end": 6312
                },
                "start": 6296,
                "end": 6312
              },
              "start": 6282,
              "end": 6312
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 6319,
                "end": 6333
              },
              "typeArguments": null,
              "arguments": [],
              "start": 6315,
              "end": 6335
            },
            "definite": false,
            "start": 6282,
            "end": 6335
          }
        ],
        "declare": false,
        "start": 6278,
        "end": 6336
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6271,
      "end": 6336
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 6345
}
```
