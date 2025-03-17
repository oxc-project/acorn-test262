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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Robot",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "skill",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 111,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 111,
            "name": "console",
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
                        "start": 90,
                        "end": 101,
                        "name": "msg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 93,
                          "end": 101,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 95,
                            "end": 101
                          }
                        },
                        "decorators": [],
                        "optional": false
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
      "type": "VariableDeclaration",
      "start": 112,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 131,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 121,
            "name": "hello",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 150,
            "name": "robotA",
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
            "type": "ObjectExpression",
            "start": 153,
            "end": 187,
            "properties": [
              {
                "type": "Property",
                "start": 155,
                "end": 168,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 159,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 161,
                  "end": 168,
                  "value": "mower",
                  "raw": "\"mower\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 170,
                "end": 185,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 175,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 177,
                  "end": 185,
                  "value": "mowing",
                  "raw": "\"mowing\""
                },
                "kind": "init",
                "optional": false
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
      "start": 190,
      "end": 274,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 203,
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
          "start": 204,
          "end": 245,
          "left": {
            "type": "ObjectPattern",
            "start": 204,
            "end": 239,
            "properties": [
              {
                "type": "Property",
                "start": 206,
                "end": 230,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 210,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 212,
                  "end": 230,
                  "left": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 217,
                    "name": "nameA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 220,
                    "end": 230,
                    "value": "<NoName>",
                    "raw": "\"<NoName>\""
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
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
            "type": "ObjectExpression",
            "start": 242,
            "end": 245,
            "properties": []
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
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
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 264,
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
                  "start": 265,
                  "end": 270,
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
      "start": 275,
      "end": 385,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 288,
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
          "start": 289,
          "end": 356,
          "left": {
            "type": "ObjectPattern",
            "start": 289,
            "end": 351,
            "properties": [
              {
                "type": "Property",
                "start": 291,
                "end": 315,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 295,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 297,
                  "end": 315,
                  "left": {
                    "type": "Identifier",
                    "start": 297,
                    "end": 302,
                    "name": "nameB",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 305,
                    "end": 315,
                    "value": "<NoName>",
                    "raw": "\"<NoName>\""
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 317,
                "end": 342,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 317,
                  "end": 322,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 324,
                  "end": 342,
                  "left": {
                    "type": "Identifier",
                    "start": 324,
                    "end": 330,
                    "name": "skillB",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 333,
                    "end": 342,
                    "value": "noSkill",
                    "raw": "\"noSkill\""
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
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
            "type": "ObjectExpression",
            "start": 354,
            "end": 356,
            "properties": []
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
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
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 375,
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
                  "start": 376,
                  "end": 381,
                  "name": "nameB",
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
      "start": 386,
      "end": 461,
      "id": {
        "type": "Identifier",
        "start": 395,
        "end": 399,
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
          "start": 400,
          "end": 433,
          "left": {
            "type": "ObjectPattern",
            "start": 400,
            "end": 428,
            "properties": [
              {
                "type": "Property",
                "start": 402,
                "end": 419,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 406,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 402,
                  "end": 419,
                  "left": {
                    "type": "Identifier",
                    "start": 402,
                    "end": 406,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 409,
                    "end": 419,
                    "value": "<NoName>",
                    "raw": "\"<NoName>\""
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
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
            "type": "ObjectExpression",
            "start": 431,
            "end": 433,
            "properties": []
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
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
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 449,
                  "end": 452,
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
                  "start": 453,
                  "end": 457,
                  "name": "name",
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
          "name": "foo1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 468,
            "end": 474,
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
          "name": "foo1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 484,
                  "end": 488,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 490,
                  "end": 497,
                  "value": "Edger",
                  "raw": "\"Edger\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 499,
                "end": 521,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 499,
                  "end": 504,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 506,
                  "end": 521,
                  "value": "cutting edges",
                  "raw": "\"cutting edges\""
                },
                "kind": "init",
                "optional": false
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
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 532,
            "end": 538,
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
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 548,
                  "end": 552,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 554,
                  "end": 561,
                  "value": "Edger",
                  "raw": "\"Edger\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 563,
                "end": 585,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 563,
                  "end": 568,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 570,
                  "end": 585,
                  "value": "cutting edges",
                  "raw": "\"cutting edges\""
                },
                "kind": "init",
                "optional": false
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
          "name": "foo3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 596,
            "end": 602,
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
          "name": "foo3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 612,
                  "end": 616,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 618,
                  "end": 625,
                  "value": "Edger",
                  "raw": "\"Edger\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 627,
                "end": 649,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 627,
                  "end": 632,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 634,
                  "end": 649,
                  "value": "cutting edges",
                  "raw": "\"cutting edges\""
                },
                "kind": "init",
                "optional": false
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
