__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 483,
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
        "optional": false,
        "typeAnnotation": null
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
      },
      "typeParameters": null
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 109,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 153,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 186,
      "end": 209,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 208,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 190,
            "end": 199,
            "decorators": [],
            "elements": [
              null,
              {
                "type": "Identifier",
                "start": 193,
                "end": 198,
                "decorators": [],
                "name": "nameA",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 202,
            "end": 208,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 210,
      "end": 233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 214,
          "end": 232,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 214,
            "end": 223,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 215,
                "end": 222,
                "decorators": [],
                "name": "numberB",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 226,
            "end": 232,
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 234,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 274,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 238,
            "end": 265,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 239,
                "end": 247,
                "decorators": [],
                "name": "numberA2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 249,
                "end": 255,
                "decorators": [],
                "name": "nameA2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 257,
                "end": 264,
                "decorators": [],
                "name": "skillA2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 268,
            "end": 274,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 277,
      "end": 326,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 281,
          "end": 325,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 281,
            "end": 291,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 282,
                "end": 290,
                "decorators": [],
                "name": "numberC2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 294,
            "end": 325,
            "elements": [
              {
                "type": "Literal",
                "start": 295,
                "end": 296,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 298,
                "end": 306,
                "raw": "\"edging\"",
                "value": "edging"
              },
              {
                "type": "Literal",
                "start": 308,
                "end": 324,
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
      "start": 327,
      "end": 390,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 389,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 331,
            "end": 355,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 332,
                "end": 339,
                "decorators": [],
                "name": "numberC",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 341,
                "end": 346,
                "decorators": [],
                "name": "nameC",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 348,
                "end": 354,
                "decorators": [],
                "name": "skillC",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 358,
            "end": 389,
            "elements": [
              {
                "type": "Literal",
                "start": 359,
                "end": 360,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 362,
                "end": 370,
                "raw": "\"edging\"",
                "value": "edging"
              },
              {
                "type": "Literal",
                "start": 372,
                "end": 388,
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
      "start": 392,
      "end": 431,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 430,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 396,
            "end": 421,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 397,
                "end": 405,
                "decorators": [],
                "name": "numberA3",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "RestElement",
                "start": 407,
                "end": 420,
                "argument": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 420,
                  "decorators": [],
                  "name": "robotAInfo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 424,
            "end": 430,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 433,
      "end": 483,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 454,
        "end": 483,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 460,
            "end": 481,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 460,
              "end": 480,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 472,
                  "end": 479,
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 460,
                "end": 471,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 460,
                  "end": 467,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 471,
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
      "test": {
        "type": "BinaryExpression",
        "start": 437,
        "end": 452,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 437,
          "end": 442,
          "decorators": [],
          "name": "nameA",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 446,
          "end": 452,
          "decorators": [],
          "name": "nameA2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
