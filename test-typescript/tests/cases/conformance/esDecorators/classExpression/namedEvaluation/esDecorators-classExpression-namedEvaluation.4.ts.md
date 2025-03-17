__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 500,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            },
            "decorators": [],
            "optional": false
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
            "name": "obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 30,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 27,
                "end": 30
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
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
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 140,
              "end": 166,
              "id": {
                "type": "ArrayPattern",
                "start": 140,
                "end": 160,
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "start": 141,
                    "end": 159,
                    "left": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 142,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "ClassExpression",
                      "start": 145,
                      "end": 159,
                      "id": null,
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 156,
                        "end": 159,
                        "body": []
                      },
                      "decorators": [
                        {
                          "type": "Decorator",
                          "start": 145,
                          "end": 149,
                          "expression": {
                            "type": "Identifier",
                            "start": 146,
                            "end": 149,
                            "name": "dec",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ],
                      "typeParameters": null,
                      "implements": [],
                      "abstract": false,
                      "declare": false,
                      "superTypeArguments": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 163,
                "end": 166,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "kind": "const",
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
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 178,
              "end": 212,
              "id": {
                "type": "ArrayPattern",
                "start": 178,
                "end": 206,
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "start": 179,
                    "end": 205,
                    "left": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 180,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "ClassExpression",
                      "start": 183,
                      "end": 205,
                      "id": null,
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 189,
                        "end": 205,
                        "body": [
                          {
                            "type": "PropertyDefinition",
                            "start": 191,
                            "end": 203,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 196,
                              "end": 197,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": null,
                            "decorators": [
                              {
                                "type": "Decorator",
                                "start": 191,
                                "end": 195,
                                "expression": {
                                  "type": "Identifier",
                                  "start": 192,
                                  "end": 195,
                                  "name": "dec",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              }
                            ],
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": false,
                            "readonly": false,
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
                            "accessibility": null
                          }
                        ]
                      },
                      "decorators": [],
                      "typeParameters": null,
                      "implements": [],
                      "abstract": false,
                      "declare": false,
                      "superTypeArguments": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 209,
                "end": 212,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "kind": "const",
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
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 324,
              "end": 352,
              "id": {
                "type": "ObjectPattern",
                "start": 324,
                "end": 346,
                "properties": [
                  {
                    "type": "Property",
                    "start": 326,
                    "end": 344,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 326,
                      "end": 327,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 326,
                      "end": 344,
                      "left": {
                        "type": "Identifier",
                        "start": 326,
                        "end": 327,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "ClassExpression",
                        "start": 330,
                        "end": 344,
                        "id": null,
                        "superClass": null,
                        "body": {
                          "type": "ClassBody",
                          "start": 341,
                          "end": 344,
                          "body": []
                        },
                        "decorators": [
                          {
                            "type": "Decorator",
                            "start": 330,
                            "end": 334,
                            "expression": {
                              "type": "Identifier",
                              "start": 331,
                              "end": 334,
                              "name": "dec",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        ],
                        "typeParameters": null,
                        "implements": [],
                        "abstract": false,
                        "declare": false,
                        "superTypeArguments": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 349,
                "end": 352,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "kind": "const",
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
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 364,
              "end": 400,
              "id": {
                "type": "ObjectPattern",
                "start": 364,
                "end": 394,
                "properties": [
                  {
                    "type": "Property",
                    "start": 366,
                    "end": 392,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 366,
                      "end": 367,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 366,
                      "end": 392,
                      "left": {
                        "type": "Identifier",
                        "start": 366,
                        "end": 367,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "ClassExpression",
                        "start": 370,
                        "end": 392,
                        "id": null,
                        "superClass": null,
                        "body": {
                          "type": "ClassBody",
                          "start": 376,
                          "end": 392,
                          "body": [
                            {
                              "type": "PropertyDefinition",
                              "start": 378,
                              "end": 390,
                              "static": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 383,
                                "end": 384,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": null,
                              "decorators": [
                                {
                                  "type": "Decorator",
                                  "start": 378,
                                  "end": 382,
                                  "expression": {
                                    "type": "Identifier",
                                    "start": 379,
                                    "end": 382,
                                    "name": "dec",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                }
                              ],
                              "declare": false,
                              "override": false,
                              "optional": false,
                              "definite": false,
                              "readonly": false,
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
                              "accessibility": null
                            }
                          ]
                        },
                        "decorators": [],
                        "typeParameters": null,
                        "implements": [],
                        "abstract": false,
                        "declare": false,
                        "superTypeArguments": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 397,
                "end": 400,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "kind": "const",
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
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 413,
              "end": 444,
              "id": {
                "type": "ObjectPattern",
                "start": 413,
                "end": 438,
                "properties": [
                  {
                    "type": "Property",
                    "start": 415,
                    "end": 436,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 415,
                      "end": 416,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 418,
                      "end": 436,
                      "left": {
                        "type": "Identifier",
                        "start": 418,
                        "end": 419,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "ClassExpression",
                        "start": 422,
                        "end": 436,
                        "id": null,
                        "superClass": null,
                        "body": {
                          "type": "ClassBody",
                          "start": 433,
                          "end": 436,
                          "body": []
                        },
                        "decorators": [
                          {
                            "type": "Decorator",
                            "start": 422,
                            "end": 426,
                            "expression": {
                              "type": "Identifier",
                              "start": 423,
                              "end": 426,
                              "name": "dec",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        ],
                        "typeParameters": null,
                        "implements": [],
                        "abstract": false,
                        "declare": false,
                        "superTypeArguments": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 441,
                "end": 444,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "kind": "const",
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
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 456,
              "end": 495,
              "id": {
                "type": "ObjectPattern",
                "start": 456,
                "end": 489,
                "properties": [
                  {
                    "type": "Property",
                    "start": 458,
                    "end": 487,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 458,
                      "end": 459,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 461,
                      "end": 487,
                      "left": {
                        "type": "Identifier",
                        "start": 461,
                        "end": 462,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "ClassExpression",
                        "start": 465,
                        "end": 487,
                        "id": null,
                        "superClass": null,
                        "body": {
                          "type": "ClassBody",
                          "start": 471,
                          "end": 487,
                          "body": [
                            {
                              "type": "PropertyDefinition",
                              "start": 473,
                              "end": 485,
                              "static": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 478,
                                "end": 479,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": null,
                              "decorators": [
                                {
                                  "type": "Decorator",
                                  "start": 473,
                                  "end": 477,
                                  "expression": {
                                    "type": "Identifier",
                                    "start": 474,
                                    "end": 477,
                                    "name": "dec",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                }
                              ],
                              "declare": false,
                              "override": false,
                              "optional": false,
                              "definite": false,
                              "readonly": false,
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
                              "accessibility": null
                            }
                          ]
                        },
                        "decorators": [],
                        "typeParameters": null,
                        "implements": [],
                        "abstract": false,
                        "declare": false,
                        "superTypeArguments": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 492,
                "end": 495,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
