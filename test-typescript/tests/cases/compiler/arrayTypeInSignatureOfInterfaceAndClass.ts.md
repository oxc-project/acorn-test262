arrayTypeInSignatureOfInterfaceAndClass.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 869,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 190,
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 190,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 27,
            "end": 188,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 44,
              "end": 188,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 54,
                  "end": 182,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 58,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 58,
                    "end": 182,
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 62,
                        "end": 96,
                        "decorators": [],
                        "name": "success",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 70,
                          "end": 96,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 72,
                            "end": 96,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 73,
                                "end": 81,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 78,
                                  "end": 81,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 80,
                                    "end": 81,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 80,
                                      "end": 81,
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
                              "start": 83,
                              "end": 96,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 86,
                                "end": 96,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 93,
                                  "end": 96,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 94,
                                      "end": 95,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 94,
                                        "end": 95,
                                        "decorators": [],
                                        "name": "U",
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 86,
                                  "end": 93,
                                  "decorators": [],
                                  "name": "Promise",
                                  "optional": false
                                }
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 98,
                        "end": 132,
                        "decorators": [],
                        "name": "error",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 104,
                          "end": 132,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 106,
                            "end": 132,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 107,
                                "end": 117,
                                "decorators": [],
                                "name": "error",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 112,
                                  "end": 117,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 114,
                                    "end": 117
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 119,
                              "end": 132,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 122,
                                "end": 132,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 129,
                                  "end": 132,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 130,
                                      "end": 131,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 130,
                                        "end": 131,
                                        "decorators": [],
                                        "name": "U",
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 122,
                                  "end": 129,
                                  "decorators": [],
                                  "name": "Promise",
                                  "optional": false
                                }
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 134,
                        "end": 168,
                        "decorators": [],
                        "name": "progress",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 143,
                          "end": 168,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 145,
                            "end": 168,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 146,
                                "end": 159,
                                "decorators": [],
                                "name": "progress",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 154,
                                  "end": 159,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 156,
                                    "end": 159
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 161,
                              "end": 168,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 164,
                                "end": 168
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 169,
                      "end": 181,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 171,
                        "end": 181,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 178,
                          "end": 181,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 179,
                              "end": 180,
                              "typeName": {
                                "type": "Identifier",
                                "start": 179,
                                "end": 180,
                                "decorators": [],
                                "name": "U",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 178,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 58,
                      "end": 61,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 59,
                          "end": 60,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 59,
                            "end": 60,
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
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 40,
              "decorators": [],
              "name": "Promise",
              "optional": false
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 40,
              "end": 43,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 41,
                  "end": 42,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 42,
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
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 20,
        "decorators": [],
        "name": "WinJS",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 191,
      "end": 869,
      "body": {
        "type": "TSModuleBlock",
        "start": 211,
        "end": 869,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 217,
            "end": 460,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 224,
              "end": 460,
              "body": {
                "type": "TSInterfaceBody",
                "start": 247,
                "end": 460,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 257,
                    "end": 275,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 257,
                      "end": 266,
                      "decorators": [],
                      "name": "itemIndex",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 266,
                      "end": 274,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 268,
                        "end": 274
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 284,
                    "end": 293,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 284,
                      "end": 287,
                      "decorators": [],
                      "name": "key",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 287,
                      "end": 292,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 289,
                        "end": 292
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 302,
                    "end": 310,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 302,
                      "end": 306,
                      "decorators": [],
                      "name": "data",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 306,
                      "end": 309,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 308,
                        "end": 309,
                        "typeName": {
                          "type": "Identifier",
                          "start": 308,
                          "end": 309,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 319,
                    "end": 330,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 319,
                      "end": 324,
                      "decorators": [],
                      "name": "group",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 324,
                      "end": 329,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 326,
                        "end": 329
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 339,
                    "end": 357,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 339,
                      "end": 347,
                      "decorators": [],
                      "name": "isHeader",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 347,
                      "end": 356,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 349,
                        "end": 356
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 366,
                    "end": 382,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 366,
                      "end": 372,
                      "decorators": [],
                      "name": "cached",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 372,
                      "end": 381,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 374,
                        "end": 381
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 391,
                    "end": 416,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 391,
                      "end": 406,
                      "decorators": [],
                      "name": "isNonSourceData",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 406,
                      "end": 415,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 408,
                        "end": 415
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 425,
                    "end": 454,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 425,
                      "end": 444,
                      "decorators": [],
                      "name": "preventAugmentation",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 444,
                      "end": 453,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 446,
                        "end": 453
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 234,
                "end": 243,
                "decorators": [],
                "name": "IListItem",
                "optional": false
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 243,
                "end": 246,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 244,
                    "end": 245,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 244,
                      "end": 245,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 465,
            "end": 649,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 472,
              "end": 649,
              "body": {
                "type": "TSInterfaceBody",
                "start": 498,
                "end": 649,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 564,
                    "end": 643,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 564,
                      "end": 577,
                      "decorators": [],
                      "name": "removeIndices",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 578,
                        "end": 595,
                        "decorators": [],
                        "name": "indices",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 585,
                          "end": 595,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 587,
                            "end": 595,
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 587,
                              "end": 593
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 597,
                        "end": 610,
                        "decorators": [],
                        "name": "options",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 605,
                          "end": 610,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 607,
                            "end": 610
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 611,
                      "end": 642,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 613,
                        "end": 642,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 626,
                          "end": 642,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 627,
                              "end": 641,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 627,
                                "end": 639,
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
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 627,
                                  "end": 636,
                                  "decorators": [],
                                  "name": "IListItem",
                                  "optional": false
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 613,
                          "end": 626,
                          "left": {
                            "type": "Identifier",
                            "start": 613,
                            "end": 618,
                            "decorators": [],
                            "name": "WinJS",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 619,
                            "end": 626,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false
                          }
                        }
                      }
                    },
                    "static": false
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 482,
                "end": 494,
                "decorators": [],
                "name": "IVirtualList",
                "optional": false
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 494,
                "end": 497,
                "params": [
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
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 654,
            "end": 867,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 661,
              "end": 867,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 709,
                "end": 867,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 775,
                    "end": 861,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 782,
                      "end": 795,
                      "decorators": [],
                      "name": "removeIndices",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 795,
                      "end": 861,
                      "async": false,
                      "body": null,
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 796,
                          "end": 813,
                          "decorators": [],
                          "name": "indices",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 803,
                            "end": 813,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 805,
                              "end": 813,
                              "elementType": {
                                "type": "TSNumberKeyword",
                                "start": 805,
                                "end": 811
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 815,
                          "end": 828,
                          "decorators": [],
                          "name": "options",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 823,
                            "end": 828,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 825,
                              "end": 828
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 829,
                        "end": 860,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 831,
                          "end": 860,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 844,
                            "end": 860,
                            "params": [
                              {
                                "type": "TSArrayType",
                                "start": 845,
                                "end": 859,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 845,
                                  "end": 857,
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 854,
                                    "end": 857,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 855,
                                        "end": 856,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 855,
                                          "end": 856,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false
                                        }
                                      }
                                    ]
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 845,
                                    "end": 854,
                                    "decorators": [],
                                    "name": "IListItem",
                                    "optional": false
                                  }
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 831,
                            "end": 844,
                            "left": {
                              "type": "Identifier",
                              "start": 831,
                              "end": 836,
                              "decorators": [],
                              "name": "WinJS",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 837,
                              "end": 844,
                              "decorators": [],
                              "name": "Promise",
                              "optional": false
                            }
                          }
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 667,
                "end": 678,
                "decorators": [],
                "name": "VirtualList",
                "optional": false
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 693,
                  "end": 708,
                  "expression": {
                    "type": "Identifier",
                    "start": 693,
                    "end": 705,
                    "decorators": [],
                    "name": "IVirtualList",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 705,
                    "end": 708,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 706,
                        "end": 707,
                        "typeName": {
                          "type": "Identifier",
                          "start": 706,
                          "end": 707,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    ]
                  }
                }
              ],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 678,
                "end": 681,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 679,
                    "end": 680,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 679,
                      "end": 680,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 210,
        "decorators": [],
        "name": "Data",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
