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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 16,
        "name": "AnyFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 19,
        "end": 42,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "start": 20,
            "end": 34,
            "argument": {
              "type": "Identifier",
              "start": 23,
              "end": 27,
              "name": "args",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 44,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 55,
        "name": "Params",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
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
        "type": "TSTypeReference",
        "start": 61,
        "end": 96,
        "typeName": {
          "type": "Identifier",
          "start": 61,
          "end": 71,
          "name": "Parameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 71,
          "end": 96,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 72,
              "end": 95,
              "typeName": {
                "type": "Identifier",
                "start": 72,
                "end": 79,
                "name": "Extract",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 79,
                "end": 95,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 80,
                    "end": 81,
                    "typeName": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 81,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 83,
                    "end": 94,
                    "typeName": {
                      "type": "Identifier",
                      "start": 83,
                      "end": 94,
                      "name": "AnyFunction",
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
      "type": "TSInterfaceDeclaration",
      "start": 99,
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 116,
        "name": "Wrapper",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 116,
        "end": 119,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 117,
            "end": 118,
            "name": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 120,
        "end": 188,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 123,
            "end": 186,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 127,
              "name": "call",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 127,
              "end": 146,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 128,
                  "end": 145,
                  "name": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 129,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 138,
                    "end": 145,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 144,
                      "end": 145,
                      "typeName": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 145,
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
            "params": [
              {
                "type": "Identifier",
                "start": 147,
                "end": 155,
                "name": "event",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 152,
                  "end": 155,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 154,
                    "end": 155,
                    "typeName": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 155,
                      "name": "K",
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
                "type": "RestElement",
                "start": 157,
                "end": 178,
                "argument": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 164,
                  "name": "args",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 172,
                      "name": "Params",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 172,
                      "end": 178,
                      "params": [
                        {
                          "type": "TSIndexedAccessType",
                          "start": 173,
                          "end": 177,
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 173,
                            "end": 174,
                            "typeName": {
                              "type": "Identifier",
                              "start": 173,
                              "end": 174,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 175,
                            "end": 176,
                            "typeName": {
                              "type": "Identifier",
                              "start": 175,
                              "end": 176,
                              "name": "K",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      ]
                    }
                  }
                },
                "value": null
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 190,
      "end": 226,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 208,
        "name": "AWrapped",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 209,
        "end": 226,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 212,
            "end": 224,
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 215,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 228,
      "end": 264,
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 235,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 236,
        "end": 264,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 239,
            "end": 262,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 239,
              "end": 242,
              "name": "foo",
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
              "start": 242,
              "end": 261,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 244,
                "end": 261,
                "typeName": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 251,
                  "name": "Wrapper",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 251,
                  "end": 261,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 252,
                      "end": 260,
                      "typeName": {
                        "type": "Identifier",
                        "start": 252,
                        "end": 260,
                        "name": "AWrapped",
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
      "type": "TSInterfaceDeclaration",
      "start": 266,
      "end": 319,
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 284,
        "name": "BWrapped",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 293,
          "end": 301,
          "expression": {
            "type": "Identifier",
            "start": 293,
            "end": 301,
            "name": "AWrapped",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 302,
        "end": 319,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 305,
            "end": 317,
            "key": {
              "type": "Identifier",
              "start": 305,
              "end": 308,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 321,
      "end": 367,
      "id": {
        "type": "Identifier",
        "start": 327,
        "end": 328,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 337,
        "end": 338,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 339,
        "end": 367,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 342,
            "end": 365,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 342,
              "end": 345,
              "name": "foo",
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
              "start": 345,
              "end": 364,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 347,
                "end": 364,
                "typeName": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 354,
                  "name": "Wrapper",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 354,
                  "end": 364,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 355,
                      "end": 363,
                      "typeName": {
                        "type": "Identifier",
                        "start": 355,
                        "end": 363,
                        "name": "BWrapped",
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
