__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 447,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 56,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 73,
        "decorators": [],
        "name": "TypeMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 74,
        "end": 97,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 78,
            "end": 85,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 84,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 81,
                "end": 84,
                "literal": {
                  "type": "Literal",
                  "start": 81,
                  "end": 84,
                  "value": "A",
                  "raw": "\"A\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 88,
            "end": 95,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 94,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 91,
                "end": 94,
                "literal": {
                  "type": "Literal",
                  "start": 91,
                  "end": 94,
                  "value": "B",
                  "raw": "\"B\""
                }
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
      "start": 98,
      "end": 165,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 164,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 164,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 164,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 115,
                "end": 164,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 115,
                  "end": 137,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 116,
                      "end": 136,
                      "name": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 118,
                        "decorators": [],
                        "name": "T0",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSUnionType",
                        "start": 127,
                        "end": 136,
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "start": 127,
                            "end": 130,
                            "literal": {
                              "type": "Literal",
                              "start": 127,
                              "end": 130,
                              "value": "a",
                              "raw": "\"a\""
                            }
                          },
                          {
                            "type": "TSLiteralType",
                            "start": 133,
                            "end": 136,
                            "literal": {
                              "type": "Literal",
                              "start": 133,
                              "end": 136,
                              "value": "b",
                              "raw": "\"b\""
                            }
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
                    "start": 138,
                    "end": 148,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 139,
                      "end": 148,
                      "typeAnnotation": {
                        "type": "TSTemplateLiteralType",
                        "start": 141,
                        "end": 148,
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 141,
                            "end": 144,
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 146,
                            "end": 148,
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true
                          }
                        ],
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 144,
                            "end": 146,
                            "typeName": {
                              "type": "Identifier",
                              "start": 144,
                              "end": 146,
                              "decorators": [],
                              "name": "T0",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 150,
                  "end": 164,
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 153,
                    "end": 164,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 153,
                      "end": 160,
                      "typeName": {
                        "type": "Identifier",
                        "start": 153,
                        "end": 160,
                        "decorators": [],
                        "name": "TypeMap",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 161,
                      "end": 163,
                      "typeName": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 163,
                        "decorators": [],
                        "name": "T0",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
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
      "type": "TSTypeAliasDeclaration",
      "start": 166,
      "end": 226,
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 173,
        "decorators": [],
        "name": "F1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 176,
        "end": 225,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 176,
          "end": 198,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 177,
              "end": 197,
              "name": {
                "type": "Identifier",
                "start": 177,
                "end": 179,
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSUnionType",
                "start": 188,
                "end": 197,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 188,
                    "end": 191,
                    "literal": {
                      "type": "Literal",
                      "start": 188,
                      "end": 191,
                      "value": "a",
                      "raw": "\"a\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 194,
                    "end": 197,
                    "literal": {
                      "type": "Literal",
                      "start": 194,
                      "end": 197,
                      "value": "b",
                      "raw": "\"b\""
                    }
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
            "start": 199,
            "end": 209,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 200,
              "end": 209,
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "start": 202,
                "end": 209,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 202,
                    "end": 205,
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 207,
                    "end": 209,
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 205,
                    "end": 207,
                    "typeName": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 207,
                      "decorators": [],
                      "name": "T1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 211,
          "end": 225,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "start": 214,
            "end": 225,
            "objectType": {
              "type": "TSTypeReference",
              "start": 214,
              "end": 221,
              "typeName": {
                "type": "Identifier",
                "start": 214,
                "end": 221,
                "decorators": [],
                "name": "TypeMap",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 222,
              "end": 224,
              "typeName": {
                "type": "Identifier",
                "start": 222,
                "end": 224,
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 227,
      "end": 244,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 233,
          "end": 243,
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 239,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 235,
              "end": 239,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 237,
                "end": 239,
                "typeName": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 239,
                  "decorators": [],
                  "name": "F1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 242,
            "end": 243,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 246,
      "end": 310,
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 253,
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 256,
        "end": 310,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 256,
          "end": 278,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 257,
              "end": 277,
              "name": {
                "type": "Identifier",
                "start": 257,
                "end": 259,
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSUnionType",
                "start": 268,
                "end": 277,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 268,
                    "end": 271,
                    "literal": {
                      "type": "Literal",
                      "start": 268,
                      "end": 271,
                      "value": "a",
                      "raw": "'a'"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 274,
                    "end": 277,
                    "literal": {
                      "type": "Literal",
                      "start": 274,
                      "end": 277,
                      "value": "b",
                      "raw": "'b'"
                    }
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
            "start": 279,
            "end": 289,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 280,
              "end": 289,
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "start": 282,
                "end": 289,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 282,
                    "end": 285,
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 287,
                    "end": 289,
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 285,
                    "end": 287,
                    "typeName": {
                      "type": "Identifier",
                      "start": 285,
                      "end": 287,
                      "decorators": [],
                      "name": "T2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 291,
          "end": 310,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "start": 294,
            "end": 310,
            "objectType": {
              "type": "TSTypeReference",
              "start": 294,
              "end": 301,
              "typeName": {
                "type": "Identifier",
                "start": 294,
                "end": 301,
                "decorators": [],
                "name": "TypeMap",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTemplateLiteralType",
              "start": 302,
              "end": 309,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 302,
                  "end": 305,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 307,
                  "end": 309,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 305,
                  "end": 307,
                  "typeName": {
                    "type": "Identifier",
                    "start": 305,
                    "end": 307,
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 311,
      "end": 327,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 317,
          "end": 327,
          "id": {
            "type": "Identifier",
            "start": 317,
            "end": 323,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 319,
              "end": 323,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 321,
                "end": 323,
                "typeName": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 323,
                  "decorators": [],
                  "name": "F2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 326,
            "end": 327,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 329,
      "end": 447,
      "id": {
        "type": "Identifier",
        "start": 338,
        "end": 340,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 340,
        "end": 362,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 341,
            "end": 361,
            "name": {
              "type": "Identifier",
              "start": 341,
              "end": 343,
              "decorators": [],
              "name": "T3",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 352,
              "end": 361,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 352,
                  "end": 355,
                  "literal": {
                    "type": "Literal",
                    "start": 352,
                    "end": 355,
                    "value": "a",
                    "raw": "\"a\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 358,
                  "end": 361,
                  "literal": {
                    "type": "Literal",
                    "start": 358,
                    "end": 361,
                    "value": "b",
                    "raw": "\"b\""
                  }
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
          "start": 363,
          "end": 368,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 364,
            "end": 368,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 366,
              "end": 368,
              "typeName": {
                "type": "Identifier",
                "start": 366,
                "end": 368,
                "decorators": [],
                "name": "T3",
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
        "start": 370,
        "end": 447,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 376,
            "end": 400,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 382,
                "end": 400,
                "id": {
                  "type": "Identifier",
                  "start": 382,
                  "end": 396,
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 387,
                    "end": 396,
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "start": 389,
                      "end": 396,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 389,
                          "end": 392,
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 394,
                          "end": 396,
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true
                        }
                      ],
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 392,
                          "end": 394,
                          "typeName": {
                            "type": "Identifier",
                            "start": 392,
                            "end": 394,
                            "decorators": [],
                            "name": "T3",
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
                  "type": "Identifier",
                  "start": 399,
                  "end": 400,
                  "decorators": [],
                  "name": "x",
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
            "start": 409,
            "end": 441,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 415,
                "end": 440,
                "id": {
                  "type": "Identifier",
                  "start": 415,
                  "end": 424,
                  "decorators": [],
                  "name": "test2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 420,
                    "end": 424,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 422,
                      "end": 424,
                      "typeName": {
                        "type": "Identifier",
                        "start": 422,
                        "end": 424,
                        "decorators": [],
                        "name": "T3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 427,
                  "end": 440,
                  "expression": {
                    "type": "Literal",
                    "start": 427,
                    "end": 429,
                    "value": "",
                    "raw": "\"\""
                  },
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "start": 433,
                    "end": 440,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 433,
                        "end": 436,
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 438,
                        "end": 440,
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true
                      }
                    ],
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 436,
                        "end": 438,
                        "typeName": {
                          "type": "Identifier",
                          "start": 436,
                          "end": 438,
                          "decorators": [],
                          "name": "T3",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
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
