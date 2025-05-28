__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 34,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 34,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 34,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 32,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 23,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 23,
                "end": 31,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 25,
                  "end": 31
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "start": 67,
  "end": 156,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 67,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 75,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 78,
        "end": 131,
        "expression": {
          "type": "Literal",
          "start": 86,
          "end": 130,
          "value": "./importDeclarationUsedAsTypeQuery_require",
          "raw": "'./importDeclarationUsedAsTypeQuery_require'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 133,
      "end": 156,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 140,
        "end": 156,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 144,
            "end": 155,
            "id": {
              "type": "Identifier",
              "start": 144,
              "end": 155,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 145,
                "end": 155,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 147,
                  "end": 155,
                  "exprName": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
