twoGenericInterfacesWithDifferentConstraints.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 836,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 41,
      "body": {
        "type": "TSInterfaceBody",
        "start": 28,
        "end": 41,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 34,
            "end": 39,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 38,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 37,
                "end": 38,
                "typeName": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 27,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 26,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 22,
              "end": 26,
              "typeName": {
                "type": "Identifier",
                "start": 22,
                "end": 26,
                "decorators": [],
                "name": "Date",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
      "type": "TSInterfaceDeclaration",
      "start": 43,
      "end": 95,
      "body": {
        "type": "TSInterfaceBody",
        "start": 73,
        "end": 95,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 88,
            "end": 93,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 92,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 91,
                "end": 92,
                "typeName": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 54,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 54,
        "end": 72,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 55,
            "end": 71,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 65,
              "end": 71,
              "typeName": {
                "type": "Identifier",
                "start": 65,
                "end": 71,
                "decorators": [],
                "name": "Number",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
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
      "type": "TSModuleDeclaration",
      "start": 97,
      "end": 232,
      "body": {
        "type": "TSModuleBlock",
        "start": 106,
        "end": 232,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 112,
            "end": 164,
            "body": {
              "type": "TSInterfaceBody",
              "start": 143,
              "end": 164,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 153,
                  "end": 158,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 154,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 154,
                    "end": 157,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 156,
                      "end": 157,
                      "typeName": {
                        "type": "Identifier",
                        "start": 156,
                        "end": 157,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 123,
              "end": 142,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 124,
                  "end": 141,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 134,
                    "end": 141,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 135,
                      "end": 141,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 136,
                          "end": 140,
                          "typeName": {
                            "type": "Identifier",
                            "start": 136,
                            "end": 140,
                            "decorators": [],
                            "name": "Date",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 135,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 125,
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
            "type": "TSInterfaceDeclaration",
            "start": 170,
            "end": 230,
            "body": {
              "type": "TSInterfaceBody",
              "start": 200,
              "end": 230,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 219,
                  "end": 224,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 220,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 220,
                    "end": 223,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 222,
                      "end": 223,
                      "typeName": {
                        "type": "Identifier",
                        "start": 222,
                        "end": 223,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 181,
              "end": 199,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 182,
                  "end": 198,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 192,
                    "end": 198,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 193,
                      "end": 198,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 194,
                          "end": 197
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 192,
                      "end": 193,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 183,
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
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 105,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 234,
      "end": 301,
      "body": {
        "type": "TSModuleBlock",
        "start": 244,
        "end": 301,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 250,
            "end": 299,
            "body": {
              "type": "TSInterfaceBody",
              "start": 278,
              "end": 299,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 288,
                  "end": 293,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 289,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 289,
                    "end": 292,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 291,
                      "end": 292,
                      "typeName": {
                        "type": "Identifier",
                        "start": 291,
                        "end": 292,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
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
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 261,
              "end": 277,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 262,
                  "end": 276,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 272,
                    "end": 276,
                    "typeName": {
                      "type": "Identifier",
                      "start": 272,
                      "end": 276,
                      "decorators": [],
                      "name": "Date",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 262,
                    "end": 263,
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
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 243,
        "decorators": [],
        "name": "M2",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 303,
      "end": 423,
      "body": {
        "type": "TSModuleBlock",
        "start": 313,
        "end": 423,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 319,
            "end": 421,
            "body": {
              "type": "TSInterfaceBody",
              "start": 349,
              "end": 421,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 410,
                  "end": 415,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 411,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 411,
                    "end": 414,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 413,
                      "end": 414,
                      "typeName": {
                        "type": "Identifier",
                        "start": 413,
                        "end": 414,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 329,
              "end": 330,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 330,
              "end": 348,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 331,
                  "end": 347,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 341,
                    "end": 347,
                    "typeName": {
                      "type": "Identifier",
                      "start": 341,
                      "end": 347,
                      "decorators": [],
                      "name": "Number",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 331,
                    "end": 332,
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
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 310,
        "end": 312,
        "decorators": [],
        "name": "M2",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 425,
      "end": 499,
      "body": {
        "type": "TSModuleBlock",
        "start": 435,
        "end": 499,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 441,
            "end": 497,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 448,
              "end": 497,
              "body": {
                "type": "TSInterfaceBody",
                "start": 476,
                "end": 497,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 486,
                    "end": 491,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 486,
                      "end": 487,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 487,
                      "end": 490,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 489,
                        "end": 490,
                        "typeName": {
                          "type": "Identifier",
                          "start": 489,
                          "end": 490,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 458,
                "end": 459,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 459,
                "end": 475,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 460,
                    "end": 474,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 470,
                      "end": 474,
                      "typeName": {
                        "type": "Identifier",
                        "start": 470,
                        "end": 474,
                        "decorators": [],
                        "name": "Date",
                        "optional": false
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 460,
                      "end": 461,
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
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 432,
        "end": 434,
        "decorators": [],
        "name": "M3",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 501,
      "end": 586,
      "body": {
        "type": "TSModuleBlock",
        "start": 511,
        "end": 586,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 517,
            "end": 584,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 524,
              "end": 584,
              "body": {
                "type": "TSInterfaceBody",
                "start": 554,
                "end": 584,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 573,
                    "end": 578,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 573,
                      "end": 574,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 574,
                      "end": 577,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 576,
                        "end": 577,
                        "typeName": {
                          "type": "Identifier",
                          "start": 576,
                          "end": 577,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 534,
                "end": 535,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 535,
                "end": 553,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 536,
                    "end": 552,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 546,
                      "end": 552,
                      "typeName": {
                        "type": "Identifier",
                        "start": 546,
                        "end": 552,
                        "decorators": [],
                        "name": "Number",
                        "optional": false
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 536,
                      "end": 537,
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
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 508,
        "end": 510,
        "decorators": [],
        "name": "M3",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 588,
      "end": 655,
      "body": {
        "type": "TSInterfaceBody",
        "start": 618,
        "end": 655,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 622,
            "end": 627,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 622,
              "end": 623,
              "decorators": [],
              "name": "u",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 623,
              "end": 626,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 625,
                "end": 626,
                "typeName": {
                  "type": "Identifier",
                  "start": 625,
                  "end": 626,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 630,
            "end": 647,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 630,
              "end": 631,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 631,
              "end": 646,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 633,
                "end": 646,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 643,
                  "end": 646,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 644,
                      "end": 645,
                      "typeName": {
                        "type": "Identifier",
                        "start": 644,
                        "end": 645,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 633,
                  "end": 643,
                  "decorators": [],
                  "name": "Constraint",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 598,
        "end": 599,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 599,
        "end": 617,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 600,
            "end": 616,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 610,
              "end": 616
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 600,
              "end": 601,
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
      "type": "TSInterfaceDeclaration",
      "start": 657,
      "end": 715,
      "body": {
        "type": "TSInterfaceBody",
        "start": 672,
        "end": 715,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 682,
            "end": 687,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 682,
              "end": 683,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 683,
              "end": 686,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 685,
                "end": 686,
                "typeName": {
                  "type": "Identifier",
                  "start": 685,
                  "end": 686,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 690,
            "end": 707,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 690,
              "end": 691,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 691,
              "end": 706,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 693,
                "end": 706,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 703,
                  "end": 706,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 704,
                      "end": 705,
                      "typeName": {
                        "type": "Identifier",
                        "start": 704,
                        "end": 705,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 693,
                  "end": 703,
                  "decorators": [],
                  "name": "Constraint",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 667,
        "end": 668,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 668,
        "end": 671,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 669,
            "end": 670,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 669,
              "end": 670,
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
      "type": "TSInterfaceDeclaration",
      "start": 717,
      "end": 743,
      "body": {
        "type": "TSInterfaceBody",
        "start": 732,
        "end": 743,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 736,
            "end": 741,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 736,
              "end": 737,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 737,
              "end": 740,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 739,
                "end": 740,
                "typeName": {
                  "type": "Identifier",
                  "start": 739,
                  "end": 740,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 727,
        "end": 728,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 728,
        "end": 731,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 729,
            "end": 730,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 729,
              "end": 730,
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
      "type": "TSInterfaceDeclaration",
      "start": 745,
      "end": 792,
      "body": {
        "type": "TSInterfaceBody",
        "start": 775,
        "end": 792,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 785,
            "end": 790,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 785,
              "end": 786,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 786,
              "end": 789,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 788,
                "end": 789,
                "typeName": {
                  "type": "Identifier",
                  "start": 788,
                  "end": 789,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 755,
        "end": 756,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 756,
        "end": 774,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 757,
            "end": 773,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 767,
              "end": 773
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 757,
              "end": 758,
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
      "type": "TSInterfaceDeclaration",
      "start": 794,
      "end": 835,
      "body": {
        "type": "TSInterfaceBody",
        "start": 833,
        "end": 835,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 804,
        "end": 814,
        "decorators": [],
        "name": "Constraint",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 814,
        "end": 832,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 815,
            "end": 831,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 825,
              "end": 831
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 815,
              "end": 816,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
