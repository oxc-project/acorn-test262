__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ft1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 23,
              "end": 29
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 29
          }
        ],
        "start": 12,
        "end": 30
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 34,
              "end": 40
            },
            "start": 32,
            "end": 40
          },
          "start": 31,
          "end": 40
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 45,
              "end": 51
            },
            "start": 43,
            "end": 51
          },
          "start": 42,
          "end": 51
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 56,
                    "end": 61
                  },
                  "start": 56,
                  "end": 61
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 64,
                    "end": 69
                  },
                  "start": 64,
                  "end": 69
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "baz",
                    "raw": "'baz'",
                    "start": 72,
                    "end": 77
                  },
                  "start": 72,
                  "end": 77
                }
              ],
              "start": 56,
              "end": 77
            },
            "start": 54,
            "end": 77
          },
          "start": 53,
          "end": 77
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 83
              },
              "typeArguments": null,
              "start": 82,
              "end": 83
            },
            "start": 80,
            "end": 83
          },
          "start": 79,
          "end": 83
        }
      ],
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
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 99
                },
                "init": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "abc",
                        "cooked": "abc"
                      },
                      "tail": false,
                      "start": 102,
                      "end": 108
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 109,
                      "end": 111
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 108,
                      "end": 109
                    }
                  ],
                  "start": 102,
                  "end": 111
                },
                "definite": false,
                "start": 97,
                "end": 111
              }
            ],
            "declare": false,
            "start": 91,
            "end": 112
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 125
                },
                "init": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "abc",
                        "cooked": "abc"
                      },
                      "tail": false,
                      "start": 128,
                      "end": 134
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 135,
                      "end": 137
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 134,
                      "end": 135
                    }
                  ],
                  "start": 128,
                  "end": 137
                },
                "definite": false,
                "start": 123,
                "end": 137
              }
            ],
            "declare": false,
            "start": 117,
            "end": 138
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 149,
                  "end": 151
                },
                "init": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "abc",
                        "cooked": "abc"
                      },
                      "tail": false,
                      "start": 154,
                      "end": 160
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 161,
                      "end": 163
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 160,
                      "end": 161
                    }
                  ],
                  "start": 154,
                  "end": 163
                },
                "definite": false,
                "start": 149,
                "end": 163
              }
            ],
            "declare": false,
            "start": 143,
            "end": 164
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 175,
                  "end": 177
                },
                "init": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "abc",
                        "cooked": "abc"
                      },
                      "tail": false,
                      "start": 180,
                      "end": 186
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 187,
                      "end": 189
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 186,
                      "end": 187
                    }
                  ],
                  "start": 180,
                  "end": 189
                },
                "definite": false,
                "start": 175,
                "end": 189
              }
            ],
            "declare": false,
            "start": 169,
            "end": 190
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "abc",
                            "cooked": "abc"
                          },
                          "tail": false,
                          "start": 205,
                          "end": 211
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 217,
                          "end": 219
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 211,
                          "end": 217
                        }
                      ],
                      "start": 205,
                      "end": 219
                    },
                    "start": 203,
                    "end": 219
                  },
                  "start": 201,
                  "end": 219
                },
                "init": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "abc",
                        "cooked": "abc"
                      },
                      "tail": false,
                      "start": 222,
                      "end": 228
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 229,
                      "end": 231
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 228,
                      "end": 229
                    }
                  ],
                  "start": 222,
                  "end": 231
                },
                "definite": false,
                "start": 201,
                "end": 231
              }
            ],
            "declare": false,
            "start": 195,
            "end": 232
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "abc",
                            "cooked": "abc"
                          },
                          "tail": false,
                          "start": 247,
                          "end": 253
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 259,
                          "end": 261
                        }
                      ],
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 253,
                          "end": 259
                        }
                      ],
                      "start": 247,
                      "end": 261
                    },
                    "start": 245,
                    "end": 261
                  },
                  "start": 243,
                  "end": 261
                },
                "init": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "abc",
                        "cooked": "abc"
                      },
                      "tail": false,
                      "start": 264,
                      "end": 270
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 271,
                      "end": 273
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 270,
                      "end": 271
                    }
                  ],
                  "start": 264,
                  "end": 273
                },
                "definite": false,
                "start": 243,
                "end": 273
              }
            ],
            "declare": false,
            "start": 237,
            "end": 274
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "abc",
                            "cooked": "abc"
                          },
                          "tail": false,
                          "start": 289,
                          "end": 295
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 316,
                          "end": 318
                        }
                      ],
                      "types": [
                        {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "foo",
                                "raw": "'foo'",
                                "start": 295,
                                "end": 300
                              },
                              "start": 295,
                              "end": 300
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "bar",
                                "raw": "'bar'",
                                "start": 303,
                                "end": 308
                              },
                              "start": 303,
                              "end": 308
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "baz",
                                "raw": "'baz'",
                                "start": 311,
                                "end": 316
                              },
                              "start": 311,
                              "end": 316
                            }
                          ],
                          "start": 295,
                          "end": 316
                        }
                      ],
                      "start": 289,
                      "end": 318
                    },
                    "start": 287,
                    "end": 318
                  },
                  "start": 285,
                  "end": 318
                },
                "init": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "abc",
                        "cooked": "abc"
                      },
                      "tail": false,
                      "start": 321,
                      "end": 327
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 328,
                      "end": 330
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 327,
                      "end": 328
                    }
                  ],
                  "start": 321,
                  "end": 330
                },
                "definite": false,
                "start": 285,
                "end": 330
              }
            ],
            "declare": false,
            "start": 279,
            "end": 331
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "abc",
                            "cooked": "abc"
                          },
                          "tail": false,
                          "start": 346,
                          "end": 352
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 353,
                          "end": 355
                        }
                      ],
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 352,
                            "end": 353
                          },
                          "typeArguments": null,
                          "start": 352,
                          "end": 353
                        }
                      ],
                      "start": 346,
                      "end": 355
                    },
                    "start": 344,
                    "end": 355
                  },
                  "start": 342,
                  "end": 355
                },
                "init": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "abc",
                        "cooked": "abc"
                      },
                      "tail": false,
                      "start": 358,
                      "end": 364
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 365,
                      "end": 367
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 364,
                      "end": 365
                    }
                  ],
                  "start": 358,
                  "end": 367
                },
                "definite": false,
                "start": 342,
                "end": 367
              }
            ],
            "declare": false,
            "start": 336,
            "end": 368
          }
        ],
        "start": 85,
        "end": 370
      },
      "expression": false,
      "start": 0,
      "end": 370
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ft2",
        "optional": false,
        "typeAnnotation": null,
        "start": 381,
        "end": 384
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 388,
              "end": 394
            },
            "start": 386,
            "end": 394
          },
          "start": 385,
          "end": 394
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "abc",
                    "cooked": "abc"
                  },
                  "tail": false,
                  "start": 409,
                  "end": 415
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 416,
                  "end": 418
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 415,
                  "end": 416
                }
              ],
              "start": 409,
              "end": 418
            },
            "start": 402,
            "end": 419
          }
        ],
        "start": 396,
        "end": 421
      },
      "expression": false,
      "start": 372,
      "end": 421
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ft10",
        "optional": false,
        "typeAnnotation": null,
        "start": 432,
        "end": 436
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 440,
              "end": 446
            },
            "start": 438,
            "end": 446
          },
          "start": 437,
          "end": 446
        }
      ],
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
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 460,
                  "end": 462
                },
                "init": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "abc",
                        "cooked": "abc"
                      },
                      "tail": false,
                      "start": 465,
                      "end": 471
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 472,
                      "end": 474
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 471,
                      "end": 472
                    }
                  ],
                  "start": 465,
                  "end": 474
                },
                "definite": false,
                "start": 460,
                "end": 474
              }
            ],
            "declare": false,
            "start": 454,
            "end": 475
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 500,
                  "end": 502
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 505,
                  "end": 507
                },
                "definite": false,
                "start": 500,
                "end": 507
              }
            ],
            "declare": false,
            "start": 496,
            "end": 508
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 537
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 540,
                  "end": 542
                },
                "definite": false,
                "start": 535,
                "end": 542
              }
            ],
            "declare": false,
            "start": 529,
            "end": 543
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 568,
                  "end": 570
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 573,
                  "end": 575
                },
                "definite": false,
                "start": 568,
                "end": 575
              }
            ],
            "declare": false,
            "start": 564,
            "end": 576
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "abc",
                            "cooked": "abc"
                          },
                          "tail": false,
                          "start": 607,
                          "end": 613
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 619,
                          "end": 621
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 613,
                          "end": 619
                        }
                      ],
                      "start": 607,
                      "end": 621
                    },
                    "start": 605,
                    "end": 621
                  },
                  "start": 603,
                  "end": 621
                },
                "init": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "abc",
                        "cooked": "abc"
                      },
                      "tail": false,
                      "start": 624,
                      "end": 630
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 631,
                      "end": 633
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 630,
                      "end": 631
                    }
                  ],
                  "start": 624,
                  "end": 633
                },
                "definite": false,
                "start": 603,
                "end": 633
              }
            ],
            "declare": false,
            "start": 597,
            "end": 634
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
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 643,
                  "end": 645
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 648,
                  "end": 650
                },
                "definite": false,
                "start": 643,
                "end": 650
              }
            ],
            "declare": false,
            "start": 639,
            "end": 651
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "abc",
                            "cooked": "abc"
                          },
                          "tail": false,
                          "start": 690,
                          "end": 696
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 702,
                          "end": 704
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 696,
                          "end": 702
                        }
                      ],
                      "start": 690,
                      "end": 704
                    },
                    "start": 688,
                    "end": 704
                  },
                  "start": 686,
                  "end": 704
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 707,
                  "end": 709
                },
                "definite": false,
                "start": 686,
                "end": 709
              }
            ],
            "declare": false,
            "start": 680,
            "end": 710
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
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 743,
                  "end": 745
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 748,
                  "end": 750
                },
                "definite": false,
                "start": 743,
                "end": 750
              }
            ],
            "declare": false,
            "start": 739,
            "end": 751
          }
        ],
        "start": 448,
        "end": 777
      },
      "expression": false,
      "start": 423,
      "end": 777
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ft11",
        "optional": false,
        "typeAnnotation": null,
        "start": 788,
        "end": 792
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 796,
              "end": 802
            },
            "start": 794,
            "end": 802
          },
          "start": 793,
          "end": 802
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 810,
              "end": 817
            },
            "start": 808,
            "end": 817
          },
          "start": 804,
          "end": 817
        }
      ],
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
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 831,
                  "end": 833
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 836,
                    "end": 840
                  },
                  "consequent": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "foo",
                          "cooked": "foo"
                        },
                        "tail": false,
                        "start": 843,
                        "end": 849
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 850,
                        "end": 852
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 849,
                        "end": 850
                      }
                    ],
                    "start": 843,
                    "end": 852
                  },
                  "alternate": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "bar",
                          "cooked": "bar"
                        },
                        "tail": false,
                        "start": 855,
                        "end": 861
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 862,
                        "end": 864
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 861,
                        "end": 862
                      }
                    ],
                    "start": 855,
                    "end": 864
                  },
                  "start": 836,
                  "end": 864
                },
                "definite": false,
                "start": 831,
                "end": 864
              }
            ],
            "declare": false,
            "start": 825,
            "end": 865
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTemplateLiteralType",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "foo",
                                "cooked": "foo"
                              },
                              "tail": false,
                              "start": 891,
                              "end": 897
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true,
                              "start": 903,
                              "end": 905
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 897,
                              "end": 903
                            }
                          ],
                          "start": 891,
                          "end": 905
                        },
                        {
                          "type": "TSTemplateLiteralType",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "bar",
                                "cooked": "bar"
                              },
                              "tail": false,
                              "start": 908,
                              "end": 914
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true,
                              "start": 920,
                              "end": 922
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 914,
                              "end": 920
                            }
                          ],
                          "start": 908,
                          "end": 922
                        }
                      ],
                      "start": 891,
                      "end": 922
                    },
                    "start": 889,
                    "end": 922
                  },
                  "start": 887,
                  "end": 922
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 925,
                  "end": 927
                },
                "definite": false,
                "start": 887,
                "end": 927
              }
            ],
            "declare": false,
            "start": 881,
            "end": 928
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 975,
                  "end": 977
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 980,
                    "end": 984
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 987,
                    "end": 989
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 992,
                    "end": 994
                  },
                  "start": 980,
                  "end": 994
                },
                "definite": false,
                "start": 975,
                "end": 994
              }
            ],
            "declare": false,
            "start": 969,
            "end": 995
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1017,
                  "end": 1019
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1022,
                    "end": 1026
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1029,
                    "end": 1031
                  },
                  "alternate": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "baz",
                          "cooked": "baz"
                        },
                        "tail": false,
                        "start": 1034,
                        "end": 1040
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 1041,
                        "end": 1043
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1040,
                        "end": 1041
                      }
                    ],
                    "start": 1034,
                    "end": 1043
                  },
                  "start": 1022,
                  "end": 1043
                },
                "definite": false,
                "start": 1017,
                "end": 1043
              }
            ],
            "declare": false,
            "start": 1011,
            "end": 1044
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTemplateLiteralType",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "foo",
                                "cooked": "foo"
                              },
                              "tail": false,
                              "start": 1070,
                              "end": 1076
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true,
                              "start": 1082,
                              "end": 1084
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 1076,
                              "end": 1082
                            }
                          ],
                          "start": 1070,
                          "end": 1084
                        },
                        {
                          "type": "TSTemplateLiteralType",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "bar",
                                "cooked": "bar"
                              },
                              "tail": false,
                              "start": 1087,
                              "end": 1093
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true,
                              "start": 1099,
                              "end": 1101
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 1093,
                              "end": 1099
                            }
                          ],
                          "start": 1087,
                          "end": 1101
                        },
                        {
                          "type": "TSTemplateLiteralType",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "baz",
                                "cooked": "baz"
                              },
                              "tail": false,
                              "start": 1104,
                              "end": 1110
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true,
                              "start": 1116,
                              "end": 1118
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 1110,
                              "end": 1116
                            }
                          ],
                          "start": 1104,
                          "end": 1118
                        }
                      ],
                      "start": 1070,
                      "end": 1118
                    },
                    "start": 1068,
                    "end": 1118
                  },
                  "start": 1066,
                  "end": 1118
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1121,
                  "end": 1123
                },
                "definite": false,
                "start": 1066,
                "end": 1123
              }
            ],
            "declare": false,
            "start": 1060,
            "end": 1124
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1185,
                  "end": 1187
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1190,
                  "end": 1192
                },
                "definite": false,
                "start": 1185,
                "end": 1192
              }
            ],
            "declare": false,
            "start": 1181,
            "end": 1193
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1213,
                  "end": 1215
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1218,
                  "end": 1220
                },
                "definite": false,
                "start": 1213,
                "end": 1220
              }
            ],
            "declare": false,
            "start": 1209,
            "end": 1221
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
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1266,
                  "end": 1268
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1271,
                  "end": 1273
                },
                "definite": false,
                "start": 1266,
                "end": 1273
              }
            ],
            "declare": false,
            "start": 1262,
            "end": 1274
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
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1294,
                  "end": 1296
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1299,
                  "end": 1301
                },
                "definite": false,
                "start": 1294,
                "end": 1301
              }
            ],
            "declare": false,
            "start": 1290,
            "end": 1302
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
                  "name": "v5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1322,
                  "end": 1324
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1327,
                  "end": 1329
                },
                "definite": false,
                "start": 1322,
                "end": 1329
              }
            ],
            "declare": false,
            "start": 1318,
            "end": 1330
          }
        ],
        "start": 819,
        "end": 1385
      },
      "expression": false,
      "start": 779,
      "end": 1385
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ft12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1396,
        "end": 1400
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1404,
              "end": 1410
            },
            "start": 1402,
            "end": 1410
          },
          "start": 1401,
          "end": 1410
        }
      ],
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
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1424,
                  "end": 1426
                },
                "init": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "foo",
                        "cooked": "foo"
                      },
                      "tail": false,
                      "start": 1429,
                      "end": 1435
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 1436,
                      "end": 1438
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1435,
                      "end": 1436
                    }
                  ],
                  "start": 1429,
                  "end": 1438
                },
                "definite": false,
                "start": 1424,
                "end": 1438
              }
            ],
            "declare": false,
            "start": 1418,
            "end": 1439
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1448,
                  "end": 1450
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1453,
                  "end": 1455
                },
                "definite": false,
                "start": 1448,
                "end": 1455
              }
            ],
            "declare": false,
            "start": 1444,
            "end": 1456
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "foo",
                            "cooked": "foo"
                          },
                          "tail": false,
                          "start": 1471,
                          "end": 1477
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 1483,
                          "end": 1485
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1477,
                          "end": 1483
                        }
                      ],
                      "start": 1471,
                      "end": 1485
                    },
                    "start": 1469,
                    "end": 1485
                  },
                  "start": 1467,
                  "end": 1485
                },
                "init": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "foo",
                        "cooked": "foo"
                      },
                      "tail": false,
                      "start": 1488,
                      "end": 1494
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 1495,
                      "end": 1497
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1494,
                      "end": 1495
                    }
                  ],
                  "start": 1488,
                  "end": 1497
                },
                "definite": false,
                "start": 1467,
                "end": 1497
              }
            ],
            "declare": false,
            "start": 1461,
            "end": 1498
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1507,
                  "end": 1509
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1512,
                  "end": 1514
                },
                "definite": false,
                "start": 1507,
                "end": 1514
              }
            ],
            "declare": false,
            "start": 1503,
            "end": 1515
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1526,
                  "end": 1528
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "foo",
                          "cooked": "foo"
                        },
                        "tail": false,
                        "start": 1531,
                        "end": 1537
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 1538,
                        "end": 1540
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1537,
                        "end": 1538
                      }
                    ],
                    "start": 1531,
                    "end": 1540
                  },
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "foo",
                          "cooked": "foo"
                        },
                        "tail": false,
                        "start": 1544,
                        "end": 1550
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 1556,
                        "end": 1558
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1550,
                        "end": 1556
                      }
                    ],
                    "start": 1544,
                    "end": 1558
                  },
                  "start": 1531,
                  "end": 1558
                },
                "definite": false,
                "start": 1526,
                "end": 1558
              }
            ],
            "declare": false,
            "start": 1520,
            "end": 1559
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
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1568,
                  "end": 1570
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1573,
                  "end": 1575
                },
                "definite": false,
                "start": 1568,
                "end": 1575
              }
            ],
            "declare": false,
            "start": 1564,
            "end": 1576
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1587,
                  "end": 1589
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "foo",
                          "cooked": "foo"
                        },
                        "tail": false,
                        "start": 1593,
                        "end": 1599
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 1605,
                        "end": 1607
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1599,
                        "end": 1605
                      }
                    ],
                    "start": 1593,
                    "end": 1607
                  },
                  "expression": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "foo",
                          "cooked": "foo"
                        },
                        "tail": false,
                        "start": 1608,
                        "end": 1614
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 1615,
                        "end": 1617
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1614,
                        "end": 1615
                      }
                    ],
                    "start": 1608,
                    "end": 1617
                  },
                  "start": 1592,
                  "end": 1617
                },
                "definite": false,
                "start": 1587,
                "end": 1617
              }
            ],
            "declare": false,
            "start": 1581,
            "end": 1618
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
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1627,
                  "end": 1629
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1632,
                  "end": 1634
                },
                "definite": false,
                "start": 1627,
                "end": 1634
              }
            ],
            "declare": false,
            "start": 1623,
            "end": 1635
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1646,
                  "end": 1648
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "foo",
                          "cooked": "foo"
                        },
                        "tail": false,
                        "start": 1651,
                        "end": 1657
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 1658,
                        "end": 1660
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1657,
                        "end": 1658
                      }
                    ],
                    "start": 1651,
                    "end": 1660
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1664,
                      "end": 1669
                    },
                    "typeArguments": null,
                    "start": 1664,
                    "end": 1669
                  },
                  "start": 1651,
                  "end": 1669
                },
                "definite": false,
                "start": 1646,
                "end": 1669
              }
            ],
            "declare": false,
            "start": 1640,
            "end": 1670
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
                  "name": "v5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1679,
                  "end": 1681
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1684,
                  "end": 1686
                },
                "definite": false,
                "start": 1679,
                "end": 1686
              }
            ],
            "declare": false,
            "start": 1675,
            "end": 1687
          }
        ],
        "start": 1412,
        "end": 1689
      },
      "expression": false,
      "start": 1387,
      "end": 1689
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "widening",
        "optional": false,
        "typeAnnotation": null,
        "start": 1708,
        "end": 1716
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1717,
              "end": 1718
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1717,
            "end": 1718
          }
        ],
        "start": 1716,
        "end": 1719
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1723,
                "end": 1724
              },
              "typeArguments": null,
              "start": 1723,
              "end": 1724
            },
            "start": 1721,
            "end": 1724
          },
          "start": 1720,
          "end": 1724
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1727,
            "end": 1728
          },
          "typeArguments": null,
          "start": 1727,
          "end": 1728
        },
        "start": 1725,
        "end": 1728
      },
      "body": null,
      "expression": false,
      "start": 1691,
      "end": 1729
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonWidening",
        "optional": false,
        "typeAnnotation": null,
        "start": 1747,
        "end": 1758
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1759,
              "end": 1760
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1769,
                  "end": 1775
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1778,
                  "end": 1784
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 1787,
                  "end": 1793
                }
              ],
              "start": 1769,
              "end": 1793
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1759,
            "end": 1793
          }
        ],
        "start": 1758,
        "end": 1794
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1798,
                "end": 1799
              },
              "typeArguments": null,
              "start": 1798,
              "end": 1799
            },
            "start": 1796,
            "end": 1799
          },
          "start": 1795,
          "end": 1799
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1802,
            "end": 1803
          },
          "typeArguments": null,
          "start": 1802,
          "end": 1803
        },
        "start": 1800,
        "end": 1803
      },
      "body": null,
      "expression": false,
      "start": 1730,
      "end": 1804
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ft13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1815,
        "end": 1819
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1823,
              "end": 1829
            },
            "start": 1821,
            "end": 1829
          },
          "start": 1820,
          "end": 1829
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 1837,
              "end": 1844
            },
            "start": 1835,
            "end": 1844
          },
          "start": 1831,
          "end": 1844
        }
      ],
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1856,
                  "end": 1858
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "widening",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1861,
                    "end": 1869
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "foo",
                            "cooked": "foo"
                          },
                          "tail": false,
                          "start": 1870,
                          "end": 1876
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 1877,
                          "end": 1879
                        }
                      ],
                      "expressions": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1876,
                          "end": 1877
                        }
                      ],
                      "start": 1870,
                      "end": 1879
                    }
                  ],
                  "optional": false,
                  "start": 1861,
                  "end": 1880
                },
                "definite": false,
                "start": 1856,
                "end": 1880
              }
            ],
            "declare": false,
            "start": 1852,
            "end": 1881
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1890,
                  "end": 1892
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "widening",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1895,
                    "end": 1903
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cond",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1904,
                        "end": 1908
                      },
                      "consequent": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 1911,
                        "end": 1914
                      },
                      "alternate": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "foo",
                              "cooked": "foo"
                            },
                            "tail": false,
                            "start": 1917,
                            "end": 1923
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 1924,
                            "end": 1926
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1923,
                            "end": 1924
                          }
                        ],
                        "start": 1917,
                        "end": 1926
                      },
                      "start": 1904,
                      "end": 1926
                    }
                  ],
                  "optional": false,
                  "start": 1895,
                  "end": 1927
                },
                "definite": false,
                "start": 1890,
                "end": 1927
              }
            ],
            "declare": false,
            "start": 1886,
            "end": 1928
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
                  "name": "y1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1937,
                  "end": 1939
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nonWidening",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1942,
                    "end": 1953
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "foo",
                            "cooked": "foo"
                          },
                          "tail": false,
                          "start": 1954,
                          "end": 1960
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 1961,
                          "end": 1963
                        }
                      ],
                      "expressions": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1960,
                          "end": 1961
                        }
                      ],
                      "start": 1954,
                      "end": 1963
                    }
                  ],
                  "optional": false,
                  "start": 1942,
                  "end": 1964
                },
                "definite": false,
                "start": 1937,
                "end": 1964
              }
            ],
            "declare": false,
            "start": 1933,
            "end": 1965
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
                  "name": "y2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1974,
                  "end": 1976
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nonWidening",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1979,
                    "end": 1990
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cond",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1991,
                        "end": 1995
                      },
                      "consequent": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 1998,
                        "end": 2001
                      },
                      "alternate": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "foo",
                              "cooked": "foo"
                            },
                            "tail": false,
                            "start": 2004,
                            "end": 2010
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 2011,
                            "end": 2013
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2010,
                            "end": 2011
                          }
                        ],
                        "start": 2004,
                        "end": 2013
                      },
                      "start": 1991,
                      "end": 2013
                    }
                  ],
                  "optional": false,
                  "start": 1979,
                  "end": 2014
                },
                "definite": false,
                "start": 1974,
                "end": 2014
              }
            ],
            "declare": false,
            "start": 1970,
            "end": 2015
          }
        ],
        "start": 1846,
        "end": 2017
      },
      "expression": false,
      "start": 1806,
      "end": 2017
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T0",
        "optional": false,
        "typeAnnotation": null,
        "start": 2024,
        "end": 2026
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 2029,
            "end": 2035
          },
          {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 2038,
                "end": 2041
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "px",
                  "cooked": "px"
                },
                "tail": true,
                "start": 2047,
                "end": 2051
              }
            ],
            "types": [
              {
                "type": "TSNumberKeyword",
                "start": 2041,
                "end": 2047
              }
            ],
            "start": 2038,
            "end": 2051
          }
        ],
        "start": 2029,
        "end": 2051
      },
      "declare": false,
      "start": 2019,
      "end": 2052
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ft14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2063,
        "end": 2067
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "foo",
                    "cooked": "foo"
                  },
                  "tail": false,
                  "start": 2071,
                  "end": 2077
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 2083,
                  "end": 2085
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2077,
                  "end": 2083
                }
              ],
              "start": 2071,
              "end": 2085
            },
            "start": 2069,
            "end": 2085
          },
          "start": 2068,
          "end": 2085
        }
      ],
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2101,
                      "end": 2107
                    },
                    "start": 2099,
                    "end": 2107
                  },
                  "start": 2097,
                  "end": 2107
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2110,
                  "end": 2111
                },
                "definite": false,
                "start": 2097,
                "end": 2111
              }
            ],
            "declare": false,
            "start": 2093,
            "end": 2112
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "String",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2125,
                        "end": 2131
                      },
                      "typeArguments": null,
                      "start": 2125,
                      "end": 2131
                    },
                    "start": 2123,
                    "end": 2131
                  },
                  "start": 2121,
                  "end": 2131
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2134,
                  "end": 2135
                },
                "definite": false,
                "start": 2121,
                "end": 2135
              }
            ],
            "declare": false,
            "start": 2117,
            "end": 2136
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
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2149,
                        "end": 2155
                      },
                      "typeArguments": null,
                      "start": 2149,
                      "end": 2155
                    },
                    "start": 2147,
                    "end": 2155
                  },
                  "start": 2145,
                  "end": 2155
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2158,
                  "end": 2159
                },
                "definite": false,
                "start": 2145,
                "end": 2159
              }
            ],
            "declare": false,
            "start": 2141,
            "end": 2160
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
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 2173,
                      "end": 2175
                    },
                    "start": 2171,
                    "end": 2175
                  },
                  "start": 2169,
                  "end": 2175
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2178,
                  "end": 2179
                },
                "definite": false,
                "start": 2169,
                "end": 2179
              }
            ],
            "declare": false,
            "start": 2165,
            "end": 2180
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
                  "name": "x6",
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
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2195,
                            "end": 2201
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2203,
                              "end": 2209
                            },
                            "start": 2201,
                            "end": 2209
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 2195,
                          "end": 2209
                        }
                      ],
                      "start": 2193,
                      "end": 2211
                    },
                    "start": 2191,
                    "end": 2211
                  },
                  "start": 2189,
                  "end": 2211
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2214,
                  "end": 2215
                },
                "definite": false,
                "start": 2189,
                "end": 2215
              }
            ],
            "declare": false,
            "start": 2185,
            "end": 2216
          }
        ],
        "start": 2087,
        "end": 2218
      },
      "expression": false,
      "start": 2054,
      "end": 2218
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2237,
        "end": 2239
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2240,
              "end": 2241
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2240,
            "end": 2241
          }
        ],
        "start": 2239,
        "end": 2242
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2246,
                "end": 2247
              },
              "typeArguments": null,
              "start": 2246,
              "end": 2247
            },
            "start": 2244,
            "end": 2247
          },
          "start": 2243,
          "end": 2247
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2250,
            "end": 2251
          },
          "typeArguments": null,
          "start": 2250,
          "end": 2251
        },
        "start": 2248,
        "end": 2251
      },
      "body": null,
      "expression": false,
      "start": 2220,
      "end": 2252
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2270,
        "end": 2272
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2273,
              "end": 2274
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2283,
              "end": 2289
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2273,
            "end": 2289
          }
        ],
        "start": 2272,
        "end": 2290
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2294,
                "end": 2295
              },
              "typeArguments": null,
              "start": 2294,
              "end": 2295
            },
            "start": 2292,
            "end": 2295
          },
          "start": 2291,
          "end": 2295
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2298,
            "end": 2299
          },
          "typeArguments": null,
          "start": 2298,
          "end": 2299
        },
        "start": 2296,
        "end": 2299
      },
      "body": null,
      "expression": false,
      "start": 2253,
      "end": 2300
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ft20",
        "optional": false,
        "typeAnnotation": null,
        "start": 2311,
        "end": 2315
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2319,
              "end": 2325
            },
            "start": 2317,
            "end": 2325
          },
          "start": 2316,
          "end": 2325
        }
      ],
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2337,
                  "end": 2339
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2342,
                    "end": 2344
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "xyz-",
                            "cooked": "xyz-"
                          },
                          "tail": false,
                          "start": 2345,
                          "end": 2352
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 2353,
                          "end": 2355
                        }
                      ],
                      "expressions": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2352,
                          "end": 2353
                        }
                      ],
                      "start": 2345,
                      "end": 2355
                    }
                  ],
                  "optional": false,
                  "start": 2342,
                  "end": 2356
                },
                "definite": false,
                "start": 2337,
                "end": 2356
              }
            ],
            "declare": false,
            "start": 2333,
            "end": 2357
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2377,
                  "end": 2379
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2382,
                    "end": 2384
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "xyz-",
                            "cooked": "xyz-"
                          },
                          "tail": false,
                          "start": 2385,
                          "end": 2392
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 2393,
                          "end": 2395
                        }
                      ],
                      "expressions": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2392,
                          "end": 2393
                        }
                      ],
                      "start": 2385,
                      "end": 2395
                    }
                  ],
                  "optional": false,
                  "start": 2382,
                  "end": 2396
                },
                "definite": false,
                "start": 2377,
                "end": 2396
              }
            ],
            "declare": false,
            "start": 2373,
            "end": 2397
          }
        ],
        "start": 2327,
        "end": 2419
      },
      "expression": false,
      "start": 2302,
      "end": 2419
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takesLiteral",
        "optional": false,
        "typeAnnotation": null,
        "start": 2460,
        "end": 2472
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2473,
              "end": 2474
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2483,
              "end": 2489
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2473,
            "end": 2489
          }
        ],
        "start": 2472,
        "end": 2490
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "literal",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2500,
                "end": 2501
              },
              "typeArguments": null,
              "start": 2500,
              "end": 2501
            },
            "start": 2498,
            "end": 2501
          },
          "start": 2491,
          "end": 2501
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2504,
              "end": 2505
            },
            "typeArguments": null,
            "start": 2504,
            "end": 2505
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "foo.bar.",
                  "cooked": "foo.bar."
                },
                "tail": false,
                "start": 2514,
                "end": 2525
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 2532,
                "end": 2534
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2531,
                    "end": 2532
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2531,
                  "end": 2532
                },
                "start": 2525,
                "end": 2532
              }
            ],
            "start": 2514,
            "end": 2534
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 2537,
              "end": 2538
            },
            "typeArguments": null,
            "start": 2537,
            "end": 2538
          },
          "falseType": {
            "type": "TSUnknownKeyword",
            "start": 2541,
            "end": 2548
          },
          "start": 2504,
          "end": 2548
        },
        "start": 2502,
        "end": 2548
      },
      "body": null,
      "expression": false,
      "start": 2443,
      "end": 2549
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2557,
            "end": 2559
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "takesLiteral",
              "optional": false,
              "typeAnnotation": null,
              "start": 2562,
              "end": 2574
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "foo.bar.baz",
                "raw": "\"foo.bar.baz\"",
                "start": 2575,
                "end": 2588
              }
            ],
            "optional": false,
            "start": 2562,
            "end": 2589
          },
          "definite": false,
          "start": 2557,
          "end": 2589
        }
      ],
      "declare": false,
      "start": 2551,
      "end": 2590
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "id2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2606,
            "end": 2609
          },
          "init": {
            "type": "Literal",
            "value": "foo.bar.baz",
            "raw": "\"foo.bar.baz\"",
            "start": 2612,
            "end": 2625
          },
          "definite": false,
          "start": 2606,
          "end": 2625
        }
      ],
      "declare": false,
      "start": 2600,
      "end": 2626
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2633,
            "end": 2635
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "takesLiteral",
              "optional": false,
              "typeAnnotation": null,
              "start": 2638,
              "end": 2650
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "id2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2651,
                "end": 2654
              }
            ],
            "optional": false,
            "start": 2638,
            "end": 2655
          },
          "definite": false,
          "start": 2633,
          "end": 2655
        }
      ],
      "declare": false,
      "start": 2627,
      "end": 2656
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "someString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2693,
                "end": 2699
              },
              "start": 2691,
              "end": 2699
            },
            "start": 2681,
            "end": 2699
          },
          "init": null,
          "definite": false,
          "start": 2681,
          "end": 2699
        }
      ],
      "declare": true,
      "start": 2667,
      "end": 2700
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2707,
            "end": 2709
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "takesLiteral",
              "optional": false,
              "typeAnnotation": null,
              "start": 2712,
              "end": 2724
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "foo.bar.",
                      "cooked": "foo.bar."
                    },
                    "tail": false,
                    "start": 2725,
                    "end": 2736
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 2746,
                    "end": 2748
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "someString",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2736,
                    "end": 2746
                  }
                ],
                "start": 2725,
                "end": 2748
              }
            ],
            "optional": false,
            "start": 2712,
            "end": 2749
          },
          "definite": false,
          "start": 2707,
          "end": 2749
        }
      ],
      "declare": false,
      "start": 2701,
      "end": 2750
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "id4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2769,
            "end": 2772
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "foo.bar.",
                  "cooked": "foo.bar."
                },
                "tail": false,
                "start": 2775,
                "end": 2786
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 2796,
                "end": 2798
              }
            ],
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "someString",
                "optional": false,
                "typeAnnotation": null,
                "start": 2786,
                "end": 2796
              }
            ],
            "start": 2775,
            "end": 2798
          },
          "definite": false,
          "start": 2769,
          "end": 2798
        }
      ],
      "declare": false,
      "start": 2763,
      "end": 2799
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2806,
            "end": 2808
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "takesLiteral",
              "optional": false,
              "typeAnnotation": null,
              "start": 2811,
              "end": 2823
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "id4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2824,
                "end": 2827
              }
            ],
            "optional": false,
            "start": 2811,
            "end": 2828
          },
          "definite": false,
          "start": 2806,
          "end": 2828
        }
      ],
      "declare": false,
      "start": 2800,
      "end": 2829
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "someUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "abc",
                      "raw": "'abc'",
                      "start": 2868,
                      "end": 2873
                    },
                    "start": 2868,
                    "end": 2873
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "def",
                      "raw": "'def'",
                      "start": 2876,
                      "end": 2881
                    },
                    "start": 2876,
                    "end": 2881
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "ghi",
                      "raw": "'ghi'",
                      "start": 2884,
                      "end": 2889
                    },
                    "start": 2884,
                    "end": 2889
                  }
                ],
                "start": 2868,
                "end": 2889
              },
              "start": 2866,
              "end": 2889
            },
            "start": 2857,
            "end": 2889
          },
          "init": null,
          "definite": false,
          "start": 2857,
          "end": 2889
        }
      ],
      "declare": true,
      "start": 2843,
      "end": 2890
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2897,
            "end": 2899
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "takesLiteral",
              "optional": false,
              "typeAnnotation": null,
              "start": 2902,
              "end": 2914
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "foo.bar.",
                      "cooked": "foo.bar."
                    },
                    "tail": false,
                    "start": 2915,
                    "end": 2926
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 2935,
                    "end": 2937
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "someUnion",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2926,
                    "end": 2935
                  }
                ],
                "start": 2915,
                "end": 2937
              }
            ],
            "optional": false,
            "start": 2902,
            "end": 2938
          },
          "definite": false,
          "start": 2897,
          "end": 2938
        }
      ],
      "declare": false,
      "start": 2891,
      "end": 2939
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pixelValue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3007,
                "end": 3013
              },
              "start": 3005,
              "end": 3013
            },
            "start": 2995,
            "end": 3013
          },
          "init": {
            "type": "Literal",
            "value": 22,
            "raw": "22",
            "start": 3016,
            "end": 3018
          },
          "definite": false,
          "start": 2995,
          "end": 3018
        }
      ],
      "declare": false,
      "start": 2989,
      "end": 3019
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PixelValueType",
        "optional": false,
        "typeAnnotation": null,
        "start": 3026,
        "end": 3040
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 3043,
            "end": 3046
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "px",
              "cooked": "px"
            },
            "tail": true,
            "start": 3052,
            "end": 3056
          }
        ],
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 3046,
            "end": 3052
          }
        ],
        "start": 3043,
        "end": 3056
      },
      "declare": false,
      "start": 3021,
      "end": 3057
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pixelString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PixelValueType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3078,
                  "end": 3092
                },
                "typeArguments": null,
                "start": 3078,
                "end": 3092
              },
              "start": 3076,
              "end": 3092
            },
            "start": 3065,
            "end": 3092
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "22px",
                  "cooked": "22px"
                },
                "tail": true,
                "start": 3095,
                "end": 3101
              }
            ],
            "expressions": [],
            "start": 3095,
            "end": 3101
          },
          "definite": false,
          "start": 3065,
          "end": 3101
        }
      ],
      "declare": false,
      "start": 3059,
      "end": 3102
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "pixelStringWithTemplate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PixelValueType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3135,
                  "end": 3149
                },
                "typeArguments": null,
                "start": 3135,
                "end": 3149
              },
              "start": 3133,
              "end": 3149
            },
            "start": 3110,
            "end": 3149
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 3152,
                "end": 3155
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "px",
                  "cooked": "px"
                },
                "tail": true,
                "start": 3165,
                "end": 3169
              }
            ],
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "pixelValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 3155,
                "end": 3165
              }
            ],
            "start": 3152,
            "end": 3169
          },
          "definite": false,
          "start": 3110,
          "end": 3169
        }
      ],
      "declare": false,
      "start": 3104,
      "end": 3170
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getCardTitle",
        "optional": false,
        "typeAnnotation": null,
        "start": 3203,
        "end": 3215
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "title",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 3223,
              "end": 3229
            },
            "start": 3221,
            "end": 3229
          },
          "start": 3216,
          "end": 3229
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "test-",
                "cooked": "test-"
              },
              "tail": false,
              "start": 3232,
              "end": 3240
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 3246,
              "end": 3248
            }
          ],
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 3240,
              "end": 3246
            }
          ],
          "start": 3232,
          "end": 3248
        },
        "start": 3230,
        "end": 3248
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "test-",
                    "cooked": "test-"
                  },
                  "tail": false,
                  "start": 3262,
                  "end": 3270
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 3275,
                  "end": 3277
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "title",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3270,
                  "end": 3275
                }
              ],
              "start": 3262,
              "end": 3277
            },
            "start": 3255,
            "end": 3278
          }
        ],
        "start": 3249,
        "end": 3280
      },
      "expression": false,
      "start": 3194,
      "end": 3280
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "interpolatedStyle",
            "optional": false,
            "typeAnnotation": null,
            "start": 3310,
            "end": 3327
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rotate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3332,
                  "end": 3338
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 3340,
                  "end": 3342
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3332,
                "end": 3342
              }
            ],
            "start": 3330,
            "end": 3344
          },
          "definite": false,
          "start": 3310,
          "end": 3344
        }
      ],
      "declare": false,
      "start": 3304,
      "end": 3345
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3355,
        "end": 3357
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "transform",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "-moz-initial",
                    "raw": "\"-moz-initial\"",
                    "start": 3369,
                    "end": 3383
                  },
                  "start": 3369,
                  "end": 3383
                },
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 3387,
                      "end": 3393
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 3396,
                      "end": 3398
                    }
                  ],
                  "start": 3387,
                  "end": 3398
                }
              ],
              "start": 3369,
              "end": 3399
            },
            "start": 3367,
            "end": 3399
          },
          "start": 3358,
          "end": 3399
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 3410,
              "end": 3412
            },
            "start": 3403,
            "end": 3413
          }
        ],
        "start": 3401,
        "end": 3415
      },
      "expression": false,
      "start": 3346,
      "end": 3415
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "C2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3416,
          "end": 3418
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "rotate(",
                  "cooked": "rotate("
                },
                "tail": false,
                "start": 3419,
                "end": 3429
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "dig)",
                  "cooked": "dig)"
                },
                "tail": true,
                "start": 3453,
                "end": 3459
              }
            ],
            "expressions": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "interpolatedStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3429,
                  "end": 3446
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rotate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3447,
                  "end": 3453
                },
                "optional": false,
                "computed": false,
                "start": 3429,
                "end": 3453
              }
            ],
            "start": 3419,
            "end": 3459
          }
        ],
        "optional": false,
        "start": 3416,
        "end": 3460
      },
      "directive": null,
      "start": 3416,
      "end": 3461
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3461
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "ft1",
    "start": 9,
    "end": 12,
    "range": [
      9,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 15,
    "end": 22,
    "range": [
      15,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 23,
    "end": 29,
    "range": [
      23,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 34,
    "end": 40,
    "range": [
      34,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 45,
    "end": 51,
    "range": [
      45,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 56,
    "end": 61,
    "range": [
      56,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 64,
    "end": 69,
    "range": [
      64,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "String",
    "value": "'baz'",
    "start": 72,
    "end": 77,
    "range": [
      72,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 91,
    "end": 96,
    "range": [
      91,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 97,
    "end": 99,
    "range": [
      97,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 102,
    "end": 108,
    "range": [
      102,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 109,
    "end": 111,
    "range": [
      109,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 117,
    "end": 122,
    "range": [
      117,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 123,
    "end": 125,
    "range": [
      123,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 128,
    "end": 134,
    "range": [
      128,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 135,
    "end": 137,
    "range": [
      135,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 143,
    "end": 148,
    "range": [
      143,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 149,
    "end": 151,
    "range": [
      149,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 154,
    "end": 160,
    "range": [
      154,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 161,
    "end": 163,
    "range": [
      161,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 169,
    "end": 174,
    "range": [
      169,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 175,
    "end": 177,
    "range": [
      175,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 180,
    "end": 186,
    "range": [
      180,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 187,
    "end": 189,
    "range": [
      187,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 195,
    "end": 200,
    "range": [
      195,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 201,
    "end": 203,
    "range": [
      201,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 205,
    "end": 211,
    "range": [
      205,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 211,
    "end": 217,
    "range": [
      211,
      217
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 217,
    "end": 219,
    "range": [
      217,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 222,
    "end": 228,
    "range": [
      222,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 229,
    "end": 231,
    "range": [
      229,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 237,
    "end": 242,
    "range": [
      237,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 243,
    "end": 245,
    "range": [
      243,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 247,
    "end": 253,
    "range": [
      247,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 253,
    "end": 259,
    "range": [
      253,
      259
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 259,
    "end": 261,
    "range": [
      259,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 264,
    "end": 270,
    "range": [
      264,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 271,
    "end": 273,
    "range": [
      271,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 279,
    "end": 284,
    "range": [
      279,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 285,
    "end": 287,
    "range": [
      285,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 289,
    "end": 295,
    "range": [
      289,
      295
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 295,
    "end": 300,
    "range": [
      295,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 303,
    "end": 308,
    "range": [
      303,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "String",
    "value": "'baz'",
    "start": 311,
    "end": 316,
    "range": [
      311,
      316
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 316,
    "end": 318,
    "range": [
      316,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 321,
    "end": 327,
    "range": [
      321,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 328,
    "end": 330,
    "range": [
      328,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 336,
    "end": 341,
    "range": [
      336,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 342,
    "end": 344,
    "range": [
      342,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 346,
    "end": 352,
    "range": [
      346,
      352
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 353,
    "end": 355,
    "range": [
      353,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 358,
    "end": 364,
    "range": [
      358,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 365,
    "end": 367,
    "range": [
      365,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 372,
    "end": 380,
    "range": [
      372,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "ft2",
    "start": 381,
    "end": 384,
    "range": [
      381,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 388,
    "end": 394,
    "range": [
      388,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 402,
    "end": 408,
    "range": [
      402,
      408
    ]
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 409,
    "end": 415,
    "range": [
      409,
      415
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 416,
    "end": 418,
    "range": [
      416,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 423,
    "end": 431,
    "range": [
      423,
      431
    ]
  },
  {
    "type": "Identifier",
    "value": "ft10",
    "start": 432,
    "end": 436,
    "range": [
      432,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 440,
    "end": 446,
    "range": [
      440,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 454,
    "end": 459,
    "range": [
      454,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 460,
    "end": 462,
    "range": [
      460,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 465,
    "end": 471,
    "range": [
      465,
      471
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 472,
    "end": 474,
    "range": [
      472,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 496,
    "end": 499,
    "range": [
      496,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 500,
    "end": 502,
    "range": [
      500,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 505,
    "end": 507,
    "range": [
      505,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 529,
    "end": 534,
    "range": [
      529,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 535,
    "end": 537,
    "range": [
      535,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 540,
    "end": 542,
    "range": [
      540,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 564,
    "end": 567,
    "range": [
      564,
      567
    ]
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 568,
    "end": 570,
    "range": [
      568,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 573,
    "end": 575,
    "range": [
      573,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 597,
    "end": 602,
    "range": [
      597,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 603,
    "end": 605,
    "range": [
      603,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 607,
    "end": 613,
    "range": [
      607,
      613
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 613,
    "end": 619,
    "range": [
      613,
      619
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 619,
    "end": 621,
    "range": [
      619,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 624,
    "end": 630,
    "range": [
      624,
      630
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 631,
    "end": 633,
    "range": [
      631,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 639,
    "end": 642,
    "range": [
      639,
      642
    ]
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 643,
    "end": 645,
    "range": [
      643,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 648,
    "end": 650,
    "range": [
      648,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 680,
    "end": 685,
    "range": [
      680,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 686,
    "end": 688,
    "range": [
      686,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 690,
    "end": 696,
    "range": [
      690,
      696
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 696,
    "end": 702,
    "range": [
      696,
      702
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 702,
    "end": 704,
    "range": [
      702,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 707,
    "end": 709,
    "range": [
      707,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 739,
    "end": 742,
    "range": [
      739,
      742
    ]
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 743,
    "end": 745,
    "range": [
      743,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 748,
    "end": 750,
    "range": [
      748,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 779,
    "end": 787,
    "range": [
      779,
      787
    ]
  },
  {
    "type": "Identifier",
    "value": "ft11",
    "start": 788,
    "end": 792,
    "range": [
      788,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 796,
    "end": 802,
    "range": [
      796,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 802,
    "end": 803,
    "range": [
      802,
      803
    ]
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 804,
    "end": 808,
    "range": [
      804,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 810,
    "end": 817,
    "range": [
      810,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 825,
    "end": 830,
    "range": [
      825,
      830
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 831,
    "end": 833,
    "range": [
      831,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 836,
    "end": 840,
    "range": [
      836,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 843,
    "end": 849,
    "range": [
      843,
      849
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 850,
    "end": 852,
    "range": [
      850,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Template",
    "value": "`bar${",
    "start": 855,
    "end": 861,
    "range": [
      855,
      861
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 862,
    "end": 864,
    "range": [
      862,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 881,
    "end": 886,
    "range": [
      881,
      886
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 887,
    "end": 889,
    "range": [
      887,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 891,
    "end": 897,
    "range": [
      891,
      897
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 897,
    "end": 903,
    "range": [
      897,
      903
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 903,
    "end": 905,
    "range": [
      903,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Template",
    "value": "`bar${",
    "start": 908,
    "end": 914,
    "range": [
      908,
      914
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 914,
    "end": 920,
    "range": [
      914,
      920
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 920,
    "end": 922,
    "range": [
      920,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 925,
    "end": 927,
    "range": [
      925,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 969,
    "end": 974,
    "range": [
      969,
      974
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 975,
    "end": 977,
    "range": [
      975,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
    ]
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 980,
    "end": 984,
    "range": [
      980,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 987,
    "end": 989,
    "range": [
      987,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 990,
    "end": 991,
    "range": [
      990,
      991
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 992,
    "end": 994,
    "range": [
      992,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1011,
    "end": 1016,
    "range": [
      1011,
      1016
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1017,
    "end": 1019,
    "range": [
      1017,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1022,
    "end": 1026,
    "range": [
      1022,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1029,
    "end": 1031,
    "range": [
      1029,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Template",
    "value": "`baz${",
    "start": 1034,
    "end": 1040,
    "range": [
      1034,
      1040
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1041,
    "end": 1043,
    "range": [
      1041,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1060,
    "end": 1065,
    "range": [
      1060,
      1065
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1066,
    "end": 1068,
    "range": [
      1066,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 1070,
    "end": 1076,
    "range": [
      1070,
      1076
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1076,
    "end": 1082,
    "range": [
      1076,
      1082
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1082,
    "end": 1084,
    "range": [
      1082,
      1084
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Template",
    "value": "`bar${",
    "start": 1087,
    "end": 1093,
    "range": [
      1087,
      1093
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1093,
    "end": 1099,
    "range": [
      1093,
      1099
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1099,
    "end": 1101,
    "range": [
      1099,
      1101
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Template",
    "value": "`baz${",
    "start": 1104,
    "end": 1110,
    "range": [
      1104,
      1110
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1110,
    "end": 1116,
    "range": [
      1110,
      1116
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1116,
    "end": 1118,
    "range": [
      1116,
      1118
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1121,
    "end": 1123,
    "range": [
      1121,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1181,
    "end": 1184,
    "range": [
      1181,
      1184
    ]
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 1185,
    "end": 1187,
    "range": [
      1185,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1188,
    "end": 1189,
    "range": [
      1188,
      1189
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1190,
    "end": 1192,
    "range": [
      1190,
      1192
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1192,
    "end": 1193,
    "range": [
      1192,
      1193
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1209,
    "end": 1212,
    "range": [
      1209,
      1212
    ]
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 1213,
    "end": 1215,
    "range": [
      1213,
      1215
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1218,
    "end": 1220,
    "range": [
      1218,
      1220
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1220,
    "end": 1221,
    "range": [
      1220,
      1221
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1262,
    "end": 1265,
    "range": [
      1262,
      1265
    ]
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 1266,
    "end": 1268,
    "range": [
      1266,
      1268
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1269,
    "end": 1270,
    "range": [
      1269,
      1270
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1271,
    "end": 1273,
    "range": [
      1271,
      1273
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1290,
    "end": 1293,
    "range": [
      1290,
      1293
    ]
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 1294,
    "end": 1296,
    "range": [
      1294,
      1296
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1299,
    "end": 1301,
    "range": [
      1299,
      1301
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1301,
    "end": 1302,
    "range": [
      1301,
      1302
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1318,
    "end": 1321,
    "range": [
      1318,
      1321
    ]
  },
  {
    "type": "Identifier",
    "value": "v5",
    "start": 1322,
    "end": 1324,
    "range": [
      1322,
      1324
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1325,
    "end": 1326,
    "range": [
      1325,
      1326
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1327,
    "end": 1329,
    "range": [
      1327,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1384,
    "end": 1385,
    "range": [
      1384,
      1385
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1387,
    "end": 1395,
    "range": [
      1387,
      1395
    ]
  },
  {
    "type": "Identifier",
    "value": "ft12",
    "start": 1396,
    "end": 1400,
    "range": [
      1396,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1404,
    "end": 1410,
    "range": [
      1404,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1418,
    "end": 1423,
    "range": [
      1418,
      1423
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1424,
    "end": 1426,
    "range": [
      1424,
      1426
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 1429,
    "end": 1435,
    "range": [
      1429,
      1435
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1435,
    "end": 1436,
    "range": [
      1435,
      1436
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1436,
    "end": 1438,
    "range": [
      1436,
      1438
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1438,
    "end": 1439,
    "range": [
      1438,
      1439
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1444,
    "end": 1447,
    "range": [
      1444,
      1447
    ]
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 1448,
    "end": 1450,
    "range": [
      1448,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1451,
    "end": 1452,
    "range": [
      1451,
      1452
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1453,
    "end": 1455,
    "range": [
      1453,
      1455
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1461,
    "end": 1466,
    "range": [
      1461,
      1466
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1467,
    "end": 1469,
    "range": [
      1467,
      1469
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1469,
    "end": 1470,
    "range": [
      1469,
      1470
    ]
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 1471,
    "end": 1477,
    "range": [
      1471,
      1477
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1477,
    "end": 1483,
    "range": [
      1477,
      1483
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1483,
    "end": 1485,
    "range": [
      1483,
      1485
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1486,
    "end": 1487,
    "range": [
      1486,
      1487
    ]
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 1488,
    "end": 1494,
    "range": [
      1488,
      1494
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1495,
    "end": 1497,
    "range": [
      1495,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1503,
    "end": 1506,
    "range": [
      1503,
      1506
    ]
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 1507,
    "end": 1509,
    "range": [
      1507,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1512,
    "end": 1514,
    "range": [
      1512,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1520,
    "end": 1525,
    "range": [
      1520,
      1525
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1526,
    "end": 1528,
    "range": [
      1526,
      1528
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1529,
    "end": 1530,
    "range": [
      1529,
      1530
    ]
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 1531,
    "end": 1537,
    "range": [
      1531,
      1537
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1537,
    "end": 1538,
    "range": [
      1537,
      1538
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1538,
    "end": 1540,
    "range": [
      1538,
      1540
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1541,
    "end": 1543,
    "range": [
      1541,
      1543
    ]
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 1544,
    "end": 1550,
    "range": [
      1544,
      1550
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1550,
    "end": 1556,
    "range": [
      1550,
      1556
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1556,
    "end": 1558,
    "range": [
      1556,
      1558
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1558,
    "end": 1559,
    "range": [
      1558,
      1559
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1564,
    "end": 1567,
    "range": [
      1564,
      1567
    ]
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 1568,
    "end": 1570,
    "range": [
      1568,
      1570
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1571,
    "end": 1572,
    "range": [
      1571,
      1572
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1573,
    "end": 1575,
    "range": [
      1573,
      1575
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1575,
    "end": 1576,
    "range": [
      1575,
      1576
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1581,
    "end": 1586,
    "range": [
      1581,
      1586
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1587,
    "end": 1589,
    "range": [
      1587,
      1589
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1590,
    "end": 1591,
    "range": [
      1590,
      1591
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1592,
    "end": 1593,
    "range": [
      1592,
      1593
    ]
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 1593,
    "end": 1599,
    "range": [
      1593,
      1599
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1599,
    "end": 1605,
    "range": [
      1599,
      1605
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1605,
    "end": 1607,
    "range": [
      1605,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 1608,
    "end": 1614,
    "range": [
      1608,
      1614
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1614,
    "end": 1615,
    "range": [
      1614,
      1615
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1615,
    "end": 1617,
    "range": [
      1615,
      1617
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1623,
    "end": 1626,
    "range": [
      1623,
      1626
    ]
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 1627,
    "end": 1629,
    "range": [
      1627,
      1629
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1630,
    "end": 1631,
    "range": [
      1630,
      1631
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1632,
    "end": 1634,
    "range": [
      1632,
      1634
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1634,
    "end": 1635,
    "range": [
      1634,
      1635
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1640,
    "end": 1645,
    "range": [
      1640,
      1645
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1646,
    "end": 1648,
    "range": [
      1646,
      1648
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 1651,
    "end": 1657,
    "range": [
      1651,
      1657
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1657,
    "end": 1658,
    "range": [
      1657,
      1658
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1658,
    "end": 1660,
    "range": [
      1658,
      1660
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1661,
    "end": 1663,
    "range": [
      1661,
      1663
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1664,
    "end": 1669,
    "range": [
      1664,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1675,
    "end": 1678,
    "range": [
      1675,
      1678
    ]
  },
  {
    "type": "Identifier",
    "value": "v5",
    "start": 1679,
    "end": 1681,
    "range": [
      1679,
      1681
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1682,
    "end": 1683,
    "range": [
      1682,
      1683
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1684,
    "end": 1686,
    "range": [
      1684,
      1686
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1686,
    "end": 1687,
    "range": [
      1686,
      1687
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1691,
    "end": 1698,
    "range": [
      1691,
      1698
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1699,
    "end": 1707,
    "range": [
      1699,
      1707
    ]
  },
  {
    "type": "Identifier",
    "value": "widening",
    "start": 1708,
    "end": 1716,
    "range": [
      1708,
      1716
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1716,
    "end": 1717,
    "range": [
      1716,
      1717
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1717,
    "end": 1718,
    "range": [
      1717,
      1718
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1718,
    "end": 1719,
    "range": [
      1718,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1719,
    "end": 1720,
    "range": [
      1719,
      1720
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1720,
    "end": 1721,
    "range": [
      1720,
      1721
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1721,
    "end": 1722,
    "range": [
      1721,
      1722
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1725,
    "end": 1726,
    "range": [
      1725,
      1726
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1727,
    "end": 1728,
    "range": [
      1727,
      1728
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1730,
    "end": 1737,
    "range": [
      1730,
      1737
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1738,
    "end": 1746,
    "range": [
      1738,
      1746
    ]
  },
  {
    "type": "Identifier",
    "value": "nonWidening",
    "start": 1747,
    "end": 1758,
    "range": [
      1747,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1759,
    "end": 1760,
    "range": [
      1759,
      1760
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1761,
    "end": 1768,
    "range": [
      1761,
      1768
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1769,
    "end": 1775,
    "range": [
      1769,
      1775
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1778,
    "end": 1784,
    "range": [
      1778,
      1784
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1785,
    "end": 1786,
    "range": [
      1785,
      1786
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1787,
    "end": 1793,
    "range": [
      1787,
      1793
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1793,
    "end": 1794,
    "range": [
      1793,
      1794
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1794,
    "end": 1795,
    "range": [
      1794,
      1795
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1795,
    "end": 1796,
    "range": [
      1795,
      1796
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1796,
    "end": 1797,
    "range": [
      1796,
      1797
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1799,
    "end": 1800,
    "range": [
      1799,
      1800
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1803,
    "end": 1804,
    "range": [
      1803,
      1804
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1806,
    "end": 1814,
    "range": [
      1806,
      1814
    ]
  },
  {
    "type": "Identifier",
    "value": "ft13",
    "start": 1815,
    "end": 1819,
    "range": [
      1815,
      1819
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1819,
    "end": 1820,
    "range": [
      1819,
      1820
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1820,
    "end": 1821,
    "range": [
      1820,
      1821
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1821,
    "end": 1822,
    "range": [
      1821,
      1822
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1823,
    "end": 1829,
    "range": [
      1823,
      1829
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1829,
    "end": 1830,
    "range": [
      1829,
      1830
    ]
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1831,
    "end": 1835,
    "range": [
      1831,
      1835
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1837,
    "end": 1844,
    "range": [
      1837,
      1844
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1844,
    "end": 1845,
    "range": [
      1844,
      1845
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1846,
    "end": 1847,
    "range": [
      1846,
      1847
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1852,
    "end": 1855,
    "range": [
      1852,
      1855
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1856,
    "end": 1858,
    "range": [
      1856,
      1858
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1859,
    "end": 1860,
    "range": [
      1859,
      1860
    ]
  },
  {
    "type": "Identifier",
    "value": "widening",
    "start": 1861,
    "end": 1869,
    "range": [
      1861,
      1869
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1869,
    "end": 1870,
    "range": [
      1869,
      1870
    ]
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 1870,
    "end": 1876,
    "range": [
      1870,
      1876
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1876,
    "end": 1877,
    "range": [
      1876,
      1877
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1877,
    "end": 1879,
    "range": [
      1877,
      1879
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1879,
    "end": 1880,
    "range": [
      1879,
      1880
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1880,
    "end": 1881,
    "range": [
      1880,
      1881
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1886,
    "end": 1889,
    "range": [
      1886,
      1889
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1890,
    "end": 1892,
    "range": [
      1890,
      1892
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1893,
    "end": 1894,
    "range": [
      1893,
      1894
    ]
  },
  {
    "type": "Identifier",
    "value": "widening",
    "start": 1895,
    "end": 1903,
    "range": [
      1895,
      1903
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1903,
    "end": 1904,
    "range": [
      1903,
      1904
    ]
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1904,
    "end": 1908,
    "range": [
      1904,
      1908
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1909,
    "end": 1910,
    "range": [
      1909,
      1910
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1911,
    "end": 1914,
    "range": [
      1911,
      1914
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1915,
    "end": 1916,
    "range": [
      1915,
      1916
    ]
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 1917,
    "end": 1923,
    "range": [
      1917,
      1923
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1923,
    "end": 1924,
    "range": [
      1923,
      1924
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1924,
    "end": 1926,
    "range": [
      1924,
      1926
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1926,
    "end": 1927,
    "range": [
      1926,
      1927
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1927,
    "end": 1928,
    "range": [
      1927,
      1928
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1933,
    "end": 1936,
    "range": [
      1933,
      1936
    ]
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 1937,
    "end": 1939,
    "range": [
      1937,
      1939
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1940,
    "end": 1941,
    "range": [
      1940,
      1941
    ]
  },
  {
    "type": "Identifier",
    "value": "nonWidening",
    "start": 1942,
    "end": 1953,
    "range": [
      1942,
      1953
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1953,
    "end": 1954,
    "range": [
      1953,
      1954
    ]
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 1954,
    "end": 1960,
    "range": [
      1954,
      1960
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1960,
    "end": 1961,
    "range": [
      1960,
      1961
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1961,
    "end": 1963,
    "range": [
      1961,
      1963
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1963,
    "end": 1964,
    "range": [
      1963,
      1964
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1964,
    "end": 1965,
    "range": [
      1964,
      1965
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1970,
    "end": 1973,
    "range": [
      1970,
      1973
    ]
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 1974,
    "end": 1976,
    "range": [
      1974,
      1976
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1977,
    "end": 1978,
    "range": [
      1977,
      1978
    ]
  },
  {
    "type": "Identifier",
    "value": "nonWidening",
    "start": 1979,
    "end": 1990,
    "range": [
      1979,
      1990
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1990,
    "end": 1991,
    "range": [
      1990,
      1991
    ]
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1991,
    "end": 1995,
    "range": [
      1991,
      1995
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1996,
    "end": 1997,
    "range": [
      1996,
      1997
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1998,
    "end": 2001,
    "range": [
      1998,
      2001
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2002,
    "end": 2003,
    "range": [
      2002,
      2003
    ]
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 2004,
    "end": 2010,
    "range": [
      2004,
      2010
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2010,
    "end": 2011,
    "range": [
      2010,
      2011
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2011,
    "end": 2013,
    "range": [
      2011,
      2013
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2013,
    "end": 2014,
    "range": [
      2013,
      2014
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2014,
    "end": 2015,
    "range": [
      2014,
      2015
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2016,
    "end": 2017,
    "range": [
      2016,
      2017
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2019,
    "end": 2023,
    "range": [
      2019,
      2023
    ]
  },
  {
    "type": "Identifier",
    "value": "T0",
    "start": 2024,
    "end": 2026,
    "range": [
      2024,
      2026
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2027,
    "end": 2028,
    "range": [
      2027,
      2028
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2029,
    "end": 2035,
    "range": [
      2029,
      2035
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2036,
    "end": 2037,
    "range": [
      2036,
      2037
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2038,
    "end": 2041,
    "range": [
      2038,
      2041
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2041,
    "end": 2047,
    "range": [
      2041,
      2047
    ]
  },
  {
    "type": "Template",
    "value": "}px`",
    "start": 2047,
    "end": 2051,
    "range": [
      2047,
      2051
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2051,
    "end": 2052,
    "range": [
      2051,
      2052
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2054,
    "end": 2062,
    "range": [
      2054,
      2062
    ]
  },
  {
    "type": "Identifier",
    "value": "ft14",
    "start": 2063,
    "end": 2067,
    "range": [
      2063,
      2067
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2067,
    "end": 2068,
    "range": [
      2067,
      2068
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2068,
    "end": 2069,
    "range": [
      2068,
      2069
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2069,
    "end": 2070,
    "range": [
      2069,
      2070
    ]
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 2071,
    "end": 2077,
    "range": [
      2071,
      2077
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2077,
    "end": 2083,
    "range": [
      2077,
      2083
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2083,
    "end": 2085,
    "range": [
      2083,
      2085
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2085,
    "end": 2086,
    "range": [
      2085,
      2086
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2087,
    "end": 2088,
    "range": [
      2087,
      2088
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2093,
    "end": 2096,
    "range": [
      2093,
      2096
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 2097,
    "end": 2099,
    "range": [
      2097,
      2099
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2099,
    "end": 2100,
    "range": [
      2099,
      2100
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2101,
    "end": 2107,
    "range": [
      2101,
      2107
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2108,
    "end": 2109,
    "range": [
      2108,
      2109
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2110,
    "end": 2111,
    "range": [
      2110,
      2111
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2111,
    "end": 2112,
    "range": [
      2111,
      2112
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2117,
    "end": 2120,
    "range": [
      2117,
      2120
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 2121,
    "end": 2123,
    "range": [
      2121,
      2123
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2123,
    "end": 2124,
    "range": [
      2123,
      2124
    ]
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 2125,
    "end": 2131,
    "range": [
      2125,
      2131
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2132,
    "end": 2133,
    "range": [
      2132,
      2133
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2134,
    "end": 2135,
    "range": [
      2134,
      2135
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2135,
    "end": 2136,
    "range": [
      2135,
      2136
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2141,
    "end": 2144,
    "range": [
      2141,
      2144
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 2145,
    "end": 2147,
    "range": [
      2145,
      2147
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2147,
    "end": 2148,
    "range": [
      2147,
      2148
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 2149,
    "end": 2155,
    "range": [
      2149,
      2155
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2156,
    "end": 2157,
    "range": [
      2156,
      2157
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2158,
    "end": 2159,
    "range": [
      2158,
      2159
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2165,
    "end": 2168,
    "range": [
      2165,
      2168
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 2169,
    "end": 2171,
    "range": [
      2169,
      2171
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2171,
    "end": 2172,
    "range": [
      2171,
      2172
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2173,
    "end": 2174,
    "range": [
      2173,
      2174
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2174,
    "end": 2175,
    "range": [
      2174,
      2175
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2176,
    "end": 2177,
    "range": [
      2176,
      2177
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2178,
    "end": 2179,
    "range": [
      2178,
      2179
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2179,
    "end": 2180,
    "range": [
      2179,
      2180
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2185,
    "end": 2188,
    "range": [
      2185,
      2188
    ]
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 2189,
    "end": 2191,
    "range": [
      2189,
      2191
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2191,
    "end": 2192,
    "range": [
      2191,
      2192
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2193,
    "end": 2194,
    "range": [
      2193,
      2194
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2195,
    "end": 2201,
    "range": [
      2195,
      2201
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2201,
    "end": 2202,
    "range": [
      2201,
      2202
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2203,
    "end": 2209,
    "range": [
      2203,
      2209
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2210,
    "end": 2211,
    "range": [
      2210,
      2211
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2212,
    "end": 2213,
    "range": [
      2212,
      2213
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2214,
    "end": 2215,
    "range": [
      2214,
      2215
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2215,
    "end": 2216,
    "range": [
      2215,
      2216
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2217,
    "end": 2218,
    "range": [
      2217,
      2218
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2220,
    "end": 2227,
    "range": [
      2220,
      2227
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2228,
    "end": 2236,
    "range": [
      2228,
      2236
    ]
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 2237,
    "end": 2239,
    "range": [
      2237,
      2239
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2239,
    "end": 2240,
    "range": [
      2239,
      2240
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2240,
    "end": 2241,
    "range": [
      2240,
      2241
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2241,
    "end": 2242,
    "range": [
      2241,
      2242
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2242,
    "end": 2243,
    "range": [
      2242,
      2243
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2243,
    "end": 2244,
    "range": [
      2243,
      2244
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2244,
    "end": 2245,
    "range": [
      2244,
      2245
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2246,
    "end": 2247,
    "range": [
      2246,
      2247
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2247,
    "end": 2248,
    "range": [
      2247,
      2248
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2248,
    "end": 2249,
    "range": [
      2248,
      2249
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2250,
    "end": 2251,
    "range": [
      2250,
      2251
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2251,
    "end": 2252,
    "range": [
      2251,
      2252
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2253,
    "end": 2260,
    "range": [
      2253,
      2260
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2261,
    "end": 2269,
    "range": [
      2261,
      2269
    ]
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 2270,
    "end": 2272,
    "range": [
      2270,
      2272
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2272,
    "end": 2273,
    "range": [
      2272,
      2273
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2275,
    "end": 2282,
    "range": [
      2275,
      2282
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2283,
    "end": 2289,
    "range": [
      2283,
      2289
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2289,
    "end": 2290,
    "range": [
      2289,
      2290
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2290,
    "end": 2291,
    "range": [
      2290,
      2291
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2291,
    "end": 2292,
    "range": [
      2291,
      2292
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2292,
    "end": 2293,
    "range": [
      2292,
      2293
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2294,
    "end": 2295,
    "range": [
      2294,
      2295
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2295,
    "end": 2296,
    "range": [
      2295,
      2296
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2296,
    "end": 2297,
    "range": [
      2296,
      2297
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2298,
    "end": 2299,
    "range": [
      2298,
      2299
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2299,
    "end": 2300,
    "range": [
      2299,
      2300
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2302,
    "end": 2310,
    "range": [
      2302,
      2310
    ]
  },
  {
    "type": "Identifier",
    "value": "ft20",
    "start": 2311,
    "end": 2315,
    "range": [
      2311,
      2315
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2315,
    "end": 2316,
    "range": [
      2315,
      2316
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2316,
    "end": 2317,
    "range": [
      2316,
      2317
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2317,
    "end": 2318,
    "range": [
      2317,
      2318
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2319,
    "end": 2325,
    "range": [
      2319,
      2325
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2325,
    "end": 2326,
    "range": [
      2325,
      2326
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2327,
    "end": 2328,
    "range": [
      2327,
      2328
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2333,
    "end": 2336,
    "range": [
      2333,
      2336
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 2337,
    "end": 2339,
    "range": [
      2337,
      2339
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2340,
    "end": 2341,
    "range": [
      2340,
      2341
    ]
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 2342,
    "end": 2344,
    "range": [
      2342,
      2344
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2344,
    "end": 2345,
    "range": [
      2344,
      2345
    ]
  },
  {
    "type": "Template",
    "value": "`xyz-${",
    "start": 2345,
    "end": 2352,
    "range": [
      2345,
      2352
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2352,
    "end": 2353,
    "range": [
      2352,
      2353
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2353,
    "end": 2355,
    "range": [
      2353,
      2355
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2355,
    "end": 2356,
    "range": [
      2355,
      2356
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2356,
    "end": 2357,
    "range": [
      2356,
      2357
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2373,
    "end": 2376,
    "range": [
      2373,
      2376
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 2377,
    "end": 2379,
    "range": [
      2377,
      2379
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2380,
    "end": 2381,
    "range": [
      2380,
      2381
    ]
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 2382,
    "end": 2384,
    "range": [
      2382,
      2384
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2384,
    "end": 2385,
    "range": [
      2384,
      2385
    ]
  },
  {
    "type": "Template",
    "value": "`xyz-${",
    "start": 2385,
    "end": 2392,
    "range": [
      2385,
      2392
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2392,
    "end": 2393,
    "range": [
      2392,
      2393
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2393,
    "end": 2395,
    "range": [
      2393,
      2395
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2395,
    "end": 2396,
    "range": [
      2395,
      2396
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2396,
    "end": 2397,
    "range": [
      2396,
      2397
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2418,
    "end": 2419,
    "range": [
      2418,
      2419
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2443,
    "end": 2450,
    "range": [
      2443,
      2450
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2451,
    "end": 2459,
    "range": [
      2451,
      2459
    ]
  },
  {
    "type": "Identifier",
    "value": "takesLiteral",
    "start": 2460,
    "end": 2472,
    "range": [
      2460,
      2472
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2472,
    "end": 2473,
    "range": [
      2472,
      2473
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2473,
    "end": 2474,
    "range": [
      2473,
      2474
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2475,
    "end": 2482,
    "range": [
      2475,
      2482
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2483,
    "end": 2489,
    "range": [
      2483,
      2489
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2489,
    "end": 2490,
    "range": [
      2489,
      2490
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2490,
    "end": 2491,
    "range": [
      2490,
      2491
    ]
  },
  {
    "type": "Identifier",
    "value": "literal",
    "start": 2491,
    "end": 2498,
    "range": [
      2491,
      2498
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2498,
    "end": 2499,
    "range": [
      2498,
      2499
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2500,
    "end": 2501,
    "range": [
      2500,
      2501
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2501,
    "end": 2502,
    "range": [
      2501,
      2502
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2502,
    "end": 2503,
    "range": [
      2502,
      2503
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2504,
    "end": 2505,
    "range": [
      2504,
      2505
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2506,
    "end": 2513,
    "range": [
      2506,
      2513
    ]
  },
  {
    "type": "Template",
    "value": "`foo.bar.${",
    "start": 2514,
    "end": 2525,
    "range": [
      2514,
      2525
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2525,
    "end": 2530,
    "range": [
      2525,
      2530
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2531,
    "end": 2532,
    "range": [
      2531,
      2532
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2532,
    "end": 2534,
    "range": [
      2532,
      2534
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2535,
    "end": 2536,
    "range": [
      2535,
      2536
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2537,
    "end": 2538,
    "range": [
      2537,
      2538
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2539,
    "end": 2540,
    "range": [
      2539,
      2540
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2541,
    "end": 2548,
    "range": [
      2541,
      2548
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2548,
    "end": 2549,
    "range": [
      2548,
      2549
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2551,
    "end": 2556,
    "range": [
      2551,
      2556
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 2557,
    "end": 2559,
    "range": [
      2557,
      2559
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2560,
    "end": 2561,
    "range": [
      2560,
      2561
    ]
  },
  {
    "type": "Identifier",
    "value": "takesLiteral",
    "start": 2562,
    "end": 2574,
    "range": [
      2562,
      2574
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2574,
    "end": 2575,
    "range": [
      2574,
      2575
    ]
  },
  {
    "type": "String",
    "value": "\"foo.bar.baz\"",
    "start": 2575,
    "end": 2588,
    "range": [
      2575,
      2588
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2588,
    "end": 2589,
    "range": [
      2588,
      2589
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2589,
    "end": 2590,
    "range": [
      2589,
      2590
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2600,
    "end": 2605,
    "range": [
      2600,
      2605
    ]
  },
  {
    "type": "Identifier",
    "value": "id2",
    "start": 2606,
    "end": 2609,
    "range": [
      2606,
      2609
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2610,
    "end": 2611,
    "range": [
      2610,
      2611
    ]
  },
  {
    "type": "String",
    "value": "\"foo.bar.baz\"",
    "start": 2612,
    "end": 2625,
    "range": [
      2612,
      2625
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2625,
    "end": 2626,
    "range": [
      2625,
      2626
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2627,
    "end": 2632,
    "range": [
      2627,
      2632
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 2633,
    "end": 2635,
    "range": [
      2633,
      2635
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2636,
    "end": 2637,
    "range": [
      2636,
      2637
    ]
  },
  {
    "type": "Identifier",
    "value": "takesLiteral",
    "start": 2638,
    "end": 2650,
    "range": [
      2638,
      2650
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2650,
    "end": 2651,
    "range": [
      2650,
      2651
    ]
  },
  {
    "type": "Identifier",
    "value": "id2",
    "start": 2651,
    "end": 2654,
    "range": [
      2651,
      2654
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2654,
    "end": 2655,
    "range": [
      2654,
      2655
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2655,
    "end": 2656,
    "range": [
      2655,
      2656
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2667,
    "end": 2674,
    "range": [
      2667,
      2674
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2675,
    "end": 2680,
    "range": [
      2675,
      2680
    ]
  },
  {
    "type": "Identifier",
    "value": "someString",
    "start": 2681,
    "end": 2691,
    "range": [
      2681,
      2691
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2691,
    "end": 2692,
    "range": [
      2691,
      2692
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2693,
    "end": 2699,
    "range": [
      2693,
      2699
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2699,
    "end": 2700,
    "range": [
      2699,
      2700
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2701,
    "end": 2706,
    "range": [
      2701,
      2706
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 2707,
    "end": 2709,
    "range": [
      2707,
      2709
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2710,
    "end": 2711,
    "range": [
      2710,
      2711
    ]
  },
  {
    "type": "Identifier",
    "value": "takesLiteral",
    "start": 2712,
    "end": 2724,
    "range": [
      2712,
      2724
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2724,
    "end": 2725,
    "range": [
      2724,
      2725
    ]
  },
  {
    "type": "Template",
    "value": "`foo.bar.${",
    "start": 2725,
    "end": 2736,
    "range": [
      2725,
      2736
    ]
  },
  {
    "type": "Identifier",
    "value": "someString",
    "start": 2736,
    "end": 2746,
    "range": [
      2736,
      2746
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2746,
    "end": 2748,
    "range": [
      2746,
      2748
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2748,
    "end": 2749,
    "range": [
      2748,
      2749
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2749,
    "end": 2750,
    "range": [
      2749,
      2750
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2763,
    "end": 2768,
    "range": [
      2763,
      2768
    ]
  },
  {
    "type": "Identifier",
    "value": "id4",
    "start": 2769,
    "end": 2772,
    "range": [
      2769,
      2772
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2773,
    "end": 2774,
    "range": [
      2773,
      2774
    ]
  },
  {
    "type": "Template",
    "value": "`foo.bar.${",
    "start": 2775,
    "end": 2786,
    "range": [
      2775,
      2786
    ]
  },
  {
    "type": "Identifier",
    "value": "someString",
    "start": 2786,
    "end": 2796,
    "range": [
      2786,
      2796
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2796,
    "end": 2798,
    "range": [
      2796,
      2798
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2798,
    "end": 2799,
    "range": [
      2798,
      2799
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2800,
    "end": 2805,
    "range": [
      2800,
      2805
    ]
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 2806,
    "end": 2808,
    "range": [
      2806,
      2808
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2809,
    "end": 2810,
    "range": [
      2809,
      2810
    ]
  },
  {
    "type": "Identifier",
    "value": "takesLiteral",
    "start": 2811,
    "end": 2823,
    "range": [
      2811,
      2823
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2823,
    "end": 2824,
    "range": [
      2823,
      2824
    ]
  },
  {
    "type": "Identifier",
    "value": "id4",
    "start": 2824,
    "end": 2827,
    "range": [
      2824,
      2827
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2827,
    "end": 2828,
    "range": [
      2827,
      2828
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2828,
    "end": 2829,
    "range": [
      2828,
      2829
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2843,
    "end": 2850,
    "range": [
      2843,
      2850
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2851,
    "end": 2856,
    "range": [
      2851,
      2856
    ]
  },
  {
    "type": "Identifier",
    "value": "someUnion",
    "start": 2857,
    "end": 2866,
    "range": [
      2857,
      2866
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2866,
    "end": 2867,
    "range": [
      2866,
      2867
    ]
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 2868,
    "end": 2873,
    "range": [
      2868,
      2873
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2874,
    "end": 2875,
    "range": [
      2874,
      2875
    ]
  },
  {
    "type": "String",
    "value": "'def'",
    "start": 2876,
    "end": 2881,
    "range": [
      2876,
      2881
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2882,
    "end": 2883,
    "range": [
      2882,
      2883
    ]
  },
  {
    "type": "String",
    "value": "'ghi'",
    "start": 2884,
    "end": 2889,
    "range": [
      2884,
      2889
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2889,
    "end": 2890,
    "range": [
      2889,
      2890
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2891,
    "end": 2896,
    "range": [
      2891,
      2896
    ]
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 2897,
    "end": 2899,
    "range": [
      2897,
      2899
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2900,
    "end": 2901,
    "range": [
      2900,
      2901
    ]
  },
  {
    "type": "Identifier",
    "value": "takesLiteral",
    "start": 2902,
    "end": 2914,
    "range": [
      2902,
      2914
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2914,
    "end": 2915,
    "range": [
      2914,
      2915
    ]
  },
  {
    "type": "Template",
    "value": "`foo.bar.${",
    "start": 2915,
    "end": 2926,
    "range": [
      2915,
      2926
    ]
  },
  {
    "type": "Identifier",
    "value": "someUnion",
    "start": 2926,
    "end": 2935,
    "range": [
      2926,
      2935
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2935,
    "end": 2937,
    "range": [
      2935,
      2937
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2937,
    "end": 2938,
    "range": [
      2937,
      2938
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2938,
    "end": 2939,
    "range": [
      2938,
      2939
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2989,
    "end": 2994,
    "range": [
      2989,
      2994
    ]
  },
  {
    "type": "Identifier",
    "value": "pixelValue",
    "start": 2995,
    "end": 3005,
    "range": [
      2995,
      3005
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3005,
    "end": 3006,
    "range": [
      3005,
      3006
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3007,
    "end": 3013,
    "range": [
      3007,
      3013
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3014,
    "end": 3015,
    "range": [
      3014,
      3015
    ]
  },
  {
    "type": "Numeric",
    "value": "22",
    "start": 3016,
    "end": 3018,
    "range": [
      3016,
      3018
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3018,
    "end": 3019,
    "range": [
      3018,
      3019
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3021,
    "end": 3025,
    "range": [
      3021,
      3025
    ]
  },
  {
    "type": "Identifier",
    "value": "PixelValueType",
    "start": 3026,
    "end": 3040,
    "range": [
      3026,
      3040
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3041,
    "end": 3042,
    "range": [
      3041,
      3042
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 3043,
    "end": 3046,
    "range": [
      3043,
      3046
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3046,
    "end": 3052,
    "range": [
      3046,
      3052
    ]
  },
  {
    "type": "Template",
    "value": "}px`",
    "start": 3052,
    "end": 3056,
    "range": [
      3052,
      3056
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3056,
    "end": 3057,
    "range": [
      3056,
      3057
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3059,
    "end": 3064,
    "range": [
      3059,
      3064
    ]
  },
  {
    "type": "Identifier",
    "value": "pixelString",
    "start": 3065,
    "end": 3076,
    "range": [
      3065,
      3076
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3076,
    "end": 3077,
    "range": [
      3076,
      3077
    ]
  },
  {
    "type": "Identifier",
    "value": "PixelValueType",
    "start": 3078,
    "end": 3092,
    "range": [
      3078,
      3092
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3093,
    "end": 3094,
    "range": [
      3093,
      3094
    ]
  },
  {
    "type": "Template",
    "value": "`22px`",
    "start": 3095,
    "end": 3101,
    "range": [
      3095,
      3101
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3101,
    "end": 3102,
    "range": [
      3101,
      3102
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3104,
    "end": 3109,
    "range": [
      3104,
      3109
    ]
  },
  {
    "type": "Identifier",
    "value": "pixelStringWithTemplate",
    "start": 3110,
    "end": 3133,
    "range": [
      3110,
      3133
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3133,
    "end": 3134,
    "range": [
      3133,
      3134
    ]
  },
  {
    "type": "Identifier",
    "value": "PixelValueType",
    "start": 3135,
    "end": 3149,
    "range": [
      3135,
      3149
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3150,
    "end": 3151,
    "range": [
      3150,
      3151
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 3152,
    "end": 3155,
    "range": [
      3152,
      3155
    ]
  },
  {
    "type": "Identifier",
    "value": "pixelValue",
    "start": 3155,
    "end": 3165,
    "range": [
      3155,
      3165
    ]
  },
  {
    "type": "Template",
    "value": "}px`",
    "start": 3165,
    "end": 3169,
    "range": [
      3165,
      3169
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3169,
    "end": 3170,
    "range": [
      3169,
      3170
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3194,
    "end": 3202,
    "range": [
      3194,
      3202
    ]
  },
  {
    "type": "Identifier",
    "value": "getCardTitle",
    "start": 3203,
    "end": 3215,
    "range": [
      3203,
      3215
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3215,
    "end": 3216,
    "range": [
      3215,
      3216
    ]
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 3216,
    "end": 3221,
    "range": [
      3216,
      3221
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3221,
    "end": 3222,
    "range": [
      3221,
      3222
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3223,
    "end": 3229,
    "range": [
      3223,
      3229
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3229,
    "end": 3230,
    "range": [
      3229,
      3230
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3230,
    "end": 3231,
    "range": [
      3230,
      3231
    ]
  },
  {
    "type": "Template",
    "value": "`test-${",
    "start": 3232,
    "end": 3240,
    "range": [
      3232,
      3240
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3240,
    "end": 3246,
    "range": [
      3240,
      3246
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3246,
    "end": 3248,
    "range": [
      3246,
      3248
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3249,
    "end": 3250,
    "range": [
      3249,
      3250
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3255,
    "end": 3261,
    "range": [
      3255,
      3261
    ]
  },
  {
    "type": "Template",
    "value": "`test-${",
    "start": 3262,
    "end": 3270,
    "range": [
      3262,
      3270
    ]
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 3270,
    "end": 3275,
    "range": [
      3270,
      3275
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3275,
    "end": 3277,
    "range": [
      3275,
      3277
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3277,
    "end": 3278,
    "range": [
      3277,
      3278
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3279,
    "end": 3280,
    "range": [
      3279,
      3280
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3304,
    "end": 3309,
    "range": [
      3304,
      3309
    ]
  },
  {
    "type": "Identifier",
    "value": "interpolatedStyle",
    "start": 3310,
    "end": 3327,
    "range": [
      3310,
      3327
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3328,
    "end": 3329,
    "range": [
      3328,
      3329
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3330,
    "end": 3331,
    "range": [
      3330,
      3331
    ]
  },
  {
    "type": "Identifier",
    "value": "rotate",
    "start": 3332,
    "end": 3338,
    "range": [
      3332,
      3338
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3338,
    "end": 3339,
    "range": [
      3338,
      3339
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 3340,
    "end": 3342,
    "range": [
      3340,
      3342
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3343,
    "end": 3344,
    "range": [
      3343,
      3344
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3344,
    "end": 3345,
    "range": [
      3344,
      3345
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3346,
    "end": 3354,
    "range": [
      3346,
      3354
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 3355,
    "end": 3357,
    "range": [
      3355,
      3357
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3357,
    "end": 3358,
    "range": [
      3357,
      3358
    ]
  },
  {
    "type": "Identifier",
    "value": "transform",
    "start": 3358,
    "end": 3367,
    "range": [
      3358,
      3367
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3367,
    "end": 3368,
    "range": [
      3367,
      3368
    ]
  },
  {
    "type": "String",
    "value": "\"-moz-initial\"",
    "start": 3369,
    "end": 3383,
    "range": [
      3369,
      3383
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3384,
    "end": 3385,
    "range": [
      3384,
      3385
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3386,
    "end": 3387,
    "range": [
      3386,
      3387
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3387,
    "end": 3393,
    "range": [
      3387,
      3393
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3394,
    "end": 3395,
    "range": [
      3394,
      3395
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3396,
    "end": 3397,
    "range": [
      3396,
      3397
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3397,
    "end": 3398,
    "range": [
      3397,
      3398
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3398,
    "end": 3399,
    "range": [
      3398,
      3399
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3399,
    "end": 3400,
    "range": [
      3399,
      3400
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3401,
    "end": 3402,
    "range": [
      3401,
      3402
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3403,
    "end": 3409,
    "range": [
      3403,
      3409
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 3410,
    "end": 3412,
    "range": [
      3410,
      3412
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3412,
    "end": 3413,
    "range": [
      3412,
      3413
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3414,
    "end": 3415,
    "range": [
      3414,
      3415
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 3416,
    "end": 3418,
    "range": [
      3416,
      3418
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3418,
    "end": 3419,
    "range": [
      3418,
      3419
    ]
  },
  {
    "type": "Template",
    "value": "`rotate(${",
    "start": 3419,
    "end": 3429,
    "range": [
      3419,
      3429
    ]
  },
  {
    "type": "Identifier",
    "value": "interpolatedStyle",
    "start": 3429,
    "end": 3446,
    "range": [
      3429,
      3446
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3446,
    "end": 3447,
    "range": [
      3446,
      3447
    ]
  },
  {
    "type": "Identifier",
    "value": "rotate",
    "start": 3447,
    "end": 3453,
    "range": [
      3447,
      3453
    ]
  },
  {
    "type": "Template",
    "value": "}dig)`",
    "start": 3453,
    "end": 3459,
    "range": [
      3453,
      3459
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3459,
    "end": 3460,
    "range": [
      3459,
      3460
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3460,
    "end": 3461,
    "range": [
      3460,
      3461
    ]
  }
]
```
