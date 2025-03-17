__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 525,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 11,
        "end": 26,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 13,
            "end": 24,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 24,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 18,
                "end": 24
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 59,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 42,
            "name": "boo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 42,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 39,
                "end": 42,
                "typeName": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 42,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 45,
            "end": 59,
            "properties": [
              {
                "type": "Property",
                "start": 47,
                "end": 57,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 50,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 52,
                  "end": 57,
                  "value": "bar",
                  "raw": "'bar'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 62,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 73,
          "end": 84,
          "name": "aboo1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 79,
            "end": 84,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 81,
              "end": 84,
              "typeName": {
                "type": "Identifier",
                "start": 81,
                "end": 84,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 86,
        "end": 173,
        "body": [
          {
            "type": "IfStatement",
            "start": 92,
            "end": 111,
            "test": {
              "type": "UnaryExpression",
              "start": 96,
              "end": 102,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 97,
                "end": 102,
                "name": "aboo1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 104,
              "end": 111,
              "argument": null
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 116,
            "end": 171,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 122,
                "end": 170,
                "id": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 164,
                  "name": "aboo2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 127,
                    "end": 164,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 129,
                      "end": 164,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 131,
                          "end": 162,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 132,
                              "end": 143,
                              "name": "key",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 135,
                                "end": 143,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 137,
                                  "end": 143
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 144,
                            "end": 162,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 146,
                              "end": 162,
                              "exprName": {
                                "type": "TSQualifiedName",
                                "start": 153,
                                "end": 162,
                                "left": {
                                  "type": "Identifier",
                                  "start": 153,
                                  "end": 158,
                                  "name": "aboo1",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 159,
                                  "end": 162,
                                  "name": "bar",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 170,
                  "name": "boo",
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 187,
          "end": 205,
          "id": {
            "type": "Identifier",
            "start": 187,
            "end": 205,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 188,
              "end": 205,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 190,
                "end": 205,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 190,
                    "end": 193,
                    "typeName": {
                      "type": "Identifier",
                      "start": 190,
                      "end": 193,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 196,
                    "end": 205
                  }
                ]
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
      "type": "IfStatement",
      "start": 207,
      "end": 272,
      "test": {
        "type": "Identifier",
        "start": 211,
        "end": 212,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 214,
        "end": 272,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 220,
            "end": 270,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 226,
                "end": 269,
                "id": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 263,
                  "name": "bboo",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 230,
                    "end": 263,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 232,
                      "end": 263,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 234,
                          "end": 261,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 235,
                              "end": 246,
                              "name": "key",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 238,
                                "end": 246,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 240,
                                  "end": 246
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 247,
                            "end": 261,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 249,
                              "end": 261,
                              "exprName": {
                                "type": "TSQualifiedName",
                                "start": 256,
                                "end": 261,
                                "left": {
                                  "type": "Identifier",
                                  "start": 256,
                                  "end": 257,
                                  "name": "b",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 258,
                                  "end": 261,
                                  "name": "bar",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 269,
                  "name": "boo",
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
      "alternate": null
    },
    {
      "type": "ExpressionStatement",
      "start": 273,
      "end": 281,
      "expression": {
        "type": "AssignmentExpression",
        "start": 273,
        "end": 280,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 273,
          "end": 274,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 277,
          "end": 280,
          "name": "boo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 282,
      "end": 332,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 288,
          "end": 331,
          "id": {
            "type": "Identifier",
            "start": 288,
            "end": 325,
            "name": "bboo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 325,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 294,
                "end": 325,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 296,
                    "end": 323,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 297,
                        "end": 308,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 300,
                          "end": 308,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 302,
                            "end": 308
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 309,
                      "end": 323,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 311,
                        "end": 323,
                        "exprName": {
                          "type": "TSQualifiedName",
                          "start": 318,
                          "end": 323,
                          "left": {
                            "type": "Identifier",
                            "start": 318,
                            "end": 319,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 320,
                            "end": 323,
                            "name": "bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 328,
            "end": 331,
            "name": "boo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 334,
      "end": 365,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 346,
          "end": 364,
          "id": {
            "type": "Identifier",
            "start": 346,
            "end": 364,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 347,
              "end": 364,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 349,
                "end": 364,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 349,
                    "end": 355
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 358,
                    "end": 364
                  }
                ]
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
      "type": "IfStatement",
      "start": 366,
      "end": 524,
      "test": {
        "type": "BinaryExpression",
        "start": 370,
        "end": 391,
        "left": {
          "type": "UnaryExpression",
          "start": 370,
          "end": 378,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 377,
            "end": 378,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 383,
          "end": 391,
          "value": "string",
          "raw": "'string'"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 393,
        "end": 524,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 399,
            "end": 436,
            "id": {
              "type": "Identifier",
              "start": 404,
              "end": 405,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 408,
              "end": 435,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 410,
                  "end": 433,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 411,
                      "end": 422,
                      "name": "key",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 414,
                        "end": 422,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 416,
                          "end": 422
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 423,
                    "end": 433,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 425,
                      "end": 433,
                      "exprName": {
                        "type": "Identifier",
                        "start": 432,
                        "end": 433,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 441,
            "end": 474,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 447,
                "end": 473,
                "id": {
                  "type": "Identifier",
                  "start": 447,
                  "end": 454,
                  "name": "boo1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 451,
                    "end": 454,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 453,
                      "end": 454,
                      "typeName": {
                        "type": "Identifier",
                        "start": 453,
                        "end": 454,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 457,
                  "end": 473,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 459,
                      "end": 471,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 459,
                        "end": 462,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 464,
                        "end": 471,
                        "value": "works",
                        "raw": "'works'"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 479,
            "end": 506,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 485,
                "end": 505,
                "id": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 492,
                  "name": "boo2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 489,
                    "end": 492,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 491,
                      "end": 492,
                      "typeName": {
                        "type": "Identifier",
                        "start": 491,
                        "end": 492,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 495,
                  "end": 505,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 497,
                      "end": 503,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 497,
                        "end": 500,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 502,
                        "end": 503,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
