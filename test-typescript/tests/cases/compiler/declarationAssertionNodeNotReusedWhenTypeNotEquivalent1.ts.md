__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 535,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 12,
        "name": "Wrapper",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 18,
        "end": 33,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 31,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 27,
              "name": "_type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 30,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 29,
                "end": 30,
                "typeName": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "type": "TSDeclareFunction",
      "start": 36,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 66,
        "name": "stringWrapper",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 68,
        "end": 85,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 70,
          "end": 85,
          "typeName": {
            "type": "Identifier",
            "start": 70,
            "end": 77,
            "name": "Wrapper",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 88,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 115,
        "name": "objWrapper",
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
          "start": 159,
          "end": 165,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 162,
            "end": 165,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 164,
              "end": 165,
              "typeName": {
                "type": "Identifier",
                "start": 164,
                "end": 165,
                "name": "T",
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
        "start": 115,
        "end": 155,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 116,
            "end": 154,
            "name": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 126,
              "end": 154,
              "typeName": {
                "type": "Identifier",
                "start": 126,
                "end": 132,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 148,
                      "name": "Wrapper",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 168,
        "end": 180,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 170,
          "end": 180,
          "typeName": {
            "type": "Identifier",
            "start": 170,
            "end": 177,
            "name": "Wrapper",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 177,
            "end": 180,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 178,
                "end": 179,
                "typeName": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 179,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
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
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 194,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 197,
            "end": 258,
            "callee": {
              "type": "Identifier",
              "start": 197,
              "end": 207,
              "name": "objWrapper",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 212,
                      "end": 217,
                      "name": "prop1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "TSAsExpression",
                      "start": 219,
                      "end": 254,
                      "expression": {
                        "type": "CallExpression",
                        "start": 219,
                        "end": 234,
                        "callee": {
                          "type": "Identifier",
                          "start": 219,
                          "end": 232,
                          "name": "stringWrapper",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 238,
                        "end": 254,
                        "typeName": {
                          "type": "Identifier",
                          "start": 238,
                          "end": 245,
                          "name": "Wrapper",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                                "value": "hello",
                                "raw": "\"hello\""
                              }
                            }
                          ]
                        }
                      }
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 261,
      "end": 441,
      "id": {
        "type": "Identifier",
        "start": 266,
        "end": 272,
        "name": "Unwrap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 278,
        "end": 440,
        "checkType": {
          "type": "TSTypeReference",
          "start": 278,
          "end": 279,
          "typeName": {
            "type": "Identifier",
            "start": 278,
            "end": 279,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 288,
          "end": 300,
          "typeName": {
            "type": "Identifier",
            "start": 288,
            "end": 295,
            "name": "Wrapper",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 305,
          "end": 430,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 305,
            "end": 315,
            "objectType": {
              "type": "TSTypeReference",
              "start": 305,
              "end": 306,
              "typeName": {
                "type": "Identifier",
                "start": 305,
                "end": 306,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSLiteralType",
              "start": 307,
              "end": 314,
              "literal": {
                "type": "Literal",
                "start": 307,
                "end": 314,
                "value": "_type",
                "raw": "\"_type\""
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 324,
            "end": 352,
            "typeName": {
              "type": "Identifier",
              "start": 324,
              "end": 330,
              "name": "Record",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 339,
                    "end": 346,
                    "name": "Wrapper",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  }
                }
              ]
            }
          },
          "trueType": {
            "type": "TSMappedType",
            "start": 359,
            "end": 413,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 362,
              "end": 385,
              "name": {
                "type": "Identifier",
                "start": 362,
                "end": 365,
                "name": "Key",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 369,
                "end": 385,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 375,
                  "end": 385,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 375,
                    "end": 376,
                    "typeName": {
                      "type": "Identifier",
                      "start": 375,
                      "end": 376,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 377,
                    "end": 384,
                    "literal": {
                      "type": "Literal",
                      "start": 377,
                      "end": 384,
                      "value": "_type",
                      "raw": "\"_type\""
                    }
                  }
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 388,
              "end": 411,
              "typeName": {
                "type": "Identifier",
                "start": 388,
                "end": 394,
                "name": "Unwrap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 394,
                "end": 411,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 395,
                    "end": 410,
                    "objectType": {
                      "type": "TSIndexedAccessType",
                      "start": 395,
                      "end": 405,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 395,
                        "end": 396,
                        "typeName": {
                          "type": "Identifier",
                          "start": 395,
                          "end": 396,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 397,
                        "end": 404,
                        "literal": {
                          "type": "Literal",
                          "start": 397,
                          "end": 404,
                          "value": "_type",
                          "raw": "\"_type\""
                        }
                      }
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 406,
                      "end": 409,
                      "typeName": {
                        "type": "Identifier",
                        "start": 406,
                        "end": 409,
                        "name": "Key",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            },
            "optional": null,
            "readonly": null,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 369,
              "end": 385,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 375,
                "end": 385,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 375,
                  "end": 376,
                  "typeName": {
                    "type": "Identifier",
                    "start": 375,
                    "end": 376,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 377,
                  "end": 384,
                  "literal": {
                    "type": "Literal",
                    "start": 377,
                    "end": 384,
                    "value": "_type",
                    "raw": "\"_type\""
                  }
                }
              }
            },
            "key": {
              "type": "Identifier",
              "start": 362,
              "end": 365,
              "name": "Key",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "start": 420,
            "end": 430,
            "objectType": {
              "type": "TSTypeReference",
              "start": 420,
              "end": 421,
              "typeName": {
                "type": "Identifier",
                "start": 420,
                "end": 421,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSLiteralType",
              "start": 422,
              "end": 429,
              "literal": {
                "type": "Literal",
                "start": 422,
                "end": 429,
                "value": "_type",
                "raw": "\"_type\""
              }
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 435,
          "end": 440
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 443,
      "end": 493,
      "id": {
        "type": "Identifier",
        "start": 460,
        "end": 466,
        "name": "unwrap",
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
          "start": 470,
          "end": 480,
          "name": "wrapper",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 477,
            "end": 480,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 479,
              "end": 480,
              "typeName": {
                "type": "Identifier",
                "start": 479,
                "end": 480,
                "name": "T",
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
        "start": 466,
        "end": 469,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 467,
            "end": 468,
            "name": {
              "type": "Identifier",
              "start": 467,
              "end": 468,
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
        "start": 481,
        "end": 492,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 483,
          "end": 492,
          "typeName": {
            "type": "Identifier",
            "start": 483,
            "end": 489,
            "name": "Unwrap",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 489,
            "end": 492,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 490,
                "end": 491,
                "typeName": {
                  "type": "Identifier",
                  "start": 490,
                  "end": 491,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 495,
      "end": 534,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 502,
        "end": 534,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 508,
            "end": 533,
            "id": {
              "type": "Identifier",
              "start": 508,
              "end": 517,
              "name": "unwrapped",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 520,
              "end": 533,
              "callee": {
                "type": "Identifier",
                "start": 520,
                "end": 526,
                "name": "unwrap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 527,
                  "end": 532,
                  "name": "value",
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
