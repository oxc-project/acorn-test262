__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 1209,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 21,
      "end": 59,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 29,
        "end": 59,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 35,
            "end": 57,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 39,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 61,
      "end": 98,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 98,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 75,
            "end": 96,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 79,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
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
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 100,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 112,
        "decorators": [],
        "name": "isA",
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
          "parameterName": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 161,
      "end": 220,
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 173,
        "decorators": [],
        "name": "isB",
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
          "parameterName": {
            "type": "Identifier",
            "start": 183,
            "end": 184,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 222,
      "end": 401,
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 233,
        "decorators": [],
        "name": "f1",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 238,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "B",
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
      "returnType": null,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "instanceof",
                    "right": {
                      "type": "Identifier",
                      "start": 290,
                      "end": 291,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 309,
                              "end": 313,
                              "decorators": [],
                              "name": "prop",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 314,
                            "end": 315,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "start": 357,
                        "end": 358,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
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
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 376,
                                "end": 380,
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 381,
                              "end": 382,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 403,
      "end": 566,
      "id": {
        "type": "Identifier",
        "start": 412,
        "end": 414,
        "decorators": [],
        "name": "f2",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 418,
                    "end": 419,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "B",
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
      "returnType": null,
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
                      "decorators": [],
                      "name": "isA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
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
                    "optional": false
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
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 482,
                              "end": 486,
                              "decorators": [],
                              "name": "prop",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 487,
                            "end": 488,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
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
                        "decorators": [],
                        "name": "isB",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
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
                      "optional": false
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
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 541,
                                "end": 545,
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 546,
                              "end": 547,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
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
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 590,
      "end": 704,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 601,
        "end": 704,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 607,
            "end": 617,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 607,
              "end": 608,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 632,
            "end": 702,
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
            "value": {
              "type": "FunctionExpression",
              "start": 643,
              "end": 702,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        "decorators": [],
                        "name": "Boolean",
                        "optional": false,
                        "typeAnnotation": null
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
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 706,
      "end": 771,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 717,
        "end": 771,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 723,
            "end": 733,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 723,
              "end": 724,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 748,
            "end": 769,
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
            "value": {
              "type": "FunctionExpression",
              "start": 759,
              "end": 769,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 762,
                "end": 769,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 796,
      "end": 836,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 808,
        "end": 836,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 814,
            "end": 834,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 814,
              "end": 821,
              "decorators": [],
              "name": "a_count",
              "optional": false,
              "typeAnnotation": null
            },
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
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 838,
      "end": 878,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 850,
        "end": 878,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 856,
            "end": 876,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 856,
              "end": 863,
              "decorators": [],
              "name": "b_count",
              "optional": false,
              "typeAnnotation": null
            },
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
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 880,
      "end": 914,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 891,
        "end": 914,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 897,
            "end": 912,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 897,
              "end": 899,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
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
              "value": 0,
              "raw": "0"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 916,
      "end": 959,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 938,
        "end": 959,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 944,
            "end": 957,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 944,
              "end": 948,
              "decorators": [],
              "name": "info",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "AInfo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 961,
      "end": 1004,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 983,
        "end": 1004,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 989,
            "end": 1002,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 989,
              "end": 993,
              "decorators": [],
              "name": "info",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "BInfo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1006,
      "end": 1037,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1010,
          "end": 1036,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 1018,
                  "end": 1022,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
        "decorators": [],
        "name": "target",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "target",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 1082,
                "end": 1084,
                "decorators": [],
                "name": "A2",
                "optional": false,
                "typeAnnotation": null
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
                          "decorators": [],
                          "name": "target",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1103,
                          "end": 1107,
                          "decorators": [],
                          "name": "info",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1108,
                        "end": 1115,
                        "decorators": [],
                        "name": "a_count",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 1158,
                  "end": 1160,
                  "decorators": [],
                  "name": "B2",
                  "optional": false,
                  "typeAnnotation": null
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1178,
                        "end": 1200,
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 1181,
                                "end": 1186,
                                "decorators": [],
                                "name": "BInfo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 1189,
                          "end": 1200,
                          "object": {
                            "type": "Identifier",
                            "start": 1189,
                            "end": 1195,
                            "decorators": [],
                            "name": "target",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1196,
                            "end": 1200,
                            "decorators": [],
                            "name": "info",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
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
