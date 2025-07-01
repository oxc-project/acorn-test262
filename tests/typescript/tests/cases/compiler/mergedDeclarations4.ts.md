__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 32
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 35,
                "end": 38
              },
              "expression": false,
              "start": 22,
              "end": 38
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15,
            "end": 38
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 44
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 43,
              "end": 46
            },
            "directive": null,
            "start": 43,
            "end": 47
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 53
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 55
                },
                "optional": false,
                "computed": false,
                "start": 52,
                "end": 55
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 52,
              "end": 57
            },
            "directive": null,
            "start": 52,
            "end": 58
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 72
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 75,
                    "end": 76
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hello",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 82
                  },
                  "optional": false,
                  "computed": false,
                  "start": 75,
                  "end": 82
                },
                "definite": false,
                "start": 71,
                "end": 82
              }
            ],
            "declare": false,
            "start": 67,
            "end": 83
          }
        ],
        "start": 9,
        "end": 85
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 85
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 96
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 118
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "hello",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 140,
                            "end": 145
                          },
                          "init": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 148,
                            "end": 149
                          },
                          "definite": false,
                          "start": 140,
                          "end": 149
                        }
                      ],
                      "declare": false,
                      "start": 136,
                      "end": 150
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 129,
                    "end": 150
                  }
                ],
                "start": 119,
                "end": 156
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 110,
              "end": 156
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 103,
            "end": 156
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 162
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 161,
              "end": 164
            },
            "directive": null,
            "start": 161,
            "end": 165
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 170,
                  "end": 171
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 173
                },
                "optional": false,
                "computed": false,
                "start": 170,
                "end": 173
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 170,
              "end": 175
            },
            "directive": null,
            "start": 170,
            "end": 176
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 186
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 189,
                    "end": 190
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hello",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 191,
                    "end": 196
                  },
                  "optional": false,
                  "computed": false,
                  "start": 189,
                  "end": 196
                },
                "definite": false,
                "start": 185,
                "end": 196
              }
            ],
            "declare": false,
            "start": 181,
            "end": 197
          }
        ],
        "start": 97,
        "end": 199
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 88,
      "end": 199
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 203
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 205
          },
          "optional": false,
          "computed": false,
          "start": 202,
          "end": 205
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 202,
        "end": 207
      },
      "directive": null,
      "start": 202,
      "end": 208
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 209,
            "end": 210
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 212
          },
          "optional": false,
          "computed": false,
          "start": 209,
          "end": 212
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "hello",
          "optional": false,
          "typeAnnotation": null,
          "start": 213,
          "end": 218
        },
        "optional": false,
        "computed": false,
        "start": 209,
        "end": 218
      },
      "directive": null,
      "start": 209,
      "end": 219
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 219
}
```
