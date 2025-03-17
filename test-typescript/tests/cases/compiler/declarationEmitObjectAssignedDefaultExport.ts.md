__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 198,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "name": "Statics",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 47,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 24,
            "end": 45,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 24,
              "end": 36,
              "value": "$$whatever",
              "raw": "\"$$whatever\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 38,
                "end": 44
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
      "type": "TSModuleDeclaration",
      "start": 48,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 86,
        "name": "hoistNonReactStatics",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 87,
        "end": 167,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 93,
            "end": 165,
            "id": {
              "type": "Identifier",
              "start": 98,
              "end": 113,
              "name": "NonReactStatics",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 113,
              "end": 116,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 114,
                  "end": 115,
                  "name": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 115,
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
              "start": 119,
              "end": 165,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 121,
                "end": 157,
                "name": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 122,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 126,
                  "end": 157,
                  "typeName": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 133,
                    "name": "Exclude",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 133,
                    "end": 157,
                    "params": [
                      {
                        "type": "TSTypeOperator",
                        "start": 134,
                        "end": 141,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 140,
                          "end": 141,
                          "typeName": {
                            "type": "Identifier",
                            "start": 140,
                            "end": 141,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "TSTypeOperator",
                        "start": 143,
                        "end": 156,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 149,
                          "end": 156,
                          "typeName": {
                            "type": "Identifier",
                            "start": 149,
                            "end": 156,
                            "name": "Statics",
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
                "default": null,
                "in": false,
                "out": false,
                "const": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 160,
                "end": 164,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 160,
                  "end": 161,
                  "typeName": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 161,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 162,
                  "end": 163,
                  "typeName": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 163,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeReference",
                "start": 126,
                "end": 157,
                "typeName": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 133,
                  "name": "Exclude",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 133,
                  "end": 157,
                  "params": [
                    {
                      "type": "TSTypeOperator",
                      "start": 134,
                      "end": 141,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 140,
                        "end": 141,
                        "typeName": {
                          "type": "Identifier",
                          "start": 140,
                          "end": 141,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "TSTypeOperator",
                      "start": 143,
                      "end": 156,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 149,
                        "end": 156,
                        "typeName": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 156,
                          "name": "Statics",
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
              "key": {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 168,
      "end": 198,
      "expression": {
        "type": "Identifier",
        "start": 177,
        "end": 197,
        "name": "hoistNonReactStatics",
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
  "end": 680,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 64,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 32,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 32,
            "name": "hoistNonReactStatics",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 38,
        "end": 63,
        "value": "hoist-non-react-statics",
        "raw": "\"hoist-non-react-statics\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 65,
      "end": 97,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 72,
        "end": 97,
        "id": {
          "type": "Identifier",
          "start": 82,
          "end": 94,
          "name": "DefaultTheme",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 95,
          "end": 97,
          "body": []
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
      "start": 98,
      "end": 323,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 105,
        "end": 323,
        "id": {
          "type": "Identifier",
          "start": 110,
          "end": 125,
          "name": "StyledComponent",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 125,
          "end": 201,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 126,
              "end": 145,
              "name": {
                "type": "Identifier",
                "start": 126,
                "end": 130,
                "name": "TTag",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 139,
                "end": 145
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 147,
              "end": 168,
              "name": {
                "type": "Identifier",
                "start": 147,
                "end": 153,
                "name": "TTheme",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 156,
                "end": 168,
                "typeName": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 168,
                  "name": "DefaultTheme",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 170,
              "end": 181,
              "name": {
                "type": "Identifier",
                "start": 170,
                "end": 176,
                "name": "TStyle",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 179,
                "end": 181,
                "members": []
              },
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 183,
              "end": 200,
              "name": {
                "type": "Identifier",
                "start": 183,
                "end": 192,
                "name": "TWhatever",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSNeverKeyword",
                "start": 195,
                "end": 200
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 208,
          "end": 322,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 208,
              "end": 214
            },
            {
              "type": "TSTypeReference",
              "start": 221,
              "end": 273,
              "typeName": {
                "type": "Identifier",
                "start": 221,
                "end": 240,
                "name": "StyledComponentBase",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 240,
                "end": 273,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 241,
                    "end": 245,
                    "typeName": {
                      "type": "Identifier",
                      "start": 241,
                      "end": 245,
                      "name": "TTag",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 247,
                    "end": 253,
                    "typeName": {
                      "type": "Identifier",
                      "start": 247,
                      "end": 253,
                      "name": "TTheme",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 255,
                    "end": 261,
                    "typeName": {
                      "type": "Identifier",
                      "start": 255,
                      "end": 261,
                      "name": "TStyle",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 263,
                    "end": 272,
                    "typeName": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 272,
                      "name": "TWhatever",
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
              "type": "TSTypeReference",
              "start": 280,
              "end": 322,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 280,
                "end": 316,
                "left": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 300,
                  "name": "hoistNonReactStatics",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 301,
                  "end": 316,
                  "name": "NonReactStatics",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 316,
                "end": 322,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 317,
                    "end": 321,
                    "typeName": {
                      "type": "Identifier",
                      "start": 317,
                      "end": 321,
                      "name": "TTag",
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
      "start": 324,
      "end": 518,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 331,
        "end": 518,
        "id": {
          "type": "Identifier",
          "start": 341,
          "end": 360,
          "name": "StyledComponentBase",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 360,
          "end": 436,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 361,
              "end": 380,
              "name": {
                "type": "Identifier",
                "start": 361,
                "end": 365,
                "name": "TTag",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 374,
                "end": 380
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 382,
              "end": 403,
              "name": {
                "type": "Identifier",
                "start": 382,
                "end": 388,
                "name": "TTheme",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 391,
                "end": 403,
                "typeName": {
                  "type": "Identifier",
                  "start": 391,
                  "end": 403,
                  "name": "DefaultTheme",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 405,
              "end": 416,
              "name": {
                "type": "Identifier",
                "start": 405,
                "end": 411,
                "name": "TStyle",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 414,
                "end": 416,
                "members": []
              },
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 418,
              "end": 435,
              "name": {
                "type": "Identifier",
                "start": 418,
                "end": 427,
                "name": "TWhatever",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSNeverKeyword",
                "start": 430,
                "end": 435
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "body": {
          "type": "TSInterfaceBody",
          "start": 437,
          "end": 518,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 443,
              "end": 453,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 443,
                "end": 446,
                "name": "tag",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 446,
                "end": 452,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 448,
                  "end": 452,
                  "typeName": {
                    "type": "Identifier",
                    "start": 448,
                    "end": 452,
                    "name": "TTag",
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
              "type": "TSPropertySignature",
              "start": 458,
              "end": 472,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 458,
                "end": 463,
                "name": "theme",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 463,
                "end": 471,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 465,
                  "end": 471,
                  "typeName": {
                    "type": "Identifier",
                    "start": 465,
                    "end": 471,
                    "name": "TTheme",
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
              "type": "TSPropertySignature",
              "start": 477,
              "end": 491,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 477,
                "end": 482,
                "name": "style",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 482,
                "end": 490,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 484,
                  "end": 490,
                  "typeName": {
                    "type": "Identifier",
                    "start": 484,
                    "end": 490,
                    "name": "TStyle",
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
              "type": "TSPropertySignature",
              "start": 496,
              "end": 516,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 496,
                "end": 504,
                "name": "whatever",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 504,
                "end": 515,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 506,
                  "end": 515,
                  "typeName": {
                    "type": "Identifier",
                    "start": 506,
                    "end": 515,
                    "name": "TWhatever",
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 519,
      "end": 617,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 526,
        "end": 617,
        "id": {
          "type": "Identifier",
          "start": 536,
          "end": 551,
          "name": "StyledInterface",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 552,
          "end": 617,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 558,
              "end": 615,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 558,
                "end": 561,
                "name": "div",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 561,
                "end": 614,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 563,
                  "end": 614,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 564,
                      "end": 587,
                      "name": "a",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 565,
                        "end": 587,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 567,
                          "end": 587,
                          "typeName": {
                            "type": "Identifier",
                            "start": 567,
                            "end": 587,
                            "name": "TemplateStringsArray",
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
                    "start": 589,
                    "end": 614,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 592,
                      "end": 614,
                      "typeName": {
                        "type": "Identifier",
                        "start": 592,
                        "end": 607,
                        "name": "StyledComponent",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 607,
                        "end": 614,
                        "params": [
                          {
                            "type": "TSLiteralType",
                            "start": 608,
                            "end": 613,
                            "literal": {
                              "type": "Literal",
                              "start": 608,
                              "end": 613,
                              "value": "div",
                              "raw": "\"div\""
                            }
                          }
                        ]
                      }
                    }
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
      "type": "VariableDeclaration",
      "start": 619,
      "end": 657,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 633,
          "end": 656,
          "id": {
            "type": "Identifier",
            "start": 633,
            "end": 656,
            "name": "styled",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 639,
              "end": 656,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 641,
                "end": 656,
                "typeName": {
                  "type": "Identifier",
                  "start": 641,
                  "end": 656,
                  "name": "StyledInterface",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 658,
      "end": 680,
      "declaration": {
        "type": "Identifier",
        "start": 673,
        "end": 679,
        "name": "styled",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "exportKind": "value"
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
  "end": 172,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 39,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 13,
            "name": "styled",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 38,
        "value": "styled-components",
        "raw": "\"styled-components\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 63,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 51,
            "end": 63,
            "tag": {
              "type": "MemberExpression",
              "start": 51,
              "end": 61,
              "object": {
                "type": "Identifier",
                "start": 51,
                "end": 57,
                "name": "styled",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 58,
                "end": 61,
                "name": "div",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 61,
              "end": 63,
              "expressions": [],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 61,
                  "end": 63,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ]
            },
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
      "start": 65,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 87,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 72,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 75,
            "end": 87,
            "tag": {
              "type": "MemberExpression",
              "start": 75,
              "end": 85,
              "object": {
                "type": "Identifier",
                "start": 75,
                "end": 81,
                "name": "styled",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 82,
                "end": 85,
                "name": "div",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 85,
              "end": 87,
              "expressions": [],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 85,
                  "end": 87,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ]
            },
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 89,
      "end": 119,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 96,
        "end": 119,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 102,
            "end": 118,
            "id": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "TaggedTemplateExpression",
              "start": 106,
              "end": 118,
              "tag": {
                "type": "MemberExpression",
                "start": 106,
                "end": 116,
                "object": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 112,
                  "name": "styled",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 116,
                  "name": "div",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 116,
                "end": 118,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 116,
                    "end": 118,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": true
                  }
                ]
              },
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
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 121,
      "end": 171,
      "declaration": {
        "type": "CallExpression",
        "start": 136,
        "end": 170,
        "callee": {
          "type": "MemberExpression",
          "start": 136,
          "end": 149,
          "object": {
            "type": "Identifier",
            "start": 136,
            "end": 142,
            "name": "Object",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 143,
            "end": 149,
            "name": "assign",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 150,
            "end": 151,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "ObjectExpression",
            "start": 153,
            "end": 169,
            "properties": [
              {
                "type": "Property",
                "start": 159,
                "end": 160,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 166,
                "end": 167,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 167,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 167,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
