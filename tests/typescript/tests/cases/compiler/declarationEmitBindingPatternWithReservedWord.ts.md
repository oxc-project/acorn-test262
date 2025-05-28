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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "LocaleData",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 18,
        "end": 39,
        "typeName": {
          "type": "Identifier",
          "start": 18,
          "end": 24,
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 40,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 64,
        "decorators": [],
        "name": "ConvertLocaleConfig",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 75,
              "end": 85,
              "typeName": {
                "type": "Identifier",
                "start": 75,
                "end": 85,
                "decorators": [],
                "name": "LocaleData",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 88,
              "end": 98,
              "typeName": {
                "type": "Identifier",
                "start": 88,
                "end": 98,
                "decorators": [],
                "name": "LocaleData",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 102,
        "end": 125,
        "typeName": {
          "type": "Identifier",
          "start": 102,
          "end": 108,
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null
        },
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
              "typeName": {
                "type": "Identifier",
                "start": 122,
                "end": 123,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 127,
      "end": 209,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 144,
        "decorators": [],
        "name": "LocaleConfig",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 155,
              "end": 165,
              "typeName": {
                "type": "Identifier",
                "start": 155,
                "end": 165,
                "decorators": [],
                "name": "LocaleData",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 168,
              "end": 178,
              "typeName": {
                "type": "Identifier",
                "start": 168,
                "end": 178,
                "decorators": [],
                "name": "LocaleData",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 182,
        "end": 208,
        "typeName": {
          "type": "Identifier",
          "start": 182,
          "end": 188,
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null
        },
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
              "typeName": {
                "type": "Identifier",
                "start": 197,
                "end": 204,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 204,
                "end": 207,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 205,
                    "end": 206,
                    "typeName": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 206,
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
          ]
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 211,
      "end": 387,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 218,
        "end": 387,
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
              "name": {
                "type": "Identifier",
                "start": 246,
                "end": 247,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 256,
                "end": 266,
                "typeName": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 266,
                  "decorators": [],
                  "name": "LocaleData",
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
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 268,
          "end": 387,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 274,
              "end": 287,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 274,
                "end": 277,
                "decorators": [],
                "name": "app",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 277,
                "end": 286,
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 279,
                  "end": 286
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 292,
              "end": 324,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 292,
                "end": 299,
                "decorators": [],
                "name": "default",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 299,
                "end": 323,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 301,
                  "end": 323,
                  "typeName": {
                    "type": "Identifier",
                    "start": 301,
                    "end": 320,
                    "decorators": [],
                    "name": "ConvertLocaleConfig",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 320,
                    "end": 323,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 321,
                        "end": 322,
                        "typeName": {
                          "type": "Identifier",
                          "start": 321,
                          "end": 322,
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
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 329,
              "end": 366,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 329,
                "end": 335,
                "decorators": [],
                "name": "config",
                "optional": false,
                "typeAnnotation": null
              },
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 338,
                        "end": 350,
                        "decorators": [],
                        "name": "LocaleConfig",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 350,
                        "end": 353,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 351,
                            "end": 352,
                            "typeName": {
                              "type": "Identifier",
                              "start": 351,
                              "end": 352,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 356,
                      "end": 365
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 371,
              "end": 385,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 371,
                "end": 375,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 376,
                "end": 384,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 378,
                  "end": 384
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 389,
      "end": 619,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 396,
        "end": 619,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 402,
            "end": 618,
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
              "expression": false,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 415,
                "end": 437,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 416,
                    "end": 436,
                    "name": {
                      "type": "Identifier",
                      "start": 416,
                      "end": 417,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 426,
                      "end": 436,
                      "typeName": {
                        "type": "Identifier",
                        "start": 426,
                        "end": 436,
                        "decorators": [],
                        "name": "LocaleData",
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
                  "type": "ObjectPattern",
                  "start": 438,
                  "end": 553,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 444,
                      "end": 447,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 444,
                        "end": 447,
                        "decorators": [],
                        "name": "app",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 444,
                        "end": 447,
                        "decorators": [],
                        "name": "app",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 453,
                      "end": 457,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 453,
                        "end": 457,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 453,
                        "end": 457,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 463,
                      "end": 492,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 463,
                        "end": 470,
                        "decorators": [],
                        "name": "default",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 472,
                        "end": 492,
                        "decorators": [],
                        "name": "defaultLocalesConfig",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 498,
                      "end": 528,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 498,
                        "end": 504,
                        "decorators": [],
                        "name": "config",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                        "right": {
                          "type": "ObjectExpression",
                          "start": 526,
                          "end": 528,
                          "properties": []
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 531,
                    "end": 553,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 533,
                      "end": 553,
                      "typeName": {
                        "type": "Identifier",
                        "start": 533,
                        "end": 550,
                        "decorators": [],
                        "name": "GetLocalesOptions",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 550,
                        "end": 553,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 551,
                            "end": 552,
                            "typeName": {
                              "type": "Identifier",
                              "start": 551,
                              "end": 552,
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
                "start": 554,
                "end": 578,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 556,
                  "end": 578,
                  "typeName": {
                    "type": "Identifier",
                    "start": 556,
                    "end": 575,
                    "decorators": [],
                    "name": "ConvertLocaleConfig",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 575,
                    "end": 578,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 576,
                        "end": 577,
                        "typeName": {
                          "type": "Identifier",
                          "start": 576,
                          "end": 577,
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
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
