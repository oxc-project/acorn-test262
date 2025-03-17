__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 49,
            "name": "io",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 49,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 46,
                "end": 49
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "TSModuleDeclaration",
      "start": 52,
      "end": 102,
      "id": {
        "type": "Literal",
        "start": 67,
        "end": 75,
        "value": "module",
        "raw": "'module'"
      },
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
              "name": "io",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
