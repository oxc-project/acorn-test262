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
      "start": 186,
      "end": 209,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 208,
          "id": {
            "type": "ArrayPattern",
            "start": 190,
            "end": 199,
            "elements": [
              null,
              {
                "type": "Identifier",
                "start": 193,
                "end": 198,
                "name": "nameA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 202,
            "end": 208,
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
      "start": 210,
      "end": 233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 214,
          "end": 232,
          "id": {
            "type": "ArrayPattern",
            "start": 214,
            "end": 223,
            "elements": [
              {
                "type": "Identifier",
                "start": 215,
                "end": 222,
                "name": "numberB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 226,
            "end": 232,
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
      "start": 234,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 274,
          "id": {
            "type": "ArrayPattern",
            "start": 238,
            "end": 265,
            "elements": [
              {
                "type": "Identifier",
                "start": 239,
                "end": 247,
                "name": "numberA2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 249,
                "end": 255,
                "name": "nameA2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 257,
                "end": 264,
                "name": "skillA2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 268,
            "end": 274,
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
      "start": 277,
      "end": 326,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 281,
          "end": 325,
          "id": {
            "type": "ArrayPattern",
            "start": 281,
            "end": 291,
            "elements": [
              {
                "type": "Identifier",
                "start": 282,
                "end": 290,
                "name": "numberC2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
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
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "ArrayPattern",
            "start": 331,
            "end": 355,
            "elements": [
              {
                "type": "Identifier",
                "start": 332,
                "end": 339,
                "name": "numberC",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 341,
                "end": 346,
                "name": "nameC",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 348,
                "end": 354,
                "name": "skillC",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
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
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "ArrayPattern",
            "start": 396,
            "end": 421,
            "elements": [
              {
                "type": "Identifier",
                "start": 397,
                "end": 405,
                "name": "numberA3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 407,
                "end": 420,
                "argument": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 420,
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
            "start": 424,
            "end": 430,
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
          "name": "nameA",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 446,
          "end": 452,
          "name": "nameA2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 471,
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
                  "start": 472,
                  "end": 479,
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
