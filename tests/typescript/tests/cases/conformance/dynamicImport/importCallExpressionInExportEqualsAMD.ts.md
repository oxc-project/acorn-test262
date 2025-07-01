__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Literal",
        "value": 42,
        "raw": "42",
        "start": 9,
        "end": 11
      },
      "start": 0,
      "end": 12
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 13
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "FunctionExpression",
        "id": null,
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "something",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 38,
                    "end": 47
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "ImportExpression",
                      "source": {
                        "type": "Literal",
                        "value": "./something",
                        "raw": "\"./something\"",
                        "start": 63,
                        "end": 76
                      },
                      "options": null,
                      "phase": null,
                      "start": 56,
                      "end": 77
                    },
                    "start": 50,
                    "end": 77
                  },
                  "definite": false,
                  "start": 38,
                  "end": 77
                }
              ],
              "declare": false,
              "start": 32,
              "end": 78
            }
          ],
          "start": 26,
          "end": 80
        },
        "expression": false,
        "start": 9,
        "end": 80
      },
      "start": 0,
      "end": 81
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 81
}
```
