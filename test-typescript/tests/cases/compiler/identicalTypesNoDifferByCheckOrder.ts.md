__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1136,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 100,
      "body": {
        "type": "TSInterfaceBody",
        "start": 20,
        "end": 100,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 26,
            "end": 37,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 30,
                "end": 36
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 42,
            "end": 53,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 52,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 46,
                "end": 52
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 58,
            "end": 98,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 66,
              "decorators": [],
              "name": "renderAs",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 98,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 69,
                "end": 98,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 87,
                  "end": 98,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 88,
                      "end": 97,
                      "typeName": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 97,
                        "decorators": [],
                        "name": "SomeProps",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 87,
                  "decorators": [],
                  "name": "FunctionComponent1",
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
        "end": 19,
        "decorators": [],
        "name": "SomeProps",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 102,
      "end": 174,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 117,
        "decorators": [],
        "name": "SomePropsX",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 120,
        "end": 173,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 120,
            "end": 150,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 128,
              "end": 150,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 129,
                  "end": 149,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 133,
                    "end": 149,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 134,
                        "end": 143,
                        "typeName": {
                          "type": "Identifier",
                          "start": 134,
                          "end": 143,
                          "decorators": [],
                          "name": "SomeProps",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 145,
                        "end": 148,
                        "literal": {
                          "type": "Literal",
                          "start": 145,
                          "end": 148,
                          "raw": "\"x\"",
                          "value": "x"
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 133,
                    "decorators": [],
                    "name": "Pick",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 120,
              "end": 128,
              "decorators": [],
              "name": "Required",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 153,
            "end": 173,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 157,
              "end": 173,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 158,
                  "end": 167,
                  "typeName": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 167,
                    "decorators": [],
                    "name": "SomeProps",
                    "optional": false
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 169,
                  "end": 172,
                  "literal": {
                    "type": "Literal",
                    "start": 169,
                    "end": 172,
                    "raw": "\"x\"",
                    "value": "x"
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 153,
              "end": 157,
              "decorators": [],
              "name": "Omit",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 176,
      "end": 281,
      "body": {
        "type": "TSInterfaceBody",
        "start": 201,
        "end": 281,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 207,
            "end": 218,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 209,
              "end": 217,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 211,
                "end": 217
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 223,
            "end": 234,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 225,
              "end": 233,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 227,
                "end": 233
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 239,
            "end": 279,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 239,
              "end": 247,
              "decorators": [],
              "name": "renderAs",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 248,
              "end": 279,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 250,
                "end": 279,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 268,
                  "end": 279,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 269,
                      "end": 278,
                      "typeName": {
                        "type": "Identifier",
                        "start": 269,
                        "end": 278,
                        "decorators": [],
                        "name": "SomeProps",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 268,
                  "decorators": [],
                  "name": "FunctionComponent2",
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
        "start": 186,
        "end": 200,
        "decorators": [],
        "name": "SomePropsClone",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 283,
      "end": 370,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 288,
        "end": 303,
        "decorators": [],
        "name": "SomePropsCloneX",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 306,
        "end": 369,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 306,
            "end": 341,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 314,
              "end": 341,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 315,
                  "end": 340,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 319,
                    "end": 340,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 320,
                        "end": 334,
                        "typeName": {
                          "type": "Identifier",
                          "start": 320,
                          "end": 334,
                          "decorators": [],
                          "name": "SomePropsClone",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 336,
                        "end": 339,
                        "literal": {
                          "type": "Literal",
                          "start": 336,
                          "end": 339,
                          "raw": "\"x\"",
                          "value": "x"
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 315,
                    "end": 319,
                    "decorators": [],
                    "name": "Pick",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 306,
              "end": 314,
              "decorators": [],
              "name": "Required",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 344,
            "end": 369,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 348,
              "end": 369,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 349,
                  "end": 363,
                  "typeName": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 363,
                    "decorators": [],
                    "name": "SomePropsClone",
                    "optional": false
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 365,
                  "end": 368,
                  "literal": {
                    "type": "Literal",
                    "start": 365,
                    "end": 368,
                    "raw": "\"x\"",
                    "value": "x"
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 344,
              "end": 348,
              "decorators": [],
              "name": "Omit",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 372,
      "end": 415,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 377,
        "end": 386,
        "decorators": [],
        "name": "Validator",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 392,
        "end": 414,
        "members": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 393,
            "end": 405,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 395,
              "end": 404,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 397,
                "end": 404
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 406,
            "end": 413,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 406,
              "end": 409,
              "decorators": [],
              "name": "opt",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 410,
              "end": 413,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 412,
                "end": 413,
                "typeName": {
                  "type": "Identifier",
                  "start": 412,
                  "end": 413,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 386,
        "end": 389,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 387,
            "end": 388,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 387,
              "end": 388,
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
      "type": "TSTypeAliasDeclaration",
      "start": 416,
      "end": 536,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 421,
        "end": 438,
        "decorators": [],
        "name": "WeakValidationMap",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 444,
        "end": 535,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 451,
          "end": 458,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 457,
            "end": 458,
            "typeName": {
              "type": "Identifier",
              "start": 457,
              "end": 458,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 446,
          "end": 447,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": null,
        "optional": true,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 462,
          "end": 534,
          "checkType": {
            "type": "TSNullKeyword",
            "start": 462,
            "end": 466
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "start": 475,
            "end": 479,
            "indexType": {
              "type": "TSTypeReference",
              "start": 477,
              "end": 478,
              "typeName": {
                "type": "Identifier",
                "start": 477,
                "end": 478,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 475,
              "end": 476,
              "typeName": {
                "type": "Identifier",
                "start": 475,
                "end": 476,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "falseType": {
            "type": "TSTypeReference",
            "start": 519,
            "end": 534,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 528,
              "end": 534,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 529,
                  "end": 533,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 531,
                    "end": 532,
                    "typeName": {
                      "type": "Identifier",
                      "start": 531,
                      "end": 532,
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 529,
                    "end": 530,
                    "typeName": {
                      "type": "Identifier",
                      "start": 529,
                      "end": 530,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 519,
              "end": 528,
              "decorators": [],
              "name": "Validator",
              "optional": false
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 482,
            "end": 516,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 491,
              "end": 516,
              "params": [
                {
                  "type": "TSUnionType",
                  "start": 492,
                  "end": 515,
                  "types": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 492,
                      "end": 496,
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 494,
                        "end": 495,
                        "typeName": {
                          "type": "Identifier",
                          "start": 494,
                          "end": 495,
                          "decorators": [],
                          "name": "K",
                          "optional": false
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 492,
                        "end": 493,
                        "typeName": {
                          "type": "Identifier",
                          "start": 492,
                          "end": 493,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 499,
                      "end": 503
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 506,
                      "end": 515
                    }
                  ]
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 482,
              "end": 491,
              "decorators": [],
              "name": "Validator",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 438,
        "end": 441,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 439,
            "end": 440,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 439,
              "end": 440,
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
      "start": 538,
      "end": 658,
      "body": {
        "type": "TSInterfaceBody",
        "start": 570,
        "end": 658,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 576,
            "end": 618,
            "params": [
              {
                "type": "Identifier",
                "start": 577,
                "end": 610,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 582,
                  "end": 610,
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "start": 584,
                    "end": 610,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 584,
                        "end": 585,
                        "typeName": {
                          "type": "Identifier",
                          "start": 584,
                          "end": 585,
                          "decorators": [],
                          "name": "P",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeLiteral",
                        "start": 588,
                        "end": 610,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 590,
                            "end": 608,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 590,
                              "end": 598,
                              "decorators": [],
                              "name": "children",
                              "optional": false
                            },
                            "optional": true,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 599,
                              "end": 608,
                              "typeAnnotation": {
                                "type": "TSUnknownKeyword",
                                "start": 601,
                                "end": 608
                              }
                            }
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 611,
              "end": 617,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 613,
                "end": 617
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 623,
            "end": 656,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 623,
              "end": 632,
              "decorators": [],
              "name": "propTypes",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 633,
              "end": 655,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 635,
                "end": 655,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 652,
                  "end": 655,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 653,
                      "end": 654,
                      "typeName": {
                        "type": "Identifier",
                        "start": 653,
                        "end": 654,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 635,
                  "end": 652,
                  "decorators": [],
                  "name": "WeakValidationMap",
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
        "start": 548,
        "end": 566,
        "decorators": [],
        "name": "FunctionComponent1",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 566,
        "end": 569,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 567,
            "end": 568,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 567,
              "end": 568,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 660,
      "end": 780,
      "body": {
        "type": "TSInterfaceBody",
        "start": 692,
        "end": 780,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 698,
            "end": 740,
            "params": [
              {
                "type": "Identifier",
                "start": 699,
                "end": 732,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 704,
                  "end": 732,
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "start": 706,
                    "end": 732,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 706,
                        "end": 707,
                        "typeName": {
                          "type": "Identifier",
                          "start": 706,
                          "end": 707,
                          "decorators": [],
                          "name": "P",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeLiteral",
                        "start": 710,
                        "end": 732,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 712,
                            "end": 730,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 712,
                              "end": 720,
                              "decorators": [],
                              "name": "children",
                              "optional": false
                            },
                            "optional": true,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 721,
                              "end": 730,
                              "typeAnnotation": {
                                "type": "TSUnknownKeyword",
                                "start": 723,
                                "end": 730
                              }
                            }
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 733,
              "end": 739,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 735,
                "end": 739
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 745,
            "end": 778,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 745,
              "end": 754,
              "decorators": [],
              "name": "propTypes",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 755,
              "end": 777,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 757,
                "end": 777,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 774,
                  "end": 777,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 775,
                      "end": 776,
                      "typeName": {
                        "type": "Identifier",
                        "start": 775,
                        "end": 776,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 757,
                  "end": 774,
                  "decorators": [],
                  "name": "WeakValidationMap",
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
        "start": 670,
        "end": 688,
        "decorators": [],
        "name": "FunctionComponent2",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 688,
        "end": 691,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 689,
            "end": 690,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 689,
              "end": 690,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 782,
      "end": 850,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 848,
        "end": 850,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 791,
        "end": 817,
        "decorators": [],
        "name": "needsComponentOfSomeProps3",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 818,
          "end": 840,
          "argument": {
            "type": "Identifier",
            "start": 821,
            "end": 822,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 822,
            "end": 840,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 824,
              "end": 840,
              "elementType": {
                "type": "TSTypeReference",
                "start": 824,
                "end": 838,
                "typeName": {
                  "type": "Identifier",
                  "start": 824,
                  "end": 838,
                  "decorators": [],
                  "name": "SomePropsClone",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 841,
        "end": 847,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 843,
          "end": 847
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 851,
      "end": 914,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 857,
          "end": 913,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 857,
            "end": 899,
            "decorators": [],
            "name": "comp3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 862,
              "end": 899,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 864,
                "end": 899,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 882,
                  "end": 899,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 883,
                      "end": 898,
                      "typeName": {
                        "type": "Identifier",
                        "start": 883,
                        "end": 898,
                        "decorators": [],
                        "name": "SomePropsCloneX",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 864,
                  "end": 882,
                  "decorators": [],
                  "name": "FunctionComponent2",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 902,
            "end": 913,
            "expression": {
              "type": "Literal",
              "start": 902,
              "end": 906,
              "raw": "null",
              "value": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 910,
              "end": 913
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 915,
      "end": 963,
      "expression": {
        "type": "CallExpression",
        "start": 915,
        "end": 962,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 942,
            "end": 961,
            "properties": [
              {
                "type": "Property",
                "start": 944,
                "end": 959,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 944,
                  "end": 952,
                  "decorators": [],
                  "name": "renderAs",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 954,
                  "end": 959,
                  "decorators": [],
                  "name": "comp3",
                  "optional": false
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 915,
          "end": 941,
          "decorators": [],
          "name": "needsComponentOfSomeProps3",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 965,
      "end": 1028,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1026,
        "end": 1028,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 974,
        "end": 1000,
        "decorators": [],
        "name": "needsComponentOfSomeProps2",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 1001,
          "end": 1018,
          "argument": {
            "type": "Identifier",
            "start": 1004,
            "end": 1005,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1005,
            "end": 1018,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 1007,
              "end": 1018,
              "elementType": {
                "type": "TSTypeReference",
                "start": 1007,
                "end": 1016,
                "typeName": {
                  "type": "Identifier",
                  "start": 1007,
                  "end": 1016,
                  "decorators": [],
                  "name": "SomeProps",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1019,
        "end": 1025,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1021,
          "end": 1025
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1029,
      "end": 1087,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1035,
          "end": 1086,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1035,
            "end": 1072,
            "decorators": [],
            "name": "comp2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1040,
              "end": 1072,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1042,
                "end": 1072,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1060,
                  "end": 1072,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1061,
                      "end": 1071,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1061,
                        "end": 1071,
                        "decorators": [],
                        "name": "SomePropsX",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1042,
                  "end": 1060,
                  "decorators": [],
                  "name": "FunctionComponent1",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1075,
            "end": 1086,
            "expression": {
              "type": "Literal",
              "start": 1075,
              "end": 1079,
              "raw": "null",
              "value": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1083,
              "end": 1086
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 1088,
      "end": 1136,
      "expression": {
        "type": "CallExpression",
        "start": 1088,
        "end": 1135,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1115,
            "end": 1134,
            "properties": [
              {
                "type": "Property",
                "start": 1117,
                "end": 1132,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1117,
                  "end": 1125,
                  "decorators": [],
                  "name": "renderAs",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1127,
                  "end": 1132,
                  "decorators": [],
                  "name": "comp2",
                  "optional": false
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1088,
          "end": 1114,
          "decorators": [],
          "name": "needsComponentOfSomeProps2",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
