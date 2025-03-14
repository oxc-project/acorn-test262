__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 546,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 22,
      "end": 33,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 33,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 35,
      "end": 186,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 81,
        "end": 186,
        "body": [
          {
            "type": "IfStatement",
            "start": 87,
            "end": 184,
            "alternate": {
              "type": "BlockStatement",
              "start": 148,
              "end": 184,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 158,
                  "end": 178,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 164,
                      "end": 177,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 164,
                        "end": 173,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 165,
                          "end": 173,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 167,
                            "end": 173
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 176,
                        "end": 177,
                        "decorators": [],
                        "name": "v",
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 107,
              "end": 138,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 117,
                  "end": 132,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 123,
                      "end": 131,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 123,
                        "end": 127,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 124,
                          "end": 127,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 126,
                            "end": 127,
                            "typeName": {
                              "type": "Identifier",
                              "start": 126,
                              "end": 127,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 130,
                        "end": 131,
                        "decorators": [],
                        "name": "v",
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 91,
              "end": 105,
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "decorators": [],
                "name": "v",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 104,
                "end": 105,
                "decorators": [],
                "name": "C",
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
        "start": 44,
        "end": 46,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 60,
          "end": 73,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 61,
            "end": 73,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 63,
              "end": 73,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 63,
                  "end": 64,
                  "typeName": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 64,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 67,
                  "end": 73
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 74,
        "end": 80,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 76,
          "end": 80
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 46,
        "end": 59,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 47,
            "end": 58,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 57,
              "end": 58,
              "typeName": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
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
      "type": "ClassDeclaration",
      "start": 188,
      "end": 199,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 196,
        "end": 199,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 195,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 201,
      "end": 349,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 249,
        "end": 349,
        "body": [
          {
            "type": "IfStatement",
            "start": 255,
            "end": 347,
            "alternate": {
              "type": "BlockStatement",
              "start": 316,
              "end": 347,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 326,
                  "end": 341,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 332,
                      "end": 340,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 332,
                        "end": 336,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 333,
                          "end": 336,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 335,
                            "end": 336,
                            "typeName": {
                              "type": "Identifier",
                              "start": 335,
                              "end": 336,
                              "decorators": [],
                              "name": "U",
                              "optional": false
                            }
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 339,
                        "end": 340,
                        "decorators": [],
                        "name": "v",
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 275,
              "end": 306,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 285,
                  "end": 300,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 291,
                      "end": 299,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 291,
                        "end": 295,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 292,
                          "end": 295,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 294,
                            "end": 295,
                            "typeName": {
                              "type": "Identifier",
                              "start": 294,
                              "end": 295,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 298,
                        "end": 299,
                        "decorators": [],
                        "name": "v",
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 259,
              "end": 273,
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "start": 259,
                "end": 260,
                "decorators": [],
                "name": "v",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 272,
                "end": 273,
                "decorators": [],
                "name": "C",
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
        "start": 210,
        "end": 212,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 239,
          "end": 247,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 240,
            "end": 247,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 242,
              "end": 247,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 242,
                  "end": 243,
                  "typeName": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 243,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 246,
                  "end": 247,
                  "typeName": {
                    "type": "Identifier",
                    "start": 246,
                    "end": 247,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 212,
        "end": 238,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 213,
            "end": 224,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 223,
              "end": 224,
              "typeName": {
                "type": "Identifier",
                "start": 223,
                "end": 224,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 213,
              "end": 214,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 226,
            "end": 237,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 236,
              "end": 237,
              "typeName": {
                "type": "Identifier",
                "start": 236,
                "end": 237,
                "decorators": [],
                "name": "D",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 226,
              "end": 227,
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
      "type": "ClassDeclaration",
      "start": 351,
      "end": 384,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 359,
        "end": 384,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 361,
            "end": 382,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 361,
              "end": 362,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 362,
              "end": 382,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 364,
                "end": 382,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 364,
                    "end": 370
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 373,
                    "end": 382
                  }
                ]
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 357,
        "end": 358,
        "decorators": [],
        "name": "E",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 386,
      "end": 545,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 433,
        "end": 545,
        "body": [
          {
            "type": "IfStatement",
            "start": 439,
            "end": 543,
            "alternate": {
              "type": "BlockStatement",
              "start": 500,
              "end": 543,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 510,
                  "end": 537,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 516,
                      "end": 536,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 516,
                        "end": 532,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 517,
                          "end": 532,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 519,
                            "end": 532,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 521,
                                "end": 530,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 521,
                                  "end": 522,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 522,
                                  "end": 530,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 524,
                                    "end": 530
                                  }
                                }
                              }
                            ]
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 535,
                        "end": 536,
                        "decorators": [],
                        "name": "v",
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 459,
              "end": 490,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 469,
                  "end": 484,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 475,
                      "end": 483,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 475,
                        "end": 479,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 476,
                          "end": 479,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 478,
                            "end": 479,
                            "typeName": {
                              "type": "Identifier",
                              "start": 478,
                              "end": 479,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 482,
                        "end": 483,
                        "decorators": [],
                        "name": "v",
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 443,
              "end": 457,
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "start": 443,
                "end": 444,
                "decorators": [],
                "name": "v",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 456,
                "end": 457,
                "decorators": [],
                "name": "E",
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
        "start": 395,
        "end": 397,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 411,
          "end": 431,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 412,
            "end": 431,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 414,
              "end": 431,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 414,
                  "end": 415,
                  "typeName": {
                    "type": "Identifier",
                    "start": 414,
                    "end": 415,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 418,
                  "end": 431,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 420,
                      "end": 429,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 420,
                        "end": 421,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 421,
                        "end": 429,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 423,
                          "end": 429
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 397,
        "end": 410,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 398,
            "end": 409,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 408,
              "end": 409,
              "typeName": {
                "type": "Identifier",
                "start": 408,
                "end": 409,
                "decorators": [],
                "name": "E",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 398,
              "end": 399,
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
  "sourceType": "script",
  "hashbang": null
}
```
