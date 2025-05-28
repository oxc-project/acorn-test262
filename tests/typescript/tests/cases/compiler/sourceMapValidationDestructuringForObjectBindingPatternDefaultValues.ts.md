__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2763,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 49,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 49,
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
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null
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
      "end": 225,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 128,
        "decorators": [],
        "name": "MultiRobot",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 129,
        "end": 225,
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
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
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
            "end": 223,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 159,
              "decorators": [],
              "name": "skills",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 178,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 179,
                      "end": 187,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 181,
                        "end": 187
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 197,
                    "end": 216,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 206,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 207,
                      "end": 215,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 209,
                        "end": 215
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
      "start": 227,
      "end": 281,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 280,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 243,
            "decorators": [],
            "name": "robot",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 236,
              "end": 243,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 238,
                "end": 243,
                "typeName": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 243,
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
            "start": 246,
            "end": 280,
            "properties": [
              {
                "type": "Property",
                "start": 248,
                "end": 261,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 252,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 254,
                  "end": 261,
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
                "start": 263,
                "end": 278,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 268,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 270,
                  "end": 278,
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
      "type": "VariableDeclaration",
      "start": 282,
      "end": 379,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 286,
          "end": 378,
          "id": {
            "type": "Identifier",
            "start": 286,
            "end": 308,
            "decorators": [],
            "name": "multiRobot",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 296,
              "end": 308,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 298,
                "end": 308,
                "typeName": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 308,
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 311,
            "end": 378,
            "properties": [
              {
                "type": "Property",
                "start": 313,
                "end": 326,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 317,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 319,
                  "end": 326,
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
                "start": 328,
                "end": 376,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 334,
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 336,
                  "end": 376,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 338,
                      "end": 355,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 338,
                        "end": 345,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 347,
                        "end": 355,
                        "value": "mowing",
                        "raw": "\"mowing\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 357,
                      "end": 374,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 357,
                        "end": 366,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 368,
                        "end": 374,
                        "value": "none",
                        "raw": "\"none\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
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
      "start": 380,
      "end": 421,
      "id": {
        "type": "Identifier",
        "start": 389,
        "end": 397,
        "decorators": [],
        "name": "getRobot",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 400,
        "end": 421,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 406,
            "end": 419,
            "argument": {
              "type": "Identifier",
              "start": 413,
              "end": 418,
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 422,
      "end": 473,
      "id": {
        "type": "Identifier",
        "start": 431,
        "end": 444,
        "decorators": [],
        "name": "getMultiRobot",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 447,
        "end": 473,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 453,
            "end": 471,
            "argument": {
              "type": "Identifier",
              "start": 460,
              "end": 470,
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ForStatement",
      "start": 475,
      "end": 564,
      "init": {
        "type": "VariableDeclaration",
        "start": 480,
        "end": 523,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 484,
            "end": 516,
            "id": {
              "type": "ObjectPattern",
              "start": 484,
              "end": 508,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 485,
                  "end": 506,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 485,
                    "end": 489,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 491,
                    "end": 506,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 491,
                      "end": 496,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 498,
                      "end": 506,
                      "value": "noName",
                      "raw": "\"noName\""
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
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 511,
              "end": 516,
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 518,
            "end": 523,
            "id": {
              "type": "Identifier",
              "start": 518,
              "end": 519,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 522,
              "end": 523,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 525,
        "end": 530,
        "left": {
          "type": "Identifier",
          "start": 525,
          "end": 526,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 529,
          "end": 530,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 532,
        "end": 535,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 532,
          "end": 533,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 537,
        "end": 564,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 543,
            "end": 562,
            "expression": {
              "type": "CallExpression",
              "start": 543,
              "end": 561,
              "callee": {
                "type": "MemberExpression",
                "start": 543,
                "end": 554,
                "object": {
                  "type": "Identifier",
                  "start": 543,
                  "end": 550,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 551,
                  "end": 554,
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
                  "start": 555,
                  "end": 560,
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
      }
    },
    {
      "type": "ForStatement",
      "start": 565,
      "end": 660,
      "init": {
        "type": "VariableDeclaration",
        "start": 570,
        "end": 619,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 574,
            "end": 612,
            "id": {
              "type": "ObjectPattern",
              "start": 574,
              "end": 599,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 575,
                  "end": 597,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 575,
                    "end": 579,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 581,
                    "end": 597,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 581,
                      "end": 586,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 589,
                      "end": 597,
                      "value": "noName",
                      "raw": "\"noName\""
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
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 602,
              "end": 612,
              "callee": {
                "type": "Identifier",
                "start": 602,
                "end": 610,
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 614,
            "end": 619,
            "id": {
              "type": "Identifier",
              "start": 614,
              "end": 615,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 618,
              "end": 619,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 621,
        "end": 626,
        "left": {
          "type": "Identifier",
          "start": 621,
          "end": 622,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 625,
          "end": 626,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 628,
        "end": 631,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 628,
          "end": 629,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 633,
        "end": 660,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 639,
            "end": 658,
            "expression": {
              "type": "CallExpression",
              "start": 639,
              "end": 657,
              "callee": {
                "type": "MemberExpression",
                "start": 639,
                "end": 650,
                "object": {
                  "type": "Identifier",
                  "start": 639,
                  "end": 646,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 647,
                  "end": 650,
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
                  "start": 651,
                  "end": 656,
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
      }
    },
    {
      "type": "ForStatement",
      "start": 661,
      "end": 791,
      "init": {
        "type": "VariableDeclaration",
        "start": 666,
        "end": 750,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 670,
            "end": 743,
            "id": {
              "type": "ObjectPattern",
              "start": 670,
              "end": 695,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 671,
                  "end": 693,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 671,
                    "end": 675,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 677,
                    "end": 693,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 677,
                      "end": 682,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 685,
                      "end": 693,
                      "value": "noName",
                      "raw": "\"noName\""
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
              "typeAnnotation": null
            },
            "init": {
              "type": "TSTypeAssertion",
              "start": 698,
              "end": 743,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 699,
                "end": 704,
                "typeName": {
                  "type": "Identifier",
                  "start": 699,
                  "end": 704,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "ObjectExpression",
                "start": 705,
                "end": 743,
                "properties": [
                  {
                    "type": "Property",
                    "start": 707,
                    "end": 722,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 707,
                      "end": 711,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 713,
                      "end": 722,
                      "value": "trimmer",
                      "raw": "\"trimmer\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 724,
                    "end": 741,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 724,
                      "end": 729,
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 731,
                      "end": 741,
                      "value": "trimming",
                      "raw": "\"trimming\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 745,
            "end": 750,
            "id": {
              "type": "Identifier",
              "start": 745,
              "end": 746,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 749,
              "end": 750,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 752,
        "end": 757,
        "left": {
          "type": "Identifier",
          "start": 752,
          "end": 753,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 756,
          "end": 757,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 759,
        "end": 762,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 759,
          "end": 760,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 764,
        "end": 791,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 770,
            "end": 789,
            "expression": {
              "type": "CallExpression",
              "start": 770,
              "end": 788,
              "callee": {
                "type": "MemberExpression",
                "start": 770,
                "end": 781,
                "object": {
                  "type": "Identifier",
                  "start": 770,
                  "end": 777,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 778,
                  "end": 781,
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
                  "start": 782,
                  "end": 787,
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
      }
    },
    {
      "type": "ForStatement",
      "start": 792,
      "end": 1012,
      "init": {
        "type": "VariableDeclaration",
        "start": 797,
        "end": 968,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 801,
            "end": 961,
            "id": {
              "type": "ObjectPattern",
              "start": 801,
              "end": 948,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 807,
                  "end": 946,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 807,
                    "end": 813,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 815,
                    "end": 946,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 815,
                      "end": 905,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 825,
                          "end": 854,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 825,
                            "end": 832,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 834,
                            "end": 854,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 834,
                              "end": 842,
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 845,
                              "end": 854,
                              "value": "primary",
                              "raw": "\"primary\""
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
                          "start": 864,
                          "end": 899,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 864,
                            "end": 873,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 875,
                            "end": 899,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 875,
                              "end": 885,
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 888,
                              "end": 899,
                              "value": "secondary",
                              "raw": "\"secondary\""
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
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 908,
                      "end": 946,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 910,
                          "end": 925,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 910,
                            "end": 917,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 919,
                            "end": 925,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 927,
                          "end": 944,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 927,
                            "end": 936,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 938,
                            "end": 944,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
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
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 951,
              "end": 961,
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 963,
            "end": 968,
            "id": {
              "type": "Identifier",
              "start": 963,
              "end": 964,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 967,
              "end": 968,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 970,
        "end": 975,
        "left": {
          "type": "Identifier",
          "start": 970,
          "end": 971,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 974,
          "end": 975,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 977,
        "end": 980,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 977,
          "end": 978,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 982,
        "end": 1012,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 988,
            "end": 1010,
            "expression": {
              "type": "CallExpression",
              "start": 988,
              "end": 1009,
              "callee": {
                "type": "MemberExpression",
                "start": 988,
                "end": 999,
                "object": {
                  "type": "Identifier",
                  "start": 988,
                  "end": 995,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 996,
                  "end": 999,
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
                  "start": 1000,
                  "end": 1008,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1013,
      "end": 1238,
      "init": {
        "type": "VariableDeclaration",
        "start": 1018,
        "end": 1194,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1022,
            "end": 1187,
            "id": {
              "type": "ObjectPattern",
              "start": 1022,
              "end": 1169,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1028,
                  "end": 1167,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1028,
                    "end": 1034,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 1036,
                    "end": 1167,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 1036,
                      "end": 1126,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1046,
                          "end": 1075,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1046,
                            "end": 1053,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 1055,
                            "end": 1075,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 1055,
                              "end": 1063,
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1066,
                              "end": 1075,
                              "value": "primary",
                              "raw": "\"primary\""
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
                          "start": 1085,
                          "end": 1120,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1085,
                            "end": 1094,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 1096,
                            "end": 1120,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 1096,
                              "end": 1106,
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1109,
                              "end": 1120,
                              "value": "secondary",
                              "raw": "\"secondary\""
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
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 1129,
                      "end": 1167,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1131,
                          "end": 1146,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1131,
                            "end": 1138,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1140,
                            "end": 1146,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1148,
                          "end": 1165,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1148,
                            "end": 1157,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1159,
                            "end": 1165,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
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
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 1172,
              "end": 1187,
              "callee": {
                "type": "Identifier",
                "start": 1172,
                "end": 1185,
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1189,
            "end": 1194,
            "id": {
              "type": "Identifier",
              "start": 1189,
              "end": 1190,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1193,
              "end": 1194,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1196,
        "end": 1201,
        "left": {
          "type": "Identifier",
          "start": 1196,
          "end": 1197,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1200,
          "end": 1201,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1203,
        "end": 1206,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1203,
          "end": 1204,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1208,
        "end": 1238,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1214,
            "end": 1236,
            "expression": {
              "type": "CallExpression",
              "start": 1214,
              "end": 1235,
              "callee": {
                "type": "MemberExpression",
                "start": 1214,
                "end": 1225,
                "object": {
                  "type": "Identifier",
                  "start": 1214,
                  "end": 1221,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1222,
                  "end": 1225,
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
                  "start": 1226,
                  "end": 1234,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1239,
      "end": 1538,
      "init": {
        "type": "VariableDeclaration",
        "start": 1244,
        "end": 1494,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1248,
            "end": 1483,
            "id": {
              "type": "ObjectPattern",
              "start": 1248,
              "end": 1395,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1254,
                  "end": 1393,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1254,
                    "end": 1260,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 1262,
                    "end": 1393,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 1262,
                      "end": 1352,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1272,
                          "end": 1301,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1272,
                            "end": 1279,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 1281,
                            "end": 1301,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 1281,
                              "end": 1289,
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1292,
                              "end": 1301,
                              "value": "primary",
                              "raw": "\"primary\""
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
                          "start": 1311,
                          "end": 1346,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1311,
                            "end": 1320,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 1322,
                            "end": 1346,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 1322,
                              "end": 1332,
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1335,
                              "end": 1346,
                              "value": "secondary",
                              "raw": "\"secondary\""
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
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 1355,
                      "end": 1393,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1357,
                          "end": 1372,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1357,
                            "end": 1364,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1366,
                            "end": 1372,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1374,
                          "end": 1391,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1374,
                            "end": 1383,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1385,
                            "end": 1391,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
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
              "typeAnnotation": null
            },
            "init": {
              "type": "TSTypeAssertion",
              "start": 1398,
              "end": 1483,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1399,
                "end": 1409,
                "typeName": {
                  "type": "Identifier",
                  "start": 1399,
                  "end": 1409,
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "ObjectExpression",
                "start": 1410,
                "end": 1483,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1412,
                    "end": 1427,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1412,
                      "end": 1416,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1418,
                      "end": 1427,
                      "value": "trimmer",
                      "raw": "\"trimmer\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1429,
                    "end": 1481,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1429,
                      "end": 1435,
                      "decorators": [],
                      "name": "skills",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 1437,
                      "end": 1481,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1439,
                          "end": 1458,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1439,
                            "end": 1446,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1448,
                            "end": 1458,
                            "value": "trimming",
                            "raw": "\"trimming\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1460,
                          "end": 1479,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1460,
                            "end": 1469,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1471,
                            "end": 1479,
                            "value": "edging",
                            "raw": "\"edging\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1489,
            "end": 1494,
            "id": {
              "type": "Identifier",
              "start": 1489,
              "end": 1490,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1493,
              "end": 1494,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1496,
        "end": 1501,
        "left": {
          "type": "Identifier",
          "start": 1496,
          "end": 1497,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1500,
          "end": 1501,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1503,
        "end": 1506,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1503,
          "end": 1504,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1508,
        "end": 1538,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1514,
            "end": 1536,
            "expression": {
              "type": "CallExpression",
              "start": 1514,
              "end": 1535,
              "callee": {
                "type": "MemberExpression",
                "start": 1514,
                "end": 1525,
                "object": {
                  "type": "Identifier",
                  "start": 1514,
                  "end": 1521,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1522,
                  "end": 1525,
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
                  "start": 1526,
                  "end": 1534,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1540,
      "end": 1655,
      "init": {
        "type": "VariableDeclaration",
        "start": 1545,
        "end": 1614,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1549,
            "end": 1607,
            "id": {
              "type": "ObjectPattern",
              "start": 1549,
              "end": 1599,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1550,
                  "end": 1572,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1550,
                    "end": 1554,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 1556,
                    "end": 1572,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 1556,
                      "end": 1561,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1564,
                      "end": 1572,
                      "value": "noName",
                      "raw": "\"noName\""
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
                  "start": 1574,
                  "end": 1597,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1574,
                    "end": 1579,
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 1581,
                    "end": 1597,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 1581,
                      "end": 1587,
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1590,
                      "end": 1597,
                      "value": "skill",
                      "raw": "\"skill\""
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
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 1602,
              "end": 1607,
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1609,
            "end": 1614,
            "id": {
              "type": "Identifier",
              "start": 1609,
              "end": 1610,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1613,
              "end": 1614,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1616,
        "end": 1621,
        "left": {
          "type": "Identifier",
          "start": 1616,
          "end": 1617,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1620,
          "end": 1621,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1623,
        "end": 1626,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1623,
          "end": 1624,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1628,
        "end": 1655,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1634,
            "end": 1653,
            "expression": {
              "type": "CallExpression",
              "start": 1634,
              "end": 1652,
              "callee": {
                "type": "MemberExpression",
                "start": 1634,
                "end": 1645,
                "object": {
                  "type": "Identifier",
                  "start": 1634,
                  "end": 1641,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1642,
                  "end": 1645,
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
                  "start": 1646,
                  "end": 1651,
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
      }
    },
    {
      "type": "ForStatement",
      "start": 1656,
      "end": 1776,
      "init": {
        "type": "VariableDeclaration",
        "start": 1661,
        "end": 1735,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1665,
            "end": 1728,
            "id": {
              "type": "ObjectPattern",
              "start": 1665,
              "end": 1715,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1666,
                  "end": 1688,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1666,
                    "end": 1670,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 1672,
                    "end": 1688,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 1672,
                      "end": 1677,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1680,
                      "end": 1688,
                      "value": "noName",
                      "raw": "\"noName\""
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
                  "start": 1690,
                  "end": 1713,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1690,
                    "end": 1695,
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 1697,
                    "end": 1713,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 1697,
                      "end": 1703,
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1706,
                      "end": 1713,
                      "value": "skill",
                      "raw": "\"skill\""
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
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 1718,
              "end": 1728,
              "callee": {
                "type": "Identifier",
                "start": 1718,
                "end": 1726,
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1730,
            "end": 1735,
            "id": {
              "type": "Identifier",
              "start": 1730,
              "end": 1731,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1734,
              "end": 1735,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1737,
        "end": 1742,
        "left": {
          "type": "Identifier",
          "start": 1737,
          "end": 1738,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1741,
          "end": 1742,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1744,
        "end": 1747,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1744,
          "end": 1745,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1749,
        "end": 1776,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1755,
            "end": 1774,
            "expression": {
              "type": "CallExpression",
              "start": 1755,
              "end": 1773,
              "callee": {
                "type": "MemberExpression",
                "start": 1755,
                "end": 1766,
                "object": {
                  "type": "Identifier",
                  "start": 1755,
                  "end": 1762,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1763,
                  "end": 1766,
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
                  "start": 1767,
                  "end": 1772,
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
      }
    },
    {
      "type": "ForStatement",
      "start": 1777,
      "end": 1932,
      "init": {
        "type": "VariableDeclaration",
        "start": 1782,
        "end": 1891,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1786,
            "end": 1884,
            "id": {
              "type": "ObjectPattern",
              "start": 1786,
              "end": 1836,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1787,
                  "end": 1809,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1787,
                    "end": 1791,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 1793,
                    "end": 1809,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 1793,
                      "end": 1798,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1801,
                      "end": 1809,
                      "value": "noName",
                      "raw": "\"noName\""
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
                  "start": 1811,
                  "end": 1834,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1811,
                    "end": 1816,
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 1818,
                    "end": 1834,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 1818,
                      "end": 1824,
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1827,
                      "end": 1834,
                      "value": "skill",
                      "raw": "\"skill\""
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
              "typeAnnotation": null
            },
            "init": {
              "type": "TSTypeAssertion",
              "start": 1839,
              "end": 1884,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1840,
                "end": 1845,
                "typeName": {
                  "type": "Identifier",
                  "start": 1840,
                  "end": 1845,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "ObjectExpression",
                "start": 1846,
                "end": 1884,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1848,
                    "end": 1863,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1848,
                      "end": 1852,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1854,
                      "end": 1863,
                      "value": "trimmer",
                      "raw": "\"trimmer\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1865,
                    "end": 1882,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1865,
                      "end": 1870,
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1872,
                      "end": 1882,
                      "value": "trimming",
                      "raw": "\"trimming\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1886,
            "end": 1891,
            "id": {
              "type": "Identifier",
              "start": 1886,
              "end": 1887,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1890,
              "end": 1891,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1893,
        "end": 1898,
        "left": {
          "type": "Identifier",
          "start": 1893,
          "end": 1894,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1897,
          "end": 1898,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1900,
        "end": 1903,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1900,
          "end": 1901,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1905,
        "end": 1932,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1911,
            "end": 1930,
            "expression": {
              "type": "CallExpression",
              "start": 1911,
              "end": 1929,
              "callee": {
                "type": "MemberExpression",
                "start": 1911,
                "end": 1922,
                "object": {
                  "type": "Identifier",
                  "start": 1911,
                  "end": 1918,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1919,
                  "end": 1922,
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
                  "start": 1923,
                  "end": 1928,
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
      }
    },
    {
      "type": "ForStatement",
      "start": 1933,
      "end": 2181,
      "init": {
        "type": "VariableDeclaration",
        "start": 1938,
        "end": 2137,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1942,
            "end": 2130,
            "id": {
              "type": "ObjectPattern",
              "start": 1942,
              "end": 2117,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1948,
                  "end": 1970,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1948,
                    "end": 1952,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 1954,
                    "end": 1970,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 1954,
                      "end": 1959,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1962,
                      "end": 1970,
                      "value": "noName",
                      "raw": "\"noName\""
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
                  "start": 1976,
                  "end": 2115,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1976,
                    "end": 1982,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 1984,
                    "end": 2115,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 1984,
                      "end": 2074,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1994,
                          "end": 2023,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1994,
                            "end": 2001,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 2003,
                            "end": 2023,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 2003,
                              "end": 2011,
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 2014,
                              "end": 2023,
                              "value": "primary",
                              "raw": "\"primary\""
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
                          "start": 2033,
                          "end": 2068,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2033,
                            "end": 2042,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 2044,
                            "end": 2068,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 2044,
                              "end": 2054,
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 2057,
                              "end": 2068,
                              "value": "secondary",
                              "raw": "\"secondary\""
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
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 2077,
                      "end": 2115,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2079,
                          "end": 2094,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2079,
                            "end": 2086,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2088,
                            "end": 2094,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 2096,
                          "end": 2113,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2096,
                            "end": 2105,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2107,
                            "end": 2113,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
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
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 2120,
              "end": 2130,
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 2132,
            "end": 2137,
            "id": {
              "type": "Identifier",
              "start": 2132,
              "end": 2133,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 2136,
              "end": 2137,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2139,
        "end": 2144,
        "left": {
          "type": "Identifier",
          "start": 2139,
          "end": 2140,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2143,
          "end": 2144,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2146,
        "end": 2149,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2146,
          "end": 2147,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2151,
        "end": 2181,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2157,
            "end": 2179,
            "expression": {
              "type": "CallExpression",
              "start": 2157,
              "end": 2178,
              "callee": {
                "type": "MemberExpression",
                "start": 2157,
                "end": 2168,
                "object": {
                  "type": "Identifier",
                  "start": 2157,
                  "end": 2164,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2165,
                  "end": 2168,
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
                  "start": 2169,
                  "end": 2177,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 2182,
      "end": 2435,
      "init": {
        "type": "VariableDeclaration",
        "start": 2187,
        "end": 2391,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2191,
            "end": 2384,
            "id": {
              "type": "ObjectPattern",
              "start": 2191,
              "end": 2366,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 2197,
                  "end": 2219,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2197,
                    "end": 2201,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 2203,
                    "end": 2219,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 2203,
                      "end": 2208,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 2211,
                      "end": 2219,
                      "value": "noName",
                      "raw": "\"noName\""
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
                  "start": 2225,
                  "end": 2364,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2225,
                    "end": 2231,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 2233,
                    "end": 2364,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 2233,
                      "end": 2323,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2243,
                          "end": 2272,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2243,
                            "end": 2250,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 2252,
                            "end": 2272,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 2252,
                              "end": 2260,
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 2263,
                              "end": 2272,
                              "value": "primary",
                              "raw": "\"primary\""
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
                          "start": 2282,
                          "end": 2317,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2282,
                            "end": 2291,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 2293,
                            "end": 2317,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 2293,
                              "end": 2303,
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 2306,
                              "end": 2317,
                              "value": "secondary",
                              "raw": "\"secondary\""
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
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 2326,
                      "end": 2364,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2328,
                          "end": 2343,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2328,
                            "end": 2335,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2337,
                            "end": 2343,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 2345,
                          "end": 2362,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2345,
                            "end": 2354,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2356,
                            "end": 2362,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
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
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 2369,
              "end": 2384,
              "callee": {
                "type": "Identifier",
                "start": 2369,
                "end": 2382,
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 2386,
            "end": 2391,
            "id": {
              "type": "Identifier",
              "start": 2386,
              "end": 2387,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 2390,
              "end": 2391,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2393,
        "end": 2398,
        "left": {
          "type": "Identifier",
          "start": 2393,
          "end": 2394,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2397,
          "end": 2398,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2400,
        "end": 2403,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2400,
          "end": 2401,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2405,
        "end": 2435,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2411,
            "end": 2433,
            "expression": {
              "type": "CallExpression",
              "start": 2411,
              "end": 2432,
              "callee": {
                "type": "MemberExpression",
                "start": 2411,
                "end": 2422,
                "object": {
                  "type": "Identifier",
                  "start": 2411,
                  "end": 2418,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2419,
                  "end": 2422,
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
                  "start": 2423,
                  "end": 2431,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 2436,
      "end": 2763,
      "init": {
        "type": "VariableDeclaration",
        "start": 2441,
        "end": 2719,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2445,
            "end": 2708,
            "id": {
              "type": "ObjectPattern",
              "start": 2445,
              "end": 2620,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 2451,
                  "end": 2473,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2451,
                    "end": 2455,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 2457,
                    "end": 2473,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 2457,
                      "end": 2462,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 2465,
                      "end": 2473,
                      "value": "noName",
                      "raw": "\"noName\""
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
                  "start": 2479,
                  "end": 2618,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2479,
                    "end": 2485,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 2487,
                    "end": 2618,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 2487,
                      "end": 2577,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2497,
                          "end": 2526,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2497,
                            "end": 2504,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 2506,
                            "end": 2526,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 2506,
                              "end": 2514,
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 2517,
                              "end": 2526,
                              "value": "primary",
                              "raw": "\"primary\""
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
                          "start": 2536,
                          "end": 2571,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2536,
                            "end": 2545,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 2547,
                            "end": 2571,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 2547,
                              "end": 2557,
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 2560,
                              "end": 2571,
                              "value": "secondary",
                              "raw": "\"secondary\""
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
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 2580,
                      "end": 2618,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2582,
                          "end": 2597,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2582,
                            "end": 2589,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2591,
                            "end": 2597,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 2599,
                          "end": 2616,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2599,
                            "end": 2608,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2610,
                            "end": 2616,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
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
              "typeAnnotation": null
            },
            "init": {
              "type": "TSTypeAssertion",
              "start": 2623,
              "end": 2708,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2624,
                "end": 2634,
                "typeName": {
                  "type": "Identifier",
                  "start": 2624,
                  "end": 2634,
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "ObjectExpression",
                "start": 2635,
                "end": 2708,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2637,
                    "end": 2652,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2637,
                      "end": 2641,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2643,
                      "end": 2652,
                      "value": "trimmer",
                      "raw": "\"trimmer\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2654,
                    "end": 2706,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2654,
                      "end": 2660,
                      "decorators": [],
                      "name": "skills",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 2662,
                      "end": 2706,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2664,
                          "end": 2683,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2664,
                            "end": 2671,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2673,
                            "end": 2683,
                            "value": "trimming",
                            "raw": "\"trimming\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 2685,
                          "end": 2704,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2685,
                            "end": 2694,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2696,
                            "end": 2704,
                            "value": "edging",
                            "raw": "\"edging\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 2714,
            "end": 2719,
            "id": {
              "type": "Identifier",
              "start": 2714,
              "end": 2715,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 2718,
              "end": 2719,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2721,
        "end": 2726,
        "left": {
          "type": "Identifier",
          "start": 2721,
          "end": 2722,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2725,
          "end": 2726,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2728,
        "end": 2731,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2728,
          "end": 2729,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2733,
        "end": 2763,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2739,
            "end": 2761,
            "expression": {
              "type": "CallExpression",
              "start": 2739,
              "end": 2760,
              "callee": {
                "type": "MemberExpression",
                "start": 2739,
                "end": 2750,
                "object": {
                  "type": "Identifier",
                  "start": 2739,
                  "end": 2746,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2747,
                  "end": 2750,
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
                  "start": 2751,
                  "end": 2759,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
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
