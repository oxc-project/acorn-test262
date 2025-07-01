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
        "name": "ExtendedMapper",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 79
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "HandledInputT",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 93
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 80,
            "end": 93
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "OutputT",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 102
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 95,
            "end": 102
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArgsT",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 109
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 118,
                "end": 121
              },
              "start": 118,
              "end": 123
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 104,
            "end": 123
          }
        ],
        "start": 79,
        "end": 124
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 135,
                "end": 141
              },
              "start": 133,
              "end": 141
            },
            "start": 128,
            "end": 141
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "mixed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HandledInputT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 164
                },
                "typeArguments": null,
                "start": 151,
                "end": 164
              },
              "start": 149,
              "end": 164
            },
            "start": 143,
            "end": 164
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
              "start": 169,
              "end": 173
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArgsT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 181
                },
                "typeArguments": null,
                "start": 176,
                "end": 181
              },
              "start": 174,
              "end": 181
            },
            "value": null,
            "start": 166,
            "end": 181
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "OutputT",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 193
            },
            "typeArguments": null,
            "start": 186,
            "end": 193
          },
          "start": 183,
          "end": 193
        },
        "start": 127,
        "end": 193
      },
      "declare": false,
      "start": 60,
      "end": 194
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 201
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExtendedMapper",
          "optional": false,
          "typeAnnotation": null,
          "start": 204,
          "end": 218
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 219,
              "end": 222
            },
            {
              "type": "TSAnyKeyword",
              "start": 224,
              "end": 227
            },
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSAnyKeyword",
                  "start": 230,
                  "end": 233
                }
              ],
              "start": 229,
              "end": 234
            }
          ],
          "start": 218,
          "end": 235
        },
        "start": 204,
        "end": 235
      },
      "declare": false,
      "start": 195,
      "end": 236
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 242,
        "end": 243
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExtendedMapper",
          "optional": false,
          "typeAnnotation": null,
          "start": 246,
          "end": 260
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 261,
              "end": 264
            },
            {
              "type": "TSAnyKeyword",
              "start": 266,
              "end": 269
            },
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 271,
                "end": 274
              },
              "start": 271,
              "end": 276
            }
          ],
          "start": 260,
          "end": 277
        },
        "start": 246,
        "end": 277
      },
      "declare": false,
      "start": 237,
      "end": 278
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 288
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 292
          },
          "typeArguments": null,
          "start": 291,
          "end": 292
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 302
          },
          "typeArguments": null,
          "start": 301,
          "end": 302
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "y",
            "raw": "\"y\"",
            "start": 305,
            "end": 308
          },
          "start": 305,
          "end": 308
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "n",
            "raw": "\"n\"",
            "start": 311,
            "end": 314
          },
          "start": 311,
          "end": 314
        },
        "start": 291,
        "end": 314
      },
      "declare": false,
      "start": 279,
      "end": 314
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
            "name": "check",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 330
                },
                "typeArguments": null,
                "start": 326,
                "end": 330
              },
              "start": 324,
              "end": 330
            },
            "start": 319,
            "end": 330
          },
          "init": {
            "type": "Literal",
            "value": "y",
            "raw": "\"y\"",
            "start": 333,
            "end": 336
          },
          "definite": false,
          "start": 319,
          "end": 336
        }
      ],
      "declare": false,
      "start": 315,
      "end": 337
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtendedMapper1",
        "optional": false,
        "typeAnnotation": null,
        "start": 345,
        "end": 360
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "HandledInputT",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 374
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 361,
            "end": 374
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "OutputT",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 383
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 376,
            "end": 383
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArgsT",
              "optional": false,
              "typeAnnotation": null,
              "start": 385,
              "end": 390
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 399,
                "end": 402
              },
              "start": 399,
              "end": 404
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 385,
            "end": 404
          }
        ],
        "start": 360,
        "end": 405
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 422,
                "end": 428
              },
              "start": 420,
              "end": 428
            },
            "start": 415,
            "end": 428
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "mixed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HandledInputT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 438,
                  "end": 451
                },
                "typeArguments": null,
                "start": 438,
                "end": 451
              },
              "start": 436,
              "end": 451
            },
            "start": 430,
            "end": 451
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
              "start": 456,
              "end": 460
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArgsT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 463,
                  "end": 468
                },
                "typeArguments": null,
                "start": 463,
                "end": 468
              },
              "start": 461,
              "end": 468
            },
            "value": null,
            "start": 453,
            "end": 468
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "OutputT",
              "optional": false,
              "typeAnnotation": null,
              "start": 473,
              "end": 480
            },
            "typeArguments": null,
            "start": 473,
            "end": 480
          },
          "start": 470,
          "end": 480
        },
        "start": 414,
        "end": 480
      },
      "declare": false,
      "start": 340,
      "end": 483
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a1",
        "optional": false,
        "typeAnnotation": null,
        "start": 490,
        "end": 492
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExtendedMapper1",
          "optional": false,
          "typeAnnotation": null,
          "start": 495,
          "end": 510
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 511,
              "end": 514
            },
            {
              "type": "TSAnyKeyword",
              "start": 516,
              "end": 519
            },
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSAnyKeyword",
                  "start": 522,
                  "end": 525
                }
              ],
              "start": 521,
              "end": 526
            }
          ],
          "start": 510,
          "end": 527
        },
        "start": 495,
        "end": 527
      },
      "declare": false,
      "start": 485,
      "end": 528
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b1",
        "optional": false,
        "typeAnnotation": null,
        "start": 534,
        "end": 536
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExtendedMapper1",
          "optional": false,
          "typeAnnotation": null,
          "start": 539,
          "end": 554
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 555,
              "end": 558
            },
            {
              "type": "TSAnyKeyword",
              "start": 560,
              "end": 563
            },
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 565,
                "end": 568
              },
              "start": 565,
              "end": 570
            }
          ],
          "start": 554,
          "end": 571
        },
        "start": 539,
        "end": 571
      },
      "declare": false,
      "start": 529,
      "end": 572
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 578,
        "end": 583
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 586,
            "end": 588
          },
          "typeArguments": null,
          "start": 586,
          "end": 588
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 597,
            "end": 599
          },
          "typeArguments": null,
          "start": 597,
          "end": 599
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "y",
            "raw": "\"y\"",
            "start": 602,
            "end": 605
          },
          "start": 602,
          "end": 605
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "n",
            "raw": "\"n\"",
            "start": 608,
            "end": 611
          },
          "start": 608,
          "end": 611
        },
        "start": 586,
        "end": 611
      },
      "declare": false,
      "start": 573,
      "end": 611
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
            "name": "check1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 624,
                  "end": 629
                },
                "typeArguments": null,
                "start": 624,
                "end": 629
              },
              "start": 622,
              "end": 629
            },
            "start": 616,
            "end": 629
          },
          "init": {
            "type": "Literal",
            "value": "y",
            "raw": "\"y\"",
            "start": 632,
            "end": 635
          },
          "definite": false,
          "start": 616,
          "end": 635
        }
      ],
      "declare": false,
      "start": 612,
      "end": 636
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtendedMapper2",
        "optional": false,
        "typeAnnotation": null,
        "start": 643,
        "end": 658
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "HandledInputT",
              "optional": false,
              "typeAnnotation": null,
              "start": 659,
              "end": 672
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 659,
            "end": 672
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "OutputT",
              "optional": false,
              "typeAnnotation": null,
              "start": 674,
              "end": 681
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 674,
            "end": 681
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArgsT",
              "optional": false,
              "typeAnnotation": null,
              "start": 683,
              "end": 688
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 697,
                "end": 700
              },
              "start": 697,
              "end": 702
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 683,
            "end": 702
          }
        ],
        "start": 658,
        "end": 703
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
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
                "start": 713,
                "end": 714
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 723,
                          "end": 729
                        },
                        "start": 721,
                        "end": 729
                      },
                      "start": 716,
                      "end": 729
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mixed",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "HandledInputT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 739,
                            "end": 752
                          },
                          "typeArguments": null,
                          "start": 739,
                          "end": 752
                        },
                        "start": 737,
                        "end": 752
                      },
                      "start": 731,
                      "end": 752
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
                        "start": 757,
                        "end": 761
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ArgsT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 764,
                            "end": 769
                          },
                          "typeArguments": null,
                          "start": 764,
                          "end": 769
                        },
                        "start": 762,
                        "end": 769
                      },
                      "value": null,
                      "start": 754,
                      "end": 769
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OutputT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 774,
                        "end": 781
                      },
                      "typeArguments": null,
                      "start": 774,
                      "end": 781
                    },
                    "start": 771,
                    "end": 781
                  },
                  "start": 715,
                  "end": 781
                },
                "start": 714,
                "end": 781
              },
              "accessibility": null,
              "static": false,
              "start": 713,
              "end": 781
            }
          ],
          "start": 712,
          "end": 782
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 783,
            "end": 786
          },
          "start": 783,
          "end": 786
        },
        "start": 712,
        "end": 787
      },
      "declare": false,
      "start": 638,
      "end": 790
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a2",
        "optional": false,
        "typeAnnotation": null,
        "start": 797,
        "end": 799
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExtendedMapper2",
          "optional": false,
          "typeAnnotation": null,
          "start": 802,
          "end": 817
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 818,
              "end": 821
            },
            {
              "type": "TSAnyKeyword",
              "start": 823,
              "end": 826
            },
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSAnyKeyword",
                  "start": 829,
                  "end": 832
                }
              ],
              "start": 828,
              "end": 833
            }
          ],
          "start": 817,
          "end": 834
        },
        "start": 802,
        "end": 834
      },
      "declare": false,
      "start": 792,
      "end": 835
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b2",
        "optional": false,
        "typeAnnotation": null,
        "start": 841,
        "end": 843
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExtendedMapper2",
          "optional": false,
          "typeAnnotation": null,
          "start": 846,
          "end": 861
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 862,
              "end": 865
            },
            {
              "type": "TSAnyKeyword",
              "start": 867,
              "end": 870
            },
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 872,
                "end": 875
              },
              "start": 872,
              "end": 877
            }
          ],
          "start": 861,
          "end": 878
        },
        "start": 846,
        "end": 878
      },
      "declare": false,
      "start": 836,
      "end": 879
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 885,
        "end": 890
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 893,
            "end": 895
          },
          "typeArguments": null,
          "start": 893,
          "end": 895
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 904,
            "end": 906
          },
          "typeArguments": null,
          "start": 904,
          "end": 906
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "y",
            "raw": "\"y\"",
            "start": 909,
            "end": 912
          },
          "start": 909,
          "end": 912
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "n",
            "raw": "\"n\"",
            "start": 915,
            "end": 918
          },
          "start": 915,
          "end": 918
        },
        "start": 893,
        "end": 918
      },
      "declare": false,
      "start": 880,
      "end": 918
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
            "name": "check2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 931,
                  "end": 936
                },
                "typeArguments": null,
                "start": 931,
                "end": 936
              },
              "start": 929,
              "end": 936
            },
            "start": 923,
            "end": 936
          },
          "init": {
            "type": "Literal",
            "value": "y",
            "raw": "\"y\"",
            "start": 939,
            "end": 942
          },
          "definite": false,
          "start": 923,
          "end": 942
        }
      ],
      "declare": false,
      "start": 919,
      "end": 943
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a3",
        "optional": false,
        "typeAnnotation": null,
        "start": 950,
        "end": 952
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 962,
                "end": 968
              },
              "start": 960,
              "end": 968
            },
            "start": 956,
            "end": 968
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "mixed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 977,
                "end": 980
              },
              "start": 975,
              "end": 980
            },
            "start": 970,
            "end": 980
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "args_0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 990,
                "end": 993
              },
              "start": 988,
              "end": 993
            },
            "start": 982,
            "end": 993
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 998,
            "end": 1001
          },
          "start": 995,
          "end": 1001
        },
        "start": 955,
        "end": 1001
      },
      "declare": false,
      "start": 945,
      "end": 1001
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1007,
        "end": 1009
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1019,
                "end": 1025
              },
              "start": 1017,
              "end": 1025
            },
            "start": 1013,
            "end": 1025
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "mixed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1034,
                "end": 1037
              },
              "start": 1032,
              "end": 1037
            },
            "start": 1027,
            "end": 1037
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
              "start": 1042,
              "end": 1046
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 1048,
                  "end": 1051
                },
                "start": 1048,
                "end": 1053
              },
              "start": 1046,
              "end": 1053
            },
            "value": null,
            "start": 1039,
            "end": 1053
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 1058,
            "end": 1061
          },
          "start": 1055,
          "end": 1061
        },
        "start": 1012,
        "end": 1061
      },
      "declare": false,
      "start": 1002,
      "end": 1061
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1068,
        "end": 1073
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1076,
            "end": 1078
          },
          "typeArguments": null,
          "start": 1076,
          "end": 1078
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1087,
            "end": 1089
          },
          "typeArguments": null,
          "start": 1087,
          "end": 1089
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "y",
            "raw": "\"y\"",
            "start": 1092,
            "end": 1095
          },
          "start": 1092,
          "end": 1095
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "n",
            "raw": "\"n\"",
            "start": 1098,
            "end": 1101
          },
          "start": 1098,
          "end": 1101
        },
        "start": 1076,
        "end": 1101
      },
      "declare": false,
      "start": 1063,
      "end": 1101
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
            "name": "check3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1114,
                  "end": 1119
                },
                "typeArguments": null,
                "start": 1114,
                "end": 1119
              },
              "start": 1112,
              "end": 1119
            },
            "start": 1106,
            "end": 1119
          },
          "init": {
            "type": "Literal",
            "value": "y",
            "raw": "\"y\"",
            "start": 1122,
            "end": 1125
          },
          "definite": false,
          "start": 1106,
          "end": 1125
        }
      ],
      "declare": false,
      "start": 1102,
      "end": 1126
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 60,
  "end": 1126
}
```
