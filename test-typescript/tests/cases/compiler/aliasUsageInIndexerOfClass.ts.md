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
        "name": "Backbone",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 66,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 65,
          "value": "./aliasUsageInIndexerOfClass_backbone",
          "raw": "\"./aliasUsageInIndexerOfClass_backbone\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 68,
      "end": 156,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 75,
        "end": 156,
        "id": {
          "type": "Identifier",
          "start": 81,
          "end": 99,
          "name": "VisualizationModel",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "MemberExpression",
          "start": 108,
          "end": 122,
          "object": {
            "type": "Identifier",
            "start": 108,
            "end": 116,
            "name": "Backbone",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 117,
            "end": 122,
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
          "start": 123,
          "end": 156,
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
        "name": "Backbone",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 66,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 65,
          "value": "./aliasUsageInIndexerOfClass_backbone",
          "raw": "\"./aliasUsageInIndexerOfClass_backbone\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 68,
      "end": 133,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 82,
        "name": "moduleA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 85,
        "end": 132,
        "expression": {
          "type": "Literal",
          "start": 93,
          "end": 131,
          "value": "./aliasUsageInIndexerOfClass_moduleA",
          "raw": "\"./aliasUsageInIndexerOfClass_moduleA\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 134,
      "end": 217,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 166,
        "name": "IHasVisualizationModel",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 191,
              "name": "VisualizationModel",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "name": "Backbone",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 214,
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
      "type": "ClassDeclaration",
      "start": 218,
      "end": 288,
      "id": {
        "type": "Identifier",
        "start": 224,
        "end": 225,
        "name": "N",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
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
                "name": "idx",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 236,
                  "end": 244,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 238,
                    "end": 244
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
          },
          {
            "type": "PropertyDefinition",
            "start": 274,
            "end": 286,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 274,
              "end": 275,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 278,
              "end": 285,
              "name": "moduleA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
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
    {
      "type": "ClassDeclaration",
      "start": 289,
      "end": 366,
      "id": {
        "type": "Identifier",
        "start": 295,
        "end": 297,
        "name": "N2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
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
                "name": "idx",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 308,
                  "end": 316,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 310,
                    "end": 316
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                  "name": "moduleA",
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
          },
          {
            "type": "PropertyDefinition",
            "start": 338,
            "end": 364,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 338,
              "end": 339,
              "name": "x",
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
                  "name": "IHasVisualizationModel",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
