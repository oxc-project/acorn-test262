__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2079,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 12,
        "name": "IsArray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 18,
        "end": 52,
        "checkType": {
          "type": "TSTypeReference",
          "start": 18,
          "end": 19,
          "typeName": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSArrayType",
          "start": 28,
          "end": 37,
          "elementType": {
            "type": "TSUnknownKeyword",
            "start": 28,
            "end": 35
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 40,
          "end": 44,
          "literal": {
            "type": "Literal",
            "start": 40,
            "end": 44,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 47,
          "end": 52,
          "literal": {
            "type": "Literal",
            "start": 47,
            "end": 52,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 66,
        "name": "f1",
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
          "start": 85,
          "end": 98,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 86,
            "end": 98,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 88,
              "end": 98,
              "typeName": {
                "type": "Identifier",
                "start": 88,
                "end": 95,
                "name": "IsArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 95,
                "end": 98,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 96,
                    "end": 97,
                    "typeName": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 97,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 100,
        "end": 167,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 106,
            "end": 122,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 110,
                "end": 121,
                "id": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 117,
                  "name": "t",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 111,
                    "end": 117,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 113,
                      "end": 117,
                      "literal": {
                        "type": "Literal",
                        "start": 113,
                        "end": 117,
                        "value": true,
                        "raw": "true"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 138,
            "end": 155,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 142,
                "end": 154,
                "id": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 150,
                  "name": "f",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 143,
                    "end": 150,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 145,
                      "end": 150,
                      "literal": {
                        "type": "Literal",
                        "start": 145,
                        "end": 150,
                        "value": false,
                        "raw": "false"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 154,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 66,
        "end": 84,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 67,
            "end": 83,
            "name": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 77,
              "end": 83
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 169,
      "end": 273,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 180,
        "name": "f2",
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
          "start": 202,
          "end": 215,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 203,
            "end": 215,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 205,
              "end": 215,
              "typeName": {
                "type": "Identifier",
                "start": 205,
                "end": 212,
                "name": "IsArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 212,
                "end": 215,
                "params": [
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
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 217,
        "end": 273,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 223,
            "end": 239,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 227,
                "end": 238,
                "id": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 234,
                  "name": "t",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 228,
                    "end": 234,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 230,
                      "end": 234,
                      "literal": {
                        "type": "Literal",
                        "start": 230,
                        "end": 234,
                        "value": true,
                        "raw": "true"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 238,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 244,
            "end": 261,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 248,
                "end": 260,
                "id": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 256,
                  "name": "f",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 249,
                    "end": 256,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 251,
                      "end": 256,
                      "literal": {
                        "type": "Literal",
                        "start": 251,
                        "end": 256,
                        "value": false,
                        "raw": "false"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 260,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 180,
        "end": 201,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 181,
            "end": 200,
            "name": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 191,
              "end": 200,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 191,
                "end": 198
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 275,
      "end": 378,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 286,
        "name": "f3",
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
          "start": 307,
          "end": 320,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 308,
            "end": 320,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 310,
              "end": 320,
              "typeName": {
                "type": "Identifier",
                "start": 310,
                "end": 317,
                "name": "IsArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 317,
                "end": 320,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 318,
                    "end": 319,
                    "typeName": {
                      "type": "Identifier",
                      "start": 318,
                      "end": 319,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 322,
        "end": 378,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 328,
            "end": 344,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 332,
                "end": 343,
                "id": {
                  "type": "Identifier",
                  "start": 332,
                  "end": 339,
                  "name": "t",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 333,
                    "end": 339,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 335,
                      "end": 339,
                      "literal": {
                        "type": "Literal",
                        "start": 335,
                        "end": 339,
                        "value": true,
                        "raw": "true"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 343,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 349,
            "end": 366,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 353,
                "end": 365,
                "id": {
                  "type": "Identifier",
                  "start": 353,
                  "end": 361,
                  "name": "f",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 354,
                    "end": 361,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 356,
                      "end": 361,
                      "literal": {
                        "type": "Literal",
                        "start": 356,
                        "end": 361,
                        "value": false,
                        "raw": "false"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 365,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 286,
        "end": 306,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 287,
            "end": 305,
            "name": {
              "type": "Identifier",
              "start": 287,
              "end": 288,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 297,
              "end": 305,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 297,
                "end": 303
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 380,
      "end": 484,
      "id": {
        "type": "Identifier",
        "start": 389,
        "end": 391,
        "name": "f4",
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
          "start": 412,
          "end": 425,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 413,
            "end": 425,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 415,
              "end": 425,
              "typeName": {
                "type": "Identifier",
                "start": 415,
                "end": 422,
                "name": "IsArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 422,
                "end": 425,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 423,
                    "end": 424,
                    "typeName": {
                      "type": "Identifier",
                      "start": 423,
                      "end": 424,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 427,
        "end": 484,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 433,
            "end": 449,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 437,
                "end": 448,
                "id": {
                  "type": "Identifier",
                  "start": 437,
                  "end": 444,
                  "name": "t",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 438,
                    "end": 444,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 440,
                      "end": 444,
                      "literal": {
                        "type": "Literal",
                        "start": 440,
                        "end": 444,
                        "value": true,
                        "raw": "true"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 447,
                  "end": 448,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 465,
            "end": 482,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 469,
                "end": 481,
                "id": {
                  "type": "Identifier",
                  "start": 469,
                  "end": 477,
                  "name": "f",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 470,
                    "end": 477,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 472,
                      "end": 477,
                      "literal": {
                        "type": "Literal",
                        "start": 472,
                        "end": 477,
                        "value": false,
                        "raw": "false"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 480,
                  "end": 481,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 391,
        "end": 411,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 392,
            "end": 410,
            "name": {
              "type": "Identifier",
              "start": 392,
              "end": 393,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 402,
              "end": 410,
              "typeName": {
                "type": "Identifier",
                "start": 402,
                "end": 410,
                "name": "Function",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 486,
      "end": 666,
      "id": {
        "type": "Identifier",
        "start": 491,
        "end": 497,
        "name": "ZeroOf",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 497,
        "end": 500,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 498,
            "end": 499,
            "name": {
              "type": "Identifier",
              "start": 498,
              "end": 499,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 507,
        "end": 665,
        "checkType": {
          "type": "TSTypeReference",
          "start": 507,
          "end": 508,
          "typeName": {
            "type": "Identifier",
            "start": 507,
            "end": 508,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSNullKeyword",
          "start": 517,
          "end": 521
        },
        "trueType": {
          "type": "TSNullKeyword",
          "start": 524,
          "end": 528
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 535,
          "end": 665,
          "checkType": {
            "type": "TSTypeReference",
            "start": 535,
            "end": 536,
            "typeName": {
              "type": "Identifier",
              "start": 535,
              "end": 536,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSUndefinedKeyword",
            "start": 545,
            "end": 554
          },
          "trueType": {
            "type": "TSUndefinedKeyword",
            "start": 557,
            "end": 566
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 573,
            "end": 665,
            "checkType": {
              "type": "TSTypeReference",
              "start": 573,
              "end": 574,
              "typeName": {
                "type": "Identifier",
                "start": 573,
                "end": 574,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "extendsType": {
              "type": "TSStringKeyword",
              "start": 583,
              "end": 589
            },
            "trueType": {
              "type": "TSLiteralType",
              "start": 592,
              "end": 594,
              "literal": {
                "type": "Literal",
                "start": 592,
                "end": 594,
                "value": "",
                "raw": "\"\""
              }
            },
            "falseType": {
              "type": "TSConditionalType",
              "start": 601,
              "end": 665,
              "checkType": {
                "type": "TSTypeReference",
                "start": 601,
                "end": 602,
                "typeName": {
                  "type": "Identifier",
                  "start": 601,
                  "end": 602,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSNumberKeyword",
                "start": 611,
                "end": 617
              },
              "trueType": {
                "type": "TSLiteralType",
                "start": 620,
                "end": 621,
                "literal": {
                  "type": "Literal",
                  "start": 620,
                  "end": 621,
                  "value": 0,
                  "raw": "0"
                }
              },
              "falseType": {
                "type": "TSConditionalType",
                "start": 628,
                "end": 665,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 628,
                  "end": 629,
                  "typeName": {
                    "type": "Identifier",
                    "start": 628,
                    "end": 629,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "extendsType": {
                  "type": "TSBooleanKeyword",
                  "start": 638,
                  "end": 645
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "start": 648,
                  "end": 653,
                  "literal": {
                    "type": "Literal",
                    "start": 648,
                    "end": 653,
                    "value": false,
                    "raw": "false"
                  }
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 660,
                  "end": 665
                }
              }
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 668,
      "end": 743,
      "id": {
        "type": "Identifier",
        "start": 677,
        "end": 680,
        "name": "f10",
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
          "start": 695,
          "end": 707,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 696,
            "end": 707,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 698,
              "end": 707,
              "typeName": {
                "type": "Identifier",
                "start": 698,
                "end": 704,
                "name": "ZeroOf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 704,
                "end": 707,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 705,
                    "end": 706,
                    "typeName": {
                      "type": "Identifier",
                      "start": 705,
                      "end": 706,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 709,
        "end": 743,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 715,
            "end": 741,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 719,
                "end": 740,
                "id": {
                  "type": "Identifier",
                  "start": 719,
                  "end": 736,
                  "name": "t",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 720,
                    "end": 736,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 722,
                      "end": 736,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 722,
                          "end": 724,
                          "literal": {
                            "type": "Literal",
                            "start": 722,
                            "end": 724,
                            "value": "",
                            "raw": "\"\""
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 727,
                          "end": 728,
                          "literal": {
                            "type": "Literal",
                            "start": 727,
                            "end": 728,
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 731,
                          "end": 736,
                          "literal": {
                            "type": "Literal",
                            "start": 731,
                            "end": 736,
                            "value": false,
                            "raw": "false"
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 739,
                  "end": 740,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 680,
        "end": 694,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 681,
            "end": 693,
            "name": {
              "type": "Identifier",
              "start": 681,
              "end": 682,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 691,
              "end": 693,
              "members": []
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 745,
      "end": 795,
      "id": {
        "type": "Identifier",
        "start": 750,
        "end": 753,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 753,
        "end": 756,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 754,
            "end": 755,
            "name": {
              "type": "Identifier",
              "start": 754,
              "end": 755,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 759,
        "end": 794,
        "checkType": {
          "type": "TSTypeReference",
          "start": 759,
          "end": 760,
          "typeName": {
            "type": "Identifier",
            "start": 759,
            "end": 760,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSUnionType",
          "start": 769,
          "end": 779,
          "types": [
            {
              "type": "TSLiteralType",
              "start": 769,
              "end": 774,
              "literal": {
                "type": "Literal",
                "start": 769,
                "end": 774,
                "value": "abc",
                "raw": "\"abc\""
              }
            },
            {
              "type": "TSLiteralType",
              "start": 777,
              "end": 779,
              "literal": {
                "type": "Literal",
                "start": 777,
                "end": 779,
                "value": 42,
                "raw": "42"
              }
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 782,
          "end": 786,
          "literal": {
            "type": "Literal",
            "start": 782,
            "end": 786,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 789,
          "end": 794,
          "literal": {
            "type": "Literal",
            "start": 789,
            "end": 794,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 797,
      "end": 874,
      "id": {
        "type": "Identifier",
        "start": 806,
        "end": 809,
        "name": "f20",
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
          "start": 828,
          "end": 837,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 829,
            "end": 837,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 831,
              "end": 837,
              "typeName": {
                "type": "Identifier",
                "start": 831,
                "end": 834,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 834,
                "end": 837,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 835,
                    "end": 836,
                    "typeName": {
                      "type": "Identifier",
                      "start": 835,
                      "end": 836,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 839,
        "end": 874,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 845,
            "end": 862,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 849,
                "end": 861,
                "id": {
                  "type": "Identifier",
                  "start": 849,
                  "end": 857,
                  "name": "t",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 850,
                    "end": 857,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 852,
                      "end": 857,
                      "literal": {
                        "type": "Literal",
                        "start": 852,
                        "end": 857,
                        "value": false,
                        "raw": "false"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 860,
                  "end": 861,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 809,
        "end": 827,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 810,
            "end": 826,
            "name": {
              "type": "Identifier",
              "start": 810,
              "end": 811,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 820,
              "end": 826
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 907,
      "end": 935,
      "id": {
        "type": "Identifier",
        "start": 917,
        "end": 918,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 919,
        "end": 935,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 921,
            "end": 933,
            "key": {
              "type": "Identifier",
              "start": 921,
              "end": 924,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 926,
              "end": 932,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 928,
                "end": 932
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 936,
      "end": 964,
      "id": {
        "type": "Identifier",
        "start": 946,
        "end": 947,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 948,
        "end": 964,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 950,
            "end": 962,
            "key": {
              "type": "Identifier",
              "start": 950,
              "end": 953,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 955,
              "end": 961,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 957,
                "end": 961
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 965,
      "end": 1005,
      "id": {
        "type": "Identifier",
        "start": 975,
        "end": 976,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 977,
        "end": 1005,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 979,
            "end": 991,
            "key": {
              "type": "Identifier",
              "start": 979,
              "end": 982,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 984,
              "end": 990,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 986,
                "end": 990
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 992,
            "end": 1003,
            "key": {
              "type": "Identifier",
              "start": 992,
              "end": 995,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 997,
              "end": 1003,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 999,
                "end": 1003
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1007,
      "end": 1251,
      "id": {
        "type": "Identifier",
        "start": 1016,
        "end": 1021,
        "name": "test1",
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
          "start": 1035,
          "end": 1067,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1036,
            "end": 1067,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 1038,
              "end": 1067,
              "checkType": {
                "type": "TSTypeReference",
                "start": 1038,
                "end": 1039,
                "typeName": {
                  "type": "Identifier",
                  "start": 1038,
                  "end": 1039,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 1048,
                "end": 1049,
                "typeName": {
                  "type": "Identifier",
                  "start": 1048,
                  "end": 1049,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "trueType": {
                "type": "TSNumberKeyword",
                "start": 1052,
                "end": 1058
              },
              "falseType": {
                "type": "TSStringKeyword",
                "start": 1061,
                "end": 1067
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1069,
        "end": 1251,
        "body": [
          {
            "type": "IfStatement",
            "start": 1075,
            "end": 1191,
            "test": {
              "type": "BinaryExpression",
              "start": 1079,
              "end": 1099,
              "left": {
                "type": "UnaryExpression",
                "start": 1079,
                "end": 1087,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 1086,
                  "end": 1087,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 1091,
                "end": 1099,
                "value": "string",
                "raw": "'string'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1101,
              "end": 1153,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1111,
                  "end": 1113,
                  "expression": {
                    "type": "Identifier",
                    "start": 1111,
                    "end": 1112,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1163,
              "end": 1191,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1173,
                  "end": 1175,
                  "expression": {
                    "type": "Identifier",
                    "start": 1173,
                    "end": 1174,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1196,
            "end": 1228,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1202,
                "end": 1227,
                "id": {
                  "type": "Identifier",
                  "start": 1202,
                  "end": 1223,
                  "name": "newY",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1206,
                    "end": 1223,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1208,
                      "end": 1223,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1208,
                          "end": 1214
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1217,
                          "end": 1223
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1226,
                  "end": 1227,
                  "name": "y",
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
            "type": "ExpressionStatement",
            "start": 1233,
            "end": 1238,
            "expression": {
              "type": "Identifier",
              "start": 1233,
              "end": 1237,
              "name": "newY",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1021,
        "end": 1034,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1022,
            "end": 1033,
            "name": {
              "type": "Identifier",
              "start": 1022,
              "end": 1023,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1032,
              "end": 1033,
              "typeName": {
                "type": "Identifier",
                "start": 1032,
                "end": 1033,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1253,
      "end": 1498,
      "id": {
        "type": "Identifier",
        "start": 1262,
        "end": 1267,
        "name": "test2",
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
          "start": 1281,
          "end": 1313,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1282,
            "end": 1313,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 1284,
              "end": 1313,
              "checkType": {
                "type": "TSTypeReference",
                "start": 1284,
                "end": 1285,
                "typeName": {
                  "type": "Identifier",
                  "start": 1284,
                  "end": 1285,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 1294,
                "end": 1295,
                "typeName": {
                  "type": "Identifier",
                  "start": 1294,
                  "end": 1295,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "trueType": {
                "type": "TSStringKeyword",
                "start": 1298,
                "end": 1304
              },
              "falseType": {
                "type": "TSNumberKeyword",
                "start": 1307,
                "end": 1313
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1315,
        "end": 1498,
        "body": [
          {
            "type": "IfStatement",
            "start": 1321,
            "end": 1437,
            "test": {
              "type": "BinaryExpression",
              "start": 1325,
              "end": 1345,
              "left": {
                "type": "UnaryExpression",
                "start": 1325,
                "end": 1333,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 1332,
                  "end": 1333,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 1337,
                "end": 1345,
                "value": "string",
                "raw": "'string'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1347,
              "end": 1375,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1357,
                  "end": 1359,
                  "expression": {
                    "type": "Identifier",
                    "start": 1357,
                    "end": 1358,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1385,
              "end": 1437,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1395,
                  "end": 1397,
                  "expression": {
                    "type": "Identifier",
                    "start": 1395,
                    "end": 1396,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1442,
            "end": 1474,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1448,
                "end": 1473,
                "id": {
                  "type": "Identifier",
                  "start": 1448,
                  "end": 1469,
                  "name": "newY",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1452,
                    "end": 1469,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1454,
                      "end": 1469,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1454,
                          "end": 1460
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1463,
                          "end": 1469
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1472,
                  "end": 1473,
                  "name": "y",
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
            "type": "ExpressionStatement",
            "start": 1479,
            "end": 1484,
            "expression": {
              "type": "Identifier",
              "start": 1479,
              "end": 1483,
              "name": "newY",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1267,
        "end": 1280,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1268,
            "end": 1279,
            "name": {
              "type": "Identifier",
              "start": 1268,
              "end": 1269,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1278,
              "end": 1279,
              "typeName": {
                "type": "Identifier",
                "start": 1278,
                "end": 1279,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1500,
      "end": 1788,
      "id": {
        "type": "Identifier",
        "start": 1509,
        "end": 1514,
        "name": "test3",
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
          "start": 1528,
          "end": 1560,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1529,
            "end": 1560,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 1531,
              "end": 1560,
              "checkType": {
                "type": "TSTypeReference",
                "start": 1531,
                "end": 1532,
                "typeName": {
                  "type": "Identifier",
                  "start": 1531,
                  "end": 1532,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 1541,
                "end": 1542,
                "typeName": {
                  "type": "Identifier",
                  "start": 1541,
                  "end": 1542,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "trueType": {
                "type": "TSNumberKeyword",
                "start": 1545,
                "end": 1551
              },
              "falseType": {
                "type": "TSStringKeyword",
                "start": 1554,
                "end": 1560
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1562,
        "end": 1788,
        "body": [
          {
            "type": "IfStatement",
            "start": 1568,
            "end": 1719,
            "test": {
              "type": "BinaryExpression",
              "start": 1572,
              "end": 1592,
              "left": {
                "type": "UnaryExpression",
                "start": 1572,
                "end": 1580,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 1579,
                  "end": 1580,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 1584,
                "end": 1592,
                "value": "string",
                "raw": "'string'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1594,
              "end": 1657,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1604,
                  "end": 1606,
                  "expression": {
                    "type": "Identifier",
                    "start": 1604,
                    "end": 1605,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1667,
              "end": 1719,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1677,
                  "end": 1679,
                  "expression": {
                    "type": "Identifier",
                    "start": 1677,
                    "end": 1678,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1724,
            "end": 1756,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1730,
                "end": 1755,
                "id": {
                  "type": "Identifier",
                  "start": 1730,
                  "end": 1751,
                  "name": "newY",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1734,
                    "end": 1751,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1736,
                      "end": 1751,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1736,
                          "end": 1742
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1745,
                          "end": 1751
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1754,
                  "end": 1755,
                  "name": "y",
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
            "type": "ExpressionStatement",
            "start": 1761,
            "end": 1766,
            "expression": {
              "type": "Identifier",
              "start": 1761,
              "end": 1765,
              "name": "newY",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1514,
        "end": 1527,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1515,
            "end": 1526,
            "name": {
              "type": "Identifier",
              "start": 1515,
              "end": 1516,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1525,
              "end": 1526,
              "typeName": {
                "type": "Identifier",
                "start": 1525,
                "end": 1526,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1790,
      "end": 2078,
      "id": {
        "type": "Identifier",
        "start": 1799,
        "end": 1804,
        "name": "test4",
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
          "start": 1818,
          "end": 1850,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1819,
            "end": 1850,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 1821,
              "end": 1850,
              "checkType": {
                "type": "TSTypeReference",
                "start": 1821,
                "end": 1822,
                "typeName": {
                  "type": "Identifier",
                  "start": 1821,
                  "end": 1822,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 1831,
                "end": 1832,
                "typeName": {
                  "type": "Identifier",
                  "start": 1831,
                  "end": 1832,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "trueType": {
                "type": "TSStringKeyword",
                "start": 1835,
                "end": 1841
              },
              "falseType": {
                "type": "TSNumberKeyword",
                "start": 1844,
                "end": 1850
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1852,
        "end": 2078,
        "body": [
          {
            "type": "IfStatement",
            "start": 1858,
            "end": 2009,
            "test": {
              "type": "BinaryExpression",
              "start": 1862,
              "end": 1882,
              "left": {
                "type": "UnaryExpression",
                "start": 1862,
                "end": 1870,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 1869,
                  "end": 1870,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 1874,
                "end": 1882,
                "value": "string",
                "raw": "'string'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1884,
              "end": 1947,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1894,
                  "end": 1896,
                  "expression": {
                    "type": "Identifier",
                    "start": 1894,
                    "end": 1895,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1957,
              "end": 2009,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1967,
                  "end": 1969,
                  "expression": {
                    "type": "Identifier",
                    "start": 1967,
                    "end": 1968,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 2014,
            "end": 2046,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2020,
                "end": 2045,
                "id": {
                  "type": "Identifier",
                  "start": 2020,
                  "end": 2041,
                  "name": "newY",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2024,
                    "end": 2041,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2026,
                      "end": 2041,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2026,
                          "end": 2032
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 2035,
                          "end": 2041
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 2044,
                  "end": 2045,
                  "name": "y",
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
            "type": "ExpressionStatement",
            "start": 2051,
            "end": 2056,
            "expression": {
              "type": "Identifier",
              "start": 2051,
              "end": 2055,
              "name": "newY",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1804,
        "end": 1817,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1805,
            "end": 1816,
            "name": {
              "type": "Identifier",
              "start": 1805,
              "end": 1806,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1815,
              "end": 1816,
              "typeName": {
                "type": "Identifier",
                "start": 1815,
                "end": 1816,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
