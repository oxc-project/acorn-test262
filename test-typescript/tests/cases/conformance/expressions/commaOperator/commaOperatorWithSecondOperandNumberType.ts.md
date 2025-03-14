commaOperatorWithSecondOperandNumberType.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 829,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "decorators": [],
            "name": "ANY",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 12,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 9,
                "end": 12
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 34,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 34,
            "decorators": [],
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 34,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 27,
                "end": 34
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 54,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 54,
            "decorators": [],
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 54,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 48,
                "end": 54
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 74,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 74,
            "decorators": [],
            "name": "STRING",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 74,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 68,
                "end": 74
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 94,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 94,
            "decorators": [],
            "name": "OBJECT",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 94,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 88,
                "end": 94,
                "typeName": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 94,
                  "decorators": [],
                  "name": "Object",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 133,
      "end": 145,
      "expression": {
        "type": "SequenceExpression",
        "start": 133,
        "end": 144,
        "expressions": [
          {
            "type": "Identifier",
            "start": 133,
            "end": 136,
            "decorators": [],
            "name": "ANY",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 138,
            "end": 144,
            "decorators": [],
            "name": "NUMBER",
            "optional": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 146,
      "end": 162,
      "expression": {
        "type": "SequenceExpression",
        "start": 146,
        "end": 161,
        "expressions": [
          {
            "type": "Identifier",
            "start": 146,
            "end": 153,
            "decorators": [],
            "name": "BOOLEAN",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 155,
            "end": 161,
            "decorators": [],
            "name": "NUMBER",
            "optional": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 163,
      "end": 178,
      "expression": {
        "type": "SequenceExpression",
        "start": 163,
        "end": 177,
        "expressions": [
          {
            "type": "Identifier",
            "start": 163,
            "end": 169,
            "decorators": [],
            "name": "NUMBER",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 171,
            "end": 177,
            "decorators": [],
            "name": "NUMBER",
            "optional": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 179,
      "end": 194,
      "expression": {
        "type": "SequenceExpression",
        "start": 179,
        "end": 193,
        "expressions": [
          {
            "type": "Identifier",
            "start": 179,
            "end": 185,
            "decorators": [],
            "name": "STRING",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 187,
            "end": 193,
            "decorators": [],
            "name": "NUMBER",
            "optional": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 195,
      "end": 210,
      "expression": {
        "type": "SequenceExpression",
        "start": 195,
        "end": 209,
        "expressions": [
          {
            "type": "Identifier",
            "start": 195,
            "end": 201,
            "decorators": [],
            "name": "OBJECT",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 203,
            "end": 209,
            "decorators": [],
            "name": "NUMBER",
            "optional": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 236,
      "end": 272,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 271,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 255,
            "decorators": [],
            "name": "resultIsNumber1",
            "optional": false
          },
          "init": {
            "type": "SequenceExpression",
            "start": 259,
            "end": 270,
            "expressions": [
              {
                "type": "Identifier",
                "start": 259,
                "end": 262,
                "decorators": [],
                "name": "ANY",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 264,
                "end": 270,
                "decorators": [],
                "name": "NUMBER",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 273,
      "end": 313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 277,
          "end": 312,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 277,
            "end": 292,
            "decorators": [],
            "name": "resultIsNumber2",
            "optional": false
          },
          "init": {
            "type": "SequenceExpression",
            "start": 296,
            "end": 311,
            "expressions": [
              {
                "type": "Identifier",
                "start": 296,
                "end": 303,
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 305,
                "end": 311,
                "decorators": [],
                "name": "NUMBER",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 314,
      "end": 353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 318,
          "end": 352,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 333,
            "decorators": [],
            "name": "resultIsNumber3",
            "optional": false
          },
          "init": {
            "type": "SequenceExpression",
            "start": 337,
            "end": 351,
            "expressions": [
              {
                "type": "Identifier",
                "start": 337,
                "end": 343,
                "decorators": [],
                "name": "NUMBER",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 345,
                "end": 351,
                "decorators": [],
                "name": "NUMBER",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 354,
      "end": 393,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 392,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 358,
            "end": 373,
            "decorators": [],
            "name": "resultIsNumber4",
            "optional": false
          },
          "init": {
            "type": "SequenceExpression",
            "start": 377,
            "end": 391,
            "expressions": [
              {
                "type": "Identifier",
                "start": 377,
                "end": 383,
                "decorators": [],
                "name": "STRING",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 385,
                "end": 391,
                "decorators": [],
                "name": "NUMBER",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 394,
      "end": 433,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 398,
          "end": 432,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 398,
            "end": 413,
            "decorators": [],
            "name": "resultIsNumber5",
            "optional": false
          },
          "init": {
            "type": "SequenceExpression",
            "start": 417,
            "end": 431,
            "expressions": [
              {
                "type": "Identifier",
                "start": 417,
                "end": 423,
                "decorators": [],
                "name": "OBJECT",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 425,
                "end": 431,
                "decorators": [],
                "name": "NUMBER",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 460,
      "end": 473,
      "expression": {
        "type": "SequenceExpression",
        "start": 460,
        "end": 472,
        "expressions": [
          {
            "type": "Literal",
            "start": 460,
            "end": 464,
            "raw": "null",
            "value": null
          },
          {
            "type": "Identifier",
            "start": 466,
            "end": 472,
            "decorators": [],
            "name": "NUMBER",
            "optional": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 474,
      "end": 498,
      "expression": {
        "type": "SequenceExpression",
        "start": 474,
        "end": 497,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 474,
            "end": 489,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 474,
              "end": 477,
              "decorators": [],
              "name": "ANY",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 480,
              "end": 489,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          },
          {
            "type": "Identifier",
            "start": 491,
            "end": 497,
            "decorators": [],
            "name": "NUMBER",
            "optional": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 499,
      "end": 507,
      "expression": {
        "type": "SequenceExpression",
        "start": 499,
        "end": 506,
        "expressions": [
          {
            "type": "Literal",
            "start": 499,
            "end": 503,
            "raw": "true",
            "value": true
          },
          {
            "type": "Literal",
            "start": 505,
            "end": 506,
            "raw": "1",
            "value": 1
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 508,
      "end": 527,
      "expression": {
        "type": "SequenceExpression",
        "start": 508,
        "end": 526,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 508,
            "end": 523,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 508,
              "end": 515,
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 518,
              "end": 523,
              "raw": "false",
              "value": false
            }
          },
          {
            "type": "Literal",
            "start": 525,
            "end": 526,
            "raw": "1",
            "value": 1
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 528,
      "end": 543,
      "expression": {
        "type": "SequenceExpression",
        "start": 528,
        "end": 542,
        "expressions": [
          {
            "type": "Literal",
            "start": 528,
            "end": 530,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "AssignmentExpression",
            "start": 532,
            "end": 542,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 532,
              "end": 538,
              "decorators": [],
              "name": "NUMBER",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 541,
              "end": 542,
              "raw": "1",
              "value": 1
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 544,
      "end": 570,
      "expression": {
        "type": "SequenceExpression",
        "start": 544,
        "end": 569,
        "expressions": [
          {
            "type": "CallExpression",
            "start": 544,
            "end": 557,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 544,
              "end": 555,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 544,
                "end": 550,
                "decorators": [],
                "name": "STRING",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 551,
                "end": 555,
                "decorators": [],
                "name": "trim",
                "optional": false
              }
            },
            "optional": false
          },
          {
            "type": "AssignmentExpression",
            "start": 559,
            "end": 569,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 559,
              "end": 565,
              "decorators": [],
              "name": "NUMBER",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 568,
              "end": 569,
              "raw": "1",
              "value": 1
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 572,
      "end": 609,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 576,
          "end": 608,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 576,
            "end": 591,
            "decorators": [],
            "name": "resultIsNumber6",
            "optional": false
          },
          "init": {
            "type": "SequenceExpression",
            "start": 595,
            "end": 607,
            "expressions": [
              {
                "type": "Literal",
                "start": 595,
                "end": 599,
                "raw": "null",
                "value": null
              },
              {
                "type": "Identifier",
                "start": 601,
                "end": 607,
                "decorators": [],
                "name": "NUMBER",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 610,
      "end": 658,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 614,
          "end": 657,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 614,
            "end": 629,
            "decorators": [],
            "name": "resultIsNumber7",
            "optional": false
          },
          "init": {
            "type": "SequenceExpression",
            "start": 633,
            "end": 656,
            "expressions": [
              {
                "type": "AssignmentExpression",
                "start": 633,
                "end": 648,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 633,
                  "end": 636,
                  "decorators": [],
                  "name": "ANY",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 639,
                  "end": 648,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false
                }
              },
              {
                "type": "Identifier",
                "start": 650,
                "end": 656,
                "decorators": [],
                "name": "NUMBER",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 659,
      "end": 691,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 663,
          "end": 690,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 663,
            "end": 678,
            "decorators": [],
            "name": "resultIsNumber8",
            "optional": false
          },
          "init": {
            "type": "SequenceExpression",
            "start": 682,
            "end": 689,
            "expressions": [
              {
                "type": "Literal",
                "start": 682,
                "end": 686,
                "raw": "true",
                "value": true
              },
              {
                "type": "Literal",
                "start": 688,
                "end": 689,
                "raw": "1",
                "value": 1
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 692,
      "end": 735,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 696,
          "end": 734,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 696,
            "end": 711,
            "decorators": [],
            "name": "resultIsNumber9",
            "optional": false
          },
          "init": {
            "type": "SequenceExpression",
            "start": 715,
            "end": 733,
            "expressions": [
              {
                "type": "AssignmentExpression",
                "start": 715,
                "end": 730,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 715,
                  "end": 722,
                  "decorators": [],
                  "name": "BOOLEAN",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 725,
                  "end": 730,
                  "raw": "false",
                  "value": false
                }
              },
              {
                "type": "Literal",
                "start": 732,
                "end": 733,
                "raw": "1",
                "value": 1
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 736,
      "end": 776,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 740,
          "end": 775,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 740,
            "end": 756,
            "decorators": [],
            "name": "resultIsNumber10",
            "optional": false
          },
          "init": {
            "type": "SequenceExpression",
            "start": 760,
            "end": 774,
            "expressions": [
              {
                "type": "Literal",
                "start": 760,
                "end": 762,
                "raw": "\"\"",
                "value": ""
              },
              {
                "type": "AssignmentExpression",
                "start": 764,
                "end": 774,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 764,
                  "end": 770,
                  "decorators": [],
                  "name": "NUMBER",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 773,
                  "end": 774,
                  "raw": "1",
                  "value": 1
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
      "type": "VariableDeclaration",
      "start": 777,
      "end": 828,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 781,
          "end": 827,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 781,
            "end": 797,
            "decorators": [],
            "name": "resultIsNumber11",
            "optional": false
          },
          "init": {
            "type": "SequenceExpression",
            "start": 801,
            "end": 826,
            "expressions": [
              {
                "type": "CallExpression",
                "start": 801,
                "end": 814,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 801,
                  "end": 812,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 801,
                    "end": 807,
                    "decorators": [],
                    "name": "STRING",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 808,
                    "end": 812,
                    "decorators": [],
                    "name": "trim",
                    "optional": false
                  }
                },
                "optional": false
              },
              {
                "type": "AssignmentExpression",
                "start": 816,
                "end": 826,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 816,
                  "end": 822,
                  "decorators": [],
                  "name": "NUMBER",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 825,
                  "end": 826,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
