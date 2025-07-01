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
        "name": "assert",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 38
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "condition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 50,
              "end": 57
            },
            "start": 48,
            "end": 57
          },
          "start": 39,
          "end": 57
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "condition",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 77
          },
          "asserts": true,
          "typeAnnotation": null,
          "start": 60,
          "end": 77
        },
        "start": 58,
        "end": 77
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "condition",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 98
              },
              "prefix": true,
              "start": 88,
              "end": 98
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
                      "start": 120,
                      "end": 125
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 116,
                    "end": 127
                  },
                  "start": 110,
                  "end": 128
                }
              ],
              "start": 100,
              "end": 134
            },
            "alternate": null,
            "start": 84,
            "end": 134
          }
        ],
        "start": 78,
        "end": 136
      },
      "expression": false,
      "start": 23,
      "end": 136
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 144,
        "end": 151
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
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 169
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "my_key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 182,
                    "end": 188
                  },
                  "value": {
                    "type": "Literal",
                    "value": "example_value",
                    "raw": "'example_value'",
                    "start": 190,
                    "end": 205
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 182,
                  "end": 205
                }
              ],
              "start": 172,
              "end": 211
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 158,
            "end": 212
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "runTypeFails",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 230
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "params",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 249,
                          "end": 255
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 258,
                              "end": 262
                            },
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 266,
                              "end": 269
                            },
                            "start": 258,
                            "end": 269
                          },
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 275,
                                      "end": 276
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "members": [
                                          {
                                            "type": "TSPropertySignature",
                                            "computed": false,
                                            "optional": false,
                                            "readonly": false,
                                            "key": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "key",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 280,
                                              "end": 283
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "start": 285,
                                                "end": 291
                                              },
                                              "start": 283,
                                              "end": 291
                                            },
                                            "accessibility": null,
                                            "static": false,
                                            "start": 280,
                                            "end": 291
                                          }
                                        ],
                                        "start": 278,
                                        "end": 293
                                      },
                                      "start": 276,
                                      "end": 293
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 275,
                                    "end": 293
                                  }
                                ],
                                "start": 273,
                                "end": 295
                              },
                              {
                                "type": "TSNullKeyword",
                                "start": 298,
                                "end": 302
                              }
                            ],
                            "start": 273,
                            "end": 302
                          },
                          "start": 258,
                          "end": 302
                        },
                        "definite": false,
                        "start": 249,
                        "end": 302
                      }
                    ],
                    "declare": false,
                    "start": 243,
                    "end": 303
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 312,
                        "end": 318
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "params",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 319,
                          "end": 325
                        }
                      ],
                      "optional": false,
                      "start": 312,
                      "end": 326
                    },
                    "directive": null,
                    "start": 312,
                    "end": 327
                  },
                  {
                    "type": "TSTypeAliasDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 341,
                      "end": 344
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "ThisExpression",
                            "start": 360,
                            "end": 364
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "map",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 365,
                            "end": 368
                          },
                          "start": 360,
                          "end": 368
                        },
                        "typeArguments": null,
                        "start": 353,
                        "end": 368
                      },
                      "start": 347,
                      "end": 368
                    },
                    "declare": false,
                    "start": 336,
                    "end": 369
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 378,
                          "end": 382
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "map",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 383,
                          "end": 386
                        },
                        "optional": false,
                        "computed": false,
                        "start": 378,
                        "end": 386
                      },
                      "property": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "params",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 387,
                              "end": 393
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 394,
                              "end": 395
                            },
                            "optional": false,
                            "computed": false,
                            "start": 387,
                            "end": 395
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 396,
                            "end": 399
                          },
                          "optional": false,
                          "computed": false,
                          "start": 387,
                          "end": 399
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 403,
                            "end": 406
                          },
                          "typeArguments": null,
                          "start": 403,
                          "end": 406
                        },
                        "start": 387,
                        "end": 406
                      },
                      "optional": false,
                      "computed": true,
                      "start": 378,
                      "end": 407
                    },
                    "directive": null,
                    "start": 378,
                    "end": 408
                  }
                ],
                "start": 233,
                "end": 414
              },
              "expression": false,
              "start": 230,
              "end": 414
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 218,
            "end": 414
          }
        ],
        "start": 152,
        "end": 416
      },
      "abstract": false,
      "declare": false,
      "start": 138,
      "end": 416
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 424,
        "end": 425
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 430,
              "end": 433
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 448,
                          "end": 449
                        },
                        "init": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 454,
                              "end": 458
                            },
                            "prefix": true,
                            "start": 453,
                            "end": 458
                          },
                          "prefix": true,
                          "start": 452,
                          "end": 458
                        },
                        "definite": false,
                        "start": 448,
                        "end": 458
                      }
                    ],
                    "declare": false,
                    "start": 442,
                    "end": 459
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 468,
                      "end": 469
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "TSTypeAliasDeclaration",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T0",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 484,
                            "end": 486
                          },
                          "typeParameters": null,
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "ThisExpression",
                              "start": 496,
                              "end": 500
                            },
                            "typeArguments": null,
                            "start": 489,
                            "end": 500
                          },
                          "declare": false,
                          "start": 479,
                          "end": 501
                        }
                      ],
                      "start": 471,
                      "end": 507
                    },
                    "alternate": null,
                    "start": 464,
                    "end": 507
                  }
                ],
                "start": 436,
                "end": 511
              },
              "expression": false,
              "start": 433,
              "end": 511
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 430,
            "end": 511
          }
        ],
        "start": 426,
        "end": 513
      },
      "abstract": false,
      "declare": false,
      "start": 418,
      "end": 513
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 513
}
```
