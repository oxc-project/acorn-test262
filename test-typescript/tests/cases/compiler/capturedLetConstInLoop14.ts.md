__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 163,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 26,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 24,
        "end": 26,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 22,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 22,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 16,
              "end": 22
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 28,
      "end": 163,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 52,
        "end": 163,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 56,
            "end": 66,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 60,
                "end": 65,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 64,
                  "end": 65,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "DoWhileStatement",
            "start": 69,
            "end": 150,
            "body": {
              "type": "BlockStatement",
              "start": 72,
              "end": 135,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 78,
                  "end": 88,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 82,
                      "end": 87,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 82,
                        "end": 83,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 87,
                        "decorators": [],
                        "name": "v",
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
                  "start": 93,
                  "end": 99,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 97,
                      "end": 98,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 97,
                        "end": 98,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 104,
                  "end": 114,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 108,
                      "end": 113,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 109,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 112,
                        "end": 113,
                        "raw": "2",
                        "value": 2,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 119,
                  "end": 131,
                  "directive": null,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 119,
                    "end": 130,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 125,
                      "end": 130,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 126,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 129,
                        "end": 130,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 143,
              "end": 148,
              "raw": "false",
              "value": false,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 154,
            "end": 161,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 154,
              "end": 160,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 154,
                "end": 157,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 40,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 41,
          "end": 50,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 42,
            "end": 50,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 44,
              "end": 50
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
