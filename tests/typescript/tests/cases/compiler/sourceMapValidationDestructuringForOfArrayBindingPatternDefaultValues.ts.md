__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2817,
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
      "type": "TSTypeAliasDeclaration",
      "start": 50,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 60,
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 89,
      "end": 141,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 111,
        "decorators": [],
        "name": "MultiSkilledRobot",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 114,
        "end": 140,
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 115,
            "end": 121
          },
          {
            "type": "TSTupleType",
            "start": 123,
            "end": 139,
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "start": 124,
                "end": 130
              },
              {
                "type": "TSStringKeyword",
                "start": 132,
                "end": 138
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 143,
      "end": 186,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 147,
          "end": 185,
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 160,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 160,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 155,
                "end": 160,
                "typeName": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 160,
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
            "type": "ArrayExpression",
            "start": 163,
            "end": 185,
            "elements": [
              {
                "type": "Literal",
                "start": 164,
                "end": 165,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 167,
                "end": 174,
                "value": "mower",
                "raw": "\"mower\""
              },
              {
                "type": "Literal",
                "start": 176,
                "end": 184,
                "value": "mowing",
                "raw": "\"mowing\""
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
      "start": 187,
      "end": 234,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 233,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 204,
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 204,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 199,
                "end": 204,
                "typeName": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 204,
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
            "type": "ArrayExpression",
            "start": 207,
            "end": 233,
            "elements": [
              {
                "type": "Literal",
                "start": 208,
                "end": 209,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 211,
                "end": 220,
                "value": "trimmer",
                "raw": "\"trimmer\""
              },
              {
                "type": "Literal",
                "start": 222,
                "end": 232,
                "value": "trimming",
                "raw": "\"trimming\""
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
      "start": 235,
      "end": 265,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 264,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 245,
            "decorators": [],
            "name": "robots",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 248,
            "end": 264,
            "elements": [
              {
                "type": "Identifier",
                "start": 249,
                "end": 255,
                "decorators": [],
                "name": "robotA",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 257,
                "end": 263,
                "decorators": [],
                "name": "robotB",
                "optional": false,
                "typeAnnotation": null
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
      "start": 266,
      "end": 309,
      "id": {
        "type": "Identifier",
        "start": 275,
        "end": 284,
        "decorators": [],
        "name": "getRobots",
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
        "start": 287,
        "end": 309,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 293,
            "end": 307,
            "argument": {
              "type": "Identifier",
              "start": 300,
              "end": 306,
              "decorators": [],
              "name": "robots",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 311,
      "end": 374,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 315,
          "end": 373,
          "id": {
            "type": "Identifier",
            "start": 315,
            "end": 345,
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 326,
              "end": 345,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 328,
                "end": 345,
                "typeName": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 345,
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 348,
            "end": 373,
            "elements": [
              {
                "type": "Literal",
                "start": 349,
                "end": 356,
                "value": "mower",
                "raw": "\"mower\""
              },
              {
                "type": "ArrayExpression",
                "start": 358,
                "end": 372,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 359,
                    "end": 367,
                    "value": "mowing",
                    "raw": "\"mowing\""
                  },
                  {
                    "type": "Literal",
                    "start": 369,
                    "end": 371,
                    "value": "",
                    "raw": "\"\""
                  }
                ]
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
      "start": 375,
      "end": 448,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 379,
          "end": 447,
          "id": {
            "type": "Identifier",
            "start": 379,
            "end": 409,
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 390,
              "end": 409,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 392,
                "end": 409,
                "typeName": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 409,
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 412,
            "end": 447,
            "elements": [
              {
                "type": "Literal",
                "start": 413,
                "end": 422,
                "value": "trimmer",
                "raw": "\"trimmer\""
              },
              {
                "type": "ArrayExpression",
                "start": 424,
                "end": 446,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 425,
                    "end": 435,
                    "value": "trimming",
                    "raw": "\"trimming\""
                  },
                  {
                    "type": "Literal",
                    "start": 437,
                    "end": 445,
                    "value": "edging",
                    "raw": "\"edging\""
                  }
                ]
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
      "start": 449,
      "end": 494,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 453,
          "end": 493,
          "id": {
            "type": "Identifier",
            "start": 453,
            "end": 464,
            "decorators": [],
            "name": "multiRobots",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 467,
            "end": 493,
            "elements": [
              {
                "type": "Identifier",
                "start": 468,
                "end": 479,
                "decorators": [],
                "name": "multiRobotA",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 481,
                "end": 492,
                "decorators": [],
                "name": "multiRobotB",
                "optional": false,
                "typeAnnotation": null
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
      "start": 495,
      "end": 548,
      "id": {
        "type": "Identifier",
        "start": 504,
        "end": 518,
        "decorators": [],
        "name": "getMultiRobots",
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
        "start": 521,
        "end": 548,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 527,
            "end": 546,
            "argument": {
              "type": "Identifier",
              "start": 534,
              "end": 545,
              "decorators": [],
              "name": "multiRobots",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ForOfStatement",
      "start": 550,
      "end": 618,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 555,
        "end": 579,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 559,
            "end": 579,
            "id": {
              "type": "ArrayPattern",
              "start": 559,
              "end": 579,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "start": 562,
                  "end": 578,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 562,
                    "end": 567,
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 570,
                    "end": 578,
                    "value": "noName",
                    "raw": "\"noName\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 583,
        "end": 589,
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 591,
        "end": 618,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 597,
            "end": 616,
            "expression": {
              "type": "CallExpression",
              "start": 597,
              "end": 615,
              "callee": {
                "type": "MemberExpression",
                "start": 597,
                "end": 608,
                "object": {
                  "type": "Identifier",
                  "start": 597,
                  "end": 604,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 605,
                  "end": 608,
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
                  "start": 609,
                  "end": 614,
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
      "type": "ForOfStatement",
      "start": 619,
      "end": 692,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 624,
        "end": 648,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 628,
            "end": 648,
            "id": {
              "type": "ArrayPattern",
              "start": 628,
              "end": 648,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "start": 631,
                  "end": 647,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 631,
                    "end": 636,
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 639,
                    "end": 647,
                    "value": "noName",
                    "raw": "\"noName\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "CallExpression",
        "start": 652,
        "end": 663,
        "callee": {
          "type": "Identifier",
          "start": 652,
          "end": 661,
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 665,
        "end": 692,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 671,
            "end": 690,
            "expression": {
              "type": "CallExpression",
              "start": 671,
              "end": 689,
              "callee": {
                "type": "MemberExpression",
                "start": 671,
                "end": 682,
                "object": {
                  "type": "Identifier",
                  "start": 671,
                  "end": 678,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 679,
                  "end": 682,
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
                  "start": 683,
                  "end": 688,
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
      "type": "ForOfStatement",
      "start": 693,
      "end": 771,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 698,
        "end": 722,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 702,
            "end": 722,
            "id": {
              "type": "ArrayPattern",
              "start": 702,
              "end": 722,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "start": 705,
                  "end": 721,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 705,
                    "end": 710,
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 713,
                    "end": 721,
                    "value": "noName",
                    "raw": "\"noName\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 726,
        "end": 742,
        "elements": [
          {
            "type": "Identifier",
            "start": 727,
            "end": 733,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 735,
            "end": 741,
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 744,
        "end": 771,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 750,
            "end": 769,
            "expression": {
              "type": "CallExpression",
              "start": 750,
              "end": 768,
              "callee": {
                "type": "MemberExpression",
                "start": 750,
                "end": 761,
                "object": {
                  "type": "Identifier",
                  "start": 750,
                  "end": 757,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 758,
                  "end": 761,
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
                  "start": 762,
                  "end": 767,
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
      "type": "ForOfStatement",
      "start": 772,
      "end": 928,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 777,
        "end": 876,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 781,
            "end": 876,
            "id": {
              "type": "ArrayPattern",
              "start": 781,
              "end": 876,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "start": 784,
                  "end": 875,
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "start": 784,
                    "end": 852,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "start": 790,
                        "end": 815,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 790,
                          "end": 803,
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 806,
                          "end": 815,
                          "value": "primary",
                          "raw": "\"primary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 821,
                        "end": 850,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 821,
                          "end": 836,
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 839,
                          "end": 850,
                          "value": "secondary",
                          "raw": "\"secondary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 855,
                    "end": 875,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 856,
                        "end": 864,
                        "value": "skill1",
                        "raw": "\"skill1\""
                      },
                      {
                        "type": "Literal",
                        "start": 866,
                        "end": 874,
                        "value": "skill2",
                        "raw": "\"skill2\""
                      }
                    ]
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 880,
        "end": 891,
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 893,
        "end": 928,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 899,
            "end": 926,
            "expression": {
              "type": "CallExpression",
              "start": 899,
              "end": 925,
              "callee": {
                "type": "MemberExpression",
                "start": 899,
                "end": 910,
                "object": {
                  "type": "Identifier",
                  "start": 899,
                  "end": 906,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 907,
                  "end": 910,
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
                  "start": 911,
                  "end": 924,
                  "decorators": [],
                  "name": "primarySkillA",
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
      "type": "ForOfStatement",
      "start": 929,
      "end": 1090,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 934,
        "end": 1033,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 938,
            "end": 1033,
            "id": {
              "type": "ArrayPattern",
              "start": 938,
              "end": 1033,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "start": 941,
                  "end": 1032,
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "start": 941,
                    "end": 1009,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "start": 947,
                        "end": 972,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 947,
                          "end": 960,
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 963,
                          "end": 972,
                          "value": "primary",
                          "raw": "\"primary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 978,
                        "end": 1007,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 978,
                          "end": 993,
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 996,
                          "end": 1007,
                          "value": "secondary",
                          "raw": "\"secondary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 1012,
                    "end": 1032,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1013,
                        "end": 1021,
                        "value": "skill1",
                        "raw": "\"skill1\""
                      },
                      {
                        "type": "Literal",
                        "start": 1023,
                        "end": 1031,
                        "value": "skill2",
                        "raw": "\"skill2\""
                      }
                    ]
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "CallExpression",
        "start": 1037,
        "end": 1053,
        "callee": {
          "type": "Identifier",
          "start": 1037,
          "end": 1051,
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1055,
        "end": 1090,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1061,
            "end": 1088,
            "expression": {
              "type": "CallExpression",
              "start": 1061,
              "end": 1087,
              "callee": {
                "type": "MemberExpression",
                "start": 1061,
                "end": 1072,
                "object": {
                  "type": "Identifier",
                  "start": 1061,
                  "end": 1068,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1069,
                  "end": 1072,
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
                  "start": 1073,
                  "end": 1086,
                  "decorators": [],
                  "name": "primarySkillA",
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
      "type": "ForOfStatement",
      "start": 1091,
      "end": 1262,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1096,
        "end": 1195,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1100,
            "end": 1195,
            "id": {
              "type": "ArrayPattern",
              "start": 1100,
              "end": 1195,
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "start": 1103,
                  "end": 1194,
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "start": 1103,
                    "end": 1171,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "start": 1109,
                        "end": 1134,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 1109,
                          "end": 1122,
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 1125,
                          "end": 1134,
                          "value": "primary",
                          "raw": "\"primary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 1140,
                        "end": 1169,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 1140,
                          "end": 1155,
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 1158,
                          "end": 1169,
                          "value": "secondary",
                          "raw": "\"secondary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 1174,
                    "end": 1194,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1175,
                        "end": 1183,
                        "value": "skill1",
                        "raw": "\"skill1\""
                      },
                      {
                        "type": "Literal",
                        "start": 1185,
                        "end": 1193,
                        "value": "skill2",
                        "raw": "\"skill2\""
                      }
                    ]
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 1199,
        "end": 1225,
        "elements": [
          {
            "type": "Identifier",
            "start": 1200,
            "end": 1211,
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 1213,
            "end": 1224,
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 1227,
        "end": 1262,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1233,
            "end": 1260,
            "expression": {
              "type": "CallExpression",
              "start": 1233,
              "end": 1259,
              "callee": {
                "type": "MemberExpression",
                "start": 1233,
                "end": 1244,
                "object": {
                  "type": "Identifier",
                  "start": 1233,
                  "end": 1240,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1241,
                  "end": 1244,
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
                  "start": 1245,
                  "end": 1258,
                  "decorators": [],
                  "name": "primarySkillA",
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
      "type": "ForOfStatement",
      "start": 1264,
      "end": 1328,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1269,
        "end": 1287,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1273,
            "end": 1287,
            "id": {
              "type": "ArrayPattern",
              "start": 1273,
              "end": 1287,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1274,
                  "end": 1286,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1274,
                    "end": 1281,
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "start": 1284,
                    "end": 1286,
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "start": 1285,
                      "end": 1286,
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 1291,
        "end": 1297,
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 1299,
        "end": 1328,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1305,
            "end": 1326,
            "expression": {
              "type": "CallExpression",
              "start": 1305,
              "end": 1325,
              "callee": {
                "type": "MemberExpression",
                "start": 1305,
                "end": 1316,
                "object": {
                  "type": "Identifier",
                  "start": 1305,
                  "end": 1312,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1313,
                  "end": 1316,
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
                  "start": 1317,
                  "end": 1324,
                  "decorators": [],
                  "name": "numberB",
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
      "type": "ForOfStatement",
      "start": 1329,
      "end": 1398,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1334,
        "end": 1352,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1338,
            "end": 1352,
            "id": {
              "type": "ArrayPattern",
              "start": 1338,
              "end": 1352,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1339,
                  "end": 1351,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1339,
                    "end": 1346,
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "start": 1349,
                    "end": 1351,
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "start": 1350,
                      "end": 1351,
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "CallExpression",
        "start": 1356,
        "end": 1367,
        "callee": {
          "type": "Identifier",
          "start": 1356,
          "end": 1365,
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1369,
        "end": 1398,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1375,
            "end": 1396,
            "expression": {
              "type": "CallExpression",
              "start": 1375,
              "end": 1395,
              "callee": {
                "type": "MemberExpression",
                "start": 1375,
                "end": 1386,
                "object": {
                  "type": "Identifier",
                  "start": 1375,
                  "end": 1382,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1383,
                  "end": 1386,
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
                  "start": 1387,
                  "end": 1394,
                  "decorators": [],
                  "name": "numberB",
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
      "type": "ForOfStatement",
      "start": 1399,
      "end": 1473,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1404,
        "end": 1422,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1408,
            "end": 1422,
            "id": {
              "type": "ArrayPattern",
              "start": 1408,
              "end": 1422,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1409,
                  "end": 1421,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1409,
                    "end": 1416,
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "start": 1419,
                    "end": 1421,
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "start": 1420,
                      "end": 1421,
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 1426,
        "end": 1442,
        "elements": [
          {
            "type": "Identifier",
            "start": 1427,
            "end": 1433,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 1435,
            "end": 1441,
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 1444,
        "end": 1473,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1450,
            "end": 1471,
            "expression": {
              "type": "CallExpression",
              "start": 1450,
              "end": 1470,
              "callee": {
                "type": "MemberExpression",
                "start": 1450,
                "end": 1461,
                "object": {
                  "type": "Identifier",
                  "start": 1450,
                  "end": 1457,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1458,
                  "end": 1461,
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
                  "start": 1462,
                  "end": 1469,
                  "decorators": [],
                  "name": "numberB",
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
      "type": "ForOfStatement",
      "start": 1474,
      "end": 1545,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1479,
        "end": 1501,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1483,
            "end": 1501,
            "id": {
              "type": "ArrayPattern",
              "start": 1483,
              "end": 1501,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1484,
                  "end": 1500,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1484,
                    "end": 1489,
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1492,
                    "end": 1500,
                    "value": "noName",
                    "raw": "\"noName\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 1505,
        "end": 1516,
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 1518,
        "end": 1545,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1524,
            "end": 1543,
            "expression": {
              "type": "CallExpression",
              "start": 1524,
              "end": 1542,
              "callee": {
                "type": "MemberExpression",
                "start": 1524,
                "end": 1535,
                "object": {
                  "type": "Identifier",
                  "start": 1524,
                  "end": 1531,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1532,
                  "end": 1535,
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
                  "start": 1536,
                  "end": 1541,
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
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1546,
      "end": 1622,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1551,
        "end": 1573,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1555,
            "end": 1573,
            "id": {
              "type": "ArrayPattern",
              "start": 1555,
              "end": 1573,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1556,
                  "end": 1572,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1556,
                    "end": 1561,
                    "decorators": [],
                    "name": "nameB",
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
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "CallExpression",
        "start": 1577,
        "end": 1593,
        "callee": {
          "type": "Identifier",
          "start": 1577,
          "end": 1591,
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1595,
        "end": 1622,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1601,
            "end": 1620,
            "expression": {
              "type": "CallExpression",
              "start": 1601,
              "end": 1619,
              "callee": {
                "type": "MemberExpression",
                "start": 1601,
                "end": 1612,
                "object": {
                  "type": "Identifier",
                  "start": 1601,
                  "end": 1608,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1609,
                  "end": 1612,
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
                  "start": 1613,
                  "end": 1618,
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
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1623,
      "end": 1709,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1628,
        "end": 1650,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1632,
            "end": 1650,
            "id": {
              "type": "ArrayPattern",
              "start": 1632,
              "end": 1650,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1633,
                  "end": 1649,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1633,
                    "end": 1638,
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1641,
                    "end": 1649,
                    "value": "noName",
                    "raw": "\"noName\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 1654,
        "end": 1680,
        "elements": [
          {
            "type": "Identifier",
            "start": 1655,
            "end": 1666,
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 1668,
            "end": 1679,
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 1682,
        "end": 1709,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1688,
            "end": 1707,
            "expression": {
              "type": "CallExpression",
              "start": 1688,
              "end": 1706,
              "callee": {
                "type": "MemberExpression",
                "start": 1688,
                "end": 1699,
                "object": {
                  "type": "Identifier",
                  "start": 1688,
                  "end": 1695,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1696,
                  "end": 1699,
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
                  "start": 1700,
                  "end": 1705,
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
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1711,
      "end": 1813,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1716,
        "end": 1773,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1720,
            "end": 1773,
            "id": {
              "type": "ArrayPattern",
              "start": 1720,
              "end": 1773,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1721,
                  "end": 1734,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1721,
                    "end": 1729,
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "start": 1732,
                    "end": 1734,
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "start": 1733,
                      "end": 1734,
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 1736,
                  "end": 1753,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1736,
                    "end": 1742,
                    "decorators": [],
                    "name": "nameA2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1745,
                    "end": 1753,
                    "value": "noName",
                    "raw": "\"noName\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 1755,
                  "end": 1772,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1755,
                    "end": 1762,
                    "decorators": [],
                    "name": "skillA2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1765,
                    "end": 1772,
                    "value": "skill",
                    "raw": "\"skill\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 1777,
        "end": 1783,
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 1785,
        "end": 1813,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1791,
            "end": 1811,
            "expression": {
              "type": "CallExpression",
              "start": 1791,
              "end": 1810,
              "callee": {
                "type": "MemberExpression",
                "start": 1791,
                "end": 1802,
                "object": {
                  "type": "Identifier",
                  "start": 1791,
                  "end": 1798,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1799,
                  "end": 1802,
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
                  "start": 1803,
                  "end": 1809,
                  "decorators": [],
                  "name": "nameA2",
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
      "type": "ForOfStatement",
      "start": 1814,
      "end": 1921,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1819,
        "end": 1876,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1823,
            "end": 1876,
            "id": {
              "type": "ArrayPattern",
              "start": 1823,
              "end": 1876,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1824,
                  "end": 1837,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1824,
                    "end": 1832,
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "start": 1835,
                    "end": 1837,
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "start": 1836,
                      "end": 1837,
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 1839,
                  "end": 1856,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1839,
                    "end": 1845,
                    "decorators": [],
                    "name": "nameA2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1848,
                    "end": 1856,
                    "value": "noName",
                    "raw": "\"noName\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 1858,
                  "end": 1875,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1858,
                    "end": 1865,
                    "decorators": [],
                    "name": "skillA2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1868,
                    "end": 1875,
                    "value": "skill",
                    "raw": "\"skill\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "CallExpression",
        "start": 1880,
        "end": 1891,
        "callee": {
          "type": "Identifier",
          "start": 1880,
          "end": 1889,
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1893,
        "end": 1921,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1899,
            "end": 1919,
            "expression": {
              "type": "CallExpression",
              "start": 1899,
              "end": 1918,
              "callee": {
                "type": "MemberExpression",
                "start": 1899,
                "end": 1910,
                "object": {
                  "type": "Identifier",
                  "start": 1899,
                  "end": 1906,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1907,
                  "end": 1910,
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
                  "start": 1911,
                  "end": 1917,
                  "decorators": [],
                  "name": "nameA2",
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
      "type": "ForOfStatement",
      "start": 1922,
      "end": 2034,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1927,
        "end": 1984,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1931,
            "end": 1984,
            "id": {
              "type": "ArrayPattern",
              "start": 1931,
              "end": 1984,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 1932,
                  "end": 1945,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1932,
                    "end": 1940,
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "start": 1943,
                    "end": 1945,
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "start": 1944,
                      "end": 1945,
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 1947,
                  "end": 1964,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1947,
                    "end": 1953,
                    "decorators": [],
                    "name": "nameA2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1956,
                    "end": 1964,
                    "value": "noName",
                    "raw": "\"noName\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 1966,
                  "end": 1983,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1966,
                    "end": 1973,
                    "decorators": [],
                    "name": "skillA2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1976,
                    "end": 1983,
                    "value": "skill",
                    "raw": "\"skill\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 1988,
        "end": 2004,
        "elements": [
          {
            "type": "Identifier",
            "start": 1989,
            "end": 1995,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 1997,
            "end": 2003,
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 2006,
        "end": 2034,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2012,
            "end": 2032,
            "expression": {
              "type": "CallExpression",
              "start": 2012,
              "end": 2031,
              "callee": {
                "type": "MemberExpression",
                "start": 2012,
                "end": 2023,
                "object": {
                  "type": "Identifier",
                  "start": 2012,
                  "end": 2019,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2020,
                  "end": 2023,
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
                  "start": 2024,
                  "end": 2030,
                  "decorators": [],
                  "name": "nameA2",
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
      "type": "ForOfStatement",
      "start": 2035,
      "end": 2201,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 2040,
        "end": 2156,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2044,
            "end": 2156,
            "id": {
              "type": "ArrayPattern",
              "start": 2044,
              "end": 2156,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2045,
                  "end": 2062,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2045,
                    "end": 2051,
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 2054,
                    "end": 2062,
                    "value": "noName",
                    "raw": "\"noName\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2064,
                  "end": 2155,
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "start": 2064,
                    "end": 2132,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "start": 2070,
                        "end": 2095,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2070,
                          "end": 2083,
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2086,
                          "end": 2095,
                          "value": "primary",
                          "raw": "\"primary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 2101,
                        "end": 2130,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2101,
                          "end": 2116,
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2119,
                          "end": 2130,
                          "value": "secondary",
                          "raw": "\"secondary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 2135,
                    "end": 2155,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 2136,
                        "end": 2144,
                        "value": "skill1",
                        "raw": "\"skill1\""
                      },
                      {
                        "type": "Literal",
                        "start": 2146,
                        "end": 2154,
                        "value": "skill2",
                        "raw": "\"skill2\""
                      }
                    ]
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 2160,
        "end": 2171,
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 2173,
        "end": 2201,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2179,
            "end": 2199,
            "expression": {
              "type": "CallExpression",
              "start": 2179,
              "end": 2198,
              "callee": {
                "type": "MemberExpression",
                "start": 2179,
                "end": 2190,
                "object": {
                  "type": "Identifier",
                  "start": 2179,
                  "end": 2186,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2187,
                  "end": 2190,
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
                  "start": 2191,
                  "end": 2197,
                  "decorators": [],
                  "name": "nameMA",
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
      "type": "ForOfStatement",
      "start": 2202,
      "end": 2373,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 2207,
        "end": 2323,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2211,
            "end": 2323,
            "id": {
              "type": "ArrayPattern",
              "start": 2211,
              "end": 2323,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2212,
                  "end": 2229,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2212,
                    "end": 2218,
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 2221,
                    "end": 2229,
                    "value": "noName",
                    "raw": "\"noName\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2231,
                  "end": 2322,
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "start": 2231,
                    "end": 2299,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "start": 2237,
                        "end": 2262,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2237,
                          "end": 2250,
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2253,
                          "end": 2262,
                          "value": "primary",
                          "raw": "\"primary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 2268,
                        "end": 2297,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2268,
                          "end": 2283,
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2286,
                          "end": 2297,
                          "value": "secondary",
                          "raw": "\"secondary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 2302,
                    "end": 2322,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 2303,
                        "end": 2311,
                        "value": "skill1",
                        "raw": "\"skill1\""
                      },
                      {
                        "type": "Literal",
                        "start": 2313,
                        "end": 2321,
                        "value": "skill2",
                        "raw": "\"skill2\""
                      }
                    ]
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "CallExpression",
        "start": 2327,
        "end": 2343,
        "callee": {
          "type": "Identifier",
          "start": 2327,
          "end": 2341,
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 2345,
        "end": 2373,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2351,
            "end": 2371,
            "expression": {
              "type": "CallExpression",
              "start": 2351,
              "end": 2370,
              "callee": {
                "type": "MemberExpression",
                "start": 2351,
                "end": 2362,
                "object": {
                  "type": "Identifier",
                  "start": 2351,
                  "end": 2358,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2359,
                  "end": 2362,
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
                  "start": 2363,
                  "end": 2369,
                  "decorators": [],
                  "name": "nameMA",
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
      "type": "ForOfStatement",
      "start": 2374,
      "end": 2555,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 2379,
        "end": 2495,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2383,
            "end": 2495,
            "id": {
              "type": "ArrayPattern",
              "start": 2383,
              "end": 2495,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2384,
                  "end": 2401,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2384,
                    "end": 2390,
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 2393,
                    "end": 2401,
                    "value": "noName",
                    "raw": "\"noName\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 2403,
                  "end": 2494,
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "start": 2403,
                    "end": 2471,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "start": 2409,
                        "end": 2434,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2409,
                          "end": 2422,
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2425,
                          "end": 2434,
                          "value": "primary",
                          "raw": "\"primary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "AssignmentPattern",
                        "start": 2440,
                        "end": 2469,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2440,
                          "end": 2455,
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2458,
                          "end": 2469,
                          "value": "secondary",
                          "raw": "\"secondary\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 2474,
                    "end": 2494,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 2475,
                        "end": 2483,
                        "value": "skill1",
                        "raw": "\"skill1\""
                      },
                      {
                        "type": "Literal",
                        "start": 2485,
                        "end": 2493,
                        "value": "skill2",
                        "raw": "\"skill2\""
                      }
                    ]
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 2499,
        "end": 2525,
        "elements": [
          {
            "type": "Identifier",
            "start": 2500,
            "end": 2511,
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 2513,
            "end": 2524,
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 2527,
        "end": 2555,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2533,
            "end": 2553,
            "expression": {
              "type": "CallExpression",
              "start": 2533,
              "end": 2552,
              "callee": {
                "type": "MemberExpression",
                "start": 2533,
                "end": 2544,
                "object": {
                  "type": "Identifier",
                  "start": 2533,
                  "end": 2540,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2541,
                  "end": 2544,
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
                  "start": 2545,
                  "end": 2551,
                  "decorators": [],
                  "name": "nameMA",
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
      "type": "ForOfStatement",
      "start": 2557,
      "end": 2638,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 2562,
        "end": 2596,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2566,
            "end": 2596,
            "id": {
              "type": "ArrayPattern",
              "start": 2566,
              "end": 2596,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2567,
                  "end": 2580,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2567,
                    "end": 2575,
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "start": 2578,
                    "end": 2580,
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "start": 2579,
                      "end": 2580,
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "RestElement",
                  "start": 2582,
                  "end": 2595,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 2585,
                    "end": 2595,
                    "decorators": [],
                    "name": "robotAInfo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 2600,
        "end": 2606,
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 2608,
        "end": 2638,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2614,
            "end": 2636,
            "expression": {
              "type": "CallExpression",
              "start": 2614,
              "end": 2635,
              "callee": {
                "type": "MemberExpression",
                "start": 2614,
                "end": 2625,
                "object": {
                  "type": "Identifier",
                  "start": 2614,
                  "end": 2621,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2622,
                  "end": 2625,
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
                  "start": 2626,
                  "end": 2634,
                  "decorators": [],
                  "name": "numberA3",
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
      "type": "ForOfStatement",
      "start": 2639,
      "end": 2725,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 2644,
        "end": 2678,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2648,
            "end": 2678,
            "id": {
              "type": "ArrayPattern",
              "start": 2648,
              "end": 2678,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2649,
                  "end": 2662,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2649,
                    "end": 2657,
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "start": 2660,
                    "end": 2662,
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "start": 2661,
                      "end": 2662,
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "RestElement",
                  "start": 2664,
                  "end": 2677,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 2667,
                    "end": 2677,
                    "decorators": [],
                    "name": "robotAInfo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "CallExpression",
        "start": 2682,
        "end": 2693,
        "callee": {
          "type": "Identifier",
          "start": 2682,
          "end": 2691,
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 2695,
        "end": 2725,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2701,
            "end": 2723,
            "expression": {
              "type": "CallExpression",
              "start": 2701,
              "end": 2722,
              "callee": {
                "type": "MemberExpression",
                "start": 2701,
                "end": 2712,
                "object": {
                  "type": "Identifier",
                  "start": 2701,
                  "end": 2708,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2709,
                  "end": 2712,
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
                  "start": 2713,
                  "end": 2721,
                  "decorators": [],
                  "name": "numberA3",
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
      "type": "ForOfStatement",
      "start": 2726,
      "end": 2817,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 2731,
        "end": 2765,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2735,
            "end": 2765,
            "id": {
              "type": "ArrayPattern",
              "start": 2735,
              "end": 2765,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 2736,
                  "end": 2749,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2736,
                    "end": 2744,
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "start": 2747,
                    "end": 2749,
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "start": 2748,
                      "end": 2749,
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "RestElement",
                  "start": 2751,
                  "end": 2764,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 2754,
                    "end": 2764,
                    "decorators": [],
                    "name": "robotAInfo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 2769,
        "end": 2785,
        "elements": [
          {
            "type": "Identifier",
            "start": 2770,
            "end": 2776,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 2778,
            "end": 2784,
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 2787,
        "end": 2817,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2793,
            "end": 2815,
            "expression": {
              "type": "CallExpression",
              "start": 2793,
              "end": 2814,
              "callee": {
                "type": "MemberExpression",
                "start": 2793,
                "end": 2804,
                "object": {
                  "type": "Identifier",
                  "start": 2793,
                  "end": 2800,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2801,
                  "end": 2804,
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
                  "start": 2805,
                  "end": 2813,
                  "decorators": [],
                  "name": "numberA3",
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
