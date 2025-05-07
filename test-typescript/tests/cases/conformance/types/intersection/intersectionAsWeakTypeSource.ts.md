__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 540,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 25,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 25,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 23,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
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
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 26,
      "end": 51,
      "body": {
        "type": "TSInterfaceBody",
        "start": 38,
        "end": 51,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 40,
            "end": 49,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
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
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 43,
                "end": 49
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 52,
      "end": 79,
      "body": {
        "type": "TSInterfaceBody",
        "start": 64,
        "end": 79,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 66,
            "end": 77,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 77,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 70,
                "end": 77
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 81,
      "end": 97,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 88,
        "decorators": [],
        "name": "XY",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 91,
        "end": 96,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 91,
            "end": 92,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 95,
            "end": 96,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 129,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 128,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 110,
            "decorators": [],
            "name": "xy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 110,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 108,
                "end": 110,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 110,
                  "decorators": [],
                  "name": "XY",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 113,
            "end": 128,
            "properties": [
              {
                "type": "Property",
                "start": 114,
                "end": 120,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 115,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 117,
                  "end": 120,
                  "raw": "'x'",
                  "value": "x",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 122,
                "end": 127,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 125,
                  "end": 127,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 147,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 142,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 142,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 141,
                "end": 142,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 142,
                  "decorators": [],
                  "name": "Z",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 145,
            "end": 147,
            "decorators": [],
            "name": "xy",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 191,
      "end": 254,
      "body": {
        "type": "TSInterfaceBody",
        "start": 211,
        "end": 254,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 217,
            "end": 229,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 221,
              "decorators": [],
              "name": "view",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 229,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 223,
                "end": 229
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 234,
            "end": 252,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 234,
              "end": 244,
              "decorators": [],
              "name": "styleMedia",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 244,
              "end": 252,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 246,
                "end": 252
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 210,
        "decorators": [],
        "name": "ViewStyle",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 255,
      "end": 294,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 265,
        "decorators": [],
        "name": "Brand",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 271,
        "end": 294,
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 271,
            "end": 277
          },
          {
            "type": "TSTypeLiteral",
            "start": 280,
            "end": 294,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 282,
                "end": 292,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 289,
                  "decorators": [],
                  "name": "__brand",
                  "optional": false,
                  "typeAnnotation": null
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 291,
                      "end": 292,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 265,
        "end": 268,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 266,
            "end": 267,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 295,
      "end": 401,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 312,
        "end": 318,
        "decorators": [],
        "name": "create",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 357,
          "end": 366,
          "decorators": [],
          "name": "styles",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 363,
            "end": 366,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 365,
              "end": 366,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 365,
                "end": 366,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 367,
        "end": 400,
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 369,
          "end": 400,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 377,
            "end": 384,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 383,
              "end": 384,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 383,
                "end": 384,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 372,
            "end": 373,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "nameType": null,
          "optional": false,
          "readonly": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 387,
            "end": 398,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 392,
              "end": 398,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 393,
                  "end": 397,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 395,
                    "end": 396,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 395,
                      "end": 396,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 393,
                    "end": 394,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 393,
                      "end": 394,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 387,
              "end": 392,
              "decorators": [],
              "name": "Brand",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 318,
        "end": 356,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 319,
            "end": 355,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 329,
              "end": 355,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 331,
                  "end": 353,
                  "accessibility": null,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 332,
                      "end": 341,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 333,
                        "end": 341,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 335,
                          "end": 341
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 342,
                    "end": 353,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 344,
                      "end": 353,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 344,
                        "end": 353,
                        "decorators": [],
                        "name": "ViewStyle",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 319,
              "end": 320,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 402,
      "end": 468,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 408,
          "end": 467,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 415,
            "decorators": [],
            "name": "wrapped",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 418,
            "end": 467,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 425,
                "end": 466,
                "properties": [
                  {
                    "type": "Property",
                    "start": 427,
                    "end": 464,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 427,
                      "end": 432,
                      "decorators": [],
                      "name": "first",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 434,
                      "end": 464,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 436,
                          "end": 443,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 436,
                            "end": 440,
                            "decorators": [],
                            "name": "view",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 442,
                            "end": 443,
                            "raw": "0",
                            "value": 0,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 445,
                          "end": 462,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 445,
                            "end": 455,
                            "decorators": [],
                            "name": "styleMedia",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 457,
                            "end": 462,
                            "raw": "\"???\"",
                            "value": "???",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 418,
              "end": 424,
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 469,
      "end": 504,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 475,
          "end": 504,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 475,
            "end": 488,
            "decorators": [],
            "name": "vs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 477,
              "end": 488,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 479,
                "end": 488,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 488,
                  "decorators": [],
                  "name": "ViewStyle",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 491,
            "end": 504,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 491,
              "end": 498,
              "decorators": [],
              "name": "wrapped",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 499,
              "end": 504,
              "decorators": [],
              "name": "first",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
