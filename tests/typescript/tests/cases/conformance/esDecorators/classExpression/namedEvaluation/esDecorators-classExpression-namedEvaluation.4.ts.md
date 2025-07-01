__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 27,
                "end": 30
              },
              "start": 25,
              "end": 30
            },
            "start": 22,
            "end": 30
          },
          "init": null,
          "definite": false,
          "start": 22,
          "end": 30
        }
      ],
      "declare": true,
      "start": 0,
      "end": 31
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 142
                    },
                    "right": {
                      "type": "ClassExpression",
                      "decorators": [
                        {
                          "type": "Decorator",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dec",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 146,
                            "end": 149
                          },
                          "start": 145,
                          "end": 149
                        }
                      ],
                      "id": null,
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 156,
                        "end": 159
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 145,
                      "end": 159
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 141,
                    "end": 159
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 160
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 166
              },
              "definite": false,
              "start": 140,
              "end": 166
            }
          ],
          "declare": false,
          "start": 134,
          "end": 167
        }
      ],
      "start": 132,
      "end": 169
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 179,
                      "end": 180
                    },
                    "right": {
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
                            "type": "PropertyDefinition",
                            "decorators": [
                              {
                                "type": "Decorator",
                                "expression": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dec",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 192,
                                  "end": 195
                                },
                                "start": 191,
                                "end": 195
                              }
                            ],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 196,
                              "end": 197
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 199,
                                "end": 202
                              },
                              "start": 197,
                              "end": 202
                            },
                            "value": null,
                            "computed": false,
                            "static": false,
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": false,
                            "readonly": false,
                            "accessibility": null,
                            "start": 191,
                            "end": 203
                          }
                        ],
                        "start": 189,
                        "end": 205
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 183,
                      "end": 205
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 179,
                    "end": 205
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 206
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 209,
                "end": 212
              },
              "definite": false,
              "start": 178,
              "end": 212
            }
          ],
          "declare": false,
          "start": 172,
          "end": 213
        }
      ],
      "start": 170,
      "end": 215
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 326,
                      "end": 327
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 326,
                        "end": 327
                      },
                      "right": {
                        "type": "ClassExpression",
                        "decorators": [
                          {
                            "type": "Decorator",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dec",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 331,
                              "end": 334
                            },
                            "start": 330,
                            "end": 334
                          }
                        ],
                        "id": null,
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 341,
                          "end": 344
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 330,
                        "end": 344
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 326,
                      "end": 344
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 326,
                    "end": 344
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 324,
                "end": 346
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 349,
                "end": 352
              },
              "definite": false,
              "start": 324,
              "end": 352
            }
          ],
          "declare": false,
          "start": 318,
          "end": 353
        }
      ],
      "start": 316,
      "end": 355
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 366,
                      "end": 367
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 366,
                        "end": 367
                      },
                      "right": {
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
                              "type": "PropertyDefinition",
                              "decorators": [
                                {
                                  "type": "Decorator",
                                  "expression": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "dec",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 379,
                                    "end": 382
                                  },
                                  "start": 378,
                                  "end": 382
                                }
                              ],
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 383,
                                "end": 384
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 386,
                                  "end": 389
                                },
                                "start": 384,
                                "end": 389
                              },
                              "value": null,
                              "computed": false,
                              "static": false,
                              "declare": false,
                              "override": false,
                              "optional": false,
                              "definite": false,
                              "readonly": false,
                              "accessibility": null,
                              "start": 378,
                              "end": 390
                            }
                          ],
                          "start": 376,
                          "end": 392
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 370,
                        "end": 392
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 366,
                      "end": 392
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 366,
                    "end": 392
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 394
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 397,
                "end": 400
              },
              "definite": false,
              "start": 364,
              "end": 400
            }
          ],
          "declare": false,
          "start": 358,
          "end": 401
        }
      ],
      "start": 356,
      "end": 403
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 415,
                      "end": 416
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 418,
                        "end": 419
                      },
                      "right": {
                        "type": "ClassExpression",
                        "decorators": [
                          {
                            "type": "Decorator",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dec",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 423,
                              "end": 426
                            },
                            "start": 422,
                            "end": 426
                          }
                        ],
                        "id": null,
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 433,
                          "end": 436
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 422,
                        "end": 436
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 418,
                      "end": 436
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 415,
                    "end": 436
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 413,
                "end": 438
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 441,
                "end": 444
              },
              "definite": false,
              "start": 413,
              "end": 444
            }
          ],
          "declare": false,
          "start": 407,
          "end": 445
        }
      ],
      "start": 405,
      "end": 447
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 458,
                      "end": 459
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 461,
                        "end": 462
                      },
                      "right": {
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
                              "type": "PropertyDefinition",
                              "decorators": [
                                {
                                  "type": "Decorator",
                                  "expression": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "dec",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 474,
                                    "end": 477
                                  },
                                  "start": 473,
                                  "end": 477
                                }
                              ],
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 478,
                                "end": 479
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 481,
                                  "end": 484
                                },
                                "start": 479,
                                "end": 484
                              },
                              "value": null,
                              "computed": false,
                              "static": false,
                              "declare": false,
                              "override": false,
                              "optional": false,
                              "definite": false,
                              "readonly": false,
                              "accessibility": null,
                              "start": 473,
                              "end": 485
                            }
                          ],
                          "start": 471,
                          "end": 487
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 465,
                        "end": 487
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 461,
                      "end": 487
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 458,
                    "end": 487
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 489
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 492,
                "end": 495
              },
              "definite": false,
              "start": 456,
              "end": 495
            }
          ],
          "declare": false,
          "start": 450,
          "end": 496
        }
      ],
      "start": 448,
      "end": 498
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 499
}
```
