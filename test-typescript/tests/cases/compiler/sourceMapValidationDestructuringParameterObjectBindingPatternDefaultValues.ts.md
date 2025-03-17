__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 654,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 58,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 58,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 36,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 26,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 35,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 29,
                "end": 35
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 41,
            "end": 56,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 46,
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 55,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 49,
                "end": 55
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 111,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 111,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 111,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 80,
                "end": 111,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 86,
                    "end": 109,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 89,
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
                        "start": 90,
                        "end": 101,
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 93,
                          "end": 101,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 95,
                            "end": 101
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 102,
                      "end": 108,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 104,
                        "end": 108
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
      "type": "VariableDeclaration",
      "start": 112,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 131,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 121,
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 124,
            "end": 131,
            "raw": "\"hello\"",
            "value": "hello"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 133,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 187,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 150,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 150,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 145,
                "end": 150,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 150,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 153,
            "end": 187,
            "properties": [
              {
                "type": "Property",
                "start": 155,
                "end": 168,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 159,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 161,
                  "end": 168,
                  "raw": "\"mower\"",
                  "value": "mower"
                }
              },
              {
                "type": "Property",
                "start": 170,
                "end": 185,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 175,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 177,
                  "end": 185,
                  "raw": "\"mowing\"",
                  "value": "mowing"
                }
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
      "start": 190,
      "end": 274,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 247,
        "end": 274,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 253,
            "end": 272,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 253,
              "end": 271,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 265,
                  "end": 270,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 253,
                "end": 264,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 260,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 264,
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
        "start": 199,
        "end": 203,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 204,
          "end": 245,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 204,
            "end": 239,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 206,
                "end": 230,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 210,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 212,
                  "end": 230,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 217,
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 220,
                    "end": 230,
                    "raw": "\"<NoName>\"",
                    "value": "<NoName>"
                  },
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 232,
              "end": 239,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 234,
                "end": 239,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 239,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 242,
            "end": 245,
            "properties": []
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 275,
      "end": 385,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 358,
        "end": 385,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 364,
            "end": 383,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 364,
              "end": 382,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 376,
                  "end": 381,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 364,
                "end": 375,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 371,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 375,
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
        "start": 284,
        "end": 288,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 289,
          "end": 356,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 289,
            "end": 351,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 291,
                "end": 315,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 295,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 297,
                  "end": 315,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 297,
                    "end": 302,
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 305,
                    "end": 315,
                    "raw": "\"<NoName>\"",
                    "value": "<NoName>"
                  },
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 317,
                "end": 342,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 317,
                  "end": 322,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 324,
                  "end": 342,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 324,
                    "end": 330,
                    "decorators": [],
                    "name": "skillB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 333,
                    "end": 342,
                    "raw": "\"noSkill\"",
                    "value": "noSkill"
                  },
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 344,
              "end": 351,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 346,
                "end": 351,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 346,
                  "end": 351,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 354,
            "end": 356,
            "properties": []
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 386,
      "end": 461,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 435,
        "end": 461,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 441,
            "end": 459,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 441,
              "end": 458,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 453,
                  "end": 457,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 441,
                "end": 452,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 448,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 449,
                  "end": 452,
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
        "start": 395,
        "end": 399,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 400,
          "end": 433,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 400,
            "end": 428,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 402,
                "end": 419,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 406,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 402,
                  "end": 419,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 402,
                    "end": 406,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 409,
                    "end": 419,
                    "raw": "\"<NoName>\"",
                    "value": "<NoName>"
                  },
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 421,
              "end": 428,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 423,
                "end": 428,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 428,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 431,
            "end": 433,
            "properties": []
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 463,
      "end": 476,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 463,
        "end": 475,
        "arguments": [
          {
            "type": "Identifier",
            "start": 468,
            "end": 474,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 463,
          "end": 467,
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
      "start": 477,
      "end": 525,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 477,
        "end": 524,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 482,
            "end": 523,
            "properties": [
              {
                "type": "Property",
                "start": 484,
                "end": 497,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 484,
                  "end": 488,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 490,
                  "end": 497,
                  "raw": "\"Edger\"",
                  "value": "Edger"
                }
              },
              {
                "type": "Property",
                "start": 499,
                "end": 521,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 499,
                  "end": 504,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 506,
                  "end": 521,
                  "raw": "\"cutting edges\"",
                  "value": "cutting edges"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 477,
          "end": 481,
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
      "start": 527,
      "end": 540,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 527,
        "end": 539,
        "arguments": [
          {
            "type": "Identifier",
            "start": 532,
            "end": 538,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 527,
          "end": 531,
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
      "start": 541,
      "end": 589,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 541,
        "end": 588,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 546,
            "end": 587,
            "properties": [
              {
                "type": "Property",
                "start": 548,
                "end": 561,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 548,
                  "end": 552,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 554,
                  "end": 561,
                  "raw": "\"Edger\"",
                  "value": "Edger"
                }
              },
              {
                "type": "Property",
                "start": 563,
                "end": 585,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 563,
                  "end": 568,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 570,
                  "end": 585,
                  "raw": "\"cutting edges\"",
                  "value": "cutting edges"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 541,
          "end": 545,
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
      "start": 591,
      "end": 604,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 591,
        "end": 603,
        "arguments": [
          {
            "type": "Identifier",
            "start": 596,
            "end": 602,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 591,
          "end": 595,
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
      "start": 605,
      "end": 653,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 605,
        "end": 652,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 610,
            "end": 651,
            "properties": [
              {
                "type": "Property",
                "start": 612,
                "end": 625,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 612,
                  "end": 616,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 618,
                  "end": 625,
                  "raw": "\"Edger\"",
                  "value": "Edger"
                }
              },
              {
                "type": "Property",
                "start": 627,
                "end": 649,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 627,
                  "end": 632,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 634,
                  "end": 649,
                  "raw": "\"cutting edges\"",
                  "value": "cutting edges"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 605,
          "end": 609,
          "decorators": [],
          "name": "foo3",
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
