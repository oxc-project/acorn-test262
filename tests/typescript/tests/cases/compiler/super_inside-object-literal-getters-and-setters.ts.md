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
        "name": "ObjectLiteral",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 23
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "ThisInObjectLiteral",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 53
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 66,
                        "end": 70
                      },
                      "value": {
                        "type": "Literal",
                        "value": "1",
                        "raw": "'1'",
                        "start": 72,
                        "end": 75
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 66,
                      "end": 75
                    },
                    {
                      "type": "Property",
                      "kind": "get",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 89,
                        "end": 92
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 96,
                            "end": 102
                          },
                          "start": 94,
                          "end": 102
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 124,
                                  "end": 129
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_foo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 130,
                                  "end": 134
                                },
                                "optional": false,
                                "computed": false,
                                "start": 124,
                                "end": 134
                              },
                              "start": 117,
                              "end": 135
                            }
                          ],
                          "start": 103,
                          "end": 145
                        },
                        "expression": false,
                        "start": 92,
                        "end": 145
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 85,
                      "end": 145
                    },
                    {
                      "type": "Property",
                      "kind": "set",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 159,
                        "end": 162
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
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 170,
                                "end": 176
                              },
                              "start": 168,
                              "end": 176
                            },
                            "start": 163,
                            "end": 176
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
                                    "type": "Super",
                                    "start": 192,
                                    "end": 197
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "_foo",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 198,
                                    "end": 202
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 192,
                                  "end": 202
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 205,
                                  "end": 210
                                },
                                "start": 192,
                                "end": 210
                              },
                              "directive": null,
                              "start": 192,
                              "end": 211
                            }
                          ],
                          "start": 178,
                          "end": 221
                        },
                        "expression": false,
                        "start": 162,
                        "end": 221
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 155,
                      "end": 221
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 231,
                        "end": 235
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
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 270,
                                  "end": 275
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_foo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 276,
                                  "end": 280
                                },
                                "optional": false,
                                "computed": false,
                                "start": 270,
                                "end": 280
                              },
                              "start": 263,
                              "end": 281
                            }
                          ],
                          "start": 249,
                          "end": 291
                        },
                        "expression": false,
                        "start": 237,
                        "end": 291
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 231,
                      "end": 291
                    }
                  ],
                  "start": 56,
                  "end": 297
                },
                "definite": false,
                "start": 34,
                "end": 297
              }
            ],
            "declare": false,
            "start": 30,
            "end": 297
          }
        ],
        "start": 24,
        "end": 299
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 299
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 307,
        "end": 308
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
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 322
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 326,
                  "end": 332
                },
                "start": 324,
                "end": 332
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 342,
                      "end": 344
                    },
                    "start": 335,
                    "end": 345
                  }
                ],
                "start": 333,
                "end": 347
              },
              "expression": false,
              "start": 322,
              "end": 347
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 311,
            "end": 347
          }
        ],
        "start": 309,
        "end": 349
      },
      "abstract": false,
      "declare": false,
      "start": 301,
      "end": 349
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SuperObjectTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 356,
        "end": 371
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 380,
        "end": 381
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
              "name": "testing",
              "optional": false,
              "typeAnnotation": null,
              "start": 395,
              "end": 402
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
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 419,
                          "end": 423
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "get",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "F",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 444,
                                "end": 445
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
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Super",
                                            "start": 473,
                                            "end": 478
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "test",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 479,
                                            "end": 483
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 473,
                                          "end": 483
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 473,
                                        "end": 485
                                      },
                                      "start": 466,
                                      "end": 486
                                    }
                                  ],
                                  "start": 448,
                                  "end": 500
                                },
                                "expression": false,
                                "start": 445,
                                "end": 500
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 440,
                              "end": 500
                            }
                          ],
                          "start": 426,
                          "end": 510
                        },
                        "definite": false,
                        "start": 419,
                        "end": 510
                      }
                    ],
                    "declare": false,
                    "start": 415,
                    "end": 511
                  }
                ],
                "start": 405,
                "end": 517
              },
              "expression": false,
              "start": 402,
              "end": 517
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 388,
            "end": 517
          }
        ],
        "start": 382,
        "end": 519
      },
      "abstract": false,
      "declare": false,
      "start": 350,
      "end": 519
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 520
}
```
