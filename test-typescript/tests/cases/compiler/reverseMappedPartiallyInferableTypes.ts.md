__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 2376,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 53,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 29,
        "end": 53,
        "id": {
          "type": "Identifier",
          "start": 34,
          "end": 38,
          "name": "Prop",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 38,
          "end": 41,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 39,
              "end": 40,
              "name": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
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
          "start": 44,
          "end": 53,
          "members": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 46,
              "end": 51,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 48,
                "end": 51,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 50,
                  "end": 51,
                  "typeName": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 51,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          ]
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
      "start": 54,
      "end": 88,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 61,
        "end": 88,
        "id": {
          "type": "Identifier",
          "start": 66,
          "end": 74,
          "name": "PropType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 74,
          "end": 77,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 75,
              "end": 76,
              "name": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
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
          "start": 80,
          "end": 87,
          "typeName": {
            "type": "Identifier",
            "start": 80,
            "end": 84,
            "name": "Prop",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 84,
            "end": 87,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 85,
                "end": 86,
                "typeName": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
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
      "start": 89,
      "end": 125,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 96,
        "end": 125,
        "id": {
          "type": "Identifier",
          "start": 101,
          "end": 117,
          "name": "PropDefaultValue",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 117,
          "end": 120,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 118,
              "end": 119,
              "name": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
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
      "start": 128,
      "end": 189,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 135,
        "end": 189,
        "id": {
          "type": "Identifier",
          "start": 140,
          "end": 161,
          "name": "PropValidatorFunction",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 161,
          "end": 164,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 162,
              "end": 163,
              "name": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
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
          "type": "TSFunctionType",
          "start": 167,
          "end": 188,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 168,
              "end": 176,
              "name": "value",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 173,
                "end": 176,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 175,
                  "end": 176,
                  "typeName": {
                    "type": "Identifier",
                    "start": 175,
                    "end": 176,
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
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 178,
            "end": 188,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 181,
              "end": 188
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
      "start": 190,
      "end": 236,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 197,
        "end": 236,
        "id": {
          "type": "Identifier",
          "start": 202,
          "end": 215,
          "name": "PropValidator",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "start": 221,
          "end": 235,
          "typeName": {
            "type": "Identifier",
            "start": 221,
            "end": 232,
            "name": "PropOptions",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 232,
            "end": 235,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 233,
                "end": 234,
                "typeName": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 234,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
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
      "start": 239,
      "end": 394,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 246,
        "end": 394,
        "id": {
          "type": "Identifier",
          "start": 251,
          "end": 262,
          "name": "PropOptions",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 262,
          "end": 265,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 263,
              "end": 264,
              "name": {
                "type": "Identifier",
                "start": 263,
                "end": 264,
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
          "start": 268,
          "end": 394,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 274,
              "end": 292,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 274,
                "end": 278,
                "name": "type",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 278,
                "end": 291,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 280,
                  "end": 291,
                  "typeName": {
                    "type": "Identifier",
                    "start": 280,
                    "end": 288,
                    "name": "PropType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 288,
                    "end": 291,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 289,
                        "end": 290,
                        "typeName": {
                          "type": "Identifier",
                          "start": 289,
                          "end": 290,
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
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 298,
              "end": 326,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 298,
                "end": 303,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 304,
                "end": 325,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 306,
                  "end": 325,
                  "typeName": {
                    "type": "Identifier",
                    "start": 306,
                    "end": 322,
                    "name": "PropDefaultValue",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 322,
                    "end": 325,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 323,
                        "end": 324,
                        "typeName": {
                          "type": "Identifier",
                          "start": 323,
                          "end": 324,
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
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 331,
              "end": 350,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 331,
                "end": 339,
                "name": "required",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 340,
                "end": 349,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 342,
                  "end": 349
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 355,
              "end": 392,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 355,
                "end": 364,
                "name": "validator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 365,
                "end": 391,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 367,
                  "end": 391,
                  "typeName": {
                    "type": "Identifier",
                    "start": 367,
                    "end": 388,
                    "name": "PropValidatorFunction",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 388,
                    "end": 391,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 389,
                        "end": 390,
                        "typeName": {
                          "type": "Identifier",
                          "start": 389,
                          "end": 390,
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
              "accessibility": null,
              "static": false
            }
          ]
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
      "start": 396,
      "end": 478,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 403,
        "end": 478,
        "id": {
          "type": "Identifier",
          "start": 408,
          "end": 429,
          "name": "RecordPropsDefinition",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 429,
          "end": 432,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 430,
              "end": 431,
              "name": {
                "type": "Identifier",
                "start": 430,
                "end": 431,
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
          "type": "TSMappedType",
          "start": 435,
          "end": 478,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 442,
            "end": 454,
            "name": {
              "type": "Identifier",
              "start": 442,
              "end": 443,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 447,
              "end": 454,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 453,
                "end": 454,
                "typeName": {
                  "type": "Identifier",
                  "start": 453,
                  "end": 454,
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
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 457,
            "end": 476,
            "typeName": {
              "type": "Identifier",
              "start": 457,
              "end": 470,
              "name": "PropValidator",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 470,
              "end": 476,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 471,
                  "end": 475,
                  "objectType": {
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
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 473,
                    "end": 474,
                    "typeName": {
                      "type": "Identifier",
                      "start": 473,
                      "end": 474,
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
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 447,
            "end": 454,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 453,
              "end": 454,
              "typeName": {
                "type": "Identifier",
                "start": 453,
                "end": 454,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "key": {
            "type": "Identifier",
            "start": 442,
            "end": 443,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "start": 479,
      "end": 537,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 486,
        "end": 537,
        "id": {
          "type": "Identifier",
          "start": 491,
          "end": 506,
          "name": "PropsDefinition",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 506,
          "end": 509,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 507,
              "end": 508,
              "name": {
                "type": "Identifier",
                "start": 507,
                "end": 508,
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
          "start": 512,
          "end": 536,
          "typeName": {
            "type": "Identifier",
            "start": 512,
            "end": 533,
            "name": "RecordPropsDefinition",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 533,
            "end": 536,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 534,
                "end": 535,
                "typeName": {
                  "type": "Identifier",
                  "start": 534,
                  "end": 535,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
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
      "type": "TSDeclareFunction",
      "start": 540,
      "end": 630,
      "id": {
        "type": "Identifier",
        "start": 557,
        "end": 563,
        "name": "extend",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 567,
          "end": 607,
          "properties": [
            {
              "type": "Property",
              "start": 569,
              "end": 574,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 569,
                "end": 574,
                "name": "props",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 569,
                "end": 574,
                "name": "props",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 576,
            "end": 607,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 578,
              "end": 607,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 580,
                  "end": 605,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 580,
                    "end": 585,
                    "name": "props",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 585,
                    "end": 605,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 587,
                      "end": 605,
                      "typeName": {
                        "type": "Identifier",
                        "start": 587,
                        "end": 602,
                        "name": "PropsDefinition",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 602,
                        "end": 605,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 603,
                            "end": 604,
                            "typeName": {
                              "type": "Identifier",
                              "start": 603,
                              "end": 604,
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
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 563,
        "end": 566,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 564,
            "end": 565,
            "name": {
              "type": "Identifier",
              "start": 564,
              "end": 565,
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
        "start": 608,
        "end": 629,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 611,
          "end": 629,
          "typeName": {
            "type": "Identifier",
            "start": 611,
            "end": 626,
            "name": "PropsDefinition",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 626,
            "end": 629,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 627,
                "end": 628,
                "typeName": {
                  "type": "Identifier",
                  "start": 627,
                  "end": 628,
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
      "type": "TSInterfaceDeclaration",
      "start": 632,
      "end": 672,
      "id": {
        "type": "Identifier",
        "start": 642,
        "end": 648,
        "name": "MyType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 649,
        "end": 672,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 655,
            "end": 670,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 655,
              "end": 660,
              "name": "valid",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 660,
              "end": 669,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 662,
                "end": 669
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
      "type": "VariableDeclaration",
      "start": 674,
      "end": 1032,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 680,
          "end": 1032,
          "id": {
            "type": "Identifier",
            "start": 680,
            "end": 681,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 684,
            "end": 1032,
            "callee": {
              "type": "Identifier",
              "start": 684,
              "end": 690,
              "name": "extend",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 691,
                "end": 1031,
                "properties": [
                  {
                    "type": "Property",
                    "start": 697,
                    "end": 1029,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 697,
                      "end": 702,
                      "name": "props",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 704,
                      "end": 1029,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 714,
                          "end": 860,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 714,
                            "end": 725,
                            "name": "notResolved",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "start": 727,
                            "end": 860,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 741,
                                "end": 773,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 741,
                                  "end": 745,
                                  "name": "type",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "TSAsExpression",
                                  "start": 747,
                                  "end": 773,
                                  "expression": {
                                    "type": "Identifier",
                                    "start": 747,
                                    "end": 753,
                                    "name": "Object",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 757,
                                    "end": 773,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 757,
                                      "end": 765,
                                      "name": "PropType",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 765,
                                      "end": 773,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 766,
                                          "end": 772,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 766,
                                            "end": 772,
                                            "name": "MyType",
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
                                "kind": "init",
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 787,
                                "end": 850,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 787,
                                  "end": 796,
                                  "name": "validator",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 798,
                                  "end": 850,
                                  "id": null,
                                  "expression": false,
                                  "generator": false,
                                  "async": false,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 798,
                                      "end": 799,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 803,
                                    "end": 850,
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "start": 821,
                                        "end": 836,
                                        "argument": {
                                          "type": "MemberExpression",
                                          "start": 828,
                                          "end": 835,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 828,
                                            "end": 829,
                                            "name": "x",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 830,
                                            "end": 835,
                                            "name": "valid",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": false,
                                          "optional": false
                                        }
                                      }
                                    ]
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ]
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 870,
                          "end": 1023,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 870,
                            "end": 878,
                            "name": "explicit",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "start": 880,
                            "end": 1023,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 894,
                                "end": 926,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 894,
                                  "end": 898,
                                  "name": "type",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "TSAsExpression",
                                  "start": 900,
                                  "end": 926,
                                  "expression": {
                                    "type": "Identifier",
                                    "start": 900,
                                    "end": 906,
                                    "name": "Object",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 910,
                                    "end": 926,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 910,
                                      "end": 918,
                                      "name": "PropType",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 918,
                                      "end": 926,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 919,
                                          "end": 925,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 919,
                                            "end": 925,
                                            "name": "MyType",
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
                                "kind": "init",
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 940,
                                "end": 1013,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 940,
                                  "end": 949,
                                  "name": "validator",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 951,
                                  "end": 1013,
                                  "id": null,
                                  "expression": false,
                                  "generator": false,
                                  "async": false,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 952,
                                      "end": 961,
                                      "name": "x",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 953,
                                        "end": 961,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 955,
                                          "end": 961,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 955,
                                            "end": 961,
                                            "name": "MyType",
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
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 966,
                                    "end": 1013,
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "start": 984,
                                        "end": 999,
                                        "argument": {
                                          "type": "MemberExpression",
                                          "start": 991,
                                          "end": 998,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 991,
                                            "end": 992,
                                            "name": "x",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 993,
                                            "end": 998,
                                            "name": "valid",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": false,
                                          "optional": false
                                        }
                                      }
                                    ]
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ]
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
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
      "type": "ExpressionStatement",
      "start": 1034,
      "end": 1044,
      "expression": {
        "type": "MemberExpression",
        "start": 1034,
        "end": 1044,
        "object": {
          "type": "Identifier",
          "start": 1034,
          "end": 1035,
          "name": "r",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1036,
          "end": 1044,
          "name": "explicit",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1045,
      "end": 1058,
      "expression": {
        "type": "MemberExpression",
        "start": 1045,
        "end": 1058,
        "object": {
          "type": "Identifier",
          "start": 1045,
          "end": 1046,
          "name": "r",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1047,
          "end": 1058,
          "name": "notResolved",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1059,
      "end": 1078,
      "expression": {
        "type": "MemberExpression",
        "start": 1059,
        "end": 1078,
        "object": {
          "type": "MemberExpression",
          "start": 1059,
          "end": 1069,
          "object": {
            "type": "Identifier",
            "start": 1059,
            "end": 1060,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1061,
            "end": 1069,
            "name": "explicit",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1070,
          "end": 1078,
          "name": "required",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1079,
      "end": 1101,
      "expression": {
        "type": "MemberExpression",
        "start": 1079,
        "end": 1101,
        "object": {
          "type": "MemberExpression",
          "start": 1079,
          "end": 1092,
          "object": {
            "type": "Identifier",
            "start": 1079,
            "end": 1080,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1081,
            "end": 1092,
            "name": "notResolved",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1093,
          "end": 1101,
          "name": "required",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1134,
      "end": 1206,
      "id": {
        "type": "Identifier",
        "start": 1139,
        "end": 1142,
        "name": "Box",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1142,
        "end": 1145,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1143,
            "end": 1144,
            "name": {
              "type": "Identifier",
              "start": 1143,
              "end": 1144,
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
        "start": 1148,
        "end": 1205,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1154,
            "end": 1167,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1154,
              "end": 1162,
              "name": "contents",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1163,
              "end": 1166,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1165,
                "end": 1166,
                "typeName": {
                  "type": "Identifier",
                  "start": 1165,
                  "end": 1166,
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
          },
          {
            "type": "TSMethodSignature",
            "start": 1172,
            "end": 1203,
            "key": {
              "type": "Identifier",
              "start": 1172,
              "end": 1180,
              "name": "contains",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1182,
                "end": 1192,
                "name": "content",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1189,
                  "end": 1192,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1191,
                    "end": 1192,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1191,
                      "end": 1192,
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1193,
              "end": 1202,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1195,
                "end": 1202
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
      "type": "TSTypeAliasDeclaration",
      "start": 1208,
      "end": 1259,
      "id": {
        "type": "Identifier",
        "start": 1213,
        "end": 1219,
        "name": "Mapped",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1219,
        "end": 1222,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1220,
            "end": 1221,
            "name": {
              "type": "Identifier",
              "start": 1220,
              "end": 1221,
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
        "type": "TSMappedType",
        "start": 1225,
        "end": 1259,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 1232,
          "end": 1244,
          "name": {
            "type": "Identifier",
            "start": 1232,
            "end": 1233,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1237,
            "end": 1244,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1243,
              "end": 1244,
              "typeName": {
                "type": "Identifier",
                "start": 1243,
                "end": 1244,
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
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1247,
          "end": 1256,
          "typeName": {
            "type": "Identifier",
            "start": 1247,
            "end": 1250,
            "name": "Box",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1250,
            "end": 1256,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1251,
                "end": 1255,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1251,
                  "end": 1252,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1251,
                    "end": 1252,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1253,
                  "end": 1254,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1253,
                    "end": 1254,
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
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1237,
          "end": 1244,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1243,
            "end": 1244,
            "typeName": {
              "type": "Identifier",
              "start": 1243,
              "end": 1244,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1232,
          "end": 1233,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1261,
      "end": 1311,
      "id": {
        "type": "Identifier",
        "start": 1278,
        "end": 1280,
        "name": "id",
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
          "start": 1284,
          "end": 1298,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1287,
            "end": 1298,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1289,
              "end": 1298,
              "typeName": {
                "type": "Identifier",
                "start": 1289,
                "end": 1295,
                "name": "Mapped",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1295,
                "end": 1298,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1296,
                    "end": 1297,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1296,
                      "end": 1297,
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
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1280,
        "end": 1283,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1281,
            "end": 1282,
            "name": {
              "type": "Identifier",
              "start": 1281,
              "end": 1282,
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
        "start": 1299,
        "end": 1310,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1301,
          "end": 1310,
          "typeName": {
            "type": "Identifier",
            "start": 1301,
            "end": 1307,
            "name": "Mapped",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1307,
            "end": 1310,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1308,
                "end": 1309,
                "typeName": {
                  "type": "Identifier",
                  "start": 1308,
                  "end": 1309,
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
      "start": 1353,
      "end": 1412,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1359,
          "end": 1411,
          "id": {
            "type": "Identifier",
            "start": 1359,
            "end": 1363,
            "name": "obj1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1366,
            "end": 1411,
            "callee": {
              "type": "Identifier",
              "start": 1366,
              "end": 1368,
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 1369,
                "end": 1410,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1375,
                    "end": 1408,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1375,
                      "end": 1378,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 1380,
                      "end": 1408,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1390,
                          "end": 1402,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1390,
                            "end": 1398,
                            "name": "contents",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1400,
                            "end": 1402,
                            "value": "",
                            "raw": "\"\""
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
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
      "type": "VariableDeclaration",
      "start": 1455,
      "end": 1580,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1461,
          "end": 1579,
          "id": {
            "type": "Identifier",
            "start": 1461,
            "end": 1465,
            "name": "obj2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1468,
            "end": 1579,
            "callee": {
              "type": "Identifier",
              "start": 1468,
              "end": 1470,
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 1471,
                "end": 1578,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1477,
                    "end": 1576,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1477,
                      "end": 1480,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 1482,
                      "end": 1576,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1492,
                          "end": 1504,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1492,
                            "end": 1500,
                            "name": "contents",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1502,
                            "end": 1504,
                            "value": "",
                            "raw": "\"\""
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1514,
                          "end": 1570,
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1514,
                            "end": 1522,
                            "name": "contains",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 1522,
                            "end": 1570,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1523,
                                "end": 1524,
                                "name": "k",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 1526,
                              "end": 1570,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 1540,
                                  "end": 1560,
                                  "argument": {
                                    "type": "BinaryExpression",
                                    "start": 1547,
                                    "end": 1559,
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 1547,
                                      "end": 1555,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 1547,
                                        "end": 1548,
                                        "name": "k",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1549,
                                        "end": 1555,
                                        "name": "length",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "operator": ">",
                                    "right": {
                                      "type": "Literal",
                                      "start": 1558,
                                      "end": 1559,
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
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
      "type": "VariableDeclaration",
      "start": 1621,
      "end": 1724,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1627,
          "end": 1723,
          "id": {
            "type": "Identifier",
            "start": 1627,
            "end": 1631,
            "name": "obj3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1634,
            "end": 1723,
            "callee": {
              "type": "Identifier",
              "start": 1634,
              "end": 1636,
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 1637,
                "end": 1722,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1643,
                    "end": 1720,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1643,
                      "end": 1646,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 1648,
                      "end": 1720,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1658,
                          "end": 1714,
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1658,
                            "end": 1666,
                            "name": "contains",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 1666,
                            "end": 1714,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1667,
                                "end": 1668,
                                "name": "k",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 1670,
                              "end": 1714,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 1684,
                                  "end": 1704,
                                  "argument": {
                                    "type": "BinaryExpression",
                                    "start": 1691,
                                    "end": 1703,
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 1691,
                                      "end": 1699,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 1691,
                                        "end": 1692,
                                        "name": "k",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1693,
                                        "end": 1699,
                                        "name": "length",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "operator": ">",
                                    "right": {
                                      "type": "Literal",
                                      "start": 1702,
                                      "end": 1703,
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
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
      "start": 1749,
      "end": 1820,
      "id": {
        "type": "Identifier",
        "start": 1754,
        "end": 1761,
        "name": "Mapped1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1761,
        "end": 1764,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1762,
            "end": 1763,
            "name": {
              "type": "Identifier",
              "start": 1762,
              "end": 1763,
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
        "type": "TSMappedType",
        "start": 1767,
        "end": 1819,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 1774,
          "end": 1786,
          "name": {
            "type": "Identifier",
            "start": 1774,
            "end": 1775,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1779,
            "end": 1786,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1785,
              "end": 1786,
              "typeName": {
                "type": "Identifier",
                "start": 1785,
                "end": 1786,
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
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 1789,
          "end": 1816,
          "elementTypes": [
            {
              "type": "TSIndexedAccessType",
              "start": 1790,
              "end": 1794,
              "objectType": {
                "type": "TSTypeReference",
                "start": 1790,
                "end": 1791,
                "typeName": {
                  "type": "Identifier",
                  "start": 1790,
                  "end": 1791,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 1792,
                "end": 1793,
                "typeName": {
                  "type": "Identifier",
                  "start": 1792,
                  "end": 1793,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            {
              "type": "TSFunctionType",
              "start": 1796,
              "end": 1815,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1797,
                  "end": 1803,
                  "name": "arg",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1800,
                    "end": 1803,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1802,
                      "end": 1803,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1802,
                        "end": 1803,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1805,
                "end": 1815,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1808,
                  "end": 1815
                }
              }
            }
          ]
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1779,
          "end": 1786,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1785,
            "end": 1786,
            "typeName": {
              "type": "Identifier",
              "start": 1785,
              "end": 1786,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1774,
          "end": 1775,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1822,
      "end": 1878,
      "id": {
        "type": "Identifier",
        "start": 1839,
        "end": 1851,
        "name": "inferMapped1",
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
          "start": 1855,
          "end": 1870,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1858,
            "end": 1870,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1860,
              "end": 1870,
              "typeName": {
                "type": "Identifier",
                "start": 1860,
                "end": 1867,
                "name": "Mapped1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1867,
                "end": 1870,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1868,
                    "end": 1869,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1868,
                      "end": 1869,
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
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1851,
        "end": 1854,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1852,
            "end": 1853,
            "name": {
              "type": "Identifier",
              "start": 1852,
              "end": 1853,
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
        "start": 1871,
        "end": 1877,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1873,
          "end": 1877
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1880,
      "end": 1931,
      "expression": {
        "type": "CallExpression",
        "start": 1880,
        "end": 1930,
        "callee": {
          "type": "Identifier",
          "start": 1880,
          "end": 1892,
          "name": "inferMapped1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1893,
            "end": 1929,
            "properties": [
              {
                "type": "Property",
                "start": 1899,
                "end": 1927,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1899,
                  "end": 1902,
                  "name": "key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 1904,
                  "end": 1927,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1905,
                      "end": 1906,
                      "value": 3,
                      "raw": "3"
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1908,
                      "end": 1926,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1908,
                          "end": 1911,
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BinaryExpression",
                        "start": 1915,
                        "end": 1926,
                        "left": {
                          "type": "MemberExpression",
                          "start": 1915,
                          "end": 1922,
                          "object": {
                            "type": "Identifier",
                            "start": 1915,
                            "end": 1918,
                            "name": "arg",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1919,
                            "end": 1922,
                            "name": "key",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "operator": ">",
                        "right": {
                          "type": "Literal",
                          "start": 1925,
                          "end": 1926,
                          "value": 5,
                          "raw": "5"
                        }
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ]
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
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1933,
      "end": 2034,
      "id": {
        "type": "Identifier",
        "start": 1938,
        "end": 1945,
        "name": "Mapped2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1945,
        "end": 1948,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1946,
            "end": 1947,
            "name": {
              "type": "Identifier",
              "start": 1946,
              "end": 1947,
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
        "type": "TSMappedType",
        "start": 1951,
        "end": 2033,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 1958,
          "end": 1970,
          "name": {
            "type": "Identifier",
            "start": 1958,
            "end": 1959,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1963,
            "end": 1970,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1969,
              "end": 1970,
              "typeName": {
                "type": "Identifier",
                "start": 1969,
                "end": 1970,
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
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 1973,
          "end": 2030,
          "elementTypes": [
            {
              "type": "TSIndexedAccessType",
              "start": 1974,
              "end": 1978,
              "objectType": {
                "type": "TSTypeReference",
                "start": 1974,
                "end": 1975,
                "typeName": {
                  "type": "Identifier",
                  "start": 1974,
                  "end": 1975,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 1976,
                "end": 1977,
                "typeName": {
                  "type": "Identifier",
                  "start": 1976,
                  "end": 1977,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            {
              "type": "TSConditionalType",
              "start": 1980,
              "end": 2029,
              "checkType": {
                "type": "TSUnknownKeyword",
                "start": 1980,
                "end": 1987
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 1996,
                "end": 1997,
                "typeName": {
                  "type": "Identifier",
                  "start": 1996,
                  "end": 1997,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "trueType": {
                "type": "TSUnknownKeyword",
                "start": 2000,
                "end": 2007
              },
              "falseType": {
                "type": "TSFunctionType",
                "start": 2010,
                "end": 2029,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2011,
                    "end": 2017,
                    "name": "arg",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2014,
                      "end": 2017,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2016,
                        "end": 2017,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2016,
                          "end": 2017,
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2019,
                  "end": 2029,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 2022,
                    "end": 2029
                  }
                }
              }
            }
          ]
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1963,
          "end": 1970,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1969,
            "end": 1970,
            "typeName": {
              "type": "Identifier",
              "start": 1969,
              "end": 1970,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1958,
          "end": 1959,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2036,
      "end": 2092,
      "id": {
        "type": "Identifier",
        "start": 2053,
        "end": 2065,
        "name": "inferMapped2",
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
          "start": 2069,
          "end": 2084,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2072,
            "end": 2084,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2074,
              "end": 2084,
              "typeName": {
                "type": "Identifier",
                "start": 2074,
                "end": 2081,
                "name": "Mapped2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2081,
                "end": 2084,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2082,
                    "end": 2083,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2082,
                      "end": 2083,
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
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2065,
        "end": 2068,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2066,
            "end": 2067,
            "name": {
              "type": "Identifier",
              "start": 2066,
              "end": 2067,
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
        "start": 2085,
        "end": 2091,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2087,
          "end": 2091
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2094,
      "end": 2145,
      "expression": {
        "type": "CallExpression",
        "start": 2094,
        "end": 2144,
        "callee": {
          "type": "Identifier",
          "start": 2094,
          "end": 2106,
          "name": "inferMapped2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2107,
            "end": 2143,
            "properties": [
              {
                "type": "Property",
                "start": 2113,
                "end": 2141,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2113,
                  "end": 2116,
                  "name": "key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 2118,
                  "end": 2141,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 2119,
                      "end": 2120,
                      "value": 3,
                      "raw": "3"
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 2122,
                      "end": 2140,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2122,
                          "end": 2125,
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BinaryExpression",
                        "start": 2129,
                        "end": 2140,
                        "left": {
                          "type": "MemberExpression",
                          "start": 2129,
                          "end": 2136,
                          "object": {
                            "type": "Identifier",
                            "start": 2129,
                            "end": 2132,
                            "name": "arg",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2133,
                            "end": 2136,
                            "name": "key",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "operator": ">",
                        "right": {
                          "type": "Literal",
                          "start": 2139,
                          "end": 2140,
                          "value": 5,
                          "raw": "5"
                        }
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ]
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
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2147,
      "end": 2243,
      "id": {
        "type": "Identifier",
        "start": 2152,
        "end": 2166,
        "name": "MappedReadonly",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2166,
        "end": 2169,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2167,
            "end": 2168,
            "name": {
              "type": "Identifier",
              "start": 2167,
              "end": 2168,
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
        "type": "TSMappedType",
        "start": 2172,
        "end": 2242,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 2188,
          "end": 2200,
          "name": {
            "type": "Identifier",
            "start": 2188,
            "end": 2189,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 2193,
            "end": 2200,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2199,
              "end": 2200,
              "typeName": {
                "type": "Identifier",
                "start": 2199,
                "end": 2200,
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
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "start": 2203,
          "end": 2239,
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSTupleType",
            "start": 2212,
            "end": 2239,
            "elementTypes": [
              {
                "type": "TSIndexedAccessType",
                "start": 2213,
                "end": 2217,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 2213,
                  "end": 2214,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2213,
                    "end": 2214,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 2215,
                  "end": 2216,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2215,
                    "end": 2216,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "TSFunctionType",
                "start": 2219,
                "end": 2238,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2220,
                    "end": 2226,
                    "name": "arg",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2223,
                      "end": 2226,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2225,
                        "end": 2226,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2225,
                          "end": 2226,
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2228,
                  "end": 2238,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 2231,
                    "end": 2238
                  }
                }
              }
            ]
          }
        },
        "optional": null,
        "readonly": true,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 2193,
          "end": 2200,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 2199,
            "end": 2200,
            "typeName": {
              "type": "Identifier",
              "start": 2199,
              "end": 2200,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 2188,
          "end": 2189,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2245,
      "end": 2315,
      "id": {
        "type": "Identifier",
        "start": 2262,
        "end": 2281,
        "name": "inferMappedReadonly",
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
          "start": 2285,
          "end": 2307,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2288,
            "end": 2307,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2290,
              "end": 2307,
              "typeName": {
                "type": "Identifier",
                "start": 2290,
                "end": 2304,
                "name": "MappedReadonly",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2304,
                "end": 2307,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2305,
                    "end": 2306,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2305,
                      "end": 2306,
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
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2281,
        "end": 2284,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2282,
            "end": 2283,
            "name": {
              "type": "Identifier",
              "start": 2282,
              "end": 2283,
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
        "start": 2308,
        "end": 2314,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2310,
          "end": 2314
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2317,
      "end": 2375,
      "expression": {
        "type": "CallExpression",
        "start": 2317,
        "end": 2374,
        "callee": {
          "type": "Identifier",
          "start": 2317,
          "end": 2336,
          "name": "inferMappedReadonly",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2337,
            "end": 2373,
            "properties": [
              {
                "type": "Property",
                "start": 2343,
                "end": 2371,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2343,
                  "end": 2346,
                  "name": "key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 2348,
                  "end": 2371,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 2349,
                      "end": 2350,
                      "value": 3,
                      "raw": "3"
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 2352,
                      "end": 2370,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2352,
                          "end": 2355,
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BinaryExpression",
                        "start": 2359,
                        "end": 2370,
                        "left": {
                          "type": "MemberExpression",
                          "start": 2359,
                          "end": 2366,
                          "object": {
                            "type": "Identifier",
                            "start": 2359,
                            "end": 2362,
                            "name": "arg",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2363,
                            "end": 2366,
                            "name": "key",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "operator": ">",
                        "right": {
                          "type": "Literal",
                          "start": 2369,
                          "end": 2370,
                          "value": 5,
                          "raw": "5"
                        }
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ]
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
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
