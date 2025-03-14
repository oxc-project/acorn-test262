__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 147,
  "end": 1205,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 147,
      "end": 187,
      "body": {
        "type": "TSInterfaceBody",
        "start": 184,
        "end": 187,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 173,
          "end": 183,
          "expression": {
            "type": "Identifier",
            "start": 173,
            "end": 178,
            "decorators": [],
            "name": "Array",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 178,
            "end": 183,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 179,
                "end": 182
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 164,
        "decorators": [],
        "name": "MyThing",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 188,
      "end": 230,
      "body": {
        "type": "TSInterfaceBody",
        "start": 227,
        "end": 230,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 218,
          "end": 226,
          "expression": {
            "type": "Identifier",
            "start": 218,
            "end": 223,
            "decorators": [],
            "name": "Array",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 223,
            "end": 226,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 224,
                "end": 225,
                "typeName": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 225,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 206,
        "decorators": [],
        "name": "MyThing2",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 206,
        "end": 209,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 207,
            "end": 208,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
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
      "start": 232,
      "end": 263,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 260,
        "end": 263,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 244,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 245,
          "end": 258,
          "argument": {
            "type": "Identifier",
            "start": 248,
            "end": 249,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 249,
            "end": 258,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 251,
              "end": 258,
              "typeName": {
                "type": "Identifier",
                "start": 251,
                "end": 258,
                "decorators": [],
                "name": "MyThing",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 303,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 303,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 269,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 272,
            "end": 303,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 300,
              "end": 303,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 281,
              "end": 284,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": [
              {
                "type": "RestElement",
                "start": 285,
                "end": 298,
                "argument": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 289,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 289,
                  "end": 298,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 291,
                    "end": 298,
                    "typeName": {
                      "type": "Identifier",
                      "start": 291,
                      "end": 298,
                      "decorators": [],
                      "name": "MyThing",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 304,
      "end": 350,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 350,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 310,
            "decorators": [],
            "name": "f2",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 313,
            "end": 350,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 347,
              "end": 350,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "RestElement",
                "start": 314,
                "end": 327,
                "argument": {
                  "type": "Identifier",
                  "start": 317,
                  "end": 318,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 318,
                  "end": 327,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 320,
                    "end": 327,
                    "typeName": {
                      "type": "Identifier",
                      "start": 320,
                      "end": 327,
                      "decorators": [],
                      "name": "MyThing",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 329,
                "end": 342,
                "argument": {
                  "type": "Identifier",
                  "start": 332,
                  "end": 333,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 333,
                  "end": 342,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 335,
                    "end": 342,
                    "typeName": {
                      "type": "Identifier",
                      "start": 335,
                      "end": 342,
                      "decorators": [],
                      "name": "MyThing",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 352,
      "end": 390,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 360,
        "end": 390,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 366,
            "end": 388,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 366,
              "end": 369,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 369,
              "end": 388,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 385,
                "end": 388,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 370,
                  "end": 383,
                  "argument": {
                    "type": "Identifier",
                    "start": 373,
                    "end": 374,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 374,
                    "end": 383,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 376,
                      "end": 383,
                      "typeName": {
                        "type": "Identifier",
                        "start": 376,
                        "end": 383,
                        "decorators": [],
                        "name": "MyThing",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 358,
        "end": 359,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 392,
      "end": 467,
      "body": {
        "type": "TSInterfaceBody",
        "start": 404,
        "end": 467,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 410,
            "end": 426,
            "params": [
              {
                "type": "RestElement",
                "start": 411,
                "end": 424,
                "argument": {
                  "type": "Identifier",
                  "start": 414,
                  "end": 415,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 415,
                  "end": 424,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 417,
                    "end": 424,
                    "typeName": {
                      "type": "Identifier",
                      "start": 417,
                      "end": 424,
                      "decorators": [],
                      "name": "MyThing",
                      "optional": false
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "TSMethodSignature",
            "start": 431,
            "end": 465,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 431,
              "end": 434,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 435,
                "end": 448,
                "argument": {
                  "type": "Identifier",
                  "start": 438,
                  "end": 439,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 439,
                  "end": 448,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 441,
                    "end": 448,
                    "typeName": {
                      "type": "Identifier",
                      "start": 441,
                      "end": 448,
                      "decorators": [],
                      "name": "MyThing",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 450,
                "end": 463,
                "argument": {
                  "type": "Identifier",
                  "start": 453,
                  "end": 454,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 454,
                  "end": 463,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 456,
                    "end": 463,
                    "typeName": {
                      "type": "Identifier",
                      "start": 456,
                      "end": 463,
                      "decorators": [],
                      "name": "MyThing",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 402,
        "end": 403,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 469,
      "end": 524,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 473,
          "end": 524,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 473,
            "end": 524,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 474,
              "end": 524,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 476,
                "end": 524,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 482,
                    "end": 498,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 483,
                        "end": 496,
                        "argument": {
                          "type": "Identifier",
                          "start": 486,
                          "end": 487,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 487,
                          "end": 496,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 489,
                            "end": 496,
                            "typeName": {
                              "type": "Identifier",
                              "start": 489,
                              "end": 496,
                              "decorators": [],
                              "name": "MyThing",
                              "optional": false
                            }
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 503,
                    "end": 522,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 503,
                      "end": 506,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 507,
                        "end": 520,
                        "argument": {
                          "type": "Identifier",
                          "start": 510,
                          "end": 511,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 511,
                          "end": 520,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 513,
                            "end": 520,
                            "typeName": {
                              "type": "Identifier",
                              "start": 513,
                              "end": 520,
                              "decorators": [],
                              "name": "MyThing",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 526,
      "end": 650,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 530,
          "end": 650,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 530,
            "end": 531,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 534,
            "end": 650,
            "properties": [
              {
                "type": "Property",
                "start": 540,
                "end": 562,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 540,
                  "end": 543,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 543,
                  "end": 562,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 559,
                    "end": 562,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 544,
                      "end": 557,
                      "argument": {
                        "type": "Identifier",
                        "start": 547,
                        "end": 548,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 548,
                        "end": 557,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 550,
                          "end": 557,
                          "typeName": {
                            "type": "Identifier",
                            "start": 550,
                            "end": 557,
                            "decorators": [],
                            "name": "MyThing",
                            "optional": false
                          }
                        }
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 568,
                "end": 617,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 568,
                  "end": 569,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 571,
                  "end": 617,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 614,
                    "end": 617,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 580,
                    "end": 583,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 584,
                      "end": 597,
                      "argument": {
                        "type": "Identifier",
                        "start": 587,
                        "end": 588,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 588,
                        "end": 597,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 590,
                          "end": 597,
                          "typeName": {
                            "type": "Identifier",
                            "start": 590,
                            "end": 597,
                            "decorators": [],
                            "name": "MyThing",
                            "optional": false
                          }
                        }
                      }
                    },
                    {
                      "type": "RestElement",
                      "start": 599,
                      "end": 612,
                      "argument": {
                        "type": "Identifier",
                        "start": 602,
                        "end": 603,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 603,
                        "end": 612,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 605,
                          "end": 612,
                          "typeName": {
                            "type": "Identifier",
                            "start": 605,
                            "end": 612,
                            "decorators": [],
                            "name": "MyThing",
                            "optional": false
                          }
                        }
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 623,
                "end": 648,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 623,
                  "end": 624,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 626,
                  "end": 648,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 645,
                    "end": 648,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 627,
                      "end": 640,
                      "argument": {
                        "type": "Identifier",
                        "start": 630,
                        "end": 631,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 631,
                        "end": 640,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 633,
                          "end": 640,
                          "typeName": {
                            "type": "Identifier",
                            "start": 633,
                            "end": 640,
                            "decorators": [],
                            "name": "MyThing",
                            "optional": false
                          }
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 655,
      "end": 696,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 693,
        "end": 696,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 664,
        "end": 668,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 669,
          "end": 691,
          "argument": {
            "type": "Identifier",
            "start": 672,
            "end": 673,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 673,
            "end": 691,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 675,
              "end": 691,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 683,
                "end": 691,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 684,
                    "end": 690
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 675,
                "end": 683,
                "decorators": [],
                "name": "MyThing2",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 697,
      "end": 746,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 701,
          "end": 746,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 701,
            "end": 703,
            "decorators": [],
            "name": "f3",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 706,
            "end": 746,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 743,
              "end": 746,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 715,
              "end": 718,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": [
              {
                "type": "RestElement",
                "start": 719,
                "end": 741,
                "argument": {
                  "type": "Identifier",
                  "start": 722,
                  "end": 723,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 723,
                  "end": 741,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 725,
                    "end": 741,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 733,
                      "end": 741,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 734,
                          "end": 740
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 725,
                      "end": 733,
                      "decorators": [],
                      "name": "MyThing2",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 747,
      "end": 811,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 751,
          "end": 811,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 751,
            "end": 753,
            "decorators": [],
            "name": "f4",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 756,
            "end": 811,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 808,
              "end": 811,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "RestElement",
                "start": 757,
                "end": 779,
                "argument": {
                  "type": "Identifier",
                  "start": 760,
                  "end": 761,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 761,
                  "end": 779,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 763,
                    "end": 779,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 771,
                      "end": 779,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 772,
                          "end": 778
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 763,
                      "end": 771,
                      "decorators": [],
                      "name": "MyThing2",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 781,
                "end": 803,
                "argument": {
                  "type": "Identifier",
                  "start": 784,
                  "end": 785,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 785,
                  "end": 803,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 787,
                    "end": 803,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 795,
                      "end": 803,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 796,
                          "end": 802
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 787,
                      "end": 795,
                      "decorators": [],
                      "name": "MyThing2",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 813,
      "end": 861,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 822,
        "end": 861,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 828,
            "end": 859,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 828,
              "end": 831,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 831,
              "end": 859,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 856,
                "end": 859,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 832,
                  "end": 854,
                  "argument": {
                    "type": "Identifier",
                    "start": 835,
                    "end": 836,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 836,
                    "end": 854,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 838,
                      "end": 854,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 846,
                        "end": 854,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 847,
                            "end": 853
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 838,
                        "end": 846,
                        "decorators": [],
                        "name": "MyThing2",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 819,
        "end": 821,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 863,
      "end": 966,
      "body": {
        "type": "TSInterfaceBody",
        "start": 876,
        "end": 966,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 882,
            "end": 907,
            "params": [
              {
                "type": "RestElement",
                "start": 883,
                "end": 905,
                "argument": {
                  "type": "Identifier",
                  "start": 886,
                  "end": 887,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 887,
                  "end": 905,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 889,
                    "end": 905,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 897,
                      "end": 905,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 898,
                          "end": 904
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 889,
                      "end": 897,
                      "decorators": [],
                      "name": "MyThing2",
                      "optional": false
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "TSMethodSignature",
            "start": 912,
            "end": 964,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 912,
              "end": 915,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 916,
                "end": 938,
                "argument": {
                  "type": "Identifier",
                  "start": 919,
                  "end": 920,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 920,
                  "end": 938,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 922,
                    "end": 938,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 930,
                      "end": 938,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 931,
                          "end": 937
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 922,
                      "end": 930,
                      "decorators": [],
                      "name": "MyThing2",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 940,
                "end": 962,
                "argument": {
                  "type": "Identifier",
                  "start": 943,
                  "end": 944,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 944,
                  "end": 962,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 946,
                    "end": 962,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 954,
                      "end": 962,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 955,
                          "end": 961
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 946,
                      "end": 954,
                      "decorators": [],
                      "name": "MyThing2",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 873,
        "end": 875,
        "decorators": [],
        "name": "I2",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 968,
      "end": 1042,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 972,
          "end": 1042,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 972,
            "end": 1042,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 974,
              "end": 1042,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 976,
                "end": 1042,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 982,
                    "end": 1007,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 983,
                        "end": 1005,
                        "argument": {
                          "type": "Identifier",
                          "start": 986,
                          "end": 987,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 987,
                          "end": 1005,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 989,
                            "end": 1005,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 997,
                              "end": 1005,
                              "params": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 998,
                                  "end": 1004
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 989,
                              "end": 997,
                              "decorators": [],
                              "name": "MyThing2",
                              "optional": false
                            }
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1012,
                    "end": 1040,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1012,
                      "end": 1015,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 1016,
                        "end": 1038,
                        "argument": {
                          "type": "Identifier",
                          "start": 1019,
                          "end": 1020,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1020,
                          "end": 1038,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1022,
                            "end": 1038,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1030,
                              "end": 1038,
                              "params": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 1031,
                                  "end": 1037
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 1022,
                              "end": 1030,
                              "decorators": [],
                              "name": "MyThing2",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1044,
      "end": 1205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1048,
          "end": 1205,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1048,
            "end": 1050,
            "decorators": [],
            "name": "b2",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1053,
            "end": 1205,
            "properties": [
              {
                "type": "Property",
                "start": 1059,
                "end": 1090,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1059,
                  "end": 1062,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1062,
                  "end": 1090,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1087,
                    "end": 1090,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 1063,
                      "end": 1085,
                      "argument": {
                        "type": "Identifier",
                        "start": 1066,
                        "end": 1067,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1067,
                        "end": 1085,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1069,
                          "end": 1085,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1077,
                            "end": 1085,
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1078,
                                "end": 1084
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 1069,
                            "end": 1077,
                            "decorators": [],
                            "name": "MyThing2",
                            "optional": false
                          }
                        }
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 1096,
                "end": 1163,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1096,
                  "end": 1097,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1099,
                  "end": 1163,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1160,
                    "end": 1163,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1108,
                    "end": 1111,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 1112,
                      "end": 1134,
                      "argument": {
                        "type": "Identifier",
                        "start": 1115,
                        "end": 1116,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1116,
                        "end": 1134,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1118,
                          "end": 1134,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1126,
                            "end": 1134,
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1127,
                                "end": 1133
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 1118,
                            "end": 1126,
                            "decorators": [],
                            "name": "MyThing2",
                            "optional": false
                          }
                        }
                      }
                    },
                    {
                      "type": "RestElement",
                      "start": 1136,
                      "end": 1158,
                      "argument": {
                        "type": "Identifier",
                        "start": 1139,
                        "end": 1140,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1140,
                        "end": 1158,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1142,
                          "end": 1158,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1150,
                            "end": 1158,
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1151,
                                "end": 1157
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 1142,
                            "end": 1150,
                            "decorators": [],
                            "name": "MyThing2",
                            "optional": false
                          }
                        }
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 1169,
                "end": 1203,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1169,
                  "end": 1170,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1172,
                  "end": 1203,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1200,
                    "end": 1203,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 1173,
                      "end": 1195,
                      "argument": {
                        "type": "Identifier",
                        "start": 1176,
                        "end": 1177,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1177,
                        "end": 1195,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1179,
                          "end": 1195,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1187,
                            "end": 1195,
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1188,
                                "end": 1194
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 1179,
                            "end": 1187,
                            "decorators": [],
                            "name": "MyThing2",
                            "optional": false
                          }
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
