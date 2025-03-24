__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 653,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 30,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 19,
              "name": "propA",
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
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              }
            },
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
    },
    {
      "type": "ClassDeclaration",
      "start": 32,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 40,
        "end": 62,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 46,
            "end": 60,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 51,
              "name": "propB",
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
              "start": 51,
              "end": 59,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 53,
                "end": 59
              }
            },
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
    },
    {
      "type": "ClassDeclaration",
      "start": 64,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 71,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 80,
        "end": 81,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 82,
        "end": 104,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 88,
            "end": 102,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 93,
              "name": "propC",
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
              "start": 93,
              "end": 101,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 95,
                "end": 101
              }
            },
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
    },
    {
      "type": "TSDeclareFunction",
      "start": 106,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 126,
        "name": "isB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 127,
          "end": 129,
          "name": "p1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 130,
        "end": 139,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 132,
          "end": 139,
          "parameterName": {
            "type": "Identifier",
            "start": 132,
            "end": 134,
            "name": "p1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 138,
            "end": 139,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 138,
              "end": 139,
              "typeName": {
                "type": "Identifier",
                "start": 138,
                "end": 139,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 141,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 161,
        "name": "isC",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 162,
          "end": 164,
          "name": "p1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 165,
        "end": 174,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 167,
          "end": 174,
          "parameterName": {
            "type": "Identifier",
            "start": 167,
            "end": 169,
            "name": "p1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 173,
            "end": 174,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 173,
              "end": 174,
              "typeName": {
                "type": "Identifier",
                "start": 173,
                "end": 174,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 176,
      "end": 204,
      "id": {
        "type": "Identifier",
        "start": 193,
        "end": 197,
        "name": "retC",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 198,
          "end": 199,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 200,
        "end": 203,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 202,
          "end": 203,
          "typeName": {
            "type": "Identifier",
            "start": 202,
            "end": 203,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 207,
      "end": 250,
      "id": {
        "type": "Identifier",
        "start": 224,
        "end": 228,
        "name": "funA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 232,
          "end": 245,
          "name": "p1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 234,
            "end": 245,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 236,
              "end": 245,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 237,
                  "end": 239,
                  "name": "p1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 241,
                "end": 245,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 244,
                  "end": 245,
                  "typeName": {
                    "type": "Identifier",
                    "start": 244,
                    "end": 245,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 228,
        "end": 231,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 229,
            "end": 230,
            "name": {
              "type": "Identifier",
              "start": 229,
              "end": 230,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 246,
        "end": 249,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 248,
          "end": 249,
          "typeName": {
            "type": "Identifier",
            "start": 248,
            "end": 249,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 251,
      "end": 309,
      "id": {
        "type": "Identifier",
        "start": 268,
        "end": 272,
        "name": "funB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 276,
          "end": 289,
          "name": "p1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 278,
            "end": 289,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 280,
              "end": 289,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 281,
                  "end": 283,
                  "name": "p1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 285,
                "end": 289,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 288,
                  "end": 289,
                  "typeName": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 289,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 291,
          "end": 298,
          "name": "p2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 293,
            "end": 298,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 295,
              "end": 298
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 272,
        "end": 275,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 273,
            "end": 274,
            "name": {
              "type": "Identifier",
              "start": 273,
              "end": 274,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 299,
        "end": 308,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 301,
          "end": 308,
          "parameterName": {
            "type": "Identifier",
            "start": 301,
            "end": 303,
            "name": "p2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 307,
            "end": 308,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 307,
              "end": 308,
              "typeName": {
                "type": "Identifier",
                "start": 307,
                "end": 308,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 310,
      "end": 359,
      "id": {
        "type": "Identifier",
        "start": 327,
        "end": 331,
        "name": "funC",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 335,
          "end": 354,
          "name": "p1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 337,
            "end": 354,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 339,
              "end": 354,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 340,
                  "end": 342,
                  "name": "p1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 344,
                "end": 354,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 347,
                  "end": 354,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 347,
                    "end": 349,
                    "name": "p1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 353,
                    "end": 354,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 353,
                      "end": 354,
                      "typeName": {
                        "type": "Identifier",
                        "start": 353,
                        "end": 354,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 331,
        "end": 334,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 332,
            "end": 333,
            "name": {
              "type": "Identifier",
              "start": 332,
              "end": 333,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 355,
        "end": 358,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 357,
          "end": 358,
          "typeName": {
            "type": "Identifier",
            "start": 357,
            "end": 358,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 360,
      "end": 424,
      "id": {
        "type": "Identifier",
        "start": 377,
        "end": 381,
        "name": "funD",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 385,
          "end": 404,
          "name": "p1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 387,
            "end": 404,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 389,
              "end": 404,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 390,
                  "end": 392,
                  "name": "p1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 394,
                "end": 404,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 397,
                  "end": 404,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 397,
                    "end": 399,
                    "name": "p1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 403,
                    "end": 404,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 403,
                      "end": 404,
                      "typeName": {
                        "type": "Identifier",
                        "start": 403,
                        "end": 404,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 406,
          "end": 413,
          "name": "p2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 408,
            "end": 413,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 410,
              "end": 413
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 381,
        "end": 384,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 382,
            "end": 383,
            "name": {
              "type": "Identifier",
              "start": 382,
              "end": 383,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 414,
        "end": 423,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 416,
          "end": 423,
          "parameterName": {
            "type": "Identifier",
            "start": 416,
            "end": 418,
            "name": "p2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 422,
            "end": 423,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 422,
              "end": 423,
              "typeName": {
                "type": "Identifier",
                "start": 422,
                "end": 423,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 425,
      "end": 484,
      "id": {
        "type": "Identifier",
        "start": 442,
        "end": 446,
        "name": "funE",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 453,
          "end": 472,
          "name": "p1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 455,
            "end": 472,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 457,
              "end": 472,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 458,
                  "end": 460,
                  "name": "p1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 462,
                "end": 472,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 465,
                  "end": 472,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 465,
                    "end": 467,
                    "name": "p1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 471,
                    "end": 472,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 471,
                      "end": 472,
                      "typeName": {
                        "type": "Identifier",
                        "start": 471,
                        "end": 472,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 474,
          "end": 479,
          "name": "p2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 476,
            "end": 479,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 478,
              "end": 479,
              "typeName": {
                "type": "Identifier",
                "start": 478,
                "end": 479,
                "name": "U",
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 446,
        "end": 452,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 447,
            "end": 448,
            "name": {
              "type": "Identifier",
              "start": 447,
              "end": 448,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 450,
            "end": 451,
            "name": {
              "type": "Identifier",
              "start": 450,
              "end": 451,
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
        "start": 480,
        "end": 483,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 482,
          "end": 483,
          "typeName": {
            "type": "Identifier",
            "start": 482,
            "end": 483,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 486,
      "end": 495,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 490,
          "end": 494,
          "id": {
            "type": "Identifier",
            "start": 490,
            "end": 494,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 491,
              "end": 494,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 493,
                "end": 494,
                "typeName": {
                  "type": "Identifier",
                  "start": 493,
                  "end": 494,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 496,
      "end": 527,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 500,
          "end": 526,
          "id": {
            "type": "Identifier",
            "start": 500,
            "end": 514,
            "name": "test1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 505,
              "end": 514,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 507,
                "end": 514
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 517,
            "end": 526,
            "callee": {
              "type": "Identifier",
              "start": 517,
              "end": 521,
              "name": "funA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 522,
                "end": 525,
                "name": "isB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 528,
      "end": 563,
      "test": {
        "type": "CallExpression",
        "start": 532,
        "end": 545,
        "callee": {
          "type": "Identifier",
          "start": 532,
          "end": 536,
          "name": "funB",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 537,
            "end": 541,
            "name": "retC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 543,
            "end": 544,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 547,
        "end": 563,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 553,
            "end": 561,
            "expression": {
              "type": "MemberExpression",
              "start": 553,
              "end": 560,
              "object": {
                "type": "Identifier",
                "start": 553,
                "end": 554,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 555,
                "end": 560,
                "name": "propC",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 564,
      "end": 589,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 568,
          "end": 588,
          "id": {
            "type": "Identifier",
            "start": 568,
            "end": 576,
            "name": "test2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 573,
              "end": 576,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 575,
                "end": 576,
                "typeName": {
                  "type": "Identifier",
                  "start": 575,
                  "end": 576,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 579,
            "end": 588,
            "callee": {
              "type": "Identifier",
              "start": 579,
              "end": 583,
              "name": "funC",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 584,
                "end": 587,
                "name": "isB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 590,
      "end": 624,
      "test": {
        "type": "CallExpression",
        "start": 594,
        "end": 606,
        "callee": {
          "type": "Identifier",
          "start": 594,
          "end": 598,
          "name": "funD",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 599,
            "end": 602,
            "name": "isC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 604,
            "end": 605,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 608,
        "end": 624,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 614,
            "end": 622,
            "expression": {
              "type": "MemberExpression",
              "start": 614,
              "end": 621,
              "object": {
                "type": "Identifier",
                "start": 614,
                "end": 615,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 616,
                "end": 621,
                "name": "propC",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 625,
      "end": 653,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 629,
          "end": 652,
          "id": {
            "type": "Identifier",
            "start": 629,
            "end": 637,
            "name": "test3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 634,
              "end": 637,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 636,
                "end": 637,
                "typeName": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 637,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 640,
            "end": 652,
            "callee": {
              "type": "Identifier",
              "start": 640,
              "end": 644,
              "name": "funE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 645,
                "end": 648,
                "name": "isB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 650,
                "end": 651,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
