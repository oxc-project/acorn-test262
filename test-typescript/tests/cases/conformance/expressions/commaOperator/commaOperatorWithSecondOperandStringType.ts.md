__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 916,
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
      "type": "VariableDeclaration",
      "start": 97,
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 123,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 123,
            "decorators": [],
            "name": "resultIsString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 123,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 117,
                "end": 123
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
      "start": 157,
      "end": 169,
      "expression": {
        "type": "SequenceExpression",
        "start": 157,
        "end": 168,
        "expressions": [
          {
            "type": "Identifier",
            "start": 157,
            "end": 160,
            "decorators": [],
            "name": "ANY",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 162,
            "end": 168,
            "decorators": [],
            "name": "STRING",
            "optional": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 170,
      "end": 186,
      "expression": {
        "type": "SequenceExpression",
        "start": 170,
        "end": 185,
        "expressions": [
          {
            "type": "Identifier",
            "start": 170,
            "end": 177,
            "decorators": [],
            "name": "BOOLEAN",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 179,
            "end": 185,
            "decorators": [],
            "name": "STRING",
            "optional": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 187,
      "end": 202,
      "expression": {
        "type": "SequenceExpression",
        "start": 187,
        "end": 201,
        "expressions": [
          {
            "type": "Identifier",
            "start": 187,
            "end": 193,
            "decorators": [],
            "name": "NUMBER",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 195,
            "end": 201,
            "decorators": [],
            "name": "STRING",
            "optional": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 203,
      "end": 218,
      "expression": {
        "type": "SequenceExpression",
        "start": 203,
        "end": 217,
        "expressions": [
          {
            "type": "Identifier",
            "start": 203,
            "end": 209,
            "decorators": [],
            "name": "STRING",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 211,
            "end": 217,
            "decorators": [],
            "name": "STRING",
            "optional": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 219,
      "end": 234,
      "expression": {
        "type": "SequenceExpression",
        "start": 219,
        "end": 233,
        "expressions": [
          {
            "type": "Identifier",
            "start": 219,
            "end": 225,
            "decorators": [],
            "name": "OBJECT",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 227,
            "end": 233,
            "decorators": [],
            "name": "STRING",
            "optional": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 260,
      "end": 296,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 264,
          "end": 295,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 279,
            "decorators": [],
            "name": "resultIsString1",
            "optional": false
          },
          "init": {
            "type": "SequenceExpression",
            "start": 283,
            "end": 294,
            "expressions": [
              {
                "type": "Identifier",
                "start": 283,
                "end": 286,
                "decorators": [],
                "name": "ANY",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 288,
                "end": 294,
                "decorators": [],
                "name": "STRING",
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
      "start": 297,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 336,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 316,
            "decorators": [],
            "name": "resultIsString2",
            "optional": false
          },
          "init": {
            "type": "SequenceExpression",
            "start": 320,
            "end": 335,
            "expressions": [
              {
                "type": "Identifier",
                "start": 320,
                "end": 327,
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 329,
                "end": 335,
                "decorators": [],
                "name": "STRING",
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
      "start": 338,
      "end": 377,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 342,
          "end": 376,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 342,
            "end": 357,
            "decorators": [],
            "name": "resultIsString3",
            "optional": false
          },
          "init": {
            "type": "SequenceExpression",
            "start": 361,
            "end": 375,
            "expressions": [
              {
                "type": "Identifier",
                "start": 361,
                "end": 367,
                "decorators": [],
                "name": "NUMBER",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 369,
                "end": 375,
                "decorators": [],
                "name": "STRING",
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
      "start": 378,
      "end": 417,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 382,
          "end": 416,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 382,
            "end": 397,
            "decorators": [],
            "name": "resultIsString4",
            "optional": false
          },
          "init": {
            "type": "SequenceExpression",
            "start": 401,
            "end": 415,
            "expressions": [
              {
                "type": "Identifier",
                "start": 401,
                "end": 407,
                "decorators": [],
                "name": "STRING",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 409,
                "end": 415,
                "decorators": [],
                "name": "STRING",
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
      "start": 418,
      "end": 457,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 422,
          "end": 456,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 422,
            "end": 437,
            "decorators": [],
            "name": "resultIsString5",
            "optional": false
          },
          "init": {
            "type": "SequenceExpression",
            "start": 441,
            "end": 455,
            "expressions": [
              {
                "type": "Identifier",
                "start": 441,
                "end": 447,
                "decorators": [],
                "name": "OBJECT",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 449,
                "end": 455,
                "decorators": [],
                "name": "STRING",
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
      "start": 484,
      "end": 497,
      "expression": {
        "type": "SequenceExpression",
        "start": 484,
        "end": 496,
        "expressions": [
          {
            "type": "Literal",
            "start": 484,
            "end": 488,
            "raw": "null",
            "value": null
          },
          {
            "type": "Identifier",
            "start": 490,
            "end": 496,
            "decorators": [],
            "name": "STRING",
            "optional": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 498,
      "end": 523,
      "expression": {
        "type": "SequenceExpression",
        "start": 498,
        "end": 522,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 498,
            "end": 514,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 498,
              "end": 501,
              "decorators": [],
              "name": "ANY",
              "optional": false
            },
            "right": {
              "type": "NewExpression",
              "start": 504,
              "end": 514,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 508,
                "end": 512,
                "decorators": [],
                "name": "Date",
                "optional": false
              }
            }
          },
          {
            "type": "Identifier",
            "start": 516,
            "end": 522,
            "decorators": [],
            "name": "STRING",
            "optional": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 524,
      "end": 533,
      "expression": {
        "type": "SequenceExpression",
        "start": 524,
        "end": 532,
        "expressions": [
          {
            "type": "Literal",
            "start": 524,
            "end": 528,
            "raw": "true",
            "value": true
          },
          {
            "type": "Literal",
            "start": 530,
            "end": 532,
            "raw": "\"\"",
            "value": ""
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 534,
      "end": 559,
      "expression": {
        "type": "SequenceExpression",
        "start": 534,
        "end": 558,
        "expressions": [
          {
            "type": "BinaryExpression",
            "start": 534,
            "end": 554,
            "operator": "==",
            "left": {
              "type": "Identifier",
              "start": 534,
              "end": 541,
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 545,
              "end": 554,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 556,
            "end": 558,
            "raw": "\"\"",
            "value": ""
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 560,
      "end": 590,
      "expression": {
        "type": "SequenceExpression",
        "start": 560,
        "end": 589,
        "expressions": [
          {
            "type": "ArrayExpression",
            "start": 560,
            "end": 570,
            "elements": [
              {
                "type": "Literal",
                "start": 561,
                "end": 564,
                "raw": "\"a\"",
                "value": "a"
              },
              {
                "type": "Literal",
                "start": 566,
                "end": 569,
                "raw": "\"b\"",
                "value": "b"
              }
            ]
          },
          {
            "type": "CallExpression",
            "start": 572,
            "end": 589,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 572,
              "end": 587,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 572,
                "end": 578,
                "decorators": [],
                "name": "NUMBER",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 579,
                "end": 587,
                "decorators": [],
                "name": "toString",
                "optional": false
              }
            },
            "optional": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 591,
      "end": 630,
      "expression": {
        "type": "SequenceExpression",
        "start": 591,
        "end": 629,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 591,
            "end": 610,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 591,
              "end": 597,
              "decorators": [],
              "name": "OBJECT",
              "optional": false
            },
            "right": {
              "type": "NewExpression",
              "start": 600,
              "end": 610,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 604,
                "end": 610,
                "decorators": [],
                "name": "Object",
                "optional": false
              }
            }
          },
          {
            "type": "BinaryExpression",
            "start": 612,
            "end": 629,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 612,
              "end": 618,
              "decorators": [],
              "name": "STRING",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 621,
              "end": 629,
              "raw": "\"string\"",
              "value": "string"
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 632,
      "end": 669,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 636,
          "end": 668,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 636,
            "end": 651,
            "decorators": [],
            "name": "resultIsString6",
            "optional": false
          },
          "init": {
            "type": "SequenceExpression",
            "start": 655,
            "end": 667,
            "expressions": [
              {
                "type": "Literal",
                "start": 655,
                "end": 659,
                "raw": "null",
                "value": null
              },
              {
                "type": "Identifier",
                "start": 661,
                "end": 667,
                "decorators": [],
                "name": "STRING",
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
      "start": 670,
      "end": 719,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 674,
          "end": 718,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 674,
            "end": 689,
            "decorators": [],
            "name": "resultIsString7",
            "optional": false
          },
          "init": {
            "type": "SequenceExpression",
            "start": 693,
            "end": 717,
            "expressions": [
              {
                "type": "AssignmentExpression",
                "start": 693,
                "end": 709,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 693,
                  "end": 696,
                  "decorators": [],
                  "name": "ANY",
                  "optional": false
                },
                "right": {
                  "type": "NewExpression",
                  "start": 699,
                  "end": 709,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 703,
                    "end": 707,
                    "decorators": [],
                    "name": "Date",
                    "optional": false
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 711,
                "end": 717,
                "decorators": [],
                "name": "STRING",
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
      "start": 720,
      "end": 753,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 724,
          "end": 752,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 724,
            "end": 739,
            "decorators": [],
            "name": "resultIsString8",
            "optional": false
          },
          "init": {
            "type": "SequenceExpression",
            "start": 743,
            "end": 751,
            "expressions": [
              {
                "type": "Literal",
                "start": 743,
                "end": 747,
                "raw": "true",
                "value": true
              },
              {
                "type": "Literal",
                "start": 749,
                "end": 751,
                "raw": "\"\"",
                "value": ""
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
      "start": 754,
      "end": 803,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 758,
          "end": 802,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 758,
            "end": 773,
            "decorators": [],
            "name": "resultIsString9",
            "optional": false
          },
          "init": {
            "type": "SequenceExpression",
            "start": 777,
            "end": 801,
            "expressions": [
              {
                "type": "BinaryExpression",
                "start": 777,
                "end": 797,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 777,
                  "end": 784,
                  "decorators": [],
                  "name": "BOOLEAN",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 788,
                  "end": 797,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false
                }
              },
              {
                "type": "Literal",
                "start": 799,
                "end": 801,
                "raw": "\"\"",
                "value": ""
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
      "start": 804,
      "end": 859,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 808,
          "end": 858,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 808,
            "end": 824,
            "decorators": [],
            "name": "resultIsString10",
            "optional": false
          },
          "init": {
            "type": "SequenceExpression",
            "start": 828,
            "end": 857,
            "expressions": [
              {
                "type": "ArrayExpression",
                "start": 828,
                "end": 838,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 829,
                    "end": 832,
                    "raw": "\"a\"",
                    "value": "a"
                  },
                  {
                    "type": "Literal",
                    "start": 834,
                    "end": 837,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                ]
              },
              {
                "type": "CallExpression",
                "start": 840,
                "end": 857,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 840,
                  "end": 855,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 840,
                    "end": 846,
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 847,
                    "end": 855,
                    "decorators": [],
                    "name": "toString",
                    "optional": false
                  }
                },
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
      "start": 860,
      "end": 915,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 864,
          "end": 914,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 864,
            "end": 880,
            "decorators": [],
            "name": "resultIsString11",
            "optional": false
          },
          "init": {
            "type": "SequenceExpression",
            "start": 884,
            "end": 913,
            "expressions": [
              {
                "type": "NewExpression",
                "start": 884,
                "end": 894,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 888,
                  "end": 894,
                  "decorators": [],
                  "name": "Object",
                  "optional": false
                }
              },
              {
                "type": "BinaryExpression",
                "start": 896,
                "end": 913,
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "start": 896,
                  "end": 902,
                  "decorators": [],
                  "name": "STRING",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 905,
                  "end": 913,
                  "raw": "\"string\"",
                  "value": "string"
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
  "sourceType": "script",
  "hashbang": null
}
```
