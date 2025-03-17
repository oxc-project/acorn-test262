__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 164,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "use",
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
          "start": 13,
          "end": 22,
          "name": "v",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 22,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 16,
              "end": 22
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 24,
        "end": 26,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 28,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 40,
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
          "start": 41,
          "end": 50,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 42,
            "end": 50,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 44,
              "end": 50
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 64,
                  "end": 65,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                      "id": {
                        "type": "Identifier",
                        "start": 82,
                        "end": 83,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 87,
                        "name": "v",
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
                  "start": 93,
                  "end": 99,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 97,
                      "end": 98,
                      "id": {
                        "type": "Identifier",
                        "start": 97,
                        "end": 98,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
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
                      "id": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 109,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 112,
                        "end": 113,
                        "value": 2,
                        "raw": "2"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 119,
                  "end": 131,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 119,
                    "end": 130,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 125,
                      "end": 130,
                      "left": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 126,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 129,
                        "end": 130,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 143,
              "end": 148,
              "value": false,
              "raw": "false"
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 154,
            "end": 161,
            "expression": {
              "type": "CallExpression",
              "start": 154,
              "end": 160,
              "callee": {
                "type": "Identifier",
                "start": 154,
                "end": 157,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "name": "v",
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
