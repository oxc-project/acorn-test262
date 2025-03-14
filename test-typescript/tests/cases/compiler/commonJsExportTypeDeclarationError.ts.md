./types1.ts
```json
'=' expected.
```
./types2.ts
```json
Type expected.
```
./types3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 25,
        "raw": "\"./test\"",
        "value": "./test"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 11,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 11,
            "decorators": [],
            "name": "test",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 51,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 34,
        "end": 51,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 39,
          "end": 43,
          "decorators": [],
          "name": "test",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 46,
          "end": 50,
          "typeName": {
            "type": "Identifier",
            "start": 46,
            "end": 50,
            "decorators": [],
            "name": "test",
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
