enum.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 33,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 33,
        "body": {
          "type": "TSEnumBody",
          "start": 17,
          "end": 33,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 23,
              "end": 24,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            {
              "type": "TSEnumMember",
              "start": 30,
              "end": 31,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
                "decorators": [],
                "name": "B",
                "optional": false
              }
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
          "optional": false
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
alias.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 103,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 27,
        "raw": "\"./enum\"",
        "value": "./enum"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 12,
            "decorators": [],
            "name": "Enum",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 12,
            "decorators": [],
            "name": "Enum",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 30,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 42,
        "decorators": [],
        "name": "EnumA",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 45,
        "end": 51,
        "left": {
          "type": "Identifier",
          "start": 45,
          "end": 49,
          "decorators": [],
          "name": "Enum",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 50,
          "end": 51,
          "decorators": [],
          "name": "A",
          "optional": false
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 54,
      "end": 102,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 61,
        "end": 102,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 66,
          "end": 71,
          "decorators": [],
          "name": "EnumA",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 74,
          "end": 101,
          "types": [
            {
              "type": "TSTupleType",
              "start": 74,
              "end": 82,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 75,
                  "end": 81
                }
              ]
            },
            {
              "type": "TSTupleType",
              "start": 85,
              "end": 101,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 86,
                  "end": 92
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 94,
                  "end": 100
                }
              ]
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
