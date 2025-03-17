__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "name": "foo",
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
          "start": 21,
          "end": 30,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 30,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 24,
              "end": 30
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 51,
        "name": "fn",
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
          "start": 100,
          "end": 106,
          "name": "one",
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
                "name": "T",
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
        {
          "type": "Identifier",
          "start": 108,
          "end": 114,
          "name": "two",
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
                "name": "U",
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
                "id": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 131,
                  "name": "three",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 134,
                  "end": 155,
                  "test": {
                    "type": "CallExpression",
                    "start": 134,
                    "end": 143,
                    "callee": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 141,
                      "name": "Boolean",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 149,
                    "name": "one",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 155,
                    "name": "two",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 161,
            "end": 171,
            "expression": {
              "type": "CallExpression",
              "start": 161,
              "end": 170,
              "callee": {
                "type": "Identifier",
                "start": 161,
                "end": 164,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "TSNonNullExpression",
                  "start": 165,
                  "end": 169,
                  "expression": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 168,
                    "name": "one",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 176,
            "end": 186,
            "expression": {
              "type": "CallExpression",
              "start": 176,
              "end": 185,
              "callee": {
                "type": "Identifier",
                "start": 176,
                "end": 179,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "TSNonNullExpression",
                  "start": 180,
                  "end": 184,
                  "expression": {
                    "type": "Identifier",
                    "start": 180,
                    "end": 183,
                    "name": "two",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 191,
            "end": 203,
            "expression": {
              "type": "CallExpression",
              "start": 191,
              "end": 202,
              "callee": {
                "type": "Identifier",
                "start": 191,
                "end": 194,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "TSNonNullExpression",
                  "start": 195,
                  "end": 201,
                  "expression": {
                    "type": "Identifier",
                    "start": 195,
                    "end": 200,
                    "name": "three",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 51,
        "end": 99,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 52,
            "end": 80,
            "name": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 82,
            "end": 98,
            "name": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 92,
              "end": 98
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
