__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mapOnLooseArrayLiteral",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 33
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
                      "start": 37,
                      "end": 38
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 40,
                      "end": 41
                    },
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 43,
                      "end": 44
                    },
                    {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 46,
                      "end": 47
                    }
                  ],
                  "start": 36,
                  "end": 48
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 52
                },
                "optional": false,
                "computed": false,
                "start": 36,
                "end": 52
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
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 53,
                      "end": 54
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 58,
                      "end": 59
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 62,
                      "end": 63
                    },
                    "start": 58,
                    "end": 63
                  },
                  "id": null,
                  "generator": false,
                  "start": 53,
                  "end": 63
                }
              ],
              "optional": false,
              "start": 36,
              "end": 64
            },
            "definite": false,
            "start": 11,
            "end": 64
          }
        ],
        "declare": false,
        "start": 7,
        "end": 65
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 65
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
            "name": "numTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 95,
                    "end": 101
                  }
                ],
                "start": 94,
                "end": 102
              },
              "start": 92,
              "end": 102
            },
            "start": 84,
            "end": 102
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 106,
                "end": 107
              }
            ],
            "start": 105,
            "end": 108
          },
          "definite": false,
          "start": 84,
          "end": 108
        }
      ],
      "declare": false,
      "start": 80,
      "end": 109
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 122
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numTuple",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 133
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 134,
                  "end": 137
                },
                "optional": false,
                "computed": false,
                "start": 125,
                "end": 137
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
                      "start": 138,
                      "end": 139
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
                      "start": 143,
                      "end": 144
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 147,
                      "end": 148
                    },
                    "start": 143,
                    "end": 148
                  },
                  "id": null,
                  "generator": false,
                  "start": 138,
                  "end": 148
                }
              ],
              "optional": false,
              "start": 125,
              "end": 149
            },
            "definite": false,
            "start": 121,
            "end": 149
          }
        ],
        "declare": false,
        "start": 117,
        "end": 150
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 110,
      "end": 150
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
            "name": "numNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 178,
                    "end": 184
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 186,
                    "end": 192
                  }
                ],
                "start": 177,
                "end": 193
              },
              "start": 175,
              "end": 193
            },
            "start": 169,
            "end": 193
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 100,
                "raw": "100",
                "start": 201,
                "end": 204
              },
              {
                "type": "Literal",
                "value": 100,
                "raw": "100",
                "start": 210,
                "end": 213
              }
            ],
            "start": 196,
            "end": 214
          },
          "definite": false,
          "start": 169,
          "end": 214
        }
      ],
      "declare": false,
      "start": 165,
      "end": 215
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
            "name": "strStr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 229,
                    "end": 235
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 237,
                    "end": 243
                  }
                ],
                "start": 228,
                "end": 244
              },
              "start": 226,
              "end": 244
            },
            "start": 220,
            "end": 244
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 248,
                "end": 255
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 257,
                "end": 264
              }
            ],
            "start": 247,
            "end": 265
          },
          "definite": false,
          "start": 220,
          "end": 265
        }
      ],
      "declare": false,
      "start": 216,
      "end": 266
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
            "name": "numStr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 280,
                    "end": 286
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 288,
                    "end": 294
                  }
                ],
                "start": 279,
                "end": 295
              },
              "start": 277,
              "end": 295
            },
            "start": 271,
            "end": 295
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 100,
                "raw": "100",
                "start": 303,
                "end": 306
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 308,
                "end": 315
              }
            ],
            "start": 298,
            "end": 316
          },
          "definite": false,
          "start": 271,
          "end": 316
        }
      ],
      "declare": false,
      "start": 267,
      "end": 317
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 331
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 340
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 344
                },
                "optional": false,
                "computed": false,
                "start": 334,
                "end": 344
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
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 345,
                      "end": 346
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 350,
                      "end": 351
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 354,
                      "end": 355
                    },
                    "start": 350,
                    "end": 355
                  },
                  "id": null,
                  "generator": false,
                  "start": 345,
                  "end": 355
                }
              ],
              "optional": false,
              "start": 334,
              "end": 356
            },
            "definite": false,
            "start": 330,
            "end": 356
          }
        ],
        "declare": false,
        "start": 326,
        "end": 357
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 319,
      "end": 357
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
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
              "typeAnnotation": null,
              "start": 369,
              "end": 370
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strStr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 373,
                  "end": 379
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 380,
                  "end": 383
                },
                "optional": false,
                "computed": false,
                "start": 373,
                "end": 383
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
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 384,
                      "end": 385
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 389,
                        "end": 390
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "charCodeAt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 391,
                        "end": 401
                      },
                      "optional": false,
                      "computed": false,
                      "start": 389,
                      "end": 401
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 402,
                        "end": 403
                      }
                    ],
                    "optional": false,
                    "start": 389,
                    "end": 404
                  },
                  "id": null,
                  "generator": false,
                  "start": 384,
                  "end": 404
                }
              ],
              "optional": false,
              "start": 373,
              "end": 405
            },
            "definite": false,
            "start": 369,
            "end": 405
          }
        ],
        "declare": false,
        "start": 365,
        "end": 406
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 358,
      "end": 406
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 418,
              "end": 419
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numStr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 422,
                  "end": 428
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 429,
                  "end": 432
                },
                "optional": false,
                "computed": false,
                "start": 422,
                "end": 432
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
                      "start": 433,
                      "end": 434
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 438,
                    "end": 439
                  },
                  "id": null,
                  "generator": false,
                  "start": 433,
                  "end": 439
                }
              ],
              "optional": false,
              "start": 422,
              "end": 440
            },
            "definite": false,
            "start": 418,
            "end": 440
          }
        ],
        "declare": false,
        "start": 414,
        "end": 441
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 407,
      "end": 441
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
            "name": "numNumNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 472,
                    "end": 478
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 480,
                    "end": 486
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 488,
                    "end": 494
                  }
                ],
                "start": 471,
                "end": 495
              },
              "start": 469,
              "end": 495
            },
            "start": 460,
            "end": 495
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 499,
                "end": 500
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 502,
                "end": 503
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 505,
                "end": 506
              }
            ],
            "start": 498,
            "end": 507
          },
          "definite": false,
          "start": 460,
          "end": 507
        }
      ],
      "declare": false,
      "start": 456,
      "end": 508
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 522
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numNumNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 525,
                  "end": 534
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 538
                },
                "optional": false,
                "computed": false,
                "start": 525,
                "end": 538
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
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 539,
                      "end": 540
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 544,
                      "end": 545
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 548,
                      "end": 549
                    },
                    "start": 544,
                    "end": 549
                  },
                  "id": null,
                  "generator": false,
                  "start": 539,
                  "end": 549
                }
              ],
              "optional": false,
              "start": 525,
              "end": 550
            },
            "definite": false,
            "start": 521,
            "end": 550
          }
        ],
        "declare": false,
        "start": 517,
        "end": 551
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 510,
      "end": 551
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
            "name": "numNumNumNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 585,
                    "end": 591
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 593,
                    "end": 599
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 601,
                    "end": 607
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 609,
                    "end": 615
                  }
                ],
                "start": 584,
                "end": 616
              },
              "start": 582,
              "end": 616
            },
            "start": 570,
            "end": 616
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 620,
                "end": 621
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 623,
                "end": 624
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 626,
                "end": 627
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 629,
                "end": 630
              }
            ],
            "start": 619,
            "end": 631
          },
          "definite": false,
          "start": 570,
          "end": 631
        }
      ],
      "declare": false,
      "start": 566,
      "end": 632
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 646
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numNumNumNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 649,
                  "end": 661
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 662,
                  "end": 665
                },
                "optional": false,
                "computed": false,
                "start": 649,
                "end": 665
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
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 666,
                      "end": 667
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 671,
                      "end": 672
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 675,
                      "end": 676
                    },
                    "start": 671,
                    "end": 676
                  },
                  "id": null,
                  "generator": false,
                  "start": 666,
                  "end": 676
                }
              ],
              "optional": false,
              "start": 649,
              "end": 677
            },
            "definite": false,
            "start": 645,
            "end": 677
          }
        ],
        "declare": false,
        "start": 641,
        "end": 678
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 634,
      "end": 678
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
            "name": "numNumNumNumNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 715,
                    "end": 721
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 723,
                    "end": 729
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 731,
                    "end": 737
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 739,
                    "end": 745
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 747,
                    "end": 753
                  }
                ],
                "start": 714,
                "end": 754
              },
              "start": 712,
              "end": 754
            },
            "start": 697,
            "end": 754
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 758,
                "end": 759
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 761,
                "end": 762
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 764,
                "end": 765
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 767,
                "end": 768
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 770,
                "end": 771
              }
            ],
            "start": 757,
            "end": 772
          },
          "definite": false,
          "start": 697,
          "end": 772
        }
      ],
      "declare": false,
      "start": 693,
      "end": 773
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 786,
              "end": 787
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numNumNumNumNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 790,
                  "end": 805
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 806,
                  "end": 809
                },
                "optional": false,
                "computed": false,
                "start": 790,
                "end": 809
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
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 810,
                      "end": 811
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 815,
                      "end": 816
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 819,
                      "end": 820
                    },
                    "start": 815,
                    "end": 820
                  },
                  "id": null,
                  "generator": false,
                  "start": 810,
                  "end": 820
                }
              ],
              "optional": false,
              "start": 790,
              "end": 821
            },
            "definite": false,
            "start": 786,
            "end": 821
          }
        ],
        "declare": false,
        "start": 782,
        "end": 822
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 775,
      "end": 822
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
            "name": "numNumNumNumNumNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 863,
                    "end": 869
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 871,
                    "end": 877
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 879,
                    "end": 885
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 887,
                    "end": 893
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 895,
                    "end": 901
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 903,
                    "end": 909
                  }
                ],
                "start": 862,
                "end": 910
              },
              "start": 860,
              "end": 910
            },
            "start": 842,
            "end": 910
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 914,
                "end": 915
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 917,
                "end": 918
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 920,
                "end": 921
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 923,
                "end": 924
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 926,
                "end": 927
              },
              {
                "type": "Literal",
                "value": 6,
                "raw": "6",
                "start": 929,
                "end": 930
              }
            ],
            "start": 913,
            "end": 931
          },
          "definite": false,
          "start": 842,
          "end": 931
        }
      ],
      "declare": false,
      "start": 838,
      "end": 932
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 945,
              "end": 946
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numNumNumNumNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 949,
                  "end": 964
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 965,
                  "end": 968
                },
                "optional": false,
                "computed": false,
                "start": 949,
                "end": 968
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
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 969,
                      "end": 970
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 974,
                      "end": 975
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 978,
                      "end": 979
                    },
                    "start": 974,
                    "end": 979
                  },
                  "id": null,
                  "generator": false,
                  "start": 969,
                  "end": 979
                }
              ],
              "optional": false,
              "start": 949,
              "end": 980
            },
            "definite": false,
            "start": 945,
            "end": 980
          }
        ],
        "declare": false,
        "start": 941,
        "end": 981
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 934,
      "end": 981
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 981
}
```
