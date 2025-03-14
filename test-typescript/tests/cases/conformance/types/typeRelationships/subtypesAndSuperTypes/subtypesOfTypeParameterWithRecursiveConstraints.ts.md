__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 82,
  "end": 3666,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 82,
      "end": 106,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 106,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 97,
            "end": 104,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 100,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 103,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 102,
                "end": 103,
                "typeName": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 103,
                  "decorators": [],
                  "name": "T",
                  "optional": false
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
        "start": 88,
        "end": 91,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 91,
        "end": 94,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 92,
            "end": 93,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
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
      "start": 107,
      "end": 1178,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 190,
        "end": 1178,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 206,
            "end": 228,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 210,
                "end": 227,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 212,
                  "decorators": [],
                  "name": "r1",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 215,
                  "end": 227,
                  "alternate": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 227,
                    "decorators": [],
                    "name": "u",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 222,
                    "end": 223,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 215,
                    "end": 219,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 233,
            "end": 255,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 237,
                "end": 254,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 239,
                  "decorators": [],
                  "name": "r1",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 242,
                  "end": 254,
                  "alternate": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 254,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 249,
                    "end": 250,
                    "decorators": [],
                    "name": "u",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 242,
                    "end": 246,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 271,
            "end": 293,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 275,
                "end": 292,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 277,
                  "decorators": [],
                  "name": "r2",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 280,
                  "end": 292,
                  "alternate": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 292,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 287,
                    "end": 288,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 280,
                    "end": 284,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 298,
            "end": 320,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 302,
                "end": 319,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 304,
                  "decorators": [],
                  "name": "r2",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 307,
                  "end": 319,
                  "alternate": {
                    "type": "Identifier",
                    "start": 318,
                    "end": 319,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 314,
                    "end": 315,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 307,
                    "end": 311,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 336,
            "end": 358,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 340,
                "end": 357,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 340,
                  "end": 342,
                  "decorators": [],
                  "name": "r3",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 345,
                  "end": 357,
                  "alternate": {
                    "type": "Identifier",
                    "start": 356,
                    "end": 357,
                    "decorators": [],
                    "name": "u",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 352,
                    "end": 353,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 345,
                    "end": 349,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 363,
            "end": 385,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 367,
                "end": 384,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 369,
                  "decorators": [],
                  "name": "r3",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 372,
                  "end": 384,
                  "alternate": {
                    "type": "Identifier",
                    "start": 383,
                    "end": 384,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 379,
                    "end": 380,
                    "decorators": [],
                    "name": "u",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 372,
                    "end": 376,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 401,
            "end": 434,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 405,
                "end": 433,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 407,
                  "decorators": [],
                  "name": "r4",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 410,
                  "end": 433,
                  "alternate": {
                    "type": "NewExpression",
                    "start": 421,
                    "end": 433,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 425,
                      "end": 428,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 428,
                      "end": 431,
                      "params": [
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
                        }
                      ]
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 417,
                    "end": 418,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 410,
                    "end": 414,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 439,
            "end": 472,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 443,
                "end": 471,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 443,
                  "end": 445,
                  "decorators": [],
                  "name": "r4",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 448,
                  "end": 471,
                  "alternate": {
                    "type": "Identifier",
                    "start": 470,
                    "end": 471,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "start": 455,
                    "end": 467,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 459,
                      "end": 462,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 462,
                      "end": 465,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 463,
                          "end": 464,
                          "typeName": {
                            "type": "Identifier",
                            "start": 463,
                            "end": 464,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "start": 448,
                    "end": 452,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 488,
            "end": 521,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 492,
                "end": 520,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 492,
                  "end": 494,
                  "decorators": [],
                  "name": "r5",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 497,
                  "end": 520,
                  "alternate": {
                    "type": "NewExpression",
                    "start": 508,
                    "end": 520,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 512,
                      "end": 515,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 515,
                      "end": 518,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 516,
                          "end": 517,
                          "typeName": {
                            "type": "Identifier",
                            "start": 516,
                            "end": 517,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 504,
                    "end": 505,
                    "decorators": [],
                    "name": "u",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 497,
                    "end": 501,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 526,
            "end": 559,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 530,
                "end": 558,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 530,
                  "end": 532,
                  "decorators": [],
                  "name": "r5",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 535,
                  "end": 558,
                  "alternate": {
                    "type": "Identifier",
                    "start": 557,
                    "end": 558,
                    "decorators": [],
                    "name": "u",
                    "optional": false
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "start": 542,
                    "end": 554,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 546,
                      "end": 549,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 549,
                      "end": 552,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 550,
                          "end": 551,
                          "typeName": {
                            "type": "Identifier",
                            "start": 550,
                            "end": 551,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "start": 535,
                    "end": 539,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 575,
            "end": 608,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 579,
                "end": 607,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 579,
                  "end": 581,
                  "decorators": [],
                  "name": "r6",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 584,
                  "end": 607,
                  "alternate": {
                    "type": "NewExpression",
                    "start": 595,
                    "end": 607,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 599,
                      "end": 602,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 602,
                      "end": 605,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 603,
                          "end": 604,
                          "typeName": {
                            "type": "Identifier",
                            "start": 603,
                            "end": 604,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 591,
                    "end": 592,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 584,
                    "end": 588,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 613,
            "end": 646,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 617,
                "end": 645,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 617,
                  "end": 619,
                  "decorators": [],
                  "name": "r6",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 622,
                  "end": 645,
                  "alternate": {
                    "type": "Identifier",
                    "start": 644,
                    "end": 645,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "start": 629,
                    "end": 641,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 633,
                      "end": 636,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 636,
                      "end": 639,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 637,
                          "end": 638,
                          "typeName": {
                            "type": "Identifier",
                            "start": 637,
                            "end": 638,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "start": 622,
                    "end": 626,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 663,
            "end": 696,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 667,
                "end": 695,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 667,
                  "end": 669,
                  "decorators": [],
                  "name": "r7",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 672,
                  "end": 695,
                  "alternate": {
                    "type": "NewExpression",
                    "start": 683,
                    "end": 695,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 687,
                      "end": 690,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 690,
                      "end": 693,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 691,
                          "end": 692,
                          "typeName": {
                            "type": "Identifier",
                            "start": 691,
                            "end": 692,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 679,
                    "end": 680,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 672,
                    "end": 676,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 701,
            "end": 734,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 705,
                "end": 733,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 705,
                  "end": 707,
                  "decorators": [],
                  "name": "r7",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 710,
                  "end": 733,
                  "alternate": {
                    "type": "Identifier",
                    "start": 732,
                    "end": 733,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "start": 717,
                    "end": 729,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 721,
                      "end": 724,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 724,
                      "end": 727,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 725,
                          "end": 726,
                          "typeName": {
                            "type": "Identifier",
                            "start": 725,
                            "end": 726,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "start": 710,
                    "end": 714,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 750,
            "end": 783,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 754,
                "end": 782,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 754,
                  "end": 756,
                  "decorators": [],
                  "name": "r8",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 759,
                  "end": 782,
                  "alternate": {
                    "type": "NewExpression",
                    "start": 770,
                    "end": 782,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 774,
                      "end": 777,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 777,
                      "end": 780,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 778,
                          "end": 779,
                          "typeName": {
                            "type": "Identifier",
                            "start": 778,
                            "end": 779,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 766,
                    "end": 767,
                    "decorators": [],
                    "name": "u",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 759,
                    "end": 763,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 788,
            "end": 821,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 792,
                "end": 820,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 792,
                  "end": 794,
                  "decorators": [],
                  "name": "r8",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 797,
                  "end": 820,
                  "alternate": {
                    "type": "Identifier",
                    "start": 819,
                    "end": 820,
                    "decorators": [],
                    "name": "u",
                    "optional": false
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "start": 804,
                    "end": 816,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 808,
                      "end": 811,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 811,
                      "end": 814,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 812,
                          "end": 813,
                          "typeName": {
                            "type": "Identifier",
                            "start": 812,
                            "end": 813,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "start": 797,
                    "end": 801,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 837,
            "end": 870,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 841,
                "end": 869,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 841,
                  "end": 843,
                  "decorators": [],
                  "name": "r9",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 846,
                  "end": 869,
                  "alternate": {
                    "type": "NewExpression",
                    "start": 857,
                    "end": 869,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 861,
                      "end": 864,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 864,
                      "end": 867,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 865,
                          "end": 866,
                          "typeName": {
                            "type": "Identifier",
                            "start": 865,
                            "end": 866,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 853,
                    "end": 854,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 846,
                    "end": 850,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 875,
            "end": 908,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 879,
                "end": 907,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 879,
                  "end": 881,
                  "decorators": [],
                  "name": "r9",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 884,
                  "end": 907,
                  "alternate": {
                    "type": "Identifier",
                    "start": 906,
                    "end": 907,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "start": 891,
                    "end": 903,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 895,
                      "end": 898,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 898,
                      "end": 901,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 899,
                          "end": 900,
                          "typeName": {
                            "type": "Identifier",
                            "start": 899,
                            "end": 900,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "start": 884,
                    "end": 888,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 925,
            "end": 959,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 929,
                "end": 958,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 929,
                  "end": 932,
                  "decorators": [],
                  "name": "r10",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 935,
                  "end": 958,
                  "alternate": {
                    "type": "NewExpression",
                    "start": 946,
                    "end": 958,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 950,
                      "end": 953,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 953,
                      "end": 956,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 954,
                          "end": 955,
                          "typeName": {
                            "type": "Identifier",
                            "start": 954,
                            "end": 955,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 942,
                    "end": 943,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 935,
                    "end": 939,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 964,
            "end": 998,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 968,
                "end": 997,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 968,
                  "end": 971,
                  "decorators": [],
                  "name": "r10",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 974,
                  "end": 997,
                  "alternate": {
                    "type": "Identifier",
                    "start": 996,
                    "end": 997,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "start": 981,
                    "end": 993,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 985,
                      "end": 988,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 988,
                      "end": 991,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 989,
                          "end": 990,
                          "typeName": {
                            "type": "Identifier",
                            "start": 989,
                            "end": 990,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "start": 974,
                    "end": 978,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1014,
            "end": 1048,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1018,
                "end": 1047,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1018,
                  "end": 1021,
                  "decorators": [],
                  "name": "r11",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1024,
                  "end": 1047,
                  "alternate": {
                    "type": "NewExpression",
                    "start": 1035,
                    "end": 1047,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 1039,
                      "end": 1042,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1042,
                      "end": 1045,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1043,
                          "end": 1044,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1043,
                            "end": 1044,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1031,
                    "end": 1032,
                    "decorators": [],
                    "name": "u",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1024,
                    "end": 1028,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1053,
            "end": 1087,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1057,
                "end": 1086,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1057,
                  "end": 1060,
                  "decorators": [],
                  "name": "r11",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1063,
                  "end": 1086,
                  "alternate": {
                    "type": "Identifier",
                    "start": 1085,
                    "end": 1086,
                    "decorators": [],
                    "name": "u",
                    "optional": false
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "start": 1070,
                    "end": 1082,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 1074,
                      "end": 1077,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1077,
                      "end": 1080,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1078,
                          "end": 1079,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1078,
                            "end": 1079,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1063,
                    "end": 1067,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1103,
            "end": 1137,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1107,
                "end": 1136,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1107,
                  "end": 1110,
                  "decorators": [],
                  "name": "r12",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1113,
                  "end": 1136,
                  "alternate": {
                    "type": "NewExpression",
                    "start": 1124,
                    "end": 1136,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 1128,
                      "end": 1131,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1131,
                      "end": 1134,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1132,
                          "end": 1133,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1132,
                            "end": 1133,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1120,
                    "end": 1121,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1113,
                    "end": 1117,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1142,
            "end": 1176,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1146,
                "end": 1175,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1146,
                  "end": 1149,
                  "decorators": [],
                  "name": "r12",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1152,
                  "end": 1175,
                  "alternate": {
                    "type": "Identifier",
                    "start": 1174,
                    "end": 1175,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "start": 1159,
                    "end": 1171,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 1163,
                      "end": 1166,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1166,
                      "end": 1169,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1167,
                          "end": 1168,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1167,
                            "end": 1168,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1152,
                    "end": 1156,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 117,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 172,
          "end": 176,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 173,
            "end": 176,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 175,
              "end": 176,
              "typeName": {
                "type": "Identifier",
                "start": 175,
                "end": 176,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 178,
          "end": 182,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 179,
            "end": 182,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 181,
              "end": 182,
              "typeName": {
                "type": "Identifier",
                "start": 181,
                "end": 182,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 184,
          "end": 188,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 185,
            "end": 188,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 187,
              "end": 188,
              "typeName": {
                "type": "Identifier",
                "start": 187,
                "end": 188,
                "decorators": [],
                "name": "V",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 117,
        "end": 171,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 118,
            "end": 134,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 128,
              "end": 134,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 131,
                "end": 134,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 132,
                    "end": 133,
                    "typeName": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 133,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 128,
                "end": 131,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 136,
            "end": 152,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 146,
              "end": 152,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 149,
                "end": 152,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 150,
                    "end": 151,
                    "typeName": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 151,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 146,
                "end": 149,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 136,
              "end": 137,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 154,
            "end": 170,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 164,
              "end": 170,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 167,
                "end": 170,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 168,
                    "end": 169,
                    "typeName": {
                      "type": "Identifier",
                      "start": 168,
                      "end": 169,
                      "decorators": [],
                      "name": "V",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 164,
                "end": 167,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1180,
      "end": 2414,
      "body": {
        "type": "TSModuleBlock",
        "start": 1190,
        "end": 2414,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 1196,
            "end": 1233,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1210,
              "end": 1233,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1220,
                  "end": 1227,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1220,
                    "end": 1223,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1223,
                    "end": 1226,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1225,
                      "end": 1226,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1225,
                        "end": 1226,
                        "decorators": [],
                        "name": "T",
                        "optional": false
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
              "start": 1202,
              "end": 1206,
              "decorators": [],
              "name": "Base",
              "optional": false
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1206,
              "end": 1209,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1207,
                  "end": 1208,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1207,
                    "end": 1208,
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
            "start": 1239,
            "end": 1364,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1318,
              "end": 1364,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 1328,
                  "end": 1343,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 1329,
                      "end": 1338,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1330,
                        "end": 1338,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1332,
                          "end": 1338
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1339,
                    "end": 1342,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1341,
                      "end": 1342,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1341,
                        "end": 1342,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1352,
                  "end": 1358,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1352,
                    "end": 1355,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1355,
                    "end": 1358,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1357,
                      "end": 1358,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1357,
                        "end": 1358,
                        "decorators": [],
                        "name": "T",
                        "optional": false
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
              "start": 1245,
              "end": 1247,
              "decorators": [],
              "name": "D1",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 1310,
              "end": 1314,
              "decorators": [],
              "name": "Base",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1314,
              "end": 1317,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1315,
                  "end": 1316,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1315,
                    "end": 1316,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1247,
              "end": 1301,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1248,
                  "end": 1264,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1258,
                    "end": 1264,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1261,
                      "end": 1264,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1262,
                          "end": 1263,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1262,
                            "end": 1263,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1258,
                      "end": 1261,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1248,
                    "end": 1249,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1266,
                  "end": 1282,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1276,
                    "end": 1282,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1279,
                      "end": 1282,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1280,
                          "end": 1281,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1280,
                            "end": 1281,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1276,
                      "end": 1279,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1266,
                    "end": 1267,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1284,
                  "end": 1300,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1294,
                    "end": 1300,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1297,
                      "end": 1300,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1298,
                          "end": 1299,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1298,
                            "end": 1299,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1294,
                      "end": 1297,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1284,
                    "end": 1285,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 1370,
            "end": 1495,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1449,
              "end": 1495,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 1459,
                  "end": 1474,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 1460,
                      "end": 1469,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1461,
                        "end": 1469,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1463,
                          "end": 1469
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1470,
                    "end": 1473,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1472,
                      "end": 1473,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1472,
                        "end": 1473,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1483,
                  "end": 1489,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1483,
                    "end": 1486,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1486,
                    "end": 1489,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1488,
                      "end": 1489,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1488,
                        "end": 1489,
                        "decorators": [],
                        "name": "U",
                        "optional": false
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
              "start": 1376,
              "end": 1378,
              "decorators": [],
              "name": "D2",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 1441,
              "end": 1445,
              "decorators": [],
              "name": "Base",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1445,
              "end": 1448,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1446,
                  "end": 1447,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1446,
                    "end": 1447,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1378,
              "end": 1432,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1379,
                  "end": 1395,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1389,
                    "end": 1395,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1392,
                      "end": 1395,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1393,
                          "end": 1394,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1393,
                            "end": 1394,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1389,
                      "end": 1392,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1379,
                    "end": 1380,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1397,
                  "end": 1413,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1407,
                    "end": 1413,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1410,
                      "end": 1413,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1411,
                          "end": 1412,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1411,
                            "end": 1412,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1407,
                      "end": 1410,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1397,
                    "end": 1398,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1415,
                  "end": 1431,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1425,
                    "end": 1431,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1428,
                      "end": 1431,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1429,
                          "end": 1430,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1429,
                            "end": 1430,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1425,
                      "end": 1428,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1415,
                    "end": 1416,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 1501,
            "end": 1626,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1580,
              "end": 1626,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 1590,
                  "end": 1605,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 1591,
                      "end": 1600,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1592,
                        "end": 1600,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1594,
                          "end": 1600
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1601,
                    "end": 1604,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1603,
                      "end": 1604,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1603,
                        "end": 1604,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1614,
                  "end": 1620,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1614,
                    "end": 1617,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1617,
                    "end": 1620,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1619,
                      "end": 1620,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1619,
                        "end": 1620,
                        "decorators": [],
                        "name": "V",
                        "optional": false
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
              "start": 1507,
              "end": 1509,
              "decorators": [],
              "name": "D3",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 1572,
              "end": 1576,
              "decorators": [],
              "name": "Base",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1576,
              "end": 1579,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1577,
                  "end": 1578,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1577,
                    "end": 1578,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1509,
              "end": 1563,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1510,
                  "end": 1526,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1520,
                    "end": 1526,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1523,
                      "end": 1526,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1524,
                          "end": 1525,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1524,
                            "end": 1525,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1520,
                      "end": 1523,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1510,
                    "end": 1511,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1528,
                  "end": 1544,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1538,
                    "end": 1544,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1541,
                      "end": 1544,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1542,
                          "end": 1543,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1542,
                            "end": 1543,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1538,
                      "end": 1541,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1528,
                    "end": 1529,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1546,
                  "end": 1562,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1556,
                    "end": 1562,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1559,
                      "end": 1562,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1560,
                          "end": 1561,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1560,
                            "end": 1561,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1556,
                      "end": 1559,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1546,
                    "end": 1547,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 1632,
            "end": 1757,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1711,
              "end": 1757,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 1721,
                  "end": 1736,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 1722,
                      "end": 1731,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1723,
                        "end": 1731,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1725,
                          "end": 1731
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1732,
                    "end": 1735,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1734,
                      "end": 1735,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1734,
                        "end": 1735,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1745,
                  "end": 1751,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1745,
                    "end": 1748,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1748,
                    "end": 1751,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1750,
                      "end": 1751,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1750,
                        "end": 1751,
                        "decorators": [],
                        "name": "T",
                        "optional": false
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
              "start": 1638,
              "end": 1640,
              "decorators": [],
              "name": "D4",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 1703,
              "end": 1707,
              "decorators": [],
              "name": "Base",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1707,
              "end": 1710,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1708,
                  "end": 1709,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1708,
                    "end": 1709,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1640,
              "end": 1694,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1641,
                  "end": 1657,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1651,
                    "end": 1657,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1654,
                      "end": 1657,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1655,
                          "end": 1656,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1655,
                            "end": 1656,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1651,
                      "end": 1654,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1641,
                    "end": 1642,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1659,
                  "end": 1675,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1669,
                    "end": 1675,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1672,
                      "end": 1675,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1673,
                          "end": 1674,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1673,
                            "end": 1674,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1669,
                      "end": 1672,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1659,
                    "end": 1660,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1677,
                  "end": 1693,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1687,
                    "end": 1693,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1690,
                      "end": 1693,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1691,
                          "end": 1692,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1691,
                            "end": 1692,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1687,
                      "end": 1690,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1677,
                    "end": 1678,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 1763,
            "end": 1888,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1842,
              "end": 1888,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 1852,
                  "end": 1867,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 1853,
                      "end": 1862,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1854,
                        "end": 1862,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1856,
                          "end": 1862
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1863,
                    "end": 1866,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1865,
                      "end": 1866,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1865,
                        "end": 1866,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1876,
                  "end": 1882,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1876,
                    "end": 1879,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1879,
                    "end": 1882,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1881,
                      "end": 1882,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1881,
                        "end": 1882,
                        "decorators": [],
                        "name": "U",
                        "optional": false
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
              "start": 1769,
              "end": 1771,
              "decorators": [],
              "name": "D5",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 1834,
              "end": 1838,
              "decorators": [],
              "name": "Base",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1838,
              "end": 1841,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1839,
                  "end": 1840,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1839,
                    "end": 1840,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1771,
              "end": 1825,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1772,
                  "end": 1788,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1782,
                    "end": 1788,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1785,
                      "end": 1788,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1786,
                          "end": 1787,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1786,
                            "end": 1787,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1782,
                      "end": 1785,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1772,
                    "end": 1773,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1790,
                  "end": 1806,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1800,
                    "end": 1806,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1803,
                      "end": 1806,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1804,
                          "end": 1805,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1804,
                            "end": 1805,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1800,
                      "end": 1803,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1790,
                    "end": 1791,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1808,
                  "end": 1824,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1818,
                    "end": 1824,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1821,
                      "end": 1824,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1822,
                          "end": 1823,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1822,
                            "end": 1823,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1818,
                      "end": 1821,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1808,
                    "end": 1809,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 1894,
            "end": 2019,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1973,
              "end": 2019,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 1983,
                  "end": 1998,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 1984,
                      "end": 1993,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1985,
                        "end": 1993,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1987,
                          "end": 1993
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1994,
                    "end": 1997,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1996,
                      "end": 1997,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1996,
                        "end": 1997,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 2007,
                  "end": 2013,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2007,
                    "end": 2010,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2010,
                    "end": 2013,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2012,
                      "end": 2013,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2012,
                        "end": 2013,
                        "decorators": [],
                        "name": "V",
                        "optional": false
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
              "start": 1900,
              "end": 1902,
              "decorators": [],
              "name": "D6",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 1965,
              "end": 1969,
              "decorators": [],
              "name": "Base",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1969,
              "end": 1972,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1970,
                  "end": 1971,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1970,
                    "end": 1971,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1902,
              "end": 1956,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1903,
                  "end": 1919,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1913,
                    "end": 1919,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1916,
                      "end": 1919,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1917,
                          "end": 1918,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1917,
                            "end": 1918,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1913,
                      "end": 1916,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1903,
                    "end": 1904,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1921,
                  "end": 1937,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1931,
                    "end": 1937,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1934,
                      "end": 1937,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1935,
                          "end": 1936,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1935,
                            "end": 1936,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1931,
                      "end": 1934,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1921,
                    "end": 1922,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1939,
                  "end": 1955,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1949,
                    "end": 1955,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1952,
                      "end": 1955,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1953,
                          "end": 1954,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1953,
                            "end": 1954,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1949,
                      "end": 1952,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1939,
                    "end": 1940,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 2025,
            "end": 2150,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 2104,
              "end": 2150,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 2114,
                  "end": 2129,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 2115,
                      "end": 2124,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2116,
                        "end": 2124,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2118,
                          "end": 2124
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2125,
                    "end": 2128,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2127,
                      "end": 2128,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2127,
                        "end": 2128,
                        "decorators": [],
                        "name": "V",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 2138,
                  "end": 2144,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2138,
                    "end": 2141,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2141,
                    "end": 2144,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2143,
                      "end": 2144,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2143,
                        "end": 2144,
                        "decorators": [],
                        "name": "T",
                        "optional": false
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
              "start": 2031,
              "end": 2033,
              "decorators": [],
              "name": "D7",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 2096,
              "end": 2100,
              "decorators": [],
              "name": "Base",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2100,
              "end": 2103,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2101,
                  "end": 2102,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2101,
                    "end": 2102,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2033,
              "end": 2087,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2034,
                  "end": 2050,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2044,
                    "end": 2050,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2047,
                      "end": 2050,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2048,
                          "end": 2049,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2048,
                            "end": 2049,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2044,
                      "end": 2047,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2034,
                    "end": 2035,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2052,
                  "end": 2068,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2062,
                    "end": 2068,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2065,
                      "end": 2068,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2066,
                          "end": 2067,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2066,
                            "end": 2067,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2062,
                      "end": 2065,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2052,
                    "end": 2053,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2070,
                  "end": 2086,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2080,
                    "end": 2086,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2083,
                      "end": 2086,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2084,
                          "end": 2085,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2084,
                            "end": 2085,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2080,
                      "end": 2083,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2070,
                    "end": 2071,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 2156,
            "end": 2281,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 2235,
              "end": 2281,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 2245,
                  "end": 2260,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 2246,
                      "end": 2255,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2247,
                        "end": 2255,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2249,
                          "end": 2255
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2256,
                    "end": 2259,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2258,
                      "end": 2259,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2258,
                        "end": 2259,
                        "decorators": [],
                        "name": "V",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 2269,
                  "end": 2275,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2269,
                    "end": 2272,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2272,
                    "end": 2275,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2274,
                      "end": 2275,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2274,
                        "end": 2275,
                        "decorators": [],
                        "name": "U",
                        "optional": false
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
              "start": 2162,
              "end": 2164,
              "decorators": [],
              "name": "D8",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 2227,
              "end": 2231,
              "decorators": [],
              "name": "Base",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2231,
              "end": 2234,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2232,
                  "end": 2233,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2232,
                    "end": 2233,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2164,
              "end": 2218,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2165,
                  "end": 2181,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2175,
                    "end": 2181,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2178,
                      "end": 2181,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2179,
                          "end": 2180,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2179,
                            "end": 2180,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2175,
                      "end": 2178,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2165,
                    "end": 2166,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2183,
                  "end": 2199,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2193,
                    "end": 2199,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2196,
                      "end": 2199,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2197,
                          "end": 2198,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2197,
                            "end": 2198,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2193,
                      "end": 2196,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2183,
                    "end": 2184,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2201,
                  "end": 2217,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2211,
                    "end": 2217,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2214,
                      "end": 2217,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2215,
                          "end": 2216,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2215,
                            "end": 2216,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2211,
                      "end": 2214,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2201,
                    "end": 2202,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 2287,
            "end": 2412,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 2366,
              "end": 2412,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 2376,
                  "end": 2391,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 2377,
                      "end": 2386,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2378,
                        "end": 2386,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2380,
                          "end": 2386
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2387,
                    "end": 2390,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2389,
                      "end": 2390,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2389,
                        "end": 2390,
                        "decorators": [],
                        "name": "V",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 2400,
                  "end": 2406,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2400,
                    "end": 2403,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2403,
                    "end": 2406,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2405,
                      "end": 2406,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2405,
                        "end": 2406,
                        "decorators": [],
                        "name": "V",
                        "optional": false
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
              "start": 2293,
              "end": 2295,
              "decorators": [],
              "name": "D9",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 2358,
              "end": 2362,
              "decorators": [],
              "name": "Base",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2362,
              "end": 2365,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2363,
                  "end": 2364,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2363,
                    "end": 2364,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2295,
              "end": 2349,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2296,
                  "end": 2312,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2306,
                    "end": 2312,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2309,
                      "end": 2312,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2310,
                          "end": 2311,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2310,
                            "end": 2311,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2306,
                      "end": 2309,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2296,
                    "end": 2297,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2314,
                  "end": 2330,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2324,
                    "end": 2330,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2327,
                      "end": 2330,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2328,
                          "end": 2329,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2328,
                            "end": 2329,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2324,
                      "end": 2327,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2314,
                    "end": 2315,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2332,
                  "end": 2348,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2342,
                    "end": 2348,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2345,
                      "end": 2348,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2346,
                          "end": 2347,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2346,
                            "end": 2347,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2342,
                      "end": 2345,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2332,
                    "end": 2333,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1187,
        "end": 1189,
        "decorators": [],
        "name": "M1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 2417,
      "end": 3666,
      "body": {
        "type": "TSModuleBlock",
        "start": 2427,
        "end": 3666,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 2433,
            "end": 2476,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 2448,
              "end": 2476,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 2458,
                  "end": 2470,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2458,
                    "end": 2461,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2461,
                    "end": 2469,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2463,
                      "end": 2469,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2466,
                        "end": 2469,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2467,
                            "end": 2468,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2467,
                              "end": 2468,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 2463,
                        "end": 2466,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false
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
              "start": 2439,
              "end": 2444,
              "decorators": [],
              "name": "Base2",
              "optional": false
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2444,
              "end": 2447,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2445,
                  "end": 2446,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2445,
                    "end": 2446,
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
            "start": 2482,
            "end": 2608,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 2562,
              "end": 2608,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 2572,
                  "end": 2587,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 2573,
                      "end": 2582,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2574,
                        "end": 2582,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2576,
                          "end": 2582
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2583,
                    "end": 2586,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2585,
                      "end": 2586,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2585,
                        "end": 2586,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 2596,
                  "end": 2602,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2596,
                    "end": 2599,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2599,
                    "end": 2602,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2601,
                      "end": 2602,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2601,
                        "end": 2602,
                        "decorators": [],
                        "name": "T",
                        "optional": false
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
              "start": 2488,
              "end": 2490,
              "decorators": [],
              "name": "D1",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 2553,
              "end": 2558,
              "decorators": [],
              "name": "Base2",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2558,
              "end": 2561,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2559,
                  "end": 2560,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2559,
                    "end": 2560,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2490,
              "end": 2544,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2491,
                  "end": 2507,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2501,
                    "end": 2507,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2504,
                      "end": 2507,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2505,
                          "end": 2506,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2505,
                            "end": 2506,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2501,
                      "end": 2504,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2491,
                    "end": 2492,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2509,
                  "end": 2525,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2519,
                    "end": 2525,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2522,
                      "end": 2525,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2523,
                          "end": 2524,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2523,
                            "end": 2524,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2519,
                      "end": 2522,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2509,
                    "end": 2510,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2527,
                  "end": 2543,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2537,
                    "end": 2543,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2540,
                      "end": 2543,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2541,
                          "end": 2542,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2541,
                            "end": 2542,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2537,
                      "end": 2540,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2527,
                    "end": 2528,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 2614,
            "end": 2740,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 2694,
              "end": 2740,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 2704,
                  "end": 2719,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 2705,
                      "end": 2714,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2706,
                        "end": 2714,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2708,
                          "end": 2714
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2715,
                    "end": 2718,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2717,
                      "end": 2718,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2717,
                        "end": 2718,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 2728,
                  "end": 2734,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2728,
                    "end": 2731,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2731,
                    "end": 2734,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2733,
                      "end": 2734,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2733,
                        "end": 2734,
                        "decorators": [],
                        "name": "U",
                        "optional": false
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
              "start": 2620,
              "end": 2622,
              "decorators": [],
              "name": "D2",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 2685,
              "end": 2690,
              "decorators": [],
              "name": "Base2",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2690,
              "end": 2693,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2691,
                  "end": 2692,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2691,
                    "end": 2692,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2622,
              "end": 2676,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2623,
                  "end": 2639,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2633,
                    "end": 2639,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2636,
                      "end": 2639,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2637,
                          "end": 2638,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2637,
                            "end": 2638,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2633,
                      "end": 2636,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2623,
                    "end": 2624,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2641,
                  "end": 2657,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2651,
                    "end": 2657,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2654,
                      "end": 2657,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2655,
                          "end": 2656,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2655,
                            "end": 2656,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2651,
                      "end": 2654,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2641,
                    "end": 2642,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2659,
                  "end": 2675,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2669,
                    "end": 2675,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2672,
                      "end": 2675,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2673,
                          "end": 2674,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2673,
                            "end": 2674,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2669,
                      "end": 2672,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2659,
                    "end": 2660,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 2746,
            "end": 2872,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 2826,
              "end": 2872,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 2836,
                  "end": 2851,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 2837,
                      "end": 2846,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2838,
                        "end": 2846,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2840,
                          "end": 2846
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2847,
                    "end": 2850,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2849,
                      "end": 2850,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2849,
                        "end": 2850,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 2860,
                  "end": 2866,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2860,
                    "end": 2863,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2863,
                    "end": 2866,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2865,
                      "end": 2866,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2865,
                        "end": 2866,
                        "decorators": [],
                        "name": "V",
                        "optional": false
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
              "start": 2752,
              "end": 2754,
              "decorators": [],
              "name": "D3",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 2817,
              "end": 2822,
              "decorators": [],
              "name": "Base2",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2822,
              "end": 2825,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2823,
                  "end": 2824,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2823,
                    "end": 2824,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2754,
              "end": 2808,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2755,
                  "end": 2771,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2765,
                    "end": 2771,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2768,
                      "end": 2771,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2769,
                          "end": 2770,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2769,
                            "end": 2770,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2765,
                      "end": 2768,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2755,
                    "end": 2756,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2773,
                  "end": 2789,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2783,
                    "end": 2789,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2786,
                      "end": 2789,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2787,
                          "end": 2788,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2787,
                            "end": 2788,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2783,
                      "end": 2786,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2773,
                    "end": 2774,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2791,
                  "end": 2807,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2801,
                    "end": 2807,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2804,
                      "end": 2807,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2805,
                          "end": 2806,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2805,
                            "end": 2806,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2801,
                      "end": 2804,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2791,
                    "end": 2792,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 2878,
            "end": 3004,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 2958,
              "end": 3004,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 2968,
                  "end": 2983,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 2969,
                      "end": 2978,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2970,
                        "end": 2978,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2972,
                          "end": 2978
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2979,
                    "end": 2982,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2981,
                      "end": 2982,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2981,
                        "end": 2982,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 2992,
                  "end": 2998,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2992,
                    "end": 2995,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2995,
                    "end": 2998,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2997,
                      "end": 2998,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2997,
                        "end": 2998,
                        "decorators": [],
                        "name": "T",
                        "optional": false
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
              "start": 2884,
              "end": 2886,
              "decorators": [],
              "name": "D4",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 2949,
              "end": 2954,
              "decorators": [],
              "name": "Base2",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2954,
              "end": 2957,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2955,
                  "end": 2956,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2955,
                    "end": 2956,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2886,
              "end": 2940,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2887,
                  "end": 2903,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2897,
                    "end": 2903,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2900,
                      "end": 2903,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2901,
                          "end": 2902,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2901,
                            "end": 2902,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2897,
                      "end": 2900,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2887,
                    "end": 2888,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2905,
                  "end": 2921,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2915,
                    "end": 2921,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2918,
                      "end": 2921,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2919,
                          "end": 2920,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2919,
                            "end": 2920,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2915,
                      "end": 2918,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2905,
                    "end": 2906,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2923,
                  "end": 2939,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2933,
                    "end": 2939,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2936,
                      "end": 2939,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2937,
                          "end": 2938,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2937,
                            "end": 2938,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2933,
                      "end": 2936,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2923,
                    "end": 2924,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 3010,
            "end": 3136,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 3090,
              "end": 3136,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 3100,
                  "end": 3115,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 3101,
                      "end": 3110,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3102,
                        "end": 3110,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3104,
                          "end": 3110
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3111,
                    "end": 3114,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3113,
                      "end": 3114,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3113,
                        "end": 3114,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 3124,
                  "end": 3130,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3124,
                    "end": 3127,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3127,
                    "end": 3130,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3129,
                      "end": 3130,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3129,
                        "end": 3130,
                        "decorators": [],
                        "name": "U",
                        "optional": false
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
              "start": 3016,
              "end": 3018,
              "decorators": [],
              "name": "D5",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 3081,
              "end": 3086,
              "decorators": [],
              "name": "Base2",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 3086,
              "end": 3089,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 3087,
                  "end": 3088,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3087,
                    "end": 3088,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3018,
              "end": 3072,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3019,
                  "end": 3035,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3029,
                    "end": 3035,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3032,
                      "end": 3035,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3033,
                          "end": 3034,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3033,
                            "end": 3034,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3029,
                      "end": 3032,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3019,
                    "end": 3020,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3037,
                  "end": 3053,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3047,
                    "end": 3053,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3050,
                      "end": 3053,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3051,
                          "end": 3052,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3051,
                            "end": 3052,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3047,
                      "end": 3050,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3037,
                    "end": 3038,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3055,
                  "end": 3071,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3065,
                    "end": 3071,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3068,
                      "end": 3071,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3069,
                          "end": 3070,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3069,
                            "end": 3070,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3065,
                      "end": 3068,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3055,
                    "end": 3056,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 3142,
            "end": 3268,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 3222,
              "end": 3268,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 3232,
                  "end": 3247,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 3233,
                      "end": 3242,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3234,
                        "end": 3242,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3236,
                          "end": 3242
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3243,
                    "end": 3246,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3245,
                      "end": 3246,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3245,
                        "end": 3246,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 3256,
                  "end": 3262,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3256,
                    "end": 3259,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3259,
                    "end": 3262,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3261,
                      "end": 3262,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3261,
                        "end": 3262,
                        "decorators": [],
                        "name": "V",
                        "optional": false
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
              "start": 3148,
              "end": 3150,
              "decorators": [],
              "name": "D6",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 3213,
              "end": 3218,
              "decorators": [],
              "name": "Base2",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 3218,
              "end": 3221,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 3219,
                  "end": 3220,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3219,
                    "end": 3220,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3150,
              "end": 3204,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3151,
                  "end": 3167,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3161,
                    "end": 3167,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3164,
                      "end": 3167,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3165,
                          "end": 3166,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3165,
                            "end": 3166,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3161,
                      "end": 3164,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3151,
                    "end": 3152,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3169,
                  "end": 3185,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3179,
                    "end": 3185,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3182,
                      "end": 3185,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3183,
                          "end": 3184,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3183,
                            "end": 3184,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3179,
                      "end": 3182,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3169,
                    "end": 3170,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3187,
                  "end": 3203,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3197,
                    "end": 3203,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3200,
                      "end": 3203,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3201,
                          "end": 3202,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3201,
                            "end": 3202,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3197,
                      "end": 3200,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3187,
                    "end": 3188,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 3274,
            "end": 3400,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 3354,
              "end": 3400,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 3364,
                  "end": 3379,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 3365,
                      "end": 3374,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3366,
                        "end": 3374,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3368,
                          "end": 3374
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3375,
                    "end": 3378,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3377,
                      "end": 3378,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3377,
                        "end": 3378,
                        "decorators": [],
                        "name": "V",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 3388,
                  "end": 3394,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3388,
                    "end": 3391,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3391,
                    "end": 3394,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3393,
                      "end": 3394,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3393,
                        "end": 3394,
                        "decorators": [],
                        "name": "T",
                        "optional": false
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
              "start": 3280,
              "end": 3282,
              "decorators": [],
              "name": "D7",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 3345,
              "end": 3350,
              "decorators": [],
              "name": "Base2",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 3350,
              "end": 3353,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 3351,
                  "end": 3352,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3351,
                    "end": 3352,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3282,
              "end": 3336,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3283,
                  "end": 3299,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3293,
                    "end": 3299,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3296,
                      "end": 3299,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3297,
                          "end": 3298,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3297,
                            "end": 3298,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3293,
                      "end": 3296,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3283,
                    "end": 3284,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3301,
                  "end": 3317,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3311,
                    "end": 3317,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3314,
                      "end": 3317,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3315,
                          "end": 3316,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3315,
                            "end": 3316,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3311,
                      "end": 3314,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3301,
                    "end": 3302,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3319,
                  "end": 3335,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3329,
                    "end": 3335,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3332,
                      "end": 3335,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3333,
                          "end": 3334,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3333,
                            "end": 3334,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3329,
                      "end": 3332,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3319,
                    "end": 3320,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 3406,
            "end": 3532,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 3486,
              "end": 3532,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 3496,
                  "end": 3511,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 3497,
                      "end": 3506,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3498,
                        "end": 3506,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3500,
                          "end": 3506
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3507,
                    "end": 3510,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3509,
                      "end": 3510,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3509,
                        "end": 3510,
                        "decorators": [],
                        "name": "V",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 3520,
                  "end": 3526,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3520,
                    "end": 3523,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3523,
                    "end": 3526,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3525,
                      "end": 3526,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3525,
                        "end": 3526,
                        "decorators": [],
                        "name": "U",
                        "optional": false
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
              "start": 3412,
              "end": 3414,
              "decorators": [],
              "name": "D8",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 3477,
              "end": 3482,
              "decorators": [],
              "name": "Base2",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 3482,
              "end": 3485,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 3483,
                  "end": 3484,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3483,
                    "end": 3484,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3414,
              "end": 3468,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3415,
                  "end": 3431,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3425,
                    "end": 3431,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3428,
                      "end": 3431,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3429,
                          "end": 3430,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3429,
                            "end": 3430,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3425,
                      "end": 3428,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3415,
                    "end": 3416,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3433,
                  "end": 3449,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3443,
                    "end": 3449,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3446,
                      "end": 3449,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3447,
                          "end": 3448,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3447,
                            "end": 3448,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3443,
                      "end": 3446,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3433,
                    "end": 3434,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3451,
                  "end": 3467,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3461,
                    "end": 3467,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3464,
                      "end": 3467,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3465,
                          "end": 3466,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3465,
                            "end": 3466,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3461,
                      "end": 3464,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3451,
                    "end": 3452,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 3538,
            "end": 3664,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 3618,
              "end": 3664,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 3628,
                  "end": 3643,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 3629,
                      "end": 3638,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3630,
                        "end": 3638,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3632,
                          "end": 3638
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3639,
                    "end": 3642,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3641,
                      "end": 3642,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3641,
                        "end": 3642,
                        "decorators": [],
                        "name": "V",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 3652,
                  "end": 3658,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3652,
                    "end": 3655,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3655,
                    "end": 3658,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3657,
                      "end": 3658,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3657,
                        "end": 3658,
                        "decorators": [],
                        "name": "V",
                        "optional": false
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
              "start": 3544,
              "end": 3546,
              "decorators": [],
              "name": "D9",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 3609,
              "end": 3614,
              "decorators": [],
              "name": "Base2",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 3614,
              "end": 3617,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 3615,
                  "end": 3616,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3615,
                    "end": 3616,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3546,
              "end": 3600,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3547,
                  "end": 3563,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3557,
                    "end": 3563,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3560,
                      "end": 3563,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3561,
                          "end": 3562,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3561,
                            "end": 3562,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3557,
                      "end": 3560,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3547,
                    "end": 3548,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3565,
                  "end": 3581,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3575,
                    "end": 3581,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3578,
                      "end": 3581,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3579,
                          "end": 3580,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3579,
                            "end": 3580,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3575,
                      "end": 3578,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3565,
                    "end": 3566,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3583,
                  "end": 3599,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3593,
                    "end": 3599,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3596,
                      "end": 3599,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3597,
                          "end": 3598,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3597,
                            "end": 3598,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3593,
                      "end": 3596,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3583,
                    "end": 3584,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 2424,
        "end": 2426,
        "decorators": [],
        "name": "M2",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
