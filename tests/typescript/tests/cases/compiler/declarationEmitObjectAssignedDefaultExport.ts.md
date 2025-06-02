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
        "decorators": [],
        "name": "Statics",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
        "decorators": [],
        "name": "hoistNonReactStatics",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "NonReactStatics",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
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
              "type": "TSMappedType",
              "start": 119,
              "end": 165,
              "key": {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 126,
                "end": 157,
                "typeName": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 133,
                  "decorators": [],
                  "name": "Exclude",
                  "optional": false,
                  "typeAnnotation": null
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
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
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
                          "decorators": [],
                          "name": "Statics",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                }
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
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
        "decorators": [],
        "name": "hoistNonReactStatics",
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
            "decorators": [],
            "name": "hoistNonReactStatics",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
          "decorators": [],
          "name": "DefaultTheme",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "StyledComponent",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "TTag",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "TTheme",
                "optional": false,
                "typeAnnotation": null
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
                  "decorators": [],
                  "name": "DefaultTheme",
                  "optional": false,
                  "typeAnnotation": null
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
                "decorators": [],
                "name": "TStyle",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "TWhatever",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "StyledComponentBase",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "TTag",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "TTheme",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "TStyle",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "TWhatever",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "hoistNonReactStatics",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 301,
                  "end": 316,
                  "decorators": [],
                  "name": "NonReactStatics",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "TTag",
                      "optional": false,
                      "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "StyledComponentBase",
          "optional": false,
          "typeAnnotation": null
        },
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
                "decorators": [],
                "name": "TTag",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "TTheme",
                "optional": false,
                "typeAnnotation": null
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
                  "decorators": [],
                  "name": "DefaultTheme",
                  "optional": false,
                  "typeAnnotation": null
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
                "decorators": [],
                "name": "TStyle",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "TWhatever",
                "optional": false,
                "typeAnnotation": null
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
        "extends": [],
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
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TTag",
                    "optional": false,
                    "typeAnnotation": null
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
                "decorators": [],
                "name": "theme",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TTheme",
                    "optional": false,
                    "typeAnnotation": null
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
                "decorators": [],
                "name": "style",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TStyle",
                    "optional": false,
                    "typeAnnotation": null
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
                "decorators": [],
                "name": "whatever",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TWhatever",
                    "optional": false,
                    "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "StyledInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
                "decorators": [],
                "name": "div",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
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
                            "decorators": [],
                            "name": "TemplateStringsArray",
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
                        "decorators": [],
                        "name": "StyledComponent",
                        "optional": false,
                        "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 619,
      "end": 657,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 633,
          "end": 656,
          "id": {
            "type": "Identifier",
            "start": 633,
            "end": 656,
            "decorators": [],
            "name": "styled",
            "optional": false,
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
                  "decorators": [],
                  "name": "StyledInterface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "styled",
        "optional": false,
        "typeAnnotation": null
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
  "end": 171,
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
            "decorators": [],
            "name": "styled",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 64,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 63,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "styled",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 58,
                "end": 61,
                "decorators": [],
                "name": "div",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 61,
              "end": 63,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 61,
                  "end": 63,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "expressions": []
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 88,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 87,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 72,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "styled",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 82,
                "end": 85,
                "decorators": [],
                "name": "div",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 85,
              "end": 87,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 85,
                  "end": 87,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "expressions": []
            }
          },
          "definite": false
        }
      ],
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 102,
            "end": 118,
            "id": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "styled",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 116,
                  "decorators": [],
                  "name": "div",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 116,
                "end": 118,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 116,
                    "end": 118,
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true
                  }
                ],
                "expressions": []
              }
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
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 143,
            "end": 149,
            "decorators": [],
            "name": "assign",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 150,
            "end": 151,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
                  "decorators": [],
                  "name": "B",
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
                "start": 166,
                "end": 167,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 167,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 167,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
