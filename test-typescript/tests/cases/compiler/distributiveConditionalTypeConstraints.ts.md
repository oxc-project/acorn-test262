distributiveConditionalTypeConstraints.ts
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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 12,
        "decorators": [],
        "name": "IsArray",
        "optional": false
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
            "decorators": [],
            "name": "T",
            "optional": false
          }
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
        "falseType": {
          "type": "TSLiteralType",
          "start": 47,
          "end": 52,
          "literal": {
            "type": "Literal",
            "start": 47,
            "end": 52,
            "raw": "false",
            "value": false
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
            "raw": "true",
            "value": true
          }
        }
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 167,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 117,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
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
                        "raw": "true",
                        "value": true
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 150,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
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
                        "raw": "false",
                        "value": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 154,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 66,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 85,
          "end": 98,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 86,
            "end": 98,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 88,
              "end": 98,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 88,
                "end": 95,
                "decorators": [],
                "name": "IsArray",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 66,
        "end": 84,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 67,
            "end": 83,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 77,
              "end": 83
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 169,
      "end": 273,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 234,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
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
                        "raw": "true",
                        "value": true
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 238,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 256,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
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
                        "raw": "false",
                        "value": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 260,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 180,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 202,
          "end": 215,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 203,
            "end": 215,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 205,
              "end": 215,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 205,
                "end": 212,
                "decorators": [],
                "name": "IsArray",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 180,
        "end": 201,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 181,
            "end": 200,
            "const": false,
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 275,
      "end": 378,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 332,
                  "end": 339,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
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
                        "raw": "true",
                        "value": true
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 343,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 353,
                  "end": 361,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
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
                        "raw": "false",
                        "value": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 365,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 286,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 307,
          "end": 320,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 308,
            "end": 320,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 310,
              "end": 320,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 310,
                "end": 317,
                "decorators": [],
                "name": "IsArray",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 286,
        "end": 306,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 287,
            "end": 305,
            "const": false,
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 287,
              "end": 288,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 380,
      "end": 484,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 437,
                  "end": 444,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
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
                        "raw": "true",
                        "value": true
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 447,
                  "end": 448,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 469,
                  "end": 477,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
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
                        "raw": "false",
                        "value": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 480,
                  "end": 481,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 389,
        "end": 391,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 412,
          "end": 425,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 413,
            "end": 425,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 415,
              "end": 425,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 415,
                "end": 422,
                "decorators": [],
                "name": "IsArray",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 391,
        "end": 411,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 392,
            "end": 410,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 402,
              "end": 410,
              "typeName": {
                "type": "Identifier",
                "start": 402,
                "end": 410,
                "decorators": [],
                "name": "Function",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 392,
              "end": 393,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 486,
      "end": 666,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 491,
        "end": 497,
        "decorators": [],
        "name": "ZeroOf",
        "optional": false
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
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSNullKeyword",
          "start": 517,
          "end": 521
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
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          "extendsType": {
            "type": "TSUndefinedKeyword",
            "start": 545,
            "end": 554
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "extendsType": {
              "type": "TSStringKeyword",
              "start": 583,
              "end": 589
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              "extendsType": {
                "type": "TSNumberKeyword",
                "start": 611,
                "end": 617
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                "extendsType": {
                  "type": "TSBooleanKeyword",
                  "start": 638,
                  "end": 645
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 660,
                  "end": 665
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "start": 648,
                  "end": 653,
                  "literal": {
                    "type": "Literal",
                    "start": 648,
                    "end": 653,
                    "raw": "false",
                    "value": false
                  }
                }
              },
              "trueType": {
                "type": "TSLiteralType",
                "start": 620,
                "end": 621,
                "literal": {
                  "type": "Literal",
                  "start": 620,
                  "end": 621,
                  "raw": "0",
                  "value": 0
                }
              }
            },
            "trueType": {
              "type": "TSLiteralType",
              "start": 592,
              "end": 594,
              "literal": {
                "type": "Literal",
                "start": 592,
                "end": 594,
                "raw": "\"\"",
                "value": ""
              }
            }
          },
          "trueType": {
            "type": "TSUndefinedKeyword",
            "start": 557,
            "end": 566
          }
        },
        "trueType": {
          "type": "TSNullKeyword",
          "start": 524,
          "end": 528
        }
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 498,
              "end": 499,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 668,
      "end": 743,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 719,
                  "end": 736,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
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
                            "raw": "\"\"",
                            "value": ""
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
                            "raw": "0",
                            "value": 0
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
                            "raw": "false",
                            "value": false
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 739,
                  "end": 740,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 677,
        "end": 680,
        "decorators": [],
        "name": "f10",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 695,
          "end": 707,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 696,
            "end": 707,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 698,
              "end": 707,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 698,
                "end": 704,
                "decorators": [],
                "name": "ZeroOf",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 680,
        "end": 694,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 681,
            "end": 693,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 691,
              "end": 693,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 681,
              "end": 682,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 745,
      "end": 795,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 750,
        "end": 753,
        "decorators": [],
        "name": "Foo",
        "optional": false
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
            "decorators": [],
            "name": "T",
            "optional": false
          }
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
                "raw": "\"abc\"",
                "value": "abc"
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
                "raw": "42",
                "value": 42
              }
            }
          ]
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 789,
          "end": 794,
          "literal": {
            "type": "Literal",
            "start": 789,
            "end": 794,
            "raw": "false",
            "value": false
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 782,
          "end": 786,
          "literal": {
            "type": "Literal",
            "start": 782,
            "end": 786,
            "raw": "true",
            "value": true
          }
        }
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 754,
              "end": 755,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 797,
      "end": 874,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 849,
                  "end": 857,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
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
                        "raw": "false",
                        "value": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 860,
                  "end": 861,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 806,
        "end": 809,
        "decorators": [],
        "name": "f20",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 828,
          "end": 837,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 829,
            "end": 837,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 831,
              "end": 837,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 831,
                "end": 834,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 809,
        "end": 827,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 810,
            "end": 826,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 820,
              "end": 826
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 810,
              "end": 811,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 907,
      "end": 935,
      "body": {
        "type": "TSInterfaceBody",
        "start": 919,
        "end": 935,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 921,
            "end": 933,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 921,
              "end": 924,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 917,
        "end": 918,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 936,
      "end": 964,
      "body": {
        "type": "TSInterfaceBody",
        "start": 948,
        "end": 964,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 950,
            "end": 962,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 950,
              "end": 953,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 946,
        "end": 947,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 965,
      "end": 1005,
      "body": {
        "type": "TSInterfaceBody",
        "start": 977,
        "end": 1005,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 979,
            "end": 991,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 979,
              "end": 982,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 992,
            "end": 1003,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 992,
              "end": 995,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 975,
        "end": 976,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1007,
      "end": 1251,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1069,
        "end": 1251,
        "body": [
          {
            "type": "IfStatement",
            "start": 1075,
            "end": 1191,
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
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ]
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
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1079,
              "end": 1099,
              "operator": "==",
              "left": {
                "type": "UnaryExpression",
                "start": 1079,
                "end": 1087,
                "argument": {
                  "type": "Identifier",
                  "start": 1086,
                  "end": 1087,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 1091,
                "end": 1099,
                "raw": "'string'",
                "value": "string"
              }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1202,
                  "end": 1223,
                  "decorators": [],
                  "name": "newY",
                  "optional": false,
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
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1226,
                  "end": 1227,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 1233,
            "end": 1238,
            "expression": {
              "type": "Identifier",
              "start": 1233,
              "end": 1237,
              "decorators": [],
              "name": "newY",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1016,
        "end": 1021,
        "decorators": [],
        "name": "test1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1035,
          "end": 1067,
          "decorators": [],
          "name": "y",
          "optional": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 1048,
                "end": 1049,
                "typeName": {
                  "type": "Identifier",
                  "start": 1048,
                  "end": 1049,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              },
              "falseType": {
                "type": "TSStringKeyword",
                "start": 1061,
                "end": 1067
              },
              "trueType": {
                "type": "TSNumberKeyword",
                "start": 1052,
                "end": 1058
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1021,
        "end": 1034,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1022,
            "end": 1033,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1032,
              "end": 1033,
              "typeName": {
                "type": "Identifier",
                "start": 1032,
                "end": 1033,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1022,
              "end": 1023,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1253,
      "end": 1498,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1315,
        "end": 1498,
        "body": [
          {
            "type": "IfStatement",
            "start": 1321,
            "end": 1437,
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
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ]
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
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1325,
              "end": 1345,
              "operator": "==",
              "left": {
                "type": "UnaryExpression",
                "start": 1325,
                "end": 1333,
                "argument": {
                  "type": "Identifier",
                  "start": 1332,
                  "end": 1333,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 1337,
                "end": 1345,
                "raw": "'string'",
                "value": "string"
              }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1448,
                  "end": 1469,
                  "decorators": [],
                  "name": "newY",
                  "optional": false,
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
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1472,
                  "end": 1473,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 1479,
            "end": 1484,
            "expression": {
              "type": "Identifier",
              "start": 1479,
              "end": 1483,
              "decorators": [],
              "name": "newY",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1262,
        "end": 1267,
        "decorators": [],
        "name": "test2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1281,
          "end": 1313,
          "decorators": [],
          "name": "y",
          "optional": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 1294,
                "end": 1295,
                "typeName": {
                  "type": "Identifier",
                  "start": 1294,
                  "end": 1295,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              },
              "falseType": {
                "type": "TSNumberKeyword",
                "start": 1307,
                "end": 1313
              },
              "trueType": {
                "type": "TSStringKeyword",
                "start": 1298,
                "end": 1304
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1267,
        "end": 1280,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1268,
            "end": 1279,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1278,
              "end": 1279,
              "typeName": {
                "type": "Identifier",
                "start": 1278,
                "end": 1279,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1268,
              "end": 1269,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1500,
      "end": 1788,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1562,
        "end": 1788,
        "body": [
          {
            "type": "IfStatement",
            "start": 1568,
            "end": 1719,
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
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ]
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
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1572,
              "end": 1592,
              "operator": "==",
              "left": {
                "type": "UnaryExpression",
                "start": 1572,
                "end": 1580,
                "argument": {
                  "type": "Identifier",
                  "start": 1579,
                  "end": 1580,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 1584,
                "end": 1592,
                "raw": "'string'",
                "value": "string"
              }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1730,
                  "end": 1751,
                  "decorators": [],
                  "name": "newY",
                  "optional": false,
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
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1754,
                  "end": 1755,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 1761,
            "end": 1766,
            "expression": {
              "type": "Identifier",
              "start": 1761,
              "end": 1765,
              "decorators": [],
              "name": "newY",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1509,
        "end": 1514,
        "decorators": [],
        "name": "test3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1528,
          "end": 1560,
          "decorators": [],
          "name": "y",
          "optional": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 1541,
                "end": 1542,
                "typeName": {
                  "type": "Identifier",
                  "start": 1541,
                  "end": 1542,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              },
              "falseType": {
                "type": "TSStringKeyword",
                "start": 1554,
                "end": 1560
              },
              "trueType": {
                "type": "TSNumberKeyword",
                "start": 1545,
                "end": 1551
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1514,
        "end": 1527,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1515,
            "end": 1526,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1525,
              "end": 1526,
              "typeName": {
                "type": "Identifier",
                "start": 1525,
                "end": 1526,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1515,
              "end": 1516,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1790,
      "end": 2078,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1852,
        "end": 2078,
        "body": [
          {
            "type": "IfStatement",
            "start": 1858,
            "end": 2009,
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
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ]
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
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1862,
              "end": 1882,
              "operator": "==",
              "left": {
                "type": "UnaryExpression",
                "start": 1862,
                "end": 1870,
                "argument": {
                  "type": "Identifier",
                  "start": 1869,
                  "end": 1870,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 1874,
                "end": 1882,
                "raw": "'string'",
                "value": "string"
              }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2020,
                  "end": 2041,
                  "decorators": [],
                  "name": "newY",
                  "optional": false,
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
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 2044,
                  "end": 2045,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 2051,
            "end": 2056,
            "expression": {
              "type": "Identifier",
              "start": 2051,
              "end": 2055,
              "decorators": [],
              "name": "newY",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1799,
        "end": 1804,
        "decorators": [],
        "name": "test4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1818,
          "end": 1850,
          "decorators": [],
          "name": "y",
          "optional": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 1831,
                "end": 1832,
                "typeName": {
                  "type": "Identifier",
                  "start": 1831,
                  "end": 1832,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              },
              "falseType": {
                "type": "TSNumberKeyword",
                "start": 1844,
                "end": 1850
              },
              "trueType": {
                "type": "TSStringKeyword",
                "start": 1835,
                "end": 1841
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1804,
        "end": 1817,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1805,
            "end": 1816,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1815,
              "end": 1816,
              "typeName": {
                "type": "Identifier",
                "start": 1815,
                "end": 1816,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1805,
              "end": 1806,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
