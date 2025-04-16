__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 672,
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
      "end": 90,
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
        "end": 89,
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 64,
            "end": 70
          },
          {
            "type": "TSTupleType",
            "start": 72,
            "end": 88,
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              },
              {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 91,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 146,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 108,
            "name": "robotA",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 108,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 103,
                "end": 108,
                "typeName": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 108,
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
            "start": 111,
            "end": 146,
            "elements": [
              {
                "type": "Literal",
                "start": 112,
                "end": 121,
                "value": "trimmer",
                "raw": "\"trimmer\""
              },
              {
                "type": "ArrayExpression",
                "start": 123,
                "end": 145,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 124,
                    "end": 134,
                    "value": "trimming",
                    "raw": "\"trimming\""
                  },
                  {
                    "type": "Literal",
                    "start": 136,
                    "end": 144,
                    "value": "edging",
                    "raw": "\"edging\""
                  }
                ]
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
      "start": 149,
      "end": 210,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 162,
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
          "start": 163,
          "end": 180,
          "elements": [
            null,
            {
              "type": "Identifier",
              "start": 166,
              "end": 172,
              "name": "skillA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 173,
            "end": 180,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 175,
              "end": 180,
              "typeName": {
                "type": "Identifier",
                "start": 175,
                "end": 180,
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
        "start": 182,
        "end": 210,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 188,
            "end": 208,
            "expression": {
              "type": "CallExpression",
              "start": 188,
              "end": 207,
              "callee": {
                "type": "MemberExpression",
                "start": 188,
                "end": 199,
                "object": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 195,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 199,
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
                  "start": 200,
                  "end": 206,
                  "name": "skillA",
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
      "start": 212,
      "end": 271,
      "id": {
        "type": "Identifier",
        "start": 221,
        "end": 225,
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
          "start": 226,
          "end": 241,
          "elements": [
            {
              "type": "Identifier",
              "start": 227,
              "end": 233,
              "name": "nameMB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 234,
            "end": 241,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 236,
              "end": 241,
              "typeName": {
                "type": "Identifier",
                "start": 236,
                "end": 241,
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
        "start": 243,
        "end": 271,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 249,
            "end": 269,
            "expression": {
              "type": "CallExpression",
              "start": 249,
              "end": 268,
              "callee": {
                "type": "MemberExpression",
                "start": 249,
                "end": 260,
                "object": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 256,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 260,
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
                  "start": 261,
                  "end": 267,
                  "name": "nameMB",
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
      "start": 273,
      "end": 366,
      "id": {
        "type": "Identifier",
        "start": 282,
        "end": 286,
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
          "start": 287,
          "end": 336,
          "elements": [
            {
              "type": "Identifier",
              "start": 288,
              "end": 294,
              "name": "nameMA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "ArrayPattern",
              "start": 296,
              "end": 328,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 297,
                  "end": 310,
                  "name": "primarySkillA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 312,
                  "end": 327,
                  "name": "secondarySkillA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 329,
            "end": 336,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 331,
              "end": 336,
              "typeName": {
                "type": "Identifier",
                "start": 331,
                "end": 336,
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
        "start": 338,
        "end": 366,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 344,
            "end": 364,
            "expression": {
              "type": "CallExpression",
              "start": 344,
              "end": 363,
              "callee": {
                "type": "MemberExpression",
                "start": 344,
                "end": 355,
                "object": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 351,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 355,
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
                  "start": 356,
                  "end": 362,
                  "name": "nameMA",
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
      "start": 368,
      "end": 448,
      "id": {
        "type": "Identifier",
        "start": 377,
        "end": 381,
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
          "start": 382,
          "end": 409,
          "elements": [
            {
              "type": "RestElement",
              "start": 383,
              "end": 401,
              "argument": {
                "type": "Identifier",
                "start": 386,
                "end": 401,
                "name": "multiRobotAInfo",
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
            "start": 402,
            "end": 409,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 404,
              "end": 409,
              "typeName": {
                "type": "Identifier",
                "start": 404,
                "end": 409,
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
        "start": 411,
        "end": 448,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 417,
            "end": 446,
            "expression": {
              "type": "CallExpression",
              "start": 417,
              "end": 445,
              "callee": {
                "type": "MemberExpression",
                "start": 417,
                "end": 428,
                "object": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 424,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 425,
                  "end": 428,
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
                  "start": 429,
                  "end": 444,
                  "name": "multiRobotAInfo",
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
      "start": 450,
      "end": 463,
      "expression": {
        "type": "CallExpression",
        "start": 450,
        "end": 462,
        "callee": {
          "type": "Identifier",
          "start": 450,
          "end": 454,
          "name": "foo1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 455,
            "end": 461,
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
      "start": 464,
      "end": 504,
      "expression": {
        "type": "CallExpression",
        "start": 464,
        "end": 503,
        "callee": {
          "type": "Identifier",
          "start": 464,
          "end": 468,
          "name": "foo1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 469,
            "end": 502,
            "elements": [
              {
                "type": "Literal",
                "start": 470,
                "end": 478,
                "value": "roomba",
                "raw": "\"roomba\""
              },
              {
                "type": "ArrayExpression",
                "start": 480,
                "end": 501,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 481,
                    "end": 489,
                    "value": "vacuum",
                    "raw": "\"vacuum\""
                  },
                  {
                    "type": "Literal",
                    "start": 491,
                    "end": 500,
                    "value": "mopping",
                    "raw": "\"mopping\""
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
      "start": 506,
      "end": 519,
      "expression": {
        "type": "CallExpression",
        "start": 506,
        "end": 518,
        "callee": {
          "type": "Identifier",
          "start": 506,
          "end": 510,
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 511,
            "end": 517,
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
      "start": 520,
      "end": 560,
      "expression": {
        "type": "CallExpression",
        "start": 520,
        "end": 559,
        "callee": {
          "type": "Identifier",
          "start": 520,
          "end": 524,
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 525,
            "end": 558,
            "elements": [
              {
                "type": "Literal",
                "start": 526,
                "end": 534,
                "value": "roomba",
                "raw": "\"roomba\""
              },
              {
                "type": "ArrayExpression",
                "start": 536,
                "end": 557,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 537,
                    "end": 545,
                    "value": "vacuum",
                    "raw": "\"vacuum\""
                  },
                  {
                    "type": "Literal",
                    "start": 547,
                    "end": 556,
                    "value": "mopping",
                    "raw": "\"mopping\""
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
      "start": 562,
      "end": 575,
      "expression": {
        "type": "CallExpression",
        "start": 562,
        "end": 574,
        "callee": {
          "type": "Identifier",
          "start": 562,
          "end": 566,
          "name": "foo3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 567,
            "end": 573,
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
      "start": 576,
      "end": 616,
      "expression": {
        "type": "CallExpression",
        "start": 576,
        "end": 615,
        "callee": {
          "type": "Identifier",
          "start": 576,
          "end": 580,
          "name": "foo3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 581,
            "end": 614,
            "elements": [
              {
                "type": "Literal",
                "start": 582,
                "end": 590,
                "value": "roomba",
                "raw": "\"roomba\""
              },
              {
                "type": "ArrayExpression",
                "start": 592,
                "end": 613,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 593,
                    "end": 601,
                    "value": "vacuum",
                    "raw": "\"vacuum\""
                  },
                  {
                    "type": "Literal",
                    "start": 603,
                    "end": 612,
                    "value": "mopping",
                    "raw": "\"mopping\""
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
      "start": 618,
      "end": 631,
      "expression": {
        "type": "CallExpression",
        "start": 618,
        "end": 630,
        "callee": {
          "type": "Identifier",
          "start": 618,
          "end": 622,
          "name": "foo4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 623,
            "end": 629,
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
      "start": 632,
      "end": 672,
      "expression": {
        "type": "CallExpression",
        "start": 632,
        "end": 671,
        "callee": {
          "type": "Identifier",
          "start": 632,
          "end": 636,
          "name": "foo4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 637,
            "end": 670,
            "elements": [
              {
                "type": "Literal",
                "start": 638,
                "end": 646,
                "value": "roomba",
                "raw": "\"roomba\""
              },
              {
                "type": "ArrayExpression",
                "start": 648,
                "end": 669,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 649,
                    "end": 657,
                    "value": "vacuum",
                    "raw": "\"vacuum\""
                  },
                  {
                    "type": "Literal",
                    "start": 659,
                    "end": 668,
                    "value": "mopping",
                    "raw": "\"mopping\""
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
