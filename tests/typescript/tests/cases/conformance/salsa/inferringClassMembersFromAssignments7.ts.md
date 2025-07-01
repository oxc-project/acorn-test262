__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 25
            },
            "value": {
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
                          "start": 42,
                          "end": 46
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 49,
                          "end": 53
                        },
                        "definite": false,
                        "start": 42,
                        "end": 53
                      }
                    ],
                    "declare": false,
                    "start": 38,
                    "end": 53
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
                          "start": 62,
                          "end": 66
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 67,
                          "end": 68
                        },
                        "optional": false,
                        "computed": false,
                        "start": 62,
                        "end": 68
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 71,
                        "end": 72
                      },
                      "start": 62,
                      "end": 72
                    },
                    "directive": null,
                    "start": 62,
                    "end": 72
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
                          "start": 81,
                          "end": 85
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 86,
                          "end": 87
                        },
                        "optional": false,
                        "computed": false,
                        "start": 81,
                        "end": 87
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
                                    "start": 115,
                                    "end": 122
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "log",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 123,
                                    "end": 126
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 115,
                                  "end": 126
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
                                      "start": 127,
                                      "end": 131
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 132,
                                      "end": 133
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 127,
                                    "end": 133
                                  }
                                ],
                                "optional": false,
                                "start": 115,
                                "end": 134
                              },
                              "directive": null,
                              "start": 115,
                              "end": 134
                            }
                          ],
                          "start": 101,
                          "end": 144
                        },
                        "expression": false,
                        "start": 90,
                        "end": 144
                      },
                      "start": 81,
                      "end": 144
                    },
                    "directive": null,
                    "start": 81,
                    "end": 144
                  }
                ],
                "start": 28,
                "end": 150
              },
              "expression": false,
              "start": 25,
              "end": 150
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 150
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mreal",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 160
            },
            "value": {
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
                          "start": 177,
                          "end": 181
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 184,
                          "end": 188
                        },
                        "definite": false,
                        "start": 177,
                        "end": 188
                      }
                    ],
                    "declare": false,
                    "start": 173,
                    "end": 188
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
                          "start": 197,
                          "end": 201
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 202,
                          "end": 203
                        },
                        "optional": false,
                        "computed": false,
                        "start": 197,
                        "end": 203
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 206,
                        "end": 207
                      },
                      "start": 197,
                      "end": 207
                    },
                    "directive": null,
                    "start": 197,
                    "end": 207
                  }
                ],
                "start": 163,
                "end": 213
              },
              "expression": false,
              "start": 160,
              "end": 213
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 155,
            "end": 213
          }
        ],
        "start": 8,
        "end": 215
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 215
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 223
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 230,
              "end": 231
            },
            "typeArguments": null,
            "arguments": [],
            "start": 226,
            "end": 233
          },
          "definite": false,
          "start": 222,
          "end": 233
        }
      ],
      "declare": false,
      "start": 216,
      "end": 233
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 234,
          "end": 235
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 236,
          "end": 237
        },
        "optional": false,
        "computed": false,
        "start": 234,
        "end": 237
      },
      "directive": null,
      "start": 234,
      "end": 237
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 238,
          "end": 239
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 240,
          "end": 241
        },
        "optional": false,
        "computed": false,
        "start": 238,
        "end": 241
      },
      "directive": null,
      "start": 238,
      "end": 241
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 243
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 244,
            "end": 245
          },
          "optional": false,
          "computed": false,
          "start": 242,
          "end": 245
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 242,
        "end": 247
      },
      "directive": null,
      "start": 242,
      "end": 247
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 247
}
```
