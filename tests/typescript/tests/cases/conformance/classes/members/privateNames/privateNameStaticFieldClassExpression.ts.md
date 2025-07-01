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
        "name": "B",
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
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo",
              "start": 21,
              "end": 25
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
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
                      "start": 44,
                      "end": 55
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
                                  "start": 72,
                                  "end": 79
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 80,
                                  "end": 83
                                },
                                "optional": false,
                                "computed": false,
                                "start": 72,
                                "end": 83
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "hello",
                                  "raw": "\"hello\"",
                                  "start": 84,
                                  "end": 91
                                }
                              ],
                              "optional": false,
                              "start": 72,
                              "end": 92
                            },
                            "directive": null,
                            "start": 72,
                            "end": 93
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 110,
                                  "end": 111
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "foo2",
                                  "start": 112,
                                  "end": 117
                                },
                                "optional": false,
                                "computed": false,
                                "start": 110,
                                "end": 117
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 106,
                              "end": 119
                            },
                            "directive": null,
                            "start": 106,
                            "end": 120
                          }
                        ],
                        "start": 58,
                        "end": 130
                      },
                      "expression": false,
                      "start": 55,
                      "end": 130
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 44,
                    "end": 130
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 146,
                      "end": 150
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 123,
                      "raw": "123",
                      "start": 153,
                      "end": 156
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 139,
                    "end": 157
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "field",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 166,
                      "end": 171
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 174,
                      "end": 176
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 166,
                    "end": 177
                  }
                ],
                "start": 34,
                "end": 183
              },
              "abstract": false,
              "declare": false,
              "start": 28,
              "end": 183
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 184
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo2",
              "start": 196,
              "end": 201
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 213
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "otherClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 231,
                      "end": 241
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 123,
                      "raw": "123",
                      "start": 244,
                      "end": 247
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 224,
                    "end": 248
                  }
                ],
                "start": 214,
                "end": 254
              },
              "abstract": false,
              "declare": false,
              "start": 204,
              "end": 254
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 189,
            "end": 255
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 262
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
                          "start": 275,
                          "end": 282
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 283,
                          "end": 286
                        },
                        "optional": false,
                        "computed": false,
                        "start": 275,
                        "end": 286
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 287,
                              "end": 288
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "foo",
                              "start": 289,
                              "end": 293
                            },
                            "optional": false,
                            "computed": false,
                            "start": 287,
                            "end": 293
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 294,
                            "end": 298
                          },
                          "optional": false,
                          "computed": false,
                          "start": 287,
                          "end": 298
                        }
                      ],
                      "optional": false,
                      "start": 275,
                      "end": 299
                    },
                    "directive": null,
                    "start": 275,
                    "end": 299
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
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 308,
                            "end": 309
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "foo",
                            "start": 310,
                            "end": 314
                          },
                          "optional": false,
                          "computed": false,
                          "start": 308,
                          "end": 314
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 315,
                          "end": 319
                        },
                        "optional": false,
                        "computed": false,
                        "start": 308,
                        "end": 319
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 322,
                        "end": 324
                      },
                      "start": 308,
                      "end": 324
                    },
                    "directive": null,
                    "start": 308,
                    "end": 325
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 338,
                            "end": 339
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "foo",
                            "start": 340,
                            "end": 344
                          },
                          "optional": false,
                          "computed": false,
                          "start": 338,
                          "end": 344
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 334,
                        "end": 346
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "field",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 347,
                        "end": 352
                      },
                      "optional": false,
                      "computed": false,
                      "start": 334,
                      "end": 352
                    },
                    "directive": null,
                    "start": 334,
                    "end": 353
                  }
                ],
                "start": 265,
                "end": 359
              },
              "expression": false,
              "start": 262,
              "end": 359
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 261,
            "end": 359
          }
        ],
        "start": 8,
        "end": 361
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 361
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 363
}
```
