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
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 44,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 16,
          "decorators": [],
          "name": "Enum",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 17,
          "end": 44,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 23,
              "end": 29,
              "id": {
                "type": "Identifier",
                "start": 23,
                "end": 29,
                "decorators": [],
                "name": "Value1",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 35,
              "end": 41,
              "id": {
                "type": "Identifier",
                "start": 35,
                "end": 41,
                "decorators": [],
                "name": "Value2",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            }
          ]
        },
        "const": false,
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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 39,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 38,
          "value": "./provider",
          "raw": "'./provider'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 42,
      "end": 84,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 49,
        "end": 84,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 55,
            "end": 83,
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
              "object": {
                "type": "MemberExpression",
                "start": 63,
                "end": 76,
                "object": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 71,
                  "decorators": [],
                  "name": "provider",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 76,
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 77,
                "end": 83,
                "decorators": [],
                "name": "Value1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
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
