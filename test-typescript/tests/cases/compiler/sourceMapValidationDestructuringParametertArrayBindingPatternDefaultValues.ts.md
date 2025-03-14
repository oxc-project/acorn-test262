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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
                      "decorators": [],
                      "name": "log",
                      "optional": false
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
                    "static": false
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
      "end": 88,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 60,
        "decorators": [],
        "name": "Robot",
        "optional": false
      },
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
      }
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
          "definite": false,
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
                  "optional": false
                }
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 113,
                "end": 120,
                "raw": "\"mower\"",
                "value": "mower"
              },
              {
                "type": "Literal",
                "start": 122,
                "end": 130,
                "raw": "\"mowing\"",
                "value": "mowing"
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
      "start": 134,
      "end": 228,
      "async": false,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 219,
                  "end": 224,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 207,
                "end": 218,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 214,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 218,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 147,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 148,
          "end": 199,
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "start": 148,
            "end": 175,
            "decorators": [],
            "elements": [
              null,
              {
                "type": "AssignmentPattern",
                "start": 151,
                "end": 167,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 156,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 159,
                  "end": 167,
                  "raw": "\"noName\"",
                  "value": "noName"
                }
              }
            ],
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
                  "decorators": [],
                  "name": "Robot",
                  "optional": false
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ArrayExpression",
            "start": 178,
            "end": 199,
            "elements": [
              {
                "type": "UnaryExpression",
                "start": 179,
                "end": 181,
                "argument": {
                  "type": "Literal",
                  "start": 180,
                  "end": 181,
                  "raw": "1",
                  "value": 1
                },
                "operator": "-",
                "prefix": true
              },
              {
                "type": "Literal",
                "start": 183,
                "end": 189,
                "raw": "\"name\"",
                "value": "name"
              },
              {
                "type": "Literal",
                "start": 191,
                "end": 198,
                "raw": "\"skill\"",
                "value": "skill"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 230,
      "end": 320,
      "async": false,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 309,
                  "end": 316,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 297,
                "end": 308,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 304,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 308,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 243,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 244,
          "end": 289,
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "start": 244,
            "end": 265,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 245,
                "end": 257,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 252,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "UnaryExpression",
                  "start": 255,
                  "end": 257,
                  "argument": {
                    "type": "Literal",
                    "start": 256,
                    "end": 257,
                    "raw": "1",
                    "value": 1
                  },
                  "operator": "-",
                  "prefix": true
                }
              }
            ],
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
                  "decorators": [],
                  "name": "Robot",
                  "optional": false
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ArrayExpression",
            "start": 268,
            "end": 289,
            "elements": [
              {
                "type": "UnaryExpression",
                "start": 269,
                "end": 271,
                "argument": {
                  "type": "Literal",
                  "start": 270,
                  "end": 271,
                  "raw": "1",
                  "value": 1
                },
                "operator": "-",
                "prefix": true
              },
              {
                "type": "Literal",
                "start": 273,
                "end": 279,
                "raw": "\"name\"",
                "value": "name"
              },
              {
                "type": "Literal",
                "start": 281,
                "end": 288,
                "raw": "\"skill\"",
                "value": "skill"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 322,
      "end": 448,
      "async": false,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 438,
                  "end": 444,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 426,
                "end": 437,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 433,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 434,
                  "end": 437,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 331,
        "end": 335,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 336,
          "end": 418,
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "start": 336,
            "end": 394,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 337,
                "end": 350,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 345,
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "UnaryExpression",
                  "start": 348,
                  "end": 350,
                  "argument": {
                    "type": "Literal",
                    "start": 349,
                    "end": 350,
                    "raw": "1",
                    "value": 1
                  },
                  "operator": "-",
                  "prefix": true
                }
              },
              {
                "type": "AssignmentPattern",
                "start": 352,
                "end": 367,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 358,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 361,
                  "end": 367,
                  "raw": "\"name\"",
                  "value": "name"
                }
              },
              {
                "type": "AssignmentPattern",
                "start": 369,
                "end": 386,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 369,
                  "end": 376,
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 379,
                  "end": 386,
                  "raw": "\"skill\"",
                  "value": "skill"
                }
              }
            ],
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
                  "decorators": [],
                  "name": "Robot",
                  "optional": false
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ArrayExpression",
            "start": 397,
            "end": 418,
            "elements": [
              {
                "type": "UnaryExpression",
                "start": 398,
                "end": 400,
                "argument": {
                  "type": "Literal",
                  "start": 399,
                  "end": 400,
                  "raw": "1",
                  "value": 1
                },
                "operator": "-",
                "prefix": true
              },
              {
                "type": "Literal",
                "start": 402,
                "end": 408,
                "raw": "\"name\"",
                "value": "name"
              },
              {
                "type": "Literal",
                "start": 410,
                "end": 417,
                "raw": "\"skill\"",
                "value": "skill"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 450,
      "end": 559,
      "async": false,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 545,
                  "end": 555,
                  "decorators": [],
                  "name": "robotAInfo",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 533,
                "end": 544,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 533,
                  "end": 540,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 541,
                  "end": 544,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 459,
        "end": 463,
        "decorators": [],
        "name": "foo4",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 464,
          "end": 525,
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "start": 464,
            "end": 501,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 465,
                "end": 478,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 465,
                  "end": 473,
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "UnaryExpression",
                  "start": 476,
                  "end": 478,
                  "argument": {
                    "type": "Literal",
                    "start": 477,
                    "end": 478,
                    "raw": "1",
                    "value": 1
                  },
                  "operator": "-",
                  "prefix": true
                }
              },
              {
                "type": "RestElement",
                "start": 480,
                "end": 493,
                "argument": {
                  "type": "Identifier",
                  "start": 483,
                  "end": 493,
                  "decorators": [],
                  "name": "robotAInfo",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                  "decorators": [],
                  "name": "Robot",
                  "optional": false
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ArrayExpression",
            "start": 504,
            "end": 525,
            "elements": [
              {
                "type": "UnaryExpression",
                "start": 505,
                "end": 507,
                "argument": {
                  "type": "Literal",
                  "start": 506,
                  "end": 507,
                  "raw": "1",
                  "value": 1
                },
                "operator": "-",
                "prefix": true
              },
              {
                "type": "Literal",
                "start": 509,
                "end": 515,
                "raw": "\"name\"",
                "value": "name"
              },
              {
                "type": "Literal",
                "start": 517,
                "end": 524,
                "raw": "\"skill\"",
                "value": "skill"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 561,
      "end": 574,
      "expression": {
        "type": "CallExpression",
        "start": 561,
        "end": 573,
        "arguments": [
          {
            "type": "Identifier",
            "start": 566,
            "end": 572,
            "decorators": [],
            "name": "robotA",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 561,
          "end": 565,
          "decorators": [],
          "name": "foo1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 575,
      "end": 608,
      "expression": {
        "type": "CallExpression",
        "start": 575,
        "end": 607,
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
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 584,
                "end": 593,
                "raw": "\"trimmer\"",
                "value": "trimmer"
              },
              {
                "type": "Literal",
                "start": 595,
                "end": 605,
                "raw": "\"trimming\"",
                "value": "trimming"
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 575,
          "end": 579,
          "decorators": [],
          "name": "foo1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 610,
      "end": 623,
      "expression": {
        "type": "CallExpression",
        "start": 610,
        "end": 622,
        "arguments": [
          {
            "type": "Identifier",
            "start": 615,
            "end": 621,
            "decorators": [],
            "name": "robotA",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 610,
          "end": 614,
          "decorators": [],
          "name": "foo2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 624,
      "end": 657,
      "expression": {
        "type": "CallExpression",
        "start": 624,
        "end": 656,
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
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 633,
                "end": 642,
                "raw": "\"trimmer\"",
                "value": "trimmer"
              },
              {
                "type": "Literal",
                "start": 644,
                "end": 654,
                "raw": "\"trimming\"",
                "value": "trimming"
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 624,
          "end": 628,
          "decorators": [],
          "name": "foo2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 659,
      "end": 672,
      "expression": {
        "type": "CallExpression",
        "start": 659,
        "end": 671,
        "arguments": [
          {
            "type": "Identifier",
            "start": 664,
            "end": 670,
            "decorators": [],
            "name": "robotA",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 659,
          "end": 663,
          "decorators": [],
          "name": "foo3",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 673,
      "end": 706,
      "expression": {
        "type": "CallExpression",
        "start": 673,
        "end": 705,
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
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 682,
                "end": 691,
                "raw": "\"trimmer\"",
                "value": "trimmer"
              },
              {
                "type": "Literal",
                "start": 693,
                "end": 703,
                "raw": "\"trimming\"",
                "value": "trimming"
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 673,
          "end": 677,
          "decorators": [],
          "name": "foo3",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 708,
      "end": 721,
      "expression": {
        "type": "CallExpression",
        "start": 708,
        "end": 720,
        "arguments": [
          {
            "type": "Identifier",
            "start": 713,
            "end": 719,
            "decorators": [],
            "name": "robotA",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 708,
          "end": 712,
          "decorators": [],
          "name": "foo4",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 722,
      "end": 755,
      "expression": {
        "type": "CallExpression",
        "start": 722,
        "end": 754,
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
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 731,
                "end": 740,
                "raw": "\"trimmer\"",
                "value": "trimmer"
              },
              {
                "type": "Literal",
                "start": 742,
                "end": 752,
                "raw": "\"trimming\"",
                "value": "trimming"
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 722,
          "end": 726,
          "decorators": [],
          "name": "foo4",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
