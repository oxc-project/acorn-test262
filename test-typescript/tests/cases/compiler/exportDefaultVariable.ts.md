exportDefaultVariable.ts
```json
{
  "type": "Program",
  "start": 30,
  "end": 103,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 49,
            "decorators": [],
            "name": "io",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 49,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 46,
                "end": 49
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 52,
      "end": 102,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 76,
        "end": 102,
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "start": 82,
            "end": 100,
            "declaration": {
              "type": "Identifier",
              "start": 97,
              "end": 99,
              "decorators": [],
              "name": "io",
              "optional": false
            },
            "exportKind": "value"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 67,
        "end": 75,
        "raw": "'module'",
        "value": "module"
      }
    }
  ],
  "sourceType": "script"
}
```
