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
        "start": 10,
        "end": 11
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
                "start": 34,
                "end": 35
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
                "start": 38,
                "end": 41
              },
              "expression": false,
              "start": 25,
              "end": 41
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 41
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
                "start": 46,
                "end": 47
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 46,
              "end": 49
            },
            "directive": null,
            "start": 46,
            "end": 50
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
                  "start": 55,
                  "end": 56
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 58
                },
                "optional": false,
                "computed": false,
                "start": 55,
                "end": 58
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 55,
              "end": 60
            },
            "directive": null,
            "start": 55,
            "end": 61
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
                  "start": 74,
                  "end": 75
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 78,
                    "end": 79
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hello",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 85
                  },
                  "optional": false,
                  "computed": false,
                  "start": 78,
                  "end": 85
                },
                "definite": false,
                "start": 74,
                "end": 85
              }
            ],
            "declare": false,
            "start": 70,
            "end": 86
          }
        ],
        "start": 12,
        "end": 88
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 88
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 102
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
                "start": 126,
                "end": 127
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
                            "start": 149,
                            "end": 154
                          },
                          "init": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 157,
                            "end": 158
                          },
                          "definite": false,
                          "start": 149,
                          "end": 158
                        }
                      ],
                      "declare": false,
                      "start": 145,
                      "end": 159
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 138,
                    "end": 159
                  }
                ],
                "start": 128,
                "end": 165
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 116,
              "end": 165
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 109,
            "end": 165
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
                "start": 170,
                "end": 171
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 170,
              "end": 173
            },
            "directive": null,
            "start": 170,
            "end": 174
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
                  "start": 179,
                  "end": 180
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 182
                },
                "optional": false,
                "computed": false,
                "start": 179,
                "end": 182
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 179,
              "end": 184
            },
            "directive": null,
            "start": 179,
            "end": 185
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
                  "start": 194,
                  "end": 195
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 199
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hello",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 200,
                    "end": 205
                  },
                  "optional": false,
                  "computed": false,
                  "start": 198,
                  "end": 205
                },
                "definite": false,
                "start": 194,
                "end": 205
              }
            ],
            "declare": false,
            "start": 190,
            "end": 206
          }
        ],
        "start": 103,
        "end": 208
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 91,
      "end": 208
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
            "start": 211,
            "end": 212
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 213,
            "end": 214
          },
          "optional": false,
          "computed": false,
          "start": 211,
          "end": 214
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 211,
        "end": 216
      },
      "directive": null,
      "start": 211,
      "end": 217
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
            "start": 218,
            "end": 219
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 221
          },
          "optional": false,
          "computed": false,
          "start": 218,
          "end": 221
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "hello",
          "optional": false,
          "typeAnnotation": null,
          "start": 222,
          "end": 227
        },
        "optional": false,
        "computed": false,
        "start": 218,
        "end": 227
      },
      "directive": null,
      "start": 218,
      "end": 228
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 228
}
```
