__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "greeter",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "person",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            },
            "start": 23,
            "end": 31
          },
          "start": 17,
          "end": 31
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "person2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 42,
              "end": 48
            },
            "start": 40,
            "end": 48
          },
          "start": 33,
          "end": 48
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unused",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 66
                },
                "init": {
                  "type": "Literal",
                  "value": 20,
                  "raw": "20",
                  "start": 69,
                  "end": 71
                },
                "definite": false,
                "start": 60,
                "end": 71
              }
            ],
            "declare": false,
            "start": 56,
            "end": 72
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "maker",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 91
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "child",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 99,
                    "end": 105
                  },
                  "start": 97,
                  "end": 105
                },
                "start": 92,
                "end": 105
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 108,
                "end": 112
              },
              "start": 106,
              "end": 112
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "unused2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 127,
                        "end": 134
                      },
                      "init": {
                        "type": "Literal",
                        "value": 22,
                        "raw": "22",
                        "start": 137,
                        "end": 139
                      },
                      "definite": false,
                      "start": 127,
                      "end": 139
                    }
                  ],
                  "declare": false,
                  "start": 123,
                  "end": 140
                }
              ],
              "start": 113,
              "end": 146
            },
            "expression": false,
            "start": 77,
            "end": 146
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "maker2",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 166
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "child2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 175,
                    "end": 181
                  },
                  "start": 173,
                  "end": 181
                },
                "start": 167,
                "end": 181
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 184,
                "end": 188
              },
              "start": 182,
              "end": 188
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "unused3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 203,
                        "end": 210
                      },
                      "init": {
                        "type": "Literal",
                        "value": 23,
                        "raw": "23",
                        "start": 213,
                        "end": 215
                      },
                      "definite": false,
                      "start": 203,
                      "end": 215
                    }
                  ],
                  "declare": false,
                  "start": 199,
                  "end": 216
                }
              ],
              "start": 189,
              "end": 222
            },
            "expression": false,
            "start": 151,
            "end": 222
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "maker2",
                "optional": false,
                "typeAnnotation": null,
                "start": 227,
                "end": 233
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "person2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 241
                }
              ],
              "optional": false,
              "start": 227,
              "end": 242
            },
            "directive": null,
            "start": 227,
            "end": 243
          }
        ],
        "start": 50,
        "end": 245
      },
      "expression": false,
      "start": 0,
      "end": 245
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 245
}
```
