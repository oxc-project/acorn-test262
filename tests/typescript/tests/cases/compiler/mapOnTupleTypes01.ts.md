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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 64,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 33,
              "decorators": [],
              "name": "mapOnLooseArrayLiteral",
              "optional": false,
              "typeAnnotation": null
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
                  "start": 53,
                  "end": 63,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 58,
                    "end": 63,
                    "left": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 59,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "start": 62,
                      "end": 63,
                      "decorators": [],
                      "name": "n",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 80,
      "end": 109,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 108,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 102,
            "decorators": [],
            "name": "numTuple",
            "optional": false,
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
            }
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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 121,
            "end": 149,
            "id": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "numTuple",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 137,
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
                  "start": 138,
                  "end": 148,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 143,
                    "end": 148,
                    "left": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 144,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 148,
                      "decorators": [],
                      "name": "x",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 165,
      "end": 215,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 214,
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 193,
            "decorators": [],
            "name": "numNum",
            "optional": false,
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
            }
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 266,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 265,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 244,
            "decorators": [],
            "name": "strStr",
            "optional": false,
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
            }
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 267,
      "end": 317,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 271,
          "end": 316,
          "id": {
            "type": "Identifier",
            "start": 271,
            "end": 295,
            "decorators": [],
            "name": "numStr",
            "optional": false,
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
            }
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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 330,
            "end": 356,
            "id": {
              "type": "Identifier",
              "start": 330,
              "end": 331,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "numNum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 344,
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
                  "start": 345,
                  "end": 355,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 345,
                      "end": 346,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 350,
                    "end": 355,
                    "left": {
                      "type": "Identifier",
                      "start": 350,
                      "end": 351,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "start": 354,
                      "end": 355,
                      "decorators": [],
                      "name": "n",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 358,
      "end": 406,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 365,
        "end": 406,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 369,
            "end": 405,
            "id": {
              "type": "Identifier",
              "start": 369,
              "end": 370,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "strStr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 380,
                  "end": 383,
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
                  "start": 384,
                  "end": 404,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 384,
                      "end": 385,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
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
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 391,
                        "end": 401,
                        "decorators": [],
                        "name": "charCodeAt",
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
                        "start": 402,
                        "end": 403,
                        "value": 0,
                        "raw": "0"
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 407,
      "end": 441,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 414,
        "end": 441,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 418,
            "end": 440,
            "id": {
              "type": "Identifier",
              "start": 418,
              "end": 419,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "numStr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 429,
                  "end": 432,
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
                  "start": 433,
                  "end": 439,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 433,
                      "end": 434,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 438,
                    "end": 439,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 456,
      "end": 508,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 460,
          "end": 507,
          "id": {
            "type": "Identifier",
            "start": 460,
            "end": 495,
            "decorators": [],
            "name": "numNumNum",
            "optional": false,
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
            }
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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 521,
            "end": 550,
            "id": {
              "type": "Identifier",
              "start": 521,
              "end": 522,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "numNumNum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 538,
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
                  "start": 539,
                  "end": 549,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 539,
                      "end": 540,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 544,
                    "end": 549,
                    "left": {
                      "type": "Identifier",
                      "start": 544,
                      "end": 545,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "start": 548,
                      "end": 549,
                      "decorators": [],
                      "name": "n",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 566,
      "end": 632,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 570,
          "end": 631,
          "id": {
            "type": "Identifier",
            "start": 570,
            "end": 616,
            "decorators": [],
            "name": "numNumNumNum",
            "optional": false,
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
            }
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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 645,
            "end": 677,
            "id": {
              "type": "Identifier",
              "start": 645,
              "end": 646,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "numNumNumNum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 662,
                  "end": 665,
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
                  "start": 666,
                  "end": 676,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 666,
                      "end": 667,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 671,
                    "end": 676,
                    "left": {
                      "type": "Identifier",
                      "start": 671,
                      "end": 672,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "start": 675,
                      "end": 676,
                      "decorators": [],
                      "name": "n",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 693,
      "end": 773,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 697,
          "end": 772,
          "id": {
            "type": "Identifier",
            "start": 697,
            "end": 754,
            "decorators": [],
            "name": "numNumNumNumNum",
            "optional": false,
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
            }
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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 786,
            "end": 821,
            "id": {
              "type": "Identifier",
              "start": 786,
              "end": 787,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "numNumNumNumNum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 806,
                  "end": 809,
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
                  "start": 810,
                  "end": 820,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 810,
                      "end": 811,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 815,
                    "end": 820,
                    "left": {
                      "type": "Identifier",
                      "start": 815,
                      "end": 816,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "start": 819,
                      "end": 820,
                      "decorators": [],
                      "name": "n",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 838,
      "end": 932,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 842,
          "end": 931,
          "id": {
            "type": "Identifier",
            "start": 842,
            "end": 910,
            "decorators": [],
            "name": "numNumNumNumNumNum",
            "optional": false,
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
            }
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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 945,
            "end": 980,
            "id": {
              "type": "Identifier",
              "start": 945,
              "end": 946,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "numNumNumNumNum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 965,
                  "end": 968,
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
                  "start": 969,
                  "end": 979,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 969,
                      "end": 970,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 974,
                    "end": 979,
                    "left": {
                      "type": "Identifier",
                      "start": 974,
                      "end": 975,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "*",
                    "right": {
                      "type": "Identifier",
                      "start": 978,
                      "end": 979,
                      "decorators": [],
                      "name": "n",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
