__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 620,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "name": "LocaleData",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
          "name": "Record",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
        "name": "ConvertLocaleConfig",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 75,
              "end": 85,
              "typeName": {
                "type": "Identifier",
                "start": 75,
                "end": 85,
                "name": "LocaleData",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "LocaleData",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          "name": "Record",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
    {
      "type": "TSTypeAliasDeclaration",
      "start": 127,
      "end": 209,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 144,
        "name": "LocaleConfig",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 155,
              "end": 165,
              "typeName": {
                "type": "Identifier",
                "start": 155,
                "end": 165,
                "name": "LocaleData",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "LocaleData",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          "name": "Record",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          "name": "GetLocalesOptions",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 256,
                "end": 266,
                "typeName": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 266,
                  "name": "LocaleData",
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
                "name": "app",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "default",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "name": "ConvertLocaleConfig",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "start": 329,
              "end": 366,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 329,
                "end": 335,
                "name": "config",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                        "name": "LocaleConfig",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 389,
      "end": 619,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 396,
        "end": 619,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 402,
            "end": 618,
            "id": {
              "type": "Identifier",
              "start": 402,
              "end": 412,
              "name": "getLocales",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 415,
              "end": 618,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 438,
                  "end": 553,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 444,
                      "end": 447,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 444,
                        "end": 447,
                        "name": "app",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 444,
                        "end": 447,
                        "name": "app",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 453,
                      "end": 457,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 453,
                        "end": 457,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 453,
                        "end": 457,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 463,
                      "end": 492,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 463,
                        "end": 470,
                        "name": "default",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 472,
                        "end": 492,
                        "name": "defaultLocalesConfig",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 498,
                      "end": 528,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 498,
                        "end": 504,
                        "name": "config",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 506,
                        "end": 528,
                        "left": {
                          "type": "Identifier",
                          "start": 506,
                          "end": 523,
                          "name": "userLocalesConfig",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "ObjectExpression",
                          "start": 526,
                          "end": 528,
                          "properties": []
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
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
                        "name": "GetLocalesOptions",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                }
              ],
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
                      "name": "defaultLocalesConfig",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
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
                    "name": {
                      "type": "Identifier",
                      "start": 416,
                      "end": 417,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 426,
                      "end": 436,
                      "typeName": {
                        "type": "Identifier",
                        "start": 426,
                        "end": 436,
                        "name": "LocaleData",
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
                    "name": "ConvertLocaleConfig",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
