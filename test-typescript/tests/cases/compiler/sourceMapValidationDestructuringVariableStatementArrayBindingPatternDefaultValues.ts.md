__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 564,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 52,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 52,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 52,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 21,
                "end": 52,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 27,
                    "end": 50,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
                      "decorators": [],
                      "name": "log",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 31,
                        "end": 42,
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 34,
                          "end": 42,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 36,
                            "end": 42
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 43,
                      "end": 49,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 45,
                        "end": 49
                      }
                    },
                    "static": false
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
      "type": "TSTypeAliasDeclaration",
      "start": 53,
      "end": 91,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 63,
        "decorators": [],
        "name": "Robot",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 66,
        "end": 90,
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 67,
            "end": 73
          },
          {
            "type": "TSStringKeyword",
            "start": 75,
            "end": 81
          },
          {
            "type": "TSStringKeyword",
            "start": 83,
            "end": 89
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 134,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 109,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 109,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 104,
                "end": 109,
                "typeName": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 109,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 112,
            "end": 134,
            "elements": [
              {
                "type": "Literal",
                "start": 113,
                "end": 114,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 116,
                "end": 123,
                "raw": "\"mower\"",
                "value": "mower"
              },
              {
                "type": "Literal",
                "start": 125,
                "end": 133,
                "raw": "\"mowing\"",
                "value": "mowing"
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
      "start": 136,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 182,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 153,
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 146,
              "end": 153,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 148,
                "end": 153,
                "typeName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 153,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 156,
            "end": 182,
            "elements": [
              {
                "type": "Literal",
                "start": 157,
                "end": 158,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 160,
                "end": 169,
                "raw": "\"trimmer\"",
                "value": "trimmer"
              },
              {
                "type": "Literal",
                "start": 171,
                "end": 181,
                "raw": "\"trimming\"",
                "value": "trimming"
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
      "start": 185,
      "end": 219,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 218,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 189,
            "end": 209,
            "decorators": [],
            "elements": [
              null,
              {
                "type": "AssignmentPattern",
                "start": 192,
                "end": 208,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 197,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 200,
                  "end": 208,
                  "raw": "\"noName\"",
                  "value": "noName"
                }
              }
            ],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 212,
            "end": 218,
            "decorators": [],
            "name": "robotA",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 220,
      "end": 248,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 247,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 224,
            "end": 238,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 225,
                "end": 237,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 232,
                  "decorators": [],
                  "name": "numberB",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "UnaryExpression",
                  "start": 235,
                  "end": 237,
                  "argument": {
                    "type": "Literal",
                    "start": 236,
                    "end": 237,
                    "raw": "1",
                    "value": 1
                  },
                  "operator": "-",
                  "prefix": true
                }
              }
            ],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 241,
            "end": 247,
            "decorators": [],
            "name": "robotB",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 249,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 253,
          "end": 317,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 253,
            "end": 308,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 254,
                "end": 267,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 262,
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "UnaryExpression",
                  "start": 265,
                  "end": 267,
                  "argument": {
                    "type": "Literal",
                    "start": 266,
                    "end": 267,
                    "raw": "1",
                    "value": 1
                  },
                  "operator": "-",
                  "prefix": true
                }
              },
              {
                "type": "AssignmentPattern",
                "start": 269,
                "end": 286,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 275,
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 278,
                  "end": 286,
                  "raw": "\"noName\"",
                  "value": "noName"
                }
              },
              {
                "type": "AssignmentPattern",
                "start": 288,
                "end": 307,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 295,
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 298,
                  "end": 307,
                  "raw": "\"noSkill\"",
                  "value": "noSkill"
                }
              }
            ],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 311,
            "end": 317,
            "decorators": [],
            "name": "robotA",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 320,
      "end": 374,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 324,
          "end": 373,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 324,
            "end": 339,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 325,
                "end": 338,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 325,
                  "end": 333,
                  "decorators": [],
                  "name": "numberC2",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "UnaryExpression",
                  "start": 336,
                  "end": 338,
                  "argument": {
                    "type": "Literal",
                    "start": 337,
                    "end": 338,
                    "raw": "1",
                    "value": 1
                  },
                  "operator": "-",
                  "prefix": true
                }
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 342,
            "end": 373,
            "elements": [
              {
                "type": "Literal",
                "start": 343,
                "end": 344,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 346,
                "end": 354,
                "raw": "\"edging\"",
                "value": "edging"
              },
              {
                "type": "Literal",
                "start": 356,
                "end": 372,
                "raw": "\"Trimming edges\"",
                "value": "Trimming edges"
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
      "start": 375,
      "end": 466,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 379,
          "end": 465,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 379,
            "end": 431,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 380,
                "end": 392,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 380,
                  "end": 387,
                  "decorators": [],
                  "name": "numberC",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "UnaryExpression",
                  "start": 390,
                  "end": 392,
                  "argument": {
                    "type": "Literal",
                    "start": 391,
                    "end": 392,
                    "raw": "1",
                    "value": 1
                  },
                  "operator": "-",
                  "prefix": true
                }
              },
              {
                "type": "AssignmentPattern",
                "start": 394,
                "end": 410,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 394,
                  "end": 399,
                  "decorators": [],
                  "name": "nameC",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 402,
                  "end": 410,
                  "raw": "\"noName\"",
                  "value": "noName"
                }
              },
              {
                "type": "AssignmentPattern",
                "start": 412,
                "end": 430,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 412,
                  "end": 418,
                  "decorators": [],
                  "name": "skillC",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 421,
                  "end": 430,
                  "raw": "\"noSkill\"",
                  "value": "noSkill"
                }
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 434,
            "end": 465,
            "elements": [
              {
                "type": "Literal",
                "start": 435,
                "end": 436,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 438,
                "end": 446,
                "raw": "\"edging\"",
                "value": "edging"
              },
              {
                "type": "Literal",
                "start": 448,
                "end": 464,
                "raw": "\"Trimming edges\"",
                "value": "Trimming edges"
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
      "start": 468,
      "end": 512,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 472,
          "end": 511,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 472,
            "end": 502,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 473,
                "end": 486,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 473,
                  "end": 481,
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "UnaryExpression",
                  "start": 484,
                  "end": 486,
                  "argument": {
                    "type": "Literal",
                    "start": 485,
                    "end": 486,
                    "raw": "1",
                    "value": 1
                  },
                  "operator": "-",
                  "prefix": true
                }
              },
              {
                "type": "RestElement",
                "start": 488,
                "end": 501,
                "argument": {
                  "type": "Identifier",
                  "start": 491,
                  "end": 501,
                  "decorators": [],
                  "name": "robotAInfo",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 505,
            "end": 511,
            "decorators": [],
            "name": "robotA",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 514,
      "end": 564,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 535,
        "end": 564,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 541,
            "end": 562,
            "expression": {
              "type": "CallExpression",
              "start": 541,
              "end": 561,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 553,
                  "end": 560,
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 541,
                "end": 552,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 541,
                  "end": 548,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 549,
                  "end": 552,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 518,
        "end": 533,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 518,
          "end": 523,
          "decorators": [],
          "name": "nameA",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 527,
          "end": 533,
          "decorators": [],
          "name": "nameA2",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
