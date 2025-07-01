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
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
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
              "start": 19,
              "end": 30
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 41,
                        "end": 47
                      },
                      "start": 39,
                      "end": 47
                    },
                    "start": 38,
                    "end": 47
                  },
                  "readonly": false,
                  "static": false,
                  "start": 31,
                  "end": 47
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 59,
                        "end": 65
                      },
                      "start": 57,
                      "end": 65
                    },
                    "start": 56,
                    "end": 65
                  },
                  "readonly": false,
                  "static": false,
                  "start": 49,
                  "end": 65
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 67,
                "end": 75
              },
              "expression": false,
              "start": 30,
              "end": 75
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 19,
            "end": 75
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getDist",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 87
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 108,
                          "end": 112
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "sqrt",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 113,
                          "end": 117
                        },
                        "optional": false,
                        "computed": false,
                        "start": 108,
                        "end": 117
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 118,
                                "end": 122
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 123,
                                "end": 124
                              },
                              "optional": false,
                              "computed": false,
                              "start": 118,
                              "end": 124
                            },
                            "operator": "*",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 125,
                                "end": 129
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 130,
                                "end": 131
                              },
                              "optional": false,
                              "computed": false,
                              "start": 125,
                              "end": 131
                            },
                            "start": 118,
                            "end": 131
                          },
                          "operator": "+",
                          "right": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 134,
                                "end": 138
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 139,
                                "end": 140
                              },
                              "optional": false,
                              "computed": false,
                              "start": 134,
                              "end": 140
                            },
                            "operator": "*",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 141,
                                "end": 145
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 146,
                                "end": 147
                              },
                              "optional": false,
                              "computed": false,
                              "start": 141,
                              "end": 147
                            },
                            "start": 134,
                            "end": 147
                          },
                          "start": 118,
                          "end": 147
                        }
                      ],
                      "optional": false,
                      "start": 108,
                      "end": 148
                    },
                    "start": 101,
                    "end": 149
                  }
                ],
                "start": 90,
                "end": 156
              },
              "expression": false,
              "start": 87,
              "end": 156
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 80,
            "end": 156
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "origin",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 174
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 186
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 187,
                  "end": 188
                },
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 189,
                  "end": 190
                }
              ],
              "start": 177,
              "end": 191
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 161,
            "end": 192
          }
        ],
        "start": 12,
        "end": 194
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 194
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point3D",
        "optional": false,
        "typeAnnotation": null,
        "start": 202,
        "end": 209
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 218,
        "end": 223
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 242
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 246,
                      "end": 252
                    },
                    "start": 244,
                    "end": 252
                  },
                  "start": 243,
                  "end": 252
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 257,
                      "end": 263
                    },
                    "start": 255,
                    "end": 263
                  },
                  "start": 254,
                  "end": 263
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 275,
                        "end": 281
                      },
                      "start": 273,
                      "end": 281
                    },
                    "start": 272,
                    "end": 281
                  },
                  "readonly": false,
                  "static": false,
                  "start": 265,
                  "end": 281
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 285,
                      "end": 291
                    },
                    "start": 284,
                    "end": 291
                  },
                  "start": 283,
                  "end": 291
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
                        "type": "Super",
                        "start": 303,
                        "end": 308
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 309,
                          "end": 310
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 312,
                          "end": 313
                        }
                      ],
                      "optional": false,
                      "start": 303,
                      "end": 314
                    },
                    "directive": null,
                    "start": 303,
                    "end": 315
                  }
                ],
                "start": 293,
                "end": 321
              },
              "expression": false,
              "start": 242,
              "end": 321
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 231,
            "end": 321
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getDist",
              "optional": false,
              "typeAnnotation": null,
              "start": 331,
              "end": 338
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 358,
                          "end": 362
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "sqrt",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 363,
                          "end": 367
                        },
                        "optional": false,
                        "computed": false,
                        "start": 358,
                        "end": 367
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 368,
                                  "end": 372
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 373,
                                  "end": 374
                                },
                                "optional": false,
                                "computed": false,
                                "start": 368,
                                "end": 374
                              },
                              "operator": "*",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 375,
                                  "end": 379
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 380,
                                  "end": 381
                                },
                                "optional": false,
                                "computed": false,
                                "start": 375,
                                "end": 381
                              },
                              "start": 368,
                              "end": 381
                            },
                            "operator": "+",
                            "right": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 384,
                                  "end": 388
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 389,
                                  "end": 390
                                },
                                "optional": false,
                                "computed": false,
                                "start": 384,
                                "end": 390
                              },
                              "operator": "*",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 391,
                                  "end": 395
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 396,
                                  "end": 397
                                },
                                "optional": false,
                                "computed": false,
                                "start": 391,
                                "end": 397
                              },
                              "start": 384,
                              "end": 397
                            },
                            "start": 368,
                            "end": 397
                          },
                          "operator": "+",
                          "right": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 400,
                                "end": 404
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 405,
                                "end": 406
                              },
                              "optional": false,
                              "computed": false,
                              "start": 400,
                              "end": 406
                            },
                            "operator": "*",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 407,
                                "end": 411
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 412,
                                "end": 413
                              },
                              "optional": false,
                              "computed": false,
                              "start": 407,
                              "end": 413
                            },
                            "start": 400,
                            "end": 413
                          },
                          "start": 368,
                          "end": 413
                        }
                      ],
                      "optional": false,
                      "start": 358,
                      "end": 414
                    },
                    "start": 351,
                    "end": 415
                  }
                ],
                "start": 341,
                "end": 421
              },
              "expression": false,
              "start": 338,
              "end": 421
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 331,
            "end": 421
          }
        ],
        "start": 224,
        "end": 431
      },
      "abstract": false,
      "declare": false,
      "start": 196,
      "end": 431
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 432
}
```
