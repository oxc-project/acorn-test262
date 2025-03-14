declarationEmitFirstTypeArgumentGenericFunctionType.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 837,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 14,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 14,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "X",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 48,
            "decorators": [],
            "name": "prop11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 48,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 27,
                "end": 48,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 28,
                  "end": 48,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 30,
                      "end": 46,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 39,
                        "end": 46,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 42,
                          "end": 46,
                          "typeName": {
                            "type": "Identifier",
                            "start": 42,
                            "end": 46,
                            "decorators": [],
                            "name": "Tany",
                            "optional": false
                          }
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 30,
                        "end": 36,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 31,
                            "end": 35,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 31,
                              "end": 35,
                              "decorators": [],
                              "name": "Tany",
                              "optional": false
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 28,
                  "decorators": [],
                  "name": "X",
                  "optional": false
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
      "start": 91,
      "end": 125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 124,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 124,
            "decorators": [],
            "name": "prop12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 124,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 103,
                "end": 124,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 104,
                  "end": 124,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 106,
                      "end": 122,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 115,
                        "end": 122,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 118,
                          "end": 122,
                          "typeName": {
                            "type": "Identifier",
                            "start": 118,
                            "end": 122,
                            "decorators": [],
                            "name": "Tany",
                            "optional": false
                          }
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 106,
                        "end": 112,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 107,
                            "end": 111,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 107,
                              "end": 111,
                              "decorators": [],
                              "name": "Tany",
                              "optional": false
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 104,
                  "decorators": [],
                  "name": "X",
                  "optional": false
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
      "type": "FunctionDeclaration",
      "start": 167,
      "end": 227,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 181,
        "end": 227,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 211,
            "end": 225,
            "argument": {
              "type": "Identifier",
              "start": 218,
              "end": 224,
              "decorators": [],
              "name": "prop11",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 178,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 228,
      "end": 288,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 242,
        "end": 288,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 272,
            "end": 286,
            "argument": {
              "type": "Identifier",
              "start": 279,
              "end": 285,
              "decorators": [],
              "name": "prop12",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 237,
        "end": 239,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 289,
      "end": 390,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 325,
        "end": 390,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 374,
            "end": 388,
            "argument": {
              "type": "Identifier",
              "start": 381,
              "end": 387,
              "decorators": [],
              "name": "prop11",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 298,
        "end": 300,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 302,
        "end": 324,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 304,
          "end": 324,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 305,
            "end": 324,
            "params": [
              {
                "type": "TSFunctionType",
                "start": 307,
                "end": 323,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 316,
                  "end": 323,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 319,
                    "end": 323,
                    "typeName": {
                      "type": "Identifier",
                      "start": 319,
                      "end": 323,
                      "decorators": [],
                      "name": "Tany",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 307,
                  "end": 313,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 308,
                      "end": 312,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 308,
                        "end": 312,
                        "decorators": [],
                        "name": "Tany",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 304,
            "end": 305,
            "decorators": [],
            "name": "X",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 391,
      "end": 483,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 428,
        "end": 483,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 467,
            "end": 481,
            "argument": {
              "type": "Identifier",
              "start": 474,
              "end": 480,
              "decorators": [],
              "name": "prop12",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 400,
        "end": 402,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 404,
        "end": 427,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 406,
          "end": 427,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 407,
            "end": 427,
            "params": [
              {
                "type": "TSFunctionType",
                "start": 409,
                "end": 425,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 418,
                  "end": 425,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 421,
                    "end": 425,
                    "typeName": {
                      "type": "Identifier",
                      "start": 421,
                      "end": 425,
                      "decorators": [],
                      "name": "Tany",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 409,
                  "end": 415,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 410,
                      "end": 414,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 410,
                        "end": 414,
                        "decorators": [],
                        "name": "Tany",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 406,
            "end": 407,
            "decorators": [],
            "name": "X",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 484,
      "end": 501,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 498,
        "end": 501,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 490,
        "end": 491,
        "decorators": [],
        "name": "Y",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 491,
        "end": 497,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 492,
            "end": 493,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 492,
              "end": 493,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 495,
            "end": 496,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 495,
              "end": 496,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 502,
      "end": 543,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 506,
          "end": 542,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 506,
            "end": 542,
            "decorators": [],
            "name": "prop2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 511,
              "end": 542,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 513,
                "end": 542,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 514,
                  "end": 542,
                  "params": [
                    {
                      "type": "TSArrayType",
                      "start": 515,
                      "end": 523,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 515,
                        "end": 521
                      }
                    },
                    {
                      "type": "TSFunctionType",
                      "start": 525,
                      "end": 541,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 534,
                        "end": 541,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 537,
                          "end": 541,
                          "typeName": {
                            "type": "Identifier",
                            "start": 537,
                            "end": 541,
                            "decorators": [],
                            "name": "Tany",
                            "optional": false
                          }
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 525,
                        "end": 531,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 526,
                            "end": 530,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 526,
                              "end": 530,
                              "decorators": [],
                              "name": "Tany",
                              "optional": false
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 513,
                  "end": 514,
                  "decorators": [],
                  "name": "Y",
                  "optional": false
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
      "start": 583,
      "end": 624,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 587,
          "end": 623,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 587,
            "end": 623,
            "decorators": [],
            "name": "prop2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 592,
              "end": 623,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 594,
                "end": 623,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 595,
                  "end": 623,
                  "params": [
                    {
                      "type": "TSArrayType",
                      "start": 596,
                      "end": 604,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 596,
                        "end": 602
                      }
                    },
                    {
                      "type": "TSFunctionType",
                      "start": 606,
                      "end": 622,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 615,
                        "end": 622,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 618,
                          "end": 622,
                          "typeName": {
                            "type": "Identifier",
                            "start": 618,
                            "end": 622,
                            "decorators": [],
                            "name": "Tany",
                            "optional": false
                          }
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 606,
                        "end": 612,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 607,
                            "end": 611,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 607,
                              "end": 611,
                              "decorators": [],
                              "name": "Tany",
                              "optional": false
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 594,
                  "end": 595,
                  "decorators": [],
                  "name": "Y",
                  "optional": false
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
      "start": 661,
      "end": 711,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 665,
          "end": 710,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 665,
            "end": 710,
            "decorators": [],
            "name": "prop3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 670,
              "end": 710,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 672,
                "end": 710,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 673,
                  "end": 710,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 675,
                      "end": 691,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 684,
                        "end": 691,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 687,
                          "end": 691,
                          "typeName": {
                            "type": "Identifier",
                            "start": 687,
                            "end": 691,
                            "decorators": [],
                            "name": "Tany",
                            "optional": false
                          }
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 675,
                        "end": 681,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 676,
                            "end": 680,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 676,
                              "end": 680,
                              "decorators": [],
                              "name": "Tany",
                              "optional": false
                            },
                            "out": false
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSFunctionType",
                      "start": 693,
                      "end": 709,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 702,
                        "end": 709,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 705,
                          "end": 709,
                          "typeName": {
                            "type": "Identifier",
                            "start": 705,
                            "end": 709,
                            "decorators": [],
                            "name": "Tany",
                            "optional": false
                          }
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 693,
                        "end": 699,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 694,
                            "end": 698,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 694,
                              "end": 698,
                              "decorators": [],
                              "name": "Tany",
                              "optional": false
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 672,
                  "end": 673,
                  "decorators": [],
                  "name": "Y",
                  "optional": false
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
      "start": 748,
      "end": 799,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 752,
          "end": 798,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 752,
            "end": 798,
            "decorators": [],
            "name": "prop4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 757,
              "end": 798,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 759,
                "end": 798,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 760,
                  "end": 798,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 762,
                      "end": 778,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 771,
                        "end": 778,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 774,
                          "end": 778,
                          "typeName": {
                            "type": "Identifier",
                            "start": 774,
                            "end": 778,
                            "decorators": [],
                            "name": "Tany",
                            "optional": false
                          }
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 762,
                        "end": 768,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 763,
                            "end": 767,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 763,
                              "end": 767,
                              "decorators": [],
                              "name": "Tany",
                              "optional": false
                            },
                            "out": false
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSFunctionType",
                      "start": 781,
                      "end": 797,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 790,
                        "end": 797,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 793,
                          "end": 797,
                          "typeName": {
                            "type": "Identifier",
                            "start": 793,
                            "end": 797,
                            "decorators": [],
                            "name": "Tany",
                            "optional": false
                          }
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 781,
                        "end": 787,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 782,
                            "end": 786,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 782,
                              "end": 786,
                              "decorators": [],
                              "name": "Tany",
                              "optional": false
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 759,
                  "end": 760,
                  "decorators": [],
                  "name": "Y",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
