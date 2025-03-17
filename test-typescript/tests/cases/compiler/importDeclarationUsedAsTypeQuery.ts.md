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
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 34,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 32,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 23,
                "name": "id",
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
                "start": 23,
                "end": 31,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 25,
                  "end": 31
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
  "end": 157,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 67,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 75,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 144,
            "end": 155,
            "id": {
              "type": "Identifier",
              "start": 144,
              "end": 155,
              "name": "x",
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
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
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
