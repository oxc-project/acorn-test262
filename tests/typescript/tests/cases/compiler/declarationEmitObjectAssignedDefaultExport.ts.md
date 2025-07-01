__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Statics",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 17
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "$$whatever",
              "raw": "\"$$whatever\"",
              "start": 24,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 24,
            "end": 45
          }
        ],
        "start": 18,
        "end": 47
      },
      "declare": false,
      "start": 0,
      "end": 47
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hoistNonReactStatics",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 86
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "NonReactStatics",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 113
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 114,
                    "end": 115
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 114,
                  "end": 115
                }
              ],
              "start": 113,
              "end": 116
            },
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 122
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Exclude",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 126,
                  "end": 133
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 140,
                          "end": 141
                        },
                        "typeArguments": null,
                        "start": 140,
                        "end": 141
                      },
                      "start": 134,
                      "end": 141
                    },
                    {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Statics",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 149,
                          "end": 156
                        },
                        "typeArguments": null,
                        "start": 149,
                        "end": 156
                      },
                      "start": 143,
                      "end": 156
                    }
                  ],
                  "start": 133,
                  "end": 157
                },
                "start": 126,
                "end": 157
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 161
                  },
                  "typeArguments": null,
                  "start": 160,
                  "end": 161
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 162,
                    "end": 163
                  },
                  "typeArguments": null,
                  "start": 162,
                  "end": 163
                },
                "start": 160,
                "end": 164
              },
              "optional": false,
              "readonly": null,
              "start": 119,
              "end": 165
            },
            "declare": false,
            "start": 93,
            "end": 165
          }
        ],
        "start": 87,
        "end": 167
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 48,
      "end": 167
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "hoistNonReactStatics",
        "optional": false,
        "typeAnnotation": null,
        "start": 177,
        "end": 197
      },
      "start": 168,
      "end": 198
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 198
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "hoistNonReactStatics",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 32
          },
          "start": 7,
          "end": 32
        }
      ],
      "source": {
        "type": "Literal",
        "value": "hoist-non-react-statics",
        "raw": "\"hoist-non-react-statics\"",
        "start": 38,
        "end": 63
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 64
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "DefaultTheme",
          "optional": false,
          "typeAnnotation": null,
          "start": 82,
          "end": 94
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 95,
          "end": 97
        },
        "declare": false,
        "start": 72,
        "end": 97
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 65,
      "end": 97
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StyledComponent",
          "optional": false,
          "typeAnnotation": null,
          "start": 110,
          "end": 125
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TTag",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 130
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 139,
                "end": 145
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 126,
              "end": 145
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TTheme",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 153
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DefaultTheme",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 168
                },
                "typeArguments": null,
                "start": 156,
                "end": 168
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 147,
              "end": 168
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TStyle",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 176
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 179,
                "end": 181
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 170,
              "end": 181
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TWhatever",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 192
              },
              "constraint": null,
              "default": {
                "type": "TSNeverKeyword",
                "start": 195,
                "end": 200
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 183,
              "end": 200
            }
          ],
          "start": 125,
          "end": 201
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 208,
              "end": 214
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StyledComponentBase",
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 240
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TTag",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 241,
                      "end": 245
                    },
                    "typeArguments": null,
                    "start": 241,
                    "end": 245
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TTheme",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 247,
                      "end": 253
                    },
                    "typeArguments": null,
                    "start": 247,
                    "end": 253
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TStyle",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 255,
                      "end": 261
                    },
                    "typeArguments": null,
                    "start": 255,
                    "end": 261
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TWhatever",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 263,
                      "end": 272
                    },
                    "typeArguments": null,
                    "start": 263,
                    "end": 272
                  }
                ],
                "start": 240,
                "end": 273
              },
              "start": 221,
              "end": 273
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hoistNonReactStatics",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 300
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NonReactStatics",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 301,
                  "end": 316
                },
                "start": 280,
                "end": 316
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TTag",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 317,
                      "end": 321
                    },
                    "typeArguments": null,
                    "start": 317,
                    "end": 321
                  }
                ],
                "start": 316,
                "end": 322
              },
              "start": 280,
              "end": 322
            }
          ],
          "start": 208,
          "end": 322
        },
        "declare": false,
        "start": 105,
        "end": 323
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 98,
      "end": 323
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StyledComponentBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 341,
          "end": 360
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TTag",
                "optional": false,
                "typeAnnotation": null,
                "start": 361,
                "end": 365
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 374,
                "end": 380
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 361,
              "end": 380
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TTheme",
                "optional": false,
                "typeAnnotation": null,
                "start": 382,
                "end": 388
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DefaultTheme",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 391,
                  "end": 403
                },
                "typeArguments": null,
                "start": 391,
                "end": 403
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 382,
              "end": 403
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TStyle",
                "optional": false,
                "typeAnnotation": null,
                "start": 405,
                "end": 411
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 414,
                "end": 416
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 405,
              "end": 416
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TWhatever",
                "optional": false,
                "typeAnnotation": null,
                "start": 418,
                "end": 427
              },
              "constraint": null,
              "default": {
                "type": "TSNeverKeyword",
                "start": 430,
                "end": 435
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 418,
              "end": 435
            }
          ],
          "start": 360,
          "end": 436
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 443,
                "end": 446
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TTag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 448,
                    "end": 452
                  },
                  "typeArguments": null,
                  "start": 448,
                  "end": 452
                },
                "start": 446,
                "end": 452
              },
              "accessibility": null,
              "static": false,
              "start": 443,
              "end": 453
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "theme",
                "optional": false,
                "typeAnnotation": null,
                "start": 458,
                "end": 463
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TTheme",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 465,
                    "end": 471
                  },
                  "typeArguments": null,
                  "start": 465,
                  "end": 471
                },
                "start": 463,
                "end": 471
              },
              "accessibility": null,
              "static": false,
              "start": 458,
              "end": 472
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "style",
                "optional": false,
                "typeAnnotation": null,
                "start": 477,
                "end": 482
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TStyle",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 484,
                    "end": 490
                  },
                  "typeArguments": null,
                  "start": 484,
                  "end": 490
                },
                "start": 482,
                "end": 490
              },
              "accessibility": null,
              "static": false,
              "start": 477,
              "end": 491
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "whatever",
                "optional": false,
                "typeAnnotation": null,
                "start": 496,
                "end": 504
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TWhatever",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 506,
                    "end": 515
                  },
                  "typeArguments": null,
                  "start": 506,
                  "end": 515
                },
                "start": 504,
                "end": 515
              },
              "accessibility": null,
              "static": false,
              "start": 496,
              "end": 516
            }
          ],
          "start": 437,
          "end": 518
        },
        "declare": false,
        "start": 331,
        "end": 518
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 324,
      "end": 518
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StyledInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 536,
          "end": 551
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "div",
                "optional": false,
                "typeAnnotation": null,
                "start": 558,
                "end": 561
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TemplateStringsArray",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 567,
                            "end": 587
                          },
                          "typeArguments": null,
                          "start": 567,
                          "end": 587
                        },
                        "start": 565,
                        "end": 587
                      },
                      "start": 564,
                      "end": 587
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StyledComponent",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 592,
                        "end": 607
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "div",
                              "raw": "\"div\"",
                              "start": 608,
                              "end": 613
                            },
                            "start": 608,
                            "end": 613
                          }
                        ],
                        "start": 607,
                        "end": 614
                      },
                      "start": 592,
                      "end": 614
                    },
                    "start": 589,
                    "end": 614
                  },
                  "start": 563,
                  "end": 614
                },
                "start": 561,
                "end": 614
              },
              "accessibility": null,
              "static": false,
              "start": 558,
              "end": 615
            }
          ],
          "start": 552,
          "end": 617
        },
        "declare": false,
        "start": 526,
        "end": 617
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 519,
      "end": 617
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "styled",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StyledInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 641,
                  "end": 656
                },
                "typeArguments": null,
                "start": 641,
                "end": 656
              },
              "start": 639,
              "end": 656
            },
            "start": 633,
            "end": 656
          },
          "init": null,
          "definite": false,
          "start": 633,
          "end": 656
        }
      ],
      "declare": true,
      "start": 619,
      "end": 657
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "styled",
        "optional": false,
        "typeAnnotation": null,
        "start": 673,
        "end": 679
      },
      "exportKind": "value",
      "start": 658,
      "end": 680
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 680
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "styled",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 13
          },
          "start": 7,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "styled-components",
        "raw": "\"styled-components\"",
        "start": 19,
        "end": 38
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 39
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "styled",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 57
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "div",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 61
              },
              "optional": false,
              "computed": false,
              "start": 51,
              "end": 61
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 61,
                  "end": 63
                }
              ],
              "expressions": [],
              "start": 61,
              "end": 63
            },
            "start": 51,
            "end": 63
          },
          "definite": false,
          "start": 47,
          "end": 63
        }
      ],
      "declare": false,
      "start": 41,
      "end": 64
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 72
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "styled",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 81
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "div",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 85
              },
              "optional": false,
              "computed": false,
              "start": 75,
              "end": 85
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 85,
                  "end": 87
                }
              ],
              "expressions": [],
              "start": 85,
              "end": 87
            },
            "start": 75,
            "end": 87
          },
          "definite": false,
          "start": 71,
          "end": 87
        }
      ],
      "declare": false,
      "start": 65,
      "end": 88
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 103
            },
            "init": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "styled",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 112
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "div",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 116
                },
                "optional": false,
                "computed": false,
                "start": 106,
                "end": 116
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 116,
                    "end": 118
                  }
                ],
                "expressions": [],
                "start": 116,
                "end": 118
              },
              "start": 106,
              "end": 118
            },
            "definite": false,
            "start": 102,
            "end": 118
          }
        ],
        "declare": false,
        "start": 96,
        "end": 119
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 89,
      "end": 119
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 142
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "assign",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 149
          },
          "optional": false,
          "computed": false,
          "start": 136,
          "end": 149
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 151
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 159,
                  "end": 160
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 159,
                  "end": 160
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 159,
                "end": 160
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 167
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 167
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 166,
                "end": 167
              }
            ],
            "start": 153,
            "end": 169
          }
        ],
        "optional": false,
        "start": 136,
        "end": 170
      },
      "exportKind": "value",
      "start": 121,
      "end": 171
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 171
}
```
