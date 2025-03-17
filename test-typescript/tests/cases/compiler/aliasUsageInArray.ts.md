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
        "name": "Backbone",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 57,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 56,
          "value": "./aliasUsageInArray_backbone",
          "raw": "\"./aliasUsageInArray_backbone\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 59,
      "end": 147,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 66,
        "end": 147,
        "id": {
          "type": "Identifier",
          "start": 72,
          "end": 90,
          "name": "VisualizationModel",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "MemberExpression",
          "start": 99,
          "end": 113,
          "object": {
            "type": "Identifier",
            "start": 99,
            "end": 107,
            "name": "Backbone",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 108,
            "end": 113,
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
          "start": 114,
          "end": 147,
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
        "name": "Backbone",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 57,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 56,
          "value": "./aliasUsageInArray_backbone",
          "raw": "\"./aliasUsageInArray_backbone\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 59,
      "end": 115,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 73,
        "name": "moduleA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 76,
        "end": 114,
        "expression": {
          "type": "Literal",
          "start": 84,
          "end": 113,
          "value": "./aliasUsageInArray_moduleA",
          "raw": "\"./aliasUsageInArray_moduleA\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 116,
      "end": 199,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 148,
        "name": "IHasVisualizationModel",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 173,
              "name": "VisualizationModel",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "name": "Backbone",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 196,
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
      "start": 201,
      "end": 246,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 233,
            "name": "xs",
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
                    "name": "IHasVisualizationModel",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
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
                "name": "moduleA",
                "typeAnnotation": null,
                "decorators": [],
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
      "start": 247,
      "end": 285,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 284,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 272,
            "name": "xs2",
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
                    "name": "moduleA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
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
                "name": "moduleA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
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
