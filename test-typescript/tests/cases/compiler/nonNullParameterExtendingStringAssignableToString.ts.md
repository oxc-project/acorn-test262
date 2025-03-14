nonNullParameterExtendingStringAssignableToString.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 239,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 38,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 30,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 30,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 24,
              "end": 30
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 37,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 33,
          "end": 37
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 40,
      "end": 239,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 116,
        "end": 239,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 122,
            "end": 156,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 126,
                "end": 155,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 131,
                  "decorators": [],
                  "name": "three",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 134,
                  "end": 155,
                  "alternate": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 155,
                    "decorators": [],
                    "name": "two",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 149,
                    "decorators": [],
                    "name": "one",
                    "optional": false
                  },
                  "test": {
                    "type": "CallExpression",
                    "start": 134,
                    "end": 143,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 141,
                      "decorators": [],
                      "name": "Boolean",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 161,
            "end": 171,
            "expression": {
              "type": "CallExpression",
              "start": 161,
              "end": 170,
              "arguments": [
                {
                  "type": "TSNonNullExpression",
                  "start": 165,
                  "end": 169,
                  "expression": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 168,
                    "decorators": [],
                    "name": "one",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 161,
                "end": 164,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 176,
            "end": 186,
            "expression": {
              "type": "CallExpression",
              "start": 176,
              "end": 185,
              "arguments": [
                {
                  "type": "TSNonNullExpression",
                  "start": 180,
                  "end": 184,
                  "expression": {
                    "type": "Identifier",
                    "start": 180,
                    "end": 183,
                    "decorators": [],
                    "name": "two",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 176,
                "end": 179,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 191,
            "end": 203,
            "expression": {
              "type": "CallExpression",
              "start": 191,
              "end": 202,
              "arguments": [
                {
                  "type": "TSNonNullExpression",
                  "start": 195,
                  "end": 201,
                  "expression": {
                    "type": "Identifier",
                    "start": 195,
                    "end": 200,
                    "decorators": [],
                    "name": "three",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 191,
                "end": 194,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 51,
        "decorators": [],
        "name": "fn",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 100,
          "end": 106,
          "decorators": [],
          "name": "one",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 103,
            "end": 106,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 105,
              "end": 106,
              "typeName": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 108,
          "end": 114,
          "decorators": [],
          "name": "two",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 111,
            "end": 114,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 113,
              "end": 114,
              "typeName": {
                "type": "Identifier",
                "start": 113,
                "end": 114,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 51,
        "end": 99,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 52,
            "end": 80,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 62,
              "end": 80,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 62,
                  "end": 68
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 71,
                  "end": 80
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 82,
            "end": 98,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 92,
              "end": 98
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
