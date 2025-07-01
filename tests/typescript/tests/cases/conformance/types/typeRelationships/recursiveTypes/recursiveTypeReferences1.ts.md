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
