grammarAmbiguities.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 206,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 35,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 35,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 21,
            "end": 33,
            "argument": {
              "type": "Literal",
              "start": 28,
              "end": 32,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 17,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 17,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 14,
              "end": 17
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 36,
      "end": 77,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 61,
        "end": 77,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 63,
            "end": 75,
            "argument": {
              "type": "Literal",
              "start": 70,
              "end": 74,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 46,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 53,
          "end": 59,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 54,
            "end": 59,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 56,
              "end": 59
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 46,
        "end": 52,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 47,
            "end": 48,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 50,
            "end": 51,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 78,
      "end": 93,
      "body": {
        "type": "TSInterfaceBody",
        "start": 90,
        "end": 93,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 89,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 94,
      "end": 109,
      "body": {
        "type": "TSInterfaceBody",
        "start": 106,
        "end": 109,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 105,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 115,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 115,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 118,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 118,
            "decorators": [],
            "name": "B",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 121,
      "end": 135,
      "expression": {
        "type": "CallExpression",
        "start": 121,
        "end": 134,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 123,
            "end": 133,
            "arguments": [
              {
                "type": "Literal",
                "start": 131,
                "end": 132,
                "raw": "7",
                "value": 7
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 124,
              "end": 130,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 125,
                  "end": 126,
                  "typeName": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 126,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 128,
                  "end": 129,
                  "typeName": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 129,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              ]
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 121,
          "end": 122,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 152,
      "expression": {
        "type": "CallExpression",
        "start": 136,
        "end": 151,
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 138,
            "end": 143,
            "operator": "<",
            "left": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 145,
            "end": 150,
            "operator": ">",
            "left": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 149,
              "end": 150,
              "raw": "7",
              "value": 7
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 136,
          "end": 137,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 169,
      "end": 188,
      "expression": {
        "type": "CallExpression",
        "start": 169,
        "end": 187,
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 171,
            "end": 176,
            "operator": "<",
            "left": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "BinaryExpression",
            "start": 178,
            "end": 186,
            "operator": ">",
            "left": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "right": {
              "type": "UnaryExpression",
              "start": 182,
              "end": 186,
              "argument": {
                "type": "Literal",
                "start": 184,
                "end": 185,
                "raw": "7",
                "value": 7
              },
              "operator": "+",
              "prefix": true
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 169,
          "end": 170,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
