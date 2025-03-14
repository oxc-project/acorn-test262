external.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 21,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 20,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 20,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 20,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 20,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12,
                "end": 20,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 14,
                  "end": 20
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
main.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 53,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 53,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 25,
            "end": 51,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": {
              "type": "Literal",
              "start": 41,
              "end": 51,
              "raw": "\"external\"",
              "value": "external"
            },
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 33,
                "end": 34,
                "exported": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 34,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 34,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "raw": "\"M\"",
        "value": "M"
      }
    }
  ],
  "sourceType": "module"
}
```
