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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 60,
    "end": 64,
    "range": [
      60,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtendedMapper",
    "start": 65,
    "end": 79,
    "range": [
      65,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "HandledInputT",
    "start": 80,
    "end": 93,
    "range": [
      80,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "OutputT",
    "start": 95,
    "end": 102,
    "range": [
      95,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "ArgsT",
    "start": 104,
    "end": 109,
    "range": [
      104,
      109
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 110,
    "end": 117,
    "range": [
      110,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 118,
    "end": 121,
    "range": [
      118,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 128,
    "end": 132,
    "range": [
      128,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 135,
    "end": 141,
    "range": [
      135,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "mixed",
    "start": 143,
    "end": 148,
    "range": [
      143,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "HandledInputT",
    "start": 151,
    "end": 164,
    "range": [
      151,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 166,
    "end": 169,
    "range": [
      166,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 169,
    "end": 173,
    "range": [
      169,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "ArgsT",
    "start": 176,
    "end": 181,
    "range": [
      176,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 183,
    "end": 185,
    "range": [
      183,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "OutputT",
    "start": 186,
    "end": 193,
    "range": [
      186,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 195,
    "end": 199,
    "range": [
      195,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtendedMapper",
    "start": 204,
    "end": 218,
    "range": [
      204,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 219,
    "end": 222,
    "range": [
      219,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 224,
    "end": 227,
    "range": [
      224,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 230,
    "end": 233,
    "range": [
      230,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 237,
    "end": 241,
    "range": [
      237,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtendedMapper",
    "start": 246,
    "end": 260,
    "range": [
      246,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 261,
    "end": 264,
    "range": [
      261,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 266,
    "end": 269,
    "range": [
      266,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 271,
    "end": 274,
    "range": [
      271,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 279,
    "end": 283,
    "range": [
      279,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 284,
    "end": 288,
    "range": [
      284,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 293,
    "end": 300,
    "range": [
      293,
      300
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 305,
    "end": 308,
    "range": [
      305,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "String",
    "value": "\"n\"",
    "start": 311,
    "end": 314,
    "range": [
      311,
      314
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 315,
    "end": 318,
    "range": [
      315,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "check",
    "start": 319,
    "end": 324,
    "range": [
      319,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 326,
    "end": 330,
    "range": [
      326,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 333,
    "end": 336,
    "range": [
      333,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 340,
    "end": 344,
    "range": [
      340,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtendedMapper1",
    "start": 345,
    "end": 360,
    "range": [
      345,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "HandledInputT",
    "start": 361,
    "end": 374,
    "range": [
      361,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "OutputT",
    "start": 376,
    "end": 383,
    "range": [
      376,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "ArgsT",
    "start": 385,
    "end": 390,
    "range": [
      385,
      390
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 391,
    "end": 398,
    "range": [
      391,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 399,
    "end": 402,
    "range": [
      399,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 415,
    "end": 419,
    "range": [
      415,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 422,
    "end": 428,
    "range": [
      422,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "mixed",
    "start": 430,
    "end": 435,
    "range": [
      430,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "HandledInputT",
    "start": 438,
    "end": 451,
    "range": [
      438,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 453,
    "end": 456,
    "range": [
      453,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 456,
    "end": 460,
    "range": [
      456,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Identifier",
    "value": "ArgsT",
    "start": 463,
    "end": 468,
    "range": [
      463,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 470,
    "end": 472,
    "range": [
      470,
      472
    ]
  },
  {
    "type": "Identifier",
    "value": "OutputT",
    "start": 473,
    "end": 480,
    "range": [
      473,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 485,
    "end": 489,
    "range": [
      485,
      489
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 490,
    "end": 492,
    "range": [
      490,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtendedMapper1",
    "start": 495,
    "end": 510,
    "range": [
      495,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 511,
    "end": 514,
    "range": [
      511,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 516,
    "end": 519,
    "range": [
      516,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 522,
    "end": 525,
    "range": [
      522,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 529,
    "end": 533,
    "range": [
      529,
      533
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 534,
    "end": 536,
    "range": [
      534,
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
    "type": "Identifier",
    "value": "ExtendedMapper1",
    "start": 539,
    "end": 554,
    "range": [
      539,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 555,
    "end": 558,
    "range": [
      555,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 560,
    "end": 563,
    "range": [
      560,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 565,
    "end": 568,
    "range": [
      565,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 573,
    "end": 577,
    "range": [
      573,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 578,
    "end": 583,
    "range": [
      578,
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
    "type": "Identifier",
    "value": "a1",
    "start": 586,
    "end": 588,
    "range": [
      586,
      588
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 589,
    "end": 596,
    "range": [
      589,
      596
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 597,
    "end": 599,
    "range": [
      597,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 602,
    "end": 605,
    "range": [
      602,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "String",
    "value": "\"n\"",
    "start": 608,
    "end": 611,
    "range": [
      608,
      611
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 612,
    "end": 615,
    "range": [
      612,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "check1",
    "start": 616,
    "end": 622,
    "range": [
      616,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 624,
    "end": 629,
    "range": [
      624,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 632,
    "end": 635,
    "range": [
      632,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 638,
    "end": 642,
    "range": [
      638,
      642
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtendedMapper2",
    "start": 643,
    "end": 658,
    "range": [
      643,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Identifier",
    "value": "HandledInputT",
    "start": 659,
    "end": 672,
    "range": [
      659,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Identifier",
    "value": "OutputT",
    "start": 674,
    "end": 681,
    "range": [
      674,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "ArgsT",
    "start": 683,
    "end": 688,
    "range": [
      683,
      688
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 689,
    "end": 696,
    "range": [
      689,
      696
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 697,
    "end": 700,
    "range": [
      697,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 716,
    "end": 720,
    "range": [
      716,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 723,
    "end": 729,
    "range": [
      723,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Identifier",
    "value": "mixed",
    "start": 731,
    "end": 736,
    "range": [
      731,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Identifier",
    "value": "HandledInputT",
    "start": 739,
    "end": 752,
    "range": [
      739,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 754,
    "end": 757,
    "range": [
      754,
      757
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 757,
    "end": 761,
    "range": [
      757,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Identifier",
    "value": "ArgsT",
    "start": 764,
    "end": 769,
    "range": [
      764,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 771,
    "end": 773,
    "range": [
      771,
      773
    ]
  },
  {
    "type": "Identifier",
    "value": "OutputT",
    "start": 774,
    "end": 781,
    "range": [
      774,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 783,
    "end": 786,
    "range": [
      783,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 792,
    "end": 796,
    "range": [
      792,
      796
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 797,
    "end": 799,
    "range": [
      797,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtendedMapper2",
    "start": 802,
    "end": 817,
    "range": [
      802,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 818,
    "end": 821,
    "range": [
      818,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 823,
    "end": 826,
    "range": [
      823,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 829,
    "end": 832,
    "range": [
      829,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 836,
    "end": 840,
    "range": [
      836,
      840
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 841,
    "end": 843,
    "range": [
      841,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Identifier",
    "value": "ExtendedMapper2",
    "start": 846,
    "end": 861,
    "range": [
      846,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 862,
    "end": 865,
    "range": [
      862,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 867,
    "end": 870,
    "range": [
      867,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 872,
    "end": 875,
    "range": [
      872,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 880,
    "end": 884,
    "range": [
      880,
      884
    ]
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 885,
    "end": 890,
    "range": [
      885,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 893,
    "end": 895,
    "range": [
      893,
      895
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 896,
    "end": 903,
    "range": [
      896,
      903
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 904,
    "end": 906,
    "range": [
      904,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 909,
    "end": 912,
    "range": [
      909,
      912
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "String",
    "value": "\"n\"",
    "start": 915,
    "end": 918,
    "range": [
      915,
      918
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 919,
    "end": 922,
    "range": [
      919,
      922
    ]
  },
  {
    "type": "Identifier",
    "value": "check2",
    "start": 923,
    "end": 929,
    "range": [
      923,
      929
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 931,
    "end": 936,
    "range": [
      931,
      936
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 939,
    "end": 942,
    "range": [
      939,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 945,
    "end": 949,
    "range": [
      945,
      949
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 950,
    "end": 952,
    "range": [
      950,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 956,
    "end": 960,
    "range": [
      956,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 962,
    "end": 968,
    "range": [
      962,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Identifier",
    "value": "mixed",
    "start": 970,
    "end": 975,
    "range": [
      970,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 977,
    "end": 980,
    "range": [
      977,
      980
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 980,
    "end": 981,
    "range": [
      980,
      981
    ]
  },
  {
    "type": "Identifier",
    "value": "args_0",
    "start": 982,
    "end": 988,
    "range": [
      982,
      988
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 988,
    "end": 989,
    "range": [
      988,
      989
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 990,
    "end": 993,
    "range": [
      990,
      993
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 995,
    "end": 997,
    "range": [
      995,
      997
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 998,
    "end": 1001,
    "range": [
      998,
      1001
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1002,
    "end": 1006,
    "range": [
      1002,
      1006
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1007,
    "end": 1009,
    "range": [
      1007,
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
    "type": "Punctuator",
    "value": "(",
    "start": 1012,
    "end": 1013,
    "range": [
      1012,
      1013
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1013,
    "end": 1017,
    "range": [
      1013,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1019,
    "end": 1025,
    "range": [
      1019,
      1025
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Identifier",
    "value": "mixed",
    "start": 1027,
    "end": 1032,
    "range": [
      1027,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1034,
    "end": 1037,
    "range": [
      1034,
      1037
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1037,
    "end": 1038,
    "range": [
      1037,
      1038
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1039,
    "end": 1042,
    "range": [
      1039,
      1042
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1042,
    "end": 1046,
    "range": [
      1042,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1048,
    "end": 1051,
    "range": [
      1048,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1055,
    "end": 1057,
    "range": [
      1055,
      1057
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1058,
    "end": 1061,
    "range": [
      1058,
      1061
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1063,
    "end": 1067,
    "range": [
      1063,
      1067
    ]
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 1068,
    "end": 1073,
    "range": [
      1068,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1076,
    "end": 1078,
    "range": [
      1076,
      1078
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1079,
    "end": 1086,
    "range": [
      1079,
      1086
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1087,
    "end": 1089,
    "range": [
      1087,
      1089
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 1092,
    "end": 1095,
    "range": [
      1092,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1096,
    "end": 1097,
    "range": [
      1096,
      1097
    ]
  },
  {
    "type": "String",
    "value": "\"n\"",
    "start": 1098,
    "end": 1101,
    "range": [
      1098,
      1101
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1102,
    "end": 1105,
    "range": [
      1102,
      1105
    ]
  },
  {
    "type": "Identifier",
    "value": "check3",
    "start": 1106,
    "end": 1112,
    "range": [
      1106,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 1114,
    "end": 1119,
    "range": [
      1114,
      1119
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 1122,
    "end": 1125,
    "range": [
      1122,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  }
]
```
