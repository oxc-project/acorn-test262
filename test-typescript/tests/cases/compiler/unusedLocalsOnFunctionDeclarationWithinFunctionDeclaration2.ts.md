__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 245,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 245,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 245,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 56,
            "end": 72,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 60,
                "end": 71,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 66,
                  "decorators": [],
                  "name": "unused",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 69,
                  "end": 71,
                  "raw": "20",
                  "value": 20,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "FunctionDeclaration",
            "start": 77,
            "end": 146,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 113,
              "end": 146,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 123,
                  "end": 140,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 127,
                      "end": 139,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 127,
                        "end": 134,
                        "decorators": [],
                        "name": "unused2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 137,
                        "end": 139,
                        "raw": "22",
                        "value": 22,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 86,
              "end": 91,
              "decorators": [],
              "name": "maker",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 92,
                "end": 105,
                "decorators": [],
                "name": "child",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 97,
                  "end": 105,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 99,
                    "end": 105
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 112,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 108,
                "end": 112
              }
            },
            "typeParameters": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 151,
            "end": 222,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 189,
              "end": 222,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 199,
                  "end": 216,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 203,
                      "end": 215,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 203,
                        "end": 210,
                        "decorators": [],
                        "name": "unused3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 213,
                        "end": 215,
                        "raw": "23",
                        "value": 23,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 160,
              "end": 166,
              "decorators": [],
              "name": "maker2",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 167,
                "end": 181,
                "decorators": [],
                "name": "child2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 173,
                  "end": 181,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 175,
                    "end": 181
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 188,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 184,
                "end": 188
              }
            },
            "typeParameters": null
          },
          {
            "type": "ExpressionStatement",
            "start": 227,
            "end": 243,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 227,
              "end": 242,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 234,
                  "end": 241,
                  "decorators": [],
                  "name": "person2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 227,
                "end": 233,
                "decorators": [],
                "name": "maker2",
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
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "greeter",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 17,
          "end": 31,
          "decorators": [],
          "name": "person",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 31,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            }
          }
        },
        {
          "type": "Identifier",
          "start": 33,
          "end": 48,
          "decorators": [],
          "name": "person2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 40,
            "end": 48,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 42,
              "end": 48
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
