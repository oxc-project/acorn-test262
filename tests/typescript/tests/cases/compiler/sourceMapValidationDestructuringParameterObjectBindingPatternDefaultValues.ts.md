__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 653,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 58,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 36,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 26,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 35,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 29,
                "end": 35
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 41,
            "end": 56,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 46,
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 55,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 49,
                "end": 55
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 111,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 111,
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
                    "key": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 89,
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
      "type": "VariableDeclaration",
      "start": 112,
      "end": 132,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 131,
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
            "value": "hello",
            "raw": "\"hello\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 133,
      "end": 188,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 187,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 150,
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
            "type": "ObjectExpression",
            "start": 153,
            "end": 187,
            "properties": [
              {
                "type": "Property",
                "start": 155,
                "end": 168,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 159,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 161,
                  "end": 168,
                  "value": "mower",
                  "raw": "\"mower\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 170,
                "end": 185,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 175,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 177,
                  "end": 185,
                  "value": "mowing",
                  "raw": "\"mowing\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
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
      "start": 190,
      "end": 274,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 203,
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
          "type": "AssignmentPattern",
          "start": 204,
          "end": 245,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 204,
            "end": 239,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 206,
                "end": 230,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 210,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                  "right": {
                    "type": "Literal",
                    "start": 220,
                    "end": 230,
                    "value": "<NoName>",
                    "raw": "\"<NoName>\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 232,
              "end": 239,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 234,
                "end": 239,
                "typeName": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 239,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "right": {
            "type": "ObjectExpression",
            "start": 242,
            "end": 245,
            "properties": []
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 247,
        "end": 274,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 253,
            "end": 272,
            "expression": {
              "type": "CallExpression",
              "start": 253,
              "end": 271,
              "callee": {
                "type": "MemberExpression",
                "start": 253,
                "end": 264,
                "object": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 260,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 264,
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
                  "start": 265,
                  "end": 270,
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
      "start": 275,
      "end": 385,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 288,
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
          "type": "AssignmentPattern",
          "start": 289,
          "end": 356,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 289,
            "end": 351,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 291,
                "end": 315,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 295,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                  "right": {
                    "type": "Literal",
                    "start": 305,
                    "end": 315,
                    "value": "<NoName>",
                    "raw": "\"<NoName>\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 317,
                "end": 342,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 317,
                  "end": 322,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                  "right": {
                    "type": "Literal",
                    "start": 333,
                    "end": 342,
                    "value": "noSkill",
                    "raw": "\"noSkill\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 344,
              "end": 351,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 346,
                "end": 351,
                "typeName": {
                  "type": "Identifier",
                  "start": 346,
                  "end": 351,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "right": {
            "type": "ObjectExpression",
            "start": 354,
            "end": 356,
            "properties": []
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 358,
        "end": 385,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 364,
            "end": 383,
            "expression": {
              "type": "CallExpression",
              "start": 364,
              "end": 382,
              "callee": {
                "type": "MemberExpression",
                "start": 364,
                "end": 375,
                "object": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 371,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 375,
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
                  "start": 376,
                  "end": 381,
                  "decorators": [],
                  "name": "nameB",
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
      "start": 386,
      "end": 461,
      "id": {
        "type": "Identifier",
        "start": 395,
        "end": 399,
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
          "type": "AssignmentPattern",
          "start": 400,
          "end": 433,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 400,
            "end": 428,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 402,
                "end": 419,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 406,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                  "right": {
                    "type": "Literal",
                    "start": 409,
                    "end": 419,
                    "value": "<NoName>",
                    "raw": "\"<NoName>\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 421,
              "end": 428,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 423,
                "end": 428,
                "typeName": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 428,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "right": {
            "type": "ObjectExpression",
            "start": 431,
            "end": 433,
            "properties": []
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 435,
        "end": 461,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 441,
            "end": 459,
            "expression": {
              "type": "CallExpression",
              "start": 441,
              "end": 458,
              "callee": {
                "type": "MemberExpression",
                "start": 441,
                "end": 452,
                "object": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 448,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 449,
                  "end": 452,
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
                  "start": 453,
                  "end": 457,
                  "decorators": [],
                  "name": "name",
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
      "start": 463,
      "end": 476,
      "expression": {
        "type": "CallExpression",
        "start": 463,
        "end": 475,
        "callee": {
          "type": "Identifier",
          "start": 463,
          "end": 467,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 477,
      "end": 525,
      "expression": {
        "type": "CallExpression",
        "start": 477,
        "end": 524,
        "callee": {
          "type": "Identifier",
          "start": 477,
          "end": 481,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 484,
                  "end": 488,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 490,
                  "end": 497,
                  "value": "Edger",
                  "raw": "\"Edger\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 499,
                "end": 521,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 499,
                  "end": 504,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 506,
                  "end": 521,
                  "value": "cutting edges",
                  "raw": "\"cutting edges\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
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
      "start": 527,
      "end": 540,
      "expression": {
        "type": "CallExpression",
        "start": 527,
        "end": 539,
        "callee": {
          "type": "Identifier",
          "start": 527,
          "end": 531,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 541,
      "end": 589,
      "expression": {
        "type": "CallExpression",
        "start": 541,
        "end": 588,
        "callee": {
          "type": "Identifier",
          "start": 541,
          "end": 545,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 548,
                  "end": 552,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 554,
                  "end": 561,
                  "value": "Edger",
                  "raw": "\"Edger\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 563,
                "end": 585,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 563,
                  "end": 568,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 570,
                  "end": 585,
                  "value": "cutting edges",
                  "raw": "\"cutting edges\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
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
      "start": 591,
      "end": 604,
      "expression": {
        "type": "CallExpression",
        "start": 591,
        "end": 603,
        "callee": {
          "type": "Identifier",
          "start": 591,
          "end": 595,
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 605,
      "end": 653,
      "expression": {
        "type": "CallExpression",
        "start": 605,
        "end": 652,
        "callee": {
          "type": "Identifier",
          "start": 605,
          "end": 609,
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 612,
                  "end": 616,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 618,
                  "end": 625,
                  "value": "Edger",
                  "raw": "\"Edger\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 627,
                "end": 649,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 627,
                  "end": 632,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 634,
                  "end": 649,
                  "value": "cutting edges",
                  "raw": "\"cutting edges\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
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
