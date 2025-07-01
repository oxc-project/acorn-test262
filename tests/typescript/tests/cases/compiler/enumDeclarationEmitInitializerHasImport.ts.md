__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Enum",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 16
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value1",
                "optional": false,
                "typeAnnotation": null,
                "start": 23,
                "end": 29
              },
              "initializer": null,
              "computed": false,
              "start": 23,
              "end": 29
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value2",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 41
              },
              "initializer": null,
              "computed": false,
              "start": 35,
              "end": 41
            }
          ],
          "start": 17,
          "end": 44
        },
        "const": false,
        "declare": false,
        "start": 7,
        "end": 44
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 44
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 44
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "provider",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 15
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./provider",
          "raw": "'./provider'",
          "start": 26,
          "end": 38
        },
        "start": 18,
        "end": 39
      },
      "importKind": "value",
      "start": 0,
      "end": 40
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 60
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "provider",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 71
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 76
                },
                "optional": false,
                "computed": false,
                "start": 63,
                "end": 76
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value1",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 83
              },
              "optional": false,
              "computed": false,
              "start": 63,
              "end": 83
            },
            "definite": false,
            "start": 55,
            "end": 83
          }
        ],
        "declare": false,
        "start": 49,
        "end": 84
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 42,
      "end": 84
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 84
}
```
