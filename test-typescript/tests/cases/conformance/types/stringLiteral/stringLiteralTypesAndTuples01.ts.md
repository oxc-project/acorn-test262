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
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 30,
            "end": 59,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 31,
                "end": 36,
                "decorators": [],
                "name": "hello",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 38,
                "end": 43,
                "decorators": [],
                "name": "brave",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 45,
                "end": 51,
                "decorators": [],
                "name": "newish",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 53,
                "end": 58,
                "decorators": [],
                "name": "world",
                "optional": false,
                "typeAnnotation": null
              }
            ],
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
                "raw": "\"Hello\"",
                "value": "Hello"
              },
              {
                "type": "Literal",
                "start": 72,
                "end": 79,
                "raw": "\"Brave\"",
                "value": "Brave"
              },
              {
                "type": "Literal",
                "start": 81,
                "end": 86,
                "raw": "\"New\"",
                "value": "New"
              },
              {
                "type": "Literal",
                "start": 88,
                "end": 95,
                "raw": "\"World\"",
                "value": "World"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 99,
      "end": 136,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 115,
        "decorators": [],
        "name": "RexOrRaptor",
        "optional": false,
        "typeAnnotation": null
      },
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
              "raw": "\"t-rex\"",
              "value": "t-rex"
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
              "raw": "\"raptor\"",
              "value": "raptor"
            }
          }
        ]
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 141,
            "end": 185,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 142,
                "end": 144,
                "decorators": [],
                "name": "im",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 146,
                "end": 147,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 149,
                "end": 157,
                "decorators": [],
                "name": "dinosaur",
                "optional": false,
                "typeAnnotation": null
              }
            ],
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
                      "raw": "\"I'm\"",
                      "value": "I'm"
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
                      "raw": "\"a\"",
                      "value": "a"
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 173,
                    "end": 184,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 184,
                      "decorators": [],
                      "name": "RexOrRaptor",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
                "raw": "'I\\'m'",
                "value": "I'm"
              },
              {
                "type": "Literal",
                "start": 197,
                "end": 200,
                "raw": "'a'",
                "value": "a"
              },
              {
                "type": "Literal",
                "start": 202,
                "end": 209,
                "raw": "'t-rex'",
                "value": "t-rex"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 213,
      "end": 228,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 213,
        "end": 227,
        "arguments": [
          {
            "type": "Identifier",
            "start": 218,
            "end": 226,
            "decorators": [],
            "name": "dinosaur",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 213,
          "end": 217,
          "decorators": [],
          "name": "rawr",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 230,
      "end": 422,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 263,
        "end": 422,
        "body": [
          {
            "type": "IfStatement",
            "start": 269,
            "end": 325,
            "alternate": null,
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
                    "raw": "\"ROAAAAR!\"",
                    "value": "ROAAAAR!"
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 273,
              "end": 289,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 273,
                "end": 277,
                "decorators": [],
                "name": "dino",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 282,
                "end": 289,
                "raw": "\"t-rex\"",
                "value": "t-rex"
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 330,
            "end": 387,
            "alternate": null,
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
                    "raw": "\"yip yip!\"",
                    "value": "yip yip!"
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 334,
              "end": 351,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 334,
                "end": 338,
                "decorators": [],
                "name": "dino",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 343,
                "end": 351,
                "raw": "\"raptor\"",
                "value": "raptor"
              }
            }
          },
          {
            "type": "ThrowStatement",
            "start": 393,
            "end": 420,
            "argument": {
              "type": "BinaryExpression",
              "start": 399,
              "end": 419,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 399,
                "end": 412,
                "raw": "\"Unexpected \"",
                "value": "Unexpected "
              },
              "right": {
                "type": "Identifier",
                "start": 415,
                "end": 419,
                "decorators": [],
                "name": "dino",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 243,
        "decorators": [],
        "name": "rawr",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 244,
          "end": 261,
          "decorators": [],
          "name": "dino",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 248,
            "end": 261,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 250,
              "end": 261,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 250,
                "end": 261,
                "decorators": [],
                "name": "RexOrRaptor",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
