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
        "start": 7,
        "end": 20
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
                  "start": 31,
                  "end": 50
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
                        "start": 63,
                        "end": 67
                      },
                      "value": {
                        "type": "Literal",
                        "value": "1",
                        "raw": "'1'",
                        "start": 69,
                        "end": 72
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 63,
                      "end": 72
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
                        "start": 86,
                        "end": 89
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
                            "start": 93,
                            "end": 99
                          },
                          "start": 91,
                          "end": 99
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
                                  "start": 121,
                                  "end": 126
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_foo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 127,
                                  "end": 131
                                },
                                "optional": false,
                                "computed": false,
                                "start": 121,
                                "end": 131
                              },
                              "start": 114,
                              "end": 132
                            }
                          ],
                          "start": 100,
                          "end": 142
                        },
                        "expression": false,
                        "start": 89,
                        "end": 142
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 82,
                      "end": 142
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
                        "start": 156,
                        "end": 159
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
                                "start": 167,
                                "end": 173
                              },
                              "start": 165,
                              "end": 173
                            },
                            "start": 160,
                            "end": 173
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
                                    "start": 189,
                                    "end": 194
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "_foo",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 195,
                                    "end": 199
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 189,
                                  "end": 199
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 202,
                                  "end": 207
                                },
                                "start": 189,
                                "end": 207
                              },
                              "directive": null,
                              "start": 189,
                              "end": 208
                            }
                          ],
                          "start": 175,
                          "end": 218
                        },
                        "expression": false,
                        "start": 159,
                        "end": 218
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 152,
                      "end": 218
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
                        "start": 228,
                        "end": 232
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
                                  "start": 267,
                                  "end": 272
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_foo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 273,
                                  "end": 277
                                },
                                "optional": false,
                                "computed": false,
                                "start": 267,
                                "end": 277
                              },
                              "start": 260,
                              "end": 278
                            }
                          ],
                          "start": 246,
                          "end": 288
                        },
                        "expression": false,
                        "start": 234,
                        "end": 288
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 228,
                      "end": 288
                    }
                  ],
                  "start": 53,
                  "end": 294
                },
                "definite": false,
                "start": 31,
                "end": 294
              }
            ],
            "declare": false,
            "start": 27,
            "end": 294
          }
        ],
        "start": 21,
        "end": 296
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 296
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
        "start": 304,
        "end": 305
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
              "start": 315,
              "end": 319
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
                  "start": 323,
                  "end": 329
                },
                "start": 321,
                "end": 329
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
                      "start": 339,
                      "end": 341
                    },
                    "start": 332,
                    "end": 342
                  }
                ],
                "start": 330,
                "end": 344
              },
              "expression": false,
              "start": 319,
              "end": 344
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 308,
            "end": 344
          }
        ],
        "start": 306,
        "end": 346
      },
      "abstract": false,
      "declare": false,
      "start": 298,
      "end": 346
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
        "start": 353,
        "end": 368
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 377,
        "end": 378
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
              "start": 392,
              "end": 399
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
                          "start": 416,
                          "end": 420
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
                                "start": 441,
                                "end": 442
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
                                            "start": 470,
                                            "end": 475
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "test",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 476,
                                            "end": 480
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 470,
                                          "end": 480
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 470,
                                        "end": 482
                                      },
                                      "start": 463,
                                      "end": 483
                                    }
                                  ],
                                  "start": 445,
                                  "end": 497
                                },
                                "expression": false,
                                "start": 442,
                                "end": 497
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 437,
                              "end": 497
                            }
                          ],
                          "start": 423,
                          "end": 507
                        },
                        "definite": false,
                        "start": 416,
                        "end": 507
                      }
                    ],
                    "declare": false,
                    "start": 412,
                    "end": 508
                  }
                ],
                "start": 402,
                "end": 514
              },
              "expression": false,
              "start": 399,
              "end": 514
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 385,
            "end": 514
          }
        ],
        "start": 379,
        "end": 516
      },
      "abstract": false,
      "declare": false,
      "start": 347,
      "end": 516
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 517
}
```
