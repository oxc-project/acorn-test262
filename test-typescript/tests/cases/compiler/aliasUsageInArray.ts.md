aliasUsageInArray_backbone.ts
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
aliasUsageInArray_moduleA.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 148,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 58,
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
        "end": 57,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 56,
          "raw": "\"./aliasUsageInArray_backbone\"",
          "value": "./aliasUsageInArray_backbone"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 59,
      "end": 147,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 66,
        "end": 147,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 114,
          "end": 147,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 72,
          "end": 90,
          "decorators": [],
          "name": "VisualizationModel",
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "MemberExpression",
          "start": 99,
          "end": 113,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 99,
            "end": 107,
            "decorators": [],
            "name": "Backbone",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 108,
            "end": 113,
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
aliasUsageInArray_main.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 285,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 58,
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
        "end": 57,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 56,
          "raw": "\"./aliasUsageInArray_backbone\"",
          "value": "./aliasUsageInArray_backbone"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 59,
      "end": 115,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 73,
        "decorators": [],
        "name": "moduleA",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 76,
        "end": 114,
        "expression": {
          "type": "Literal",
          "start": 84,
          "end": 113,
          "raw": "\"./aliasUsageInArray_moduleA\"",
          "value": "./aliasUsageInArray_moduleA"
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 116,
      "end": 199,
      "body": {
        "type": "TSInterfaceBody",
        "start": 149,
        "end": 199,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 155,
            "end": 197,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 173,
              "decorators": [],
              "name": "VisualizationModel",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 173,
              "end": 196,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 175,
                "end": 196,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 182,
                  "end": 196,
                  "left": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 190,
                    "decorators": [],
                    "name": "Backbone",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 196,
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
        "start": 126,
        "end": 148,
        "decorators": [],
        "name": "IHasVisualizationModel",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 246,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 245,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 233,
            "decorators": [],
            "name": "xs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 207,
              "end": 233,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 209,
                "end": 233,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 209,
                  "end": 231,
                  "typeName": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 231,
                    "decorators": [],
                    "name": "IHasVisualizationModel",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 236,
            "end": 245,
            "elements": [
              {
                "type": "Identifier",
                "start": 237,
                "end": 244,
                "decorators": [],
                "name": "moduleA",
                "optional": false
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
      "start": 247,
      "end": 285,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 284,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 272,
            "decorators": [],
            "name": "xs2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 254,
              "end": 272,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 256,
                "end": 272,
                "elementType": {
                  "type": "TSTypeQuery",
                  "start": 256,
                  "end": 270,
                  "exprName": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 270,
                    "decorators": [],
                    "name": "moduleA",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 275,
            "end": 284,
            "elements": [
              {
                "type": "Identifier",
                "start": 276,
                "end": 283,
                "decorators": [],
                "name": "moduleA",
                "optional": false
              }
            ]
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
