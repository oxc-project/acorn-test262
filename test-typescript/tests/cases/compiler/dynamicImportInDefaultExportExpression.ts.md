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
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 32,
              "name": "getInstance",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 34,
              "end": 86,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "source": {
                        "type": "Literal",
                        "start": 70,
                        "end": 78,
                        "value": "./foo2",
                        "raw": "'./foo2'"
                      },
                      "options": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "kind": "init",
            "optional": false
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
