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
        "name": "Midori",
        "optional": false,
        "typeAnnotation": null,
        "start": 12,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 29,
              "end": 34
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 55,
                    "end": 58
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "src",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 59,
                      "end": 62
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 72,
                    "end": 83
                  },
                  "expression": false,
                  "start": 46,
                  "end": 83
                }
              ],
              "start": 36,
              "end": 89
            },
            "alternate": null,
            "start": 25,
            "end": 89
          }
        ],
        "start": 19,
        "end": 91
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2,
      "end": 91
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 2,
  "end": 91
}
```
