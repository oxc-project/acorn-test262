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
        "name": "M1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 63,
                  "end": 79,
                  "id": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 65,
                    "name": "v1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 68,
                    "end": 79,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "Literal",
                      "start": 74,
                      "end": 79,
                      "value": false,
                      "raw": "false"
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
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
