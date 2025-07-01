__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 15,
                    "end": 19
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 27,
                            "end": 33
                          },
                          "start": 25,
                          "end": 33
                        },
                        "start": 24,
                        "end": 33
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 38,
                        "end": 42
                      },
                      "start": 35,
                      "end": 42
                    },
                    "start": 23,
                    "end": 42
                  }
                ],
                "start": 15,
                "end": 43
              },
              "start": 13,
              "end": 43
            },
            "start": 12,
            "end": 43
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 43
        }
      ],
      "declare": true,
      "start": 0,
      "end": 44
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 51
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 55
            },
            "operator": "||",
            "right": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "abc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 63
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UnaryExpression",
                      "operator": "void",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "abc",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 74,
                            "end": 77
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toLowerCase",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 78,
                            "end": 89
                          },
                          "optional": false,
                          "computed": false,
                          "start": 74,
                          "end": 89
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 74,
                        "end": 91
                      },
                      "prefix": true,
                      "start": 69,
                      "end": 91
                    },
                    "directive": null,
                    "start": 69,
                    "end": 91
                  }
                ],
                "start": 67,
                "end": 93
              },
              "id": null,
              "generator": false,
              "start": 60,
              "end": 93
            },
            "start": 54,
            "end": 94
          },
          "definite": false,
          "start": 50,
          "end": 94
        }
      ],
      "declare": false,
      "start": 46,
      "end": 94
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "gg",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 101
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 105
            },
            "operator": "??",
            "right": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "abc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 110,
                  "end": 113
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UnaryExpression",
                      "operator": "void",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "abc",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 124,
                            "end": 127
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toLowerCase",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 128,
                            "end": 139
                          },
                          "optional": false,
                          "computed": false,
                          "start": 124,
                          "end": 139
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 124,
                        "end": 141
                      },
                      "prefix": true,
                      "start": 119,
                      "end": 141
                    },
                    "directive": null,
                    "start": 119,
                    "end": 141
                  }
                ],
                "start": 117,
                "end": 143
              },
              "id": null,
              "generator": false,
              "start": 110,
              "end": 143
            },
            "start": 104,
            "end": 144
          },
          "definite": false,
          "start": 99,
          "end": 144
        }
      ],
      "declare": false,
      "start": 95,
      "end": 144
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 144
}
```
