__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 499,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 30,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 30,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 30,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 27,
                "end": 30
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "BlockStatement",
      "start": 132,
      "end": 169,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 134,
          "end": 167,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 140,
              "end": 166,
              "id": {
                "type": "ArrayPattern",
                "start": 140,
                "end": 160,
                "decorators": [],
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "start": 141,
                    "end": 159,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 142,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ClassExpression",
                      "start": 145,
                      "end": 159,
                      "decorators": [
                        {
                          "type": "Decorator",
                          "start": 145,
                          "end": 149,
                          "expression": {
                            "type": "Identifier",
                            "start": 146,
                            "end": 149,
                            "decorators": [],
                            "name": "dec",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "id": null,
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 156,
                        "end": 159,
                        "body": []
                      },
                      "abstract": false,
                      "declare": false
                    },
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 163,
                "end": 166,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 170,
      "end": 215,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 172,
          "end": 213,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 178,
              "end": 212,
              "id": {
                "type": "ArrayPattern",
                "start": 178,
                "end": 206,
                "decorators": [],
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "start": 179,
                    "end": 205,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 180,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ClassExpression",
                      "start": 183,
                      "end": 205,
                      "decorators": [],
                      "id": null,
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 189,
                        "end": 205,
                        "body": [
                          {
                            "type": "PropertyDefinition",
                            "start": 191,
                            "end": 203,
                            "decorators": [
                              {
                                "type": "Decorator",
                                "start": 191,
                                "end": 195,
                                "expression": {
                                  "type": "Identifier",
                                  "start": 192,
                                  "end": 195,
                                  "decorators": [],
                                  "name": "dec",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ],
                            "key": {
                              "type": "Identifier",
                              "start": 196,
                              "end": 197,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 197,
                              "end": 202,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 199,
                                "end": 202
                              }
                            },
                            "value": null,
                            "computed": false,
                            "static": false,
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": false,
                            "readonly": false,
                            "accessibility": null
                          }
                        ]
                      },
                      "abstract": false,
                      "declare": false
                    },
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 209,
                "end": 212,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 316,
      "end": 355,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 318,
          "end": 353,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 324,
              "end": 352,
              "id": {
                "type": "ObjectPattern",
                "start": 324,
                "end": 346,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 326,
                    "end": 344,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 326,
                      "end": 327,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 326,
                      "end": 344,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 326,
                        "end": 327,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ClassExpression",
                        "start": 330,
                        "end": 344,
                        "decorators": [
                          {
                            "type": "Decorator",
                            "start": 330,
                            "end": 334,
                            "expression": {
                              "type": "Identifier",
                              "start": 331,
                              "end": 334,
                              "decorators": [],
                              "name": "dec",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "id": null,
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "start": 341,
                          "end": 344,
                          "body": []
                        },
                        "abstract": false,
                        "declare": false
                      },
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 349,
                "end": 352,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 356,
      "end": 403,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 358,
          "end": 401,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 364,
              "end": 400,
              "id": {
                "type": "ObjectPattern",
                "start": 364,
                "end": 394,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 366,
                    "end": 392,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 366,
                      "end": 367,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 366,
                      "end": 392,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 366,
                        "end": 367,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ClassExpression",
                        "start": 370,
                        "end": 392,
                        "decorators": [],
                        "id": null,
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "start": 376,
                          "end": 392,
                          "body": [
                            {
                              "type": "PropertyDefinition",
                              "start": 378,
                              "end": 390,
                              "decorators": [
                                {
                                  "type": "Decorator",
                                  "start": 378,
                                  "end": 382,
                                  "expression": {
                                    "type": "Identifier",
                                    "start": 379,
                                    "end": 382,
                                    "decorators": [],
                                    "name": "dec",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ],
                              "key": {
                                "type": "Identifier",
                                "start": 383,
                                "end": 384,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 384,
                                "end": 389,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 386,
                                  "end": 389
                                }
                              },
                              "value": null,
                              "computed": false,
                              "static": false,
                              "declare": false,
                              "override": false,
                              "optional": false,
                              "definite": false,
                              "readonly": false,
                              "accessibility": null
                            }
                          ]
                        },
                        "abstract": false,
                        "declare": false
                      },
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 397,
                "end": 400,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 405,
      "end": 447,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 407,
          "end": 445,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 413,
              "end": 444,
              "id": {
                "type": "ObjectPattern",
                "start": 413,
                "end": 438,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 415,
                    "end": 436,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 415,
                      "end": 416,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 418,
                      "end": 436,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 418,
                        "end": 419,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ClassExpression",
                        "start": 422,
                        "end": 436,
                        "decorators": [
                          {
                            "type": "Decorator",
                            "start": 422,
                            "end": 426,
                            "expression": {
                              "type": "Identifier",
                              "start": 423,
                              "end": 426,
                              "decorators": [],
                              "name": "dec",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "id": null,
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "start": 433,
                          "end": 436,
                          "body": []
                        },
                        "abstract": false,
                        "declare": false
                      },
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 441,
                "end": 444,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 448,
      "end": 498,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 450,
          "end": 496,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 456,
              "end": 495,
              "id": {
                "type": "ObjectPattern",
                "start": 456,
                "end": 489,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 458,
                    "end": 487,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 458,
                      "end": 459,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 461,
                      "end": 487,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 461,
                        "end": 462,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ClassExpression",
                        "start": 465,
                        "end": 487,
                        "decorators": [],
                        "id": null,
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "start": 471,
                          "end": 487,
                          "body": [
                            {
                              "type": "PropertyDefinition",
                              "start": 473,
                              "end": 485,
                              "decorators": [
                                {
                                  "type": "Decorator",
                                  "start": 473,
                                  "end": 477,
                                  "expression": {
                                    "type": "Identifier",
                                    "start": 474,
                                    "end": 477,
                                    "decorators": [],
                                    "name": "dec",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ],
                              "key": {
                                "type": "Identifier",
                                "start": 478,
                                "end": 479,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 479,
                                "end": 484,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 481,
                                  "end": 484
                                }
                              },
                              "value": null,
                              "computed": false,
                              "static": false,
                              "declare": false,
                              "override": false,
                              "optional": false,
                              "definite": false,
                              "readonly": false,
                              "accessibility": null
                            }
                          ]
                        },
                        "abstract": false,
                        "declare": false
                      },
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 492,
                "end": 495,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
