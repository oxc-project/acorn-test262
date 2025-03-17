__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 250,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 151,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 151,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 19,
          "name": "Handler",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 19,
          "end": 48,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 20,
              "end": 32,
              "name": {
                "type": "Identifier",
                "start": 20,
                "end": 26,
                "name": "TEvent",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 29,
                "end": 32
              },
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 34,
              "end": 47,
              "name": {
                "type": "Identifier",
                "start": 34,
                "end": 41,
                "name": "TResult",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 44,
                "end": 47
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 51,
          "end": 150,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 57,
              "end": 70,
              "name": "event",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 62,
                "end": 70,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 64,
                  "end": 70,
                  "typeName": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 70,
                    "name": "TEvent",
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
            {
              "type": "Identifier",
              "start": 76,
              "end": 87,
              "name": "context",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 83,
                "end": 87,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 85,
                  "end": 87,
                  "members": []
                }
              },
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 93,
              "end": 120,
              "name": "callback",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 101,
                "end": 120,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 103,
                  "end": 120,
                  "typeName": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 111,
                    "name": "Callback",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 111,
                    "end": 120,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 112,
                        "end": 119,
                        "typeName": {
                          "type": "Identifier",
                          "start": 112,
                          "end": 119,
                          "name": "TResult",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 124,
            "end": 150,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 127,
              "end": 150,
              "types": [
                {
                  "type": "TSVoidKeyword",
                  "start": 127,
                  "end": 131
                },
                {
                  "type": "TSTypeReference",
                  "start": 134,
                  "end": 150,
                  "typeName": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 141,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 141,
                    "end": 150,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 142,
                        "end": 149,
                        "typeName": {
                          "type": "Identifier",
                          "start": 142,
                          "end": 149,
                          "name": "TResult",
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
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 153,
      "end": 249,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 160,
        "end": 249,
        "id": {
          "type": "Identifier",
          "start": 165,
          "end": 173,
          "name": "Callback",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 173,
          "end": 188,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 174,
              "end": 187,
              "name": {
                "type": "Identifier",
                "start": 174,
                "end": 181,
                "name": "TResult",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 184,
                "end": 187
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 191,
          "end": 248,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 192,
              "end": 221,
              "name": "error",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 198,
                "end": 221,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 200,
                  "end": 221,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 200,
                      "end": 205,
                      "typeName": {
                        "type": "Identifier",
                        "start": 200,
                        "end": 205,
                        "name": "Error",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 208,
                      "end": 214
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 217,
                      "end": 221
                    }
                  ]
                }
              },
              "decorators": [],
              "optional": true
            },
            {
              "type": "Identifier",
              "start": 223,
              "end": 239,
              "name": "result",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 230,
                "end": 239,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 232,
                  "end": 239,
                  "typeName": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 239,
                    "name": "TResult",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": true
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 241,
            "end": 248,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 244,
              "end": 248
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1027,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 47,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 16,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "name": "Handler",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "name": "Handler",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 18,
          "end": 26,
          "imported": {
            "type": "Identifier",
            "start": 18,
            "end": 26,
            "name": "Callback",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 18,
            "end": 26,
            "name": "Callback",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 34,
        "end": 46,
        "value": "aws-lambda",
        "raw": "'aws-lambda'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 48,
      "end": 910,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 78,
        "name": "lambdaTester",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 79,
        "end": 910,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 85,
            "end": 173,
            "id": {
              "type": "Identifier",
              "start": 90,
              "end": 102,
              "name": "HandlerEvent",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 102,
              "end": 121,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 103,
                  "end": 120,
                  "name": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 104,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 113,
                    "end": 120,
                    "typeName": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 120,
                      "name": "Handler",
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
              "start": 124,
              "end": 172,
              "checkType": {
                "type": "TSTypeReference",
                "start": 124,
                "end": 125,
                "typeName": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 125,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 134,
                "end": 155,
                "typeName": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 141,
                  "name": "Handler",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 141,
                  "end": 155,
                  "params": [
                    {
                      "type": "TSInferType",
                      "start": 142,
                      "end": 154,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 148,
                        "end": 154,
                        "name": {
                          "type": "Identifier",
                          "start": 148,
                          "end": 154,
                          "name": "TEvent",
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
                    }
                  ]
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 158,
                "end": 164,
                "typeName": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 164,
                  "name": "TEvent",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 167,
                "end": 172
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 178,
            "end": 274,
            "id": {
              "type": "Identifier",
              "start": 183,
              "end": 196,
              "name": "HandlerResult",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 196,
              "end": 215,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 197,
                  "end": 214,
                  "name": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 198,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 207,
                    "end": 214,
                    "typeName": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 214,
                      "name": "Handler",
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
              "start": 218,
              "end": 273,
              "checkType": {
                "type": "TSTypeReference",
                "start": 218,
                "end": 219,
                "typeName": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 219,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 228,
                "end": 255,
                "typeName": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 235,
                  "name": "Handler",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 235,
                  "end": 255,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 236,
                      "end": 239
                    },
                    {
                      "type": "TSInferType",
                      "start": 241,
                      "end": 254,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 247,
                        "end": 254,
                        "name": {
                          "type": "Identifier",
                          "start": 247,
                          "end": 254,
                          "name": "TResult",
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
                    }
                  ]
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 258,
                "end": 265,
                "typeName": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 265,
                  "name": "TResult",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 268,
                "end": 273
              }
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 279,
            "end": 430,
            "id": {
              "type": "Identifier",
              "start": 284,
              "end": 296,
              "name": "HandlerError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 296,
              "end": 315,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 297,
                  "end": 314,
                  "name": {
                    "type": "Identifier",
                    "start": 297,
                    "end": 298,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 307,
                    "end": 314,
                    "typeName": {
                      "type": "Identifier",
                      "start": 307,
                      "end": 314,
                      "name": "Handler",
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
              "start": 318,
              "end": 429,
              "checkType": {
                "type": "TSTypeReference",
                "start": 318,
                "end": 319,
                "typeName": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 319,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 328,
                "end": 355,
                "typeName": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 335,
                  "name": "Handler",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 335,
                  "end": 355,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 336,
                      "end": 339
                    },
                    {
                      "type": "TSInferType",
                      "start": 341,
                      "end": 354,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 347,
                        "end": 354,
                        "name": {
                          "type": "Identifier",
                          "start": 347,
                          "end": 354,
                          "name": "TResult",
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
                    }
                  ]
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 366,
                "end": 413,
                "typeName": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 377,
                  "name": "NonNullable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 377,
                  "end": 413,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 378,
                      "end": 412,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 378,
                        "end": 407,
                        "typeName": {
                          "type": "Identifier",
                          "start": 378,
                          "end": 388,
                          "name": "Parameters",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 388,
                          "end": 407,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 389,
                              "end": 406,
                              "typeName": {
                                "type": "Identifier",
                                "start": 389,
                                "end": 397,
                                "name": "Callback",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 397,
                                "end": 406,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 398,
                                    "end": 405,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 398,
                                      "end": 405,
                                      "name": "TResult",
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
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 408,
                        "end": 411,
                        "literal": {
                          "type": "Literal",
                          "start": 408,
                          "end": 411,
                          "value": "0",
                          "raw": "'0'"
                        }
                      }
                    }
                  ]
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 424,
                "end": 429
              }
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 436,
            "end": 590,
            "id": {
              "type": "Identifier",
              "start": 446,
              "end": 456,
              "name": "VerifierFn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 456,
              "end": 459,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 457,
                  "end": 458,
                  "name": {
                    "type": "Identifier",
                    "start": 457,
                    "end": 458,
                    "name": "S",
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
            "body": {
              "type": "TSInterfaceBody",
              "start": 460,
              "end": 590,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 470,
                  "end": 522,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 471,
                      "end": 480,
                      "name": "result",
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
                            "name": "S",
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
                    {
                      "type": "Identifier",
                      "start": 482,
                      "end": 498,
                      "name": "additional",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 493,
                        "end": 498,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 495,
                          "end": 498
                        }
                      },
                      "decorators": [],
                      "optional": true
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 499,
                    "end": 521,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 501,
                      "end": 521,
                      "types": [
                        {
                          "type": "TSVoidKeyword",
                          "start": 501,
                          "end": 505
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 508,
                          "end": 521,
                          "typeName": {
                            "type": "Identifier",
                            "start": 508,
                            "end": 515,
                            "name": "Promise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 515,
                            "end": 521,
                            "params": [
                              {
                                "type": "TSVoidKeyword",
                                "start": 516,
                                "end": 520
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 531,
                  "end": 584,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 532,
                      "end": 541,
                      "name": "result",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 538,
                        "end": 541,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 540,
                          "end": 541,
                          "typeName": {
                            "type": "Identifier",
                            "start": 540,
                            "end": 541,
                            "name": "S",
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
                    {
                      "type": "Identifier",
                      "start": 543,
                      "end": 559,
                      "name": "additional",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 554,
                        "end": 559,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 556,
                          "end": 559
                        }
                      },
                      "decorators": [],
                      "optional": true
                    },
                    {
                      "type": "Identifier",
                      "start": 561,
                      "end": 576,
                      "name": "done",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 566,
                        "end": 576,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 568,
                          "end": 576,
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 571,
                            "end": 576,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 574,
                              "end": 576,
                              "members": []
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": true
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 577,
                    "end": 583,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 579,
                      "end": 583
                    }
                  }
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 595,
            "end": 812,
            "id": {
              "type": "Identifier",
              "start": 600,
              "end": 608,
              "name": "Verifier",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 608,
              "end": 611,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 609,
                  "end": 610,
                  "name": {
                    "type": "Identifier",
                    "start": 609,
                    "end": 610,
                    "name": "S",
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
              "start": 614,
              "end": 811,
              "checkType": {
                "type": "TSTypeReference",
                "start": 614,
                "end": 615,
                "typeName": {
                  "type": "Identifier",
                  "start": 614,
                  "end": 615,
                  "name": "S",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 624,
                "end": 645,
                "typeName": {
                  "type": "Identifier",
                  "start": 624,
                  "end": 636,
                  "name": "HandlerError",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 636,
                  "end": 645,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 637,
                      "end": 644,
                      "typeName": {
                        "type": "Identifier",
                        "start": 637,
                        "end": 644,
                        "name": "Handler",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "trueType": {
                "type": "TSConditionalType",
                "start": 656,
                "end": 787,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 656,
                  "end": 657,
                  "typeName": {
                    "type": "Identifier",
                    "start": 656,
                    "end": 657,
                    "name": "S",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "extendsType": {
                  "type": "TSStringKeyword",
                  "start": 666,
                  "end": 672
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "start": 687,
                  "end": 705,
                  "typeName": {
                    "type": "Identifier",
                    "start": 687,
                    "end": 697,
                    "name": "VerifierFn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 697,
                    "end": 705,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 698,
                        "end": 704
                      }
                    ]
                  }
                },
                "falseType": {
                  "type": "TSConditionalType",
                  "start": 720,
                  "end": 787,
                  "checkType": {
                    "type": "TSTypeReference",
                    "start": 720,
                    "end": 721,
                    "typeName": {
                      "type": "Identifier",
                      "start": 720,
                      "end": 721,
                      "name": "S",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "extendsType": {
                    "type": "TSTypeReference",
                    "start": 730,
                    "end": 735,
                    "typeName": {
                      "type": "Identifier",
                      "start": 730,
                      "end": 735,
                      "name": "Error",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "start": 750,
                    "end": 767,
                    "typeName": {
                      "type": "Identifier",
                      "start": 750,
                      "end": 760,
                      "name": "VerifierFn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 760,
                      "end": 767,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 761,
                          "end": 766,
                          "typeName": {
                            "type": "Identifier",
                            "start": 761,
                            "end": 766,
                            "name": "Error",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "falseType": {
                    "type": "TSNeverKeyword",
                    "start": 782,
                    "end": 787
                  }
                }
              },
              "falseType": {
                "type": "TSTypeReference",
                "start": 798,
                "end": 811,
                "typeName": {
                  "type": "Identifier",
                  "start": 798,
                  "end": 808,
                  "name": "VerifierFn",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 808,
                  "end": 811,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 809,
                      "end": 810,
                      "typeName": {
                        "type": "Identifier",
                        "start": 809,
                        "end": 810,
                        "name": "S",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 818,
            "end": 908,
            "id": {
              "type": "Identifier",
              "start": 824,
              "end": 836,
              "name": "LambdaTester",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 856,
              "end": 908,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 866,
                  "end": 902,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 866,
                    "end": 871,
                    "name": "event",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 871,
                    "end": 902,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 872,
                        "end": 894,
                        "name": "event",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 877,
                          "end": 894,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 879,
                            "end": 894,
                            "typeName": {
                              "type": "Identifier",
                              "start": 879,
                              "end": 891,
                              "name": "HandlerEvent",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 891,
                              "end": 894,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 892,
                                  "end": 893,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 892,
                                    "end": 893,
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
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 895,
                      "end": 901,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 897,
                        "end": 901
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
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 836,
              "end": 855,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 837,
                  "end": 854,
                  "name": {
                    "type": "Identifier",
                    "start": 837,
                    "end": 838,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 847,
                    "end": 854,
                    "typeName": {
                      "type": "Identifier",
                      "start": 847,
                      "end": 854,
                      "name": "Handler",
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
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 912,
      "end": 1003,
      "id": {
        "type": "Identifier",
        "start": 929,
        "end": 941,
        "name": "lambdaTester",
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
          "start": 961,
          "end": 971,
          "name": "handler",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 968,
            "end": 971,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 970,
              "end": 971,
              "typeName": {
                "type": "Identifier",
                "start": 970,
                "end": 971,
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
        "start": 941,
        "end": 960,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 942,
            "end": 959,
            "name": {
              "type": "Identifier",
              "start": 942,
              "end": 943,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 952,
              "end": 959,
              "typeName": {
                "type": "Identifier",
                "start": 952,
                "end": 959,
                "name": "Handler",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 972,
        "end": 1002,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 974,
          "end": 1002,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 974,
            "end": 999,
            "left": {
              "type": "Identifier",
              "start": 974,
              "end": 986,
              "name": "lambdaTester",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 987,
              "end": 999,
              "name": "LambdaTester",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 999,
            "end": 1002,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1000,
                "end": 1001,
                "typeName": {
                  "type": "Identifier",
                  "start": 1000,
                  "end": 1001,
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
      "type": "TSExportAssignment",
      "start": 1005,
      "end": 1027,
      "expression": {
        "type": "Identifier",
        "start": 1014,
        "end": 1026,
        "name": "lambdaTester",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 245,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 46,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 24,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 24,
            "name": "lambdaTester",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 30,
        "end": 45,
        "value": "lambda-tester",
        "raw": "'lambda-tester'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 47,
      "end": 84,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 56,
          "end": 63,
          "imported": {
            "type": "Identifier",
            "start": 56,
            "end": 63,
            "name": "Handler",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 56,
            "end": 63,
            "name": "Handler",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 71,
        "end": 83,
        "value": "aws-lambda",
        "raw": "'aws-lambda'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 86,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 97,
        "name": "Actual",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 100,
        "end": 158,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 100,
          "end": 121,
          "left": {
            "type": "Identifier",
            "start": 100,
            "end": 112,
            "name": "lambdaTester",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 113,
            "end": 121,
            "name": "Verifier",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 121,
          "end": 158,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 122,
              "end": 157,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 122,
                "end": 148,
                "left": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 134,
                  "name": "lambdaTester",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 148,
                  "name": "HandlerResult",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 148,
                "end": 157,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 149,
                    "end": 156,
                    "typeName": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 156,
                      "name": "Handler",
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
      "start": 160,
      "end": 245,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 173,
        "name": "Expected",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 176,
        "end": 244,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 176,
          "end": 197,
          "left": {
            "type": "Identifier",
            "start": 176,
            "end": 188,
            "name": "lambdaTester",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 189,
            "end": 197,
            "name": "Verifier",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 197,
          "end": 244,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 198,
              "end": 243,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 198,
                "end": 224,
                "left": {
                  "type": "Identifier",
                  "start": 198,
                  "end": 210,
                  "name": "lambdaTester",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 224,
                  "name": "HandlerResult",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 224,
                "end": 243,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 225,
                    "end": 242,
                    "typeName": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 232,
                      "name": "Handler",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 232,
                      "end": 242,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 233,
                          "end": 236
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 238,
                          "end": 241
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
