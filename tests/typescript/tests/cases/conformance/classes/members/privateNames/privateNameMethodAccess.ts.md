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
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
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
              "type": "PrivateIdentifier",
              "name": "method",
              "start": 15,
              "end": 22
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 34,
                      "end": 36
                    },
                    "start": 27,
                    "end": 36
                  }
                ],
                "start": 25,
                "end": 38
              },
              "expression": false,
              "start": 22,
              "end": 38
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 15,
            "end": 38
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 54
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
                          "start": 67,
                          "end": 74
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 75,
                          "end": 78
                        },
                        "optional": false,
                        "computed": false,
                        "start": 67,
                        "end": 78
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 79,
                            "end": 83
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "method",
                            "start": 84,
                            "end": 91
                          },
                          "optional": false,
                          "computed": false,
                          "start": 79,
                          "end": 91
                        }
                      ],
                      "optional": false,
                      "start": 67,
                      "end": 92
                    },
                    "directive": null,
                    "start": 67,
                    "end": 93
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 109,
                                "end": 111
                              },
                              "typeArguments": null,
                              "start": 109,
                              "end": 111
                            },
                            "start": 107,
                            "end": 111
                          },
                          "start": 106,
                          "end": 111
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 114,
                          "end": 118
                        },
                        "definite": false,
                        "start": 106,
                        "end": 118
                      }
                    ],
                    "declare": false,
                    "start": 102,
                    "end": 119
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 128,
                          "end": 129
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 130,
                          "end": 137
                        },
                        "optional": false,
                        "computed": false,
                        "start": 128,
                        "end": 137
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 128,
                      "end": 139
                    },
                    "directive": null,
                    "start": 128,
                    "end": 140
                  },
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 159,
                      "end": 162
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
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 179,
                                "end": 180
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "method",
                                "start": 181,
                                "end": 188
                              },
                              "optional": false,
                              "computed": false,
                              "start": 179,
                              "end": 188
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 179,
                            "end": 190
                          },
                          "directive": null,
                          "start": 179,
                          "end": 191
                        }
                      ],
                      "start": 165,
                      "end": 201
                    },
                    "expression": false,
                    "start": 149,
                    "end": 201
                  }
                ],
                "start": 57,
                "end": 207
              },
              "expression": false,
              "start": 54,
              "end": 207
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 43,
            "end": 207
          }
        ],
        "start": 9,
        "end": 209
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 209
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 216
            },
            "typeArguments": null,
            "arguments": [],
            "start": 210,
            "end": 218
          },
          "property": {
            "type": "PrivateIdentifier",
            "name": "method",
            "start": 219,
            "end": 226
          },
          "optional": false,
          "computed": false,
          "start": 210,
          "end": 226
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 210,
        "end": 228
      },
      "directive": null,
      "start": 210,
      "end": 229
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 250,
        "end": 253
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
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 266,
                    "end": 268
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 262,
                  "end": 270
                },
                "property": {
                  "type": "PrivateIdentifier",
                  "name": "method",
                  "start": 271,
                  "end": 278
                },
                "optional": false,
                "computed": false,
                "start": 262,
                "end": 278
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 262,
              "end": 280
            },
            "directive": null,
            "start": 262,
            "end": 281
          }
        ],
        "start": 256,
        "end": 292
      },
      "expression": false,
      "start": 240,
      "end": 292
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 300,
        "end": 302
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 310
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 327,
                            "end": 329
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 323,
                          "end": 331
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 332,
                          "end": 339
                        },
                        "optional": false,
                        "computed": false,
                        "start": 323,
                        "end": 339
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 323,
                      "end": 341
                    },
                    "directive": null,
                    "start": 323,
                    "end": 342
                  }
                ],
                "start": 313,
                "end": 348
              },
              "expression": false,
              "start": 310,
              "end": 348
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 309,
            "end": 348
          }
        ],
        "start": 303,
        "end": 350
      },
      "abstract": false,
      "declare": false,
      "start": 294,
      "end": 350
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 350
}
```
