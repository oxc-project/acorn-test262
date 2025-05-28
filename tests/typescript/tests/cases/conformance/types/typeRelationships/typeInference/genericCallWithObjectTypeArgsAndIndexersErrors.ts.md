__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 68,
  "end": 521,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 68,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 80,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 80,
        "end": 83,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 81,
            "end": 82,
            "name": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 84,
          "end": 88,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 85,
            "end": 88,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 87,
              "end": 88,
              "typeName": {
                "type": "Identifier",
                "start": 87,
                "end": 88,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 90,
        "end": 107,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 96,
            "end": 105,
            "argument": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 109,
      "end": 301,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 123,
        "decorators": [],
        "name": "other",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 123,
        "end": 126,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 124,
            "end": 125,
            "name": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 127,
          "end": 133,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 130,
            "end": 133,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 132,
              "end": 133,
              "typeName": {
                "type": "Identifier",
                "start": 132,
                "end": 133,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 135,
        "end": 301,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 141,
            "end": 273,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 145,
                "end": 272,
                "id": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 272,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 146,
                    "end": 272,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 148,
                      "end": 272,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 158,
                          "end": 178,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 159,
                              "end": 168,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 160,
                                "end": 168,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 162,
                                  "end": 168
                                }
                              }
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 169,
                            "end": 177,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 171,
                              "end": 177,
                              "typeName": {
                                "type": "Identifier",
                                "start": 171,
                                "end": 177,
                                "decorators": [],
                                "name": "Object",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null
                        },
                        {
                          "type": "TSIndexSignature",
                          "start": 187,
                          "end": 202,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 188,
                              "end": 197,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 189,
                                "end": 197,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 191,
                                  "end": 197
                                }
                              }
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 198,
                            "end": 201,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 200,
                              "end": 201,
                              "typeName": {
                                "type": "Identifier",
                                "start": 200,
                                "end": 201,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null
                        }
                      ]
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 278,
            "end": 294,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 282,
                "end": 293,
                "id": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 284,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 287,
                  "end": 293,
                  "callee": {
                    "type": "Identifier",
                    "start": 287,
                    "end": 290,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 291,
                      "end": 292,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 303,
      "end": 521,
      "id": {
        "type": "Identifier",
        "start": 312,
        "end": 318,
        "decorators": [],
        "name": "other3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 318,
        "end": 347,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 319,
            "end": 330,
            "name": {
              "type": "Identifier",
              "start": 319,
              "end": 320,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 329,
              "end": 330,
              "typeName": {
                "type": "Identifier",
                "start": 329,
                "end": 330,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 332,
            "end": 346,
            "name": {
              "type": "Identifier",
              "start": 332,
              "end": 333,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 342,
              "end": 346,
              "typeName": {
                "type": "Identifier",
                "start": 342,
                "end": 346,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 348,
          "end": 354,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 351,
            "end": 354,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 353,
              "end": 354,
              "typeName": {
                "type": "Identifier",
                "start": 353,
                "end": 354,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 356,
        "end": 521,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 362,
            "end": 430,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 366,
                "end": 429,
                "id": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 429,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 367,
                    "end": 429,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 369,
                      "end": 429,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 379,
                          "end": 399,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 380,
                              "end": 389,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 381,
                                "end": 389,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 383,
                                  "end": 389
                                }
                              }
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 390,
                            "end": 398,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 392,
                              "end": 398,
                              "typeName": {
                                "type": "Identifier",
                                "start": 392,
                                "end": 398,
                                "decorators": [],
                                "name": "Object",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null
                        },
                        {
                          "type": "TSIndexSignature",
                          "start": 408,
                          "end": 423,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 409,
                              "end": 418,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 410,
                                "end": 418,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 412,
                                  "end": 418
                                }
                              }
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 419,
                            "end": 422,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 421,
                              "end": 422,
                              "typeName": {
                                "type": "Identifier",
                                "start": 421,
                                "end": 422,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null
                        }
                      ]
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 435,
            "end": 451,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 439,
                "end": 450,
                "id": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 441,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 444,
                  "end": 450,
                  "callee": {
                    "type": "Identifier",
                    "start": 444,
                    "end": 447,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 448,
                      "end": 449,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 456,
            "end": 470,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 460,
                "end": 469,
                "id": {
                  "type": "Identifier",
                  "start": 460,
                  "end": 461,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 464,
                  "end": 469,
                  "object": {
                    "type": "Identifier",
                    "start": 464,
                    "end": 466,
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 467,
                    "end": 468,
                    "value": 1,
                    "raw": "1"
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 475,
            "end": 491,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 479,
                "end": 490,
                "id": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 480,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 483,
                  "end": 490,
                  "object": {
                    "type": "Identifier",
                    "start": 483,
                    "end": 485,
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 486,
                    "end": 489,
                    "value": "1",
                    "raw": "'1'"
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 496,
            "end": 513,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 500,
                "end": 512,
                "id": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 504,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 501,
                    "end": 504,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 503,
                      "end": 504,
                      "typeName": {
                        "type": "Identifier",
                        "start": 503,
                        "end": 504,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 507,
                  "end": 512,
                  "object": {
                    "type": "Identifier",
                    "start": 507,
                    "end": 509,
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 510,
                    "end": 511,
                    "value": 1,
                    "raw": "1"
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
