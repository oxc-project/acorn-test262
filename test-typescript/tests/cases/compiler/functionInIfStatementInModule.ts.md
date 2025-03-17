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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "name": "Midori",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 16,
        "end": 88,
        "body": [
          {
            "type": "IfStatement",
            "start": 22,
            "end": 86,
            "test": {
              "type": "Literal",
              "start": 26,
              "end": 31,
              "value": false,
              "raw": "false"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 33,
              "end": 86,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 43,
                  "end": 80,
                  "id": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 55,
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 56,
                      "end": 59,
                      "name": "src",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 69,
                    "end": 80,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
