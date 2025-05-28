__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "BlockStatement",
      "start": 0,
      "end": 19,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 6,
          "end": 17,
          "kind": "var",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 10,
              "end": 16,
              "id": {
                "type": "Identifier",
                "start": 10,
                "end": 11,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Literal",
                "start": 14,
                "end": 16,
                "value": "",
                "raw": "\"\""
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 20,
      "end": 43,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 27,
        "end": 43,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 31,
            "end": 42,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 42,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 32,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 34,
                  "end": 42,
                  "exprName": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 42,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
