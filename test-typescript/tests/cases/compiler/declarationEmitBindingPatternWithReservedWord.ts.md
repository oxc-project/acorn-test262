__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 619,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 39,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "LocaleData",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 18,
        "end": 39,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 24,
          "end": 39,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            },
            {
              "type": "TSNeverKeyword",
              "start": 33,
              "end": 38
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 18,
          "end": 24,
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 40,
      "end": 126,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 64,
        "decorators": [],
        "name": "ConvertLocaleConfig",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 102,
        "end": 125,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 108,
          "end": 125,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 112,
              "end": 118
            },
            {
              "type": "TSTypeReference",
              "start": 122,
              "end": 123,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 122,
                "end": 123,
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
          "start": 102,
          "end": 108,
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 64,
        "end": 99,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 65,
            "end": 98,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 75,
              "end": 85,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 75,
                "end": 85,
                "decorators": [],
                "name": "LocaleData",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": {
              "type": "TSTypeReference",
              "start": 88,
              "end": 98,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 88,
                "end": 98,
                "decorators": [],
                "name": "LocaleData",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
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
      "type": "TSTypeAliasDeclaration",
      "start": 127,
      "end": 209,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 144,
        "decorators": [],
        "name": "LocaleConfig",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 182,
        "end": 208,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 188,
          "end": 208,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 189,
              "end": 195
            },
            {
              "type": "TSTypeReference",
              "start": 197,
              "end": 207,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 204,
                "end": 207,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 205,
                    "end": 206,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 206,
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
                "start": 197,
                "end": 204,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 182,
          "end": 188,
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 144,
        "end": 179,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 145,
            "end": 178,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 155,
              "end": 165,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 155,
                "end": 165,
                "decorators": [],
                "name": "LocaleData",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": {
              "type": "TSTypeReference",
              "start": 168,
              "end": 178,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 168,
                "end": 178,
                "decorators": [],
                "name": "LocaleData",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
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
      "start": 211,
      "end": 387,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 218,
        "end": 387,
        "body": {
          "type": "TSInterfaceBody",
          "start": 268,
          "end": 387,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 274,
              "end": 287,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 274,
                "end": 277,
                "decorators": [],
                "name": "app",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 277,
                "end": 286,
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 279,
                  "end": 286
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 292,
              "end": 324,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 292,
                "end": 299,
                "decorators": [],
                "name": "default",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 299,
                "end": 323,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 301,
                  "end": 323,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 320,
                    "end": 323,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 321,
                        "end": 322,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 321,
                          "end": 322,
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
                    "start": 301,
                    "end": 320,
                    "decorators": [],
                    "name": "ConvertLocaleConfig",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 329,
              "end": 366,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 329,
                "end": 335,
                "decorators": [],
                "name": "config",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 336,
                "end": 365,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 338,
                  "end": 365,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 338,
                      "end": 353,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 350,
                        "end": 353,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 351,
                            "end": 352,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 351,
                              "end": 352,
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
                        "start": 338,
                        "end": 350,
                        "decorators": [],
                        "name": "LocaleConfig",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 356,
                      "end": 365
                    }
                  ]
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 371,
              "end": 385,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 371,
                "end": 375,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 376,
                "end": 384,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 378,
                  "end": 384
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 228,
          "end": 245,
          "decorators": [],
          "name": "GetLocalesOptions",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 245,
          "end": 267,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 246,
              "end": 266,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 256,
                "end": 266,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 266,
                  "decorators": [],
                  "name": "LocaleData",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 246,
                "end": 247,
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
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 389,
      "end": 619,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 396,
        "end": 619,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 402,
            "end": 618,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 402,
              "end": 412,
              "decorators": [],
              "name": "getLocales",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 415,
              "end": 618,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 582,
                "end": 618,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 588,
                    "end": 616,
                    "argument": {
                      "type": "Identifier",
                      "start": 595,
                      "end": 615,
                      "decorators": [],
                      "name": "defaultLocalesConfig",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 438,
                  "end": 553,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 444,
                      "end": 447,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 444,
                        "end": 447,
                        "decorators": [],
                        "name": "app",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 444,
                        "end": 447,
                        "decorators": [],
                        "name": "app",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 453,
                      "end": 457,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 453,
                        "end": 457,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 453,
                        "end": 457,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 463,
                      "end": 492,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 463,
                        "end": 470,
                        "decorators": [],
                        "name": "default",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 472,
                        "end": 492,
                        "decorators": [],
                        "name": "defaultLocalesConfig",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 498,
                      "end": 528,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 498,
                        "end": 504,
                        "decorators": [],
                        "name": "config",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 506,
                        "end": 528,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 506,
                          "end": 523,
                          "decorators": [],
                          "name": "userLocalesConfig",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "right": {
                          "type": "ObjectExpression",
                          "start": 526,
                          "end": 528,
                          "properties": []
                        },
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 531,
                    "end": 553,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 533,
                      "end": 553,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 550,
                        "end": 553,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 551,
                            "end": 552,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 551,
                              "end": 552,
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
                        "start": 533,
                        "end": 550,
                        "decorators": [],
                        "name": "GetLocalesOptions",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 554,
                "end": 578,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 556,
                  "end": 578,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 575,
                    "end": 578,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 576,
                        "end": 577,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 576,
                          "end": 577,
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
                    "start": 556,
                    "end": 575,
                    "decorators": [],
                    "name": "ConvertLocaleConfig",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 415,
                "end": 437,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 416,
                    "end": 436,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 426,
                      "end": 436,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 426,
                        "end": 436,
                        "decorators": [],
                        "name": "LocaleData",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 416,
                      "end": 417,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
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
  "sourceType": "script",
  "hashbang": null
}
```
