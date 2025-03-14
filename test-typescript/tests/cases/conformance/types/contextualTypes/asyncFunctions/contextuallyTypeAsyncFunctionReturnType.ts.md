__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1820,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 29,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 19,
              "decorators": [],
              "name": "key",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 28,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 21,
                "end": 28,
                "literal": {
                  "type": "Literal",
                  "start": 21,
                  "end": 28,
                  "raw": "\"value\"",
                  "value": "value"
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
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Obj",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 33,
      "end": 100,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 68,
        "end": 100,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 74,
            "end": 98,
            "argument": {
              "type": "ObjectExpression",
              "start": 81,
              "end": 97,
              "properties": [
                {
                  "type": "Property",
                  "start": 83,
                  "end": 95,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 86,
                    "decorators": [],
                    "name": "key",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 88,
                    "end": 95,
                    "raw": "\"value\"",
                    "value": "value"
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 51,
        "decorators": [],
        "name": "fn1",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 53,
        "end": 67,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 55,
          "end": 67,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 62,
            "end": 67,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 63,
                "end": 66,
                "typeName": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 66,
                  "decorators": [],
                  "name": "Obj",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 55,
            "end": 62,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 102,
      "end": 219,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 137,
        "end": 219,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 143,
            "end": 217,
            "argument": {
              "type": "NewExpression",
              "start": 150,
              "end": 216,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 162,
                  "end": 215,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 173,
                    "end": 215,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 183,
                        "end": 209,
                        "expression": {
                          "type": "CallExpression",
                          "start": 183,
                          "end": 208,
                          "arguments": [
                            {
                              "type": "ObjectExpression",
                              "start": 191,
                              "end": 207,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 193,
                                  "end": 205,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 193,
                                    "end": 196,
                                    "decorators": [],
                                    "name": "key",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "start": 198,
                                    "end": 205,
                                    "raw": "\"value\"",
                                    "value": "value"
                                  }
                                }
                              ]
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 183,
                            "end": 190,
                            "decorators": [],
                            "name": "resolve",
                            "optional": false
                          },
                          "optional": false
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
                      "start": 162,
                      "end": 169,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 154,
                "end": 161,
                "decorators": [],
                "name": "Promise",
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
        "start": 117,
        "end": 120,
        "decorators": [],
        "name": "fn2",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 122,
        "end": 136,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 124,
          "end": 136,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 131,
            "end": 136,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 132,
                "end": 135,
                "typeName": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 135,
                  "decorators": [],
                  "name": "Obj",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 124,
            "end": 131,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 221,
      "end": 294,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 256,
        "end": 294,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 262,
            "end": 292,
            "argument": {
              "type": "AwaitExpression",
              "start": 269,
              "end": 291,
              "argument": {
                "type": "ObjectExpression",
                "start": 275,
                "end": 291,
                "properties": [
                  {
                    "type": "Property",
                    "start": 277,
                    "end": 289,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 280,
                      "decorators": [],
                      "name": "key",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 282,
                      "end": 289,
                      "raw": "\"value\"",
                      "value": "value"
                    }
                  }
                ]
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
        "start": 236,
        "end": 239,
        "decorators": [],
        "name": "fn3",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 241,
        "end": 255,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 243,
          "end": 255,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 250,
            "end": 255,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 251,
                "end": 254,
                "typeName": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 254,
                  "decorators": [],
                  "name": "Obj",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 243,
            "end": 250,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 296,
      "end": 419,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 331,
        "end": 419,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 337,
            "end": 417,
            "argument": {
              "type": "AwaitExpression",
              "start": 344,
              "end": 416,
              "argument": {
                "type": "NewExpression",
                "start": 350,
                "end": 416,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 362,
                    "end": 415,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 373,
                      "end": 415,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 383,
                          "end": 409,
                          "expression": {
                            "type": "CallExpression",
                            "start": 383,
                            "end": 408,
                            "arguments": [
                              {
                                "type": "ObjectExpression",
                                "start": 391,
                                "end": 407,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 393,
                                    "end": 405,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 393,
                                      "end": 396,
                                      "decorators": [],
                                      "name": "key",
                                      "optional": false
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "Literal",
                                      "start": 398,
                                      "end": 405,
                                      "raw": "\"value\"",
                                      "value": "value"
                                    }
                                  }
                                ]
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 383,
                              "end": 390,
                              "decorators": [],
                              "name": "resolve",
                              "optional": false
                            },
                            "optional": false
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
                        "start": 362,
                        "end": 369,
                        "decorators": [],
                        "name": "resolve",
                        "optional": false
                      }
                    ]
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 354,
                  "end": 361,
                  "decorators": [],
                  "name": "Promise",
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
        "start": 311,
        "end": 314,
        "decorators": [],
        "name": "fn4",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 316,
        "end": 330,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 318,
          "end": 330,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 325,
            "end": 330,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 326,
                "end": 329,
                "typeName": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 329,
                  "decorators": [],
                  "name": "Obj",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 318,
            "end": 325,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 421,
      "end": 467,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 443,
        "end": 467,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 447,
            "end": 465,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 455,
              "end": 464,
              "decorators": [],
              "name": "_runnable",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 435,
        "end": 442,
        "decorators": [],
        "name": "Context",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 468,
      "end": 500,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 473,
        "end": 477,
        "decorators": [],
        "name": "Done",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 480,
        "end": 499,
        "params": [
          {
            "type": "Identifier",
            "start": 481,
            "end": 490,
            "decorators": [],
            "name": "err",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 485,
              "end": 490,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 487,
                "end": 490
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 492,
          "end": 499,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 495,
            "end": 499
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 501,
      "end": 549,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 506,
        "end": 510,
        "decorators": [],
        "name": "Func",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 513,
        "end": 548,
        "params": [
          {
            "type": "Identifier",
            "start": 514,
            "end": 527,
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 518,
              "end": 527,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 520,
                "end": 527,
                "typeName": {
                  "type": "Identifier",
                  "start": 520,
                  "end": 527,
                  "decorators": [],
                  "name": "Context",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 529,
            "end": 539,
            "decorators": [],
            "name": "done",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 533,
              "end": 539,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 535,
                "end": 539,
                "typeName": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 539,
                  "decorators": [],
                  "name": "Done",
                  "optional": false
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 541,
          "end": 548,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 544,
            "end": 548
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 550,
      "end": 603,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 555,
        "end": 564,
        "decorators": [],
        "name": "AsyncFunc",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 567,
        "end": 602,
        "params": [
          {
            "type": "Identifier",
            "start": 568,
            "end": 581,
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 572,
              "end": 581,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 574,
                "end": 581,
                "typeName": {
                  "type": "Identifier",
                  "start": 574,
                  "end": 581,
                  "decorators": [],
                  "name": "Context",
                  "optional": false
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 583,
          "end": 602,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 586,
            "end": 602,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 597,
              "end": 602,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 598,
                  "end": 601
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 586,
              "end": 597,
              "decorators": [],
              "name": "PromiseLike",
              "optional": false
            }
          }
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 605,
      "end": 753,
      "body": {
        "type": "TSInterfaceBody",
        "start": 628,
        "end": 753,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 632,
            "end": 649,
            "params": [
              {
                "type": "Identifier",
                "start": 633,
                "end": 641,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 635,
                  "end": 641,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 637,
                    "end": 641,
                    "typeName": {
                      "type": "Identifier",
                      "start": 637,
                      "end": 641,
                      "decorators": [],
                      "name": "Func",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 642,
              "end": 648,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 644,
                "end": 648
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 652,
            "end": 674,
            "params": [
              {
                "type": "Identifier",
                "start": 653,
                "end": 666,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 655,
                  "end": 666,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 657,
                    "end": 666,
                    "typeName": {
                      "type": "Identifier",
                      "start": 657,
                      "end": 666,
                      "decorators": [],
                      "name": "AsyncFunc",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 667,
              "end": 673,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 669,
                "end": 673
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 677,
            "end": 710,
            "params": [
              {
                "type": "Identifier",
                "start": 678,
                "end": 691,
                "decorators": [],
                "name": "title",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 683,
                  "end": 691,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 685,
                    "end": 691
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 693,
                "end": 702,
                "decorators": [],
                "name": "fn",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 696,
                  "end": 702,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 698,
                    "end": 702,
                    "typeName": {
                      "type": "Identifier",
                      "start": 698,
                      "end": 702,
                      "decorators": [],
                      "name": "Func",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 703,
              "end": 709,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 705,
                "end": 709
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 713,
            "end": 751,
            "params": [
              {
                "type": "Identifier",
                "start": 714,
                "end": 727,
                "decorators": [],
                "name": "title",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 719,
                  "end": 727,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 721,
                    "end": 727
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 729,
                "end": 743,
                "decorators": [],
                "name": "fn",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 732,
                  "end": 743,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 734,
                    "end": 743,
                    "typeName": {
                      "type": "Identifier",
                      "start": 734,
                      "end": 743,
                      "decorators": [],
                      "name": "AsyncFunc",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 744,
              "end": 750,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 746,
                "end": 750
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 615,
        "end": 627,
        "decorators": [],
        "name": "TestFunction",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 755,
      "end": 788,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 769,
          "end": 787,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 769,
            "end": 787,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 773,
              "end": 787,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 775,
                "end": 787,
                "typeName": {
                  "type": "Identifier",
                  "start": 775,
                  "end": 787,
                  "decorators": [],
                  "name": "TestFunction",
                  "optional": false
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
      "type": "TSInterfaceDeclaration",
      "start": 790,
      "end": 924,
      "body": {
        "type": "TSInterfaceBody",
        "start": 816,
        "end": 924,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 820,
            "end": 832,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 820,
              "end": 823,
              "decorators": [],
              "name": "pid",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 823,
              "end": 831,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 825,
                "end": 831
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 835,
            "end": 848,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 835,
              "end": 839,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 839,
              "end": 847,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 841,
                "end": 847
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 851,
            "end": 867,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 851,
              "end": 857,
              "decorators": [],
              "name": "memory",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 858,
              "end": 866,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 860,
                "end": 866
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 870,
            "end": 891,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 870,
              "end": 881,
              "decorators": [],
              "name": "commandLine",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 882,
              "end": 890,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 884,
                "end": 890
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 894,
            "end": 922,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 894,
              "end": 902,
              "decorators": [],
              "name": "children",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 902,
              "end": 921,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 904,
                "end": 921,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 904,
                  "end": 919,
                  "typeName": {
                    "type": "Identifier",
                    "start": 904,
                    "end": 919,
                    "decorators": [],
                    "name": "ProcessTreeNode",
                    "optional": false
                  }
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
        "start": 800,
        "end": 815,
        "decorators": [],
        "name": "ProcessTreeNode",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 926,
      "end": 1037,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 933,
        "end": 1037,
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 950,
          "end": 964,
          "decorators": [],
          "name": "getProcessTree",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 968,
            "end": 983,
            "decorators": [],
            "name": "rootPid",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 975,
              "end": 983,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 977,
                "end": 983
              }
            }
          },
          {
            "type": "Identifier",
            "start": 987,
            "end": 1028,
            "decorators": [],
            "name": "callback",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 995,
              "end": 1028,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 997,
                "end": 1028,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 998,
                    "end": 1019,
                    "decorators": [],
                    "name": "tree",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1002,
                      "end": 1019,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1004,
                        "end": 1019,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1004,
                          "end": 1019,
                          "decorators": [],
                          "name": "ProcessTreeNode",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1021,
                  "end": 1028,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1024,
                    "end": 1028
                  }
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1030,
          "end": 1036,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1032,
            "end": 1036
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 1039,
      "end": 1290,
      "expression": {
        "type": "CallExpression",
        "start": 1039,
        "end": 1289,
        "arguments": [
          {
            "type": "Literal",
            "start": 1044,
            "end": 1066,
            "raw": "\"windows-process-tree\"",
            "value": "windows-process-tree"
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 1068,
            "end": 1288,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 1080,
              "end": 1288,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1084,
                  "end": 1286,
                  "argument": {
                    "type": "NewExpression",
                    "start": 1091,
                    "end": 1285,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 1103,
                        "end": 1284,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 1124,
                          "end": 1284,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1130,
                              "end": 1280,
                              "expression": {
                                "type": "CallExpression",
                                "start": 1130,
                                "end": 1279,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 1145,
                                    "end": 1148,
                                    "raw": "123",
                                    "value": 123
                                  },
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "start": 1150,
                                    "end": 1278,
                                    "async": false,
                                    "body": {
                                      "type": "BlockStatement",
                                      "start": 1160,
                                      "end": 1278,
                                      "body": [
                                        {
                                          "type": "IfStatement",
                                          "start": 1168,
                                          "end": 1272,
                                          "alternate": {
                                            "type": "BlockStatement",
                                            "start": 1212,
                                            "end": 1272,
                                            "body": [
                                              {
                                                "type": "ExpressionStatement",
                                                "start": 1222,
                                                "end": 1264,
                                                "expression": {
                                                  "type": "CallExpression",
                                                  "start": 1222,
                                                  "end": 1263,
                                                  "arguments": [
                                                    {
                                                      "type": "NewExpression",
                                                      "start": 1229,
                                                      "end": 1262,
                                                      "arguments": [
                                                        {
                                                          "type": "Literal",
                                                          "start": 1239,
                                                          "end": 1261,
                                                          "raw": "\"windows-process-tree\"",
                                                          "value": "windows-process-tree"
                                                        }
                                                      ],
                                                      "callee": {
                                                        "type": "Identifier",
                                                        "start": 1233,
                                                        "end": 1238,
                                                        "decorators": [],
                                                        "name": "Error",
                                                        "optional": false
                                                      }
                                                    }
                                                  ],
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "start": 1222,
                                                    "end": 1228,
                                                    "decorators": [],
                                                    "name": "reject",
                                                    "optional": false
                                                  },
                                                  "optional": false
                                                }
                                              }
                                            ]
                                          },
                                          "consequent": {
                                            "type": "BlockStatement",
                                            "start": 1178,
                                            "end": 1206,
                                            "body": [
                                              {
                                                "type": "ExpressionStatement",
                                                "start": 1188,
                                                "end": 1198,
                                                "expression": {
                                                  "type": "CallExpression",
                                                  "start": 1188,
                                                  "end": 1197,
                                                  "arguments": [],
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "start": 1188,
                                                    "end": 1195,
                                                    "decorators": [],
                                                    "name": "resolve",
                                                    "optional": false
                                                  },
                                                  "optional": false
                                                }
                                              }
                                            ]
                                          },
                                          "test": {
                                            "type": "Identifier",
                                            "start": 1172,
                                            "end": 1176,
                                            "decorators": [],
                                            "name": "tree",
                                            "optional": false
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
                                        "start": 1151,
                                        "end": 1155,
                                        "decorators": [],
                                        "name": "tree",
                                        "optional": false
                                      }
                                    ]
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 1130,
                                  "end": 1144,
                                  "decorators": [],
                                  "name": "getProcessTree",
                                  "optional": false
                                },
                                "optional": false
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
                            "start": 1104,
                            "end": 1111,
                            "decorators": [],
                            "name": "resolve",
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 1113,
                            "end": 1119,
                            "decorators": [],
                            "name": "reject",
                            "optional": false
                          }
                        ]
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1095,
                      "end": 1102,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1039,
          "end": 1043,
          "decorators": [],
          "name": "test",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1292,
      "end": 1383,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1318,
        "end": 1383,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1322,
            "end": 1351,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1322,
              "end": 1341,
              "decorators": [],
              "name": "isApplicationScoped",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1341,
              "end": 1350,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1343,
                "end": 1350
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1354,
            "end": 1381,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1354,
              "end": 1365,
              "decorators": [],
              "name": "publisherId",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1365,
              "end": 1380,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1367,
                "end": 1380,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1367,
                    "end": 1373
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 1376,
                    "end": 1380
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1302,
        "end": 1317,
        "decorators": [],
        "name": "ILocalExtension",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1384,
      "end": 1424,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1389,
        "end": 1397,
        "decorators": [],
        "name": "Metadata",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1400,
        "end": 1423,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1404,
            "end": 1421,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1404,
              "end": 1411,
              "decorators": [],
              "name": "updated",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1411,
              "end": 1420,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1413,
                "end": 1420
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1425,
      "end": 1514,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1442,
        "end": 1454,
        "decorators": [],
        "name": "scanMetadata",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1458,
          "end": 1480,
          "decorators": [],
          "name": "local",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1463,
            "end": 1480,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1465,
              "end": 1480,
              "typeName": {
                "type": "Identifier",
                "start": 1465,
                "end": 1480,
                "decorators": [],
                "name": "ILocalExtension",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1482,
        "end": 1513,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1484,
          "end": 1513,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1491,
            "end": 1513,
            "params": [
              {
                "type": "TSUnionType",
                "start": 1492,
                "end": 1512,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1492,
                    "end": 1500,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1492,
                      "end": 1500,
                      "decorators": [],
                      "name": "Metadata",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1503,
                    "end": 1512
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1484,
            "end": 1491,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1516,
      "end": 1819,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1600,
        "end": 1819,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1604,
            "end": 1817,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1610,
                "end": 1816,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1610,
                  "end": 1663,
                  "decorators": [],
                  "name": "extensions",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1620,
                    "end": 1663,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1622,
                      "end": 1663,
                      "elementType": {
                        "type": "TSTupleType",
                        "start": 1622,
                        "end": 1661,
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "start": 1623,
                            "end": 1638,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1623,
                              "end": 1638,
                              "decorators": [],
                              "name": "ILocalExtension",
                              "optional": false
                            }
                          },
                          {
                            "type": "TSUnionType",
                            "start": 1640,
                            "end": 1660,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 1640,
                                "end": 1648,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1640,
                                  "end": 1648,
                                  "decorators": [],
                                  "name": "Metadata",
                                  "optional": false
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 1651,
                                "end": 1660
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 1670,
                  "end": 1816,
                  "argument": {
                    "type": "CallExpression",
                    "start": 1676,
                    "end": 1816,
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "start": 1695,
                        "end": 1810,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 1770,
                            "end": 1809,
                            "async": true,
                            "body": {
                              "type": "ArrayExpression",
                              "start": 1783,
                              "end": 1809,
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "start": 1784,
                                  "end": 1785,
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false
                                },
                                {
                                  "type": "AwaitExpression",
                                  "start": 1787,
                                  "end": 1808,
                                  "argument": {
                                    "type": "CallExpression",
                                    "start": 1793,
                                    "end": 1808,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 1806,
                                        "end": 1807,
                                        "decorators": [],
                                        "name": "e",
                                        "optional": false
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 1793,
                                      "end": 1805,
                                      "decorators": [],
                                      "name": "scanMetadata",
                                      "optional": false
                                    },
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1777,
                                "end": 1778,
                                "decorators": [],
                                "name": "e",
                                "optional": false
                              }
                            ]
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1695,
                          "end": 1769,
                          "computed": false,
                          "object": {
                            "type": "CallExpression",
                            "start": 1695,
                            "end": 1756,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "start": 1726,
                                "end": 1755,
                                "async": false,
                                "body": {
                                  "type": "UnaryExpression",
                                  "start": 1733,
                                  "end": 1755,
                                  "argument": {
                                    "type": "MemberExpression",
                                    "start": 1734,
                                    "end": 1755,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1734,
                                      "end": 1735,
                                      "decorators": [],
                                      "name": "e",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1736,
                                      "end": 1755,
                                      "decorators": [],
                                      "name": "isApplicationScoped",
                                      "optional": false
                                    }
                                  },
                                  "operator": "!",
                                  "prefix": true
                                },
                                "expression": true,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1727,
                                    "end": 1728,
                                    "decorators": [],
                                    "name": "e",
                                    "optional": false
                                  }
                                ]
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1695,
                              "end": 1725,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 1695,
                                "end": 1709,
                                "decorators": [],
                                "name": "fromExtensions",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1719,
                                "end": 1725,
                                "decorators": [],
                                "name": "filter",
                                "optional": false
                              }
                            },
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1766,
                            "end": 1769,
                            "decorators": [],
                            "name": "map",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1676,
                      "end": 1687,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1676,
                        "end": 1683,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1684,
                        "end": 1687,
                        "decorators": [],
                        "name": "all",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1531,
        "end": 1545,
        "decorators": [],
        "name": "copyExtensions",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1549,
          "end": 1582,
          "decorators": [],
          "name": "fromExtensions",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1563,
            "end": 1582,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 1565,
              "end": 1582,
              "elementType": {
                "type": "TSTypeReference",
                "start": 1565,
                "end": 1580,
                "typeName": {
                  "type": "Identifier",
                  "start": 1565,
                  "end": 1580,
                  "decorators": [],
                  "name": "ILocalExtension",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1584,
        "end": 1599,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1586,
          "end": 1599,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1593,
            "end": 1599,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 1594,
                "end": 1598
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1586,
            "end": 1593,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
