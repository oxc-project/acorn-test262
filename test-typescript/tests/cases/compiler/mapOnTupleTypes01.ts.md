__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 981,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 65,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 65,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 64,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 33,
              "name": "mapOnLooseArrayLiteral",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 36,
              "end": 64,
              "callee": {
                "type": "MemberExpression",
                "start": 36,
                "end": 52,
                "object": {
                  "type": "ArrayExpression",
                  "start": 36,
                  "end": 48,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 37,
                      "end": 38,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 40,
                      "end": 41,
                      "value": 2,
                      "raw": "2"
                    },
                    {
                      "type": "Literal",
                      "start": 43,
                      "end": 44,
                      "value": 3,
                      "raw": "3"
                    },
                    {
                      "type": "Literal",
                      "start": 46,
                      "end": 47,
                      "value": 4,
                      "raw": "4"
                    }
                  ]
                },
                "property": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 52,
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
                  "start": 53,
                  "end": 63,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BinaryExpression",
                    "start": 58,
                    "end": 63,
                    "left": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 59,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "start": 62,
                      "end": 63,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 80,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 108,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 102,
            "name": "numTuple",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 102,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 94,
                "end": 102,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 95,
                    "end": 101
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 105,
            "end": 108,
            "elements": [
              {
                "type": "Literal",
                "start": 106,
                "end": 107,
                "value": 1,
                "raw": "1"
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
      "type": "ExportNamedDeclaration",
      "start": 110,
      "end": 150,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 117,
        "end": 150,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 121,
            "end": 149,
            "id": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 125,
              "end": 149,
              "callee": {
                "type": "MemberExpression",
                "start": 125,
                "end": 137,
                "object": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 133,
                  "name": "numTuple",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 137,
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
                  "start": 138,
                  "end": 148,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BinaryExpression",
                    "start": 143,
                    "end": 148,
                    "left": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 144,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 148,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 165,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 214,
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 193,
            "name": "numNum",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 193,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 177,
                "end": 193,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 196,
            "end": 214,
            "elements": [
              {
                "type": "Literal",
                "start": 201,
                "end": 204,
                "value": 100,
                "raw": "100"
              },
              {
                "type": "Literal",
                "start": 210,
                "end": 213,
                "value": 100,
                "raw": "100"
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
      "type": "VariableDeclaration",
      "start": 216,
      "end": 266,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 265,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 244,
            "name": "strStr",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 226,
              "end": 244,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 228,
                "end": 244,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 247,
            "end": 265,
            "elements": [
              {
                "type": "Literal",
                "start": 248,
                "end": 255,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "Literal",
                "start": 257,
                "end": 264,
                "value": "hello",
                "raw": "\"hello\""
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
      "type": "VariableDeclaration",
      "start": 267,
      "end": 317,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 271,
          "end": 316,
          "id": {
            "type": "Identifier",
            "start": 271,
            "end": 295,
            "name": "numStr",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 295,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 279,
                "end": 295,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 298,
            "end": 316,
            "elements": [
              {
                "type": "Literal",
                "start": 303,
                "end": 306,
                "value": 100,
                "raw": "100"
              },
              {
                "type": "Literal",
                "start": 308,
                "end": 315,
                "value": "hello",
                "raw": "\"hello\""
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
      "type": "ExportNamedDeclaration",
      "start": 319,
      "end": 357,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 326,
        "end": 357,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 330,
            "end": 356,
            "id": {
              "type": "Identifier",
              "start": 330,
              "end": 331,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 334,
              "end": 356,
              "callee": {
                "type": "MemberExpression",
                "start": 334,
                "end": 344,
                "object": {
                  "type": "Identifier",
                  "start": 334,
                  "end": 340,
                  "name": "numNum",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 344,
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
                  "start": 345,
                  "end": 355,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 345,
                      "end": 346,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BinaryExpression",
                    "start": 350,
                    "end": 355,
                    "left": {
                      "type": "Identifier",
                      "start": 350,
                      "end": 351,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "start": 354,
                      "end": 355,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 358,
      "end": 406,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 365,
        "end": 406,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 369,
            "end": 405,
            "id": {
              "type": "Identifier",
              "start": 369,
              "end": 370,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 373,
              "end": 405,
              "callee": {
                "type": "MemberExpression",
                "start": 373,
                "end": 383,
                "object": {
                  "type": "Identifier",
                  "start": 373,
                  "end": 379,
                  "name": "strStr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 380,
                  "end": 383,
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
                  "start": 384,
                  "end": 404,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 384,
                      "end": 385,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "CallExpression",
                    "start": 389,
                    "end": 404,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 389,
                      "end": 401,
                      "object": {
                        "type": "Identifier",
                        "start": 389,
                        "end": 390,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 391,
                        "end": 401,
                        "name": "charCodeAt",
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
                        "start": 402,
                        "end": 403,
                        "value": 0,
                        "raw": "0"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "typeParameters": null,
                  "returnType": null
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 407,
      "end": 441,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 414,
        "end": 441,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 418,
            "end": 440,
            "id": {
              "type": "Identifier",
              "start": 418,
              "end": 419,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 422,
              "end": 440,
              "callee": {
                "type": "MemberExpression",
                "start": 422,
                "end": 432,
                "object": {
                  "type": "Identifier",
                  "start": 422,
                  "end": 428,
                  "name": "numStr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 429,
                  "end": 432,
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
                  "start": 433,
                  "end": 439,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 433,
                      "end": 434,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 438,
                    "end": 439,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 456,
      "end": 508,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 460,
          "end": 507,
          "id": {
            "type": "Identifier",
            "start": 460,
            "end": 495,
            "name": "numNumNum",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 469,
              "end": 495,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 471,
                "end": 495,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 498,
            "end": 507,
            "elements": [
              {
                "type": "Literal",
                "start": 499,
                "end": 500,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 502,
                "end": 503,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 505,
                "end": 506,
                "value": 3,
                "raw": "3"
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
      "type": "ExportNamedDeclaration",
      "start": 510,
      "end": 551,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 517,
        "end": 551,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 521,
            "end": 550,
            "id": {
              "type": "Identifier",
              "start": 521,
              "end": 522,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 525,
              "end": 550,
              "callee": {
                "type": "MemberExpression",
                "start": 525,
                "end": 538,
                "object": {
                  "type": "Identifier",
                  "start": 525,
                  "end": 534,
                  "name": "numNumNum",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 538,
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
                  "start": 539,
                  "end": 549,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 539,
                      "end": 540,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BinaryExpression",
                    "start": 544,
                    "end": 549,
                    "left": {
                      "type": "Identifier",
                      "start": 544,
                      "end": 545,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "start": 548,
                      "end": 549,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 566,
      "end": 632,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 570,
          "end": 631,
          "id": {
            "type": "Identifier",
            "start": 570,
            "end": 616,
            "name": "numNumNumNum",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 582,
              "end": 616,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 584,
                "end": 616,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 619,
            "end": 631,
            "elements": [
              {
                "type": "Literal",
                "start": 620,
                "end": 621,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 623,
                "end": 624,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 626,
                "end": 627,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 629,
                "end": 630,
                "value": 4,
                "raw": "4"
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
      "type": "ExportNamedDeclaration",
      "start": 634,
      "end": 678,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 641,
        "end": 678,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 645,
            "end": 677,
            "id": {
              "type": "Identifier",
              "start": 645,
              "end": 646,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 649,
              "end": 677,
              "callee": {
                "type": "MemberExpression",
                "start": 649,
                "end": 665,
                "object": {
                  "type": "Identifier",
                  "start": 649,
                  "end": 661,
                  "name": "numNumNumNum",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 662,
                  "end": 665,
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
                  "start": 666,
                  "end": 676,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 666,
                      "end": 667,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BinaryExpression",
                    "start": 671,
                    "end": 676,
                    "left": {
                      "type": "Identifier",
                      "start": 671,
                      "end": 672,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "start": 675,
                      "end": 676,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 693,
      "end": 773,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 697,
          "end": 772,
          "id": {
            "type": "Identifier",
            "start": 697,
            "end": 754,
            "name": "numNumNumNumNum",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 712,
              "end": 754,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 714,
                "end": 754,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 757,
            "end": 772,
            "elements": [
              {
                "type": "Literal",
                "start": 758,
                "end": 759,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 761,
                "end": 762,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 764,
                "end": 765,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 767,
                "end": 768,
                "value": 4,
                "raw": "4"
              },
              {
                "type": "Literal",
                "start": 770,
                "end": 771,
                "value": 5,
                "raw": "5"
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
      "type": "ExportNamedDeclaration",
      "start": 775,
      "end": 822,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 782,
        "end": 822,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 786,
            "end": 821,
            "id": {
              "type": "Identifier",
              "start": 786,
              "end": 787,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 790,
              "end": 821,
              "callee": {
                "type": "MemberExpression",
                "start": 790,
                "end": 809,
                "object": {
                  "type": "Identifier",
                  "start": 790,
                  "end": 805,
                  "name": "numNumNumNumNum",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 806,
                  "end": 809,
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
                  "start": 810,
                  "end": 820,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 810,
                      "end": 811,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BinaryExpression",
                    "start": 815,
                    "end": 820,
                    "left": {
                      "type": "Identifier",
                      "start": 815,
                      "end": 816,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "start": 819,
                      "end": 820,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 838,
      "end": 932,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 842,
          "end": 931,
          "id": {
            "type": "Identifier",
            "start": 842,
            "end": 910,
            "name": "numNumNumNumNumNum",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 860,
              "end": 910,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 862,
                "end": 910,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 913,
            "end": 931,
            "elements": [
              {
                "type": "Literal",
                "start": 914,
                "end": 915,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 917,
                "end": 918,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 920,
                "end": 921,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 923,
                "end": 924,
                "value": 4,
                "raw": "4"
              },
              {
                "type": "Literal",
                "start": 926,
                "end": 927,
                "value": 5,
                "raw": "5"
              },
              {
                "type": "Literal",
                "start": 929,
                "end": 930,
                "value": 6,
                "raw": "6"
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
      "type": "ExportNamedDeclaration",
      "start": 934,
      "end": 981,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 941,
        "end": 981,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 945,
            "end": 980,
            "id": {
              "type": "Identifier",
              "start": 945,
              "end": 946,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 949,
              "end": 980,
              "callee": {
                "type": "MemberExpression",
                "start": 949,
                "end": 968,
                "object": {
                  "type": "Identifier",
                  "start": 949,
                  "end": 964,
                  "name": "numNumNumNumNum",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 965,
                  "end": 968,
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
                  "start": 969,
                  "end": 979,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 969,
                      "end": 970,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BinaryExpression",
                    "start": 974,
                    "end": 979,
                    "left": {
                      "type": "Identifier",
                      "start": 974,
                      "end": 975,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "start": 978,
                      "end": 979,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
