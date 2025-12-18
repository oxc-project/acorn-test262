__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "Unpacked",
    "start": 5,
    "end": 13,
    "range": [
      5,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 25,
    "end": 32,
    "range": [
      25,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 34,
    "end": 39,
    "range": [
      34,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 57,
    "end": 64,
    "range": [
      57,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 66,
    "end": 69,
    "range": [
      66,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 69,
    "end": 73,
    "range": [
      69,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 75,
    "end": 78,
    "range": [
      75,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 82,
    "end": 84,
    "range": [
      82,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 85,
    "end": 90,
    "range": [
      85,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 105,
    "end": 112,
    "range": [
      105,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 113,
    "end": 120,
    "range": [
      113,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 121,
    "end": 126,
    "range": [
      121,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 144,
    "end": 148,
    "range": [
      144,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "T00",
    "start": 149,
    "end": 152,
    "range": [
      149,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "Unpacked",
    "start": 155,
    "end": 163,
    "range": [
      155,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 164,
    "end": 170,
    "range": [
      164,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 184,
    "end": 188,
    "range": [
      184,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "T01",
    "start": 189,
    "end": 192,
    "range": [
      189,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "Unpacked",
    "start": 195,
    "end": 203,
    "range": [
      195,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 204,
    "end": 210,
    "range": [
      204,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 226,
    "end": 230,
    "range": [
      226,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "T02",
    "start": 231,
    "end": 234,
    "range": [
      231,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "Unpacked",
    "start": 237,
    "end": 245,
    "range": [
      237,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 249,
    "end": 251,
    "range": [
      249,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 252,
    "end": 258,
    "range": [
      252,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 272,
    "end": 276,
    "range": [
      272,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "T03",
    "start": 277,
    "end": 280,
    "range": [
      277,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Identifier",
    "value": "Unpacked",
    "start": 283,
    "end": 291,
    "range": [
      283,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 292,
    "end": 299,
    "range": [
      292,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 300,
    "end": 306,
    "range": [
      300,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 321,
    "end": 325,
    "range": [
      321,
      325
    ]
  },
  {
    "type": "Identifier",
    "value": "T04",
    "start": 326,
    "end": 329,
    "range": [
      326,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "Unpacked",
    "start": 332,
    "end": 340,
    "range": [
      332,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "Unpacked",
    "start": 341,
    "end": 349,
    "range": [
      341,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 350,
    "end": 357,
    "range": [
      350,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 358,
    "end": 364,
    "range": [
      358,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 382,
    "end": 386,
    "range": [
      382,
      386
    ]
  },
  {
    "type": "Identifier",
    "value": "T05",
    "start": 387,
    "end": 390,
    "range": [
      387,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "Unpacked",
    "start": 393,
    "end": 401,
    "range": [
      393,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 402,
    "end": 405,
    "range": [
      402,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 416,
    "end": 420,
    "range": [
      416,
      420
    ]
  },
  {
    "type": "Identifier",
    "value": "T06",
    "start": 421,
    "end": 424,
    "range": [
      421,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Identifier",
    "value": "Unpacked",
    "start": 427,
    "end": 435,
    "range": [
      427,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 436,
    "end": 441,
    "range": [
      436,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 455,
    "end": 463,
    "range": [
      455,
      463
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 464,
    "end": 466,
    "range": [
      464,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 470,
    "end": 476,
    "range": [
      470,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 484,
    "end": 490,
    "range": [
      484,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 510,
    "end": 515,
    "range": [
      510,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 524,
    "end": 525,
    "range": [
      524,
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
    "type": "Numeric",
    "value": "0",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 545,
    "end": 553,
    "range": [
      545,
      553
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 554,
    "end": 559,
    "range": [
      554,
      559
    ]
  },
  {
    "type": "Identifier",
    "value": "Abstract",
    "start": 560,
    "end": 568,
    "range": [
      560,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 596,
    "end": 600,
    "range": [
      596,
      600
    ]
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 601,
    "end": 604,
    "range": [
      601,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 607,
    "end": 617,
    "range": [
      607,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 621,
    "end": 623,
    "range": [
      621,
      623
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 624,
    "end": 630,
    "range": [
      624,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 644,
    "end": 648,
    "range": [
      644,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 649,
    "end": 652,
    "range": [
      649,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 655,
    "end": 665,
    "range": [
      655,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 670,
    "end": 676,
    "range": [
      670,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 678,
    "end": 680,
    "range": [
      678,
      680
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 681,
    "end": 685,
    "range": [
      681,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 697,
    "end": 701,
    "range": [
      697,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "T12",
    "start": 702,
    "end": 705,
    "range": [
      702,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 708,
    "end": 718,
    "range": [
      708,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 726,
    "end": 728,
    "range": [
      726,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 741,
    "end": 745,
    "range": [
      741,
      745
    ]
  },
  {
    "type": "Identifier",
    "value": "T13",
    "start": 746,
    "end": 749,
    "range": [
      746,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 752,
    "end": 762,
    "range": [
      752,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 767,
    "end": 774,
    "range": [
      767,
      774
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 780,
    "end": 787,
    "range": [
      780,
      787
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 788,
    "end": 794,
    "range": [
      788,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 800,
    "end": 802,
    "range": [
      800,
      802
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 821,
    "end": 825,
    "range": [
      821,
      825
    ]
  },
  {
    "type": "Identifier",
    "value": "T14",
    "start": 826,
    "end": 829,
    "range": [
      826,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 832,
    "end": 842,
    "range": [
      832,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 843,
    "end": 849,
    "range": [
      843,
      849
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 850,
    "end": 852,
    "range": [
      850,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 884,
    "end": 888,
    "range": [
      884,
      888
    ]
  },
  {
    "type": "Identifier",
    "value": "T15",
    "start": 889,
    "end": 892,
    "range": [
      889,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 895,
    "end": 905,
    "range": [
      895,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 906,
    "end": 909,
    "range": [
      906,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 920,
    "end": 924,
    "range": [
      920,
      924
    ]
  },
  {
    "type": "Identifier",
    "value": "T16",
    "start": 925,
    "end": 928,
    "range": [
      925,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 931,
    "end": 941,
    "range": [
      931,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 942,
    "end": 947,
    "range": [
      942,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 960,
    "end": 964,
    "range": [
      960,
      964
    ]
  },
  {
    "type": "Identifier",
    "value": "T17",
    "start": 965,
    "end": 968,
    "range": [
      965,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 971,
    "end": 981,
    "range": [
      971,
      981
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 981,
    "end": 982,
    "range": [
      981,
      982
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 982,
    "end": 988,
    "range": [
      982,
      988
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 988,
    "end": 989,
    "range": [
      988,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1001,
    "end": 1005,
    "range": [
      1001,
      1005
    ]
  },
  {
    "type": "Identifier",
    "value": "T18",
    "start": 1006,
    "end": 1009,
    "range": [
      1006,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 1012,
    "end": 1022,
    "range": [
      1012,
      1022
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 1023,
    "end": 1031,
    "range": [
      1023,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1044,
    "end": 1048,
    "range": [
      1044,
      1048
    ]
  },
  {
    "type": "Identifier",
    "value": "T19",
    "start": 1049,
    "end": 1052,
    "range": [
      1049,
      1052
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1055,
    "end": 1062,
    "range": [
      1055,
      1062
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1063,
    "end": 1066,
    "range": [
      1063,
      1066
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1066,
    "end": 1067,
    "range": [
      1066,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 1072,
    "end": 1082,
    "range": [
      1072,
      1082
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1082,
    "end": 1083,
    "range": [
      1082,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1087,
    "end": 1093,
    "range": [
      1087,
      1093
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1095,
    "end": 1098,
    "range": [
      1095,
      1098
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1098,
    "end": 1102,
    "range": [
      1098,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1107,
    "end": 1109,
    "range": [
      1107,
      1109
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1125,
    "end": 1129,
    "range": [
      1125,
      1129
    ]
  },
  {
    "type": "Identifier",
    "value": "U10",
    "start": 1130,
    "end": 1133,
    "range": [
      1130,
      1133
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Identifier",
    "value": "InstanceType",
    "start": 1136,
    "end": 1148,
    "range": [
      1136,
      1148
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1148,
    "end": 1149,
    "range": [
      1148,
      1149
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1149,
    "end": 1155,
    "range": [
      1149,
      1155
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1166,
    "end": 1170,
    "range": [
      1166,
      1170
    ]
  },
  {
    "type": "Identifier",
    "value": "U11",
    "start": 1171,
    "end": 1174,
    "range": [
      1171,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Identifier",
    "value": "InstanceType",
    "start": 1177,
    "end": 1189,
    "range": [
      1177,
      1189
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1189,
    "end": 1190,
    "range": [
      1189,
      1190
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1190,
    "end": 1193,
    "range": [
      1190,
      1193
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1204,
    "end": 1208,
    "range": [
      1204,
      1208
    ]
  },
  {
    "type": "Identifier",
    "value": "U12",
    "start": 1209,
    "end": 1212,
    "range": [
      1209,
      1212
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Identifier",
    "value": "InstanceType",
    "start": 1215,
    "end": 1227,
    "range": [
      1215,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1228,
    "end": 1233,
    "range": [
      1228,
      1233
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1246,
    "end": 1250,
    "range": [
      1246,
      1250
    ]
  },
  {
    "type": "Identifier",
    "value": "U13",
    "start": 1251,
    "end": 1254,
    "range": [
      1251,
      1254
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "Identifier",
    "value": "InstanceType",
    "start": 1257,
    "end": 1269,
    "range": [
      1257,
      1269
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1269,
    "end": 1270,
    "range": [
      1269,
      1270
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1270,
    "end": 1276,
    "range": [
      1270,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1289,
    "end": 1293,
    "range": [
      1289,
      1293
    ]
  },
  {
    "type": "Identifier",
    "value": "U14",
    "start": 1294,
    "end": 1297,
    "range": [
      1294,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Identifier",
    "value": "InstanceType",
    "start": 1300,
    "end": 1312,
    "range": [
      1300,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 1313,
    "end": 1321,
    "range": [
      1313,
      1321
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1322,
    "end": 1323,
    "range": [
      1322,
      1323
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1334,
    "end": 1338,
    "range": [
      1334,
      1338
    ]
  },
  {
    "type": "Identifier",
    "value": "U15",
    "start": 1339,
    "end": 1342,
    "range": [
      1339,
      1342
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1343,
    "end": 1344,
    "range": [
      1343,
      1344
    ]
  },
  {
    "type": "Identifier",
    "value": "InstanceType",
    "start": 1345,
    "end": 1357,
    "range": [
      1345,
      1357
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1357,
    "end": 1358,
    "range": [
      1357,
      1358
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1358,
    "end": 1364,
    "range": [
      1358,
      1364
    ]
  },
  {
    "type": "Identifier",
    "value": "Abstract",
    "start": 1365,
    "end": 1373,
    "range": [
      1365,
      1373
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1389,
    "end": 1393,
    "range": [
      1389,
      1393
    ]
  },
  {
    "type": "Identifier",
    "value": "U16",
    "start": 1394,
    "end": 1397,
    "range": [
      1394,
      1397
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1397,
    "end": 1398,
    "range": [
      1397,
      1398
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1400,
    "end": 1407,
    "range": [
      1400,
      1407
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1408,
    "end": 1411,
    "range": [
      1408,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Identifier",
    "value": "InstanceType",
    "start": 1417,
    "end": 1429,
    "range": [
      1417,
      1429
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1429,
    "end": 1430,
    "range": [
      1429,
      1430
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1430,
    "end": 1433,
    "range": [
      1430,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1435,
    "end": 1436,
    "range": [
      1435,
      1436
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1436,
    "end": 1437,
    "range": [
      1436,
      1437
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1438,
    "end": 1444,
    "range": [
      1438,
      1444
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1444,
    "end": 1445,
    "range": [
      1444,
      1445
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1446,
    "end": 1449,
    "range": [
      1446,
      1449
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1449,
    "end": 1453,
    "range": [
      1449,
      1453
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1453,
    "end": 1454,
    "range": [
      1453,
      1454
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1456,
    "end": 1457,
    "range": [
      1456,
      1457
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1458,
    "end": 1460,
    "range": [
      1458,
      1460
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1463,
    "end": 1464,
    "range": [
      1463,
      1464
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1464,
    "end": 1465,
    "range": [
      1464,
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
    "type": "Identifier",
    "value": "type",
    "start": 1475,
    "end": 1479,
    "range": [
      1475,
      1479
    ]
  },
  {
    "type": "Identifier",
    "value": "U17",
    "start": 1480,
    "end": 1483,
    "range": [
      1480,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1484,
    "end": 1485,
    "range": [
      1484,
      1485
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1486,
    "end": 1493,
    "range": [
      1486,
      1493
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1494,
    "end": 1497,
    "range": [
      1494,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1501,
    "end": 1502,
    "range": [
      1501,
      1502
    ]
  },
  {
    "type": "Identifier",
    "value": "InstanceType",
    "start": 1503,
    "end": 1515,
    "range": [
      1503,
      1515
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1515,
    "end": 1516,
    "range": [
      1515,
      1516
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 1516,
    "end": 1524,
    "range": [
      1516,
      1524
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1525,
    "end": 1528,
    "range": [
      1525,
      1528
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1529,
    "end": 1530,
    "range": [
      1529,
      1530
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1531,
    "end": 1532,
    "range": [
      1531,
      1532
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1533,
    "end": 1539,
    "range": [
      1533,
      1539
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1539,
    "end": 1540,
    "range": [
      1539,
      1540
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1541,
    "end": 1544,
    "range": [
      1541,
      1544
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1544,
    "end": 1548,
    "range": [
      1544,
      1548
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1548,
    "end": 1549,
    "range": [
      1548,
      1549
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1550,
    "end": 1551,
    "range": [
      1550,
      1551
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1551,
    "end": 1552,
    "range": [
      1551,
      1552
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1553,
    "end": 1555,
    "range": [
      1553,
      1555
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1557,
    "end": 1558,
    "range": [
      1557,
      1558
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1558,
    "end": 1559,
    "range": [
      1558,
      1559
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1559,
    "end": 1560,
    "range": [
      1559,
      1560
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1560,
    "end": 1561,
    "range": [
      1560,
      1561
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1571,
    "end": 1575,
    "range": [
      1571,
      1575
    ]
  },
  {
    "type": "Identifier",
    "value": "ArgumentType",
    "start": 1576,
    "end": 1588,
    "range": [
      1576,
      1588
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1588,
    "end": 1589,
    "range": [
      1588,
      1589
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1589,
    "end": 1590,
    "range": [
      1589,
      1590
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1591,
    "end": 1598,
    "range": [
      1591,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1599,
    "end": 1600,
    "range": [
      1599,
      1600
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1600,
    "end": 1601,
    "range": [
      1600,
      1601
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1601,
    "end": 1602,
    "range": [
      1601,
      1602
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1603,
    "end": 1606,
    "range": [
      1603,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1608,
    "end": 1610,
    "range": [
      1608,
      1610
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1611,
    "end": 1614,
    "range": [
      1611,
      1614
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1614,
    "end": 1615,
    "range": [
      1614,
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
    "type": "Identifier",
    "value": "T",
    "start": 1618,
    "end": 1619,
    "range": [
      1618,
      1619
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1620,
    "end": 1627,
    "range": [
      1620,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1628,
    "end": 1629,
    "range": [
      1628,
      1629
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1630,
    "end": 1631,
    "range": [
      1630,
      1631
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1632,
    "end": 1637,
    "range": [
      1632,
      1637
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1639,
    "end": 1640,
    "range": [
      1639,
      1640
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1641,
    "end": 1643,
    "range": [
      1641,
      1643
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1644,
    "end": 1647,
    "range": [
      1644,
      1647
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1654,
    "end": 1657,
    "range": [
      1654,
      1657
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1657,
    "end": 1658,
    "range": [
      1657,
      1658
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1660,
    "end": 1664,
    "range": [
      1660,
      1664
    ]
  },
  {
    "type": "Identifier",
    "value": "T20",
    "start": 1665,
    "end": 1668,
    "range": [
      1665,
      1668
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Identifier",
    "value": "ArgumentType",
    "start": 1671,
    "end": 1683,
    "range": [
      1671,
      1683
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1683,
    "end": 1684,
    "range": [
      1683,
      1684
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1684,
    "end": 1685,
    "range": [
      1684,
      1685
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1685,
    "end": 1686,
    "range": [
      1685,
      1686
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1687,
    "end": 1689,
    "range": [
      1687,
      1689
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1690,
    "end": 1694,
    "range": [
      1690,
      1694
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1694,
    "end": 1695,
    "range": [
      1694,
      1695
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1695,
    "end": 1696,
    "range": [
      1695,
      1696
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1704,
    "end": 1708,
    "range": [
      1704,
      1708
    ]
  },
  {
    "type": "Identifier",
    "value": "T21",
    "start": 1709,
    "end": 1712,
    "range": [
      1709,
      1712
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1713,
    "end": 1714,
    "range": [
      1713,
      1714
    ]
  },
  {
    "type": "Identifier",
    "value": "ArgumentType",
    "start": 1715,
    "end": 1727,
    "range": [
      1715,
      1727
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1727,
    "end": 1728,
    "range": [
      1727,
      1728
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1729,
    "end": 1730,
    "range": [
      1729,
      1730
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1730,
    "end": 1731,
    "range": [
      1730,
      1731
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1732,
    "end": 1738,
    "range": [
      1732,
      1738
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1738,
    "end": 1739,
    "range": [
      1738,
      1739
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1740,
    "end": 1742,
    "range": [
      1740,
      1742
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1743,
    "end": 1749,
    "range": [
      1743,
      1749
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1749,
    "end": 1750,
    "range": [
      1749,
      1750
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1750,
    "end": 1751,
    "range": [
      1750,
      1751
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1763,
    "end": 1767,
    "range": [
      1763,
      1767
    ]
  },
  {
    "type": "Identifier",
    "value": "T22",
    "start": 1768,
    "end": 1771,
    "range": [
      1768,
      1771
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1772,
    "end": 1773,
    "range": [
      1772,
      1773
    ]
  },
  {
    "type": "Identifier",
    "value": "ArgumentType",
    "start": 1774,
    "end": 1786,
    "range": [
      1774,
      1786
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1786,
    "end": 1787,
    "range": [
      1786,
      1787
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1787,
    "end": 1788,
    "range": [
      1787,
      1788
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1788,
    "end": 1789,
    "range": [
      1788,
      1789
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1789,
    "end": 1790,
    "range": [
      1789,
      1790
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1790,
    "end": 1791,
    "range": [
      1790,
      1791
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1792,
    "end": 1798,
    "range": [
      1792,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1800,
    "end": 1802,
    "range": [
      1800,
      1802
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1803,
    "end": 1809,
    "range": [
      1803,
      1809
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1835,
    "end": 1839,
    "range": [
      1835,
      1839
    ]
  },
  {
    "type": "Identifier",
    "value": "T23",
    "start": 1840,
    "end": 1843,
    "range": [
      1840,
      1843
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1844,
    "end": 1845,
    "range": [
      1844,
      1845
    ]
  },
  {
    "type": "Identifier",
    "value": "ArgumentType",
    "start": 1846,
    "end": 1858,
    "range": [
      1846,
      1858
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1858,
    "end": 1859,
    "range": [
      1858,
      1859
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1859,
    "end": 1860,
    "range": [
      1859,
      1860
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1860,
    "end": 1863,
    "range": [
      1860,
      1863
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1863,
    "end": 1867,
    "range": [
      1863,
      1867
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1867,
    "end": 1868,
    "range": [
      1867,
      1868
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1869,
    "end": 1875,
    "range": [
      1869,
      1875
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1875,
    "end": 1876,
    "range": [
      1875,
      1876
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1876,
    "end": 1877,
    "range": [
      1876,
      1877
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1877,
    "end": 1878,
    "range": [
      1877,
      1878
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1879,
    "end": 1881,
    "range": [
      1879,
      1881
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1882,
    "end": 1888,
    "range": [
      1882,
      1888
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1888,
    "end": 1889,
    "range": [
      1888,
      1889
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1902,
    "end": 1906,
    "range": [
      1902,
      1906
    ]
  },
  {
    "type": "Identifier",
    "value": "T24",
    "start": 1907,
    "end": 1910,
    "range": [
      1907,
      1910
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1911,
    "end": 1912,
    "range": [
      1911,
      1912
    ]
  },
  {
    "type": "Identifier",
    "value": "ArgumentType",
    "start": 1913,
    "end": 1925,
    "range": [
      1913,
      1925
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1925,
    "end": 1926,
    "range": [
      1925,
      1926
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1926,
    "end": 1927,
    "range": [
      1926,
      1927
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1927,
    "end": 1928,
    "range": [
      1927,
      1928
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1928,
    "end": 1929,
    "range": [
      1928,
      1929
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1930,
    "end": 1936,
    "range": [
      1930,
      1936
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1936,
    "end": 1937,
    "range": [
      1936,
      1937
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1938,
    "end": 1939,
    "range": [
      1938,
      1939
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1941,
    "end": 1947,
    "range": [
      1941,
      1947
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1947,
    "end": 1948,
    "range": [
      1947,
      1948
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1949,
    "end": 1951,
    "range": [
      1949,
      1951
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1952,
    "end": 1958,
    "range": [
      1952,
      1958
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1958,
    "end": 1959,
    "range": [
      1958,
      1959
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1959,
    "end": 1960,
    "range": [
      1959,
      1960
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1971,
    "end": 1975,
    "range": [
      1971,
      1975
    ]
  },
  {
    "type": "Identifier",
    "value": "T25",
    "start": 1976,
    "end": 1979,
    "range": [
      1976,
      1979
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1980,
    "end": 1981,
    "range": [
      1980,
      1981
    ]
  },
  {
    "type": "Identifier",
    "value": "ArgumentType",
    "start": 1982,
    "end": 1994,
    "range": [
      1982,
      1994
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1994,
    "end": 1995,
    "range": [
      1994,
      1995
    ]
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 1995,
    "end": 2003,
    "range": [
      1995,
      2003
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2003,
    "end": 2004,
    "range": [
      2003,
      2004
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2004,
    "end": 2005,
    "range": [
      2004,
      2005
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2016,
    "end": 2020,
    "range": [
      2016,
      2020
    ]
  },
  {
    "type": "Identifier",
    "value": "T26",
    "start": 2021,
    "end": 2024,
    "range": [
      2021,
      2024
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2025,
    "end": 2026,
    "range": [
      2025,
      2026
    ]
  },
  {
    "type": "Identifier",
    "value": "ArgumentType",
    "start": 2027,
    "end": 2039,
    "range": [
      2027,
      2039
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2039,
    "end": 2040,
    "range": [
      2039,
      2040
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2040,
    "end": 2043,
    "range": [
      2040,
      2043
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2043,
    "end": 2044,
    "range": [
      2043,
      2044
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2044,
    "end": 2045,
    "range": [
      2044,
      2045
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2054,
    "end": 2058,
    "range": [
      2054,
      2058
    ]
  },
  {
    "type": "Identifier",
    "value": "T27",
    "start": 2059,
    "end": 2062,
    "range": [
      2059,
      2062
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2063,
    "end": 2064,
    "range": [
      2063,
      2064
    ]
  },
  {
    "type": "Identifier",
    "value": "ArgumentType",
    "start": 2065,
    "end": 2077,
    "range": [
      2065,
      2077
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2077,
    "end": 2078,
    "range": [
      2077,
      2078
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2078,
    "end": 2083,
    "range": [
      2078,
      2083
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2083,
    "end": 2084,
    "range": [
      2083,
      2084
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2084,
    "end": 2085,
    "range": [
      2084,
      2085
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2097,
    "end": 2101,
    "range": [
      2097,
      2101
    ]
  },
  {
    "type": "Identifier",
    "value": "X1",
    "start": 2102,
    "end": 2104,
    "range": [
      2102,
      2104
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2104,
    "end": 2105,
    "range": [
      2104,
      2105
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2105,
    "end": 2106,
    "range": [
      2105,
      2106
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2107,
    "end": 2114,
    "range": [
      2107,
      2114
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2115,
    "end": 2116,
    "range": [
      2115,
      2116
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2117,
    "end": 2118,
    "range": [
      2117,
      2118
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2118,
    "end": 2119,
    "range": [
      2118,
      2119
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2120,
    "end": 2123,
    "range": [
      2120,
      2123
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2123,
    "end": 2124,
    "range": [
      2123,
      2124
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2125,
    "end": 2126,
    "range": [
      2125,
      2126
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2126,
    "end": 2127,
    "range": [
      2126,
      2127
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2128,
    "end": 2131,
    "range": [
      2128,
      2131
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2132,
    "end": 2133,
    "range": [
      2132,
      2133
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2133,
    "end": 2134,
    "range": [
      2133,
      2134
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2135,
    "end": 2136,
    "range": [
      2135,
      2136
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2137,
    "end": 2138,
    "range": [
      2137,
      2138
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2139,
    "end": 2146,
    "range": [
      2139,
      2146
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2147,
    "end": 2148,
    "range": [
      2147,
      2148
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2149,
    "end": 2150,
    "range": [
      2149,
      2150
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2150,
    "end": 2151,
    "range": [
      2150,
      2151
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2152,
    "end": 2157,
    "range": [
      2152,
      2157
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 2158,
    "end": 2159,
    "range": [
      2158,
      2159
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2161,
    "end": 2162,
    "range": [
      2161,
      2162
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2162,
    "end": 2163,
    "range": [
      2162,
      2163
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2164,
    "end": 2169,
    "range": [
      2164,
      2169
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 2170,
    "end": 2171,
    "range": [
      2170,
      2171
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2172,
    "end": 2173,
    "range": [
      2172,
      2173
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2174,
    "end": 2175,
    "range": [
      2174,
      2175
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2176,
    "end": 2177,
    "range": [
      2176,
      2177
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 2177,
    "end": 2178,
    "range": [
      2177,
      2178
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2178,
    "end": 2179,
    "range": [
      2178,
      2179
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 2180,
    "end": 2181,
    "range": [
      2180,
      2181
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2181,
    "end": 2182,
    "range": [
      2181,
      2182
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2183,
    "end": 2184,
    "range": [
      2183,
      2184
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2185,
    "end": 2188,
    "range": [
      2185,
      2188
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2188,
    "end": 2189,
    "range": [
      2188,
      2189
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2191,
    "end": 2195,
    "range": [
      2191,
      2195
    ]
  },
  {
    "type": "Identifier",
    "value": "T30",
    "start": 2196,
    "end": 2199,
    "range": [
      2196,
      2199
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2200,
    "end": 2201,
    "range": [
      2200,
      2201
    ]
  },
  {
    "type": "Identifier",
    "value": "X1",
    "start": 2202,
    "end": 2204,
    "range": [
      2202,
      2204
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2204,
    "end": 2205,
    "range": [
      2204,
      2205
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2205,
    "end": 2206,
    "range": [
      2205,
      2206
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2207,
    "end": 2208,
    "range": [
      2207,
      2208
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2208,
    "end": 2209,
    "range": [
      2208,
      2209
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2210,
    "end": 2213,
    "range": [
      2210,
      2213
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2213,
    "end": 2214,
    "range": [
      2213,
      2214
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2215,
    "end": 2216,
    "range": [
      2215,
      2216
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2216,
    "end": 2217,
    "range": [
      2216,
      2217
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2218,
    "end": 2221,
    "range": [
      2218,
      2221
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2222,
    "end": 2223,
    "range": [
      2222,
      2223
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2223,
    "end": 2224,
    "range": [
      2223,
      2224
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2224,
    "end": 2225,
    "range": [
      2224,
      2225
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2241,
    "end": 2245,
    "range": [
      2241,
      2245
    ]
  },
  {
    "type": "Identifier",
    "value": "T31",
    "start": 2246,
    "end": 2249,
    "range": [
      2246,
      2249
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2250,
    "end": 2251,
    "range": [
      2250,
      2251
    ]
  },
  {
    "type": "Identifier",
    "value": "X1",
    "start": 2252,
    "end": 2254,
    "range": [
      2252,
      2254
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2254,
    "end": 2255,
    "range": [
      2254,
      2255
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2255,
    "end": 2256,
    "range": [
      2255,
      2256
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2257,
    "end": 2258,
    "range": [
      2257,
      2258
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2258,
    "end": 2259,
    "range": [
      2258,
      2259
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2260,
    "end": 2266,
    "range": [
      2260,
      2266
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2266,
    "end": 2267,
    "range": [
      2266,
      2267
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2268,
    "end": 2269,
    "range": [
      2268,
      2269
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2269,
    "end": 2270,
    "range": [
      2269,
      2270
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2271,
    "end": 2277,
    "range": [
      2271,
      2277
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2278,
    "end": 2279,
    "range": [
      2278,
      2279
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2279,
    "end": 2280,
    "range": [
      2279,
      2280
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2280,
    "end": 2281,
    "range": [
      2280,
      2281
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2303,
    "end": 2307,
    "range": [
      2303,
      2307
    ]
  },
  {
    "type": "Identifier",
    "value": "T32",
    "start": 2308,
    "end": 2311,
    "range": [
      2308,
      2311
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2312,
    "end": 2313,
    "range": [
      2312,
      2313
    ]
  },
  {
    "type": "Identifier",
    "value": "X1",
    "start": 2314,
    "end": 2316,
    "range": [
      2314,
      2316
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2316,
    "end": 2317,
    "range": [
      2316,
      2317
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2317,
    "end": 2318,
    "range": [
      2317,
      2318
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2319,
    "end": 2320,
    "range": [
      2319,
      2320
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2320,
    "end": 2321,
    "range": [
      2320,
      2321
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2322,
    "end": 2328,
    "range": [
      2322,
      2328
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2328,
    "end": 2329,
    "range": [
      2328,
      2329
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2330,
    "end": 2331,
    "range": [
      2330,
      2331
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2331,
    "end": 2332,
    "range": [
      2331,
      2332
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2333,
    "end": 2339,
    "range": [
      2333,
      2339
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2339,
    "end": 2340,
    "range": [
      2339,
      2340
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2341,
    "end": 2342,
    "range": [
      2341,
      2342
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2342,
    "end": 2343,
    "range": [
      2342,
      2343
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2344,
    "end": 2351,
    "range": [
      2344,
      2351
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2352,
    "end": 2353,
    "range": [
      2352,
      2353
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2353,
    "end": 2354,
    "range": [
      2353,
      2354
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2354,
    "end": 2355,
    "range": [
      2354,
      2355
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2378,
    "end": 2382,
    "range": [
      2378,
      2382
    ]
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 2383,
    "end": 2385,
    "range": [
      2383,
      2385
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2385,
    "end": 2386,
    "range": [
      2385,
      2386
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2386,
    "end": 2387,
    "range": [
      2386,
      2387
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2387,
    "end": 2388,
    "range": [
      2387,
      2388
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2389,
    "end": 2390,
    "range": [
      2389,
      2390
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2391,
    "end": 2392,
    "range": [
      2391,
      2392
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2393,
    "end": 2400,
    "range": [
      2393,
      2400
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2401,
    "end": 2402,
    "range": [
      2401,
      2402
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2403,
    "end": 2404,
    "range": [
      2403,
      2404
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2404,
    "end": 2405,
    "range": [
      2404,
      2405
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2406,
    "end": 2411,
    "range": [
      2406,
      2411
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2412,
    "end": 2413,
    "range": [
      2412,
      2413
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2413,
    "end": 2414,
    "range": [
      2413,
      2414
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2415,
    "end": 2416,
    "range": [
      2415,
      2416
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2416,
    "end": 2417,
    "range": [
      2416,
      2417
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2418,
    "end": 2423,
    "range": [
      2418,
      2423
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2424,
    "end": 2425,
    "range": [
      2424,
      2425
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2426,
    "end": 2427,
    "range": [
      2426,
      2427
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2428,
    "end": 2429,
    "range": [
      2428,
      2429
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2430,
    "end": 2431,
    "range": [
      2430,
      2431
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2432,
    "end": 2433,
    "range": [
      2432,
      2433
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2434,
    "end": 2439,
    "range": [
      2434,
      2439
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2439,
    "end": 2440,
    "range": [
      2439,
      2440
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2442,
    "end": 2446,
    "range": [
      2442,
      2446
    ]
  },
  {
    "type": "Identifier",
    "value": "T40",
    "start": 2447,
    "end": 2450,
    "range": [
      2447,
      2450
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2451,
    "end": 2452,
    "range": [
      2451,
      2452
    ]
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 2453,
    "end": 2455,
    "range": [
      2453,
      2455
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2455,
    "end": 2456,
    "range": [
      2455,
      2456
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2456,
    "end": 2457,
    "range": [
      2456,
      2457
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2457,
    "end": 2458,
    "range": [
      2457,
      2458
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2458,
    "end": 2459,
    "range": [
      2458,
      2459
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2459,
    "end": 2460,
    "range": [
      2459,
      2460
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2471,
    "end": 2475,
    "range": [
      2471,
      2475
    ]
  },
  {
    "type": "Identifier",
    "value": "T41",
    "start": 2476,
    "end": 2479,
    "range": [
      2476,
      2479
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2480,
    "end": 2481,
    "range": [
      2480,
      2481
    ]
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 2482,
    "end": 2484,
    "range": [
      2482,
      2484
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2484,
    "end": 2485,
    "range": [
      2484,
      2485
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2485,
    "end": 2486,
    "range": [
      2485,
      2486
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2487,
    "end": 2488,
    "range": [
      2487,
      2488
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2488,
    "end": 2489,
    "range": [
      2488,
      2489
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2490,
    "end": 2496,
    "range": [
      2490,
      2496
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2497,
    "end": 2498,
    "range": [
      2497,
      2498
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2498,
    "end": 2499,
    "range": [
      2498,
      2499
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2499,
    "end": 2500,
    "range": [
      2499,
      2500
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2511,
    "end": 2515,
    "range": [
      2511,
      2515
    ]
  },
  {
    "type": "Identifier",
    "value": "T42",
    "start": 2516,
    "end": 2519,
    "range": [
      2516,
      2519
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2520,
    "end": 2521,
    "range": [
      2520,
      2521
    ]
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 2522,
    "end": 2524,
    "range": [
      2522,
      2524
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2524,
    "end": 2525,
    "range": [
      2524,
      2525
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2525,
    "end": 2526,
    "range": [
      2525,
      2526
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2527,
    "end": 2528,
    "range": [
      2527,
      2528
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2528,
    "end": 2529,
    "range": [
      2528,
      2529
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2530,
    "end": 2536,
    "range": [
      2530,
      2536
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2536,
    "end": 2537,
    "range": [
      2536,
      2537
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2538,
    "end": 2539,
    "range": [
      2538,
      2539
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2539,
    "end": 2540,
    "range": [
      2539,
      2540
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2541,
    "end": 2547,
    "range": [
      2541,
      2547
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2548,
    "end": 2549,
    "range": [
      2548,
      2549
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2549,
    "end": 2550,
    "range": [
      2549,
      2550
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2550,
    "end": 2551,
    "range": [
      2550,
      2551
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2563,
    "end": 2567,
    "range": [
      2563,
      2567
    ]
  },
  {
    "type": "Identifier",
    "value": "T43",
    "start": 2568,
    "end": 2571,
    "range": [
      2568,
      2571
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2572,
    "end": 2573,
    "range": [
      2572,
      2573
    ]
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 2574,
    "end": 2576,
    "range": [
      2574,
      2576
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2576,
    "end": 2577,
    "range": [
      2576,
      2577
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2577,
    "end": 2578,
    "range": [
      2577,
      2578
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2579,
    "end": 2580,
    "range": [
      2579,
      2580
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2580,
    "end": 2581,
    "range": [
      2580,
      2581
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2582,
    "end": 2588,
    "range": [
      2582,
      2588
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2588,
    "end": 2589,
    "range": [
      2588,
      2589
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2590,
    "end": 2591,
    "range": [
      2590,
      2591
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2591,
    "end": 2592,
    "range": [
      2591,
      2592
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2593,
    "end": 2599,
    "range": [
      2593,
      2599
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2600,
    "end": 2601,
    "range": [
      2600,
      2601
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2601,
    "end": 2602,
    "range": [
      2601,
      2602
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2602,
    "end": 2603,
    "range": [
      2602,
      2603
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2624,
    "end": 2628,
    "range": [
      2624,
      2628
    ]
  },
  {
    "type": "Identifier",
    "value": "T44",
    "start": 2629,
    "end": 2632,
    "range": [
      2629,
      2632
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2633,
    "end": 2634,
    "range": [
      2633,
      2634
    ]
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 2635,
    "end": 2637,
    "range": [
      2635,
      2637
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2637,
    "end": 2638,
    "range": [
      2637,
      2638
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2638,
    "end": 2639,
    "range": [
      2638,
      2639
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2640,
    "end": 2641,
    "range": [
      2640,
      2641
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2641,
    "end": 2642,
    "range": [
      2641,
      2642
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2643,
    "end": 2649,
    "range": [
      2643,
      2649
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2649,
    "end": 2650,
    "range": [
      2649,
      2650
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2651,
    "end": 2652,
    "range": [
      2651,
      2652
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2652,
    "end": 2653,
    "range": [
      2652,
      2653
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2654,
    "end": 2660,
    "range": [
      2654,
      2660
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2660,
    "end": 2661,
    "range": [
      2660,
      2661
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2662,
    "end": 2663,
    "range": [
      2662,
      2663
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2663,
    "end": 2664,
    "range": [
      2663,
      2664
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2665,
    "end": 2672,
    "range": [
      2665,
      2672
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2673,
    "end": 2674,
    "range": [
      2673,
      2674
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2674,
    "end": 2675,
    "range": [
      2674,
      2675
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2675,
    "end": 2676,
    "range": [
      2675,
      2676
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2698,
    "end": 2702,
    "range": [
      2698,
      2702
    ]
  },
  {
    "type": "Identifier",
    "value": "X3",
    "start": 2703,
    "end": 2705,
    "range": [
      2703,
      2705
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2705,
    "end": 2706,
    "range": [
      2705,
      2706
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2706,
    "end": 2707,
    "range": [
      2706,
      2707
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2707,
    "end": 2708,
    "range": [
      2707,
      2708
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2709,
    "end": 2710,
    "range": [
      2709,
      2710
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2711,
    "end": 2712,
    "range": [
      2711,
      2712
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2713,
    "end": 2720,
    "range": [
      2713,
      2720
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2721,
    "end": 2722,
    "range": [
      2721,
      2722
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2723,
    "end": 2724,
    "range": [
      2723,
      2724
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2724,
    "end": 2725,
    "range": [
      2724,
      2725
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
    "type": "Identifier",
    "value": "x",
    "start": 2727,
    "end": 2728,
    "range": [
      2727,
      2728
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2728,
    "end": 2729,
    "range": [
      2728,
      2729
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2730,
    "end": 2735,
    "range": [
      2730,
      2735
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2736,
    "end": 2737,
    "range": [
      2736,
      2737
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2737,
    "end": 2738,
    "range": [
      2737,
      2738
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2739,
    "end": 2741,
    "range": [
      2739,
      2741
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2742,
    "end": 2746,
    "range": [
      2742,
      2746
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2746,
    "end": 2747,
    "range": [
      2746,
      2747
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2748,
    "end": 2749,
    "range": [
      2748,
      2749
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2749,
    "end": 2750,
    "range": [
      2749,
      2750
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2751,
    "end": 2752,
    "range": [
      2751,
      2752
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2752,
    "end": 2753,
    "range": [
      2752,
      2753
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2753,
    "end": 2754,
    "range": [
      2753,
      2754
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2755,
    "end": 2760,
    "range": [
      2755,
      2760
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2761,
    "end": 2762,
    "range": [
      2761,
      2762
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2762,
    "end": 2763,
    "range": [
      2762,
      2763
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2764,
    "end": 2766,
    "range": [
      2764,
      2766
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2767,
    "end": 2771,
    "range": [
      2767,
      2771
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2772,
    "end": 2773,
    "range": [
      2772,
      2773
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2774,
    "end": 2775,
    "range": [
      2774,
      2775
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2776,
    "end": 2777,
    "range": [
      2776,
      2777
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2778,
    "end": 2779,
    "range": [
      2778,
      2779
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2780,
    "end": 2785,
    "range": [
      2780,
      2785
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2785,
    "end": 2786,
    "range": [
      2785,
      2786
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2788,
    "end": 2792,
    "range": [
      2788,
      2792
    ]
  },
  {
    "type": "Identifier",
    "value": "T50",
    "start": 2793,
    "end": 2796,
    "range": [
      2793,
      2796
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2797,
    "end": 2798,
    "range": [
      2797,
      2798
    ]
  },
  {
    "type": "Identifier",
    "value": "X3",
    "start": 2799,
    "end": 2801,
    "range": [
      2799,
      2801
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2801,
    "end": 2802,
    "range": [
      2801,
      2802
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2802,
    "end": 2803,
    "range": [
      2802,
      2803
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2803,
    "end": 2804,
    "range": [
      2803,
      2804
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2804,
    "end": 2805,
    "range": [
      2804,
      2805
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2805,
    "end": 2806,
    "range": [
      2805,
      2806
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2817,
    "end": 2821,
    "range": [
      2817,
      2821
    ]
  },
  {
    "type": "Identifier",
    "value": "T51",
    "start": 2822,
    "end": 2825,
    "range": [
      2822,
      2825
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2826,
    "end": 2827,
    "range": [
      2826,
      2827
    ]
  },
  {
    "type": "Identifier",
    "value": "X3",
    "start": 2828,
    "end": 2830,
    "range": [
      2828,
      2830
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2830,
    "end": 2831,
    "range": [
      2830,
      2831
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2831,
    "end": 2832,
    "range": [
      2831,
      2832
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2833,
    "end": 2834,
    "range": [
      2833,
      2834
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2834,
    "end": 2835,
    "range": [
      2834,
      2835
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2836,
    "end": 2837,
    "range": [
      2836,
      2837
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2837,
    "end": 2838,
    "range": [
      2837,
      2838
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2838,
    "end": 2839,
    "range": [
      2838,
      2839
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2840,
    "end": 2846,
    "range": [
      2840,
      2846
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2846,
    "end": 2847,
    "range": [
      2846,
      2847
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2848,
    "end": 2850,
    "range": [
      2848,
      2850
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2851,
    "end": 2855,
    "range": [
      2851,
      2855
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2856,
    "end": 2857,
    "range": [
      2856,
      2857
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2857,
    "end": 2858,
    "range": [
      2857,
      2858
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2858,
    "end": 2859,
    "range": [
      2858,
      2859
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2870,
    "end": 2874,
    "range": [
      2870,
      2874
    ]
  },
  {
    "type": "Identifier",
    "value": "T52",
    "start": 2875,
    "end": 2878,
    "range": [
      2875,
      2878
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2879,
    "end": 2880,
    "range": [
      2879,
      2880
    ]
  },
  {
    "type": "Identifier",
    "value": "X3",
    "start": 2881,
    "end": 2883,
    "range": [
      2881,
      2883
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2883,
    "end": 2884,
    "range": [
      2883,
      2884
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2884,
    "end": 2885,
    "range": [
      2884,
      2885
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2886,
    "end": 2887,
    "range": [
      2886,
      2887
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2887,
    "end": 2888,
    "range": [
      2887,
      2888
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2889,
    "end": 2890,
    "range": [
      2889,
      2890
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2890,
    "end": 2891,
    "range": [
      2890,
      2891
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2891,
    "end": 2892,
    "range": [
      2891,
      2892
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2893,
    "end": 2899,
    "range": [
      2893,
      2899
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2899,
    "end": 2900,
    "range": [
      2899,
      2900
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2901,
    "end": 2903,
    "range": [
      2901,
      2903
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2904,
    "end": 2908,
    "range": [
      2904,
      2908
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2908,
    "end": 2909,
    "range": [
      2908,
      2909
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2910,
    "end": 2911,
    "range": [
      2910,
      2911
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2911,
    "end": 2912,
    "range": [
      2911,
      2912
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2913,
    "end": 2914,
    "range": [
      2913,
      2914
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2914,
    "end": 2915,
    "range": [
      2914,
      2915
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2915,
    "end": 2916,
    "range": [
      2915,
      2916
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2917,
    "end": 2923,
    "range": [
      2917,
      2923
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2923,
    "end": 2924,
    "range": [
      2923,
      2924
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2925,
    "end": 2927,
    "range": [
      2925,
      2927
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2928,
    "end": 2932,
    "range": [
      2928,
      2932
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2933,
    "end": 2934,
    "range": [
      2933,
      2934
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2934,
    "end": 2935,
    "range": [
      2934,
      2935
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2935,
    "end": 2936,
    "range": [
      2935,
      2936
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2948,
    "end": 2952,
    "range": [
      2948,
      2952
    ]
  },
  {
    "type": "Identifier",
    "value": "T53",
    "start": 2953,
    "end": 2956,
    "range": [
      2953,
      2956
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2957,
    "end": 2958,
    "range": [
      2957,
      2958
    ]
  },
  {
    "type": "Identifier",
    "value": "X3",
    "start": 2959,
    "end": 2961,
    "range": [
      2959,
      2961
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2961,
    "end": 2962,
    "range": [
      2961,
      2962
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2962,
    "end": 2963,
    "range": [
      2962,
      2963
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2964,
    "end": 2965,
    "range": [
      2964,
      2965
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2965,
    "end": 2966,
    "range": [
      2965,
      2966
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2967,
    "end": 2968,
    "range": [
      2967,
      2968
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2968,
    "end": 2969,
    "range": [
      2968,
      2969
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2969,
    "end": 2970,
    "range": [
      2969,
      2970
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2971,
    "end": 2977,
    "range": [
      2971,
      2977
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2977,
    "end": 2978,
    "range": [
      2977,
      2978
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2979,
    "end": 2981,
    "range": [
      2979,
      2981
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2982,
    "end": 2986,
    "range": [
      2982,
      2986
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2986,
    "end": 2987,
    "range": [
      2986,
      2987
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2988,
    "end": 2989,
    "range": [
      2988,
      2989
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2989,
    "end": 2990,
    "range": [
      2989,
      2990
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2991,
    "end": 2992,
    "range": [
      2991,
      2992
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2992,
    "end": 2993,
    "range": [
      2992,
      2993
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2993,
    "end": 2994,
    "range": [
      2993,
      2994
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2995,
    "end": 3001,
    "range": [
      2995,
      3001
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3001,
    "end": 3002,
    "range": [
      3001,
      3002
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3003,
    "end": 3005,
    "range": [
      3003,
      3005
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3006,
    "end": 3010,
    "range": [
      3006,
      3010
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3011,
    "end": 3012,
    "range": [
      3011,
      3012
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3012,
    "end": 3013,
    "range": [
      3012,
      3013
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3013,
    "end": 3014,
    "range": [
      3013,
      3014
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3025,
    "end": 3029,
    "range": [
      3025,
      3029
    ]
  },
  {
    "type": "Identifier",
    "value": "T54",
    "start": 3030,
    "end": 3033,
    "range": [
      3030,
      3033
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3034,
    "end": 3035,
    "range": [
      3034,
      3035
    ]
  },
  {
    "type": "Identifier",
    "value": "X3",
    "start": 3036,
    "end": 3038,
    "range": [
      3036,
      3038
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3038,
    "end": 3039,
    "range": [
      3038,
      3039
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3039,
    "end": 3040,
    "range": [
      3039,
      3040
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3041,
    "end": 3042,
    "range": [
      3041,
      3042
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3042,
    "end": 3043,
    "range": [
      3042,
      3043
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3044,
    "end": 3045,
    "range": [
      3044,
      3045
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3045,
    "end": 3046,
    "range": [
      3045,
      3046
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3046,
    "end": 3047,
    "range": [
      3046,
      3047
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3048,
    "end": 3054,
    "range": [
      3048,
      3054
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3054,
    "end": 3055,
    "range": [
      3054,
      3055
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3056,
    "end": 3058,
    "range": [
      3056,
      3058
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3059,
    "end": 3063,
    "range": [
      3059,
      3063
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3063,
    "end": 3064,
    "range": [
      3063,
      3064
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3065,
    "end": 3066,
    "range": [
      3065,
      3066
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3066,
    "end": 3067,
    "range": [
      3066,
      3067
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3068,
    "end": 3069,
    "range": [
      3068,
      3069
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3069,
    "end": 3070,
    "range": [
      3069,
      3070
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3071,
    "end": 3073,
    "range": [
      3071,
      3073
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3074,
    "end": 3078,
    "range": [
      3074,
      3078
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3079,
    "end": 3080,
    "range": [
      3079,
      3080
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3080,
    "end": 3081,
    "range": [
      3080,
      3081
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3081,
    "end": 3082,
    "range": [
      3081,
      3082
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3095,
    "end": 3099,
    "range": [
      3095,
      3099
    ]
  },
  {
    "type": "Identifier",
    "value": "T60",
    "start": 3100,
    "end": 3103,
    "range": [
      3100,
      3103
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3104,
    "end": 3105,
    "range": [
      3104,
      3105
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3106,
    "end": 3111,
    "range": [
      3106,
      3111
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3112,
    "end": 3113,
    "range": [
      3112,
      3113
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3113,
    "end": 3114,
    "range": [
      3113,
      3114
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3125,
    "end": 3129,
    "range": [
      3125,
      3129
    ]
  },
  {
    "type": "Identifier",
    "value": "T61",
    "start": 3130,
    "end": 3133,
    "range": [
      3130,
      3133
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3133,
    "end": 3134,
    "range": [
      3133,
      3134
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3134,
    "end": 3135,
    "range": [
      3134,
      3135
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3135,
    "end": 3136,
    "range": [
      3135,
      3136
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3137,
    "end": 3138,
    "range": [
      3137,
      3138
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3139,
    "end": 3140,
    "range": [
      3139,
      3140
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3140,
    "end": 3145,
    "range": [
      3140,
      3145
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3146,
    "end": 3147,
    "range": [
      3146,
      3147
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3147,
    "end": 3148,
    "range": [
      3147,
      3148
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3149,
    "end": 3156,
    "range": [
      3149,
      3156
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3157,
    "end": 3162,
    "range": [
      3157,
      3162
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3163,
    "end": 3164,
    "range": [
      3163,
      3164
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3165,
    "end": 3166,
    "range": [
      3165,
      3166
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3167,
    "end": 3172,
    "range": [
      3167,
      3172
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3173,
    "end": 3174,
    "range": [
      3173,
      3174
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3175,
    "end": 3176,
    "range": [
      3175,
      3176
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3177,
    "end": 3182,
    "range": [
      3177,
      3182
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 3183,
    "end": 3184,
    "range": [
      3183,
      3184
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3184,
    "end": 3185,
    "range": [
      3184,
      3185
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3196,
    "end": 3200,
    "range": [
      3196,
      3200
    ]
  },
  {
    "type": "Identifier",
    "value": "T62",
    "start": 3201,
    "end": 3204,
    "range": [
      3201,
      3204
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3204,
    "end": 3205,
    "range": [
      3204,
      3205
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3205,
    "end": 3206,
    "range": [
      3205,
      3206
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3206,
    "end": 3207,
    "range": [
      3206,
      3207
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3208,
    "end": 3209,
    "range": [
      3208,
      3209
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3210,
    "end": 3211,
    "range": [
      3210,
      3211
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3212,
    "end": 3219,
    "range": [
      3212,
      3219
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3220,
    "end": 3221,
    "range": [
      3220,
      3221
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3221,
    "end": 3226,
    "range": [
      3221,
      3226
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3227,
    "end": 3228,
    "range": [
      3227,
      3228
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3228,
    "end": 3229,
    "range": [
      3228,
      3229
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3229,
    "end": 3230,
    "range": [
      3229,
      3230
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3230,
    "end": 3231,
    "range": [
      3230,
      3231
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3232,
    "end": 3233,
    "range": [
      3232,
      3233
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3234,
    "end": 3235,
    "range": [
      3234,
      3235
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3236,
    "end": 3237,
    "range": [
      3236,
      3237
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3238,
    "end": 3239,
    "range": [
      3238,
      3239
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3239,
    "end": 3240,
    "range": [
      3239,
      3240
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3251,
    "end": 3255,
    "range": [
      3251,
      3255
    ]
  },
  {
    "type": "Identifier",
    "value": "T63",
    "start": 3256,
    "end": 3259,
    "range": [
      3256,
      3259
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3259,
    "end": 3260,
    "range": [
      3259,
      3260
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3260,
    "end": 3261,
    "range": [
      3260,
      3261
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3261,
    "end": 3262,
    "range": [
      3261,
      3262
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3263,
    "end": 3264,
    "range": [
      3263,
      3264
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3265,
    "end": 3266,
    "range": [
      3265,
      3266
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3267,
    "end": 3274,
    "range": [
      3267,
      3274
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3275,
    "end": 3276,
    "range": [
      3275,
      3276
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3276,
    "end": 3277,
    "range": [
      3276,
      3277
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3277,
    "end": 3282,
    "range": [
      3277,
      3282
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3283,
    "end": 3284,
    "range": [
      3283,
      3284
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3284,
    "end": 3285,
    "range": [
      3284,
      3285
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3286,
    "end": 3293,
    "range": [
      3286,
      3293
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3294,
    "end": 3299,
    "range": [
      3294,
      3299
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3300,
    "end": 3301,
    "range": [
      3300,
      3301
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3302,
    "end": 3303,
    "range": [
      3302,
      3303
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3304,
    "end": 3309,
    "range": [
      3304,
      3309
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3310,
    "end": 3311,
    "range": [
      3310,
      3311
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3312,
    "end": 3313,
    "range": [
      3312,
      3313
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3314,
    "end": 3319,
    "range": [
      3314,
      3319
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 3320,
    "end": 3321,
    "range": [
      3320,
      3321
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3321,
    "end": 3322,
    "range": [
      3321,
      3322
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3323,
    "end": 3324,
    "range": [
      3323,
      3324
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3325,
    "end": 3331,
    "range": [
      3325,
      3331
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3332,
    "end": 3333,
    "range": [
      3332,
      3333
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3334,
    "end": 3340,
    "range": [
      3334,
      3340
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3340,
    "end": 3341,
    "range": [
      3340,
      3341
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3343,
    "end": 3347,
    "range": [
      3343,
      3347
    ]
  },
  {
    "type": "Identifier",
    "value": "T70",
    "start": 3348,
    "end": 3351,
    "range": [
      3348,
      3351
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3351,
    "end": 3352,
    "range": [
      3351,
      3352
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3352,
    "end": 3353,
    "range": [
      3352,
      3353
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3354,
    "end": 3361,
    "range": [
      3354,
      3361
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3362,
    "end": 3368,
    "range": [
      3362,
      3368
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3368,
    "end": 3369,
    "range": [
      3368,
      3369
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3370,
    "end": 3371,
    "range": [
      3370,
      3371
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3372,
    "end": 3373,
    "range": [
      3372,
      3373
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3374,
    "end": 3375,
    "range": [
      3374,
      3375
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3375,
    "end": 3376,
    "range": [
      3375,
      3376
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3377,
    "end": 3378,
    "range": [
      3377,
      3378
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3379,
    "end": 3380,
    "range": [
      3379,
      3380
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3380,
    "end": 3381,
    "range": [
      3380,
      3381
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3382,
    "end": 3386,
    "range": [
      3382,
      3386
    ]
  },
  {
    "type": "Identifier",
    "value": "T71",
    "start": 3387,
    "end": 3390,
    "range": [
      3387,
      3390
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3390,
    "end": 3391,
    "range": [
      3390,
      3391
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3391,
    "end": 3392,
    "range": [
      3391,
      3392
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3392,
    "end": 3393,
    "range": [
      3392,
      3393
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3394,
    "end": 3395,
    "range": [
      3394,
      3395
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3396,
    "end": 3397,
    "range": [
      3396,
      3397
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3398,
    "end": 3405,
    "range": [
      3398,
      3405
    ]
  },
  {
    "type": "Identifier",
    "value": "T70",
    "start": 3406,
    "end": 3409,
    "range": [
      3406,
      3409
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3409,
    "end": 3410,
    "range": [
      3409,
      3410
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3410,
    "end": 3415,
    "range": [
      3410,
      3415
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3416,
    "end": 3417,
    "range": [
      3416,
      3417
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3417,
    "end": 3418,
    "range": [
      3417,
      3418
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3419,
    "end": 3420,
    "range": [
      3419,
      3420
    ]
  },
  {
    "type": "Identifier",
    "value": "T70",
    "start": 3421,
    "end": 3424,
    "range": [
      3421,
      3424
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3424,
    "end": 3425,
    "range": [
      3424,
      3425
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3425,
    "end": 3426,
    "range": [
      3425,
      3426
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3426,
    "end": 3427,
    "range": [
      3426,
      3427
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3428,
    "end": 3429,
    "range": [
      3428,
      3429
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3430,
    "end": 3435,
    "range": [
      3430,
      3435
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3435,
    "end": 3436,
    "range": [
      3435,
      3436
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3438,
    "end": 3442,
    "range": [
      3438,
      3442
    ]
  },
  {
    "type": "Identifier",
    "value": "T72",
    "start": 3443,
    "end": 3446,
    "range": [
      3443,
      3446
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3446,
    "end": 3447,
    "range": [
      3446,
      3447
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3447,
    "end": 3448,
    "range": [
      3447,
      3448
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3449,
    "end": 3456,
    "range": [
      3449,
      3456
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3457,
    "end": 3463,
    "range": [
      3457,
      3463
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3463,
    "end": 3464,
    "range": [
      3463,
      3464
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3465,
    "end": 3466,
    "range": [
      3465,
      3466
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3467,
    "end": 3468,
    "range": [
      3467,
      3468
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3469,
    "end": 3470,
    "range": [
      3469,
      3470
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3470,
    "end": 3471,
    "range": [
      3470,
      3471
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3472,
    "end": 3473,
    "range": [
      3472,
      3473
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3474,
    "end": 3475,
    "range": [
      3474,
      3475
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3475,
    "end": 3476,
    "range": [
      3475,
      3476
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3477,
    "end": 3481,
    "range": [
      3477,
      3481
    ]
  },
  {
    "type": "Identifier",
    "value": "T73",
    "start": 3482,
    "end": 3485,
    "range": [
      3482,
      3485
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3485,
    "end": 3486,
    "range": [
      3485,
      3486
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3486,
    "end": 3487,
    "range": [
      3486,
      3487
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3487,
    "end": 3488,
    "range": [
      3487,
      3488
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3489,
    "end": 3490,
    "range": [
      3489,
      3490
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3491,
    "end": 3492,
    "range": [
      3491,
      3492
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3493,
    "end": 3500,
    "range": [
      3493,
      3500
    ]
  },
  {
    "type": "Identifier",
    "value": "T72",
    "start": 3501,
    "end": 3504,
    "range": [
      3501,
      3504
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3504,
    "end": 3505,
    "range": [
      3504,
      3505
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3505,
    "end": 3510,
    "range": [
      3505,
      3510
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3511,
    "end": 3512,
    "range": [
      3511,
      3512
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3512,
    "end": 3513,
    "range": [
      3512,
      3513
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3514,
    "end": 3515,
    "range": [
      3514,
      3515
    ]
  },
  {
    "type": "Identifier",
    "value": "T70",
    "start": 3516,
    "end": 3519,
    "range": [
      3516,
      3519
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3519,
    "end": 3520,
    "range": [
      3519,
      3520
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3520,
    "end": 3521,
    "range": [
      3520,
      3521
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3521,
    "end": 3522,
    "range": [
      3521,
      3522
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3523,
    "end": 3524,
    "range": [
      3523,
      3524
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3525,
    "end": 3530,
    "range": [
      3525,
      3530
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3530,
    "end": 3531,
    "range": [
      3530,
      3531
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3543,
    "end": 3547,
    "range": [
      3543,
      3547
    ]
  },
  {
    "type": "Identifier",
    "value": "T74",
    "start": 3548,
    "end": 3551,
    "range": [
      3548,
      3551
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3551,
    "end": 3552,
    "range": [
      3551,
      3552
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3552,
    "end": 3553,
    "range": [
      3552,
      3553
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3554,
    "end": 3561,
    "range": [
      3554,
      3561
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3562,
    "end": 3568,
    "range": [
      3562,
      3568
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3568,
    "end": 3569,
    "range": [
      3568,
      3569
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3570,
    "end": 3571,
    "range": [
      3570,
      3571
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3572,
    "end": 3579,
    "range": [
      3572,
      3579
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3580,
    "end": 3586,
    "range": [
      3580,
      3586
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3586,
    "end": 3587,
    "range": [
      3586,
      3587
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3588,
    "end": 3589,
    "range": [
      3588,
      3589
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3590,
    "end": 3591,
    "range": [
      3590,
      3591
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3592,
    "end": 3593,
    "range": [
      3592,
      3593
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3593,
    "end": 3594,
    "range": [
      3593,
      3594
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3595,
    "end": 3596,
    "range": [
      3595,
      3596
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3596,
    "end": 3597,
    "range": [
      3596,
      3597
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3598,
    "end": 3599,
    "range": [
      3598,
      3599
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3599,
    "end": 3600,
    "range": [
      3599,
      3600
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3601,
    "end": 3602,
    "range": [
      3601,
      3602
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3603,
    "end": 3604,
    "range": [
      3603,
      3604
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3604,
    "end": 3605,
    "range": [
      3604,
      3605
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3606,
    "end": 3610,
    "range": [
      3606,
      3610
    ]
  },
  {
    "type": "Identifier",
    "value": "T75",
    "start": 3611,
    "end": 3614,
    "range": [
      3611,
      3614
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3614,
    "end": 3615,
    "range": [
      3614,
      3615
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3615,
    "end": 3616,
    "range": [
      3615,
      3616
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3616,
    "end": 3617,
    "range": [
      3616,
      3617
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3618,
    "end": 3619,
    "range": [
      3618,
      3619
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3620,
    "end": 3621,
    "range": [
      3620,
      3621
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3622,
    "end": 3629,
    "range": [
      3622,
      3629
    ]
  },
  {
    "type": "Identifier",
    "value": "T74",
    "start": 3630,
    "end": 3633,
    "range": [
      3630,
      3633
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3633,
    "end": 3634,
    "range": [
      3633,
      3634
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3634,
    "end": 3639,
    "range": [
      3634,
      3639
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3640,
    "end": 3641,
    "range": [
      3640,
      3641
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3641,
    "end": 3642,
    "range": [
      3641,
      3642
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3643,
    "end": 3648,
    "range": [
      3643,
      3648
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3649,
    "end": 3650,
    "range": [
      3649,
      3650
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3650,
    "end": 3651,
    "range": [
      3650,
      3651
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3652,
    "end": 3653,
    "range": [
      3652,
      3653
    ]
  },
  {
    "type": "Identifier",
    "value": "T70",
    "start": 3654,
    "end": 3657,
    "range": [
      3654,
      3657
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3657,
    "end": 3658,
    "range": [
      3657,
      3658
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3658,
    "end": 3659,
    "range": [
      3658,
      3659
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3659,
    "end": 3660,
    "range": [
      3659,
      3660
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3661,
    "end": 3662,
    "range": [
      3661,
      3662
    ]
  },
  {
    "type": "Identifier",
    "value": "T72",
    "start": 3663,
    "end": 3666,
    "range": [
      3663,
      3666
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3666,
    "end": 3667,
    "range": [
      3666,
      3667
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3667,
    "end": 3668,
    "range": [
      3667,
      3668
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3668,
    "end": 3669,
    "range": [
      3668,
      3669
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3670,
    "end": 3671,
    "range": [
      3670,
      3671
    ]
  },
  {
    "type": "Identifier",
    "value": "T74",
    "start": 3672,
    "end": 3675,
    "range": [
      3672,
      3675
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3675,
    "end": 3676,
    "range": [
      3675,
      3676
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3676,
    "end": 3677,
    "range": [
      3676,
      3677
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3677,
    "end": 3678,
    "range": [
      3677,
      3678
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3679,
    "end": 3680,
    "range": [
      3679,
      3680
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3680,
    "end": 3681,
    "range": [
      3680,
      3681
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3682,
    "end": 3683,
    "range": [
      3682,
      3683
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3684,
    "end": 3689,
    "range": [
      3684,
      3689
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3689,
    "end": 3690,
    "range": [
      3689,
      3690
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3692,
    "end": 3696,
    "range": [
      3692,
      3696
    ]
  },
  {
    "type": "Identifier",
    "value": "T76",
    "start": 3697,
    "end": 3700,
    "range": [
      3697,
      3700
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3700,
    "end": 3701,
    "range": [
      3700,
      3701
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3701,
    "end": 3702,
    "range": [
      3701,
      3702
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3703,
    "end": 3710,
    "range": [
      3703,
      3710
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3711,
    "end": 3712,
    "range": [
      3711,
      3712
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3712,
    "end": 3713,
    "range": [
      3712,
      3713
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3713,
    "end": 3714,
    "range": [
      3713,
      3714
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3714,
    "end": 3715,
    "range": [
      3714,
      3715
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3716,
    "end": 3717,
    "range": [
      3716,
      3717
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3718,
    "end": 3725,
    "range": [
      3718,
      3725
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3726,
    "end": 3727,
    "range": [
      3726,
      3727
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3727,
    "end": 3728,
    "range": [
      3727,
      3728
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3729,
    "end": 3730,
    "range": [
      3729,
      3730
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3731,
    "end": 3732,
    "range": [
      3731,
      3732
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3733,
    "end": 3734,
    "range": [
      3733,
      3734
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3734,
    "end": 3735,
    "range": [
      3734,
      3735
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3736,
    "end": 3737,
    "range": [
      3736,
      3737
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3738,
    "end": 3739,
    "range": [
      3738,
      3739
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3739,
    "end": 3740,
    "range": [
      3739,
      3740
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3741,
    "end": 3745,
    "range": [
      3741,
      3745
    ]
  },
  {
    "type": "Identifier",
    "value": "T77",
    "start": 3746,
    "end": 3749,
    "range": [
      3746,
      3749
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3749,
    "end": 3750,
    "range": [
      3749,
      3750
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3750,
    "end": 3751,
    "range": [
      3750,
      3751
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3751,
    "end": 3752,
    "range": [
      3751,
      3752
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3753,
    "end": 3754,
    "range": [
      3753,
      3754
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3755,
    "end": 3756,
    "range": [
      3755,
      3756
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3757,
    "end": 3764,
    "range": [
      3757,
      3764
    ]
  },
  {
    "type": "Identifier",
    "value": "T76",
    "start": 3765,
    "end": 3768,
    "range": [
      3765,
      3768
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3768,
    "end": 3769,
    "range": [
      3768,
      3769
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3769,
    "end": 3774,
    "range": [
      3769,
      3774
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 3775,
    "end": 3776,
    "range": [
      3775,
      3776
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3776,
    "end": 3777,
    "range": [
      3776,
      3777
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3778,
    "end": 3783,
    "range": [
      3778,
      3783
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 3784,
    "end": 3785,
    "range": [
      3784,
      3785
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3785,
    "end": 3786,
    "range": [
      3785,
      3786
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3787,
    "end": 3788,
    "range": [
      3787,
      3788
    ]
  },
  {
    "type": "Identifier",
    "value": "T76",
    "start": 3789,
    "end": 3792,
    "range": [
      3789,
      3792
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3792,
    "end": 3793,
    "range": [
      3792,
      3793
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 3793,
    "end": 3794,
    "range": [
      3793,
      3794
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3794,
    "end": 3795,
    "range": [
      3794,
      3795
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 3796,
    "end": 3797,
    "range": [
      3796,
      3797
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3797,
    "end": 3798,
    "range": [
      3797,
      3798
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3799,
    "end": 3800,
    "range": [
      3799,
      3800
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3801,
    "end": 3806,
    "range": [
      3801,
      3806
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3806,
    "end": 3807,
    "range": [
      3806,
      3807
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3808,
    "end": 3812,
    "range": [
      3808,
      3812
    ]
  },
  {
    "type": "Identifier",
    "value": "T78",
    "start": 3813,
    "end": 3816,
    "range": [
      3813,
      3816
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3816,
    "end": 3817,
    "range": [
      3816,
      3817
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3817,
    "end": 3818,
    "range": [
      3817,
      3818
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3818,
    "end": 3819,
    "range": [
      3818,
      3819
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3820,
    "end": 3821,
    "range": [
      3820,
      3821
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3822,
    "end": 3823,
    "range": [
      3822,
      3823
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3824,
    "end": 3831,
    "range": [
      3824,
      3831
    ]
  },
  {
    "type": "Identifier",
    "value": "T76",
    "start": 3832,
    "end": 3835,
    "range": [
      3832,
      3835
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3835,
    "end": 3836,
    "range": [
      3835,
      3836
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3836,
    "end": 3841,
    "range": [
      3836,
      3841
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 3842,
    "end": 3843,
    "range": [
      3842,
      3843
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3843,
    "end": 3844,
    "range": [
      3843,
      3844
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3845,
    "end": 3850,
    "range": [
      3845,
      3850
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 3851,
    "end": 3852,
    "range": [
      3851,
      3852
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3852,
    "end": 3853,
    "range": [
      3852,
      3853
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3854,
    "end": 3855,
    "range": [
      3854,
      3855
    ]
  },
  {
    "type": "Identifier",
    "value": "T76",
    "start": 3856,
    "end": 3859,
    "range": [
      3856,
      3859
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3859,
    "end": 3860,
    "range": [
      3859,
      3860
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 3860,
    "end": 3861,
    "range": [
      3860,
      3861
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3861,
    "end": 3862,
    "range": [
      3861,
      3862
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 3863,
    "end": 3864,
    "range": [
      3863,
      3864
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3864,
    "end": 3865,
    "range": [
      3864,
      3865
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3866,
    "end": 3867,
    "range": [
      3866,
      3867
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3868,
    "end": 3873,
    "range": [
      3868,
      3873
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3873,
    "end": 3874,
    "range": [
      3873,
      3874
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3876,
    "end": 3880,
    "range": [
      3876,
      3880
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 3881,
    "end": 3884,
    "range": [
      3881,
      3884
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3884,
    "end": 3885,
    "range": [
      3884,
      3885
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3885,
    "end": 3886,
    "range": [
      3885,
      3886
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3887,
    "end": 3894,
    "range": [
      3887,
      3894
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3895,
    "end": 3901,
    "range": [
      3895,
      3901
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3901,
    "end": 3902,
    "range": [
      3901,
      3902
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3903,
    "end": 3904,
    "range": [
      3903,
      3904
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3905,
    "end": 3912,
    "range": [
      3905,
      3912
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3913,
    "end": 3914,
    "range": [
      3913,
      3914
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3914,
    "end": 3915,
    "range": [
      3914,
      3915
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3916,
    "end": 3917,
    "range": [
      3916,
      3917
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3918,
    "end": 3919,
    "range": [
      3918,
      3919
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3919,
    "end": 3920,
    "range": [
      3919,
      3920
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3920,
    "end": 3921,
    "range": [
      3920,
      3921
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3922,
    "end": 3923,
    "range": [
      3922,
      3923
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3923,
    "end": 3924,
    "range": [
      3923,
      3924
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3924,
    "end": 3925,
    "range": [
      3924,
      3925
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3926,
    "end": 3930,
    "range": [
      3926,
      3930
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 3931,
    "end": 3934,
    "range": [
      3931,
      3934
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3934,
    "end": 3935,
    "range": [
      3934,
      3935
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3935,
    "end": 3936,
    "range": [
      3935,
      3936
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3936,
    "end": 3937,
    "range": [
      3936,
      3937
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3938,
    "end": 3939,
    "range": [
      3938,
      3939
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3940,
    "end": 3941,
    "range": [
      3940,
      3941
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3942,
    "end": 3949,
    "range": [
      3942,
      3949
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 3950,
    "end": 3953,
    "range": [
      3950,
      3953
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3953,
    "end": 3954,
    "range": [
      3953,
      3954
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3954,
    "end": 3959,
    "range": [
      3954,
      3959
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 3960,
    "end": 3961,
    "range": [
      3960,
      3961
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3961,
    "end": 3962,
    "range": [
      3961,
      3962
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3963,
    "end": 3968,
    "range": [
      3963,
      3968
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 3969,
    "end": 3970,
    "range": [
      3969,
      3970
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3970,
    "end": 3971,
    "range": [
      3970,
      3971
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3972,
    "end": 3973,
    "range": [
      3972,
      3973
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 3974,
    "end": 3977,
    "range": [
      3974,
      3977
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3977,
    "end": 3978,
    "range": [
      3977,
      3978
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 3978,
    "end": 3979,
    "range": [
      3978,
      3979
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3979,
    "end": 3980,
    "range": [
      3979,
      3980
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 3981,
    "end": 3982,
    "range": [
      3981,
      3982
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3982,
    "end": 3983,
    "range": [
      3982,
      3983
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3984,
    "end": 3985,
    "range": [
      3984,
      3985
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3986,
    "end": 3991,
    "range": [
      3986,
      3991
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3991,
    "end": 3992,
    "range": [
      3991,
      3992
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3994,
    "end": 3998,
    "range": [
      3994,
      3998
    ]
  },
  {
    "type": "Identifier",
    "value": "T90",
    "start": 3999,
    "end": 4002,
    "range": [
      3999,
      4002
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4003,
    "end": 4004,
    "range": [
      4003,
      4004
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 4005,
    "end": 4008,
    "range": [
      4005,
      4008
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4008,
    "end": 4009,
    "range": [
      4008,
      4009
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4009,
    "end": 4010,
    "range": [
      4009,
      4010
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4010,
    "end": 4016,
    "range": [
      4010,
      4016
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4016,
    "end": 4017,
    "range": [
      4016,
      4017
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4018,
    "end": 4024,
    "range": [
      4018,
      4024
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4024,
    "end": 4025,
    "range": [
      4024,
      4025
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4025,
    "end": 4026,
    "range": [
      4025,
      4026
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4026,
    "end": 4027,
    "range": [
      4026,
      4027
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4049,
    "end": 4053,
    "range": [
      4049,
      4053
    ]
  },
  {
    "type": "Identifier",
    "value": "T91",
    "start": 4054,
    "end": 4057,
    "range": [
      4054,
      4057
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4058,
    "end": 4059,
    "range": [
      4058,
      4059
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 4060,
    "end": 4063,
    "range": [
      4060,
      4063
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4063,
    "end": 4064,
    "range": [
      4063,
      4064
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4064,
    "end": 4065,
    "range": [
      4064,
      4065
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4065,
    "end": 4071,
    "range": [
      4065,
      4071
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4071,
    "end": 4072,
    "range": [
      4071,
      4072
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 4073,
    "end": 4076,
    "range": [
      4073,
      4076
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4076,
    "end": 4077,
    "range": [
      4076,
      4077
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4077,
    "end": 4078,
    "range": [
      4077,
      4078
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4078,
    "end": 4079,
    "range": [
      4078,
      4079
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4098,
    "end": 4102,
    "range": [
      4098,
      4102
    ]
  },
  {
    "type": "Identifier",
    "value": "T92",
    "start": 4103,
    "end": 4106,
    "range": [
      4103,
      4106
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4107,
    "end": 4108,
    "range": [
      4107,
      4108
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 4109,
    "end": 4112,
    "range": [
      4109,
      4112
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4112,
    "end": 4113,
    "range": [
      4112,
      4113
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4113,
    "end": 4114,
    "range": [
      4113,
      4114
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4114,
    "end": 4120,
    "range": [
      4114,
      4120
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4120,
    "end": 4121,
    "range": [
      4120,
      4121
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 4122,
    "end": 4125,
    "range": [
      4122,
      4125
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4125,
    "end": 4126,
    "range": [
      4125,
      4126
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 4127,
    "end": 4128,
    "range": [
      4127,
      4128
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4129,
    "end": 4130,
    "range": [
      4129,
      4130
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4131,
    "end": 4132,
    "range": [
      4131,
      4132
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4132,
    "end": 4133,
    "range": [
      4132,
      4133
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4134,
    "end": 4140,
    "range": [
      4134,
      4140
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4141,
    "end": 4142,
    "range": [
      4141,
      4142
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4142,
    "end": 4143,
    "range": [
      4142,
      4143
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4143,
    "end": 4144,
    "range": [
      4143,
      4144
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4163,
    "end": 4167,
    "range": [
      4163,
      4167
    ]
  },
  {
    "type": "Identifier",
    "value": "T93",
    "start": 4168,
    "end": 4171,
    "range": [
      4168,
      4171
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4172,
    "end": 4173,
    "range": [
      4172,
      4173
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 4174,
    "end": 4177,
    "range": [
      4174,
      4177
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4177,
    "end": 4178,
    "range": [
      4177,
      4178
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4178,
    "end": 4179,
    "range": [
      4178,
      4179
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 4179,
    "end": 4182,
    "range": [
      4179,
      4182
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4182,
    "end": 4183,
    "range": [
      4182,
      4183
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4184,
    "end": 4190,
    "range": [
      4184,
      4190
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4190,
    "end": 4191,
    "range": [
      4190,
      4191
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4191,
    "end": 4192,
    "range": [
      4191,
      4192
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4192,
    "end": 4193,
    "range": [
      4192,
      4193
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4204,
    "end": 4208,
    "range": [
      4204,
      4208
    ]
  },
  {
    "type": "Identifier",
    "value": "T94",
    "start": 4209,
    "end": 4212,
    "range": [
      4209,
      4212
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4213,
    "end": 4214,
    "range": [
      4213,
      4214
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 4215,
    "end": 4218,
    "range": [
      4215,
      4218
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4218,
    "end": 4219,
    "range": [
      4218,
      4219
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4219,
    "end": 4220,
    "range": [
      4219,
      4220
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4220,
    "end": 4226,
    "range": [
      4220,
      4226
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4226,
    "end": 4227,
    "range": [
      4226,
      4227
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4228,
    "end": 4234,
    "range": [
      4228,
      4234
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4234,
    "end": 4235,
    "range": [
      4234,
      4235
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4235,
    "end": 4236,
    "range": [
      4235,
      4236
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4236,
    "end": 4237,
    "range": [
      4236,
      4237
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4273,
    "end": 4277,
    "range": [
      4273,
      4277
    ]
  },
  {
    "type": "Identifier",
    "value": "JsonifiedObject",
    "start": 4278,
    "end": 4293,
    "range": [
      4278,
      4293
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4293,
    "end": 4294,
    "range": [
      4293,
      4294
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4294,
    "end": 4295,
    "range": [
      4294,
      4295
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4296,
    "end": 4303,
    "range": [
      4296,
      4303
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 4304,
    "end": 4310,
    "range": [
      4304,
      4310
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4310,
    "end": 4311,
    "range": [
      4310,
      4311
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4312,
    "end": 4313,
    "range": [
      4312,
      4313
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4314,
    "end": 4315,
    "range": [
      4314,
      4315
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4316,
    "end": 4317,
    "range": [
      4316,
      4317
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4317,
    "end": 4318,
    "range": [
      4317,
      4318
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4319,
    "end": 4321,
    "range": [
      4319,
      4321
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4322,
    "end": 4327,
    "range": [
      4322,
      4327
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4328,
    "end": 4329,
    "range": [
      4328,
      4329
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4329,
    "end": 4330,
    "range": [
      4329,
      4330
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4330,
    "end": 4331,
    "range": [
      4330,
      4331
    ]
  },
  {
    "type": "Identifier",
    "value": "Jsonified",
    "start": 4332,
    "end": 4341,
    "range": [
      4332,
      4341
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4341,
    "end": 4342,
    "range": [
      4341,
      4342
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4342,
    "end": 4343,
    "range": [
      4342,
      4343
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4343,
    "end": 4344,
    "range": [
      4343,
      4344
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4344,
    "end": 4345,
    "range": [
      4344,
      4345
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4345,
    "end": 4346,
    "range": [
      4345,
      4346
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4346,
    "end": 4347,
    "range": [
      4346,
      4347
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4348,
    "end": 4349,
    "range": [
      4348,
      4349
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4349,
    "end": 4350,
    "range": [
      4349,
      4350
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4352,
    "end": 4356,
    "range": [
      4352,
      4356
    ]
  },
  {
    "type": "Identifier",
    "value": "Jsonified",
    "start": 4357,
    "end": 4366,
    "range": [
      4357,
      4366
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4366,
    "end": 4367,
    "range": [
      4366,
      4367
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4367,
    "end": 4368,
    "range": [
      4367,
      4368
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4368,
    "end": 4369,
    "range": [
      4368,
      4369
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4370,
    "end": 4371,
    "range": [
      4370,
      4371
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4376,
    "end": 4377,
    "range": [
      4376,
      4377
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4378,
    "end": 4385,
    "range": [
      4378,
      4385
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4386,
    "end": 4392,
    "range": [
      4386,
      4392
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4393,
    "end": 4394,
    "range": [
      4393,
      4394
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4395,
    "end": 4401,
    "range": [
      4395,
      4401
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4402,
    "end": 4403,
    "range": [
      4402,
      4403
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4404,
    "end": 4411,
    "range": [
      4404,
      4411
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4412,
    "end": 4413,
    "range": [
      4412,
      4413
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4414,
    "end": 4418,
    "range": [
      4414,
      4418
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4419,
    "end": 4420,
    "range": [
      4419,
      4420
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4421,
    "end": 4422,
    "range": [
      4421,
      4422
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4427,
    "end": 4428,
    "range": [
      4427,
      4428
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4429,
    "end": 4430,
    "range": [
      4429,
      4430
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4431,
    "end": 4438,
    "range": [
      4431,
      4438
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4439,
    "end": 4448,
    "range": [
      4439,
      4448
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4449,
    "end": 4450,
    "range": [
      4449,
      4450
    ]
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 4451,
    "end": 4459,
    "range": [
      4451,
      4459
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4460,
    "end": 4461,
    "range": [
      4460,
      4461
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4462,
    "end": 4467,
    "range": [
      4462,
      4467
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4511,
    "end": 4512,
    "range": [
      4511,
      4512
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4513,
    "end": 4514,
    "range": [
      4513,
      4514
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4515,
    "end": 4522,
    "range": [
      4515,
      4522
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4523,
    "end": 4524,
    "range": [
      4523,
      4524
    ]
  },
  {
    "type": "Identifier",
    "value": "toJSON",
    "start": 4525,
    "end": 4531,
    "range": [
      4525,
      4531
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4531,
    "end": 4532,
    "range": [
      4531,
      4532
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4532,
    "end": 4533,
    "range": [
      4532,
      4533
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4533,
    "end": 4534,
    "range": [
      4533,
      4534
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 4535,
    "end": 4540,
    "range": [
      4535,
      4540
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4541,
    "end": 4542,
    "range": [
      4541,
      4542
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4543,
    "end": 4544,
    "range": [
      4543,
      4544
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4545,
    "end": 4546,
    "range": [
      4545,
      4546
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4547,
    "end": 4548,
    "range": [
      4547,
      4548
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4598,
    "end": 4599,
    "range": [
      4598,
      4599
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4600,
    "end": 4601,
    "range": [
      4600,
      4601
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4602,
    "end": 4609,
    "range": [
      4602,
      4609
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 4610,
    "end": 4616,
    "range": [
      4610,
      4616
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4617,
    "end": 4618,
    "range": [
      4617,
      4618
    ]
  },
  {
    "type": "Identifier",
    "value": "JsonifiedObject",
    "start": 4619,
    "end": 4634,
    "range": [
      4619,
      4634
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4634,
    "end": 4635,
    "range": [
      4634,
      4635
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4635,
    "end": 4636,
    "range": [
      4635,
      4636
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4636,
    "end": 4637,
    "range": [
      4636,
      4637
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4642,
    "end": 4643,
    "range": [
      4642,
      4643
    ]
  },
  {
    "type": "String",
    "value": "\"what is this\"",
    "start": 4644,
    "end": 4658,
    "range": [
      4644,
      4658
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4658,
    "end": 4659,
    "range": [
      4658,
      4659
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4661,
    "end": 4665,
    "range": [
      4661,
      4665
    ]
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 4666,
    "end": 4673,
    "range": [
      4666,
      4673
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4674,
    "end": 4675,
    "range": [
      4674,
      4675
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4676,
    "end": 4677,
    "range": [
      4676,
      4677
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 4682,
    "end": 4685,
    "range": [
      4682,
      4685
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4685,
    "end": 4686,
    "range": [
      4685,
      4686
    ]
  },
  {
    "type": "String",
    "value": "\"literalstring\"",
    "start": 4687,
    "end": 4702,
    "range": [
      4687,
      4702
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4702,
    "end": 4703,
    "range": [
      4702,
      4703
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 4708,
    "end": 4710,
    "range": [
      4708,
      4710
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4710,
    "end": 4711,
    "range": [
      4710,
      4711
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4712,
    "end": 4713,
    "range": [
      4712,
      4713
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4713,
    "end": 4714,
    "range": [
      4713,
      4714
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4715,
    "end": 4717,
    "range": [
      4715,
      4717
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4718,
    "end": 4722,
    "range": [
      4718,
      4722
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4722,
    "end": 4723,
    "range": [
      4722,
      4723
    ]
  },
  {
    "type": "Identifier",
    "value": "date",
    "start": 4728,
    "end": 4732,
    "range": [
      4728,
      4732
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4732,
    "end": 4733,
    "range": [
      4732,
      4733
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 4734,
    "end": 4738,
    "range": [
      4734,
      4738
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4738,
    "end": 4739,
    "range": [
      4738,
      4739
    ]
  },
  {
    "type": "Identifier",
    "value": "customClass",
    "start": 4744,
    "end": 4755,
    "range": [
      4744,
      4755
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4755,
    "end": 4756,
    "range": [
      4755,
      4756
    ]
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 4757,
    "end": 4764,
    "range": [
      4757,
      4764
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4764,
    "end": 4765,
    "range": [
      4764,
      4765
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4770,
    "end": 4773,
    "range": [
      4770,
      4773
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4773,
    "end": 4774,
    "range": [
      4773,
      4774
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4775,
    "end": 4776,
    "range": [
      4775,
      4776
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 4785,
    "end": 4789,
    "range": [
      4785,
      4789
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4789,
    "end": 4790,
    "range": [
      4789,
      4790
    ]
  },
  {
    "type": "String",
    "value": "\"property\"",
    "start": 4791,
    "end": 4801,
    "range": [
      4791,
      4801
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4801,
    "end": 4802,
    "range": [
      4801,
      4802
    ]
  },
  {
    "type": "Identifier",
    "value": "clz",
    "start": 4811,
    "end": 4814,
    "range": [
      4811,
      4814
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4814,
    "end": 4815,
    "range": [
      4814,
      4815
    ]
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 4816,
    "end": 4823,
    "range": [
      4816,
      4823
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4823,
    "end": 4824,
    "range": [
      4823,
      4824
    ]
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 4833,
    "end": 4839,
    "range": [
      4833,
      4839
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4839,
    "end": 4840,
    "range": [
      4839,
      4840
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4841,
    "end": 4842,
    "range": [
      4841,
      4842
    ]
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 4843,
    "end": 4847,
    "range": [
      4843,
      4847
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4847,
    "end": 4848,
    "range": [
      4847,
      4848
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 4849,
    "end": 4853,
    "range": [
      4849,
      4853
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4854,
    "end": 4855,
    "range": [
      4854,
      4855
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4860,
    "end": 4861,
    "range": [
      4860,
      4861
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4861,
    "end": 4862,
    "range": [
      4861,
      4862
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4863,
    "end": 4864,
    "range": [
      4863,
      4864
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4866,
    "end": 4873,
    "range": [
      4866,
      4873
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4874,
    "end": 4879,
    "range": [
      4874,
      4879
    ]
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 4880,
    "end": 4887,
    "range": [
      4880,
      4887
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4888,
    "end": 4889,
    "range": [
      4888,
      4889
    ]
  },
  {
    "type": "Identifier",
    "value": "toJSON",
    "start": 4894,
    "end": 4900,
    "range": [
      4894,
      4900
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4900,
    "end": 4901,
    "range": [
      4900,
      4901
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4901,
    "end": 4902,
    "range": [
      4901,
      4902
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4902,
    "end": 4903,
    "range": [
      4902,
      4903
    ]
  },
  {
    "type": "String",
    "value": "\"correct\"",
    "start": 4904,
    "end": 4913,
    "range": [
      4904,
      4913
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4913,
    "end": 4914,
    "range": [
      4913,
      4914
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4915,
    "end": 4916,
    "range": [
      4915,
      4916
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4918,
    "end": 4922,
    "range": [
      4918,
      4922
    ]
  },
  {
    "type": "Identifier",
    "value": "JsonifiedExample",
    "start": 4923,
    "end": 4939,
    "range": [
      4923,
      4939
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4940,
    "end": 4941,
    "range": [
      4940,
      4941
    ]
  },
  {
    "type": "Identifier",
    "value": "Jsonified",
    "start": 4942,
    "end": 4951,
    "range": [
      4942,
      4951
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4951,
    "end": 4952,
    "range": [
      4951,
      4952
    ]
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 4952,
    "end": 4959,
    "range": [
      4952,
      4959
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4959,
    "end": 4960,
    "range": [
      4959,
      4960
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4960,
    "end": 4961,
    "range": [
      4960,
      4961
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4962,
    "end": 4969,
    "range": [
      4962,
      4969
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4970,
    "end": 4973,
    "range": [
      4970,
      4973
    ]
  },
  {
    "type": "Identifier",
    "value": "ex",
    "start": 4974,
    "end": 4976,
    "range": [
      4974,
      4976
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4976,
    "end": 4977,
    "range": [
      4976,
      4977
    ]
  },
  {
    "type": "Identifier",
    "value": "JsonifiedExample",
    "start": 4978,
    "end": 4994,
    "range": [
      4978,
      4994
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4994,
    "end": 4995,
    "range": [
      4994,
      4995
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4996,
    "end": 5001,
    "range": [
      4996,
      5001
    ]
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 5002,
    "end": 5004,
    "range": [
      5002,
      5004
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5004,
    "end": 5005,
    "range": [
      5004,
      5005
    ]
  },
  {
    "type": "String",
    "value": "\"correct\"",
    "start": 5006,
    "end": 5015,
    "range": [
      5006,
      5015
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5016,
    "end": 5017,
    "range": [
      5016,
      5017
    ]
  },
  {
    "type": "Identifier",
    "value": "ex",
    "start": 5018,
    "end": 5020,
    "range": [
      5018,
      5020
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5020,
    "end": 5021,
    "range": [
      5020,
      5021
    ]
  },
  {
    "type": "Identifier",
    "value": "customClass",
    "start": 5021,
    "end": 5032,
    "range": [
      5021,
      5032
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5032,
    "end": 5033,
    "range": [
      5032,
      5033
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5034,
    "end": 5039,
    "range": [
      5034,
      5039
    ]
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 5040,
    "end": 5042,
    "range": [
      5040,
      5042
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5042,
    "end": 5043,
    "range": [
      5042,
      5043
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5044,
    "end": 5050,
    "range": [
      5044,
      5050
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5051,
    "end": 5052,
    "range": [
      5051,
      5052
    ]
  },
  {
    "type": "Identifier",
    "value": "ex",
    "start": 5053,
    "end": 5055,
    "range": [
      5053,
      5055
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5055,
    "end": 5056,
    "range": [
      5055,
      5056
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5056,
    "end": 5059,
    "range": [
      5056,
      5059
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5059,
    "end": 5060,
    "range": [
      5059,
      5060
    ]
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 5060,
    "end": 5066,
    "range": [
      5060,
      5066
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5066,
    "end": 5067,
    "range": [
      5066,
      5067
    ]
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 5067,
    "end": 5071,
    "range": [
      5067,
      5071
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5071,
    "end": 5072,
    "range": [
      5071,
      5072
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5097,
    "end": 5101,
    "range": [
      5097,
      5101
    ]
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 5102,
    "end": 5104,
    "range": [
      5102,
      5104
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5104,
    "end": 5105,
    "range": [
      5104,
      5105
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5105,
    "end": 5106,
    "range": [
      5105,
      5106
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5106,
    "end": 5107,
    "range": [
      5106,
      5107
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5108,
    "end": 5109,
    "range": [
      5108,
      5109
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5110,
    "end": 5117,
    "range": [
      5110,
      5117
    ]
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 5118,
    "end": 5120,
    "range": [
      5118,
      5120
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5120,
    "end": 5121,
    "range": [
      5120,
      5121
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 5121,
    "end": 5124,
    "range": [
      5121,
      5124
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5124,
    "end": 5125,
    "range": [
      5124,
      5125
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 5126,
    "end": 5129,
    "range": [
      5126,
      5129
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5129,
    "end": 5130,
    "range": [
      5129,
      5130
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5130,
    "end": 5131,
    "range": [
      5130,
      5131
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5132,
    "end": 5133,
    "range": [
      5132,
      5133
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5134,
    "end": 5135,
    "range": [
      5134,
      5135
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5135,
    "end": 5136,
    "range": [
      5135,
      5136
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5136,
    "end": 5137,
    "range": [
      5136,
      5137
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5138,
    "end": 5139,
    "range": [
      5138,
      5139
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5139,
    "end": 5140,
    "range": [
      5139,
      5140
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5140,
    "end": 5141,
    "range": [
      5140,
      5141
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5142,
    "end": 5146,
    "range": [
      5142,
      5146
    ]
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 5147,
    "end": 5149,
    "range": [
      5147,
      5149
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5149,
    "end": 5150,
    "range": [
      5149,
      5150
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 5150,
    "end": 5151,
    "range": [
      5150,
      5151
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5151,
    "end": 5152,
    "range": [
      5151,
      5152
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5153,
    "end": 5154,
    "range": [
      5153,
      5154
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 5155,
    "end": 5156,
    "range": [
      5155,
      5156
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5157,
    "end": 5164,
    "range": [
      5157,
      5164
    ]
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 5165,
    "end": 5167,
    "range": [
      5165,
      5167
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5167,
    "end": 5168,
    "range": [
      5167,
      5168
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 5168,
    "end": 5173,
    "range": [
      5168,
      5173
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5174,
    "end": 5175,
    "range": [
      5174,
      5175
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5175,
    "end": 5176,
    "range": [
      5175,
      5176
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 5177,
    "end": 5182,
    "range": [
      5177,
      5182
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5183,
    "end": 5184,
    "range": [
      5183,
      5184
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5184,
    "end": 5185,
    "range": [
      5184,
      5185
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5186,
    "end": 5187,
    "range": [
      5186,
      5187
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5188,
    "end": 5189,
    "range": [
      5188,
      5189
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5189,
    "end": 5190,
    "range": [
      5189,
      5190
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5190,
    "end": 5191,
    "range": [
      5190,
      5191
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5192,
    "end": 5193,
    "range": [
      5192,
      5193
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5193,
    "end": 5194,
    "range": [
      5193,
      5194
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5195,
    "end": 5196,
    "range": [
      5195,
      5196
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5197,
    "end": 5202,
    "range": [
      5197,
      5202
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5202,
    "end": 5203,
    "range": [
      5202,
      5203
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5205,
    "end": 5209,
    "range": [
      5205,
      5209
    ]
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 5210,
    "end": 5212,
    "range": [
      5210,
      5212
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5212,
    "end": 5213,
    "range": [
      5212,
      5213
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5213,
    "end": 5214,
    "range": [
      5213,
      5214
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5214,
    "end": 5215,
    "range": [
      5214,
      5215
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5216,
    "end": 5217,
    "range": [
      5216,
      5217
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5218,
    "end": 5225,
    "range": [
      5218,
      5225
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5226,
    "end": 5230,
    "range": [
      5226,
      5230
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5230,
    "end": 5231,
    "range": [
      5230,
      5231
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5232,
    "end": 5233,
    "range": [
      5232,
      5233
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5234,
    "end": 5235,
    "range": [
      5234,
      5235
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5235,
    "end": 5236,
    "range": [
      5235,
      5236
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5236,
    "end": 5237,
    "range": [
      5236,
      5237
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5238,
    "end": 5239,
    "range": [
      5238,
      5239
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5239,
    "end": 5240,
    "range": [
      5239,
      5240
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5240,
    "end": 5241,
    "range": [
      5240,
      5241
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5242,
    "end": 5246,
    "range": [
      5242,
      5246
    ]
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 5247,
    "end": 5249,
    "range": [
      5247,
      5249
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5249,
    "end": 5250,
    "range": [
      5249,
      5250
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 5250,
    "end": 5251,
    "range": [
      5250,
      5251
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5251,
    "end": 5252,
    "range": [
      5251,
      5252
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5253,
    "end": 5254,
    "range": [
      5253,
      5254
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 5255,
    "end": 5256,
    "range": [
      5255,
      5256
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5257,
    "end": 5264,
    "range": [
      5257,
      5264
    ]
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 5265,
    "end": 5267,
    "range": [
      5265,
      5267
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5267,
    "end": 5268,
    "range": [
      5267,
      5268
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 5268,
    "end": 5273,
    "range": [
      5268,
      5273
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5274,
    "end": 5275,
    "range": [
      5274,
      5275
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5275,
    "end": 5276,
    "range": [
      5275,
      5276
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 5277,
    "end": 5282,
    "range": [
      5277,
      5282
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5283,
    "end": 5284,
    "range": [
      5283,
      5284
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5284,
    "end": 5285,
    "range": [
      5284,
      5285
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5286,
    "end": 5287,
    "range": [
      5286,
      5287
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5288,
    "end": 5289,
    "range": [
      5288,
      5289
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5289,
    "end": 5290,
    "range": [
      5289,
      5290
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5290,
    "end": 5291,
    "range": [
      5290,
      5291
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5292,
    "end": 5293,
    "range": [
      5292,
      5293
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5293,
    "end": 5294,
    "range": [
      5293,
      5294
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5295,
    "end": 5296,
    "range": [
      5295,
      5296
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5297,
    "end": 5302,
    "range": [
      5297,
      5302
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5302,
    "end": 5303,
    "range": [
      5302,
      5303
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5304,
    "end": 5308,
    "range": [
      5304,
      5308
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 5309,
    "end": 5311,
    "range": [
      5309,
      5311
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5311,
    "end": 5312,
    "range": [
      5311,
      5312
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 5312,
    "end": 5313,
    "range": [
      5312,
      5313
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5313,
    "end": 5314,
    "range": [
      5313,
      5314
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5315,
    "end": 5316,
    "range": [
      5315,
      5316
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5317,
    "end": 5324,
    "range": [
      5317,
      5324
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5325,
    "end": 5329,
    "range": [
      5325,
      5329
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5329,
    "end": 5330,
    "range": [
      5329,
      5330
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5331,
    "end": 5332,
    "range": [
      5331,
      5332
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 5333,
    "end": 5334,
    "range": [
      5333,
      5334
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5335,
    "end": 5342,
    "range": [
      5335,
      5342
    ]
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 5343,
    "end": 5345,
    "range": [
      5343,
      5345
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5345,
    "end": 5346,
    "range": [
      5345,
      5346
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 5346,
    "end": 5351,
    "range": [
      5346,
      5351
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5352,
    "end": 5353,
    "range": [
      5352,
      5353
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5353,
    "end": 5354,
    "range": [
      5353,
      5354
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5355,
    "end": 5356,
    "range": [
      5355,
      5356
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5356,
    "end": 5357,
    "range": [
      5356,
      5357
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5358,
    "end": 5359,
    "range": [
      5358,
      5359
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5360,
    "end": 5361,
    "range": [
      5360,
      5361
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5361,
    "end": 5362,
    "range": [
      5361,
      5362
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5362,
    "end": 5363,
    "range": [
      5362,
      5363
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5364,
    "end": 5365,
    "range": [
      5364,
      5365
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5365,
    "end": 5366,
    "range": [
      5365,
      5366
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5367,
    "end": 5368,
    "range": [
      5367,
      5368
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5369,
    "end": 5374,
    "range": [
      5369,
      5374
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5374,
    "end": 5375,
    "range": [
      5374,
      5375
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5399,
    "end": 5403,
    "range": [
      5399,
      5403
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5404,
    "end": 5405,
    "range": [
      5404,
      5405
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5405,
    "end": 5406,
    "range": [
      5405,
      5406
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5406,
    "end": 5407,
    "range": [
      5406,
      5407
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5407,
    "end": 5408,
    "range": [
      5407,
      5408
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5409,
    "end": 5410,
    "range": [
      5409,
      5410
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5411,
    "end": 5412,
    "range": [
      5411,
      5412
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5413,
    "end": 5420,
    "range": [
      5413,
      5420
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5421,
    "end": 5427,
    "range": [
      5421,
      5427
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5428,
    "end": 5429,
    "range": [
      5428,
      5429
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5430,
    "end": 5431,
    "range": [
      5430,
      5431
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5432,
    "end": 5433,
    "range": [
      5432,
      5433
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 5433,
    "end": 5434,
    "range": [
      5433,
      5434
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 5435,
    "end": 5437,
    "range": [
      5435,
      5437
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5438,
    "end": 5439,
    "range": [
      5438,
      5439
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5439,
    "end": 5440,
    "range": [
      5439,
      5440
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5440,
    "end": 5441,
    "range": [
      5440,
      5441
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5442,
    "end": 5446,
    "range": [
      5442,
      5446
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5446,
    "end": 5447,
    "range": [
      5446,
      5447
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5448,
    "end": 5449,
    "range": [
      5448,
      5449
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5450,
    "end": 5451,
    "range": [
      5450,
      5451
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "type",
    "start": 5455,
    "end": 5459,
    "range": [
      5455,
      5459
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 5460,
    "end": 5461,
    "range": [
      5460,
      5461
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5461,
    "end": 5462,
    "range": [
      5461,
      5462
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5462,
    "end": 5463,
    "range": [
      5462,
      5463
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5463,
    "end": 5464,
    "range": [
      5463,
      5464
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5465,
    "end": 5466,
    "range": [
      5465,
      5466
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5467,
    "end": 5473,
    "range": [
      5467,
      5473
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5474,
    "end": 5481,
    "range": [
      5474,
      5481
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5482,
    "end": 5483,
    "range": [
      5482,
      5483
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5484,
    "end": 5485,
    "range": [
      5484,
      5485
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5486,
    "end": 5487,
    "range": [
      5486,
      5487
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5488,
    "end": 5489,
    "range": [
      5488,
      5489
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 5489,
    "end": 5490,
    "range": [
      5489,
      5490
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 5491,
    "end": 5493,
    "range": [
      5491,
      5493
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5494,
    "end": 5495,
    "range": [
      5494,
      5495
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5495,
    "end": 5496,
    "range": [
      5495,
      5496
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5496,
    "end": 5497,
    "range": [
      5496,
      5497
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5498,
    "end": 5502,
    "range": [
      5498,
      5502
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5502,
    "end": 5503,
    "range": [
      5502,
      5503
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5504,
    "end": 5505,
    "range": [
      5504,
      5505
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5506,
    "end": 5507,
    "range": [
      5506,
      5507
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5508,
    "end": 5509,
    "range": [
      5508,
      5509
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5509,
    "end": 5510,
    "range": [
      5509,
      5510
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5544,
    "end": 5548,
    "range": [
      5544,
      5548
    ]
  },
  {
    "type": "Identifier",
    "value": "MatchingKeys",
    "start": 5549,
    "end": 5561,
    "range": [
      5549,
      5561
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5561,
    "end": 5562,
    "range": [
      5561,
      5562
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5562,
    "end": 5563,
    "range": [
      5562,
      5563
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5563,
    "end": 5564,
    "range": [
      5563,
      5564
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5565,
    "end": 5566,
    "range": [
      5565,
      5566
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5566,
    "end": 5567,
    "range": [
      5566,
      5567
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 5568,
    "end": 5569,
    "range": [
      5568,
      5569
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5570,
    "end": 5577,
    "range": [
      5570,
      5577
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 5578,
    "end": 5583,
    "range": [
      5578,
      5583
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5584,
    "end": 5585,
    "range": [
      5584,
      5585
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5586,
    "end": 5587,
    "range": [
      5586,
      5587
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 5588,
    "end": 5593,
    "range": [
      5588,
      5593
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5594,
    "end": 5595,
    "range": [
      5594,
      5595
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5595,
    "end": 5596,
    "range": [
      5595,
      5596
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5597,
    "end": 5598,
    "range": [
      5597,
      5598
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 5603,
    "end": 5604,
    "range": [
      5603,
      5604
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5605,
    "end": 5612,
    "range": [
      5605,
      5612
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 5613,
    "end": 5618,
    "range": [
      5613,
      5618
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5619,
    "end": 5620,
    "range": [
      5619,
      5620
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5621,
    "end": 5622,
    "range": [
      5621,
      5622
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5623,
    "end": 5624,
    "range": [
      5623,
      5624
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5624,
    "end": 5625,
    "range": [
      5624,
      5625
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 5625,
    "end": 5626,
    "range": [
      5625,
      5626
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5626,
    "end": 5627,
    "range": [
      5626,
      5627
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5628,
    "end": 5635,
    "range": [
      5628,
      5635
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5636,
    "end": 5637,
    "range": [
      5636,
      5637
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5638,
    "end": 5639,
    "range": [
      5638,
      5639
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 5640,
    "end": 5641,
    "range": [
      5640,
      5641
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5642,
    "end": 5643,
    "range": [
      5642,
      5643
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5644,
    "end": 5649,
    "range": [
      5644,
      5649
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5650,
    "end": 5651,
    "range": [
      5650,
      5651
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5652,
    "end": 5657,
    "range": [
      5652,
      5657
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5657,
    "end": 5658,
    "range": [
      5657,
      5658
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5660,
    "end": 5664,
    "range": [
      5660,
      5664
    ]
  },
  {
    "type": "Identifier",
    "value": "VoidKeys",
    "start": 5665,
    "end": 5673,
    "range": [
      5665,
      5673
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5673,
    "end": 5674,
    "range": [
      5673,
      5674
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5674,
    "end": 5675,
    "range": [
      5674,
      5675
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5675,
    "end": 5676,
    "range": [
      5675,
      5676
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5677,
    "end": 5678,
    "range": [
      5677,
      5678
    ]
  },
  {
    "type": "Identifier",
    "value": "MatchingKeys",
    "start": 5679,
    "end": 5691,
    "range": [
      5679,
      5691
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5691,
    "end": 5692,
    "range": [
      5691,
      5692
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5692,
    "end": 5693,
    "range": [
      5692,
      5693
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5693,
    "end": 5694,
    "range": [
      5693,
      5694
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5695,
    "end": 5699,
    "range": [
      5695,
      5699
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5699,
    "end": 5700,
    "range": [
      5699,
      5700
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5700,
    "end": 5701,
    "range": [
      5700,
      5701
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5703,
    "end": 5712,
    "range": [
      5703,
      5712
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 5713,
    "end": 5717,
    "range": [
      5713,
      5717
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5718,
    "end": 5719,
    "range": [
      5718,
      5719
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5724,
    "end": 5725,
    "range": [
      5724,
      5725
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5725,
    "end": 5726,
    "range": [
      5725,
      5726
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5727,
    "end": 5728,
    "range": [
      5727,
      5728
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5728,
    "end": 5729,
    "range": [
      5728,
      5729
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 5734,
    "end": 5735,
    "range": [
      5734,
      5735
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5735,
    "end": 5736,
    "range": [
      5735,
      5736
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5737,
    "end": 5741,
    "range": [
      5737,
      5741
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5742,
    "end": 5743,
    "range": [
      5742,
      5743
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5745,
    "end": 5749,
    "range": [
      5745,
      5749
    ]
  },
  {
    "type": "Identifier",
    "value": "T80",
    "start": 5750,
    "end": 5753,
    "range": [
      5750,
      5753
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5754,
    "end": 5755,
    "range": [
      5754,
      5755
    ]
  },
  {
    "type": "Identifier",
    "value": "MatchingKeys",
    "start": 5756,
    "end": 5768,
    "range": [
      5756,
      5768
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5768,
    "end": 5769,
    "range": [
      5768,
      5769
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 5769,
    "end": 5773,
    "range": [
      5769,
      5773
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5773,
    "end": 5774,
    "range": [
      5773,
      5774
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5775,
    "end": 5779,
    "range": [
      5775,
      5779
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5779,
    "end": 5780,
    "range": [
      5779,
      5780
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5780,
    "end": 5781,
    "range": [
      5780,
      5781
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5782,
    "end": 5786,
    "range": [
      5782,
      5786
    ]
  },
  {
    "type": "Identifier",
    "value": "T81",
    "start": 5787,
    "end": 5790,
    "range": [
      5787,
      5790
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5791,
    "end": 5792,
    "range": [
      5791,
      5792
    ]
  },
  {
    "type": "Identifier",
    "value": "VoidKeys",
    "start": 5793,
    "end": 5801,
    "range": [
      5793,
      5801
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5801,
    "end": 5802,
    "range": [
      5801,
      5802
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 5802,
    "end": 5806,
    "range": [
      5802,
      5806
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5806,
    "end": 5807,
    "range": [
      5806,
      5807
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5807,
    "end": 5808,
    "range": [
      5807,
      5808
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5832,
    "end": 5836,
    "range": [
      5832,
      5836
    ]
  },
  {
    "type": "Identifier",
    "value": "MustBeString",
    "start": 5837,
    "end": 5849,
    "range": [
      5837,
      5849
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5849,
    "end": 5850,
    "range": [
      5849,
      5850
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5850,
    "end": 5851,
    "range": [
      5850,
      5851
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5852,
    "end": 5859,
    "range": [
      5852,
      5859
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5860,
    "end": 5866,
    "range": [
      5860,
      5866
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5866,
    "end": 5867,
    "range": [
      5866,
      5867
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5868,
    "end": 5869,
    "range": [
      5868,
      5869
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5870,
    "end": 5871,
    "range": [
      5870,
      5871
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5871,
    "end": 5872,
    "range": [
      5871,
      5872
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5873,
    "end": 5877,
    "range": [
      5873,
      5877
    ]
  },
  {
    "type": "Identifier",
    "value": "EnsureIsString",
    "start": 5878,
    "end": 5892,
    "range": [
      5878,
      5892
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5892,
    "end": 5893,
    "range": [
      5892,
      5893
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5893,
    "end": 5894,
    "range": [
      5893,
      5894
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5894,
    "end": 5895,
    "range": [
      5894,
      5895
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5896,
    "end": 5897,
    "range": [
      5896,
      5897
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5898,
    "end": 5899,
    "range": [
      5898,
      5899
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5900,
    "end": 5907,
    "range": [
      5900,
      5907
    ]
  },
  {
    "type": "Identifier",
    "value": "MustBeString",
    "start": 5908,
    "end": 5920,
    "range": [
      5908,
      5920
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5920,
    "end": 5921,
    "range": [
      5920,
      5921
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 5921,
    "end": 5926,
    "range": [
      5921,
      5926
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5927,
    "end": 5928,
    "range": [
      5927,
      5928
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5928,
    "end": 5929,
    "range": [
      5928,
      5929
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5930,
    "end": 5931,
    "range": [
      5930,
      5931
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5932,
    "end": 5933,
    "range": [
      5932,
      5933
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5934,
    "end": 5935,
    "range": [
      5934,
      5935
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5936,
    "end": 5941,
    "range": [
      5936,
      5941
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5941,
    "end": 5942,
    "range": [
      5941,
      5942
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5944,
    "end": 5948,
    "range": [
      5944,
      5948
    ]
  },
  {
    "type": "Identifier",
    "value": "Test1",
    "start": 5949,
    "end": 5954,
    "range": [
      5949,
      5954
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5955,
    "end": 5956,
    "range": [
      5955,
      5956
    ]
  },
  {
    "type": "Identifier",
    "value": "EnsureIsString",
    "start": 5957,
    "end": 5971,
    "range": [
      5957,
      5971
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5971,
    "end": 5972,
    "range": [
      5971,
      5972
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 5972,
    "end": 5979,
    "range": [
      5972,
      5979
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5979,
    "end": 5980,
    "range": [
      5979,
      5980
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5980,
    "end": 5981,
    "range": [
      5980,
      5981
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5994,
    "end": 5998,
    "range": [
      5994,
      5998
    ]
  },
  {
    "type": "Identifier",
    "value": "Test2",
    "start": 5999,
    "end": 6004,
    "range": [
      5999,
      6004
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6005,
    "end": 6006,
    "range": [
      6005,
      6006
    ]
  },
  {
    "type": "Identifier",
    "value": "EnsureIsString",
    "start": 6007,
    "end": 6021,
    "range": [
      6007,
      6021
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6021,
    "end": 6022,
    "range": [
      6021,
      6022
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 6022,
    "end": 6024,
    "range": [
      6022,
      6024
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6024,
    "end": 6025,
    "range": [
      6024,
      6025
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6025,
    "end": 6026,
    "range": [
      6025,
      6026
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6061,
    "end": 6069,
    "range": [
      6061,
      6069
    ]
  },
  {
    "type": "Identifier",
    "value": "invoker",
    "start": 6070,
    "end": 6077,
    "range": [
      6070,
      6077
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6078,
    "end": 6079,
    "range": [
      6078,
      6079
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 6079,
    "end": 6080,
    "range": [
      6079,
      6080
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6081,
    "end": 6088,
    "range": [
      6081,
      6088
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6089,
    "end": 6095,
    "range": [
      6089,
      6095
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6096,
    "end": 6097,
    "range": [
      6096,
      6097
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6098,
    "end": 6104,
    "range": [
      6098,
      6104
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6105,
    "end": 6106,
    "range": [
      6105,
      6106
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 6107,
    "end": 6113,
    "range": [
      6107,
      6113
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6113,
    "end": 6114,
    "range": [
      6113,
      6114
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6115,
    "end": 6116,
    "range": [
      6115,
      6116
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6117,
    "end": 6124,
    "range": [
      6117,
      6124
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6125,
    "end": 6128,
    "range": [
      6125,
      6128
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6128,
    "end": 6129,
    "range": [
      6128,
      6129
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6129,
    "end": 6130,
    "range": [
      6129,
      6130
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6130,
    "end": 6131,
    "range": [
      6130,
      6131
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6132,
    "end": 6133,
    "range": [
      6132,
      6133
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 6133,
    "end": 6136,
    "range": [
      6133,
      6136
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6136,
    "end": 6137,
    "range": [
      6136,
      6137
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 6138,
    "end": 6139,
    "range": [
      6138,
      6139
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6139,
    "end": 6140,
    "range": [
      6139,
      6140
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 6141,
    "end": 6144,
    "range": [
      6141,
      6144
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 6144,
    "end": 6148,
    "range": [
      6144,
      6148
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6148,
    "end": 6149,
    "range": [
      6148,
      6149
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6150,
    "end": 6151,
    "range": [
      6150,
      6151
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6151,
    "end": 6152,
    "range": [
      6151,
      6152
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6153,
    "end": 6154,
    "range": [
      6153,
      6154
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6159,
    "end": 6165,
    "range": [
      6159,
      6165
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6166,
    "end": 6167,
    "range": [
      6166,
      6167
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6167,
    "end": 6168,
    "range": [
      6167,
      6168
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6169,
    "end": 6176,
    "range": [
      6169,
      6176
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 6177,
    "end": 6183,
    "range": [
      6177,
      6183
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6183,
    "end": 6184,
    "range": [
      6183,
      6184
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 6184,
    "end": 6185,
    "range": [
      6184,
      6185
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6185,
    "end": 6186,
    "range": [
      6185,
      6186
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6187,
    "end": 6188,
    "range": [
      6187,
      6188
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 6188,
    "end": 6191,
    "range": [
      6188,
      6191
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 6191,
    "end": 6195,
    "range": [
      6191,
      6195
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6195,
    "end": 6196,
    "range": [
      6195,
      6196
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6197,
    "end": 6198,
    "range": [
      6197,
      6198
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6198,
    "end": 6199,
    "range": [
      6198,
      6199
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6200,
    "end": 6202,
    "range": [
      6200,
      6202
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6203,
    "end": 6206,
    "range": [
      6203,
      6206
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6206,
    "end": 6207,
    "range": [
      6206,
      6207
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6207,
    "end": 6208,
    "range": [
      6207,
      6208
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6209,
    "end": 6210,
    "range": [
      6209,
      6210
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6210,
    "end": 6213,
    "range": [
      6210,
      6213
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6213,
    "end": 6214,
    "range": [
      6213,
      6214
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6215,
    "end": 6216,
    "range": [
      6215,
      6216
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6216,
    "end": 6217,
    "range": [
      6216,
      6217
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6217,
    "end": 6218,
    "range": [
      6217,
      6218
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 6219,
    "end": 6229,
    "range": [
      6219,
      6229
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6229,
    "end": 6230,
    "range": [
      6229,
      6230
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6230,
    "end": 6231,
    "range": [
      6230,
      6231
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6231,
    "end": 6232,
    "range": [
      6231,
      6232
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 6232,
    "end": 6233,
    "range": [
      6232,
      6233
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6233,
    "end": 6234,
    "range": [
      6233,
      6234
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6234,
    "end": 6235,
    "range": [
      6234,
      6235
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6236,
    "end": 6238,
    "range": [
      6236,
      6238
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6239,
    "end": 6242,
    "range": [
      6239,
      6242
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6242,
    "end": 6243,
    "range": [
      6242,
      6243
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 6243,
    "end": 6246,
    "range": [
      6243,
      6246
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6246,
    "end": 6247,
    "range": [
      6246,
      6247
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6247,
    "end": 6248,
    "range": [
      6247,
      6248
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 6248,
    "end": 6251,
    "range": [
      6248,
      6251
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 6251,
    "end": 6255,
    "range": [
      6251,
      6255
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6255,
    "end": 6256,
    "range": [
      6255,
      6256
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6257,
    "end": 6258,
    "range": [
      6257,
      6258
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6260,
    "end": 6265,
    "range": [
      6260,
      6265
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 6266,
    "end": 6272,
    "range": [
      6266,
      6272
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6273,
    "end": 6274,
    "range": [
      6273,
      6274
    ]
  },
  {
    "type": "Identifier",
    "value": "invoker",
    "start": 6275,
    "end": 6282,
    "range": [
      6275,
      6282
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6282,
    "end": 6283,
    "range": [
      6282,
      6283
    ]
  },
  {
    "type": "String",
    "value": "'test'",
    "start": 6283,
    "end": 6289,
    "range": [
      6283,
      6289
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6289,
    "end": 6290,
    "range": [
      6289,
      6290
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 6291,
    "end": 6295,
    "range": [
      6291,
      6295
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6295,
    "end": 6296,
    "range": [
      6295,
      6296
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6296,
    "end": 6297,
    "range": [
      6296,
      6297
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6297,
    "end": 6298,
    "range": [
      6297,
      6298
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 6299,
    "end": 6303,
    "range": [
      6299,
      6303
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6303,
    "end": 6304,
    "range": [
      6303,
      6304
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6305,
    "end": 6306,
    "range": [
      6305,
      6306
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6306,
    "end": 6307,
    "range": [
      6306,
      6307
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6307,
    "end": 6308,
    "range": [
      6307,
      6308
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 6309,
    "end": 6316,
    "range": [
      6309,
      6316
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6316,
    "end": 6317,
    "range": [
      6316,
      6317
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6318,
    "end": 6320,
    "range": [
      6318,
      6320
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 6321,
    "end": 6324,
    "range": [
      6321,
      6324
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6325,
    "end": 6326,
    "range": [
      6325,
      6326
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6326,
    "end": 6327,
    "range": [
      6326,
      6327
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6329,
    "end": 6333,
    "range": [
      6329,
      6333
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 6334,
    "end": 6338,
    "range": [
      6334,
      6338
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6338,
    "end": 6339,
    "range": [
      6338,
      6339
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6339,
    "end": 6340,
    "range": [
      6339,
      6340
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6341,
    "end": 6348,
    "range": [
      6341,
      6348
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6349,
    "end": 6352,
    "range": [
      6349,
      6352
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6352,
    "end": 6353,
    "range": [
      6352,
      6353
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6353,
    "end": 6354,
    "range": [
      6353,
      6354
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6354,
    "end": 6355,
    "range": [
      6354,
      6355
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6356,
    "end": 6357,
    "range": [
      6356,
      6357
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 6358,
    "end": 6368,
    "range": [
      6358,
      6368
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6368,
    "end": 6369,
    "range": [
      6368,
      6369
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6369,
    "end": 6370,
    "range": [
      6369,
      6370
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 6370,
    "end": 6373,
    "range": [
      6370,
      6373
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 6373,
    "end": 6377,
    "range": [
      6373,
      6377
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6377,
    "end": 6378,
    "range": [
      6377,
      6378
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6379,
    "end": 6380,
    "range": [
      6379,
      6380
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6380,
    "end": 6381,
    "range": [
      6380,
      6381
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6382,
    "end": 6384,
    "range": [
      6382,
      6384
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6385,
    "end": 6391,
    "range": [
      6385,
      6391
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6391,
    "end": 6392,
    "range": [
      6391,
      6392
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6392,
    "end": 6393,
    "range": [
      6392,
      6393
    ]
  }
]
```
