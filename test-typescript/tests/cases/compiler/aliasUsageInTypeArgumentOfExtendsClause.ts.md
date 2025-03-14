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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 170,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 80,
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
        "end": 79,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 78,
          "raw": "\"./aliasUsageInTypeArgumentOfExtendsClause_backbone\"",
          "value": "./aliasUsageInTypeArgumentOfExtendsClause_backbone"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 81,
      "end": 169,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 88,
        "end": 169,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 136,
          "end": 169,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 94,
          "end": 112,
          "decorators": [],
          "name": "VisualizationModel",
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "MemberExpression",
          "start": 121,
          "end": 135,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 121,
            "end": 129,
            "decorators": [],
            "name": "Backbone",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 130,
            "end": 135,
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 362,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 80,
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
        "end": 79,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 78,
          "raw": "\"./aliasUsageInTypeArgumentOfExtendsClause_backbone\"",
          "value": "./aliasUsageInTypeArgumentOfExtendsClause_backbone"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 81,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 95,
        "decorators": [],
        "name": "moduleA",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 98,
        "end": 158,
        "expression": {
          "type": "Literal",
          "start": 106,
          "end": 157,
          "raw": "\"./aliasUsageInTypeArgumentOfExtendsClause_moduleA\"",
          "value": "./aliasUsageInTypeArgumentOfExtendsClause_moduleA"
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 160,
      "end": 243,
      "body": {
        "type": "TSInterfaceBody",
        "start": 193,
        "end": 243,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 199,
            "end": 241,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 199,
              "end": 217,
              "decorators": [],
              "name": "VisualizationModel",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 217,
              "end": 240,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 219,
                "end": 240,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 226,
                  "end": 240,
                  "left": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 234,
                    "decorators": [],
                    "name": "Backbone",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 240,
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
        "start": 170,
        "end": 192,
        "decorators": [],
        "name": "IHasVisualizationModel",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 244,
      "end": 299,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 286,
        "end": 299,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 292,
            "end": 297,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 292,
              "end": 293,
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
              "start": 293,
              "end": 296,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 295,
                "end": 296,
                "typeName": {
                  "type": "Identifier",
                  "start": 295,
                  "end": 296,
                  "decorators": [],
                  "name": "T",
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
        "start": 250,
        "end": 251,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 251,
        "end": 285,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 252,
            "end": 284,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 262,
              "end": 284,
              "typeName": {
                "type": "Identifier",
                "start": 262,
                "end": 284,
                "decorators": [],
                "name": "IHasVisualizationModel",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 252,
              "end": 253,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 300,
      "end": 362,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 342,
        "end": 362,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 348,
            "end": 360,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 348,
              "end": 349,
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
              "start": 352,
              "end": 359,
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
        "start": 306,
        "end": 307,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 316,
        "end": 317,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 317,
        "end": 341,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 318,
            "end": 340,
            "typeName": {
              "type": "Identifier",
              "start": 318,
              "end": 340,
              "decorators": [],
              "name": "IHasVisualizationModel",
              "optional": false
            }
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
