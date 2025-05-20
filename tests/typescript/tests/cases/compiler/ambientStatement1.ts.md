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
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 86,
        "body": [
          {
            "type": "WhileStatement",
            "start": 29,
            "end": 41,
            "body": {
              "type": "EmptyStatement",
              "start": 40,
              "end": 41
            },
            "test": {
              "type": "Literal",
              "start": 35,
              "end": 39,
              "raw": "true",
              "value": true
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 52,
            "end": 80,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 59,
              "end": 80,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 63,
                  "end": 79,
                  "definite": false,
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
                    "async": false,
                    "body": {
                      "type": "Literal",
                      "start": 74,
                      "end": 79,
                      "raw": "false",
                      "value": false
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 21,
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
