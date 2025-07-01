__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "exports",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
      },
      "start": 0,
      "end": 17
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "exports",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 39
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 57
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 61,
                      "end": 67
                    },
                    "start": 59,
                    "end": 67
                  },
                  "start": 58,
                  "end": 67
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 57,
              "end": 69
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 46,
            "end": 69
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 75
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 77,
                "end": 83
              },
              "start": 75,
              "end": 83
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 74,
            "end": 84
          }
        ],
        "start": 40,
        "end": 86
      },
      "abstract": false,
      "declare": true,
      "start": 18,
      "end": 86
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Sub",
          "optional": false,
          "typeAnnotation": null,
          "start": 100,
          "end": 103
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
                "name": "instance",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 118
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 131,
                        "end": 132
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 134,
                          "end": 140
                        },
                        "start": 132,
                        "end": 140
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 131,
                      "end": 141
                    }
                  ],
                  "start": 121,
                  "end": 147
                },
                "start": 119,
                "end": 147
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": true,
              "readonly": false,
              "accessibility": null,
              "start": 110,
              "end": 148
            }
          ],
          "start": 104,
          "end": 150
        },
        "abstract": false,
        "declare": false,
        "start": 94,
        "end": 150
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 87,
      "end": 150
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "exports",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 176
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Sub",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 195
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Sub",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 195
                },
                "exportKind": "value",
                "start": 192,
                "end": 195
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 183,
            "end": 198
          }
        ],
        "start": 177,
        "end": 200
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 151,
      "end": 200
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 200
}
```
