__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3601,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 17,
        "name": "ValueOrArray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 17,
        "end": 20,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 18,
            "end": 19,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 23,
        "end": 49,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 23,
            "end": 24,
            "typeName": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 27,
            "end": 49,
            "typeName": {
              "type": "Identifier",
              "start": 27,
              "end": 32,
              "name": "Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 32,
              "end": 49,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 33,
                  "end": 48,
                  "typeName": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 45,
                    "name": "ValueOrArray",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 45,
                    "end": 48,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 46,
                        "end": 47,
                        "typeName": {
                          "type": "Identifier",
                          "start": 46,
                          "end": 47,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 87,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 86,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 82,
            "name": "a0",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 82,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 62,
                "end": 82,
                "typeName": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 74,
                  "name": "ValueOrArray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 74,
                  "end": 82,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 75,
                      "end": 81
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 85,
            "end": 86,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 150,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 118,
            "name": "a1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 118,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 98,
                "end": 118,
                "typeName": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 110,
                  "name": "ValueOrArray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 110,
                  "end": 118,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 111,
                      "end": 117
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 121,
            "end": 150,
            "elements": [
              {
                "type": "Literal",
                "start": 122,
                "end": 123,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "ArrayExpression",
                "start": 125,
                "end": 131,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 126,
                    "end": 127,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 129,
                    "end": 130,
                    "value": 3,
                    "raw": "3"
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "start": 133,
                "end": 149,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 134,
                    "end": 135,
                    "value": 4,
                    "raw": "4"
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 137,
                    "end": 148,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 138,
                        "end": 139,
                        "value": 5,
                        "raw": "5"
                      },
                      {
                        "type": "ArrayExpression",
                        "start": 141,
                        "end": 147,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 142,
                            "end": 143,
                            "value": 6,
                            "raw": "6"
                          },
                          {
                            "type": "Literal",
                            "start": 145,
                            "end": 146,
                            "value": 7,
                            "raw": "7"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 153,
      "end": 240,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 171,
        "name": "HypertextNode",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 174,
        "end": 239,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 174,
            "end": 180
          },
          {
            "type": "TSTupleType",
            "start": 183,
            "end": 239,
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              },
              {
                "type": "TSTypeLiteral",
                "start": 192,
                "end": 218,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 194,
                    "end": 216,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 195,
                        "end": 206,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 198,
                          "end": 206,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 200,
                            "end": 206
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 207,
                      "end": 216,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 209,
                        "end": 216
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              },
              {
                "type": "TSRestType",
                "start": 220,
                "end": 238,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 223,
                  "end": 238,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 223,
                    "end": 236,
                    "typeName": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 236,
                      "name": "HypertextNode",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 242,
      "end": 442,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 441,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 276,
            "name": "hypertextNode",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 261,
              "end": 276,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 263,
                "end": 276,
                "typeName": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 276,
                  "name": "HypertextNode",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 283,
            "end": 441,
            "elements": [
              {
                "type": "Literal",
                "start": 284,
                "end": 289,
                "value": "div",
                "raw": "\"div\""
              },
              {
                "type": "ObjectExpression",
                "start": 291,
                "end": 307,
                "properties": [
                  {
                    "type": "Property",
                    "start": 293,
                    "end": 305,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 295,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 297,
                      "end": 305,
                      "value": "parent",
                      "raw": "\"parent\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "start": 317,
                "end": 370,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 318,
                    "end": 323,
                    "value": "div",
                    "raw": "\"div\""
                  },
                  {
                    "type": "ObjectExpression",
                    "start": 325,
                    "end": 346,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 327,
                        "end": 344,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 327,
                          "end": 329,
                          "name": "id",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 331,
                          "end": 344,
                          "value": "first-child",
                          "raw": "\"first-child\""
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  {
                    "type": "Literal",
                    "start": 348,
                    "end": 369,
                    "value": "I'm the first child",
                    "raw": "\"I'm the first child\""
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "start": 380,
                "end": 435,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 381,
                    "end": 386,
                    "value": "div",
                    "raw": "\"div\""
                  },
                  {
                    "type": "ObjectExpression",
                    "start": 388,
                    "end": 410,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 390,
                        "end": 408,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 390,
                          "end": 392,
                          "name": "id",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 394,
                          "end": 408,
                          "value": "second-child",
                          "raw": "\"second-child\""
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  {
                    "type": "Literal",
                    "start": 412,
                    "end": 434,
                    "value": "I'm the second child",
                    "raw": "\"I'm the second child\""
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 444,
      "end": 524,
      "id": {
        "type": "Identifier",
        "start": 449,
        "end": 453,
        "name": "Json",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 456,
        "end": 523,
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
            "start": 491,
            "end": 497,
            "elementType": {
              "type": "TSTypeReference",
              "start": 491,
              "end": 495,
              "typeName": {
                "type": "Identifier",
                "start": 491,
                "end": 495,
                "name": "Json",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 500,
            "end": 523,
            "members": [
              {
                "type": "TSIndexSignature",
                "start": 502,
                "end": 521,
                "parameters": [
                  {
                    "type": "Identifier",
                    "start": 503,
                    "end": 514,
                    "name": "key",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 506,
                      "end": 514,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 508,
                        "end": 514
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 515,
                  "end": 521,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 517,
                    "end": 521,
                    "typeName": {
                      "type": "Identifier",
                      "start": 517,
                      "end": 521,
                      "name": "Json",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "readonly": false,
                "static": false,
                "accessibility": null
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 526,
      "end": 635,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 530,
          "end": 634,
          "id": {
            "type": "Identifier",
            "start": 530,
            "end": 540,
            "name": "data",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 534,
              "end": 540,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 536,
                "end": 540,
                "typeName": {
                  "type": "Identifier",
                  "start": 536,
                  "end": 540,
                  "name": "Json",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 543,
            "end": 634,
            "properties": [
              {
                "type": "Property",
                "start": 549,
                "end": 564,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 549,
                  "end": 556,
                  "name": "caption",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 558,
                  "end": 564,
                  "value": "Test",
                  "raw": "\"Test\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 570,
                "end": 596,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 570,
                  "end": 578,
                  "name": "location",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 580,
                  "end": 596,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 582,
                      "end": 587,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 582,
                        "end": 583,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 585,
                        "end": 587,
                        "value": 10,
                        "raw": "10"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 589,
                      "end": 594,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 589,
                        "end": 590,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 592,
                        "end": 594,
                        "value": 20,
                        "raw": "20"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 602,
                "end": 632,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 602,
                  "end": 608,
                  "name": "values",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 610,
                  "end": 632,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 611,
                      "end": 615,
                      "value": true,
                      "raw": "true"
                    },
                    {
                      "type": "ArrayExpression",
                      "start": 617,
                      "end": 625,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 618,
                          "end": 620,
                          "value": 10,
                          "raw": "10"
                        },
                        {
                          "type": "Literal",
                          "start": 622,
                          "end": 624,
                          "value": 20,
                          "raw": "20"
                        }
                      ]
                    },
                    {
                      "type": "Literal",
                      "start": 627,
                      "end": 631,
                      "value": null,
                      "raw": "null"
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 637,
      "end": 666,
      "id": {
        "type": "Identifier",
        "start": 647,
        "end": 650,
        "name": "Box",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 650,
        "end": 653,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 651,
            "end": 652,
            "name": {
              "type": "Identifier",
              "start": 651,
              "end": 652,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 654,
        "end": 666,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 656,
            "end": 664,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 656,
              "end": 661,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 661,
              "end": 664,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 663,
                "end": 664,
                "typeName": {
                  "type": "Identifier",
                  "start": 663,
                  "end": 664,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "EmptyStatement",
      "start": 666,
      "end": 667
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 669,
      "end": 687,
      "id": {
        "type": "Identifier",
        "start": 674,
        "end": 676,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 679,
        "end": 686,
        "typeName": {
          "type": "Identifier",
          "start": 679,
          "end": 682,
          "name": "Box",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 682,
          "end": 686,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 683,
              "end": 685,
              "typeName": {
                "type": "Identifier",
                "start": 683,
                "end": 685,
                "name": "T1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 688,
      "end": 711,
      "id": {
        "type": "Identifier",
        "start": 693,
        "end": 695,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 698,
        "end": 710,
        "typeName": {
          "type": "Identifier",
          "start": 698,
          "end": 701,
          "name": "Box",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 701,
          "end": 710,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 702,
              "end": 709,
              "typeName": {
                "type": "Identifier",
                "start": 702,
                "end": 705,
                "name": "Box",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 705,
                "end": 709,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 706,
                    "end": 708,
                    "typeName": {
                      "type": "Identifier",
                      "start": 706,
                      "end": 708,
                      "name": "T2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 712,
      "end": 740,
      "id": {
        "type": "Identifier",
        "start": 717,
        "end": 719,
        "name": "T3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 722,
        "end": 739,
        "typeName": {
          "type": "Identifier",
          "start": 722,
          "end": 725,
          "name": "Box",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 725,
          "end": 739,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 726,
              "end": 738,
              "typeName": {
                "type": "Identifier",
                "start": 726,
                "end": 729,
                "name": "Box",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 729,
                "end": 738,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 730,
                    "end": 737,
                    "typeName": {
                      "type": "Identifier",
                      "start": 730,
                      "end": 733,
                      "name": "Box",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 733,
                      "end": 737,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 734,
                          "end": 736,
                          "typeName": {
                            "type": "Identifier",
                            "start": 734,
                            "end": 736,
                            "name": "T3",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 742,
      "end": 859,
      "id": {
        "type": "Identifier",
        "start": 751,
        "end": 753,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 754,
          "end": 760,
          "name": "t1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 756,
            "end": 760,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 758,
              "end": 760,
              "typeName": {
                "type": "Identifier",
                "start": 758,
                "end": 760,
                "name": "T1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 762,
          "end": 768,
          "name": "t2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 764,
            "end": 768,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 766,
              "end": 768,
              "typeName": {
                "type": "Identifier",
                "start": 766,
                "end": 768,
                "name": "T2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 770,
          "end": 776,
          "name": "t3",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 772,
            "end": 776,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 774,
              "end": 776,
              "typeName": {
                "type": "Identifier",
                "start": 774,
                "end": 776,
                "name": "T3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 778,
        "end": 859,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 784,
            "end": 792,
            "expression": {
              "type": "AssignmentExpression",
              "start": 784,
              "end": 791,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 784,
                "end": 786,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 789,
                "end": 791,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 797,
            "end": 805,
            "expression": {
              "type": "AssignmentExpression",
              "start": 797,
              "end": 804,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 797,
                "end": 799,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 802,
                "end": 804,
                "name": "t3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 810,
            "end": 818,
            "expression": {
              "type": "AssignmentExpression",
              "start": 810,
              "end": 817,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 810,
                "end": 812,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 815,
                "end": 817,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 823,
            "end": 831,
            "expression": {
              "type": "AssignmentExpression",
              "start": 823,
              "end": 830,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 823,
                "end": 825,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 828,
                "end": 830,
                "name": "t3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 836,
            "end": 844,
            "expression": {
              "type": "AssignmentExpression",
              "start": 836,
              "end": 843,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 836,
                "end": 838,
                "name": "t3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 841,
                "end": 843,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 849,
            "end": 857,
            "expression": {
              "type": "AssignmentExpression",
              "start": 849,
              "end": 856,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 849,
                "end": 851,
                "name": "t3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 854,
                "end": 856,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 861,
      "end": 892,
      "id": {
        "type": "Identifier",
        "start": 866,
        "end": 870,
        "name": "Box1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 873,
        "end": 891,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 873,
            "end": 882,
            "typeName": {
              "type": "Identifier",
              "start": 873,
              "end": 876,
              "name": "Box",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 876,
              "end": 882,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 877,
                  "end": 881,
                  "typeName": {
                    "type": "Identifier",
                    "start": 877,
                    "end": 881,
                    "name": "Box1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSNumberKeyword",
            "start": 885,
            "end": 891
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 894,
      "end": 915,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 900,
          "end": 914,
          "id": {
            "type": "Identifier",
            "start": 900,
            "end": 909,
            "name": "b10",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 903,
              "end": 909,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 905,
                "end": 909,
                "typeName": {
                  "type": "Identifier",
                  "start": 905,
                  "end": 909,
                  "name": "Box1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 912,
            "end": 914,
            "value": 42,
            "raw": "42"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 916,
      "end": 948,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 922,
          "end": 947,
          "id": {
            "type": "Identifier",
            "start": 922,
            "end": 931,
            "name": "b11",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 925,
              "end": 931,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 927,
                "end": 931,
                "typeName": {
                  "type": "Identifier",
                  "start": 927,
                  "end": 931,
                  "name": "Box1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 934,
            "end": 947,
            "properties": [
              {
                "type": "Property",
                "start": 936,
                "end": 945,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 936,
                  "end": 941,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 943,
                  "end": 945,
                  "value": 42,
                  "raw": "42"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 949,
      "end": 1001,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 955,
          "end": 1000,
          "id": {
            "type": "Identifier",
            "start": 955,
            "end": 964,
            "name": "b12",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 958,
              "end": 964,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 960,
                "end": 964,
                "typeName": {
                  "type": "Identifier",
                  "start": 960,
                  "end": 964,
                  "name": "Box1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 967,
            "end": 1000,
            "properties": [
              {
                "type": "Property",
                "start": 969,
                "end": 999,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 969,
                  "end": 974,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 976,
                  "end": 999,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 978,
                      "end": 998,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 978,
                        "end": 983,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 985,
                        "end": 998,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 987,
                            "end": 996,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 987,
                              "end": 992,
                              "name": "value",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 994,
                              "end": 996,
                              "value": 42,
                              "raw": "42"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1003,
      "end": 1034,
      "id": {
        "type": "Identifier",
        "start": 1008,
        "end": 1012,
        "name": "Box2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1015,
        "end": 1033,
        "typeName": {
          "type": "Identifier",
          "start": 1015,
          "end": 1018,
          "name": "Box",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1018,
          "end": 1033,
          "params": [
            {
              "type": "TSUnionType",
              "start": 1019,
              "end": 1032,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1019,
                  "end": 1023,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1019,
                    "end": 1023,
                    "name": "Box2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1026,
                  "end": 1032
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1036,
      "end": 1057,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1042,
          "end": 1056,
          "id": {
            "type": "Identifier",
            "start": 1042,
            "end": 1051,
            "name": "b20",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1045,
              "end": 1051,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1047,
                "end": 1051,
                "typeName": {
                  "type": "Identifier",
                  "start": 1047,
                  "end": 1051,
                  "name": "Box2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1054,
            "end": 1056,
            "value": 42,
            "raw": "42"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1068,
      "end": 1100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1074,
          "end": 1099,
          "id": {
            "type": "Identifier",
            "start": 1074,
            "end": 1083,
            "name": "b21",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1077,
              "end": 1083,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1079,
                "end": 1083,
                "typeName": {
                  "type": "Identifier",
                  "start": 1079,
                  "end": 1083,
                  "name": "Box2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1086,
            "end": 1099,
            "properties": [
              {
                "type": "Property",
                "start": 1088,
                "end": 1097,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1088,
                  "end": 1093,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1095,
                  "end": 1097,
                  "value": 42,
                  "raw": "42"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1101,
      "end": 1153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1107,
          "end": 1152,
          "id": {
            "type": "Identifier",
            "start": 1107,
            "end": 1116,
            "name": "b22",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1110,
              "end": 1116,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1112,
                "end": 1116,
                "typeName": {
                  "type": "Identifier",
                  "start": 1112,
                  "end": 1116,
                  "name": "Box2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1119,
            "end": 1152,
            "properties": [
              {
                "type": "Property",
                "start": 1121,
                "end": 1151,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1121,
                  "end": 1126,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1128,
                  "end": 1151,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1130,
                      "end": 1150,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1130,
                        "end": 1135,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1137,
                        "end": 1150,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1139,
                            "end": 1148,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1139,
                              "end": 1144,
                              "name": "value",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1146,
                              "end": 1148,
                              "value": 42,
                              "raw": "42"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1155,
      "end": 1197,
      "id": {
        "type": "Identifier",
        "start": 1160,
        "end": 1168,
        "name": "RecArray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1168,
        "end": 1171,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1169,
            "end": 1170,
            "name": {
              "type": "Identifier",
              "start": 1169,
              "end": 1170,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1174,
        "end": 1196,
        "typeName": {
          "type": "Identifier",
          "start": 1174,
          "end": 1179,
          "name": "Array",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1179,
          "end": 1196,
          "params": [
            {
              "type": "TSUnionType",
              "start": 1180,
              "end": 1195,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1180,
                  "end": 1181,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1180,
                    "end": 1181,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1184,
                  "end": 1195,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1184,
                    "end": 1192,
                    "name": "RecArray",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1192,
                    "end": 1195,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1193,
                        "end": 1194,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1193,
                          "end": 1194,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1199,
      "end": 1250,
      "id": {
        "type": "Identifier",
        "start": 1216,
        "end": 1220,
        "name": "flat",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1224,
          "end": 1238,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1225,
            "end": 1238,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1227,
              "end": 1238,
              "typeName": {
                "type": "Identifier",
                "start": 1227,
                "end": 1235,
                "name": "RecArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1235,
                "end": 1238,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1236,
                    "end": 1237,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1236,
                      "end": 1237,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1220,
        "end": 1223,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1221,
            "end": 1222,
            "name": {
              "type": "Identifier",
              "start": 1221,
              "end": 1222,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1239,
        "end": 1249,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1241,
          "end": 1249,
          "typeName": {
            "type": "Identifier",
            "start": 1241,
            "end": 1246,
            "name": "Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1246,
            "end": 1249,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1247,
                "end": 1248,
                "typeName": {
                  "type": "Identifier",
                  "start": 1247,
                  "end": 1248,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1251,
      "end": 1310,
      "id": {
        "type": "Identifier",
        "start": 1268,
        "end": 1273,
        "name": "flat1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1277,
          "end": 1299,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1278,
            "end": 1299,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1280,
              "end": 1299,
              "typeName": {
                "type": "Identifier",
                "start": 1280,
                "end": 1285,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1285,
                "end": 1299,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 1286,
                    "end": 1298,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 1286,
                        "end": 1287,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1286,
                          "end": 1287,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1290,
                        "end": 1298,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1290,
                          "end": 1295,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1295,
                          "end": 1298,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1296,
                              "end": 1297,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1296,
                                "end": 1297,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1273,
        "end": 1276,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1274,
            "end": 1275,
            "name": {
              "type": "Identifier",
              "start": 1274,
              "end": 1275,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1300,
        "end": 1310,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1302,
          "end": 1310,
          "typeName": {
            "type": "Identifier",
            "start": 1302,
            "end": 1307,
            "name": "Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1307,
            "end": 1310,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1308,
                "end": 1309,
                "typeName": {
                  "type": "Identifier",
                  "start": 1308,
                  "end": 1309,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1311,
      "end": 1382,
      "id": {
        "type": "Identifier",
        "start": 1328,
        "end": 1333,
        "name": "flat2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1337,
          "end": 1370,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1338,
            "end": 1370,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1340,
              "end": 1370,
              "typeName": {
                "type": "Identifier",
                "start": 1340,
                "end": 1345,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1345,
                "end": 1370,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 1346,
                    "end": 1369,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 1346,
                        "end": 1347,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1346,
                          "end": 1347,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1350,
                        "end": 1369,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1350,
                          "end": 1355,
                          "name": "Array",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1355,
                          "end": 1369,
                          "params": [
                            {
                              "type": "TSUnionType",
                              "start": 1356,
                              "end": 1368,
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 1356,
                                  "end": 1357,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1356,
                                    "end": 1357,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1360,
                                  "end": 1368,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1360,
                                    "end": 1365,
                                    "name": "Array",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 1365,
                                    "end": 1368,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 1366,
                                        "end": 1367,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1366,
                                          "end": 1367,
                                          "name": "T",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1333,
        "end": 1336,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1334,
            "end": 1335,
            "name": {
              "type": "Identifier",
              "start": 1334,
              "end": 1335,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1371,
        "end": 1381,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1373,
          "end": 1381,
          "typeName": {
            "type": "Identifier",
            "start": 1373,
            "end": 1378,
            "name": "Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1378,
            "end": 1381,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1379,
                "end": 1380,
                "typeName": {
                  "type": "Identifier",
                  "start": 1379,
                  "end": 1380,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1384,
      "end": 1404,
      "expression": {
        "type": "CallExpression",
        "start": 1384,
        "end": 1403,
        "callee": {
          "type": "Identifier",
          "start": 1384,
          "end": 1388,
          "name": "flat",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1389,
            "end": 1402,
            "elements": [
              {
                "type": "Literal",
                "start": 1390,
                "end": 1391,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "ArrayExpression",
                "start": 1393,
                "end": 1401,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1394,
                    "end": 1395,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 1397,
                    "end": 1400,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1398,
                        "end": 1399,
                        "value": 3,
                        "raw": "3"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1418,
      "end": 1432,
      "expression": {
        "type": "CallExpression",
        "start": 1418,
        "end": 1431,
        "callee": {
          "type": "Identifier",
          "start": 1418,
          "end": 1422,
          "name": "flat",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1423,
            "end": 1430,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 1424,
                "end": 1429,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 1425,
                    "end": 1428,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1426,
                        "end": 1427,
                        "value": 0,
                        "raw": "0"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1446,
      "end": 1476,
      "expression": {
        "type": "CallExpression",
        "start": 1446,
        "end": 1475,
        "callee": {
          "type": "Identifier",
          "start": 1446,
          "end": 1450,
          "name": "flat",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1451,
            "end": 1474,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 1452,
                "end": 1473,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 1453,
                    "end": 1472,
                    "elements": [
                      {
                        "type": "ArrayExpression",
                        "start": 1454,
                        "end": 1471,
                        "elements": [
                          {
                            "type": "ArrayExpression",
                            "start": 1455,
                            "end": 1470,
                            "elements": [
                              {
                                "type": "ArrayExpression",
                                "start": 1456,
                                "end": 1469,
                                "elements": [
                                  {
                                    "type": "ArrayExpression",
                                    "start": 1457,
                                    "end": 1468,
                                    "elements": [
                                      {
                                        "type": "ArrayExpression",
                                        "start": 1458,
                                        "end": 1467,
                                        "elements": [
                                          {
                                            "type": "ArrayExpression",
                                            "start": 1459,
                                            "end": 1466,
                                            "elements": [
                                              {
                                                "type": "ArrayExpression",
                                                "start": 1460,
                                                "end": 1465,
                                                "elements": [
                                                  {
                                                    "type": "ArrayExpression",
                                                    "start": 1461,
                                                    "end": 1464,
                                                    "elements": [
                                                      {
                                                        "type": "Literal",
                                                        "start": 1462,
                                                        "end": 1463,
                                                        "value": 4,
                                                        "raw": "4"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1490,
      "end": 1510,
      "expression": {
        "type": "CallExpression",
        "start": 1490,
        "end": 1509,
        "callee": {
          "type": "Identifier",
          "start": 1490,
          "end": 1494,
          "name": "flat",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1495,
            "end": 1508,
            "elements": [
              {
                "type": "Literal",
                "start": 1496,
                "end": 1497,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1499,
                "end": 1502,
                "value": "a",
                "raw": "'a'"
              },
              {
                "type": "ArrayExpression",
                "start": 1504,
                "end": 1507,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1505,
                    "end": 1506,
                    "value": 2,
                    "raw": "2"
                  }
                ]
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1535,
      "end": 1555,
      "expression": {
        "type": "CallExpression",
        "start": 1535,
        "end": 1554,
        "callee": {
          "type": "Identifier",
          "start": 1535,
          "end": 1539,
          "name": "flat",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1540,
            "end": 1553,
            "elements": [
              {
                "type": "Literal",
                "start": 1541,
                "end": 1542,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "ArrayExpression",
                "start": 1544,
                "end": 1552,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1545,
                    "end": 1546,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 1548,
                    "end": 1551,
                    "value": "a",
                    "raw": "'a'"
                  }
                ]
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1580,
      "end": 1597,
      "expression": {
        "type": "CallExpression",
        "start": 1580,
        "end": 1596,
        "callee": {
          "type": "Identifier",
          "start": 1580,
          "end": 1584,
          "name": "flat",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1585,
            "end": 1595,
            "elements": [
              {
                "type": "Literal",
                "start": 1586,
                "end": 1587,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "ArrayExpression",
                "start": 1589,
                "end": 1594,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1590,
                    "end": 1593,
                    "value": "a",
                    "raw": "'a'"
                  }
                ]
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1609,
      "end": 1630,
      "expression": {
        "type": "CallExpression",
        "start": 1609,
        "end": 1629,
        "callee": {
          "type": "Identifier",
          "start": 1609,
          "end": 1614,
          "name": "flat1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1615,
            "end": 1628,
            "elements": [
              {
                "type": "Literal",
                "start": 1616,
                "end": 1617,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "ArrayExpression",
                "start": 1619,
                "end": 1627,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1620,
                    "end": 1621,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 1623,
                    "end": 1626,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1624,
                        "end": 1625,
                        "value": 3,
                        "raw": "3"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1657,
      "end": 1672,
      "expression": {
        "type": "CallExpression",
        "start": 1657,
        "end": 1671,
        "callee": {
          "type": "Identifier",
          "start": 1657,
          "end": 1662,
          "name": "flat1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1663,
            "end": 1670,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 1664,
                "end": 1669,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 1665,
                    "end": 1668,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1666,
                        "end": 1667,
                        "value": 0,
                        "raw": "0"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1688,
      "end": 1709,
      "expression": {
        "type": "CallExpression",
        "start": 1688,
        "end": 1708,
        "callee": {
          "type": "Identifier",
          "start": 1688,
          "end": 1693,
          "name": "flat1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1694,
            "end": 1707,
            "elements": [
              {
                "type": "Literal",
                "start": 1695,
                "end": 1696,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1698,
                "end": 1701,
                "value": "a",
                "raw": "'a'"
              },
              {
                "type": "ArrayExpression",
                "start": 1703,
                "end": 1706,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1704,
                    "end": 1705,
                    "value": 2,
                    "raw": "2"
                  }
                ]
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1734,
      "end": 1755,
      "expression": {
        "type": "CallExpression",
        "start": 1734,
        "end": 1754,
        "callee": {
          "type": "Identifier",
          "start": 1734,
          "end": 1739,
          "name": "flat1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1740,
            "end": 1753,
            "elements": [
              {
                "type": "Literal",
                "start": 1741,
                "end": 1742,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "ArrayExpression",
                "start": 1744,
                "end": 1752,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1745,
                    "end": 1746,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 1748,
                    "end": 1751,
                    "value": "a",
                    "raw": "'a'"
                  }
                ]
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1780,
      "end": 1798,
      "expression": {
        "type": "CallExpression",
        "start": 1780,
        "end": 1797,
        "callee": {
          "type": "Identifier",
          "start": 1780,
          "end": 1785,
          "name": "flat1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1786,
            "end": 1796,
            "elements": [
              {
                "type": "Literal",
                "start": 1787,
                "end": 1788,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "ArrayExpression",
                "start": 1790,
                "end": 1795,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1791,
                    "end": 1794,
                    "value": "a",
                    "raw": "'a'"
                  }
                ]
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1810,
      "end": 1831,
      "expression": {
        "type": "CallExpression",
        "start": 1810,
        "end": 1830,
        "callee": {
          "type": "Identifier",
          "start": 1810,
          "end": 1815,
          "name": "flat2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1816,
            "end": 1829,
            "elements": [
              {
                "type": "Literal",
                "start": 1817,
                "end": 1818,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "ArrayExpression",
                "start": 1820,
                "end": 1828,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1821,
                    "end": 1822,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 1824,
                    "end": 1827,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1825,
                        "end": 1826,
                        "value": 3,
                        "raw": "3"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1845,
      "end": 1860,
      "expression": {
        "type": "CallExpression",
        "start": 1845,
        "end": 1859,
        "callee": {
          "type": "Identifier",
          "start": 1845,
          "end": 1850,
          "name": "flat2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1851,
            "end": 1858,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 1852,
                "end": 1857,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 1853,
                    "end": 1856,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1854,
                        "end": 1855,
                        "value": 0,
                        "raw": "0"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1874,
      "end": 1895,
      "expression": {
        "type": "CallExpression",
        "start": 1874,
        "end": 1894,
        "callee": {
          "type": "Identifier",
          "start": 1874,
          "end": 1879,
          "name": "flat2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1880,
            "end": 1893,
            "elements": [
              {
                "type": "Literal",
                "start": 1881,
                "end": 1882,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1884,
                "end": 1887,
                "value": "a",
                "raw": "'a'"
              },
              {
                "type": "ArrayExpression",
                "start": 1889,
                "end": 1892,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1890,
                    "end": 1891,
                    "value": 2,
                    "raw": "2"
                  }
                ]
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1920,
      "end": 1941,
      "expression": {
        "type": "CallExpression",
        "start": 1920,
        "end": 1940,
        "callee": {
          "type": "Identifier",
          "start": 1920,
          "end": 1925,
          "name": "flat2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1926,
            "end": 1939,
            "elements": [
              {
                "type": "Literal",
                "start": 1927,
                "end": 1928,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "ArrayExpression",
                "start": 1930,
                "end": 1938,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1931,
                    "end": 1932,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 1934,
                    "end": 1937,
                    "value": "a",
                    "raw": "'a'"
                  }
                ]
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1966,
      "end": 1984,
      "expression": {
        "type": "CallExpression",
        "start": 1966,
        "end": 1983,
        "callee": {
          "type": "Identifier",
          "start": 1966,
          "end": 1971,
          "name": "flat2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1972,
            "end": 1982,
            "elements": [
              {
                "type": "Literal",
                "start": 1973,
                "end": 1974,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "ArrayExpression",
                "start": 1976,
                "end": 1981,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1977,
                    "end": 1980,
                    "value": "a",
                    "raw": "'a'"
                  }
                ]
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1996,
      "end": 2013,
      "id": {
        "type": "Identifier",
        "start": 2001,
        "end": 2004,
        "name": "T10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "start": 2007,
        "end": 2012,
        "elementType": {
          "type": "TSTypeReference",
          "start": 2007,
          "end": 2010,
          "typeName": {
            "type": "Identifier",
            "start": 2007,
            "end": 2010,
            "name": "T10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2014,
      "end": 2040,
      "id": {
        "type": "Identifier",
        "start": 2019,
        "end": 2022,
        "name": "T11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 2025,
        "end": 2039,
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 2034,
          "end": 2039,
          "elementType": {
            "type": "TSTypeReference",
            "start": 2034,
            "end": 2037,
            "typeName": {
              "type": "Identifier",
              "start": 2034,
              "end": 2037,
              "name": "T11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2041,
      "end": 2060,
      "id": {
        "type": "Identifier",
        "start": 2046,
        "end": 2049,
        "name": "T12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "start": 2052,
        "end": 2059,
        "elementType": {
          "type": "TSTypeReference",
          "start": 2053,
          "end": 2056,
          "typeName": {
            "type": "Identifier",
            "start": 2053,
            "end": 2056,
            "name": "T12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2061,
      "end": 2087,
      "id": {
        "type": "Identifier",
        "start": 2066,
        "end": 2069,
        "name": "T13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2072,
        "end": 2086,
        "types": [
          {
            "type": "TSArrayType",
            "start": 2072,
            "end": 2077,
            "elementType": {
              "type": "TSTypeReference",
              "start": 2072,
              "end": 2075,
              "typeName": {
                "type": "Identifier",
                "start": 2072,
                "end": 2075,
                "name": "T13",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSStringKeyword",
            "start": 2080,
            "end": 2086
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2088,
      "end": 2121,
      "id": {
        "type": "Identifier",
        "start": 2093,
        "end": 2096,
        "name": "T14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 2099,
        "end": 2120,
        "types": [
          {
            "type": "TSArrayType",
            "start": 2099,
            "end": 2104,
            "elementType": {
              "type": "TSTypeReference",
              "start": 2099,
              "end": 2102,
              "typeName": {
                "type": "Identifier",
                "start": 2099,
                "end": 2102,
                "name": "T14",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 2107,
            "end": 2120,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 2109,
                "end": 2118,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2109,
                  "end": 2110,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2110,
                  "end": 2118,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2112,
                    "end": 2118
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2122,
      "end": 2172,
      "id": {
        "type": "Identifier",
        "start": 2127,
        "end": 2130,
        "name": "T15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2130,
        "end": 2133,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2131,
            "end": 2132,
            "name": {
              "type": "Identifier",
              "start": 2131,
              "end": 2132,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2136,
        "end": 2171,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2136,
          "end": 2137,
          "typeName": {
            "type": "Identifier",
            "start": 2136,
            "end": 2137,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSStringKeyword",
          "start": 2146,
          "end": 2152
        },
        "trueType": {
          "type": "TSArrayType",
          "start": 2155,
          "end": 2163,
          "elementType": {
            "type": "TSTypeReference",
            "start": 2155,
            "end": 2161,
            "typeName": {
              "type": "Identifier",
              "start": 2155,
              "end": 2158,
              "name": "T15",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2158,
              "end": 2161,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2159,
                  "end": 2160,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2159,
                    "end": 2160,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2166,
          "end": 2171
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2174,
      "end": 2221,
      "id": {
        "type": "Identifier",
        "start": 2179,
        "end": 2192,
        "name": "ValueOrArray1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2192,
        "end": 2195,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2193,
            "end": 2194,
            "name": {
              "type": "Identifier",
              "start": 2193,
              "end": 2194,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2198,
        "end": 2220,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 2198,
            "end": 2199,
            "typeName": {
              "type": "Identifier",
              "start": 2198,
              "end": 2199,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSArrayType",
            "start": 2202,
            "end": 2220,
            "elementType": {
              "type": "TSTypeReference",
              "start": 2202,
              "end": 2218,
              "typeName": {
                "type": "Identifier",
                "start": 2202,
                "end": 2215,
                "name": "ValueOrArray1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2215,
                "end": 2218,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2216,
                    "end": 2217,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2216,
                      "end": 2217,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2222,
      "end": 2269,
      "id": {
        "type": "Identifier",
        "start": 2227,
        "end": 2240,
        "name": "ValueOrArray2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2240,
        "end": 2243,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2241,
            "end": 2242,
            "name": {
              "type": "Identifier",
              "start": 2241,
              "end": 2242,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2246,
        "end": 2268,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 2246,
            "end": 2247,
            "typeName": {
              "type": "Identifier",
              "start": 2246,
              "end": 2247,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSArrayType",
            "start": 2250,
            "end": 2268,
            "elementType": {
              "type": "TSTypeReference",
              "start": 2250,
              "end": 2266,
              "typeName": {
                "type": "Identifier",
                "start": 2250,
                "end": 2263,
                "name": "ValueOrArray2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2263,
                "end": 2266,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2264,
                    "end": 2265,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2264,
                      "end": 2265,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2271,
      "end": 2320,
      "id": {
        "type": "Identifier",
        "start": 2288,
        "end": 2292,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2296,
          "end": 2315,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2297,
            "end": 2315,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2299,
              "end": 2315,
              "typeName": {
                "type": "Identifier",
                "start": 2299,
                "end": 2312,
                "name": "ValueOrArray1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2312,
                "end": 2315,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2313,
                    "end": 2314,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2313,
                      "end": 2314,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2292,
        "end": 2295,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2293,
            "end": 2294,
            "name": {
              "type": "Identifier",
              "start": 2293,
              "end": 2294,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2316,
        "end": 2319,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2318,
          "end": 2319,
          "typeName": {
            "type": "Identifier",
            "start": 2318,
            "end": 2319,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2321,
      "end": 2360,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2333,
          "end": 2359,
          "id": {
            "type": "Identifier",
            "start": 2333,
            "end": 2359,
            "name": "ra1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2336,
              "end": 2359,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2338,
                "end": 2359,
                "typeName": {
                  "type": "Identifier",
                  "start": 2338,
                  "end": 2351,
                  "name": "ValueOrArray2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2351,
                  "end": 2359,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2352,
                      "end": 2358
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2362,
      "end": 2381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2366,
          "end": 2380,
          "id": {
            "type": "Identifier",
            "start": 2366,
            "end": 2368,
            "name": "x1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2371,
            "end": 2380,
            "callee": {
              "type": "Identifier",
              "start": 2371,
              "end": 2375,
              "name": "foo1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2376,
                "end": 2379,
                "name": "ra1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2393,
      "end": 2441,
      "id": {
        "type": "Identifier",
        "start": 2398,
        "end": 2412,
        "name": "NumberOrArray1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2412,
        "end": 2415,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2413,
            "end": 2414,
            "name": {
              "type": "Identifier",
              "start": 2413,
              "end": 2414,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2418,
        "end": 2440,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 2418,
            "end": 2419,
            "typeName": {
              "type": "Identifier",
              "start": 2418,
              "end": 2419,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSArrayType",
            "start": 2422,
            "end": 2440,
            "elementType": {
              "type": "TSTypeReference",
              "start": 2422,
              "end": 2438,
              "typeName": {
                "type": "Identifier",
                "start": 2422,
                "end": 2435,
                "name": "ValueOrArray1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2435,
                "end": 2438,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2436,
                    "end": 2437,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2436,
                      "end": 2437,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2442,
      "end": 2490,
      "id": {
        "type": "Identifier",
        "start": 2447,
        "end": 2461,
        "name": "NumberOrArray2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2461,
        "end": 2464,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2462,
            "end": 2463,
            "name": {
              "type": "Identifier",
              "start": 2462,
              "end": 2463,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2467,
        "end": 2489,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 2467,
            "end": 2468,
            "typeName": {
              "type": "Identifier",
              "start": 2467,
              "end": 2468,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSArrayType",
            "start": 2471,
            "end": 2489,
            "elementType": {
              "type": "TSTypeReference",
              "start": 2471,
              "end": 2487,
              "typeName": {
                "type": "Identifier",
                "start": 2471,
                "end": 2484,
                "name": "ValueOrArray2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2484,
                "end": 2487,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2485,
                    "end": 2486,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2485,
                      "end": 2486,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2492,
      "end": 2541,
      "id": {
        "type": "Identifier",
        "start": 2509,
        "end": 2513,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2517,
          "end": 2536,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2518,
            "end": 2536,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2520,
              "end": 2536,
              "typeName": {
                "type": "Identifier",
                "start": 2520,
                "end": 2533,
                "name": "ValueOrArray1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2533,
                "end": 2536,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2534,
                    "end": 2535,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2534,
                      "end": 2535,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2513,
        "end": 2516,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2514,
            "end": 2515,
            "name": {
              "type": "Identifier",
              "start": 2514,
              "end": 2515,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2537,
        "end": 2540,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2539,
          "end": 2540,
          "typeName": {
            "type": "Identifier",
            "start": 2539,
            "end": 2540,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2542,
      "end": 2581,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2554,
          "end": 2580,
          "id": {
            "type": "Identifier",
            "start": 2554,
            "end": 2580,
            "name": "ra2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2557,
              "end": 2580,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2559,
                "end": 2580,
                "typeName": {
                  "type": "Identifier",
                  "start": 2559,
                  "end": 2572,
                  "name": "ValueOrArray2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2572,
                  "end": 2580,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2573,
                      "end": 2579
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2583,
      "end": 2602,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2587,
          "end": 2601,
          "id": {
            "type": "Identifier",
            "start": 2587,
            "end": 2589,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2592,
            "end": 2601,
            "callee": {
              "type": "Identifier",
              "start": 2592,
              "end": 2596,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2597,
                "end": 2600,
                "name": "ra2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2658,
      "end": 2699,
      "id": {
        "type": "Identifier",
        "start": 2663,
        "end": 2667,
        "name": "Tree",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "start": 2670,
        "end": 2698,
        "elementType": {
          "type": "TSTupleType",
          "start": 2670,
          "end": 2696,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 2671,
              "end": 2689,
              "typeName": {
                "type": "Identifier",
                "start": 2671,
                "end": 2689,
                "name": "HTMLHeadingElement",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 2691,
              "end": 2695,
              "typeName": {
                "type": "Identifier",
                "start": 2691,
                "end": 2695,
                "name": "Tree",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2701,
      "end": 3060,
      "id": {
        "type": "Identifier",
        "start": 2710,
        "end": 2715,
        "name": "parse",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2716,
          "end": 2726,
          "name": "node",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2720,
            "end": 2726,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2722,
              "end": 2726,
              "typeName": {
                "type": "Identifier",
                "start": 2722,
                "end": 2726,
                "name": "Tree",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "AssignmentPattern",
          "start": 2728,
          "end": 2748,
          "left": {
            "type": "Identifier",
            "start": 2728,
            "end": 2743,
            "name": "index",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2733,
              "end": 2743,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 2735,
                "end": 2743,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 2735,
                  "end": 2741
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "ArrayExpression",
            "start": 2746,
            "end": 2748,
            "elements": []
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2768,
        "end": 3060,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2772,
            "end": 3058,
            "argument": {
              "type": "CallExpression",
              "start": 2779,
              "end": 3057,
              "callee": {
                "type": "Identifier",
                "start": 2779,
                "end": 2783,
                "name": "html",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2784,
                  "end": 2788,
                  "value": "ul",
                  "raw": "'ul'"
                },
                {
                  "type": "CallExpression",
                  "start": 2790,
                  "end": 3056,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2790,
                    "end": 2798,
                    "object": {
                      "type": "Identifier",
                      "start": 2790,
                      "end": 2794,
                      "name": "node",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2795,
                      "end": 2798,
                      "name": "map",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 2799,
                      "end": 3055,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "ArrayPattern",
                          "start": 2800,
                          "end": 2814,
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 2801,
                              "end": 2803,
                              "name": "el",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 2805,
                              "end": 2813,
                              "name": "children",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 2816,
                          "end": 2817,
                          "name": "i",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 2822,
                        "end": 3055,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 2828,
                            "end": 2858,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 2834,
                                "end": 2857,
                                "id": {
                                  "type": "Identifier",
                                  "start": 2834,
                                  "end": 2837,
                                  "name": "idx",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "ArrayExpression",
                                  "start": 2840,
                                  "end": 2857,
                                  "elements": [
                                    {
                                      "type": "SpreadElement",
                                      "start": 2841,
                                      "end": 2849,
                                      "argument": {
                                        "type": "Identifier",
                                        "start": 2844,
                                        "end": 2849,
                                        "name": "index",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    },
                                    {
                                      "type": "BinaryExpression",
                                      "start": 2851,
                                      "end": 2856,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 2851,
                                        "end": 2852,
                                        "name": "i",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "+",
                                      "right": {
                                        "type": "Literal",
                                        "start": 2855,
                                        "end": 2856,
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    }
                                  ]
                                },
                                "definite": false
                              }
                            ],
                            "kind": "const",
                            "declare": false
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 2863,
                            "end": 3051,
                            "argument": {
                              "type": "CallExpression",
                              "start": 2870,
                              "end": 3050,
                              "callee": {
                                "type": "Identifier",
                                "start": 2870,
                                "end": 2874,
                                "name": "html",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 2875,
                                  "end": 2879,
                                  "value": "li",
                                  "raw": "'li'"
                                },
                                {
                                  "type": "ArrayExpression",
                                  "start": 2881,
                                  "end": 3049,
                                  "elements": [
                                    {
                                      "type": "CallExpression",
                                      "start": 2889,
                                      "end": 2984,
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 2889,
                                        "end": 2893,
                                        "name": "html",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "arguments": [
                                        {
                                          "type": "Literal",
                                          "start": 2894,
                                          "end": 2897,
                                          "value": "a",
                                          "raw": "'a'"
                                        },
                                        {
                                          "type": "ObjectExpression",
                                          "start": 2899,
                                          "end": 2966,
                                          "properties": [
                                            {
                                              "type": "Property",
                                              "start": 2901,
                                              "end": 2918,
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "key": {
                                                "type": "Identifier",
                                                "start": 2901,
                                                "end": 2905,
                                                "name": "href",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "value": {
                                                "type": "TemplateLiteral",
                                                "start": 2907,
                                                "end": 2918,
                                                "expressions": [
                                                  {
                                                    "type": "MemberExpression",
                                                    "start": 2911,
                                                    "end": 2916,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "start": 2911,
                                                      "end": 2913,
                                                      "name": "el",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "start": 2914,
                                                      "end": 2916,
                                                      "name": "id",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "computed": false,
                                                    "optional": false
                                                  }
                                                ],
                                                "quasis": [
                                                  {
                                                    "type": "TemplateElement",
                                                    "start": 2907,
                                                    "end": 2911,
                                                    "value": {
                                                      "cooked": "#",
                                                      "raw": "#"
                                                    },
                                                    "tail": false
                                                  },
                                                  {
                                                    "type": "TemplateElement",
                                                    "start": 2916,
                                                    "end": 2918,
                                                    "value": {
                                                      "cooked": "",
                                                      "raw": ""
                                                    },
                                                    "tail": true
                                                  }
                                                ]
                                              },
                                              "kind": "init",
                                              "optional": false
                                            },
                                            {
                                              "type": "Property",
                                              "start": 2920,
                                              "end": 2935,
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "key": {
                                                "type": "Identifier",
                                                "start": 2920,
                                                "end": 2923,
                                                "name": "rel",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "value": {
                                                "type": "Literal",
                                                "start": 2925,
                                                "end": 2935,
                                                "value": "noopener",
                                                "raw": "'noopener'"
                                              },
                                              "kind": "init",
                                              "optional": false
                                            },
                                            {
                                              "type": "Property",
                                              "start": 2937,
                                              "end": 2964,
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "key": {
                                                "type": "Literal",
                                                "start": 2937,
                                                "end": 2949,
                                                "value": "data-index",
                                                "raw": "'data-index'"
                                              },
                                              "value": {
                                                "type": "CallExpression",
                                                "start": 2951,
                                                "end": 2964,
                                                "callee": {
                                                  "type": "MemberExpression",
                                                  "start": 2951,
                                                  "end": 2959,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "start": 2951,
                                                    "end": 2954,
                                                    "name": "idx",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 2955,
                                                    "end": 2959,
                                                    "name": "join",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "computed": false,
                                                  "optional": false
                                                },
                                                "arguments": [
                                                  {
                                                    "type": "Literal",
                                                    "start": 2960,
                                                    "end": 2963,
                                                    "value": ".",
                                                    "raw": "'.'"
                                                  }
                                                ],
                                                "optional": false,
                                                "typeArguments": null
                                              },
                                              "kind": "init",
                                              "optional": false
                                            }
                                          ]
                                        },
                                        {
                                          "type": "TSNonNullExpression",
                                          "start": 2968,
                                          "end": 2983,
                                          "expression": {
                                            "type": "MemberExpression",
                                            "start": 2968,
                                            "end": 2982,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 2968,
                                              "end": 2970,
                                              "name": "el",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 2971,
                                              "end": 2982,
                                              "name": "textContent",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "computed": false,
                                            "optional": false
                                          }
                                        }
                                      ],
                                      "optional": false,
                                      "typeArguments": null
                                    },
                                    {
                                      "type": "ConditionalExpression",
                                      "start": 2992,
                                      "end": 3043,
                                      "test": {
                                        "type": "BinaryExpression",
                                        "start": 2992,
                                        "end": 3011,
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 2992,
                                          "end": 3007,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 2992,
                                            "end": 3000,
                                            "name": "children",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 3001,
                                            "end": 3007,
                                            "name": "length",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": false,
                                          "optional": false
                                        },
                                        "operator": ">",
                                        "right": {
                                          "type": "Literal",
                                          "start": 3010,
                                          "end": 3011,
                                          "value": 0,
                                          "raw": "0"
                                        }
                                      },
                                      "consequent": {
                                        "type": "CallExpression",
                                        "start": 3014,
                                        "end": 3034,
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 3014,
                                          "end": 3019,
                                          "name": "parse",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "start": 3020,
                                            "end": 3028,
                                            "name": "children",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          {
                                            "type": "Identifier",
                                            "start": 3030,
                                            "end": 3033,
                                            "name": "idx",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          }
                                        ],
                                        "optional": false,
                                        "typeArguments": null
                                      },
                                      "alternate": {
                                        "type": "CallExpression",
                                        "start": 3037,
                                        "end": 3043,
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 3037,
                                          "end": 3041,
                                          "name": "frag",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "arguments": [],
                                        "optional": false,
                                        "typeArguments": null
                                      }
                                    }
                                  ]
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2749,
        "end": 2767,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2751,
          "end": 2767,
          "typeName": {
            "type": "Identifier",
            "start": 2751,
            "end": 2767,
            "name": "HTMLUListElement",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3062,
      "end": 3490,
      "id": {
        "type": "Identifier",
        "start": 3071,
        "end": 3075,
        "name": "cons",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3076,
          "end": 3100,
          "name": "hs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3078,
            "end": 3100,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 3080,
              "end": 3100,
              "elementType": {
                "type": "TSTypeReference",
                "start": 3080,
                "end": 3098,
                "typeName": {
                  "type": "Identifier",
                  "start": 3080,
                  "end": 3098,
                  "name": "HTMLHeadingElement",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3108,
        "end": 3490,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 3112,
            "end": 3488,
            "argument": {
              "type": "CallExpression",
              "start": 3119,
              "end": 3487,
              "callee": {
                "type": "MemberExpression",
                "start": 3119,
                "end": 3356,
                "object": {
                  "type": "CallExpression",
                  "start": 3119,
                  "end": 3344,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3119,
                    "end": 3133,
                    "object": {
                      "type": "Identifier",
                      "start": 3119,
                      "end": 3121,
                      "name": "hs",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3127,
                      "end": 3133,
                      "name": "reduce",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 3158,
                      "end": 3337,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3159,
                          "end": 3162,
                          "name": "hss",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 3164,
                          "end": 3165,
                          "name": "h",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 3170,
                        "end": 3337,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 3178,
                            "end": 3200,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 3184,
                                "end": 3199,
                                "id": {
                                  "type": "Identifier",
                                  "start": 3184,
                                  "end": 3186,
                                  "name": "hs",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "TSNonNullExpression",
                                  "start": 3189,
                                  "end": 3199,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 3189,
                                    "end": 3198,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 3189,
                                      "end": 3196,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 3189,
                                        "end": 3192,
                                        "name": "hss",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 3193,
                                        "end": 3196,
                                        "name": "pop",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "arguments": [],
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                },
                                "definite": false
                              }
                            ],
                            "kind": "const",
                            "declare": false
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 3207,
                            "end": 3331,
                            "argument": {
                              "type": "ConditionalExpression",
                              "start": 3214,
                              "end": 3330,
                              "test": {
                                "type": "LogicalExpression",
                                "start": 3214,
                                "end": 3256,
                                "left": {
                                  "type": "BinaryExpression",
                                  "start": 3214,
                                  "end": 3229,
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 3214,
                                    "end": 3223,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 3214,
                                      "end": 3216,
                                      "name": "hs",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 3217,
                                      "end": 3223,
                                      "name": "length",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "operator": "===",
                                  "right": {
                                    "type": "Literal",
                                    "start": 3228,
                                    "end": 3229,
                                    "value": 0,
                                    "raw": "0"
                                  }
                                },
                                "operator": "||",
                                "right": {
                                  "type": "BinaryExpression",
                                  "start": 3233,
                                  "end": 3256,
                                  "left": {
                                    "type": "CallExpression",
                                    "start": 3233,
                                    "end": 3241,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 3233,
                                      "end": 3238,
                                      "name": "level",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 3239,
                                        "end": 3240,
                                        "name": "h",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "optional": false,
                                    "typeArguments": null
                                  },
                                  "operator": ">",
                                  "right": {
                                    "type": "CallExpression",
                                    "start": 3244,
                                    "end": 3256,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 3244,
                                      "end": 3249,
                                      "name": "level",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "start": 3250,
                                        "end": 3255,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 3250,
                                          "end": 3252,
                                          "name": "hs",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "start": 3253,
                                          "end": 3254,
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "computed": true,
                                        "optional": false
                                      }
                                    ],
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                }
                              },
                              "consequent": {
                                "type": "CallExpression",
                                "start": 3267,
                                "end": 3297,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 3267,
                                  "end": 3273,
                                  "name": "concat",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 3274,
                                    "end": 3277,
                                    "name": "hss",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  {
                                    "type": "ArrayExpression",
                                    "start": 3279,
                                    "end": 3296,
                                    "elements": [
                                      {
                                        "type": "CallExpression",
                                        "start": 3280,
                                        "end": 3295,
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 3280,
                                          "end": 3286,
                                          "name": "concat",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "start": 3287,
                                            "end": 3289,
                                            "name": "hs",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          {
                                            "type": "ArrayExpression",
                                            "start": 3291,
                                            "end": 3294,
                                            "elements": [
                                              {
                                                "type": "Identifier",
                                                "start": 3292,
                                                "end": 3293,
                                                "name": "h",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              }
                                            ]
                                          }
                                        ],
                                        "optional": false,
                                        "typeArguments": null
                                      }
                                    ]
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              },
                              "alternate": {
                                "type": "CallExpression",
                                "start": 3308,
                                "end": 3330,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 3308,
                                  "end": 3314,
                                  "name": "concat",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 3315,
                                    "end": 3318,
                                    "name": "hss",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  {
                                    "type": "ArrayExpression",
                                    "start": 3320,
                                    "end": 3329,
                                    "elements": [
                                      {
                                        "type": "Identifier",
                                        "start": 3321,
                                        "end": 3323,
                                        "name": "hs",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      {
                                        "type": "ArrayExpression",
                                        "start": 3325,
                                        "end": 3328,
                                        "elements": [
                                          {
                                            "type": "Identifier",
                                            "start": 3326,
                                            "end": 3327,
                                            "name": "h",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    {
                      "type": "ArrayExpression",
                      "start": 3339,
                      "end": 3343,
                      "elements": [
                        {
                          "type": "ArrayExpression",
                          "start": 3340,
                          "end": 3342,
                          "elements": []
                        }
                      ]
                    }
                  ],
                  "optional": false,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3133,
                    "end": 3157,
                    "params": [
                      {
                        "type": "TSArrayType",
                        "start": 3134,
                        "end": 3156,
                        "elementType": {
                          "type": "TSArrayType",
                          "start": 3134,
                          "end": 3154,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 3134,
                            "end": 3152,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3134,
                              "end": 3152,
                              "name": "HTMLHeadingElement",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ]
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 3350,
                  "end": 3356,
                  "name": "reduce",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 3363,
                  "end": 3477,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3364,
                      "end": 3368,
                      "name": "node",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3370,
                      "end": 3372,
                      "name": "hs",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "ConditionalExpression",
                    "start": 3383,
                    "end": 3477,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 3383,
                      "end": 3398,
                      "left": {
                        "type": "MemberExpression",
                        "start": 3383,
                        "end": 3392,
                        "object": {
                          "type": "Identifier",
                          "start": 3383,
                          "end": 3385,
                          "name": "hs",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3386,
                          "end": 3392,
                          "name": "length",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 3397,
                        "end": 3398,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "consequent": {
                      "type": "Identifier",
                      "start": 3409,
                      "end": 3413,
                      "name": "node",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "alternate": {
                      "type": "CallExpression",
                      "start": 3424,
                      "end": 3477,
                      "callee": {
                        "type": "Identifier",
                        "start": 3424,
                        "end": 3430,
                        "name": "concat",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 3445,
                          "end": 3449,
                          "name": "node",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "ArrayExpression",
                          "start": 3451,
                          "end": 3476,
                          "elements": [
                            {
                              "type": "ArrayExpression",
                              "start": 3452,
                              "end": 3475,
                              "elements": [
                                {
                                  "type": "TSNonNullExpression",
                                  "start": 3453,
                                  "end": 3464,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 3453,
                                    "end": 3463,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 3453,
                                      "end": 3461,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 3453,
                                        "end": 3455,
                                        "name": "hs",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 3456,
                                        "end": 3461,
                                        "name": "shift",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "arguments": [],
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                },
                                {
                                  "type": "CallExpression",
                                  "start": 3466,
                                  "end": 3474,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 3466,
                                    "end": 3470,
                                    "name": "cons",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 3471,
                                      "end": 3473,
                                      "name": "hs",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "optional": false,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 3430,
                        "end": 3444,
                        "params": [
                          {
                            "type": "TSIndexedAccessType",
                            "start": 3431,
                            "end": 3443,
                            "objectType": {
                              "type": "TSTypeReference",
                              "start": 3431,
                              "end": 3435,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3431,
                                "end": 3435,
                                "name": "Tree",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            "indexType": {
                              "type": "TSNumberKeyword",
                              "start": 3436,
                              "end": 3442
                            }
                          }
                        ]
                      }
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                {
                  "type": "ArrayExpression",
                  "start": 3484,
                  "end": 3486,
                  "elements": []
                }
              ],
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3356,
                "end": 3362,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3357,
                    "end": 3361,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3357,
                      "end": 3361,
                      "name": "Tree",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3101,
        "end": 3107,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3103,
          "end": 3107,
          "typeName": {
            "type": "Identifier",
            "start": 3103,
            "end": 3107,
            "name": "Tree",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3492,
      "end": 3600,
      "id": {
        "type": "Identifier",
        "start": 3501,
        "end": 3506,
        "name": "level",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3507,
          "end": 3528,
          "name": "h",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3508,
            "end": 3528,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3510,
              "end": 3528,
              "typeName": {
                "type": "Identifier",
                "start": 3510,
                "end": 3528,
                "name": "HTMLHeadingElement",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3538,
        "end": 3600,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3542,
            "end": 3574,
            "expression": {
              "type": "CallExpression",
              "start": 3542,
              "end": 3573,
              "callee": {
                "type": "Identifier",
                "start": 3542,
                "end": 3548,
                "name": "assert",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 3549,
                  "end": 3572,
                  "callee": {
                    "type": "Identifier",
                    "start": 3549,
                    "end": 3557,
                    "name": "isFinite",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "UnaryExpression",
                      "start": 3558,
                      "end": 3571,
                      "operator": "+",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 3559,
                        "end": 3571,
                        "object": {
                          "type": "MemberExpression",
                          "start": 3559,
                          "end": 3568,
                          "object": {
                            "type": "Identifier",
                            "start": 3559,
                            "end": 3560,
                            "name": "h",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3561,
                            "end": 3568,
                            "name": "tagName",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Literal",
                          "start": 3569,
                          "end": 3570,
                          "value": 1,
                          "raw": "1"
                        },
                        "computed": true,
                        "optional": false
                      }
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 3577,
            "end": 3598,
            "argument": {
              "type": "UnaryExpression",
              "start": 3584,
              "end": 3597,
              "operator": "+",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "start": 3585,
                "end": 3597,
                "object": {
                  "type": "MemberExpression",
                  "start": 3585,
                  "end": 3594,
                  "object": {
                    "type": "Identifier",
                    "start": 3585,
                    "end": 3586,
                    "name": "h",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3587,
                    "end": 3594,
                    "name": "tagName",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 3595,
                  "end": 3596,
                  "value": 1,
                  "raw": "1"
                },
                "computed": true,
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3529,
        "end": 3537,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 3531,
          "end": 3537
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
