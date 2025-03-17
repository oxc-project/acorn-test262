__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 52,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 52,
            "name": "w_e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 52,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 19,
                "end": 52,
                "objectType": {
                  "type": "TSTypeQuery",
                  "start": 20,
                  "end": 37,
                  "exprName": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 37,
                    "name": "globalThis",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 39,
                  "end": 51,
                  "literal": {
                    "type": "Literal",
                    "start": 39,
                    "end": 51,
                    "value": "globalThis",
                    "raw": "\"globalThis\""
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
