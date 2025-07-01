__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Model",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 18
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "someData",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 40
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 42,
                  "end": 48
                },
                "start": 40,
                "end": 48
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 25,
              "end": 49
            }
          ],
          "start": 19,
          "end": 51
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 51
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 51
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 52
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Backbone",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 15
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./extendingClassFromAliasAndUsageInIndexer_backbone",
          "raw": "\"./extendingClassFromAliasAndUsageInIndexer_backbone\"",
          "start": 26,
          "end": 79
        },
        "start": 18,
        "end": 80
      },
      "importKind": "value",
      "start": 0,
      "end": 81
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "VisualizationModel",
          "optional": false,
          "typeAnnotation": null,
          "start": 95,
          "end": 113
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Backbone",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 130
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Model",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 136
          },
          "optional": false,
          "computed": false,
          "start": 122,
          "end": 136
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 137,
          "end": 170
        },
        "abstract": false,
        "declare": false,
        "start": 89,
        "end": 170
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 82,
      "end": 170
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 171
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Backbone",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 15
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./extendingClassFromAliasAndUsageInIndexer_backbone",
          "raw": "\"./extendingClassFromAliasAndUsageInIndexer_backbone\"",
          "start": 26,
          "end": 79
        },
        "start": 18,
        "end": 80
      },
      "importKind": "value",
      "start": 0,
      "end": 81
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "VisualizationModel",
          "optional": false,
          "typeAnnotation": null,
          "start": 95,
          "end": 113
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Backbone",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 130
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Model",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 136
          },
          "optional": false,
          "computed": false,
          "start": 122,
          "end": 136
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 137,
          "end": 180
        },
        "abstract": false,
        "declare": false,
        "start": 89,
        "end": 180
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 82,
      "end": 180
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 181
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Backbone",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 15
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./extendingClassFromAliasAndUsageInIndexer_backbone",
          "raw": "\"./extendingClassFromAliasAndUsageInIndexer_backbone\"",
          "start": 26,
          "end": 79
        },
        "start": 18,
        "end": 80
      },
      "importKind": "value",
      "start": 0,
      "end": 81
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "moduleA",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 96
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./extendingClassFromAliasAndUsageInIndexer_moduleA",
          "raw": "\"./extendingClassFromAliasAndUsageInIndexer_moduleA\"",
          "start": 107,
          "end": 159
        },
        "start": 99,
        "end": 160
      },
      "importKind": "value",
      "start": 82,
      "end": 161
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "moduleB",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 176
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./extendingClassFromAliasAndUsageInIndexer_moduleB",
          "raw": "\"./extendingClassFromAliasAndUsageInIndexer_moduleB\"",
          "start": 187,
          "end": 239
        },
        "start": 179,
        "end": 240
      },
      "importKind": "value",
      "start": 162,
      "end": 241
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IHasVisualizationModel",
        "optional": false,
        "typeAnnotation": null,
        "start": 252,
        "end": 274
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
              "name": "VisualizationModel",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 299
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Backbone",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 308,
                    "end": 316
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Model",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 317,
                    "end": 322
                  },
                  "start": 308,
                  "end": 322
                },
                "typeArguments": null,
                "start": 301,
                "end": 322
              },
              "start": 299,
              "end": 322
            },
            "accessibility": null,
            "static": false,
            "start": 281,
            "end": 323
          }
        ],
        "start": 275,
        "end": 325
      },
      "declare": false,
      "start": 242,
      "end": 325
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "moduleATyped",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IHasVisualizationModel",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 366
                },
                "typeArguments": null,
                "start": 344,
                "end": 366
              },
              "start": 342,
              "end": 366
            },
            "start": 330,
            "end": 366
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "moduleA",
            "optional": false,
            "typeAnnotation": null,
            "start": 369,
            "end": 376
          },
          "definite": false,
          "start": 330,
          "end": 376
        }
      ],
      "declare": false,
      "start": 326,
      "end": 377
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "moduleMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 401,
                            "end": 407
                          },
                          "start": 399,
                          "end": 407
                        },
                        "start": 396,
                        "end": 407
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IHasVisualizationModel",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 410,
                          "end": 432
                        },
                        "typeArguments": null,
                        "start": 410,
                        "end": 432
                      },
                      "start": 408,
                      "end": 432
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 395,
                    "end": 432
                  }
                ],
                "start": 393,
                "end": 434
              },
              "start": 391,
              "end": 434
            },
            "start": 382,
            "end": 434
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "moduleA",
                  "raw": "\"moduleA\"",
                  "start": 443,
                  "end": 452
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "moduleA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 454,
                  "end": 461
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 443,
                "end": 461
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "moduleB",
                  "raw": "\"moduleB\"",
                  "start": 467,
                  "end": 476
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "moduleB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 478,
                  "end": 485
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 467,
                "end": 485
              }
            ],
            "start": 437,
            "end": 487
          },
          "definite": false,
          "start": 382,
          "end": 487
        }
      ],
      "declare": false,
      "start": 378,
      "end": 488
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "moduleName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 505,
                "end": 511
              },
              "start": 503,
              "end": 511
            },
            "start": 493,
            "end": 511
          },
          "init": null,
          "definite": false,
          "start": 493,
          "end": 511
        }
      ],
      "declare": false,
      "start": 489,
      "end": 512
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "visModel",
            "optional": false,
            "typeAnnotation": null,
            "start": 517,
            "end": 525
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "moduleMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 532,
                  "end": 541
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "moduleName",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 542,
                  "end": 552
                },
                "optional": false,
                "computed": true,
                "start": 532,
                "end": 553
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "VisualizationModel",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 572
              },
              "optional": false,
              "computed": false,
              "start": 532,
              "end": 572
            },
            "typeArguments": null,
            "arguments": [],
            "start": 528,
            "end": 574
          },
          "definite": false,
          "start": 517,
          "end": 574
        }
      ],
      "declare": false,
      "start": 513,
      "end": 575
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 575
}
```
