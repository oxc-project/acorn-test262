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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 52,
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
      "start": 53,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 63,
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 134,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 183,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 182,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 186,
      "end": 209,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 208,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 210,
      "end": 233,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 214,
          "end": 232,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 234,
      "end": 275,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 274,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 277,
      "end": 326,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 281,
          "end": 325,
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
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 298,
                "end": 306,
                "value": "edging",
                "raw": "\"edging\""
              },
              {
                "type": "Literal",
                "start": 308,
                "end": 324,
                "value": "Trimming edges",
                "raw": "\"Trimming edges\""
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
      "start": 327,
      "end": 390,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 389,
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
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 362,
                "end": 370,
                "value": "edging",
                "raw": "\"edging\""
              },
              {
                "type": "Literal",
                "start": 372,
                "end": 388,
                "value": "Trimming edges",
                "raw": "\"Trimming edges\""
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
      "start": 392,
      "end": 431,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 430,
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
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 420,
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
          "init": {
            "type": "Identifier",
            "start": 424,
            "end": 430,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 433,
      "end": 483,
      "test": {
        "type": "BinaryExpression",
        "start": 437,
        "end": 452,
        "left": {
          "type": "Identifier",
          "start": 437,
          "end": 442,
          "decorators": [],
          "name": "nameA",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 446,
          "end": 452,
          "decorators": [],
          "name": "nameA2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 454,
        "end": 483,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 460,
            "end": 481,
            "expression": {
              "type": "CallExpression",
              "start": 460,
              "end": 480,
              "callee": {
                "type": "MemberExpression",
                "start": 460,
                "end": 471,
                "object": {
                  "type": "Identifier",
                  "start": 460,
                  "end": 467,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 471,
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
                  "start": 472,
                  "end": 479,
                  "decorators": [],
                  "name": "skillA2",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
