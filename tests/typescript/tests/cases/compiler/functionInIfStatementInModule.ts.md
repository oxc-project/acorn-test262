__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 2,
  "end": 88,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 2,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "decorators": [],
        "name": "Midori",
        "optional": false,
        "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 69,
                    "end": 80,
                    "body": []
                  },
                  "expression": false
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
