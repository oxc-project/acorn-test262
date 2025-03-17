__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 131,
  "body": [
    {
      "type": "IfStatement",
      "start": 57,
      "end": 103,
      "test": {
        "type": "Literal",
        "start": 61,
        "end": 65,
        "value": true,
        "raw": "true"
      },
      "consequent": {
        "type": "ExportNamedDeclaration",
        "start": 67,
        "end": 103,
        "declaration": {
          "type": "VariableDeclaration",
          "start": 74,
          "end": 103,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 80,
              "end": 102,
              "id": {
                "type": "Identifier",
                "start": 80,
                "end": 102,
                "name": "cssExports",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 90,
                  "end": 102,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 92,
                    "end": 102,
                    "typeName": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 102,
                      "name": "CssExports",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
          "declare": false
        },
        "specifiers": [],
        "source": null,
        "attributes": [],
        "exportKind": "value"
      },
      "alternate": null
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 104,
      "end": 130,
      "declaration": {
        "type": "Identifier",
        "start": 119,
        "end": 129,
        "name": "cssExports",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
