__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 72,
  "end": 174,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 72,
      "end": 105,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 80,
        "end": 105,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 86,
            "end": 103,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 102,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 96,
                "end": 102
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
        "start": 78,
        "end": 79,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 106,
      "end": 158,
      "body": {
        "type": "TSModuleBlock",
        "start": 118,
        "end": 158,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 124,
            "end": 156,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 131,
              "end": 156,
              "body": {
                "type": "TSInterfaceBody",
                "start": 143,
                "end": 156,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 145,
                    "end": 154,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 146,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 146,
                      "end": 154,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 148,
                        "end": 154
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 141,
                "end": 142,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 117,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSExportAssignment",
      "start": 160,
      "end": 173,
      "expression": {
        "type": "MemberExpression",
        "start": 169,
        "end": 172,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 169,
          "end": 170,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 171,
          "end": 172,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        }
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
  "end": 50,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 25,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 24,
          "raw": "\"./a\"",
          "value": "./a"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 37,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 37,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 36,
                "end": 37,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 40,
            "end": 48,
            "properties": [
              {
                "type": "Property",
                "start": 42,
                "end": 46,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 43,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
