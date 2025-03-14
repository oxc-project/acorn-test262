/a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 12,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 14,
      "end": 32,
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 28,
          "end": 29,
          "exported": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 54,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 40,
        "end": 54,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 46,
            "end": 53,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 48,
              "decorators": [],
              "name": "AA",
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 51,
              "end": 53,
              "properties": []
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
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
  "end": 31,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 30,
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 29,
        "raw": "'./a'",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 14,
          "end": 16,
          "exported": {
            "type": "Identifier",
            "start": 14,
            "end": 16,
            "decorators": [],
            "name": "AA",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 16,
            "decorators": [],
            "name": "AA",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
