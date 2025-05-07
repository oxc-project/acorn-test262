__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2878,
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
      "end": 225,
      "body": {
        "type": "TSInterfaceBody",
        "start": 129,
        "end": 225,
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
            "end": 223,
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
              "end": 222,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 161,
                "end": 222,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 171,
                    "end": 188,
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
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 179,
                      "end": 187,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 181,
                        "end": 187
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 197,
                    "end": 216,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 206,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 207,
                      "end": 215,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 209,
                        "end": 215
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
      "start": 227,
      "end": 326,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 325,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 246,
            "decorators": [],
            "name": "robots",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 237,
              "end": 246,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 239,
                "end": 246,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 239,
                  "end": 244,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 239,
                    "end": 244,
                    "decorators": [],
                    "name": "Robot",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 249,
            "end": 325,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 250,
                "end": 284,
                "properties": [
                  {
                    "type": "Property",
                    "start": 252,
                    "end": 265,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 252,
                      "end": 256,
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
                      "start": 258,
                      "end": 265,
                      "raw": "\"mower\"",
                      "value": "mower",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 267,
                    "end": 282,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 272,
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
                      "start": 274,
                      "end": 282,
                      "raw": "\"mowing\"",
                      "value": "mowing",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 286,
                "end": 324,
                "properties": [
                  {
                    "type": "Property",
                    "start": 288,
                    "end": 303,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 288,
                      "end": 292,
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
                      "start": 294,
                      "end": 303,
                      "raw": "\"trimmer\"",
                      "value": "trimmer",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 305,
                    "end": 322,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 305,
                      "end": 310,
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
                      "start": 312,
                      "end": 322,
                      "raw": "\"trimming\"",
                      "value": "trimming",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
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
      "start": 327,
      "end": 508,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 507,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 356,
            "decorators": [],
            "name": "multiRobots",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 342,
              "end": 356,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 344,
                "end": 356,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 344,
                  "end": 354,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 344,
                    "end": 354,
                    "decorators": [],
                    "name": "MultiRobot",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 359,
            "end": 507,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 360,
                "end": 427,
                "properties": [
                  {
                    "type": "Property",
                    "start": 362,
                    "end": 375,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 362,
                      "end": 366,
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
                      "start": 368,
                      "end": 375,
                      "raw": "\"mower\"",
                      "value": "mower",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 377,
                    "end": 425,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 377,
                      "end": 383,
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
                      "start": 385,
                      "end": 425,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 387,
                          "end": 404,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 387,
                            "end": 394,
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
                            "start": 396,
                            "end": 404,
                            "raw": "\"mowing\"",
                            "value": "mowing",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 406,
                          "end": 423,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 406,
                            "end": 415,
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
                            "start": 417,
                            "end": 423,
                            "raw": "\"none\"",
                            "value": "none",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 433,
                "end": 506,
                "properties": [
                  {
                    "type": "Property",
                    "start": 435,
                    "end": 450,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 435,
                      "end": 439,
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
                      "start": 441,
                      "end": 450,
                      "raw": "\"trimmer\"",
                      "value": "trimmer",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 452,
                    "end": 504,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 452,
                      "end": 458,
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
                      "start": 460,
                      "end": 504,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 462,
                          "end": 481,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 462,
                            "end": 469,
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
                            "start": 471,
                            "end": 481,
                            "raw": "\"trimming\"",
                            "value": "trimming",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 483,
                          "end": 502,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 483,
                            "end": 492,
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
                            "start": 494,
                            "end": 502,
                            "raw": "\"edging\"",
                            "value": "edging",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  }
                ]
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
      "start": 510,
      "end": 553,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 531,
        "end": 553,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 537,
            "end": 551,
            "argument": {
              "type": "Identifier",
              "start": 544,
              "end": 550,
              "decorators": [],
              "name": "robots",
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
        "start": 519,
        "end": 528,
        "decorators": [],
        "name": "getRobots",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 555,
      "end": 608,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 581,
        "end": 608,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 587,
            "end": 606,
            "argument": {
              "type": "Identifier",
              "start": 594,
              "end": 605,
              "decorators": [],
              "name": "multiRobots",
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
        "start": 564,
        "end": 578,
        "decorators": [],
        "name": "getMultiRobots",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ForOfStatement",
      "start": 610,
      "end": 683,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 656,
        "end": 683,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 662,
            "end": 681,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 662,
              "end": 680,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 674,
                  "end": 679,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 662,
                "end": 673,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 662,
                  "end": 669,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 670,
                  "end": 673,
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
      "left": {
        "type": "VariableDeclaration",
        "start": 615,
        "end": 644,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 619,
            "end": 644,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 619,
              "end": 644,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 620,
                  "end": 642,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 620,
                    "end": 624,
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
                    "start": 626,
                    "end": 642,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 626,
                      "end": 631,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 634,
                      "end": 642,
                      "raw": "\"noName\"",
                      "value": "noName",
                      "regex": null,
                      "bigint": null
                    },
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 648,
        "end": 654,
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 684,
      "end": 762,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 735,
        "end": 762,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 741,
            "end": 760,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 741,
              "end": 759,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 753,
                  "end": 758,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 741,
                "end": 752,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 741,
                  "end": 748,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 749,
                  "end": 752,
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
      "left": {
        "type": "VariableDeclaration",
        "start": 689,
        "end": 718,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 693,
            "end": 718,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 693,
              "end": 718,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 694,
                  "end": 716,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 694,
                    "end": 698,
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
                    "start": 700,
                    "end": 716,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 700,
                      "end": 705,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 708,
                      "end": 716,
                      "raw": "\"noName\"",
                      "value": "noName",
                      "regex": null,
                      "bigint": null
                    },
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "CallExpression",
        "start": 722,
        "end": 733,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 722,
          "end": 731,
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 763,
      "end": 906,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 879,
        "end": 906,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 885,
            "end": 904,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 885,
              "end": 903,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 897,
                  "end": 902,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 885,
                "end": 896,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 885,
                  "end": 892,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 893,
                  "end": 896,
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
      "left": {
        "type": "VariableDeclaration",
        "start": 768,
        "end": 797,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 772,
            "end": 797,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 772,
              "end": 797,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 773,
                  "end": 795,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 773,
                    "end": 777,
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
                    "start": 779,
                    "end": 795,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 779,
                      "end": 784,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 787,
                      "end": 795,
                      "raw": "\"noName\"",
                      "value": "noName",
                      "regex": null,
                      "bigint": null
                    },
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 801,
        "end": 877,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 802,
            "end": 836,
            "properties": [
              {
                "type": "Property",
                "start": 804,
                "end": 817,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 804,
                  "end": 808,
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
                  "start": 810,
                  "end": 817,
                  "raw": "\"mower\"",
                  "value": "mower",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 819,
                "end": 834,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 819,
                  "end": 824,
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
                  "start": 826,
                  "end": 834,
                  "raw": "\"mowing\"",
                  "value": "mowing",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 838,
            "end": 876,
            "properties": [
              {
                "type": "Property",
                "start": 840,
                "end": 855,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 840,
                  "end": 844,
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
                  "start": 846,
                  "end": 855,
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 857,
                "end": 874,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 857,
                  "end": 862,
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
                  "start": 864,
                  "end": 874,
                  "raw": "\"trimming\"",
                  "value": "trimming",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 907,
      "end": 1096,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1066,
        "end": 1096,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1072,
            "end": 1094,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1072,
              "end": 1093,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1084,
                  "end": 1092,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1072,
                "end": 1083,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1072,
                  "end": 1079,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1080,
                  "end": 1083,
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
      "left": {
        "type": "VariableDeclaration",
        "start": 912,
        "end": 1049,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 916,
            "end": 1049,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 916,
              "end": 1049,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 918,
                  "end": 1047,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 918,
                    "end": 924,
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
                    "type": "AssignmentPattern",
                    "start": 926,
                    "end": 1047,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 926,
                      "end": 996,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 928,
                          "end": 957,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 928,
                            "end": 935,
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
                            "type": "AssignmentPattern",
                            "start": 937,
                            "end": 957,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 937,
                              "end": 945,
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "right": {
                              "type": "Literal",
                              "start": 948,
                              "end": 957,
                              "raw": "\"primary\"",
                              "value": "primary",
                              "regex": null,
                              "bigint": null
                            },
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 959,
                          "end": 994,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 959,
                            "end": 968,
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
                            "type": "AssignmentPattern",
                            "start": 970,
                            "end": 994,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 970,
                              "end": 980,
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "right": {
                              "type": "Literal",
                              "start": 983,
                              "end": 994,
                              "raw": "\"secondary\"",
                              "value": "secondary",
                              "regex": null,
                              "bigint": null
                            },
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "ObjectExpression",
                      "start": 1003,
                      "end": 1047,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1005,
                          "end": 1023,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1005,
                            "end": 1012,
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
                            "start": 1014,
                            "end": 1023,
                            "raw": "\"nosKill\"",
                            "value": "nosKill",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 1025,
                          "end": 1045,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1025,
                            "end": 1034,
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
                            "start": 1036,
                            "end": 1045,
                            "raw": "\"noSkill\"",
                            "value": "noSkill",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    },
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 1053,
        "end": 1064,
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1097,
      "end": 1291,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1261,
        "end": 1291,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1267,
            "end": 1289,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1267,
              "end": 1288,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1279,
                  "end": 1287,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1267,
                "end": 1278,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1267,
                  "end": 1274,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1275,
                  "end": 1278,
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
      "left": {
        "type": "VariableDeclaration",
        "start": 1102,
        "end": 1239,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1106,
            "end": 1239,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 1106,
              "end": 1239,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 1108,
                  "end": 1237,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1108,
                    "end": 1114,
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
                    "type": "AssignmentPattern",
                    "start": 1116,
                    "end": 1237,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 1116,
                      "end": 1186,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1118,
                          "end": 1147,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1118,
                            "end": 1125,
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
                            "type": "AssignmentPattern",
                            "start": 1127,
                            "end": 1147,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 1127,
                              "end": 1135,
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "right": {
                              "type": "Literal",
                              "start": 1138,
                              "end": 1147,
                              "raw": "\"primary\"",
                              "value": "primary",
                              "regex": null,
                              "bigint": null
                            },
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 1149,
                          "end": 1184,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1149,
                            "end": 1158,
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
                            "type": "AssignmentPattern",
                            "start": 1160,
                            "end": 1184,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 1160,
                              "end": 1170,
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "right": {
                              "type": "Literal",
                              "start": 1173,
                              "end": 1184,
                              "raw": "\"secondary\"",
                              "value": "secondary",
                              "regex": null,
                              "bigint": null
                            },
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "ObjectExpression",
                      "start": 1193,
                      "end": 1237,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1195,
                          "end": 1213,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1195,
                            "end": 1202,
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
                            "start": 1204,
                            "end": 1213,
                            "raw": "\"nosKill\"",
                            "value": "nosKill",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 1215,
                          "end": 1235,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1215,
                            "end": 1224,
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
                            "start": 1226,
                            "end": 1235,
                            "raw": "\"noSkill\"",
                            "value": "noSkill",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    },
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "CallExpression",
        "start": 1243,
        "end": 1259,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1243,
          "end": 1257,
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1292,
      "end": 1636,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1606,
        "end": 1636,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1612,
            "end": 1634,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1612,
              "end": 1633,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1624,
                  "end": 1632,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1612,
                "end": 1623,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1612,
                  "end": 1619,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1620,
                  "end": 1623,
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
      "left": {
        "type": "VariableDeclaration",
        "start": 1297,
        "end": 1434,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1301,
            "end": 1434,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 1301,
              "end": 1434,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 1303,
                  "end": 1432,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1303,
                    "end": 1309,
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
                    "type": "AssignmentPattern",
                    "start": 1311,
                    "end": 1432,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 1311,
                      "end": 1381,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1313,
                          "end": 1342,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1313,
                            "end": 1320,
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
                            "type": "AssignmentPattern",
                            "start": 1322,
                            "end": 1342,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 1322,
                              "end": 1330,
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "right": {
                              "type": "Literal",
                              "start": 1333,
                              "end": 1342,
                              "raw": "\"primary\"",
                              "value": "primary",
                              "regex": null,
                              "bigint": null
                            },
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 1344,
                          "end": 1379,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1344,
                            "end": 1353,
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
                            "type": "AssignmentPattern",
                            "start": 1355,
                            "end": 1379,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 1355,
                              "end": 1365,
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "right": {
                              "type": "Literal",
                              "start": 1368,
                              "end": 1379,
                              "raw": "\"secondary\"",
                              "value": "secondary",
                              "regex": null,
                              "bigint": null
                            },
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "ObjectExpression",
                      "start": 1388,
                      "end": 1432,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1390,
                          "end": 1408,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1390,
                            "end": 1397,
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
                            "start": 1399,
                            "end": 1408,
                            "raw": "\"nosKill\"",
                            "value": "nosKill",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 1410,
                          "end": 1430,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1410,
                            "end": 1419,
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
                            "start": 1421,
                            "end": 1430,
                            "raw": "\"noSkill\"",
                            "value": "noSkill",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    },
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "TSTypeAssertion",
        "start": 1442,
        "end": 1604,
        "expression": {
          "type": "ArrayExpression",
          "start": 1456,
          "end": 1604,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 1457,
              "end": 1524,
              "properties": [
                {
                  "type": "Property",
                  "start": 1459,
                  "end": 1472,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1459,
                    "end": 1463,
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
                    "start": 1465,
                    "end": 1472,
                    "raw": "\"mower\"",
                    "value": "mower",
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "Property",
                  "start": 1474,
                  "end": 1522,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1474,
                    "end": 1480,
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
                    "start": 1482,
                    "end": 1522,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1484,
                        "end": 1501,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1484,
                          "end": 1491,
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
                          "start": 1493,
                          "end": 1501,
                          "raw": "\"mowing\"",
                          "value": "mowing",
                          "regex": null,
                          "bigint": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 1503,
                        "end": 1520,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1503,
                          "end": 1512,
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
                          "start": 1514,
                          "end": 1520,
                          "raw": "\"none\"",
                          "value": "none",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "type": "ObjectExpression",
              "start": 1530,
              "end": 1603,
              "properties": [
                {
                  "type": "Property",
                  "start": 1532,
                  "end": 1547,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1532,
                    "end": 1536,
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
                    "start": 1538,
                    "end": 1547,
                    "raw": "\"trimmer\"",
                    "value": "trimmer",
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "Property",
                  "start": 1549,
                  "end": 1601,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1549,
                    "end": 1555,
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
                    "start": 1557,
                    "end": 1601,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1559,
                        "end": 1578,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1559,
                          "end": 1566,
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
                          "start": 1568,
                          "end": 1578,
                          "raw": "\"trimming\"",
                          "value": "trimming",
                          "regex": null,
                          "bigint": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 1580,
                        "end": 1599,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1580,
                          "end": 1589,
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
                          "start": 1591,
                          "end": 1599,
                          "raw": "\"edging\"",
                          "value": "edging",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 1443,
          "end": 1455,
          "elementType": {
            "type": "TSTypeReference",
            "start": 1443,
            "end": 1453,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1443,
              "end": 1453,
              "decorators": [],
              "name": "MultiRobot",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1638,
      "end": 1738,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1711,
        "end": 1738,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1717,
            "end": 1736,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1717,
              "end": 1735,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1729,
                  "end": 1734,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1717,
                "end": 1728,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1717,
                  "end": 1724,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1725,
                  "end": 1728,
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
      "left": {
        "type": "VariableDeclaration",
        "start": 1643,
        "end": 1699,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1647,
            "end": 1699,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 1647,
              "end": 1699,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 1648,
                  "end": 1670,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1648,
                    "end": 1652,
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
                    "start": 1654,
                    "end": 1670,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 1654,
                      "end": 1659,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 1662,
                      "end": 1670,
                      "raw": "\"noName\"",
                      "value": "noName",
                      "regex": null,
                      "bigint": null
                    },
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 1672,
                  "end": 1697,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1672,
                    "end": 1677,
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
                    "start": 1679,
                    "end": 1697,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 1679,
                      "end": 1685,
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 1688,
                      "end": 1697,
                      "raw": "\"noSkill\"",
                      "value": "noSkill",
                      "regex": null,
                      "bigint": null
                    },
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 1703,
        "end": 1709,
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1739,
      "end": 1845,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1818,
        "end": 1845,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1824,
            "end": 1843,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1824,
              "end": 1842,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1836,
                  "end": 1841,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1824,
                "end": 1835,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1824,
                  "end": 1831,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1832,
                  "end": 1835,
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
      "left": {
        "type": "VariableDeclaration",
        "start": 1744,
        "end": 1801,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1748,
            "end": 1801,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 1748,
              "end": 1801,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 1749,
                  "end": 1771,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1749,
                    "end": 1753,
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
                    "start": 1755,
                    "end": 1771,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 1755,
                      "end": 1760,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 1763,
                      "end": 1771,
                      "raw": "\"noName\"",
                      "value": "noName",
                      "regex": null,
                      "bigint": null
                    },
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 1773,
                  "end": 1798,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1773,
                    "end": 1778,
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
                    "start": 1780,
                    "end": 1798,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 1780,
                      "end": 1786,
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 1789,
                      "end": 1798,
                      "raw": "\"noSkill\"",
                      "value": "noSkill",
                      "regex": null,
                      "bigint": null
                    },
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "CallExpression",
        "start": 1805,
        "end": 1816,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1805,
          "end": 1814,
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1846,
      "end": 2017,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1990,
        "end": 2017,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1996,
            "end": 2015,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1996,
              "end": 2014,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2008,
                  "end": 2013,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1996,
                "end": 2007,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1996,
                  "end": 2003,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2004,
                  "end": 2007,
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
      "left": {
        "type": "VariableDeclaration",
        "start": 1851,
        "end": 1908,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1855,
            "end": 1908,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 1855,
              "end": 1908,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 1856,
                  "end": 1878,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1856,
                    "end": 1860,
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
                    "start": 1862,
                    "end": 1878,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 1862,
                      "end": 1867,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 1870,
                      "end": 1878,
                      "raw": "\"noName\"",
                      "value": "noName",
                      "regex": null,
                      "bigint": null
                    },
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 1880,
                  "end": 1905,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1880,
                    "end": 1885,
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
                    "start": 1887,
                    "end": 1905,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 1887,
                      "end": 1893,
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 1896,
                      "end": 1905,
                      "raw": "\"noSkill\"",
                      "value": "noSkill",
                      "regex": null,
                      "bigint": null
                    },
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 1912,
        "end": 1988,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 1913,
            "end": 1947,
            "properties": [
              {
                "type": "Property",
                "start": 1915,
                "end": 1928,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1915,
                  "end": 1919,
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
                  "start": 1921,
                  "end": 1928,
                  "raw": "\"mower\"",
                  "value": "mower",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 1930,
                "end": 1945,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1930,
                  "end": 1935,
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
                  "start": 1937,
                  "end": 1945,
                  "raw": "\"mowing\"",
                  "value": "mowing",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 1949,
            "end": 1987,
            "properties": [
              {
                "type": "Property",
                "start": 1951,
                "end": 1966,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1951,
                  "end": 1955,
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
                  "start": 1957,
                  "end": 1966,
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 1968,
                "end": 1985,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1968,
                  "end": 1973,
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
                  "start": 1975,
                  "end": 1985,
                  "raw": "\"trimming\"",
                  "value": "trimming",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2018,
      "end": 2252,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 2225,
        "end": 2252,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2231,
            "end": 2250,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2231,
              "end": 2249,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2243,
                  "end": 2248,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2231,
                "end": 2242,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2231,
                  "end": 2238,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2239,
                  "end": 2242,
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
      "left": {
        "type": "VariableDeclaration",
        "start": 2023,
        "end": 2208,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2027,
            "end": 2208,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 2027,
              "end": 2208,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 2033,
                  "end": 2055,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2033,
                    "end": 2037,
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
                    "start": 2039,
                    "end": 2055,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 2039,
                      "end": 2044,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 2047,
                      "end": 2055,
                      "raw": "\"noName\"",
                      "value": "noName",
                      "regex": null,
                      "bigint": null
                    },
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 2061,
                  "end": 2206,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2061,
                    "end": 2067,
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
                    "type": "AssignmentPattern",
                    "start": 2069,
                    "end": 2206,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 2069,
                      "end": 2159,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2079,
                          "end": 2108,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2079,
                            "end": 2086,
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
                            "type": "AssignmentPattern",
                            "start": 2088,
                            "end": 2108,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 2088,
                              "end": 2096,
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "right": {
                              "type": "Literal",
                              "start": 2099,
                              "end": 2108,
                              "raw": "\"primary\"",
                              "value": "primary",
                              "regex": null,
                              "bigint": null
                            },
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 2118,
                          "end": 2153,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2118,
                            "end": 2127,
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
                            "type": "AssignmentPattern",
                            "start": 2129,
                            "end": 2153,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 2129,
                              "end": 2139,
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "right": {
                              "type": "Literal",
                              "start": 2142,
                              "end": 2153,
                              "raw": "\"secondary\"",
                              "value": "secondary",
                              "regex": null,
                              "bigint": null
                            },
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "ObjectExpression",
                      "start": 2162,
                      "end": 2206,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2164,
                          "end": 2182,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2164,
                            "end": 2171,
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
                            "start": 2173,
                            "end": 2182,
                            "raw": "\"noSkill\"",
                            "value": "noSkill",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 2184,
                          "end": 2204,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2184,
                            "end": 2193,
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
                            "start": 2195,
                            "end": 2204,
                            "raw": "\"noSkill\"",
                            "value": "noSkill",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    },
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 2212,
        "end": 2223,
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2253,
      "end": 2492,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 2465,
        "end": 2492,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2471,
            "end": 2490,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2471,
              "end": 2489,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2483,
                  "end": 2488,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2471,
                "end": 2482,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2471,
                  "end": 2478,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2479,
                  "end": 2482,
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
      "left": {
        "type": "VariableDeclaration",
        "start": 2258,
        "end": 2443,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2262,
            "end": 2443,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 2262,
              "end": 2443,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 2268,
                  "end": 2290,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2268,
                    "end": 2272,
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
                    "start": 2274,
                    "end": 2290,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 2274,
                      "end": 2279,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 2282,
                      "end": 2290,
                      "raw": "\"noName\"",
                      "value": "noName",
                      "regex": null,
                      "bigint": null
                    },
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 2296,
                  "end": 2441,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2296,
                    "end": 2302,
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
                    "type": "AssignmentPattern",
                    "start": 2304,
                    "end": 2441,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 2304,
                      "end": 2394,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2314,
                          "end": 2343,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2314,
                            "end": 2321,
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
                            "type": "AssignmentPattern",
                            "start": 2323,
                            "end": 2343,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 2323,
                              "end": 2331,
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "right": {
                              "type": "Literal",
                              "start": 2334,
                              "end": 2343,
                              "raw": "\"primary\"",
                              "value": "primary",
                              "regex": null,
                              "bigint": null
                            },
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 2353,
                          "end": 2388,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2353,
                            "end": 2362,
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
                            "type": "AssignmentPattern",
                            "start": 2364,
                            "end": 2388,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 2364,
                              "end": 2374,
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "right": {
                              "type": "Literal",
                              "start": 2377,
                              "end": 2388,
                              "raw": "\"secondary\"",
                              "value": "secondary",
                              "regex": null,
                              "bigint": null
                            },
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "ObjectExpression",
                      "start": 2397,
                      "end": 2441,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2399,
                          "end": 2417,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2399,
                            "end": 2406,
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
                            "start": 2408,
                            "end": 2417,
                            "raw": "\"noSkill\"",
                            "value": "noSkill",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 2419,
                          "end": 2439,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2419,
                            "end": 2428,
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
                            "start": 2430,
                            "end": 2439,
                            "raw": "\"noSkill\"",
                            "value": "noSkill",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    },
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "CallExpression",
        "start": 2447,
        "end": 2463,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 2447,
          "end": 2461,
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2493,
      "end": 2878,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 2851,
        "end": 2878,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2857,
            "end": 2876,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2857,
              "end": 2875,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2869,
                  "end": 2874,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2857,
                "end": 2868,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2857,
                  "end": 2864,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2865,
                  "end": 2868,
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
      "left": {
        "type": "VariableDeclaration",
        "start": 2498,
        "end": 2683,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2502,
            "end": 2683,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 2502,
              "end": 2683,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 2508,
                  "end": 2530,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2508,
                    "end": 2512,
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
                    "start": 2514,
                    "end": 2530,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 2514,
                      "end": 2519,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 2522,
                      "end": 2530,
                      "raw": "\"noName\"",
                      "value": "noName",
                      "regex": null,
                      "bigint": null
                    },
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 2536,
                  "end": 2681,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2536,
                    "end": 2542,
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
                    "type": "AssignmentPattern",
                    "start": 2544,
                    "end": 2681,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 2544,
                      "end": 2634,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2554,
                          "end": 2583,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2554,
                            "end": 2561,
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
                            "type": "AssignmentPattern",
                            "start": 2563,
                            "end": 2583,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 2563,
                              "end": 2571,
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "right": {
                              "type": "Literal",
                              "start": 2574,
                              "end": 2583,
                              "raw": "\"primary\"",
                              "value": "primary",
                              "regex": null,
                              "bigint": null
                            },
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 2593,
                          "end": 2628,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2593,
                            "end": 2602,
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
                            "type": "AssignmentPattern",
                            "start": 2604,
                            "end": 2628,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 2604,
                              "end": 2614,
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "right": {
                              "type": "Literal",
                              "start": 2617,
                              "end": 2628,
                              "raw": "\"secondary\"",
                              "value": "secondary",
                              "regex": null,
                              "bigint": null
                            },
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "ObjectExpression",
                      "start": 2637,
                      "end": 2681,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2639,
                          "end": 2657,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2639,
                            "end": 2646,
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
                            "start": 2648,
                            "end": 2657,
                            "raw": "\"noSkill\"",
                            "value": "noSkill",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 2659,
                          "end": 2679,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2659,
                            "end": 2668,
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
                            "start": 2670,
                            "end": 2679,
                            "raw": "\"noSkill\"",
                            "value": "noSkill",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    },
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "TSTypeAssertion",
        "start": 2687,
        "end": 2849,
        "expression": {
          "type": "ArrayExpression",
          "start": 2701,
          "end": 2849,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 2702,
              "end": 2769,
              "properties": [
                {
                  "type": "Property",
                  "start": 2704,
                  "end": 2717,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2704,
                    "end": 2708,
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
                    "start": 2710,
                    "end": 2717,
                    "raw": "\"mower\"",
                    "value": "mower",
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "Property",
                  "start": 2719,
                  "end": 2767,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2719,
                    "end": 2725,
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
                    "start": 2727,
                    "end": 2767,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 2729,
                        "end": 2746,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2729,
                          "end": 2736,
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
                          "start": 2738,
                          "end": 2746,
                          "raw": "\"mowing\"",
                          "value": "mowing",
                          "regex": null,
                          "bigint": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 2748,
                        "end": 2765,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2748,
                          "end": 2757,
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
                          "start": 2759,
                          "end": 2765,
                          "raw": "\"none\"",
                          "value": "none",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "type": "ObjectExpression",
              "start": 2775,
              "end": 2848,
              "properties": [
                {
                  "type": "Property",
                  "start": 2777,
                  "end": 2792,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2777,
                    "end": 2781,
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
                    "start": 2783,
                    "end": 2792,
                    "raw": "\"trimmer\"",
                    "value": "trimmer",
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "Property",
                  "start": 2794,
                  "end": 2846,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2794,
                    "end": 2800,
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
                    "start": 2802,
                    "end": 2846,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 2804,
                        "end": 2823,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2804,
                          "end": 2811,
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
                          "start": 2813,
                          "end": 2823,
                          "raw": "\"trimming\"",
                          "value": "trimming",
                          "regex": null,
                          "bigint": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 2825,
                        "end": 2844,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2825,
                          "end": 2834,
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
                          "start": 2836,
                          "end": 2844,
                          "raw": "\"edging\"",
                          "value": "edging",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 2688,
          "end": 2700,
          "elementType": {
            "type": "TSTypeReference",
            "start": 2688,
            "end": 2698,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 2688,
              "end": 2698,
              "decorators": [],
              "name": "MultiRobot",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
