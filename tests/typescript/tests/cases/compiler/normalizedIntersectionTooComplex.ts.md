__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 1973,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 35,
        "end": 38,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 36,
            "end": 37,
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 39,
        "end": 51,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 42,
            "end": 49,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 45,
              "decorators": [],
              "name": "ref",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 48,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 47,
                "end": 48,
                "typeName": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "TSInterfaceDeclaration",
      "start": 52,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "decorators": [],
        "name": "Func",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 66,
        "end": 69,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 67,
            "end": 68,
            "name": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 70,
        "end": 88,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 73,
            "end": 86,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 74,
                "end": 78,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 75,
                  "end": 78,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 77,
                    "end": 78,
                    "typeName": {
                      "type": "Identifier",
                      "start": 77,
                      "end": 78,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 85,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 81,
                "end": 85
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 89,
      "end": 203,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 113,
        "decorators": [],
        "name": "UnionToIntersection",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 113,
        "end": 116,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 114,
            "end": 115,
            "name": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 119,
        "end": 202,
        "checkType": {
          "type": "TSConditionalType",
          "start": 120,
          "end": 158,
          "checkType": {
            "type": "TSTypeReference",
            "start": 120,
            "end": 121,
            "typeName": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSAnyKeyword",
            "start": 130,
            "end": 133
          },
          "trueType": {
            "type": "TSFunctionType",
            "start": 136,
            "end": 150,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 137,
                "end": 141,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 138,
                  "end": 141,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 140,
                    "end": 141,
                    "typeName": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 141,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 150,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 146,
                "end": 150
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 153,
            "end": 158
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 169,
          "end": 189,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 170,
              "end": 180,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 171,
                "end": 180,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 173,
                  "end": 180,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 179,
                    "end": 180,
                    "name": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 180,
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 182,
            "end": 189,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 185,
              "end": 189
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 193,
          "end": 194,
          "typeName": {
            "type": "Identifier",
            "start": 193,
            "end": 194,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 197,
          "end": 202
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 204,
      "end": 256,
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 215,
        "decorators": [],
        "name": "CtorOf",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 215,
        "end": 218,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 216,
            "end": 217,
            "name": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 221,
        "end": 255,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 222,
            "end": 249,
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 225,
              "end": 249,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 227,
                "end": 249,
                "typeName": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 246,
                  "decorators": [],
                  "name": "UnionToIntersection",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 246,
                  "end": 249,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 247,
                      "end": 248,
                      "typeName": {
                        "type": "Identifier",
                        "start": 247,
                        "end": 248,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 251,
          "end": 255,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 254,
            "end": 255,
            "typeName": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 258,
      "end": 1783,
      "id": {
        "type": "Identifier",
        "start": 268,
        "end": 271,
        "decorators": [],
        "name": "Big",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 272,
        "end": 1783,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 278,
            "end": 355,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 278,
              "end": 281,
              "value": "0",
              "raw": "\"0\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 281,
              "end": 355,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 283,
                "end": 355,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 285,
                    "end": 301,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 285,
                      "end": 291,
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 292,
                      "end": 300,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 294,
                        "end": 300
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 302,
                    "end": 315,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 302,
                      "end": 305,
                      "value": "0",
                      "raw": "\"0\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 306,
                      "end": 314,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 308,
                        "end": 314
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 316,
                    "end": 353,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 316,
                      "end": 319,
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 320,
                      "end": 352,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 322,
                        "end": 352,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 322,
                            "end": 335,
                            "typeName": {
                              "type": "Identifier",
                              "start": 322,
                              "end": 325,
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 325,
                              "end": 335,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 326,
                                  "end": 334,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 326,
                                    "end": 329,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 326,
                                      "end": 329,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 330,
                                    "end": 333,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 330,
                                      "end": 333,
                                      "value": "0",
                                      "raw": "\"0\""
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 338,
                            "end": 352,
                            "typeName": {
                              "type": "Identifier",
                              "start": 338,
                              "end": 342,
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 342,
                              "end": 352,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 343,
                                  "end": 351,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 343,
                                    "end": 346,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 343,
                                      "end": 346,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 347,
                                    "end": 350,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 347,
                                      "end": 350,
                                      "value": "0",
                                      "raw": "\"0\""
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 360,
            "end": 437,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 360,
              "end": 363,
              "value": "1",
              "raw": "\"1\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 363,
              "end": 437,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 365,
                "end": 437,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 367,
                    "end": 383,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 367,
                      "end": 373,
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 374,
                      "end": 382,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 376,
                        "end": 382
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 384,
                    "end": 397,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 384,
                      "end": 387,
                      "value": "1",
                      "raw": "\"1\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 388,
                      "end": 396,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 390,
                        "end": 396
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 398,
                    "end": 435,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 398,
                      "end": 401,
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 402,
                      "end": 434,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 404,
                        "end": 434,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 404,
                            "end": 417,
                            "typeName": {
                              "type": "Identifier",
                              "start": 404,
                              "end": 407,
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 407,
                              "end": 417,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 408,
                                  "end": 416,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 408,
                                    "end": 411,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 408,
                                      "end": 411,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 412,
                                    "end": 415,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 412,
                                      "end": 415,
                                      "value": "1",
                                      "raw": "\"1\""
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 420,
                            "end": 434,
                            "typeName": {
                              "type": "Identifier",
                              "start": 420,
                              "end": 424,
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 424,
                              "end": 434,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 425,
                                  "end": 433,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 425,
                                    "end": 428,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 425,
                                      "end": 428,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 429,
                                    "end": 432,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 429,
                                      "end": 432,
                                      "value": "1",
                                      "raw": "\"1\""
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 442,
            "end": 519,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 442,
              "end": 445,
              "value": "2",
              "raw": "\"2\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 445,
              "end": 519,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 447,
                "end": 519,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 449,
                    "end": 465,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 449,
                      "end": 455,
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 456,
                      "end": 464,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 458,
                        "end": 464
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 466,
                    "end": 479,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 466,
                      "end": 469,
                      "value": "2",
                      "raw": "\"2\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 470,
                      "end": 478,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 472,
                        "end": 478
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 480,
                    "end": 517,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 480,
                      "end": 483,
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 484,
                      "end": 516,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 486,
                        "end": 516,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 486,
                            "end": 499,
                            "typeName": {
                              "type": "Identifier",
                              "start": 486,
                              "end": 489,
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 489,
                              "end": 499,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 490,
                                  "end": 498,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 490,
                                    "end": 493,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 490,
                                      "end": 493,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 494,
                                    "end": 497,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 494,
                                      "end": 497,
                                      "value": "2",
                                      "raw": "\"2\""
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 502,
                            "end": 516,
                            "typeName": {
                              "type": "Identifier",
                              "start": 502,
                              "end": 506,
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 506,
                              "end": 516,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 507,
                                  "end": 515,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 507,
                                    "end": 510,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 507,
                                      "end": 510,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 511,
                                    "end": 514,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 511,
                                      "end": 514,
                                      "value": "2",
                                      "raw": "\"2\""
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 524,
            "end": 601,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 524,
              "end": 527,
              "value": "3",
              "raw": "\"3\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 527,
              "end": 601,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 529,
                "end": 601,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 531,
                    "end": 547,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 531,
                      "end": 537,
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 538,
                      "end": 546,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 540,
                        "end": 546
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 548,
                    "end": 561,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 548,
                      "end": 551,
                      "value": "3",
                      "raw": "\"3\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 552,
                      "end": 560,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 554,
                        "end": 560
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 562,
                    "end": 599,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 562,
                      "end": 565,
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 566,
                      "end": 598,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 568,
                        "end": 598,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 568,
                            "end": 581,
                            "typeName": {
                              "type": "Identifier",
                              "start": 568,
                              "end": 571,
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 571,
                              "end": 581,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 572,
                                  "end": 580,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 572,
                                    "end": 575,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 572,
                                      "end": 575,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 576,
                                    "end": 579,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 576,
                                      "end": 579,
                                      "value": "3",
                                      "raw": "\"3\""
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 584,
                            "end": 598,
                            "typeName": {
                              "type": "Identifier",
                              "start": 584,
                              "end": 588,
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 588,
                              "end": 598,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 589,
                                  "end": 597,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 589,
                                    "end": 592,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 589,
                                      "end": 592,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 593,
                                    "end": 596,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 593,
                                      "end": 596,
                                      "value": "3",
                                      "raw": "\"3\""
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 606,
            "end": 683,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 606,
              "end": 609,
              "value": "4",
              "raw": "\"4\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 609,
              "end": 683,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 611,
                "end": 683,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 613,
                    "end": 629,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 613,
                      "end": 619,
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 620,
                      "end": 628,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 622,
                        "end": 628
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 630,
                    "end": 643,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 630,
                      "end": 633,
                      "value": "4",
                      "raw": "\"4\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 634,
                      "end": 642,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 636,
                        "end": 642
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 644,
                    "end": 681,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 644,
                      "end": 647,
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 648,
                      "end": 680,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 650,
                        "end": 680,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 650,
                            "end": 663,
                            "typeName": {
                              "type": "Identifier",
                              "start": 650,
                              "end": 653,
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 653,
                              "end": 663,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 654,
                                  "end": 662,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 654,
                                    "end": 657,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 654,
                                      "end": 657,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 658,
                                    "end": 661,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 658,
                                      "end": 661,
                                      "value": "4",
                                      "raw": "\"4\""
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 666,
                            "end": 680,
                            "typeName": {
                              "type": "Identifier",
                              "start": 666,
                              "end": 670,
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 670,
                              "end": 680,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 671,
                                  "end": 679,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 671,
                                    "end": 674,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 671,
                                      "end": 674,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 675,
                                    "end": 678,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 675,
                                      "end": 678,
                                      "value": "4",
                                      "raw": "\"4\""
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 688,
            "end": 765,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 688,
              "end": 691,
              "value": "5",
              "raw": "\"5\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 691,
              "end": 765,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 693,
                "end": 765,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 695,
                    "end": 711,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 695,
                      "end": 701,
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 702,
                      "end": 710,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 704,
                        "end": 710
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 712,
                    "end": 725,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 712,
                      "end": 715,
                      "value": "5",
                      "raw": "\"5\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 716,
                      "end": 724,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 718,
                        "end": 724
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 726,
                    "end": 763,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 726,
                      "end": 729,
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 730,
                      "end": 762,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 732,
                        "end": 762,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 732,
                            "end": 745,
                            "typeName": {
                              "type": "Identifier",
                              "start": 732,
                              "end": 735,
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 735,
                              "end": 745,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 736,
                                  "end": 744,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 736,
                                    "end": 739,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 736,
                                      "end": 739,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 740,
                                    "end": 743,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 740,
                                      "end": 743,
                                      "value": "5",
                                      "raw": "\"5\""
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 748,
                            "end": 762,
                            "typeName": {
                              "type": "Identifier",
                              "start": 748,
                              "end": 752,
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 752,
                              "end": 762,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 753,
                                  "end": 761,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 753,
                                    "end": 756,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 753,
                                      "end": 756,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 757,
                                    "end": 760,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 757,
                                      "end": 760,
                                      "value": "5",
                                      "raw": "\"5\""
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 770,
            "end": 847,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 770,
              "end": 773,
              "value": "6",
              "raw": "\"6\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 773,
              "end": 847,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 775,
                "end": 847,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 777,
                    "end": 793,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 777,
                      "end": 783,
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 784,
                      "end": 792,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 786,
                        "end": 792
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 794,
                    "end": 807,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 794,
                      "end": 797,
                      "value": "6",
                      "raw": "\"6\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 798,
                      "end": 806,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 800,
                        "end": 806
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 808,
                    "end": 845,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 808,
                      "end": 811,
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 812,
                      "end": 844,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 814,
                        "end": 844,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 814,
                            "end": 827,
                            "typeName": {
                              "type": "Identifier",
                              "start": 814,
                              "end": 817,
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 817,
                              "end": 827,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 818,
                                  "end": 826,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 818,
                                    "end": 821,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 818,
                                      "end": 821,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 822,
                                    "end": 825,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 822,
                                      "end": 825,
                                      "value": "6",
                                      "raw": "\"6\""
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 830,
                            "end": 844,
                            "typeName": {
                              "type": "Identifier",
                              "start": 830,
                              "end": 834,
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 834,
                              "end": 844,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 835,
                                  "end": 843,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 835,
                                    "end": 838,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 835,
                                      "end": 838,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 839,
                                    "end": 842,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 839,
                                      "end": 842,
                                      "value": "6",
                                      "raw": "\"6\""
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 852,
            "end": 929,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 852,
              "end": 855,
              "value": "7",
              "raw": "\"7\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 855,
              "end": 929,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 857,
                "end": 929,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 859,
                    "end": 875,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 859,
                      "end": 865,
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 866,
                      "end": 874,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 868,
                        "end": 874
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 876,
                    "end": 889,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 876,
                      "end": 879,
                      "value": "7",
                      "raw": "\"7\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 880,
                      "end": 888,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 882,
                        "end": 888
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 890,
                    "end": 927,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 890,
                      "end": 893,
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 894,
                      "end": 926,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 896,
                        "end": 926,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 896,
                            "end": 909,
                            "typeName": {
                              "type": "Identifier",
                              "start": 896,
                              "end": 899,
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 899,
                              "end": 909,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 900,
                                  "end": 908,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 900,
                                    "end": 903,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 900,
                                      "end": 903,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 904,
                                    "end": 907,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 904,
                                      "end": 907,
                                      "value": "7",
                                      "raw": "\"7\""
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 912,
                            "end": 926,
                            "typeName": {
                              "type": "Identifier",
                              "start": 912,
                              "end": 916,
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 916,
                              "end": 926,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 917,
                                  "end": 925,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 917,
                                    "end": 920,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 917,
                                      "end": 920,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 921,
                                    "end": 924,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 921,
                                      "end": 924,
                                      "value": "7",
                                      "raw": "\"7\""
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 934,
            "end": 1011,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 934,
              "end": 937,
              "value": "8",
              "raw": "\"8\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 937,
              "end": 1011,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 939,
                "end": 1011,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 941,
                    "end": 957,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 941,
                      "end": 947,
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 948,
                      "end": 956,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 950,
                        "end": 956
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 958,
                    "end": 971,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 958,
                      "end": 961,
                      "value": "8",
                      "raw": "\"8\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 962,
                      "end": 970,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 964,
                        "end": 970
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 972,
                    "end": 1009,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 972,
                      "end": 975,
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 976,
                      "end": 1008,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 978,
                        "end": 1008,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 978,
                            "end": 991,
                            "typeName": {
                              "type": "Identifier",
                              "start": 978,
                              "end": 981,
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 981,
                              "end": 991,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 982,
                                  "end": 990,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 982,
                                    "end": 985,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 982,
                                      "end": 985,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 986,
                                    "end": 989,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 986,
                                      "end": 989,
                                      "value": "8",
                                      "raw": "\"8\""
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 994,
                            "end": 1008,
                            "typeName": {
                              "type": "Identifier",
                              "start": 994,
                              "end": 998,
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 998,
                              "end": 1008,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 999,
                                  "end": 1007,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 999,
                                    "end": 1002,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 999,
                                      "end": 1002,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 1003,
                                    "end": 1006,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 1003,
                                      "end": 1006,
                                      "value": "8",
                                      "raw": "\"8\""
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1016,
            "end": 1093,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 1016,
              "end": 1019,
              "value": "9",
              "raw": "\"9\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1019,
              "end": 1093,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1021,
                "end": 1093,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1023,
                    "end": 1039,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1023,
                      "end": 1029,
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1030,
                      "end": 1038,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1032,
                        "end": 1038
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1040,
                    "end": 1053,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1040,
                      "end": 1043,
                      "value": "9",
                      "raw": "\"9\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1044,
                      "end": 1052,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1046,
                        "end": 1052
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1054,
                    "end": 1091,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1054,
                      "end": 1057,
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1058,
                      "end": 1090,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 1060,
                        "end": 1090,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 1060,
                            "end": 1073,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1060,
                              "end": 1063,
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1063,
                              "end": 1073,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 1064,
                                  "end": 1072,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 1064,
                                    "end": 1067,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1064,
                                      "end": 1067,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 1068,
                                    "end": 1071,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 1068,
                                      "end": 1071,
                                      "value": "9",
                                      "raw": "\"9\""
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 1076,
                            "end": 1090,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1076,
                              "end": 1080,
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1080,
                              "end": 1090,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 1081,
                                  "end": 1089,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 1081,
                                    "end": 1084,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1081,
                                      "end": 1084,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 1085,
                                    "end": 1088,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 1085,
                                      "end": 1088,
                                      "value": "9",
                                      "raw": "\"9\""
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1098,
            "end": 1179,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 1098,
              "end": 1102,
              "value": "10",
              "raw": "\"10\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1102,
              "end": 1179,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1104,
                "end": 1179,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1106,
                    "end": 1122,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1106,
                      "end": 1112,
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1113,
                      "end": 1121,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1115,
                        "end": 1121
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1123,
                    "end": 1137,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1123,
                      "end": 1127,
                      "value": "10",
                      "raw": "\"10\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1128,
                      "end": 1136,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1130,
                        "end": 1136
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1138,
                    "end": 1177,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1138,
                      "end": 1141,
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1142,
                      "end": 1176,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 1144,
                        "end": 1176,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 1144,
                            "end": 1158,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1144,
                              "end": 1147,
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1147,
                              "end": 1158,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 1148,
                                  "end": 1157,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 1148,
                                    "end": 1151,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1148,
                                      "end": 1151,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 1152,
                                    "end": 1156,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 1152,
                                      "end": 1156,
                                      "value": "10",
                                      "raw": "\"10\""
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 1161,
                            "end": 1176,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1161,
                              "end": 1165,
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1165,
                              "end": 1176,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 1166,
                                  "end": 1175,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 1166,
                                    "end": 1169,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1166,
                                      "end": 1169,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 1170,
                                    "end": 1174,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 1170,
                                      "end": 1174,
                                      "value": "10",
                                      "raw": "\"10\""
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1184,
            "end": 1265,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 1184,
              "end": 1188,
              "value": "11",
              "raw": "\"11\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1188,
              "end": 1265,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1190,
                "end": 1265,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1192,
                    "end": 1208,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1192,
                      "end": 1198,
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1199,
                      "end": 1207,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1201,
                        "end": 1207
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1209,
                    "end": 1223,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1209,
                      "end": 1213,
                      "value": "11",
                      "raw": "\"11\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1214,
                      "end": 1222,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1216,
                        "end": 1222
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1224,
                    "end": 1263,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1224,
                      "end": 1227,
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1228,
                      "end": 1262,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 1230,
                        "end": 1262,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 1230,
                            "end": 1244,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1230,
                              "end": 1233,
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1233,
                              "end": 1244,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 1234,
                                  "end": 1243,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 1234,
                                    "end": 1237,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1234,
                                      "end": 1237,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 1238,
                                    "end": 1242,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 1238,
                                      "end": 1242,
                                      "value": "11",
                                      "raw": "\"11\""
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 1247,
                            "end": 1262,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1247,
                              "end": 1251,
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1251,
                              "end": 1262,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 1252,
                                  "end": 1261,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 1252,
                                    "end": 1255,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1252,
                                      "end": 1255,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 1256,
                                    "end": 1260,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 1256,
                                      "end": 1260,
                                      "value": "11",
                                      "raw": "\"11\""
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1270,
            "end": 1351,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 1270,
              "end": 1274,
              "value": "12",
              "raw": "\"12\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1274,
              "end": 1351,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1276,
                "end": 1351,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1278,
                    "end": 1294,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1278,
                      "end": 1284,
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1285,
                      "end": 1293,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1287,
                        "end": 1293
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1295,
                    "end": 1309,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1295,
                      "end": 1299,
                      "value": "12",
                      "raw": "\"12\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1300,
                      "end": 1308,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1302,
                        "end": 1308
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1310,
                    "end": 1349,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1310,
                      "end": 1313,
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1314,
                      "end": 1348,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 1316,
                        "end": 1348,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 1316,
                            "end": 1330,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1316,
                              "end": 1319,
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1319,
                              "end": 1330,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 1320,
                                  "end": 1329,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 1320,
                                    "end": 1323,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1320,
                                      "end": 1323,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 1324,
                                    "end": 1328,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 1324,
                                      "end": 1328,
                                      "value": "12",
                                      "raw": "\"12\""
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 1333,
                            "end": 1348,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1333,
                              "end": 1337,
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1337,
                              "end": 1348,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 1338,
                                  "end": 1347,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 1338,
                                    "end": 1341,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1338,
                                      "end": 1341,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 1342,
                                    "end": 1346,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 1342,
                                      "end": 1346,
                                      "value": "12",
                                      "raw": "\"12\""
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1356,
            "end": 1437,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 1356,
              "end": 1360,
              "value": "13",
              "raw": "\"13\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1360,
              "end": 1437,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1362,
                "end": 1437,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1364,
                    "end": 1380,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1364,
                      "end": 1370,
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1371,
                      "end": 1379,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1373,
                        "end": 1379
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1381,
                    "end": 1395,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1381,
                      "end": 1385,
                      "value": "13",
                      "raw": "\"13\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1386,
                      "end": 1394,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1388,
                        "end": 1394
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1396,
                    "end": 1435,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1396,
                      "end": 1399,
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1400,
                      "end": 1434,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 1402,
                        "end": 1434,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 1402,
                            "end": 1416,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1402,
                              "end": 1405,
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1405,
                              "end": 1416,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 1406,
                                  "end": 1415,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 1406,
                                    "end": 1409,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1406,
                                      "end": 1409,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 1410,
                                    "end": 1414,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 1410,
                                      "end": 1414,
                                      "value": "13",
                                      "raw": "\"13\""
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 1419,
                            "end": 1434,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1419,
                              "end": 1423,
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1423,
                              "end": 1434,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 1424,
                                  "end": 1433,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 1424,
                                    "end": 1427,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1424,
                                      "end": 1427,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 1428,
                                    "end": 1432,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 1428,
                                      "end": 1432,
                                      "value": "13",
                                      "raw": "\"13\""
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1442,
            "end": 1523,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 1442,
              "end": 1446,
              "value": "14",
              "raw": "\"14\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1446,
              "end": 1523,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1448,
                "end": 1523,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1450,
                    "end": 1466,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1450,
                      "end": 1456,
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1457,
                      "end": 1465,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1459,
                        "end": 1465
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1467,
                    "end": 1481,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1467,
                      "end": 1471,
                      "value": "14",
                      "raw": "\"14\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1472,
                      "end": 1480,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1474,
                        "end": 1480
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1482,
                    "end": 1521,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1482,
                      "end": 1485,
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1486,
                      "end": 1520,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 1488,
                        "end": 1520,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 1488,
                            "end": 1502,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1488,
                              "end": 1491,
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1491,
                              "end": 1502,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 1492,
                                  "end": 1501,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 1492,
                                    "end": 1495,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1492,
                                      "end": 1495,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 1496,
                                    "end": 1500,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 1496,
                                      "end": 1500,
                                      "value": "14",
                                      "raw": "\"14\""
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 1505,
                            "end": 1520,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1505,
                              "end": 1509,
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1509,
                              "end": 1520,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 1510,
                                  "end": 1519,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 1510,
                                    "end": 1513,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1510,
                                      "end": 1513,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 1514,
                                    "end": 1518,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 1514,
                                      "end": 1518,
                                      "value": "14",
                                      "raw": "\"14\""
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1528,
            "end": 1609,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 1528,
              "end": 1532,
              "value": "15",
              "raw": "\"15\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1532,
              "end": 1609,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1534,
                "end": 1609,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1536,
                    "end": 1552,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1536,
                      "end": 1542,
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1543,
                      "end": 1551,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1545,
                        "end": 1551
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1553,
                    "end": 1567,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1553,
                      "end": 1557,
                      "value": "15",
                      "raw": "\"15\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1558,
                      "end": 1566,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1560,
                        "end": 1566
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1568,
                    "end": 1607,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1568,
                      "end": 1571,
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1572,
                      "end": 1606,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 1574,
                        "end": 1606,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 1574,
                            "end": 1588,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1574,
                              "end": 1577,
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1577,
                              "end": 1588,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 1578,
                                  "end": 1587,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 1578,
                                    "end": 1581,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1578,
                                      "end": 1581,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 1582,
                                    "end": 1586,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 1582,
                                      "end": 1586,
                                      "value": "15",
                                      "raw": "\"15\""
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 1591,
                            "end": 1606,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1591,
                              "end": 1595,
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1595,
                              "end": 1606,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 1596,
                                  "end": 1605,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 1596,
                                    "end": 1599,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1596,
                                      "end": 1599,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 1600,
                                    "end": 1604,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 1600,
                                      "end": 1604,
                                      "value": "15",
                                      "raw": "\"15\""
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1614,
            "end": 1695,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 1614,
              "end": 1618,
              "value": "16",
              "raw": "\"16\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1618,
              "end": 1695,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1620,
                "end": 1695,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1622,
                    "end": 1638,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1622,
                      "end": 1628,
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1629,
                      "end": 1637,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1631,
                        "end": 1637
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1639,
                    "end": 1653,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1639,
                      "end": 1643,
                      "value": "16",
                      "raw": "\"16\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1644,
                      "end": 1652,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1646,
                        "end": 1652
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1654,
                    "end": 1693,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1654,
                      "end": 1657,
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1658,
                      "end": 1692,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 1660,
                        "end": 1692,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 1660,
                            "end": 1674,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1660,
                              "end": 1663,
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1663,
                              "end": 1674,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 1664,
                                  "end": 1673,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 1664,
                                    "end": 1667,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1664,
                                      "end": 1667,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 1668,
                                    "end": 1672,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 1668,
                                      "end": 1672,
                                      "value": "16",
                                      "raw": "\"16\""
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 1677,
                            "end": 1692,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1677,
                              "end": 1681,
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1681,
                              "end": 1692,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 1682,
                                  "end": 1691,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 1682,
                                    "end": 1685,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1682,
                                      "end": 1685,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 1686,
                                    "end": 1690,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 1686,
                                      "end": 1690,
                                      "value": "16",
                                      "raw": "\"16\""
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1700,
            "end": 1781,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 1700,
              "end": 1704,
              "value": "17",
              "raw": "\"17\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1704,
              "end": 1781,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1706,
                "end": 1781,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1708,
                    "end": 1724,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1708,
                      "end": 1714,
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1715,
                      "end": 1723,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1717,
                        "end": 1723
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1725,
                    "end": 1739,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 1725,
                      "end": 1729,
                      "value": "17",
                      "raw": "\"17\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1730,
                      "end": 1738,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1732,
                        "end": 1738
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1740,
                    "end": 1779,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1740,
                      "end": 1743,
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1744,
                      "end": 1778,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 1746,
                        "end": 1778,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 1746,
                            "end": 1760,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1746,
                              "end": 1749,
                              "decorators": [],
                              "name": "Obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1749,
                              "end": 1760,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 1750,
                                  "end": 1759,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 1750,
                                    "end": 1753,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1750,
                                      "end": 1753,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 1754,
                                    "end": 1758,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 1754,
                                      "end": 1758,
                                      "value": "17",
                                      "raw": "\"17\""
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 1763,
                            "end": 1778,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1763,
                              "end": 1767,
                              "decorators": [],
                              "name": "Func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1767,
                              "end": 1778,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 1768,
                                  "end": 1777,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 1768,
                                    "end": 1771,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1768,
                                      "end": 1771,
                                      "decorators": [],
                                      "name": "Big",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSLiteralType",
                                    "start": 1772,
                                    "end": 1776,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 1772,
                                      "end": 1776,
                                      "value": "17",
                                      "raw": "\"17\""
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "type": "TSDeclareFunction",
      "start": 1784,
      "end": 1854,
      "id": {
        "type": "Identifier",
        "start": 1801,
        "end": 1808,
        "decorators": [],
        "name": "getCtor",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1808,
        "end": 1829,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1809,
            "end": 1828,
            "name": {
              "type": "Identifier",
              "start": 1809,
              "end": 1810,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1819,
              "end": 1828,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1825,
                "end": 1828,
                "typeName": {
                  "type": "Identifier",
                  "start": 1825,
                  "end": 1828,
                  "decorators": [],
                  "name": "Big",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1830,
          "end": 1837,
          "decorators": [],
          "name": "comp",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1834,
            "end": 1837,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1836,
              "end": 1837,
              "typeName": {
                "type": "Identifier",
                "start": 1836,
                "end": 1837,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1838,
        "end": 1854,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1840,
          "end": 1854,
          "typeName": {
            "type": "Identifier",
            "start": 1840,
            "end": 1846,
            "decorators": [],
            "name": "CtorOf",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1846,
            "end": 1854,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1847,
                "end": 1853,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1847,
                  "end": 1850,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1847,
                    "end": 1850,
                    "decorators": [],
                    "name": "Big",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1851,
                  "end": 1852,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1851,
                    "end": 1852,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1856,
      "end": 1883,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1868,
          "end": 1882,
          "id": {
            "type": "Identifier",
            "start": 1868,
            "end": 1882,
            "decorators": [],
            "name": "all",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1871,
              "end": 1882,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 1873,
                "end": 1882,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1879,
                  "end": 1882,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1879,
                    "end": 1882,
                    "decorators": [],
                    "name": "Big",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1884,
      "end": 1910,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1890,
          "end": 1909,
          "id": {
            "type": "Identifier",
            "start": 1890,
            "end": 1894,
            "decorators": [],
            "name": "ctor",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1897,
            "end": 1909,
            "callee": {
              "type": "Identifier",
              "start": 1897,
              "end": 1904,
              "decorators": [],
              "name": "getCtor",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1905,
                "end": 1908,
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1911,
      "end": 1973,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1917,
          "end": 1972,
          "id": {
            "type": "Identifier",
            "start": 1917,
            "end": 1921,
            "decorators": [],
            "name": "comp",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1924,
            "end": 1972,
            "callee": {
              "type": "Identifier",
              "start": 1924,
              "end": 1928,
              "decorators": [],
              "name": "ctor",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 1929,
                "end": 1971,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1931,
                    "end": 1943,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1931,
                      "end": 1937,
                      "decorators": [],
                      "name": "common",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1939,
                      "end": 1943,
                      "value": "ok",
                      "raw": "\"ok\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1945,
                    "end": 1969,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1945,
                      "end": 1948,
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 1950,
                      "end": 1969,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1950,
                          "end": 1951,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "start": 1955,
                        "end": 1969,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1955,
                          "end": 1966,
                          "object": {
                            "type": "Identifier",
                            "start": 1955,
                            "end": 1962,
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1963,
                            "end": 1966,
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1967,
                            "end": 1968,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
