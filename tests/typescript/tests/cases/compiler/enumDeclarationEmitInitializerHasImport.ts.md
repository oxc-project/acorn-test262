__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 44,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 44,
        "body": {
          "type": "TSEnumBody",
          "start": 17,
          "end": 44,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 23,
              "end": 29,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 23,
                "end": 29,
                "decorators": [],
                "name": "Value1",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null
            },
            {
              "type": "TSEnumMember",
              "start": 35,
              "end": 41,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 35,
                "end": 41,
                "decorators": [],
                "name": "Value2",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null
            }
          ]
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 16,
          "decorators": [],
          "name": "Enum",
          "optional": false,
          "typeAnnotation": null
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
  "end": 84,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 15,
        "decorators": [],
        "name": "provider",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 39,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 38,
          "raw": "'./provider'",
          "value": "./provider"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 42,
      "end": 84,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 49,
        "end": 84,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 55,
            "end": 83,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 60,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 63,
              "end": 83,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 63,
                "end": 76,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 71,
                  "decorators": [],
                  "name": "provider",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 76,
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 77,
                "end": 83,
                "decorators": [],
                "name": "Value1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
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
