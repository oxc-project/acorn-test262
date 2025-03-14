a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 25,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 24,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 15,
        "end": 24,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 21,
          "end": 24,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": null,
        "implements": [],
        "superClass": null
      },
      "exportKind": "value"
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
  "end": 36,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 34,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 21,
          "exported": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "decorators": [],
            "name": "default",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
