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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "greeter",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 245,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 56,
            "end": 72,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 60,
                "end": 71,
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
                  "value": 20,
                  "raw": "20"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 77,
            "end": 146,
            "id": {
              "type": "Identifier",
              "start": 86,
              "end": 91,
              "decorators": [],
              "name": "maker",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
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
            "body": {
              "type": "BlockStatement",
              "start": 113,
              "end": 146,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 123,
                  "end": 140,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 127,
                      "end": 139,
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
                        "value": 22,
                        "raw": "22"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 151,
            "end": 222,
            "id": {
              "type": "Identifier",
              "start": 160,
              "end": 166,
              "decorators": [],
              "name": "maker2",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
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
            "body": {
              "type": "BlockStatement",
              "start": 189,
              "end": 222,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 199,
                  "end": 216,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 203,
                      "end": 215,
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
                        "value": 23,
                        "raw": "23"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "expression": false
          },
          {
            "type": "ExpressionStatement",
            "start": 227,
            "end": 243,
            "expression": {
              "type": "CallExpression",
              "start": 227,
              "end": 242,
              "callee": {
                "type": "Identifier",
                "start": 227,
                "end": 233,
                "decorators": [],
                "name": "maker2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
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
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
