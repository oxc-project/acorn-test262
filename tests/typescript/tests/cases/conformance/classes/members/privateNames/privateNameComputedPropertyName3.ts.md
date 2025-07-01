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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "name",
              "start": 16,
              "end": 21
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 16,
            "end": 22
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
              "start": 28,
              "end": 39
            },
            "value": {
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 40,
                  "end": 44
                }
              ],
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
                          "start": 56,
                          "end": 60
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "name",
                          "start": 61,
                          "end": 66
                        },
                        "optional": false,
                        "computed": false,
                        "start": 56,
                        "end": 66
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 69,
                        "end": 73
                      },
                      "start": 56,
                      "end": 73
                    },
                    "directive": null,
                    "start": 56,
                    "end": 74
                  }
                ],
                "start": 46,
                "end": 80
              },
              "expression": false,
              "start": 39,
              "end": 80
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 28,
            "end": 80
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 94
            },
            "value": {
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 95,
                  "end": 96
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
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
                          "start": 114,
                          "end": 117
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 120,
                          "end": 124
                        },
                        "definite": false,
                        "start": 114,
                        "end": 124
                      }
                    ],
                    "declare": false,
                    "start": 108,
                    "end": 125
                  },
                  {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 144
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "PrivateIdentifier",
                            "name": "y",
                            "start": 159,
                            "end": 161
                          },
                          "typeAnnotation": null,
                          "value": {
                            "type": "Literal",
                            "value": 100,
                            "raw": "100",
                            "start": 164,
                            "end": 167
                          },
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null,
                          "start": 159,
                          "end": 168
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 183,
                              "end": 186
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "name",
                              "start": 187,
                              "end": 192
                            },
                            "optional": false,
                            "computed": false,
                            "start": 183,
                            "end": 192
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
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 221,
                                      "end": 222
                                    },
                                    "operator": "+",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 225,
                                        "end": 229
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "y",
                                        "start": 230,
                                        "end": 232
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 225,
                                      "end": 232
                                    },
                                    "start": 221,
                                    "end": 232
                                  },
                                  "start": 214,
                                  "end": 233
                                }
                              ],
                              "start": 196,
                              "end": 247
                            },
                            "expression": false,
                            "start": 193,
                            "end": 247
                          },
                          "kind": "method",
                          "computed": true,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 182,
                          "end": 247
                        }
                      ],
                      "start": 145,
                      "end": 257
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 135,
                    "end": 257
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 278,
                            "end": 281
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 274,
                          "end": 283
                        },
                        "property": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 284,
                            "end": 287
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "name",
                            "start": 288,
                            "end": 293
                          },
                          "optional": false,
                          "computed": false,
                          "start": 284,
                          "end": 293
                        },
                        "optional": false,
                        "computed": true,
                        "start": 274,
                        "end": 294
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 274,
                      "end": 296
                    },
                    "start": 267,
                    "end": 297
                  }
                ],
                "start": 98,
                "end": 303
              },
              "expression": false,
              "start": 94,
              "end": 303
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 86,
            "end": 303
          }
        ],
        "start": 10,
        "end": 305
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 305
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
            "start": 307,
            "end": 314
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 315,
            "end": 318
          },
          "optional": false,
          "computed": false,
          "start": 307,
          "end": 318
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 323,
                  "end": 326
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "NAME",
                    "raw": "\"NAME\"",
                    "start": 327,
                    "end": 333
                  }
                ],
                "start": 319,
                "end": 334
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 335,
                "end": 343
              },
              "optional": false,
              "computed": false,
              "start": 319,
              "end": 343
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 100,
                "raw": "100",
                "start": 344,
                "end": 347
              }
            ],
            "optional": false,
            "start": 319,
            "end": 348
          }
        ],
        "optional": false,
        "start": 307,
        "end": 349
      },
      "directive": null,
      "start": 307,
      "end": 350
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 350
}
```
