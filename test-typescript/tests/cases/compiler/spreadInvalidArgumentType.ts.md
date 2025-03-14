spreadInvalidArgumentType.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1662,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 17,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 17,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 9,
            "end": 11,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 11,
              "decorators": [],
              "name": "v1",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 15,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 15,
              "decorators": [],
              "name": "v2",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "EmptyStatement",
      "start": 17,
      "end": 18
    },
    {
      "type": "FunctionDeclaration",
      "start": 20,
      "end": 1661,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 72,
        "end": 1661,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 78,
            "end": 87,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 82,
                "end": 86,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 86,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 83,
                    "end": 86,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 85,
                      "end": 86,
                      "typeName": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 86,
                        "decorators": [],
                        "name": "T",
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
            "start": 93,
            "end": 107,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 97,
                "end": 106,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 106,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 98,
                    "end": 106,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 100,
                      "end": 106,
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 102,
                        "end": 105,
                        "literal": {
                          "type": "Literal",
                          "start": 102,
                          "end": 105,
                          "raw": "\"b\"",
                          "value": "b"
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 100,
                        "end": 101,
                        "typeName": {
                          "type": "Identifier",
                          "start": 100,
                          "end": 101,
                          "decorators": [],
                          "name": "T",
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
            "start": 112,
            "end": 127,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 116,
                "end": 126,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 126,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 117,
                    "end": 126,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "start": 119,
                      "end": 126,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 125,
                        "end": 126,
                        "typeName": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 126,
                          "decorators": [],
                          "name": "T",
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
            "start": 133,
            "end": 176,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 137,
                "end": 175,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 175,
                  "decorators": [],
                  "name": "mapped_generic",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 151,
                    "end": 175,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 153,
                      "end": 175,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 160,
                        "end": 167,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 166,
                          "end": 167,
                          "typeName": {
                            "type": "Identifier",
                            "start": 166,
                            "end": 167,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 155,
                        "end": 156,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 170,
                        "end": 174,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 172,
                          "end": 173,
                          "typeName": {
                            "type": "Identifier",
                            "start": 172,
                            "end": 173,
                            "decorators": [],
                            "name": "P",
                            "optional": false
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 170,
                          "end": 171,
                          "typeName": {
                            "type": "Identifier",
                            "start": 170,
                            "end": 171,
                            "decorators": [],
                            "name": "T",
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
            "start": 181,
            "end": 212,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 185,
                "end": 211,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 211,
                  "decorators": [],
                  "name": "mapped",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 191,
                    "end": 211,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 193,
                      "end": 211,
                      "constraint": {
                        "type": "TSLiteralType",
                        "start": 200,
                        "end": 203,
                        "literal": {
                          "type": "Literal",
                          "start": 200,
                          "end": 203,
                          "raw": "\"b\"",
                          "value": "b"
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 195,
                        "end": 196,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 206,
                        "end": 210,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 208,
                          "end": 209,
                          "typeName": {
                            "type": "Identifier",
                            "start": 208,
                            "end": 209,
                            "decorators": [],
                            "name": "P",
                            "optional": false
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 206,
                          "end": 207,
                          "typeName": {
                            "type": "Identifier",
                            "start": 206,
                            "end": 207,
                            "decorators": [],
                            "name": "T",
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
            "start": 218,
            "end": 255,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 222,
                "end": 254,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 254,
                  "decorators": [],
                  "name": "union_generic",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 235,
                    "end": 254,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 237,
                      "end": 254,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 237,
                          "end": 238,
                          "typeName": {
                            "type": "Identifier",
                            "start": 237,
                            "end": 238,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 241,
                          "end": 254,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 243,
                              "end": 252,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 243,
                                "end": 244,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 244,
                                "end": 252,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 246,
                                  "end": 252
                                }
                              }
                            }
                          ]
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
            "start": 260,
            "end": 304,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 264,
                "end": 303,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 264,
                  "end": 303,
                  "decorators": [],
                  "name": "union_primitive",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 279,
                    "end": 303,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 281,
                      "end": 303,
                      "types": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 281,
                          "end": 294,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 283,
                              "end": 292,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 283,
                                "end": 284,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 284,
                                "end": 292,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 286,
                                  "end": 292
                                }
                              }
                            }
                          ]
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 297,
                          "end": 303
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
            "start": 310,
            "end": 354,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 314,
                "end": 353,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 314,
                  "end": 353,
                  "decorators": [],
                  "name": "intersection_generic",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 334,
                    "end": 353,
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 336,
                      "end": 353,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 336,
                          "end": 337,
                          "typeName": {
                            "type": "Identifier",
                            "start": 336,
                            "end": 337,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 340,
                          "end": 353,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 342,
                              "end": 351,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 342,
                                "end": 343,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 343,
                                "end": 351,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 345,
                                  "end": 351
                                }
                              }
                            }
                          ]
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
            "start": 359,
            "end": 410,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 363,
                "end": 409,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 409,
                  "decorators": [],
                  "name": "intersection_primitive",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 385,
                    "end": 409,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 387,
                      "end": 409,
                      "types": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 387,
                          "end": 400,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 389,
                              "end": 398,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 389,
                                "end": 390,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 390,
                                "end": 398,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 392,
                                  "end": 398
                                }
                              }
                            }
                          ]
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 403,
                          "end": 409
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
            "start": 416,
            "end": 432,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 420,
                "end": 431,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 420,
                  "end": 431,
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 423,
                    "end": 431,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 425,
                      "end": 431
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
            "start": 437,
            "end": 453,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 441,
                "end": 452,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 452,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 444,
                    "end": 452,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 446,
                      "end": 452
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
            "start": 458,
            "end": 487,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 462,
                "end": 486,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 462,
                  "end": 486,
                  "decorators": [],
                  "name": "literal_string",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 476,
                    "end": 486,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 478,
                      "end": 486,
                      "literal": {
                        "type": "Literal",
                        "start": 478,
                        "end": 486,
                        "raw": "\"string\"",
                        "value": "string"
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
            "start": 492,
            "end": 515,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 496,
                "end": 514,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 514,
                  "decorators": [],
                  "name": "literal_number",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 510,
                    "end": 514,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 512,
                      "end": 514,
                      "literal": {
                        "type": "Literal",
                        "start": 512,
                        "end": 514,
                        "raw": "42",
                        "value": 42
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
            "start": 521,
            "end": 538,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 525,
                "end": 537,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 525,
                  "end": 537,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 526,
                    "end": 537,
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 528,
                      "end": 537
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
            "start": 543,
            "end": 555,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 547,
                "end": 554,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 554,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 548,
                    "end": 554,
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "start": 550,
                      "end": 554
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
            "start": 560,
            "end": 571,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 564,
                "end": 570,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 564,
                  "end": 570,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 565,
                    "end": 570,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 567,
                      "end": 570
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
            "start": 578,
            "end": 587,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 582,
                "end": 586,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 582,
                  "end": 586,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 583,
                    "end": 586,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 585,
                      "end": 586,
                      "typeName": {
                        "type": "Identifier",
                        "start": 585,
                        "end": 586,
                        "decorators": [],
                        "name": "E",
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
            "start": 593,
            "end": 612,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 597,
                "end": 611,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 597,
                  "end": 599,
                  "decorators": [],
                  "name": "o1",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 602,
                  "end": 611,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 604,
                      "end": 609,
                      "argument": {
                        "type": "Identifier",
                        "start": 607,
                        "end": 609,
                        "decorators": [],
                        "name": "p1",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 649,
            "end": 668,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 653,
                "end": 667,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 653,
                  "end": 655,
                  "decorators": [],
                  "name": "o2",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 658,
                  "end": 667,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 660,
                      "end": 665,
                      "argument": {
                        "type": "Identifier",
                        "start": 663,
                        "end": 665,
                        "decorators": [],
                        "name": "p2",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 680,
            "end": 698,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 684,
                "end": 697,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 684,
                  "end": 686,
                  "decorators": [],
                  "name": "o3",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 689,
                  "end": 697,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 691,
                      "end": 695,
                      "argument": {
                        "type": "Identifier",
                        "start": 694,
                        "end": 695,
                        "decorators": [],
                        "name": "t",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 734,
            "end": 752,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 738,
                "end": 751,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 738,
                  "end": 740,
                  "decorators": [],
                  "name": "o4",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 743,
                  "end": 751,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 745,
                      "end": 749,
                      "argument": {
                        "type": "Identifier",
                        "start": 748,
                        "end": 749,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 782,
            "end": 800,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 786,
                "end": 799,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 786,
                  "end": 788,
                  "decorators": [],
                  "name": "o5",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 791,
                  "end": 799,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 793,
                      "end": 797,
                      "argument": {
                        "type": "Identifier",
                        "start": 796,
                        "end": 797,
                        "decorators": [],
                        "name": "k",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 823,
            "end": 854,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 827,
                "end": 853,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 827,
                  "end": 829,
                  "decorators": [],
                  "name": "o6",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 832,
                  "end": 853,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 834,
                      "end": 851,
                      "argument": {
                        "type": "Identifier",
                        "start": 837,
                        "end": 851,
                        "decorators": [],
                        "name": "mapped_generic",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 893,
            "end": 916,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 897,
                "end": 915,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 897,
                  "end": 899,
                  "decorators": [],
                  "name": "o7",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 902,
                  "end": 915,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 904,
                      "end": 913,
                      "argument": {
                        "type": "Identifier",
                        "start": 907,
                        "end": 913,
                        "decorators": [],
                        "name": "mapped",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 954,
            "end": 984,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 958,
                "end": 983,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 958,
                  "end": 960,
                  "decorators": [],
                  "name": "o8",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 963,
                  "end": 983,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 965,
                      "end": 981,
                      "argument": {
                        "type": "Identifier",
                        "start": 968,
                        "end": 981,
                        "decorators": [],
                        "name": "union_generic",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1031,
            "end": 1063,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1035,
                "end": 1062,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1035,
                  "end": 1037,
                  "decorators": [],
                  "name": "o9",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1040,
                  "end": 1062,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1042,
                      "end": 1060,
                      "argument": {
                        "type": "Identifier",
                        "start": 1045,
                        "end": 1060,
                        "decorators": [],
                        "name": "union_primitive",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1114,
            "end": 1152,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1118,
                "end": 1151,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1118,
                  "end": 1121,
                  "decorators": [],
                  "name": "o10",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1124,
                  "end": 1151,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1126,
                      "end": 1149,
                      "argument": {
                        "type": "Identifier",
                        "start": 1129,
                        "end": 1149,
                        "decorators": [],
                        "name": "intersection_generic",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1206,
            "end": 1246,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1210,
                "end": 1245,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1210,
                  "end": 1213,
                  "decorators": [],
                  "name": "o11",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1216,
                  "end": 1245,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1218,
                      "end": 1243,
                      "argument": {
                        "type": "Identifier",
                        "start": 1221,
                        "end": 1243,
                        "decorators": [],
                        "name": "intersection_primitive",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1304,
            "end": 1325,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1308,
                "end": 1324,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1308,
                  "end": 1311,
                  "decorators": [],
                  "name": "o12",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1314,
                  "end": 1324,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1316,
                      "end": 1322,
                      "argument": {
                        "type": "Identifier",
                        "start": 1319,
                        "end": 1322,
                        "decorators": [],
                        "name": "num",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1340,
            "end": 1361,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1344,
                "end": 1360,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1344,
                  "end": 1347,
                  "decorators": [],
                  "name": "o13",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1350,
                  "end": 1360,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1352,
                      "end": 1358,
                      "argument": {
                        "type": "Identifier",
                        "start": 1355,
                        "end": 1358,
                        "decorators": [],
                        "name": "str",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1377,
            "end": 1396,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1381,
                "end": 1395,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1381,
                  "end": 1384,
                  "decorators": [],
                  "name": "o14",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1387,
                  "end": 1395,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1389,
                      "end": 1393,
                      "argument": {
                        "type": "Identifier",
                        "start": 1392,
                        "end": 1393,
                        "decorators": [],
                        "name": "u",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1439,
            "end": 1458,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1443,
                "end": 1457,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1443,
                  "end": 1446,
                  "decorators": [],
                  "name": "o15",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1449,
                  "end": 1457,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1451,
                      "end": 1455,
                      "argument": {
                        "type": "Identifier",
                        "start": 1454,
                        "end": 1455,
                        "decorators": [],
                        "name": "n",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1497,
            "end": 1516,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1501,
                "end": 1515,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1501,
                  "end": 1504,
                  "decorators": [],
                  "name": "o16",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1507,
                  "end": 1515,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1509,
                      "end": 1513,
                      "argument": {
                        "type": "Identifier",
                        "start": 1512,
                        "end": 1513,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1529,
            "end": 1561,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1533,
                "end": 1560,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1533,
                  "end": 1536,
                  "decorators": [],
                  "name": "o17",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1539,
                  "end": 1560,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1541,
                      "end": 1558,
                      "argument": {
                        "type": "Identifier",
                        "start": 1544,
                        "end": 1558,
                        "decorators": [],
                        "name": "literal_string",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1576,
            "end": 1608,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1580,
                "end": 1607,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1580,
                  "end": 1583,
                  "decorators": [],
                  "name": "o18",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1586,
                  "end": 1607,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1588,
                      "end": 1605,
                      "argument": {
                        "type": "Identifier",
                        "start": 1591,
                        "end": 1605,
                        "decorators": [],
                        "name": "literal_number",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1624,
            "end": 1643,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1628,
                "end": 1642,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1628,
                  "end": 1631,
                  "decorators": [],
                  "name": "o19",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1634,
                  "end": 1642,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1636,
                      "end": 1640,
                      "argument": {
                        "type": "Identifier",
                        "start": 1639,
                        "end": 1640,
                        "decorators": [],
                        "name": "e",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 56,
          "end": 61,
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 58,
            "end": 61,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 60,
              "end": 61,
              "typeName": {
                "type": "Identifier",
                "start": 60,
                "end": 61,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 63,
          "end": 70,
          "decorators": [],
          "name": "p2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 65,
            "end": 70,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 67,
              "end": 70,
              "elementType": {
                "type": "TSTypeReference",
                "start": 67,
                "end": 68,
                "typeName": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 68,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 30,
        "end": 55,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 31,
            "end": 54,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 41,
              "end": 54,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 43,
                  "end": 52,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 44,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 44,
                    "end": 52,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 46,
                      "end": 52
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
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
