extendingClassFromAliasAndUsageInIndexer_backbone.ts
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
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 51,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 19,
          "end": 51,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 25,
              "end": 49,
              "accessibility": "public",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 32,
                "end": 40,
                "decorators": [],
                "name": "someData",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
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
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 18,
          "decorators": [],
          "name": "Model",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
extendingClassFromAliasAndUsageInIndexer_moduleA.ts
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
        "decorators": [],
        "name": "Backbone",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 80,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 79,
          "raw": "\"./extendingClassFromAliasAndUsageInIndexer_backbone\"",
          "value": "./extendingClassFromAliasAndUsageInIndexer_backbone"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 82,
      "end": 170,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 89,
        "end": 170,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 137,
          "end": 170,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 95,
          "end": 113,
          "decorators": [],
          "name": "VisualizationModel",
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "MemberExpression",
          "start": 122,
          "end": 136,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 122,
            "end": 130,
            "decorators": [],
            "name": "Backbone",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 131,
            "end": 136,
            "decorators": [],
            "name": "Model",
            "optional": false
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
extendingClassFromAliasAndUsageInIndexer_moduleB.ts
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
        "decorators": [],
        "name": "Backbone",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 80,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 79,
          "raw": "\"./extendingClassFromAliasAndUsageInIndexer_backbone\"",
          "value": "./extendingClassFromAliasAndUsageInIndexer_backbone"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 82,
      "end": 180,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 89,
        "end": 180,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 137,
          "end": 180,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 95,
          "end": 113,
          "decorators": [],
          "name": "VisualizationModel",
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "MemberExpression",
          "start": 122,
          "end": 136,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 122,
            "end": 130,
            "decorators": [],
            "name": "Backbone",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 131,
            "end": 136,
            "decorators": [],
            "name": "Model",
            "optional": false
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
extendingClassFromAliasAndUsageInIndexer_main.ts
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
        "decorators": [],
        "name": "Backbone",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 80,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 79,
          "raw": "\"./extendingClassFromAliasAndUsageInIndexer_backbone\"",
          "value": "./extendingClassFromAliasAndUsageInIndexer_backbone"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 82,
      "end": 161,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 96,
        "decorators": [],
        "name": "moduleA",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 99,
        "end": 160,
        "expression": {
          "type": "Literal",
          "start": 107,
          "end": 159,
          "raw": "\"./extendingClassFromAliasAndUsageInIndexer_moduleA\"",
          "value": "./extendingClassFromAliasAndUsageInIndexer_moduleA"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 162,
      "end": 241,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 176,
        "decorators": [],
        "name": "moduleB",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 179,
        "end": 240,
        "expression": {
          "type": "Literal",
          "start": 187,
          "end": 239,
          "raw": "\"./extendingClassFromAliasAndUsageInIndexer_moduleB\"",
          "value": "./extendingClassFromAliasAndUsageInIndexer_moduleB"
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 242,
      "end": 325,
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
            "key": {
              "type": "Identifier",
              "start": 281,
              "end": 299,
              "decorators": [],
              "name": "VisualizationModel",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                    "decorators": [],
                    "name": "Backbone",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 322,
                    "decorators": [],
                    "name": "Model",
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 252,
        "end": 274,
        "decorators": [],
        "name": "IHasVisualizationModel",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 330,
            "end": 366,
            "decorators": [],
            "name": "moduleATyped",
            "optional": false,
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
                  "decorators": [],
                  "name": "IHasVisualizationModel",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 369,
            "end": 376,
            "decorators": [],
            "name": "moduleA",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 382,
            "end": 434,
            "decorators": [],
            "name": "moduleMap",
            "optional": false,
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
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 399,
                          "end": 407,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 401,
                            "end": 407
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
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
                          "decorators": [],
                          "name": "IHasVisualizationModel",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
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
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 443,
                  "end": 452,
                  "raw": "\"moduleA\"",
                  "value": "moduleA"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 454,
                  "end": 461,
                  "decorators": [],
                  "name": "moduleA",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 467,
                "end": 485,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 467,
                  "end": 476,
                  "raw": "\"moduleB\"",
                  "value": "moduleB"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 478,
                  "end": 485,
                  "decorators": [],
                  "name": "moduleB",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 493,
            "end": 511,
            "decorators": [],
            "name": "moduleName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 503,
              "end": 511,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 505,
                "end": 511
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 517,
            "end": 525,
            "decorators": [],
            "name": "visModel",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 528,
            "end": 574,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 532,
              "end": 572,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 532,
                "end": 553,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 532,
                  "end": 541,
                  "decorators": [],
                  "name": "moduleMap",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 542,
                  "end": 552,
                  "decorators": [],
                  "name": "moduleName",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 554,
                "end": 572,
                "decorators": [],
                "name": "VisualizationModel",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module"
}
```
