ref/a.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 41,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 40,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 29,
        "end": 40,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 37,
          "end": 40,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 35,
          "end": 36,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
b.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 25,
        "raw": "\"./ref/a\"",
        "value": "./ref/a"
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
            "name": "A",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 55,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 34,
        "end": 55,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 52,
          "end": 55,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 40,
          "end": 41,
          "decorators": [],
          "name": "B",
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 50,
          "end": 51,
          "decorators": [],
          "name": "A",
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
