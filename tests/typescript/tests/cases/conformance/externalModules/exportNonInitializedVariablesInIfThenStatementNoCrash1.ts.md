__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 130,
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
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 80,
              "end": 102,
              "id": {
                "type": "Identifier",
                "start": 80,
                "end": 102,
                "decorators": [],
                "name": "cssExports",
                "optional": false,
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
                      "decorators": [],
                      "name": "CssExports",
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
        "decorators": [],
        "name": "cssExports",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
