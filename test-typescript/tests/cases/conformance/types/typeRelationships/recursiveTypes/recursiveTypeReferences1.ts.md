recursiveTypeReferences1.ts
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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 17,
        "decorators": [],
        "name": "ValueOrArray",
        "optional": false
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
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 27,
            "end": 49,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 32,
              "end": 49,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 33,
                  "end": 48,
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
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 45,
                    "decorators": [],
                    "name": "ValueOrArray",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 27,
              "end": 32,
              "decorators": [],
              "name": "Array",
              "optional": false
            }
          }
        ]
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 82,
            "decorators": [],
            "name": "a0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 82,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 62,
                "end": 82,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 74,
                  "decorators": [],
                  "name": "ValueOrArray",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 85,
            "end": 86,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 118,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 118,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 98,
                "end": 118,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 110,
                  "decorators": [],
                  "name": "ValueOrArray",
                  "optional": false
                }
              }
            }
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
                "raw": "1",
                "value": 1
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
                    "raw": "2",
                    "value": 2
                  },
                  {
                    "type": "Literal",
                    "start": 129,
                    "end": 130,
                    "raw": "3",
                    "value": 3
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
                    "raw": "4",
                    "value": 4
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
                        "raw": "5",
                        "value": 5
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
                            "raw": "6",
                            "value": 6
                          },
                          {
                            "type": "Literal",
                            "start": 145,
                            "end": 146,
                            "raw": "7",
                            "value": 7
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 153,
      "end": 240,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 171,
        "decorators": [],
        "name": "HypertextNode",
        "optional": false
      },
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
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 198,
                          "end": 206,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 200,
                            "end": 206
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 207,
                      "end": 216,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 209,
                        "end": 216
                      }
                    }
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
                      "decorators": [],
                      "name": "HypertextNode",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 276,
            "decorators": [],
            "name": "hypertextNode",
            "optional": false,
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
                  "decorators": [],
                  "name": "HypertextNode",
                  "optional": false
                }
              }
            }
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
                "raw": "\"div\"",
                "value": "div"
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 295,
                      "decorators": [],
                      "name": "id",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 297,
                      "end": 305,
                      "raw": "\"parent\"",
                      "value": "parent"
                    }
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
                    "raw": "\"div\"",
                    "value": "div"
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
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 327,
                          "end": 329,
                          "decorators": [],
                          "name": "id",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 331,
                          "end": 344,
                          "raw": "\"first-child\"",
                          "value": "first-child"
                        }
                      }
                    ]
                  },
                  {
                    "type": "Literal",
                    "start": 348,
                    "end": 369,
                    "raw": "\"I'm the first child\"",
                    "value": "I'm the first child"
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
                    "raw": "\"div\"",
                    "value": "div"
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
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 390,
                          "end": 392,
                          "decorators": [],
                          "name": "id",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 394,
                          "end": 408,
                          "raw": "\"second-child\"",
                          "value": "second-child"
                        }
                      }
                    ]
                  },
                  {
                    "type": "Literal",
                    "start": 412,
                    "end": 434,
                    "raw": "\"I'm the second child\"",
                    "value": "I'm the second child"
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 444,
      "end": 524,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 449,
        "end": 453,
        "decorators": [],
        "name": "Json",
        "optional": false
      },
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
                "decorators": [],
                "name": "Json",
                "optional": false
              }
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
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 506,
                      "end": 514,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 508,
                        "end": 514
                      }
                    }
                  }
                ],
                "readonly": false,
                "static": false,
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
                      "decorators": [],
                      "name": "Json",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 530,
            "end": 540,
            "decorators": [],
            "name": "data",
            "optional": false,
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
                  "decorators": [],
                  "name": "Json",
                  "optional": false
                }
              }
            }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 549,
                  "end": 556,
                  "decorators": [],
                  "name": "caption",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 558,
                  "end": 564,
                  "raw": "\"Test\"",
                  "value": "Test"
                }
              },
              {
                "type": "Property",
                "start": 570,
                "end": 596,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 570,
                  "end": 578,
                  "decorators": [],
                  "name": "location",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 580,
                  "end": 596,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 582,
                      "end": 587,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 582,
                        "end": 583,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 585,
                        "end": 587,
                        "raw": "10",
                        "value": 10
                      }
                    },
                    {
                      "type": "Property",
                      "start": 589,
                      "end": 594,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 589,
                        "end": 590,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 592,
                        "end": 594,
                        "raw": "20",
                        "value": 20
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 602,
                "end": 632,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 602,
                  "end": 608,
                  "decorators": [],
                  "name": "values",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayExpression",
                  "start": 610,
                  "end": 632,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 611,
                      "end": 615,
                      "raw": "true",
                      "value": true
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
                          "raw": "10",
                          "value": 10
                        },
                        {
                          "type": "Literal",
                          "start": 622,
                          "end": 624,
                          "raw": "20",
                          "value": 20
                        }
                      ]
                    },
                    {
                      "type": "Literal",
                      "start": 627,
                      "end": 631,
                      "raw": "null",
                      "value": null
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 637,
      "end": 666,
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
            "key": {
              "type": "Identifier",
              "start": 656,
              "end": 661,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 647,
        "end": 650,
        "decorators": [],
        "name": "Box",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 650,
        "end": 653,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 651,
            "end": 652,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 651,
              "end": 652,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 674,
        "end": 676,
        "decorators": [],
        "name": "T1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 679,
        "end": 686,
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
                "decorators": [],
                "name": "T1",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 679,
          "end": 682,
          "decorators": [],
          "name": "Box",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 688,
      "end": 711,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 693,
        "end": 695,
        "decorators": [],
        "name": "T2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 698,
        "end": 710,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 701,
          "end": 710,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 702,
              "end": 709,
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
                      "decorators": [],
                      "name": "T2",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 702,
                "end": 705,
                "decorators": [],
                "name": "Box",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 698,
          "end": 701,
          "decorators": [],
          "name": "Box",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 712,
      "end": 740,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 717,
        "end": 719,
        "decorators": [],
        "name": "T3",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 722,
        "end": 739,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 725,
          "end": 739,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 726,
              "end": 738,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 729,
                "end": 738,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 730,
                    "end": 737,
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
                            "decorators": [],
                            "name": "T3",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 730,
                      "end": 733,
                      "decorators": [],
                      "name": "Box",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 726,
                "end": 729,
                "decorators": [],
                "name": "Box",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 722,
          "end": 725,
          "decorators": [],
          "name": "Box",
          "optional": false
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 742,
      "end": 859,
      "async": false,
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
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 789,
                "end": 791,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            }
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
                "decorators": [],
                "name": "t1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 802,
                "end": 804,
                "decorators": [],
                "name": "t3",
                "optional": false
              }
            }
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
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 815,
                "end": 817,
                "decorators": [],
                "name": "t1",
                "optional": false
              }
            }
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
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 828,
                "end": 830,
                "decorators": [],
                "name": "t3",
                "optional": false
              }
            }
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
                "decorators": [],
                "name": "t3",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 841,
                "end": 843,
                "decorators": [],
                "name": "t1",
                "optional": false
              }
            }
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
                "decorators": [],
                "name": "t3",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 854,
                "end": 856,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 751,
        "end": 753,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 754,
          "end": 760,
          "decorators": [],
          "name": "t1",
          "optional": false,
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
                "decorators": [],
                "name": "T1",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 762,
          "end": 768,
          "decorators": [],
          "name": "t2",
          "optional": false,
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
                "decorators": [],
                "name": "T2",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 770,
          "end": 776,
          "decorators": [],
          "name": "t3",
          "optional": false,
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
                "decorators": [],
                "name": "T3",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 861,
      "end": 892,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 866,
        "end": 870,
        "decorators": [],
        "name": "Box1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 873,
        "end": 891,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 873,
            "end": 882,
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
                    "decorators": [],
                    "name": "Box1",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 873,
              "end": 876,
              "decorators": [],
              "name": "Box",
              "optional": false
            }
          },
          {
            "type": "TSNumberKeyword",
            "start": 885,
            "end": 891
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 900,
            "end": 909,
            "decorators": [],
            "name": "b10",
            "optional": false,
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
                  "decorators": [],
                  "name": "Box1",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 912,
            "end": 914,
            "raw": "42",
            "value": 42
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 922,
            "end": 931,
            "decorators": [],
            "name": "b11",
            "optional": false,
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
                  "decorators": [],
                  "name": "Box1",
                  "optional": false
                }
              }
            }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 936,
                  "end": 941,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 943,
                  "end": 945,
                  "raw": "42",
                  "value": 42
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 955,
            "end": 964,
            "decorators": [],
            "name": "b12",
            "optional": false,
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
                  "decorators": [],
                  "name": "Box1",
                  "optional": false
                }
              }
            }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 969,
                  "end": 974,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 976,
                  "end": 999,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 978,
                      "end": 998,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 978,
                        "end": 983,
                        "decorators": [],
                        "name": "value",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 985,
                        "end": 998,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 987,
                            "end": 996,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 987,
                              "end": 992,
                              "decorators": [],
                              "name": "value",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 994,
                              "end": 996,
                              "raw": "42",
                              "value": 42
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1003,
      "end": 1034,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1008,
        "end": 1012,
        "decorators": [],
        "name": "Box2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1015,
        "end": 1033,
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
                    "decorators": [],
                    "name": "Box2",
                    "optional": false
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1026,
                  "end": 1032
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1015,
          "end": 1018,
          "decorators": [],
          "name": "Box",
          "optional": false
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1042,
            "end": 1051,
            "decorators": [],
            "name": "b20",
            "optional": false,
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
                  "decorators": [],
                  "name": "Box2",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 1054,
            "end": 1056,
            "raw": "42",
            "value": 42
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1074,
            "end": 1083,
            "decorators": [],
            "name": "b21",
            "optional": false,
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
                  "decorators": [],
                  "name": "Box2",
                  "optional": false
                }
              }
            }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1088,
                  "end": 1093,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1095,
                  "end": 1097,
                  "raw": "42",
                  "value": 42
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1107,
            "end": 1116,
            "decorators": [],
            "name": "b22",
            "optional": false,
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
                  "decorators": [],
                  "name": "Box2",
                  "optional": false
                }
              }
            }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1121,
                  "end": 1126,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 1128,
                  "end": 1151,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1130,
                      "end": 1150,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1130,
                        "end": 1135,
                        "decorators": [],
                        "name": "value",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1137,
                        "end": 1150,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1139,
                            "end": 1148,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1139,
                              "end": 1144,
                              "decorators": [],
                              "name": "value",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 1146,
                              "end": 1148,
                              "raw": "42",
                              "value": 42
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1155,
      "end": 1197,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1160,
        "end": 1168,
        "decorators": [],
        "name": "RecArray",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1174,
        "end": 1196,
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1184,
                  "end": 1195,
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
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1184,
                    "end": 1192,
                    "decorators": [],
                    "name": "RecArray",
                    "optional": false
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1174,
          "end": 1179,
          "decorators": [],
          "name": "Array",
          "optional": false
        }
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1169,
              "end": 1170,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1199,
      "end": 1250,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1216,
        "end": 1220,
        "decorators": [],
        "name": "flat",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1224,
          "end": 1238,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1225,
            "end": 1238,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1227,
              "end": 1238,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1227,
                "end": 1235,
                "decorators": [],
                "name": "RecArray",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1239,
        "end": 1249,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1241,
          "end": 1249,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1241,
            "end": 1246,
            "decorators": [],
            "name": "Array",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1220,
        "end": 1223,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1221,
            "end": 1222,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1221,
              "end": 1222,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1251,
      "end": 1310,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1268,
        "end": 1273,
        "decorators": [],
        "name": "flat1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1277,
          "end": 1299,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1278,
            "end": 1299,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1280,
              "end": 1299,
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
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1290,
                        "end": 1298,
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
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 1290,
                          "end": 1295,
                          "decorators": [],
                          "name": "Array",
                          "optional": false
                        }
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1280,
                "end": 1285,
                "decorators": [],
                "name": "Array",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1300,
        "end": 1310,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1302,
          "end": 1310,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1302,
            "end": 1307,
            "decorators": [],
            "name": "Array",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1273,
        "end": 1276,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1274,
            "end": 1275,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1274,
              "end": 1275,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1311,
      "end": 1382,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1328,
        "end": 1333,
        "decorators": [],
        "name": "flat2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1337,
          "end": 1370,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1338,
            "end": 1370,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1340,
              "end": 1370,
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
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1350,
                        "end": 1369,
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
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1360,
                                  "end": 1368,
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
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false
                                        }
                                      }
                                    ]
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1360,
                                    "end": 1365,
                                    "decorators": [],
                                    "name": "Array",
                                    "optional": false
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 1350,
                          "end": 1355,
                          "decorators": [],
                          "name": "Array",
                          "optional": false
                        }
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1340,
                "end": 1345,
                "decorators": [],
                "name": "Array",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1371,
        "end": 1381,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1373,
          "end": 1381,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1373,
            "end": 1378,
            "decorators": [],
            "name": "Array",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1333,
        "end": 1336,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1334,
            "end": 1335,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1334,
              "end": 1335,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
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
                "raw": "1",
                "value": 1
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
                    "raw": "2",
                    "value": 2
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
                        "raw": "3",
                        "value": 3
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1384,
          "end": 1388,
          "decorators": [],
          "name": "flat",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1418,
      "end": 1432,
      "expression": {
        "type": "CallExpression",
        "start": 1418,
        "end": 1431,
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
                        "raw": "0",
                        "value": 0
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1418,
          "end": 1422,
          "decorators": [],
          "name": "flat",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1446,
      "end": 1476,
      "expression": {
        "type": "CallExpression",
        "start": 1446,
        "end": 1475,
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
                                                        "raw": "4",
                                                        "value": 4
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
        "callee": {
          "type": "Identifier",
          "start": 1446,
          "end": 1450,
          "decorators": [],
          "name": "flat",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1490,
      "end": 1510,
      "expression": {
        "type": "CallExpression",
        "start": 1490,
        "end": 1509,
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 1499,
                "end": 1502,
                "raw": "'a'",
                "value": "a"
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
                    "raw": "2",
                    "value": 2
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1490,
          "end": 1494,
          "decorators": [],
          "name": "flat",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1535,
      "end": 1555,
      "expression": {
        "type": "CallExpression",
        "start": 1535,
        "end": 1554,
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
                "raw": "1",
                "value": 1
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
                    "raw": "2",
                    "value": 2
                  },
                  {
                    "type": "Literal",
                    "start": 1548,
                    "end": 1551,
                    "raw": "'a'",
                    "value": "a"
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1535,
          "end": 1539,
          "decorators": [],
          "name": "flat",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1580,
      "end": 1597,
      "expression": {
        "type": "CallExpression",
        "start": 1580,
        "end": 1596,
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
                "raw": "1",
                "value": 1
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
                    "raw": "'a'",
                    "value": "a"
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1580,
          "end": 1584,
          "decorators": [],
          "name": "flat",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1609,
      "end": 1630,
      "expression": {
        "type": "CallExpression",
        "start": 1609,
        "end": 1629,
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
                "raw": "1",
                "value": 1
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
                    "raw": "2",
                    "value": 2
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
                        "raw": "3",
                        "value": 3
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1609,
          "end": 1614,
          "decorators": [],
          "name": "flat1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1657,
      "end": 1672,
      "expression": {
        "type": "CallExpression",
        "start": 1657,
        "end": 1671,
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
                        "raw": "0",
                        "value": 0
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1657,
          "end": 1662,
          "decorators": [],
          "name": "flat1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1688,
      "end": 1709,
      "expression": {
        "type": "CallExpression",
        "start": 1688,
        "end": 1708,
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 1698,
                "end": 1701,
                "raw": "'a'",
                "value": "a"
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
                    "raw": "2",
                    "value": 2
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1688,
          "end": 1693,
          "decorators": [],
          "name": "flat1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1734,
      "end": 1755,
      "expression": {
        "type": "CallExpression",
        "start": 1734,
        "end": 1754,
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
                "raw": "1",
                "value": 1
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
                    "raw": "2",
                    "value": 2
                  },
                  {
                    "type": "Literal",
                    "start": 1748,
                    "end": 1751,
                    "raw": "'a'",
                    "value": "a"
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1734,
          "end": 1739,
          "decorators": [],
          "name": "flat1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1780,
      "end": 1798,
      "expression": {
        "type": "CallExpression",
        "start": 1780,
        "end": 1797,
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
                "raw": "1",
                "value": 1
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
                    "raw": "'a'",
                    "value": "a"
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1780,
          "end": 1785,
          "decorators": [],
          "name": "flat1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1810,
      "end": 1831,
      "expression": {
        "type": "CallExpression",
        "start": 1810,
        "end": 1830,
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
                "raw": "1",
                "value": 1
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
                    "raw": "2",
                    "value": 2
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
                        "raw": "3",
                        "value": 3
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1810,
          "end": 1815,
          "decorators": [],
          "name": "flat2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1845,
      "end": 1860,
      "expression": {
        "type": "CallExpression",
        "start": 1845,
        "end": 1859,
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
                        "raw": "0",
                        "value": 0
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1845,
          "end": 1850,
          "decorators": [],
          "name": "flat2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1874,
      "end": 1895,
      "expression": {
        "type": "CallExpression",
        "start": 1874,
        "end": 1894,
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 1884,
                "end": 1887,
                "raw": "'a'",
                "value": "a"
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
                    "raw": "2",
                    "value": 2
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1874,
          "end": 1879,
          "decorators": [],
          "name": "flat2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1920,
      "end": 1941,
      "expression": {
        "type": "CallExpression",
        "start": 1920,
        "end": 1940,
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
                "raw": "1",
                "value": 1
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
                    "raw": "2",
                    "value": 2
                  },
                  {
                    "type": "Literal",
                    "start": 1934,
                    "end": 1937,
                    "raw": "'a'",
                    "value": "a"
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1920,
          "end": 1925,
          "decorators": [],
          "name": "flat2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1966,
      "end": 1984,
      "expression": {
        "type": "CallExpression",
        "start": 1966,
        "end": 1983,
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
                "raw": "1",
                "value": 1
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
                    "raw": "'a'",
                    "value": "a"
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1966,
          "end": 1971,
          "decorators": [],
          "name": "flat2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1996,
      "end": 2013,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2001,
        "end": 2004,
        "decorators": [],
        "name": "T10",
        "optional": false
      },
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
            "decorators": [],
            "name": "T10",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2014,
      "end": 2040,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2019,
        "end": 2022,
        "decorators": [],
        "name": "T11",
        "optional": false
      },
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
              "decorators": [],
              "name": "T11",
              "optional": false
            }
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2041,
      "end": 2060,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2046,
        "end": 2049,
        "decorators": [],
        "name": "T12",
        "optional": false
      },
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
            "decorators": [],
            "name": "T12",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2061,
      "end": 2087,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2066,
        "end": 2069,
        "decorators": [],
        "name": "T13",
        "optional": false
      },
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
                "decorators": [],
                "name": "T13",
                "optional": false
              }
            }
          },
          {
            "type": "TSStringKeyword",
            "start": 2080,
            "end": 2086
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2088,
      "end": 2121,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2093,
        "end": 2096,
        "decorators": [],
        "name": "T14",
        "optional": false
      },
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
                "decorators": [],
                "name": "T14",
                "optional": false
              }
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
                "key": {
                  "type": "Identifier",
                  "start": 2109,
                  "end": 2110,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2110,
                  "end": 2118,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2112,
                    "end": 2118
                  }
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2122,
      "end": 2172,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2127,
        "end": 2130,
        "decorators": [],
        "name": "T15",
        "optional": false
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
            "decorators": [],
            "name": "X",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSStringKeyword",
          "start": 2146,
          "end": 2152
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2166,
          "end": 2171
        },
        "trueType": {
          "type": "TSArrayType",
          "start": 2155,
          "end": 2163,
          "elementType": {
            "type": "TSTypeReference",
            "start": 2155,
            "end": 2161,
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
                    "decorators": [],
                    "name": "X",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 2155,
              "end": 2158,
              "decorators": [],
              "name": "T15",
              "optional": false
            }
          }
        }
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2131,
              "end": 2132,
              "decorators": [],
              "name": "X",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2174,
      "end": 2221,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2179,
        "end": 2192,
        "decorators": [],
        "name": "ValueOrArray1",
        "optional": false
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
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          {
            "type": "TSArrayType",
            "start": 2202,
            "end": 2220,
            "elementType": {
              "type": "TSTypeReference",
              "start": 2202,
              "end": 2218,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2202,
                "end": 2215,
                "decorators": [],
                "name": "ValueOrArray1",
                "optional": false
              }
            }
          }
        ]
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2193,
              "end": 2194,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2222,
      "end": 2269,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2227,
        "end": 2240,
        "decorators": [],
        "name": "ValueOrArray2",
        "optional": false
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
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          {
            "type": "TSArrayType",
            "start": 2250,
            "end": 2268,
            "elementType": {
              "type": "TSTypeReference",
              "start": 2250,
              "end": 2266,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2250,
                "end": 2263,
                "decorators": [],
                "name": "ValueOrArray2",
                "optional": false
              }
            }
          }
        ]
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2241,
              "end": 2242,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2271,
      "end": 2320,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2288,
        "end": 2292,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2296,
          "end": 2315,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2297,
            "end": 2315,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2299,
              "end": 2315,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2299,
                "end": 2312,
                "decorators": [],
                "name": "ValueOrArray1",
                "optional": false
              }
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2292,
        "end": 2295,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2293,
            "end": 2294,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2293,
              "end": 2294,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2333,
            "end": 2359,
            "decorators": [],
            "name": "ra1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2336,
              "end": 2359,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2338,
                "end": 2359,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 2338,
                  "end": 2351,
                  "decorators": [],
                  "name": "ValueOrArray2",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2366,
            "end": 2368,
            "decorators": [],
            "name": "x1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2371,
            "end": 2380,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2376,
                "end": 2379,
                "decorators": [],
                "name": "ra1",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2371,
              "end": 2375,
              "decorators": [],
              "name": "foo1",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2393,
      "end": 2441,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2398,
        "end": 2412,
        "decorators": [],
        "name": "NumberOrArray1",
        "optional": false
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
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          {
            "type": "TSArrayType",
            "start": 2422,
            "end": 2440,
            "elementType": {
              "type": "TSTypeReference",
              "start": 2422,
              "end": 2438,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2422,
                "end": 2435,
                "decorators": [],
                "name": "ValueOrArray1",
                "optional": false
              }
            }
          }
        ]
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2413,
              "end": 2414,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2442,
      "end": 2490,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2447,
        "end": 2461,
        "decorators": [],
        "name": "NumberOrArray2",
        "optional": false
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
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          {
            "type": "TSArrayType",
            "start": 2471,
            "end": 2489,
            "elementType": {
              "type": "TSTypeReference",
              "start": 2471,
              "end": 2487,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2471,
                "end": 2484,
                "decorators": [],
                "name": "ValueOrArray2",
                "optional": false
              }
            }
          }
        ]
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2462,
              "end": 2463,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2492,
      "end": 2541,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2509,
        "end": 2513,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2517,
          "end": 2536,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2518,
            "end": 2536,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2520,
              "end": 2536,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2520,
                "end": 2533,
                "decorators": [],
                "name": "ValueOrArray1",
                "optional": false
              }
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2513,
        "end": 2516,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2514,
            "end": 2515,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2514,
              "end": 2515,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2554,
            "end": 2580,
            "decorators": [],
            "name": "ra2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2557,
              "end": 2580,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2559,
                "end": 2580,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 2559,
                  "end": 2572,
                  "decorators": [],
                  "name": "ValueOrArray2",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2587,
            "end": 2589,
            "decorators": [],
            "name": "x2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2592,
            "end": 2601,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2597,
                "end": 2600,
                "decorators": [],
                "name": "ra2",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2592,
              "end": 2596,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2658,
      "end": 2699,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2663,
        "end": 2667,
        "decorators": [],
        "name": "Tree",
        "optional": false
      },
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
                "decorators": [],
                "name": "HTMLHeadingElement",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 2691,
              "end": 2695,
              "typeName": {
                "type": "Identifier",
                "start": 2691,
                "end": 2695,
                "decorators": [],
                "name": "Tree",
                "optional": false
              }
            }
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2701,
      "end": 3060,
      "async": false,
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
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2784,
                  "end": 2788,
                  "raw": "'ul'",
                  "value": "ul"
                },
                {
                  "type": "CallExpression",
                  "start": 2790,
                  "end": 3056,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 2799,
                      "end": 3055,
                      "async": false,
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
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 2834,
                                  "end": 2837,
                                  "decorators": [],
                                  "name": "idx",
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
                                        "decorators": [],
                                        "name": "index",
                                        "optional": false
                                      }
                                    },
                                    {
                                      "type": "BinaryExpression",
                                      "start": 2851,
                                      "end": 2856,
                                      "operator": "+",
                                      "left": {
                                        "type": "Identifier",
                                        "start": 2851,
                                        "end": 2852,
                                        "decorators": [],
                                        "name": "i",
                                        "optional": false
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "start": 2855,
                                        "end": 2856,
                                        "raw": "1",
                                        "value": 1
                                      }
                                    }
                                  ]
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const"
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 2863,
                            "end": 3051,
                            "argument": {
                              "type": "CallExpression",
                              "start": 2870,
                              "end": 3050,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 2875,
                                  "end": 2879,
                                  "raw": "'li'",
                                  "value": "li"
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
                                      "arguments": [
                                        {
                                          "type": "Literal",
                                          "start": 2894,
                                          "end": 2897,
                                          "raw": "'a'",
                                          "value": "a"
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
                                              "computed": false,
                                              "key": {
                                                "type": "Identifier",
                                                "start": 2901,
                                                "end": 2905,
                                                "decorators": [],
                                                "name": "href",
                                                "optional": false
                                              },
                                              "kind": "init",
                                              "method": false,
                                              "optional": false,
                                              "shorthand": false,
                                              "value": {
                                                "type": "TemplateLiteral",
                                                "start": 2907,
                                                "end": 2918,
                                                "expressions": [
                                                  {
                                                    "type": "MemberExpression",
                                                    "start": 2911,
                                                    "end": 2916,
                                                    "computed": false,
                                                    "object": {
                                                      "type": "Identifier",
                                                      "start": 2911,
                                                      "end": 2913,
                                                      "decorators": [],
                                                      "name": "el",
                                                      "optional": false
                                                    },
                                                    "optional": false,
                                                    "property": {
                                                      "type": "Identifier",
                                                      "start": 2914,
                                                      "end": 2916,
                                                      "decorators": [],
                                                      "name": "id",
                                                      "optional": false
                                                    }
                                                  }
                                                ],
                                                "quasis": [
                                                  {
                                                    "type": "TemplateElement",
                                                    "start": 2907,
                                                    "end": 2911,
                                                    "tail": false,
                                                    "value": {
                                                      "cooked": "#",
                                                      "raw": "#"
                                                    }
                                                  },
                                                  {
                                                    "type": "TemplateElement",
                                                    "start": 2916,
                                                    "end": 2918,
                                                    "tail": true,
                                                    "value": {
                                                      "cooked": "",
                                                      "raw": ""
                                                    }
                                                  }
                                                ]
                                              }
                                            },
                                            {
                                              "type": "Property",
                                              "start": 2920,
                                              "end": 2935,
                                              "computed": false,
                                              "key": {
                                                "type": "Identifier",
                                                "start": 2920,
                                                "end": 2923,
                                                "decorators": [],
                                                "name": "rel",
                                                "optional": false
                                              },
                                              "kind": "init",
                                              "method": false,
                                              "optional": false,
                                              "shorthand": false,
                                              "value": {
                                                "type": "Literal",
                                                "start": 2925,
                                                "end": 2935,
                                                "raw": "'noopener'",
                                                "value": "noopener"
                                              }
                                            },
                                            {
                                              "type": "Property",
                                              "start": 2937,
                                              "end": 2964,
                                              "computed": false,
                                              "key": {
                                                "type": "Literal",
                                                "start": 2937,
                                                "end": 2949,
                                                "raw": "'data-index'",
                                                "value": "data-index"
                                              },
                                              "kind": "init",
                                              "method": false,
                                              "optional": false,
                                              "shorthand": false,
                                              "value": {
                                                "type": "CallExpression",
                                                "start": 2951,
                                                "end": 2964,
                                                "arguments": [
                                                  {
                                                    "type": "Literal",
                                                    "start": 2960,
                                                    "end": 2963,
                                                    "raw": "'.'",
                                                    "value": "."
                                                  }
                                                ],
                                                "callee": {
                                                  "type": "MemberExpression",
                                                  "start": 2951,
                                                  "end": 2959,
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "start": 2951,
                                                    "end": 2954,
                                                    "decorators": [],
                                                    "name": "idx",
                                                    "optional": false
                                                  },
                                                  "optional": false,
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 2955,
                                                    "end": 2959,
                                                    "decorators": [],
                                                    "name": "join",
                                                    "optional": false
                                                  }
                                                },
                                                "optional": false
                                              }
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
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 2968,
                                              "end": 2970,
                                              "decorators": [],
                                              "name": "el",
                                              "optional": false
                                            },
                                            "optional": false,
                                            "property": {
                                              "type": "Identifier",
                                              "start": 2971,
                                              "end": 2982,
                                              "decorators": [],
                                              "name": "textContent",
                                              "optional": false
                                            }
                                          }
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 2889,
                                        "end": 2893,
                                        "decorators": [],
                                        "name": "html",
                                        "optional": false
                                      },
                                      "optional": false
                                    },
                                    {
                                      "type": "ConditionalExpression",
                                      "start": 2992,
                                      "end": 3043,
                                      "alternate": {
                                        "type": "CallExpression",
                                        "start": 3037,
                                        "end": 3043,
                                        "arguments": [],
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 3037,
                                          "end": 3041,
                                          "decorators": [],
                                          "name": "frag",
                                          "optional": false
                                        },
                                        "optional": false
                                      },
                                      "consequent": {
                                        "type": "CallExpression",
                                        "start": 3014,
                                        "end": 3034,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "start": 3020,
                                            "end": 3028,
                                            "decorators": [],
                                            "name": "children",
                                            "optional": false
                                          },
                                          {
                                            "type": "Identifier",
                                            "start": 3030,
                                            "end": 3033,
                                            "decorators": [],
                                            "name": "idx",
                                            "optional": false
                                          }
                                        ],
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 3014,
                                          "end": 3019,
                                          "decorators": [],
                                          "name": "parse",
                                          "optional": false
                                        },
                                        "optional": false
                                      },
                                      "test": {
                                        "type": "BinaryExpression",
                                        "start": 2992,
                                        "end": 3011,
                                        "operator": ">",
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 2992,
                                          "end": 3007,
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 2992,
                                            "end": 3000,
                                            "decorators": [],
                                            "name": "children",
                                            "optional": false
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 3001,
                                            "end": 3007,
                                            "decorators": [],
                                            "name": "length",
                                            "optional": false
                                          }
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "start": 3010,
                                          "end": 3011,
                                          "raw": "0",
                                          "value": 0
                                        }
                                      }
                                    }
                                  ]
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 2870,
                                "end": 2874,
                                "decorators": [],
                                "name": "html",
                                "optional": false
                              },
                              "optional": false
                            }
                          }
                        ]
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "ArrayPattern",
                          "start": 2800,
                          "end": 2814,
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 2801,
                              "end": 2803,
                              "decorators": [],
                              "name": "el",
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 2805,
                              "end": 2813,
                              "decorators": [],
                              "name": "children",
                              "optional": false
                            }
                          ],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 2816,
                          "end": 2817,
                          "decorators": [],
                          "name": "i",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2790,
                    "end": 2798,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2790,
                      "end": 2794,
                      "decorators": [],
                      "name": "node",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2795,
                      "end": 2798,
                      "decorators": [],
                      "name": "map",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 2779,
                "end": 2783,
                "decorators": [],
                "name": "html",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2710,
        "end": 2715,
        "decorators": [],
        "name": "parse",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2716,
          "end": 2726,
          "decorators": [],
          "name": "node",
          "optional": false,
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
                "decorators": [],
                "name": "Tree",
                "optional": false
              }
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 2728,
          "end": 2748,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 2728,
            "end": 2743,
            "decorators": [],
            "name": "index",
            "optional": false,
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
            }
          },
          "optional": false,
          "right": {
            "type": "ArrayExpression",
            "start": 2746,
            "end": 2748,
            "elements": []
          }
        }
      ],
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
            "decorators": [],
            "name": "HTMLUListElement",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3062,
      "end": 3490,
      "async": false,
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
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 3363,
                  "end": 3477,
                  "async": false,
                  "body": {
                    "type": "ConditionalExpression",
                    "start": 3383,
                    "end": 3477,
                    "alternate": {
                      "type": "CallExpression",
                      "start": 3424,
                      "end": 3477,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 3445,
                          "end": 3449,
                          "decorators": [],
                          "name": "node",
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
                                    "arguments": [],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 3453,
                                      "end": 3461,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 3453,
                                        "end": 3455,
                                        "decorators": [],
                                        "name": "hs",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 3456,
                                        "end": 3461,
                                        "decorators": [],
                                        "name": "shift",
                                        "optional": false
                                      }
                                    },
                                    "optional": false
                                  }
                                },
                                {
                                  "type": "CallExpression",
                                  "start": 3466,
                                  "end": 3474,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 3471,
                                      "end": 3473,
                                      "decorators": [],
                                      "name": "hs",
                                      "optional": false
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 3466,
                                    "end": 3470,
                                    "decorators": [],
                                    "name": "cons",
                                    "optional": false
                                  },
                                  "optional": false
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 3424,
                        "end": 3430,
                        "decorators": [],
                        "name": "concat",
                        "optional": false
                      },
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
                            "indexType": {
                              "type": "TSNumberKeyword",
                              "start": 3436,
                              "end": 3442
                            },
                            "objectType": {
                              "type": "TSTypeReference",
                              "start": 3431,
                              "end": 3435,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3431,
                                "end": 3435,
                                "decorators": [],
                                "name": "Tree",
                                "optional": false
                              }
                            }
                          }
                        ]
                      }
                    },
                    "consequent": {
                      "type": "Identifier",
                      "start": 3409,
                      "end": 3413,
                      "decorators": [],
                      "name": "node",
                      "optional": false
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 3383,
                      "end": 3398,
                      "operator": "===",
                      "left": {
                        "type": "MemberExpression",
                        "start": 3383,
                        "end": 3392,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 3383,
                          "end": 3385,
                          "decorators": [],
                          "name": "hs",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3386,
                          "end": 3392,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3397,
                        "end": 3398,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3364,
                      "end": 3368,
                      "decorators": [],
                      "name": "node",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 3370,
                      "end": 3372,
                      "decorators": [],
                      "name": "hs",
                      "optional": false
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "start": 3484,
                  "end": 3486,
                  "elements": []
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 3119,
                "end": 3356,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 3119,
                  "end": 3344,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 3158,
                      "end": 3337,
                      "async": false,
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
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 3184,
                                  "end": 3186,
                                  "decorators": [],
                                  "name": "hs",
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
                                    "arguments": [],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 3189,
                                      "end": 3196,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 3189,
                                        "end": 3192,
                                        "decorators": [],
                                        "name": "hss",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 3193,
                                        "end": 3196,
                                        "decorators": [],
                                        "name": "pop",
                                        "optional": false
                                      }
                                    },
                                    "optional": false
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const"
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 3207,
                            "end": 3331,
                            "argument": {
                              "type": "ConditionalExpression",
                              "start": 3214,
                              "end": 3330,
                              "alternate": {
                                "type": "CallExpression",
                                "start": 3308,
                                "end": 3330,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 3315,
                                    "end": 3318,
                                    "decorators": [],
                                    "name": "hss",
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
                                        "decorators": [],
                                        "name": "hs",
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
                                            "decorators": [],
                                            "name": "h",
                                            "optional": false
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 3308,
                                  "end": 3314,
                                  "decorators": [],
                                  "name": "concat",
                                  "optional": false
                                },
                                "optional": false
                              },
                              "consequent": {
                                "type": "CallExpression",
                                "start": 3267,
                                "end": 3297,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 3274,
                                    "end": 3277,
                                    "decorators": [],
                                    "name": "hss",
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
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "start": 3287,
                                            "end": 3289,
                                            "decorators": [],
                                            "name": "hs",
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
                                                "decorators": [],
                                                "name": "h",
                                                "optional": false
                                              }
                                            ]
                                          }
                                        ],
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 3280,
                                          "end": 3286,
                                          "decorators": [],
                                          "name": "concat",
                                          "optional": false
                                        },
                                        "optional": false
                                      }
                                    ]
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 3267,
                                  "end": 3273,
                                  "decorators": [],
                                  "name": "concat",
                                  "optional": false
                                },
                                "optional": false
                              },
                              "test": {
                                "type": "LogicalExpression",
                                "start": 3214,
                                "end": 3256,
                                "operator": "||",
                                "left": {
                                  "type": "BinaryExpression",
                                  "start": 3214,
                                  "end": 3229,
                                  "operator": "===",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 3214,
                                    "end": 3223,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 3214,
                                      "end": 3216,
                                      "decorators": [],
                                      "name": "hs",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 3217,
                                      "end": 3223,
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "start": 3228,
                                    "end": 3229,
                                    "raw": "0",
                                    "value": 0
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "start": 3233,
                                  "end": 3256,
                                  "operator": ">",
                                  "left": {
                                    "type": "CallExpression",
                                    "start": 3233,
                                    "end": 3241,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 3239,
                                        "end": 3240,
                                        "decorators": [],
                                        "name": "h",
                                        "optional": false
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 3233,
                                      "end": 3238,
                                      "decorators": [],
                                      "name": "level",
                                      "optional": false
                                    },
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "start": 3244,
                                    "end": 3256,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "start": 3250,
                                        "end": 3255,
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 3250,
                                          "end": 3252,
                                          "decorators": [],
                                          "name": "hs",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Literal",
                                          "start": 3253,
                                          "end": 3254,
                                          "raw": "0",
                                          "value": 0
                                        }
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 3244,
                                      "end": 3249,
                                      "decorators": [],
                                      "name": "level",
                                      "optional": false
                                    },
                                    "optional": false
                                  }
                                }
                              }
                            }
                          }
                        ]
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3159,
                          "end": 3162,
                          "decorators": [],
                          "name": "hss",
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 3164,
                          "end": 3165,
                          "decorators": [],
                          "name": "h",
                          "optional": false
                        }
                      ]
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
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3119,
                    "end": 3133,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3119,
                      "end": 3121,
                      "decorators": [],
                      "name": "hs",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3127,
                      "end": 3133,
                      "decorators": [],
                      "name": "reduce",
                      "optional": false
                    }
                  },
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
                              "decorators": [],
                              "name": "HTMLHeadingElement",
                              "optional": false
                            }
                          }
                        }
                      }
                    ]
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 3350,
                  "end": 3356,
                  "decorators": [],
                  "name": "reduce",
                  "optional": false
                }
              },
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
                      "decorators": [],
                      "name": "Tree",
                      "optional": false
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3071,
        "end": 3075,
        "decorators": [],
        "name": "cons",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3076,
          "end": 3100,
          "decorators": [],
          "name": "hs",
          "optional": false,
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
                  "decorators": [],
                  "name": "HTMLHeadingElement",
                  "optional": false
                }
              }
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "Tree",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3492,
      "end": 3600,
      "async": false,
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
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 3549,
                  "end": 3572,
                  "arguments": [
                    {
                      "type": "UnaryExpression",
                      "start": 3558,
                      "end": 3571,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 3559,
                        "end": 3571,
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "start": 3559,
                          "end": 3568,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 3559,
                            "end": 3560,
                            "decorators": [],
                            "name": "h",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 3561,
                            "end": 3568,
                            "decorators": [],
                            "name": "tagName",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 3569,
                          "end": 3570,
                          "raw": "1",
                          "value": 1
                        }
                      },
                      "operator": "+",
                      "prefix": true
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 3549,
                    "end": 3557,
                    "decorators": [],
                    "name": "isFinite",
                    "optional": false
                  },
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 3542,
                "end": 3548,
                "decorators": [],
                "name": "assert",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 3577,
            "end": 3598,
            "argument": {
              "type": "UnaryExpression",
              "start": 3584,
              "end": 3597,
              "argument": {
                "type": "MemberExpression",
                "start": 3585,
                "end": 3597,
                "computed": true,
                "object": {
                  "type": "MemberExpression",
                  "start": 3585,
                  "end": 3594,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 3585,
                    "end": 3586,
                    "decorators": [],
                    "name": "h",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 3587,
                    "end": 3594,
                    "decorators": [],
                    "name": "tagName",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 3595,
                  "end": 3596,
                  "raw": "1",
                  "value": 1
                }
              },
              "operator": "+",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3501,
        "end": 3506,
        "decorators": [],
        "name": "level",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3507,
          "end": 3528,
          "decorators": [],
          "name": "h",
          "optional": false,
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
                "decorators": [],
                "name": "HTMLHeadingElement",
                "optional": false
              }
            }
          }
        }
      ],
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
  "sourceType": "script"
}
```
