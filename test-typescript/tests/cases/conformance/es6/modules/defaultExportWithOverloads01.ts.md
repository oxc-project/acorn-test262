defaultExportWithOverloads01.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 112,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 28,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 15,
        "end": 28,
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 25,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 29,
      "end": 66,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 44,
        "end": 66,
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 53,
          "end": 54,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 55,
            "end": 64,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 58,
                "end": 64
              }
            }
          }
        ]
      },
      "exportKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 67,
      "end": 112,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 82,
        "end": 112,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 109,
          "end": 112,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 91,
          "end": 92,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "params": [
          {
            "type": "RestElement",
            "start": 93,
            "end": 107,
            "argument": {
              "type": "Identifier",
              "start": 96,
              "end": 100,
              "decorators": [],
              "name": "args",
              "optional": false
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 107,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 102,
                "end": 107,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 102,
                  "end": 105
                }
              }
            }
          }
        ]
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script"
}
```
