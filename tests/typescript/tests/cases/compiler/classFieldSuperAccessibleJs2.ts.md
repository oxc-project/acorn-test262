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
              "start": 12,
              "end": 23
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 32,
                          "end": 36
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 37,
                          "end": 40
                        },
                        "optional": false,
                        "computed": false,
                        "start": 32,
                        "end": 40
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
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
                                    "start": 57,
                                    "end": 64
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "log",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 65,
                                    "end": 68
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 57,
                                  "end": 68
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "called arrow",
                                    "raw": "\"called arrow\"",
                                    "start": 69,
                                    "end": 83
                                  }
                                ],
                                "optional": false,
                                "start": 57,
                                "end": 84
                              },
                              "directive": null,
                              "start": 57,
                              "end": 85
                            }
                          ],
                          "start": 49,
                          "end": 91
                        },
                        "id": null,
                        "generator": false,
                        "start": 43,
                        "end": 91
                      },
                      "start": 32,
                      "end": 91
                    },
                    "directive": null,
                    "start": 32,
                    "end": 92
                  }
                ],
                "start": 26,
                "end": 96
              },
              "expression": false,
              "start": 23,
              "end": 96
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 12,
            "end": 96
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 102
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
                          "start": 111,
                          "end": 118
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 119,
                          "end": 122
                        },
                        "optional": false,
                        "computed": false,
                        "start": 111,
                        "end": 122
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "called method",
                          "raw": "\"called method\"",
                          "start": 123,
                          "end": 138
                        }
                      ],
                      "optional": false,
                      "start": 111,
                      "end": 139
                    },
                    "directive": null,
                    "start": 111,
                    "end": 140
                  }
                ],
                "start": 105,
                "end": 144
              },
              "expression": false,
              "start": 102,
              "end": 144
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 99,
            "end": 144
          }
        ],
        "start": 8,
        "end": 146
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 146
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 155
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 164,
        "end": 165
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 173
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
                          "start": 182,
                          "end": 189
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 190,
                          "end": 193
                        },
                        "optional": false,
                        "computed": false,
                        "start": 182,
                        "end": 193
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "SUPER:",
                          "raw": "\"SUPER:\"",
                          "start": 194,
                          "end": 202
                        }
                      ],
                      "optional": false,
                      "start": 182,
                      "end": 203
                    },
                    "directive": null,
                    "start": 182,
                    "end": 204
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 209,
                          "end": 214
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 215,
                          "end": 218
                        },
                        "optional": false,
                        "computed": false,
                        "start": 209,
                        "end": 218
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 209,
                      "end": 220
                    },
                    "directive": null,
                    "start": 209,
                    "end": 221
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
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 226,
                          "end": 233
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 234,
                          "end": 237
                        },
                        "optional": false,
                        "computed": false,
                        "start": 226,
                        "end": 237
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "THIS:",
                          "raw": "\"THIS:\"",
                          "start": 238,
                          "end": 245
                        }
                      ],
                      "optional": false,
                      "start": 226,
                      "end": 246
                    },
                    "directive": null,
                    "start": 226,
                    "end": 247
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 252,
                          "end": 256
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 257,
                          "end": 260
                        },
                        "optional": false,
                        "computed": false,
                        "start": 252,
                        "end": 260
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 252,
                      "end": 262
                    },
                    "directive": null,
                    "start": 252,
                    "end": 263
                  }
                ],
                "start": 176,
                "end": 267
              },
              "expression": false,
              "start": 173,
              "end": 267
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 170,
            "end": 267
          }
        ],
        "start": 166,
        "end": 269
      },
      "abstract": false,
      "declare": false,
      "start": 148,
      "end": 269
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 280
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 288
            },
            "typeArguments": null,
            "arguments": [],
            "start": 283,
            "end": 290
          },
          "definite": false,
          "start": 277,
          "end": 290
        }
      ],
      "declare": false,
      "start": 271,
      "end": 291
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 292,
            "end": 295
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 299
          },
          "optional": false,
          "computed": false,
          "start": 292,
          "end": 299
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 292,
        "end": 301
      },
      "directive": null,
      "start": 292,
      "end": 302
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 303,
                "end": 304
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null,
                "start": 305,
                "end": 314
              },
              "optional": false,
              "computed": false,
              "start": 303,
              "end": 314
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 318
            },
            "optional": false,
            "computed": false,
            "start": 303,
            "end": 318
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "call",
            "optional": false,
            "typeAnnotation": null,
            "start": 319,
            "end": 323
          },
          "optional": false,
          "computed": false,
          "start": 303,
          "end": 323
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 327
          }
        ],
        "optional": false,
        "start": 303,
        "end": 328
      },
      "directive": null,
      "start": 303,
      "end": 329
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 329
}
```
