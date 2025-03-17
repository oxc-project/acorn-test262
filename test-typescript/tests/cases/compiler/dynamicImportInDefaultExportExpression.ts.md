__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 88,
      "declaration": {
        "type": "ObjectExpression",
        "start": 15,
        "end": 88,
        "properties": [
          {
            "type": "Property",
            "start": 21,
            "end": 86,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 32,
              "decorators": [],
              "name": "getInstance",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "FunctionExpression",
              "start": 34,
              "end": 86,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 86,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 56,
                    "end": 80,
                    "argument": {
                      "type": "ImportExpression",
                      "start": 63,
                      "end": 79,
                      "options": null,
                      "source": {
                        "type": "Literal",
                        "start": 70,
                        "end": 78,
                        "raw": "'./foo2'",
                        "value": "./foo2"
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
