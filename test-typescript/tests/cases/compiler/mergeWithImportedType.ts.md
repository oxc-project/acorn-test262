f1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 17,
        "body": {
          "type": "TSEnumBody",
          "start": 14,
          "end": 17,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 15,
              "end": 16,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 15,
                "end": 16,
                "decorators": [],
                "name": "X",
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
          "end": 13,
          "decorators": [],
          "name": "E",
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
f2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 22,
        "raw": "\"./f1\"",
        "value": "./f1"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "E",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "E",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 42,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 31,
        "end": 42,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 36,
          "end": 37,
          "decorators": [],
          "name": "E",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 40,
          "end": 41,
          "typeName": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "E",
            "optional": false
          }
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
