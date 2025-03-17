__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 20,
        "name": "WinJS",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 190,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 27,
            "end": 188,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 40,
              "name": "Promise",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 44,
              "end": 188,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 54,
                  "end": 182,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 58,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 58,
                    "end": 182,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 62,
                        "end": 96,
                        "name": "success",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 70,
                          "end": 96,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 72,
                            "end": 96,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 73,
                                "end": 81,
                                "name": "value",
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
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 86,
                                  "end": 93,
                                  "name": "Promise",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
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
                                        "name": "U",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": true
                      },
                      {
                        "type": "Identifier",
                        "start": 98,
                        "end": 132,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 104,
                          "end": 132,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 106,
                            "end": 132,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 107,
                                "end": 117,
                                "name": "error",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 112,
                                  "end": 117,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 114,
                                    "end": 117
                                  }
                                },
                                "decorators": [],
                                "optional": false
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 122,
                                  "end": 129,
                                  "name": "Promise",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
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
                                        "name": "U",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": true
                      },
                      {
                        "type": "Identifier",
                        "start": 134,
                        "end": 168,
                        "name": "progress",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 143,
                          "end": 168,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 145,
                            "end": 168,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 146,
                                "end": 159,
                                "name": "progress",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 154,
                                  "end": 159,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 156,
                                    "end": 159
                                  }
                                },
                                "decorators": [],
                                "optional": false
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
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 58,
                      "end": 61,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 59,
                          "end": 60,
                          "name": {
                            "type": "Identifier",
                            "start": 59,
                            "end": 60,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 169,
                      "end": 181,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 171,
                        "end": 181,
                        "typeName": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 178,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                                "name": "U",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 40,
              "end": 43,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 41,
                  "end": 42,
                  "name": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 42,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 191,
      "end": 869,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 210,
        "name": "Data",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 211,
        "end": 869,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 217,
            "end": 460,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 224,
              "end": 460,
              "id": {
                "type": "Identifier",
                "start": 234,
                "end": 243,
                "name": "IListItem",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 243,
                "end": 246,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 244,
                    "end": 245,
                    "name": {
                      "type": "Identifier",
                      "start": 244,
                      "end": 245,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 257,
                      "end": 266,
                      "name": "itemIndex",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 266,
                      "end": 274,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 268,
                        "end": 274
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 284,
                    "end": 293,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 284,
                      "end": 287,
                      "name": "key",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 287,
                      "end": 292,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 289,
                        "end": 292
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 302,
                    "end": 310,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 302,
                      "end": 306,
                      "name": "data",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 319,
                    "end": 330,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 319,
                      "end": 324,
                      "name": "group",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 324,
                      "end": 329,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 326,
                        "end": 329
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 339,
                    "end": 357,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 339,
                      "end": 347,
                      "name": "isHeader",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 347,
                      "end": 356,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 349,
                        "end": 356
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 366,
                    "end": 382,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 366,
                      "end": 372,
                      "name": "cached",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 372,
                      "end": 381,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 374,
                        "end": 381
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 391,
                    "end": 416,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 391,
                      "end": 406,
                      "name": "isNonSourceData",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 406,
                      "end": 415,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 408,
                        "end": 415
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 425,
                    "end": 454,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 425,
                      "end": 444,
                      "name": "preventAugmentation",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 444,
                      "end": 453,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 446,
                        "end": 453
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 465,
            "end": 649,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 472,
              "end": 649,
              "id": {
                "type": "Identifier",
                "start": 482,
                "end": 494,
                "name": "IVirtualList",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 494,
                "end": 497,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 495,
                    "end": 496,
                    "name": {
                      "type": "Identifier",
                      "start": 495,
                      "end": 496,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "body": {
                "type": "TSInterfaceBody",
                "start": 498,
                "end": 649,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 564,
                    "end": 643,
                    "key": {
                      "type": "Identifier",
                      "start": 564,
                      "end": 577,
                      "name": "removeIndices",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 578,
                        "end": 595,
                        "name": "indices",
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
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 597,
                        "end": 610,
                        "name": "options",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 605,
                          "end": 610,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 607,
                            "end": 610
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 611,
                      "end": 642,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 613,
                        "end": 642,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 613,
                          "end": 626,
                          "left": {
                            "type": "Identifier",
                            "start": 613,
                            "end": 618,
                            "name": "WinJS",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 619,
                            "end": 626,
                            "name": "Promise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 627,
                                  "end": 636,
                                  "name": "IListItem",
                                  "typeAnnotation": null,
                                  "decorators": [],
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
                                        "name": "T",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 654,
            "end": 867,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 661,
              "end": 867,
              "id": {
                "type": "Identifier",
                "start": 667,
                "end": 678,
                "name": "VirtualList",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 709,
                "end": 867,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 775,
                    "end": 861,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 782,
                      "end": 795,
                      "name": "removeIndices",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 795,
                      "end": 861,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 796,
                          "end": 813,
                          "name": "indices",
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
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 815,
                          "end": 828,
                          "name": "options",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 823,
                            "end": 828,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 825,
                              "end": 828
                            }
                          },
                          "decorators": [],
                          "optional": true
                        }
                      ],
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 829,
                        "end": 860,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 831,
                          "end": 860,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 831,
                            "end": 844,
                            "left": {
                              "type": "Identifier",
                              "start": 831,
                              "end": 836,
                              "name": "WinJS",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 837,
                              "end": 844,
                              "name": "Promise",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
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
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 845,
                                    "end": 854,
                                    "name": "IListItem",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
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
                                          "name": "T",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  }
                                }
                              }
                            ]
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 678,
                "end": 681,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 679,
                    "end": 680,
                    "name": {
                      "type": "Identifier",
                      "start": 679,
                      "end": 680,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
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
                    "name": "IVirtualList",
                    "typeAnnotation": null,
                    "decorators": [],
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
