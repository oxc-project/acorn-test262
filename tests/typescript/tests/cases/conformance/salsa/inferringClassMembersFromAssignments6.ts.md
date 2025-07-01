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
        "name": "Foonly",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 15
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "self",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 32
                },
                "init": {
                  "type": "ThisExpression",
                  "start": 35,
                  "end": 39
                },
                "definite": false,
                "start": 28,
                "end": 39
              }
            ],
            "declare": false,
            "start": 24,
            "end": 39
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
                  "name": "self",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 44,
                  "end": 48
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 50
                },
                "optional": false,
                "computed": false,
                "start": 44,
                "end": 50
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 53,
                "end": 54
              },
              "start": 44,
              "end": 54
            },
            "directive": null,
            "start": 44,
            "end": 54
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
                  "name": "self",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 63
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 64,
                  "end": 65
                },
                "optional": false,
                "computed": false,
                "start": 59,
                "end": 65
              },
              "right": {
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
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 89,
                            "end": 96
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 97,
                            "end": 100
                          },
                          "optional": false,
                          "computed": false,
                          "start": 89,
                          "end": 100
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "self",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 101,
                              "end": 105
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 106,
                              "end": 107
                            },
                            "optional": false,
                            "computed": false,
                            "start": 101,
                            "end": 107
                          }
                        ],
                        "optional": false,
                        "start": 89,
                        "end": 108
                      },
                      "directive": null,
                      "start": 89,
                      "end": 108
                    }
                  ],
                  "start": 79,
                  "end": 114
                },
                "expression": false,
                "start": 68,
                "end": 114
              },
              "start": 59,
              "end": 114
            },
            "directive": null,
            "start": 59,
            "end": 114
          }
        ],
        "start": 18,
        "end": 116
      },
      "expression": false,
      "start": 0,
      "end": 116
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foonly",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 123
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 133
            },
            "optional": false,
            "computed": false,
            "start": 117,
            "end": 133
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "mreal",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 139
          },
          "optional": false,
          "computed": false,
          "start": 117,
          "end": 139
        },
        "right": {
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
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 163,
                      "end": 167
                    },
                    "init": {
                      "type": "ThisExpression",
                      "start": 170,
                      "end": 174
                    },
                    "definite": false,
                    "start": 163,
                    "end": 174
                  }
                ],
                "declare": false,
                "start": 159,
                "end": 174
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
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 179,
                      "end": 183
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 184,
                      "end": 185
                    },
                    "optional": false,
                    "computed": false,
                    "start": 179,
                    "end": 185
                  },
                  "right": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 188,
                    "end": 189
                  },
                  "start": 179,
                  "end": 189
                },
                "directive": null,
                "start": 179,
                "end": 189
              }
            ],
            "start": 153,
            "end": 191
          },
          "expression": false,
          "start": 142,
          "end": 191
        },
        "start": 117,
        "end": 191
      },
      "directive": null,
      "start": 117,
      "end": 191
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 201
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foonly",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 214
            },
            "typeArguments": null,
            "arguments": [],
            "start": 204,
            "end": 216
          },
          "definite": false,
          "start": 198,
          "end": 216
        }
      ],
      "declare": false,
      "start": 192,
      "end": 216
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 217,
          "end": 220
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 221,
          "end": 222
        },
        "optional": false,
        "computed": false,
        "start": 217,
        "end": 222
      },
      "directive": null,
      "start": 217,
      "end": 222
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 223,
          "end": 226
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 227,
          "end": 228
        },
        "optional": false,
        "computed": false,
        "start": 223,
        "end": 228
      },
      "directive": null,
      "start": 223,
      "end": 228
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 232
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 234
          },
          "optional": false,
          "computed": false,
          "start": 229,
          "end": 234
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 229,
        "end": 236
      },
      "directive": null,
      "start": 229,
      "end": 236
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 236
}
```
