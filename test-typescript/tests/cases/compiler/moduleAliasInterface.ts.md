__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 963,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 78,
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 78,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 47,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 24,
              "end": 47,
              "body": {
                "type": "TSInterfaceBody",
                "start": 40,
                "end": 47,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 39,
                "decorators": [],
                "name": "IMode",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 51,
            "end": 76,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 58,
              "end": 76,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 69,
                "end": 76,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 64,
                "end": 68,
                "decorators": [],
                "name": "Mode",
                "optional": false
              },
              "implements": [],
              "superClass": null
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
        "start": 7,
        "end": 13,
        "decorators": [],
        "name": "_modes",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 158,
      "end": 456,
      "body": {
        "type": "TSModuleBlock",
        "start": 172,
        "end": 456,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 175,
            "end": 197,
            "id": {
              "type": "Identifier",
              "start": 182,
              "end": 187,
              "decorators": [],
              "name": "modes",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 190,
              "end": 196,
              "decorators": [],
              "name": "_modes",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 201,
            "end": 221,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 205,
                "end": 220,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 220,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 207,
                    "end": 220,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 209,
                      "end": 220,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 209,
                        "end": 220,
                        "left": {
                          "type": "Identifier",
                          "start": 209,
                          "end": 214,
                          "decorators": [],
                          "name": "modes",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 215,
                          "end": 220,
                          "decorators": [],
                          "name": "IMode",
                          "optional": false
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
            "type": "ClassDeclaration",
            "start": 301,
            "end": 454,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 311,
              "end": 454,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 316,
                  "end": 364,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 316,
                    "end": 327,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 327,
                    "end": 364,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 361,
                      "end": 364,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 328,
                        "end": 343,
                        "decorators": [],
                        "name": "p1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 330,
                          "end": 343,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 332,
                            "end": 343,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 332,
                              "end": 343,
                              "left": {
                                "type": "Identifier",
                                "start": 332,
                                "end": 337,
                                "decorators": [],
                                "name": "modes",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 338,
                                "end": 343,
                                "decorators": [],
                                "name": "IMode",
                                "optional": false
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 345,
                        "end": 359,
                        "decorators": [],
                        "name": "p2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 347,
                          "end": 359,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 349,
                            "end": 359,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 349,
                              "end": 359,
                              "left": {
                                "type": "Identifier",
                                "start": 349,
                                "end": 354,
                                "decorators": [],
                                "name": "modes",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 355,
                                "end": 359,
                                "decorators": [],
                                "name": "Mode",
                                "optional": false
                              }
                            }
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 414,
                  "end": 450,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 421,
                    "end": 424,
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
                    "start": 424,
                    "end": 450,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 441,
                      "end": 450,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 425,
                        "end": 439,
                        "decorators": [],
                        "name": "p1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 427,
                          "end": 439,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 428,
                            "end": 439,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 428,
                              "end": 439,
                              "left": {
                                "type": "Identifier",
                                "start": 428,
                                "end": 433,
                                "decorators": [],
                                "name": "modes",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 434,
                                "end": 439,
                                "decorators": [],
                                "name": "IMode",
                                "optional": false
                              }
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
              "start": 307,
              "end": 310,
              "decorators": [],
              "name": "Bug",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 171,
        "decorators": [],
        "name": "editor",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 458,
      "end": 485,
      "id": {
        "type": "Identifier",
        "start": 465,
        "end": 475,
        "decorators": [],
        "name": "modesOuter",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "Identifier",
        "start": 478,
        "end": 484,
        "decorators": [],
        "name": "_modes",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 486,
      "end": 790,
      "body": {
        "type": "TSModuleBlock",
        "start": 501,
        "end": 790,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 506,
            "end": 531,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 510,
                "end": 530,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 510,
                  "end": 530,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 512,
                    "end": 530,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 514,
                      "end": 530,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 514,
                        "end": 530,
                        "left": {
                          "type": "Identifier",
                          "start": 514,
                          "end": 524,
                          "decorators": [],
                          "name": "modesOuter",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 525,
                          "end": 530,
                          "decorators": [],
                          "name": "IMode",
                          "optional": false
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
            "type": "ClassDeclaration",
            "start": 535,
            "end": 673,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 545,
              "end": 673,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 552,
                  "end": 610,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 563,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 563,
                    "end": 610,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 607,
                      "end": 610,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 564,
                        "end": 584,
                        "decorators": [],
                        "name": "p1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 566,
                          "end": 584,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 568,
                            "end": 584,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 568,
                              "end": 584,
                              "left": {
                                "type": "Identifier",
                                "start": 568,
                                "end": 578,
                                "decorators": [],
                                "name": "modesOuter",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 579,
                                "end": 584,
                                "decorators": [],
                                "name": "IMode",
                                "optional": false
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 586,
                        "end": 605,
                        "decorators": [],
                        "name": "p2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 588,
                          "end": 605,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 590,
                            "end": 605,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 590,
                              "end": 605,
                              "left": {
                                "type": "Identifier",
                                "start": 590,
                                "end": 600,
                                "decorators": [],
                                "name": "modesOuter",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 601,
                                "end": 605,
                                "decorators": [],
                                "name": "Mode",
                                "optional": false
                              }
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
              "start": 541,
              "end": 544,
              "decorators": [],
              "name": "Bug",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "TSModuleDeclaration",
            "start": 678,
            "end": 711,
            "body": {
              "type": "TSModuleBlock",
              "start": 689,
              "end": 711,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 691,
                  "end": 709,
                  "attributes": [],
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 698,
                    "end": 709,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 707,
                      "end": 709,
                      "body": []
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 704,
                      "end": 707,
                      "decorators": [],
                      "name": "Bar",
                      "optional": false
                    },
                    "implements": [],
                    "superClass": null
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
              "start": 685,
              "end": 688,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "kind": "module"
          },
          {
            "type": "ClassDeclaration",
            "start": 716,
            "end": 788,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 727,
              "end": 788,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 735,
                  "end": 784,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 735,
                    "end": 746,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 746,
                    "end": 784,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 781,
                      "end": 784,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 747,
                        "end": 758,
                        "decorators": [],
                        "name": "p1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 749,
                          "end": 758,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 751,
                            "end": 758,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 751,
                              "end": 758,
                              "left": {
                                "type": "Identifier",
                                "start": 751,
                                "end": 754,
                                "decorators": [],
                                "name": "Foo",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 755,
                                "end": 758,
                                "decorators": [],
                                "name": "Bar",
                                "optional": false
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 760,
                        "end": 779,
                        "decorators": [],
                        "name": "p2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 762,
                          "end": 779,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 764,
                            "end": 779,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 764,
                              "end": 779,
                              "left": {
                                "type": "Identifier",
                                "start": 764,
                                "end": 774,
                                "decorators": [],
                                "name": "modesOuter",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 775,
                                "end": 779,
                                "decorators": [],
                                "name": "Mode",
                                "optional": false
                              }
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
              "start": 722,
              "end": 726,
              "decorators": [],
              "name": "Bug2",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 493,
        "end": 500,
        "decorators": [],
        "name": "editor2",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 792,
      "end": 859,
      "body": {
        "type": "TSModuleBlock",
        "start": 802,
        "end": 859,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 808,
            "end": 832,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 815,
              "end": 832,
              "body": {
                "type": "TSInterfaceBody",
                "start": 830,
                "end": 832,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 825,
                "end": 829,
                "decorators": [],
                "name": "A1I1",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 837,
            "end": 857,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 844,
              "end": 857,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 855,
                "end": 857,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 850,
                "end": 854,
                "decorators": [],
                "name": "A1C1",
                "optional": false
              },
              "implements": [],
              "superClass": null
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
        "start": 799,
        "end": 801,
        "decorators": [],
        "name": "A1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 861,
      "end": 962,
      "body": {
        "type": "TSModuleBlock",
        "start": 871,
        "end": 962,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 877,
            "end": 898,
            "id": {
              "type": "Identifier",
              "start": 884,
              "end": 892,
              "decorators": [],
              "name": "A1Alias1",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 895,
              "end": 897,
              "decorators": [],
              "name": "A1",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 908,
            "end": 930,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 912,
                "end": 929,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 912,
                  "end": 929,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 914,
                    "end": 929,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 916,
                      "end": 929,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 916,
                        "end": 929,
                        "left": {
                          "type": "Identifier",
                          "start": 916,
                          "end": 924,
                          "decorators": [],
                          "name": "A1Alias1",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 925,
                          "end": 929,
                          "decorators": [],
                          "name": "A1I1",
                          "optional": false
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
            "start": 938,
            "end": 960,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 942,
                "end": 959,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 942,
                  "end": 959,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 944,
                    "end": 959,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 946,
                      "end": 959,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 946,
                        "end": 959,
                        "left": {
                          "type": "Identifier",
                          "start": 946,
                          "end": 954,
                          "decorators": [],
                          "name": "A1Alias1",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 955,
                          "end": 959,
                          "decorators": [],
                          "name": "A1C1",
                          "optional": false
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
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 868,
        "end": 870,
        "decorators": [],
        "name": "B1",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
