__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 614,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 49,
            "name": "console",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 21,
                "end": 49,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 27,
                    "end": 47,
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
                      "name": "log",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 31,
                        "end": 39,
                        "name": "msg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 34,
                          "end": 39,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 36,
                            "end": 39
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 40,
                      "end": 46,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 42,
                        "end": 46
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 50,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 60,
        "name": "Robot",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 63,
        "end": 87,
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 64,
            "end": 70
          },
          {
            "type": "TSStringKeyword",
            "start": 72,
            "end": 78
          },
          {
            "type": "TSStringKeyword",
            "start": 80,
            "end": 86
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 131,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 106,
            "name": "robotA",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 106,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 101,
                "end": 106,
                "typeName": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 106,
                  "name": "Robot",
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
            "start": 109,
            "end": 131,
            "elements": [
              {
                "type": "Literal",
                "start": 110,
                "end": 111,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 113,
                "end": 120,
                "value": "mower",
                "raw": "\"mower\""
              },
              {
                "type": "Literal",
                "start": 122,
                "end": 130,
                "value": "mowing",
                "raw": "\"mowing\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 134,
      "end": 193,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 147,
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
          "type": "ArrayPattern",
          "start": 148,
          "end": 164,
          "elements": [
            null,
            {
              "type": "Identifier",
              "start": 151,
              "end": 156,
              "name": "nameA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 157,
            "end": 164,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 159,
              "end": 164,
              "typeName": {
                "type": "Identifier",
                "start": 159,
                "end": 164,
                "name": "Robot",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 166,
        "end": 193,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 172,
            "end": 191,
            "expression": {
              "type": "CallExpression",
              "start": 172,
              "end": 190,
              "callee": {
                "type": "MemberExpression",
                "start": 172,
                "end": 183,
                "object": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 179,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 183,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 184,
                  "end": 189,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
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
      "type": "FunctionDeclaration",
      "start": 195,
      "end": 256,
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 208,
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
          "type": "ArrayPattern",
          "start": 209,
          "end": 225,
          "elements": [
            {
              "type": "Identifier",
              "start": 210,
              "end": 217,
              "name": "numberB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 218,
            "end": 225,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 220,
              "end": 225,
              "typeName": {
                "type": "Identifier",
                "start": 220,
                "end": 225,
                "name": "Robot",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 227,
        "end": 256,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 233,
            "end": 254,
            "expression": {
              "type": "CallExpression",
              "start": 233,
              "end": 253,
              "callee": {
                "type": "MemberExpression",
                "start": 233,
                "end": 244,
                "object": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 240,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 241,
                  "end": 244,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 245,
                  "end": 252,
                  "name": "numberB",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
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
      "type": "FunctionDeclaration",
      "start": 258,
      "end": 336,
      "id": {
        "type": "Identifier",
        "start": 267,
        "end": 271,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 272,
          "end": 306,
          "elements": [
            {
              "type": "Identifier",
              "start": 273,
              "end": 281,
              "name": "numberA2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 283,
              "end": 289,
              "name": "nameA2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 291,
              "end": 298,
              "name": "skillA2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 299,
            "end": 306,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 301,
              "end": 306,
              "typeName": {
                "type": "Identifier",
                "start": 301,
                "end": 306,
                "name": "Robot",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 308,
        "end": 336,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 314,
            "end": 334,
            "expression": {
              "type": "CallExpression",
              "start": 314,
              "end": 333,
              "callee": {
                "type": "MemberExpression",
                "start": 314,
                "end": 325,
                "object": {
                  "type": "Identifier",
                  "start": 314,
                  "end": 321,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 325,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 326,
                  "end": 332,
                  "name": "nameA2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
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
      "type": "FunctionDeclaration",
      "start": 338,
      "end": 418,
      "id": {
        "type": "Identifier",
        "start": 347,
        "end": 351,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 352,
          "end": 384,
          "elements": [
            {
              "type": "Identifier",
              "start": 353,
              "end": 361,
              "name": "numberA3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 363,
              "end": 376,
              "argument": {
                "type": "Identifier",
                "start": 366,
                "end": 376,
                "name": "robotAInfo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 377,
            "end": 384,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 379,
              "end": 384,
              "typeName": {
                "type": "Identifier",
                "start": 379,
                "end": 384,
                "name": "Robot",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 386,
        "end": 418,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 392,
            "end": 416,
            "expression": {
              "type": "CallExpression",
              "start": 392,
              "end": 415,
              "callee": {
                "type": "MemberExpression",
                "start": 392,
                "end": 403,
                "object": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 399,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 400,
                  "end": 403,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 404,
                  "end": 414,
                  "name": "robotAInfo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 420,
      "end": 433,
      "expression": {
        "type": "CallExpression",
        "start": 420,
        "end": 432,
        "callee": {
          "type": "Identifier",
          "start": 420,
          "end": 424,
          "name": "foo1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 425,
            "end": 431,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 434,
      "end": 467,
      "expression": {
        "type": "CallExpression",
        "start": 434,
        "end": 466,
        "callee": {
          "type": "Identifier",
          "start": 434,
          "end": 438,
          "name": "foo1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 439,
            "end": 465,
            "elements": [
              {
                "type": "Literal",
                "start": 440,
                "end": 441,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 443,
                "end": 452,
                "value": "trimmer",
                "raw": "\"trimmer\""
              },
              {
                "type": "Literal",
                "start": 454,
                "end": 464,
                "value": "trimming",
                "raw": "\"trimming\""
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
      "start": 469,
      "end": 482,
      "expression": {
        "type": "CallExpression",
        "start": 469,
        "end": 481,
        "callee": {
          "type": "Identifier",
          "start": 469,
          "end": 473,
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 474,
            "end": 480,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 483,
      "end": 516,
      "expression": {
        "type": "CallExpression",
        "start": 483,
        "end": 515,
        "callee": {
          "type": "Identifier",
          "start": 483,
          "end": 487,
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 488,
            "end": 514,
            "elements": [
              {
                "type": "Literal",
                "start": 489,
                "end": 490,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 492,
                "end": 501,
                "value": "trimmer",
                "raw": "\"trimmer\""
              },
              {
                "type": "Literal",
                "start": 503,
                "end": 513,
                "value": "trimming",
                "raw": "\"trimming\""
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
      "start": 518,
      "end": 531,
      "expression": {
        "type": "CallExpression",
        "start": 518,
        "end": 530,
        "callee": {
          "type": "Identifier",
          "start": 518,
          "end": 522,
          "name": "foo3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 523,
            "end": 529,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 532,
      "end": 565,
      "expression": {
        "type": "CallExpression",
        "start": 532,
        "end": 564,
        "callee": {
          "type": "Identifier",
          "start": 532,
          "end": 536,
          "name": "foo3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 537,
            "end": 563,
            "elements": [
              {
                "type": "Literal",
                "start": 538,
                "end": 539,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 541,
                "end": 550,
                "value": "trimmer",
                "raw": "\"trimmer\""
              },
              {
                "type": "Literal",
                "start": 552,
                "end": 562,
                "value": "trimming",
                "raw": "\"trimming\""
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
      "start": 567,
      "end": 580,
      "expression": {
        "type": "CallExpression",
        "start": 567,
        "end": 579,
        "callee": {
          "type": "Identifier",
          "start": 567,
          "end": 571,
          "name": "foo4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 572,
            "end": 578,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 581,
      "end": 614,
      "expression": {
        "type": "CallExpression",
        "start": 581,
        "end": 613,
        "callee": {
          "type": "Identifier",
          "start": 581,
          "end": 585,
          "name": "foo4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 586,
            "end": 612,
            "elements": [
              {
                "type": "Literal",
                "start": 587,
                "end": 588,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 590,
                "end": 599,
                "value": "trimmer",
                "raw": "\"trimmer\""
              },
              {
                "type": "Literal",
                "start": 601,
                "end": 611,
                "value": "trimming",
                "raw": "\"trimming\""
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
