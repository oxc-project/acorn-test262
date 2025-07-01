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
              "name": "p1",
              "start": 16,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 25,
                        "end": 28
                      },
                      "start": 23,
                      "end": 28
                    },
                    "start": 22,
                    "end": 28
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "parameterName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 41,
                      "end": 42
                    },
                    "asserts": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 46,
                        "end": 52
                      },
                      "start": 46,
                      "end": 52
                    },
                    "start": 33,
                    "end": 52
                  },
                  "start": 30,
                  "end": 52
                },
                "start": 21,
                "end": 52
              },
              "start": 19,
              "end": 52
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 57
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "typeof",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 83,
                          "end": 84
                        },
                        "prefix": true,
                        "start": 76,
                        "end": 84
                      },
                      "operator": "!==",
                      "right": {
                        "type": "Literal",
                        "value": "string",
                        "raw": "\"string\"",
                        "start": 89,
                        "end": 97
                      },
                      "start": 76,
                      "end": 97
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ThrowStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Error",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 123,
                              "end": 128
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 119,
                            "end": 130
                          },
                          "start": 113,
                          "end": 131
                        }
                      ],
                      "start": 99,
                      "end": 141
                    },
                    "alternate": null,
                    "start": 72,
                    "end": 141
                  }
                ],
                "start": 62,
                "end": 147
              },
              "id": null,
              "generator": false,
              "start": 55,
              "end": 147
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 16,
            "end": 147
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 154
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 158,
                      "end": 165
                    },
                    "start": 156,
                    "end": 165
                  },
                  "start": 155,
                  "end": 165
                }
              ],
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
                          "type": "ThisExpression",
                          "start": 177,
                          "end": 181
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "p1",
                          "start": 182,
                          "end": 185
                        },
                        "optional": false,
                        "computed": false,
                        "start": 177,
                        "end": 185
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 186,
                          "end": 187
                        }
                      ],
                      "optional": false,
                      "start": 177,
                      "end": 188
                    },
                    "directive": null,
                    "start": 177,
                    "end": 189
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 198,
                      "end": 199
                    },
                    "directive": null,
                    "start": 198,
                    "end": 200
                  }
                ],
                "start": 167,
                "end": 206
              },
              "expression": false,
              "start": 154,
              "end": 206
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 152,
            "end": 206
          }
        ],
        "start": 10,
        "end": 208
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 208
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 216,
        "end": 220
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
              "name": "p1",
              "start": 227,
              "end": 230
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 234,
                      "end": 237
                    },
                    "start": 232,
                    "end": 237
                  },
                  "start": 231,
                  "end": 237
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 248,
                    "end": 249
                  },
                  "asserts": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 253,
                      "end": 259
                    },
                    "start": 253,
                    "end": 259
                  },
                  "start": 240,
                  "end": 259
                },
                "start": 238,
                "end": 259
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "typeof",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 281,
                          "end": 282
                        },
                        "prefix": true,
                        "start": 274,
                        "end": 282
                      },
                      "operator": "!==",
                      "right": {
                        "type": "Literal",
                        "value": "string",
                        "raw": "\"string\"",
                        "start": 287,
                        "end": 295
                      },
                      "start": 274,
                      "end": 295
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ThrowStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Error",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 321,
                              "end": 326
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 317,
                            "end": 328
                          },
                          "start": 311,
                          "end": 329
                        }
                      ],
                      "start": 297,
                      "end": 339
                    },
                    "alternate": null,
                    "start": 270,
                    "end": 339
                  }
                ],
                "start": 260,
                "end": 345
              },
              "expression": false,
              "start": 230,
              "end": 345
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 227,
            "end": 345
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 350,
              "end": 352
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 356,
                      "end": 363
                    },
                    "start": 354,
                    "end": 363
                  },
                  "start": 353,
                  "end": 363
                }
              ],
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
                          "type": "ThisExpression",
                          "start": 375,
                          "end": 379
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "p1",
                          "start": 380,
                          "end": 383
                        },
                        "optional": false,
                        "computed": false,
                        "start": 375,
                        "end": 383
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 384,
                          "end": 385
                        }
                      ],
                      "optional": false,
                      "start": 375,
                      "end": 386
                    },
                    "directive": null,
                    "start": 375,
                    "end": 387
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 396,
                      "end": 397
                    },
                    "directive": null,
                    "start": 396,
                    "end": 398
                  }
                ],
                "start": 365,
                "end": 404
              },
              "expression": false,
              "start": 352,
              "end": 404
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 350,
            "end": 404
          }
        ],
        "start": 221,
        "end": 406
      },
      "abstract": false,
      "declare": false,
      "start": 210,
      "end": 406
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 406
}
```
