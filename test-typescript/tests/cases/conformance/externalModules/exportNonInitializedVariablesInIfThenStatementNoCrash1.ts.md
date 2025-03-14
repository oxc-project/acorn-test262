exportNonInitializedVariablesInIfThenStatementNoCrash1.ts
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
      "alternate": null,
      "consequent": {
        "type": "ExportNamedDeclaration",
        "start": 67,
        "end": 103,
        "attributes": [],
        "declaration": {
          "type": "VariableDeclaration",
          "start": 74,
          "end": 103,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 80,
              "end": 102,
              "definite": false,
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
                      "optional": false
                    }
                  }
                }
              },
              "init": null
            }
          ],
          "declare": false,
          "kind": "const"
        },
        "exportKind": "value",
        "source": null,
        "specifiers": []
      },
      "test": {
        "type": "Literal",
        "start": 61,
        "end": 65,
        "raw": "true",
        "value": true
      }
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
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script"
}
```
