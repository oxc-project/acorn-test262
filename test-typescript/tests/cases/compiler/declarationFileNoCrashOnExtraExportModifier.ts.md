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
        "name": "exports",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 18,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 39,
        "name": "exports",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 40,
        "end": 86,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 46,
            "end": 69,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 57,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 57,
              "end": 69,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 58,
                  "end": 67,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 59,
                    "end": 67,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 61,
                      "end": 67
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 74,
            "end": 84,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "name": "t",
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
              "start": 75,
              "end": 83,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 77,
                "end": 83
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
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 87,
      "end": 150,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 94,
        "end": 150,
        "id": {
          "type": "Identifier",
          "start": 100,
          "end": 103,
          "name": "Sub",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 104,
          "end": 150,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 110,
              "end": 148,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 110,
                "end": 118,
                "name": "instance",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": true,
              "readonly": false,
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
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 151,
      "end": 200,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 176,
        "name": "exports",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                  "name": "Sub",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 195,
                  "name": "Sub",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exportKind": "value"
              }
            ],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
