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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 64
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
              "name": "privateField",
              "start": 78,
              "end": 91
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 93,
                "end": 99
              },
              "start": 91,
              "end": 99
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 69,
            "end": 100
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
              "start": 104,
              "end": 115
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
                  "name": "arg",
                  "optional": false,
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
                            "start": 123,
                            "end": 126
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 128,
                              "end": 134
                            },
                            "start": 126,
                            "end": 134
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 123,
                          "end": 134
                        }
                      ],
                      "start": 121,
                      "end": 136
                    },
                    "start": 119,
                    "end": 136
                  },
                  "start": 116,
                  "end": 136
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "exposedField",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 159,
                        "end": 165
                      },
                      "start": 157,
                      "end": 165
                    },
                    "start": 145,
                    "end": 165
                  },
                  "readonly": false,
                  "static": false,
                  "start": 138,
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 176,
                              "end": 179
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 181,
                                "end": 185
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "privateField",
                                "start": 186,
                                "end": 199
                              },
                              "optional": false,
                              "computed": false,
                              "start": 181,
                              "end": 199
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 176,
                            "end": 199
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 174,
                        "end": 201
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 204,
                        "end": 207
                      },
                      "start": 174,
                      "end": 207
                    },
                    "directive": null,
                    "start": 173,
                    "end": 209
                  }
                ],
                "start": 167,
                "end": 213
              },
              "expression": false,
              "start": 115,
              "end": 213
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 104,
            "end": 213
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 220
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
                          "start": 229,
                          "end": 236
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 237,
                          "end": 240
                        },
                        "optional": false,
                        "computed": false,
                        "start": 229,
                        "end": 240
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 241,
                            "end": 245
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "privateField",
                            "start": 246,
                            "end": 259
                          },
                          "optional": false,
                          "computed": false,
                          "start": 241,
                          "end": 259
                        }
                      ],
                      "optional": false,
                      "start": 229,
                      "end": 260
                    },
                    "directive": null,
                    "start": 229,
                    "end": 261
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
                          "start": 266,
                          "end": 273
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 274,
                          "end": 277
                        },
                        "optional": false,
                        "computed": false,
                        "start": 266,
                        "end": 277
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 278,
                            "end": 282
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "exposedField",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 283,
                            "end": 295
                          },
                          "optional": false,
                          "computed": false,
                          "start": 278,
                          "end": 295
                        }
                      ],
                      "optional": false,
                      "start": 266,
                      "end": 296
                    },
                    "directive": null,
                    "start": 266,
                    "end": 297
                  }
                ],
                "start": 223,
                "end": 301
              },
              "expression": false,
              "start": 220,
              "end": 301
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 217,
            "end": 301
          }
        ],
        "start": 65,
        "end": 303
      },
      "abstract": false,
      "declare": false,
      "start": 57,
      "end": 303
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 312
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
              "name": "privateField",
              "start": 326,
              "end": 339
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 341,
                "end": 347
              },
              "start": 339,
              "end": 347
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 317,
            "end": 348
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
              "start": 352,
              "end": 363
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
                  "name": "arg",
                  "optional": false,
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
                            "start": 371,
                            "end": 374
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 376,
                              "end": 382
                            },
                            "start": 374,
                            "end": 382
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 371,
                          "end": 382
                        }
                      ],
                      "start": 369,
                      "end": 384
                    },
                    "start": 367,
                    "end": 384
                  },
                  "start": 364,
                  "end": 384
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "exposedField",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 407,
                        "end": 413
                      },
                      "start": 405,
                      "end": 413
                    },
                    "start": 393,
                    "end": 413
                  },
                  "readonly": false,
                  "static": false,
                  "start": 386,
                  "end": 413
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Literal",
                      "value": "prologue",
                      "raw": "\"prologue\"",
                      "start": 421,
                      "end": 431
                    },
                    "directive": "prologue",
                    "start": 421,
                    "end": 432
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 440,
                              "end": 443
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 445,
                                "end": 449
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "privateField",
                                "start": 450,
                                "end": 463
                              },
                              "optional": false,
                              "computed": false,
                              "start": 445,
                              "end": 463
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 440,
                            "end": 463
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 438,
                        "end": 465
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 468,
                        "end": 471
                      },
                      "start": 438,
                      "end": 471
                    },
                    "directive": null,
                    "start": 437,
                    "end": 473
                  }
                ],
                "start": 415,
                "end": 477
              },
              "expression": false,
              "start": 363,
              "end": 477
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 352,
            "end": 477
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null,
              "start": 481,
              "end": 484
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
                          "start": 493,
                          "end": 500
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 501,
                          "end": 504
                        },
                        "optional": false,
                        "computed": false,
                        "start": 493,
                        "end": 504
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 505,
                            "end": 509
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "privateField",
                            "start": 510,
                            "end": 523
                          },
                          "optional": false,
                          "computed": false,
                          "start": 505,
                          "end": 523
                        }
                      ],
                      "optional": false,
                      "start": 493,
                      "end": 524
                    },
                    "directive": null,
                    "start": 493,
                    "end": 525
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
                          "start": 530,
                          "end": 537
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 538,
                          "end": 541
                        },
                        "optional": false,
                        "computed": false,
                        "start": 530,
                        "end": 541
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 542,
                            "end": 546
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "exposedField",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 547,
                            "end": 559
                          },
                          "optional": false,
                          "computed": false,
                          "start": 542,
                          "end": 559
                        }
                      ],
                      "optional": false,
                      "start": 530,
                      "end": 560
                    },
                    "directive": null,
                    "start": 530,
                    "end": 561
                  }
                ],
                "start": 487,
                "end": 565
              },
              "expression": false,
              "start": 484,
              "end": 565
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 481,
            "end": 565
          }
        ],
        "start": 313,
        "end": 567
      },
      "abstract": false,
      "declare": false,
      "start": 305,
      "end": 567
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 567
}
```
