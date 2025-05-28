__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 200,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 17,
      "expression": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "exports",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 18,
      "end": 86,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 39,
        "decorators": [],
        "name": "exports",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 40,
        "end": 86,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 46,
            "end": 69,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 57,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 57,
              "end": 69,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 58,
                  "end": 67,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 59,
                    "end": 67,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 61,
                      "end": 67
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 74,
            "end": 84,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 83,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 77,
                "end": 83
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 87,
      "end": 150,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 94,
        "end": 150,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 100,
          "end": 103,
          "decorators": [],
          "name": "Sub",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 104,
          "end": 150,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 110,
              "end": 148,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 110,
                "end": 118,
                "decorators": [],
                "name": "instance",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 119,
                "end": 147,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 121,
                  "end": 147,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 131,
                      "end": 141,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 131,
                        "end": 132,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 132,
                        "end": 140,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 134,
                          "end": 140
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": true,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 151,
      "end": 200,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 176,
        "decorators": [],
        "name": "exports",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 177,
        "end": 200,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 183,
            "end": 198,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 192,
                "end": 195,
                "local": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 195,
                  "decorators": [],
                  "name": "Sub",
                  "optional": false,
                  "typeAnnotation": null
                },
                "exported": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 195,
                  "decorators": [],
                  "name": "Sub",
                  "optional": false,
                  "typeAnnotation": null
                },
                "exportKind": "value"
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
