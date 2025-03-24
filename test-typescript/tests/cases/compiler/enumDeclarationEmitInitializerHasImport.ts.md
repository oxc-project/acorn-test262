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
          "name": "Enum",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [
          {
            "type": "TSEnumMember",
            "start": 23,
            "end": 29,
            "id": {
              "type": "Identifier",
              "start": 23,
              "end": 29,
              "name": "Value1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "Value2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ],
        "const": false,
        "declare": false,
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
                "name": "Value1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "Value2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": null,
              "computed": false
            }
          ]
        }
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
        "name": "provider",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 55,
            "end": 83,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 60,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "provider",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 76,
                  "name": "Enum",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 77,
                "end": 83,
                "name": "Value1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "const",
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
