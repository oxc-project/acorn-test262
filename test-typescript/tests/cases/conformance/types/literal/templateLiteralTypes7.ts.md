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
            "key": {
              "type": "Literal",
              "start": 76,
              "end": 77,
              "raw": "1",
              "value": 1
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "raw": "'A'",
                  "value": "A"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 85,
            "end": 91,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 85,
              "end": 86,
              "raw": "2",
              "value": 2
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "raw": "'B'",
                  "value": "B"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 94,
            "end": 100,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 94,
              "end": 95,
              "raw": "3",
              "value": 3
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "raw": "'C'",
                  "value": "C"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 103,
            "end": 109,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 103,
              "end": 104,
              "raw": "4",
              "value": 4
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "raw": "'D'",
                  "value": "D"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 71,
        "decorators": [],
        "name": "NMap",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 173,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 173,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 130,
                "end": 173,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 152,
                    "end": 161,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
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
                            "tail": false,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "start": 159,
                            "end": 161,
                            "tail": true,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            }
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
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        ]
                      }
                    }
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
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 171,
                      "end": 172,
                      "typeName": {
                        "type": "Identifier",
                        "start": 171,
                        "end": 172,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 166,
                      "end": 170,
                      "typeName": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 170,
                        "decorators": [],
                        "name": "NMap",
                        "optional": false
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 130,
                  "end": 151,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 131,
                      "end": 150,
                      "const": false,
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
                              "raw": "1",
                              "value": 1
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
                              "raw": "2",
                              "value": 2
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
                              "raw": "3",
                              "value": 3
                            }
                          }
                        ]
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 131,
                        "end": 132,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 175,
      "end": 228,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 182,
        "decorators": [],
        "name": "G1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 185,
        "end": 228,
        "params": [
          {
            "type": "Identifier",
            "start": 207,
            "end": 216,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 214,
                    "end": 216,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              }
            }
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
            "indexType": {
              "type": "TSTypeReference",
              "start": 226,
              "end": 227,
              "typeName": {
                "type": "Identifier",
                "start": 226,
                "end": 227,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 221,
              "end": 225,
              "typeName": {
                "type": "Identifier",
                "start": 221,
                "end": 225,
                "decorators": [],
                "name": "NMap",
                "optional": false
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 185,
          "end": 206,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 186,
              "end": 205,
              "const": false,
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
                      "raw": "1",
                      "value": 1
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
                      "raw": "2",
                      "value": 2
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
                      "raw": "3",
                      "value": 3
                    }
                  }
                ]
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 186,
                "end": 187,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 241,
            "decorators": [],
            "name": "g1",
            "optional": false,
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
                  "decorators": [],
                  "name": "G1",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 244,
            "end": 245,
            "decorators": [],
            "name": "g",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 254,
      "end": 311,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 259,
        "end": 261,
        "decorators": [],
        "name": "G2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 264,
        "end": 311,
        "params": [
          {
            "type": "Identifier",
            "start": 290,
            "end": 299,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 297,
                    "end": 299,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              }
            }
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
            "indexType": {
              "type": "TSTypeReference",
              "start": 309,
              "end": 310,
              "typeName": {
                "type": "Identifier",
                "start": 309,
                "end": 310,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 304,
              "end": 308,
              "typeName": {
                "type": "Identifier",
                "start": 304,
                "end": 308,
                "decorators": [],
                "name": "NMap",
                "optional": false
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 264,
          "end": 289,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 265,
              "end": 288,
              "const": false,
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
                      "raw": "1",
                      "value": 1
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
                      "raw": "2",
                      "value": 2
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
                      "raw": "3",
                      "value": 3
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
                      "raw": "4",
                      "value": 4
                    }
                  }
                ]
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 265,
                "end": 266,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 324,
            "decorators": [],
            "name": "g2",
            "optional": false,
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
                  "decorators": [],
                  "name": "G2",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 327,
            "end": 328,
            "decorators": [],
            "name": "g",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 340,
      "end": 389,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 345,
        "end": 347,
        "decorators": [],
        "name": "G3",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 350,
        "end": 389,
        "params": [
          {
            "type": "Identifier",
            "start": 368,
            "end": 377,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 375,
                    "end": 377,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              }
            }
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
            "indexType": {
              "type": "TSTypeReference",
              "start": 387,
              "end": 388,
              "typeName": {
                "type": "Identifier",
                "start": 387,
                "end": 388,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 382,
              "end": 386,
              "typeName": {
                "type": "Identifier",
                "start": 382,
                "end": 386,
                "decorators": [],
                "name": "NMap",
                "optional": false
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 350,
          "end": 367,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 351,
              "end": 366,
              "const": false,
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
                      "raw": "1",
                      "value": 1
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
                      "raw": "2",
                      "value": 2
                    }
                  }
                ]
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 351,
                "end": 352,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 402,
            "decorators": [],
            "name": "g3",
            "optional": false,
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
                  "decorators": [],
                  "name": "G3",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 405,
            "end": 406,
            "decorators": [],
            "name": "g",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
