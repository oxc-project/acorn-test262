__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2080,
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
      "type": "TSInterfaceDeclaration",
      "start": 50,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 65,
        "name": "Robot",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 66,
        "end": 106,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 72,
            "end": 85,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 76,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 84,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 78,
                "end": 84
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 90,
            "end": 104,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 95,
              "name": "skill",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 103,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
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
      "type": "TSInterfaceDeclaration",
      "start": 108,
      "end": 223,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 128,
        "name": "MultiRobot",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 129,
        "end": 223,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 135,
            "end": 148,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 139,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 147,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 141,
                "end": 147
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 153,
            "end": 221,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 159,
              "name": "skills",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 220,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 161,
                "end": 220,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 171,
                    "end": 187,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 178,
                      "name": "primary",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 178,
                      "end": 186,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 180,
                        "end": 186
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 196,
                    "end": 214,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 205,
                      "name": "secondary",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 205,
                      "end": 213,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 207,
                        "end": 213
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 225,
      "end": 279,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 278,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 241,
            "name": "robot",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 244,
            "end": 278,
            "properties": [
              {
                "type": "Property",
                "start": 246,
                "end": 259,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 250,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 252,
                  "end": 259,
                  "value": "mower",
                  "raw": "\"mower\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 261,
                "end": 276,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 266,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 268,
                  "end": 276,
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 280,
      "end": 377,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 376,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 306,
            "name": "multiRobot",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 294,
              "end": 306,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 296,
                "end": 306,
                "typeName": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 306,
                  "name": "MultiRobot",
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
            "start": 309,
            "end": 376,
            "properties": [
              {
                "type": "Property",
                "start": 311,
                "end": 324,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 315,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 317,
                  "end": 324,
                  "value": "mower",
                  "raw": "\"mower\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 326,
                "end": 374,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 332,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 334,
                  "end": 374,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 336,
                      "end": 353,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 336,
                        "end": 343,
                        "name": "primary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 345,
                        "end": 353,
                        "value": "mowing",
                        "raw": "\"mowing\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 355,
                      "end": 372,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 355,
                        "end": 364,
                        "name": "secondary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 366,
                        "end": 372,
                        "value": "none",
                        "raw": "\"none\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 378,
      "end": 419,
      "id": {
        "type": "Identifier",
        "start": 387,
        "end": 395,
        "name": "getRobot",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 398,
        "end": 419,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 404,
            "end": 417,
            "argument": {
              "type": "Identifier",
              "start": 411,
              "end": 416,
              "name": "robot",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 420,
      "end": 471,
      "id": {
        "type": "Identifier",
        "start": 429,
        "end": 442,
        "name": "getMultiRobot",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 445,
        "end": 471,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 451,
            "end": 469,
            "argument": {
              "type": "Identifier",
              "start": 458,
              "end": 468,
              "name": "multiRobot",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ForStatement",
      "start": 473,
      "end": 552,
      "init": {
        "type": "VariableDeclaration",
        "start": 478,
        "end": 511,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 482,
            "end": 504,
            "id": {
              "type": "ObjectPattern",
              "start": 482,
              "end": 496,
              "properties": [
                {
                  "type": "Property",
                  "start": 483,
                  "end": 494,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 483,
                    "end": 487,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 489,
                    "end": 494,
                    "name": "nameA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 499,
              "end": 504,
              "name": "robot",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 506,
            "end": 511,
            "id": {
              "type": "Identifier",
              "start": 506,
              "end": 507,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 510,
              "end": 511,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 513,
        "end": 518,
        "left": {
          "type": "Identifier",
          "start": 513,
          "end": 514,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 517,
          "end": 518,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 520,
        "end": 523,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 520,
          "end": 521,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 525,
        "end": 552,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 531,
            "end": 550,
            "expression": {
              "type": "CallExpression",
              "start": 531,
              "end": 549,
              "callee": {
                "type": "MemberExpression",
                "start": 531,
                "end": 542,
                "object": {
                  "type": "Identifier",
                  "start": 531,
                  "end": 538,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 539,
                  "end": 542,
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
                  "start": 543,
                  "end": 548,
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
      }
    },
    {
      "type": "ForStatement",
      "start": 553,
      "end": 637,
      "init": {
        "type": "VariableDeclaration",
        "start": 558,
        "end": 596,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 562,
            "end": 589,
            "id": {
              "type": "ObjectPattern",
              "start": 562,
              "end": 576,
              "properties": [
                {
                  "type": "Property",
                  "start": 563,
                  "end": 574,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 563,
                    "end": 567,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 569,
                    "end": 574,
                    "name": "nameA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 579,
              "end": 589,
              "callee": {
                "type": "Identifier",
                "start": 579,
                "end": 587,
                "name": "getRobot",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 591,
            "end": 596,
            "id": {
              "type": "Identifier",
              "start": 591,
              "end": 592,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 595,
              "end": 596,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 598,
        "end": 603,
        "left": {
          "type": "Identifier",
          "start": 598,
          "end": 599,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 602,
          "end": 603,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 605,
        "end": 608,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 605,
          "end": 606,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 610,
        "end": 637,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 616,
            "end": 635,
            "expression": {
              "type": "CallExpression",
              "start": 616,
              "end": 634,
              "callee": {
                "type": "MemberExpression",
                "start": 616,
                "end": 627,
                "object": {
                  "type": "Identifier",
                  "start": 616,
                  "end": 623,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 624,
                  "end": 627,
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
                  "start": 628,
                  "end": 633,
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
      }
    },
    {
      "type": "ForStatement",
      "start": 638,
      "end": 757,
      "init": {
        "type": "VariableDeclaration",
        "start": 643,
        "end": 716,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 647,
            "end": 709,
            "id": {
              "type": "ObjectPattern",
              "start": 647,
              "end": 661,
              "properties": [
                {
                  "type": "Property",
                  "start": 648,
                  "end": 659,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 648,
                    "end": 652,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 654,
                    "end": 659,
                    "name": "nameA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TSTypeAssertion",
              "start": 664,
              "end": 709,
              "expression": {
                "type": "ObjectExpression",
                "start": 671,
                "end": 709,
                "properties": [
                  {
                    "type": "Property",
                    "start": 673,
                    "end": 688,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 673,
                      "end": 677,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 679,
                      "end": 688,
                      "value": "trimmer",
                      "raw": "\"trimmer\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 690,
                    "end": 707,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 690,
                      "end": 695,
                      "name": "skill",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 697,
                      "end": 707,
                      "value": "trimming",
                      "raw": "\"trimming\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 665,
                "end": 670,
                "typeName": {
                  "type": "Identifier",
                  "start": 665,
                  "end": 670,
                  "name": "Robot",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 711,
            "end": 716,
            "id": {
              "type": "Identifier",
              "start": 711,
              "end": 712,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 715,
              "end": 716,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 718,
        "end": 723,
        "left": {
          "type": "Identifier",
          "start": 718,
          "end": 719,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 722,
          "end": 723,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 725,
        "end": 728,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 725,
          "end": 726,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 730,
        "end": 757,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 736,
            "end": 755,
            "expression": {
              "type": "CallExpression",
              "start": 736,
              "end": 754,
              "callee": {
                "type": "MemberExpression",
                "start": 736,
                "end": 747,
                "object": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 743,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 744,
                  "end": 747,
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
                  "start": 748,
                  "end": 753,
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
      }
    },
    {
      "type": "ForStatement",
      "start": 758,
      "end": 887,
      "init": {
        "type": "VariableDeclaration",
        "start": 763,
        "end": 843,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 767,
            "end": 836,
            "id": {
              "type": "ObjectPattern",
              "start": 767,
              "end": 823,
              "properties": [
                {
                  "type": "Property",
                  "start": 769,
                  "end": 821,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 769,
                    "end": 775,
                    "name": "skills",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 777,
                    "end": 821,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 779,
                        "end": 796,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 779,
                          "end": 786,
                          "name": "primary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 788,
                          "end": 796,
                          "name": "primaryA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 798,
                        "end": 819,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 798,
                          "end": 807,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 809,
                          "end": 819,
                          "name": "secondaryA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
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
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 826,
              "end": 836,
              "name": "multiRobot",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 838,
            "end": 843,
            "id": {
              "type": "Identifier",
              "start": 838,
              "end": 839,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 842,
              "end": 843,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 845,
        "end": 850,
        "left": {
          "type": "Identifier",
          "start": 845,
          "end": 846,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 849,
          "end": 850,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 852,
        "end": 855,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 852,
          "end": 853,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 857,
        "end": 887,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 863,
            "end": 885,
            "expression": {
              "type": "CallExpression",
              "start": 863,
              "end": 884,
              "callee": {
                "type": "MemberExpression",
                "start": 863,
                "end": 874,
                "object": {
                  "type": "Identifier",
                  "start": 863,
                  "end": 870,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 871,
                  "end": 874,
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
                  "start": 875,
                  "end": 883,
                  "name": "primaryA",
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
      }
    },
    {
      "type": "ForStatement",
      "start": 888,
      "end": 1022,
      "init": {
        "type": "VariableDeclaration",
        "start": 893,
        "end": 978,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 897,
            "end": 971,
            "id": {
              "type": "ObjectPattern",
              "start": 897,
              "end": 953,
              "properties": [
                {
                  "type": "Property",
                  "start": 899,
                  "end": 951,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 899,
                    "end": 905,
                    "name": "skills",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 907,
                    "end": 951,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 909,
                        "end": 926,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 909,
                          "end": 916,
                          "name": "primary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 918,
                          "end": 926,
                          "name": "primaryA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 928,
                        "end": 949,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 928,
                          "end": 937,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 939,
                          "end": 949,
                          "name": "secondaryA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
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
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 956,
              "end": 971,
              "callee": {
                "type": "Identifier",
                "start": 956,
                "end": 969,
                "name": "getMultiRobot",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 973,
            "end": 978,
            "id": {
              "type": "Identifier",
              "start": 973,
              "end": 974,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 977,
              "end": 978,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 980,
        "end": 985,
        "left": {
          "type": "Identifier",
          "start": 980,
          "end": 981,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 984,
          "end": 985,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 987,
        "end": 990,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 987,
          "end": 988,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 992,
        "end": 1022,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 998,
            "end": 1020,
            "expression": {
              "type": "CallExpression",
              "start": 998,
              "end": 1019,
              "callee": {
                "type": "MemberExpression",
                "start": 998,
                "end": 1009,
                "object": {
                  "type": "Identifier",
                  "start": 998,
                  "end": 1005,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1006,
                  "end": 1009,
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
                  "start": 1010,
                  "end": 1018,
                  "name": "primaryA",
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
      }
    },
    {
      "type": "ForStatement",
      "start": 1023,
      "end": 1235,
      "init": {
        "type": "VariableDeclaration",
        "start": 1028,
        "end": 1191,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1032,
            "end": 1180,
            "id": {
              "type": "ObjectPattern",
              "start": 1032,
              "end": 1088,
              "properties": [
                {
                  "type": "Property",
                  "start": 1034,
                  "end": 1086,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1034,
                    "end": 1040,
                    "name": "skills",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 1042,
                    "end": 1086,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1044,
                        "end": 1061,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1044,
                          "end": 1051,
                          "name": "primary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1053,
                          "end": 1061,
                          "name": "primaryA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 1063,
                        "end": 1084,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1063,
                          "end": 1072,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1074,
                          "end": 1084,
                          "name": "secondaryA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
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
              "typeAnnotation": null
            },
            "init": {
              "type": "TSTypeAssertion",
              "start": 1095,
              "end": 1180,
              "expression": {
                "type": "ObjectExpression",
                "start": 1107,
                "end": 1180,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1109,
                    "end": 1124,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1109,
                      "end": 1113,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1115,
                      "end": 1124,
                      "value": "trimmer",
                      "raw": "\"trimmer\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1126,
                    "end": 1178,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1126,
                      "end": 1132,
                      "name": "skills",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 1134,
                      "end": 1178,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1136,
                          "end": 1155,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1136,
                            "end": 1143,
                            "name": "primary",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1145,
                            "end": 1155,
                            "value": "trimming",
                            "raw": "\"trimming\""
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1157,
                          "end": 1176,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1157,
                            "end": 1166,
                            "name": "secondary",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1168,
                            "end": 1176,
                            "value": "edging",
                            "raw": "\"edging\""
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1096,
                "end": 1106,
                "typeName": {
                  "type": "Identifier",
                  "start": 1096,
                  "end": 1106,
                  "name": "MultiRobot",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1186,
            "end": 1191,
            "id": {
              "type": "Identifier",
              "start": 1186,
              "end": 1187,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1190,
              "end": 1191,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1193,
        "end": 1198,
        "left": {
          "type": "Identifier",
          "start": 1193,
          "end": 1194,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1197,
          "end": 1198,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1200,
        "end": 1203,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1200,
          "end": 1201,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1205,
        "end": 1235,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1211,
            "end": 1233,
            "expression": {
              "type": "CallExpression",
              "start": 1211,
              "end": 1232,
              "callee": {
                "type": "MemberExpression",
                "start": 1211,
                "end": 1222,
                "object": {
                  "type": "Identifier",
                  "start": 1211,
                  "end": 1218,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1219,
                  "end": 1222,
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
                  "start": 1223,
                  "end": 1231,
                  "name": "primaryA",
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
      }
    },
    {
      "type": "ForStatement",
      "start": 1237,
      "end": 1331,
      "init": {
        "type": "VariableDeclaration",
        "start": 1242,
        "end": 1290,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1246,
            "end": 1283,
            "id": {
              "type": "ObjectPattern",
              "start": 1246,
              "end": 1275,
              "properties": [
                {
                  "type": "Property",
                  "start": 1247,
                  "end": 1258,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1247,
                    "end": 1251,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1253,
                    "end": 1258,
                    "name": "nameA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1260,
                  "end": 1273,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1260,
                    "end": 1265,
                    "name": "skill",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1267,
                    "end": 1273,
                    "name": "skillA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 1278,
              "end": 1283,
              "name": "robot",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1285,
            "end": 1290,
            "id": {
              "type": "Identifier",
              "start": 1285,
              "end": 1286,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1289,
              "end": 1290,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1292,
        "end": 1297,
        "left": {
          "type": "Identifier",
          "start": 1292,
          "end": 1293,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1296,
          "end": 1297,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1299,
        "end": 1302,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1299,
          "end": 1300,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1304,
        "end": 1331,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1310,
            "end": 1329,
            "expression": {
              "type": "CallExpression",
              "start": 1310,
              "end": 1328,
              "callee": {
                "type": "MemberExpression",
                "start": 1310,
                "end": 1321,
                "object": {
                  "type": "Identifier",
                  "start": 1310,
                  "end": 1317,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1318,
                  "end": 1321,
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
                  "start": 1322,
                  "end": 1327,
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
      }
    },
    {
      "type": "ForStatement",
      "start": 1332,
      "end": 1431,
      "init": {
        "type": "VariableDeclaration",
        "start": 1337,
        "end": 1390,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1341,
            "end": 1383,
            "id": {
              "type": "ObjectPattern",
              "start": 1341,
              "end": 1370,
              "properties": [
                {
                  "type": "Property",
                  "start": 1342,
                  "end": 1353,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1342,
                    "end": 1346,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1348,
                    "end": 1353,
                    "name": "nameA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1355,
                  "end": 1368,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1355,
                    "end": 1360,
                    "name": "skill",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1362,
                    "end": 1368,
                    "name": "skillA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 1373,
              "end": 1383,
              "callee": {
                "type": "Identifier",
                "start": 1373,
                "end": 1381,
                "name": "getRobot",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1385,
            "end": 1390,
            "id": {
              "type": "Identifier",
              "start": 1385,
              "end": 1386,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1389,
              "end": 1390,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1392,
        "end": 1397,
        "left": {
          "type": "Identifier",
          "start": 1392,
          "end": 1393,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1396,
          "end": 1397,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1399,
        "end": 1402,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1399,
          "end": 1400,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1404,
        "end": 1431,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1410,
            "end": 1429,
            "expression": {
              "type": "CallExpression",
              "start": 1410,
              "end": 1428,
              "callee": {
                "type": "MemberExpression",
                "start": 1410,
                "end": 1421,
                "object": {
                  "type": "Identifier",
                  "start": 1410,
                  "end": 1417,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1418,
                  "end": 1421,
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
                  "start": 1422,
                  "end": 1427,
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
      }
    },
    {
      "type": "ForStatement",
      "start": 1432,
      "end": 1566,
      "init": {
        "type": "VariableDeclaration",
        "start": 1437,
        "end": 1525,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1441,
            "end": 1518,
            "id": {
              "type": "ObjectPattern",
              "start": 1441,
              "end": 1470,
              "properties": [
                {
                  "type": "Property",
                  "start": 1442,
                  "end": 1453,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1442,
                    "end": 1446,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1448,
                    "end": 1453,
                    "name": "nameA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1455,
                  "end": 1468,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1455,
                    "end": 1460,
                    "name": "skill",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1462,
                    "end": 1468,
                    "name": "skillA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TSTypeAssertion",
              "start": 1473,
              "end": 1518,
              "expression": {
                "type": "ObjectExpression",
                "start": 1480,
                "end": 1518,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1482,
                    "end": 1497,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1482,
                      "end": 1486,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1488,
                      "end": 1497,
                      "value": "trimmer",
                      "raw": "\"trimmer\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1499,
                    "end": 1516,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1499,
                      "end": 1504,
                      "name": "skill",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1506,
                      "end": 1516,
                      "value": "trimming",
                      "raw": "\"trimming\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1474,
                "end": 1479,
                "typeName": {
                  "type": "Identifier",
                  "start": 1474,
                  "end": 1479,
                  "name": "Robot",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1520,
            "end": 1525,
            "id": {
              "type": "Identifier",
              "start": 1520,
              "end": 1521,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1524,
              "end": 1525,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1527,
        "end": 1532,
        "left": {
          "type": "Identifier",
          "start": 1527,
          "end": 1528,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1531,
          "end": 1532,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1534,
        "end": 1537,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1534,
          "end": 1535,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1539,
        "end": 1566,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1545,
            "end": 1564,
            "expression": {
              "type": "CallExpression",
              "start": 1545,
              "end": 1563,
              "callee": {
                "type": "MemberExpression",
                "start": 1545,
                "end": 1556,
                "object": {
                  "type": "Identifier",
                  "start": 1545,
                  "end": 1552,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1553,
                  "end": 1556,
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
                  "start": 1557,
                  "end": 1562,
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
      }
    },
    {
      "type": "ForStatement",
      "start": 1567,
      "end": 1708,
      "init": {
        "type": "VariableDeclaration",
        "start": 1572,
        "end": 1664,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1576,
            "end": 1657,
            "id": {
              "type": "ObjectPattern",
              "start": 1576,
              "end": 1644,
              "properties": [
                {
                  "type": "Property",
                  "start": 1577,
                  "end": 1588,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1577,
                    "end": 1581,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1583,
                    "end": 1588,
                    "name": "nameA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1590,
                  "end": 1642,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1590,
                    "end": 1596,
                    "name": "skills",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 1598,
                    "end": 1642,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1600,
                        "end": 1617,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1600,
                          "end": 1607,
                          "name": "primary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1609,
                          "end": 1617,
                          "name": "primaryA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 1619,
                        "end": 1640,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1619,
                          "end": 1628,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1630,
                          "end": 1640,
                          "name": "secondaryA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
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
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 1647,
              "end": 1657,
              "name": "multiRobot",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1659,
            "end": 1664,
            "id": {
              "type": "Identifier",
              "start": 1659,
              "end": 1660,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1663,
              "end": 1664,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1666,
        "end": 1671,
        "left": {
          "type": "Identifier",
          "start": 1666,
          "end": 1667,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1670,
          "end": 1671,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1673,
        "end": 1676,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1673,
          "end": 1674,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1678,
        "end": 1708,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1684,
            "end": 1706,
            "expression": {
              "type": "CallExpression",
              "start": 1684,
              "end": 1705,
              "callee": {
                "type": "MemberExpression",
                "start": 1684,
                "end": 1695,
                "object": {
                  "type": "Identifier",
                  "start": 1684,
                  "end": 1691,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1692,
                  "end": 1695,
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
                  "start": 1696,
                  "end": 1704,
                  "name": "primaryA",
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
      }
    },
    {
      "type": "ForStatement",
      "start": 1709,
      "end": 1855,
      "init": {
        "type": "VariableDeclaration",
        "start": 1714,
        "end": 1811,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1718,
            "end": 1804,
            "id": {
              "type": "ObjectPattern",
              "start": 1718,
              "end": 1786,
              "properties": [
                {
                  "type": "Property",
                  "start": 1719,
                  "end": 1730,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1719,
                    "end": 1723,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1725,
                    "end": 1730,
                    "name": "nameA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1732,
                  "end": 1784,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1732,
                    "end": 1738,
                    "name": "skills",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 1740,
                    "end": 1784,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1742,
                        "end": 1759,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1742,
                          "end": 1749,
                          "name": "primary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1751,
                          "end": 1759,
                          "name": "primaryA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 1761,
                        "end": 1782,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1761,
                          "end": 1770,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1772,
                          "end": 1782,
                          "name": "secondaryA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
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
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 1789,
              "end": 1804,
              "callee": {
                "type": "Identifier",
                "start": 1789,
                "end": 1802,
                "name": "getMultiRobot",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1806,
            "end": 1811,
            "id": {
              "type": "Identifier",
              "start": 1806,
              "end": 1807,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1810,
              "end": 1811,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1813,
        "end": 1818,
        "left": {
          "type": "Identifier",
          "start": 1813,
          "end": 1814,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1817,
          "end": 1818,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1820,
        "end": 1823,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1820,
          "end": 1821,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1825,
        "end": 1855,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1831,
            "end": 1853,
            "expression": {
              "type": "CallExpression",
              "start": 1831,
              "end": 1852,
              "callee": {
                "type": "MemberExpression",
                "start": 1831,
                "end": 1842,
                "object": {
                  "type": "Identifier",
                  "start": 1831,
                  "end": 1838,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1839,
                  "end": 1842,
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
                  "start": 1843,
                  "end": 1851,
                  "name": "primaryA",
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
      }
    },
    {
      "type": "ForStatement",
      "start": 1856,
      "end": 2080,
      "init": {
        "type": "VariableDeclaration",
        "start": 1861,
        "end": 2036,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1865,
            "end": 2025,
            "id": {
              "type": "ObjectPattern",
              "start": 1865,
              "end": 1933,
              "properties": [
                {
                  "type": "Property",
                  "start": 1866,
                  "end": 1877,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1866,
                    "end": 1870,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1872,
                    "end": 1877,
                    "name": "nameA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1879,
                  "end": 1931,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1879,
                    "end": 1885,
                    "name": "skills",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 1887,
                    "end": 1931,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1889,
                        "end": 1906,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1889,
                          "end": 1896,
                          "name": "primary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1898,
                          "end": 1906,
                          "name": "primaryA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 1908,
                        "end": 1929,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1908,
                          "end": 1917,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1919,
                          "end": 1929,
                          "name": "secondaryA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
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
              "typeAnnotation": null
            },
            "init": {
              "type": "TSTypeAssertion",
              "start": 1940,
              "end": 2025,
              "expression": {
                "type": "ObjectExpression",
                "start": 1952,
                "end": 2025,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1954,
                    "end": 1969,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1954,
                      "end": 1958,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1960,
                      "end": 1969,
                      "value": "trimmer",
                      "raw": "\"trimmer\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1971,
                    "end": 2023,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1971,
                      "end": 1977,
                      "name": "skills",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 1979,
                      "end": 2023,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1981,
                          "end": 2000,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1981,
                            "end": 1988,
                            "name": "primary",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1990,
                            "end": 2000,
                            "value": "trimming",
                            "raw": "\"trimming\""
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 2002,
                          "end": 2021,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2002,
                            "end": 2011,
                            "name": "secondary",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2013,
                            "end": 2021,
                            "value": "edging",
                            "raw": "\"edging\""
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1941,
                "end": 1951,
                "typeName": {
                  "type": "Identifier",
                  "start": 1941,
                  "end": 1951,
                  "name": "MultiRobot",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 2031,
            "end": 2036,
            "id": {
              "type": "Identifier",
              "start": 2031,
              "end": 2032,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 2035,
              "end": 2036,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2038,
        "end": 2043,
        "left": {
          "type": "Identifier",
          "start": 2038,
          "end": 2039,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2042,
          "end": 2043,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2045,
        "end": 2048,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2045,
          "end": 2046,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2050,
        "end": 2080,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2056,
            "end": 2078,
            "expression": {
              "type": "CallExpression",
              "start": 2056,
              "end": 2077,
              "callee": {
                "type": "MemberExpression",
                "start": 2056,
                "end": 2067,
                "object": {
                  "type": "Identifier",
                  "start": 2056,
                  "end": 2063,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2064,
                  "end": 2067,
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
                  "start": 2068,
                  "end": 2076,
                  "name": "primaryA",
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
