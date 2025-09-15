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
        "start": 22,
        "end": 24
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
              "start": 38,
              "end": 42
            },
            "body": {
              "type": "EmptyStatement",
              "start": 43,
              "end": 44
            },
            "start": 32,
            "end": 44
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
                    "start": 66,
                    "end": 68
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
                      "start": 77,
                      "end": 82
                    },
                    "id": null,
                    "generator": false,
                    "start": 71,
                    "end": 82
                  },
                  "definite": false,
                  "start": 66,
                  "end": 82
                }
              ],
              "declare": false,
              "start": 62,
              "end": 83
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 55,
            "end": 83
          }
        ],
        "start": 25,
        "end": 89
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 4,
      "end": 89
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 4,
  "end": 89
}
```
