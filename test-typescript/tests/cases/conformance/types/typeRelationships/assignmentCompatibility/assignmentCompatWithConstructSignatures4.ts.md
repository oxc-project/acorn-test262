__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 68,
  "end": 3329,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 68,
      "end": 3329,
      "body": {
        "type": "TSModuleBlock",
        "start": 82,
        "end": 3329,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 88,
            "end": 115,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 99,
              "end": 115,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 101,
                  "end": 113,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 104,
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
                    "start": 104,
                    "end": 112,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 106,
                      "end": 112
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
              "start": 94,
              "end": 98,
              "decorators": [],
              "name": "Base",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "ClassDeclaration",
            "start": 120,
            "end": 163,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 147,
              "end": 163,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 149,
                  "end": 161,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 152,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 152,
                    "end": 160,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 154,
                      "end": 160
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
              "start": 126,
              "end": 133,
              "decorators": [],
              "name": "Derived",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 142,
              "end": 146,
              "decorators": [],
              "name": "Base",
              "optional": false
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 168,
            "end": 215,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 199,
              "end": 215,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 201,
                  "end": 213,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 204,
                    "decorators": [],
                    "name": "baz",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 204,
                    "end": 212,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 206,
                      "end": 212
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
              "start": 174,
              "end": 182,
              "decorators": [],
              "name": "Derived2",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 191,
              "end": 198,
              "decorators": [],
              "name": "Derived",
              "optional": false
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 220,
            "end": 269,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 252,
              "end": 269,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 254,
                  "end": 267,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 254,
                    "end": 258,
                    "decorators": [],
                    "name": "bing",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 258,
                    "end": 266,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 260,
                      "end": 266
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
              "start": 226,
              "end": 238,
              "decorators": [],
              "name": "OtherDerived",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 247,
              "end": 251,
              "decorators": [],
              "name": "Base",
              "optional": false
            }
          },
          {
            "type": "TSModuleDeclaration",
            "start": 275,
            "end": 2919,
            "body": {
              "type": "TSModuleBlock",
              "start": 317,
              "end": 2919,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 383,
                  "end": 419,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 387,
                      "end": 418,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 387,
                        "end": 418,
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 389,
                          "end": 418,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 391,
                            "end": 418,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 396,
                                "end": 405,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 397,
                                  "end": 405,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 399,
                                    "end": 405
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 407,
                              "end": 418,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 410,
                                "end": 418,
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 410,
                                  "end": 416
                                }
                              }
                            }
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
                  "start": 428,
                  "end": 493,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 432,
                      "end": 492,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 432,
                        "end": 492,
                        "decorators": [],
                        "name": "a7",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 434,
                          "end": 492,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 436,
                            "end": 492,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 441,
                                "end": 466,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 442,
                                  "end": 466,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 444,
                                    "end": 466,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 445,
                                        "end": 454,
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 448,
                                          "end": 454,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 450,
                                            "end": 454,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 450,
                                              "end": 454,
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false
                                            }
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 456,
                                      "end": 466,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 459,
                                        "end": 466,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 459,
                                          "end": 466,
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 468,
                              "end": 492,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 471,
                                "end": 492,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 472,
                                    "end": 479,
                                    "decorators": [],
                                    "name": "r",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 473,
                                      "end": 479,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 475,
                                        "end": 479,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 475,
                                          "end": 479,
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 481,
                                  "end": 492,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 484,
                                    "end": 492,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 484,
                                      "end": 492,
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            }
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
                  "start": 502,
                  "end": 594,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 506,
                      "end": 593,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 506,
                        "end": 593,
                        "decorators": [],
                        "name": "a8",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 508,
                          "end": 593,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 510,
                            "end": 593,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 515,
                                "end": 540,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 516,
                                  "end": 540,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 518,
                                    "end": 540,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 519,
                                        "end": 528,
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 522,
                                          "end": 528,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 524,
                                            "end": 528,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 524,
                                              "end": 528,
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false
                                            }
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 530,
                                      "end": 540,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 533,
                                        "end": 540,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 533,
                                          "end": 540,
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 542,
                                "end": 568,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 543,
                                  "end": 568,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 545,
                                    "end": 568,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 546,
                                        "end": 556,
                                        "decorators": [],
                                        "name": "arg2",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 550,
                                          "end": 556,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 552,
                                            "end": 556,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 552,
                                              "end": 556,
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false
                                            }
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 558,
                                      "end": 568,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 561,
                                        "end": 568,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 561,
                                          "end": 568,
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 570,
                              "end": 593,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 573,
                                "end": 593,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 574,
                                    "end": 581,
                                    "decorators": [],
                                    "name": "r",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 575,
                                      "end": 581,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 577,
                                        "end": 581,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 577,
                                          "end": 581,
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 583,
                                  "end": 593,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 586,
                                    "end": 593,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 586,
                                      "end": 593,
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            }
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
                  "start": 603,
                  "end": 639,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 607,
                      "end": 638,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 607,
                        "end": 638,
                        "decorators": [],
                        "name": "a10",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 610,
                          "end": 638,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 612,
                            "end": 638,
                            "abstract": false,
                            "params": [
                              {
                                "type": "RestElement",
                                "start": 617,
                                "end": 629,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 620,
                                  "end": 621,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                },
                                "decorators": [],
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 621,
                                  "end": 629,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 623,
                                    "end": 629,
                                    "elementType": {
                                      "type": "TSTypeReference",
                                      "start": 623,
                                      "end": 627,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 623,
                                        "end": 627,
                                        "decorators": [],
                                        "name": "Base",
                                        "optional": false
                                      }
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 631,
                              "end": 638,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 634,
                                "end": 638,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 634,
                                  "end": 638,
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false
                                }
                              }
                            }
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
                  "start": 648,
                  "end": 723,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 652,
                      "end": 722,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 652,
                        "end": 722,
                        "decorators": [],
                        "name": "a11",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 655,
                          "end": 722,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 657,
                            "end": 722,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 662,
                                "end": 680,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 663,
                                  "end": 680,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 665,
                                    "end": 680,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 667,
                                        "end": 678,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 667,
                                          "end": 670,
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 670,
                                          "end": 678,
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 672,
                                            "end": 678
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 682,
                                "end": 713,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 683,
                                  "end": 713,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 685,
                                    "end": 713,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 687,
                                        "end": 699,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 687,
                                          "end": 690,
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 690,
                                          "end": 698,
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 692,
                                            "end": 698
                                          }
                                        }
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 700,
                                        "end": 711,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 700,
                                          "end": 703,
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 703,
                                          "end": 711,
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 705,
                                            "end": 711
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 715,
                              "end": 722,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 718,
                                "end": 722,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 718,
                                  "end": 722,
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false
                                }
                              }
                            }
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
                  "start": 732,
                  "end": 800,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 736,
                      "end": 799,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 736,
                        "end": 799,
                        "decorators": [],
                        "name": "a12",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 739,
                          "end": 799,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 741,
                            "end": 799,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 746,
                                "end": 760,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 747,
                                  "end": 760,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 749,
                                    "end": 760,
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 754,
                                      "end": 760,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 755,
                                          "end": 759,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 755,
                                            "end": 759,
                                            "decorators": [],
                                            "name": "Base",
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 749,
                                      "end": 754,
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false
                                    }
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 762,
                                "end": 780,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 763,
                                  "end": 780,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 765,
                                    "end": 780,
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 770,
                                      "end": 780,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 771,
                                          "end": 779,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 771,
                                            "end": 779,
                                            "decorators": [],
                                            "name": "Derived2",
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 765,
                                      "end": 770,
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 782,
                              "end": 799,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 785,
                                "end": 799,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 790,
                                  "end": 799,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 791,
                                      "end": 798,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 791,
                                        "end": 798,
                                        "decorators": [],
                                        "name": "Derived",
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 785,
                                  "end": 790,
                                  "decorators": [],
                                  "name": "Array",
                                  "optional": false
                                }
                              }
                            }
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
                  "start": 809,
                  "end": 920,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 813,
                      "end": 919,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 813,
                        "end": 919,
                        "decorators": [],
                        "name": "a14",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 816,
                          "end": 919,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 818,
                            "end": 919,
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 836,
                                "end": 862,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 841,
                                    "end": 850,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 842,
                                      "end": 850,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 844,
                                        "end": 850
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 851,
                                  "end": 861,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 853,
                                    "end": 861,
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 853,
                                      "end": 859
                                    }
                                  }
                                }
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 879,
                                "end": 905,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 884,
                                    "end": 893,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 885,
                                      "end": 893,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 887,
                                        "end": 893
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 894,
                                  "end": 904,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 896,
                                    "end": 904,
                                    "elementType": {
                                      "type": "TSStringKeyword",
                                      "start": 896,
                                      "end": 902
                                    }
                                  }
                                }
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
                  "start": 929,
                  "end": 982,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 933,
                      "end": 981,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 933,
                        "end": 981,
                        "decorators": [],
                        "name": "a15",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 936,
                          "end": 981,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 938,
                            "end": 981,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 943,
                                "end": 970,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 944,
                                  "end": 970,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 946,
                                    "end": 970,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 948,
                                        "end": 958,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 948,
                                          "end": 949,
                                          "decorators": [],
                                          "name": "a",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 949,
                                          "end": 957,
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 951,
                                            "end": 957
                                          }
                                        }
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 959,
                                        "end": 968,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 959,
                                          "end": 960,
                                          "decorators": [],
                                          "name": "b",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 960,
                                          "end": 968,
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 962,
                                            "end": 968
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 972,
                              "end": 981,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 975,
                                "end": 981
                              }
                            }
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
                  "start": 991,
                  "end": 1315,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 995,
                      "end": 1314,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 995,
                        "end": 1314,
                        "decorators": [],
                        "name": "a16",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 998,
                          "end": 1314,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1000,
                            "end": 1314,
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 1018,
                                "end": 1148,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1023,
                                    "end": 1136,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1024,
                                      "end": 1136,
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "start": 1026,
                                        "end": 1136,
                                        "members": [
                                          {
                                            "type": "TSConstructSignatureDeclaration",
                                            "start": 1048,
                                            "end": 1072,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1053,
                                                "end": 1062,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1054,
                                                  "end": 1062,
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 1056,
                                                    "end": 1062
                                                  }
                                                }
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1063,
                                              "end": 1071,
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1065,
                                                "end": 1071
                                              }
                                            }
                                          },
                                          {
                                            "type": "TSConstructSignatureDeclaration",
                                            "start": 1093,
                                            "end": 1118,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1098,
                                                "end": 1108,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": true,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1100,
                                                  "end": 1108,
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 1102,
                                                    "end": 1108
                                                  }
                                                }
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1109,
                                              "end": 1117,
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1111,
                                                "end": 1117
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1137,
                                  "end": 1147,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 1139,
                                    "end": 1147,
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 1139,
                                      "end": 1145
                                    }
                                  }
                                }
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 1165,
                                "end": 1300,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1170,
                                    "end": 1287,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1171,
                                      "end": 1287,
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "start": 1173,
                                        "end": 1287,
                                        "members": [
                                          {
                                            "type": "TSConstructSignatureDeclaration",
                                            "start": 1195,
                                            "end": 1221,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1200,
                                                "end": 1210,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1201,
                                                  "end": 1210,
                                                  "typeAnnotation": {
                                                    "type": "TSBooleanKeyword",
                                                    "start": 1203,
                                                    "end": 1210
                                                  }
                                                }
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1211,
                                              "end": 1220,
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1213,
                                                "end": 1220
                                              }
                                            }
                                          },
                                          {
                                            "type": "TSConstructSignatureDeclaration",
                                            "start": 1242,
                                            "end": 1269,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1247,
                                                "end": 1258,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": true,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1249,
                                                  "end": 1258,
                                                  "typeAnnotation": {
                                                    "type": "TSBooleanKeyword",
                                                    "start": 1251,
                                                    "end": 1258
                                                  }
                                                }
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1259,
                                              "end": 1268,
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1261,
                                                "end": 1268
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1288,
                                  "end": 1299,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 1290,
                                    "end": 1299,
                                    "elementType": {
                                      "type": "TSBooleanKeyword",
                                      "start": 1290,
                                      "end": 1297
                                    }
                                  }
                                }
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
                  "start": 1324,
                  "end": 1666,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1328,
                      "end": 1665,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1328,
                        "end": 1665,
                        "decorators": [],
                        "name": "a17",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1331,
                          "end": 1665,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1333,
                            "end": 1665,
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 1351,
                                "end": 1492,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1356,
                                    "end": 1483,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1357,
                                      "end": 1483,
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "start": 1359,
                                        "end": 1483,
                                        "members": [
                                          {
                                            "type": "TSConstructSignatureDeclaration",
                                            "start": 1381,
                                            "end": 1414,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1405,
                                                "end": 1409,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1406,
                                                  "end": 1409,
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "start": 1408,
                                                    "end": 1409,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1408,
                                                      "end": 1409,
                                                      "decorators": [],
                                                      "name": "T",
                                                      "optional": false
                                                    }
                                                  }
                                                }
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1410,
                                              "end": 1413,
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "start": 1412,
                                                "end": 1413,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 1412,
                                                  "end": 1413,
                                                  "decorators": [],
                                                  "name": "T",
                                                  "optional": false
                                                }
                                              }
                                            },
                                            "typeParameters": {
                                              "type": "TSTypeParameterDeclaration",
                                              "start": 1385,
                                              "end": 1404,
                                              "params": [
                                                {
                                                  "type": "TSTypeParameter",
                                                  "start": 1386,
                                                  "end": 1403,
                                                  "const": false,
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "start": 1396,
                                                    "end": 1403,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1396,
                                                      "end": 1403,
                                                      "decorators": [],
                                                      "name": "Derived",
                                                      "optional": false
                                                    }
                                                  },
                                                  "in": false,
                                                  "name": {
                                                    "type": "Identifier",
                                                    "start": 1386,
                                                    "end": 1387,
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
                                            "type": "TSConstructSignatureDeclaration",
                                            "start": 1435,
                                            "end": 1465,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1456,
                                                "end": 1460,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1457,
                                                  "end": 1460,
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "start": 1459,
                                                    "end": 1460,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1459,
                                                      "end": 1460,
                                                      "decorators": [],
                                                      "name": "T",
                                                      "optional": false
                                                    }
                                                  }
                                                }
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1461,
                                              "end": 1464,
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "start": 1463,
                                                "end": 1464,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 1463,
                                                  "end": 1464,
                                                  "decorators": [],
                                                  "name": "T",
                                                  "optional": false
                                                }
                                              }
                                            },
                                            "typeParameters": {
                                              "type": "TSTypeParameterDeclaration",
                                              "start": 1439,
                                              "end": 1455,
                                              "params": [
                                                {
                                                  "type": "TSTypeParameter",
                                                  "start": 1440,
                                                  "end": 1454,
                                                  "const": false,
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "start": 1450,
                                                    "end": 1454,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1450,
                                                      "end": 1454,
                                                      "decorators": [],
                                                      "name": "Base",
                                                      "optional": false
                                                    }
                                                  },
                                                  "in": false,
                                                  "name": {
                                                    "type": "Identifier",
                                                    "start": 1440,
                                                    "end": 1441,
                                                    "decorators": [],
                                                    "name": "T",
                                                    "optional": false
                                                  },
                                                  "out": false
                                                }
                                              ]
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1484,
                                  "end": 1491,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 1486,
                                    "end": 1491,
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1486,
                                      "end": 1489
                                    }
                                  }
                                }
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 1509,
                                "end": 1651,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1514,
                                    "end": 1642,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1515,
                                      "end": 1642,
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "start": 1517,
                                        "end": 1642,
                                        "members": [
                                          {
                                            "type": "TSConstructSignatureDeclaration",
                                            "start": 1539,
                                            "end": 1573,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1564,
                                                "end": 1568,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1565,
                                                  "end": 1568,
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "start": 1567,
                                                    "end": 1568,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1567,
                                                      "end": 1568,
                                                      "decorators": [],
                                                      "name": "T",
                                                      "optional": false
                                                    }
                                                  }
                                                }
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1569,
                                              "end": 1572,
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "start": 1571,
                                                "end": 1572,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 1571,
                                                  "end": 1572,
                                                  "decorators": [],
                                                  "name": "T",
                                                  "optional": false
                                                }
                                              }
                                            },
                                            "typeParameters": {
                                              "type": "TSTypeParameterDeclaration",
                                              "start": 1543,
                                              "end": 1563,
                                              "params": [
                                                {
                                                  "type": "TSTypeParameter",
                                                  "start": 1544,
                                                  "end": 1562,
                                                  "const": false,
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "start": 1554,
                                                    "end": 1562,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1554,
                                                      "end": 1562,
                                                      "decorators": [],
                                                      "name": "Derived2",
                                                      "optional": false
                                                    }
                                                  },
                                                  "in": false,
                                                  "name": {
                                                    "type": "Identifier",
                                                    "start": 1544,
                                                    "end": 1545,
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
                                            "type": "TSConstructSignatureDeclaration",
                                            "start": 1594,
                                            "end": 1624,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1615,
                                                "end": 1619,
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1616,
                                                  "end": 1619,
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "start": 1618,
                                                    "end": 1619,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1618,
                                                      "end": 1619,
                                                      "decorators": [],
                                                      "name": "T",
                                                      "optional": false
                                                    }
                                                  }
                                                }
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1620,
                                              "end": 1623,
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "start": 1622,
                                                "end": 1623,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 1622,
                                                  "end": 1623,
                                                  "decorators": [],
                                                  "name": "T",
                                                  "optional": false
                                                }
                                              }
                                            },
                                            "typeParameters": {
                                              "type": "TSTypeParameterDeclaration",
                                              "start": 1598,
                                              "end": 1614,
                                              "params": [
                                                {
                                                  "type": "TSTypeParameter",
                                                  "start": 1599,
                                                  "end": 1613,
                                                  "const": false,
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "start": 1609,
                                                    "end": 1613,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1609,
                                                      "end": 1613,
                                                      "decorators": [],
                                                      "name": "Base",
                                                      "optional": false
                                                    }
                                                  },
                                                  "in": false,
                                                  "name": {
                                                    "type": "Identifier",
                                                    "start": 1599,
                                                    "end": 1600,
                                                    "decorators": [],
                                                    "name": "T",
                                                    "optional": false
                                                  },
                                                  "out": false
                                                }
                                              ]
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1643,
                                  "end": 1650,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 1645,
                                    "end": 1650,
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1645,
                                      "end": 1648
                                    }
                                  }
                                }
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
                  "start": 1676,
                  "end": 1708,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1680,
                      "end": 1707,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1680,
                        "end": 1707,
                        "decorators": [],
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1682,
                          "end": 1707,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 1684,
                            "end": 1707,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1695,
                                "end": 1699,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1696,
                                  "end": 1699,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1698,
                                    "end": 1699,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1698,
                                      "end": 1699,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1701,
                              "end": 1707,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 1704,
                                "end": 1707,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 1704,
                                  "end": 1705,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1704,
                                    "end": 1705,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false
                                  }
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 1688,
                              "end": 1694,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1689,
                                  "end": 1690,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1689,
                                    "end": 1690,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  },
                                  "out": false
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1692,
                                  "end": 1693,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1692,
                                    "end": 1693,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false
                                  },
                                  "out": false
                                }
                              ]
                            }
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
                  "type": "ExpressionStatement",
                  "start": 1718,
                  "end": 1726,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1718,
                    "end": 1725,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1718,
                      "end": 1720,
                      "decorators": [],
                      "name": "a2",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1723,
                      "end": 1725,
                      "decorators": [],
                      "name": "b2",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1741,
                  "end": 1749,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1741,
                    "end": 1748,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1741,
                      "end": 1743,
                      "decorators": [],
                      "name": "b2",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1746,
                      "end": 1748,
                      "decorators": [],
                      "name": "a2",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1765,
                  "end": 1866,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1769,
                      "end": 1865,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1769,
                        "end": 1865,
                        "decorators": [],
                        "name": "b7",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1771,
                          "end": 1865,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 1773,
                            "end": 1865,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1833,
                                "end": 1849,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1834,
                                  "end": 1849,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 1836,
                                    "end": 1849,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 1837,
                                        "end": 1843,
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1840,
                                          "end": 1843,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 1842,
                                            "end": 1843,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1842,
                                              "end": 1843,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false
                                            }
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1845,
                                      "end": 1849,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1848,
                                        "end": 1849,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1848,
                                          "end": 1849,
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1851,
                              "end": 1865,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 1854,
                                "end": 1865,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1855,
                                    "end": 1859,
                                    "decorators": [],
                                    "name": "r",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1856,
                                      "end": 1859,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1858,
                                        "end": 1859,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1858,
                                          "end": 1859,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1861,
                                  "end": 1865,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1864,
                                    "end": 1865,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1864,
                                      "end": 1865,
                                      "decorators": [],
                                      "name": "V",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 1777,
                              "end": 1832,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1778,
                                  "end": 1792,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 1788,
                                    "end": 1792,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1788,
                                      "end": 1792,
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1778,
                                    "end": 1779,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  },
                                  "out": false
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1794,
                                  "end": 1811,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 1804,
                                    "end": 1811,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1804,
                                      "end": 1811,
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1794,
                                    "end": 1795,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false
                                  },
                                  "out": false
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1813,
                                  "end": 1831,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 1823,
                                    "end": 1831,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1823,
                                      "end": 1831,
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1813,
                                    "end": 1814,
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false
                                  },
                                  "out": false
                                }
                              ]
                            }
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
                  "type": "ExpressionStatement",
                  "start": 1875,
                  "end": 1883,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1875,
                    "end": 1882,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1875,
                      "end": 1877,
                      "decorators": [],
                      "name": "a7",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1880,
                      "end": 1882,
                      "decorators": [],
                      "name": "b7",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1898,
                  "end": 1906,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1898,
                    "end": 1905,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1898,
                      "end": 1900,
                      "decorators": [],
                      "name": "b7",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1903,
                      "end": 1905,
                      "decorators": [],
                      "name": "a7",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1922,
                  "end": 2037,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1926,
                      "end": 2036,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1926,
                        "end": 2036,
                        "decorators": [],
                        "name": "b8",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1928,
                          "end": 2036,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 1930,
                            "end": 2036,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1970,
                                "end": 1986,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1971,
                                  "end": 1986,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 1973,
                                    "end": 1986,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 1974,
                                        "end": 1980,
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1977,
                                          "end": 1980,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 1979,
                                            "end": 1980,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1979,
                                              "end": 1980,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false
                                            }
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1982,
                                      "end": 1986,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1985,
                                        "end": 1986,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1985,
                                          "end": 1986,
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 1988,
                                "end": 2020,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1989,
                                  "end": 2020,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 1991,
                                    "end": 2020,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 1992,
                                        "end": 2014,
                                        "decorators": [],
                                        "name": "arg2",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1996,
                                          "end": 2014,
                                          "typeAnnotation": {
                                            "type": "TSTypeLiteral",
                                            "start": 1998,
                                            "end": 2014,
                                            "members": [
                                              {
                                                "type": "TSPropertySignature",
                                                "start": 2000,
                                                "end": 2012,
                                                "computed": false,
                                                "key": {
                                                  "type": "Identifier",
                                                  "start": 2000,
                                                  "end": 2003,
                                                  "decorators": [],
                                                  "name": "foo",
                                                  "optional": false
                                                },
                                                "optional": false,
                                                "readonly": false,
                                                "static": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 2003,
                                                  "end": 2011,
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 2005,
                                                    "end": 2011
                                                  }
                                                }
                                              }
                                            ]
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2016,
                                      "end": 2020,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 2019,
                                        "end": 2020,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2019,
                                          "end": 2020,
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2022,
                              "end": 2036,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 2025,
                                "end": 2036,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 2026,
                                    "end": 2030,
                                    "decorators": [],
                                    "name": "r",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2027,
                                      "end": 2030,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 2029,
                                        "end": 2030,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2029,
                                          "end": 2030,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2032,
                                  "end": 2036,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2035,
                                    "end": 2036,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2035,
                                      "end": 2036,
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 1934,
                              "end": 1969,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1935,
                                  "end": 1949,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 1945,
                                    "end": 1949,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1945,
                                      "end": 1949,
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1935,
                                    "end": 1936,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  },
                                  "out": false
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1951,
                                  "end": 1968,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 1961,
                                    "end": 1968,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1961,
                                      "end": 1968,
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1951,
                                    "end": 1952,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false
                                  },
                                  "out": false
                                }
                              ]
                            }
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
                  "type": "ExpressionStatement",
                  "start": 2047,
                  "end": 2055,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2047,
                    "end": 2054,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2047,
                      "end": 2049,
                      "decorators": [],
                      "name": "a8",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2052,
                      "end": 2054,
                      "decorators": [],
                      "name": "b8",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2088,
                  "end": 2096,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2088,
                    "end": 2095,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2088,
                      "end": 2090,
                      "decorators": [],
                      "name": "b8",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2093,
                      "end": 2095,
                      "decorators": [],
                      "name": "a8",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2124,
                  "end": 2173,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2128,
                      "end": 2172,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 2128,
                        "end": 2172,
                        "decorators": [],
                        "name": "b10",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2131,
                          "end": 2172,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 2133,
                            "end": 2172,
                            "abstract": false,
                            "params": [
                              {
                                "type": "RestElement",
                                "start": 2157,
                                "end": 2166,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 2160,
                                  "end": 2161,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                },
                                "decorators": [],
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2161,
                                  "end": 2166,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 2163,
                                    "end": 2166,
                                    "elementType": {
                                      "type": "TSTypeReference",
                                      "start": 2163,
                                      "end": 2164,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2163,
                                        "end": 2164,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false
                                      }
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2168,
                              "end": 2172,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2171,
                                "end": 2172,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2171,
                                  "end": 2172,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2137,
                              "end": 2156,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2138,
                                  "end": 2155,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2148,
                                    "end": 2155,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2148,
                                      "end": 2155,
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2138,
                                    "end": 2139,
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
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2183,
                  "end": 2193,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2183,
                    "end": 2192,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2183,
                      "end": 2186,
                      "decorators": [],
                      "name": "a10",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2189,
                      "end": 2192,
                      "decorators": [],
                      "name": "b10",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2208,
                  "end": 2218,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2208,
                    "end": 2217,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2208,
                      "end": 2211,
                      "decorators": [],
                      "name": "b10",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2214,
                      "end": 2217,
                      "decorators": [],
                      "name": "a10",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2234,
                  "end": 2284,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2238,
                      "end": 2283,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 2238,
                        "end": 2283,
                        "decorators": [],
                        "name": "b11",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2241,
                          "end": 2283,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 2243,
                            "end": 2283,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2267,
                                "end": 2271,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2268,
                                  "end": 2271,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2270,
                                    "end": 2271,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2270,
                                      "end": 2271,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 2273,
                                "end": 2277,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2274,
                                  "end": 2277,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2276,
                                    "end": 2277,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2276,
                                      "end": 2277,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2279,
                              "end": 2283,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2282,
                                "end": 2283,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2282,
                                  "end": 2283,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2247,
                              "end": 2266,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2248,
                                  "end": 2265,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2258,
                                    "end": 2265,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2258,
                                      "end": 2265,
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2248,
                                    "end": 2249,
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
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2294,
                  "end": 2304,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2294,
                    "end": 2303,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2294,
                      "end": 2297,
                      "decorators": [],
                      "name": "a11",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2300,
                      "end": 2303,
                      "decorators": [],
                      "name": "b11",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2319,
                  "end": 2329,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2319,
                    "end": 2328,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2319,
                      "end": 2322,
                      "decorators": [],
                      "name": "b11",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2325,
                      "end": 2328,
                      "decorators": [],
                      "name": "a11",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2345,
                  "end": 2423,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2349,
                      "end": 2422,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 2349,
                        "end": 2422,
                        "decorators": [],
                        "name": "b12",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2352,
                          "end": 2422,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 2354,
                            "end": 2422,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2386,
                                "end": 2400,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2387,
                                  "end": 2400,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2389,
                                    "end": 2400,
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 2394,
                                      "end": 2400,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 2395,
                                          "end": 2399,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 2395,
                                            "end": 2399,
                                            "decorators": [],
                                            "name": "Base",
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2389,
                                      "end": 2394,
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false
                                    }
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 2402,
                                "end": 2416,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2403,
                                  "end": 2416,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2405,
                                    "end": 2416,
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 2410,
                                      "end": 2416,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 2411,
                                          "end": 2415,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 2411,
                                            "end": 2415,
                                            "decorators": [],
                                            "name": "Base",
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2405,
                                      "end": 2410,
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2418,
                              "end": 2422,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2421,
                                "end": 2422,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2421,
                                  "end": 2422,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2358,
                              "end": 2385,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2359,
                                  "end": 2384,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2369,
                                    "end": 2384,
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 2374,
                                      "end": 2384,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 2375,
                                          "end": 2383,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 2375,
                                            "end": 2383,
                                            "decorators": [],
                                            "name": "Derived2",
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2369,
                                      "end": 2374,
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2359,
                                    "end": 2360,
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
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2433,
                  "end": 2443,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2433,
                    "end": 2442,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2433,
                      "end": 2436,
                      "decorators": [],
                      "name": "a12",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2439,
                      "end": 2442,
                      "decorators": [],
                      "name": "b12",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2458,
                  "end": 2468,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2458,
                    "end": 2467,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2458,
                      "end": 2461,
                      "decorators": [],
                      "name": "b12",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2464,
                      "end": 2467,
                      "decorators": [],
                      "name": "a12",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2484,
                  "end": 2525,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2488,
                      "end": 2524,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 2488,
                        "end": 2524,
                        "decorators": [],
                        "name": "b15",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2491,
                          "end": 2524,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 2493,
                            "end": 2524,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2501,
                                "end": 2518,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2502,
                                  "end": 2518,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 2504,
                                    "end": 2518,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 2506,
                                        "end": 2511,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 2506,
                                          "end": 2507,
                                          "decorators": [],
                                          "name": "a",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 2507,
                                          "end": 2510,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 2509,
                                            "end": 2510,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2509,
                                              "end": 2510,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 2512,
                                        "end": 2516,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 2512,
                                          "end": 2513,
                                          "decorators": [],
                                          "name": "b",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 2513,
                                          "end": 2516,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 2515,
                                            "end": 2516,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2515,
                                              "end": 2516,
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
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2520,
                              "end": 2524,
                              "typeAnnotation": {
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
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2497,
                              "end": 2500,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2498,
                                  "end": 2499,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2498,
                                    "end": 2499,
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
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2535,
                  "end": 2545,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2535,
                    "end": 2544,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2535,
                      "end": 2538,
                      "decorators": [],
                      "name": "a15",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2541,
                      "end": 2544,
                      "decorators": [],
                      "name": "b15",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2560,
                  "end": 2570,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2560,
                    "end": 2569,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2560,
                      "end": 2563,
                      "decorators": [],
                      "name": "b15",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2566,
                      "end": 2569,
                      "decorators": [],
                      "name": "a15",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2586,
                  "end": 2646,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2590,
                      "end": 2645,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 2590,
                        "end": 2645,
                        "decorators": [],
                        "name": "b15a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2594,
                          "end": 2645,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 2596,
                            "end": 2645,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2617,
                                "end": 2634,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2618,
                                  "end": 2634,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 2620,
                                    "end": 2634,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 2622,
                                        "end": 2627,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 2622,
                                          "end": 2623,
                                          "decorators": [],
                                          "name": "a",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 2623,
                                          "end": 2626,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 2625,
                                            "end": 2626,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2625,
                                              "end": 2626,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 2628,
                                        "end": 2632,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 2628,
                                          "end": 2629,
                                          "decorators": [],
                                          "name": "b",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 2629,
                                          "end": 2632,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 2631,
                                            "end": 2632,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2631,
                                              "end": 2632,
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
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2636,
                              "end": 2645,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2639,
                                "end": 2645
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2600,
                              "end": 2616,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2601,
                                  "end": 2615,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2611,
                                    "end": 2615,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2611,
                                      "end": 2615,
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false
                                    }
                                  },
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2601,
                                    "end": 2602,
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
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2656,
                  "end": 2667,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2656,
                    "end": 2666,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2656,
                      "end": 2659,
                      "decorators": [],
                      "name": "a15",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2662,
                      "end": 2666,
                      "decorators": [],
                      "name": "b15a",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2682,
                  "end": 2693,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2682,
                    "end": 2692,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2682,
                      "end": 2686,
                      "decorators": [],
                      "name": "b15a",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2689,
                      "end": 2692,
                      "decorators": [],
                      "name": "a15",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2709,
                  "end": 2749,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2713,
                      "end": 2748,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 2713,
                        "end": 2748,
                        "decorators": [],
                        "name": "b16",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2716,
                          "end": 2748,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 2718,
                            "end": 2748,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2726,
                                "end": 2740,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2727,
                                  "end": 2740,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 2729,
                                    "end": 2740,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 2730,
                                        "end": 2734,
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
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
                                              "name": "T",
                                              "optional": false
                                            }
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2736,
                                      "end": 2740,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 2739,
                                        "end": 2740,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2739,
                                          "end": 2740,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2742,
                              "end": 2748,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 2745,
                                "end": 2748,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 2745,
                                  "end": 2746,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2745,
                                    "end": 2746,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2722,
                              "end": 2725,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2723,
                                  "end": 2724,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2723,
                                    "end": 2724,
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
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2758,
                  "end": 2768,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2758,
                    "end": 2767,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2758,
                      "end": 2761,
                      "decorators": [],
                      "name": "a16",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2764,
                      "end": 2767,
                      "decorators": [],
                      "name": "b16",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2786,
                  "end": 2796,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2786,
                    "end": 2795,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2786,
                      "end": 2789,
                      "decorators": [],
                      "name": "b16",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2792,
                      "end": 2795,
                      "decorators": [],
                      "name": "a16",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2815,
                  "end": 2857,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2819,
                      "end": 2856,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 2819,
                        "end": 2856,
                        "decorators": [],
                        "name": "b17",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2822,
                          "end": 2856,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 2824,
                            "end": 2856,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2832,
                                "end": 2846,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2833,
                                  "end": 2846,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 2835,
                                    "end": 2846,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 2836,
                                        "end": 2840,
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 2837,
                                          "end": 2840,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 2839,
                                            "end": 2840,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2839,
                                              "end": 2840,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false
                                            }
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2842,
                                      "end": 2846,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 2845,
                                        "end": 2846,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2845,
                                          "end": 2846,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2848,
                              "end": 2856,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 2851,
                                "end": 2856,
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 2851,
                                  "end": 2854
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2828,
                              "end": 2831,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2829,
                                  "end": 2830,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2829,
                                    "end": 2830,
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
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2866,
                  "end": 2876,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2866,
                    "end": 2875,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2866,
                      "end": 2869,
                      "decorators": [],
                      "name": "a17",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2872,
                      "end": 2875,
                      "decorators": [],
                      "name": "b17",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2894,
                  "end": 2904,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2894,
                    "end": 2903,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2894,
                      "end": 2897,
                      "decorators": [],
                      "name": "b17",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2900,
                      "end": 2903,
                      "decorators": [],
                      "name": "a17",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 282,
              "end": 316,
              "decorators": [],
              "name": "WithNonGenericSignaturesInBaseType",
              "optional": false
            },
            "kind": "module"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 2925,
            "end": 3327,
            "body": {
              "type": "TSModuleBlock",
              "start": 2964,
              "end": 3327,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 3024,
                  "end": 3053,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3028,
                      "end": 3052,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 3028,
                        "end": 3052,
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3030,
                          "end": 3052,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 3032,
                            "end": 3052,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 3040,
                                "end": 3044,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3041,
                                  "end": 3044,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 3043,
                                    "end": 3044,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3043,
                                      "end": 3044,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 3046,
                              "end": 3052,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3049,
                                "end": 3052,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 3049,
                                  "end": 3050,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3049,
                                    "end": 3050,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 3036,
                              "end": 3039,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 3037,
                                  "end": 3038,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 3037,
                                    "end": 3038,
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
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 3062,
                  "end": 3096,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3066,
                      "end": 3095,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 3066,
                        "end": 3095,
                        "decorators": [],
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3068,
                          "end": 3095,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 3070,
                            "end": 3095,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 3078,
                                "end": 3082,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3079,
                                  "end": 3082,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 3081,
                                    "end": 3082,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3081,
                                      "end": 3082,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 3084,
                              "end": 3095,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3087,
                                "end": 3095,
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 3087,
                                  "end": 3093
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 3074,
                              "end": 3077,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 3075,
                                  "end": 3076,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 3075,
                                    "end": 3076,
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
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3105,
                  "end": 3113,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 3105,
                    "end": 3112,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 3105,
                      "end": 3107,
                      "decorators": [],
                      "name": "a2",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 3110,
                      "end": 3112,
                      "decorators": [],
                      "name": "b2",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3128,
                  "end": 3136,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 3128,
                    "end": 3135,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 3128,
                      "end": 3130,
                      "decorators": [],
                      "name": "b2",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 3133,
                      "end": 3135,
                      "decorators": [],
                      "name": "a2",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 3202,
                  "end": 3236,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3206,
                      "end": 3235,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 3206,
                        "end": 3235,
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3208,
                          "end": 3235,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 3210,
                            "end": 3235,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 3218,
                                "end": 3222,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3219,
                                  "end": 3222,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 3221,
                                    "end": 3222,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3221,
                                      "end": 3222,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 3224,
                              "end": 3235,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3227,
                                "end": 3235,
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 3227,
                                  "end": 3233
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 3214,
                              "end": 3217,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 3215,
                                  "end": 3216,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 3215,
                                    "end": 3216,
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
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 3245,
                  "end": 3274,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3249,
                      "end": 3273,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 3249,
                        "end": 3273,
                        "decorators": [],
                        "name": "b3",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3251,
                          "end": 3273,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 3253,
                            "end": 3273,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 3261,
                                "end": 3265,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3262,
                                  "end": 3265,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 3264,
                                    "end": 3265,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3264,
                                      "end": 3265,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 3267,
                              "end": 3273,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3270,
                                "end": 3273,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 3270,
                                  "end": 3271,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3270,
                                    "end": 3271,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 3257,
                              "end": 3260,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 3258,
                                  "end": 3259,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 3258,
                                    "end": 3259,
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
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3284,
                  "end": 3292,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 3284,
                    "end": 3291,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 3284,
                      "end": 3286,
                      "decorators": [],
                      "name": "a3",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 3289,
                      "end": 3291,
                      "decorators": [],
                      "name": "b3",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3307,
                  "end": 3315,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 3307,
                    "end": 3314,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 3307,
                      "end": 3309,
                      "decorators": [],
                      "name": "b3",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 3312,
                      "end": 3314,
                      "decorators": [],
                      "name": "a3",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 2932,
              "end": 2963,
              "decorators": [],
              "name": "WithGenericSignaturesInBaseType",
              "optional": false
            },
            "kind": "module"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 81,
        "decorators": [],
        "name": "Errors",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
