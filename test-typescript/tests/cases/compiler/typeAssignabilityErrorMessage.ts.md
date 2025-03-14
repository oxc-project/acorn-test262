__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 711,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 45,
      "end": 87,
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 87,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 75,
            "end": 85,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 84,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 78,
                "end": 84
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 68,
        "decorators": [],
        "name": "ThroughStream",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 88,
      "end": 188,
      "body": {
        "type": "TSInterfaceBody",
        "start": 109,
        "end": 188,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 115,
            "end": 125,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 124,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 118,
                "end": 124
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 130,
            "end": 140,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 139,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 133,
                "end": 139
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 145,
            "end": 156,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "h",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 146,
              "end": 155,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 148,
                "end": 155
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 161,
            "end": 171,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 170,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 164,
                "end": 170,
                "typeName": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 170,
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 176,
            "end": 186,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "decorators": [],
              "name": "j",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 185,
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 179,
                "end": 185
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 108,
        "decorators": [],
        "name": "ReadStream",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 189,
      "end": 265,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 216,
        "end": 265,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 222,
            "end": 263,
            "argument": {
              "type": "TSAsExpression",
              "start": 229,
              "end": 262,
              "expression": {
                "type": "TSAsExpression",
                "start": 229,
                "end": 245,
                "expression": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 238,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 242,
                  "end": 245
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 249,
                "end": 262,
                "typeName": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 262,
                  "decorators": [],
                  "name": "ThroughStream",
                  "optional": false
                }
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
        "start": 198,
        "end": 201,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [],
      "returnType": {
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
            "end": 215,
            "decorators": [],
            "name": "ReadStream",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 266,
      "end": 342,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 293,
        "end": 342,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 299,
            "end": 340,
            "argument": {
              "type": "TSAsExpression",
              "start": 306,
              "end": 339,
              "expression": {
                "type": "TSAsExpression",
                "start": 306,
                "end": 322,
                "expression": {
                  "type": "Identifier",
                  "start": 306,
                  "end": 315,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 319,
                  "end": 322
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 326,
                "end": 339,
                "typeName": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 339,
                  "decorators": [],
                  "name": "ThroughStream",
                  "optional": false
                }
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
        "start": 275,
        "end": 278,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 280,
        "end": 292,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 282,
          "end": 292,
          "typeName": {
            "type": "Identifier",
            "start": 282,
            "end": 292,
            "decorators": [],
            "name": "ReadStream",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 379,
      "end": 421,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 384,
        "end": 388,
        "decorators": [],
        "name": "Wrap",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 391,
        "end": 421,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 397,
            "end": 419,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 397,
              "end": 405,
              "decorators": [],
              "name": "someProp",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 405,
              "end": 418,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 407,
                "end": 418,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 410,
                  "end": 418,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 411,
                      "end": 417
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 407,
                  "end": 410,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 422,
      "end": 469,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 427,
        "end": 436,
        "decorators": [],
        "name": "OtherWrap",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 439,
        "end": 469,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 445,
            "end": 467,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 445,
              "end": 453,
              "decorators": [],
              "name": "someProp",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 453,
              "end": 466,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 455,
                "end": 466,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 458,
                  "end": 466,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 459,
                      "end": 465
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 455,
                  "end": 458,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 470,
      "end": 509,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 475,
        "end": 478,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 484,
        "end": 509,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 490,
            "end": 507,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 490,
              "end": 493,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 493,
              "end": 506,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 495,
                "end": 506,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 497,
                    "end": 504,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 497,
                      "end": 501,
                      "decorators": [],
                      "name": "what",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 501,
                      "end": 504,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 503,
                        "end": 504,
                        "typeName": {
                          "type": "Identifier",
                          "start": 503,
                          "end": 504,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 478,
        "end": 481,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 479,
            "end": 480,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 479,
              "end": 480,
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
      "start": 510,
      "end": 560,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 515,
        "end": 518,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 524,
        "end": 559,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 524,
            "end": 549,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 530,
                "end": 547,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 530,
                  "end": 533,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 533,
                  "end": 546,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 535,
                    "end": 546,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 537,
                        "end": 544,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 537,
                          "end": 541,
                          "decorators": [],
                          "name": "what",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 541,
                          "end": 544,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 543,
                            "end": 544,
                            "typeName": {
                              "type": "Identifier",
                              "start": 543,
                              "end": 544,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ]
          },
          {
            "type": "TSBooleanKeyword",
            "start": 552,
            "end": 559
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 518,
        "end": 521,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 519,
            "end": 520,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 519,
              "end": 520,
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
      "start": 562,
      "end": 596,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 594,
        "end": 596,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 571,
        "end": 574,
        "decorators": [],
        "name": "fun",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 575,
          "end": 586,
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 580,
            "end": 586,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 582,
              "end": 586,
              "typeName": {
                "type": "Identifier",
                "start": 582,
                "end": 586,
                "decorators": [],
                "name": "Wrap",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 587,
        "end": 593,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 589,
          "end": 593
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 598,
      "end": 630,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 610,
          "end": 629,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 610,
            "end": 629,
            "decorators": [],
            "name": "fooStr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 616,
              "end": 629,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 618,
                "end": 629,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 621,
                  "end": 629,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 622,
                      "end": 628
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 618,
                  "end": 621,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 631,
      "end": 664,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 643,
          "end": 663,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 643,
            "end": 663,
            "decorators": [],
            "name": "otherWrap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 652,
              "end": 663,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 654,
                "end": 663,
                "typeName": {
                  "type": "Identifier",
                  "start": 654,
                  "end": 663,
                  "decorators": [],
                  "name": "OtherWrap",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 666,
      "end": 694,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 670,
          "end": 693,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 670,
            "end": 684,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 671,
              "end": 684,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 673,
                "end": 684,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 676,
                  "end": 684,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 677,
                      "end": 683
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 673,
                  "end": 676,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 687,
            "end": 693,
            "decorators": [],
            "name": "fooStr",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 696,
      "end": 711,
      "expression": {
        "type": "CallExpression",
        "start": 696,
        "end": 710,
        "arguments": [
          {
            "type": "Identifier",
            "start": 700,
            "end": 709,
            "decorators": [],
            "name": "otherWrap",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 696,
          "end": 699,
          "decorators": [],
          "name": "fun",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
