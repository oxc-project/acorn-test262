__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 367,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 43,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 16,
        "decorators": [],
        "name": "AnyFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 19,
        "end": 42,
        "params": [
          {
            "type": "RestElement",
            "start": 20,
            "end": 34,
            "argument": {
              "type": "Identifier",
              "start": 23,
              "end": 27,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 34,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 29,
                "end": 34,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 29,
                  "end": 32
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 36,
          "end": 42,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 39,
            "end": 42
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 44,
      "end": 97,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 55,
        "decorators": [],
        "name": "Params",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 61,
        "end": 96,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 71,
          "end": 96,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 72,
              "end": 95,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 79,
                "end": 95,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 80,
                    "end": 81,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 81,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 83,
                    "end": 94,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 83,
                      "end": 94,
                      "decorators": [],
                      "name": "AnyFunction",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 72,
                "end": 79,
                "decorators": [],
                "name": "Extract",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 61,
          "end": 71,
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 55,
        "end": 58,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 56,
            "end": 57,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
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
      "type": "TSInterfaceDeclaration",
      "start": 99,
      "end": 188,
      "body": {
        "type": "TSInterfaceBody",
        "start": 120,
        "end": 188,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 123,
            "end": 186,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 127,
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 147,
                "end": 155,
                "decorators": [],
                "name": "event",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 152,
                  "end": 155,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 154,
                    "end": 155,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 155,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 157,
                "end": 178,
                "argument": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 164,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 164,
                  "end": 178,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 166,
                    "end": 178,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 172,
                      "end": 178,
                      "params": [
                        {
                          "type": "TSIndexedAccessType",
                          "start": 173,
                          "end": 177,
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 175,
                            "end": 176,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 175,
                              "end": 176,
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 173,
                            "end": 174,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 173,
                              "end": 174,
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
                      "start": 166,
                      "end": 172,
                      "decorators": [],
                      "name": "Params",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "value": null
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 185,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 181,
                "end": 185
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 127,
              "end": 146,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 128,
                  "end": 145,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 138,
                    "end": 145,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 144,
                      "end": 145,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 145,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 129,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 116,
        "decorators": [],
        "name": "Wrapper",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 116,
        "end": 119,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 117,
            "end": 118,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
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
      "type": "TSInterfaceDeclaration",
      "start": 190,
      "end": 226,
      "body": {
        "type": "TSInterfaceBody",
        "start": 209,
        "end": 226,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 212,
            "end": 224,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 215,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 217,
              "end": 223,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 219,
                "end": 223
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 208,
        "decorators": [],
        "name": "AWrapped",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 228,
      "end": 264,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 236,
        "end": 264,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 239,
            "end": 262,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 239,
              "end": 242,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 242,
              "end": 261,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 244,
                "end": 261,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 251,
                  "end": 261,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 252,
                      "end": 260,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 252,
                        "end": 260,
                        "decorators": [],
                        "name": "AWrapped",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 251,
                  "decorators": [],
                  "name": "Wrapper",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 235,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 266,
      "end": 319,
      "body": {
        "type": "TSInterfaceBody",
        "start": 302,
        "end": 319,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 305,
            "end": 317,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 305,
              "end": 308,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 310,
              "end": 316,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 312,
                "end": 316
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 293,
          "end": 301,
          "expression": {
            "type": "Identifier",
            "start": 293,
            "end": 301,
            "decorators": [],
            "name": "AWrapped",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 284,
        "decorators": [],
        "name": "BWrapped",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 321,
      "end": 367,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 339,
        "end": 367,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 342,
            "end": 365,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 342,
              "end": 345,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 345,
              "end": 364,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 347,
                "end": 364,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 354,
                  "end": 364,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 355,
                      "end": 363,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 355,
                        "end": 363,
                        "decorators": [],
                        "name": "BWrapped",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 354,
                  "decorators": [],
                  "name": "Wrapper",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 327,
        "end": 328,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 337,
        "end": 338,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
