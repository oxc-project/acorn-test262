callSignatureAssignabilityInInheritance2.ts
```json
{
  "type": "Program",
  "start": 102,
  "end": 3100,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 129,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 113,
        "end": 129,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 127,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 118,
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
              "start": 118,
              "end": 126,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 120,
                "end": 126
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
        "start": 108,
        "end": 112,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 130,
      "end": 173,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 157,
        "end": 173,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 159,
            "end": 171,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 162,
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
              "start": 162,
              "end": 170,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 164,
                "end": 170
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
        "start": 136,
        "end": 143,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 152,
        "end": 156,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 174,
      "end": 221,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 205,
        "end": 221,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 207,
            "end": 219,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 207,
              "end": 210,
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
              "start": 210,
              "end": 218,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 212,
                "end": 218
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
        "start": 180,
        "end": 188,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 197,
        "end": 204,
        "decorators": [],
        "name": "Derived",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 222,
      "end": 271,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 254,
        "end": 271,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 256,
            "end": 269,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 260,
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
              "start": 260,
              "end": 268,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 262,
                "end": 268
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
        "start": 228,
        "end": 240,
        "decorators": [],
        "name": "OtherDerived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 249,
        "end": 253,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 273,
      "end": 1571,
      "body": {
        "type": "TSInterfaceBody",
        "start": 285,
        "end": 1571,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 307,
            "end": 334,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 307,
              "end": 308,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 308,
              "end": 333,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 310,
                "end": 333,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 311,
                    "end": 320,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 312,
                      "end": 320,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 314,
                        "end": 320
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 322,
                  "end": 333,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 325,
                    "end": 333,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 325,
                      "end": 331
                    }
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 339,
            "end": 367,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 339,
              "end": 341,
              "decorators": [],
              "name": "a2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 341,
              "end": 366,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 343,
                "end": 366,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 344,
                    "end": 353,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 345,
                      "end": 353,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 347,
                        "end": 353
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 355,
                  "end": 366,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 358,
                    "end": 366,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 358,
                      "end": 364
                    }
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 372,
            "end": 396,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 372,
              "end": 374,
              "decorators": [],
              "name": "a3",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 374,
              "end": 395,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 376,
                "end": 395,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 377,
                    "end": 386,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 378,
                      "end": 386,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 380,
                        "end": 386
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 388,
                  "end": 395,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 391,
                    "end": 395
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 401,
            "end": 438,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 401,
              "end": 403,
              "decorators": [],
              "name": "a4",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 403,
              "end": 437,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 405,
                "end": 437,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 406,
                    "end": 415,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 407,
                      "end": 415,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 409,
                        "end": 415
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 417,
                    "end": 426,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 418,
                      "end": 426,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 420,
                        "end": 426
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 428,
                  "end": 437,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 431,
                    "end": 437
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 443,
            "end": 486,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 443,
              "end": 445,
              "decorators": [],
              "name": "a5",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 445,
              "end": 485,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 447,
                "end": 485,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 448,
                    "end": 474,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 449,
                      "end": 474,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 451,
                        "end": 474,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 452,
                            "end": 463,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 455,
                              "end": 463,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 457,
                                "end": 463
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 465,
                          "end": 474,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 468,
                            "end": 474
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 476,
                  "end": 485,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 479,
                    "end": 485
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 491,
            "end": 531,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 491,
              "end": 493,
              "decorators": [],
              "name": "a6",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 493,
              "end": 530,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 495,
                "end": 530,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 496,
                    "end": 521,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 497,
                      "end": 521,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 499,
                        "end": 521,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 500,
                            "end": 509,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 503,
                              "end": 509,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 505,
                                "end": 509,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 505,
                                  "end": 509,
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
                          "start": 511,
                          "end": 521,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 514,
                            "end": 521,
                            "typeName": {
                              "type": "Identifier",
                              "start": 514,
                              "end": 521,
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
                  "start": 523,
                  "end": 530,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 526,
                    "end": 530,
                    "typeName": {
                      "type": "Identifier",
                      "start": 526,
                      "end": 530,
                      "decorators": [],
                      "name": "Base",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 536,
            "end": 592,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 536,
              "end": 538,
              "decorators": [],
              "name": "a7",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 538,
              "end": 591,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 540,
                "end": 591,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 541,
                    "end": 566,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 542,
                      "end": 566,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 544,
                        "end": 566,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 545,
                            "end": 554,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 548,
                              "end": 554,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 550,
                                "end": 554,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 550,
                                  "end": 554,
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
                          "start": 556,
                          "end": 566,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 559,
                            "end": 566,
                            "typeName": {
                              "type": "Identifier",
                              "start": 559,
                              "end": 566,
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
                  "start": 568,
                  "end": 591,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 571,
                    "end": 591,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 572,
                        "end": 579,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 573,
                          "end": 579,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 575,
                            "end": 579,
                            "typeName": {
                              "type": "Identifier",
                              "start": 575,
                              "end": 579,
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
                      "start": 581,
                      "end": 591,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 584,
                        "end": 591,
                        "typeName": {
                          "type": "Identifier",
                          "start": 584,
                          "end": 591,
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
          {
            "type": "TSPropertySignature",
            "start": 597,
            "end": 681,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 597,
              "end": 599,
              "decorators": [],
              "name": "a8",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 599,
              "end": 680,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 601,
                "end": 680,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 602,
                    "end": 627,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 603,
                      "end": 627,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 605,
                        "end": 627,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 606,
                            "end": 615,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 609,
                              "end": 615,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 611,
                                "end": 615,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 611,
                                  "end": 615,
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
                          "start": 617,
                          "end": 627,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 620,
                            "end": 627,
                            "typeName": {
                              "type": "Identifier",
                              "start": 620,
                              "end": 627,
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
                    "start": 629,
                    "end": 655,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 630,
                      "end": 655,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 632,
                        "end": 655,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 633,
                            "end": 643,
                            "decorators": [],
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 637,
                              "end": 643,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 639,
                                "end": 643,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 639,
                                  "end": 643,
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
                          "start": 645,
                          "end": 655,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 648,
                            "end": 655,
                            "typeName": {
                              "type": "Identifier",
                              "start": 648,
                              "end": 655,
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
                  "start": 657,
                  "end": 680,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 660,
                    "end": 680,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 661,
                        "end": 668,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 662,
                          "end": 668,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 664,
                            "end": 668,
                            "typeName": {
                              "type": "Identifier",
                              "start": 664,
                              "end": 668,
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
                      "start": 670,
                      "end": 680,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 673,
                        "end": 680,
                        "typeName": {
                          "type": "Identifier",
                          "start": 673,
                          "end": 680,
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
          {
            "type": "TSPropertySignature",
            "start": 686,
            "end": 770,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 686,
              "end": 688,
              "decorators": [],
              "name": "a9",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 688,
              "end": 769,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 690,
                "end": 769,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 691,
                    "end": 716,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 692,
                      "end": 716,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 694,
                        "end": 716,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 695,
                            "end": 704,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 698,
                              "end": 704,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 700,
                                "end": 704,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 700,
                                  "end": 704,
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
                          "start": 706,
                          "end": 716,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 709,
                            "end": 716,
                            "typeName": {
                              "type": "Identifier",
                              "start": 709,
                              "end": 716,
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
                    "start": 718,
                    "end": 744,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 719,
                      "end": 744,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 721,
                        "end": 744,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 722,
                            "end": 732,
                            "decorators": [],
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 726,
                              "end": 732,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 728,
                                "end": 732,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 728,
                                  "end": 732,
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
                          "start": 734,
                          "end": 744,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 737,
                            "end": 744,
                            "typeName": {
                              "type": "Identifier",
                              "start": 737,
                              "end": 744,
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
                  "start": 746,
                  "end": 769,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 749,
                    "end": 769,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 750,
                        "end": 757,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 751,
                          "end": 757,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 753,
                            "end": 757,
                            "typeName": {
                              "type": "Identifier",
                              "start": 753,
                              "end": 757,
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
                      "start": 759,
                      "end": 769,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 762,
                        "end": 769,
                        "typeName": {
                          "type": "Identifier",
                          "start": 762,
                          "end": 769,
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
          {
            "type": "TSPropertySignature",
            "start": 775,
            "end": 809,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 775,
              "end": 778,
              "decorators": [],
              "name": "a10",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 778,
              "end": 808,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 780,
                "end": 808,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 781,
                    "end": 796,
                    "argument": {
                      "type": "Identifier",
                      "start": 784,
                      "end": 785,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 785,
                      "end": 796,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 787,
                        "end": 796,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 787,
                          "end": 794,
                          "typeName": {
                            "type": "Identifier",
                            "start": 787,
                            "end": 794,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 798,
                  "end": 808,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 801,
                    "end": 808,
                    "typeName": {
                      "type": "Identifier",
                      "start": 801,
                      "end": 808,
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
            "type": "TSPropertySignature",
            "start": 814,
            "end": 881,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 814,
              "end": 817,
              "decorators": [],
              "name": "a11",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 817,
              "end": 880,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 819,
                "end": 880,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 820,
                    "end": 838,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 821,
                      "end": 838,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 823,
                        "end": 838,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 825,
                            "end": 836,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 825,
                              "end": 828,
                              "decorators": [],
                              "name": "foo",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 828,
                              "end": 836,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 830,
                                "end": 836
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 840,
                    "end": 871,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 841,
                      "end": 871,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 843,
                        "end": 871,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 845,
                            "end": 857,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 845,
                              "end": 848,
                              "decorators": [],
                              "name": "foo",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 848,
                              "end": 856,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 850,
                                "end": 856
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 858,
                            "end": 869,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 858,
                              "end": 861,
                              "decorators": [],
                              "name": "bar",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 861,
                              "end": 869,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 863,
                                "end": 869
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
                  "start": 873,
                  "end": 880,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 876,
                    "end": 880,
                    "typeName": {
                      "type": "Identifier",
                      "start": 876,
                      "end": 880,
                      "decorators": [],
                      "name": "Base",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 886,
            "end": 946,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 886,
              "end": 889,
              "decorators": [],
              "name": "a12",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 889,
              "end": 945,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 891,
                "end": 945,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 892,
                    "end": 906,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 893,
                      "end": 906,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 895,
                        "end": 906,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 900,
                          "end": 906,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 901,
                              "end": 905,
                              "typeName": {
                                "type": "Identifier",
                                "start": 901,
                                "end": 905,
                                "decorators": [],
                                "name": "Base",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 895,
                          "end": 900,
                          "decorators": [],
                          "name": "Array",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 908,
                    "end": 926,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 909,
                      "end": 926,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 911,
                        "end": 926,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 916,
                          "end": 926,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 917,
                              "end": 925,
                              "typeName": {
                                "type": "Identifier",
                                "start": 917,
                                "end": 925,
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 911,
                          "end": 916,
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
                  "start": 928,
                  "end": 945,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 931,
                    "end": 945,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 936,
                      "end": 945,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 937,
                          "end": 944,
                          "typeName": {
                            "type": "Identifier",
                            "start": 937,
                            "end": 944,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 931,
                      "end": 936,
                      "decorators": [],
                      "name": "Array",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 951,
            "end": 1010,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 951,
              "end": 954,
              "decorators": [],
              "name": "a13",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 954,
              "end": 1009,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 956,
                "end": 1009,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 957,
                    "end": 971,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 958,
                      "end": 971,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 960,
                        "end": 971,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 965,
                          "end": 971,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 966,
                              "end": 970,
                              "typeName": {
                                "type": "Identifier",
                                "start": 966,
                                "end": 970,
                                "decorators": [],
                                "name": "Base",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 960,
                          "end": 965,
                          "decorators": [],
                          "name": "Array",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 973,
                    "end": 990,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 974,
                      "end": 990,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 976,
                        "end": 990,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 981,
                          "end": 990,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 982,
                              "end": 989,
                              "typeName": {
                                "type": "Identifier",
                                "start": 982,
                                "end": 989,
                                "decorators": [],
                                "name": "Derived",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 976,
                          "end": 981,
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
                  "start": 992,
                  "end": 1009,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 995,
                    "end": 1009,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1000,
                      "end": 1009,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1001,
                          "end": 1008,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1001,
                            "end": 1008,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 995,
                      "end": 1000,
                      "decorators": [],
                      "name": "Array",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1015,
            "end": 1060,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1015,
              "end": 1018,
              "decorators": [],
              "name": "a14",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1018,
              "end": 1059,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1020,
                "end": 1059,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1021,
                    "end": 1048,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1022,
                      "end": 1048,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1024,
                        "end": 1048,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1026,
                            "end": 1036,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1026,
                              "end": 1027,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1027,
                              "end": 1035,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1029,
                                "end": 1035
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1037,
                            "end": 1046,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1037,
                              "end": 1038,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1038,
                              "end": 1046,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1040,
                                "end": 1046
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
                  "start": 1050,
                  "end": 1059,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1053,
                    "end": 1059,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1053,
                      "end": 1059,
                      "decorators": [],
                      "name": "Object",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1065,
            "end": 1140,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1065,
              "end": 1068,
              "decorators": [],
              "name": "a15",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1068,
              "end": 1139,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1070,
                "end": 1139,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1080,
                    "end": 1102,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1081,
                        "end": 1090,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1082,
                          "end": 1090,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1084,
                            "end": 1090
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1091,
                      "end": 1101,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1093,
                        "end": 1101,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1093,
                          "end": 1099
                        }
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1111,
                    "end": 1133,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1112,
                        "end": 1121,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1113,
                          "end": 1121,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1115,
                            "end": 1121
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1122,
                      "end": 1132,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1124,
                        "end": 1132,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1124,
                          "end": 1130
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1145,
            "end": 1245,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1145,
              "end": 1148,
              "decorators": [],
              "name": "a16",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1148,
              "end": 1244,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1150,
                "end": 1244,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1160,
                    "end": 1196,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1180,
                        "end": 1184,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1181,
                          "end": 1184,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1183,
                            "end": 1184,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1183,
                              "end": 1184,
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
                      "start": 1185,
                      "end": 1195,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1187,
                        "end": 1195,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1187,
                          "end": 1193
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 1160,
                      "end": 1179,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1161,
                          "end": 1178,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 1171,
                            "end": 1178,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1171,
                              "end": 1178,
                              "decorators": [],
                              "name": "Derived",
                              "optional": false
                            }
                          },
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 1161,
                            "end": 1162,
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
                    "type": "TSCallSignatureDeclaration",
                    "start": 1205,
                    "end": 1238,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1222,
                        "end": 1226,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
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
                              "name": "U",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1227,
                      "end": 1237,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1229,
                        "end": 1237,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1229,
                          "end": 1235
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 1205,
                      "end": 1221,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1206,
                          "end": 1220,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 1216,
                            "end": 1220,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1216,
                              "end": 1220,
                              "decorators": [],
                              "name": "Base",
                              "optional": false
                            }
                          },
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 1206,
                            "end": 1207,
                            "decorators": [],
                            "name": "U",
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
          },
          {
            "type": "TSPropertySignature",
            "start": 1250,
            "end": 1355,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1250,
              "end": 1253,
              "decorators": [],
              "name": "a17",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1253,
              "end": 1354,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1255,
                "end": 1354,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1265,
                    "end": 1302,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1266,
                        "end": 1290,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1267,
                          "end": 1290,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 1269,
                            "end": 1290,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1270,
                                "end": 1279,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1271,
                                  "end": 1279,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1273,
                                    "end": 1279
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1281,
                              "end": 1290,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1284,
                                "end": 1290
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1291,
                      "end": 1301,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1293,
                        "end": 1301,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1293,
                          "end": 1299
                        }
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1311,
                    "end": 1348,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1312,
                        "end": 1336,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1313,
                          "end": 1336,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 1315,
                            "end": 1336,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1316,
                                "end": 1325,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1317,
                                  "end": 1325,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1319,
                                    "end": 1325
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1327,
                              "end": 1336,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1330,
                                "end": 1336
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1337,
                      "end": 1347,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1339,
                        "end": 1347,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1339,
                          "end": 1345
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1360,
            "end": 1569,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1360,
              "end": 1363,
              "decorators": [],
              "name": "a18",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1363,
              "end": 1568,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1365,
                "end": 1568,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1375,
                    "end": 1465,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1376,
                        "end": 1456,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1377,
                          "end": 1456,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1379,
                            "end": 1456,
                            "members": [
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 1393,
                                "end": 1413,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1394,
                                    "end": 1403,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1395,
                                      "end": 1403,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1397,
                                        "end": 1403
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1404,
                                  "end": 1412,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1406,
                                    "end": 1412
                                  }
                                }
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 1426,
                                "end": 1446,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1427,
                                    "end": 1436,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1428,
                                      "end": 1436,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 1430,
                                        "end": 1436
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1437,
                                  "end": 1445,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1439,
                                    "end": 1445
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
                      "start": 1457,
                      "end": 1464,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1459,
                        "end": 1464,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1459,
                          "end": 1462
                        }
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1474,
                    "end": 1562,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1475,
                        "end": 1553,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1476,
                          "end": 1553,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1478,
                            "end": 1553,
                            "members": [
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 1492,
                                "end": 1514,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1493,
                                    "end": 1503,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1494,
                                      "end": 1503,
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 1496,
                                        "end": 1503
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1504,
                                  "end": 1513,
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 1506,
                                    "end": 1513
                                  }
                                }
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 1527,
                                "end": 1543,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1528,
                                    "end": 1535,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1529,
                                      "end": 1535,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1531,
                                        "end": 1535,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1531,
                                          "end": 1535,
                                          "decorators": [],
                                          "name": "Date",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1536,
                                  "end": 1542,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1538,
                                    "end": 1542,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1538,
                                      "end": 1542,
                                      "decorators": [],
                                      "name": "Date",
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
                      "start": 1554,
                      "end": 1561,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1556,
                        "end": 1561,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1556,
                          "end": 1559
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
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 283,
        "end": 284,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1580,
      "end": 3100,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1602,
        "end": 3100,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1619,
            "end": 1639,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1619,
              "end": 1620,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1620,
              "end": 1638,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1622,
                "end": 1638,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1626,
                    "end": 1630,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1627,
                      "end": 1630,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1629,
                        "end": 1630,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1629,
                          "end": 1630,
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
                  "start": 1632,
                  "end": 1638,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1635,
                    "end": 1638,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1635,
                      "end": 1636,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1635,
                        "end": 1636,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1622,
                  "end": 1625,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1623,
                      "end": 1624,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1623,
                        "end": 1624,
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
          {
            "type": "TSPropertySignature",
            "start": 1701,
            "end": 1727,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1701,
              "end": 1703,
              "decorators": [],
              "name": "a2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1703,
              "end": 1726,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1705,
                "end": 1726,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1709,
                    "end": 1713,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1710,
                      "end": 1713,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1712,
                        "end": 1713,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1712,
                          "end": 1713,
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
                  "start": 1715,
                  "end": 1726,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1718,
                    "end": 1726,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1718,
                      "end": 1724
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1705,
                  "end": 1708,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1706,
                      "end": 1707,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1706,
                        "end": 1707,
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
          {
            "type": "TSPropertySignature",
            "start": 1738,
            "end": 1757,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1738,
              "end": 1740,
              "decorators": [],
              "name": "a3",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1740,
              "end": 1756,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1742,
                "end": 1756,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1746,
                    "end": 1750,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1747,
                      "end": 1750,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1749,
                        "end": 1750,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1749,
                          "end": 1750,
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
                  "start": 1752,
                  "end": 1756,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1755,
                    "end": 1756,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1755,
                      "end": 1756,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1742,
                  "end": 1745,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1743,
                      "end": 1744,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1743,
                        "end": 1744,
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
          {
            "type": "TSPropertySignature",
            "start": 1792,
            "end": 1820,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1792,
              "end": 1794,
              "decorators": [],
              "name": "a4",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1794,
              "end": 1819,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1796,
                "end": 1819,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1803,
                    "end": 1807,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1804,
                      "end": 1807,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1806,
                        "end": 1807,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1806,
                          "end": 1807,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1809,
                    "end": 1813,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1810,
                      "end": 1813,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1812,
                        "end": 1813,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1812,
                          "end": 1813,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1815,
                  "end": 1819,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1818,
                    "end": 1819,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1818,
                      "end": 1819,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1796,
                  "end": 1802,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1797,
                      "end": 1798,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1797,
                        "end": 1798,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1800,
                      "end": 1801,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1800,
                        "end": 1801,
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
          {
            "type": "TSPropertySignature",
            "start": 1895,
            "end": 1929,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1895,
              "end": 1897,
              "decorators": [],
              "name": "a5",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1897,
              "end": 1928,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1899,
                "end": 1928,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1906,
                    "end": 1922,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1907,
                      "end": 1922,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1909,
                        "end": 1922,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1910,
                            "end": 1916,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1913,
                              "end": 1916,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1915,
                                "end": 1916,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1915,
                                  "end": 1916,
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
                          "start": 1918,
                          "end": 1922,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1921,
                            "end": 1922,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1921,
                              "end": 1922,
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
                  "start": 1924,
                  "end": 1928,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1927,
                    "end": 1928,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1927,
                      "end": 1928,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1899,
                  "end": 1905,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1900,
                      "end": 1901,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1900,
                        "end": 1901,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1903,
                      "end": 1904,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1903,
                        "end": 1904,
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
          {
            "type": "TSPropertySignature",
            "start": 1996,
            "end": 2059,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1996,
              "end": 1998,
              "decorators": [],
              "name": "a6",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1998,
              "end": 2058,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2000,
                "end": 2058,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2036,
                    "end": 2052,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2037,
                      "end": 2052,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2039,
                        "end": 2052,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2040,
                            "end": 2046,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2043,
                              "end": 2046,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2045,
                                "end": 2046,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2045,
                                  "end": 2046,
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
                          "start": 2048,
                          "end": 2052,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2051,
                            "end": 2052,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2051,
                              "end": 2052,
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
                  "start": 2054,
                  "end": 2058,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2057,
                    "end": 2058,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2057,
                      "end": 2058,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2000,
                  "end": 2035,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2001,
                      "end": 2015,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2011,
                        "end": 2015,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2011,
                          "end": 2015,
                          "decorators": [],
                          "name": "Base",
                          "optional": false
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2001,
                        "end": 2002,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 2017,
                      "end": 2034,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2027,
                        "end": 2034,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2027,
                          "end": 2034,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2017,
                        "end": 2018,
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
          {
            "type": "TSPropertySignature",
            "start": 2113,
            "end": 2186,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2113,
              "end": 2115,
              "decorators": [],
              "name": "a7",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2115,
              "end": 2185,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2117,
                "end": 2185,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2153,
                    "end": 2169,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2154,
                      "end": 2169,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2156,
                        "end": 2169,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2157,
                            "end": 2163,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2160,
                              "end": 2163,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2162,
                                "end": 2163,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2162,
                                  "end": 2163,
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
                          "start": 2165,
                          "end": 2169,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2168,
                            "end": 2169,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2168,
                              "end": 2169,
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
                  "start": 2171,
                  "end": 2185,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2174,
                    "end": 2185,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2175,
                        "end": 2179,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2176,
                          "end": 2179,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2178,
                            "end": 2179,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2178,
                              "end": 2179,
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
                      "start": 2181,
                      "end": 2185,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2184,
                        "end": 2185,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2184,
                          "end": 2185,
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
                  "start": 2117,
                  "end": 2152,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2118,
                      "end": 2132,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2128,
                        "end": 2132,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2128,
                          "end": 2132,
                          "decorators": [],
                          "name": "Base",
                          "optional": false
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2118,
                        "end": 2119,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 2134,
                      "end": 2151,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2144,
                        "end": 2151,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2144,
                          "end": 2151,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2134,
                        "end": 2135,
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
          {
            "type": "TSPropertySignature",
            "start": 2197,
            "end": 2289,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2197,
              "end": 2199,
              "decorators": [],
              "name": "a8",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2199,
              "end": 2288,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2201,
                "end": 2288,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2237,
                    "end": 2253,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2238,
                      "end": 2253,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2240,
                        "end": 2253,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2241,
                            "end": 2247,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2244,
                              "end": 2247,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2246,
                                "end": 2247,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2246,
                                  "end": 2247,
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
                          "start": 2249,
                          "end": 2253,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2252,
                            "end": 2253,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2252,
                              "end": 2253,
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
                    "start": 2255,
                    "end": 2272,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2256,
                      "end": 2272,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2258,
                        "end": 2272,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2259,
                            "end": 2266,
                            "decorators": [],
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2263,
                              "end": 2266,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2265,
                                "end": 2266,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2265,
                                  "end": 2266,
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
                          "start": 2268,
                          "end": 2272,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2271,
                            "end": 2272,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2271,
                              "end": 2272,
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
                  "start": 2274,
                  "end": 2288,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2277,
                    "end": 2288,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2278,
                        "end": 2282,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2279,
                          "end": 2282,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2281,
                            "end": 2282,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2281,
                              "end": 2282,
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
                      "start": 2284,
                      "end": 2288,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2287,
                        "end": 2288,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2287,
                          "end": 2288,
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
                  "start": 2201,
                  "end": 2236,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2202,
                      "end": 2216,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2212,
                        "end": 2216,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2212,
                          "end": 2216,
                          "decorators": [],
                          "name": "Base",
                          "optional": false
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2202,
                        "end": 2203,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 2218,
                      "end": 2235,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2228,
                        "end": 2235,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2228,
                          "end": 2235,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2218,
                        "end": 2219,
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
          {
            "type": "TSPropertySignature",
            "start": 2300,
            "end": 2420,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2300,
              "end": 2302,
              "decorators": [],
              "name": "a9",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2302,
              "end": 2419,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2304,
                "end": 2419,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2340,
                    "end": 2356,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2341,
                      "end": 2356,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2343,
                        "end": 2356,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2344,
                            "end": 2350,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2347,
                              "end": 2350,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2349,
                                "end": 2350,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2349,
                                  "end": 2350,
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
                          "start": 2352,
                          "end": 2356,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2355,
                            "end": 2356,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2355,
                              "end": 2356,
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
                    "start": 2358,
                    "end": 2403,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2359,
                      "end": 2403,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2361,
                        "end": 2403,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2362,
                            "end": 2397,
                            "decorators": [],
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2366,
                              "end": 2397,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 2368,
                                "end": 2397,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 2370,
                                    "end": 2382,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2370,
                                      "end": 2373,
                                      "decorators": [],
                                      "name": "foo",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2373,
                                      "end": 2381,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 2375,
                                        "end": 2381
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 2383,
                                    "end": 2395,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2383,
                                      "end": 2387,
                                      "decorators": [],
                                      "name": "bing",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2387,
                                      "end": 2395,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 2389,
                                        "end": 2395
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
                          "start": 2399,
                          "end": 2403,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2402,
                            "end": 2403,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2402,
                              "end": 2403,
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
                  "start": 2405,
                  "end": 2419,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2408,
                    "end": 2419,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2409,
                        "end": 2413,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2410,
                          "end": 2413,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2412,
                            "end": 2413,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2412,
                              "end": 2413,
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
                      "start": 2415,
                      "end": 2419,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2418,
                        "end": 2419,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2418,
                          "end": 2419,
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
                  "start": 2304,
                  "end": 2339,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2305,
                      "end": 2319,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2315,
                        "end": 2319,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2315,
                          "end": 2319,
                          "decorators": [],
                          "name": "Base",
                          "optional": false
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2305,
                        "end": 2306,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 2321,
                      "end": 2338,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2331,
                        "end": 2338,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2331,
                          "end": 2338,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2321,
                        "end": 2322,
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
          {
            "type": "TSPropertySignature",
            "start": 2474,
            "end": 2515,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2474,
              "end": 2477,
              "decorators": [],
              "name": "a10",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2477,
              "end": 2514,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2479,
                "end": 2514,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 2499,
                    "end": 2508,
                    "argument": {
                      "type": "Identifier",
                      "start": 2502,
                      "end": 2503,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2503,
                      "end": 2508,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 2505,
                        "end": 2508,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 2505,
                          "end": 2506,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2505,
                            "end": 2506,
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
                  "start": 2510,
                  "end": 2514,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2513,
                    "end": 2514,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2513,
                      "end": 2514,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2479,
                  "end": 2498,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2480,
                      "end": 2497,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2490,
                        "end": 2497,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2490,
                          "end": 2497,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2480,
                        "end": 2481,
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
          {
            "type": "TSPropertySignature",
            "start": 2526,
            "end": 2565,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2526,
              "end": 2529,
              "decorators": [],
              "name": "a11",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2529,
              "end": 2564,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2531,
                "end": 2564,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2548,
                    "end": 2552,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2549,
                      "end": 2552,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2551,
                        "end": 2552,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2551,
                          "end": 2552,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2554,
                    "end": 2558,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2555,
                      "end": 2558,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2557,
                        "end": 2558,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2557,
                          "end": 2558,
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
                  "start": 2560,
                  "end": 2564,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2563,
                    "end": 2564,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2563,
                      "end": 2564,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2531,
                  "end": 2547,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2532,
                      "end": 2546,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2542,
                        "end": 2546,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2542,
                          "end": 2546,
                          "decorators": [],
                          "name": "Base",
                          "optional": false
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2532,
                        "end": 2533,
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
          {
            "type": "TSPropertySignature",
            "start": 2576,
            "end": 2645,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2576,
              "end": 2579,
              "decorators": [],
              "name": "a12",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2579,
              "end": 2644,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2581,
                "end": 2644,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2605,
                    "end": 2619,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2606,
                      "end": 2619,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2608,
                        "end": 2619,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2613,
                          "end": 2619,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2614,
                              "end": 2618,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2614,
                                "end": 2618,
                                "decorators": [],
                                "name": "Base",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 2608,
                          "end": 2613,
                          "decorators": [],
                          "name": "Array",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2621,
                    "end": 2625,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2622,
                      "end": 2625,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2624,
                        "end": 2625,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2624,
                          "end": 2625,
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
                  "start": 2627,
                  "end": 2644,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2630,
                    "end": 2644,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2635,
                      "end": 2644,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2636,
                          "end": 2643,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2636,
                            "end": 2643,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2630,
                      "end": 2635,
                      "decorators": [],
                      "name": "Array",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2581,
                  "end": 2604,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2582,
                      "end": 2603,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2592,
                        "end": 2603,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2597,
                          "end": 2603,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2598,
                              "end": 2602,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2598,
                                "end": 2602,
                                "decorators": [],
                                "name": "Base",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 2592,
                          "end": 2597,
                          "decorators": [],
                          "name": "Array",
                          "optional": false
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2582,
                        "end": 2583,
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
          {
            "type": "TSPropertySignature",
            "start": 2686,
            "end": 2745,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2686,
              "end": 2689,
              "decorators": [],
              "name": "a13",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2689,
              "end": 2744,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2691,
                "end": 2744,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2718,
                    "end": 2732,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2719,
                      "end": 2732,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2721,
                        "end": 2732,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2726,
                          "end": 2732,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2727,
                              "end": 2731,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2727,
                                "end": 2731,
                                "decorators": [],
                                "name": "Base",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 2721,
                          "end": 2726,
                          "decorators": [],
                          "name": "Array",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2734,
                    "end": 2738,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2735,
                      "end": 2738,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2737,
                        "end": 2738,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2737,
                          "end": 2738,
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
                  "start": 2740,
                  "end": 2744,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2743,
                    "end": 2744,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2743,
                      "end": 2744,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2691,
                  "end": 2717,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2692,
                      "end": 2716,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2702,
                        "end": 2716,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2707,
                          "end": 2716,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2708,
                              "end": 2715,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2708,
                                "end": 2715,
                                "decorators": [],
                                "name": "Derived",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 2702,
                          "end": 2707,
                          "decorators": [],
                          "name": "Array",
                          "optional": false
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2692,
                        "end": 2693,
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
          {
            "type": "TSPropertySignature",
            "start": 2843,
            "end": 2879,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2843,
              "end": 2846,
              "decorators": [],
              "name": "a14",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2846,
              "end": 2878,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2848,
                "end": 2878,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2855,
                    "end": 2872,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2856,
                      "end": 2872,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2858,
                        "end": 2872,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2860,
                            "end": 2865,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2860,
                              "end": 2861,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2861,
                              "end": 2864,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2863,
                                "end": 2864,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2863,
                                  "end": 2864,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 2866,
                            "end": 2870,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2866,
                              "end": 2867,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2867,
                              "end": 2870,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2869,
                                "end": 2870,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2869,
                                  "end": 2870,
                                  "decorators": [],
                                  "name": "U",
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
                  "start": 2874,
                  "end": 2878,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2877,
                    "end": 2878,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2877,
                      "end": 2878,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2848,
                  "end": 2854,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2849,
                      "end": 2850,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2849,
                        "end": 2850,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 2852,
                      "end": 2853,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2852,
                        "end": 2853,
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
          {
            "type": "TSPropertySignature",
            "start": 2890,
            "end": 2912,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2890,
              "end": 2893,
              "decorators": [],
              "name": "a15",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2893,
              "end": 2911,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2895,
                "end": 2911,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2899,
                    "end": 2903,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2900,
                      "end": 2903,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2902,
                        "end": 2903,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2902,
                          "end": 2903,
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
                  "start": 2905,
                  "end": 2911,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 2908,
                    "end": 2911,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 2908,
                      "end": 2909,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2908,
                        "end": 2909,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2895,
                  "end": 2898,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2896,
                      "end": 2897,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2896,
                        "end": 2897,
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
          {
            "type": "TSPropertySignature",
            "start": 2923,
            "end": 2963,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2923,
              "end": 2926,
              "decorators": [],
              "name": "a16",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2926,
              "end": 2962,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2928,
                "end": 2962,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2945,
                    "end": 2949,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2946,
                      "end": 2949,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2948,
                        "end": 2949,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2948,
                          "end": 2949,
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
                  "start": 2951,
                  "end": 2962,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 2954,
                    "end": 2962,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 2954,
                      "end": 2960
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2928,
                  "end": 2944,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2929,
                      "end": 2943,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2939,
                        "end": 2943,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2939,
                          "end": 2943,
                          "decorators": [],
                          "name": "Base",
                          "optional": false
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2929,
                        "end": 2930,
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
          {
            "type": "TSPropertySignature",
            "start": 2974,
            "end": 3006,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2974,
              "end": 2977,
              "decorators": [],
              "name": "a17",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2977,
              "end": 3005,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2979,
                "end": 3005,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2983,
                    "end": 2997,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2984,
                      "end": 2997,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2986,
                        "end": 2997,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2987,
                            "end": 2991,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2988,
                              "end": 2991,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2990,
                                "end": 2991,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2990,
                                  "end": 2991,
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
                          "start": 2993,
                          "end": 2997,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2996,
                            "end": 2997,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2996,
                              "end": 2997,
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
                  "start": 2999,
                  "end": 3005,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3002,
                    "end": 3005,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 3002,
                      "end": 3003,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3002,
                        "end": 3003,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2979,
                  "end": 2982,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2980,
                      "end": 2981,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2980,
                        "end": 2981,
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
          {
            "type": "TSPropertySignature",
            "start": 3017,
            "end": 3049,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3017,
              "end": 3020,
              "decorators": [],
              "name": "a18",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3020,
              "end": 3048,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3022,
                "end": 3048,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3026,
                    "end": 3040,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3027,
                      "end": 3040,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 3029,
                        "end": 3040,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3030,
                            "end": 3034,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3031,
                              "end": 3034,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3033,
                                "end": 3034,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3033,
                                  "end": 3034,
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
                          "start": 3036,
                          "end": 3040,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3039,
                            "end": 3040,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3039,
                              "end": 3040,
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
                  "start": 3042,
                  "end": 3048,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3045,
                    "end": 3048,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 3045,
                      "end": 3046,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3045,
                        "end": 3046,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3022,
                  "end": 3025,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3023,
                      "end": 3024,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 3023,
                        "end": 3024,
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
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1600,
          "end": 1601,
          "expression": {
            "type": "Identifier",
            "start": 1600,
            "end": 1601,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1590,
        "end": 1591,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
