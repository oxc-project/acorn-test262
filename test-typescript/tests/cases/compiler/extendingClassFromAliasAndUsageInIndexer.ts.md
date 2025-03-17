__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 51,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 51,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 18,
          "name": "Model",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 19,
          "end": 51,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 25,
              "end": 49,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 32,
                "end": 40,
                "name": "someData",
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
                "start": 40,
                "end": 48,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 42,
                  "end": 48
                }
              },
              "accessibility": "public"
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
      "specifiers": [],
      "source": null,
      "attributes": [],
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
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 15,
        "name": "Backbone",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 80,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 79,
          "value": "./extendingClassFromAliasAndUsageInIndexer_backbone",
          "raw": "\"./extendingClassFromAliasAndUsageInIndexer_backbone\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 82,
      "end": 170,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 89,
        "end": 170,
        "id": {
          "type": "Identifier",
          "start": 95,
          "end": 113,
          "name": "VisualizationModel",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "MemberExpression",
          "start": 122,
          "end": 136,
          "object": {
            "type": "Identifier",
            "start": 122,
            "end": 130,
            "name": "Backbone",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 131,
            "end": 136,
            "name": "Model",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 137,
          "end": 170,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
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
  "end": 181,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 15,
        "name": "Backbone",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 80,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 79,
          "value": "./extendingClassFromAliasAndUsageInIndexer_backbone",
          "raw": "\"./extendingClassFromAliasAndUsageInIndexer_backbone\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 82,
      "end": 180,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 89,
        "end": 180,
        "id": {
          "type": "Identifier",
          "start": 95,
          "end": 113,
          "name": "VisualizationModel",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "MemberExpression",
          "start": 122,
          "end": 136,
          "object": {
            "type": "Identifier",
            "start": 122,
            "end": 130,
            "name": "Backbone",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 131,
            "end": 136,
            "name": "Model",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 137,
          "end": 180,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
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
  "end": 575,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 15,
        "name": "Backbone",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 80,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 79,
          "value": "./extendingClassFromAliasAndUsageInIndexer_backbone",
          "raw": "\"./extendingClassFromAliasAndUsageInIndexer_backbone\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 82,
      "end": 161,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 96,
        "name": "moduleA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 99,
        "end": 160,
        "expression": {
          "type": "Literal",
          "start": 107,
          "end": 159,
          "value": "./extendingClassFromAliasAndUsageInIndexer_moduleA",
          "raw": "\"./extendingClassFromAliasAndUsageInIndexer_moduleA\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 162,
      "end": 241,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 176,
        "name": "moduleB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 179,
        "end": 240,
        "expression": {
          "type": "Literal",
          "start": 187,
          "end": 239,
          "value": "./extendingClassFromAliasAndUsageInIndexer_moduleB",
          "raw": "\"./extendingClassFromAliasAndUsageInIndexer_moduleB\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 242,
      "end": 325,
      "id": {
        "type": "Identifier",
        "start": 252,
        "end": 274,
        "name": "IHasVisualizationModel",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 275,
        "end": 325,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 281,
            "end": 323,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 281,
              "end": 299,
              "name": "VisualizationModel",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 299,
              "end": 322,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 301,
                "end": 322,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 308,
                  "end": 322,
                  "left": {
                    "type": "Identifier",
                    "start": 308,
                    "end": 316,
                    "name": "Backbone",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 322,
                    "name": "Model",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
    {
      "type": "VariableDeclaration",
      "start": 326,
      "end": 377,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 330,
          "end": 376,
          "id": {
            "type": "Identifier",
            "start": 330,
            "end": 366,
            "name": "moduleATyped",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 342,
              "end": 366,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 344,
                "end": 366,
                "typeName": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 366,
                  "name": "IHasVisualizationModel",
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
          "init": {
            "type": "Identifier",
            "start": 369,
            "end": 376,
            "name": "moduleA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 378,
      "end": 488,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 382,
          "end": 487,
          "id": {
            "type": "Identifier",
            "start": 382,
            "end": 434,
            "name": "moduleMap",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 391,
              "end": 434,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 393,
                "end": 434,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 395,
                    "end": 432,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 396,
                        "end": 407,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 399,
                          "end": 407,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 401,
                            "end": 407
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 408,
                      "end": 432,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 410,
                        "end": 432,
                        "typeName": {
                          "type": "Identifier",
                          "start": 410,
                          "end": 432,
                          "name": "IHasVisualizationModel",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 437,
            "end": 487,
            "properties": [
              {
                "type": "Property",
                "start": 443,
                "end": 461,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 443,
                  "end": 452,
                  "value": "moduleA",
                  "raw": "\"moduleA\""
                },
                "value": {
                  "type": "Identifier",
                  "start": 454,
                  "end": 461,
                  "name": "moduleA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 467,
                "end": 485,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 467,
                  "end": 476,
                  "value": "moduleB",
                  "raw": "\"moduleB\""
                },
                "value": {
                  "type": "Identifier",
                  "start": 478,
                  "end": 485,
                  "name": "moduleB",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 489,
      "end": 512,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 493,
          "end": 511,
          "id": {
            "type": "Identifier",
            "start": 493,
            "end": 511,
            "name": "moduleName",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 503,
              "end": 511,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 505,
                "end": 511
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 513,
      "end": 575,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 517,
          "end": 574,
          "id": {
            "type": "Identifier",
            "start": 517,
            "end": 525,
            "name": "visModel",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 528,
            "end": 574,
            "callee": {
              "type": "MemberExpression",
              "start": 532,
              "end": 572,
              "object": {
                "type": "MemberExpression",
                "start": 532,
                "end": 553,
                "object": {
                  "type": "Identifier",
                  "start": 532,
                  "end": 541,
                  "name": "moduleMap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 542,
                  "end": 552,
                  "name": "moduleName",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": true,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 554,
                "end": 572,
                "name": "VisualizationModel",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
