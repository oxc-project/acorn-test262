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
        "start": 9,
        "end": 15
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
              "start": 26,
              "end": 31
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
                    "start": 52,
                    "end": 55
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
                      "start": 56,
                      "end": 59
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 69,
                    "end": 80
                  },
                  "expression": false,
                  "start": 43,
                  "end": 80
                }
              ],
              "start": 33,
              "end": 86
            },
            "alternate": null,
            "start": 22,
            "end": 86
          }
        ],
        "start": 16,
        "end": 88
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 2,
      "end": 88
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 2,
  "end": 88
}
```
