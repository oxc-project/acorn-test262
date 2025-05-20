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
          "definite": false,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
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
                    "readonly": false,
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
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 50,
      "end": 90,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 60,
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 108,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 108,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 103,
                "end": 108,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 108,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
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
                "raw": "\"trimmer\"",
                "value": "trimmer"
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
                    "raw": "\"trimming\"",
                    "value": "trimming"
                  },
                  {
                    "type": "Literal",
                    "start": 136,
                    "end": 144,
                    "raw": "\"edging\"",
                    "value": "edging"
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 149,
      "end": 210,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 182,
        "end": 210,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 188,
            "end": 208,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 188,
              "end": 207,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 200,
                  "end": 206,
                  "decorators": [],
                  "name": "skillA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 188,
                "end": 199,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 195,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 199,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 162,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 163,
          "end": 180,
          "decorators": [],
          "elements": [
            null,
            {
              "type": "Identifier",
              "start": 166,
              "end": 172,
              "decorators": [],
              "name": "skillA",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 173,
            "end": 180,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 175,
              "end": 180,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 175,
                "end": 180,
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 212,
      "end": 271,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 243,
        "end": 271,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 249,
            "end": 269,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 249,
              "end": 268,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 261,
                  "end": 267,
                  "decorators": [],
                  "name": "nameMB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 249,
                "end": 260,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 256,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 260,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 221,
        "end": 225,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 226,
          "end": 241,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 227,
              "end": 233,
              "decorators": [],
              "name": "nameMB",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 234,
            "end": 241,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 236,
              "end": 241,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 236,
                "end": 241,
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 273,
      "end": 366,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 338,
        "end": 366,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 344,
            "end": 364,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 344,
              "end": 363,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 356,
                  "end": 362,
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 344,
                "end": 355,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 351,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 355,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 282,
        "end": 286,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 287,
          "end": 336,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 288,
              "end": 294,
              "decorators": [],
              "name": "nameMA",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrayPattern",
              "start": 296,
              "end": 328,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 297,
                  "end": 310,
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 312,
                  "end": 327,
                  "decorators": [],
                  "name": "secondarySkillA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 329,
            "end": 336,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 331,
              "end": 336,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 331,
                "end": 336,
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 368,
      "end": 448,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 411,
        "end": 448,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 417,
            "end": 446,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 417,
              "end": 445,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 429,
                  "end": 444,
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 417,
                "end": 428,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 424,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 425,
                  "end": 428,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 377,
        "end": 381,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 382,
          "end": 409,
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "start": 383,
              "end": 401,
              "argument": {
                "type": "Identifier",
                "start": 386,
                "end": 401,
                "decorators": [],
                "name": "multiRobotAInfo",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 402,
            "end": 409,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 404,
              "end": 409,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 404,
                "end": 409,
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 450,
      "end": 463,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 450,
        "end": 462,
        "arguments": [
          {
            "type": "Identifier",
            "start": 455,
            "end": 461,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 450,
          "end": 454,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 464,
      "end": 504,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 464,
        "end": 503,
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
                "raw": "\"roomba\"",
                "value": "roomba"
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
                    "raw": "\"vacuum\"",
                    "value": "vacuum"
                  },
                  {
                    "type": "Literal",
                    "start": 491,
                    "end": 500,
                    "raw": "\"mopping\"",
                    "value": "mopping"
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 464,
          "end": 468,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 506,
      "end": 519,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 506,
        "end": 518,
        "arguments": [
          {
            "type": "Identifier",
            "start": 511,
            "end": 517,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 506,
          "end": 510,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 520,
      "end": 560,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 520,
        "end": 559,
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
                "raw": "\"roomba\"",
                "value": "roomba"
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
                    "raw": "\"vacuum\"",
                    "value": "vacuum"
                  },
                  {
                    "type": "Literal",
                    "start": 547,
                    "end": 556,
                    "raw": "\"mopping\"",
                    "value": "mopping"
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 520,
          "end": 524,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 562,
      "end": 575,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 562,
        "end": 574,
        "arguments": [
          {
            "type": "Identifier",
            "start": 567,
            "end": 573,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 562,
          "end": 566,
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 576,
      "end": 616,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 576,
        "end": 615,
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
                "raw": "\"roomba\"",
                "value": "roomba"
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
                    "raw": "\"vacuum\"",
                    "value": "vacuum"
                  },
                  {
                    "type": "Literal",
                    "start": 603,
                    "end": 612,
                    "raw": "\"mopping\"",
                    "value": "mopping"
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 576,
          "end": 580,
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 618,
      "end": 631,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 618,
        "end": 630,
        "arguments": [
          {
            "type": "Identifier",
            "start": 623,
            "end": 629,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 618,
          "end": 622,
          "decorators": [],
          "name": "foo4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 632,
      "end": 672,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 632,
        "end": 671,
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
                "raw": "\"roomba\"",
                "value": "roomba"
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
                    "raw": "\"vacuum\"",
                    "value": "vacuum"
                  },
                  {
                    "type": "Literal",
                    "start": 659,
                    "end": 668,
                    "raw": "\"mopping\"",
                    "value": "mopping"
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 632,
          "end": 636,
          "decorators": [],
          "name": "foo4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
