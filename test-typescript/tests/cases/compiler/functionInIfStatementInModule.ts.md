__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 2,
  "end": 89,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 2,
      "end": 88,
      "body": {
        "type": "TSModuleBlock",
        "start": 16,
        "end": 88,
        "body": [
          {
            "type": "IfStatement",
            "start": 22,
            "end": 86,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 33,
              "end": 86,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 43,
                  "end": 80,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 69,
                    "end": 80,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 55,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 56,
                      "end": 59,
                      "decorators": [],
                      "name": "src",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 26,
              "end": 31,
              "raw": "false",
              "value": false
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "decorators": [],
        "name": "Midori",
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
