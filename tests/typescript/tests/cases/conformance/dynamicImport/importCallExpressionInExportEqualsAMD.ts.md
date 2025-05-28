__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 13,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 12,
      "expression": {
        "type": "Literal",
        "start": 9,
        "end": 11,
        "value": 42,
        "raw": "42"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 81,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 81,
      "expression": {
        "type": "FunctionExpression",
        "start": 9,
        "end": 80,
        "id": null,
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 26,
          "end": 80,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 32,
              "end": 78,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 38,
                  "end": 77,
                  "id": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 47,
                    "decorators": [],
                    "name": "something",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "start": 50,
                    "end": 77,
                    "argument": {
                      "type": "ImportExpression",
                      "start": 56,
                      "end": 77,
                      "source": {
                        "type": "Literal",
                        "start": 63,
                        "end": 76,
                        "value": "./something",
                        "raw": "\"./something\""
                      },
                      "options": null,
                      "phase": null
                    }
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          ]
        },
        "expression": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
