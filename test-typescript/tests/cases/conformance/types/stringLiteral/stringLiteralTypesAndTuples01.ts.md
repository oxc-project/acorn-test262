__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 26,
  "end": 422,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 96,
          "id": {
            "type": "ArrayPattern",
            "start": 30,
            "end": 59,
            "elements": [
              {
                "type": "Identifier",
                "start": 31,
                "end": 36,
                "name": "hello",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 38,
                "end": 43,
                "name": "brave",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 45,
                "end": 51,
                "name": "newish",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 53,
                "end": 58,
                "name": "world",
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
            "start": 62,
            "end": 96,
            "elements": [
              {
                "type": "Literal",
                "start": 63,
                "end": 70,
                "value": "Hello",
                "raw": "\"Hello\""
              },
              {
                "type": "Literal",
                "start": 72,
                "end": 79,
                "value": "Brave",
                "raw": "\"Brave\""
              },
              {
                "type": "Literal",
                "start": 81,
                "end": 86,
                "value": "New",
                "raw": "\"New\""
              },
              {
                "type": "Literal",
                "start": 88,
                "end": 95,
                "value": "World",
                "raw": "\"World\""
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
      "type": "TSTypeAliasDeclaration",
      "start": 99,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 115,
        "name": "RexOrRaptor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 118,
        "end": 136,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 118,
            "end": 125,
            "literal": {
              "type": "Literal",
              "start": 118,
              "end": 125,
              "value": "t-rex",
              "raw": "\"t-rex\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 128,
            "end": 136,
            "literal": {
              "type": "Literal",
              "start": 128,
              "end": 136,
              "value": "raptor",
              "raw": "\"raptor\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 141,
          "end": 210,
          "id": {
            "type": "ArrayPattern",
            "start": 141,
            "end": 185,
            "elements": [
              {
                "type": "Identifier",
                "start": 142,
                "end": 144,
                "name": "im",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 146,
                "end": 147,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 149,
                "end": 157,
                "name": "dinosaur",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 158,
              "end": 185,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 160,
                "end": 185,
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "start": 161,
                    "end": 166,
                    "literal": {
                      "type": "Literal",
                      "start": 161,
                      "end": 166,
                      "value": "I'm",
                      "raw": "\"I'm\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 168,
                    "end": 171,
                    "literal": {
                      "type": "Literal",
                      "start": 168,
                      "end": 171,
                      "value": "a",
                      "raw": "\"a\""
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 173,
                    "end": 184,
                    "typeName": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 184,
                      "name": "RexOrRaptor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 188,
            "end": 210,
            "elements": [
              {
                "type": "Literal",
                "start": 189,
                "end": 195,
                "value": "I'm",
                "raw": "'I\\'m'"
              },
              {
                "type": "Literal",
                "start": 197,
                "end": 200,
                "value": "a",
                "raw": "'a'"
              },
              {
                "type": "Literal",
                "start": 202,
                "end": 209,
                "value": "t-rex",
                "raw": "'t-rex'"
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
      "type": "ExpressionStatement",
      "start": 213,
      "end": 228,
      "expression": {
        "type": "CallExpression",
        "start": 213,
        "end": 227,
        "callee": {
          "type": "Identifier",
          "start": 213,
          "end": 217,
          "name": "rawr",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 218,
            "end": 226,
            "name": "dinosaur",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 230,
      "end": 422,
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 243,
        "name": "rawr",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 244,
          "end": 261,
          "name": "dino",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 248,
            "end": 261,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 250,
              "end": 261,
              "typeName": {
                "type": "Identifier",
                "start": 250,
                "end": 261,
                "name": "RexOrRaptor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 263,
        "end": 422,
        "body": [
          {
            "type": "IfStatement",
            "start": 269,
            "end": 325,
            "test": {
              "type": "BinaryExpression",
              "start": 273,
              "end": 289,
              "left": {
                "type": "Identifier",
                "start": 273,
                "end": 277,
                "name": "dino",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 282,
                "end": 289,
                "value": "t-rex",
                "raw": "\"t-rex\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 291,
              "end": 325,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 301,
                  "end": 319,
                  "argument": {
                    "type": "Literal",
                    "start": 308,
                    "end": 318,
                    "value": "ROAAAAR!",
                    "raw": "\"ROAAAAR!\""
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 330,
            "end": 387,
            "test": {
              "type": "BinaryExpression",
              "start": 334,
              "end": 351,
              "left": {
                "type": "Identifier",
                "start": 334,
                "end": 338,
                "name": "dino",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 343,
                "end": 351,
                "value": "raptor",
                "raw": "\"raptor\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 353,
              "end": 387,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 363,
                  "end": 381,
                  "argument": {
                    "type": "Literal",
                    "start": 370,
                    "end": 380,
                    "value": "yip yip!",
                    "raw": "\"yip yip!\""
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ThrowStatement",
            "start": 393,
            "end": 420,
            "argument": {
              "type": "BinaryExpression",
              "start": 399,
              "end": 419,
              "left": {
                "type": "Literal",
                "start": 399,
                "end": 412,
                "value": "Unexpected ",
                "raw": "\"Unexpected \""
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 415,
                "end": 419,
                "name": "dino",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
