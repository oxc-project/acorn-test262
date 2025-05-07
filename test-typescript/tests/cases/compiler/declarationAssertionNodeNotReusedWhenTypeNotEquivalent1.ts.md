__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 534,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 34,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 12,
        "decorators": [],
        "name": "Wrapper",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 18,
        "end": 33,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 31,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 27,
              "decorators": [],
              "name": "_type",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 30,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 29,
                "end": 30,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
      "start": 36,
      "end": 86,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 66,
        "decorators": [],
        "name": "stringWrapper",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 68,
        "end": 85,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 70,
          "end": 85,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 77,
            "end": 85,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 78,
                "end": 84
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 70,
            "end": 77,
            "decorators": [],
            "name": "Wrapper",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 88,
      "end": 181,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 115,
        "decorators": [],
        "name": "objWrapper",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 159,
          "end": 165,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 162,
            "end": 165,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 164,
              "end": 165,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 164,
                "end": 165,
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
        "start": 168,
        "end": 180,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 170,
          "end": 180,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 177,
            "end": 180,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 178,
                "end": 179,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 179,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 170,
            "end": 177,
            "decorators": [],
            "name": "Wrapper",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 115,
        "end": 155,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 116,
            "end": 154,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 126,
              "end": 154,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 132,
                "end": 154,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 133,
                    "end": 139
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 141,
                    "end": 153,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 148,
                      "end": 153,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 149,
                          "end": 152
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 148,
                      "decorators": [],
                      "name": "Wrapper",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 126,
                "end": 132,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
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
      "start": 183,
      "end": 259,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 258,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 194,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 197,
            "end": 258,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 208,
                "end": 257,
                "properties": [
                  {
                    "type": "Property",
                    "start": 212,
                    "end": 254,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 212,
                      "end": 217,
                      "decorators": [],
                      "name": "prop1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "TSAsExpression",
                      "start": 219,
                      "end": 254,
                      "expression": {
                        "type": "CallExpression",
                        "start": 219,
                        "end": 234,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 219,
                          "end": 232,
                          "decorators": [],
                          "name": "stringWrapper",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 238,
                        "end": 254,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 245,
                          "end": 254,
                          "params": [
                            {
                              "type": "TSLiteralType",
                              "start": 246,
                              "end": 253,
                              "literal": {
                                "type": "Literal",
                                "start": 246,
                                "end": 253,
                                "raw": "\"hello\"",
                                "value": "hello",
                                "regex": null,
                                "bigint": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 238,
                          "end": 245,
                          "decorators": [],
                          "name": "Wrapper",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 197,
              "end": 207,
              "decorators": [],
              "name": "objWrapper",
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
      "type": "TSTypeAliasDeclaration",
      "start": 261,
      "end": 441,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 266,
        "end": 272,
        "decorators": [],
        "name": "Unwrap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 278,
        "end": 440,
        "checkType": {
          "type": "TSTypeReference",
          "start": 278,
          "end": 279,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 278,
            "end": 279,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 288,
          "end": 300,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 295,
            "end": 300,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 296,
                "end": 299
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 288,
            "end": 295,
            "decorators": [],
            "name": "Wrapper",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 435,
          "end": 440
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 305,
          "end": 430,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 305,
            "end": 315,
            "indexType": {
              "type": "TSLiteralType",
              "start": 307,
              "end": 314,
              "literal": {
                "type": "Literal",
                "start": 307,
                "end": 314,
                "raw": "\"_type\"",
                "value": "_type",
                "regex": null,
                "bigint": null
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 305,
              "end": 306,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 305,
                "end": 306,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 324,
            "end": 352,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 330,
              "end": 352,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 331,
                  "end": 337
                },
                {
                  "type": "TSTypeReference",
                  "start": 339,
                  "end": 351,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 346,
                    "end": 351,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 347,
                        "end": 350
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 339,
                    "end": 346,
                    "decorators": [],
                    "name": "Wrapper",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 324,
              "end": 330,
              "decorators": [],
              "name": "Record",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "start": 420,
            "end": 430,
            "indexType": {
              "type": "TSLiteralType",
              "start": 422,
              "end": 429,
              "literal": {
                "type": "Literal",
                "start": 422,
                "end": 429,
                "raw": "\"_type\"",
                "value": "_type",
                "regex": null,
                "bigint": null
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 420,
              "end": 421,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 420,
                "end": 421,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "trueType": {
            "type": "TSMappedType",
            "start": 359,
            "end": 413,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 369,
              "end": 385,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 375,
                "end": 385,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 377,
                  "end": 384,
                  "literal": {
                    "type": "Literal",
                    "start": 377,
                    "end": 384,
                    "raw": "\"_type\"",
                    "value": "_type",
                    "regex": null,
                    "bigint": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 375,
                  "end": 376,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 375,
                    "end": 376,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "key": {
              "type": "Identifier",
              "start": 362,
              "end": 365,
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null
            },
            "nameType": null,
            "optional": false,
            "readonly": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 388,
              "end": 411,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 394,
                "end": 411,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 395,
                    "end": 410,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 406,
                      "end": 409,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 406,
                        "end": 409,
                        "decorators": [],
                        "name": "Key",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "objectType": {
                      "type": "TSIndexedAccessType",
                      "start": 395,
                      "end": 405,
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 397,
                        "end": 404,
                        "literal": {
                          "type": "Literal",
                          "start": 397,
                          "end": 404,
                          "raw": "\"_type\"",
                          "value": "_type",
                          "regex": null,
                          "bigint": null
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 395,
                        "end": 396,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 395,
                          "end": 396,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 388,
                "end": 394,
                "decorators": [],
                "name": "Unwrap",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 272,
        "end": 275,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 273,
            "end": 274,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 273,
              "end": 274,
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
      "start": 443,
      "end": 493,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 460,
        "end": 466,
        "decorators": [],
        "name": "unwrap",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 470,
          "end": 480,
          "decorators": [],
          "name": "wrapper",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 477,
            "end": 480,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 479,
              "end": 480,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 479,
                "end": 480,
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
        "start": 481,
        "end": 492,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 483,
          "end": 492,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 489,
            "end": 492,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 490,
                "end": 491,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 490,
                  "end": 491,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 483,
            "end": 489,
            "decorators": [],
            "name": "Unwrap",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 466,
        "end": 469,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 467,
            "end": 468,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 467,
              "end": 468,
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
      "type": "ExportNamedDeclaration",
      "start": 495,
      "end": 534,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 502,
        "end": 534,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 508,
            "end": 533,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 508,
              "end": 517,
              "decorators": [],
              "name": "unwrapped",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 520,
              "end": 533,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 527,
                  "end": 532,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 520,
                "end": 526,
                "decorators": [],
                "name": "unwrap",
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
