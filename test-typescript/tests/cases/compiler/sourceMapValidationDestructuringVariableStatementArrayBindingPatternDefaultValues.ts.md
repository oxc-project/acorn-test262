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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 52,
            "name": "console",
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
                        "end": 42,
                        "name": "msg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 34,
                          "end": 42,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 36,
                            "end": 42
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
      "type": "TSTypeAliasDeclaration",
      "start": 53,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 63,
        "name": "Robot",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 109,
            "name": "robotA",
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
            "type": "ArrayExpression",
            "start": 112,
            "end": 134,
            "elements": [
              {
                "type": "Literal",
                "start": 113,
                "end": 114,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 116,
                "end": 123,
                "value": "mower",
                "raw": "\"mower\""
              },
              {
                "type": "Literal",
                "start": 125,
                "end": 133,
                "value": "mowing",
                "raw": "\"mowing\""
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
      "type": "VariableDeclaration",
      "start": 136,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 182,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 153,
            "name": "robotB",
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
            "type": "ArrayExpression",
            "start": 156,
            "end": 182,
            "elements": [
              {
                "type": "Literal",
                "start": 157,
                "end": 158,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 160,
                "end": 169,
                "value": "trimmer",
                "raw": "\"trimmer\""
              },
              {
                "type": "Literal",
                "start": 171,
                "end": 181,
                "value": "trimming",
                "raw": "\"trimming\""
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
      "type": "VariableDeclaration",
      "start": 185,
      "end": 219,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 218,
          "id": {
            "type": "ArrayPattern",
            "start": 189,
            "end": 209,
            "elements": [
              null,
              {
                "type": "AssignmentPattern",
                "start": 192,
                "end": 208,
                "left": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 197,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 200,
                  "end": 208,
                  "value": "noName",
                  "raw": "\"noName\""
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 212,
            "end": 218,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "ArrayPattern",
            "start": 224,
            "end": 238,
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 225,
                "end": 237,
                "left": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 232,
                  "name": "numberB",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "UnaryExpression",
                  "start": 235,
                  "end": 237,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 236,
                    "end": 237,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 241,
            "end": 247,
            "name": "robotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "ArrayPattern",
            "start": 253,
            "end": 308,
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 254,
                "end": 267,
                "left": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 262,
                  "name": "numberA2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "UnaryExpression",
                  "start": 265,
                  "end": 267,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 266,
                    "end": 267,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "AssignmentPattern",
                "start": 269,
                "end": 286,
                "left": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 275,
                  "name": "nameA2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 278,
                  "end": 286,
                  "value": "noName",
                  "raw": "\"noName\""
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "AssignmentPattern",
                "start": 288,
                "end": 307,
                "left": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 295,
                  "name": "skillA2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 298,
                  "end": 307,
                  "value": "noSkill",
                  "raw": "\"noSkill\""
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 311,
            "end": 317,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "ArrayPattern",
            "start": 324,
            "end": 339,
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 325,
                "end": 338,
                "left": {
                  "type": "Identifier",
                  "start": 325,
                  "end": 333,
                  "name": "numberC2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "UnaryExpression",
                  "start": 336,
                  "end": 338,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 337,
                    "end": 338,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
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
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 346,
                "end": 354,
                "value": "edging",
                "raw": "\"edging\""
              },
              {
                "type": "Literal",
                "start": 356,
                "end": 372,
                "value": "Trimming edges",
                "raw": "\"Trimming edges\""
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
      "start": 375,
      "end": 466,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 379,
          "end": 465,
          "id": {
            "type": "ArrayPattern",
            "start": 379,
            "end": 431,
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 380,
                "end": 392,
                "left": {
                  "type": "Identifier",
                  "start": 380,
                  "end": 387,
                  "name": "numberC",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "UnaryExpression",
                  "start": 390,
                  "end": 392,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 391,
                    "end": 392,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "AssignmentPattern",
                "start": 394,
                "end": 410,
                "left": {
                  "type": "Identifier",
                  "start": 394,
                  "end": 399,
                  "name": "nameC",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 402,
                  "end": 410,
                  "value": "noName",
                  "raw": "\"noName\""
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "AssignmentPattern",
                "start": 412,
                "end": 430,
                "left": {
                  "type": "Identifier",
                  "start": 412,
                  "end": 418,
                  "name": "skillC",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 421,
                  "end": 430,
                  "value": "noSkill",
                  "raw": "\"noSkill\""
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
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
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 438,
                "end": 446,
                "value": "edging",
                "raw": "\"edging\""
              },
              {
                "type": "Literal",
                "start": 448,
                "end": 464,
                "value": "Trimming edges",
                "raw": "\"Trimming edges\""
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
      "start": 468,
      "end": 512,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 472,
          "end": 511,
          "id": {
            "type": "ArrayPattern",
            "start": 472,
            "end": 502,
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 473,
                "end": 486,
                "left": {
                  "type": "Identifier",
                  "start": 473,
                  "end": 481,
                  "name": "numberA3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "UnaryExpression",
                  "start": 484,
                  "end": 486,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 485,
                    "end": 486,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "RestElement",
                "start": 488,
                "end": 501,
                "argument": {
                  "type": "Identifier",
                  "start": 491,
                  "end": 501,
                  "name": "robotAInfo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 505,
            "end": 511,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 514,
      "end": 564,
      "test": {
        "type": "BinaryExpression",
        "start": 518,
        "end": 533,
        "left": {
          "type": "Identifier",
          "start": 518,
          "end": 523,
          "name": "nameA",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 527,
          "end": 533,
          "name": "nameA2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
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
              "callee": {
                "type": "MemberExpression",
                "start": 541,
                "end": 552,
                "object": {
                  "type": "Identifier",
                  "start": 541,
                  "end": 548,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 549,
                  "end": 552,
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
                  "start": 553,
                  "end": 560,
                  "name": "skillA2",
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
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
