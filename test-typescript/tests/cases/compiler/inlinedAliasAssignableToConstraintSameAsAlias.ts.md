__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 513,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 24,
        "name": "RelationFields",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 25,
        "end": 56,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 29,
            "end": 34,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 33,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 32,
                "end": 33,
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "name": "A",
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
            "start": 37,
            "end": 44,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 47,
            "end": 54,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 51,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "name": "Name",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 69,
        "end": 89,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 75,
          "end": 89,
          "typeName": {
            "type": "Identifier",
            "start": 75,
            "end": 89,
            "name": "RelationFields",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 91,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 103,
        "name": "ShouldA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 104,
              "end": 106,
              "name": "RF",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 115,
              "end": 129,
              "typeName": {
                "type": "Identifier",
                "start": 115,
                "end": 129,
                "name": "RelationFields",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 131,
            "end": 145,
            "name": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 141,
              "end": 145,
              "typeName": {
                "type": "Identifier",
                "start": 141,
                "end": 145,
                "name": "Name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 149,
        "end": 189,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 149,
          "end": 154,
          "objectType": {
            "type": "TSTypeReference",
            "start": 149,
            "end": 151,
            "typeName": {
              "type": "Identifier",
              "start": 149,
              "end": 151,
              "name": "RF",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 152,
            "end": 153,
            "typeName": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
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
            "typeName": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "trueType": {
          "type": "TSIndexedAccessType",
          "start": 171,
          "end": 179,
          "objectType": {
            "type": "TSIndexedAccessType",
            "start": 171,
            "end": 176,
            "objectType": {
              "type": "TSTypeReference",
              "start": 171,
              "end": 173,
              "typeName": {
                "type": "Identifier",
                "start": 171,
                "end": 173,
                "name": "RF",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 174,
              "end": 175,
              "typeName": {
                "type": "Identifier",
                "start": 174,
                "end": 175,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "indexType": {
            "type": "TSLiteralType",
            "start": 177,
            "end": 178,
            "literal": {
              "type": "Literal",
              "start": 177,
              "end": 178,
              "value": 0,
              "raw": "0"
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 184,
          "end": 189
        }
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 192,
      "end": 512,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 199,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 200,
        "end": 512,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 204,
            "end": 209,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 205,
              "end": 208,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 207,
                "end": 208,
                "typeName": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 208,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 212,
            "end": 219,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 216,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 222,
            "end": 229,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 223,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 226,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 233,
            "end": 510,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 245,
              "name": "whereRelated",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 245,
              "end": 510,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 245,
                "end": 480,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 315,
                    "end": 357,
                    "name": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 317,
                      "name": "RF",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 326,
                      "end": 340,
                      "typeName": {
                        "type": "Identifier",
                        "start": 326,
                        "end": 340,
                        "name": "RelationFields",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "default": {
                      "type": "TSTypeReference",
                      "start": 343,
                      "end": 357,
                      "typeName": {
                        "type": "Identifier",
                        "start": 343,
                        "end": 357,
                        "name": "RelationFields",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 363,
                    "end": 384,
                    "name": {
                      "type": "Identifier",
                      "start": 363,
                      "end": 364,
                      "name": "N",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 373,
                      "end": 377,
                      "typeName": {
                        "type": "Identifier",
                        "start": 373,
                        "end": 377,
                        "name": "Name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "default": {
                      "type": "TSTypeReference",
                      "start": 380,
                      "end": 384,
                      "typeName": {
                        "type": "Identifier",
                        "start": 380,
                        "end": 384,
                        "name": "Name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 390,
                    "end": 441,
                    "name": {
                      "type": "Identifier",
                      "start": 390,
                      "end": 392,
                      "name": "A1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 401,
                      "end": 402,
                      "typeName": {
                        "type": "Identifier",
                        "start": 401,
                        "end": 402,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "default": {
                      "type": "TSConditionalType",
                      "start": 405,
                      "end": 441,
                      "checkType": {
                        "type": "TSIndexedAccessType",
                        "start": 405,
                        "end": 410,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 405,
                          "end": 407,
                          "typeName": {
                            "type": "Identifier",
                            "start": 405,
                            "end": 407,
                            "name": "RF",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 408,
                          "end": 409,
                          "typeName": {
                            "type": "Identifier",
                            "start": 408,
                            "end": 409,
                            "name": "N",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 419,
                            "end": 420,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "trueType": {
                        "type": "TSIndexedAccessType",
                        "start": 425,
                        "end": 433,
                        "objectType": {
                          "type": "TSIndexedAccessType",
                          "start": 425,
                          "end": 430,
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 425,
                            "end": 427,
                            "typeName": {
                              "type": "Identifier",
                              "start": 425,
                              "end": 427,
                              "name": "RF",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 428,
                            "end": 429,
                            "typeName": {
                              "type": "Identifier",
                              "start": 428,
                              "end": 429,
                              "name": "N",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 431,
                          "end": 432,
                          "literal": {
                            "type": "Literal",
                            "start": 431,
                            "end": 432,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 436,
                        "end": 441
                      }
                    },
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 447,
                    "end": 476,
                    "name": {
                      "type": "Identifier",
                      "start": 447,
                      "end": 449,
                      "name": "A2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 458,
                      "end": 459,
                      "typeName": {
                        "type": "Identifier",
                        "start": 458,
                        "end": 459,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "default": {
                      "type": "TSTypeReference",
                      "start": 462,
                      "end": 476,
                      "typeName": {
                        "type": "Identifier",
                        "start": 462,
                        "end": 469,
                        "name": "ShouldA",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 469,
                        "end": 476,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 470,
                            "end": 472,
                            "typeName": {
                              "type": "Identifier",
                              "start": 470,
                              "end": 472,
                              "name": "RF",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 474,
                            "end": 475,
                            "typeName": {
                              "type": "Identifier",
                              "start": 474,
                              "end": 475,
                              "name": "N",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 482,
                "end": 490,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 484,
                  "end": 490
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
