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
          "decorators": [],
          "name": "Handler",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "TEvent",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "TResult",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "event",
              "optional": false,
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
                    "decorators": [],
                    "name": "TEvent",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            {
              "type": "Identifier",
              "start": 76,
              "end": 87,
              "decorators": [],
              "name": "context",
              "optional": false,
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
              }
            },
            {
              "type": "Identifier",
              "start": 93,
              "end": 120,
              "decorators": [],
              "name": "callback",
              "optional": false,
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
                    "decorators": [],
                    "name": "Callback",
                    "optional": false,
                    "typeAnnotation": null
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
                          "decorators": [],
                          "name": "TResult",
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
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
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
                          "decorators": [],
                          "name": "TResult",
                          "optional": false,
                          "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "Callback",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "TResult",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "error",
              "optional": true,
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
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
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
              }
            },
            {
              "type": "Identifier",
              "start": 223,
              "end": 239,
              "decorators": [],
              "name": "result",
              "optional": true,
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
                    "decorators": [],
                    "name": "TResult",
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
      "exportKind": "type",
      "attributes": []
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
            "decorators": [],
            "name": "Handler",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "decorators": [],
            "name": "Handler",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "Callback",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 18,
            "end": 26,
            "decorators": [],
            "name": "Callback",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "decorators": [],
        "name": "lambdaTester",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "HandlerEvent",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 113,
                    "end": 120,
                    "typeName": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 120,
                      "decorators": [],
                      "name": "Handler",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Handler",
                  "optional": false,
                  "typeAnnotation": null
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
                          "decorators": [],
                          "name": "TEvent",
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
                  "decorators": [],
                  "name": "TEvent",
                  "optional": false,
                  "typeAnnotation": null
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
              "decorators": [],
              "name": "HandlerResult",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 207,
                    "end": 214,
                    "typeName": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 214,
                      "decorators": [],
                      "name": "Handler",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Handler",
                  "optional": false,
                  "typeAnnotation": null
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
                          "decorators": [],
                          "name": "TResult",
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
                  "decorators": [],
                  "name": "TResult",
                  "optional": false,
                  "typeAnnotation": null
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
              "decorators": [],
              "name": "HandlerError",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 307,
                    "end": 314,
                    "typeName": {
                      "type": "Identifier",
                      "start": 307,
                      "end": 314,
                      "decorators": [],
                      "name": "Handler",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Handler",
                  "optional": false,
                  "typeAnnotation": null
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
                          "decorators": [],
                          "name": "TResult",
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
                  "decorators": [],
                  "name": "NonNullable",
                  "optional": false,
                  "typeAnnotation": null
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
                          "decorators": [],
                          "name": "Parameters",
                          "optional": false,
                          "typeAnnotation": null
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
                                "decorators": [],
                                "name": "Callback",
                                "optional": false,
                                "typeAnnotation": null
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
                                      "decorators": [],
                                      "name": "TResult",
                                      "optional": false,
                                      "typeAnnotation": null
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
              "decorators": [],
              "name": "VerifierFn",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "decorators": [],
                    "name": "S",
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
                      "decorators": [],
                      "name": "result",
                      "optional": false,
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
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 482,
                      "end": 498,
                      "decorators": [],
                      "name": "additional",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 493,
                        "end": 498,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 495,
                          "end": 498
                        }
                      }
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
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
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
                      "decorators": [],
                      "name": "result",
                      "optional": false,
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
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 543,
                      "end": 559,
                      "decorators": [],
                      "name": "additional",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 554,
                        "end": 559,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 556,
                          "end": 559
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 561,
                      "end": 576,
                      "decorators": [],
                      "name": "done",
                      "optional": true,
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
                      }
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
              "decorators": [],
              "name": "Verifier",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "S",
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
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "HandlerError",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Handler",
                        "optional": false,
                        "typeAnnotation": null
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
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "VerifierFn",
                    "optional": false,
                    "typeAnnotation": null
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
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "VerifierFn",
                      "optional": false,
                      "typeAnnotation": null
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
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "VerifierFn",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 824,
              "end": 836,
              "decorators": [],
              "name": "LambdaTester",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 847,
                    "end": 854,
                    "typeName": {
                      "type": "Identifier",
                      "start": 847,
                      "end": 854,
                      "decorators": [],
                      "name": "Handler",
                      "optional": false,
                      "typeAnnotation": null
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
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 856,
              "end": 908,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 866,
                  "end": 902,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 866,
                    "end": 871,
                    "decorators": [],
                    "name": "event",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 871,
                    "end": 902,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 872,
                        "end": 894,
                        "decorators": [],
                        "name": "event",
                        "optional": false,
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
                              "decorators": [],
                              "name": "HandlerEvent",
                              "optional": false,
                              "typeAnnotation": null
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
                      "start": 895,
                      "end": 901,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 897,
                        "end": 901
                      }
                    },
                    "body": null,
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
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
        "decorators": [],
        "name": "lambdaTester",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 952,
              "end": 959,
              "typeName": {
                "type": "Identifier",
                "start": 952,
                "end": 959,
                "decorators": [],
                "name": "Handler",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 961,
          "end": 971,
          "decorators": [],
          "name": "handler",
          "optional": false,
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
              "decorators": [],
              "name": "lambdaTester",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 987,
              "end": 999,
              "decorators": [],
              "name": "LambdaTester",
              "optional": false,
              "typeAnnotation": null
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSExportAssignment",
      "start": 1005,
      "end": 1027,
      "expression": {
        "type": "Identifier",
        "start": 1014,
        "end": 1026,
        "decorators": [],
        "name": "lambdaTester",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "name": "lambdaTester",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "Handler",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 56,
            "end": 63,
            "decorators": [],
            "name": "Handler",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "decorators": [],
        "name": "Actual",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "name": "lambdaTester",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 113,
            "end": 121,
            "decorators": [],
            "name": "Verifier",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "lambdaTester",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 148,
                  "decorators": [],
                  "name": "HandlerResult",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Handler",
                      "optional": false,
                      "typeAnnotation": null
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
        "decorators": [],
        "name": "Expected",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "name": "lambdaTester",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 189,
            "end": 197,
            "decorators": [],
            "name": "Verifier",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "lambdaTester",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 224,
                  "decorators": [],
                  "name": "HandlerResult",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Handler",
                      "optional": false,
                      "typeAnnotation": null
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
