__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 8142,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 95,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 94,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 73,
            "decorators": [],
            "name": "numsOrNull",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 76,
            "end": 94,
            "elements": [
              {
                "type": "Literal",
                "start": 77,
                "end": 78,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 80,
                "end": 81,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 83,
                "end": 84,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 86,
                "end": 87,
                "value": 4,
                "raw": "4"
              },
              {
                "type": "Literal",
                "start": 89,
                "end": 93,
                "value": null,
                "raw": "null"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 96,
      "end": 161,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 160,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 130,
            "decorators": [],
            "name": "filteredNumsTruthy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 130,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 122,
                "end": 130,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 122,
                  "end": 128
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 133,
            "end": 160,
            "callee": {
              "type": "MemberExpression",
              "start": 133,
              "end": 150,
              "object": {
                "type": "Identifier",
                "start": 133,
                "end": 143,
                "decorators": [],
                "name": "numsOrNull",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 144,
                "end": 150,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 151,
                "end": 159,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 151,
                    "end": 152,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "UnaryExpression",
                  "start": 156,
                  "end": 159,
                  "operator": "!",
                  "argument": {
                    "type": "UnaryExpression",
                    "start": 157,
                    "end": 159,
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 159,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "prefix": true
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 255,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 254,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 217,
            "decorators": [],
            "name": "filteredNumsNonNullish",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 207,
              "end": 217,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 209,
                "end": 217,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 209,
                  "end": 215
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 220,
            "end": 254,
            "callee": {
              "type": "MemberExpression",
              "start": 220,
              "end": 237,
              "object": {
                "type": "Identifier",
                "start": 220,
                "end": 230,
                "decorators": [],
                "name": "numsOrNull",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 231,
                "end": 237,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 238,
                "end": 253,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 238,
                    "end": 239,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "start": 243,
                  "end": 253,
                  "left": {
                    "type": "Identifier",
                    "start": 243,
                    "end": 244,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "start": 249,
                    "end": 253,
                    "value": null,
                    "raw": "null"
                  }
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 271,
      "end": 413,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 277,
          "end": 412,
          "id": {
            "type": "Identifier",
            "start": 277,
            "end": 304,
            "decorators": [],
            "name": "evenSquaresInline",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 294,
              "end": 304,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 296,
                "end": 304,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 296,
                  "end": 302
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 328,
            "end": 412,
            "callee": {
              "type": "MemberExpression",
              "start": 328,
              "end": 402,
              "object": {
                "type": "CallExpression",
                "start": 328,
                "end": 386,
                "callee": {
                  "type": "MemberExpression",
                  "start": 328,
                  "end": 353,
                  "object": {
                    "type": "ArrayExpression",
                    "start": 328,
                    "end": 340,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 329,
                        "end": 330,
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "Literal",
                        "start": 332,
                        "end": 333,
                        "value": 2,
                        "raw": "2"
                      },
                      {
                        "type": "Literal",
                        "start": 335,
                        "end": 336,
                        "value": 3,
                        "raw": "3"
                      },
                      {
                        "type": "Literal",
                        "start": 338,
                        "end": 339,
                        "value": 4,
                        "raw": "4"
                      }
                    ]
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 350,
                    "end": 353,
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 354,
                    "end": 385,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 354,
                        "end": 355,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "ConditionalExpression",
                      "start": 359,
                      "end": 385,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 359,
                        "end": 370,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 359,
                          "end": 364,
                          "left": {
                            "type": "Identifier",
                            "start": 359,
                            "end": 360,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "%",
                          "right": {
                            "type": "Literal",
                            "start": 363,
                            "end": 364,
                            "value": 2,
                            "raw": "2"
                          }
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 369,
                          "end": 370,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "consequent": {
                        "type": "BinaryExpression",
                        "start": 373,
                        "end": 378,
                        "left": {
                          "type": "Identifier",
                          "start": 373,
                          "end": 374,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "*",
                        "right": {
                          "type": "Identifier",
                          "start": 377,
                          "end": 378,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "alternate": {
                        "type": "Literal",
                        "start": 381,
                        "end": 385,
                        "value": null,
                        "raw": "null"
                      }
                    },
                    "id": null,
                    "generator": false
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 396,
                "end": 402,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 403,
                "end": 411,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 403,
                    "end": 404,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "UnaryExpression",
                  "start": 408,
                  "end": 411,
                  "operator": "!",
                  "argument": {
                    "type": "UnaryExpression",
                    "start": 409,
                    "end": 411,
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "start": 410,
                      "end": 411,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "prefix": true
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 456,
      "end": 499,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 462,
          "end": 498,
          "id": {
            "type": "Identifier",
            "start": 462,
            "end": 470,
            "decorators": [],
            "name": "isTruthy",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 473,
            "end": 498,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 474,
                "end": 490,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 475,
                  "end": 490,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 477,
                    "end": 490,
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 477,
                        "end": 483
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 486,
                        "end": 490
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "UnaryExpression",
              "start": 495,
              "end": 498,
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "start": 496,
                "end": 498,
                "operator": "!",
                "argument": {
                  "type": "Identifier",
                  "start": 497,
                  "end": 498,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "prefix": true
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 501,
      "end": 631,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 507,
          "end": 630,
          "id": {
            "type": "Identifier",
            "start": 507,
            "end": 528,
            "decorators": [],
            "name": "evenSquares",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 518,
              "end": 528,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 520,
                "end": 528,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 520,
                  "end": 526
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 552,
            "end": 630,
            "callee": {
              "type": "MemberExpression",
              "start": 552,
              "end": 620,
              "object": {
                "type": "CallExpression",
                "start": 552,
                "end": 606,
                "callee": {
                  "type": "MemberExpression",
                  "start": 552,
                  "end": 573,
                  "object": {
                    "type": "ArrayExpression",
                    "start": 552,
                    "end": 564,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 553,
                        "end": 554,
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "Literal",
                        "start": 556,
                        "end": 557,
                        "value": 2,
                        "raw": "2"
                      },
                      {
                        "type": "Literal",
                        "start": 559,
                        "end": 560,
                        "value": 3,
                        "raw": "3"
                      },
                      {
                        "type": "Literal",
                        "start": 562,
                        "end": 563,
                        "value": 4,
                        "raw": "4"
                      }
                    ]
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 570,
                    "end": 573,
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 574,
                    "end": 605,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 574,
                        "end": 575,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "ConditionalExpression",
                      "start": 579,
                      "end": 605,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 579,
                        "end": 590,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 579,
                          "end": 584,
                          "left": {
                            "type": "Identifier",
                            "start": 579,
                            "end": 580,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "%",
                          "right": {
                            "type": "Literal",
                            "start": 583,
                            "end": 584,
                            "value": 2,
                            "raw": "2"
                          }
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 589,
                          "end": 590,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "consequent": {
                        "type": "BinaryExpression",
                        "start": 593,
                        "end": 598,
                        "left": {
                          "type": "Identifier",
                          "start": 593,
                          "end": 594,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "*",
                        "right": {
                          "type": "Identifier",
                          "start": 597,
                          "end": 598,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "alternate": {
                        "type": "Literal",
                        "start": 601,
                        "end": 605,
                        "value": null,
                        "raw": "null"
                      }
                    },
                    "id": null,
                    "generator": false
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 614,
                "end": 620,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 621,
                "end": 629,
                "decorators": [],
                "name": "isTruthy",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 633,
      "end": 772,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 639,
          "end": 771,
          "id": {
            "type": "Identifier",
            "start": 639,
            "end": 667,
            "decorators": [],
            "name": "evenSquaresNonNull",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 657,
              "end": 667,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 659,
                "end": 667,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 659,
                  "end": 665
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 688,
            "end": 771,
            "callee": {
              "type": "MemberExpression",
              "start": 688,
              "end": 754,
              "object": {
                "type": "CallExpression",
                "start": 688,
                "end": 742,
                "callee": {
                  "type": "MemberExpression",
                  "start": 688,
                  "end": 709,
                  "object": {
                    "type": "ArrayExpression",
                    "start": 688,
                    "end": 700,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 689,
                        "end": 690,
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "Literal",
                        "start": 692,
                        "end": 693,
                        "value": 2,
                        "raw": "2"
                      },
                      {
                        "type": "Literal",
                        "start": 695,
                        "end": 696,
                        "value": 3,
                        "raw": "3"
                      },
                      {
                        "type": "Literal",
                        "start": 698,
                        "end": 699,
                        "value": 4,
                        "raw": "4"
                      }
                    ]
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 706,
                    "end": 709,
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 710,
                    "end": 741,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 710,
                        "end": 711,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "ConditionalExpression",
                      "start": 715,
                      "end": 741,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 715,
                        "end": 726,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 715,
                          "end": 720,
                          "left": {
                            "type": "Identifier",
                            "start": 715,
                            "end": 716,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "%",
                          "right": {
                            "type": "Literal",
                            "start": 719,
                            "end": 720,
                            "value": 2,
                            "raw": "2"
                          }
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 725,
                          "end": 726,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "consequent": {
                        "type": "BinaryExpression",
                        "start": 729,
                        "end": 734,
                        "left": {
                          "type": "Identifier",
                          "start": 729,
                          "end": 730,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "*",
                        "right": {
                          "type": "Identifier",
                          "start": 733,
                          "end": 734,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "alternate": {
                        "type": "Literal",
                        "start": 737,
                        "end": 741,
                        "value": null,
                        "raw": "null"
                      }
                    },
                    "id": null,
                    "generator": false
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 748,
                "end": 754,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 755,
                "end": 770,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 755,
                    "end": 756,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "start": 760,
                  "end": 770,
                  "left": {
                    "type": "Identifier",
                    "start": 760,
                    "end": 761,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "start": 766,
                    "end": 770,
                    "value": null,
                    "raw": "null"
                  }
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 774,
      "end": 835,
      "id": {
        "type": "Identifier",
        "start": 783,
        "end": 792,
        "decorators": [],
        "name": "isNonNull",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 793,
          "end": 809,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 794,
            "end": 809,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 796,
              "end": 809,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 796,
                  "end": 802
                },
                {
                  "type": "TSNullKeyword",
                  "start": 805,
                  "end": 809
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 811,
        "end": 835,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 815,
            "end": 833,
            "argument": {
              "type": "BinaryExpression",
              "start": 822,
              "end": 832,
              "left": {
                "type": "Identifier",
                "start": 822,
                "end": 823,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 828,
                "end": 832,
                "value": null,
                "raw": "null"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 902,
      "end": 983,
      "id": {
        "type": "Identifier",
        "start": 911,
        "end": 923,
        "decorators": [],
        "name": "isNonNullVar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 924,
          "end": 940,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 925,
            "end": 940,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 927,
              "end": 940,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 927,
                  "end": 933
                },
                {
                  "type": "TSNullKeyword",
                  "start": 936,
                  "end": 940
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 942,
        "end": 983,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 946,
            "end": 968,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 952,
                "end": 967,
                "id": {
                  "type": "Identifier",
                  "start": 952,
                  "end": 954,
                  "decorators": [],
                  "name": "ok",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 957,
                  "end": 967,
                  "left": {
                    "type": "Identifier",
                    "start": 957,
                    "end": 958,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "start": 963,
                    "end": 967,
                    "value": null,
                    "raw": "null"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 971,
            "end": 981,
            "argument": {
              "type": "Identifier",
              "start": 978,
              "end": 980,
              "decorators": [],
              "name": "ok",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 985,
      "end": 1044,
      "id": {
        "type": "Identifier",
        "start": 994,
        "end": 1010,
        "decorators": [],
        "name": "isNonNullGeneric",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1010,
        "end": 1013,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1011,
            "end": 1012,
            "name": {
              "type": "Identifier",
              "start": 1011,
              "end": 1012,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1014,
          "end": 1018,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1015,
            "end": 1018,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1017,
              "end": 1018,
              "typeName": {
                "type": "Identifier",
                "start": 1017,
                "end": 1018,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1020,
        "end": 1044,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1024,
            "end": 1042,
            "argument": {
              "type": "BinaryExpression",
              "start": 1031,
              "end": 1041,
              "left": {
                "type": "Identifier",
                "start": 1031,
                "end": 1032,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 1037,
                "end": 1041,
                "value": null,
                "raw": "null"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1088,
      "end": 1148,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1094,
          "end": 1147,
          "id": {
            "type": "Identifier",
            "start": 1094,
            "end": 1101,
            "decorators": [],
            "name": "myGuard",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1104,
            "end": 1147,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1105,
                "end": 1126,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1106,
                  "end": 1126,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1108,
                    "end": 1126,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1108,
                        "end": 1114
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1117,
                        "end": 1126
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1127,
              "end": 1140,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 1129,
                "end": 1140,
                "parameterName": {
                  "type": "Identifier",
                  "start": 1129,
                  "end": 1130,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1134,
                  "end": 1140,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1134,
                    "end": 1140
                  }
                }
              }
            },
            "body": {
              "type": "UnaryExpression",
              "start": 1144,
              "end": 1147,
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "start": 1145,
                "end": 1147,
                "operator": "!",
                "argument": {
                  "type": "Identifier",
                  "start": 1146,
                  "end": 1147,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "prefix": true
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1149,
      "end": 1209,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1155,
          "end": 1208,
          "id": {
            "type": "Identifier",
            "start": 1155,
            "end": 1168,
            "decorators": [],
            "name": "mySecondGuard",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1171,
            "end": 1208,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1172,
                "end": 1193,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1173,
                  "end": 1193,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1175,
                    "end": 1193,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1175,
                        "end": 1181
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1184,
                        "end": 1193
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 1198,
              "end": 1208,
              "callee": {
                "type": "Identifier",
                "start": 1198,
                "end": 1205,
                "decorators": [],
                "name": "myGuard",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1206,
                  "end": 1207,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1409,
      "end": 1440,
      "id": {
        "type": "Identifier",
        "start": 1414,
        "end": 1419,
        "decorators": [],
        "name": "MyObj",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1422,
        "end": 1439,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1424,
            "end": 1437,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1424,
              "end": 1428,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1429,
              "end": 1437,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1431,
                "end": 1437
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
      "type": "TSTypeAliasDeclaration",
      "start": 1441,
      "end": 1477,
      "id": {
        "type": "Identifier",
        "start": 1446,
        "end": 1453,
        "decorators": [],
        "name": "MyArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "start": 1456,
        "end": 1476,
        "elementType": {
          "type": "TSTypeLiteral",
          "start": 1456,
          "end": 1474,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 1458,
              "end": 1472,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1458,
                "end": 1462,
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1463,
                "end": 1472,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1465,
                  "end": 1472,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 1465,
                    "end": 1470,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1465,
                      "end": 1470,
                      "decorators": [],
                      "name": "MyObj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1478,
      "end": 1506,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1484,
          "end": 1505,
          "id": {
            "type": "Identifier",
            "start": 1484,
            "end": 1500,
            "decorators": [],
            "name": "myArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1491,
              "end": 1500,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1493,
                "end": 1500,
                "typeName": {
                  "type": "Identifier",
                  "start": 1493,
                  "end": 1500,
                  "decorators": [],
                  "name": "MyArray",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1503,
            "end": 1505,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1508,
      "end": 1728,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1514,
          "end": 1727,
          "id": {
            "type": "Identifier",
            "start": 1514,
            "end": 1520,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1523,
            "end": 1727,
            "callee": {
              "type": "MemberExpression",
              "start": 1523,
              "end": 1601,
              "object": {
                "type": "CallExpression",
                "start": 1523,
                "end": 1594,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1523,
                  "end": 1566,
                  "object": {
                    "type": "CallExpression",
                    "start": 1523,
                    "end": 1556,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1523,
                      "end": 1537,
                      "object": {
                        "type": "Identifier",
                        "start": 1523,
                        "end": 1530,
                        "decorators": [],
                        "name": "myArray",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1534,
                        "end": 1537,
                        "decorators": [],
                        "name": "map",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 1538,
                        "end": 1555,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1539,
                            "end": 1542,
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "MemberExpression",
                          "start": 1547,
                          "end": 1555,
                          "object": {
                            "type": "Identifier",
                            "start": 1547,
                            "end": 1550,
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1551,
                            "end": 1555,
                            "decorators": [],
                            "name": "list",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "id": null,
                        "generator": false
                      }
                    ],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1560,
                    "end": 1566,
                    "decorators": [],
                    "name": "filter",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 1567,
                    "end": 1593,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1568,
                        "end": 1571,
                        "decorators": [],
                        "name": "arr",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "LogicalExpression",
                      "start": 1576,
                      "end": 1593,
                      "left": {
                        "type": "Identifier",
                        "start": 1576,
                        "end": 1579,
                        "decorators": [],
                        "name": "arr",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "start": 1583,
                        "end": 1593,
                        "object": {
                          "type": "Identifier",
                          "start": 1583,
                          "end": 1586,
                          "decorators": [],
                          "name": "arr",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1587,
                          "end": 1593,
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    },
                    "id": null,
                    "generator": false
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1598,
                "end": 1601,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1602,
                "end": 1706,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1603,
                    "end": 1606,
                    "decorators": [],
                    "name": "arr",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "start": 1611,
                  "end": 1706,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1611,
                    "end": 1677,
                    "object": {
                      "type": "CallExpression",
                      "start": 1611,
                      "end": 1668,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1611,
                        "end": 1642,
                        "object": {
                          "type": "Identifier",
                          "start": 1611,
                          "end": 1614,
                          "decorators": [],
                          "name": "arr",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1636,
                          "end": 1642,
                          "decorators": [],
                          "name": "filter",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 1643,
                          "end": 1667,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1644,
                              "end": 1647,
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "LogicalExpression",
                            "start": 1652,
                            "end": 1667,
                            "left": {
                              "type": "Identifier",
                              "start": 1652,
                              "end": 1655,
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "&&",
                            "right": {
                              "type": "MemberExpression",
                              "start": 1659,
                              "end": 1667,
                              "object": {
                                "type": "Identifier",
                                "start": 1659,
                                "end": 1662,
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1663,
                                "end": 1667,
                                "decorators": [],
                                "name": "data",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "id": null,
                          "generator": false
                        }
                      ],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1674,
                      "end": 1677,
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1678,
                      "end": 1705,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1678,
                          "end": 1681,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "start": 1685,
                        "end": 1705,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1685,
                          "end": 1695,
                          "object": {
                            "type": "Identifier",
                            "start": 1685,
                            "end": 1689,
                            "decorators": [],
                            "name": "JSON",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1690,
                            "end": 1695,
                            "decorators": [],
                            "name": "parse",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 1696,
                            "end": 1704,
                            "object": {
                              "type": "Identifier",
                              "start": 1696,
                              "end": 1699,
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1700,
                              "end": 1704,
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        ],
                        "optional": false
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1730,
      "end": 2065,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1736,
          "end": 2064,
          "id": {
            "type": "Identifier",
            "start": 1736,
            "end": 1743,
            "decorators": [],
            "name": "result2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1746,
            "end": 2064,
            "callee": {
              "type": "MemberExpression",
              "start": 1746,
              "end": 1841,
              "object": {
                "type": "CallExpression",
                "start": 1746,
                "end": 1834,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1746,
                  "end": 1815,
                  "object": {
                    "type": "CallExpression",
                    "start": 1746,
                    "end": 1805,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1746,
                      "end": 1789,
                      "object": {
                        "type": "CallExpression",
                        "start": 1746,
                        "end": 1779,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1746,
                          "end": 1760,
                          "object": {
                            "type": "Identifier",
                            "start": 1746,
                            "end": 1753,
                            "decorators": [],
                            "name": "myArray",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1757,
                            "end": 1760,
                            "decorators": [],
                            "name": "map",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 1761,
                            "end": 1778,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1762,
                                "end": 1765,
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "MemberExpression",
                              "start": 1770,
                              "end": 1778,
                              "object": {
                                "type": "Identifier",
                                "start": 1770,
                                "end": 1773,
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1774,
                                "end": 1778,
                                "decorators": [],
                                "name": "list",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "id": null,
                            "generator": false
                          }
                        ],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1783,
                        "end": 1789,
                        "decorators": [],
                        "name": "filter",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 1790,
                        "end": 1804,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1791,
                            "end": 1794,
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "UnaryExpression",
                          "start": 1799,
                          "end": 1804,
                          "operator": "!",
                          "argument": {
                            "type": "UnaryExpression",
                            "start": 1800,
                            "end": 1804,
                            "operator": "!",
                            "argument": {
                              "type": "Identifier",
                              "start": 1801,
                              "end": 1804,
                              "decorators": [],
                              "name": "arr",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "prefix": true
                          },
                          "prefix": true
                        },
                        "id": null,
                        "generator": false
                      }
                    ],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1809,
                    "end": 1815,
                    "decorators": [],
                    "name": "filter",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 1816,
                    "end": 1833,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1816,
                        "end": 1819,
                        "decorators": [],
                        "name": "arr",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "start": 1823,
                      "end": 1833,
                      "object": {
                        "type": "Identifier",
                        "start": 1823,
                        "end": 1826,
                        "decorators": [],
                        "name": "arr",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1827,
                        "end": 1833,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "id": null,
                    "generator": false
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1838,
                "end": 1841,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1842,
                "end": 2060,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1843,
                    "end": 1846,
                    "decorators": [],
                    "name": "arr",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "start": 1851,
                  "end": 2060,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1851,
                    "end": 2031,
                    "object": {
                      "type": "CallExpression",
                      "start": 1851,
                      "end": 2022,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1851,
                        "end": 2003,
                        "object": {
                          "type": "CallExpression",
                          "start": 1851,
                          "end": 1894,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1851,
                            "end": 1880,
                            "object": {
                              "type": "Identifier",
                              "start": 1851,
                              "end": 1854,
                              "decorators": [],
                              "name": "arr",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1874,
                              "end": 1880,
                              "decorators": [],
                              "name": "filter",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 1881,
                              "end": 1893,
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 1882,
                                  "end": 1885,
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "start": 1890,
                                "end": 1893,
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "id": null,
                              "generator": false
                            }
                          ],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1997,
                          "end": 2003,
                          "decorators": [],
                          "name": "filter",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 2004,
                          "end": 2021,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2004,
                              "end": 2007,
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "UnaryExpression",
                            "start": 2011,
                            "end": 2021,
                            "operator": "!",
                            "argument": {
                              "type": "UnaryExpression",
                              "start": 2012,
                              "end": 2021,
                              "operator": "!",
                              "argument": {
                                "type": "MemberExpression",
                                "start": 2013,
                                "end": 2021,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2013,
                                  "end": 2016,
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2017,
                                  "end": 2021,
                                  "decorators": [],
                                  "name": "data",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "prefix": true
                            },
                            "prefix": true
                          },
                          "id": null,
                          "generator": false
                        }
                      ],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2028,
                      "end": 2031,
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 2032,
                      "end": 2059,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2032,
                          "end": 2035,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "start": 2039,
                        "end": 2059,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2039,
                          "end": 2049,
                          "object": {
                            "type": "Identifier",
                            "start": 2039,
                            "end": 2043,
                            "decorators": [],
                            "name": "JSON",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2044,
                            "end": 2049,
                            "decorators": [],
                            "name": "parse",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 2050,
                            "end": 2058,
                            "object": {
                              "type": "Identifier",
                              "start": 2050,
                              "end": 2053,
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2054,
                              "end": 2058,
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        ],
                        "optional": false
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2147,
      "end": 2176,
      "id": {
        "type": "Identifier",
        "start": 2152,
        "end": 2155,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2158,
        "end": 2176,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2162,
            "end": 2174,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2162,
              "end": 2165,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2165,
              "end": 2173,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2167,
                "end": 2173
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
      "type": "TSTypeAliasDeclaration",
      "start": 2177,
      "end": 2212,
      "id": {
        "type": "Identifier",
        "start": 2182,
        "end": 2185,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 2188,
        "end": 2212,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 2188,
            "end": 2191,
            "typeName": {
              "type": "Identifier",
              "start": 2188,
              "end": 2191,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 2194,
            "end": 2212,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 2198,
                "end": 2210,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2198,
                  "end": 2201,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2201,
                  "end": 2209,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2203,
                    "end": 2209
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
      "type": "VariableDeclaration",
      "start": 2214,
      "end": 2245,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2220,
          "end": 2244,
          "id": {
            "type": "Identifier",
            "start": 2220,
            "end": 2239,
            "decorators": [],
            "name": "list",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2224,
              "end": 2239,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 2226,
                "end": 2239,
                "elementType": {
                  "type": "TSUnionType",
                  "start": 2227,
                  "end": 2236,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 2227,
                      "end": 2230,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2227,
                        "end": 2230,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2233,
                      "end": 2236,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2233,
                        "end": 2236,
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2242,
            "end": 2244,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2246,
      "end": 2311,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2252,
          "end": 2310,
          "id": {
            "type": "Identifier",
            "start": 2252,
            "end": 2269,
            "decorators": [],
            "name": "resultBars",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2262,
              "end": 2269,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 2264,
                "end": 2269,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 2264,
                  "end": 2267,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2264,
                    "end": 2267,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 2272,
            "end": 2310,
            "callee": {
              "type": "MemberExpression",
              "start": 2272,
              "end": 2283,
              "object": {
                "type": "Identifier",
                "start": 2272,
                "end": 2276,
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2277,
                "end": 2283,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2284,
                "end": 2309,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2285,
                    "end": 2290,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "start": 2295,
                  "end": 2309,
                  "left": {
                    "type": "Literal",
                    "start": 2295,
                    "end": 2300,
                    "value": "bar",
                    "raw": "'bar'"
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 2304,
                    "end": 2309,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2327,
      "end": 2397,
      "id": {
        "type": "Identifier",
        "start": 2336,
        "end": 2348,
        "decorators": [],
        "name": "isBarNonNull",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2349,
          "end": 2368,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2350,
            "end": 2368,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2352,
              "end": 2368,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 2352,
                  "end": 2355,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2352,
                    "end": 2355,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 2358,
                  "end": 2361,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2358,
                    "end": 2361,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNullKeyword",
                  "start": 2364,
                  "end": 2368
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2370,
        "end": 2397,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2374,
            "end": 2395,
            "argument": {
              "type": "BinaryExpression",
              "start": 2382,
              "end": 2393,
              "left": {
                "type": "Literal",
                "start": 2382,
                "end": 2387,
                "value": "bar",
                "raw": "'bar'"
              },
              "operator": "in",
              "right": {
                "type": "TSNonNullExpression",
                "start": 2391,
                "end": 2393,
                "expression": {
                  "type": "Identifier",
                  "start": 2391,
                  "end": 2392,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2398,
      "end": 2423,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2404,
          "end": 2422,
          "id": {
            "type": "Identifier",
            "start": 2404,
            "end": 2412,
            "decorators": [],
            "name": "fooOrBar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 2415,
            "end": 2422,
            "object": {
              "type": "Identifier",
              "start": 2415,
              "end": 2419,
              "decorators": [],
              "name": "list",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 2420,
              "end": 2421,
              "value": 0,
              "raw": "0"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 2424,
      "end": 2496,
      "test": {
        "type": "CallExpression",
        "start": 2428,
        "end": 2450,
        "callee": {
          "type": "Identifier",
          "start": 2428,
          "end": 2440,
          "decorators": [],
          "name": "isBarNonNull",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 2441,
            "end": 2449,
            "decorators": [],
            "name": "fooOrBar",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 2452,
        "end": 2496,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2456,
            "end": 2480,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2462,
                "end": 2479,
                "id": {
                  "type": "Identifier",
                  "start": 2462,
                  "end": 2468,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2463,
                    "end": 2468,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2465,
                      "end": 2468,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2465,
                        "end": 2468,
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 2471,
                  "end": 2479,
                  "decorators": [],
                  "name": "fooOrBar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2614,
      "end": 2680,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2620,
          "end": 2679,
          "id": {
            "type": "Identifier",
            "start": 2620,
            "end": 2621,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2624,
            "end": 2679,
            "callee": {
              "type": "MemberExpression",
              "start": 2624,
              "end": 2651,
              "object": {
                "type": "ArrayExpression",
                "start": 2624,
                "end": 2644,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 2625,
                    "end": 2626,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 2628,
                    "end": 2633,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  {
                    "type": "Literal",
                    "start": 2635,
                    "end": 2636,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 2638,
                    "end": 2643,
                    "value": "bar",
                    "raw": "\"bar\""
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 2645,
                "end": 2651,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2652,
                "end": 2678,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2652,
                    "end": 2653,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "start": 2657,
                  "end": 2678,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 2657,
                    "end": 2665,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 2664,
                      "end": 2665,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 2670,
                    "end": 2678,
                    "value": "string",
                    "raw": "\"string\""
                  }
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2681,
      "end": 2692,
      "expression": {
        "type": "CallExpression",
        "start": 2681,
        "end": 2691,
        "callee": {
          "type": "MemberExpression",
          "start": 2681,
          "end": 2687,
          "object": {
            "type": "Identifier",
            "start": 2681,
            "end": 2682,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2683,
            "end": 2687,
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2688,
            "end": 2690,
            "value": 10,
            "raw": "10"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2757,
      "end": 2847,
      "id": {
        "type": "Identifier",
        "start": 2766,
        "end": 2780,
        "decorators": [],
        "name": "backwardsGuard",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2781,
          "end": 2797,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2782,
            "end": 2797,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2784,
              "end": 2797,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2784,
                  "end": 2790
                },
                {
                  "type": "TSStringKeyword",
                  "start": 2791,
                  "end": 2797
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2798,
        "end": 2811,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 2800,
          "end": 2811,
          "parameterName": {
            "type": "Identifier",
            "start": 2800,
            "end": 2801,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2805,
            "end": 2811,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2805,
              "end": 2811
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2812,
        "end": 2847,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2816,
            "end": 2845,
            "argument": {
              "type": "BinaryExpression",
              "start": 2823,
              "end": 2844,
              "left": {
                "type": "UnaryExpression",
                "start": 2823,
                "end": 2831,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 2830,
                  "end": 2831,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 2836,
                "end": 2844,
                "value": "string",
                "raw": "'string'"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2895,
      "end": 2968,
      "id": {
        "type": "Identifier",
        "start": 2904,
        "end": 2912,
        "decorators": [],
        "name": "isString",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2913,
          "end": 2931,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2914,
            "end": 2931,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2916,
              "end": 2931,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 2916,
                  "end": 2922
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 2925,
                  "end": 2931
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2933,
        "end": 2968,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2937,
            "end": 2966,
            "argument": {
              "type": "BinaryExpression",
              "start": 2944,
              "end": 2965,
              "left": {
                "type": "UnaryExpression",
                "start": 2944,
                "end": 2952,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 2951,
                  "end": 2952,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 2957,
                "end": 2965,
                "value": "string",
                "raw": "'string'"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2970,
      "end": 3008,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2982,
          "end": 3007,
          "id": {
            "type": "Identifier",
            "start": 2982,
            "end": 3007,
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2990,
              "end": 3007,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2992,
                "end": 3007,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2992,
                    "end": 2998
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 3001,
                    "end": 3007
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 3009,
      "end": 3129,
      "test": {
        "type": "CallExpression",
        "start": 3013,
        "end": 3031,
        "callee": {
          "type": "Identifier",
          "start": 3013,
          "end": 3021,
          "decorators": [],
          "name": "isString",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 3022,
            "end": 3030,
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 3033,
        "end": 3078,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3037,
            "end": 3062,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3041,
                "end": 3061,
                "id": {
                  "type": "Identifier",
                  "start": 3041,
                  "end": 3050,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3042,
                    "end": 3050,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3044,
                      "end": 3050
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 3053,
                  "end": 3061,
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 3084,
        "end": 3129,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3088,
            "end": 3113,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3092,
                "end": 3112,
                "id": {
                  "type": "Identifier",
                  "start": 3092,
                  "end": 3101,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3093,
                    "end": 3101,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3095,
                      "end": 3101
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 3104,
                  "end": 3112,
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3131,
      "end": 3232,
      "id": {
        "type": "Identifier",
        "start": 3140,
        "end": 3153,
        "decorators": [],
        "name": "flakyIsString",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 3154,
          "end": 3172,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3155,
            "end": 3172,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3157,
              "end": 3172,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 3157,
                  "end": 3163
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 3166,
                  "end": 3172
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3174,
        "end": 3232,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 3178,
            "end": 3230,
            "argument": {
              "type": "LogicalExpression",
              "start": 3185,
              "end": 3229,
              "left": {
                "type": "BinaryExpression",
                "start": 3185,
                "end": 3206,
                "left": {
                  "type": "UnaryExpression",
                  "start": 3185,
                  "end": 3193,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 3192,
                    "end": 3193,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 3198,
                  "end": 3206,
                  "value": "string",
                  "raw": "'string'"
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 3210,
                "end": 3229,
                "left": {
                  "type": "CallExpression",
                  "start": 3210,
                  "end": 3223,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3210,
                    "end": 3221,
                    "object": {
                      "type": "Identifier",
                      "start": 3210,
                      "end": 3214,
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3215,
                      "end": 3221,
                      "decorators": [],
                      "name": "random",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "operator": ">",
                "right": {
                  "type": "Literal",
                  "start": 3226,
                  "end": 3229,
                  "value": 0.5,
                  "raw": "0.5"
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "IfStatement",
      "start": 3233,
      "end": 3364,
      "test": {
        "type": "CallExpression",
        "start": 3237,
        "end": 3260,
        "callee": {
          "type": "Identifier",
          "start": 3237,
          "end": 3250,
          "decorators": [],
          "name": "flakyIsString",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 3251,
            "end": 3259,
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 3262,
        "end": 3310,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3266,
            "end": 3291,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3270,
                "end": 3290,
                "id": {
                  "type": "Identifier",
                  "start": 3270,
                  "end": 3279,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3271,
                    "end": 3279,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3273,
                      "end": 3279
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 3282,
                  "end": 3290,
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 3316,
        "end": 3364,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3320,
            "end": 3345,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3324,
                "end": 3344,
                "id": {
                  "type": "Identifier",
                  "start": 3324,
                  "end": 3333,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3325,
                    "end": 3333,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3327,
                      "end": 3333
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 3336,
                  "end": 3344,
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3366,
      "end": 3424,
      "id": {
        "type": "Identifier",
        "start": 3375,
        "end": 3381,
        "decorators": [],
        "name": "isDate",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 3382,
          "end": 3391,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3383,
            "end": 3391,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 3385,
              "end": 3391
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3393,
        "end": 3424,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 3397,
            "end": 3422,
            "argument": {
              "type": "BinaryExpression",
              "start": 3404,
              "end": 3421,
              "left": {
                "type": "Identifier",
                "start": 3404,
                "end": 3405,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 3417,
                "end": 3421,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3425,
      "end": 3511,
      "id": {
        "type": "Identifier",
        "start": 3434,
        "end": 3445,
        "decorators": [],
        "name": "flakyIsDate",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 3446,
          "end": 3455,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3447,
            "end": 3455,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 3449,
              "end": 3455
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3457,
        "end": 3511,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 3461,
            "end": 3509,
            "argument": {
              "type": "LogicalExpression",
              "start": 3468,
              "end": 3508,
              "left": {
                "type": "BinaryExpression",
                "start": 3468,
                "end": 3485,
                "left": {
                  "type": "Identifier",
                  "start": 3468,
                  "end": 3469,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 3481,
                  "end": 3485,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 3489,
                "end": 3508,
                "left": {
                  "type": "CallExpression",
                  "start": 3489,
                  "end": 3502,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3489,
                    "end": 3500,
                    "object": {
                      "type": "Identifier",
                      "start": 3489,
                      "end": 3493,
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3494,
                      "end": 3500,
                      "decorators": [],
                      "name": "random",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "operator": ">",
                "right": {
                  "type": "Literal",
                  "start": 3505,
                  "end": 3508,
                  "value": 0.5,
                  "raw": "0.5"
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3513,
      "end": 3543,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3525,
          "end": 3542,
          "id": {
            "type": "Identifier",
            "start": 3525,
            "end": 3542,
            "decorators": [],
            "name": "maybeDate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3534,
              "end": 3542,
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 3536,
                "end": 3542
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 3544,
      "end": 3663,
      "test": {
        "type": "CallExpression",
        "start": 3548,
        "end": 3565,
        "callee": {
          "type": "Identifier",
          "start": 3548,
          "end": 3554,
          "decorators": [],
          "name": "isDate",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 3555,
            "end": 3564,
            "decorators": [],
            "name": "maybeDate",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 3567,
        "end": 3611,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3571,
            "end": 3595,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3575,
                "end": 3594,
                "id": {
                  "type": "Identifier",
                  "start": 3575,
                  "end": 3582,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3576,
                    "end": 3582,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3578,
                      "end": 3582,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3578,
                        "end": 3582,
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 3585,
                  "end": 3594,
                  "decorators": [],
                  "name": "maybeDate",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 3617,
        "end": 3663,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3621,
            "end": 3647,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3625,
                "end": 3646,
                "id": {
                  "type": "Identifier",
                  "start": 3625,
                  "end": 3634,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3626,
                    "end": 3634,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 3628,
                      "end": 3634
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 3637,
                  "end": 3646,
                  "decorators": [],
                  "name": "maybeDate",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 3665,
      "end": 3792,
      "test": {
        "type": "CallExpression",
        "start": 3669,
        "end": 3691,
        "callee": {
          "type": "Identifier",
          "start": 3669,
          "end": 3680,
          "decorators": [],
          "name": "flakyIsDate",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 3681,
            "end": 3690,
            "decorators": [],
            "name": "maybeDate",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 3693,
        "end": 3740,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3697,
            "end": 3721,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3701,
                "end": 3720,
                "id": {
                  "type": "Identifier",
                  "start": 3701,
                  "end": 3708,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3702,
                    "end": 3708,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3704,
                      "end": 3708,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3704,
                        "end": 3708,
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 3711,
                  "end": 3720,
                  "decorators": [],
                  "name": "maybeDate",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 3746,
        "end": 3792,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3750,
            "end": 3776,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3754,
                "end": 3775,
                "id": {
                  "type": "Identifier",
                  "start": 3754,
                  "end": 3763,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3755,
                    "end": 3763,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 3757,
                      "end": 3763
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 3766,
                  "end": 3775,
                  "decorators": [],
                  "name": "maybeDate",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3923,
      "end": 4049,
      "id": {
        "type": "Identifier",
        "start": 3932,
        "end": 3950,
        "decorators": [],
        "name": "irrelevantIsNumber",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 3951,
          "end": 3969,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3952,
            "end": 3969,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3954,
              "end": 3969,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 3954,
                  "end": 3960
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 3963,
                  "end": 3969
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3971,
        "end": 4049,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3974,
            "end": 4015,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3974,
              "end": 4014,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3974,
                "end": 3975,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ConditionalExpression",
                "start": 3978,
                "end": 4014,
                "test": {
                  "type": "BinaryExpression",
                  "start": 3978,
                  "end": 3997,
                  "left": {
                    "type": "CallExpression",
                    "start": 3978,
                    "end": 3991,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3978,
                      "end": 3989,
                      "object": {
                        "type": "Identifier",
                        "start": 3978,
                        "end": 3982,
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3983,
                        "end": 3989,
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "start": 3994,
                    "end": 3997,
                    "value": 0.5,
                    "raw": "0.5"
                  }
                },
                "consequent": {
                  "type": "Literal",
                  "start": 4000,
                  "end": 4008,
                  "value": "string",
                  "raw": "\"string\""
                },
                "alternate": {
                  "type": "Literal",
                  "start": 4011,
                  "end": 4014,
                  "value": 123,
                  "raw": "123"
                }
              }
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 4018,
            "end": 4047,
            "argument": {
              "type": "BinaryExpression",
              "start": 4025,
              "end": 4046,
              "left": {
                "type": "UnaryExpression",
                "start": 4025,
                "end": 4033,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 4032,
                  "end": 4033,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 4038,
                "end": 4046,
                "value": "string",
                "raw": "'string'"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4050,
      "end": 4193,
      "id": {
        "type": "Identifier",
        "start": 4059,
        "end": 4090,
        "decorators": [],
        "name": "irrelevantIsNumberDestructuring",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 4091,
          "end": 4109,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4092,
            "end": 4109,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4094,
              "end": 4109,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4094,
                  "end": 4100
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4103,
                  "end": 4109
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 4111,
        "end": 4193,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 4114,
            "end": 4159,
            "expression": {
              "type": "AssignmentExpression",
              "start": 4114,
              "end": 4158,
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "start": 4114,
                "end": 4117,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 4115,
                    "end": 4116,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ArrayExpression",
                "start": 4120,
                "end": 4158,
                "elements": [
                  {
                    "type": "ConditionalExpression",
                    "start": 4121,
                    "end": 4157,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 4121,
                      "end": 4140,
                      "left": {
                        "type": "CallExpression",
                        "start": 4121,
                        "end": 4134,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 4121,
                          "end": 4132,
                          "object": {
                            "type": "Identifier",
                            "start": 4121,
                            "end": 4125,
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 4126,
                            "end": 4132,
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "start": 4137,
                        "end": 4140,
                        "value": 0.5,
                        "raw": "0.5"
                      }
                    },
                    "consequent": {
                      "type": "Literal",
                      "start": 4143,
                      "end": 4151,
                      "value": "string",
                      "raw": "\"string\""
                    },
                    "alternate": {
                      "type": "Literal",
                      "start": 4154,
                      "end": 4157,
                      "value": 123,
                      "raw": "123"
                    }
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 4162,
            "end": 4191,
            "argument": {
              "type": "BinaryExpression",
              "start": 4169,
              "end": 4190,
              "left": {
                "type": "UnaryExpression",
                "start": 4169,
                "end": 4177,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 4176,
                  "end": 4177,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 4182,
                "end": 4190,
                "value": "string",
                "raw": "'string'"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4268,
      "end": 4385,
      "id": {
        "type": "Identifier",
        "start": 4277,
        "end": 4288,
        "decorators": [],
        "name": "areBothNums",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 4289,
          "end": 4305,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4290,
            "end": 4305,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4292,
              "end": 4305,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4292,
                  "end": 4298
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4299,
                  "end": 4305
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 4307,
          "end": 4323,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4308,
            "end": 4323,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4310,
              "end": 4323,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4310,
                  "end": 4316
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4317,
                  "end": 4323
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 4325,
        "end": 4385,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 4329,
            "end": 4383,
            "argument": {
              "type": "LogicalExpression",
              "start": 4336,
              "end": 4382,
              "left": {
                "type": "BinaryExpression",
                "start": 4336,
                "end": 4357,
                "left": {
                  "type": "UnaryExpression",
                  "start": 4336,
                  "end": 4344,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 4343,
                    "end": 4344,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 4349,
                  "end": 4357,
                  "value": "number",
                  "raw": "'number'"
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 4361,
                "end": 4382,
                "left": {
                  "type": "UnaryExpression",
                  "start": 4361,
                  "end": 4369,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 4368,
                    "end": 4369,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 4374,
                  "end": 4382,
                  "value": "number",
                  "raw": "'number'"
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4471,
      "end": 4582,
      "id": {
        "type": "Identifier",
        "start": 4480,
        "end": 4492,
        "decorators": [],
        "name": "doubleReturn",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 4493,
          "end": 4509,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4494,
            "end": 4509,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4496,
              "end": 4509,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4496,
                  "end": 4502
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4503,
                  "end": 4509
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 4511,
        "end": 4582,
        "body": [
          {
            "type": "IfStatement",
            "start": 4515,
            "end": 4564,
            "test": {
              "type": "BinaryExpression",
              "start": 4519,
              "end": 4540,
              "left": {
                "type": "UnaryExpression",
                "start": 4519,
                "end": 4527,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 4526,
                  "end": 4527,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 4532,
                "end": 4540,
                "value": "string",
                "raw": "'string'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4542,
              "end": 4564,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 4548,
                  "end": 4560,
                  "argument": {
                    "type": "Literal",
                    "start": 4555,
                    "end": 4559,
                    "value": true,
                    "raw": "true"
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 4567,
            "end": 4580,
            "argument": {
              "type": "Literal",
              "start": 4574,
              "end": 4579,
              "value": false,
              "raw": "false"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4584,
      "end": 4704,
      "id": {
        "type": "Identifier",
        "start": 4593,
        "end": 4614,
        "decorators": [],
        "name": "guardsOneButNotOthers",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 4615,
          "end": 4631,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4616,
            "end": 4631,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4618,
              "end": 4631,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4618,
                  "end": 4624
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4625,
                  "end": 4631
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 4633,
          "end": 4649,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4634,
            "end": 4649,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4636,
              "end": 4649,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4636,
                  "end": 4642
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4643,
                  "end": 4649
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 4651,
          "end": 4667,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4652,
            "end": 4667,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4654,
              "end": 4667,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4654,
                  "end": 4660
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4661,
                  "end": 4667
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 4669,
        "end": 4704,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 4673,
            "end": 4702,
            "argument": {
              "type": "BinaryExpression",
              "start": 4680,
              "end": 4701,
              "left": {
                "type": "UnaryExpression",
                "start": 4680,
                "end": 4688,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 4687,
                  "end": 4688,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 4693,
                "end": 4701,
                "value": "string",
                "raw": "'string'"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4757,
      "end": 4838,
      "id": {
        "type": "Identifier",
        "start": 4766,
        "end": 4777,
        "decorators": [],
        "name": "dunderguard",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 4778,
          "end": 4798,
          "decorators": [],
          "name": "__x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4781,
            "end": 4798,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4783,
              "end": 4798,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 4783,
                  "end": 4789
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4792,
                  "end": 4798
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 4800,
        "end": 4838,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 4804,
            "end": 4836,
            "argument": {
              "type": "BinaryExpression",
              "start": 4811,
              "end": 4835,
              "left": {
                "type": "UnaryExpression",
                "start": 4811,
                "end": 4821,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 4818,
                  "end": 4821,
                  "decorators": [],
                  "name": "__x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 4827,
                "end": 4835,
                "value": "string",
                "raw": "'string'"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4907,
      "end": 4949,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4913,
          "end": 4948,
          "id": {
            "type": "Identifier",
            "start": 4913,
            "end": 4928,
            "decorators": [],
            "name": "booleanIdentity",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 4931,
            "end": 4948,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 4932,
                "end": 4942,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4933,
                  "end": 4942,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 4935,
                    "end": 4942
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 4947,
              "end": 4948,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5028,
      "end": 5101,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5034,
          "end": 5100,
          "id": {
            "type": "Identifier",
            "start": 5034,
            "end": 5046,
            "decorators": [],
            "name": "numOrBoolean",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 5049,
            "end": 5100,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 5050,
                "end": 5069,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5051,
                  "end": 5069,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 5053,
                    "end": 5069,
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 5053,
                        "end": 5059
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 5062,
                        "end": 5069
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "LogicalExpression",
              "start": 5074,
              "end": 5100,
              "left": {
                "type": "BinaryExpression",
                "start": 5074,
                "end": 5095,
                "left": {
                  "type": "UnaryExpression",
                  "start": 5074,
                  "end": 5082,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 5081,
                    "end": 5082,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 5087,
                  "end": 5095,
                  "value": "number",
                  "raw": "'number'"
                }
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "start": 5099,
                "end": 5100,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 5133,
      "end": 5206,
      "id": {
        "type": "Identifier",
        "start": 5143,
        "end": 5157,
        "decorators": [],
        "name": "NumberInferrer",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 5158,
        "end": 5206,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 5162,
            "end": 5204,
            "key": {
              "type": "Identifier",
              "start": 5162,
              "end": 5170,
              "decorators": [],
              "name": "isNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 5171,
                "end": 5189,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5172,
                  "end": 5189,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 5174,
                    "end": 5189,
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 5174,
                        "end": 5180
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 5183,
                        "end": 5189
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 5190,
              "end": 5203,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 5192,
                "end": 5203,
                "parameterName": {
                  "type": "Identifier",
                  "start": 5192,
                  "end": 5193,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5197,
                  "end": 5203,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 5197,
                    "end": 5203
                  }
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 5207,
      "end": 5336,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 5213,
        "end": 5221,
        "decorators": [],
        "name": "Inferrer",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 5233,
          "end": 5247,
          "expression": {
            "type": "Identifier",
            "start": 5233,
            "end": 5247,
            "decorators": [],
            "name": "NumberInferrer",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 5248,
        "end": 5336,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 5252,
            "end": 5334,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5252,
              "end": 5260,
              "decorators": [],
              "name": "isNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 5260,
              "end": 5334,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 5261,
                  "end": 5279,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5262,
                    "end": 5279,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 5264,
                      "end": 5279,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 5264,
                          "end": 5270
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 5273,
                          "end": 5279
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 5281,
                "end": 5334,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 5301,
                    "end": 5330,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 5308,
                      "end": 5329,
                      "left": {
                        "type": "UnaryExpression",
                        "start": 5308,
                        "end": 5316,
                        "operator": "typeof",
                        "argument": {
                          "type": "Identifier",
                          "start": 5315,
                          "end": 5316,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "prefix": true
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 5321,
                        "end": 5329,
                        "value": "number",
                        "raw": "'number'"
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5337,
      "end": 5375,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5349,
          "end": 5374,
          "id": {
            "type": "Identifier",
            "start": 5349,
            "end": 5374,
            "decorators": [],
            "name": "numOrStr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5357,
              "end": 5374,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 5359,
                "end": 5374,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 5359,
                    "end": 5365
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 5368,
                    "end": 5374
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 5376,
      "end": 5403,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5382,
          "end": 5402,
          "id": {
            "type": "Identifier",
            "start": 5382,
            "end": 5385,
            "decorators": [],
            "name": "inf",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 5388,
            "end": 5402,
            "callee": {
              "type": "Identifier",
              "start": 5392,
              "end": 5400,
              "decorators": [],
              "name": "Inferrer",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 5404,
      "end": 5528,
      "test": {
        "type": "CallExpression",
        "start": 5408,
        "end": 5430,
        "callee": {
          "type": "MemberExpression",
          "start": 5408,
          "end": 5420,
          "object": {
            "type": "Identifier",
            "start": 5408,
            "end": 5411,
            "decorators": [],
            "name": "inf",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 5412,
            "end": 5420,
            "decorators": [],
            "name": "isNumber",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 5421,
            "end": 5429,
            "decorators": [],
            "name": "numOrStr",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 5432,
        "end": 5477,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 5436,
            "end": 5461,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5440,
                "end": 5460,
                "id": {
                  "type": "Identifier",
                  "start": 5440,
                  "end": 5449,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5441,
                    "end": 5449,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 5443,
                      "end": 5449
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 5452,
                  "end": 5460,
                  "decorators": [],
                  "name": "numOrStr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 5483,
        "end": 5528,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 5487,
            "end": 5512,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5491,
                "end": 5511,
                "id": {
                  "type": "Identifier",
                  "start": 5491,
                  "end": 5500,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5492,
                    "end": 5500,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 5494,
                      "end": 5500
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 5503,
                  "end": 5511,
                  "decorators": [],
                  "name": "numOrStr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 5576,
      "end": 5634,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 5582,
        "end": 5584,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 5585,
        "end": 5634,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 5589,
            "end": 5632,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5589,
              "end": 5593,
              "decorators": [],
              "name": "isC2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 5593,
              "end": 5632,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 5596,
                "end": 5632,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 5602,
                    "end": 5628,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 5609,
                      "end": 5627,
                      "left": {
                        "type": "ThisExpression",
                        "start": 5609,
                        "end": 5613
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "start": 5625,
                        "end": 5627,
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 5635,
      "end": 5667,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 5641,
        "end": 5643,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 5652,
        "end": 5654,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 5655,
        "end": 5667,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 5659,
            "end": 5665,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5659,
              "end": 5660,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 5663,
              "end": 5664,
              "value": 0,
              "raw": "0"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5668,
      "end": 5686,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5680,
          "end": 5685,
          "id": {
            "type": "Identifier",
            "start": 5680,
            "end": 5685,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5681,
              "end": 5685,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5683,
                "end": 5685,
                "typeName": {
                  "type": "Identifier",
                  "start": 5683,
                  "end": 5685,
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 5687,
      "end": 5739,
      "test": {
        "type": "CallExpression",
        "start": 5691,
        "end": 5699,
        "callee": {
          "type": "MemberExpression",
          "start": 5691,
          "end": 5697,
          "object": {
            "type": "Identifier",
            "start": 5691,
            "end": 5692,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 5693,
            "end": 5697,
            "decorators": [],
            "name": "isC2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 5701,
        "end": 5739,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 5705,
            "end": 5720,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5709,
                "end": 5719,
                "id": {
                  "type": "Identifier",
                  "start": 5709,
                  "end": 5715,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5711,
                    "end": 5715,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5713,
                      "end": 5715,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5713,
                        "end": 5715,
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 5718,
                  "end": 5719,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 5741,
      "end": 5853,
      "id": {
        "type": "Identifier",
        "start": 5750,
        "end": 5778,
        "decorators": [],
        "name": "doNotRefineDestructuredParam",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 5779,
          "end": 5816,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 5780,
              "end": 5781,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 5780,
                "end": 5781,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 5780,
                "end": 5781,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 5783,
              "end": 5784,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 5783,
                "end": 5784,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 5783,
                "end": 5784,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5785,
            "end": 5816,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 5787,
              "end": 5816,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 5788,
                  "end": 5805,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5788,
                    "end": 5789,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5789,
                    "end": 5804,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 5791,
                      "end": 5804,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 5791,
                          "end": 5797
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 5800,
                          "end": 5804
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 5806,
                  "end": 5815,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5806,
                    "end": 5807,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5807,
                    "end": 5815,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 5809,
                      "end": 5815
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 5818,
        "end": 5853,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 5822,
            "end": 5851,
            "argument": {
              "type": "BinaryExpression",
              "start": 5829,
              "end": 5850,
              "left": {
                "type": "UnaryExpression",
                "start": 5829,
                "end": 5837,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 5836,
                  "end": 5837,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 5842,
                "end": 5850,
                "value": "number",
                "raw": "'number'"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 5938,
      "end": 6025,
      "id": {
        "type": "Identifier",
        "start": 5947,
        "end": 5960,
        "decorators": [],
        "name": "isShortString",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 5961,
          "end": 5971,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5962,
            "end": 5971,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 5964,
              "end": 5971
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 5973,
        "end": 6025,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 5977,
            "end": 6023,
            "argument": {
              "type": "LogicalExpression",
              "start": 5984,
              "end": 6022,
              "left": {
                "type": "BinaryExpression",
                "start": 5984,
                "end": 6005,
                "left": {
                  "type": "UnaryExpression",
                  "start": 5984,
                  "end": 5992,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 5991,
                    "end": 5992,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 5997,
                  "end": 6005,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 6009,
                "end": 6022,
                "left": {
                  "type": "MemberExpression",
                  "start": 6009,
                  "end": 6017,
                  "object": {
                    "type": "Identifier",
                    "start": 6009,
                    "end": 6010,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 6011,
                    "end": 6017,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "<",
                "right": {
                  "type": "Literal",
                  "start": 6020,
                  "end": 6022,
                  "value": 10,
                  "raw": "10"
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6027,
      "end": 6051,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6039,
          "end": 6050,
          "id": {
            "type": "Identifier",
            "start": 6039,
            "end": 6050,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6042,
              "end": 6050,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6044,
                "end": 6050
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 6052,
      "end": 6150,
      "test": {
        "type": "CallExpression",
        "start": 6056,
        "end": 6074,
        "callee": {
          "type": "Identifier",
          "start": 6056,
          "end": 6069,
          "decorators": [],
          "name": "isShortString",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 6070,
            "end": 6073,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 6076,
        "end": 6110,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 6080,
            "end": 6094,
            "expression": {
              "type": "CallExpression",
              "start": 6080,
              "end": 6093,
              "callee": {
                "type": "MemberExpression",
                "start": 6080,
                "end": 6090,
                "object": {
                  "type": "Identifier",
                  "start": 6080,
                  "end": 6083,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 6084,
                  "end": 6090,
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 6091,
                  "end": 6092,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 6116,
        "end": 6150,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 6120,
            "end": 6134,
            "expression": {
              "type": "CallExpression",
              "start": 6120,
              "end": 6133,
              "callee": {
                "type": "MemberExpression",
                "start": 6120,
                "end": 6130,
                "object": {
                  "type": "Identifier",
                  "start": 6120,
                  "end": 6123,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 6124,
                  "end": 6130,
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 6131,
                  "end": 6132,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 6152,
      "end": 6228,
      "id": {
        "type": "Identifier",
        "start": 6161,
        "end": 6180,
        "decorators": [],
        "name": "isStringFromUnknown",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 6181,
          "end": 6191,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6182,
            "end": 6191,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 6184,
              "end": 6191
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 6193,
        "end": 6228,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 6197,
            "end": 6226,
            "argument": {
              "type": "BinaryExpression",
              "start": 6204,
              "end": 6225,
              "left": {
                "type": "UnaryExpression",
                "start": 6204,
                "end": 6212,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 6211,
                  "end": 6212,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 6217,
                "end": 6225,
                "value": "string",
                "raw": "\"string\""
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "IfStatement",
      "start": 6229,
      "end": 6338,
      "test": {
        "type": "CallExpression",
        "start": 6233,
        "end": 6257,
        "callee": {
          "type": "Identifier",
          "start": 6233,
          "end": 6252,
          "decorators": [],
          "name": "isStringFromUnknown",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 6253,
            "end": 6256,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 6259,
        "end": 6293,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 6263,
            "end": 6277,
            "expression": {
              "type": "CallExpression",
              "start": 6263,
              "end": 6276,
              "callee": {
                "type": "MemberExpression",
                "start": 6263,
                "end": 6273,
                "object": {
                  "type": "Identifier",
                  "start": 6263,
                  "end": 6266,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 6267,
                  "end": 6273,
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 6274,
                  "end": 6275,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 6299,
        "end": 6338,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 6303,
            "end": 6322,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 6307,
                "end": 6321,
                "id": {
                  "type": "Identifier",
                  "start": 6307,
                  "end": 6315,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6308,
                    "end": 6315,
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "start": 6310,
                      "end": 6315
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 6318,
                  "end": 6321,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 6362,
      "end": 6456,
      "id": {
        "type": "Identifier",
        "start": 6371,
        "end": 6381,
        "decorators": [],
        "name": "isNumOrStr",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 6382,
          "end": 6392,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6383,
            "end": 6392,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 6385,
              "end": 6392
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 6394,
        "end": 6456,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 6398,
            "end": 6454,
            "argument": {
              "type": "LogicalExpression",
              "start": 6406,
              "end": 6452,
              "left": {
                "type": "BinaryExpression",
                "start": 6406,
                "end": 6427,
                "left": {
                  "type": "UnaryExpression",
                  "start": 6406,
                  "end": 6414,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 6413,
                    "end": 6414,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 6419,
                  "end": 6427,
                  "value": "number",
                  "raw": "\"number\""
                }
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 6431,
                "end": 6452,
                "left": {
                  "type": "UnaryExpression",
                  "start": 6431,
                  "end": 6439,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 6438,
                    "end": 6439,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 6444,
                  "end": 6452,
                  "value": "string",
                  "raw": "\"string\""
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6457,
      "end": 6482,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6469,
          "end": 6481,
          "id": {
            "type": "Identifier",
            "start": 6469,
            "end": 6481,
            "decorators": [],
            "name": "unk",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6472,
              "end": 6481,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 6474,
                "end": 6481
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 6483,
      "end": 6553,
      "test": {
        "type": "CallExpression",
        "start": 6487,
        "end": 6502,
        "callee": {
          "type": "Identifier",
          "start": 6487,
          "end": 6497,
          "decorators": [],
          "name": "isNumOrStr",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 6498,
            "end": 6501,
            "decorators": [],
            "name": "unk",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 6504,
        "end": 6553,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 6508,
            "end": 6537,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 6512,
                "end": 6536,
                "id": {
                  "type": "Identifier",
                  "start": 6512,
                  "end": 6530,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6513,
                    "end": 6530,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 6515,
                      "end": 6530,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 6515,
                          "end": 6521
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 6524,
                          "end": 6530
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 6533,
                  "end": 6536,
                  "decorators": [],
                  "name": "unk",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 6612,
      "end": 6756,
      "id": {
        "type": "Identifier",
        "start": 6621,
        "end": 6639,
        "decorators": [],
        "name": "assertAndPredicate",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 6640,
          "end": 6665,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6641,
            "end": 6665,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 6643,
              "end": 6665,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 6643,
                  "end": 6649
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 6652,
                  "end": 6658
                },
                {
                  "type": "TSTypeReference",
                  "start": 6661,
                  "end": 6665,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6661,
                    "end": 6665,
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 6667,
        "end": 6756,
        "body": [
          {
            "type": "IfStatement",
            "start": 6671,
            "end": 6722,
            "test": {
              "type": "BinaryExpression",
              "start": 6675,
              "end": 6692,
              "left": {
                "type": "Identifier",
                "start": 6675,
                "end": 6676,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 6688,
                "end": 6692,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 6694,
              "end": 6722,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 6700,
                  "end": 6718,
                  "argument": {
                    "type": "NewExpression",
                    "start": 6706,
                    "end": 6717,
                    "callee": {
                      "type": "Identifier",
                      "start": 6710,
                      "end": 6715,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 6725,
            "end": 6754,
            "argument": {
              "type": "BinaryExpression",
              "start": 6732,
              "end": 6753,
              "left": {
                "type": "UnaryExpression",
                "start": 6732,
                "end": 6740,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 6739,
                  "end": 6740,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 6745,
                "end": 6753,
                "value": "string",
                "raw": "'string'"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6758,
      "end": 6798,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6770,
          "end": 6797,
          "id": {
            "type": "Identifier",
            "start": 6770,
            "end": 6797,
            "decorators": [],
            "name": "snd",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6773,
              "end": 6797,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 6775,
                "end": 6797,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 6775,
                    "end": 6781
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 6784,
                    "end": 6790
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 6793,
                    "end": 6797,
                    "typeName": {
                      "type": "Identifier",
                      "start": 6793,
                      "end": 6797,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 6799,
      "end": 6870,
      "test": {
        "type": "CallExpression",
        "start": 6803,
        "end": 6826,
        "callee": {
          "type": "Identifier",
          "start": 6803,
          "end": 6821,
          "decorators": [],
          "name": "assertAndPredicate",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 6822,
            "end": 6825,
            "decorators": [],
            "name": "snd",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 6828,
        "end": 6870,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 6832,
            "end": 6852,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 6836,
                "end": 6851,
                "id": {
                  "type": "Identifier",
                  "start": 6836,
                  "end": 6845,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6837,
                    "end": 6845,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 6839,
                      "end": 6845
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 6848,
                  "end": 6851,
                  "decorators": [],
                  "name": "snd",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 6872,
      "end": 6965,
      "id": {
        "type": "Identifier",
        "start": 6881,
        "end": 6897,
        "decorators": [],
        "name": "isNumberWithThis",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 6898,
          "end": 6908,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6902,
            "end": 6908,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 6904,
              "end": 6908,
              "typeName": {
                "type": "Identifier",
                "start": 6904,
                "end": 6908,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 6910,
          "end": 6928,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6911,
            "end": 6928,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 6913,
              "end": 6928,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 6913,
                  "end": 6919
                },
                {
                  "type": "TSStringKeyword",
                  "start": 6922,
                  "end": 6928
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 6930,
        "end": 6965,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 6934,
            "end": 6963,
            "argument": {
              "type": "BinaryExpression",
              "start": 6941,
              "end": 6962,
              "left": {
                "type": "UnaryExpression",
                "start": 6941,
                "end": 6949,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 6948,
                  "end": 6949,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 6954,
                "end": 6962,
                "value": "number",
                "raw": "'number'"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 6967,
      "end": 7033,
      "id": {
        "type": "Identifier",
        "start": 6976,
        "end": 6989,
        "decorators": [],
        "name": "narrowFromAny",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 6990,
          "end": 6996,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6991,
            "end": 6996,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 6993,
              "end": 6996
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 6998,
        "end": 7033,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 7002,
            "end": 7031,
            "argument": {
              "type": "BinaryExpression",
              "start": 7009,
              "end": 7030,
              "left": {
                "type": "UnaryExpression",
                "start": 7009,
                "end": 7017,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 7016,
                  "end": 7017,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 7022,
                "end": 7030,
                "value": "number",
                "raw": "'number'"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 7035,
      "end": 7099,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7041,
          "end": 7098,
          "id": {
            "type": "Identifier",
            "start": 7041,
            "end": 7060,
            "decorators": [],
            "name": "noInferenceFromRest",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 7063,
            "end": 7098,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 7064,
                "end": 7081,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 7067,
                  "end": 7068,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7068,
                  "end": 7081,
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "start": 7070,
                    "end": 7081,
                    "elementTypes": [
                      {
                        "type": "TSUnionType",
                        "start": 7071,
                        "end": 7080,
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "start": 7071,
                            "end": 7074,
                            "literal": {
                              "type": "Literal",
                              "start": 7071,
                              "end": 7074,
                              "value": "a",
                              "raw": "\"a\""
                            }
                          },
                          {
                            "type": "TSLiteralType",
                            "start": 7077,
                            "end": 7080,
                            "literal": {
                              "type": "Literal",
                              "start": 7077,
                              "end": 7080,
                              "value": "b",
                              "raw": "\"b\""
                            }
                          }
                        ]
                      }
                    ]
                  }
                },
                "value": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 7086,
              "end": 7098,
              "left": {
                "type": "MemberExpression",
                "start": 7086,
                "end": 7090,
                "object": {
                  "type": "Identifier",
                  "start": 7086,
                  "end": 7087,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 7088,
                  "end": 7089,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "computed": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 7095,
                "end": 7098,
                "value": "a",
                "raw": "\"a\""
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 7100,
      "end": 7177,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7106,
          "end": 7176,
          "id": {
            "type": "Identifier",
            "start": 7106,
            "end": 7135,
            "decorators": [],
            "name": "noInferenceFromImpossibleRest",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 7138,
            "end": 7176,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 7139,
                "end": 7147,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 7142,
                  "end": 7143,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7143,
                  "end": 7147,
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "start": 7145,
                    "end": 7147,
                    "elementTypes": []
                  }
                },
                "value": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 7152,
              "end": 7176,
              "left": {
                "type": "UnaryExpression",
                "start": 7152,
                "end": 7160,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 7159,
                  "end": 7160,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 7165,
                "end": 7176,
                "value": "undefined",
                "raw": "\"undefined\""
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 7179,
      "end": 7273,
      "id": {
        "type": "Identifier",
        "start": 7188,
        "end": 7201,
        "decorators": [],
        "name": "inferWithRest",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 7202,
          "end": 7218,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 7203,
            "end": 7218,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 7205,
              "end": 7218,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 7205,
                  "end": 7211
                },
                {
                  "type": "TSNullKeyword",
                  "start": 7214,
                  "end": 7218
                }
              ]
            }
          }
        },
        {
          "type": "RestElement",
          "start": 7220,
          "end": 7236,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 7223,
            "end": 7224,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 7224,
            "end": 7236,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 7226,
              "end": 7236,
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "start": 7227,
                  "end": 7230,
                  "literal": {
                    "type": "Literal",
                    "start": 7227,
                    "end": 7230,
                    "value": "a",
                    "raw": "\"a\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 7232,
                  "end": 7235,
                  "literal": {
                    "type": "Literal",
                    "start": 7232,
                    "end": 7235,
                    "value": "b",
                    "raw": "\"b\""
                  }
                }
              ]
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 7238,
        "end": 7273,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 7242,
            "end": 7271,
            "argument": {
              "type": "BinaryExpression",
              "start": 7249,
              "end": 7270,
              "left": {
                "type": "UnaryExpression",
                "start": 7249,
                "end": 7257,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 7256,
                  "end": 7257,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 7262,
                "end": 7270,
                "value": "string",
                "raw": "'string'"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 7331,
      "end": 7419,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7345,
          "end": 7418,
          "id": {
            "type": "Identifier",
            "start": 7345,
            "end": 7418,
            "decorators": [],
            "name": "foobar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7351,
              "end": 7418,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 7355,
                "end": 7418,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 7357,
                    "end": 7385,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 7359,
                        "end": 7371,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 7359,
                          "end": 7363,
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 7363,
                          "end": 7370,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 7365,
                            "end": 7370,
                            "literal": {
                              "type": "Literal",
                              "start": 7365,
                              "end": 7370,
                              "value": "foo",
                              "raw": "\"foo\""
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 7372,
                        "end": 7383,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 7372,
                          "end": 7375,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 7375,
                          "end": 7383,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 7377,
                            "end": 7383
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 7390,
                    "end": 7418,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 7392,
                        "end": 7404,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 7392,
                          "end": 7396,
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 7396,
                          "end": 7403,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 7398,
                            "end": 7403,
                            "literal": {
                              "type": "Literal",
                              "start": 7398,
                              "end": 7403,
                              "value": "bar",
                              "raw": "\"bar\""
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 7405,
                        "end": 7416,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 7405,
                          "end": 7408,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 7408,
                          "end": 7416,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 7410,
                            "end": 7416
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 7421,
      "end": 7481,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7427,
          "end": 7480,
          "id": {
            "type": "Identifier",
            "start": 7427,
            "end": 7437,
            "decorators": [],
            "name": "foobarPred",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 7440,
            "end": 7480,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 7441,
                "end": 7458,
                "decorators": [],
                "name": "fb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 7443,
                  "end": 7458,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 7445,
                    "end": 7458,
                    "exprName": {
                      "type": "Identifier",
                      "start": 7452,
                      "end": 7458,
                      "decorators": [],
                      "name": "foobar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "start": 7463,
              "end": 7480,
              "left": {
                "type": "MemberExpression",
                "start": 7463,
                "end": 7470,
                "object": {
                  "type": "Identifier",
                  "start": 7463,
                  "end": 7465,
                  "decorators": [],
                  "name": "fb",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 7466,
                  "end": 7470,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 7475,
                "end": 7480,
                "value": "foo",
                "raw": "\"foo\""
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 7482,
      "end": 7523,
      "test": {
        "type": "CallExpression",
        "start": 7486,
        "end": 7504,
        "callee": {
          "type": "Identifier",
          "start": 7486,
          "end": 7496,
          "decorators": [],
          "name": "foobarPred",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 7497,
            "end": 7503,
            "decorators": [],
            "name": "foobar",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 7506,
        "end": 7523,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 7510,
            "end": 7521,
            "expression": {
              "type": "MemberExpression",
              "start": 7510,
              "end": 7520,
              "object": {
                "type": "Identifier",
                "start": 7510,
                "end": 7516,
                "decorators": [],
                "name": "foobar",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 7517,
                "end": 7520,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 7581,
      "end": 7678,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7587,
          "end": 7677,
          "id": {
            "type": "Identifier",
            "start": 7587,
            "end": 7609,
            "decorators": [],
            "name": "arrTest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7594,
              "end": 7609,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 7596,
                "end": 7609,
                "typeName": {
                  "type": "Identifier",
                  "start": 7596,
                  "end": 7601,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 7601,
                  "end": 7609,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7602,
                      "end": 7608
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 7612,
            "end": 7677,
            "callee": {
              "type": "MemberExpression",
              "start": 7612,
              "end": 7634,
              "object": {
                "type": "ArrayExpression",
                "start": 7612,
                "end": 7627,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 7613,
                    "end": 7614,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 7616,
                    "end": 7617,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 7619,
                    "end": 7623,
                    "value": null,
                    "raw": "null"
                  },
                  {
                    "type": "Literal",
                    "start": 7625,
                    "end": 7626,
                    "value": 3,
                    "raw": "3"
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 7628,
                "end": 7634,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 7638,
                "end": 7674,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 7639,
                    "end": 7640,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "TSSatisfiesExpression",
                  "start": 7645,
                  "end": 7674,
                  "expression": {
                    "type": "BinaryExpression",
                    "start": 7646,
                    "end": 7655,
                    "left": {
                      "type": "Identifier",
                      "start": 7646,
                      "end": 7647,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "!=",
                    "right": {
                      "type": "Literal",
                      "start": 7651,
                      "end": 7655,
                      "value": null,
                      "raw": "null"
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 7667,
                    "end": 7674
                  }
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 7680,
      "end": 7772,
      "id": {
        "type": "Identifier",
        "start": 7689,
        "end": 7702,
        "decorators": [],
        "name": "isEmptyString",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 7703,
          "end": 7713,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 7704,
            "end": 7713,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 7706,
              "end": 7713
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 7715,
        "end": 7772,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 7719,
            "end": 7739,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 7725,
                "end": 7738,
                "id": {
                  "type": "Identifier",
                  "start": 7725,
                  "end": 7727,
                  "decorators": [],
                  "name": "rv",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 7730,
                  "end": 7738,
                  "left": {
                    "type": "Identifier",
                    "start": 7730,
                    "end": 7731,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 7736,
                    "end": 7738,
                    "value": "",
                    "raw": "\"\""
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 7742,
            "end": 7770,
            "argument": {
              "type": "TSSatisfiesExpression",
              "start": 7749,
              "end": 7769,
              "expression": {
                "type": "Identifier",
                "start": 7749,
                "end": 7751,
                "decorators": [],
                "name": "rv",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 7762,
                "end": 7769
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 7830,
      "end": 7864,
      "id": {
        "type": "Identifier",
        "start": 7835,
        "end": 7841,
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 7844,
        "end": 7863,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 7848,
            "end": 7861,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 7848,
              "end": 7854,
              "decorators": [],
              "name": "breath",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7854,
              "end": 7860,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 7856,
                "end": 7860,
                "literal": {
                  "type": "Literal",
                  "start": 7856,
                  "end": 7860,
                  "value": true,
                  "raw": "true"
                }
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
      "type": "TSTypeAliasDeclaration",
      "start": 7866,
      "end": 7899,
      "id": {
        "type": "Identifier",
        "start": 7871,
        "end": 7875,
        "decorators": [],
        "name": "Rock",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 7878,
        "end": 7898,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 7882,
            "end": 7896,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 7882,
              "end": 7888,
              "decorators": [],
              "name": "breath",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7888,
              "end": 7895,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 7890,
                "end": 7895,
                "literal": {
                  "type": "Literal",
                  "start": 7890,
                  "end": 7895,
                  "value": false,
                  "raw": "false"
                }
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
      "type": "TSTypeAliasDeclaration",
      "start": 7901,
      "end": 7932,
      "id": {
        "type": "Identifier",
        "start": 7906,
        "end": 7915,
        "decorators": [],
        "name": "Something",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 7918,
        "end": 7931,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 7918,
            "end": 7924,
            "typeName": {
              "type": "Identifier",
              "start": 7918,
              "end": 7924,
              "decorators": [],
              "name": "Animal",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 7927,
            "end": 7931,
            "typeName": {
              "type": "Identifier",
              "start": 7927,
              "end": 7931,
              "decorators": [],
              "name": "Rock",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 7934,
      "end": 8024,
      "id": {
        "type": "Identifier",
        "start": 7943,
        "end": 7951,
        "decorators": [],
        "name": "isAnimal",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 7952,
          "end": 7972,
          "decorators": [],
          "name": "something",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 7961,
            "end": 7972,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 7963,
              "end": 7972,
              "typeName": {
                "type": "Identifier",
                "start": 7963,
                "end": 7972,
                "decorators": [],
                "name": "Something",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 7973,
        "end": 7994,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 7975,
          "end": 7994,
          "parameterName": {
            "type": "Identifier",
            "start": 7975,
            "end": 7984,
            "decorators": [],
            "name": "something",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 7988,
            "end": 7994,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 7988,
              "end": 7994,
              "typeName": {
                "type": "Identifier",
                "start": 7988,
                "end": 7994,
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 7995,
        "end": 8024,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 7999,
            "end": 8022,
            "argument": {
              "type": "MemberExpression",
              "start": 8006,
              "end": 8022,
              "object": {
                "type": "Identifier",
                "start": 8006,
                "end": 8015,
                "decorators": [],
                "name": "something",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8016,
                "end": 8022,
                "decorators": [],
                "name": "breath",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 8026,
      "end": 8082,
      "id": {
        "type": "Identifier",
        "start": 8035,
        "end": 8043,
        "decorators": [],
        "name": "positive",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 8044,
          "end": 8056,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 8045,
            "end": 8056,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 8047,
              "end": 8056,
              "typeName": {
                "type": "Identifier",
                "start": 8047,
                "end": 8056,
                "decorators": [],
                "name": "Something",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 8058,
        "end": 8082,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 8062,
            "end": 8080,
            "argument": {
              "type": "CallExpression",
              "start": 8069,
              "end": 8080,
              "callee": {
                "type": "Identifier",
                "start": 8069,
                "end": 8077,
                "decorators": [],
                "name": "isAnimal",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 8078,
                  "end": 8079,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 8084,
      "end": 8142,
      "id": {
        "type": "Identifier",
        "start": 8093,
        "end": 8101,
        "decorators": [],
        "name": "negative",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 8102,
          "end": 8114,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 8103,
            "end": 8114,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 8105,
              "end": 8114,
              "typeName": {
                "type": "Identifier",
                "start": 8105,
                "end": 8114,
                "decorators": [],
                "name": "Something",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 8116,
        "end": 8142,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 8121,
            "end": 8140,
            "argument": {
              "type": "UnaryExpression",
              "start": 8128,
              "end": 8140,
              "operator": "!",
              "argument": {
                "type": "CallExpression",
                "start": 8129,
                "end": 8140,
                "callee": {
                  "type": "Identifier",
                  "start": 8129,
                  "end": 8137,
                  "decorators": [],
                  "name": "isAnimal",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 8138,
                    "end": 8139,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "prefix": true
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
