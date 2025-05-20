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
      "type": "TSInterfaceDeclaration",
      "start": 50,
      "end": 106,
      "body": {
        "type": "TSInterfaceBody",
        "start": 66,
        "end": 106,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 72,
            "end": 85,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 76,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 84,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 78,
                "end": 84
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 90,
            "end": 104,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 95,
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 103,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 65,
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 108,
      "end": 223,
      "body": {
        "type": "TSInterfaceBody",
        "start": 129,
        "end": 223,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 135,
            "end": 148,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 139,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 147,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 141,
                "end": 147
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 153,
            "end": 221,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 159,
              "decorators": [],
              "name": "skills",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 178,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 178,
                      "end": 186,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 180,
                        "end": 186
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 196,
                    "end": 214,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 205,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 205,
                      "end": 213,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 207,
                        "end": 213
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 128,
        "decorators": [],
        "name": "MultiRobot",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 241,
            "decorators": [],
            "name": "robot",
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 250,
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
                  "start": 252,
                  "end": 259,
                  "raw": "\"mower\"",
                  "value": "mower"
                }
              },
              {
                "type": "Property",
                "start": 261,
                "end": 276,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 266,
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
                  "start": 268,
                  "end": 276,
                  "raw": "\"mowing\"",
                  "value": "mowing"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 306,
            "decorators": [],
            "name": "multiRobot",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 294,
              "end": 306,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 296,
                "end": 306,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 306,
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 315,
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
                  "start": 317,
                  "end": 324,
                  "raw": "\"mower\"",
                  "value": "mower"
                }
              },
              {
                "type": "Property",
                "start": 326,
                "end": 374,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 332,
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 334,
                  "end": 374,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 336,
                      "end": 353,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 336,
                        "end": 343,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 345,
                        "end": 353,
                        "raw": "\"mowing\"",
                        "value": "mowing"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 355,
                      "end": 372,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 355,
                        "end": 364,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 366,
                        "end": 372,
                        "raw": "\"none\"",
                        "value": "none"
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 378,
      "end": 419,
      "async": false,
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
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 387,
        "end": 395,
        "decorators": [],
        "name": "getRobot",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 420,
      "end": 471,
      "async": false,
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
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 429,
        "end": 442,
        "decorators": [],
        "name": "getMultiRobot",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ForStatement",
      "start": 473,
      "end": 552,
      "body": {
        "type": "BlockStatement",
        "start": 525,
        "end": 552,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 531,
            "end": 550,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 531,
              "end": 549,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 543,
                  "end": 548,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 531,
                "end": 542,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 531,
                  "end": 538,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 539,
                  "end": 542,
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
      "init": {
        "type": "VariableDeclaration",
        "start": 478,
        "end": 511,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 482,
            "end": 504,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 482,
              "end": 496,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 483,
                  "end": 494,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 483,
                    "end": 487,
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
                    "type": "Identifier",
                    "start": 489,
                    "end": 494,
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 499,
              "end": 504,
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 506,
            "end": 511,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 506,
              "end": 507,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 510,
              "end": 511,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 513,
        "end": 518,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 513,
          "end": 514,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 517,
          "end": 518,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 520,
        "end": 523,
        "argument": {
          "type": "Identifier",
          "start": 520,
          "end": 521,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 553,
      "end": 637,
      "body": {
        "type": "BlockStatement",
        "start": 610,
        "end": 637,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 616,
            "end": 635,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 616,
              "end": 634,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 628,
                  "end": 633,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 616,
                "end": 627,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 616,
                  "end": 623,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 624,
                  "end": 627,
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
      "init": {
        "type": "VariableDeclaration",
        "start": 558,
        "end": 596,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 562,
            "end": 589,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 562,
              "end": 576,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 563,
                  "end": 574,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 563,
                    "end": 567,
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
                    "type": "Identifier",
                    "start": 569,
                    "end": 574,
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 579,
              "end": 589,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 579,
                "end": 587,
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 591,
            "end": 596,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 591,
              "end": 592,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 595,
              "end": 596,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 598,
        "end": 603,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 598,
          "end": 599,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 602,
          "end": 603,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 605,
        "end": 608,
        "argument": {
          "type": "Identifier",
          "start": 605,
          "end": 606,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 638,
      "end": 757,
      "body": {
        "type": "BlockStatement",
        "start": 730,
        "end": 757,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 736,
            "end": 755,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 736,
              "end": 754,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 748,
                  "end": 753,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 736,
                "end": 747,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 743,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 744,
                  "end": 747,
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
      "init": {
        "type": "VariableDeclaration",
        "start": 643,
        "end": 716,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 647,
            "end": 709,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 647,
              "end": 661,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 648,
                  "end": 659,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 648,
                    "end": 652,
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
                    "type": "Identifier",
                    "start": 654,
                    "end": 659,
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 673,
                      "end": 677,
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
                      "start": 679,
                      "end": 688,
                      "raw": "\"trimmer\"",
                      "value": "trimmer"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 690,
                    "end": 707,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 690,
                      "end": 695,
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
                      "start": 697,
                      "end": 707,
                      "raw": "\"trimming\"",
                      "value": "trimming"
                    }
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 665,
                "end": 670,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 665,
                  "end": 670,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 711,
            "end": 716,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 711,
              "end": 712,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 715,
              "end": 716,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 718,
        "end": 723,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 718,
          "end": 719,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 722,
          "end": 723,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 725,
        "end": 728,
        "argument": {
          "type": "Identifier",
          "start": 725,
          "end": 726,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 758,
      "end": 887,
      "body": {
        "type": "BlockStatement",
        "start": 857,
        "end": 887,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 863,
            "end": 885,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 863,
              "end": 884,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 875,
                  "end": 883,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 863,
                "end": 874,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 863,
                  "end": 870,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 871,
                  "end": 874,
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
      "init": {
        "type": "VariableDeclaration",
        "start": 763,
        "end": 843,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 767,
            "end": 836,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 767,
              "end": 823,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 769,
                  "end": 821,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 769,
                    "end": 775,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectPattern",
                    "start": 777,
                    "end": 821,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 779,
                        "end": 796,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 779,
                          "end": 786,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 788,
                          "end": 796,
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 798,
                        "end": 819,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 798,
                          "end": 807,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 809,
                          "end": 819,
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 826,
              "end": 836,
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 838,
            "end": 843,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 838,
              "end": 839,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 842,
              "end": 843,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 845,
        "end": 850,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 845,
          "end": 846,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 849,
          "end": 850,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 852,
        "end": 855,
        "argument": {
          "type": "Identifier",
          "start": 852,
          "end": 853,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 888,
      "end": 1022,
      "body": {
        "type": "BlockStatement",
        "start": 992,
        "end": 1022,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 998,
            "end": 1020,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 998,
              "end": 1019,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1010,
                  "end": 1018,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 998,
                "end": 1009,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 998,
                  "end": 1005,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1006,
                  "end": 1009,
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
      "init": {
        "type": "VariableDeclaration",
        "start": 893,
        "end": 978,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 897,
            "end": 971,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 897,
              "end": 953,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 899,
                  "end": 951,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 899,
                    "end": 905,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectPattern",
                    "start": 907,
                    "end": 951,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 909,
                        "end": 926,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 909,
                          "end": 916,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 918,
                          "end": 926,
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 928,
                        "end": 949,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 928,
                          "end": 937,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 939,
                          "end": 949,
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 956,
              "end": 971,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 956,
                "end": 969,
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 973,
            "end": 978,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 973,
              "end": 974,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 977,
              "end": 978,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 980,
        "end": 985,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 980,
          "end": 981,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 984,
          "end": 985,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 987,
        "end": 990,
        "argument": {
          "type": "Identifier",
          "start": 987,
          "end": 988,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 1023,
      "end": 1235,
      "body": {
        "type": "BlockStatement",
        "start": 1205,
        "end": 1235,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1211,
            "end": 1233,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1211,
              "end": 1232,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1223,
                  "end": 1231,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1211,
                "end": 1222,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1211,
                  "end": 1218,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1219,
                  "end": 1222,
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
      "init": {
        "type": "VariableDeclaration",
        "start": 1028,
        "end": 1191,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1032,
            "end": 1180,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 1032,
              "end": 1088,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 1034,
                  "end": 1086,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1034,
                    "end": 1040,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectPattern",
                    "start": 1042,
                    "end": 1086,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1044,
                        "end": 1061,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1044,
                          "end": 1051,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 1053,
                          "end": 1061,
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 1063,
                        "end": 1084,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1063,
                          "end": 1072,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 1074,
                          "end": 1084,
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "typeAnnotation": null
                  }
                }
              ],
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1109,
                      "end": 1113,
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
                      "start": 1115,
                      "end": 1124,
                      "raw": "\"trimmer\"",
                      "value": "trimmer"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 1126,
                    "end": 1178,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1126,
                      "end": 1132,
                      "decorators": [],
                      "name": "skills",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 1134,
                      "end": 1178,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1136,
                          "end": 1155,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1136,
                            "end": 1143,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 1145,
                            "end": 1155,
                            "raw": "\"trimming\"",
                            "value": "trimming"
                          }
                        },
                        {
                          "type": "Property",
                          "start": 1157,
                          "end": 1176,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1157,
                            "end": 1166,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 1168,
                            "end": 1176,
                            "raw": "\"edging\"",
                            "value": "edging"
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1096,
                "end": 1106,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1096,
                  "end": 1106,
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 1186,
            "end": 1191,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1186,
              "end": 1187,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1190,
              "end": 1191,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1193,
        "end": 1198,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1193,
          "end": 1194,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1197,
          "end": 1198,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1200,
        "end": 1203,
        "argument": {
          "type": "Identifier",
          "start": 1200,
          "end": 1201,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 1237,
      "end": 1331,
      "body": {
        "type": "BlockStatement",
        "start": 1304,
        "end": 1331,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1310,
            "end": 1329,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1310,
              "end": 1328,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1322,
                  "end": 1327,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1310,
                "end": 1321,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1310,
                  "end": 1317,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1318,
                  "end": 1321,
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
      "init": {
        "type": "VariableDeclaration",
        "start": 1242,
        "end": 1290,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1246,
            "end": 1283,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 1246,
              "end": 1275,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 1247,
                  "end": 1258,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1247,
                    "end": 1251,
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
                    "type": "Identifier",
                    "start": 1253,
                    "end": 1258,
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 1260,
                  "end": 1273,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1260,
                    "end": 1265,
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
                    "type": "Identifier",
                    "start": 1267,
                    "end": 1273,
                    "decorators": [],
                    "name": "skillA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 1278,
              "end": 1283,
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 1285,
            "end": 1290,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1285,
              "end": 1286,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1289,
              "end": 1290,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1292,
        "end": 1297,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1292,
          "end": 1293,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1296,
          "end": 1297,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1299,
        "end": 1302,
        "argument": {
          "type": "Identifier",
          "start": 1299,
          "end": 1300,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 1332,
      "end": 1431,
      "body": {
        "type": "BlockStatement",
        "start": 1404,
        "end": 1431,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1410,
            "end": 1429,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1410,
              "end": 1428,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1422,
                  "end": 1427,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1410,
                "end": 1421,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1410,
                  "end": 1417,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1418,
                  "end": 1421,
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
      "init": {
        "type": "VariableDeclaration",
        "start": 1337,
        "end": 1390,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1341,
            "end": 1383,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 1341,
              "end": 1370,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 1342,
                  "end": 1353,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1342,
                    "end": 1346,
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
                    "type": "Identifier",
                    "start": 1348,
                    "end": 1353,
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 1355,
                  "end": 1368,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1355,
                    "end": 1360,
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
                    "type": "Identifier",
                    "start": 1362,
                    "end": 1368,
                    "decorators": [],
                    "name": "skillA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 1373,
              "end": 1383,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1373,
                "end": 1381,
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 1385,
            "end": 1390,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1385,
              "end": 1386,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1389,
              "end": 1390,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1392,
        "end": 1397,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1392,
          "end": 1393,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1396,
          "end": 1397,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1399,
        "end": 1402,
        "argument": {
          "type": "Identifier",
          "start": 1399,
          "end": 1400,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 1432,
      "end": 1566,
      "body": {
        "type": "BlockStatement",
        "start": 1539,
        "end": 1566,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1545,
            "end": 1564,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1545,
              "end": 1563,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1557,
                  "end": 1562,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1545,
                "end": 1556,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1545,
                  "end": 1552,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1553,
                  "end": 1556,
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
      "init": {
        "type": "VariableDeclaration",
        "start": 1437,
        "end": 1525,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1441,
            "end": 1518,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 1441,
              "end": 1470,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 1442,
                  "end": 1453,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1442,
                    "end": 1446,
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
                    "type": "Identifier",
                    "start": 1448,
                    "end": 1453,
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 1455,
                  "end": 1468,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1455,
                    "end": 1460,
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
                    "type": "Identifier",
                    "start": 1462,
                    "end": 1468,
                    "decorators": [],
                    "name": "skillA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1482,
                      "end": 1486,
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
                      "start": 1488,
                      "end": 1497,
                      "raw": "\"trimmer\"",
                      "value": "trimmer"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 1499,
                    "end": 1516,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1499,
                      "end": 1504,
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
                      "start": 1506,
                      "end": 1516,
                      "raw": "\"trimming\"",
                      "value": "trimming"
                    }
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1474,
                "end": 1479,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1474,
                  "end": 1479,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 1520,
            "end": 1525,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1520,
              "end": 1521,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1524,
              "end": 1525,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1527,
        "end": 1532,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1527,
          "end": 1528,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1531,
          "end": 1532,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1534,
        "end": 1537,
        "argument": {
          "type": "Identifier",
          "start": 1534,
          "end": 1535,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 1567,
      "end": 1708,
      "body": {
        "type": "BlockStatement",
        "start": 1678,
        "end": 1708,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1684,
            "end": 1706,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1684,
              "end": 1705,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1696,
                  "end": 1704,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1684,
                "end": 1695,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1684,
                  "end": 1691,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1692,
                  "end": 1695,
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
      "init": {
        "type": "VariableDeclaration",
        "start": 1572,
        "end": 1664,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1576,
            "end": 1657,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 1576,
              "end": 1644,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 1577,
                  "end": 1588,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1577,
                    "end": 1581,
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
                    "type": "Identifier",
                    "start": 1583,
                    "end": 1588,
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 1590,
                  "end": 1642,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1590,
                    "end": 1596,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectPattern",
                    "start": 1598,
                    "end": 1642,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1600,
                        "end": 1617,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1600,
                          "end": 1607,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 1609,
                          "end": 1617,
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 1619,
                        "end": 1640,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1619,
                          "end": 1628,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 1630,
                          "end": 1640,
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 1647,
              "end": 1657,
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 1659,
            "end": 1664,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1659,
              "end": 1660,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1663,
              "end": 1664,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1666,
        "end": 1671,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1666,
          "end": 1667,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1670,
          "end": 1671,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1673,
        "end": 1676,
        "argument": {
          "type": "Identifier",
          "start": 1673,
          "end": 1674,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 1709,
      "end": 1855,
      "body": {
        "type": "BlockStatement",
        "start": 1825,
        "end": 1855,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1831,
            "end": 1853,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1831,
              "end": 1852,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1843,
                  "end": 1851,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1831,
                "end": 1842,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1831,
                  "end": 1838,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1839,
                  "end": 1842,
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
      "init": {
        "type": "VariableDeclaration",
        "start": 1714,
        "end": 1811,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1718,
            "end": 1804,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 1718,
              "end": 1786,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 1719,
                  "end": 1730,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1719,
                    "end": 1723,
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
                    "type": "Identifier",
                    "start": 1725,
                    "end": 1730,
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 1732,
                  "end": 1784,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1732,
                    "end": 1738,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectPattern",
                    "start": 1740,
                    "end": 1784,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1742,
                        "end": 1759,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1742,
                          "end": 1749,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 1751,
                          "end": 1759,
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 1761,
                        "end": 1782,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1761,
                          "end": 1770,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 1772,
                          "end": 1782,
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 1789,
              "end": 1804,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1789,
                "end": 1802,
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 1806,
            "end": 1811,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1806,
              "end": 1807,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1810,
              "end": 1811,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1813,
        "end": 1818,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1813,
          "end": 1814,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1817,
          "end": 1818,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1820,
        "end": 1823,
        "argument": {
          "type": "Identifier",
          "start": 1820,
          "end": 1821,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 1856,
      "end": 2080,
      "body": {
        "type": "BlockStatement",
        "start": 2050,
        "end": 2080,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2056,
            "end": 2078,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2056,
              "end": 2077,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2068,
                  "end": 2076,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2056,
                "end": 2067,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2056,
                  "end": 2063,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2064,
                  "end": 2067,
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
      "init": {
        "type": "VariableDeclaration",
        "start": 1861,
        "end": 2036,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1865,
            "end": 2025,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 1865,
              "end": 1933,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 1866,
                  "end": 1877,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1866,
                    "end": 1870,
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
                    "type": "Identifier",
                    "start": 1872,
                    "end": 1877,
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 1879,
                  "end": 1931,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1879,
                    "end": 1885,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectPattern",
                    "start": 1887,
                    "end": 1931,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1889,
                        "end": 1906,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1889,
                          "end": 1896,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 1898,
                          "end": 1906,
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 1908,
                        "end": 1929,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1908,
                          "end": 1917,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 1919,
                          "end": 1929,
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "typeAnnotation": null
                  }
                }
              ],
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1954,
                      "end": 1958,
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
                      "start": 1960,
                      "end": 1969,
                      "raw": "\"trimmer\"",
                      "value": "trimmer"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 1971,
                    "end": 2023,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1971,
                      "end": 1977,
                      "decorators": [],
                      "name": "skills",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 1979,
                      "end": 2023,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1981,
                          "end": 2000,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1981,
                            "end": 1988,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 1990,
                            "end": 2000,
                            "raw": "\"trimming\"",
                            "value": "trimming"
                          }
                        },
                        {
                          "type": "Property",
                          "start": 2002,
                          "end": 2021,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2002,
                            "end": 2011,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 2013,
                            "end": 2021,
                            "raw": "\"edging\"",
                            "value": "edging"
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1941,
                "end": 1951,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1941,
                  "end": 1951,
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 2031,
            "end": 2036,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 2031,
              "end": 2032,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 2035,
              "end": 2036,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2038,
        "end": 2043,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 2038,
          "end": 2039,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 2042,
          "end": 2043,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2045,
        "end": 2048,
        "argument": {
          "type": "Identifier",
          "start": 2045,
          "end": 2046,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
