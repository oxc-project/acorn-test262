__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 19,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 35,
              "end": 39
            },
            "body": {
              "type": "EmptyStatement",
              "start": 40,
              "end": 41
            },
            "start": 29,
            "end": 41
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 63,
                    "end": 65
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 74,
                      "end": 79
                    },
                    "id": null,
                    "generator": false,
                    "start": 68,
                    "end": 79
                  },
                  "definite": false,
                  "start": 63,
                  "end": 79
                }
              ],
              "declare": false,
              "start": 59,
              "end": 80
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 52,
            "end": 80
          }
        ],
        "start": 22,
        "end": 86
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 4,
      "end": 86
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 4,
  "end": 86
}
```
