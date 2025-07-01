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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 24,
        "end": 27
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "module",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 36,
                  "end": 42
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "exports",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 50
                },
                "optional": false,
                "computed": false,
                "start": 36,
                "end": 50
              },
              "right": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "exports",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 60
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 73,
                      "end": 74
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "o",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 94,
                              "end": 95
                            },
                            "operator": "==",
                            "right": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 99,
                              "end": 103
                            },
                            "start": 94,
                            "end": 103
                          },
                          "consequent": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "create",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 107,
                              "end": 113
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 114,
                                "end": 118
                              }
                            ],
                            "optional": false,
                            "start": 107,
                            "end": 119
                          },
                          "alternate": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "defineProperties",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 122,
                              "end": 138
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Object",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 139,
                                  "end": 145
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "o",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 146,
                                    "end": 147
                                  }
                                ],
                                "optional": false,
                                "start": 139,
                                "end": 148
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "descriptors",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 150,
                                "end": 161
                              }
                            ],
                            "optional": false,
                            "start": 122,
                            "end": 162
                          },
                          "start": 93,
                          "end": 162
                        },
                        "start": 86,
                        "end": 163
                      }
                    ],
                    "start": 76,
                    "end": 169
                  },
                  "expression": false,
                  "start": 63,
                  "end": 169
                },
                "start": 53,
                "end": 169
              },
              "start": 36,
              "end": 169
            },
            "directive": null,
            "start": 36,
            "end": 170
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 182
                },
                "init": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 197,
                    "end": 247
                  },
                  "expression": false,
                  "start": 185,
                  "end": 247
                },
                "definite": false,
                "start": 181,
                "end": 247
              }
            ],
            "declare": false,
            "start": 175,
            "end": 247
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "exports",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 259
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "methods",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 267
                },
                "optional": false,
                "computed": false,
                "start": 252,
                "end": 267
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 271
              },
              "start": 252,
              "end": 271
            },
            "directive": null,
            "start": 252,
            "end": 272
          }
        ],
        "start": 30,
        "end": 274
      },
      "expression": false,
      "start": 15,
      "end": 274
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 15,
  "end": 274
}
```
