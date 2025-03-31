__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 755,
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
      "end": 228,
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
          "type": "AssignmentPattern",
          "start": 148,
          "end": 199,
          "left": {
            "type": "ArrayPattern",
            "start": 148,
            "end": 175,
            "elements": [
              null,
              {
                "type": "AssignmentPattern",
                "start": 151,
                "end": 167,
                "left": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 156,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 159,
                  "end": 167,
                  "value": "noName",
                  "raw": "\"noName\""
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 168,
              "end": 175,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 170,
                "end": 175,
                "typeName": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 175,
                  "name": "Robot",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "right": {
            "type": "ArrayExpression",
            "start": 178,
            "end": 199,
            "elements": [
              {
                "type": "UnaryExpression",
                "start": 179,
                "end": 181,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 180,
                  "end": 181,
                  "value": 1,
                  "raw": "1"
                }
              },
              {
                "type": "Literal",
                "start": 183,
                "end": 189,
                "value": "name",
                "raw": "\"name\""
              },
              {
                "type": "Literal",
                "start": 191,
                "end": 198,
                "value": "skill",
                "raw": "\"skill\""
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 201,
        "end": 228,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 207,
            "end": 226,
            "expression": {
              "type": "CallExpression",
              "start": 207,
              "end": 225,
              "callee": {
                "type": "MemberExpression",
                "start": 207,
                "end": 218,
                "object": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 214,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 218,
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
                  "start": 219,
                  "end": 224,
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
      "start": 230,
      "end": 320,
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 243,
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
          "type": "AssignmentPattern",
          "start": 244,
          "end": 289,
          "left": {
            "type": "ArrayPattern",
            "start": 244,
            "end": 265,
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 245,
                "end": 257,
                "left": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 252,
                  "name": "numberB",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "UnaryExpression",
                  "start": 255,
                  "end": 257,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 256,
                    "end": 257,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 258,
              "end": 265,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 260,
                "end": 265,
                "typeName": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 265,
                  "name": "Robot",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "right": {
            "type": "ArrayExpression",
            "start": 268,
            "end": 289,
            "elements": [
              {
                "type": "UnaryExpression",
                "start": 269,
                "end": 271,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 270,
                  "end": 271,
                  "value": 1,
                  "raw": "1"
                }
              },
              {
                "type": "Literal",
                "start": 273,
                "end": 279,
                "value": "name",
                "raw": "\"name\""
              },
              {
                "type": "Literal",
                "start": 281,
                "end": 288,
                "value": "skill",
                "raw": "\"skill\""
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 291,
        "end": 320,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 297,
            "end": 318,
            "expression": {
              "type": "CallExpression",
              "start": 297,
              "end": 317,
              "callee": {
                "type": "MemberExpression",
                "start": 297,
                "end": 308,
                "object": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 304,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 308,
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
                  "start": 309,
                  "end": 316,
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
      "start": 322,
      "end": 448,
      "id": {
        "type": "Identifier",
        "start": 331,
        "end": 335,
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
          "type": "AssignmentPattern",
          "start": 336,
          "end": 418,
          "left": {
            "type": "ArrayPattern",
            "start": 336,
            "end": 394,
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 337,
                "end": 350,
                "left": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 345,
                  "name": "numberA2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "UnaryExpression",
                  "start": 348,
                  "end": 350,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 349,
                    "end": 350,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "AssignmentPattern",
                "start": 352,
                "end": 367,
                "left": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 358,
                  "name": "nameA2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 361,
                  "end": 367,
                  "value": "name",
                  "raw": "\"name\""
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "AssignmentPattern",
                "start": 369,
                "end": 386,
                "left": {
                  "type": "Identifier",
                  "start": 369,
                  "end": 376,
                  "name": "skillA2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 379,
                  "end": 386,
                  "value": "skill",
                  "raw": "\"skill\""
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 387,
              "end": 394,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 389,
                "end": 394,
                "typeName": {
                  "type": "Identifier",
                  "start": 389,
                  "end": 394,
                  "name": "Robot",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "right": {
            "type": "ArrayExpression",
            "start": 397,
            "end": 418,
            "elements": [
              {
                "type": "UnaryExpression",
                "start": 398,
                "end": 400,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 399,
                  "end": 400,
                  "value": 1,
                  "raw": "1"
                }
              },
              {
                "type": "Literal",
                "start": 402,
                "end": 408,
                "value": "name",
                "raw": "\"name\""
              },
              {
                "type": "Literal",
                "start": 410,
                "end": 417,
                "value": "skill",
                "raw": "\"skill\""
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 420,
        "end": 448,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 426,
            "end": 446,
            "expression": {
              "type": "CallExpression",
              "start": 426,
              "end": 445,
              "callee": {
                "type": "MemberExpression",
                "start": 426,
                "end": 437,
                "object": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 433,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 434,
                  "end": 437,
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
                  "start": 438,
                  "end": 444,
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
      "start": 450,
      "end": 559,
      "id": {
        "type": "Identifier",
        "start": 459,
        "end": 463,
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
          "type": "AssignmentPattern",
          "start": 464,
          "end": 525,
          "left": {
            "type": "ArrayPattern",
            "start": 464,
            "end": 501,
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 465,
                "end": 478,
                "left": {
                  "type": "Identifier",
                  "start": 465,
                  "end": 473,
                  "name": "numberA3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "UnaryExpression",
                  "start": 476,
                  "end": 478,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 477,
                    "end": 478,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "RestElement",
                "start": 480,
                "end": 493,
                "argument": {
                  "type": "Identifier",
                  "start": 483,
                  "end": 493,
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
              "start": 494,
              "end": 501,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 496,
                "end": 501,
                "typeName": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 501,
                  "name": "Robot",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "right": {
            "type": "ArrayExpression",
            "start": 504,
            "end": 525,
            "elements": [
              {
                "type": "UnaryExpression",
                "start": 505,
                "end": 507,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Literal",
                  "start": 506,
                  "end": 507,
                  "value": 1,
                  "raw": "1"
                }
              },
              {
                "type": "Literal",
                "start": 509,
                "end": 515,
                "value": "name",
                "raw": "\"name\""
              },
              {
                "type": "Literal",
                "start": 517,
                "end": 524,
                "value": "skill",
                "raw": "\"skill\""
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 527,
        "end": 559,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 533,
            "end": 557,
            "expression": {
              "type": "CallExpression",
              "start": 533,
              "end": 556,
              "callee": {
                "type": "MemberExpression",
                "start": 533,
                "end": 544,
                "object": {
                  "type": "Identifier",
                  "start": 533,
                  "end": 540,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 541,
                  "end": 544,
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
                  "start": 545,
                  "end": 555,
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
      "start": 561,
      "end": 574,
      "expression": {
        "type": "CallExpression",
        "start": 561,
        "end": 573,
        "callee": {
          "type": "Identifier",
          "start": 561,
          "end": 565,
          "name": "foo1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 566,
            "end": 572,
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
      "start": 575,
      "end": 608,
      "expression": {
        "type": "CallExpression",
        "start": 575,
        "end": 607,
        "callee": {
          "type": "Identifier",
          "start": 575,
          "end": 579,
          "name": "foo1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 580,
            "end": 606,
            "elements": [
              {
                "type": "Literal",
                "start": 581,
                "end": 582,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 584,
                "end": 593,
                "value": "trimmer",
                "raw": "\"trimmer\""
              },
              {
                "type": "Literal",
                "start": 595,
                "end": 605,
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
      "start": 610,
      "end": 623,
      "expression": {
        "type": "CallExpression",
        "start": 610,
        "end": 622,
        "callee": {
          "type": "Identifier",
          "start": 610,
          "end": 614,
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 615,
            "end": 621,
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
      "start": 624,
      "end": 657,
      "expression": {
        "type": "CallExpression",
        "start": 624,
        "end": 656,
        "callee": {
          "type": "Identifier",
          "start": 624,
          "end": 628,
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 629,
            "end": 655,
            "elements": [
              {
                "type": "Literal",
                "start": 630,
                "end": 631,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 633,
                "end": 642,
                "value": "trimmer",
                "raw": "\"trimmer\""
              },
              {
                "type": "Literal",
                "start": 644,
                "end": 654,
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
      "start": 659,
      "end": 672,
      "expression": {
        "type": "CallExpression",
        "start": 659,
        "end": 671,
        "callee": {
          "type": "Identifier",
          "start": 659,
          "end": 663,
          "name": "foo3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 664,
            "end": 670,
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
      "start": 673,
      "end": 706,
      "expression": {
        "type": "CallExpression",
        "start": 673,
        "end": 705,
        "callee": {
          "type": "Identifier",
          "start": 673,
          "end": 677,
          "name": "foo3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 678,
            "end": 704,
            "elements": [
              {
                "type": "Literal",
                "start": 679,
                "end": 680,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 682,
                "end": 691,
                "value": "trimmer",
                "raw": "\"trimmer\""
              },
              {
                "type": "Literal",
                "start": 693,
                "end": 703,
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
      "start": 708,
      "end": 721,
      "expression": {
        "type": "CallExpression",
        "start": 708,
        "end": 720,
        "callee": {
          "type": "Identifier",
          "start": 708,
          "end": 712,
          "name": "foo4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 713,
            "end": 719,
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
      "start": 722,
      "end": 755,
      "expression": {
        "type": "CallExpression",
        "start": 722,
        "end": 754,
        "callee": {
          "type": "Identifier",
          "start": 722,
          "end": 726,
          "name": "foo4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 727,
            "end": 753,
            "elements": [
              {
                "type": "Literal",
                "start": 728,
                "end": 729,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 731,
                "end": 740,
                "value": "trimmer",
                "raw": "\"trimmer\""
              },
              {
                "type": "Literal",
                "start": 742,
                "end": 752,
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
