__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unpacked",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 13
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 14,
            "end": 15
          }
        ],
        "start": 13,
        "end": 16
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 24
          },
          "typeArguments": null,
          "start": 23,
          "end": 24
        },
        "extendsType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 41
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 40,
              "end": 41
            },
            "start": 34,
            "end": 41
          },
          "start": 33,
          "end": 44
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "typeArguments": null,
          "start": 47,
          "end": 48
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 56
            },
            "typeArguments": null,
            "start": 55,
            "end": 56
          },
          "extendsType": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 73
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 75,
                      "end": 78
                    },
                    "start": 75,
                    "end": 80
                  },
                  "start": 73,
                  "end": 80
                },
                "value": null,
                "start": 66,
                "end": 80
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 91,
                    "end": 92
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 91,
                  "end": 92
                },
                "start": 85,
                "end": 92
              },
              "start": 82,
              "end": 92
            },
            "start": 65,
            "end": 92
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 96
            },
            "typeArguments": null,
            "start": 95,
            "end": 96
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 104
              },
              "typeArguments": null,
              "start": 103,
              "end": 104
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 120
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 127,
                        "end": 128
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 127,
                      "end": 128
                    },
                    "start": 121,
                    "end": 128
                  }
                ],
                "start": 120,
                "end": 129
              },
              "start": 113,
              "end": 129
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 133
              },
              "typeArguments": null,
              "start": 132,
              "end": 133
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 141
              },
              "typeArguments": null,
              "start": 140,
              "end": 141
            },
            "start": 103,
            "end": 141
          },
          "start": 55,
          "end": 141
        },
        "start": 23,
        "end": 141
      },
      "declare": false,
      "start": 0,
      "end": 142
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T00",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 152
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Unpacked",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 163
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 164,
              "end": 170
            }
          ],
          "start": 163,
          "end": 171
        },
        "start": 155,
        "end": 171
      },
      "declare": false,
      "start": 144,
      "end": 172
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null,
        "start": 189,
        "end": 192
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Unpacked",
          "optional": false,
          "typeAnnotation": null,
          "start": 195,
          "end": 203
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 204,
                "end": 210
              },
              "start": 204,
              "end": 212
            }
          ],
          "start": 203,
          "end": 213
        },
        "start": 195,
        "end": 213
      },
      "declare": false,
      "start": 184,
      "end": 214
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
        "end": 234
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Unpacked",
          "optional": false,
          "typeAnnotation": null,
          "start": 237,
          "end": 245
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 252,
                  "end": 258
                },
                "start": 249,
                "end": 258
              },
              "start": 246,
              "end": 258
            }
          ],
          "start": 245,
          "end": 259
        },
        "start": 237,
        "end": 259
      },
      "declare": false,
      "start": 226,
      "end": 260
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T03",
        "optional": false,
        "typeAnnotation": null,
        "start": 277,
        "end": 280
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Unpacked",
          "optional": false,
          "typeAnnotation": null,
          "start": 283,
          "end": 291
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 292,
                "end": 299
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 300,
                    "end": 306
                  }
                ],
                "start": 299,
                "end": 307
              },
              "start": 292,
              "end": 307
            }
          ],
          "start": 291,
          "end": 308
        },
        "start": 283,
        "end": 308
      },
      "declare": false,
      "start": 272,
      "end": 309
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T04",
        "optional": false,
        "typeAnnotation": null,
        "start": 326,
        "end": 329
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Unpacked",
          "optional": false,
          "typeAnnotation": null,
          "start": 332,
          "end": 340
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Unpacked",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 349
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 350,
                        "end": 357
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 358,
                            "end": 364
                          }
                        ],
                        "start": 357,
                        "end": 365
                      },
                      "start": 350,
                      "end": 365
                    },
                    "start": 350,
                    "end": 367
                  }
                ],
                "start": 349,
                "end": 368
              },
              "start": 341,
              "end": 368
            }
          ],
          "start": 340,
          "end": 369
        },
        "start": 332,
        "end": 369
      },
      "declare": false,
      "start": 321,
      "end": 370
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T05",
        "optional": false,
        "typeAnnotation": null,
        "start": 387,
        "end": 390
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Unpacked",
          "optional": false,
          "typeAnnotation": null,
          "start": 393,
          "end": 401
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 402,
              "end": 405
            }
          ],
          "start": 401,
          "end": 406
        },
        "start": 393,
        "end": 406
      },
      "declare": false,
      "start": 382,
      "end": 407
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T06",
        "optional": false,
        "typeAnnotation": null,
        "start": 421,
        "end": 424
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Unpacked",
          "optional": false,
          "typeAnnotation": null,
          "start": 427,
          "end": 435
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 436,
              "end": 441
            }
          ],
          "start": 435,
          "end": 442
        },
        "start": 427,
        "end": 442
      },
      "declare": false,
      "start": 416,
      "end": 443
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 464,
        "end": 466
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 470,
              "end": 476
            },
            "start": 468,
            "end": 476
          },
          "start": 467,
          "end": 476
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 493,
                    "end": 494
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 496,
                    "end": 497
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 493,
                  "end": 497
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 499,
                    "end": 500
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 502,
                    "end": 503
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 499,
                  "end": 503
                }
              ],
              "start": 491,
              "end": 505
            },
            "start": 484,
            "end": 506
          }
        ],
        "start": 478,
        "end": 508
      },
      "expression": false,
      "start": 455,
      "end": 508
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 516,
        "end": 517
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 524,
              "end": 525
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 528,
              "end": 529
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 524,
            "end": 530
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 535,
              "end": 536
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 539,
              "end": 540
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 535,
            "end": 541
          }
        ],
        "start": 518,
        "end": 543
      },
      "abstract": false,
      "declare": false,
      "start": 510,
      "end": 543
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Abstract",
        "optional": false,
        "typeAnnotation": null,
        "start": 560,
        "end": 568
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 575,
              "end": 576
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 579,
              "end": 580
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 575,
            "end": 581
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 586,
              "end": 587
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 590,
              "end": 591
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 586,
            "end": 592
          }
        ],
        "start": 569,
        "end": 594
      },
      "abstract": true,
      "declare": false,
      "start": 545,
      "end": 594
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 601,
        "end": 604
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null,
          "start": 607,
          "end": 617
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 624,
                  "end": 630
                },
                "start": 621,
                "end": 630
              },
              "start": 618,
              "end": 630
            }
          ],
          "start": 617,
          "end": 631
        },
        "start": 607,
        "end": 631
      },
      "declare": false,
      "start": 596,
      "end": 632
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 649,
        "end": 652
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null,
          "start": 655,
          "end": 665
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 670,
                      "end": 676
                    },
                    "start": 668,
                    "end": 676
                  },
                  "start": 667,
                  "end": 676
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 681,
                  "end": 685
                },
                "start": 678,
                "end": 685
              },
              "start": 666,
              "end": 685
            }
          ],
          "start": 665,
          "end": 686
        },
        "start": 655,
        "end": 686
      },
      "declare": false,
      "start": 644,
      "end": 687
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 702,
        "end": 705
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null,
          "start": 708,
          "end": 718
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 721,
                      "end": 722
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 721,
                    "end": 722
                  }
                ],
                "start": 720,
                "end": 723
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 729,
                    "end": 730
                  },
                  "typeArguments": null,
                  "start": 729,
                  "end": 730
                },
                "start": 726,
                "end": 730
              },
              "start": 720,
              "end": 730
            }
          ],
          "start": 718,
          "end": 732
        },
        "start": 708,
        "end": 732
      },
      "declare": false,
      "start": 697,
      "end": 733
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null,
        "start": 746,
        "end": 749
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null,
          "start": 752,
          "end": 762
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 765,
                      "end": 766
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 775,
                        "end": 776
                      },
                      "typeArguments": null,
                      "start": 775,
                      "end": 776
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 765,
                    "end": 776
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 778,
                      "end": 779
                    },
                    "constraint": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 788,
                        "end": 794
                      },
                      "start": 788,
                      "end": 796
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 778,
                    "end": 796
                  }
                ],
                "start": 764,
                "end": 797
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 803,
                    "end": 804
                  },
                  "typeArguments": null,
                  "start": 803,
                  "end": 804
                },
                "start": 800,
                "end": 804
              },
              "start": 764,
              "end": 804
            }
          ],
          "start": 762,
          "end": 806
        },
        "start": 752,
        "end": 806
      },
      "declare": false,
      "start": 741,
      "end": 807
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T14",
        "optional": false,
        "typeAnnotation": null,
        "start": 826,
        "end": 829
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null,
          "start": 832,
          "end": 842
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 850,
                "end": 852
              },
              "typeArguments": null,
              "start": 843,
              "end": 852
            }
          ],
          "start": 842,
          "end": 853
        },
        "start": 832,
        "end": 853
      },
      "declare": false,
      "start": 821,
      "end": 854
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T15",
        "optional": false,
        "typeAnnotation": null,
        "start": 889,
        "end": 892
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null,
          "start": 895,
          "end": 905
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 906,
              "end": 909
            }
          ],
          "start": 905,
          "end": 910
        },
        "start": 895,
        "end": 910
      },
      "declare": false,
      "start": 884,
      "end": 911
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T16",
        "optional": false,
        "typeAnnotation": null,
        "start": 925,
        "end": 928
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null,
          "start": 931,
          "end": 941
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 942,
              "end": 947
            }
          ],
          "start": 941,
          "end": 948
        },
        "start": 931,
        "end": 948
      },
      "declare": false,
      "start": 920,
      "end": 949
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T17",
        "optional": false,
        "typeAnnotation": null,
        "start": 965,
        "end": 968
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null,
          "start": 971,
          "end": 981
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 982,
              "end": 988
            }
          ],
          "start": 981,
          "end": 989
        },
        "start": 971,
        "end": 989
      },
      "declare": false,
      "start": 960,
      "end": 990
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T18",
        "optional": false,
        "typeAnnotation": null,
        "start": 1006,
        "end": 1009
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1012,
          "end": 1022
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 1023,
                "end": 1031
              },
              "typeArguments": null,
              "start": 1023,
              "end": 1031
            }
          ],
          "start": 1022,
          "end": 1032
        },
        "start": 1012,
        "end": 1032
      },
      "declare": false,
      "start": 1001,
      "end": 1033
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T19",
        "optional": false,
        "typeAnnotation": null,
        "start": 1049,
        "end": 1052
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1053,
              "end": 1054
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1063,
                "end": 1066
              },
              "start": 1063,
              "end": 1068
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1053,
            "end": 1068
          }
        ],
        "start": 1052,
        "end": 1069
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1072,
          "end": 1082
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1087,
                      "end": 1093
                    },
                    "start": 1085,
                    "end": 1093
                  },
                  "start": 1084,
                  "end": 1093
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1098,
                    "end": 1102
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1104,
                        "end": 1105
                      },
                      "typeArguments": null,
                      "start": 1104,
                      "end": 1105
                    },
                    "start": 1102,
                    "end": 1105
                  },
                  "value": null,
                  "start": 1095,
                  "end": 1105
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1110,
                      "end": 1111
                    },
                    "typeArguments": null,
                    "start": 1110,
                    "end": 1111
                  },
                  "start": 1110,
                  "end": 1113
                },
                "start": 1107,
                "end": 1113
              },
              "start": 1083,
              "end": 1113
            }
          ],
          "start": 1082,
          "end": 1114
        },
        "start": 1072,
        "end": 1114
      },
      "declare": false,
      "start": 1044,
      "end": 1115
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1130,
        "end": 1133
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1136,
          "end": 1148
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1156,
                "end": 1157
              },
              "typeArguments": null,
              "start": 1149,
              "end": 1157
            }
          ],
          "start": 1148,
          "end": 1158
        },
        "start": 1136,
        "end": 1158
      },
      "declare": false,
      "start": 1125,
      "end": 1159
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1171,
        "end": 1174
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1177,
          "end": 1189
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 1190,
              "end": 1193
            }
          ],
          "start": 1189,
          "end": 1194
        },
        "start": 1177,
        "end": 1194
      },
      "declare": false,
      "start": 1166,
      "end": 1195
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1209,
        "end": 1212
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1215,
          "end": 1227
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 1228,
              "end": 1233
            }
          ],
          "start": 1227,
          "end": 1234
        },
        "start": 1215,
        "end": 1234
      },
      "declare": false,
      "start": 1204,
      "end": 1235
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1251,
        "end": 1254
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1257,
          "end": 1269
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 1270,
              "end": 1276
            }
          ],
          "start": 1269,
          "end": 1277
        },
        "start": 1257,
        "end": 1277
      },
      "declare": false,
      "start": 1246,
      "end": 1278
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1294,
        "end": 1297
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1300,
          "end": 1312
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 1313,
                "end": 1321
              },
              "typeArguments": null,
              "start": 1313,
              "end": 1321
            }
          ],
          "start": 1312,
          "end": 1322
        },
        "start": 1300,
        "end": 1322
      },
      "declare": false,
      "start": 1289,
      "end": 1323
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1339,
        "end": 1342
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1345,
          "end": 1357
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Abstract",
                "optional": false,
                "typeAnnotation": null,
                "start": 1365,
                "end": 1373
              },
              "typeArguments": null,
              "start": 1358,
              "end": 1373
            }
          ],
          "start": 1357,
          "end": 1374
        },
        "start": 1345,
        "end": 1374
      },
      "declare": false,
      "start": 1334,
      "end": 1375
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U16",
        "optional": false,
        "typeAnnotation": null,
        "start": 1394,
        "end": 1397
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1398,
              "end": 1399
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1408,
                "end": 1411
              },
              "start": 1408,
              "end": 1413
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1398,
            "end": 1413
          }
        ],
        "start": 1397,
        "end": 1414
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1417,
          "end": 1429
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1438,
                      "end": 1444
                    },
                    "start": 1436,
                    "end": 1444
                  },
                  "start": 1435,
                  "end": 1444
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1449,
                    "end": 1453
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1455,
                        "end": 1456
                      },
                      "typeArguments": null,
                      "start": 1455,
                      "end": 1456
                    },
                    "start": 1453,
                    "end": 1456
                  },
                  "value": null,
                  "start": 1446,
                  "end": 1456
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1461,
                      "end": 1462
                    },
                    "typeArguments": null,
                    "start": 1461,
                    "end": 1462
                  },
                  "start": 1461,
                  "end": 1464
                },
                "start": 1458,
                "end": 1464
              },
              "start": 1430,
              "end": 1464
            }
          ],
          "start": 1429,
          "end": 1465
        },
        "start": 1417,
        "end": 1465
      },
      "declare": false,
      "start": 1389,
      "end": 1466
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U17",
        "optional": false,
        "typeAnnotation": null,
        "start": 1480,
        "end": 1483
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1484,
              "end": 1485
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1494,
                "end": 1497
              },
              "start": 1494,
              "end": 1499
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1484,
            "end": 1499
          }
        ],
        "start": 1483,
        "end": 1500
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1503,
          "end": 1515
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1533,
                      "end": 1539
                    },
                    "start": 1531,
                    "end": 1539
                  },
                  "start": 1530,
                  "end": 1539
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1544,
                    "end": 1548
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1550,
                        "end": 1551
                      },
                      "typeArguments": null,
                      "start": 1550,
                      "end": 1551
                    },
                    "start": 1548,
                    "end": 1551
                  },
                  "value": null,
                  "start": 1541,
                  "end": 1551
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1556,
                      "end": 1557
                    },
                    "typeArguments": null,
                    "start": 1556,
                    "end": 1557
                  },
                  "start": 1556,
                  "end": 1559
                },
                "start": 1553,
                "end": 1559
              },
              "start": 1516,
              "end": 1559
            }
          ],
          "start": 1515,
          "end": 1560
        },
        "start": 1503,
        "end": 1560
      },
      "declare": false,
      "start": 1475,
      "end": 1561
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArgumentType",
        "optional": false,
        "typeAnnotation": null,
        "start": 1576,
        "end": 1588
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1589,
              "end": 1590
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1603,
                      "end": 1606
                    },
                    "start": 1601,
                    "end": 1606
                  },
                  "start": 1600,
                  "end": 1606
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1611,
                  "end": 1614
                },
                "start": 1608,
                "end": 1614
              },
              "start": 1599,
              "end": 1614
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1589,
            "end": 1614
          }
        ],
        "start": 1588,
        "end": 1615
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1618,
            "end": 1619
          },
          "typeArguments": null,
          "start": 1618,
          "end": 1619
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1638,
                      "end": 1639
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1638,
                    "end": 1639
                  },
                  "start": 1632,
                  "end": 1639
                },
                "start": 1630,
                "end": 1639
              },
              "start": 1629,
              "end": 1639
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1644,
              "end": 1647
            },
            "start": 1641,
            "end": 1647
          },
          "start": 1628,
          "end": 1647
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 1650,
            "end": 1651
          },
          "typeArguments": null,
          "start": 1650,
          "end": 1651
        },
        "falseType": {
          "type": "TSAnyKeyword",
          "start": 1654,
          "end": 1657
        },
        "start": 1618,
        "end": 1657
      },
      "declare": false,
      "start": 1571,
      "end": 1658
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1665,
        "end": 1668
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1671,
          "end": 1683
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1690,
                  "end": 1694
                },
                "start": 1687,
                "end": 1694
              },
              "start": 1684,
              "end": 1694
            }
          ],
          "start": 1683,
          "end": 1695
        },
        "start": 1671,
        "end": 1695
      },
      "declare": false,
      "start": 1660,
      "end": 1696
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null,
        "start": 1709,
        "end": 1712
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1715,
          "end": 1727
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1732,
                      "end": 1738
                    },
                    "start": 1730,
                    "end": 1738
                  },
                  "start": 1729,
                  "end": 1738
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1743,
                  "end": 1749
                },
                "start": 1740,
                "end": 1749
              },
              "start": 1728,
              "end": 1749
            }
          ],
          "start": 1727,
          "end": 1750
        },
        "start": 1715,
        "end": 1750
      },
      "declare": false,
      "start": 1704,
      "end": 1751
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T22",
        "optional": false,
        "typeAnnotation": null,
        "start": 1768,
        "end": 1771
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1774,
          "end": 1786
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1792,
                      "end": 1798
                    },
                    "start": 1790,
                    "end": 1798
                  },
                  "start": 1788,
                  "end": 1798
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1803,
                  "end": 1809
                },
                "start": 1800,
                "end": 1809
              },
              "start": 1787,
              "end": 1809
            }
          ],
          "start": 1786,
          "end": 1810
        },
        "start": 1774,
        "end": 1810
      },
      "declare": false,
      "start": 1763,
      "end": 1811
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T23",
        "optional": false,
        "typeAnnotation": null,
        "start": 1840,
        "end": 1843
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1846,
          "end": 1858
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1863,
                    "end": 1867
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 1869,
                        "end": 1875
                      },
                      "start": 1869,
                      "end": 1877
                    },
                    "start": 1867,
                    "end": 1877
                  },
                  "value": null,
                  "start": 1860,
                  "end": 1877
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1882,
                  "end": 1888
                },
                "start": 1879,
                "end": 1888
              },
              "start": 1859,
              "end": 1888
            }
          ],
          "start": 1858,
          "end": 1889
        },
        "start": 1846,
        "end": 1889
      },
      "declare": false,
      "start": 1835,
      "end": 1890
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T24",
        "optional": false,
        "typeAnnotation": null,
        "start": 1907,
        "end": 1910
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1913,
          "end": 1925
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1930,
                      "end": 1936
                    },
                    "start": 1928,
                    "end": 1936
                  },
                  "start": 1927,
                  "end": 1936
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1941,
                      "end": 1947
                    },
                    "start": 1939,
                    "end": 1947
                  },
                  "start": 1938,
                  "end": 1947
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1952,
                  "end": 1958
                },
                "start": 1949,
                "end": 1958
              },
              "start": 1926,
              "end": 1958
            }
          ],
          "start": 1925,
          "end": 1959
        },
        "start": 1913,
        "end": 1959
      },
      "declare": false,
      "start": 1902,
      "end": 1960
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T25",
        "optional": false,
        "typeAnnotation": null,
        "start": 1976,
        "end": 1979
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1982,
          "end": 1994
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 1995,
                "end": 2003
              },
              "typeArguments": null,
              "start": 1995,
              "end": 2003
            }
          ],
          "start": 1994,
          "end": 2004
        },
        "start": 1982,
        "end": 2004
      },
      "declare": false,
      "start": 1971,
      "end": 2005
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T26",
        "optional": false,
        "typeAnnotation": null,
        "start": 2021,
        "end": 2024
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "typeAnnotation": null,
          "start": 2027,
          "end": 2039
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 2040,
              "end": 2043
            }
          ],
          "start": 2039,
          "end": 2044
        },
        "start": 2027,
        "end": 2044
      },
      "declare": false,
      "start": 2016,
      "end": 2045
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T27",
        "optional": false,
        "typeAnnotation": null,
        "start": 2059,
        "end": 2062
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "typeAnnotation": null,
          "start": 2065,
          "end": 2077
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 2078,
              "end": 2083
            }
          ],
          "start": 2077,
          "end": 2084
        },
        "start": 2065,
        "end": 2084
      },
      "declare": false,
      "start": 2054,
      "end": 2085
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2102,
        "end": 2104
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2105,
              "end": 2106
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2117,
                    "end": 2118
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2120,
                      "end": 2123
                    },
                    "start": 2118,
                    "end": 2123
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2117,
                  "end": 2124
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2125,
                    "end": 2126
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2128,
                      "end": 2131
                    },
                    "start": 2126,
                    "end": 2131
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2125,
                  "end": 2131
                }
              ],
              "start": 2115,
              "end": 2133
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2105,
            "end": 2133
          }
        ],
        "start": 2104,
        "end": 2134
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2137,
            "end": 2138
          },
          "typeArguments": null,
          "start": 2137,
          "end": 2138
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2149,
                "end": 2150
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2158,
                      "end": 2159
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2158,
                    "end": 2159
                  },
                  "start": 2152,
                  "end": 2159
                },
                "start": 2150,
                "end": 2159
              },
              "accessibility": null,
              "static": false,
              "start": 2149,
              "end": 2160
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2161,
                "end": 2162
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2170,
                      "end": 2171
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2170,
                    "end": 2171
                  },
                  "start": 2164,
                  "end": 2171
                },
                "start": 2162,
                "end": 2171
              },
              "accessibility": null,
              "static": false,
              "start": 2161,
              "end": 2171
            }
          ],
          "start": 2147,
          "end": 2173
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 2177,
                "end": 2178
              },
              "typeArguments": null,
              "start": 2177,
              "end": 2178
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2180,
                "end": 2181
              },
              "typeArguments": null,
              "start": 2180,
              "end": 2181
            }
          ],
          "start": 2176,
          "end": 2182
        },
        "falseType": {
          "type": "TSAnyKeyword",
          "start": 2185,
          "end": 2188
        },
        "start": 2137,
        "end": 2188
      },
      "declare": false,
      "start": 2097,
      "end": 2189
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T30",
        "optional": false,
        "typeAnnotation": null,
        "start": 2196,
        "end": 2199
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2202,
          "end": 2204
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2207,
                    "end": 2208
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2210,
                      "end": 2213
                    },
                    "start": 2208,
                    "end": 2213
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2207,
                  "end": 2214
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2215,
                    "end": 2216
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2218,
                      "end": 2221
                    },
                    "start": 2216,
                    "end": 2221
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2215,
                  "end": 2221
                }
              ],
              "start": 2205,
              "end": 2223
            }
          ],
          "start": 2204,
          "end": 2224
        },
        "start": 2202,
        "end": 2224
      },
      "declare": false,
      "start": 2191,
      "end": 2225
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T31",
        "optional": false,
        "typeAnnotation": null,
        "start": 2246,
        "end": 2249
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2252,
          "end": 2254
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2257,
                    "end": 2258
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2260,
                      "end": 2266
                    },
                    "start": 2258,
                    "end": 2266
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2257,
                  "end": 2267
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2268,
                    "end": 2269
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2271,
                      "end": 2277
                    },
                    "start": 2269,
                    "end": 2277
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2268,
                  "end": 2277
                }
              ],
              "start": 2255,
              "end": 2279
            }
          ],
          "start": 2254,
          "end": 2280
        },
        "start": 2252,
        "end": 2280
      },
      "declare": false,
      "start": 2241,
      "end": 2281
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T32",
        "optional": false,
        "typeAnnotation": null,
        "start": 2308,
        "end": 2311
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2314,
          "end": 2316
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2319,
                    "end": 2320
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2322,
                      "end": 2328
                    },
                    "start": 2320,
                    "end": 2328
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2319,
                  "end": 2329
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2330,
                    "end": 2331
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2333,
                      "end": 2339
                    },
                    "start": 2331,
                    "end": 2339
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2330,
                  "end": 2340
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2341,
                    "end": 2342
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2344,
                      "end": 2351
                    },
                    "start": 2342,
                    "end": 2351
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2341,
                  "end": 2351
                }
              ],
              "start": 2317,
              "end": 2353
            }
          ],
          "start": 2316,
          "end": 2354
        },
        "start": 2314,
        "end": 2354
      },
      "declare": false,
      "start": 2303,
      "end": 2355
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2383,
        "end": 2385
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2386,
              "end": 2387
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2386,
            "end": 2387
          }
        ],
        "start": 2385,
        "end": 2388
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2391,
            "end": 2392
          },
          "typeArguments": null,
          "start": 2391,
          "end": 2392
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2403,
                "end": 2404
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2412,
                      "end": 2413
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2412,
                    "end": 2413
                  },
                  "start": 2406,
                  "end": 2413
                },
                "start": 2404,
                "end": 2413
              },
              "accessibility": null,
              "static": false,
              "start": 2403,
              "end": 2414
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 2415,
                "end": 2416
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2424,
                      "end": 2425
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2424,
                    "end": 2425
                  },
                  "start": 2418,
                  "end": 2425
                },
                "start": 2416,
                "end": 2425
              },
              "accessibility": null,
              "static": false,
              "start": 2415,
              "end": 2425
            }
          ],
          "start": 2401,
          "end": 2427
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 2430,
            "end": 2431
          },
          "typeArguments": null,
          "start": 2430,
          "end": 2431
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2434,
          "end": 2439
        },
        "start": 2391,
        "end": 2439
      },
      "declare": false,
      "start": 2378,
      "end": 2440
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T40",
        "optional": false,
        "typeAnnotation": null,
        "start": 2447,
        "end": 2450
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2453,
          "end": 2455
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 2456,
              "end": 2458
            }
          ],
          "start": 2455,
          "end": 2459
        },
        "start": 2453,
        "end": 2459
      },
      "declare": false,
      "start": 2442,
      "end": 2460
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T41",
        "optional": false,
        "typeAnnotation": null,
        "start": 2476,
        "end": 2479
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2482,
          "end": 2484
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2487,
                    "end": 2488
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2490,
                      "end": 2496
                    },
                    "start": 2488,
                    "end": 2496
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2487,
                  "end": 2496
                }
              ],
              "start": 2485,
              "end": 2498
            }
          ],
          "start": 2484,
          "end": 2499
        },
        "start": 2482,
        "end": 2499
      },
      "declare": false,
      "start": 2471,
      "end": 2500
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T42",
        "optional": false,
        "typeAnnotation": null,
        "start": 2516,
        "end": 2519
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2522,
          "end": 2524
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2527,
                    "end": 2528
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2530,
                      "end": 2536
                    },
                    "start": 2528,
                    "end": 2536
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2527,
                  "end": 2537
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2538,
                    "end": 2539
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2541,
                      "end": 2547
                    },
                    "start": 2539,
                    "end": 2547
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2538,
                  "end": 2547
                }
              ],
              "start": 2525,
              "end": 2549
            }
          ],
          "start": 2524,
          "end": 2550
        },
        "start": 2522,
        "end": 2550
      },
      "declare": false,
      "start": 2511,
      "end": 2551
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T43",
        "optional": false,
        "typeAnnotation": null,
        "start": 2568,
        "end": 2571
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2574,
          "end": 2576
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2579,
                    "end": 2580
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2582,
                      "end": 2588
                    },
                    "start": 2580,
                    "end": 2588
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2579,
                  "end": 2589
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2590,
                    "end": 2591
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2593,
                      "end": 2599
                    },
                    "start": 2591,
                    "end": 2599
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2590,
                  "end": 2599
                }
              ],
              "start": 2577,
              "end": 2601
            }
          ],
          "start": 2576,
          "end": 2602
        },
        "start": 2574,
        "end": 2602
      },
      "declare": false,
      "start": 2563,
      "end": 2603
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T44",
        "optional": false,
        "typeAnnotation": null,
        "start": 2629,
        "end": 2632
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2635,
          "end": 2637
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2640,
                    "end": 2641
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2643,
                      "end": 2649
                    },
                    "start": 2641,
                    "end": 2649
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2640,
                  "end": 2650
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2651,
                    "end": 2652
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2654,
                      "end": 2660
                    },
                    "start": 2652,
                    "end": 2660
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2651,
                  "end": 2661
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2662,
                    "end": 2663
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2665,
                      "end": 2672
                    },
                    "start": 2663,
                    "end": 2672
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2662,
                  "end": 2672
                }
              ],
              "start": 2638,
              "end": 2674
            }
          ],
          "start": 2637,
          "end": 2675
        },
        "start": 2635,
        "end": 2675
      },
      "declare": false,
      "start": 2624,
      "end": 2676
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2703,
        "end": 2705
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2706,
              "end": 2707
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2706,
            "end": 2707
          }
        ],
        "start": 2705,
        "end": 2708
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2711,
            "end": 2712
          },
          "typeArguments": null,
          "start": 2711,
          "end": 2712
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2723,
                "end": 2724
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSInferType",
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2736,
                              "end": 2737
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2736,
                            "end": 2737
                          },
                          "start": 2730,
                          "end": 2737
                        },
                        "start": 2728,
                        "end": 2737
                      },
                      "start": 2727,
                      "end": 2737
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 2742,
                      "end": 2746
                    },
                    "start": 2739,
                    "end": 2746
                  },
                  "start": 2726,
                  "end": 2746
                },
                "start": 2724,
                "end": 2746
              },
              "accessibility": null,
              "static": false,
              "start": 2723,
              "end": 2747
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 2748,
                "end": 2749
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSInferType",
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2761,
                              "end": 2762
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2761,
                            "end": 2762
                          },
                          "start": 2755,
                          "end": 2762
                        },
                        "start": 2753,
                        "end": 2762
                      },
                      "start": 2752,
                      "end": 2762
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 2767,
                      "end": 2771
                    },
                    "start": 2764,
                    "end": 2771
                  },
                  "start": 2751,
                  "end": 2771
                },
                "start": 2749,
                "end": 2771
              },
              "accessibility": null,
              "static": false,
              "start": 2748,
              "end": 2771
            }
          ],
          "start": 2721,
          "end": 2773
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 2776,
            "end": 2777
          },
          "typeArguments": null,
          "start": 2776,
          "end": 2777
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2780,
          "end": 2785
        },
        "start": 2711,
        "end": 2785
      },
      "declare": false,
      "start": 2698,
      "end": 2786
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T50",
        "optional": false,
        "typeAnnotation": null,
        "start": 2793,
        "end": 2796
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2799,
          "end": 2801
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 2802,
              "end": 2804
            }
          ],
          "start": 2801,
          "end": 2805
        },
        "start": 2799,
        "end": 2805
      },
      "declare": false,
      "start": 2788,
      "end": 2806
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T51",
        "optional": false,
        "typeAnnotation": null,
        "start": 2822,
        "end": 2825
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2828,
          "end": 2830
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2833,
                    "end": 2834
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2840,
                              "end": 2846
                            },
                            "start": 2838,
                            "end": 2846
                          },
                          "start": 2837,
                          "end": 2846
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 2851,
                          "end": 2855
                        },
                        "start": 2848,
                        "end": 2855
                      },
                      "start": 2836,
                      "end": 2855
                    },
                    "start": 2834,
                    "end": 2855
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2833,
                  "end": 2855
                }
              ],
              "start": 2831,
              "end": 2857
            }
          ],
          "start": 2830,
          "end": 2858
        },
        "start": 2828,
        "end": 2858
      },
      "declare": false,
      "start": 2817,
      "end": 2859
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T52",
        "optional": false,
        "typeAnnotation": null,
        "start": 2875,
        "end": 2878
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2881,
          "end": 2883
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2886,
                    "end": 2887
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2893,
                              "end": 2899
                            },
                            "start": 2891,
                            "end": 2899
                          },
                          "start": 2890,
                          "end": 2899
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 2904,
                          "end": 2908
                        },
                        "start": 2901,
                        "end": 2908
                      },
                      "start": 2889,
                      "end": 2908
                    },
                    "start": 2887,
                    "end": 2908
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2886,
                  "end": 2909
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2910,
                    "end": 2911
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2917,
                              "end": 2923
                            },
                            "start": 2915,
                            "end": 2923
                          },
                          "start": 2914,
                          "end": 2923
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 2928,
                          "end": 2932
                        },
                        "start": 2925,
                        "end": 2932
                      },
                      "start": 2913,
                      "end": 2932
                    },
                    "start": 2911,
                    "end": 2932
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2910,
                  "end": 2932
                }
              ],
              "start": 2884,
              "end": 2934
            }
          ],
          "start": 2883,
          "end": 2935
        },
        "start": 2881,
        "end": 2935
      },
      "declare": false,
      "start": 2870,
      "end": 2936
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T53",
        "optional": false,
        "typeAnnotation": null,
        "start": 2953,
        "end": 2956
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2959,
          "end": 2961
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2964,
                    "end": 2965
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2971,
                              "end": 2977
                            },
                            "start": 2969,
                            "end": 2977
                          },
                          "start": 2968,
                          "end": 2977
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 2982,
                          "end": 2986
                        },
                        "start": 2979,
                        "end": 2986
                      },
                      "start": 2967,
                      "end": 2986
                    },
                    "start": 2965,
                    "end": 2986
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2964,
                  "end": 2987
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2988,
                    "end": 2989
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2995,
                              "end": 3001
                            },
                            "start": 2993,
                            "end": 3001
                          },
                          "start": 2992,
                          "end": 3001
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 3006,
                          "end": 3010
                        },
                        "start": 3003,
                        "end": 3010
                      },
                      "start": 2991,
                      "end": 3010
                    },
                    "start": 2989,
                    "end": 3010
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2988,
                  "end": 3010
                }
              ],
              "start": 2962,
              "end": 3012
            }
          ],
          "start": 2961,
          "end": 3013
        },
        "start": 2959,
        "end": 3013
      },
      "declare": false,
      "start": 2948,
      "end": 3014
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T54",
        "optional": false,
        "typeAnnotation": null,
        "start": 3030,
        "end": 3033
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3036,
          "end": 3038
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3041,
                    "end": 3042
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3048,
                              "end": 3054
                            },
                            "start": 3046,
                            "end": 3054
                          },
                          "start": 3045,
                          "end": 3054
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 3059,
                          "end": 3063
                        },
                        "start": 3056,
                        "end": 3063
                      },
                      "start": 3044,
                      "end": 3063
                    },
                    "start": 3042,
                    "end": 3063
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3041,
                  "end": 3064
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3065,
                    "end": 3066
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 3074,
                          "end": 3078
                        },
                        "start": 3071,
                        "end": 3078
                      },
                      "start": 3068,
                      "end": 3078
                    },
                    "start": 3066,
                    "end": 3078
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3065,
                  "end": 3078
                }
              ],
              "start": 3039,
              "end": 3080
            }
          ],
          "start": 3038,
          "end": 3081
        },
        "start": 3036,
        "end": 3081
      },
      "declare": false,
      "start": 3025,
      "end": 3082
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T60",
        "optional": false,
        "typeAnnotation": null,
        "start": 3100,
        "end": 3103
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSInferType",
        "typeParameter": {
          "type": "TSTypeParameter",
          "name": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 3112,
            "end": 3113
          },
          "constraint": null,
          "default": null,
          "in": false,
          "out": false,
          "const": false,
          "start": 3112,
          "end": 3113
        },
        "start": 3106,
        "end": 3113
      },
      "declare": false,
      "start": 3095,
      "end": 3114
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T61",
        "optional": false,
        "typeAnnotation": null,
        "start": 3130,
        "end": 3133
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3134,
              "end": 3135
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3134,
            "end": 3135
          }
        ],
        "start": 3133,
        "end": 3136
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 3146,
              "end": 3147
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3146,
            "end": 3147
          },
          "start": 3140,
          "end": 3147
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 3163,
              "end": 3164
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3163,
            "end": 3164
          },
          "start": 3157,
          "end": 3164
        },
        "trueType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 3173,
              "end": 3174
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3173,
            "end": 3174
          },
          "start": 3167,
          "end": 3174
        },
        "falseType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 3183,
              "end": 3184
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3183,
            "end": 3184
          },
          "start": 3177,
          "end": 3184
        },
        "start": 3139,
        "end": 3184
      },
      "declare": false,
      "start": 3125,
      "end": 3185
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T62",
        "optional": false,
        "typeAnnotation": null,
        "start": 3201,
        "end": 3204
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3205,
              "end": 3206
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3205,
            "end": 3206
          }
        ],
        "start": 3204,
        "end": 3207
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 3210,
            "end": 3211
          },
          "typeArguments": null,
          "start": 3210,
          "end": 3211
        },
        "extendsType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3227,
                "end": 3228
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3227,
              "end": 3228
            },
            "start": 3221,
            "end": 3228
          },
          "start": 3220,
          "end": 3231
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 3234,
            "end": 3235
          },
          "typeArguments": null,
          "start": 3234,
          "end": 3235
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 3238,
            "end": 3239
          },
          "typeArguments": null,
          "start": 3238,
          "end": 3239
        },
        "start": 3210,
        "end": 3239
      },
      "declare": false,
      "start": 3196,
      "end": 3240
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T63",
        "optional": false,
        "typeAnnotation": null,
        "start": 3256,
        "end": 3259
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3260,
              "end": 3261
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3260,
            "end": 3261
          }
        ],
        "start": 3259,
        "end": 3262
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3265,
            "end": 3266
          },
          "typeArguments": null,
          "start": 3265,
          "end": 3266
        },
        "extendsType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 3283,
                "end": 3284
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3283,
              "end": 3284
            },
            "start": 3277,
            "end": 3284
          },
          "extendsType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 3300,
                "end": 3301
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3300,
              "end": 3301
            },
            "start": 3294,
            "end": 3301
          },
          "trueType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 3310,
                "end": 3311
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3310,
              "end": 3311
            },
            "start": 3304,
            "end": 3311
          },
          "falseType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 3320,
                "end": 3321
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3320,
              "end": 3321
            },
            "start": 3314,
            "end": 3321
          },
          "start": 3276,
          "end": 3321
        },
        "trueType": {
          "type": "TSStringKeyword",
          "start": 3325,
          "end": 3331
        },
        "falseType": {
          "type": "TSNumberKeyword",
          "start": 3334,
          "end": 3340
        },
        "start": 3265,
        "end": 3340
      },
      "declare": false,
      "start": 3251,
      "end": 3341
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T70",
        "optional": false,
        "typeAnnotation": null,
        "start": 3348,
        "end": 3351
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3352,
              "end": 3353
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3362,
              "end": 3368
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3352,
            "end": 3368
          }
        ],
        "start": 3351,
        "end": 3369
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3374,
              "end": 3375
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3377,
                  "end": 3378
                },
                "typeArguments": null,
                "start": 3377,
                "end": 3378
              },
              "start": 3375,
              "end": 3378
            },
            "accessibility": null,
            "static": false,
            "start": 3374,
            "end": 3378
          }
        ],
        "start": 3372,
        "end": 3380
      },
      "declare": false,
      "start": 3343,
      "end": 3381
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T71",
        "optional": false,
        "typeAnnotation": null,
        "start": 3387,
        "end": 3390
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3391,
              "end": 3392
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3391,
            "end": 3392
          }
        ],
        "start": 3390,
        "end": 3393
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3396,
            "end": 3397
          },
          "typeArguments": null,
          "start": 3396,
          "end": 3397
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T70",
            "optional": false,
            "typeAnnotation": null,
            "start": 3406,
            "end": 3409
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3416,
                    "end": 3417
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3416,
                  "end": 3417
                },
                "start": 3410,
                "end": 3417
              }
            ],
            "start": 3409,
            "end": 3418
          },
          "start": 3406,
          "end": 3418
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T70",
            "optional": false,
            "typeAnnotation": null,
            "start": 3421,
            "end": 3424
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3425,
                  "end": 3426
                },
                "typeArguments": null,
                "start": 3425,
                "end": 3426
              }
            ],
            "start": 3424,
            "end": 3427
          },
          "start": 3421,
          "end": 3427
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3430,
          "end": 3435
        },
        "start": 3396,
        "end": 3435
      },
      "declare": false,
      "start": 3382,
      "end": 3436
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T72",
        "optional": false,
        "typeAnnotation": null,
        "start": 3443,
        "end": 3446
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3447,
              "end": 3448
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3457,
              "end": 3463
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3447,
            "end": 3463
          }
        ],
        "start": 3446,
        "end": 3464
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 3469,
              "end": 3470
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3472,
                  "end": 3473
                },
                "typeArguments": null,
                "start": 3472,
                "end": 3473
              },
              "start": 3470,
              "end": 3473
            },
            "accessibility": null,
            "static": false,
            "start": 3469,
            "end": 3473
          }
        ],
        "start": 3467,
        "end": 3475
      },
      "declare": false,
      "start": 3438,
      "end": 3476
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T73",
        "optional": false,
        "typeAnnotation": null,
        "start": 3482,
        "end": 3485
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3486,
              "end": 3487
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3486,
            "end": 3487
          }
        ],
        "start": 3485,
        "end": 3488
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3491,
            "end": 3492
          },
          "typeArguments": null,
          "start": 3491,
          "end": 3492
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T72",
            "optional": false,
            "typeAnnotation": null,
            "start": 3501,
            "end": 3504
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3511,
                    "end": 3512
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3511,
                  "end": 3512
                },
                "start": 3505,
                "end": 3512
              }
            ],
            "start": 3504,
            "end": 3513
          },
          "start": 3501,
          "end": 3513
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T70",
            "optional": false,
            "typeAnnotation": null,
            "start": 3516,
            "end": 3519
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3520,
                  "end": 3521
                },
                "typeArguments": null,
                "start": 3520,
                "end": 3521
              }
            ],
            "start": 3519,
            "end": 3522
          },
          "start": 3516,
          "end": 3522
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3525,
          "end": 3530
        },
        "start": 3491,
        "end": 3530
      },
      "declare": false,
      "start": 3477,
      "end": 3531
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T74",
        "optional": false,
        "typeAnnotation": null,
        "start": 3548,
        "end": 3551
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3552,
              "end": 3553
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3562,
              "end": 3568
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3552,
            "end": 3568
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3570,
              "end": 3571
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3580,
              "end": 3586
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3570,
            "end": 3586
          }
        ],
        "start": 3551,
        "end": 3587
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3592,
              "end": 3593
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3595,
                  "end": 3596
                },
                "typeArguments": null,
                "start": 3595,
                "end": 3596
              },
              "start": 3593,
              "end": 3596
            },
            "accessibility": null,
            "static": false,
            "start": 3592,
            "end": 3597
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 3598,
              "end": 3599
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3601,
                  "end": 3602
                },
                "typeArguments": null,
                "start": 3601,
                "end": 3602
              },
              "start": 3599,
              "end": 3602
            },
            "accessibility": null,
            "static": false,
            "start": 3598,
            "end": 3602
          }
        ],
        "start": 3590,
        "end": 3604
      },
      "declare": false,
      "start": 3543,
      "end": 3605
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T75",
        "optional": false,
        "typeAnnotation": null,
        "start": 3611,
        "end": 3614
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3615,
              "end": 3616
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3615,
            "end": 3616
          }
        ],
        "start": 3614,
        "end": 3617
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3620,
            "end": 3621
          },
          "typeArguments": null,
          "start": 3620,
          "end": 3621
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T74",
            "optional": false,
            "typeAnnotation": null,
            "start": 3630,
            "end": 3633
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3640,
                    "end": 3641
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3640,
                  "end": 3641
                },
                "start": 3634,
                "end": 3641
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3649,
                    "end": 3650
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3649,
                  "end": 3650
                },
                "start": 3643,
                "end": 3650
              }
            ],
            "start": 3633,
            "end": 3651
          },
          "start": 3630,
          "end": 3651
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T70",
                "optional": false,
                "typeAnnotation": null,
                "start": 3654,
                "end": 3657
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3658,
                      "end": 3659
                    },
                    "typeArguments": null,
                    "start": 3658,
                    "end": 3659
                  }
                ],
                "start": 3657,
                "end": 3660
              },
              "start": 3654,
              "end": 3660
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T72",
                "optional": false,
                "typeAnnotation": null,
                "start": 3663,
                "end": 3666
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3667,
                      "end": 3668
                    },
                    "typeArguments": null,
                    "start": 3667,
                    "end": 3668
                  }
                ],
                "start": 3666,
                "end": 3669
              },
              "start": 3663,
              "end": 3669
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T74",
                "optional": false,
                "typeAnnotation": null,
                "start": 3672,
                "end": 3675
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3676,
                      "end": 3677
                    },
                    "typeArguments": null,
                    "start": 3676,
                    "end": 3677
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3679,
                      "end": 3680
                    },
                    "typeArguments": null,
                    "start": 3679,
                    "end": 3680
                  }
                ],
                "start": 3675,
                "end": 3681
              },
              "start": 3672,
              "end": 3681
            }
          ],
          "start": 3654,
          "end": 3681
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3684,
          "end": 3689
        },
        "start": 3620,
        "end": 3689
      },
      "declare": false,
      "start": 3606,
      "end": 3690
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T76",
        "optional": false,
        "typeAnnotation": null,
        "start": 3697,
        "end": 3700
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3701,
              "end": 3702
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3711,
                  "end": 3712
                },
                "typeArguments": null,
                "start": 3711,
                "end": 3712
              },
              "start": 3711,
              "end": 3714
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3701,
            "end": 3714
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3716,
              "end": 3717
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3726,
                "end": 3727
              },
              "typeArguments": null,
              "start": 3726,
              "end": 3727
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3716,
            "end": 3727
          }
        ],
        "start": 3700,
        "end": 3728
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3733,
              "end": 3734
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3736,
                  "end": 3737
                },
                "typeArguments": null,
                "start": 3736,
                "end": 3737
              },
              "start": 3734,
              "end": 3737
            },
            "accessibility": null,
            "static": false,
            "start": 3733,
            "end": 3737
          }
        ],
        "start": 3731,
        "end": 3739
      },
      "declare": false,
      "start": 3692,
      "end": 3740
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T77",
        "optional": false,
        "typeAnnotation": null,
        "start": 3746,
        "end": 3749
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3750,
              "end": 3751
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3750,
            "end": 3751
          }
        ],
        "start": 3749,
        "end": 3752
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3755,
            "end": 3756
          },
          "typeArguments": null,
          "start": 3755,
          "end": 3756
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T76",
            "optional": false,
            "typeAnnotation": null,
            "start": 3765,
            "end": 3768
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3775,
                    "end": 3776
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3775,
                  "end": 3776
                },
                "start": 3769,
                "end": 3776
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3784,
                    "end": 3785
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3784,
                  "end": 3785
                },
                "start": 3778,
                "end": 3785
              }
            ],
            "start": 3768,
            "end": 3786
          },
          "start": 3765,
          "end": 3786
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T76",
            "optional": false,
            "typeAnnotation": null,
            "start": 3789,
            "end": 3792
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3793,
                  "end": 3794
                },
                "typeArguments": null,
                "start": 3793,
                "end": 3794
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3796,
                  "end": 3797
                },
                "typeArguments": null,
                "start": 3796,
                "end": 3797
              }
            ],
            "start": 3792,
            "end": 3798
          },
          "start": 3789,
          "end": 3798
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3801,
          "end": 3806
        },
        "start": 3755,
        "end": 3806
      },
      "declare": false,
      "start": 3741,
      "end": 3807
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T78",
        "optional": false,
        "typeAnnotation": null,
        "start": 3813,
        "end": 3816
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3817,
              "end": 3818
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3817,
            "end": 3818
          }
        ],
        "start": 3816,
        "end": 3819
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3822,
            "end": 3823
          },
          "typeArguments": null,
          "start": 3822,
          "end": 3823
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T76",
            "optional": false,
            "typeAnnotation": null,
            "start": 3832,
            "end": 3835
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3842,
                    "end": 3843
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3842,
                  "end": 3843
                },
                "start": 3836,
                "end": 3843
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3851,
                    "end": 3852
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3851,
                  "end": 3852
                },
                "start": 3845,
                "end": 3852
              }
            ],
            "start": 3835,
            "end": 3853
          },
          "start": 3832,
          "end": 3853
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T76",
            "optional": false,
            "typeAnnotation": null,
            "start": 3856,
            "end": 3859
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3860,
                  "end": 3861
                },
                "typeArguments": null,
                "start": 3860,
                "end": 3861
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3863,
                  "end": 3864
                },
                "typeArguments": null,
                "start": 3863,
                "end": 3864
              }
            ],
            "start": 3859,
            "end": 3865
          },
          "start": 3856,
          "end": 3865
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3868,
          "end": 3873
        },
        "start": 3822,
        "end": 3873
      },
      "declare": false,
      "start": 3808,
      "end": 3874
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 3881,
        "end": 3884
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3885,
              "end": 3886
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3895,
              "end": 3901
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3885,
            "end": 3901
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3903,
              "end": 3904
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3913,
                "end": 3914
              },
              "typeArguments": null,
              "start": 3913,
              "end": 3914
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3903,
            "end": 3914
          }
        ],
        "start": 3884,
        "end": 3915
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3919,
              "end": 3920
            },
            "typeArguments": null,
            "start": 3919,
            "end": 3920
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3922,
              "end": 3923
            },
            "typeArguments": null,
            "start": 3922,
            "end": 3923
          }
        ],
        "start": 3918,
        "end": 3924
      },
      "declare": false,
      "start": 3876,
      "end": 3925
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 3931,
        "end": 3934
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3935,
              "end": 3936
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3935,
            "end": 3936
          }
        ],
        "start": 3934,
        "end": 3937
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3940,
            "end": 3941
          },
          "typeArguments": null,
          "start": 3940,
          "end": 3941
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 3950,
            "end": 3953
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3960,
                    "end": 3961
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3960,
                  "end": 3961
                },
                "start": 3954,
                "end": 3961
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3969,
                    "end": 3970
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3969,
                  "end": 3970
                },
                "start": 3963,
                "end": 3970
              }
            ],
            "start": 3953,
            "end": 3971
          },
          "start": 3950,
          "end": 3971
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 3974,
            "end": 3977
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3978,
                  "end": 3979
                },
                "typeArguments": null,
                "start": 3978,
                "end": 3979
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3981,
                  "end": 3982
                },
                "typeArguments": null,
                "start": 3981,
                "end": 3982
              }
            ],
            "start": 3977,
            "end": 3983
          },
          "start": 3974,
          "end": 3983
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3986,
          "end": 3991
        },
        "start": 3940,
        "end": 3991
      },
      "declare": false,
      "start": 3926,
      "end": 3992
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T90",
        "optional": false,
        "typeAnnotation": null,
        "start": 3999,
        "end": 4002
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 4005,
          "end": 4008
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 4010,
                  "end": 4016
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4018,
                  "end": 4024
                }
              ],
              "start": 4009,
              "end": 4025
            }
          ],
          "start": 4008,
          "end": 4026
        },
        "start": 4005,
        "end": 4026
      },
      "declare": false,
      "start": 3994,
      "end": 4027
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T91",
        "optional": false,
        "typeAnnotation": null,
        "start": 4054,
        "end": 4057
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 4060,
          "end": 4063
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 4065,
                  "end": 4071
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 4073,
                    "end": 4076
                  },
                  "start": 4073,
                  "end": 4076
                }
              ],
              "start": 4064,
              "end": 4077
            }
          ],
          "start": 4063,
          "end": 4078
        },
        "start": 4060,
        "end": 4078
      },
      "declare": false,
      "start": 4049,
      "end": 4079
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T92",
        "optional": false,
        "typeAnnotation": null,
        "start": 4103,
        "end": 4106
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 4109,
          "end": 4112
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4114,
                      "end": 4120
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 4122,
                        "end": 4125
                      },
                      "start": 4122,
                      "end": 4125
                    }
                  ],
                  "start": 4113,
                  "end": 4126
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4131,
                        "end": 4132
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4134,
                          "end": 4140
                        },
                        "start": 4132,
                        "end": 4140
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4131,
                      "end": 4140
                    }
                  ],
                  "start": 4129,
                  "end": 4142
                }
              ],
              "start": 4113,
              "end": 4142
            }
          ],
          "start": 4112,
          "end": 4143
        },
        "start": 4109,
        "end": 4143
      },
      "declare": false,
      "start": 4098,
      "end": 4144
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T93",
        "optional": false,
        "typeAnnotation": null,
        "start": 4168,
        "end": 4171
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 4174,
          "end": 4177
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 4179,
                    "end": 4182
                  },
                  "start": 4179,
                  "end": 4182
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4184,
                  "end": 4190
                }
              ],
              "start": 4178,
              "end": 4191
            }
          ],
          "start": 4177,
          "end": 4192
        },
        "start": 4174,
        "end": 4192
      },
      "declare": false,
      "start": 4163,
      "end": 4193
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T94",
        "optional": false,
        "typeAnnotation": null,
        "start": 4209,
        "end": 4212
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 4215,
          "end": 4218
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 4220,
                  "end": 4226
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4228,
                  "end": 4234
                }
              ],
              "start": 4219,
              "end": 4235
            }
          ],
          "start": 4218,
          "end": 4236
        },
        "start": 4215,
        "end": 4236
      },
      "declare": false,
      "start": 4204,
      "end": 4237
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JsonifiedObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 4278,
        "end": 4293
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4294,
              "end": 4295
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 4304,
              "end": 4310
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4294,
            "end": 4310
          }
        ],
        "start": 4293,
        "end": 4311
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 4317,
          "end": 4318
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4328,
              "end": 4329
            },
            "typeArguments": null,
            "start": 4328,
            "end": 4329
          },
          "start": 4322,
          "end": 4329
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Jsonified",
            "optional": false,
            "typeAnnotation": null,
            "start": 4332,
            "end": 4341
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4342,
                    "end": 4343
                  },
                  "typeArguments": null,
                  "start": 4342,
                  "end": 4343
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4344,
                    "end": 4345
                  },
                  "typeArguments": null,
                  "start": 4344,
                  "end": 4345
                },
                "start": 4342,
                "end": 4346
              }
            ],
            "start": 4341,
            "end": 4347
          },
          "start": 4332,
          "end": 4347
        },
        "optional": false,
        "readonly": null,
        "start": 4314,
        "end": 4349
      },
      "declare": false,
      "start": 4273,
      "end": 4350
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Jsonified",
        "optional": false,
        "typeAnnotation": null,
        "start": 4357,
        "end": 4366
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4367,
              "end": 4368
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4367,
            "end": 4368
          }
        ],
        "start": 4366,
        "end": 4369
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4376,
            "end": 4377
          },
          "typeArguments": null,
          "start": 4376,
          "end": 4377
        },
        "extendsType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 4386,
              "end": 4392
            },
            {
              "type": "TSNumberKeyword",
              "start": 4395,
              "end": 4401
            },
            {
              "type": "TSBooleanKeyword",
              "start": 4404,
              "end": 4411
            },
            {
              "type": "TSNullKeyword",
              "start": 4414,
              "end": 4418
            }
          ],
          "start": 4386,
          "end": 4418
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4421,
            "end": 4422
          },
          "typeArguments": null,
          "start": 4421,
          "end": 4422
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4429,
              "end": 4430
            },
            "typeArguments": null,
            "start": 4429,
            "end": 4430
          },
          "extendsType": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSUndefinedKeyword",
                "start": 4439,
                "end": 4448
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4451,
                  "end": 4459
                },
                "typeArguments": null,
                "start": 4451,
                "end": 4459
              }
            ],
            "start": 4439,
            "end": 4459
          },
          "trueType": {
            "type": "TSNeverKeyword",
            "start": 4462,
            "end": 4467
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4513,
                "end": 4514
              },
              "typeArguments": null,
              "start": 4513,
              "end": 4514
            },
            "extendsType": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toJSON",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4525,
                    "end": 4531
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4541,
                          "end": 4542
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 4541,
                        "end": 4542
                      },
                      "start": 4535,
                      "end": 4542
                    },
                    "start": 4533,
                    "end": 4542
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 4525,
                  "end": 4542
                }
              ],
              "start": 4523,
              "end": 4544
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 4547,
                "end": 4548
              },
              "typeArguments": null,
              "start": 4547,
              "end": 4548
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4600,
                  "end": 4601
                },
                "typeArguments": null,
                "start": 4600,
                "end": 4601
              },
              "extendsType": {
                "type": "TSObjectKeyword",
                "start": 4610,
                "end": 4616
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JsonifiedObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4619,
                  "end": 4634
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4635,
                        "end": 4636
                      },
                      "typeArguments": null,
                      "start": 4635,
                      "end": 4636
                    }
                  ],
                  "start": 4634,
                  "end": 4637
                },
                "start": 4619,
                "end": 4637
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "what is this",
                  "raw": "\"what is this\"",
                  "start": 4644,
                  "end": 4658
                },
                "start": 4644,
                "end": 4658
              },
              "start": 4600,
              "end": 4658
            },
            "start": 4513,
            "end": 4658
          },
          "start": 4429,
          "end": 4658
        },
        "start": 4376,
        "end": 4658
      },
      "declare": false,
      "start": 4352,
      "end": 4659
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example",
        "optional": false,
        "typeAnnotation": null,
        "start": 4666,
        "end": 4673
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null,
              "start": 4682,
              "end": 4685
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "literalstring",
                  "raw": "\"literalstring\"",
                  "start": 4687,
                  "end": 4702
                },
                "start": 4687,
                "end": 4702
              },
              "start": 4685,
              "end": 4702
            },
            "accessibility": null,
            "static": false,
            "start": 4682,
            "end": 4703
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 4708,
              "end": 4710
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 4718,
                    "end": 4722
                  },
                  "start": 4715,
                  "end": 4722
                },
                "start": 4712,
                "end": 4722
              },
              "start": 4710,
              "end": 4722
            },
            "accessibility": null,
            "static": false,
            "start": 4708,
            "end": 4723
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "date",
              "optional": false,
              "typeAnnotation": null,
              "start": 4728,
              "end": 4732
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4734,
                  "end": 4738
                },
                "typeArguments": null,
                "start": 4734,
                "end": 4738
              },
              "start": 4732,
              "end": 4738
            },
            "accessibility": null,
            "static": false,
            "start": 4728,
            "end": 4739
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "customClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 4744,
              "end": 4755
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4757,
                  "end": 4764
                },
                "typeArguments": null,
                "start": 4757,
                "end": 4764
              },
              "start": 4755,
              "end": 4764
            },
            "accessibility": null,
            "static": false,
            "start": 4744,
            "end": 4765
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 4770,
              "end": 4773
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4785,
                      "end": 4789
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "property",
                          "raw": "\"property\"",
                          "start": 4791,
                          "end": 4801
                        },
                        "start": 4791,
                        "end": 4801
                      },
                      "start": 4789,
                      "end": 4801
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4785,
                    "end": 4802
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "clz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4811,
                      "end": 4814
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4816,
                          "end": 4823
                        },
                        "typeArguments": null,
                        "start": 4816,
                        "end": 4823
                      },
                      "start": 4814,
                      "end": 4823
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4811,
                    "end": 4824
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4833,
                      "end": 4839
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "attr",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4843,
                              "end": 4847
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Date",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4849,
                                  "end": 4853
                                },
                                "typeArguments": null,
                                "start": 4849,
                                "end": 4853
                              },
                              "start": 4847,
                              "end": 4853
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 4843,
                            "end": 4853
                          }
                        ],
                        "start": 4841,
                        "end": 4855
                      },
                      "start": 4839,
                      "end": 4855
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4833,
                    "end": 4855
                  }
                ],
                "start": 4775,
                "end": 4861
              },
              "start": 4773,
              "end": 4861
            },
            "accessibility": null,
            "static": false,
            "start": 4770,
            "end": 4862
          }
        ],
        "start": 4676,
        "end": 4864
      },
      "declare": false,
      "start": 4661,
      "end": 4864
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 4880,
        "end": 4887
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
              "name": "toJSON",
              "optional": false,
              "typeAnnotation": null,
              "start": 4894,
              "end": 4900
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "correct",
                    "raw": "\"correct\"",
                    "start": 4904,
                    "end": 4913
                  },
                  "start": 4904,
                  "end": 4913
                },
                "start": 4902,
                "end": 4913
              },
              "body": null,
              "expression": false,
              "start": 4900,
              "end": 4914
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4894,
            "end": 4914
          }
        ],
        "start": 4888,
        "end": 4916
      },
      "abstract": false,
      "declare": true,
      "start": 4866,
      "end": 4916
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JsonifiedExample",
        "optional": false,
        "typeAnnotation": null,
        "start": 4923,
        "end": 4939
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Jsonified",
          "optional": false,
          "typeAnnotation": null,
          "start": 4942,
          "end": 4951
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Example",
                "optional": false,
                "typeAnnotation": null,
                "start": 4952,
                "end": 4959
              },
              "typeArguments": null,
              "start": 4952,
              "end": 4959
            }
          ],
          "start": 4951,
          "end": 4960
        },
        "start": 4942,
        "end": 4960
      },
      "declare": false,
      "start": 4918,
      "end": 4961
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JsonifiedExample",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4978,
                  "end": 4994
                },
                "typeArguments": null,
                "start": 4978,
                "end": 4994
              },
              "start": 4976,
              "end": 4994
            },
            "start": 4974,
            "end": 4994
          },
          "init": null,
          "definite": false,
          "start": 4974,
          "end": 4994
        }
      ],
      "declare": true,
      "start": 4962,
      "end": 4995
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "correct",
                  "raw": "\"correct\"",
                  "start": 5006,
                  "end": 5015
                },
                "start": 5006,
                "end": 5015
              },
              "start": 5004,
              "end": 5015
            },
            "start": 5002,
            "end": 5015
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ex",
              "optional": false,
              "typeAnnotation": null,
              "start": 5018,
              "end": 5020
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "customClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 5021,
              "end": 5032
            },
            "optional": false,
            "computed": false,
            "start": 5018,
            "end": 5032
          },
          "definite": false,
          "start": 5002,
          "end": 5032
        }
      ],
      "declare": false,
      "start": 4996,
      "end": 5033
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5044,
                "end": 5050
              },
              "start": 5042,
              "end": 5050
            },
            "start": 5040,
            "end": 5050
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ex",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5053,
                  "end": 5055
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5056,
                  "end": 5059
                },
                "optional": false,
                "computed": false,
                "start": 5053,
                "end": 5059
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 5060,
                "end": 5066
              },
              "optional": false,
              "computed": false,
              "start": 5053,
              "end": 5066
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "attr",
              "optional": false,
              "typeAnnotation": null,
              "start": 5067,
              "end": 5071
            },
            "optional": false,
            "computed": false,
            "start": 5053,
            "end": 5071
          },
          "definite": false,
          "start": 5040,
          "end": 5071
        }
      ],
      "declare": false,
      "start": 5034,
      "end": 5072
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5102,
        "end": 5104
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 5105,
              "end": 5106
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5105,
            "end": 5106
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 5108,
              "end": 5109
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A1",
                "optional": false,
                "typeAnnotation": null,
                "start": 5118,
                "end": 5120
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 5121,
                    "end": 5124
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 5126,
                    "end": 5129
                  }
                ],
                "start": 5120,
                "end": 5130
              },
              "start": 5118,
              "end": 5130
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5108,
            "end": 5130
          }
        ],
        "start": 5104,
        "end": 5131
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 5135,
              "end": 5136
            },
            "typeArguments": null,
            "start": 5135,
            "end": 5136
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 5138,
              "end": 5139
            },
            "typeArguments": null,
            "start": 5138,
            "end": 5139
          }
        ],
        "start": 5134,
        "end": 5140
      },
      "declare": false,
      "start": 5097,
      "end": 5141
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5147,
        "end": 5149
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 5150,
              "end": 5151
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5150,
            "end": 5151
          }
        ],
        "start": 5149,
        "end": 5152
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 5155,
            "end": 5156
          },
          "typeArguments": null,
          "start": 5155,
          "end": 5156
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5165,
            "end": 5167
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5174,
                    "end": 5175
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 5174,
                  "end": 5175
                },
                "start": 5168,
                "end": 5175
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5183,
                    "end": 5184
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 5183,
                  "end": 5184
                },
                "start": 5177,
                "end": 5184
              }
            ],
            "start": 5167,
            "end": 5185
          },
          "start": 5165,
          "end": 5185
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5189,
                "end": 5190
              },
              "typeArguments": null,
              "start": 5189,
              "end": 5190
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 5192,
                "end": 5193
              },
              "typeArguments": null,
              "start": 5192,
              "end": 5193
            }
          ],
          "start": 5188,
          "end": 5194
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5197,
          "end": 5202
        },
        "start": 5155,
        "end": 5202
      },
      "declare": false,
      "start": 5142,
      "end": 5203
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5210,
        "end": 5212
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 5213,
              "end": 5214
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5213,
            "end": 5214
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 5216,
              "end": 5217
            },
            "constraint": {
              "type": "TSVoidKeyword",
              "start": 5226,
              "end": 5230
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5216,
            "end": 5230
          }
        ],
        "start": 5212,
        "end": 5231
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 5235,
              "end": 5236
            },
            "typeArguments": null,
            "start": 5235,
            "end": 5236
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 5238,
              "end": 5239
            },
            "typeArguments": null,
            "start": 5238,
            "end": 5239
          }
        ],
        "start": 5234,
        "end": 5240
      },
      "declare": false,
      "start": 5205,
      "end": 5241
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5247,
        "end": 5249
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 5250,
              "end": 5251
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5250,
            "end": 5251
          }
        ],
        "start": 5249,
        "end": 5252
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 5255,
            "end": 5256
          },
          "typeArguments": null,
          "start": 5255,
          "end": 5256
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5265,
            "end": 5267
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5274,
                    "end": 5275
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 5274,
                  "end": 5275
                },
                "start": 5268,
                "end": 5275
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5283,
                    "end": 5284
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 5283,
                  "end": 5284
                },
                "start": 5277,
                "end": 5284
              }
            ],
            "start": 5267,
            "end": 5285
          },
          "start": 5265,
          "end": 5285
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5289,
                "end": 5290
              },
              "typeArguments": null,
              "start": 5289,
              "end": 5290
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 5292,
                "end": 5293
              },
              "typeArguments": null,
              "start": 5292,
              "end": 5293
            }
          ],
          "start": 5288,
          "end": 5294
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5297,
          "end": 5302
        },
        "start": 5255,
        "end": 5302
      },
      "declare": false,
      "start": 5242,
      "end": 5303
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5309,
        "end": 5311
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 5312,
              "end": 5313
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5312,
            "end": 5313
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 5315,
              "end": 5316
            },
            "constraint": {
              "type": "TSVoidKeyword",
              "start": 5325,
              "end": 5329
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5315,
            "end": 5329
          }
        ],
        "start": 5311,
        "end": 5330
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 5333,
            "end": 5334
          },
          "typeArguments": null,
          "start": 5333,
          "end": 5334
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5343,
            "end": 5345
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5352,
                    "end": 5353
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 5352,
                  "end": 5353
                },
                "start": 5346,
                "end": 5353
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5355,
                  "end": 5356
                },
                "typeArguments": null,
                "start": 5355,
                "end": 5356
              }
            ],
            "start": 5345,
            "end": 5357
          },
          "start": 5343,
          "end": 5357
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5361,
                "end": 5362
              },
              "typeArguments": null,
              "start": 5361,
              "end": 5362
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 5364,
                "end": 5365
              },
              "typeArguments": null,
              "start": 5364,
              "end": 5365
            }
          ],
          "start": 5360,
          "end": 5366
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5369,
          "end": 5374
        },
        "start": 5333,
        "end": 5374
      },
      "declare": false,
      "start": 5304,
      "end": 5375
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 5404,
        "end": 5405
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 5406,
              "end": 5407
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5406,
            "end": 5407
          }
        ],
        "start": 5405,
        "end": 5408
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 5411,
            "end": 5412
          },
          "typeArguments": null,
          "start": 5411,
          "end": 5412
        },
        "extendsType": {
          "type": "TSStringKeyword",
          "start": 5421,
          "end": 5427
        },
        "trueType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 5433,
            "end": 5434
          },
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 5438,
              "end": 5439
            },
            "typeArguments": null,
            "start": 5438,
            "end": 5439
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 5442,
            "end": 5446
          },
          "optional": false,
          "readonly": null,
          "start": 5430,
          "end": 5449
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 5452,
            "end": 5453
          },
          "typeArguments": null,
          "start": 5452,
          "end": 5453
        },
        "start": 5411,
        "end": 5453
      },
      "declare": false,
      "start": 5399,
      "end": 5454
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 5460,
        "end": 5461
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 5462,
              "end": 5463
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5462,
            "end": 5463
          }
        ],
        "start": 5461,
        "end": 5464
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSStringKeyword",
          "start": 5467,
          "end": 5473
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 5482,
            "end": 5483
          },
          "typeArguments": null,
          "start": 5482,
          "end": 5483
        },
        "trueType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 5489,
            "end": 5490
          },
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 5494,
              "end": 5495
            },
            "typeArguments": null,
            "start": 5494,
            "end": 5495
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 5498,
            "end": 5502
          },
          "optional": false,
          "readonly": null,
          "start": 5486,
          "end": 5505
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 5508,
            "end": 5509
          },
          "typeArguments": null,
          "start": 5508,
          "end": 5509
        },
        "start": 5467,
        "end": 5509
      },
      "declare": false,
      "start": 5455,
      "end": 5510
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MatchingKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 5549,
        "end": 5561
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 5562,
              "end": 5563
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5562,
            "end": 5563
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 5565,
              "end": 5566
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5565,
            "end": 5566
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 5568,
              "end": 5569
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5584,
                  "end": 5585
                },
                "typeArguments": null,
                "start": 5584,
                "end": 5585
              },
              "start": 5578,
              "end": 5585
            },
            "default": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5594,
                  "end": 5595
                },
                "typeArguments": null,
                "start": 5594,
                "end": 5595
              },
              "start": 5588,
              "end": 5595
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 5568,
            "end": 5595
          }
        ],
        "start": 5561,
        "end": 5596
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 5603,
            "end": 5604
          },
          "typeArguments": null,
          "start": 5603,
          "end": 5604
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 5619,
              "end": 5620
            },
            "typeArguments": null,
            "start": 5619,
            "end": 5620
          },
          "start": 5613,
          "end": 5620
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5623,
                "end": 5624
              },
              "typeArguments": null,
              "start": 5623,
              "end": 5624
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 5625,
                "end": 5626
              },
              "typeArguments": null,
              "start": 5625,
              "end": 5626
            },
            "start": 5623,
            "end": 5627
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 5636,
              "end": 5637
            },
            "typeArguments": null,
            "start": 5636,
            "end": 5637
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 5640,
              "end": 5641
            },
            "typeArguments": null,
            "start": 5640,
            "end": 5641
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 5644,
            "end": 5649
          },
          "start": 5623,
          "end": 5649
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5652,
          "end": 5657
        },
        "start": 5603,
        "end": 5657
      },
      "declare": false,
      "start": 5544,
      "end": 5658
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VoidKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 5665,
        "end": 5673
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 5674,
              "end": 5675
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5674,
            "end": 5675
          }
        ],
        "start": 5673,
        "end": 5676
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MatchingKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 5679,
          "end": 5691
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5692,
                "end": 5693
              },
              "typeArguments": null,
              "start": 5692,
              "end": 5693
            },
            {
              "type": "TSVoidKeyword",
              "start": 5695,
              "end": 5699
            }
          ],
          "start": 5691,
          "end": 5700
        },
        "start": 5679,
        "end": 5700
      },
      "declare": false,
      "start": 5660,
      "end": 5701
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 5713,
        "end": 5717
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 5724,
              "end": 5725
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 5727,
                  "end": 5728
                },
                "start": 5727,
                "end": 5728
              },
              "start": 5725,
              "end": 5728
            },
            "accessibility": null,
            "static": false,
            "start": 5724,
            "end": 5729
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 5734,
              "end": 5735
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 5737,
                "end": 5741
              },
              "start": 5735,
              "end": 5741
            },
            "accessibility": null,
            "static": false,
            "start": 5734,
            "end": 5741
          }
        ],
        "start": 5718,
        "end": 5743
      },
      "declare": false,
      "start": 5703,
      "end": 5743
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T80",
        "optional": false,
        "typeAnnotation": null,
        "start": 5750,
        "end": 5753
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MatchingKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 5756,
          "end": 5768
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 5769,
                "end": 5773
              },
              "typeArguments": null,
              "start": 5769,
              "end": 5773
            },
            {
              "type": "TSVoidKeyword",
              "start": 5775,
              "end": 5779
            }
          ],
          "start": 5768,
          "end": 5780
        },
        "start": 5756,
        "end": 5780
      },
      "declare": false,
      "start": 5745,
      "end": 5781
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T81",
        "optional": false,
        "typeAnnotation": null,
        "start": 5787,
        "end": 5790
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "VoidKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 5793,
          "end": 5801
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 5802,
                "end": 5806
              },
              "typeArguments": null,
              "start": 5802,
              "end": 5806
            }
          ],
          "start": 5801,
          "end": 5807
        },
        "start": 5793,
        "end": 5807
      },
      "declare": false,
      "start": 5782,
      "end": 5808
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MustBeString",
        "optional": false,
        "typeAnnotation": null,
        "start": 5837,
        "end": 5849
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 5850,
              "end": 5851
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 5860,
              "end": 5866
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5850,
            "end": 5866
          }
        ],
        "start": 5849,
        "end": 5867
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 5870,
          "end": 5871
        },
        "typeArguments": null,
        "start": 5870,
        "end": 5871
      },
      "declare": false,
      "start": 5832,
      "end": 5872
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EnsureIsString",
        "optional": false,
        "typeAnnotation": null,
        "start": 5878,
        "end": 5892
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 5893,
              "end": 5894
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5893,
            "end": 5894
          }
        ],
        "start": 5892,
        "end": 5895
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 5898,
            "end": 5899
          },
          "typeArguments": null,
          "start": 5898,
          "end": 5899
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MustBeString",
            "optional": false,
            "typeAnnotation": null,
            "start": 5908,
            "end": 5920
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5927,
                    "end": 5928
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 5927,
                  "end": 5928
                },
                "start": 5921,
                "end": 5928
              }
            ],
            "start": 5920,
            "end": 5929
          },
          "start": 5908,
          "end": 5929
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 5932,
            "end": 5933
          },
          "typeArguments": null,
          "start": 5932,
          "end": 5933
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5936,
          "end": 5941
        },
        "start": 5898,
        "end": 5941
      },
      "declare": false,
      "start": 5873,
      "end": 5942
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5949,
        "end": 5954
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "EnsureIsString",
          "optional": false,
          "typeAnnotation": null,
          "start": 5957,
          "end": 5971
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 5972,
                "end": 5979
              },
              "start": 5972,
              "end": 5979
            }
          ],
          "start": 5971,
          "end": 5980
        },
        "start": 5957,
        "end": 5980
      },
      "declare": false,
      "start": 5944,
      "end": 5981
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5999,
        "end": 6004
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "EnsureIsString",
          "optional": false,
          "typeAnnotation": null,
          "start": 6007,
          "end": 6021
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 6022,
                "end": 6024
              },
              "start": 6022,
              "end": 6024
            }
          ],
          "start": 6021,
          "end": 6025
        },
        "start": 6007,
        "end": 6025
      },
      "declare": false,
      "start": 5994,
      "end": 6026
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invoker",
        "optional": false,
        "typeAnnotation": null,
        "start": 6070,
        "end": 6077
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 6079,
              "end": 6080
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 6089,
                  "end": 6095
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 6098,
                  "end": 6104
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 6107,
                  "end": 6113
                }
              ],
              "start": 6089,
              "end": 6113
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6079,
            "end": 6113
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 6115,
              "end": 6116
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 6125,
                "end": 6128
              },
              "start": 6125,
              "end": 6130
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6115,
            "end": 6130
          }
        ],
        "start": 6078,
        "end": 6131
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 6138,
                "end": 6139
              },
              "typeArguments": null,
              "start": 6138,
              "end": 6139
            },
            "start": 6136,
            "end": 6139
          },
          "start": 6133,
          "end": 6139
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 6144,
            "end": 6148
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 6150,
                "end": 6151
              },
              "typeArguments": null,
              "start": 6150,
              "end": 6151
            },
            "start": 6148,
            "end": 6151
          },
          "value": null,
          "start": 6141,
          "end": 6151
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6167,
                      "end": 6168
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Record",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6177,
                        "end": 6183
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6184,
                              "end": 6185
                            },
                            "typeArguments": null,
                            "start": 6184,
                            "end": 6185
                          },
                          {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "RestElement",
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6191,
                                  "end": 6195
                                },
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 6197,
                                      "end": 6198
                                    },
                                    "typeArguments": null,
                                    "start": 6197,
                                    "end": 6198
                                  },
                                  "start": 6195,
                                  "end": 6198
                                },
                                "value": null,
                                "start": 6188,
                                "end": 6198
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 6203,
                                "end": 6206
                              },
                              "start": 6200,
                              "end": 6206
                            },
                            "start": 6187,
                            "end": 6206
                          }
                        ],
                        "start": 6183,
                        "end": 6207
                      },
                      "start": 6177,
                      "end": 6207
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 6167,
                    "end": 6207
                  }
                ],
                "start": 6166,
                "end": 6208
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6215,
                        "end": 6216
                      },
                      "typeArguments": null,
                      "start": 6215,
                      "end": 6216
                    },
                    "start": 6213,
                    "end": 6216
                  },
                  "start": 6210,
                  "end": 6216
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ReturnType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6219,
                    "end": 6229
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6230,
                            "end": 6231
                          },
                          "typeArguments": null,
                          "start": 6230,
                          "end": 6231
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6232,
                            "end": 6233
                          },
                          "typeArguments": null,
                          "start": 6232,
                          "end": 6233
                        },
                        "start": 6230,
                        "end": 6234
                      }
                    ],
                    "start": 6229,
                    "end": 6235
                  },
                  "start": 6219,
                  "end": 6235
                },
                "start": 6217,
                "end": 6235
              },
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6239,
                    "end": 6242
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6243,
                    "end": 6246
                  },
                  "optional": false,
                  "computed": true,
                  "start": 6239,
                  "end": 6247
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6251,
                      "end": 6255
                    },
                    "start": 6248,
                    "end": 6255
                  }
                ],
                "optional": false,
                "start": 6239,
                "end": 6256
              },
              "id": null,
              "generator": false,
              "start": 6166,
              "end": 6256
            },
            "start": 6159,
            "end": 6256
          }
        ],
        "start": 6153,
        "end": 6258
      },
      "expression": false,
      "start": 6061,
      "end": 6258
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 6266,
            "end": 6272
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "invoker",
                "optional": false,
                "typeAnnotation": null,
                "start": 6275,
                "end": 6282
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "test",
                  "raw": "'test'",
                  "start": 6283,
                  "end": 6289
                },
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 6291,
                  "end": 6295
                }
              ],
              "optional": false,
              "start": 6275,
              "end": 6296
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6299,
                      "end": 6303
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 6309,
                              "end": 6316
                            },
                            "start": 6307,
                            "end": 6316
                          },
                          "start": 6306,
                          "end": 6316
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 123,
                        "raw": "123",
                        "start": 6321,
                        "end": 6324
                      },
                      "id": null,
                      "generator": false,
                      "start": 6305,
                      "end": 6324
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 6299,
                    "end": 6324
                  }
                ],
                "start": 6297,
                "end": 6326
              }
            ],
            "optional": false,
            "start": 6275,
            "end": 6327
          },
          "definite": false,
          "start": 6266,
          "end": 6327
        }
      ],
      "declare": false,
      "start": 6260,
      "end": 6327
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 6334,
        "end": 6338
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 6339,
              "end": 6340
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 6349,
                "end": 6352
              },
              "start": 6349,
              "end": 6354
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6339,
            "end": 6354
          }
        ],
        "start": 6338,
        "end": 6355
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null,
          "start": 6358,
          "end": 6368
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6373,
                    "end": 6377
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6379,
                        "end": 6380
                      },
                      "typeArguments": null,
                      "start": 6379,
                      "end": 6380
                    },
                    "start": 6377,
                    "end": 6380
                  },
                  "value": null,
                  "start": 6370,
                  "end": 6380
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 6385,
                  "end": 6391
                },
                "start": 6382,
                "end": 6391
              },
              "start": 6369,
              "end": 6391
            }
          ],
          "start": 6368,
          "end": 6392
        },
        "start": 6358,
        "end": 6392
      },
      "declare": false,
      "start": 6329,
      "end": 6393
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 6393
}
```
