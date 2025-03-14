aliasUsageInIndexerOfClass_backbone.ts
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
aliasUsageInIndexerOfClass_moduleA.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 157,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 67,
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
        "end": 66,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 65,
          "raw": "\"./aliasUsageInIndexerOfClass_backbone\"",
          "value": "./aliasUsageInIndexerOfClass_backbone"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 68,
      "end": 156,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 75,
        "end": 156,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 123,
          "end": 156,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 81,
          "end": 99,
          "decorators": [],
          "name": "VisualizationModel",
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "MemberExpression",
          "start": 108,
          "end": 122,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 108,
            "end": 116,
            "decorators": [],
            "name": "Backbone",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 117,
            "end": 122,
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
aliasUsageInIndexerOfClass_main.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 366,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 67,
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
        "end": 66,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 65,
          "raw": "\"./aliasUsageInIndexerOfClass_backbone\"",
          "value": "./aliasUsageInIndexerOfClass_backbone"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 68,
      "end": 133,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 82,
        "decorators": [],
        "name": "moduleA",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 85,
        "end": 132,
        "expression": {
          "type": "Literal",
          "start": 93,
          "end": 131,
          "raw": "\"./aliasUsageInIndexerOfClass_moduleA\"",
          "value": "./aliasUsageInIndexerOfClass_moduleA"
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 134,
      "end": 217,
      "body": {
        "type": "TSInterfaceBody",
        "start": 167,
        "end": 217,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 173,
            "end": 215,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 191,
              "decorators": [],
              "name": "VisualizationModel",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 191,
              "end": 214,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 193,
                "end": 214,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 200,
                  "end": 214,
                  "left": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 208,
                    "decorators": [],
                    "name": "Backbone",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 214,
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
        "start": 144,
        "end": 166,
        "decorators": [],
        "name": "IHasVisualizationModel",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 218,
      "end": 288,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 226,
        "end": 288,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 232,
            "end": 269,
            "parameters": [
              {
                "type": "Identifier",
                "start": 233,
                "end": 244,
                "decorators": [],
                "name": "idx",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 236,
                  "end": 244,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 238,
                    "end": 244
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 245,
              "end": 269,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 247,
                "end": 269,
                "typeName": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 269,
                  "decorators": [],
                  "name": "IHasVisualizationModel",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 274,
            "end": 286,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 274,
              "end": 275,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Identifier",
              "start": 278,
              "end": 285,
              "decorators": [],
              "name": "moduleA",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 224,
        "end": 225,
        "decorators": [],
        "name": "N",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 289,
      "end": 366,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 298,
        "end": 366,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 304,
            "end": 333,
            "parameters": [
              {
                "type": "Identifier",
                "start": 305,
                "end": 316,
                "decorators": [],
                "name": "idx",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 308,
                  "end": 316,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 310,
                    "end": 316
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 317,
              "end": 333,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 319,
                "end": 333,
                "exprName": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 333,
                  "decorators": [],
                  "name": "moduleA",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 338,
            "end": 364,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 338,
              "end": 339,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 339,
              "end": 363,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 341,
                "end": 363,
                "typeName": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 363,
                  "decorators": [],
                  "name": "IHasVisualizationModel",
                  "optional": false
                }
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
        "start": 295,
        "end": 297,
        "decorators": [],
        "name": "N2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "module"
}
```
