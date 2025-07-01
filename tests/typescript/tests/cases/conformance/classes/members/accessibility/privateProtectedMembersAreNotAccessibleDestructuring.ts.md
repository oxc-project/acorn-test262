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
        "name": "K",
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
              "type": "Identifier",
              "decorators": [],
              "name": "priv",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 26
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
            "accessibility": "private",
            "start": 14,
            "end": 27
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prot",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 46
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
            "accessibility": "protected",
            "start": 32,
            "end": 47
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 73
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
                "body": [],
                "start": 76,
                "end": 79
              },
              "expression": false,
              "start": 73,
              "end": 79
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 52,
            "end": 79
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
              "start": 84,
              "end": 85
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
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "priv",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 104,
                                "end": 108
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 110,
                                "end": 111
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 104,
                              "end": 111
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prot",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 113,
                                "end": 117
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 119,
                                "end": 120
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 113,
                              "end": 120
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 102,
                          "end": 122
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 125,
                          "end": 129
                        },
                        "definite": false,
                        "start": 102,
                        "end": 129
                      }
                    ],
                    "declare": false,
                    "start": 98,
                    "end": 130
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "priv",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 151,
                                "end": 155
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "priv",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 151,
                                "end": 155
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 151,
                              "end": 155
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prot",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 157,
                                "end": 161
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prot",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 157,
                                "end": 161
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 157,
                              "end": 161
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 149,
                          "end": 163
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 170,
                            "end": 171
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 166,
                          "end": 173
                        },
                        "definite": false,
                        "start": 149,
                        "end": 173
                      }
                    ],
                    "declare": false,
                    "start": 145,
                    "end": 174
                  }
                ],
                "start": 88,
                "end": 186
              },
              "expression": false,
              "start": 85,
              "end": 186
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 84,
            "end": 186
          }
        ],
        "start": 8,
        "end": 188
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 188
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
        "start": 195,
        "end": 196
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 206
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
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 215
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
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "priv",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 234,
                                "end": 238
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 240,
                                "end": 241
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 234,
                              "end": 241
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 232,
                          "end": 243
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 246,
                          "end": 250
                        },
                        "definite": false,
                        "start": 232,
                        "end": 250
                      }
                    ],
                    "declare": false,
                    "start": 228,
                    "end": 251
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prot",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 275,
                                "end": 279
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 281,
                                "end": 282
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 275,
                              "end": 282
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 273,
                          "end": 284
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 287,
                          "end": 291
                        },
                        "definite": false,
                        "start": 273,
                        "end": 291
                      }
                    ],
                    "declare": false,
                    "start": 269,
                    "end": 292
                  }
                ],
                "start": 218,
                "end": 304
              },
              "expression": false,
              "start": 215,
              "end": 304
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 213,
            "end": 304
          }
        ],
        "start": 207,
        "end": 306
      },
      "abstract": false,
      "declare": false,
      "start": 189,
      "end": 306
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
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 311,
            "end": 312
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 320
            },
            "typeArguments": null,
            "arguments": [],
            "start": 315,
            "end": 322
          },
          "definite": false,
          "start": 311,
          "end": 322
        }
      ],
      "declare": false,
      "start": 307,
      "end": 323
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "priv",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 330,
                  "end": 334
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "priv",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 330,
                  "end": 334
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 330,
                "end": 334
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 328,
            "end": 336
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 339,
            "end": 340
          },
          "definite": false,
          "start": 328,
          "end": 340
        }
      ],
      "declare": false,
      "start": 324,
      "end": 341
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 357,
                  "end": 361
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 357,
                  "end": 361
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 357,
                "end": 361
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 355,
            "end": 363
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 366,
            "end": 367
          },
          "definite": false,
          "start": 355,
          "end": 367
        }
      ],
      "declare": false,
      "start": 351,
      "end": 368
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateMethod",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 384,
                  "end": 397
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateMethod",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 384,
                  "end": 397
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 384,
                "end": 397
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 399
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 402,
            "end": 403
          },
          "definite": false,
          "start": 382,
          "end": 403
        }
      ],
      "declare": false,
      "start": 378,
      "end": 404
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "priv",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 420,
                  "end": 424
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 426,
                  "end": 427
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 420,
                "end": 427
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 429,
                  "end": 433
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 435,
                  "end": 436
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 429,
                "end": 436
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateMethod",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 438,
                  "end": 451
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pm",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 455
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 438,
                "end": 455
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 418,
            "end": 457
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 460,
            "end": 461
          },
          "definite": false,
          "start": 418,
          "end": 461
        }
      ],
      "declare": false,
      "start": 414,
      "end": 462
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 481,
        "end": 482
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "priv",
                "optional": false,
                "typeAnnotation": null,
                "start": 485,
                "end": 489
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "priv",
                "optional": false,
                "typeAnnotation": null,
                "start": 485,
                "end": 489
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 485,
              "end": 489
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prot",
                "optional": false,
                "typeAnnotation": null,
                "start": 491,
                "end": 495
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "prot",
                "optional": false,
                "typeAnnotation": null,
                "start": 491,
                "end": 495
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 491,
              "end": 495
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 497,
                "end": 510
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 497,
                "end": 510
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 497,
              "end": 510
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 515
              },
              "typeArguments": null,
              "start": 514,
              "end": 515
            },
            "start": 512,
            "end": 515
          },
          "start": 483,
          "end": 515
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 517,
        "end": 521
      },
      "expression": false,
      "start": 472,
      "end": 521
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 521
}
```
