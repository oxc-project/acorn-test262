__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 93,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 93,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "value": "a",
        "raw": "\"a\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 93,
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "start": 23,
            "end": 47,
            "declaration": {
              "type": "Identifier",
              "start": 38,
              "end": 47,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 50,
            "end": 63,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 57,
              "end": 63,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 61,
                  "end": 62,
                  "id": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 62,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 66,
            "end": 91,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 73,
              "end": 91,
              "id": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 82,
                "end": 90,
                "exprName": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
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
