__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 106,
  "end": 751,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 106,
      "end": 225,
      "body": {
        "type": "TSModuleBlock",
        "start": 116,
        "end": 225,
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
            "end": 203,
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
            "start": 208,
            "end": 223,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 212,
                "end": 222,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 214,
                  "decorators": [],
                  "name": "r2",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 217,
                  "end": 222,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 218,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 222,
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
      "start": 227,
      "end": 346,
      "body": {
        "type": "TSModuleBlock",
        "start": 237,
        "end": 346,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 243,
            "end": 290,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 250,
              "end": 290,
              "body": {
                "type": "TSInterfaceBody",
                "start": 262,
                "end": 290,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 272,
                    "end": 284,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 272,
                      "end": 275,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 275,
                      "end": 283,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 277,
                        "end": 283
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 260,
                "end": 261,
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
            "start": 296,
            "end": 305,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 300,
                "end": 304,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 304,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 301,
                    "end": 304,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 303,
                      "end": 304,
                      "typeName": {
                        "type": "Identifier",
                        "start": 303,
                        "end": 304,
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
            "start": 310,
            "end": 324,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 314,
                "end": 324,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 314,
                  "end": 316,
                  "decorators": [],
                  "name": "r1",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 319,
                  "end": 324,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 319,
                    "end": 320,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 321,
                    "end": 324,
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
            "start": 329,
            "end": 344,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 333,
                "end": 343,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 333,
                  "end": 335,
                  "decorators": [],
                  "name": "r2",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 338,
                  "end": 343,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 338,
                    "end": 339,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 340,
                    "end": 343,
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
        "start": 234,
        "end": 236,
        "decorators": [],
        "name": "M2",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 405,
      "end": 577,
      "body": {
        "type": "TSModuleBlock",
        "start": 415,
        "end": 577,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 421,
            "end": 575,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 428,
              "end": 575,
              "body": {
                "type": "TSModuleBlock",
                "start": 438,
                "end": 575,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 448,
                    "end": 503,
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 455,
                      "end": 503,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 467,
                        "end": 503,
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "start": 481,
                            "end": 493,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 481,
                              "end": 484,
                              "decorators": [],
                              "name": "foo",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 484,
                              "end": 492,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 486,
                                "end": 492
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "start": 465,
                        "end": 466,
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
                    "start": 513,
                    "end": 522,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 517,
                        "end": 521,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 517,
                          "end": 521,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 518,
                            "end": 521,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 520,
                              "end": 521,
                              "typeName": {
                                "type": "Identifier",
                                "start": 520,
                                "end": 521,
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
                    "start": 531,
                    "end": 545,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 535,
                        "end": 545,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 535,
                          "end": 537,
                          "decorators": [],
                          "name": "r1",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 540,
                          "end": 545,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 540,
                            "end": 541,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 542,
                            "end": 545,
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
                    "start": 554,
                    "end": 569,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 558,
                        "end": 568,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 558,
                          "end": 560,
                          "decorators": [],
                          "name": "r2",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 563,
                          "end": 568,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 563,
                            "end": 564,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 565,
                            "end": 568,
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
                "start": 435,
                "end": 437,
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
        "start": 412,
        "end": 414,
        "decorators": [],
        "name": "M2",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 579,
      "end": 751,
      "body": {
        "type": "TSModuleBlock",
        "start": 589,
        "end": 751,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 595,
            "end": 749,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 602,
              "end": 749,
              "body": {
                "type": "TSModuleBlock",
                "start": 612,
                "end": 749,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 622,
                    "end": 677,
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 629,
                      "end": 677,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 641,
                        "end": 677,
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "start": 655,
                            "end": 667,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 655,
                              "end": 658,
                              "decorators": [],
                              "name": "bar",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 658,
                              "end": 666,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 660,
                                "end": 666
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "start": 639,
                        "end": 640,
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
                    "start": 687,
                    "end": 696,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 691,
                        "end": 695,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 691,
                          "end": 695,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 692,
                            "end": 695,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 694,
                              "end": 695,
                              "typeName": {
                                "type": "Identifier",
                                "start": 694,
                                "end": 695,
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
                    "start": 705,
                    "end": 719,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 709,
                        "end": 719,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 709,
                          "end": 711,
                          "decorators": [],
                          "name": "r1",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 714,
                          "end": 719,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 714,
                            "end": 715,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 716,
                            "end": 719,
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
                    "start": 728,
                    "end": 743,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 732,
                        "end": 742,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 732,
                          "end": 734,
                          "decorators": [],
                          "name": "r2",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 737,
                          "end": 742,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 737,
                            "end": 738,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 739,
                            "end": 742,
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
                "start": 609,
                "end": 611,
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
        "start": 586,
        "end": 588,
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
