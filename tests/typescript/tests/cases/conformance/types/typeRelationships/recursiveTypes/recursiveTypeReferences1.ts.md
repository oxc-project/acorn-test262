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
        "name": "ValueOrArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 17
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
              "start": 18,
              "end": 19
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 18,
            "end": 19
          }
        ],
        "start": 17,
        "end": 20
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 32
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ValueOrArray",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 33,
                    "end": 45
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
                          "start": 46,
                          "end": 47
                        },
                        "typeArguments": null,
                        "start": 46,
                        "end": 47
                      }
                    ],
                    "start": 45,
                    "end": 48
                  },
                  "start": 33,
                  "end": 48
                }
              ],
              "start": 32,
              "end": 49
            },
            "start": 27,
            "end": 49
          }
        ],
        "start": 23,
        "end": 49
      },
      "declare": false,
      "start": 0,
      "end": 50
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
            "name": "a0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ValueOrArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 74
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 75,
                      "end": 81
                    }
                  ],
                  "start": 74,
                  "end": 82
                },
                "start": 62,
                "end": 82
              },
              "start": 60,
              "end": 82
            },
            "start": 58,
            "end": 82
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 85,
            "end": 86
          },
          "definite": false,
          "start": 58,
          "end": 86
        }
      ],
      "declare": false,
      "start": 52,
      "end": 87
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ValueOrArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 98,
                  "end": 110
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 111,
                      "end": 117
                    }
                  ],
                  "start": 110,
                  "end": 118
                },
                "start": 98,
                "end": 118
              },
              "start": 96,
              "end": 118
            },
            "start": 94,
            "end": 118
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 122,
                "end": 123
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 126,
                    "end": 127
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 129,
                    "end": 130
                  }
                ],
                "start": 125,
                "end": 131
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 134,
                    "end": 135
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 138,
                        "end": 139
                      },
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 6,
                            "raw": "6",
                            "start": 142,
                            "end": 143
                          },
                          {
                            "type": "Literal",
                            "value": 7,
                            "raw": "7",
                            "start": 145,
                            "end": 146
                          }
                        ],
                        "start": 141,
                        "end": 147
                      }
                    ],
                    "start": 137,
                    "end": 148
                  }
                ],
                "start": 133,
                "end": 149
              }
            ],
            "start": 121,
            "end": 150
          },
          "definite": false,
          "start": 94,
          "end": 150
        }
      ],
      "declare": false,
      "start": 88,
      "end": 151
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HypertextNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 171
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 174,
            "end": 180
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              },
              {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 200,
                            "end": 206
                          },
                          "start": 198,
                          "end": 206
                        },
                        "start": 195,
                        "end": 206
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 209,
                        "end": 216
                      },
                      "start": 207,
                      "end": 216
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 194,
                    "end": 216
                  }
                ],
                "start": 192,
                "end": 218
              },
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HypertextNode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 223,
                      "end": 236
                    },
                    "typeArguments": null,
                    "start": 223,
                    "end": 236
                  },
                  "start": 223,
                  "end": 238
                },
                "start": 220,
                "end": 238
              }
            ],
            "start": 183,
            "end": 239
          }
        ],
        "start": 174,
        "end": 239
      },
      "declare": false,
      "start": 153,
      "end": 240
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
            "name": "hypertextNode",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HypertextNode",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 263,
                  "end": 276
                },
                "typeArguments": null,
                "start": 263,
                "end": 276
              },
              "start": 261,
              "end": 276
            },
            "start": 248,
            "end": 276
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "div",
                "raw": "\"div\"",
                "start": 284,
                "end": 289
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 293,
                      "end": 295
                    },
                    "value": {
                      "type": "Literal",
                      "value": "parent",
                      "raw": "\"parent\"",
                      "start": 297,
                      "end": 305
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 293,
                    "end": 305
                  }
                ],
                "start": 291,
                "end": 307
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "div",
                    "raw": "\"div\"",
                    "start": 318,
                    "end": 323
                  },
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "id",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 327,
                          "end": 329
                        },
                        "value": {
                          "type": "Literal",
                          "value": "first-child",
                          "raw": "\"first-child\"",
                          "start": 331,
                          "end": 344
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 327,
                        "end": 344
                      }
                    ],
                    "start": 325,
                    "end": 346
                  },
                  {
                    "type": "Literal",
                    "value": "I'm the first child",
                    "raw": "\"I'm the first child\"",
                    "start": 348,
                    "end": 369
                  }
                ],
                "start": 317,
                "end": 370
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "div",
                    "raw": "\"div\"",
                    "start": 381,
                    "end": 386
                  },
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "id",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 390,
                          "end": 392
                        },
                        "value": {
                          "type": "Literal",
                          "value": "second-child",
                          "raw": "\"second-child\"",
                          "start": 394,
                          "end": 408
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 390,
                        "end": 408
                      }
                    ],
                    "start": 388,
                    "end": 410
                  },
                  {
                    "type": "Literal",
                    "value": "I'm the second child",
                    "raw": "\"I'm the second child\"",
                    "start": 412,
                    "end": 434
                  }
                ],
                "start": 380,
                "end": 435
              }
            ],
            "start": 283,
            "end": 441
          },
          "definite": false,
          "start": 248,
          "end": 441
        }
      ],
      "declare": false,
      "start": 242,
      "end": 442
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Json",
        "optional": false,
        "typeAnnotation": null,
        "start": 449,
        "end": 453
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 456,
            "end": 462
          },
          {
            "type": "TSNumberKeyword",
            "start": 465,
            "end": 471
          },
          {
            "type": "TSBooleanKeyword",
            "start": 474,
            "end": 481
          },
          {
            "type": "TSNullKeyword",
            "start": 484,
            "end": 488
          },
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Json",
                "optional": false,
                "typeAnnotation": null,
                "start": 491,
                "end": 495
              },
              "typeArguments": null,
              "start": 491,
              "end": 495
            },
            "start": 491,
            "end": 497
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSIndexSignature",
                "parameters": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 508,
                        "end": 514
                      },
                      "start": 506,
                      "end": 514
                    },
                    "start": 503,
                    "end": 514
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Json",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 517,
                      "end": 521
                    },
                    "typeArguments": null,
                    "start": 517,
                    "end": 521
                  },
                  "start": 515,
                  "end": 521
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 502,
                "end": 521
              }
            ],
            "start": 500,
            "end": 523
          }
        ],
        "start": 456,
        "end": 523
      },
      "declare": false,
      "start": 444,
      "end": 524
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
            "name": "data",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Json",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 536,
                  "end": 540
                },
                "typeArguments": null,
                "start": 536,
                "end": 540
              },
              "start": 534,
              "end": 540
            },
            "start": 530,
            "end": 540
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "caption",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 549,
                  "end": 556
                },
                "value": {
                  "type": "Literal",
                  "value": "Test",
                  "raw": "\"Test\"",
                  "start": 558,
                  "end": 564
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 549,
                "end": 564
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "location",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 570,
                  "end": 578
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 582,
                        "end": 583
                      },
                      "value": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 585,
                        "end": 587
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 582,
                      "end": 587
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 589,
                        "end": 590
                      },
                      "value": {
                        "type": "Literal",
                        "value": 20,
                        "raw": "20",
                        "start": 592,
                        "end": 594
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 589,
                      "end": 594
                    }
                  ],
                  "start": 580,
                  "end": 596
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 570,
                "end": 596
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 602,
                  "end": 608
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 611,
                      "end": 615
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 618,
                          "end": 620
                        },
                        {
                          "type": "Literal",
                          "value": 20,
                          "raw": "20",
                          "start": 622,
                          "end": 624
                        }
                      ],
                      "start": 617,
                      "end": 625
                    },
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 627,
                      "end": 631
                    }
                  ],
                  "start": 610,
                  "end": 632
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 602,
                "end": 632
              }
            ],
            "start": 543,
            "end": 634
          },
          "definite": false,
          "start": 530,
          "end": 634
        }
      ],
      "declare": false,
      "start": 526,
      "end": 635
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 647,
        "end": 650
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
              "start": 651,
              "end": 652
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 651,
            "end": 652
          }
        ],
        "start": 650,
        "end": 653
      },
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 656,
              "end": 661
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
                  "start": 663,
                  "end": 664
                },
                "typeArguments": null,
                "start": 663,
                "end": 664
              },
              "start": 661,
              "end": 664
            },
            "accessibility": null,
            "static": false,
            "start": 656,
            "end": 664
          }
        ],
        "start": 654,
        "end": 666
      },
      "declare": false,
      "start": 637,
      "end": 666
    },
    {
      "type": "EmptyStatement",
      "start": 666,
      "end": 667
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 674,
        "end": 676
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "typeAnnotation": null,
          "start": 679,
          "end": 682
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 683,
                "end": 685
              },
              "typeArguments": null,
              "start": 683,
              "end": 685
            }
          ],
          "start": 682,
          "end": 686
        },
        "start": 679,
        "end": 686
      },
      "declare": false,
      "start": 669,
      "end": 687
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 693,
        "end": 695
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "typeAnnotation": null,
          "start": 698,
          "end": 701
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Box",
                "optional": false,
                "typeAnnotation": null,
                "start": 702,
                "end": 705
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 706,
                      "end": 708
                    },
                    "typeArguments": null,
                    "start": 706,
                    "end": 708
                  }
                ],
                "start": 705,
                "end": 709
              },
              "start": 702,
              "end": 709
            }
          ],
          "start": 701,
          "end": 710
        },
        "start": 698,
        "end": 710
      },
      "declare": false,
      "start": 688,
      "end": 711
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 717,
        "end": 719
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "typeAnnotation": null,
          "start": 722,
          "end": 725
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Box",
                "optional": false,
                "typeAnnotation": null,
                "start": 726,
                "end": 729
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Box",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 730,
                      "end": 733
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 734,
                            "end": 736
                          },
                          "typeArguments": null,
                          "start": 734,
                          "end": 736
                        }
                      ],
                      "start": 733,
                      "end": 737
                    },
                    "start": 730,
                    "end": 737
                  }
                ],
                "start": 729,
                "end": 738
              },
              "start": 726,
              "end": 738
            }
          ],
          "start": 725,
          "end": 739
        },
        "start": 722,
        "end": 739
      },
      "declare": false,
      "start": 712,
      "end": 740
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 751,
        "end": 753
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 758,
                "end": 760
              },
              "typeArguments": null,
              "start": 758,
              "end": 760
            },
            "start": 756,
            "end": 760
          },
          "start": 754,
          "end": 760
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 766,
                "end": 768
              },
              "typeArguments": null,
              "start": 766,
              "end": 768
            },
            "start": 764,
            "end": 768
          },
          "start": 762,
          "end": 768
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T3",
                "optional": false,
                "typeAnnotation": null,
                "start": 774,
                "end": 776
              },
              "typeArguments": null,
              "start": 774,
              "end": 776
            },
            "start": 772,
            "end": 776
          },
          "start": 770,
          "end": 776
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 784,
                "end": 786
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 789,
                "end": 791
              },
              "start": 784,
              "end": 791
            },
            "directive": null,
            "start": 784,
            "end": 792
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 797,
                "end": 799
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 802,
                "end": 804
              },
              "start": 797,
              "end": 804
            },
            "directive": null,
            "start": 797,
            "end": 805
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 810,
                "end": 812
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 815,
                "end": 817
              },
              "start": 810,
              "end": 817
            },
            "directive": null,
            "start": 810,
            "end": 818
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 823,
                "end": 825
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 828,
                "end": 830
              },
              "start": 823,
              "end": 830
            },
            "directive": null,
            "start": 823,
            "end": 831
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 836,
                "end": 838
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 841,
                "end": 843
              },
              "start": 836,
              "end": 843
            },
            "directive": null,
            "start": 836,
            "end": 844
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 849,
                "end": 851
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 854,
                "end": 856
              },
              "start": 849,
              "end": 856
            },
            "directive": null,
            "start": 849,
            "end": 857
          }
        ],
        "start": 778,
        "end": 859
      },
      "expression": false,
      "start": 742,
      "end": 859
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box1",
        "optional": false,
        "typeAnnotation": null,
        "start": 866,
        "end": 870
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Box",
              "optional": false,
              "typeAnnotation": null,
              "start": 873,
              "end": 876
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Box1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 877,
                    "end": 881
                  },
                  "typeArguments": null,
                  "start": 877,
                  "end": 881
                }
              ],
              "start": 876,
              "end": 882
            },
            "start": 873,
            "end": 882
          },
          {
            "type": "TSNumberKeyword",
            "start": 885,
            "end": 891
          }
        ],
        "start": 873,
        "end": 891
      },
      "declare": false,
      "start": 861,
      "end": 892
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
            "name": "b10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 905,
                  "end": 909
                },
                "typeArguments": null,
                "start": 905,
                "end": 909
              },
              "start": 903,
              "end": 909
            },
            "start": 900,
            "end": 909
          },
          "init": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 912,
            "end": 914
          },
          "definite": false,
          "start": 900,
          "end": 914
        }
      ],
      "declare": false,
      "start": 894,
      "end": 915
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
            "name": "b11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 927,
                  "end": 931
                },
                "typeArguments": null,
                "start": 927,
                "end": 931
              },
              "start": 925,
              "end": 931
            },
            "start": 922,
            "end": 931
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 936,
                  "end": 941
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 943,
                  "end": 945
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 936,
                "end": 945
              }
            ],
            "start": 934,
            "end": 947
          },
          "definite": false,
          "start": 922,
          "end": 947
        }
      ],
      "declare": false,
      "start": 916,
      "end": 948
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
            "name": "b12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 960,
                  "end": 964
                },
                "typeArguments": null,
                "start": 960,
                "end": 964
              },
              "start": 958,
              "end": 964
            },
            "start": 955,
            "end": 964
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 969,
                  "end": 974
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 978,
                        "end": 983
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 987,
                              "end": 992
                            },
                            "value": {
                              "type": "Literal",
                              "value": 42,
                              "raw": "42",
                              "start": 994,
                              "end": 996
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 987,
                            "end": 996
                          }
                        ],
                        "start": 985,
                        "end": 998
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 978,
                      "end": 998
                    }
                  ],
                  "start": 976,
                  "end": 999
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 969,
                "end": 999
              }
            ],
            "start": 967,
            "end": 1000
          },
          "definite": false,
          "start": 955,
          "end": 1000
        }
      ],
      "declare": false,
      "start": 949,
      "end": 1001
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1008,
        "end": 1012
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "typeAnnotation": null,
          "start": 1015,
          "end": 1018
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Box2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1019,
                    "end": 1023
                  },
                  "typeArguments": null,
                  "start": 1019,
                  "end": 1023
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1026,
                  "end": 1032
                }
              ],
              "start": 1019,
              "end": 1032
            }
          ],
          "start": 1018,
          "end": 1033
        },
        "start": 1015,
        "end": 1033
      },
      "declare": false,
      "start": 1003,
      "end": 1034
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
            "name": "b20",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1047,
                  "end": 1051
                },
                "typeArguments": null,
                "start": 1047,
                "end": 1051
              },
              "start": 1045,
              "end": 1051
            },
            "start": 1042,
            "end": 1051
          },
          "init": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1054,
            "end": 1056
          },
          "definite": false,
          "start": 1042,
          "end": 1056
        }
      ],
      "declare": false,
      "start": 1036,
      "end": 1057
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
            "name": "b21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1079,
                  "end": 1083
                },
                "typeArguments": null,
                "start": 1079,
                "end": 1083
              },
              "start": 1077,
              "end": 1083
            },
            "start": 1074,
            "end": 1083
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1088,
                  "end": 1093
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 1095,
                  "end": 1097
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1088,
                "end": 1097
              }
            ],
            "start": 1086,
            "end": 1099
          },
          "definite": false,
          "start": 1074,
          "end": 1099
        }
      ],
      "declare": false,
      "start": 1068,
      "end": 1100
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
            "name": "b22",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Box2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1112,
                  "end": 1116
                },
                "typeArguments": null,
                "start": 1112,
                "end": 1116
              },
              "start": 1110,
              "end": 1116
            },
            "start": 1107,
            "end": 1116
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1121,
                  "end": 1126
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1130,
                        "end": 1135
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1139,
                              "end": 1144
                            },
                            "value": {
                              "type": "Literal",
                              "value": 42,
                              "raw": "42",
                              "start": 1146,
                              "end": 1148
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1139,
                            "end": 1148
                          }
                        ],
                        "start": 1137,
                        "end": 1150
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1130,
                      "end": 1150
                    }
                  ],
                  "start": 1128,
                  "end": 1151
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1121,
                "end": 1151
              }
            ],
            "start": 1119,
            "end": 1152
          },
          "definite": false,
          "start": 1107,
          "end": 1152
        }
      ],
      "declare": false,
      "start": 1101,
      "end": 1153
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RecArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 1160,
        "end": 1168
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
              "start": 1169,
              "end": 1170
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1169,
            "end": 1170
          }
        ],
        "start": 1168,
        "end": 1171
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null,
          "start": 1174,
          "end": 1179
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1180,
                    "end": 1181
                  },
                  "typeArguments": null,
                  "start": 1180,
                  "end": 1181
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RecArray",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1184,
                    "end": 1192
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
                          "start": 1193,
                          "end": 1194
                        },
                        "typeArguments": null,
                        "start": 1193,
                        "end": 1194
                      }
                    ],
                    "start": 1192,
                    "end": 1195
                  },
                  "start": 1184,
                  "end": 1195
                }
              ],
              "start": 1180,
              "end": 1195
            }
          ],
          "start": 1179,
          "end": 1196
        },
        "start": 1174,
        "end": 1196
      },
      "declare": false,
      "start": 1155,
      "end": 1197
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "flat",
        "optional": false,
        "typeAnnotation": null,
        "start": 1216,
        "end": 1220
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1221,
              "end": 1222
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1221,
            "end": 1222
          }
        ],
        "start": 1220,
        "end": 1223
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RecArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 1227,
                "end": 1235
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
                      "start": 1236,
                      "end": 1237
                    },
                    "typeArguments": null,
                    "start": 1236,
                    "end": 1237
                  }
                ],
                "start": 1235,
                "end": 1238
              },
              "start": 1227,
              "end": 1238
            },
            "start": 1225,
            "end": 1238
          },
          "start": 1224,
          "end": 1238
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1241,
            "end": 1246
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
                  "start": 1247,
                  "end": 1248
                },
                "typeArguments": null,
                "start": 1247,
                "end": 1248
              }
            ],
            "start": 1246,
            "end": 1249
          },
          "start": 1241,
          "end": 1249
        },
        "start": 1239,
        "end": 1249
      },
      "body": null,
      "expression": false,
      "start": 1199,
      "end": 1250
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "flat1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1268,
        "end": 1273
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1274,
              "end": 1275
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1274,
            "end": 1275
          }
        ],
        "start": 1273,
        "end": 1276
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 1280,
                "end": 1285
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1286,
                          "end": 1287
                        },
                        "typeArguments": null,
                        "start": 1286,
                        "end": 1287
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1290,
                          "end": 1295
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
                                "start": 1296,
                                "end": 1297
                              },
                              "typeArguments": null,
                              "start": 1296,
                              "end": 1297
                            }
                          ],
                          "start": 1295,
                          "end": 1298
                        },
                        "start": 1290,
                        "end": 1298
                      }
                    ],
                    "start": 1286,
                    "end": 1298
                  }
                ],
                "start": 1285,
                "end": 1299
              },
              "start": 1280,
              "end": 1299
            },
            "start": 1278,
            "end": 1299
          },
          "start": 1277,
          "end": 1299
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1302,
            "end": 1307
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
                  "start": 1308,
                  "end": 1309
                },
                "typeArguments": null,
                "start": 1308,
                "end": 1309
              }
            ],
            "start": 1307,
            "end": 1310
          },
          "start": 1302,
          "end": 1310
        },
        "start": 1300,
        "end": 1310
      },
      "body": null,
      "expression": false,
      "start": 1251,
      "end": 1310
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "flat2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1328,
        "end": 1333
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1334,
              "end": 1335
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1334,
            "end": 1335
          }
        ],
        "start": 1333,
        "end": 1336
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 1340,
                "end": 1345
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1346,
                          "end": 1347
                        },
                        "typeArguments": null,
                        "start": 1346,
                        "end": 1347
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1350,
                          "end": 1355
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1356,
                                    "end": 1357
                                  },
                                  "typeArguments": null,
                                  "start": 1356,
                                  "end": 1357
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Array",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1360,
                                    "end": 1365
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
                                          "start": 1366,
                                          "end": 1367
                                        },
                                        "typeArguments": null,
                                        "start": 1366,
                                        "end": 1367
                                      }
                                    ],
                                    "start": 1365,
                                    "end": 1368
                                  },
                                  "start": 1360,
                                  "end": 1368
                                }
                              ],
                              "start": 1356,
                              "end": 1368
                            }
                          ],
                          "start": 1355,
                          "end": 1369
                        },
                        "start": 1350,
                        "end": 1369
                      }
                    ],
                    "start": 1346,
                    "end": 1369
                  }
                ],
                "start": 1345,
                "end": 1370
              },
              "start": 1340,
              "end": 1370
            },
            "start": 1338,
            "end": 1370
          },
          "start": 1337,
          "end": 1370
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1373,
            "end": 1378
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
                  "start": 1379,
                  "end": 1380
                },
                "typeArguments": null,
                "start": 1379,
                "end": 1380
              }
            ],
            "start": 1378,
            "end": 1381
          },
          "start": 1373,
          "end": 1381
        },
        "start": 1371,
        "end": 1381
      },
      "body": null,
      "expression": false,
      "start": 1311,
      "end": 1382
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "flat",
          "optional": false,
          "typeAnnotation": null,
          "start": 1384,
          "end": 1388
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1390,
                "end": 1391
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1394,
                    "end": 1395
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 1398,
                        "end": 1399
                      }
                    ],
                    "start": 1397,
                    "end": 1400
                  }
                ],
                "start": 1393,
                "end": 1401
              }
            ],
            "start": 1389,
            "end": 1402
          }
        ],
        "optional": false,
        "start": 1384,
        "end": 1403
      },
      "directive": null,
      "start": 1384,
      "end": 1404
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "flat",
          "optional": false,
          "typeAnnotation": null,
          "start": 1418,
          "end": 1422
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1426,
                        "end": 1427
                      }
                    ],
                    "start": 1425,
                    "end": 1428
                  }
                ],
                "start": 1424,
                "end": 1429
              }
            ],
            "start": 1423,
            "end": 1430
          }
        ],
        "optional": false,
        "start": 1418,
        "end": 1431
      },
      "directive": null,
      "start": 1418,
      "end": 1432
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "flat",
          "optional": false,
          "typeAnnotation": null,
          "start": 1446,
          "end": 1450
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "ArrayExpression",
                                        "elements": [
                                          {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "ArrayExpression",
                                                "elements": [
                                                  {
                                                    "type": "ArrayExpression",
                                                    "elements": [
                                                      {
                                                        "type": "Literal",
                                                        "value": 4,
                                                        "raw": "4",
                                                        "start": 1462,
                                                        "end": 1463
                                                      }
                                                    ],
                                                    "start": 1461,
                                                    "end": 1464
                                                  }
                                                ],
                                                "start": 1460,
                                                "end": 1465
                                              }
                                            ],
                                            "start": 1459,
                                            "end": 1466
                                          }
                                        ],
                                        "start": 1458,
                                        "end": 1467
                                      }
                                    ],
                                    "start": 1457,
                                    "end": 1468
                                  }
                                ],
                                "start": 1456,
                                "end": 1469
                              }
                            ],
                            "start": 1455,
                            "end": 1470
                          }
                        ],
                        "start": 1454,
                        "end": 1471
                      }
                    ],
                    "start": 1453,
                    "end": 1472
                  }
                ],
                "start": 1452,
                "end": 1473
              }
            ],
            "start": 1451,
            "end": 1474
          }
        ],
        "optional": false,
        "start": 1446,
        "end": 1475
      },
      "directive": null,
      "start": 1446,
      "end": 1476
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "flat",
          "optional": false,
          "typeAnnotation": null,
          "start": 1490,
          "end": 1494
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1496,
                "end": 1497
              },
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 1499,
                "end": 1502
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1505,
                    "end": 1506
                  }
                ],
                "start": 1504,
                "end": 1507
              }
            ],
            "start": 1495,
            "end": 1508
          }
        ],
        "optional": false,
        "start": 1490,
        "end": 1509
      },
      "directive": null,
      "start": 1490,
      "end": 1510
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "flat",
          "optional": false,
          "typeAnnotation": null,
          "start": 1535,
          "end": 1539
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1541,
                "end": 1542
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1545,
                    "end": 1546
                  },
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 1548,
                    "end": 1551
                  }
                ],
                "start": 1544,
                "end": 1552
              }
            ],
            "start": 1540,
            "end": 1553
          }
        ],
        "optional": false,
        "start": 1535,
        "end": 1554
      },
      "directive": null,
      "start": 1535,
      "end": 1555
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "flat",
          "optional": false,
          "typeAnnotation": null,
          "start": 1580,
          "end": 1584
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1586,
                "end": 1587
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 1590,
                    "end": 1593
                  }
                ],
                "start": 1589,
                "end": 1594
              }
            ],
            "start": 1585,
            "end": 1595
          }
        ],
        "optional": false,
        "start": 1580,
        "end": 1596
      },
      "directive": null,
      "start": 1580,
      "end": 1597
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "flat1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1609,
          "end": 1614
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1616,
                "end": 1617
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1620,
                    "end": 1621
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 1624,
                        "end": 1625
                      }
                    ],
                    "start": 1623,
                    "end": 1626
                  }
                ],
                "start": 1619,
                "end": 1627
              }
            ],
            "start": 1615,
            "end": 1628
          }
        ],
        "optional": false,
        "start": 1609,
        "end": 1629
      },
      "directive": null,
      "start": 1609,
      "end": 1630
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "flat1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1657,
          "end": 1662
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1666,
                        "end": 1667
                      }
                    ],
                    "start": 1665,
                    "end": 1668
                  }
                ],
                "start": 1664,
                "end": 1669
              }
            ],
            "start": 1663,
            "end": 1670
          }
        ],
        "optional": false,
        "start": 1657,
        "end": 1671
      },
      "directive": null,
      "start": 1657,
      "end": 1672
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "flat1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1688,
          "end": 1693
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1695,
                "end": 1696
              },
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 1698,
                "end": 1701
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1704,
                    "end": 1705
                  }
                ],
                "start": 1703,
                "end": 1706
              }
            ],
            "start": 1694,
            "end": 1707
          }
        ],
        "optional": false,
        "start": 1688,
        "end": 1708
      },
      "directive": null,
      "start": 1688,
      "end": 1709
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "flat1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1734,
          "end": 1739
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1741,
                "end": 1742
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1745,
                    "end": 1746
                  },
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 1748,
                    "end": 1751
                  }
                ],
                "start": 1744,
                "end": 1752
              }
            ],
            "start": 1740,
            "end": 1753
          }
        ],
        "optional": false,
        "start": 1734,
        "end": 1754
      },
      "directive": null,
      "start": 1734,
      "end": 1755
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "flat1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1780,
          "end": 1785
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1787,
                "end": 1788
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 1791,
                    "end": 1794
                  }
                ],
                "start": 1790,
                "end": 1795
              }
            ],
            "start": 1786,
            "end": 1796
          }
        ],
        "optional": false,
        "start": 1780,
        "end": 1797
      },
      "directive": null,
      "start": 1780,
      "end": 1798
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "flat2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1810,
          "end": 1815
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1817,
                "end": 1818
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1821,
                    "end": 1822
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 1825,
                        "end": 1826
                      }
                    ],
                    "start": 1824,
                    "end": 1827
                  }
                ],
                "start": 1820,
                "end": 1828
              }
            ],
            "start": 1816,
            "end": 1829
          }
        ],
        "optional": false,
        "start": 1810,
        "end": 1830
      },
      "directive": null,
      "start": 1810,
      "end": 1831
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "flat2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1845,
          "end": 1850
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1854,
                        "end": 1855
                      }
                    ],
                    "start": 1853,
                    "end": 1856
                  }
                ],
                "start": 1852,
                "end": 1857
              }
            ],
            "start": 1851,
            "end": 1858
          }
        ],
        "optional": false,
        "start": 1845,
        "end": 1859
      },
      "directive": null,
      "start": 1845,
      "end": 1860
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "flat2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1874,
          "end": 1879
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1881,
                "end": 1882
              },
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 1884,
                "end": 1887
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1890,
                    "end": 1891
                  }
                ],
                "start": 1889,
                "end": 1892
              }
            ],
            "start": 1880,
            "end": 1893
          }
        ],
        "optional": false,
        "start": 1874,
        "end": 1894
      },
      "directive": null,
      "start": 1874,
      "end": 1895
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "flat2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1920,
          "end": 1925
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1927,
                "end": 1928
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1931,
                    "end": 1932
                  },
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 1934,
                    "end": 1937
                  }
                ],
                "start": 1930,
                "end": 1938
              }
            ],
            "start": 1926,
            "end": 1939
          }
        ],
        "optional": false,
        "start": 1920,
        "end": 1940
      },
      "directive": null,
      "start": 1920,
      "end": 1941
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "flat2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1966,
          "end": 1971
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1973,
                "end": 1974
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 1977,
                    "end": 1980
                  }
                ],
                "start": 1976,
                "end": 1981
              }
            ],
            "start": 1972,
            "end": 1982
          }
        ],
        "optional": false,
        "start": 1966,
        "end": 1983
      },
      "directive": null,
      "start": 1966,
      "end": 1984
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2001,
        "end": 2004
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T10",
            "optional": false,
            "typeAnnotation": null,
            "start": 2007,
            "end": 2010
          },
          "typeArguments": null,
          "start": 2007,
          "end": 2010
        },
        "start": 2007,
        "end": 2012
      },
      "declare": false,
      "start": 1996,
      "end": 2013
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2019,
        "end": 2022
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T11",
              "optional": false,
              "typeAnnotation": null,
              "start": 2034,
              "end": 2037
            },
            "typeArguments": null,
            "start": 2034,
            "end": 2037
          },
          "start": 2034,
          "end": 2039
        },
        "start": 2025,
        "end": 2039
      },
      "declare": false,
      "start": 2014,
      "end": 2040
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2046,
        "end": 2049
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T12",
            "optional": false,
            "typeAnnotation": null,
            "start": 2053,
            "end": 2056
          },
          "typeArguments": null,
          "start": 2053,
          "end": 2056
        },
        "start": 2052,
        "end": 2059
      },
      "declare": false,
      "start": 2041,
      "end": 2060
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2066,
        "end": 2069
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T13",
                "optional": false,
                "typeAnnotation": null,
                "start": 2072,
                "end": 2075
              },
              "typeArguments": null,
              "start": 2072,
              "end": 2075
            },
            "start": 2072,
            "end": 2077
          },
          {
            "type": "TSStringKeyword",
            "start": 2080,
            "end": 2086
          }
        ],
        "start": 2072,
        "end": 2086
      },
      "declare": false,
      "start": 2061,
      "end": 2087
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2093,
        "end": 2096
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T14",
                "optional": false,
                "typeAnnotation": null,
                "start": 2099,
                "end": 2102
              },
              "typeArguments": null,
              "start": 2099,
              "end": 2102
            },
            "start": 2099,
            "end": 2104
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
                  "start": 2109,
                  "end": 2110
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2112,
                    "end": 2118
                  },
                  "start": 2110,
                  "end": 2118
                },
                "accessibility": null,
                "static": false,
                "start": 2109,
                "end": 2118
              }
            ],
            "start": 2107,
            "end": 2120
          }
        ],
        "start": 2099,
        "end": 2120
      },
      "declare": false,
      "start": 2088,
      "end": 2121
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2127,
        "end": 2130
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 2131,
              "end": 2132
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2131,
            "end": 2132
          }
        ],
        "start": 2130,
        "end": 2133
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null,
            "start": 2136,
            "end": 2137
          },
          "typeArguments": null,
          "start": 2136,
          "end": 2137
        },
        "extendsType": {
          "type": "TSStringKeyword",
          "start": 2146,
          "end": 2152
        },
        "trueType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T15",
              "optional": false,
              "typeAnnotation": null,
              "start": 2155,
              "end": 2158
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
                    "start": 2159,
                    "end": 2160
                  },
                  "typeArguments": null,
                  "start": 2159,
                  "end": 2160
                }
              ],
              "start": 2158,
              "end": 2161
            },
            "start": 2155,
            "end": 2161
          },
          "start": 2155,
          "end": 2163
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2166,
          "end": 2171
        },
        "start": 2136,
        "end": 2171
      },
      "declare": false,
      "start": 2122,
      "end": 2172
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ValueOrArray1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2179,
        "end": 2192
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
              "start": 2193,
              "end": 2194
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2193,
            "end": 2194
          }
        ],
        "start": 2192,
        "end": 2195
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2198,
              "end": 2199
            },
            "typeArguments": null,
            "start": 2198,
            "end": 2199
          },
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ValueOrArray1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2202,
                "end": 2215
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
                      "start": 2216,
                      "end": 2217
                    },
                    "typeArguments": null,
                    "start": 2216,
                    "end": 2217
                  }
                ],
                "start": 2215,
                "end": 2218
              },
              "start": 2202,
              "end": 2218
            },
            "start": 2202,
            "end": 2220
          }
        ],
        "start": 2198,
        "end": 2220
      },
      "declare": false,
      "start": 2174,
      "end": 2221
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ValueOrArray2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2227,
        "end": 2240
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
              "start": 2241,
              "end": 2242
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2241,
            "end": 2242
          }
        ],
        "start": 2240,
        "end": 2243
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2246,
              "end": 2247
            },
            "typeArguments": null,
            "start": 2246,
            "end": 2247
          },
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ValueOrArray2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2250,
                "end": 2263
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
                      "start": 2264,
                      "end": 2265
                    },
                    "typeArguments": null,
                    "start": 2264,
                    "end": 2265
                  }
                ],
                "start": 2263,
                "end": 2266
              },
              "start": 2250,
              "end": 2266
            },
            "start": 2250,
            "end": 2268
          }
        ],
        "start": 2246,
        "end": 2268
      },
      "declare": false,
      "start": 2222,
      "end": 2269
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2288,
        "end": 2292
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 2293,
              "end": 2294
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2293,
            "end": 2294
          }
        ],
        "start": 2292,
        "end": 2295
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ValueOrArray1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2299,
                "end": 2312
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
                      "start": 2313,
                      "end": 2314
                    },
                    "typeArguments": null,
                    "start": 2313,
                    "end": 2314
                  }
                ],
                "start": 2312,
                "end": 2315
              },
              "start": 2299,
              "end": 2315
            },
            "start": 2297,
            "end": 2315
          },
          "start": 2296,
          "end": 2315
        }
      ],
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
            "start": 2318,
            "end": 2319
          },
          "typeArguments": null,
          "start": 2318,
          "end": 2319
        },
        "start": 2316,
        "end": 2319
      },
      "body": null,
      "expression": false,
      "start": 2271,
      "end": 2320
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
            "name": "ra1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ValueOrArray2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2338,
                  "end": 2351
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2352,
                      "end": 2358
                    }
                  ],
                  "start": 2351,
                  "end": 2359
                },
                "start": 2338,
                "end": 2359
              },
              "start": 2336,
              "end": 2359
            },
            "start": 2333,
            "end": 2359
          },
          "init": null,
          "definite": false,
          "start": 2333,
          "end": 2359
        }
      ],
      "declare": true,
      "start": 2321,
      "end": 2360
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2366,
            "end": 2368
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2371,
              "end": 2375
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ra1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2376,
                "end": 2379
              }
            ],
            "optional": false,
            "start": 2371,
            "end": 2380
          },
          "definite": false,
          "start": 2366,
          "end": 2380
        }
      ],
      "declare": false,
      "start": 2362,
      "end": 2381
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumberOrArray1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2398,
        "end": 2412
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
              "start": 2413,
              "end": 2414
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2413,
            "end": 2414
          }
        ],
        "start": 2412,
        "end": 2415
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2418,
              "end": 2419
            },
            "typeArguments": null,
            "start": 2418,
            "end": 2419
          },
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ValueOrArray1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2422,
                "end": 2435
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
                      "start": 2436,
                      "end": 2437
                    },
                    "typeArguments": null,
                    "start": 2436,
                    "end": 2437
                  }
                ],
                "start": 2435,
                "end": 2438
              },
              "start": 2422,
              "end": 2438
            },
            "start": 2422,
            "end": 2440
          }
        ],
        "start": 2418,
        "end": 2440
      },
      "declare": false,
      "start": 2393,
      "end": 2441
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumberOrArray2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2447,
        "end": 2461
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
              "start": 2462,
              "end": 2463
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2462,
            "end": 2463
          }
        ],
        "start": 2461,
        "end": 2464
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2467,
              "end": 2468
            },
            "typeArguments": null,
            "start": 2467,
            "end": 2468
          },
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ValueOrArray2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2471,
                "end": 2484
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
                      "start": 2485,
                      "end": 2486
                    },
                    "typeArguments": null,
                    "start": 2485,
                    "end": 2486
                  }
                ],
                "start": 2484,
                "end": 2487
              },
              "start": 2471,
              "end": 2487
            },
            "start": 2471,
            "end": 2489
          }
        ],
        "start": 2467,
        "end": 2489
      },
      "declare": false,
      "start": 2442,
      "end": 2490
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2509,
        "end": 2513
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 2514,
              "end": 2515
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2514,
            "end": 2515
          }
        ],
        "start": 2513,
        "end": 2516
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ValueOrArray1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2520,
                "end": 2533
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
                      "start": 2534,
                      "end": 2535
                    },
                    "typeArguments": null,
                    "start": 2534,
                    "end": 2535
                  }
                ],
                "start": 2533,
                "end": 2536
              },
              "start": 2520,
              "end": 2536
            },
            "start": 2518,
            "end": 2536
          },
          "start": 2517,
          "end": 2536
        }
      ],
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
            "start": 2539,
            "end": 2540
          },
          "typeArguments": null,
          "start": 2539,
          "end": 2540
        },
        "start": 2537,
        "end": 2540
      },
      "body": null,
      "expression": false,
      "start": 2492,
      "end": 2541
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
            "name": "ra2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ValueOrArray2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2559,
                  "end": 2572
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2573,
                      "end": 2579
                    }
                  ],
                  "start": 2572,
                  "end": 2580
                },
                "start": 2559,
                "end": 2580
              },
              "start": 2557,
              "end": 2580
            },
            "start": 2554,
            "end": 2580
          },
          "init": null,
          "definite": false,
          "start": 2554,
          "end": 2580
        }
      ],
      "declare": true,
      "start": 2542,
      "end": 2581
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2587,
            "end": 2589
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2592,
              "end": 2596
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ra2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2597,
                "end": 2600
              }
            ],
            "optional": false,
            "start": 2592,
            "end": 2601
          },
          "definite": false,
          "start": 2587,
          "end": 2601
        }
      ],
      "declare": false,
      "start": 2583,
      "end": 2602
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tree",
        "optional": false,
        "typeAnnotation": null,
        "start": 2663,
        "end": 2667
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HTMLHeadingElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 2671,
                "end": 2689
              },
              "typeArguments": null,
              "start": 2671,
              "end": 2689
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tree",
                "optional": false,
                "typeAnnotation": null,
                "start": 2691,
                "end": 2695
              },
              "typeArguments": null,
              "start": 2691,
              "end": 2695
            }
          ],
          "start": 2670,
          "end": 2696
        },
        "start": 2670,
        "end": 2698
      },
      "declare": false,
      "start": 2658,
      "end": 2699
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "parse",
        "optional": false,
        "typeAnnotation": null,
        "start": 2710,
        "end": 2715
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tree",
                "optional": false,
                "typeAnnotation": null,
                "start": 2722,
                "end": 2726
              },
              "typeArguments": null,
              "start": 2722,
              "end": 2726
            },
            "start": 2720,
            "end": 2726
          },
          "start": 2716,
          "end": 2726
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "index",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 2735,
                  "end": 2741
                },
                "start": 2735,
                "end": 2743
              },
              "start": 2733,
              "end": 2743
            },
            "start": 2728,
            "end": 2743
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 2746,
            "end": 2748
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 2728,
          "end": 2748
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "HTMLUListElement",
            "optional": false,
            "typeAnnotation": null,
            "start": 2751,
            "end": 2767
          },
          "typeArguments": null,
          "start": 2751,
          "end": 2767
        },
        "start": 2749,
        "end": 2767
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "html",
                "optional": false,
                "typeAnnotation": null,
                "start": 2779,
                "end": 2783
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "ul",
                  "raw": "'ul'",
                  "start": 2784,
                  "end": 2788
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2790,
                      "end": 2794
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2795,
                      "end": 2798
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2790,
                    "end": 2798
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "ArrayPattern",
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "el",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2801,
                              "end": 2803
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "children",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2805,
                              "end": 2813
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2800,
                          "end": 2814
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2816,
                          "end": 2817
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "idx",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2834,
                                  "end": 2837
                                },
                                "init": {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "SpreadElement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "index",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2844,
                                        "end": 2849
                                      },
                                      "start": 2841,
                                      "end": 2849
                                    },
                                    {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "i",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2851,
                                        "end": 2852
                                      },
                                      "operator": "+",
                                      "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1",
                                        "start": 2855,
                                        "end": 2856
                                      },
                                      "start": 2851,
                                      "end": 2856
                                    }
                                  ],
                                  "start": 2840,
                                  "end": 2857
                                },
                                "definite": false,
                                "start": 2834,
                                "end": 2857
                              }
                            ],
                            "declare": false,
                            "start": 2828,
                            "end": 2858
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "html",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2870,
                                "end": 2874
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "li",
                                  "raw": "'li'",
                                  "start": 2875,
                                  "end": 2879
                                },
                                {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "html",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2889,
                                        "end": 2893
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Literal",
                                          "value": "a",
                                          "raw": "'a'",
                                          "start": 2894,
                                          "end": 2897
                                        },
                                        {
                                          "type": "ObjectExpression",
                                          "properties": [
                                            {
                                              "type": "Property",
                                              "kind": "init",
                                              "key": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "href",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 2901,
                                                "end": 2905
                                              },
                                              "value": {
                                                "type": "TemplateLiteral",
                                                "quasis": [
                                                  {
                                                    "type": "TemplateElement",
                                                    "value": {
                                                      "raw": "#",
                                                      "cooked": "#"
                                                    },
                                                    "tail": false,
                                                    "start": 2907,
                                                    "end": 2911
                                                  },
                                                  {
                                                    "type": "TemplateElement",
                                                    "value": {
                                                      "raw": "",
                                                      "cooked": ""
                                                    },
                                                    "tail": true,
                                                    "start": 2916,
                                                    "end": 2918
                                                  }
                                                ],
                                                "expressions": [
                                                  {
                                                    "type": "MemberExpression",
                                                    "object": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "el",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 2911,
                                                      "end": 2913
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "id",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 2914,
                                                      "end": 2916
                                                    },
                                                    "optional": false,
                                                    "computed": false,
                                                    "start": 2911,
                                                    "end": 2916
                                                  }
                                                ],
                                                "start": 2907,
                                                "end": 2918
                                              },
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "optional": false,
                                              "start": 2901,
                                              "end": 2918
                                            },
                                            {
                                              "type": "Property",
                                              "kind": "init",
                                              "key": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "rel",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 2920,
                                                "end": 2923
                                              },
                                              "value": {
                                                "type": "Literal",
                                                "value": "noopener",
                                                "raw": "'noopener'",
                                                "start": 2925,
                                                "end": 2935
                                              },
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "optional": false,
                                              "start": 2920,
                                              "end": 2935
                                            },
                                            {
                                              "type": "Property",
                                              "kind": "init",
                                              "key": {
                                                "type": "Literal",
                                                "value": "data-index",
                                                "raw": "'data-index'",
                                                "start": 2937,
                                                "end": 2949
                                              },
                                              "value": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "idx",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 2951,
                                                    "end": 2954
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "join",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 2955,
                                                    "end": 2959
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 2951,
                                                  "end": 2959
                                                },
                                                "typeArguments": null,
                                                "arguments": [
                                                  {
                                                    "type": "Literal",
                                                    "value": ".",
                                                    "raw": "'.'",
                                                    "start": 2960,
                                                    "end": 2963
                                                  }
                                                ],
                                                "optional": false,
                                                "start": 2951,
                                                "end": 2964
                                              },
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "optional": false,
                                              "start": 2937,
                                              "end": 2964
                                            }
                                          ],
                                          "start": 2899,
                                          "end": 2966
                                        },
                                        {
                                          "type": "TSNonNullExpression",
                                          "expression": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "el",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2968,
                                              "end": 2970
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "textContent",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2971,
                                              "end": 2982
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 2968,
                                            "end": 2982
                                          },
                                          "start": 2968,
                                          "end": 2983
                                        }
                                      ],
                                      "optional": false,
                                      "start": 2889,
                                      "end": 2984
                                    },
                                    {
                                      "type": "ConditionalExpression",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "children",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2992,
                                            "end": 3000
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "length",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3001,
                                            "end": 3007
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 2992,
                                          "end": 3007
                                        },
                                        "operator": ">",
                                        "right": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 3010,
                                          "end": 3011
                                        },
                                        "start": 2992,
                                        "end": 3011
                                      },
                                      "consequent": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "parse",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3014,
                                          "end": 3019
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "children",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3020,
                                            "end": 3028
                                          },
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "idx",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3030,
                                            "end": 3033
                                          }
                                        ],
                                        "optional": false,
                                        "start": 3014,
                                        "end": 3034
                                      },
                                      "alternate": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "frag",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3037,
                                          "end": 3041
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 3037,
                                        "end": 3043
                                      },
                                      "start": 2992,
                                      "end": 3043
                                    }
                                  ],
                                  "start": 2881,
                                  "end": 3049
                                }
                              ],
                              "optional": false,
                              "start": 2870,
                              "end": 3050
                            },
                            "start": 2863,
                            "end": 3051
                          }
                        ],
                        "start": 2822,
                        "end": 3055
                      },
                      "id": null,
                      "generator": false,
                      "start": 2799,
                      "end": 3055
                    }
                  ],
                  "optional": false,
                  "start": 2790,
                  "end": 3056
                }
              ],
              "optional": false,
              "start": 2779,
              "end": 3057
            },
            "start": 2772,
            "end": 3058
          }
        ],
        "start": 2768,
        "end": 3060
      },
      "expression": false,
      "start": 2701,
      "end": 3060
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "cons",
        "optional": false,
        "typeAnnotation": null,
        "start": 3071,
        "end": 3075
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "hs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HTMLHeadingElement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3080,
                  "end": 3098
                },
                "typeArguments": null,
                "start": 3080,
                "end": 3098
              },
              "start": 3080,
              "end": 3100
            },
            "start": 3078,
            "end": 3100
          },
          "start": 3076,
          "end": 3100
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Tree",
            "optional": false,
            "typeAnnotation": null,
            "start": 3103,
            "end": 3107
          },
          "typeArguments": null,
          "start": 3103,
          "end": 3107
        },
        "start": 3101,
        "end": 3107
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "hs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3119,
                      "end": 3121
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reduce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3127,
                      "end": 3133
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3119,
                    "end": 3133
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "HTMLHeadingElement",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3134,
                              "end": 3152
                            },
                            "typeArguments": null,
                            "start": 3134,
                            "end": 3152
                          },
                          "start": 3134,
                          "end": 3154
                        },
                        "start": 3134,
                        "end": 3156
                      }
                    ],
                    "start": 3133,
                    "end": 3157
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "hss",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3159,
                          "end": 3162
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "h",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3164,
                          "end": 3165
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "hs",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3184,
                                  "end": 3186
                                },
                                "init": {
                                  "type": "TSNonNullExpression",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "hss",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3189,
                                        "end": 3192
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "pop",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3193,
                                        "end": 3196
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 3189,
                                      "end": 3196
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 3189,
                                    "end": 3198
                                  },
                                  "start": 3189,
                                  "end": 3199
                                },
                                "definite": false,
                                "start": 3184,
                                "end": 3199
                              }
                            ],
                            "declare": false,
                            "start": 3178,
                            "end": 3200
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "LogicalExpression",
                                "left": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "hs",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3214,
                                      "end": 3216
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3217,
                                      "end": 3223
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3214,
                                    "end": 3223
                                  },
                                  "operator": "===",
                                  "right": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 3228,
                                    "end": 3229
                                  },
                                  "start": 3214,
                                  "end": 3229
                                },
                                "operator": "||",
                                "right": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "level",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3233,
                                      "end": 3238
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "h",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3239,
                                        "end": 3240
                                      }
                                    ],
                                    "optional": false,
                                    "start": 3233,
                                    "end": 3241
                                  },
                                  "operator": ">",
                                  "right": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "level",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3244,
                                      "end": 3249
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "hs",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3250,
                                          "end": 3252
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 3253,
                                          "end": 3254
                                        },
                                        "optional": false,
                                        "computed": true,
                                        "start": 3250,
                                        "end": 3255
                                      }
                                    ],
                                    "optional": false,
                                    "start": 3244,
                                    "end": 3256
                                  },
                                  "start": 3233,
                                  "end": 3256
                                },
                                "start": 3214,
                                "end": 3256
                              },
                              "consequent": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "concat",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3267,
                                  "end": 3273
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "hss",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3274,
                                    "end": 3277
                                  },
                                  {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "concat",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3280,
                                          "end": 3286
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "hs",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3287,
                                            "end": 3289
                                          },
                                          {
                                            "type": "ArrayExpression",
                                            "elements": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "h",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3292,
                                                "end": 3293
                                              }
                                            ],
                                            "start": 3291,
                                            "end": 3294
                                          }
                                        ],
                                        "optional": false,
                                        "start": 3280,
                                        "end": 3295
                                      }
                                    ],
                                    "start": 3279,
                                    "end": 3296
                                  }
                                ],
                                "optional": false,
                                "start": 3267,
                                "end": 3297
                              },
                              "alternate": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "concat",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3308,
                                  "end": 3314
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "hss",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3315,
                                    "end": 3318
                                  },
                                  {
                                    "type": "ArrayExpression",
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "hs",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3321,
                                        "end": 3323
                                      },
                                      {
                                        "type": "ArrayExpression",
                                        "elements": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "h",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3326,
                                            "end": 3327
                                          }
                                        ],
                                        "start": 3325,
                                        "end": 3328
                                      }
                                    ],
                                    "start": 3320,
                                    "end": 3329
                                  }
                                ],
                                "optional": false,
                                "start": 3308,
                                "end": 3330
                              },
                              "start": 3214,
                              "end": 3330
                            },
                            "start": 3207,
                            "end": 3331
                          }
                        ],
                        "start": 3170,
                        "end": 3337
                      },
                      "id": null,
                      "generator": false,
                      "start": 3158,
                      "end": 3337
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "ArrayExpression",
                          "elements": [],
                          "start": 3340,
                          "end": 3342
                        }
                      ],
                      "start": 3339,
                      "end": 3343
                    }
                  ],
                  "optional": false,
                  "start": 3119,
                  "end": 3344
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "reduce",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3350,
                  "end": 3356
                },
                "optional": false,
                "computed": false,
                "start": 3119,
                "end": 3356
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tree",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3357,
                      "end": 3361
                    },
                    "typeArguments": null,
                    "start": 3357,
                    "end": 3361
                  }
                ],
                "start": 3356,
                "end": 3362
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3364,
                      "end": 3368
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "hs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3370,
                      "end": 3372
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "hs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3383,
                          "end": 3385
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3386,
                          "end": 3392
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3383,
                        "end": 3392
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 3397,
                        "end": 3398
                      },
                      "start": 3383,
                      "end": 3398
                    },
                    "consequent": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3409,
                      "end": 3413
                    },
                    "alternate": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "concat",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3424,
                        "end": 3430
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
                                "name": "Tree",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3431,
                                "end": 3435
                              },
                              "typeArguments": null,
                              "start": 3431,
                              "end": 3435
                            },
                            "indexType": {
                              "type": "TSNumberKeyword",
                              "start": 3436,
                              "end": 3442
                            },
                            "start": 3431,
                            "end": 3443
                          }
                        ],
                        "start": 3430,
                        "end": 3444
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "node",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3445,
                          "end": 3449
                        },
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "TSNonNullExpression",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "hs",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3453,
                                        "end": 3455
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "shift",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3456,
                                        "end": 3461
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 3453,
                                      "end": 3461
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 3453,
                                    "end": 3463
                                  },
                                  "start": 3453,
                                  "end": 3464
                                },
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "cons",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3466,
                                    "end": 3470
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "hs",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3471,
                                      "end": 3473
                                    }
                                  ],
                                  "optional": false,
                                  "start": 3466,
                                  "end": 3474
                                }
                              ],
                              "start": 3452,
                              "end": 3475
                            }
                          ],
                          "start": 3451,
                          "end": 3476
                        }
                      ],
                      "optional": false,
                      "start": 3424,
                      "end": 3477
                    },
                    "start": 3383,
                    "end": 3477
                  },
                  "id": null,
                  "generator": false,
                  "start": 3363,
                  "end": 3477
                },
                {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 3484,
                  "end": 3486
                }
              ],
              "optional": false,
              "start": 3119,
              "end": 3487
            },
            "start": 3112,
            "end": 3488
          }
        ],
        "start": 3108,
        "end": 3490
      },
      "expression": false,
      "start": 3062,
      "end": 3490
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "level",
        "optional": false,
        "typeAnnotation": null,
        "start": 3501,
        "end": 3506
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HTMLHeadingElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 3510,
                "end": 3528
              },
              "typeArguments": null,
              "start": 3510,
              "end": 3528
            },
            "start": 3508,
            "end": 3528
          },
          "start": 3507,
          "end": 3528
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 3531,
          "end": 3537
        },
        "start": 3529,
        "end": 3537
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assert",
                "optional": false,
                "typeAnnotation": null,
                "start": 3542,
                "end": 3548
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isFinite",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3549,
                    "end": 3557
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "UnaryExpression",
                      "operator": "+",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "h",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3559,
                            "end": 3560
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tagName",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3561,
                            "end": 3568
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3559,
                          "end": 3568
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 3569,
                          "end": 3570
                        },
                        "optional": false,
                        "computed": true,
                        "start": 3559,
                        "end": 3571
                      },
                      "prefix": true,
                      "start": 3558,
                      "end": 3571
                    }
                  ],
                  "optional": false,
                  "start": 3549,
                  "end": 3572
                }
              ],
              "optional": false,
              "start": 3542,
              "end": 3573
            },
            "directive": null,
            "start": 3542,
            "end": 3574
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "UnaryExpression",
              "operator": "+",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "h",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3585,
                    "end": 3586
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tagName",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3587,
                    "end": 3594
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3585,
                  "end": 3594
                },
                "property": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3595,
                  "end": 3596
                },
                "optional": false,
                "computed": true,
                "start": 3585,
                "end": 3597
              },
              "prefix": true,
              "start": 3584,
              "end": 3597
            },
            "start": 3577,
            "end": 3598
          }
        ],
        "start": 3538,
        "end": 3600
      },
      "expression": false,
      "start": 3492,
      "end": 3600
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3600
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
    "value": "ValueOrArray",
    "start": 5,
    "end": 17,
    "range": [
      5,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
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
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
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
    "type": "Punctuator",
    "value": "|",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 27,
    "end": 32,
    "range": [
      27,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "ValueOrArray",
    "start": 33,
    "end": 45,
    "range": [
      33,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 52,
    "end": 57,
    "range": [
      52,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 58,
    "end": 60,
    "range": [
      58,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "ValueOrArray",
    "start": 62,
    "end": 74,
    "range": [
      62,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 75,
    "end": 81,
    "range": [
      75,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 88,
    "end": 93,
    "range": [
      88,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 94,
    "end": 96,
    "range": [
      94,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "ValueOrArray",
    "start": 98,
    "end": 110,
    "range": [
      98,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 111,
    "end": 117,
    "range": [
      111,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
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
    "type": "Numeric",
    "value": "1",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 153,
    "end": 157,
    "range": [
      153,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "HypertextNode",
    "start": 158,
    "end": 171,
    "range": [
      158,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 174,
    "end": 180,
    "range": [
      174,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 184,
    "end": 190,
    "range": [
      184,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 195,
    "end": 198,
    "range": [
      195,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 200,
    "end": 206,
    "range": [
      200,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 209,
    "end": 216,
    "range": [
      209,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 220,
    "end": 223,
    "range": [
      220,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "HypertextNode",
    "start": 223,
    "end": 236,
    "range": [
      223,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 242,
    "end": 247,
    "range": [
      242,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "hypertextNode",
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
    "value": "HypertextNode",
    "start": 263,
    "end": 276,
    "range": [
      263,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "String",
    "value": "\"div\"",
    "start": 284,
    "end": 289,
    "range": [
      284,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 293,
    "end": 295,
    "range": [
      293,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "String",
    "value": "\"parent\"",
    "start": 297,
    "end": 305,
    "range": [
      297,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "String",
    "value": "\"div\"",
    "start": 318,
    "end": 323,
    "range": [
      318,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 327,
    "end": 329,
    "range": [
      327,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "String",
    "value": "\"first-child\"",
    "start": 331,
    "end": 344,
    "range": [
      331,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "String",
    "value": "\"I'm the first child\"",
    "start": 348,
    "end": 369,
    "range": [
      348,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "String",
    "value": "\"div\"",
    "start": 381,
    "end": 386,
    "range": [
      381,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 390,
    "end": 392,
    "range": [
      390,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "String",
    "value": "\"second-child\"",
    "start": 394,
    "end": 408,
    "range": [
      394,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "String",
    "value": "\"I'm the second child\"",
    "start": 412,
    "end": 434,
    "range": [
      412,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 444,
    "end": 448,
    "range": [
      444,
      448
    ]
  },
  {
    "type": "Identifier",
    "value": "Json",
    "start": 449,
    "end": 453,
    "range": [
      449,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 456,
    "end": 462,
    "range": [
      456,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 465,
    "end": 471,
    "range": [
      465,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 474,
    "end": 481,
    "range": [
      474,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 484,
    "end": 488,
    "range": [
      484,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "Json",
    "start": 491,
    "end": 495,
    "range": [
      491,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 503,
    "end": 506,
    "range": [
      503,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 508,
    "end": 514,
    "range": [
      508,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Identifier",
    "value": "Json",
    "start": 517,
    "end": 521,
    "range": [
      517,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 526,
    "end": 529,
    "range": [
      526,
      529
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 530,
    "end": 534,
    "range": [
      530,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Identifier",
    "value": "Json",
    "start": 536,
    "end": 540,
    "range": [
      536,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Identifier",
    "value": "caption",
    "start": 549,
    "end": 556,
    "range": [
      549,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "String",
    "value": "\"Test\"",
    "start": 558,
    "end": 564,
    "range": [
      558,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Identifier",
    "value": "location",
    "start": 570,
    "end": 578,
    "range": [
      570,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 585,
    "end": 587,
    "range": [
      585,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 592,
    "end": 594,
    "range": [
      592,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 602,
    "end": 608,
    "range": [
      602,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 611,
    "end": 615,
    "range": [
      611,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 618,
    "end": 620,
    "range": [
      618,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 622,
    "end": 624,
    "range": [
      622,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 627,
    "end": 631,
    "range": [
      627,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 637,
    "end": 646,
    "range": [
      637,
      646
    ]
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 647,
    "end": 650,
    "range": [
      647,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 656,
    "end": 661,
    "range": [
      656,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 669,
    "end": 673,
    "range": [
      669,
      673
    ]
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 674,
    "end": 676,
    "range": [
      674,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 679,
    "end": 682,
    "range": [
      679,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 683,
    "end": 685,
    "range": [
      683,
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
    "start": 688,
    "end": 692,
    "range": [
      688,
      692
    ]
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 693,
    "end": 695,
    "range": [
      693,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 698,
    "end": 701,
    "range": [
      698,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 702,
    "end": 705,
    "range": [
      702,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 706,
    "end": 708,
    "range": [
      706,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 712,
    "end": 716,
    "range": [
      712,
      716
    ]
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 717,
    "end": 719,
    "range": [
      717,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 722,
    "end": 725,
    "range": [
      722,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 726,
    "end": 729,
    "range": [
      726,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 730,
    "end": 733,
    "range": [
      730,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 734,
    "end": 736,
    "range": [
      734,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 742,
    "end": 750,
    "range": [
      742,
      750
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 751,
    "end": 753,
    "range": [
      751,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 754,
    "end": 756,
    "range": [
      754,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 758,
    "end": 760,
    "range": [
      758,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 762,
    "end": 764,
    "range": [
      762,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 766,
    "end": 768,
    "range": [
      766,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 770,
    "end": 772,
    "range": [
      770,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 774,
    "end": 776,
    "range": [
      774,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 784,
    "end": 786,
    "range": [
      784,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 789,
    "end": 791,
    "range": [
      789,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
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
    "value": "t3",
    "start": 802,
    "end": 804,
    "range": [
      802,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 810,
    "end": 812,
    "range": [
      810,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 815,
    "end": 817,
    "range": [
      815,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 823,
    "end": 825,
    "range": [
      823,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 828,
    "end": 830,
    "range": [
      828,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 836,
    "end": 838,
    "range": [
      836,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 841,
    "end": 843,
    "range": [
      841,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 849,
    "end": 851,
    "range": [
      849,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 854,
    "end": 856,
    "range": [
      854,
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
    "type": "Punctuator",
    "value": "}",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 861,
    "end": 865,
    "range": [
      861,
      865
    ]
  },
  {
    "type": "Identifier",
    "value": "Box1",
    "start": 866,
    "end": 870,
    "range": [
      866,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 873,
    "end": 876,
    "range": [
      873,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Identifier",
    "value": "Box1",
    "start": 877,
    "end": 881,
    "range": [
      877,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 885,
    "end": 891,
    "range": [
      885,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 894,
    "end": 899,
    "range": [
      894,
      899
    ]
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 900,
    "end": 903,
    "range": [
      900,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Identifier",
    "value": "Box1",
    "start": 905,
    "end": 909,
    "range": [
      905,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 912,
    "end": 914,
    "range": [
      912,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 916,
    "end": 921,
    "range": [
      916,
      921
    ]
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 922,
    "end": 925,
    "range": [
      922,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Identifier",
    "value": "Box1",
    "start": 927,
    "end": 931,
    "range": [
      927,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 936,
    "end": 941,
    "range": [
      936,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 943,
    "end": 945,
    "range": [
      943,
      945
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 949,
    "end": 954,
    "range": [
      949,
      954
    ]
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 955,
    "end": 958,
    "range": [
      955,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Identifier",
    "value": "Box1",
    "start": 960,
    "end": 964,
    "range": [
      960,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 969,
    "end": 974,
    "range": [
      969,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 978,
    "end": 983,
    "range": [
      978,
      983
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 987,
    "end": 992,
    "range": [
      987,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 994,
    "end": 996,
    "range": [
      994,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1003,
    "end": 1007,
    "range": [
      1003,
      1007
    ]
  },
  {
    "type": "Identifier",
    "value": "Box2",
    "start": 1008,
    "end": 1012,
    "range": [
      1008,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 1015,
    "end": 1018,
    "range": [
      1015,
      1018
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Identifier",
    "value": "Box2",
    "start": 1019,
    "end": 1023,
    "range": [
      1019,
      1023
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1024,
    "end": 1025,
    "range": [
      1024,
      1025
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1026,
    "end": 1032,
    "range": [
      1026,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1036,
    "end": 1041,
    "range": [
      1036,
      1041
    ]
  },
  {
    "type": "Identifier",
    "value": "b20",
    "start": 1042,
    "end": 1045,
    "range": [
      1042,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Identifier",
    "value": "Box2",
    "start": 1047,
    "end": 1051,
    "range": [
      1047,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1054,
    "end": 1056,
    "range": [
      1054,
      1056
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1056,
    "end": 1057,
    "range": [
      1056,
      1057
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1068,
    "end": 1073,
    "range": [
      1068,
      1073
    ]
  },
  {
    "type": "Identifier",
    "value": "b21",
    "start": 1074,
    "end": 1077,
    "range": [
      1074,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Identifier",
    "value": "Box2",
    "start": 1079,
    "end": 1083,
    "range": [
      1079,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1088,
    "end": 1093,
    "range": [
      1088,
      1093
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1095,
    "end": 1097,
    "range": [
      1095,
      1097
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1101,
    "end": 1106,
    "range": [
      1101,
      1106
    ]
  },
  {
    "type": "Identifier",
    "value": "b22",
    "start": 1107,
    "end": 1110,
    "range": [
      1107,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Identifier",
    "value": "Box2",
    "start": 1112,
    "end": 1116,
    "range": [
      1112,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1121,
    "end": 1126,
    "range": [
      1121,
      1126
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1130,
    "end": 1135,
    "range": [
      1130,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1139,
    "end": 1144,
    "range": [
      1139,
      1144
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1146,
    "end": 1148,
    "range": [
      1146,
      1148
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1149,
    "end": 1150,
    "range": [
      1149,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1155,
    "end": 1159,
    "range": [
      1155,
      1159
    ]
  },
  {
    "type": "Identifier",
    "value": "RecArray",
    "start": 1160,
    "end": 1168,
    "range": [
      1160,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1170,
    "end": 1171,
    "range": [
      1170,
      1171
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1174,
    "end": 1179,
    "range": [
      1174,
      1179
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1180,
    "end": 1181,
    "range": [
      1180,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Identifier",
    "value": "RecArray",
    "start": 1184,
    "end": 1192,
    "range": [
      1184,
      1192
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1192,
    "end": 1193,
    "range": [
      1192,
      1193
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1199,
    "end": 1206,
    "range": [
      1199,
      1206
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1207,
    "end": 1215,
    "range": [
      1207,
      1215
    ]
  },
  {
    "type": "Identifier",
    "value": "flat",
    "start": 1216,
    "end": 1220,
    "range": [
      1216,
      1220
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1220,
    "end": 1221,
    "range": [
      1220,
      1221
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1221,
    "end": 1222,
    "range": [
      1221,
      1222
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Identifier",
    "value": "RecArray",
    "start": 1227,
    "end": 1235,
    "range": [
      1227,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1235,
    "end": 1236,
    "range": [
      1235,
      1236
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1241,
    "end": 1246,
    "range": [
      1241,
      1246
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1247,
    "end": 1248,
    "range": [
      1247,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1251,
    "end": 1258,
    "range": [
      1251,
      1258
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1259,
    "end": 1267,
    "range": [
      1259,
      1267
    ]
  },
  {
    "type": "Identifier",
    "value": "flat1",
    "start": 1268,
    "end": 1273,
    "range": [
      1268,
      1273
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1275,
    "end": 1276,
    "range": [
      1275,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1280,
    "end": 1285,
    "range": [
      1280,
      1285
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1290,
    "end": 1295,
    "range": [
      1290,
      1295
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ":",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1302,
    "end": 1307,
    "range": [
      1302,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1311,
    "end": 1318,
    "range": [
      1311,
      1318
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1319,
    "end": 1327,
    "range": [
      1319,
      1327
    ]
  },
  {
    "type": "Identifier",
    "value": "flat2",
    "start": 1328,
    "end": 1333,
    "range": [
      1328,
      1333
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1335,
    "end": 1336,
    "range": [
      1335,
      1336
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1336,
    "end": 1337,
    "range": [
      1336,
      1337
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1337,
    "end": 1338,
    "range": [
      1337,
      1338
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1340,
    "end": 1345,
    "range": [
      1340,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1350,
    "end": 1355,
    "range": [
      1350,
      1355
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1356,
    "end": 1357,
    "range": [
      1356,
      1357
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1360,
    "end": 1365,
    "range": [
      1360,
      1365
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1365,
    "end": 1366,
    "range": [
      1365,
      1366
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1366,
    "end": 1367,
    "range": [
      1366,
      1367
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1367,
    "end": 1368,
    "range": [
      1367,
      1368
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1368,
    "end": 1369,
    "range": [
      1368,
      1369
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1369,
    "end": 1370,
    "range": [
      1369,
      1370
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1373,
    "end": 1378,
    "range": [
      1373,
      1378
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1378,
    "end": 1379,
    "range": [
      1378,
      1379
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1380,
    "end": 1381,
    "range": [
      1380,
      1381
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1381,
    "end": 1382,
    "range": [
      1381,
      1382
    ]
  },
  {
    "type": "Identifier",
    "value": "flat",
    "start": 1384,
    "end": 1388,
    "range": [
      1384,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1395,
    "end": 1396,
    "range": [
      1395,
      1396
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1397,
    "end": 1398,
    "range": [
      1397,
      1398
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Identifier",
    "value": "flat",
    "start": 1418,
    "end": 1422,
    "range": [
      1418,
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
    "value": "[",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1425,
    "end": 1426,
    "range": [
      1425,
      1426
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1426,
    "end": 1427,
    "range": [
      1426,
      1427
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1429,
    "end": 1430,
    "range": [
      1429,
      1430
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1431,
    "end": 1432,
    "range": [
      1431,
      1432
    ]
  },
  {
    "type": "Identifier",
    "value": "flat",
    "start": 1446,
    "end": 1450,
    "range": [
      1446,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1450,
    "end": 1451,
    "range": [
      1450,
      1451
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1451,
    "end": 1452,
    "range": [
      1451,
      1452
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1452,
    "end": 1453,
    "range": [
      1452,
      1453
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1453,
    "end": 1454,
    "range": [
      1453,
      1454
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1454,
    "end": 1455,
    "range": [
      1454,
      1455
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1456,
    "end": 1457,
    "range": [
      1456,
      1457
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1457,
    "end": 1458,
    "range": [
      1457,
      1458
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1458,
    "end": 1459,
    "range": [
      1458,
      1459
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1459,
    "end": 1460,
    "range": [
      1459,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1460,
    "end": 1461,
    "range": [
      1460,
      1461
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
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
    "value": "]",
    "start": 1464,
    "end": 1465,
    "range": [
      1464,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1466,
    "end": 1467,
    "range": [
      1466,
      1467
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1467,
    "end": 1468,
    "range": [
      1467,
      1468
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1468,
    "end": 1469,
    "range": [
      1468,
      1469
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1469,
    "end": 1470,
    "range": [
      1469,
      1470
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1470,
    "end": 1471,
    "range": [
      1470,
      1471
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1471,
    "end": 1472,
    "range": [
      1471,
      1472
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1472,
    "end": 1473,
    "range": [
      1472,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1474,
    "end": 1475,
    "range": [
      1474,
      1475
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1475,
    "end": 1476,
    "range": [
      1475,
      1476
    ]
  },
  {
    "type": "Identifier",
    "value": "flat",
    "start": 1490,
    "end": 1494,
    "range": [
      1490,
      1494
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1496,
    "end": 1497,
    "range": [
      1496,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1499,
    "end": 1502,
    "range": [
      1499,
      1502
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1502,
    "end": 1503,
    "range": [
      1502,
      1503
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1504,
    "end": 1505,
    "range": [
      1504,
      1505
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1506,
    "end": 1507,
    "range": [
      1506,
      1507
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1509,
    "end": 1510,
    "range": [
      1509,
      1510
    ]
  },
  {
    "type": "Identifier",
    "value": "flat",
    "start": 1535,
    "end": 1539,
    "range": [
      1535,
      1539
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1539,
    "end": 1540,
    "range": [
      1539,
      1540
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1540,
    "end": 1541,
    "range": [
      1540,
      1541
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1541,
    "end": 1542,
    "range": [
      1541,
      1542
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1542,
    "end": 1543,
    "range": [
      1542,
      1543
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1545,
    "end": 1546,
    "range": [
      1545,
      1546
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1546,
    "end": 1547,
    "range": [
      1546,
      1547
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1548,
    "end": 1551,
    "range": [
      1548,
      1551
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1551,
    "end": 1552,
    "range": [
      1551,
      1552
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1552,
    "end": 1553,
    "range": [
      1552,
      1553
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1554,
    "end": 1555,
    "range": [
      1554,
      1555
    ]
  },
  {
    "type": "Identifier",
    "value": "flat",
    "start": 1580,
    "end": 1584,
    "range": [
      1580,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1585,
    "end": 1586,
    "range": [
      1585,
      1586
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1586,
    "end": 1587,
    "range": [
      1586,
      1587
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1587,
    "end": 1588,
    "range": [
      1587,
      1588
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1589,
    "end": 1590,
    "range": [
      1589,
      1590
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1590,
    "end": 1593,
    "range": [
      1590,
      1593
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1593,
    "end": 1594,
    "range": [
      1593,
      1594
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1594,
    "end": 1595,
    "range": [
      1594,
      1595
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1595,
    "end": 1596,
    "range": [
      1595,
      1596
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1596,
    "end": 1597,
    "range": [
      1596,
      1597
    ]
  },
  {
    "type": "Identifier",
    "value": "flat1",
    "start": 1609,
    "end": 1614,
    "range": [
      1609,
      1614
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1614,
    "end": 1615,
    "range": [
      1614,
      1615
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1615,
    "end": 1616,
    "range": [
      1615,
      1616
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1616,
    "end": 1617,
    "range": [
      1616,
      1617
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1619,
    "end": 1620,
    "range": [
      1619,
      1620
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1620,
    "end": 1621,
    "range": [
      1620,
      1621
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1621,
    "end": 1622,
    "range": [
      1621,
      1622
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1624,
    "end": 1625,
    "range": [
      1624,
      1625
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1627,
    "end": 1628,
    "range": [
      1627,
      1628
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1628,
    "end": 1629,
    "range": [
      1628,
      1629
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Identifier",
    "value": "flat1",
    "start": 1657,
    "end": 1662,
    "range": [
      1657,
      1662
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1662,
    "end": 1663,
    "range": [
      1662,
      1663
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1663,
    "end": 1664,
    "range": [
      1663,
      1664
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1664,
    "end": 1665,
    "range": [
      1664,
      1665
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1665,
    "end": 1666,
    "range": [
      1665,
      1666
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1666,
    "end": 1667,
    "range": [
      1666,
      1667
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1667,
    "end": 1668,
    "range": [
      1667,
      1668
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1670,
    "end": 1671,
    "range": [
      1670,
      1671
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Identifier",
    "value": "flat1",
    "start": 1688,
    "end": 1693,
    "range": [
      1688,
      1693
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1693,
    "end": 1694,
    "range": [
      1693,
      1694
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1694,
    "end": 1695,
    "range": [
      1694,
      1695
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1695,
    "end": 1696,
    "range": [
      1695,
      1696
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1696,
    "end": 1697,
    "range": [
      1696,
      1697
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1698,
    "end": 1701,
    "range": [
      1698,
      1701
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1701,
    "end": 1702,
    "range": [
      1701,
      1702
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1704,
    "end": 1705,
    "range": [
      1704,
      1705
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1707,
    "end": 1708,
    "range": [
      1707,
      1708
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1708,
    "end": 1709,
    "range": [
      1708,
      1709
    ]
  },
  {
    "type": "Identifier",
    "value": "flat1",
    "start": 1734,
    "end": 1739,
    "range": [
      1734,
      1739
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1740,
    "end": 1741,
    "range": [
      1740,
      1741
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1742,
    "end": 1743,
    "range": [
      1742,
      1743
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1744,
    "end": 1745,
    "range": [
      1744,
      1745
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1745,
    "end": 1746,
    "range": [
      1745,
      1746
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1746,
    "end": 1747,
    "range": [
      1746,
      1747
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1748,
    "end": 1751,
    "range": [
      1748,
      1751
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1751,
    "end": 1752,
    "range": [
      1751,
      1752
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1752,
    "end": 1753,
    "range": [
      1752,
      1753
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1753,
    "end": 1754,
    "range": [
      1753,
      1754
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Identifier",
    "value": "flat1",
    "start": 1780,
    "end": 1785,
    "range": [
      1780,
      1785
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1785,
    "end": 1786,
    "range": [
      1785,
      1786
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1786,
    "end": 1787,
    "range": [
      1786,
      1787
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1787,
    "end": 1788,
    "range": [
      1787,
      1788
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1788,
    "end": 1789,
    "range": [
      1788,
      1789
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1790,
    "end": 1791,
    "range": [
      1790,
      1791
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1791,
    "end": 1794,
    "range": [
      1791,
      1794
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1794,
    "end": 1795,
    "range": [
      1794,
      1795
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1795,
    "end": 1796,
    "range": [
      1795,
      1796
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1796,
    "end": 1797,
    "range": [
      1796,
      1797
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  },
  {
    "type": "Identifier",
    "value": "flat2",
    "start": 1810,
    "end": 1815,
    "range": [
      1810,
      1815
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1815,
    "end": 1816,
    "range": [
      1815,
      1816
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1817,
    "end": 1818,
    "range": [
      1817,
      1818
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1818,
    "end": 1819,
    "range": [
      1818,
      1819
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1820,
    "end": 1821,
    "range": [
      1820,
      1821
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1821,
    "end": 1822,
    "range": [
      1821,
      1822
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1822,
    "end": 1823,
    "range": [
      1822,
      1823
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1824,
    "end": 1825,
    "range": [
      1824,
      1825
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1825,
    "end": 1826,
    "range": [
      1825,
      1826
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1826,
    "end": 1827,
    "range": [
      1826,
      1827
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1827,
    "end": 1828,
    "range": [
      1827,
      1828
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1828,
    "end": 1829,
    "range": [
      1828,
      1829
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1829,
    "end": 1830,
    "range": [
      1829,
      1830
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1830,
    "end": 1831,
    "range": [
      1830,
      1831
    ]
  },
  {
    "type": "Identifier",
    "value": "flat2",
    "start": 1845,
    "end": 1850,
    "range": [
      1845,
      1850
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1850,
    "end": 1851,
    "range": [
      1850,
      1851
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1851,
    "end": 1852,
    "range": [
      1851,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1852,
    "end": 1853,
    "range": [
      1852,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1853,
    "end": 1854,
    "range": [
      1853,
      1854
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1854,
    "end": 1855,
    "range": [
      1854,
      1855
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1855,
    "end": 1856,
    "range": [
      1855,
      1856
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1856,
    "end": 1857,
    "range": [
      1856,
      1857
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1857,
    "end": 1858,
    "range": [
      1857,
      1858
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1858,
    "end": 1859,
    "range": [
      1858,
      1859
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1859,
    "end": 1860,
    "range": [
      1859,
      1860
    ]
  },
  {
    "type": "Identifier",
    "value": "flat2",
    "start": 1874,
    "end": 1879,
    "range": [
      1874,
      1879
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1879,
    "end": 1880,
    "range": [
      1879,
      1880
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1880,
    "end": 1881,
    "range": [
      1880,
      1881
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1882,
    "end": 1883,
    "range": [
      1882,
      1883
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1884,
    "end": 1887,
    "range": [
      1884,
      1887
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1887,
    "end": 1888,
    "range": [
      1887,
      1888
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1890,
    "end": 1891,
    "range": [
      1890,
      1891
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1891,
    "end": 1892,
    "range": [
      1891,
      1892
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1892,
    "end": 1893,
    "range": [
      1892,
      1893
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1893,
    "end": 1894,
    "range": [
      1893,
      1894
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1894,
    "end": 1895,
    "range": [
      1894,
      1895
    ]
  },
  {
    "type": "Identifier",
    "value": "flat2",
    "start": 1920,
    "end": 1925,
    "range": [
      1920,
      1925
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1925,
    "end": 1926,
    "range": [
      1925,
      1926
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1926,
    "end": 1927,
    "range": [
      1926,
      1927
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1927,
    "end": 1928,
    "range": [
      1927,
      1928
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1928,
    "end": 1929,
    "range": [
      1928,
      1929
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1930,
    "end": 1931,
    "range": [
      1930,
      1931
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1932,
    "end": 1933,
    "range": [
      1932,
      1933
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1934,
    "end": 1937,
    "range": [
      1934,
      1937
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1938,
    "end": 1939,
    "range": [
      1938,
      1939
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1940,
    "end": 1941,
    "range": [
      1940,
      1941
    ]
  },
  {
    "type": "Identifier",
    "value": "flat2",
    "start": 1966,
    "end": 1971,
    "range": [
      1966,
      1971
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1971,
    "end": 1972,
    "range": [
      1971,
      1972
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1972,
    "end": 1973,
    "range": [
      1972,
      1973
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1973,
    "end": 1974,
    "range": [
      1973,
      1974
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1974,
    "end": 1975,
    "range": [
      1974,
      1975
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1976,
    "end": 1977,
    "range": [
      1976,
      1977
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1977,
    "end": 1980,
    "range": [
      1977,
      1980
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1980,
    "end": 1981,
    "range": [
      1980,
      1981
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1981,
    "end": 1982,
    "range": [
      1981,
      1982
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1982,
    "end": 1983,
    "range": [
      1982,
      1983
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1983,
    "end": 1984,
    "range": [
      1983,
      1984
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1996,
    "end": 2000,
    "range": [
      1996,
      2000
    ]
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 2001,
    "end": 2004,
    "range": [
      2001,
      2004
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2005,
    "end": 2006,
    "range": [
      2005,
      2006
    ]
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 2007,
    "end": 2010,
    "range": [
      2007,
      2010
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2010,
    "end": 2011,
    "range": [
      2010,
      2011
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2011,
    "end": 2012,
    "range": [
      2011,
      2012
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2012,
    "end": 2013,
    "range": [
      2012,
      2013
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2014,
    "end": 2018,
    "range": [
      2014,
      2018
    ]
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 2019,
    "end": 2022,
    "range": [
      2019,
      2022
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2023,
    "end": 2024,
    "range": [
      2023,
      2024
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2025,
    "end": 2033,
    "range": [
      2025,
      2033
    ]
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 2034,
    "end": 2037,
    "range": [
      2034,
      2037
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2037,
    "end": 2038,
    "range": [
      2037,
      2038
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2038,
    "end": 2039,
    "range": [
      2038,
      2039
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2039,
    "end": 2040,
    "range": [
      2039,
      2040
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2041,
    "end": 2045,
    "range": [
      2041,
      2045
    ]
  },
  {
    "type": "Identifier",
    "value": "T12",
    "start": 2046,
    "end": 2049,
    "range": [
      2046,
      2049
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2050,
    "end": 2051,
    "range": [
      2050,
      2051
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2052,
    "end": 2053,
    "range": [
      2052,
      2053
    ]
  },
  {
    "type": "Identifier",
    "value": "T12",
    "start": 2053,
    "end": 2056,
    "range": [
      2053,
      2056
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2056,
    "end": 2057,
    "range": [
      2056,
      2057
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2057,
    "end": 2058,
    "range": [
      2057,
      2058
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2059,
    "end": 2060,
    "range": [
      2059,
      2060
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2061,
    "end": 2065,
    "range": [
      2061,
      2065
    ]
  },
  {
    "type": "Identifier",
    "value": "T13",
    "start": 2066,
    "end": 2069,
    "range": [
      2066,
      2069
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2070,
    "end": 2071,
    "range": [
      2070,
      2071
    ]
  },
  {
    "type": "Identifier",
    "value": "T13",
    "start": 2072,
    "end": 2075,
    "range": [
      2072,
      2075
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2075,
    "end": 2076,
    "range": [
      2075,
      2076
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2076,
    "end": 2077,
    "range": [
      2076,
      2077
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2078,
    "end": 2079,
    "range": [
      2078,
      2079
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2080,
    "end": 2086,
    "range": [
      2080,
      2086
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2086,
    "end": 2087,
    "range": [
      2086,
      2087
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2088,
    "end": 2092,
    "range": [
      2088,
      2092
    ]
  },
  {
    "type": "Identifier",
    "value": "T14",
    "start": 2093,
    "end": 2096,
    "range": [
      2093,
      2096
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2097,
    "end": 2098,
    "range": [
      2097,
      2098
    ]
  },
  {
    "type": "Identifier",
    "value": "T14",
    "start": 2099,
    "end": 2102,
    "range": [
      2099,
      2102
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2102,
    "end": 2103,
    "range": [
      2102,
      2103
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2103,
    "end": 2104,
    "range": [
      2103,
      2104
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2105,
    "end": 2106,
    "range": [
      2105,
      2106
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2107,
    "end": 2108,
    "range": [
      2107,
      2108
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2109,
    "end": 2110,
    "range": [
      2109,
      2110
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2110,
    "end": 2111,
    "range": [
      2110,
      2111
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2112,
    "end": 2118,
    "range": [
      2112,
      2118
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2119,
    "end": 2120,
    "range": [
      2119,
      2120
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2120,
    "end": 2121,
    "range": [
      2120,
      2121
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2122,
    "end": 2126,
    "range": [
      2122,
      2126
    ]
  },
  {
    "type": "Identifier",
    "value": "T15",
    "start": 2127,
    "end": 2130,
    "range": [
      2127,
      2130
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2130,
    "end": 2131,
    "range": [
      2130,
      2131
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2132,
    "end": 2133,
    "range": [
      2132,
      2133
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2134,
    "end": 2135,
    "range": [
      2134,
      2135
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 2136,
    "end": 2137,
    "range": [
      2136,
      2137
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2138,
    "end": 2145,
    "range": [
      2138,
      2145
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2146,
    "end": 2152,
    "range": [
      2146,
      2152
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2153,
    "end": 2154,
    "range": [
      2153,
      2154
    ]
  },
  {
    "type": "Identifier",
    "value": "T15",
    "start": 2155,
    "end": 2158,
    "range": [
      2155,
      2158
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2158,
    "end": 2159,
    "range": [
      2158,
      2159
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2160,
    "end": 2161,
    "range": [
      2160,
      2161
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2161,
    "end": 2162,
    "range": [
      2161,
      2162
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2162,
    "end": 2163,
    "range": [
      2162,
      2163
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2164,
    "end": 2165,
    "range": [
      2164,
      2165
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2166,
    "end": 2171,
    "range": [
      2166,
      2171
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2171,
    "end": 2172,
    "range": [
      2171,
      2172
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2174,
    "end": 2178,
    "range": [
      2174,
      2178
    ]
  },
  {
    "type": "Identifier",
    "value": "ValueOrArray1",
    "start": 2179,
    "end": 2192,
    "range": [
      2179,
      2192
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2192,
    "end": 2193,
    "range": [
      2192,
      2193
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2193,
    "end": 2194,
    "range": [
      2193,
      2194
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2194,
    "end": 2195,
    "range": [
      2194,
      2195
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2196,
    "end": 2197,
    "range": [
      2196,
      2197
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2198,
    "end": 2199,
    "range": [
      2198,
      2199
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2200,
    "end": 2201,
    "range": [
      2200,
      2201
    ]
  },
  {
    "type": "Identifier",
    "value": "ValueOrArray1",
    "start": 2202,
    "end": 2215,
    "range": [
      2202,
      2215
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2215,
    "end": 2216,
    "range": [
      2215,
      2216
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2216,
    "end": 2217,
    "range": [
      2216,
      2217
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2217,
    "end": 2218,
    "range": [
      2217,
      2218
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2218,
    "end": 2219,
    "range": [
      2218,
      2219
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2219,
    "end": 2220,
    "range": [
      2219,
      2220
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2220,
    "end": 2221,
    "range": [
      2220,
      2221
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2222,
    "end": 2226,
    "range": [
      2222,
      2226
    ]
  },
  {
    "type": "Identifier",
    "value": "ValueOrArray2",
    "start": 2227,
    "end": 2240,
    "range": [
      2227,
      2240
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2240,
    "end": 2241,
    "range": [
      2240,
      2241
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2241,
    "end": 2242,
    "range": [
      2241,
      2242
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2242,
    "end": 2243,
    "range": [
      2242,
      2243
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2244,
    "end": 2245,
    "range": [
      2244,
      2245
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2246,
    "end": 2247,
    "range": [
      2246,
      2247
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2248,
    "end": 2249,
    "range": [
      2248,
      2249
    ]
  },
  {
    "type": "Identifier",
    "value": "ValueOrArray2",
    "start": 2250,
    "end": 2263,
    "range": [
      2250,
      2263
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2263,
    "end": 2264,
    "range": [
      2263,
      2264
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2264,
    "end": 2265,
    "range": [
      2264,
      2265
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2265,
    "end": 2266,
    "range": [
      2265,
      2266
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2266,
    "end": 2267,
    "range": [
      2266,
      2267
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2267,
    "end": 2268,
    "range": [
      2267,
      2268
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2268,
    "end": 2269,
    "range": [
      2268,
      2269
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2271,
    "end": 2278,
    "range": [
      2271,
      2278
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2279,
    "end": 2287,
    "range": [
      2279,
      2287
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 2288,
    "end": 2292,
    "range": [
      2288,
      2292
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2292,
    "end": 2293,
    "range": [
      2292,
      2293
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2293,
    "end": 2294,
    "range": [
      2293,
      2294
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2294,
    "end": 2295,
    "range": [
      2294,
      2295
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2295,
    "end": 2296,
    "range": [
      2295,
      2296
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2296,
    "end": 2297,
    "range": [
      2296,
      2297
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2297,
    "end": 2298,
    "range": [
      2297,
      2298
    ]
  },
  {
    "type": "Identifier",
    "value": "ValueOrArray1",
    "start": 2299,
    "end": 2312,
    "range": [
      2299,
      2312
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2312,
    "end": 2313,
    "range": [
      2312,
      2313
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2313,
    "end": 2314,
    "range": [
      2313,
      2314
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2314,
    "end": 2315,
    "range": [
      2314,
      2315
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2315,
    "end": 2316,
    "range": [
      2315,
      2316
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2316,
    "end": 2317,
    "range": [
      2316,
      2317
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2318,
    "end": 2319,
    "range": [
      2318,
      2319
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2319,
    "end": 2320,
    "range": [
      2319,
      2320
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2321,
    "end": 2328,
    "range": [
      2321,
      2328
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2329,
    "end": 2332,
    "range": [
      2329,
      2332
    ]
  },
  {
    "type": "Identifier",
    "value": "ra1",
    "start": 2333,
    "end": 2336,
    "range": [
      2333,
      2336
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2336,
    "end": 2337,
    "range": [
      2336,
      2337
    ]
  },
  {
    "type": "Identifier",
    "value": "ValueOrArray2",
    "start": 2338,
    "end": 2351,
    "range": [
      2338,
      2351
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2351,
    "end": 2352,
    "range": [
      2351,
      2352
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2352,
    "end": 2358,
    "range": [
      2352,
      2358
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2358,
    "end": 2359,
    "range": [
      2358,
      2359
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2359,
    "end": 2360,
    "range": [
      2359,
      2360
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2362,
    "end": 2365,
    "range": [
      2362,
      2365
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 2366,
    "end": 2368,
    "range": [
      2366,
      2368
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2369,
    "end": 2370,
    "range": [
      2369,
      2370
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 2371,
    "end": 2375,
    "range": [
      2371,
      2375
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2375,
    "end": 2376,
    "range": [
      2375,
      2376
    ]
  },
  {
    "type": "Identifier",
    "value": "ra1",
    "start": 2376,
    "end": 2379,
    "range": [
      2376,
      2379
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2379,
    "end": 2380,
    "range": [
      2379,
      2380
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2380,
    "end": 2381,
    "range": [
      2380,
      2381
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2393,
    "end": 2397,
    "range": [
      2393,
      2397
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberOrArray1",
    "start": 2398,
    "end": 2412,
    "range": [
      2398,
      2412
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2412,
    "end": 2413,
    "range": [
      2412,
      2413
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2413,
    "end": 2414,
    "range": [
      2413,
      2414
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2414,
    "end": 2415,
    "range": [
      2414,
      2415
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2416,
    "end": 2417,
    "range": [
      2416,
      2417
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2418,
    "end": 2419,
    "range": [
      2418,
      2419
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2420,
    "end": 2421,
    "range": [
      2420,
      2421
    ]
  },
  {
    "type": "Identifier",
    "value": "ValueOrArray1",
    "start": 2422,
    "end": 2435,
    "range": [
      2422,
      2435
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2435,
    "end": 2436,
    "range": [
      2435,
      2436
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2436,
    "end": 2437,
    "range": [
      2436,
      2437
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2437,
    "end": 2438,
    "range": [
      2437,
      2438
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2438,
    "end": 2439,
    "range": [
      2438,
      2439
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2439,
    "end": 2440,
    "range": [
      2439,
      2440
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2440,
    "end": 2441,
    "range": [
      2440,
      2441
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
    "value": "NumberOrArray2",
    "start": 2447,
    "end": 2461,
    "range": [
      2447,
      2461
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2461,
    "end": 2462,
    "range": [
      2461,
      2462
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2462,
    "end": 2463,
    "range": [
      2462,
      2463
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2463,
    "end": 2464,
    "range": [
      2463,
      2464
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2465,
    "end": 2466,
    "range": [
      2465,
      2466
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2467,
    "end": 2468,
    "range": [
      2467,
      2468
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2469,
    "end": 2470,
    "range": [
      2469,
      2470
    ]
  },
  {
    "type": "Identifier",
    "value": "ValueOrArray2",
    "start": 2471,
    "end": 2484,
    "range": [
      2471,
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
    "type": "Identifier",
    "value": "T",
    "start": 2485,
    "end": 2486,
    "range": [
      2485,
      2486
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2486,
    "end": 2487,
    "range": [
      2486,
      2487
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2487,
    "end": 2488,
    "range": [
      2487,
      2488
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2488,
    "end": 2489,
    "range": [
      2488,
      2489
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2489,
    "end": 2490,
    "range": [
      2489,
      2490
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2492,
    "end": 2499,
    "range": [
      2492,
      2499
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2500,
    "end": 2508,
    "range": [
      2500,
      2508
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 2509,
    "end": 2513,
    "range": [
      2509,
      2513
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2513,
    "end": 2514,
    "range": [
      2513,
      2514
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2514,
    "end": 2515,
    "range": [
      2514,
      2515
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2515,
    "end": 2516,
    "range": [
      2515,
      2516
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2516,
    "end": 2517,
    "range": [
      2516,
      2517
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2517,
    "end": 2518,
    "range": [
      2517,
      2518
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2518,
    "end": 2519,
    "range": [
      2518,
      2519
    ]
  },
  {
    "type": "Identifier",
    "value": "ValueOrArray1",
    "start": 2520,
    "end": 2533,
    "range": [
      2520,
      2533
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2533,
    "end": 2534,
    "range": [
      2533,
      2534
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2534,
    "end": 2535,
    "range": [
      2534,
      2535
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2535,
    "end": 2536,
    "range": [
      2535,
      2536
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2536,
    "end": 2537,
    "range": [
      2536,
      2537
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2537,
    "end": 2538,
    "range": [
      2537,
      2538
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2539,
    "end": 2540,
    "range": [
      2539,
      2540
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2540,
    "end": 2541,
    "range": [
      2540,
      2541
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2542,
    "end": 2549,
    "range": [
      2542,
      2549
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2550,
    "end": 2553,
    "range": [
      2550,
      2553
    ]
  },
  {
    "type": "Identifier",
    "value": "ra2",
    "start": 2554,
    "end": 2557,
    "range": [
      2554,
      2557
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2557,
    "end": 2558,
    "range": [
      2557,
      2558
    ]
  },
  {
    "type": "Identifier",
    "value": "ValueOrArray2",
    "start": 2559,
    "end": 2572,
    "range": [
      2559,
      2572
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2572,
    "end": 2573,
    "range": [
      2572,
      2573
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2573,
    "end": 2579,
    "range": [
      2573,
      2579
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2579,
    "end": 2580,
    "range": [
      2579,
      2580
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2580,
    "end": 2581,
    "range": [
      2580,
      2581
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2583,
    "end": 2586,
    "range": [
      2583,
      2586
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 2587,
    "end": 2589,
    "range": [
      2587,
      2589
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2590,
    "end": 2591,
    "range": [
      2590,
      2591
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 2592,
    "end": 2596,
    "range": [
      2592,
      2596
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2596,
    "end": 2597,
    "range": [
      2596,
      2597
    ]
  },
  {
    "type": "Identifier",
    "value": "ra2",
    "start": 2597,
    "end": 2600,
    "range": [
      2597,
      2600
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2600,
    "end": 2601,
    "range": [
      2600,
      2601
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2601,
    "end": 2602,
    "range": [
      2601,
      2602
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2658,
    "end": 2662,
    "range": [
      2658,
      2662
    ]
  },
  {
    "type": "Identifier",
    "value": "Tree",
    "start": 2663,
    "end": 2667,
    "range": [
      2663,
      2667
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2668,
    "end": 2669,
    "range": [
      2668,
      2669
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2670,
    "end": 2671,
    "range": [
      2670,
      2671
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLHeadingElement",
    "start": 2671,
    "end": 2689,
    "range": [
      2671,
      2689
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2689,
    "end": 2690,
    "range": [
      2689,
      2690
    ]
  },
  {
    "type": "Identifier",
    "value": "Tree",
    "start": 2691,
    "end": 2695,
    "range": [
      2691,
      2695
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2695,
    "end": 2696,
    "range": [
      2695,
      2696
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2696,
    "end": 2697,
    "range": [
      2696,
      2697
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2697,
    "end": 2698,
    "range": [
      2697,
      2698
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2698,
    "end": 2699,
    "range": [
      2698,
      2699
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2701,
    "end": 2709,
    "range": [
      2701,
      2709
    ]
  },
  {
    "type": "Identifier",
    "value": "parse",
    "start": 2710,
    "end": 2715,
    "range": [
      2710,
      2715
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2715,
    "end": 2716,
    "range": [
      2715,
      2716
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2716,
    "end": 2720,
    "range": [
      2716,
      2720
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2720,
    "end": 2721,
    "range": [
      2720,
      2721
    ]
  },
  {
    "type": "Identifier",
    "value": "Tree",
    "start": 2722,
    "end": 2726,
    "range": [
      2722,
      2726
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2726,
    "end": 2727,
    "range": [
      2726,
      2727
    ]
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 2728,
    "end": 2733,
    "range": [
      2728,
      2733
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2733,
    "end": 2734,
    "range": [
      2733,
      2734
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2735,
    "end": 2741,
    "range": [
      2735,
      2741
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2741,
    "end": 2742,
    "range": [
      2741,
      2742
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2742,
    "end": 2743,
    "range": [
      2742,
      2743
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2744,
    "end": 2745,
    "range": [
      2744,
      2745
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2746,
    "end": 2747,
    "range": [
      2746,
      2747
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2747,
    "end": 2748,
    "range": [
      2747,
      2748
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "HTMLUListElement",
    "start": 2751,
    "end": 2767,
    "range": [
      2751,
      2767
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2768,
    "end": 2769,
    "range": [
      2768,
      2769
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2772,
    "end": 2778,
    "range": [
      2772,
      2778
    ]
  },
  {
    "type": "Identifier",
    "value": "html",
    "start": 2779,
    "end": 2783,
    "range": [
      2779,
      2783
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2783,
    "end": 2784,
    "range": [
      2783,
      2784
    ]
  },
  {
    "type": "String",
    "value": "'ul'",
    "start": 2784,
    "end": 2788,
    "range": [
      2784,
      2788
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2788,
    "end": 2789,
    "range": [
      2788,
      2789
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2790,
    "end": 2794,
    "range": [
      2790,
      2794
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2794,
    "end": 2795,
    "range": [
      2794,
      2795
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 2795,
    "end": 2798,
    "range": [
      2795,
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
    "value": "(",
    "start": 2799,
    "end": 2800,
    "range": [
      2799,
      2800
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2800,
    "end": 2801,
    "range": [
      2800,
      2801
    ]
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 2801,
    "end": 2803,
    "range": [
      2801,
      2803
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2803,
    "end": 2804,
    "range": [
      2803,
      2804
    ]
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 2805,
    "end": 2813,
    "range": [
      2805,
      2813
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2813,
    "end": 2814,
    "range": [
      2813,
      2814
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2814,
    "end": 2815,
    "range": [
      2814,
      2815
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2816,
    "end": 2817,
    "range": [
      2816,
      2817
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2817,
    "end": 2818,
    "range": [
      2817,
      2818
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2819,
    "end": 2821,
    "range": [
      2819,
      2821
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2822,
    "end": 2823,
    "range": [
      2822,
      2823
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2828,
    "end": 2833,
    "range": [
      2828,
      2833
    ]
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 2834,
    "end": 2837,
    "range": [
      2834,
      2837
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2838,
    "end": 2839,
    "range": [
      2838,
      2839
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2840,
    "end": 2841,
    "range": [
      2840,
      2841
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2841,
    "end": 2844,
    "range": [
      2841,
      2844
    ]
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 2844,
    "end": 2849,
    "range": [
      2844,
      2849
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2849,
    "end": 2850,
    "range": [
      2849,
      2850
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2851,
    "end": 2852,
    "range": [
      2851,
      2852
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2853,
    "end": 2854,
    "range": [
      2853,
      2854
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2855,
    "end": 2856,
    "range": [
      2855,
      2856
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2856,
    "end": 2857,
    "range": [
      2856,
      2857
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2857,
    "end": 2858,
    "range": [
      2857,
      2858
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2863,
    "end": 2869,
    "range": [
      2863,
      2869
    ]
  },
  {
    "type": "Identifier",
    "value": "html",
    "start": 2870,
    "end": 2874,
    "range": [
      2870,
      2874
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2874,
    "end": 2875,
    "range": [
      2874,
      2875
    ]
  },
  {
    "type": "String",
    "value": "'li'",
    "start": 2875,
    "end": 2879,
    "range": [
      2875,
      2879
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2879,
    "end": 2880,
    "range": [
      2879,
      2880
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2881,
    "end": 2882,
    "range": [
      2881,
      2882
    ]
  },
  {
    "type": "Identifier",
    "value": "html",
    "start": 2889,
    "end": 2893,
    "range": [
      2889,
      2893
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2893,
    "end": 2894,
    "range": [
      2893,
      2894
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 2894,
    "end": 2897,
    "range": [
      2894,
      2897
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2897,
    "end": 2898,
    "range": [
      2897,
      2898
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2899,
    "end": 2900,
    "range": [
      2899,
      2900
    ]
  },
  {
    "type": "Identifier",
    "value": "href",
    "start": 2901,
    "end": 2905,
    "range": [
      2901,
      2905
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2905,
    "end": 2906,
    "range": [
      2905,
      2906
    ]
  },
  {
    "type": "Template",
    "value": "`#${",
    "start": 2907,
    "end": 2911,
    "range": [
      2907,
      2911
    ]
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 2911,
    "end": 2913,
    "range": [
      2911,
      2913
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2913,
    "end": 2914,
    "range": [
      2913,
      2914
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 2914,
    "end": 2916,
    "range": [
      2914,
      2916
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2916,
    "end": 2918,
    "range": [
      2916,
      2918
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2918,
    "end": 2919,
    "range": [
      2918,
      2919
    ]
  },
  {
    "type": "Identifier",
    "value": "rel",
    "start": 2920,
    "end": 2923,
    "range": [
      2920,
      2923
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2923,
    "end": 2924,
    "range": [
      2923,
      2924
    ]
  },
  {
    "type": "String",
    "value": "'noopener'",
    "start": 2925,
    "end": 2935,
    "range": [
      2925,
      2935
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2935,
    "end": 2936,
    "range": [
      2935,
      2936
    ]
  },
  {
    "type": "String",
    "value": "'data-index'",
    "start": 2937,
    "end": 2949,
    "range": [
      2937,
      2949
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2949,
    "end": 2950,
    "range": [
      2949,
      2950
    ]
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 2951,
    "end": 2954,
    "range": [
      2951,
      2954
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2954,
    "end": 2955,
    "range": [
      2954,
      2955
    ]
  },
  {
    "type": "Identifier",
    "value": "join",
    "start": 2955,
    "end": 2959,
    "range": [
      2955,
      2959
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2959,
    "end": 2960,
    "range": [
      2959,
      2960
    ]
  },
  {
    "type": "String",
    "value": "'.'",
    "start": 2960,
    "end": 2963,
    "range": [
      2960,
      2963
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2963,
    "end": 2964,
    "range": [
      2963,
      2964
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2965,
    "end": 2966,
    "range": [
      2965,
      2966
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2966,
    "end": 2967,
    "range": [
      2966,
      2967
    ]
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 2968,
    "end": 2970,
    "range": [
      2968,
      2970
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2970,
    "end": 2971,
    "range": [
      2970,
      2971
    ]
  },
  {
    "type": "Identifier",
    "value": "textContent",
    "start": 2971,
    "end": 2982,
    "range": [
      2971,
      2982
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2982,
    "end": 2983,
    "range": [
      2982,
      2983
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2983,
    "end": 2984,
    "range": [
      2983,
      2984
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2984,
    "end": 2985,
    "range": [
      2984,
      2985
    ]
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 2992,
    "end": 3000,
    "range": [
      2992,
      3000
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3000,
    "end": 3001,
    "range": [
      3000,
      3001
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3001,
    "end": 3007,
    "range": [
      3001,
      3007
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3008,
    "end": 3009,
    "range": [
      3008,
      3009
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3010,
    "end": 3011,
    "range": [
      3010,
      3011
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3012,
    "end": 3013,
    "range": [
      3012,
      3013
    ]
  },
  {
    "type": "Identifier",
    "value": "parse",
    "start": 3014,
    "end": 3019,
    "range": [
      3014,
      3019
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3019,
    "end": 3020,
    "range": [
      3019,
      3020
    ]
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 3020,
    "end": 3028,
    "range": [
      3020,
      3028
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3028,
    "end": 3029,
    "range": [
      3028,
      3029
    ]
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 3030,
    "end": 3033,
    "range": [
      3030,
      3033
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3033,
    "end": 3034,
    "range": [
      3033,
      3034
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3035,
    "end": 3036,
    "range": [
      3035,
      3036
    ]
  },
  {
    "type": "Identifier",
    "value": "frag",
    "start": 3037,
    "end": 3041,
    "range": [
      3037,
      3041
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3041,
    "end": 3042,
    "range": [
      3041,
      3042
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3042,
    "end": 3043,
    "range": [
      3042,
      3043
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3048,
    "end": 3049,
    "range": [
      3048,
      3049
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3049,
    "end": 3050,
    "range": [
      3049,
      3050
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3050,
    "end": 3051,
    "range": [
      3050,
      3051
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3054,
    "end": 3055,
    "range": [
      3054,
      3055
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3055,
    "end": 3056,
    "range": [
      3055,
      3056
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3056,
    "end": 3057,
    "range": [
      3056,
      3057
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3057,
    "end": 3058,
    "range": [
      3057,
      3058
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3059,
    "end": 3060,
    "range": [
      3059,
      3060
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3062,
    "end": 3070,
    "range": [
      3062,
      3070
    ]
  },
  {
    "type": "Identifier",
    "value": "cons",
    "start": 3071,
    "end": 3075,
    "range": [
      3071,
      3075
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3075,
    "end": 3076,
    "range": [
      3075,
      3076
    ]
  },
  {
    "type": "Identifier",
    "value": "hs",
    "start": 3076,
    "end": 3078,
    "range": [
      3076,
      3078
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3078,
    "end": 3079,
    "range": [
      3078,
      3079
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLHeadingElement",
    "start": 3080,
    "end": 3098,
    "range": [
      3080,
      3098
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3098,
    "end": 3099,
    "range": [
      3098,
      3099
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3099,
    "end": 3100,
    "range": [
      3099,
      3100
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3100,
    "end": 3101,
    "range": [
      3100,
      3101
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3101,
    "end": 3102,
    "range": [
      3101,
      3102
    ]
  },
  {
    "type": "Identifier",
    "value": "Tree",
    "start": 3103,
    "end": 3107,
    "range": [
      3103,
      3107
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3108,
    "end": 3109,
    "range": [
      3108,
      3109
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3112,
    "end": 3118,
    "range": [
      3112,
      3118
    ]
  },
  {
    "type": "Identifier",
    "value": "hs",
    "start": 3119,
    "end": 3121,
    "range": [
      3119,
      3121
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3126,
    "end": 3127,
    "range": [
      3126,
      3127
    ]
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 3127,
    "end": 3133,
    "range": [
      3127,
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
    "value": "HTMLHeadingElement",
    "start": 3134,
    "end": 3152,
    "range": [
      3134,
      3152
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3152,
    "end": 3153,
    "range": [
      3152,
      3153
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3153,
    "end": 3154,
    "range": [
      3153,
      3154
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3154,
    "end": 3155,
    "range": [
      3154,
      3155
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3155,
    "end": 3156,
    "range": [
      3155,
      3156
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3156,
    "end": 3157,
    "range": [
      3156,
      3157
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3157,
    "end": 3158,
    "range": [
      3157,
      3158
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3158,
    "end": 3159,
    "range": [
      3158,
      3159
    ]
  },
  {
    "type": "Identifier",
    "value": "hss",
    "start": 3159,
    "end": 3162,
    "range": [
      3159,
      3162
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3162,
    "end": 3163,
    "range": [
      3162,
      3163
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 3164,
    "end": 3165,
    "range": [
      3164,
      3165
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3165,
    "end": 3166,
    "range": [
      3165,
      3166
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3167,
    "end": 3169,
    "range": [
      3167,
      3169
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3170,
    "end": 3171,
    "range": [
      3170,
      3171
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3178,
    "end": 3183,
    "range": [
      3178,
      3183
    ]
  },
  {
    "type": "Identifier",
    "value": "hs",
    "start": 3184,
    "end": 3186,
    "range": [
      3184,
      3186
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3187,
    "end": 3188,
    "range": [
      3187,
      3188
    ]
  },
  {
    "type": "Identifier",
    "value": "hss",
    "start": 3189,
    "end": 3192,
    "range": [
      3189,
      3192
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3192,
    "end": 3193,
    "range": [
      3192,
      3193
    ]
  },
  {
    "type": "Identifier",
    "value": "pop",
    "start": 3193,
    "end": 3196,
    "range": [
      3193,
      3196
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3196,
    "end": 3197,
    "range": [
      3196,
      3197
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3197,
    "end": 3198,
    "range": [
      3197,
      3198
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3198,
    "end": 3199,
    "range": [
      3198,
      3199
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3199,
    "end": 3200,
    "range": [
      3199,
      3200
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3207,
    "end": 3213,
    "range": [
      3207,
      3213
    ]
  },
  {
    "type": "Identifier",
    "value": "hs",
    "start": 3214,
    "end": 3216,
    "range": [
      3214,
      3216
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3216,
    "end": 3217,
    "range": [
      3216,
      3217
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3217,
    "end": 3223,
    "range": [
      3217,
      3223
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3224,
    "end": 3227,
    "range": [
      3224,
      3227
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3228,
    "end": 3229,
    "range": [
      3228,
      3229
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 3230,
    "end": 3232,
    "range": [
      3230,
      3232
    ]
  },
  {
    "type": "Identifier",
    "value": "level",
    "start": 3233,
    "end": 3238,
    "range": [
      3233,
      3238
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3238,
    "end": 3239,
    "range": [
      3238,
      3239
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 3239,
    "end": 3240,
    "range": [
      3239,
      3240
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3240,
    "end": 3241,
    "range": [
      3240,
      3241
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3242,
    "end": 3243,
    "range": [
      3242,
      3243
    ]
  },
  {
    "type": "Identifier",
    "value": "level",
    "start": 3244,
    "end": 3249,
    "range": [
      3244,
      3249
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3249,
    "end": 3250,
    "range": [
      3249,
      3250
    ]
  },
  {
    "type": "Identifier",
    "value": "hs",
    "start": 3250,
    "end": 3252,
    "range": [
      3250,
      3252
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3252,
    "end": 3253,
    "range": [
      3252,
      3253
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3253,
    "end": 3254,
    "range": [
      3253,
      3254
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3254,
    "end": 3255,
    "range": [
      3254,
      3255
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3255,
    "end": 3256,
    "range": [
      3255,
      3256
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3265,
    "end": 3266,
    "range": [
      3265,
      3266
    ]
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 3267,
    "end": 3273,
    "range": [
      3267,
      3273
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3273,
    "end": 3274,
    "range": [
      3273,
      3274
    ]
  },
  {
    "type": "Identifier",
    "value": "hss",
    "start": 3274,
    "end": 3277,
    "range": [
      3274,
      3277
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3277,
    "end": 3278,
    "range": [
      3277,
      3278
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3279,
    "end": 3280,
    "range": [
      3279,
      3280
    ]
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 3280,
    "end": 3286,
    "range": [
      3280,
      3286
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3286,
    "end": 3287,
    "range": [
      3286,
      3287
    ]
  },
  {
    "type": "Identifier",
    "value": "hs",
    "start": 3287,
    "end": 3289,
    "range": [
      3287,
      3289
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3289,
    "end": 3290,
    "range": [
      3289,
      3290
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3291,
    "end": 3292,
    "range": [
      3291,
      3292
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 3292,
    "end": 3293,
    "range": [
      3292,
      3293
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3293,
    "end": 3294,
    "range": [
      3293,
      3294
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3294,
    "end": 3295,
    "range": [
      3294,
      3295
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3295,
    "end": 3296,
    "range": [
      3295,
      3296
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3296,
    "end": 3297,
    "range": [
      3296,
      3297
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3306,
    "end": 3307,
    "range": [
      3306,
      3307
    ]
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 3308,
    "end": 3314,
    "range": [
      3308,
      3314
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3314,
    "end": 3315,
    "range": [
      3314,
      3315
    ]
  },
  {
    "type": "Identifier",
    "value": "hss",
    "start": 3315,
    "end": 3318,
    "range": [
      3315,
      3318
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3318,
    "end": 3319,
    "range": [
      3318,
      3319
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3320,
    "end": 3321,
    "range": [
      3320,
      3321
    ]
  },
  {
    "type": "Identifier",
    "value": "hs",
    "start": 3321,
    "end": 3323,
    "range": [
      3321,
      3323
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3323,
    "end": 3324,
    "range": [
      3323,
      3324
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3325,
    "end": 3326,
    "range": [
      3325,
      3326
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 3326,
    "end": 3327,
    "range": [
      3326,
      3327
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3327,
    "end": 3328,
    "range": [
      3327,
      3328
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3328,
    "end": 3329,
    "range": [
      3328,
      3329
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3329,
    "end": 3330,
    "range": [
      3329,
      3330
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3330,
    "end": 3331,
    "range": [
      3330,
      3331
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3336,
    "end": 3337,
    "range": [
      3336,
      3337
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3337,
    "end": 3338,
    "range": [
      3337,
      3338
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3339,
    "end": 3340,
    "range": [
      3339,
      3340
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3340,
    "end": 3341,
    "range": [
      3340,
      3341
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3341,
    "end": 3342,
    "range": [
      3341,
      3342
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3342,
    "end": 3343,
    "range": [
      3342,
      3343
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3343,
    "end": 3344,
    "range": [
      3343,
      3344
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3349,
    "end": 3350,
    "range": [
      3349,
      3350
    ]
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 3350,
    "end": 3356,
    "range": [
      3350,
      3356
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3356,
    "end": 3357,
    "range": [
      3356,
      3357
    ]
  },
  {
    "type": "Identifier",
    "value": "Tree",
    "start": 3357,
    "end": 3361,
    "range": [
      3357,
      3361
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3361,
    "end": 3362,
    "range": [
      3361,
      3362
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3362,
    "end": 3363,
    "range": [
      3362,
      3363
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3363,
    "end": 3364,
    "range": [
      3363,
      3364
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 3364,
    "end": 3368,
    "range": [
      3364,
      3368
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3368,
    "end": 3369,
    "range": [
      3368,
      3369
    ]
  },
  {
    "type": "Identifier",
    "value": "hs",
    "start": 3370,
    "end": 3372,
    "range": [
      3370,
      3372
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3372,
    "end": 3373,
    "range": [
      3372,
      3373
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3374,
    "end": 3376,
    "range": [
      3374,
      3376
    ]
  },
  {
    "type": "Identifier",
    "value": "hs",
    "start": 3383,
    "end": 3385,
    "range": [
      3383,
      3385
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3385,
    "end": 3386,
    "range": [
      3385,
      3386
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3386,
    "end": 3392,
    "range": [
      3386,
      3392
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3393,
    "end": 3396,
    "range": [
      3393,
      3396
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3397,
    "end": 3398,
    "range": [
      3397,
      3398
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3407,
    "end": 3408,
    "range": [
      3407,
      3408
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 3409,
    "end": 3413,
    "range": [
      3409,
      3413
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3422,
    "end": 3423,
    "range": [
      3422,
      3423
    ]
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 3424,
    "end": 3430,
    "range": [
      3424,
      3430
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3430,
    "end": 3431,
    "range": [
      3430,
      3431
    ]
  },
  {
    "type": "Identifier",
    "value": "Tree",
    "start": 3431,
    "end": 3435,
    "range": [
      3431,
      3435
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3435,
    "end": 3436,
    "range": [
      3435,
      3436
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3436,
    "end": 3442,
    "range": [
      3436,
      3442
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3442,
    "end": 3443,
    "range": [
      3442,
      3443
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3443,
    "end": 3444,
    "range": [
      3443,
      3444
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3444,
    "end": 3445,
    "range": [
      3444,
      3445
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 3445,
    "end": 3449,
    "range": [
      3445,
      3449
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3449,
    "end": 3450,
    "range": [
      3449,
      3450
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3451,
    "end": 3452,
    "range": [
      3451,
      3452
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3452,
    "end": 3453,
    "range": [
      3452,
      3453
    ]
  },
  {
    "type": "Identifier",
    "value": "hs",
    "start": 3453,
    "end": 3455,
    "range": [
      3453,
      3455
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3455,
    "end": 3456,
    "range": [
      3455,
      3456
    ]
  },
  {
    "type": "Identifier",
    "value": "shift",
    "start": 3456,
    "end": 3461,
    "range": [
      3456,
      3461
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3461,
    "end": 3462,
    "range": [
      3461,
      3462
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3462,
    "end": 3463,
    "range": [
      3462,
      3463
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3463,
    "end": 3464,
    "range": [
      3463,
      3464
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3464,
    "end": 3465,
    "range": [
      3464,
      3465
    ]
  },
  {
    "type": "Identifier",
    "value": "cons",
    "start": 3466,
    "end": 3470,
    "range": [
      3466,
      3470
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3470,
    "end": 3471,
    "range": [
      3470,
      3471
    ]
  },
  {
    "type": "Identifier",
    "value": "hs",
    "start": 3471,
    "end": 3473,
    "range": [
      3471,
      3473
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3473,
    "end": 3474,
    "range": [
      3473,
      3474
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3474,
    "end": 3475,
    "range": [
      3474,
      3475
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3475,
    "end": 3476,
    "range": [
      3475,
      3476
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3476,
    "end": 3477,
    "range": [
      3476,
      3477
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3482,
    "end": 3483,
    "range": [
      3482,
      3483
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3484,
    "end": 3485,
    "range": [
      3484,
      3485
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3485,
    "end": 3486,
    "range": [
      3485,
      3486
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3486,
    "end": 3487,
    "range": [
      3486,
      3487
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3487,
    "end": 3488,
    "range": [
      3487,
      3488
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3489,
    "end": 3490,
    "range": [
      3489,
      3490
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3492,
    "end": 3500,
    "range": [
      3492,
      3500
    ]
  },
  {
    "type": "Identifier",
    "value": "level",
    "start": 3501,
    "end": 3506,
    "range": [
      3501,
      3506
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3506,
    "end": 3507,
    "range": [
      3506,
      3507
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 3507,
    "end": 3508,
    "range": [
      3507,
      3508
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3508,
    "end": 3509,
    "range": [
      3508,
      3509
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLHeadingElement",
    "start": 3510,
    "end": 3528,
    "range": [
      3510,
      3528
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3528,
    "end": 3529,
    "range": [
      3528,
      3529
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3529,
    "end": 3530,
    "range": [
      3529,
      3530
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3531,
    "end": 3537,
    "range": [
      3531,
      3537
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3538,
    "end": 3539,
    "range": [
      3538,
      3539
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 3542,
    "end": 3548,
    "range": [
      3542,
      3548
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3548,
    "end": 3549,
    "range": [
      3548,
      3549
    ]
  },
  {
    "type": "Identifier",
    "value": "isFinite",
    "start": 3549,
    "end": 3557,
    "range": [
      3549,
      3557
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3557,
    "end": 3558,
    "range": [
      3557,
      3558
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3558,
    "end": 3559,
    "range": [
      3558,
      3559
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 3559,
    "end": 3560,
    "range": [
      3559,
      3560
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3560,
    "end": 3561,
    "range": [
      3560,
      3561
    ]
  },
  {
    "type": "Identifier",
    "value": "tagName",
    "start": 3561,
    "end": 3568,
    "range": [
      3561,
      3568
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3568,
    "end": 3569,
    "range": [
      3568,
      3569
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3569,
    "end": 3570,
    "range": [
      3569,
      3570
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3570,
    "end": 3571,
    "range": [
      3570,
      3571
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3571,
    "end": 3572,
    "range": [
      3571,
      3572
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3572,
    "end": 3573,
    "range": [
      3572,
      3573
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3573,
    "end": 3574,
    "range": [
      3573,
      3574
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3577,
    "end": 3583,
    "range": [
      3577,
      3583
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3584,
    "end": 3585,
    "range": [
      3584,
      3585
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 3585,
    "end": 3586,
    "range": [
      3585,
      3586
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3586,
    "end": 3587,
    "range": [
      3586,
      3587
    ]
  },
  {
    "type": "Identifier",
    "value": "tagName",
    "start": 3587,
    "end": 3594,
    "range": [
      3587,
      3594
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3594,
    "end": 3595,
    "range": [
      3594,
      3595
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3595,
    "end": 3596,
    "range": [
      3595,
      3596
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3596,
    "end": 3597,
    "range": [
      3596,
      3597
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3597,
    "end": 3598,
    "range": [
      3597,
      3598
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3599,
    "end": 3600,
    "range": [
      3599,
      3600
    ]
  }
]
```
