__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 414,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 71,
        "name": "NMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 72,
        "end": 111,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 76,
            "end": 82,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 76,
              "end": 77,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 82,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 79,
                "end": 82,
                "literal": {
                  "type": "Literal",
                  "start": 79,
                  "end": 82,
                  "value": "A",
                  "raw": "'A'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 85,
            "end": 91,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 85,
              "end": 86,
              "value": 2,
              "raw": "2"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 91,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 88,
                "end": 91,
                "literal": {
                  "type": "Literal",
                  "start": 88,
                  "end": 91,
                  "value": "B",
                  "raw": "'B'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 94,
            "end": 100,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 94,
              "end": 95,
              "value": 3,
              "raw": "3"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 100,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 97,
                "end": 100,
                "literal": {
                  "type": "Literal",
                  "start": 97,
                  "end": 100,
                  "value": "C",
                  "raw": "'C'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 103,
            "end": 109,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 103,
              "end": 104,
              "value": 4,
              "raw": "4"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 109,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 106,
                "end": 109,
                "literal": {
                  "type": "Literal",
                  "start": 106,
                  "end": 109,
                  "value": "D",
                  "raw": "'D'"
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
      "start": 113,
      "end": 173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 173,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 173,
            "name": "g",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 173,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 130,
                "end": 173,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 130,
                  "end": 151,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 131,
                      "end": 150,
                      "name": {
                        "type": "Identifier",
                        "start": 131,
                        "end": 132,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSUnionType",
                        "start": 141,
                        "end": 150,
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "start": 141,
                            "end": 142,
                            "literal": {
                              "type": "Literal",
                              "start": 141,
                              "end": 142,
                              "value": 1,
                              "raw": "1"
                            }
                          },
                          {
                            "type": "TSLiteralType",
                            "start": 145,
                            "end": 146,
                            "literal": {
                              "type": "Literal",
                              "start": 145,
                              "end": 146,
                              "value": 2,
                              "raw": "2"
                            }
                          },
                          {
                            "type": "TSLiteralType",
                            "start": 149,
                            "end": 150,
                            "literal": {
                              "type": "Literal",
                              "start": 149,
                              "end": 150,
                              "value": 3,
                              "raw": "3"
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
                    "start": 152,
                    "end": 161,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 153,
                      "end": 161,
                      "typeAnnotation": {
                        "type": "TSTemplateLiteralType",
                        "start": 155,
                        "end": 161,
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 155,
                            "end": 158,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 159,
                            "end": 161,
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
                            "start": 158,
                            "end": 159,
                            "typeName": {
                              "type": "Identifier",
                              "start": 158,
                              "end": 159,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 163,
                  "end": 173,
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 166,
                    "end": 173,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 166,
                      "end": 170,
                      "typeName": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 170,
                        "name": "NMap",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 171,
                      "end": 172,
                      "typeName": {
                        "type": "Identifier",
                        "start": 171,
                        "end": 172,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 175,
      "end": 228,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 182,
        "name": "G1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 185,
        "end": 228,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 185,
          "end": 206,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 186,
              "end": 205,
              "name": {
                "type": "Identifier",
                "start": 186,
                "end": 187,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSUnionType",
                "start": 196,
                "end": 205,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 196,
                    "end": 197,
                    "literal": {
                      "type": "Literal",
                      "start": 196,
                      "end": 197,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 200,
                    "end": 201,
                    "literal": {
                      "type": "Literal",
                      "start": 200,
                      "end": 201,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 204,
                    "end": 205,
                    "literal": {
                      "type": "Literal",
                      "start": 204,
                      "end": 205,
                      "value": 3,
                      "raw": "3"
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
            "start": 207,
            "end": 216,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 208,
              "end": 216,
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "start": 210,
                "end": 216,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 210,
                    "end": 213,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 214,
                    "end": 216,
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
                    "start": 213,
                    "end": 214,
                    "typeName": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 214,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 218,
          "end": 228,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "start": 221,
            "end": 228,
            "objectType": {
              "type": "TSTypeReference",
              "start": 221,
              "end": 225,
              "typeName": {
                "type": "Identifier",
                "start": 221,
                "end": 225,
                "name": "NMap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 226,
              "end": 227,
              "typeName": {
                "type": "Identifier",
                "start": 226,
                "end": 227,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "start": 229,
      "end": 246,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 241,
            "name": "g1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 237,
              "end": 241,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 239,
                "end": 241,
                "typeName": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 241,
                  "name": "G1",
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
            "type": "Identifier",
            "start": 244,
            "end": 245,
            "name": "g",
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
      "type": "TSTypeAliasDeclaration",
      "start": 254,
      "end": 311,
      "id": {
        "type": "Identifier",
        "start": 259,
        "end": 261,
        "name": "G2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 264,
        "end": 311,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 264,
          "end": 289,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 265,
              "end": 288,
              "name": {
                "type": "Identifier",
                "start": 265,
                "end": 266,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSUnionType",
                "start": 275,
                "end": 288,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 275,
                    "end": 276,
                    "literal": {
                      "type": "Literal",
                      "start": 275,
                      "end": 276,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 279,
                    "end": 280,
                    "literal": {
                      "type": "Literal",
                      "start": 279,
                      "end": 280,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 283,
                    "end": 284,
                    "literal": {
                      "type": "Literal",
                      "start": 283,
                      "end": 284,
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 287,
                    "end": 288,
                    "literal": {
                      "type": "Literal",
                      "start": 287,
                      "end": 288,
                      "value": 4,
                      "raw": "4"
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
            "start": 290,
            "end": 299,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 291,
              "end": 299,
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "start": 293,
                "end": 299,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 293,
                    "end": 296,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 297,
                    "end": 299,
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
                    "start": 296,
                    "end": 297,
                    "typeName": {
                      "type": "Identifier",
                      "start": 296,
                      "end": 297,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 301,
          "end": 311,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "start": 304,
            "end": 311,
            "objectType": {
              "type": "TSTypeReference",
              "start": 304,
              "end": 308,
              "typeName": {
                "type": "Identifier",
                "start": 304,
                "end": 308,
                "name": "NMap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 309,
              "end": 310,
              "typeName": {
                "type": "Identifier",
                "start": 309,
                "end": 310,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "start": 312,
      "end": 329,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 318,
          "end": 328,
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 324,
            "name": "g2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 320,
              "end": 324,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 322,
                "end": 324,
                "typeName": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 324,
                  "name": "G2",
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
            "type": "Identifier",
            "start": 327,
            "end": 328,
            "name": "g",
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
      "type": "TSTypeAliasDeclaration",
      "start": 340,
      "end": 389,
      "id": {
        "type": "Identifier",
        "start": 345,
        "end": 347,
        "name": "G3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 350,
        "end": 389,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 350,
          "end": 367,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 351,
              "end": 366,
              "name": {
                "type": "Identifier",
                "start": 351,
                "end": 352,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSUnionType",
                "start": 361,
                "end": 366,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 361,
                    "end": 362,
                    "literal": {
                      "type": "Literal",
                      "start": 361,
                      "end": 362,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 365,
                    "end": 366,
                    "literal": {
                      "type": "Literal",
                      "start": 365,
                      "end": 366,
                      "value": 2,
                      "raw": "2"
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
            "start": 368,
            "end": 377,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 369,
              "end": 377,
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "start": 371,
                "end": 377,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 371,
                    "end": 374,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 375,
                    "end": 377,
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
                    "start": 374,
                    "end": 375,
                    "typeName": {
                      "type": "Identifier",
                      "start": 374,
                      "end": 375,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 379,
          "end": 389,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "start": 382,
            "end": 389,
            "objectType": {
              "type": "TSTypeReference",
              "start": 382,
              "end": 386,
              "typeName": {
                "type": "Identifier",
                "start": 382,
                "end": 386,
                "name": "NMap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 387,
              "end": 388,
              "typeName": {
                "type": "Identifier",
                "start": 387,
                "end": 388,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "start": 390,
      "end": 407,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 406,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 402,
            "name": "g3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 398,
              "end": 402,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 400,
                "end": 402,
                "typeName": {
                  "type": "Identifier",
                  "start": 400,
                  "end": 402,
                  "name": "G3",
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
            "type": "Identifier",
            "start": 405,
            "end": 406,
            "name": "g",
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
