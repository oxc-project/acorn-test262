mergeThreeInterfaces2.ts
```json
{
  "type": "Program",
  "start": 106,
  "end": 1082,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 106,
      "end": 226,
      "body": {
        "type": "TSModuleBlock",
        "start": 116,
        "end": 226,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 122,
            "end": 169,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 129,
              "end": 169,
              "body": {
                "type": "TSInterfaceBody",
                "start": 141,
                "end": 169,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 151,
                    "end": 163,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 154,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 154,
                      "end": 162,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 156,
                        "end": 162
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "VariableDeclaration",
            "start": 175,
            "end": 184,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 179,
                "end": 183,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 183,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 180,
                    "end": 183,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 182,
                      "end": 183,
                      "typeName": {
                        "type": "Identifier",
                        "start": 182,
                        "end": 183,
                        "decorators": [],
                        "name": "A",
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
            "start": 189,
            "end": 204,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 193,
                "end": 203,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 195,
                  "decorators": [],
                  "name": "r1",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 198,
                  "end": 203,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 199,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 203,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 209,
            "end": 224,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 213,
                "end": 223,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 215,
                  "decorators": [],
                  "name": "r2",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 218,
                  "end": 223,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 218,
                    "end": 219,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 223,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
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
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 115,
        "decorators": [],
        "name": "M2",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 228,
      "end": 423,
      "body": {
        "type": "TSModuleBlock",
        "start": 238,
        "end": 423,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 244,
            "end": 291,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 251,
              "end": 291,
              "body": {
                "type": "TSInterfaceBody",
                "start": 263,
                "end": 291,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 273,
                    "end": 285,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 273,
                      "end": 276,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 276,
                      "end": 284,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 278,
                        "end": 284
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 261,
                "end": 262,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 297,
            "end": 345,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 304,
              "end": 345,
              "body": {
                "type": "TSInterfaceBody",
                "start": 316,
                "end": 345,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 326,
                    "end": 339,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 326,
                      "end": 329,
                      "decorators": [],
                      "name": "baz",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 329,
                      "end": 338,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 331,
                        "end": 338
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 314,
                "end": 315,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "VariableDeclaration",
            "start": 351,
            "end": 360,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 355,
                "end": 359,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 359,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 356,
                    "end": 359,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 358,
                      "end": 359,
                      "typeName": {
                        "type": "Identifier",
                        "start": 358,
                        "end": 359,
                        "decorators": [],
                        "name": "A",
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
            "start": 365,
            "end": 380,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 369,
                "end": 379,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 369,
                  "end": 371,
                  "decorators": [],
                  "name": "r1",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 374,
                  "end": 379,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 374,
                    "end": 375,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 376,
                    "end": 379,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 385,
            "end": 400,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 389,
                "end": 399,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 389,
                  "end": 391,
                  "decorators": [],
                  "name": "r2",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 394,
                  "end": 399,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 395,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 396,
                    "end": 399,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 405,
            "end": 420,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 409,
                "end": 419,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 409,
                  "end": 411,
                  "decorators": [],
                  "name": "r3",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 414,
                  "end": 419,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 414,
                    "end": 415,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 419,
                    "decorators": [],
                    "name": "baz",
                    "optional": false
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
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 235,
        "end": 237,
        "decorators": [],
        "name": "M2",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 511,
      "end": 684,
      "body": {
        "type": "TSModuleBlock",
        "start": 521,
        "end": 684,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 527,
            "end": 682,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 534,
              "end": 682,
              "body": {
                "type": "TSModuleBlock",
                "start": 544,
                "end": 682,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 554,
                    "end": 609,
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 561,
                      "end": 609,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 573,
                        "end": 609,
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "start": 587,
                            "end": 599,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 587,
                              "end": 590,
                              "decorators": [],
                              "name": "foo",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 590,
                              "end": 598,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 592,
                                "end": 598
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "start": 571,
                        "end": 572,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": []
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 619,
                    "end": 628,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 623,
                        "end": 627,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 623,
                          "end": 627,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 624,
                            "end": 627,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 626,
                              "end": 627,
                              "typeName": {
                                "type": "Identifier",
                                "start": 626,
                                "end": 627,
                                "decorators": [],
                                "name": "A",
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
                    "start": 637,
                    "end": 652,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 641,
                        "end": 651,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 641,
                          "end": 643,
                          "decorators": [],
                          "name": "r1",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 646,
                          "end": 651,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 646,
                            "end": 647,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 648,
                            "end": 651,
                            "decorators": [],
                            "name": "foo",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 661,
                    "end": 676,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 665,
                        "end": 675,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 665,
                          "end": 667,
                          "decorators": [],
                          "name": "r2",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 670,
                          "end": 675,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 670,
                            "end": 671,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 672,
                            "end": 675,
                            "decorators": [],
                            "name": "bar",
                            "optional": false
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
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 541,
                "end": 543,
                "decorators": [],
                "name": "M3",
                "optional": false
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 518,
        "end": 520,
        "decorators": [],
        "name": "M2",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 686,
      "end": 883,
      "body": {
        "type": "TSModuleBlock",
        "start": 696,
        "end": 883,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 702,
            "end": 881,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 709,
              "end": 881,
              "body": {
                "type": "TSModuleBlock",
                "start": 719,
                "end": 881,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 729,
                    "end": 784,
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 736,
                      "end": 784,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 748,
                        "end": 784,
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "start": 762,
                            "end": 774,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 762,
                              "end": 765,
                              "decorators": [],
                              "name": "bar",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 765,
                              "end": 773,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 767,
                                "end": 773
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "start": 746,
                        "end": 747,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": []
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 794,
                    "end": 803,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 798,
                        "end": 802,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 798,
                          "end": 802,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 799,
                            "end": 802,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 801,
                              "end": 802,
                              "typeName": {
                                "type": "Identifier",
                                "start": 801,
                                "end": 802,
                                "decorators": [],
                                "name": "A",
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
                    "start": 813,
                    "end": 827,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 817,
                        "end": 827,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 817,
                          "end": 819,
                          "decorators": [],
                          "name": "r1",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 822,
                          "end": 827,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 822,
                            "end": 823,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 824,
                            "end": 827,
                            "decorators": [],
                            "name": "foo",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 836,
                    "end": 851,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 840,
                        "end": 850,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 840,
                          "end": 842,
                          "decorators": [],
                          "name": "r2",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 845,
                          "end": 850,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 845,
                            "end": 846,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 847,
                            "end": 850,
                            "decorators": [],
                            "name": "bar",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 860,
                    "end": 875,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 864,
                        "end": 874,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 864,
                          "end": 866,
                          "decorators": [],
                          "name": "r3",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 869,
                          "end": 874,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 869,
                            "end": 870,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 871,
                            "end": 874,
                            "decorators": [],
                            "name": "baz",
                            "optional": false
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
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 716,
                "end": 718,
                "decorators": [],
                "name": "M3",
                "optional": false
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 693,
        "end": 695,
        "decorators": [],
        "name": "M2",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 885,
      "end": 1082,
      "body": {
        "type": "TSModuleBlock",
        "start": 895,
        "end": 1082,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 901,
            "end": 1080,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 908,
              "end": 1080,
              "body": {
                "type": "TSModuleBlock",
                "start": 918,
                "end": 1080,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 928,
                    "end": 984,
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 935,
                      "end": 984,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 947,
                        "end": 984,
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "start": 961,
                            "end": 974,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 961,
                              "end": 964,
                              "decorators": [],
                              "name": "baz",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 964,
                              "end": 973,
                              "typeAnnotation": {
                                "type": "TSBooleanKeyword",
                                "start": 966,
                                "end": 973
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "start": 945,
                        "end": 946,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": []
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 994,
                    "end": 1003,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 998,
                        "end": 1002,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 998,
                          "end": 1002,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 999,
                            "end": 1002,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1001,
                              "end": 1002,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1001,
                                "end": 1002,
                                "decorators": [],
                                "name": "A",
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
                    "start": 1012,
                    "end": 1026,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1016,
                        "end": 1026,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1016,
                          "end": 1018,
                          "decorators": [],
                          "name": "r1",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 1021,
                          "end": 1026,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 1021,
                            "end": 1022,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1023,
                            "end": 1026,
                            "decorators": [],
                            "name": "foo",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1035,
                    "end": 1050,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1039,
                        "end": 1049,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1039,
                          "end": 1041,
                          "decorators": [],
                          "name": "r2",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 1044,
                          "end": 1049,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 1044,
                            "end": 1045,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1046,
                            "end": 1049,
                            "decorators": [],
                            "name": "bar",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1059,
                    "end": 1074,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1063,
                        "end": 1073,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1063,
                          "end": 1065,
                          "decorators": [],
                          "name": "r3",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 1068,
                          "end": 1073,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 1068,
                            "end": 1069,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1070,
                            "end": 1073,
                            "decorators": [],
                            "name": "baz",
                            "optional": false
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
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 915,
                "end": 917,
                "decorators": [],
                "name": "M3",
                "optional": false
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 892,
        "end": 894,
        "decorators": [],
        "name": "M2",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
