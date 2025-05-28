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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 49,
            "decorators": [],
            "name": "console",
            "optional": false,
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
                      "decorators": [],
                      "name": "log",
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
                        "start": 31,
                        "end": 39,
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 34,
                          "end": 39,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 36,
                            "end": 39
                          }
                        }
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 131,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 106,
            "decorators": [],
            "name": "robotA",
            "optional": false,
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
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
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
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 148,
          "end": 164,
          "decorators": [],
          "elements": [
            null,
            {
              "type": "Identifier",
              "start": 151,
              "end": 156,
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null
            }
          ],
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
                "decorators": [],
                "name": "Robot",
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
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 183,
                  "decorators": [],
                  "name": "log",
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
                  "start": 184,
                  "end": 189,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 195,
      "end": 256,
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 208,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 209,
          "end": 225,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 210,
              "end": 217,
              "decorators": [],
              "name": "numberB",
              "optional": false,
              "typeAnnotation": null
            }
          ],
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
                "decorators": [],
                "name": "Robot",
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
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 241,
                  "end": 244,
                  "decorators": [],
                  "name": "log",
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
                  "start": 245,
                  "end": 252,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 258,
      "end": 336,
      "id": {
        "type": "Identifier",
        "start": 267,
        "end": 271,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 272,
          "end": 306,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 273,
              "end": 281,
              "decorators": [],
              "name": "numberA2",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 283,
              "end": 289,
              "decorators": [],
              "name": "nameA2",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 291,
              "end": 298,
              "decorators": [],
              "name": "skillA2",
              "optional": false,
              "typeAnnotation": null
            }
          ],
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
                "decorators": [],
                "name": "Robot",
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
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 325,
                  "decorators": [],
                  "name": "log",
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
                  "start": 326,
                  "end": 332,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 338,
      "end": 418,
      "id": {
        "type": "Identifier",
        "start": 347,
        "end": 351,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 352,
          "end": 384,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 353,
              "end": 361,
              "decorators": [],
              "name": "numberA3",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "RestElement",
              "start": 363,
              "end": 376,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 366,
                "end": 376,
                "decorators": [],
                "name": "robotAInfo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
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
                "decorators": [],
                "name": "Robot",
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
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 400,
                  "end": 403,
                  "decorators": [],
                  "name": "log",
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
                  "start": 404,
                  "end": 414,
                  "decorators": [],
                  "name": "robotAInfo",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
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
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 425,
            "end": 431,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
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
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 474,
            "end": 480,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
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
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 523,
            "end": 529,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
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
          "decorators": [],
          "name": "foo4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 572,
            "end": 578,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "foo4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
