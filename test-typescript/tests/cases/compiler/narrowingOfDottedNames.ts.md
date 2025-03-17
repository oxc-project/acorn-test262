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
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 29,
        "end": 59,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 35,
            "end": 57,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 39,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 45,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 45,
                      "end": 53,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 47,
                        "end": 53
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 61,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 98,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 75,
            "end": 96,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 79,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 85,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 85,
                      "end": 93,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 87,
                        "end": 93
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 100,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 112,
        "name": "isA",
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
          "start": 113,
          "end": 119,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 114,
            "end": 119,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 116,
              "end": 119
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "left": {
                "type": "Identifier",
                "start": 142,
                "end": 143,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 155,
                "end": 156,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 120,
        "end": 128,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 122,
          "end": 128,
          "parameterName": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 127,
            "end": 128,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 127,
              "end": 128,
              "typeName": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "name": "A",
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
    {
      "type": "FunctionDeclaration",
      "start": 161,
      "end": 220,
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 173,
        "name": "isB",
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
          "start": 174,
          "end": 180,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 175,
            "end": 180,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 177,
              "end": 180
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "left": {
                "type": "Identifier",
                "start": 203,
                "end": 204,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 216,
                "end": 217,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 181,
        "end": 189,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 183,
          "end": 189,
          "parameterName": {
            "type": "Identifier",
            "start": 183,
            "end": 184,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 188,
            "end": 189,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 188,
              "end": 189,
              "typeName": {
                "type": "Identifier",
                "start": 188,
                "end": 189,
                "name": "B",
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
    {
      "type": "FunctionDeclaration",
      "start": 222,
      "end": 401,
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 233,
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
          "start": 234,
          "end": 242,
          "name": "x",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 238,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 241,
                  "end": 242,
                  "typeName": {
                    "type": "Identifier",
                    "start": 241,
                    "end": 242,
                    "name": "B",
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
      "body": {
        "type": "BlockStatement",
        "start": 244,
        "end": 401,
        "body": [
          {
            "type": "WhileStatement",
            "start": 250,
            "end": 399,
            "test": {
              "type": "Literal",
              "start": 257,
              "end": 261,
              "value": true,
              "raw": "true"
            },
            "body": {
              "type": "BlockStatement",
              "start": 263,
              "end": 399,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 273,
                  "end": 393,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 277,
                    "end": 291,
                    "left": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 278,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "instanceof",
                    "right": {
                      "type": "Identifier",
                      "start": 290,
                      "end": 291,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                        "expression": {
                          "type": "MemberExpression",
                          "start": 307,
                          "end": 315,
                          "object": {
                            "type": "MemberExpression",
                            "start": 307,
                            "end": 313,
                            "object": {
                              "type": "Identifier",
                              "start": 307,
                              "end": 308,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 309,
                              "end": 313,
                              "name": "prop",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 314,
                            "end": 315,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "IfStatement",
                    "start": 340,
                    "end": 393,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 344,
                      "end": 358,
                      "left": {
                        "type": "Identifier",
                        "start": 344,
                        "end": 345,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "start": 357,
                        "end": 358,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 360,
                      "end": 393,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 374,
                          "end": 383,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 374,
                            "end": 382,
                            "object": {
                              "type": "MemberExpression",
                              "start": 374,
                              "end": 380,
                              "object": {
                                "type": "Identifier",
                                "start": 374,
                                "end": 375,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 376,
                                "end": 380,
                                "name": "prop",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 381,
                              "end": 382,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 403,
      "end": 566,
      "id": {
        "type": "Identifier",
        "start": 412,
        "end": 414,
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
          "start": 415,
          "end": 423,
          "name": "x",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 418,
                    "end": 419,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 422,
                  "end": 423,
                  "typeName": {
                    "type": "Identifier",
                    "start": 422,
                    "end": 423,
                    "name": "B",
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
      "body": {
        "type": "BlockStatement",
        "start": 425,
        "end": 566,
        "body": [
          {
            "type": "WhileStatement",
            "start": 431,
            "end": 564,
            "test": {
              "type": "Literal",
              "start": 438,
              "end": 442,
              "value": true,
              "raw": "true"
            },
            "body": {
              "type": "BlockStatement",
              "start": 444,
              "end": 564,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 454,
                  "end": 558,
                  "test": {
                    "type": "CallExpression",
                    "start": 458,
                    "end": 464,
                    "callee": {
                      "type": "Identifier",
                      "start": 458,
                      "end": 461,
                      "name": "isA",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 462,
                        "end": 463,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
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
                        "expression": {
                          "type": "MemberExpression",
                          "start": 480,
                          "end": 488,
                          "object": {
                            "type": "MemberExpression",
                            "start": 480,
                            "end": 486,
                            "object": {
                              "type": "Identifier",
                              "start": 480,
                              "end": 481,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 482,
                              "end": 486,
                              "name": "prop",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 487,
                            "end": 488,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "IfStatement",
                    "start": 513,
                    "end": 558,
                    "test": {
                      "type": "CallExpression",
                      "start": 517,
                      "end": 523,
                      "callee": {
                        "type": "Identifier",
                        "start": 517,
                        "end": 520,
                        "name": "isB",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 521,
                          "end": 522,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 525,
                      "end": 558,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 539,
                          "end": 548,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 539,
                            "end": 547,
                            "object": {
                              "type": "MemberExpression",
                              "start": 539,
                              "end": 545,
                              "object": {
                                "type": "Identifier",
                                "start": 539,
                                "end": 540,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 541,
                                "end": 545,
                                "name": "prop",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 546,
                              "end": 547,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 590,
      "end": 704,
      "id": {
        "type": "Identifier",
        "start": 596,
        "end": 600,
        "name": "Foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 601,
        "end": 704,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 607,
            "end": 617,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 607,
              "end": 608,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 632,
            "end": 702,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 632,
              "end": 643,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 643,
              "end": 702,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 646,
                "end": 702,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 656,
                    "end": 696,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 660,
                      "end": 683,
                      "left": {
                        "type": "ThisExpression",
                        "start": 660,
                        "end": 664
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "start": 676,
                        "end": 683,
                        "name": "Boolean",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 685,
                      "end": 696,
                      "body": []
                    },
                    "alternate": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 706,
      "end": 771,
      "id": {
        "type": "Identifier",
        "start": 712,
        "end": 716,
        "name": "Foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 717,
        "end": 771,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 723,
            "end": 733,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 723,
              "end": 724,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 748,
            "end": 769,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 748,
              "end": 759,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 759,
              "end": 769,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 762,
                "end": 769,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 796,
      "end": 836,
      "id": {
        "type": "Identifier",
        "start": 802,
        "end": 807,
        "name": "AInfo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 808,
        "end": 836,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 814,
            "end": 834,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 814,
              "end": 821,
              "name": "a_count",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 832,
              "end": 833,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 838,
      "end": 878,
      "id": {
        "type": "Identifier",
        "start": 844,
        "end": 849,
        "name": "BInfo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 850,
        "end": 878,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 856,
            "end": 876,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 856,
              "end": 863,
              "name": "b_count",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 874,
              "end": 875,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 880,
      "end": 914,
      "id": {
        "type": "Identifier",
        "start": 886,
        "end": 890,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 891,
        "end": 914,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 897,
            "end": 912,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 897,
              "end": 899,
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 910,
              "end": 911,
              "value": 0,
              "raw": "0"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 916,
      "end": 959,
      "id": {
        "type": "Identifier",
        "start": 922,
        "end": 924,
        "name": "A2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 933,
        "end": 937,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 938,
        "end": 959,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 944,
            "end": 957,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 944,
              "end": 948,
              "name": "info",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 949,
              "end": 956,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 951,
                "end": 956,
                "typeName": {
                  "type": "Identifier",
                  "start": 951,
                  "end": 956,
                  "name": "AInfo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 961,
      "end": 1004,
      "id": {
        "type": "Identifier",
        "start": 967,
        "end": 969,
        "name": "B2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 978,
        "end": 982,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 983,
        "end": 1004,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 989,
            "end": 1002,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 989,
              "end": 993,
              "name": "info",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 994,
              "end": 1001,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 996,
                "end": 1001,
                "typeName": {
                  "type": "Identifier",
                  "start": 996,
                  "end": 1001,
                  "name": "BInfo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 1010,
            "end": 1022,
            "name": "target",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1016,
              "end": 1022,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1018,
                "end": 1022,
                "typeName": {
                  "type": "Identifier",
                  "start": 1018,
                  "end": 1022,
                  "name": "Base",
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
            "type": "TSAsExpression",
            "start": 1025,
            "end": 1036,
            "expression": {
              "type": "Literal",
              "start": 1025,
              "end": 1029,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1033,
              "end": 1036
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "WhileStatement",
      "start": 1039,
      "end": 1209,
      "test": {
        "type": "Identifier",
        "start": 1046,
        "end": 1052,
        "name": "target",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1054,
        "end": 1209,
        "body": [
          {
            "type": "IfStatement",
            "start": 1060,
            "end": 1207,
            "test": {
              "type": "BinaryExpression",
              "start": 1064,
              "end": 1084,
              "left": {
                "type": "Identifier",
                "start": 1064,
                "end": 1070,
                "name": "target",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 1082,
                "end": 1084,
                "name": "A2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1096,
                    "end": 1119,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 1096,
                      "end": 1115,
                      "object": {
                        "type": "MemberExpression",
                        "start": 1096,
                        "end": 1107,
                        "object": {
                          "type": "Identifier",
                          "start": 1096,
                          "end": 1102,
                          "name": "target",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1103,
                          "end": 1107,
                          "name": "info",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1108,
                        "end": 1115,
                        "name": "a_count",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1118,
                      "end": 1119,
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "IfStatement",
              "start": 1136,
              "end": 1207,
              "test": {
                "type": "BinaryExpression",
                "start": 1140,
                "end": 1160,
                "left": {
                  "type": "Identifier",
                  "start": 1140,
                  "end": 1146,
                  "name": "target",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 1158,
                  "end": 1160,
                  "name": "B2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
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
                        "id": {
                          "type": "Identifier",
                          "start": 1178,
                          "end": 1186,
                          "name": "j",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1179,
                            "end": 1186,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1181,
                              "end": 1186,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1181,
                                "end": 1186,
                                "name": "BInfo",
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
                          "type": "MemberExpression",
                          "start": 1189,
                          "end": 1200,
                          "object": {
                            "type": "Identifier",
                            "start": 1189,
                            "end": 1195,
                            "name": "target",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1196,
                            "end": 1200,
                            "name": "info",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  }
                ]
              },
              "alternate": null
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
