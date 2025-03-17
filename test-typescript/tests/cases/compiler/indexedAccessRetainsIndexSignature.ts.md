__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 424,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "name": "Diff",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 51,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 29,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 20,
              "end": 29,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 26,
                "end": 29
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 31,
            "end": 50,
            "name": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 41,
              "end": 50,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 47,
                "end": 50
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 58,
        "end": 125,
        "objectType": {
          "type": "TSIntersectionType",
          "start": 59,
          "end": 121,
          "types": [
            {
              "type": "TSMappedType",
              "start": 59,
              "end": 74,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 62,
                "end": 68,
                "name": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 67,
                  "end": 68,
                  "typeName": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "name": "T",
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
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 71,
                "end": 72,
                "typeName": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeReference",
                "start": 67,
                "end": 68,
                "typeName": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 68,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "key": {
                "type": "Identifier",
                "start": 62,
                "end": 63,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            {
              "type": "TSMappedType",
              "start": 77,
              "end": 96,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 80,
                "end": 86,
                "name": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 81,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 85,
                  "end": 86,
                  "typeName": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 86,
                    "name": "U",
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
              "nameType": null,
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 89,
                "end": 94
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeReference",
                "start": 85,
                "end": 86,
                "typeName": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "key": {
                "type": "Identifier",
                "start": 80,
                "end": 81,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            {
              "type": "TSTypeLiteral",
              "start": 99,
              "end": 121,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 101,
                  "end": 119,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 102,
                      "end": 111,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 103,
                        "end": 111,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 105,
                          "end": 111
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 112,
                    "end": 119,
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "start": 114,
                      "end": 119
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            }
          ]
        },
        "indexType": {
          "type": "TSTypeReference",
          "start": 123,
          "end": 124,
          "typeName": {
            "type": "Identifier",
            "start": 123,
            "end": 124,
            "name": "T",
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
      "start": 126,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 135,
        "name": "Omit",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 135,
        "end": 157,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 136,
            "end": 137,
            "name": {
              "type": "Identifier",
              "start": 136,
              "end": 137,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 139,
            "end": 156,
            "name": {
              "type": "Identifier",
              "start": 139,
              "end": 140,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 149,
              "end": 156,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 155,
                "end": 156,
                "typeName": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 160,
        "end": 185,
        "typeName": {
          "type": "Identifier",
          "start": 160,
          "end": 164,
          "name": "Pick",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 164,
          "end": 185,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 165,
              "end": 166,
              "typeName": {
                "type": "Identifier",
                "start": 165,
                "end": 166,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 168,
              "end": 184,
              "typeName": {
                "type": "Identifier",
                "start": 168,
                "end": 172,
                "name": "Diff",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 172,
                "end": 184,
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "start": 173,
                    "end": 180,
                    "operator": "keyof",
                    "typeAnnotation": {
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
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 182,
                    "end": 183,
                    "typeName": {
                      "type": "Identifier",
                      "start": 182,
                      "end": 183,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 186,
      "end": 247,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 196,
        "name": "Omit1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 196,
        "end": 218,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 197,
            "end": 198,
            "name": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 200,
            "end": 217,
            "name": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 210,
              "end": 217,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 216,
                "end": 217,
                "typeName": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 217,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 221,
        "end": 246,
        "typeName": {
          "type": "Identifier",
          "start": 221,
          "end": 225,
          "name": "Pick",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 225,
          "end": 246,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 226,
              "end": 227,
              "typeName": {
                "type": "Identifier",
                "start": 226,
                "end": 227,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 229,
              "end": 245,
              "typeName": {
                "type": "Identifier",
                "start": 229,
                "end": 233,
                "name": "Diff",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 233,
                "end": 245,
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "start": 234,
                    "end": 241,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 240,
                      "end": 241,
                      "typeName": {
                        "type": "Identifier",
                        "start": 240,
                        "end": 241,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 243,
                    "end": 244,
                    "typeName": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 244,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 280,
      "end": 347,
      "id": {
        "type": "Identifier",
        "start": 285,
        "end": 290,
        "name": "Omit2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 290,
        "end": 312,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 291,
            "end": 292,
            "name": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
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
            "start": 294,
            "end": 311,
            "name": {
              "type": "Identifier",
              "start": 294,
              "end": 295,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 304,
              "end": 311,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 310,
                "end": 311,
                "typeName": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 311,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 315,
        "end": 346,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 317,
          "end": 338,
          "name": {
            "type": "Identifier",
            "start": 317,
            "end": 318,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 322,
            "end": 338,
            "typeName": {
              "type": "Identifier",
              "start": 322,
              "end": 326,
              "name": "Diff",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 326,
              "end": 338,
              "params": [
                {
                  "type": "TSTypeOperator",
                  "start": 327,
                  "end": 334,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 333,
                    "end": 334,
                    "typeName": {
                      "type": "Identifier",
                      "start": 333,
                      "end": 334,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 336,
                  "end": 337,
                  "typeName": {
                    "type": "Identifier",
                    "start": 336,
                    "end": 337,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 341,
          "end": 345,
          "objectType": {
            "type": "TSTypeReference",
            "start": 341,
            "end": 342,
            "typeName": {
              "type": "Identifier",
              "start": 341,
              "end": 342,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 343,
            "end": 344,
            "typeName": {
              "type": "Identifier",
              "start": 343,
              "end": 344,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 322,
          "end": 338,
          "typeName": {
            "type": "Identifier",
            "start": 322,
            "end": 326,
            "name": "Diff",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 326,
            "end": 338,
            "params": [
              {
                "type": "TSTypeOperator",
                "start": 327,
                "end": 334,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 333,
                  "end": 334,
                  "typeName": {
                    "type": "Identifier",
                    "start": 333,
                    "end": 334,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 336,
                "end": 337,
                "typeName": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 337,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "key": {
          "type": "Identifier",
          "start": 317,
          "end": 318,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 349,
      "end": 393,
      "id": {
        "type": "Identifier",
        "start": 354,
        "end": 355,
        "name": "O",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 358,
        "end": 393,
        "typeName": {
          "type": "Identifier",
          "start": 358,
          "end": 362,
          "name": "Omit",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 362,
          "end": 393,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 363,
              "end": 387,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 365,
                  "end": 375,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 365,
                    "end": 366,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 366,
                    "end": 374,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 368,
                      "end": 374
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 376,
                  "end": 385,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 376,
                    "end": 377,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 377,
                    "end": 385,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 379,
                      "end": 385
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            {
              "type": "TSLiteralType",
              "start": 389,
              "end": 392,
              "literal": {
                "type": "Literal",
                "start": 389,
                "end": 392,
                "value": "a",
                "raw": "'a'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 394,
      "end": 423,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 401,
        "end": 423,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 407,
            "end": 423,
            "id": {
              "type": "Identifier",
              "start": 407,
              "end": 411,
              "name": "o",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 408,
                "end": 411,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 410,
                  "end": 411,
                  "typeName": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 411,
                    "name": "O",
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
              "type": "ObjectExpression",
              "start": 414,
              "end": 423,
              "properties": [
                {
                  "type": "Property",
                  "start": 416,
                  "end": 421,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 417,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 419,
                    "end": 421,
                    "value": "",
                    "raw": "''"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
