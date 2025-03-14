/a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 20,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 19,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 16,
          "end": 18,
          "members": []
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
/b.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 28,
        "raw": "'./a'",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 14,
          "end": 15,
          "exported": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
