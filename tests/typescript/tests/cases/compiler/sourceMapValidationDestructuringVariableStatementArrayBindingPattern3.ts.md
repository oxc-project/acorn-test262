__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1781,
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
      "kind": "var",
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
      "kind": "var",
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
      "end": 298,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 297,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 269,
            "decorators": [],
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 250,
              "end": 269,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 252,
                "end": 269,
                "typeName": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 269,
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
            "start": 272,
            "end": 297,
            "elements": [
              {
                "type": "Literal",
                "start": 273,
                "end": 280,
                "value": "mower",
                "raw": "\"mower\""
              },
              {
                "type": "ArrayExpression",
                "start": 282,
                "end": 296,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 283,
                    "end": 291,
                    "value": "mowing",
                    "raw": "\"mowing\""
                  },
                  {
                    "type": "Literal",
                    "start": 293,
                    "end": 295,
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
      "start": 299,
      "end": 372,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 303,
          "end": 371,
          "id": {
            "type": "Identifier",
            "start": 303,
            "end": 333,
            "decorators": [],
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 314,
              "end": 333,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 316,
                "end": 333,
                "typeName": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 333,
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
            "start": 336,
            "end": 371,
            "elements": [
              {
                "type": "Literal",
                "start": 337,
                "end": 346,
                "value": "trimmer",
                "raw": "\"trimmer\""
              },
              {
                "type": "ArrayExpression",
                "start": 348,
                "end": 370,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 349,
                    "end": 359,
                    "value": "trimming",
                    "raw": "\"trimming\""
                  },
                  {
                    "type": "Literal",
                    "start": 361,
                    "end": 369,
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
      "start": 374,
      "end": 440,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 378,
          "end": 391,
          "id": {
            "type": "Identifier",
            "start": 378,
            "end": 391,
            "decorators": [],
            "name": "nameA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 383,
              "end": 391,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 385,
                "end": 391
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 393,
          "end": 408,
          "id": {
            "type": "Identifier",
            "start": 393,
            "end": 408,
            "decorators": [],
            "name": "numberB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 400,
              "end": 408,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 402,
                "end": 408
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 410,
          "end": 423,
          "id": {
            "type": "Identifier",
            "start": 410,
            "end": 423,
            "decorators": [],
            "name": "nameB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 415,
              "end": 423,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 417,
                "end": 423
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 425,
          "end": 439,
          "id": {
            "type": "Identifier",
            "start": 425,
            "end": 439,
            "decorators": [],
            "name": "skillB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 431,
              "end": 439,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 433,
                "end": 439
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 441,
      "end": 477,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 445,
          "end": 476,
          "id": {
            "type": "Identifier",
            "start": 445,
            "end": 476,
            "decorators": [],
            "name": "robotAInfo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 455,
              "end": 476,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 457,
                "end": 476,
                "elementType": {
                  "type": "TSUnionType",
                  "start": 458,
                  "end": 473,
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 458,
                      "end": 464
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 467,
                      "end": 473
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 479,
      "end": 577,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 483,
          "end": 512,
          "id": {
            "type": "Identifier",
            "start": 483,
            "end": 512,
            "decorators": [],
            "name": "multiSkillB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 494,
              "end": 512,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 496,
                "end": 512,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 497,
                    "end": 503
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 505,
                    "end": 511
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 514,
          "end": 528,
          "id": {
            "type": "Identifier",
            "start": 514,
            "end": 528,
            "decorators": [],
            "name": "nameMB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 520,
              "end": 528,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 522,
                "end": 528
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 530,
          "end": 551,
          "id": {
            "type": "Identifier",
            "start": 530,
            "end": 551,
            "decorators": [],
            "name": "primarySkillB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 543,
              "end": 551,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 545,
                "end": 551
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 553,
          "end": 576,
          "id": {
            "type": "Identifier",
            "start": 553,
            "end": 576,
            "decorators": [],
            "name": "secondarySkillB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 568,
              "end": 576,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 570,
                "end": 576
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 578,
      "end": 629,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 582,
          "end": 628,
          "id": {
            "type": "Identifier",
            "start": 582,
            "end": 628,
            "decorators": [],
            "name": "multiRobotAInfo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 597,
              "end": 628,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 599,
                "end": 628,
                "elementType": {
                  "type": "TSUnionType",
                  "start": 600,
                  "end": 625,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 600,
                      "end": 606
                    },
                    {
                      "type": "TSTupleType",
                      "start": 609,
                      "end": 625,
                      "elementTypes": [
                        {
                          "type": "TSStringKeyword",
                          "start": 610,
                          "end": 616
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 618,
                          "end": 624
                        }
                      ]
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 631,
      "end": 650,
      "expression": {
        "type": "AssignmentExpression",
        "start": 631,
        "end": 649,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 631,
          "end": 640,
          "decorators": [],
          "elements": [
            null,
            {
              "type": "Identifier",
              "start": 634,
              "end": 639,
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 643,
          "end": 649,
          "decorators": [],
          "name": "robotA",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 651,
      "end": 675,
      "expression": {
        "type": "AssignmentExpression",
        "start": 651,
        "end": 674,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 651,
          "end": 660,
          "decorators": [],
          "elements": [
            null,
            {
              "type": "Identifier",
              "start": 654,
              "end": 659,
              "decorators": [],
              "name": "nameB",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 663,
          "end": 674,
          "callee": {
            "type": "Identifier",
            "start": 663,
            "end": 672,
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 676,
      "end": 715,
      "expression": {
        "type": "AssignmentExpression",
        "start": 676,
        "end": 714,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 676,
          "end": 685,
          "decorators": [],
          "elements": [
            null,
            {
              "type": "Identifier",
              "start": 679,
              "end": 684,
              "decorators": [],
              "name": "nameB",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 688,
          "end": 714,
          "elements": [
            {
              "type": "Literal",
              "start": 689,
              "end": 690,
              "value": 2,
              "raw": "2"
            },
            {
              "type": "Literal",
              "start": 692,
              "end": 701,
              "value": "trimmer",
              "raw": "\"trimmer\""
            },
            {
              "type": "Literal",
              "start": 703,
              "end": 713,
              "value": "trimming",
              "raw": "\"trimming\""
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 716,
      "end": 746,
      "expression": {
        "type": "AssignmentExpression",
        "start": 716,
        "end": 745,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 716,
          "end": 731,
          "decorators": [],
          "elements": [
            null,
            {
              "type": "Identifier",
              "start": 719,
              "end": 730,
              "decorators": [],
              "name": "multiSkillB",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 734,
          "end": 745,
          "decorators": [],
          "name": "multiRobotB",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 747,
      "end": 782,
      "expression": {
        "type": "AssignmentExpression",
        "start": 747,
        "end": 781,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 747,
          "end": 762,
          "decorators": [],
          "elements": [
            null,
            {
              "type": "Identifier",
              "start": 750,
              "end": 761,
              "decorators": [],
              "name": "multiSkillB",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 765,
          "end": 781,
          "callee": {
            "type": "Identifier",
            "start": 765,
            "end": 779,
            "decorators": [],
            "name": "getMultiRobotB",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 783,
      "end": 835,
      "expression": {
        "type": "AssignmentExpression",
        "start": 783,
        "end": 834,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 783,
          "end": 798,
          "decorators": [],
          "elements": [
            null,
            {
              "type": "Identifier",
              "start": 786,
              "end": 797,
              "decorators": [],
              "name": "multiSkillB",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 801,
          "end": 834,
          "elements": [
            {
              "type": "Literal",
              "start": 802,
              "end": 810,
              "value": "roomba",
              "raw": "\"roomba\""
            },
            {
              "type": "ArrayExpression",
              "start": 812,
              "end": 833,
              "elements": [
                {
                  "type": "Literal",
                  "start": 813,
                  "end": 821,
                  "value": "vacuum",
                  "raw": "\"vacuum\""
                },
                {
                  "type": "Literal",
                  "start": 823,
                  "end": 832,
                  "value": "mopping",
                  "raw": "\"mopping\""
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 837,
      "end": 856,
      "expression": {
        "type": "AssignmentExpression",
        "start": 837,
        "end": 855,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 837,
          "end": 846,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 838,
              "end": 845,
              "decorators": [],
              "name": "numberB",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 849,
          "end": 855,
          "decorators": [],
          "name": "robotB",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 857,
      "end": 881,
      "expression": {
        "type": "AssignmentExpression",
        "start": 857,
        "end": 880,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 857,
          "end": 866,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 858,
              "end": 865,
              "decorators": [],
              "name": "numberB",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 869,
          "end": 880,
          "callee": {
            "type": "Identifier",
            "start": 869,
            "end": 878,
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 882,
      "end": 921,
      "expression": {
        "type": "AssignmentExpression",
        "start": 882,
        "end": 920,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 882,
          "end": 891,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 883,
              "end": 890,
              "decorators": [],
              "name": "numberB",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 894,
          "end": 920,
          "elements": [
            {
              "type": "Literal",
              "start": 895,
              "end": 896,
              "value": 2,
              "raw": "2"
            },
            {
              "type": "Literal",
              "start": 898,
              "end": 907,
              "value": "trimmer",
              "raw": "\"trimmer\""
            },
            {
              "type": "Literal",
              "start": 909,
              "end": 919,
              "value": "trimming",
              "raw": "\"trimming\""
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 922,
      "end": 945,
      "expression": {
        "type": "AssignmentExpression",
        "start": 922,
        "end": 944,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 922,
          "end": 930,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 923,
              "end": 929,
              "decorators": [],
              "name": "nameMB",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 933,
          "end": 944,
          "decorators": [],
          "name": "multiRobotB",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 946,
      "end": 974,
      "expression": {
        "type": "AssignmentExpression",
        "start": 946,
        "end": 973,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 946,
          "end": 954,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 947,
              "end": 953,
              "decorators": [],
              "name": "nameMB",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 957,
          "end": 973,
          "callee": {
            "type": "Identifier",
            "start": 957,
            "end": 971,
            "decorators": [],
            "name": "getMultiRobotB",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 975,
      "end": 1022,
      "expression": {
        "type": "AssignmentExpression",
        "start": 975,
        "end": 1021,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 975,
          "end": 983,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 976,
              "end": 982,
              "decorators": [],
              "name": "nameMB",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 986,
          "end": 1021,
          "elements": [
            {
              "type": "Literal",
              "start": 987,
              "end": 996,
              "value": "trimmer",
              "raw": "\"trimmer\""
            },
            {
              "type": "ArrayExpression",
              "start": 998,
              "end": 1020,
              "elements": [
                {
                  "type": "Literal",
                  "start": 999,
                  "end": 1009,
                  "value": "trimming",
                  "raw": "\"trimming\""
                },
                {
                  "type": "Literal",
                  "start": 1011,
                  "end": 1019,
                  "value": "edging",
                  "raw": "\"edging\""
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1024,
      "end": 1058,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1024,
        "end": 1057,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1024,
          "end": 1048,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 1025,
              "end": 1032,
              "decorators": [],
              "name": "numberB",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 1034,
              "end": 1039,
              "decorators": [],
              "name": "nameB",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 1041,
              "end": 1047,
              "decorators": [],
              "name": "skillB",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1051,
          "end": 1057,
          "decorators": [],
          "name": "robotB",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1059,
      "end": 1098,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1059,
        "end": 1097,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1059,
          "end": 1083,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 1060,
              "end": 1067,
              "decorators": [],
              "name": "numberB",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 1069,
              "end": 1074,
              "decorators": [],
              "name": "nameB",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 1076,
              "end": 1082,
              "decorators": [],
              "name": "skillB",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1086,
          "end": 1097,
          "callee": {
            "type": "Identifier",
            "start": 1086,
            "end": 1095,
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1099,
      "end": 1153,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1099,
        "end": 1152,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1099,
          "end": 1123,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 1100,
              "end": 1107,
              "decorators": [],
              "name": "numberB",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 1109,
              "end": 1114,
              "decorators": [],
              "name": "nameB",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 1116,
              "end": 1122,
              "decorators": [],
              "name": "skillB",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 1126,
          "end": 1152,
          "elements": [
            {
              "type": "Literal",
              "start": 1127,
              "end": 1128,
              "value": 2,
              "raw": "2"
            },
            {
              "type": "Literal",
              "start": 1130,
              "end": 1139,
              "value": "trimmer",
              "raw": "\"trimmer\""
            },
            {
              "type": "Literal",
              "start": 1141,
              "end": 1151,
              "value": "trimming",
              "raw": "\"trimming\""
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1154,
      "end": 1211,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1154,
        "end": 1210,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1154,
          "end": 1196,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 1155,
              "end": 1161,
              "decorators": [],
              "name": "nameMB",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrayPattern",
              "start": 1163,
              "end": 1195,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1164,
                  "end": 1177,
                  "decorators": [],
                  "name": "primarySkillB",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 1179,
                  "end": 1194,
                  "decorators": [],
                  "name": "secondarySkillB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1199,
          "end": 1210,
          "decorators": [],
          "name": "multiRobotB",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1212,
      "end": 1274,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1212,
        "end": 1273,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1212,
          "end": 1254,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 1213,
              "end": 1219,
              "decorators": [],
              "name": "nameMB",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrayPattern",
              "start": 1221,
              "end": 1253,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1222,
                  "end": 1235,
                  "decorators": [],
                  "name": "primarySkillB",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 1237,
                  "end": 1252,
                  "decorators": [],
                  "name": "secondarySkillB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 1257,
          "end": 1273,
          "callee": {
            "type": "Identifier",
            "start": 1257,
            "end": 1271,
            "decorators": [],
            "name": "getMultiRobotB",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1275,
      "end": 1356,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1275,
        "end": 1355,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1275,
          "end": 1317,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 1276,
              "end": 1282,
              "decorators": [],
              "name": "nameMB",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrayPattern",
              "start": 1284,
              "end": 1316,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1285,
                  "end": 1298,
                  "decorators": [],
                  "name": "primarySkillB",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 1300,
                  "end": 1315,
                  "decorators": [],
                  "name": "secondarySkillB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 1320,
          "end": 1355,
          "elements": [
            {
              "type": "Literal",
              "start": 1321,
              "end": 1330,
              "value": "trimmer",
              "raw": "\"trimmer\""
            },
            {
              "type": "ArrayExpression",
              "start": 1332,
              "end": 1354,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1333,
                  "end": 1343,
                  "value": "trimming",
                  "raw": "\"trimming\""
                },
                {
                  "type": "Literal",
                  "start": 1345,
                  "end": 1353,
                  "value": "edging",
                  "raw": "\"edging\""
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1358,
      "end": 1392,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1358,
        "end": 1391,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1358,
          "end": 1382,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 1359,
              "end": 1366,
              "decorators": [],
              "name": "numberB",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "RestElement",
              "start": 1368,
              "end": 1381,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 1371,
                "end": 1381,
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
        "right": {
          "type": "Identifier",
          "start": 1385,
          "end": 1391,
          "decorators": [],
          "name": "robotB",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1393,
      "end": 1432,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1393,
        "end": 1431,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1393,
          "end": 1417,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 1394,
              "end": 1401,
              "decorators": [],
              "name": "numberB",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "RestElement",
              "start": 1403,
              "end": 1416,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 1406,
                "end": 1416,
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
        "right": {
          "type": "CallExpression",
          "start": 1420,
          "end": 1431,
          "callee": {
            "type": "Identifier",
            "start": 1420,
            "end": 1429,
            "decorators": [],
            "name": "getRobotB",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1433,
      "end": 1494,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1433,
        "end": 1493,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1433,
          "end": 1457,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 1434,
              "end": 1441,
              "decorators": [],
              "name": "numberB",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "RestElement",
              "start": 1443,
              "end": 1456,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 1446,
                "end": 1456,
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
        "right": {
          "type": "TSTypeAssertion",
          "start": 1460,
          "end": 1493,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1461,
            "end": 1466,
            "typeName": {
              "type": "Identifier",
              "start": 1461,
              "end": 1466,
              "decorators": [],
              "name": "Robot",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "expression": {
            "type": "ArrayExpression",
            "start": 1467,
            "end": 1493,
            "elements": [
              {
                "type": "Literal",
                "start": 1468,
                "end": 1469,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 1471,
                "end": 1480,
                "value": "trimmer",
                "raw": "\"trimmer\""
              },
              {
                "type": "Literal",
                "start": 1482,
                "end": 1492,
                "value": "trimming",
                "raw": "\"trimming\""
              }
            ]
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1495,
      "end": 1530,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1495,
        "end": 1529,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1495,
          "end": 1515,
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "start": 1496,
              "end": 1514,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 1499,
                "end": 1514,
                "decorators": [],
                "name": "multiRobotAInfo",
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
        "right": {
          "type": "Identifier",
          "start": 1518,
          "end": 1529,
          "decorators": [],
          "name": "multiRobotA",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1531,
      "end": 1571,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1531,
        "end": 1570,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1531,
          "end": 1551,
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "start": 1532,
              "end": 1550,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 1535,
                "end": 1550,
                "decorators": [],
                "name": "multiRobotAInfo",
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
        "right": {
          "type": "CallExpression",
          "start": 1554,
          "end": 1570,
          "callee": {
            "type": "Identifier",
            "start": 1554,
            "end": 1568,
            "decorators": [],
            "name": "getMultiRobotB",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1572,
      "end": 1631,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1572,
        "end": 1630,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 1572,
          "end": 1592,
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "start": 1573,
              "end": 1591,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 1576,
                "end": 1591,
                "decorators": [],
                "name": "multiRobotAInfo",
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
        "right": {
          "type": "ArrayExpression",
          "start": 1595,
          "end": 1630,
          "elements": [
            {
              "type": "Literal",
              "start": 1596,
              "end": 1605,
              "value": "trimmer",
              "raw": "\"trimmer\""
            },
            {
              "type": "ArrayExpression",
              "start": 1607,
              "end": 1629,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1608,
                  "end": 1618,
                  "value": "trimming",
                  "raw": "\"trimming\""
                },
                {
                  "type": "Literal",
                  "start": 1620,
                  "end": 1628,
                  "value": "edging",
                  "raw": "\"edging\""
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "IfStatement",
      "start": 1633,
      "end": 1681,
      "test": {
        "type": "BinaryExpression",
        "start": 1637,
        "end": 1651,
        "left": {
          "type": "Identifier",
          "start": 1637,
          "end": 1642,
          "decorators": [],
          "name": "nameA",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 1646,
          "end": 1651,
          "decorators": [],
          "name": "nameB",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1653,
        "end": 1681,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1659,
            "end": 1679,
            "expression": {
              "type": "CallExpression",
              "start": 1659,
              "end": 1678,
              "callee": {
                "type": "MemberExpression",
                "start": 1659,
                "end": 1670,
                "object": {
                  "type": "Identifier",
                  "start": 1659,
                  "end": 1666,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1667,
                  "end": 1670,
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
                  "start": 1671,
                  "end": 1677,
                  "decorators": [],
                  "name": "skillB",
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
      "alternate": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1683,
      "end": 1726,
      "id": {
        "type": "Identifier",
        "start": 1692,
        "end": 1701,
        "decorators": [],
        "name": "getRobotB",
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
        "start": 1704,
        "end": 1726,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1710,
            "end": 1724,
            "argument": {
              "type": "Identifier",
              "start": 1717,
              "end": 1723,
              "decorators": [],
              "name": "robotB",
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
      "start": 1728,
      "end": 1781,
      "id": {
        "type": "Identifier",
        "start": 1737,
        "end": 1751,
        "decorators": [],
        "name": "getMultiRobotB",
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
        "start": 1754,
        "end": 1781,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1760,
            "end": 1779,
            "argument": {
              "type": "Identifier",
              "start": 1767,
              "end": 1778,
              "decorators": [],
              "name": "multiRobotB",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
