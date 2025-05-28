__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 4,
  "end": 86,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 4,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 21,
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 86,
        "body": [
          {
            "type": "WhileStatement",
            "start": 29,
            "end": 41,
            "test": {
              "type": "Literal",
              "start": 35,
              "end": 39,
              "value": true,
              "raw": "true"
            },
            "body": {
              "type": "EmptyStatement",
              "start": 40,
              "end": 41
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 52,
            "end": 80,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 59,
              "end": 80,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 63,
                  "end": 79,
                  "id": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 65,
                    "decorators": [],
                    "name": "v1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 68,
                    "end": 79,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "start": 74,
                      "end": 79,
                      "value": false,
                      "raw": "false"
                    },
                    "id": null,
                    "generator": false
                  },
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
