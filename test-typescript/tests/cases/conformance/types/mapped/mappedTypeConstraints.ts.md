__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 812,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 99,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 85,
        "end": 99,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 91,
            "end": 97,
            "expression": {
              "type": "MemberExpression",
              "start": 91,
              "end": 96,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 91,
                "end": 94,
                "decorators": [],
                "name": "obj",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 95,
                "end": 96,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f0",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 48,
          "end": 83,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 51,
            "end": 83,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 53,
              "end": 83,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 57,
                "end": 83,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 58,
                    "end": 59,
                    "typeName": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 59,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 61,
                    "end": 82,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 68,
                      "end": 82,
                      "params": [
                        {
                          "type": "TSTypeOperator",
                          "start": 69,
                          "end": 76,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 75,
                            "end": 76,
                            "typeName": {
                              "type": "Identifier",
                              "start": 75,
                              "end": 76,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 78,
                          "end": 81,
                          "literal": {
                            "type": "Literal",
                            "start": 78,
                            "end": 81,
                            "raw": "'b'",
                            "value": "b"
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 68,
                      "decorators": [],
                      "name": "Extract",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 53,
                "end": 57,
                "decorators": [],
                "name": "Pick",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 47,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 46,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 22,
              "end": 46,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 24,
                  "end": 34,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 25,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 25,
                    "end": 33,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 27,
                      "end": 33
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 35,
                  "end": 44,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 36,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 36,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 38,
                      "end": 44
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
      "start": 101,
      "end": 200,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 186,
        "end": 200,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 192,
            "end": 198,
            "expression": {
              "type": "MemberExpression",
              "start": 192,
              "end": 197,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 192,
                "end": 195,
                "decorators": [],
                "name": "obj",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 196,
                "end": 197,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 112,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 149,
          "end": 184,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 152,
            "end": 184,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 154,
              "end": 184,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 158,
                "end": 184,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 159,
                    "end": 160,
                    "typeName": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 160,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 162,
                    "end": 183,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 169,
                      "end": 183,
                      "params": [
                        {
                          "type": "TSTypeOperator",
                          "start": 170,
                          "end": 177,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 176,
                            "end": 177,
                            "typeName": {
                              "type": "Identifier",
                              "start": 176,
                              "end": 177,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 179,
                          "end": 182,
                          "literal": {
                            "type": "Literal",
                            "start": 179,
                            "end": 182,
                            "raw": "'a'",
                            "value": "a"
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 162,
                      "end": 169,
                      "decorators": [],
                      "name": "Exclude",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 154,
                "end": 158,
                "decorators": [],
                "name": "Pick",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 112,
        "end": 148,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 113,
            "end": 147,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 123,
              "end": 147,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 125,
                  "end": 135,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 126,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 134,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 128,
                      "end": 134
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 136,
                  "end": 145,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 137,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 137,
                    "end": 145,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 139,
                      "end": 145
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
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
      "start": 202,
      "end": 333,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 319,
        "end": 333,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 325,
            "end": 331,
            "expression": {
              "type": "MemberExpression",
              "start": 325,
              "end": 330,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 325,
                "end": 328,
                "decorators": [],
                "name": "obj",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 329,
                "end": 330,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 213,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 286,
          "end": 317,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 289,
            "end": 317,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 291,
              "end": 317,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 295,
                "end": 317,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 296,
                    "end": 301,
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
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 300,
                        "end": 301,
                        "typeName": {
                          "type": "Identifier",
                          "start": 300,
                          "end": 301,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeOperator",
                    "start": 303,
                    "end": 316,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 310,
                      "end": 315,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 310,
                          "end": 311,
                          "typeName": {
                            "type": "Identifier",
                            "start": 310,
                            "end": 311,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 314,
                          "end": 315,
                          "typeName": {
                            "type": "Identifier",
                            "start": 314,
                            "end": 315,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 291,
                "end": 295,
                "decorators": [],
                "name": "Pick",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 213,
        "end": 285,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 214,
            "end": 248,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 224,
              "end": 248,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 226,
                  "end": 236,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 227,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 227,
                    "end": 235,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 229,
                      "end": 235
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 237,
                  "end": 246,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 238,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 238,
                    "end": 246,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 240,
                      "end": 246
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 250,
            "end": 284,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 260,
              "end": 284,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 262,
                  "end": 272,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 262,
                    "end": 263,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 263,
                    "end": 271,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 265,
                      "end": 271
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 273,
                  "end": 282,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 273,
                    "end": 274,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 274,
                    "end": 282,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 276,
                      "end": 282
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 335,
      "end": 488,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 452,
        "end": 488,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 458,
            "end": 464,
            "expression": {
              "type": "MemberExpression",
              "start": 458,
              "end": 463,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 458,
                "end": 461,
                "decorators": [],
                "name": "obj",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 462,
                "end": 463,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 469,
            "end": 475,
            "expression": {
              "type": "MemberExpression",
              "start": 469,
              "end": 474,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 469,
                "end": 472,
                "decorators": [],
                "name": "obj",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 473,
                "end": 474,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 480,
            "end": 486,
            "expression": {
              "type": "MemberExpression",
              "start": 480,
              "end": 485,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 480,
                "end": 483,
                "decorators": [],
                "name": "obj",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 484,
                "end": 485,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 344,
        "end": 346,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 419,
          "end": 450,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 422,
            "end": 450,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 424,
              "end": 450,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 428,
                "end": 450,
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "start": 429,
                    "end": 434,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 429,
                        "end": 430,
                        "typeName": {
                          "type": "Identifier",
                          "start": 429,
                          "end": 430,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 433,
                        "end": 434,
                        "typeName": {
                          "type": "Identifier",
                          "start": 433,
                          "end": 434,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeOperator",
                    "start": 436,
                    "end": 449,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 443,
                      "end": 448,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 443,
                          "end": 444,
                          "typeName": {
                            "type": "Identifier",
                            "start": 443,
                            "end": 444,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 447,
                          "end": 448,
                          "typeName": {
                            "type": "Identifier",
                            "start": 447,
                            "end": 448,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 424,
                "end": 428,
                "decorators": [],
                "name": "Pick",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 346,
        "end": 418,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 347,
            "end": 381,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 357,
              "end": 381,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 359,
                  "end": 369,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 359,
                    "end": 360,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 360,
                    "end": 368,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 362,
                      "end": 368
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 370,
                  "end": 379,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 370,
                    "end": 371,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 371,
                    "end": 379,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 373,
                      "end": 379
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 347,
              "end": 348,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 383,
            "end": 417,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 393,
              "end": 417,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 395,
                  "end": 405,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 395,
                    "end": 396,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 396,
                    "end": 404,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 398,
                      "end": 404
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 406,
                  "end": 415,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 406,
                    "end": 407,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 407,
                    "end": 415,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 409,
                      "end": 415
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 383,
              "end": 384,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 490,
      "end": 613,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 588,
        "end": 613,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 594,
            "end": 600,
            "expression": {
              "type": "MemberExpression",
              "start": 594,
              "end": 599,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 594,
                "end": 597,
                "decorators": [],
                "name": "obj",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 598,
                "end": 599,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 605,
            "end": 611,
            "expression": {
              "type": "MemberExpression",
              "start": 605,
              "end": 610,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 605,
                "end": 608,
                "decorators": [],
                "name": "obj",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 609,
                "end": 610,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 499,
        "end": 501,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 538,
          "end": 586,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 541,
            "end": 586,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 543,
              "end": 586,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 549,
                "end": 586,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 550,
                    "end": 577,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 550,
                        "end": 571,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 557,
                          "end": 571,
                          "params": [
                            {
                              "type": "TSTypeOperator",
                              "start": 558,
                              "end": 565,
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 564,
                                "end": 565,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 564,
                                  "end": 565,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            },
                            {
                              "type": "TSLiteralType",
                              "start": 567,
                              "end": 570,
                              "literal": {
                                "type": "Literal",
                                "start": 567,
                                "end": 570,
                                "raw": "'b'",
                                "value": "b"
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 550,
                          "end": 557,
                          "decorators": [],
                          "name": "Exclude",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 574,
                        "end": 577,
                        "literal": {
                          "type": "Literal",
                          "start": 574,
                          "end": 577,
                          "raw": "'c'",
                          "value": "c"
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 579,
                    "end": 585
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 543,
                "end": 549,
                "decorators": [],
                "name": "Record",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 501,
        "end": 537,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 502,
            "end": 536,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 512,
              "end": 536,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 514,
                  "end": 524,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 514,
                    "end": 515,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 515,
                    "end": 523,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 517,
                      "end": 523
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 525,
                  "end": 534,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 525,
                    "end": 526,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 526,
                    "end": 534,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 528,
                      "end": 534
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 502,
              "end": 503,
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
      "start": 637,
      "end": 693,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 642,
        "end": 653,
        "decorators": [],
        "name": "TargetProps",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 656,
        "end": 692,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 662,
            "end": 674,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 662,
              "end": 665,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 665,
              "end": 673,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 667,
                "end": 673
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 679,
            "end": 690,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 679,
              "end": 682,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 682,
              "end": 690,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 684,
                "end": 690
              }
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 695,
      "end": 811,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 701,
          "end": 810,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 701,
            "end": 709,
            "decorators": [],
            "name": "modifier",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 712,
            "end": 810,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 755,
              "end": 810,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 761,
                  "end": 794,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 765,
                      "end": 793,
                      "definite": false,
                      "id": {
                        "type": "ObjectPattern",
                        "start": 765,
                        "end": 779,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 766,
                            "end": 769,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 766,
                              "end": 769,
                              "decorators": [],
                              "name": "bar",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 766,
                              "end": 769,
                              "decorators": [],
                              "name": "bar",
                              "optional": false
                            }
                          },
                          {
                            "type": "RestElement",
                            "start": 771,
                            "end": 778,
                            "argument": {
                              "type": "Identifier",
                              "start": 774,
                              "end": 778,
                              "decorators": [],
                              "name": "rest",
                              "optional": false
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ]
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 782,
                        "end": 793,
                        "decorators": [],
                        "name": "targetProps",
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 799,
                  "end": 808,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 799,
                    "end": 807,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 799,
                      "end": 803,
                      "decorators": [],
                      "name": "rest",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 804,
                      "end": 807,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 736,
                "end": 750,
                "decorators": [],
                "name": "targetProps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 747,
                  "end": 750,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 749,
                    "end": 750,
                    "typeName": {
                      "type": "Identifier",
                      "start": 749,
                      "end": 750,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 712,
              "end": 735,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 713,
                  "end": 734,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 723,
                    "end": 734,
                    "typeName": {
                      "type": "Identifier",
                      "start": 723,
                      "end": 734,
                      "decorators": [],
                      "name": "TargetProps",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 713,
                    "end": 714,
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
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
