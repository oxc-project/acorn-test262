__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 1210,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 21,
      "end": 59,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 29,
        "end": 59,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 35,
            "end": 57,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 39,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 42,
                "end": 56,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 44,
                    "end": 54,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 45,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 45,
                      "end": 53,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 47,
                        "end": 53
                      }
                    }
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
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 61,
      "end": 98,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 98,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 75,
            "end": 96,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 79,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 82,
                "end": 96,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 84,
                    "end": 94,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 85,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 85,
                      "end": 93,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 87,
                        "end": 93
                      }
                    }
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
        "start": 67,
        "end": 68,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 100,
      "end": 159,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 129,
        "end": 159,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 135,
            "end": 157,
            "argument": {
              "type": "BinaryExpression",
              "start": 142,
              "end": 156,
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "start": 142,
                "end": 143,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 155,
                "end": 156,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
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
        "start": 109,
        "end": 112,
        "decorators": [],
        "name": "isA",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 113,
          "end": 119,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 114,
            "end": 119,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 116,
              "end": 119
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 120,
        "end": 128,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 122,
          "end": 128,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 127,
            "end": 128,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 127,
              "end": 128,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 161,
      "end": 220,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 190,
        "end": 220,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 196,
            "end": 218,
            "argument": {
              "type": "BinaryExpression",
              "start": 203,
              "end": 217,
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "start": 203,
                "end": 204,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 216,
                "end": 217,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
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
        "start": 170,
        "end": 173,
        "decorators": [],
        "name": "isB",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 174,
          "end": 180,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 175,
            "end": 180,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 177,
              "end": 180
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 181,
        "end": 189,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 183,
          "end": 189,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 183,
            "end": 184,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 188,
            "end": 189,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 188,
              "end": 189,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 188,
                "end": 189,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 222,
      "end": 401,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 244,
        "end": 401,
        "body": [
          {
            "type": "WhileStatement",
            "start": 250,
            "end": 399,
            "body": {
              "type": "BlockStatement",
              "start": 263,
              "end": 399,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 273,
                  "end": 393,
                  "alternate": {
                    "type": "IfStatement",
                    "start": 340,
                    "end": 393,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 360,
                      "end": 393,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 374,
                          "end": 383,
                          "directive": null,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 374,
                            "end": 382,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 374,
                              "end": 380,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 374,
                                "end": 375,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 376,
                                "end": 380,
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 381,
                              "end": 382,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 344,
                      "end": 358,
                      "operator": "instanceof",
                      "left": {
                        "type": "Identifier",
                        "start": 344,
                        "end": 345,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 357,
                        "end": 358,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 293,
                    "end": 326,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 307,
                        "end": 316,
                        "directive": null,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 307,
                          "end": 315,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 307,
                            "end": 313,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 307,
                              "end": 308,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 309,
                              "end": 313,
                              "decorators": [],
                              "name": "prop",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 314,
                            "end": 315,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 277,
                    "end": 291,
                    "operator": "instanceof",
                    "left": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 278,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 290,
                      "end": 291,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 257,
              "end": 261,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 233,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 234,
          "end": 242,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 235,
            "end": 242,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 237,
              "end": 242,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 237,
                  "end": 238,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 238,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 241,
                  "end": 242,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 241,
                    "end": 242,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 403,
      "end": 566,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 425,
        "end": 566,
        "body": [
          {
            "type": "WhileStatement",
            "start": 431,
            "end": 564,
            "body": {
              "type": "BlockStatement",
              "start": 444,
              "end": 564,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 454,
                  "end": 558,
                  "alternate": {
                    "type": "IfStatement",
                    "start": 513,
                    "end": 558,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 525,
                      "end": 558,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 539,
                          "end": 548,
                          "directive": null,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 539,
                            "end": 547,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 539,
                              "end": 545,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 539,
                                "end": 540,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 541,
                                "end": 545,
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 546,
                              "end": 547,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "CallExpression",
                      "start": 517,
                      "end": 523,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 521,
                          "end": 522,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 517,
                        "end": 520,
                        "decorators": [],
                        "name": "isB",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 466,
                    "end": 499,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 480,
                        "end": 489,
                        "directive": null,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 480,
                          "end": 488,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 480,
                            "end": 486,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 480,
                              "end": 481,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 482,
                              "end": 486,
                              "decorators": [],
                              "name": "prop",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 487,
                            "end": 488,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "CallExpression",
                    "start": 458,
                    "end": 464,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 462,
                        "end": 463,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 458,
                      "end": 461,
                      "decorators": [],
                      "name": "isA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 438,
              "end": 442,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 412,
        "end": 414,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 415,
          "end": 423,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 416,
            "end": 423,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 418,
              "end": 423,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 418,
                  "end": 419,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 418,
                    "end": 419,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 422,
                  "end": 423,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 422,
                    "end": 423,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 590,
      "end": 704,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 601,
        "end": 704,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 607,
            "end": 617,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 607,
              "end": 608,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 608,
              "end": 616,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 610,
                "end": 616
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 632,
            "end": 702,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 632,
              "end": 643,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 643,
              "end": 702,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 646,
                "end": 702,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 656,
                    "end": 696,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 685,
                      "end": 696,
                      "body": []
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 660,
                      "end": 683,
                      "operator": "instanceof",
                      "left": {
                        "type": "ThisExpression",
                        "start": 660,
                        "end": 664
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 676,
                        "end": 683,
                        "decorators": [],
                        "name": "Boolean",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 596,
        "end": 600,
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 706,
      "end": 771,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 717,
        "end": 771,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 723,
            "end": 733,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 723,
              "end": 724,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 724,
              "end": 732,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 726,
                "end": 732
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 748,
            "end": 769,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 748,
              "end": 759,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 759,
              "end": 769,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 762,
                "end": 769,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 712,
        "end": 716,
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 796,
      "end": 836,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 808,
        "end": 836,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 814,
            "end": 834,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 814,
              "end": 821,
              "decorators": [],
              "name": "a_count",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 821,
              "end": 829,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 823,
                "end": 829
              }
            },
            "value": {
              "type": "Literal",
              "start": 832,
              "end": 833,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 802,
        "end": 807,
        "decorators": [],
        "name": "AInfo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 838,
      "end": 878,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 850,
        "end": 878,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 856,
            "end": 876,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 856,
              "end": 863,
              "decorators": [],
              "name": "b_count",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 863,
              "end": 871,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 865,
                "end": 871
              }
            },
            "value": {
              "type": "Literal",
              "start": 874,
              "end": 875,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 844,
        "end": 849,
        "decorators": [],
        "name": "BInfo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 880,
      "end": 914,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 891,
        "end": 914,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 897,
            "end": 912,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 897,
              "end": 899,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 899,
              "end": 907,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 901,
                "end": 907
              }
            },
            "value": {
              "type": "Literal",
              "start": 910,
              "end": 911,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 886,
        "end": 890,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 916,
      "end": 959,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 938,
        "end": 959,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 944,
            "end": 957,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 944,
              "end": 948,
              "decorators": [],
              "name": "info",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 949,
              "end": 956,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 951,
                "end": 956,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 951,
                  "end": 956,
                  "decorators": [],
                  "name": "AInfo",
                  "optional": false,
                  "typeAnnotation": null
                }
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
        "start": 922,
        "end": 924,
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 933,
        "end": 937,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 961,
      "end": 1004,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 983,
        "end": 1004,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 989,
            "end": 1002,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 989,
              "end": 993,
              "decorators": [],
              "name": "info",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 994,
              "end": 1001,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 996,
                "end": 1001,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 996,
                  "end": 1001,
                  "decorators": [],
                  "name": "BInfo",
                  "optional": false,
                  "typeAnnotation": null
                }
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
        "start": 967,
        "end": 969,
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 978,
        "end": 982,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1006,
      "end": 1037,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1010,
          "end": 1036,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1010,
            "end": 1022,
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1016,
              "end": 1022,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1018,
                "end": 1022,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1018,
                  "end": 1022,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1025,
            "end": 1036,
            "expression": {
              "type": "Literal",
              "start": 1025,
              "end": 1029,
              "raw": "null",
              "value": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1033,
              "end": 1036
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "WhileStatement",
      "start": 1039,
      "end": 1209,
      "body": {
        "type": "BlockStatement",
        "start": 1054,
        "end": 1209,
        "body": [
          {
            "type": "IfStatement",
            "start": 1060,
            "end": 1207,
            "alternate": {
              "type": "IfStatement",
              "start": 1136,
              "end": 1207,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 1162,
                "end": 1207,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1172,
                    "end": 1201,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1178,
                        "end": 1200,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1178,
                          "end": 1186,
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1179,
                            "end": 1186,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1181,
                              "end": 1186,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1181,
                                "end": 1186,
                                "decorators": [],
                                "name": "BInfo",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 1189,
                          "end": 1200,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 1189,
                            "end": 1195,
                            "decorators": [],
                            "name": "target",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1196,
                            "end": 1200,
                            "decorators": [],
                            "name": "info",
                            "optional": false,
                            "typeAnnotation": null
                          }
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
                "start": 1140,
                "end": 1160,
                "operator": "instanceof",
                "left": {
                  "type": "Identifier",
                  "start": 1140,
                  "end": 1146,
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 1158,
                  "end": 1160,
                  "decorators": [],
                  "name": "B2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1086,
              "end": 1126,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1096,
                  "end": 1120,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1096,
                    "end": 1119,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 1096,
                      "end": 1115,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 1096,
                        "end": 1107,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1096,
                          "end": 1102,
                          "decorators": [],
                          "name": "target",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1103,
                          "end": 1107,
                          "decorators": [],
                          "name": "info",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1108,
                        "end": 1115,
                        "decorators": [],
                        "name": "a_count",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1118,
                      "end": 1119,
                      "raw": "3",
                      "value": 3
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1064,
              "end": 1084,
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "start": 1064,
                "end": 1070,
                "decorators": [],
                "name": "target",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1082,
                "end": 1084,
                "decorators": [],
                "name": "A2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "Identifier",
        "start": 1046,
        "end": 1052,
        "decorators": [],
        "name": "target",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
