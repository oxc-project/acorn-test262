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
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 34,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 34,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 32,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 23,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
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
              "value": null
            }
          ]
        },
        "declare": false,
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
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
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
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 78,
        "end": 131,
        "expression": {
          "type": "Literal",
          "start": 86,
          "end": 130,
          "raw": "'./importDeclarationUsedAsTypeQuery_require'",
          "value": "./importDeclarationUsedAsTypeQuery_require",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 133,
      "end": 156,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 140,
        "end": 156,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 144,
            "end": 155,
            "definite": false,
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
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
