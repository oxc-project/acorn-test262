__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3461,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 370,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "ft1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 30,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 29,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 23,
              "end": 29
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
          "start": 31,
          "end": 40,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 32,
            "end": 40,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 34,
              "end": 40
            }
          }
        },
        {
          "type": "Identifier",
          "start": 42,
          "end": 51,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 43,
            "end": 51,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 45,
              "end": 51
            }
          }
        },
        {
          "type": "Identifier",
          "start": 53,
          "end": 77,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 54,
            "end": 77,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 56,
              "end": 77,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 56,
                  "end": 61,
                  "literal": {
                    "type": "Literal",
                    "start": 56,
                    "end": 61,
                    "value": "foo",
                    "raw": "'foo'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 64,
                  "end": 69,
                  "literal": {
                    "type": "Literal",
                    "start": 64,
                    "end": 69,
                    "value": "bar",
                    "raw": "'bar'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 72,
                  "end": 77,
                  "literal": {
                    "type": "Literal",
                    "start": 72,
                    "end": 77,
                    "value": "baz",
                    "raw": "'baz'"
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 79,
          "end": 83,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 80,
            "end": 83,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 82,
              "end": 83,
              "typeName": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
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
        "start": 85,
        "end": 370,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 91,
            "end": 112,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 97,
                "end": 111,
                "id": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 99,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "TemplateLiteral",
                  "start": 102,
                  "end": 111,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 102,
                      "end": 108,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 109,
                      "end": 111,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 108,
                      "end": 109,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 117,
            "end": 138,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 123,
                "end": 137,
                "id": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 125,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "TemplateLiteral",
                  "start": 128,
                  "end": 137,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 128,
                      "end": 134,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 135,
                      "end": 137,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 134,
                      "end": 135,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 143,
            "end": 164,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 149,
                "end": 163,
                "id": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 151,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "TemplateLiteral",
                  "start": 154,
                  "end": 163,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 154,
                      "end": 160,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 161,
                      "end": 163,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 160,
                      "end": 161,
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 169,
            "end": 190,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 175,
                "end": 189,
                "id": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 177,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "TemplateLiteral",
                  "start": 180,
                  "end": 189,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 180,
                      "end": 186,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 187,
                      "end": 189,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 186,
                      "end": 187,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 195,
            "end": 232,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 201,
                "end": 231,
                "id": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 219,
                  "decorators": [],
                  "name": "d1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 203,
                    "end": 219,
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "start": 205,
                      "end": 219,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 205,
                          "end": 211,
                          "value": {
                            "cooked": "abc",
                            "raw": "abc"
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 217,
                          "end": 219,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "tail": true
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 211,
                          "end": 217
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "TemplateLiteral",
                  "start": 222,
                  "end": 231,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 222,
                      "end": 228,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 229,
                      "end": 231,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 228,
                      "end": 229,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 237,
            "end": 274,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 243,
                "end": 273,
                "id": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 261,
                  "decorators": [],
                  "name": "d2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 245,
                    "end": 261,
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "start": 247,
                      "end": 261,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 247,
                          "end": 253,
                          "value": {
                            "cooked": "abc",
                            "raw": "abc"
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 259,
                          "end": 261,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "tail": true
                        }
                      ],
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 253,
                          "end": 259
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "TemplateLiteral",
                  "start": 264,
                  "end": 273,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 264,
                      "end": 270,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 271,
                      "end": 273,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 270,
                      "end": 271,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 279,
            "end": 331,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 285,
                "end": 330,
                "id": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 318,
                  "decorators": [],
                  "name": "d3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 287,
                    "end": 318,
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "start": 289,
                      "end": 318,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 289,
                          "end": 295,
                          "value": {
                            "cooked": "abc",
                            "raw": "abc"
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 316,
                          "end": 318,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "tail": true
                        }
                      ],
                      "types": [
                        {
                          "type": "TSUnionType",
                          "start": 295,
                          "end": 316,
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "start": 295,
                              "end": 300,
                              "literal": {
                                "type": "Literal",
                                "start": 295,
                                "end": 300,
                                "value": "foo",
                                "raw": "'foo'"
                              }
                            },
                            {
                              "type": "TSLiteralType",
                              "start": 303,
                              "end": 308,
                              "literal": {
                                "type": "Literal",
                                "start": 303,
                                "end": 308,
                                "value": "bar",
                                "raw": "'bar'"
                              }
                            },
                            {
                              "type": "TSLiteralType",
                              "start": 311,
                              "end": 316,
                              "literal": {
                                "type": "Literal",
                                "start": 311,
                                "end": 316,
                                "value": "baz",
                                "raw": "'baz'"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "TemplateLiteral",
                  "start": 321,
                  "end": 330,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 321,
                      "end": 327,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 328,
                      "end": 330,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 327,
                      "end": 328,
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 336,
            "end": 368,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 342,
                "end": 367,
                "id": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 355,
                  "decorators": [],
                  "name": "d4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 344,
                    "end": 355,
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "start": 346,
                      "end": 355,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 346,
                          "end": 352,
                          "value": {
                            "cooked": "abc",
                            "raw": "abc"
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 353,
                          "end": 355,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "tail": true
                        }
                      ],
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 352,
                          "end": 353,
                          "typeName": {
                            "type": "Identifier",
                            "start": 352,
                            "end": 353,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "TemplateLiteral",
                  "start": 358,
                  "end": 367,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 358,
                      "end": 364,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 365,
                      "end": 367,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 364,
                      "end": 365,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
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
      "start": 372,
      "end": 421,
      "id": {
        "type": "Identifier",
        "start": 381,
        "end": 384,
        "decorators": [],
        "name": "ft2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 385,
          "end": 394,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 386,
            "end": 394,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 388,
              "end": 394
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 396,
        "end": 421,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 402,
            "end": 419,
            "argument": {
              "type": "TemplateLiteral",
              "start": 409,
              "end": 418,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 409,
                  "end": 415,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 416,
                  "end": 418,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 415,
                  "end": 416,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 423,
      "end": 777,
      "id": {
        "type": "Identifier",
        "start": 432,
        "end": 436,
        "decorators": [],
        "name": "ft10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 437,
          "end": 446,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 438,
            "end": 446,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 440,
              "end": 446
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 448,
        "end": 777,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 454,
            "end": 475,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 460,
                "end": 474,
                "id": {
                  "type": "Identifier",
                  "start": 460,
                  "end": 462,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "TemplateLiteral",
                  "start": 465,
                  "end": 474,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 465,
                      "end": 471,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 472,
                      "end": 474,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 471,
                      "end": 472,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 496,
            "end": 508,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 500,
                "end": 507,
                "id": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 502,
                  "decorators": [],
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 505,
                  "end": 507,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 529,
            "end": 543,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 535,
                "end": 542,
                "id": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 537,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 540,
                  "end": 542,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 564,
            "end": 576,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 568,
                "end": 575,
                "id": {
                  "type": "Identifier",
                  "start": 568,
                  "end": 570,
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 573,
                  "end": 575,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 597,
            "end": 634,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 603,
                "end": 633,
                "id": {
                  "type": "Identifier",
                  "start": 603,
                  "end": 621,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 605,
                    "end": 621,
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "start": 607,
                      "end": 621,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 607,
                          "end": 613,
                          "value": {
                            "cooked": "abc",
                            "raw": "abc"
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 619,
                          "end": 621,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "tail": true
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 613,
                          "end": 619
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "TemplateLiteral",
                  "start": 624,
                  "end": 633,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 624,
                      "end": 630,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 631,
                      "end": 633,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 630,
                      "end": 631,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 639,
            "end": 651,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 643,
                "end": 650,
                "id": {
                  "type": "Identifier",
                  "start": 643,
                  "end": 645,
                  "decorators": [],
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 648,
                  "end": 650,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 680,
            "end": 710,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 686,
                "end": 709,
                "id": {
                  "type": "Identifier",
                  "start": 686,
                  "end": 704,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 688,
                    "end": 704,
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "start": 690,
                      "end": 704,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 690,
                          "end": 696,
                          "value": {
                            "cooked": "abc",
                            "raw": "abc"
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 702,
                          "end": 704,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "tail": true
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 696,
                          "end": 702
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 707,
                  "end": 709,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 739,
            "end": 751,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 743,
                "end": 750,
                "id": {
                  "type": "Identifier",
                  "start": 743,
                  "end": 745,
                  "decorators": [],
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 748,
                  "end": 750,
                  "decorators": [],
                  "name": "c4",
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 779,
      "end": 1385,
      "id": {
        "type": "Identifier",
        "start": 788,
        "end": 792,
        "decorators": [],
        "name": "ft11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 793,
          "end": 802,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 794,
            "end": 802,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 796,
              "end": 802
            }
          }
        },
        {
          "type": "Identifier",
          "start": 804,
          "end": 817,
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 808,
            "end": 817,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 810,
              "end": 817
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 819,
        "end": 1385,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 825,
            "end": 865,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 831,
                "end": 864,
                "id": {
                  "type": "Identifier",
                  "start": 831,
                  "end": 833,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 836,
                  "end": 864,
                  "test": {
                    "type": "Identifier",
                    "start": 836,
                    "end": 840,
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "TemplateLiteral",
                    "start": 843,
                    "end": 852,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 843,
                        "end": 849,
                        "value": {
                          "cooked": "foo",
                          "raw": "foo"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 850,
                        "end": 852,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "tail": true
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 849,
                        "end": 850,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "TemplateLiteral",
                    "start": 855,
                    "end": 864,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 855,
                        "end": 861,
                        "value": {
                          "cooked": "bar",
                          "raw": "bar"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 862,
                        "end": 864,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "tail": true
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 861,
                        "end": 862,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ]
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 881,
            "end": 928,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 887,
                "end": 927,
                "id": {
                  "type": "Identifier",
                  "start": 887,
                  "end": 922,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 889,
                    "end": 922,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 891,
                      "end": 922,
                      "types": [
                        {
                          "type": "TSTemplateLiteralType",
                          "start": 891,
                          "end": 905,
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 891,
                              "end": 897,
                              "value": {
                                "cooked": "foo",
                                "raw": "foo"
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 903,
                              "end": 905,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              },
                              "tail": true
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 897,
                              "end": 903
                            }
                          ]
                        },
                        {
                          "type": "TSTemplateLiteralType",
                          "start": 908,
                          "end": 922,
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 908,
                              "end": 914,
                              "value": {
                                "cooked": "bar",
                                "raw": "bar"
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 920,
                              "end": 922,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              },
                              "tail": true
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 914,
                              "end": 920
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 925,
                  "end": 927,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 969,
            "end": 995,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 975,
                "end": 994,
                "id": {
                  "type": "Identifier",
                  "start": 975,
                  "end": 977,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 980,
                  "end": 994,
                  "test": {
                    "type": "Identifier",
                    "start": 980,
                    "end": 984,
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 987,
                    "end": 989,
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 992,
                    "end": 994,
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1011,
            "end": 1044,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1017,
                "end": 1043,
                "id": {
                  "type": "Identifier",
                  "start": 1017,
                  "end": 1019,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1022,
                  "end": 1043,
                  "test": {
                    "type": "Identifier",
                    "start": 1022,
                    "end": 1026,
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1029,
                    "end": 1031,
                    "decorators": [],
                    "name": "c3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "TemplateLiteral",
                    "start": 1034,
                    "end": 1043,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 1034,
                        "end": 1040,
                        "value": {
                          "cooked": "baz",
                          "raw": "baz"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 1041,
                        "end": 1043,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "tail": true
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 1040,
                        "end": 1041,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ]
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1060,
            "end": 1124,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1066,
                "end": 1123,
                "id": {
                  "type": "Identifier",
                  "start": 1066,
                  "end": 1118,
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1068,
                    "end": 1118,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1070,
                      "end": 1118,
                      "types": [
                        {
                          "type": "TSTemplateLiteralType",
                          "start": 1070,
                          "end": 1084,
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 1070,
                              "end": 1076,
                              "value": {
                                "cooked": "foo",
                                "raw": "foo"
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 1082,
                              "end": 1084,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              },
                              "tail": true
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 1076,
                              "end": 1082
                            }
                          ]
                        },
                        {
                          "type": "TSTemplateLiteralType",
                          "start": 1087,
                          "end": 1101,
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 1087,
                              "end": 1093,
                              "value": {
                                "cooked": "bar",
                                "raw": "bar"
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 1099,
                              "end": 1101,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              },
                              "tail": true
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 1093,
                              "end": 1099
                            }
                          ]
                        },
                        {
                          "type": "TSTemplateLiteralType",
                          "start": 1104,
                          "end": 1118,
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 1104,
                              "end": 1110,
                              "value": {
                                "cooked": "baz",
                                "raw": "baz"
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 1116,
                              "end": 1118,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              },
                              "tail": true
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 1110,
                              "end": 1116
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1121,
                  "end": 1123,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1181,
            "end": 1193,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1185,
                "end": 1192,
                "id": {
                  "type": "Identifier",
                  "start": 1185,
                  "end": 1187,
                  "decorators": [],
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1190,
                  "end": 1192,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1209,
            "end": 1221,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1213,
                "end": 1220,
                "id": {
                  "type": "Identifier",
                  "start": 1213,
                  "end": 1215,
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1218,
                  "end": 1220,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1262,
            "end": 1274,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1266,
                "end": 1273,
                "id": {
                  "type": "Identifier",
                  "start": 1266,
                  "end": 1268,
                  "decorators": [],
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1271,
                  "end": 1273,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1290,
            "end": 1302,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1294,
                "end": 1301,
                "id": {
                  "type": "Identifier",
                  "start": 1294,
                  "end": 1296,
                  "decorators": [],
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1299,
                  "end": 1301,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1318,
            "end": 1330,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1322,
                "end": 1329,
                "id": {
                  "type": "Identifier",
                  "start": 1322,
                  "end": 1324,
                  "decorators": [],
                  "name": "v5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1327,
                  "end": 1329,
                  "decorators": [],
                  "name": "c5",
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1387,
      "end": 1689,
      "id": {
        "type": "Identifier",
        "start": 1396,
        "end": 1400,
        "decorators": [],
        "name": "ft12",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1401,
          "end": 1410,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1402,
            "end": 1410,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1404,
              "end": 1410
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1412,
        "end": 1689,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1418,
            "end": 1439,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1424,
                "end": 1438,
                "id": {
                  "type": "Identifier",
                  "start": 1424,
                  "end": 1426,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "TemplateLiteral",
                  "start": 1429,
                  "end": 1438,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 1429,
                      "end": 1435,
                      "value": {
                        "cooked": "foo",
                        "raw": "foo"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 1436,
                      "end": 1438,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 1435,
                      "end": 1436,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1444,
            "end": 1456,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1448,
                "end": 1455,
                "id": {
                  "type": "Identifier",
                  "start": 1448,
                  "end": 1450,
                  "decorators": [],
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1453,
                  "end": 1455,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1461,
            "end": 1498,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1467,
                "end": 1497,
                "id": {
                  "type": "Identifier",
                  "start": 1467,
                  "end": 1485,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1469,
                    "end": 1485,
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "start": 1471,
                      "end": 1485,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 1471,
                          "end": 1477,
                          "value": {
                            "cooked": "foo",
                            "raw": "foo"
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 1483,
                          "end": 1485,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "tail": true
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1477,
                          "end": 1483
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "TemplateLiteral",
                  "start": 1488,
                  "end": 1497,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 1488,
                      "end": 1494,
                      "value": {
                        "cooked": "foo",
                        "raw": "foo"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 1495,
                      "end": 1497,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 1494,
                      "end": 1495,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1503,
            "end": 1515,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1507,
                "end": 1514,
                "id": {
                  "type": "Identifier",
                  "start": 1507,
                  "end": 1509,
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1512,
                  "end": 1514,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1520,
            "end": 1559,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1526,
                "end": 1558,
                "id": {
                  "type": "Identifier",
                  "start": 1526,
                  "end": 1528,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 1531,
                  "end": 1558,
                  "expression": {
                    "type": "TemplateLiteral",
                    "start": 1531,
                    "end": 1540,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 1531,
                        "end": 1537,
                        "value": {
                          "cooked": "foo",
                          "raw": "foo"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 1538,
                        "end": 1540,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "tail": true
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 1537,
                        "end": 1538,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ]
                  },
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "start": 1544,
                    "end": 1558,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 1544,
                        "end": 1550,
                        "value": {
                          "cooked": "foo",
                          "raw": "foo"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 1556,
                        "end": 1558,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "tail": true
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1550,
                        "end": 1556
                      }
                    ]
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1564,
            "end": 1576,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1568,
                "end": 1575,
                "id": {
                  "type": "Identifier",
                  "start": 1568,
                  "end": 1570,
                  "decorators": [],
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1573,
                  "end": 1575,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1581,
            "end": 1618,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1587,
                "end": 1617,
                "id": {
                  "type": "Identifier",
                  "start": 1587,
                  "end": 1589,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "start": 1592,
                  "end": 1617,
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "start": 1593,
                    "end": 1607,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 1593,
                        "end": 1599,
                        "value": {
                          "cooked": "foo",
                          "raw": "foo"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 1605,
                        "end": 1607,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "tail": true
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1599,
                        "end": 1605
                      }
                    ]
                  },
                  "expression": {
                    "type": "TemplateLiteral",
                    "start": 1608,
                    "end": 1617,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 1608,
                        "end": 1614,
                        "value": {
                          "cooked": "foo",
                          "raw": "foo"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 1615,
                        "end": 1617,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "tail": true
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 1614,
                        "end": 1615,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ]
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1623,
            "end": 1635,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1627,
                "end": 1634,
                "id": {
                  "type": "Identifier",
                  "start": 1627,
                  "end": 1629,
                  "decorators": [],
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1632,
                  "end": 1634,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1640,
            "end": 1670,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1646,
                "end": 1669,
                "id": {
                  "type": "Identifier",
                  "start": 1646,
                  "end": 1648,
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 1651,
                  "end": 1669,
                  "expression": {
                    "type": "TemplateLiteral",
                    "start": 1651,
                    "end": 1660,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 1651,
                        "end": 1657,
                        "value": {
                          "cooked": "foo",
                          "raw": "foo"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 1658,
                        "end": 1660,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        },
                        "tail": true
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 1657,
                        "end": 1658,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ]
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1664,
                    "end": 1669,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1664,
                      "end": 1669,
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1675,
            "end": 1687,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1679,
                "end": 1686,
                "id": {
                  "type": "Identifier",
                  "start": 1679,
                  "end": 1681,
                  "decorators": [],
                  "name": "v5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1684,
                  "end": 1686,
                  "decorators": [],
                  "name": "c5",
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
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1691,
      "end": 1729,
      "id": {
        "type": "Identifier",
        "start": 1708,
        "end": 1716,
        "decorators": [],
        "name": "widening",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1716,
        "end": 1719,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1717,
            "end": 1718,
            "name": {
              "type": "Identifier",
              "start": 1717,
              "end": 1718,
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
          "start": 1720,
          "end": 1724,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1721,
            "end": 1724,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1723,
              "end": 1724,
              "typeName": {
                "type": "Identifier",
                "start": 1723,
                "end": 1724,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1725,
        "end": 1728,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1727,
          "end": 1728,
          "typeName": {
            "type": "Identifier",
            "start": 1727,
            "end": 1728,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1730,
      "end": 1804,
      "id": {
        "type": "Identifier",
        "start": 1747,
        "end": 1758,
        "decorators": [],
        "name": "nonWidening",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1758,
        "end": 1794,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1759,
            "end": 1793,
            "name": {
              "type": "Identifier",
              "start": 1759,
              "end": 1760,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 1769,
              "end": 1793,
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
              ]
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
          "start": 1795,
          "end": 1799,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1796,
            "end": 1799,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1798,
              "end": 1799,
              "typeName": {
                "type": "Identifier",
                "start": 1798,
                "end": 1799,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1800,
        "end": 1803,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1802,
          "end": 1803,
          "typeName": {
            "type": "Identifier",
            "start": 1802,
            "end": 1803,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1806,
      "end": 2017,
      "id": {
        "type": "Identifier",
        "start": 1815,
        "end": 1819,
        "decorators": [],
        "name": "ft13",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1820,
          "end": 1829,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1821,
            "end": 1829,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1823,
              "end": 1829
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1831,
          "end": 1844,
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1835,
            "end": 1844,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 1837,
              "end": 1844
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1846,
        "end": 2017,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1852,
            "end": 1881,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1856,
                "end": 1880,
                "id": {
                  "type": "Identifier",
                  "start": 1856,
                  "end": 1858,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1861,
                  "end": 1880,
                  "callee": {
                    "type": "Identifier",
                    "start": 1861,
                    "end": 1869,
                    "decorators": [],
                    "name": "widening",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TemplateLiteral",
                      "start": 1870,
                      "end": 1879,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 1870,
                          "end": 1876,
                          "value": {
                            "cooked": "foo",
                            "raw": "foo"
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 1877,
                          "end": 1879,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "tail": true
                        }
                      ],
                      "expressions": [
                        {
                          "type": "Identifier",
                          "start": 1876,
                          "end": 1877,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ]
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
            "start": 1886,
            "end": 1928,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1890,
                "end": 1927,
                "id": {
                  "type": "Identifier",
                  "start": 1890,
                  "end": 1892,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1895,
                  "end": 1927,
                  "callee": {
                    "type": "Identifier",
                    "start": 1895,
                    "end": 1903,
                    "decorators": [],
                    "name": "widening",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ConditionalExpression",
                      "start": 1904,
                      "end": 1926,
                      "test": {
                        "type": "Identifier",
                        "start": 1904,
                        "end": 1908,
                        "decorators": [],
                        "name": "cond",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "consequent": {
                        "type": "Literal",
                        "start": 1911,
                        "end": 1914,
                        "value": "a",
                        "raw": "'a'"
                      },
                      "alternate": {
                        "type": "TemplateLiteral",
                        "start": 1917,
                        "end": 1926,
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 1917,
                            "end": 1923,
                            "value": {
                              "cooked": "foo",
                              "raw": "foo"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 1924,
                            "end": 1926,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            },
                            "tail": true
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "start": 1923,
                            "end": 1924,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ]
                      }
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
            "start": 1933,
            "end": 1965,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1937,
                "end": 1964,
                "id": {
                  "type": "Identifier",
                  "start": 1937,
                  "end": 1939,
                  "decorators": [],
                  "name": "y1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1942,
                  "end": 1964,
                  "callee": {
                    "type": "Identifier",
                    "start": 1942,
                    "end": 1953,
                    "decorators": [],
                    "name": "nonWidening",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TemplateLiteral",
                      "start": 1954,
                      "end": 1963,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 1954,
                          "end": 1960,
                          "value": {
                            "cooked": "foo",
                            "raw": "foo"
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 1961,
                          "end": 1963,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "tail": true
                        }
                      ],
                      "expressions": [
                        {
                          "type": "Identifier",
                          "start": 1960,
                          "end": 1961,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ]
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
            "start": 1970,
            "end": 2015,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1974,
                "end": 2014,
                "id": {
                  "type": "Identifier",
                  "start": 1974,
                  "end": 1976,
                  "decorators": [],
                  "name": "y2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1979,
                  "end": 2014,
                  "callee": {
                    "type": "Identifier",
                    "start": 1979,
                    "end": 1990,
                    "decorators": [],
                    "name": "nonWidening",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ConditionalExpression",
                      "start": 1991,
                      "end": 2013,
                      "test": {
                        "type": "Identifier",
                        "start": 1991,
                        "end": 1995,
                        "decorators": [],
                        "name": "cond",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "consequent": {
                        "type": "Literal",
                        "start": 1998,
                        "end": 2001,
                        "value": "a",
                        "raw": "'a'"
                      },
                      "alternate": {
                        "type": "TemplateLiteral",
                        "start": 2004,
                        "end": 2013,
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 2004,
                            "end": 2010,
                            "value": {
                              "cooked": "foo",
                              "raw": "foo"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 2011,
                            "end": 2013,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            },
                            "tail": true
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "start": 2010,
                            "end": 2011,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ]
                      }
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
      "type": "TSTypeAliasDeclaration",
      "start": 2019,
      "end": 2052,
      "id": {
        "type": "Identifier",
        "start": 2024,
        "end": 2026,
        "decorators": [],
        "name": "T0",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2029,
        "end": 2051,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 2029,
            "end": 2035
          },
          {
            "type": "TSTemplateLiteralType",
            "start": 2038,
            "end": 2051,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 2038,
                "end": 2041,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 2047,
                "end": 2051,
                "value": {
                  "cooked": "px",
                  "raw": "px"
                },
                "tail": true
              }
            ],
            "types": [
              {
                "type": "TSNumberKeyword",
                "start": 2041,
                "end": 2047
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2054,
      "end": 2218,
      "id": {
        "type": "Identifier",
        "start": 2063,
        "end": 2067,
        "decorators": [],
        "name": "ft14",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2068,
          "end": 2085,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2069,
            "end": 2085,
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "start": 2071,
              "end": 2085,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 2071,
                  "end": 2077,
                  "value": {
                    "cooked": "foo",
                    "raw": "foo"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 2083,
                  "end": 2085,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2077,
                  "end": 2083
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2087,
        "end": 2218,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2093,
            "end": 2112,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2097,
                "end": 2111,
                "id": {
                  "type": "Identifier",
                  "start": 2097,
                  "end": 2107,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2099,
                    "end": 2107,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2101,
                      "end": 2107
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 2110,
                  "end": 2111,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2117,
            "end": 2136,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2121,
                "end": 2135,
                "id": {
                  "type": "Identifier",
                  "start": 2121,
                  "end": 2131,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2123,
                    "end": 2131,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2125,
                      "end": 2131,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2125,
                        "end": 2131,
                        "decorators": [],
                        "name": "String",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 2134,
                  "end": 2135,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2141,
            "end": 2160,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2145,
                "end": 2159,
                "id": {
                  "type": "Identifier",
                  "start": 2145,
                  "end": 2155,
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2147,
                    "end": 2155,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2149,
                      "end": 2155,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2149,
                        "end": 2155,
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 2158,
                  "end": 2159,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2165,
            "end": 2180,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2169,
                "end": 2179,
                "id": {
                  "type": "Identifier",
                  "start": 2169,
                  "end": 2175,
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2171,
                    "end": 2175,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 2173,
                      "end": 2175,
                      "members": []
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 2178,
                  "end": 2179,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2185,
            "end": 2216,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2189,
                "end": 2215,
                "id": {
                  "type": "Identifier",
                  "start": 2189,
                  "end": 2211,
                  "decorators": [],
                  "name": "x6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2191,
                    "end": 2211,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 2193,
                      "end": 2211,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 2195,
                          "end": 2209,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2195,
                            "end": 2201,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2201,
                            "end": 2209,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2203,
                              "end": 2209
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 2214,
                  "end": 2215,
                  "decorators": [],
                  "name": "t",
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
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2220,
      "end": 2252,
      "id": {
        "type": "Identifier",
        "start": 2237,
        "end": 2239,
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2239,
        "end": 2242,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2240,
            "end": 2241,
            "name": {
              "type": "Identifier",
              "start": 2240,
              "end": 2241,
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
          "start": 2243,
          "end": 2247,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2244,
            "end": 2247,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2246,
              "end": 2247,
              "typeName": {
                "type": "Identifier",
                "start": 2246,
                "end": 2247,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2248,
        "end": 2251,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2250,
          "end": 2251,
          "typeName": {
            "type": "Identifier",
            "start": 2250,
            "end": 2251,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2253,
      "end": 2300,
      "id": {
        "type": "Identifier",
        "start": 2270,
        "end": 2272,
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2272,
        "end": 2290,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2273,
            "end": 2289,
            "name": {
              "type": "Identifier",
              "start": 2273,
              "end": 2274,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2283,
              "end": 2289
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
          "start": 2291,
          "end": 2295,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2292,
            "end": 2295,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2294,
              "end": 2295,
              "typeName": {
                "type": "Identifier",
                "start": 2294,
                "end": 2295,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2296,
        "end": 2299,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2298,
          "end": 2299,
          "typeName": {
            "type": "Identifier",
            "start": 2298,
            "end": 2299,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2302,
      "end": 2419,
      "id": {
        "type": "Identifier",
        "start": 2311,
        "end": 2315,
        "decorators": [],
        "name": "ft20",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2316,
          "end": 2325,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2317,
            "end": 2325,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2319,
              "end": 2325
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2327,
        "end": 2419,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2333,
            "end": 2357,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2337,
                "end": 2356,
                "id": {
                  "type": "Identifier",
                  "start": 2337,
                  "end": 2339,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2342,
                  "end": 2356,
                  "callee": {
                    "type": "Identifier",
                    "start": 2342,
                    "end": 2344,
                    "decorators": [],
                    "name": "g1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TemplateLiteral",
                      "start": 2345,
                      "end": 2355,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 2345,
                          "end": 2352,
                          "value": {
                            "cooked": "xyz-",
                            "raw": "xyz-"
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 2353,
                          "end": 2355,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "tail": true
                        }
                      ],
                      "expressions": [
                        {
                          "type": "Identifier",
                          "start": 2352,
                          "end": 2353,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ]
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
            "start": 2373,
            "end": 2397,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2377,
                "end": 2396,
                "id": {
                  "type": "Identifier",
                  "start": 2377,
                  "end": 2379,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2382,
                  "end": 2396,
                  "callee": {
                    "type": "Identifier",
                    "start": 2382,
                    "end": 2384,
                    "decorators": [],
                    "name": "g2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TemplateLiteral",
                      "start": 2385,
                      "end": 2395,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 2385,
                          "end": 2392,
                          "value": {
                            "cooked": "xyz-",
                            "raw": "xyz-"
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 2393,
                          "end": 2395,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          },
                          "tail": true
                        }
                      ],
                      "expressions": [
                        {
                          "type": "Identifier",
                          "start": 2392,
                          "end": 2393,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ]
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
      "type": "TSDeclareFunction",
      "start": 2443,
      "end": 2549,
      "id": {
        "type": "Identifier",
        "start": 2460,
        "end": 2472,
        "decorators": [],
        "name": "takesLiteral",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2472,
        "end": 2490,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2473,
            "end": 2489,
            "name": {
              "type": "Identifier",
              "start": 2473,
              "end": 2474,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2483,
              "end": 2489
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
          "start": 2491,
          "end": 2501,
          "decorators": [],
          "name": "literal",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2498,
            "end": 2501,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2500,
              "end": 2501,
              "typeName": {
                "type": "Identifier",
                "start": 2500,
                "end": 2501,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2502,
        "end": 2548,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 2504,
          "end": 2548,
          "checkType": {
            "type": "TSTypeReference",
            "start": 2504,
            "end": 2505,
            "typeName": {
              "type": "Identifier",
              "start": 2504,
              "end": 2505,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "start": 2514,
            "end": 2534,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 2514,
                "end": 2525,
                "value": {
                  "cooked": "foo.bar.",
                  "raw": "foo.bar."
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 2532,
                "end": 2534,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": true
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "start": 2525,
                "end": 2532,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 2531,
                  "end": 2532,
                  "name": {
                    "type": "Identifier",
                    "start": 2531,
                    "end": 2532,
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            ]
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 2537,
            "end": 2538,
            "typeName": {
              "type": "Identifier",
              "start": 2537,
              "end": 2538,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSUnknownKeyword",
            "start": 2541,
            "end": 2548
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2551,
      "end": 2590,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2557,
          "end": 2589,
          "id": {
            "type": "Identifier",
            "start": 2557,
            "end": 2559,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2562,
            "end": 2589,
            "callee": {
              "type": "Identifier",
              "start": 2562,
              "end": 2574,
              "decorators": [],
              "name": "takesLiteral",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 2575,
                "end": 2588,
                "value": "foo.bar.baz",
                "raw": "\"foo.bar.baz\""
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
      "start": 2600,
      "end": 2626,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2606,
          "end": 2625,
          "id": {
            "type": "Identifier",
            "start": 2606,
            "end": 2609,
            "decorators": [],
            "name": "id2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 2612,
            "end": 2625,
            "value": "foo.bar.baz",
            "raw": "\"foo.bar.baz\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2627,
      "end": 2656,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2633,
          "end": 2655,
          "id": {
            "type": "Identifier",
            "start": 2633,
            "end": 2635,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2638,
            "end": 2655,
            "callee": {
              "type": "Identifier",
              "start": 2638,
              "end": 2650,
              "decorators": [],
              "name": "takesLiteral",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2651,
                "end": 2654,
                "decorators": [],
                "name": "id2",
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
      "start": 2667,
      "end": 2700,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2681,
          "end": 2699,
          "id": {
            "type": "Identifier",
            "start": 2681,
            "end": 2699,
            "decorators": [],
            "name": "someString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2691,
              "end": 2699,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2693,
                "end": 2699
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
      "type": "VariableDeclaration",
      "start": 2701,
      "end": 2750,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2707,
          "end": 2749,
          "id": {
            "type": "Identifier",
            "start": 2707,
            "end": 2709,
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2712,
            "end": 2749,
            "callee": {
              "type": "Identifier",
              "start": 2712,
              "end": 2724,
              "decorators": [],
              "name": "takesLiteral",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TemplateLiteral",
                "start": 2725,
                "end": 2748,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 2725,
                    "end": 2736,
                    "value": {
                      "cooked": "foo.bar.",
                      "raw": "foo.bar."
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 2746,
                    "end": 2748,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "start": 2736,
                    "end": 2746,
                    "decorators": [],
                    "name": "someString",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ]
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
      "start": 2763,
      "end": 2799,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2769,
          "end": 2798,
          "id": {
            "type": "Identifier",
            "start": 2769,
            "end": 2772,
            "decorators": [],
            "name": "id4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 2775,
            "end": 2798,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 2775,
                "end": 2786,
                "value": {
                  "cooked": "foo.bar.",
                  "raw": "foo.bar."
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 2796,
                "end": 2798,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "Identifier",
                "start": 2786,
                "end": 2796,
                "decorators": [],
                "name": "someString",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2800,
      "end": 2829,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2806,
          "end": 2828,
          "id": {
            "type": "Identifier",
            "start": 2806,
            "end": 2808,
            "decorators": [],
            "name": "t4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2811,
            "end": 2828,
            "callee": {
              "type": "Identifier",
              "start": 2811,
              "end": 2823,
              "decorators": [],
              "name": "takesLiteral",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2824,
                "end": 2827,
                "decorators": [],
                "name": "id4",
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
      "start": 2843,
      "end": 2890,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2857,
          "end": 2889,
          "id": {
            "type": "Identifier",
            "start": 2857,
            "end": 2889,
            "decorators": [],
            "name": "someUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2866,
              "end": 2889,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2868,
                "end": 2889,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 2868,
                    "end": 2873,
                    "literal": {
                      "type": "Literal",
                      "start": 2868,
                      "end": 2873,
                      "value": "abc",
                      "raw": "'abc'"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 2876,
                    "end": 2881,
                    "literal": {
                      "type": "Literal",
                      "start": 2876,
                      "end": 2881,
                      "value": "def",
                      "raw": "'def'"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 2884,
                    "end": 2889,
                    "literal": {
                      "type": "Literal",
                      "start": 2884,
                      "end": 2889,
                      "value": "ghi",
                      "raw": "'ghi'"
                    }
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 2891,
      "end": 2939,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2897,
          "end": 2938,
          "id": {
            "type": "Identifier",
            "start": 2897,
            "end": 2899,
            "decorators": [],
            "name": "t5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2902,
            "end": 2938,
            "callee": {
              "type": "Identifier",
              "start": 2902,
              "end": 2914,
              "decorators": [],
              "name": "takesLiteral",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TemplateLiteral",
                "start": 2915,
                "end": 2937,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 2915,
                    "end": 2926,
                    "value": {
                      "cooked": "foo.bar.",
                      "raw": "foo.bar."
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 2935,
                    "end": 2937,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "start": 2926,
                    "end": 2935,
                    "decorators": [],
                    "name": "someUnion",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ]
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
      "start": 2989,
      "end": 3019,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2995,
          "end": 3018,
          "id": {
            "type": "Identifier",
            "start": 2995,
            "end": 3013,
            "decorators": [],
            "name": "pixelValue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3005,
              "end": 3013,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3007,
                "end": 3013
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 3016,
            "end": 3018,
            "value": 22,
            "raw": "22"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3021,
      "end": 3057,
      "id": {
        "type": "Identifier",
        "start": 3026,
        "end": 3040,
        "decorators": [],
        "name": "PixelValueType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 3043,
        "end": 3056,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 3043,
            "end": 3046,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 3052,
            "end": 3056,
            "value": {
              "cooked": "px",
              "raw": "px"
            },
            "tail": true
          }
        ],
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 3046,
            "end": 3052
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3059,
      "end": 3102,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3065,
          "end": 3101,
          "id": {
            "type": "Identifier",
            "start": 3065,
            "end": 3092,
            "decorators": [],
            "name": "pixelString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3076,
              "end": 3092,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3078,
                "end": 3092,
                "typeName": {
                  "type": "Identifier",
                  "start": 3078,
                  "end": 3092,
                  "decorators": [],
                  "name": "PixelValueType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 3095,
            "end": 3101,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 3095,
                "end": 3101,
                "value": {
                  "cooked": "22px",
                  "raw": "22px"
                },
                "tail": true
              }
            ],
            "expressions": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3104,
      "end": 3170,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3110,
          "end": 3169,
          "id": {
            "type": "Identifier",
            "start": 3110,
            "end": 3149,
            "decorators": [],
            "name": "pixelStringWithTemplate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3133,
              "end": 3149,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3135,
                "end": 3149,
                "typeName": {
                  "type": "Identifier",
                  "start": 3135,
                  "end": 3149,
                  "decorators": [],
                  "name": "PixelValueType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 3152,
            "end": 3169,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 3152,
                "end": 3155,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 3165,
                "end": 3169,
                "value": {
                  "cooked": "px",
                  "raw": "px"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "Identifier",
                "start": 3155,
                "end": 3165,
                "decorators": [],
                "name": "pixelValue",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3194,
      "end": 3280,
      "id": {
        "type": "Identifier",
        "start": 3203,
        "end": 3215,
        "decorators": [],
        "name": "getCardTitle",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 3216,
          "end": 3229,
          "decorators": [],
          "name": "title",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3221,
            "end": 3229,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 3223,
              "end": 3229
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3230,
        "end": 3248,
        "typeAnnotation": {
          "type": "TSTemplateLiteralType",
          "start": 3232,
          "end": 3248,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 3232,
              "end": 3240,
              "value": {
                "cooked": "test-",
                "raw": "test-"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 3246,
              "end": 3248,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 3240,
              "end": 3246
            }
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 3249,
        "end": 3280,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 3255,
            "end": 3278,
            "argument": {
              "type": "TemplateLiteral",
              "start": 3262,
              "end": 3277,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 3262,
                  "end": 3270,
                  "value": {
                    "cooked": "test-",
                    "raw": "test-"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 3275,
                  "end": 3277,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 3270,
                  "end": 3275,
                  "decorators": [],
                  "name": "title",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3304,
      "end": 3345,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3310,
          "end": 3344,
          "id": {
            "type": "Identifier",
            "start": 3310,
            "end": 3327,
            "decorators": [],
            "name": "interpolatedStyle",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 3330,
            "end": 3344,
            "properties": [
              {
                "type": "Property",
                "start": 3332,
                "end": 3342,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 3332,
                  "end": 3338,
                  "decorators": [],
                  "name": "rotate",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 3340,
                  "end": 3342,
                  "value": 12,
                  "raw": "12"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3346,
      "end": 3415,
      "id": {
        "type": "Identifier",
        "start": 3355,
        "end": 3357,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 3358,
          "end": 3399,
          "decorators": [],
          "name": "transform",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3367,
            "end": 3399,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3369,
              "end": 3399,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 3369,
                  "end": 3383,
                  "literal": {
                    "type": "Literal",
                    "start": 3369,
                    "end": 3383,
                    "value": "-moz-initial",
                    "raw": "\"-moz-initial\""
                  }
                },
                {
                  "type": "TSIntersectionType",
                  "start": 3387,
                  "end": 3398,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 3387,
                      "end": 3393
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 3396,
                      "end": 3398,
                      "members": []
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3401,
        "end": 3415,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 3403,
            "end": 3413,
            "argument": {
              "type": "Literal",
              "start": 3410,
              "end": 3412,
              "value": 12,
              "raw": "12"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 3416,
      "end": 3461,
      "expression": {
        "type": "CallExpression",
        "start": 3416,
        "end": 3460,
        "callee": {
          "type": "Identifier",
          "start": 3416,
          "end": 3418,
          "decorators": [],
          "name": "C2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "start": 3419,
            "end": 3459,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 3419,
                "end": 3429,
                "value": {
                  "cooked": "rotate(",
                  "raw": "rotate("
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 3453,
                "end": 3459,
                "value": {
                  "cooked": "dig)",
                  "raw": "dig)"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "MemberExpression",
                "start": 3429,
                "end": 3453,
                "object": {
                  "type": "Identifier",
                  "start": 3429,
                  "end": 3446,
                  "decorators": [],
                  "name": "interpolatedStyle",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3447,
                  "end": 3453,
                  "decorators": [],
                  "name": "rotate",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
