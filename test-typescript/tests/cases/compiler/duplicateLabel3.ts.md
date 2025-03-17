__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "LabeledStatement",
      "start": 0,
      "end": 82,
      "body": {
        "type": "WhileStatement",
        "start": 8,
        "end": 82,
        "test": {
          "type": "Literal",
          "start": 15,
          "end": 19,
          "value": true,
          "raw": "true"
        },
        "body": {
          "type": "BlockStatement",
          "start": 21,
          "end": 82,
          "body": [
            {
              "type": "FunctionDeclaration",
              "start": 25,
              "end": 80,
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 80,
                "body": [
                  {
                    "type": "LabeledStatement",
                    "start": 44,
                    "end": 76,
                    "body": {
                      "type": "WhileStatement",
                      "start": 56,
                      "end": 76,
                      "test": {
                        "type": "Literal",
                        "start": 63,
                        "end": 67,
                        "value": true,
                        "raw": "true"
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 69,
                        "end": 76,
                        "body": []
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 50,
                      "name": "target",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            }
          ]
        }
      },
      "label": {
        "type": "Identifier",
        "start": 0,
        "end": 6,
        "name": "target",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
