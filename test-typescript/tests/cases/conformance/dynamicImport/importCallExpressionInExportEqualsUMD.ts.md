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
        "raw": "42",
        "value": 42
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
        "async": true,
        "body": {
          "type": "BlockStatement",
          "start": 26,
          "end": 80,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 32,
              "end": 78,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 38,
                  "end": 77,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 47,
                    "decorators": [],
                    "name": "something",
                    "optional": false
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "start": 50,
                    "end": 77,
                    "argument": {
                      "type": "ImportExpression",
                      "start": 56,
                      "end": 77,
                      "options": null,
                      "source": {
                        "type": "Literal",
                        "start": 63,
                        "end": 76,
                        "raw": "\"./something\"",
                        "value": "./something"
                      }
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": null,
        "params": []
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
