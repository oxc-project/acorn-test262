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
