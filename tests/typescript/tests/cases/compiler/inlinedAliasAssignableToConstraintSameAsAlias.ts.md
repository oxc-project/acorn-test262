__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 512,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 56,
      "body": {
        "type": "TSInterfaceBody",
        "start": 25,
        "end": 56,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 29,
            "end": 34,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 33,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 32,
                "end": 33,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 44,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 43,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 40,
                "end": 43,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 40,
                  "end": 41,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 47,
            "end": 54,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 53,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 50,
                "end": 53,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 50,
                  "end": 51,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 51,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
        "end": 24,
        "decorators": [],
        "name": "RelationFields",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 90,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "decorators": [],
        "name": "Name",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 69,
        "end": 89,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 75,
          "end": 89,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 75,
            "end": 89,
            "decorators": [],
            "name": "RelationFields",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 91,
      "end": 190,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 103,
        "decorators": [],
        "name": "ShouldA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 149,
        "end": 189,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 149,
          "end": 154,
          "indexType": {
            "type": "TSTypeReference",
            "start": 152,
            "end": 153,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 149,
            "end": 151,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 149,
              "end": 151,
              "decorators": [],
              "name": "RF",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "extendsType": {
          "type": "TSArrayType",
          "start": 163,
          "end": 166,
          "elementType": {
            "type": "TSTypeReference",
            "start": 163,
            "end": 164,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 184,
          "end": 189
        },
        "trueType": {
          "type": "TSIndexedAccessType",
          "start": 171,
          "end": 179,
          "indexType": {
            "type": "TSLiteralType",
            "start": 177,
            "end": 178,
            "literal": {
              "type": "Literal",
              "start": 177,
              "end": 178,
              "raw": "0",
              "value": 0
            }
          },
          "objectType": {
            "type": "TSIndexedAccessType",
            "start": 171,
            "end": 176,
            "indexType": {
              "type": "TSTypeReference",
              "start": 174,
              "end": 175,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 174,
                "end": 175,
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 171,
              "end": 173,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 171,
                "end": 173,
                "decorators": [],
                "name": "RF",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 103,
        "end": 146,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 104,
            "end": 129,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 115,
              "end": 129,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 115,
                "end": 129,
                "decorators": [],
                "name": "RelationFields",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 104,
              "end": 106,
              "decorators": [],
              "name": "RF",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 131,
            "end": 145,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 141,
              "end": 145,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 141,
                "end": 145,
                "decorators": [],
                "name": "Name",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 192,
      "end": 512,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 200,
        "end": 512,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 204,
            "end": 209,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 205,
              "end": 208,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 207,
                "end": 208,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 208,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 212,
            "end": 219,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 213,
              "end": 218,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 215,
                "end": 218,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 215,
                  "end": 216,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 216,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 222,
            "end": 229,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 223,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 223,
              "end": 228,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 225,
                "end": 228,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 225,
                  "end": 226,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 226,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 233,
            "end": 510,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 245,
              "decorators": [],
              "name": "whereRelated",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 245,
              "end": 510,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 491,
                "end": 510,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 497,
                    "end": 506,
                    "argument": {
                      "type": "Literal",
                      "start": 504,
                      "end": 505,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 482,
                "end": 490,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 484,
                  "end": 490
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 245,
                "end": 480,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 315,
                    "end": 357,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 326,
                      "end": 340,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 326,
                        "end": 340,
                        "decorators": [],
                        "name": "RelationFields",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": {
                      "type": "TSTypeReference",
                      "start": 343,
                      "end": 357,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 343,
                        "end": 357,
                        "decorators": [],
                        "name": "RelationFields",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 317,
                      "decorators": [],
                      "name": "RF",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 363,
                    "end": 384,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 373,
                      "end": 377,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 373,
                        "end": 377,
                        "decorators": [],
                        "name": "Name",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": {
                      "type": "TSTypeReference",
                      "start": 380,
                      "end": 384,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 380,
                        "end": 384,
                        "decorators": [],
                        "name": "Name",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 363,
                      "end": 364,
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 390,
                    "end": 441,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 401,
                      "end": 402,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 401,
                        "end": 402,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": {
                      "type": "TSConditionalType",
                      "start": 405,
                      "end": 441,
                      "checkType": {
                        "type": "TSIndexedAccessType",
                        "start": 405,
                        "end": 410,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 408,
                          "end": 409,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 408,
                            "end": 409,
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 405,
                          "end": 407,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 405,
                            "end": 407,
                            "decorators": [],
                            "name": "RF",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "extendsType": {
                        "type": "TSArrayType",
                        "start": 419,
                        "end": 422,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 419,
                          "end": 420,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 419,
                            "end": 420,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 436,
                        "end": 441
                      },
                      "trueType": {
                        "type": "TSIndexedAccessType",
                        "start": 425,
                        "end": 433,
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 431,
                          "end": 432,
                          "literal": {
                            "type": "Literal",
                            "start": 431,
                            "end": 432,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        "objectType": {
                          "type": "TSIndexedAccessType",
                          "start": 425,
                          "end": 430,
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 428,
                            "end": 429,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 428,
                              "end": 429,
                              "decorators": [],
                              "name": "N",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 425,
                            "end": 427,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 425,
                              "end": 427,
                              "decorators": [],
                              "name": "RF",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 390,
                      "end": 392,
                      "decorators": [],
                      "name": "A1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 447,
                    "end": 476,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 458,
                      "end": 459,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 458,
                        "end": 459,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": {
                      "type": "TSTypeReference",
                      "start": 462,
                      "end": 476,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 469,
                        "end": 476,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 470,
                            "end": 472,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 470,
                              "end": 472,
                              "decorators": [],
                              "name": "RF",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 474,
                            "end": 475,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 474,
                              "end": 475,
                              "decorators": [],
                              "name": "N",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 462,
                        "end": 469,
                        "decorators": [],
                        "name": "ShouldA",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 447,
                      "end": 449,
                      "decorators": [],
                      "name": "A2",
                      "optional": false,
                      "typeAnnotation": null
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
        "start": 198,
        "end": 199,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
