__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "numsOrNull",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 73
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 77,
                "end": 78
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 80,
                "end": 81
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 83,
                "end": 84
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 86,
                "end": 87
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 89,
                "end": 93
              }
            ],
            "start": 76,
            "end": 94
          },
          "definite": false,
          "start": 63,
          "end": 94
        }
      ],
      "declare": false,
      "start": 57,
      "end": 95
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
            "name": "filteredNumsTruthy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 122,
                  "end": 128
                },
                "start": 122,
                "end": 130
              },
              "start": 120,
              "end": 130
            },
            "start": 102,
            "end": 130
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "numsOrNull",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 143
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 150
              },
              "optional": false,
              "computed": false,
              "start": 133,
              "end": 150
            },
            "typeArguments": null,
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 151,
                    "end": 152
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 158,
                      "end": 159
                    },
                    "prefix": true,
                    "start": 157,
                    "end": 159
                  },
                  "prefix": true,
                  "start": 156,
                  "end": 159
                },
                "id": null,
                "generator": false,
                "start": 151,
                "end": 159
              }
            ],
            "optional": false,
            "start": 133,
            "end": 160
          },
          "definite": false,
          "start": 102,
          "end": 160
        }
      ],
      "declare": false,
      "start": 96,
      "end": 161
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
            "name": "filteredNumsNonNullish",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 209,
                  "end": 215
                },
                "start": 209,
                "end": 217
              },
              "start": 207,
              "end": 217
            },
            "start": 185,
            "end": 217
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "numsOrNull",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 230
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 237
              },
              "optional": false,
              "computed": false,
              "start": 220,
              "end": 237
            },
            "typeArguments": null,
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 238,
                    "end": 239
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 243,
                    "end": 244
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 249,
                    "end": 253
                  },
                  "start": 243,
                  "end": 253
                },
                "id": null,
                "generator": false,
                "start": 238,
                "end": 253
              }
            ],
            "optional": false,
            "start": 220,
            "end": 254
          },
          "definite": false,
          "start": 185,
          "end": 254
        }
      ],
      "declare": false,
      "start": 179,
      "end": 255
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
            "name": "evenSquaresInline",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 296,
                  "end": 302
                },
                "start": 296,
                "end": 304
              },
              "start": 294,
              "end": 304
            },
            "start": 277,
            "end": 304
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 329,
                        "end": 330
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 332,
                        "end": 333
                      },
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 335,
                        "end": 336
                      },
                      {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 338,
                        "end": 339
                      }
                    ],
                    "start": 328,
                    "end": 340
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 350,
                    "end": 353
                  },
                  "optional": false,
                  "computed": false,
                  "start": 328,
                  "end": 353
                },
                "typeArguments": null,
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 354,
                        "end": 355
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 359,
                            "end": 360
                          },
                          "operator": "%",
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 363,
                            "end": 364
                          },
                          "start": 359,
                          "end": 364
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 369,
                          "end": 370
                        },
                        "start": 359,
                        "end": 370
                      },
                      "consequent": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 373,
                          "end": 374
                        },
                        "operator": "*",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 377,
                          "end": 378
                        },
                        "start": 373,
                        "end": 378
                      },
                      "alternate": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 381,
                        "end": 385
                      },
                      "start": 359,
                      "end": 385
                    },
                    "id": null,
                    "generator": false,
                    "start": 354,
                    "end": 385
                  }
                ],
                "optional": false,
                "start": 328,
                "end": 386
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 396,
                "end": 402
              },
              "optional": false,
              "computed": false,
              "start": 328,
              "end": 402
            },
            "typeArguments": null,
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 403,
                    "end": 404
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 410,
                      "end": 411
                    },
                    "prefix": true,
                    "start": 409,
                    "end": 411
                  },
                  "prefix": true,
                  "start": 408,
                  "end": 411
                },
                "id": null,
                "generator": false,
                "start": 403,
                "end": 411
              }
            ],
            "optional": false,
            "start": 328,
            "end": 412
          },
          "definite": false,
          "start": 277,
          "end": 412
        }
      ],
      "declare": false,
      "start": 271,
      "end": 413
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
            "name": "isTruthy",
            "optional": false,
            "typeAnnotation": null,
            "start": 462,
            "end": 470
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSUnionType",
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
                    ],
                    "start": 477,
                    "end": 490
                  },
                  "start": 475,
                  "end": 490
                },
                "start": 474,
                "end": 490
              }
            ],
            "returnType": null,
            "body": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 497,
                  "end": 498
                },
                "prefix": true,
                "start": 496,
                "end": 498
              },
              "prefix": true,
              "start": 495,
              "end": 498
            },
            "id": null,
            "generator": false,
            "start": 473,
            "end": 498
          },
          "definite": false,
          "start": 462,
          "end": 498
        }
      ],
      "declare": false,
      "start": 456,
      "end": 499
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
            "name": "evenSquares",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 520,
                  "end": 526
                },
                "start": 520,
                "end": 528
              },
              "start": 518,
              "end": 528
            },
            "start": 507,
            "end": 528
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 553,
                        "end": 554
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 556,
                        "end": 557
                      },
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 559,
                        "end": 560
                      },
                      {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 562,
                        "end": 563
                      }
                    ],
                    "start": 552,
                    "end": 564
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 570,
                    "end": 573
                  },
                  "optional": false,
                  "computed": false,
                  "start": 552,
                  "end": 573
                },
                "typeArguments": null,
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 574,
                        "end": 575
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 579,
                            "end": 580
                          },
                          "operator": "%",
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 583,
                            "end": 584
                          },
                          "start": 579,
                          "end": 584
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 589,
                          "end": 590
                        },
                        "start": 579,
                        "end": 590
                      },
                      "consequent": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 593,
                          "end": 594
                        },
                        "operator": "*",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 597,
                          "end": 598
                        },
                        "start": 593,
                        "end": 598
                      },
                      "alternate": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 601,
                        "end": 605
                      },
                      "start": 579,
                      "end": 605
                    },
                    "id": null,
                    "generator": false,
                    "start": 574,
                    "end": 605
                  }
                ],
                "optional": false,
                "start": 552,
                "end": 606
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 614,
                "end": 620
              },
              "optional": false,
              "computed": false,
              "start": 552,
              "end": 620
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isTruthy",
                "optional": false,
                "typeAnnotation": null,
                "start": 621,
                "end": 629
              }
            ],
            "optional": false,
            "start": 552,
            "end": 630
          },
          "definite": false,
          "start": 507,
          "end": 630
        }
      ],
      "declare": false,
      "start": 501,
      "end": 631
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
            "name": "evenSquaresNonNull",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 659,
                  "end": 665
                },
                "start": 659,
                "end": 667
              },
              "start": 657,
              "end": 667
            },
            "start": 639,
            "end": 667
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 689,
                        "end": 690
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 692,
                        "end": 693
                      },
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 695,
                        "end": 696
                      },
                      {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 698,
                        "end": 699
                      }
                    ],
                    "start": 688,
                    "end": 700
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 706,
                    "end": 709
                  },
                  "optional": false,
                  "computed": false,
                  "start": 688,
                  "end": 709
                },
                "typeArguments": null,
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 710,
                        "end": 711
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 715,
                            "end": 716
                          },
                          "operator": "%",
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 719,
                            "end": 720
                          },
                          "start": 715,
                          "end": 720
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 725,
                          "end": 726
                        },
                        "start": 715,
                        "end": 726
                      },
                      "consequent": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 729,
                          "end": 730
                        },
                        "operator": "*",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 733,
                          "end": 734
                        },
                        "start": 729,
                        "end": 734
                      },
                      "alternate": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 737,
                        "end": 741
                      },
                      "start": 715,
                      "end": 741
                    },
                    "id": null,
                    "generator": false,
                    "start": 710,
                    "end": 741
                  }
                ],
                "optional": false,
                "start": 688,
                "end": 742
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 748,
                "end": 754
              },
              "optional": false,
              "computed": false,
              "start": 688,
              "end": 754
            },
            "typeArguments": null,
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 755,
                    "end": 756
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 760,
                    "end": 761
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 766,
                    "end": 770
                  },
                  "start": 760,
                  "end": 770
                },
                "id": null,
                "generator": false,
                "start": 755,
                "end": 770
              }
            ],
            "optional": false,
            "start": 688,
            "end": 771
          },
          "definite": false,
          "start": 639,
          "end": 771
        }
      ],
      "declare": false,
      "start": 633,
      "end": 772
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNonNull",
        "optional": false,
        "typeAnnotation": null,
        "start": 783,
        "end": 792
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
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
              ],
              "start": 796,
              "end": 809
            },
            "start": 794,
            "end": 809
          },
          "start": 793,
          "end": 809
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 822,
                "end": 823
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 828,
                "end": 832
              },
              "start": 822,
              "end": 832
            },
            "start": 815,
            "end": 833
          }
        ],
        "start": 811,
        "end": 835
      },
      "expression": false,
      "start": 774,
      "end": 835
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNonNullVar",
        "optional": false,
        "typeAnnotation": null,
        "start": 911,
        "end": 923
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
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
              ],
              "start": 927,
              "end": 940
            },
            "start": 925,
            "end": 940
          },
          "start": 924,
          "end": 940
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
                  "name": "ok",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 952,
                  "end": 954
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 957,
                    "end": 958
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 963,
                    "end": 967
                  },
                  "start": 957,
                  "end": 967
                },
                "definite": false,
                "start": 952,
                "end": 967
              }
            ],
            "declare": false,
            "start": 946,
            "end": 968
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ok",
              "optional": false,
              "typeAnnotation": null,
              "start": 978,
              "end": 980
            },
            "start": 971,
            "end": 981
          }
        ],
        "start": 942,
        "end": 983
      },
      "expression": false,
      "start": 902,
      "end": 983
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNonNullGeneric",
        "optional": false,
        "typeAnnotation": null,
        "start": 994,
        "end": 1010
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1011,
              "end": 1012
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1011,
            "end": 1012
          }
        ],
        "start": 1010,
        "end": 1013
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 1017,
                "end": 1018
              },
              "typeArguments": null,
              "start": 1017,
              "end": 1018
            },
            "start": 1015,
            "end": 1018
          },
          "start": 1014,
          "end": 1018
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1031,
                "end": 1032
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1037,
                "end": 1041
              },
              "start": 1031,
              "end": 1041
            },
            "start": 1024,
            "end": 1042
          }
        ],
        "start": 1020,
        "end": 1044
      },
      "expression": false,
      "start": 985,
      "end": 1044
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
            "name": "myGuard",
            "optional": false,
            "typeAnnotation": null,
            "start": 1094,
            "end": 1101
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
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
                    ],
                    "start": 1108,
                    "end": 1126
                  },
                  "start": 1106,
                  "end": 1126
                },
                "start": 1105,
                "end": 1126
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1129,
                  "end": 1130
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1134,
                    "end": 1140
                  },
                  "start": 1134,
                  "end": 1140
                },
                "start": 1129,
                "end": 1140
              },
              "start": 1127,
              "end": 1140
            },
            "body": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1146,
                  "end": 1147
                },
                "prefix": true,
                "start": 1145,
                "end": 1147
              },
              "prefix": true,
              "start": 1144,
              "end": 1147
            },
            "id": null,
            "generator": false,
            "start": 1104,
            "end": 1147
          },
          "definite": false,
          "start": 1094,
          "end": 1147
        }
      ],
      "declare": false,
      "start": 1088,
      "end": 1148
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
            "name": "mySecondGuard",
            "optional": false,
            "typeAnnotation": null,
            "start": 1155,
            "end": 1168
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
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
                    ],
                    "start": 1175,
                    "end": 1193
                  },
                  "start": 1173,
                  "end": 1193
                },
                "start": 1172,
                "end": 1193
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "myGuard",
                "optional": false,
                "typeAnnotation": null,
                "start": 1198,
                "end": 1205
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1206,
                  "end": 1207
                }
              ],
              "optional": false,
              "start": 1198,
              "end": 1208
            },
            "id": null,
            "generator": false,
            "start": 1171,
            "end": 1208
          },
          "definite": false,
          "start": 1155,
          "end": 1208
        }
      ],
      "declare": false,
      "start": 1149,
      "end": 1209
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 1414,
        "end": 1419
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 1424,
              "end": 1428
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1431,
                "end": 1437
              },
              "start": 1429,
              "end": 1437
            },
            "accessibility": null,
            "static": false,
            "start": 1424,
            "end": 1437
          }
        ],
        "start": 1422,
        "end": 1439
      },
      "declare": false,
      "start": 1409,
      "end": 1440
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 1446,
        "end": 1453
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 1458,
                "end": 1462
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyObj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1465,
                      "end": 1470
                    },
                    "typeArguments": null,
                    "start": 1465,
                    "end": 1470
                  },
                  "start": 1465,
                  "end": 1472
                },
                "start": 1463,
                "end": 1472
              },
              "accessibility": null,
              "static": false,
              "start": 1458,
              "end": 1472
            }
          ],
          "start": 1456,
          "end": 1474
        },
        "start": 1456,
        "end": 1476
      },
      "declare": false,
      "start": 1441,
      "end": 1477
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
            "name": "myArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1493,
                  "end": 1500
                },
                "typeArguments": null,
                "start": 1493,
                "end": 1500
              },
              "start": 1491,
              "end": 1500
            },
            "start": 1484,
            "end": 1500
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 1503,
            "end": 1505
          },
          "definite": false,
          "start": 1484,
          "end": 1505
        }
      ],
      "declare": false,
      "start": 1478,
      "end": 1506
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
            "start": 1514,
            "end": 1520
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
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
                        "name": "myArray",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1523,
                        "end": 1530
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "map",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1534,
                        "end": 1537
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1523,
                      "end": 1537
                    },
                    "typeArguments": null,
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
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1539,
                            "end": 1542
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1547,
                            "end": 1550
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "list",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1551,
                            "end": 1555
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1547,
                          "end": 1555
                        },
                        "id": null,
                        "generator": false,
                        "start": 1538,
                        "end": 1555
                      }
                    ],
                    "optional": false,
                    "start": 1523,
                    "end": 1556
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1560,
                    "end": 1566
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1523,
                  "end": 1566
                },
                "typeArguments": null,
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
                        "name": "arr",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1568,
                        "end": 1571
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arr",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1576,
                        "end": 1579
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arr",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1583,
                          "end": 1586
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1587,
                          "end": 1593
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1583,
                        "end": 1593
                      },
                      "start": 1576,
                      "end": 1593
                    },
                    "id": null,
                    "generator": false,
                    "start": 1567,
                    "end": 1593
                  }
                ],
                "optional": false,
                "start": 1523,
                "end": 1594
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 1598,
                "end": 1601
              },
              "optional": false,
              "computed": false,
              "start": 1523,
              "end": 1601
            },
            "typeArguments": null,
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
                    "name": "arr",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1603,
                    "end": 1606
                  }
                ],
                "returnType": null,
                "body": {
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
                          "name": "arr",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1611,
                          "end": 1614
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "filter",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1636,
                          "end": 1642
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1611,
                        "end": 1642
                      },
                      "typeArguments": null,
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
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1644,
                              "end": 1647
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1652,
                              "end": 1655
                            },
                            "operator": "&&",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1659,
                                "end": 1662
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "data",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1663,
                                "end": 1667
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1659,
                              "end": 1667
                            },
                            "start": 1652,
                            "end": 1667
                          },
                          "id": null,
                          "generator": false,
                          "start": 1643,
                          "end": 1667
                        }
                      ],
                      "optional": false,
                      "start": 1611,
                      "end": 1668
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1674,
                      "end": 1677
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1611,
                    "end": 1677
                  },
                  "typeArguments": null,
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
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1678,
                          "end": 1681
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "JSON",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1685,
                            "end": 1689
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "parse",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1690,
                            "end": 1695
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1685,
                          "end": 1695
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1696,
                              "end": 1699
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1700,
                              "end": 1704
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1696,
                            "end": 1704
                          }
                        ],
                        "optional": false,
                        "start": 1685,
                        "end": 1705
                      },
                      "id": null,
                      "generator": false,
                      "start": 1678,
                      "end": 1705
                    }
                  ],
                  "optional": false,
                  "start": 1611,
                  "end": 1706
                },
                "id": null,
                "generator": false,
                "start": 1602,
                "end": 1706
              }
            ],
            "optional": false,
            "start": 1523,
            "end": 1727
          },
          "definite": false,
          "start": 1514,
          "end": 1727
        }
      ],
      "declare": false,
      "start": 1508,
      "end": 1728
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
            "name": "result2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1736,
            "end": 1743
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
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
                            "name": "myArray",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1746,
                            "end": 1753
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "map",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1757,
                            "end": 1760
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1746,
                          "end": 1760
                        },
                        "typeArguments": null,
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
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1762,
                                "end": 1765
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1770,
                                "end": 1773
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "list",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1774,
                                "end": 1778
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1770,
                              "end": 1778
                            },
                            "id": null,
                            "generator": false,
                            "start": 1761,
                            "end": 1778
                          }
                        ],
                        "optional": false,
                        "start": 1746,
                        "end": 1779
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "filter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1783,
                        "end": 1789
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1746,
                      "end": 1789
                    },
                    "typeArguments": null,
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
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1791,
                            "end": 1794
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arr",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1801,
                              "end": 1804
                            },
                            "prefix": true,
                            "start": 1800,
                            "end": 1804
                          },
                          "prefix": true,
                          "start": 1799,
                          "end": 1804
                        },
                        "id": null,
                        "generator": false,
                        "start": 1790,
                        "end": 1804
                      }
                    ],
                    "optional": false,
                    "start": 1746,
                    "end": 1805
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1809,
                    "end": 1815
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1746,
                  "end": 1815
                },
                "typeArguments": null,
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
                        "name": "arr",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1816,
                        "end": 1819
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arr",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1823,
                        "end": 1826
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1827,
                        "end": 1833
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1823,
                      "end": 1833
                    },
                    "id": null,
                    "generator": false,
                    "start": 1816,
                    "end": 1833
                  }
                ],
                "optional": false,
                "start": 1746,
                "end": 1834
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 1838,
                "end": 1841
              },
              "optional": false,
              "computed": false,
              "start": 1746,
              "end": 1841
            },
            "typeArguments": null,
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
                    "name": "arr",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1843,
                    "end": 1846
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
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
                              "name": "arr",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1851,
                              "end": 1854
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "filter",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1874,
                              "end": 1880
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1851,
                            "end": 1880
                          },
                          "typeArguments": null,
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
                                  "name": "obj",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1882,
                                  "end": 1885
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1890,
                                "end": 1893
                              },
                              "id": null,
                              "generator": false,
                              "start": 1881,
                              "end": 1893
                            }
                          ],
                          "optional": false,
                          "start": 1851,
                          "end": 1894
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "filter",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1997,
                          "end": 2003
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1851,
                        "end": 2003
                      },
                      "typeArguments": null,
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
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2004,
                              "end": 2007
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2013,
                                  "end": 2016
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "data",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2017,
                                  "end": 2021
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2013,
                                "end": 2021
                              },
                              "prefix": true,
                              "start": 2012,
                              "end": 2021
                            },
                            "prefix": true,
                            "start": 2011,
                            "end": 2021
                          },
                          "id": null,
                          "generator": false,
                          "start": 2004,
                          "end": 2021
                        }
                      ],
                      "optional": false,
                      "start": 1851,
                      "end": 2022
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2028,
                      "end": 2031
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1851,
                    "end": 2031
                  },
                  "typeArguments": null,
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
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2032,
                          "end": 2035
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "JSON",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2039,
                            "end": 2043
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "parse",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2044,
                            "end": 2049
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2039,
                          "end": 2049
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2050,
                              "end": 2053
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2054,
                              "end": 2058
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2050,
                            "end": 2058
                          }
                        ],
                        "optional": false,
                        "start": 2039,
                        "end": 2059
                      },
                      "id": null,
                      "generator": false,
                      "start": 2032,
                      "end": 2059
                    }
                  ],
                  "optional": false,
                  "start": 1851,
                  "end": 2060
                },
                "id": null,
                "generator": false,
                "start": 1842,
                "end": 2060
              }
            ],
            "optional": false,
            "start": 1746,
            "end": 2064
          },
          "definite": false,
          "start": 1736,
          "end": 2064
        }
      ],
      "declare": false,
      "start": 1730,
      "end": 2065
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 2152,
        "end": 2155
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2162,
              "end": 2165
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2167,
                "end": 2173
              },
              "start": 2165,
              "end": 2173
            },
            "accessibility": null,
            "static": false,
            "start": 2162,
            "end": 2174
          }
        ],
        "start": 2158,
        "end": 2176
      },
      "declare": false,
      "start": 2147,
      "end": 2176
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 2182,
        "end": 2185
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2188,
              "end": 2191
            },
            "typeArguments": null,
            "start": 2188,
            "end": 2191
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
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2198,
                  "end": 2201
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2203,
                    "end": 2209
                  },
                  "start": 2201,
                  "end": 2209
                },
                "accessibility": null,
                "static": false,
                "start": 2198,
                "end": 2210
              }
            ],
            "start": 2194,
            "end": 2212
          }
        ],
        "start": 2188,
        "end": 2212
      },
      "declare": false,
      "start": 2177,
      "end": 2212
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
            "name": "list",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2227,
                        "end": 2230
                      },
                      "typeArguments": null,
                      "start": 2227,
                      "end": 2230
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2233,
                        "end": 2236
                      },
                      "typeArguments": null,
                      "start": 2233,
                      "end": 2236
                    }
                  ],
                  "start": 2227,
                  "end": 2236
                },
                "start": 2226,
                "end": 2239
              },
              "start": 2224,
              "end": 2239
            },
            "start": 2220,
            "end": 2239
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 2242,
            "end": 2244
          },
          "definite": false,
          "start": 2220,
          "end": 2244
        }
      ],
      "declare": false,
      "start": 2214,
      "end": 2245
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
            "name": "resultBars",
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
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2264,
                    "end": 2267
                  },
                  "typeArguments": null,
                  "start": 2264,
                  "end": 2267
                },
                "start": 2264,
                "end": 2269
              },
              "start": 2262,
              "end": 2269
            },
            "start": 2252,
            "end": 2269
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 2272,
                "end": 2276
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 2277,
                "end": 2283
              },
              "optional": false,
              "computed": false,
              "start": 2272,
              "end": 2283
            },
            "typeArguments": null,
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2285,
                    "end": 2290
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 2295,
                    "end": 2300
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2304,
                    "end": 2309
                  },
                  "start": 2295,
                  "end": 2309
                },
                "id": null,
                "generator": false,
                "start": 2284,
                "end": 2309
              }
            ],
            "optional": false,
            "start": 2272,
            "end": 2310
          },
          "definite": false,
          "start": 2252,
          "end": 2310
        }
      ],
      "declare": false,
      "start": 2246,
      "end": 2311
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isBarNonNull",
        "optional": false,
        "typeAnnotation": null,
        "start": 2336,
        "end": 2348
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2352,
                    "end": 2355
                  },
                  "typeArguments": null,
                  "start": 2352,
                  "end": 2355
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2358,
                    "end": 2361
                  },
                  "typeArguments": null,
                  "start": 2358,
                  "end": 2361
                },
                {
                  "type": "TSNullKeyword",
                  "start": 2364,
                  "end": 2368
                }
              ],
              "start": 2352,
              "end": 2368
            },
            "start": 2350,
            "end": 2368
          },
          "start": 2349,
          "end": 2368
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "bar",
                "raw": "'bar'",
                "start": 2382,
                "end": 2387
              },
              "operator": "in",
              "right": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2391,
                  "end": 2392
                },
                "start": 2391,
                "end": 2393
              },
              "start": 2382,
              "end": 2393
            },
            "start": 2374,
            "end": 2395
          }
        ],
        "start": 2370,
        "end": 2397
      },
      "expression": false,
      "start": 2327,
      "end": 2397
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
            "name": "fooOrBar",
            "optional": false,
            "typeAnnotation": null,
            "start": 2404,
            "end": 2412
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "list",
              "optional": false,
              "typeAnnotation": null,
              "start": 2415,
              "end": 2419
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2420,
              "end": 2421
            },
            "optional": false,
            "computed": true,
            "start": 2415,
            "end": 2422
          },
          "definite": false,
          "start": 2404,
          "end": 2422
        }
      ],
      "declare": false,
      "start": 2398,
      "end": 2423
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isBarNonNull",
          "optional": false,
          "typeAnnotation": null,
          "start": 2428,
          "end": 2440
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fooOrBar",
            "optional": false,
            "typeAnnotation": null,
            "start": 2441,
            "end": 2449
          }
        ],
        "optional": false,
        "start": 2428,
        "end": 2450
      },
      "consequent": {
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2465,
                        "end": 2468
                      },
                      "typeArguments": null,
                      "start": 2465,
                      "end": 2468
                    },
                    "start": 2463,
                    "end": 2468
                  },
                  "start": 2462,
                  "end": 2468
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fooOrBar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2471,
                  "end": 2479
                },
                "definite": false,
                "start": 2462,
                "end": 2479
              }
            ],
            "declare": false,
            "start": 2456,
            "end": 2480
          }
        ],
        "start": 2452,
        "end": 2496
      },
      "alternate": null,
      "start": 2424,
      "end": 2496
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2620,
            "end": 2621
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2625,
                    "end": 2626
                  },
                  {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 2628,
                    "end": 2633
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 2635,
                    "end": 2636
                  },
                  {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 2638,
                    "end": 2643
                  }
                ],
                "start": 2624,
                "end": 2644
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 2645,
                "end": 2651
              },
              "optional": false,
              "computed": false,
              "start": 2624,
              "end": 2651
            },
            "typeArguments": null,
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2652,
                    "end": 2653
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2664,
                      "end": 2665
                    },
                    "prefix": true,
                    "start": 2657,
                    "end": 2665
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 2670,
                    "end": 2678
                  },
                  "start": 2657,
                  "end": 2678
                },
                "id": null,
                "generator": false,
                "start": 2652,
                "end": 2678
              }
            ],
            "optional": false,
            "start": 2624,
            "end": 2679
          },
          "definite": false,
          "start": 2620,
          "end": 2679
        }
      ],
      "declare": false,
      "start": 2614,
      "end": 2680
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2681,
            "end": 2682
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 2683,
            "end": 2687
          },
          "optional": false,
          "computed": false,
          "start": 2681,
          "end": 2687
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 2688,
            "end": 2690
          }
        ],
        "optional": false,
        "start": 2681,
        "end": 2691
      },
      "directive": null,
      "start": 2681,
      "end": 2692
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "backwardsGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 2766,
        "end": 2780
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
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
              ],
              "start": 2784,
              "end": 2797
            },
            "start": 2782,
            "end": 2797
          },
          "start": 2781,
          "end": 2797
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 2800,
            "end": 2801
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2805,
              "end": 2811
            },
            "start": 2805,
            "end": 2811
          },
          "start": 2800,
          "end": 2811
        },
        "start": 2798,
        "end": 2811
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2830,
                  "end": 2831
                },
                "prefix": true,
                "start": 2823,
                "end": 2831
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 2836,
                "end": 2844
              },
              "start": 2823,
              "end": 2844
            },
            "start": 2816,
            "end": 2845
          }
        ],
        "start": 2812,
        "end": 2847
      },
      "expression": false,
      "start": 2757,
      "end": 2847
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isString",
        "optional": false,
        "typeAnnotation": null,
        "start": 2904,
        "end": 2912
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
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
              ],
              "start": 2916,
              "end": 2931
            },
            "start": 2914,
            "end": 2931
          },
          "start": 2913,
          "end": 2931
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2951,
                  "end": 2952
                },
                "prefix": true,
                "start": 2944,
                "end": 2952
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 2957,
                "end": 2965
              },
              "start": 2944,
              "end": 2965
            },
            "start": 2937,
            "end": 2966
          }
        ],
        "start": 2933,
        "end": 2968
      },
      "expression": false,
      "start": 2895,
      "end": 2968
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 2992,
                "end": 3007
              },
              "start": 2990,
              "end": 3007
            },
            "start": 2982,
            "end": 3007
          },
          "init": null,
          "definite": false,
          "start": 2982,
          "end": 3007
        }
      ],
      "declare": true,
      "start": 2970,
      "end": 3008
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isString",
          "optional": false,
          "typeAnnotation": null,
          "start": 3013,
          "end": 3021
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 3022,
            "end": 3030
          }
        ],
        "optional": false,
        "start": 3013,
        "end": 3031
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3044,
                      "end": 3050
                    },
                    "start": 3042,
                    "end": 3050
                  },
                  "start": 3041,
                  "end": 3050
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3053,
                  "end": 3061
                },
                "definite": false,
                "start": 3041,
                "end": 3061
              }
            ],
            "declare": false,
            "start": 3037,
            "end": 3062
          }
        ],
        "start": 3033,
        "end": 3078
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3095,
                      "end": 3101
                    },
                    "start": 3093,
                    "end": 3101
                  },
                  "start": 3092,
                  "end": 3101
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3104,
                  "end": 3112
                },
                "definite": false,
                "start": 3092,
                "end": 3112
              }
            ],
            "declare": false,
            "start": 3088,
            "end": 3113
          }
        ],
        "start": 3084,
        "end": 3129
      },
      "start": 3009,
      "end": 3129
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "flakyIsString",
        "optional": false,
        "typeAnnotation": null,
        "start": 3140,
        "end": 3153
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
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
              ],
              "start": 3157,
              "end": 3172
            },
            "start": 3155,
            "end": 3172
          },
          "start": 3154,
          "end": 3172
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3192,
                    "end": 3193
                  },
                  "prefix": true,
                  "start": 3185,
                  "end": 3193
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 3198,
                  "end": 3206
                },
                "start": 3185,
                "end": 3206
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3210,
                      "end": 3214
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "random",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3215,
                      "end": 3221
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3210,
                    "end": 3221
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 3210,
                  "end": 3223
                },
                "operator": ">",
                "right": {
                  "type": "Literal",
                  "value": 0.5,
                  "raw": "0.5",
                  "start": 3226,
                  "end": 3229
                },
                "start": 3210,
                "end": 3229
              },
              "start": 3185,
              "end": 3229
            },
            "start": 3178,
            "end": 3230
          }
        ],
        "start": 3174,
        "end": 3232
      },
      "expression": false,
      "start": 3131,
      "end": 3232
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "flakyIsString",
          "optional": false,
          "typeAnnotation": null,
          "start": 3237,
          "end": 3250
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 3251,
            "end": 3259
          }
        ],
        "optional": false,
        "start": 3237,
        "end": 3260
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3273,
                      "end": 3279
                    },
                    "start": 3271,
                    "end": 3279
                  },
                  "start": 3270,
                  "end": 3279
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3282,
                  "end": 3290
                },
                "definite": false,
                "start": 3270,
                "end": 3290
              }
            ],
            "declare": false,
            "start": 3266,
            "end": 3291
          }
        ],
        "start": 3262,
        "end": 3310
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3327,
                      "end": 3333
                    },
                    "start": 3325,
                    "end": 3333
                  },
                  "start": 3324,
                  "end": 3333
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3336,
                  "end": 3344
                },
                "definite": false,
                "start": 3324,
                "end": 3344
              }
            ],
            "declare": false,
            "start": 3320,
            "end": 3345
          }
        ],
        "start": 3316,
        "end": 3364
      },
      "start": 3233,
      "end": 3364
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isDate",
        "optional": false,
        "typeAnnotation": null,
        "start": 3375,
        "end": 3381
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSObjectKeyword",
              "start": 3385,
              "end": 3391
            },
            "start": 3383,
            "end": 3391
          },
          "start": 3382,
          "end": 3391
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3404,
                "end": 3405
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 3417,
                "end": 3421
              },
              "start": 3404,
              "end": 3421
            },
            "start": 3397,
            "end": 3422
          }
        ],
        "start": 3393,
        "end": 3424
      },
      "expression": false,
      "start": 3366,
      "end": 3424
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "flakyIsDate",
        "optional": false,
        "typeAnnotation": null,
        "start": 3434,
        "end": 3445
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSObjectKeyword",
              "start": 3449,
              "end": 3455
            },
            "start": 3447,
            "end": 3455
          },
          "start": 3446,
          "end": 3455
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3468,
                  "end": 3469
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3481,
                  "end": 3485
                },
                "start": 3468,
                "end": 3485
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3489,
                      "end": 3493
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "random",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3494,
                      "end": 3500
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3489,
                    "end": 3500
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 3489,
                  "end": 3502
                },
                "operator": ">",
                "right": {
                  "type": "Literal",
                  "value": 0.5,
                  "raw": "0.5",
                  "start": 3505,
                  "end": 3508
                },
                "start": 3489,
                "end": 3508
              },
              "start": 3468,
              "end": 3508
            },
            "start": 3461,
            "end": 3509
          }
        ],
        "start": 3457,
        "end": 3511
      },
      "expression": false,
      "start": 3425,
      "end": 3511
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
            "name": "maybeDate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 3536,
                "end": 3542
              },
              "start": 3534,
              "end": 3542
            },
            "start": 3525,
            "end": 3542
          },
          "init": null,
          "definite": false,
          "start": 3525,
          "end": 3542
        }
      ],
      "declare": true,
      "start": 3513,
      "end": 3543
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isDate",
          "optional": false,
          "typeAnnotation": null,
          "start": 3548,
          "end": 3554
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "maybeDate",
            "optional": false,
            "typeAnnotation": null,
            "start": 3555,
            "end": 3564
          }
        ],
        "optional": false,
        "start": 3548,
        "end": 3565
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
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
                        "start": 3578,
                        "end": 3582
                      },
                      "typeArguments": null,
                      "start": 3578,
                      "end": 3582
                    },
                    "start": 3576,
                    "end": 3582
                  },
                  "start": 3575,
                  "end": 3582
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "maybeDate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3585,
                  "end": 3594
                },
                "definite": false,
                "start": 3575,
                "end": 3594
              }
            ],
            "declare": false,
            "start": 3571,
            "end": 3595
          }
        ],
        "start": 3567,
        "end": 3611
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 3628,
                      "end": 3634
                    },
                    "start": 3626,
                    "end": 3634
                  },
                  "start": 3625,
                  "end": 3634
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "maybeDate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3637,
                  "end": 3646
                },
                "definite": false,
                "start": 3625,
                "end": 3646
              }
            ],
            "declare": false,
            "start": 3621,
            "end": 3647
          }
        ],
        "start": 3617,
        "end": 3663
      },
      "start": 3544,
      "end": 3663
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "flakyIsDate",
          "optional": false,
          "typeAnnotation": null,
          "start": 3669,
          "end": 3680
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "maybeDate",
            "optional": false,
            "typeAnnotation": null,
            "start": 3681,
            "end": 3690
          }
        ],
        "optional": false,
        "start": 3669,
        "end": 3691
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
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
                        "start": 3704,
                        "end": 3708
                      },
                      "typeArguments": null,
                      "start": 3704,
                      "end": 3708
                    },
                    "start": 3702,
                    "end": 3708
                  },
                  "start": 3701,
                  "end": 3708
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "maybeDate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3711,
                  "end": 3720
                },
                "definite": false,
                "start": 3701,
                "end": 3720
              }
            ],
            "declare": false,
            "start": 3697,
            "end": 3721
          }
        ],
        "start": 3693,
        "end": 3740
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 3757,
                      "end": 3763
                    },
                    "start": 3755,
                    "end": 3763
                  },
                  "start": 3754,
                  "end": 3763
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "maybeDate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3766,
                  "end": 3775
                },
                "definite": false,
                "start": 3754,
                "end": 3775
              }
            ],
            "declare": false,
            "start": 3750,
            "end": 3776
          }
        ],
        "start": 3746,
        "end": 3792
      },
      "start": 3665,
      "end": 3792
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "irrelevantIsNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 3932,
        "end": 3950
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
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
              ],
              "start": 3954,
              "end": 3969
            },
            "start": 3952,
            "end": 3969
          },
          "start": 3951,
          "end": 3969
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3974,
                "end": 3975
              },
              "right": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3978,
                        "end": 3982
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3983,
                        "end": 3989
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3978,
                      "end": 3989
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 3978,
                    "end": 3991
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "value": 0.5,
                    "raw": "0.5",
                    "start": 3994,
                    "end": 3997
                  },
                  "start": 3978,
                  "end": 3997
                },
                "consequent": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 4000,
                  "end": 4008
                },
                "alternate": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 4011,
                  "end": 4014
                },
                "start": 3978,
                "end": 4014
              },
              "start": 3974,
              "end": 4014
            },
            "directive": null,
            "start": 3974,
            "end": 4015
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4032,
                  "end": 4033
                },
                "prefix": true,
                "start": 4025,
                "end": 4033
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 4038,
                "end": 4046
              },
              "start": 4025,
              "end": 4046
            },
            "start": 4018,
            "end": 4047
          }
        ],
        "start": 3971,
        "end": 4049
      },
      "expression": false,
      "start": 3923,
      "end": 4049
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "irrelevantIsNumberDestructuring",
        "optional": false,
        "typeAnnotation": null,
        "start": 4059,
        "end": 4090
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
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
              ],
              "start": 4094,
              "end": 4109
            },
            "start": 4092,
            "end": 4109
          },
          "start": 4091,
          "end": 4109
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
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4115,
                    "end": 4116
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 4114,
                "end": 4117
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4121,
                            "end": 4125
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4126,
                            "end": 4132
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4121,
                          "end": 4132
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 4121,
                        "end": 4134
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 0.5,
                        "raw": "0.5",
                        "start": 4137,
                        "end": 4140
                      },
                      "start": 4121,
                      "end": 4140
                    },
                    "consequent": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 4143,
                      "end": 4151
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": 123,
                      "raw": "123",
                      "start": 4154,
                      "end": 4157
                    },
                    "start": 4121,
                    "end": 4157
                  }
                ],
                "start": 4120,
                "end": 4158
              },
              "start": 4114,
              "end": 4158
            },
            "directive": null,
            "start": 4114,
            "end": 4159
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4176,
                  "end": 4177
                },
                "prefix": true,
                "start": 4169,
                "end": 4177
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 4182,
                "end": 4190
              },
              "start": 4169,
              "end": 4190
            },
            "start": 4162,
            "end": 4191
          }
        ],
        "start": 4111,
        "end": 4193
      },
      "expression": false,
      "start": 4050,
      "end": 4193
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "areBothNums",
        "optional": false,
        "typeAnnotation": null,
        "start": 4277,
        "end": 4288
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
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
              ],
              "start": 4292,
              "end": 4305
            },
            "start": 4290,
            "end": 4305
          },
          "start": 4289,
          "end": 4305
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 4310,
              "end": 4323
            },
            "start": 4308,
            "end": 4323
          },
          "start": 4307,
          "end": 4323
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4343,
                    "end": 4344
                  },
                  "prefix": true,
                  "start": 4336,
                  "end": 4344
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 4349,
                  "end": 4357
                },
                "start": 4336,
                "end": 4357
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4368,
                    "end": 4369
                  },
                  "prefix": true,
                  "start": 4361,
                  "end": 4369
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 4374,
                  "end": 4382
                },
                "start": 4361,
                "end": 4382
              },
              "start": 4336,
              "end": 4382
            },
            "start": 4329,
            "end": 4383
          }
        ],
        "start": 4325,
        "end": 4385
      },
      "expression": false,
      "start": 4268,
      "end": 4385
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doubleReturn",
        "optional": false,
        "typeAnnotation": null,
        "start": 4480,
        "end": 4492
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
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
              ],
              "start": 4496,
              "end": 4509
            },
            "start": 4494,
            "end": 4509
          },
          "start": 4493,
          "end": 4509
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4526,
                  "end": 4527
                },
                "prefix": true,
                "start": 4519,
                "end": 4527
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 4532,
                "end": 4540
              },
              "start": 4519,
              "end": 4540
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 4555,
                    "end": 4559
                  },
                  "start": 4548,
                  "end": 4560
                }
              ],
              "start": 4542,
              "end": 4564
            },
            "alternate": null,
            "start": 4515,
            "end": 4564
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 4574,
              "end": 4579
            },
            "start": 4567,
            "end": 4580
          }
        ],
        "start": 4511,
        "end": 4582
      },
      "expression": false,
      "start": 4471,
      "end": 4582
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "guardsOneButNotOthers",
        "optional": false,
        "typeAnnotation": null,
        "start": 4593,
        "end": 4614
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
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
              ],
              "start": 4618,
              "end": 4631
            },
            "start": 4616,
            "end": 4631
          },
          "start": 4615,
          "end": 4631
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 4636,
              "end": 4649
            },
            "start": 4634,
            "end": 4649
          },
          "start": 4633,
          "end": 4649
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 4654,
              "end": 4667
            },
            "start": 4652,
            "end": 4667
          },
          "start": 4651,
          "end": 4667
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4687,
                  "end": 4688
                },
                "prefix": true,
                "start": 4680,
                "end": 4688
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 4693,
                "end": 4701
              },
              "start": 4680,
              "end": 4701
            },
            "start": 4673,
            "end": 4702
          }
        ],
        "start": 4669,
        "end": 4704
      },
      "expression": false,
      "start": 4584,
      "end": 4704
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "dunderguard",
        "optional": false,
        "typeAnnotation": null,
        "start": 4766,
        "end": 4777
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "__x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 4783,
              "end": 4798
            },
            "start": 4781,
            "end": 4798
          },
          "start": 4778,
          "end": 4798
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "__x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4818,
                  "end": 4821
                },
                "prefix": true,
                "start": 4811,
                "end": 4821
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 4827,
                "end": 4835
              },
              "start": 4811,
              "end": 4835
            },
            "start": 4804,
            "end": 4836
          }
        ],
        "start": 4800,
        "end": 4838
      },
      "expression": false,
      "start": 4757,
      "end": 4838
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
            "name": "booleanIdentity",
            "optional": false,
            "typeAnnotation": null,
            "start": 4913,
            "end": 4928
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSBooleanKeyword",
                    "start": 4935,
                    "end": 4942
                  },
                  "start": 4933,
                  "end": 4942
                },
                "start": 4932,
                "end": 4942
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 4947,
              "end": 4948
            },
            "id": null,
            "generator": false,
            "start": 4931,
            "end": 4948
          },
          "definite": false,
          "start": 4913,
          "end": 4948
        }
      ],
      "declare": false,
      "start": 4907,
      "end": 4949
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
            "name": "numOrBoolean",
            "optional": false,
            "typeAnnotation": null,
            "start": 5034,
            "end": 5046
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSUnionType",
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
                    ],
                    "start": 5053,
                    "end": 5069
                  },
                  "start": 5051,
                  "end": 5069
                },
                "start": 5050,
                "end": 5069
              }
            ],
            "returnType": null,
            "body": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5081,
                    "end": 5082
                  },
                  "prefix": true,
                  "start": 5074,
                  "end": 5082
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 5087,
                  "end": 5095
                },
                "start": 5074,
                "end": 5095
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 5099,
                "end": 5100
              },
              "start": 5074,
              "end": 5100
            },
            "id": null,
            "generator": false,
            "start": 5049,
            "end": 5100
          },
          "definite": false,
          "start": 5034,
          "end": 5100
        }
      ],
      "declare": false,
      "start": 5028,
      "end": 5101
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumberInferrer",
        "optional": false,
        "typeAnnotation": null,
        "start": 5143,
        "end": 5157
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 5162,
              "end": 5170
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSUnionType",
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
                    ],
                    "start": 5174,
                    "end": 5189
                  },
                  "start": 5172,
                  "end": 5189
                },
                "start": 5171,
                "end": 5189
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5192,
                  "end": 5193
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 5197,
                    "end": 5203
                  },
                  "start": 5197,
                  "end": 5203
                },
                "start": 5192,
                "end": 5203
              },
              "start": 5190,
              "end": 5203
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 5162,
            "end": 5204
          }
        ],
        "start": 5158,
        "end": 5206
      },
      "declare": false,
      "start": 5133,
      "end": 5206
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Inferrer",
        "optional": false,
        "typeAnnotation": null,
        "start": 5213,
        "end": 5221
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberInferrer",
            "optional": false,
            "typeAnnotation": null,
            "start": 5233,
            "end": 5247
          },
          "typeArguments": null,
          "start": 5233,
          "end": 5247
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 5252,
              "end": 5260
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "type": "TSUnionType",
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
                      ],
                      "start": 5264,
                      "end": 5279
                    },
                    "start": 5262,
                    "end": 5279
                  },
                  "start": 5261,
                  "end": 5279
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "typeof",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5315,
                          "end": 5316
                        },
                        "prefix": true,
                        "start": 5308,
                        "end": 5316
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "number",
                        "raw": "'number'",
                        "start": 5321,
                        "end": 5329
                      },
                      "start": 5308,
                      "end": 5329
                    },
                    "start": 5301,
                    "end": 5330
                  }
                ],
                "start": 5281,
                "end": 5334
              },
              "expression": false,
              "start": 5260,
              "end": 5334
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5252,
            "end": 5334
          }
        ],
        "start": 5248,
        "end": 5336
      },
      "abstract": false,
      "declare": false,
      "start": 5207,
      "end": 5336
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
            "name": "numOrStr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 5359,
                "end": 5374
              },
              "start": 5357,
              "end": 5374
            },
            "start": 5349,
            "end": 5374
          },
          "init": null,
          "definite": false,
          "start": 5349,
          "end": 5374
        }
      ],
      "declare": true,
      "start": 5337,
      "end": 5375
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
            "name": "inf",
            "optional": false,
            "typeAnnotation": null,
            "start": 5382,
            "end": 5385
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Inferrer",
              "optional": false,
              "typeAnnotation": null,
              "start": 5392,
              "end": 5400
            },
            "typeArguments": null,
            "arguments": [],
            "start": 5388,
            "end": 5402
          },
          "definite": false,
          "start": 5382,
          "end": 5402
        }
      ],
      "declare": false,
      "start": 5376,
      "end": 5403
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "inf",
            "optional": false,
            "typeAnnotation": null,
            "start": 5408,
            "end": 5411
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 5412,
            "end": 5420
          },
          "optional": false,
          "computed": false,
          "start": 5408,
          "end": 5420
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numOrStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 5421,
            "end": 5429
          }
        ],
        "optional": false,
        "start": 5408,
        "end": 5430
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 5443,
                      "end": 5449
                    },
                    "start": 5441,
                    "end": 5449
                  },
                  "start": 5440,
                  "end": 5449
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numOrStr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5452,
                  "end": 5460
                },
                "definite": false,
                "start": 5440,
                "end": 5460
              }
            ],
            "declare": false,
            "start": 5436,
            "end": 5461
          }
        ],
        "start": 5432,
        "end": 5477
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 5494,
                      "end": 5500
                    },
                    "start": 5492,
                    "end": 5500
                  },
                  "start": 5491,
                  "end": 5500
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numOrStr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5503,
                  "end": 5511
                },
                "definite": false,
                "start": 5491,
                "end": 5511
              }
            ],
            "declare": false,
            "start": 5487,
            "end": 5512
          }
        ],
        "start": 5483,
        "end": 5528
      },
      "start": 5404,
      "end": 5528
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5582,
        "end": 5584
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
              "name": "isC2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5589,
              "end": 5593
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
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ThisExpression",
                        "start": 5609,
                        "end": 5613
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5625,
                        "end": 5627
                      },
                      "start": 5609,
                      "end": 5627
                    },
                    "start": 5602,
                    "end": 5628
                  }
                ],
                "start": 5596,
                "end": 5632
              },
              "expression": false,
              "start": 5593,
              "end": 5632
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5589,
            "end": 5632
          }
        ],
        "start": 5585,
        "end": 5634
      },
      "abstract": false,
      "declare": false,
      "start": 5576,
      "end": 5634
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5641,
        "end": 5643
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5652,
        "end": 5654
      },
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
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 5659,
              "end": 5660
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 5663,
              "end": 5664
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5659,
            "end": 5665
          }
        ],
        "start": 5655,
        "end": 5667
      },
      "abstract": false,
      "declare": false,
      "start": 5635,
      "end": 5667
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5683,
                  "end": 5685
                },
                "typeArguments": null,
                "start": 5683,
                "end": 5685
              },
              "start": 5681,
              "end": 5685
            },
            "start": 5680,
            "end": 5685
          },
          "init": null,
          "definite": false,
          "start": 5680,
          "end": 5685
        }
      ],
      "declare": true,
      "start": 5668,
      "end": 5686
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 5691,
            "end": 5692
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isC2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5693,
            "end": 5697
          },
          "optional": false,
          "computed": false,
          "start": 5691,
          "end": 5697
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 5691,
        "end": 5699
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5713,
                        "end": 5715
                      },
                      "typeArguments": null,
                      "start": 5713,
                      "end": 5715
                    },
                    "start": 5711,
                    "end": 5715
                  },
                  "start": 5709,
                  "end": 5715
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5718,
                  "end": 5719
                },
                "definite": false,
                "start": 5709,
                "end": 5719
              }
            ],
            "declare": false,
            "start": 5705,
            "end": 5720
          }
        ],
        "start": 5701,
        "end": 5739
      },
      "alternate": null,
      "start": 5687,
      "end": 5739
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doNotRefineDestructuredParam",
        "optional": false,
        "typeAnnotation": null,
        "start": 5750,
        "end": 5778
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
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
                "start": 5780,
                "end": 5781
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 5780,
                "end": 5781
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 5780,
              "end": 5781
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
                "start": 5783,
                "end": 5784
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 5783,
                "end": 5784
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 5783,
              "end": 5784
            }
          ],
          "optional": false,
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5788,
                    "end": 5789
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
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
                      ],
                      "start": 5791,
                      "end": 5804
                    },
                    "start": 5789,
                    "end": 5804
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5788,
                  "end": 5805
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
                    "start": 5806,
                    "end": 5807
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 5809,
                      "end": 5815
                    },
                    "start": 5807,
                    "end": 5815
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5806,
                  "end": 5815
                }
              ],
              "start": 5787,
              "end": 5816
            },
            "start": 5785,
            "end": 5816
          },
          "start": 5779,
          "end": 5816
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5836,
                  "end": 5837
                },
                "prefix": true,
                "start": 5829,
                "end": 5837
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "'number'",
                "start": 5842,
                "end": 5850
              },
              "start": 5829,
              "end": 5850
            },
            "start": 5822,
            "end": 5851
          }
        ],
        "start": 5818,
        "end": 5853
      },
      "expression": false,
      "start": 5741,
      "end": 5853
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isShortString",
        "optional": false,
        "typeAnnotation": null,
        "start": 5947,
        "end": 5960
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnknownKeyword",
              "start": 5964,
              "end": 5971
            },
            "start": 5962,
            "end": 5971
          },
          "start": 5961,
          "end": 5971
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5991,
                    "end": 5992
                  },
                  "prefix": true,
                  "start": 5984,
                  "end": 5992
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 5997,
                  "end": 6005
                },
                "start": 5984,
                "end": 6005
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6009,
                    "end": 6010
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6011,
                    "end": 6017
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6009,
                  "end": 6017
                },
                "operator": "<",
                "right": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 6020,
                  "end": 6022
                },
                "start": 6009,
                "end": 6022
              },
              "start": 5984,
              "end": 6022
            },
            "start": 5977,
            "end": 6023
          }
        ],
        "start": 5973,
        "end": 6025
      },
      "expression": false,
      "start": 5938,
      "end": 6025
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
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6044,
                "end": 6050
              },
              "start": 6042,
              "end": 6050
            },
            "start": 6039,
            "end": 6050
          },
          "init": null,
          "definite": false,
          "start": 6039,
          "end": 6050
        }
      ],
      "declare": true,
      "start": 6027,
      "end": 6051
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isShortString",
          "optional": false,
          "typeAnnotation": null,
          "start": 6056,
          "end": 6069
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 6070,
            "end": 6073
          }
        ],
        "optional": false,
        "start": 6056,
        "end": 6074
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6080,
                  "end": 6083
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6084,
                  "end": 6090
                },
                "optional": false,
                "computed": false,
                "start": 6080,
                "end": 6090
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 6091,
                  "end": 6092
                }
              ],
              "optional": false,
              "start": 6080,
              "end": 6093
            },
            "directive": null,
            "start": 6080,
            "end": 6094
          }
        ],
        "start": 6076,
        "end": 6110
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6120,
                  "end": 6123
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6124,
                  "end": 6130
                },
                "optional": false,
                "computed": false,
                "start": 6120,
                "end": 6130
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 6131,
                  "end": 6132
                }
              ],
              "optional": false,
              "start": 6120,
              "end": 6133
            },
            "directive": null,
            "start": 6120,
            "end": 6134
          }
        ],
        "start": 6116,
        "end": 6150
      },
      "start": 6052,
      "end": 6150
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isStringFromUnknown",
        "optional": false,
        "typeAnnotation": null,
        "start": 6161,
        "end": 6180
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnknownKeyword",
              "start": 6184,
              "end": 6191
            },
            "start": 6182,
            "end": 6191
          },
          "start": 6181,
          "end": 6191
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6211,
                  "end": 6212
                },
                "prefix": true,
                "start": 6204,
                "end": 6212
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 6217,
                "end": 6225
              },
              "start": 6204,
              "end": 6225
            },
            "start": 6197,
            "end": 6226
          }
        ],
        "start": 6193,
        "end": 6228
      },
      "expression": false,
      "start": 6152,
      "end": 6228
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isStringFromUnknown",
          "optional": false,
          "typeAnnotation": null,
          "start": 6233,
          "end": 6252
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 6253,
            "end": 6256
          }
        ],
        "optional": false,
        "start": 6233,
        "end": 6257
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6263,
                  "end": 6266
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6267,
                  "end": 6273
                },
                "optional": false,
                "computed": false,
                "start": 6263,
                "end": 6273
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 6274,
                  "end": 6275
                }
              ],
              "optional": false,
              "start": 6263,
              "end": 6276
            },
            "directive": null,
            "start": 6263,
            "end": 6277
          }
        ],
        "start": 6259,
        "end": 6293
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "start": 6310,
                      "end": 6315
                    },
                    "start": 6308,
                    "end": 6315
                  },
                  "start": 6307,
                  "end": 6315
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6318,
                  "end": 6321
                },
                "definite": false,
                "start": 6307,
                "end": 6321
              }
            ],
            "declare": false,
            "start": 6303,
            "end": 6322
          }
        ],
        "start": 6299,
        "end": 6338
      },
      "start": 6229,
      "end": 6338
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNumOrStr",
        "optional": false,
        "typeAnnotation": null,
        "start": 6371,
        "end": 6381
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnknownKeyword",
              "start": 6385,
              "end": 6392
            },
            "start": 6383,
            "end": 6392
          },
          "start": 6382,
          "end": 6392
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6413,
                    "end": 6414
                  },
                  "prefix": true,
                  "start": 6406,
                  "end": 6414
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 6419,
                  "end": 6427
                },
                "start": 6406,
                "end": 6427
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6438,
                    "end": 6439
                  },
                  "prefix": true,
                  "start": 6431,
                  "end": 6439
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 6444,
                  "end": 6452
                },
                "start": 6431,
                "end": 6452
              },
              "start": 6406,
              "end": 6452
            },
            "start": 6398,
            "end": 6454
          }
        ],
        "start": 6394,
        "end": 6456
      },
      "expression": false,
      "start": 6362,
      "end": 6456
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
            "name": "unk",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 6474,
                "end": 6481
              },
              "start": 6472,
              "end": 6481
            },
            "start": 6469,
            "end": 6481
          },
          "init": null,
          "definite": false,
          "start": 6469,
          "end": 6481
        }
      ],
      "declare": true,
      "start": 6457,
      "end": 6482
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isNumOrStr",
          "optional": false,
          "typeAnnotation": null,
          "start": 6487,
          "end": 6497
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "unk",
            "optional": false,
            "typeAnnotation": null,
            "start": 6498,
            "end": 6501
          }
        ],
        "optional": false,
        "start": 6487,
        "end": 6502
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
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
                      ],
                      "start": 6515,
                      "end": 6530
                    },
                    "start": 6513,
                    "end": 6530
                  },
                  "start": 6512,
                  "end": 6530
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unk",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6533,
                  "end": 6536
                },
                "definite": false,
                "start": 6512,
                "end": 6536
              }
            ],
            "declare": false,
            "start": 6508,
            "end": 6537
          }
        ],
        "start": 6504,
        "end": 6553
      },
      "alternate": null,
      "start": 6483,
      "end": 6553
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertAndPredicate",
        "optional": false,
        "typeAnnotation": null,
        "start": 6621,
        "end": 6639
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
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
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6661,
                    "end": 6665
                  },
                  "typeArguments": null,
                  "start": 6661,
                  "end": 6665
                }
              ],
              "start": 6643,
              "end": 6665
            },
            "start": 6641,
            "end": 6665
          },
          "start": 6640,
          "end": 6665
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 6675,
                "end": 6676
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 6688,
                "end": 6692
              },
              "start": 6675,
              "end": 6692
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6710,
                      "end": 6715
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 6706,
                    "end": 6717
                  },
                  "start": 6700,
                  "end": 6718
                }
              ],
              "start": 6694,
              "end": 6722
            },
            "alternate": null,
            "start": 6671,
            "end": 6722
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6739,
                  "end": 6740
                },
                "prefix": true,
                "start": 6732,
                "end": 6740
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 6745,
                "end": 6753
              },
              "start": 6732,
              "end": 6753
            },
            "start": 6725,
            "end": 6754
          }
        ],
        "start": 6667,
        "end": 6756
      },
      "expression": false,
      "start": 6612,
      "end": 6756
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
            "name": "snd",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6793,
                      "end": 6797
                    },
                    "typeArguments": null,
                    "start": 6793,
                    "end": 6797
                  }
                ],
                "start": 6775,
                "end": 6797
              },
              "start": 6773,
              "end": 6797
            },
            "start": 6770,
            "end": 6797
          },
          "init": null,
          "definite": false,
          "start": 6770,
          "end": 6797
        }
      ],
      "declare": true,
      "start": 6758,
      "end": 6798
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "assertAndPredicate",
          "optional": false,
          "typeAnnotation": null,
          "start": 6803,
          "end": 6821
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "snd",
            "optional": false,
            "typeAnnotation": null,
            "start": 6822,
            "end": 6825
          }
        ],
        "optional": false,
        "start": 6803,
        "end": 6826
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 6839,
                      "end": 6845
                    },
                    "start": 6837,
                    "end": 6845
                  },
                  "start": 6836,
                  "end": 6845
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "snd",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6848,
                  "end": 6851
                },
                "definite": false,
                "start": 6836,
                "end": 6851
              }
            ],
            "declare": false,
            "start": 6832,
            "end": 6852
          }
        ],
        "start": 6828,
        "end": 6870
      },
      "alternate": null,
      "start": 6799,
      "end": 6870
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNumberWithThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 6881,
        "end": 6897
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
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
                "start": 6904,
                "end": 6908
              },
              "typeArguments": null,
              "start": 6904,
              "end": 6908
            },
            "start": 6902,
            "end": 6908
          },
          "start": 6898,
          "end": 6908
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 6913,
              "end": 6928
            },
            "start": 6911,
            "end": 6928
          },
          "start": 6910,
          "end": 6928
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6948,
                  "end": 6949
                },
                "prefix": true,
                "start": 6941,
                "end": 6949
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "'number'",
                "start": 6954,
                "end": 6962
              },
              "start": 6941,
              "end": 6962
            },
            "start": 6934,
            "end": 6963
          }
        ],
        "start": 6930,
        "end": 6965
      },
      "expression": false,
      "start": 6872,
      "end": 6965
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "narrowFromAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 6976,
        "end": 6989
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 6993,
              "end": 6996
            },
            "start": 6991,
            "end": 6996
          },
          "start": 6990,
          "end": 6996
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7016,
                  "end": 7017
                },
                "prefix": true,
                "start": 7009,
                "end": 7017
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "'number'",
                "start": 7022,
                "end": 7030
              },
              "start": 7009,
              "end": 7030
            },
            "start": 7002,
            "end": 7031
          }
        ],
        "start": 6998,
        "end": 7033
      },
      "expression": false,
      "start": 6967,
      "end": 7033
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
            "name": "noInferenceFromRest",
            "optional": false,
            "typeAnnotation": null,
            "start": 7041,
            "end": 7060
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7067,
                  "end": 7068
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 7071,
                              "end": 7074
                            },
                            "start": 7071,
                            "end": 7074
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "b",
                              "raw": "\"b\"",
                              "start": 7077,
                              "end": 7080
                            },
                            "start": 7077,
                            "end": 7080
                          }
                        ],
                        "start": 7071,
                        "end": 7080
                      }
                    ],
                    "start": 7070,
                    "end": 7081
                  },
                  "start": 7068,
                  "end": 7081
                },
                "value": null,
                "start": 7064,
                "end": 7081
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7086,
                  "end": 7087
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 7088,
                  "end": 7089
                },
                "optional": false,
                "computed": true,
                "start": 7086,
                "end": 7090
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 7095,
                "end": 7098
              },
              "start": 7086,
              "end": 7098
            },
            "id": null,
            "generator": false,
            "start": 7063,
            "end": 7098
          },
          "definite": false,
          "start": 7041,
          "end": 7098
        }
      ],
      "declare": false,
      "start": 7035,
      "end": 7099
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
            "name": "noInferenceFromImpossibleRest",
            "optional": false,
            "typeAnnotation": null,
            "start": 7106,
            "end": 7135
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7142,
                  "end": 7143
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 7145,
                    "end": 7147
                  },
                  "start": 7143,
                  "end": 7147
                },
                "value": null,
                "start": 7139,
                "end": 7147
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7159,
                  "end": 7160
                },
                "prefix": true,
                "start": 7152,
                "end": 7160
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "undefined",
                "raw": "\"undefined\"",
                "start": 7165,
                "end": 7176
              },
              "start": 7152,
              "end": 7176
            },
            "id": null,
            "generator": false,
            "start": 7138,
            "end": 7176
          },
          "definite": false,
          "start": 7106,
          "end": 7176
        }
      ],
      "declare": false,
      "start": 7100,
      "end": 7177
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferWithRest",
        "optional": false,
        "typeAnnotation": null,
        "start": 7188,
        "end": 7201
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
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
              ],
              "start": 7205,
              "end": 7218
            },
            "start": 7203,
            "end": 7218
          },
          "start": 7202,
          "end": 7218
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 7223,
            "end": 7224
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 7227,
                    "end": 7230
                  },
                  "start": 7227,
                  "end": 7230
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 7232,
                    "end": 7235
                  },
                  "start": 7232,
                  "end": 7235
                }
              ],
              "start": 7226,
              "end": 7236
            },
            "start": 7224,
            "end": 7236
          },
          "value": null,
          "start": 7220,
          "end": 7236
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7256,
                  "end": 7257
                },
                "prefix": true,
                "start": 7249,
                "end": 7257
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 7262,
                "end": 7270
              },
              "start": 7249,
              "end": 7270
            },
            "start": 7242,
            "end": 7271
          }
        ],
        "start": 7238,
        "end": 7273
      },
      "expression": false,
      "start": 7179,
      "end": 7273
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
            "name": "foobar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
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
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7359,
                          "end": 7363
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "foo",
                              "raw": "\"foo\"",
                              "start": 7365,
                              "end": 7370
                            },
                            "start": 7365,
                            "end": 7370
                          },
                          "start": 7363,
                          "end": 7370
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 7359,
                        "end": 7371
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7372,
                          "end": 7375
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 7377,
                            "end": 7383
                          },
                          "start": 7375,
                          "end": 7383
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 7372,
                        "end": 7383
                      }
                    ],
                    "start": 7357,
                    "end": 7385
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
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7392,
                          "end": 7396
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "bar",
                              "raw": "\"bar\"",
                              "start": 7398,
                              "end": 7403
                            },
                            "start": 7398,
                            "end": 7403
                          },
                          "start": 7396,
                          "end": 7403
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 7392,
                        "end": 7404
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7405,
                          "end": 7408
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 7410,
                            "end": 7416
                          },
                          "start": 7408,
                          "end": 7416
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 7405,
                        "end": 7416
                      }
                    ],
                    "start": 7390,
                    "end": 7418
                  }
                ],
                "start": 7355,
                "end": 7418
              },
              "start": 7351,
              "end": 7418
            },
            "start": 7345,
            "end": 7418
          },
          "init": null,
          "definite": false,
          "start": 7345,
          "end": 7418
        }
      ],
      "declare": true,
      "start": 7331,
      "end": 7419
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
            "name": "foobarPred",
            "optional": false,
            "typeAnnotation": null,
            "start": 7427,
            "end": 7437
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foobar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7452,
                      "end": 7458
                    },
                    "typeArguments": null,
                    "start": 7445,
                    "end": 7458
                  },
                  "start": 7443,
                  "end": 7458
                },
                "start": 7441,
                "end": 7458
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7463,
                  "end": 7465
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7466,
                  "end": 7470
                },
                "optional": false,
                "computed": false,
                "start": 7463,
                "end": 7470
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 7475,
                "end": 7480
              },
              "start": 7463,
              "end": 7480
            },
            "id": null,
            "generator": false,
            "start": 7440,
            "end": 7480
          },
          "definite": false,
          "start": 7427,
          "end": 7480
        }
      ],
      "declare": false,
      "start": 7421,
      "end": 7481
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foobarPred",
          "optional": false,
          "typeAnnotation": null,
          "start": 7486,
          "end": 7496
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foobar",
            "optional": false,
            "typeAnnotation": null,
            "start": 7497,
            "end": 7503
          }
        ],
        "optional": false,
        "start": 7486,
        "end": 7504
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foobar",
                "optional": false,
                "typeAnnotation": null,
                "start": 7510,
                "end": 7516
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 7517,
                "end": 7520
              },
              "optional": false,
              "computed": false,
              "start": 7510,
              "end": 7520
            },
            "directive": null,
            "start": 7510,
            "end": 7521
          }
        ],
        "start": 7506,
        "end": 7523
      },
      "alternate": null,
      "start": 7482,
      "end": 7523
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
            "name": "arrTest",
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
                  "start": 7596,
                  "end": 7601
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7602,
                      "end": 7608
                    }
                  ],
                  "start": 7601,
                  "end": 7609
                },
                "start": 7596,
                "end": 7609
              },
              "start": 7594,
              "end": 7609
            },
            "start": 7587,
            "end": 7609
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 7613,
                    "end": 7614
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 7616,
                    "end": 7617
                  },
                  {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 7619,
                    "end": 7623
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 7625,
                    "end": 7626
                  }
                ],
                "start": 7612,
                "end": 7627
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 7628,
                "end": 7634
              },
              "optional": false,
              "computed": false,
              "start": 7612,
              "end": 7634
            },
            "typeArguments": null,
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7639,
                    "end": 7640
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7646,
                      "end": 7647
                    },
                    "operator": "!=",
                    "right": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 7651,
                      "end": 7655
                    },
                    "start": 7646,
                    "end": 7655
                  },
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 7667,
                    "end": 7674
                  },
                  "start": 7645,
                  "end": 7674
                },
                "id": null,
                "generator": false,
                "start": 7638,
                "end": 7674
              }
            ],
            "optional": false,
            "start": 7612,
            "end": 7677
          },
          "definite": false,
          "start": 7587,
          "end": 7677
        }
      ],
      "declare": false,
      "start": 7581,
      "end": 7678
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isEmptyString",
        "optional": false,
        "typeAnnotation": null,
        "start": 7689,
        "end": 7702
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnknownKeyword",
              "start": 7706,
              "end": 7713
            },
            "start": 7704,
            "end": 7713
          },
          "start": 7703,
          "end": 7713
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
                  "name": "rv",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7725,
                  "end": 7727
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7730,
                    "end": 7731
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 7736,
                    "end": 7738
                  },
                  "start": 7730,
                  "end": 7738
                },
                "definite": false,
                "start": 7725,
                "end": 7738
              }
            ],
            "declare": false,
            "start": 7719,
            "end": 7739
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "rv",
                "optional": false,
                "typeAnnotation": null,
                "start": 7749,
                "end": 7751
              },
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 7762,
                "end": 7769
              },
              "start": 7749,
              "end": 7769
            },
            "start": 7742,
            "end": 7770
          }
        ],
        "start": 7715,
        "end": 7772
      },
      "expression": false,
      "start": 7680,
      "end": 7772
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 7835,
        "end": 7841
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
              "name": "breath",
              "optional": false,
              "typeAnnotation": null,
              "start": 7848,
              "end": 7854
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 7856,
                  "end": 7860
                },
                "start": 7856,
                "end": 7860
              },
              "start": 7854,
              "end": 7860
            },
            "accessibility": null,
            "static": false,
            "start": 7848,
            "end": 7861
          }
        ],
        "start": 7844,
        "end": 7863
      },
      "declare": false,
      "start": 7830,
      "end": 7864
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rock",
        "optional": false,
        "typeAnnotation": null,
        "start": 7871,
        "end": 7875
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
              "name": "breath",
              "optional": false,
              "typeAnnotation": null,
              "start": 7882,
              "end": 7888
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 7890,
                  "end": 7895
                },
                "start": 7890,
                "end": 7895
              },
              "start": 7888,
              "end": 7895
            },
            "accessibility": null,
            "static": false,
            "start": 7882,
            "end": 7896
          }
        ],
        "start": 7878,
        "end": 7898
      },
      "declare": false,
      "start": 7866,
      "end": 7899
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Something",
        "optional": false,
        "typeAnnotation": null,
        "start": 7906,
        "end": 7915
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
              "name": "Animal",
              "optional": false,
              "typeAnnotation": null,
              "start": 7918,
              "end": 7924
            },
            "typeArguments": null,
            "start": 7918,
            "end": 7924
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Rock",
              "optional": false,
              "typeAnnotation": null,
              "start": 7927,
              "end": 7931
            },
            "typeArguments": null,
            "start": 7927,
            "end": 7931
          }
        ],
        "start": 7918,
        "end": 7931
      },
      "declare": false,
      "start": 7901,
      "end": 7932
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isAnimal",
        "optional": false,
        "typeAnnotation": null,
        "start": 7943,
        "end": 7951
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "something",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Something",
                "optional": false,
                "typeAnnotation": null,
                "start": 7963,
                "end": 7972
              },
              "typeArguments": null,
              "start": 7963,
              "end": 7972
            },
            "start": 7961,
            "end": 7972
          },
          "start": 7952,
          "end": 7972
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "something",
            "optional": false,
            "typeAnnotation": null,
            "start": 7975,
            "end": 7984
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null,
                "start": 7988,
                "end": 7994
              },
              "typeArguments": null,
              "start": 7988,
              "end": 7994
            },
            "start": 7988,
            "end": 7994
          },
          "start": 7975,
          "end": 7994
        },
        "start": 7973,
        "end": 7994
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "something",
                "optional": false,
                "typeAnnotation": null,
                "start": 8006,
                "end": 8015
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "breath",
                "optional": false,
                "typeAnnotation": null,
                "start": 8016,
                "end": 8022
              },
              "optional": false,
              "computed": false,
              "start": 8006,
              "end": 8022
            },
            "start": 7999,
            "end": 8022
          }
        ],
        "start": 7995,
        "end": 8024
      },
      "expression": false,
      "start": 7934,
      "end": 8024
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "positive",
        "optional": false,
        "typeAnnotation": null,
        "start": 8035,
        "end": 8043
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Something",
                "optional": false,
                "typeAnnotation": null,
                "start": 8047,
                "end": 8056
              },
              "typeArguments": null,
              "start": 8047,
              "end": 8056
            },
            "start": 8045,
            "end": 8056
          },
          "start": 8044,
          "end": 8056
        }
      ],
      "returnType": null,
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
                "name": "isAnimal",
                "optional": false,
                "typeAnnotation": null,
                "start": 8069,
                "end": 8077
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8078,
                  "end": 8079
                }
              ],
              "optional": false,
              "start": 8069,
              "end": 8080
            },
            "start": 8062,
            "end": 8080
          }
        ],
        "start": 8058,
        "end": 8082
      },
      "expression": false,
      "start": 8026,
      "end": 8082
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "negative",
        "optional": false,
        "typeAnnotation": null,
        "start": 8093,
        "end": 8101
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Something",
                "optional": false,
                "typeAnnotation": null,
                "start": 8105,
                "end": 8114
              },
              "typeArguments": null,
              "start": 8105,
              "end": 8114
            },
            "start": 8103,
            "end": 8114
          },
          "start": 8102,
          "end": 8114
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isAnimal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8129,
                  "end": 8137
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8138,
                    "end": 8139
                  }
                ],
                "optional": false,
                "start": 8129,
                "end": 8140
              },
              "prefix": true,
              "start": 8128,
              "end": 8140
            },
            "start": 8121,
            "end": 8140
          }
        ],
        "start": 8116,
        "end": 8142
      },
      "expression": false,
      "start": 8084,
      "end": 8142
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 8142
}
```
