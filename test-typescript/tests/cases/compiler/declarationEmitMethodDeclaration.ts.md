__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 57,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 57,
      "declaration": {
        "type": "ObjectExpression",
        "start": 15,
        "end": 57,
        "properties": [
          {
            "type": "Property",
            "start": 21,
            "end": 55,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 28,
              "decorators": [],
              "name": "methods",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "ObjectExpression",
              "start": 30,
              "end": 55,
              "properties": [
                {
                  "type": "Property",
                  "start": 40,
                  "end": 49,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 43,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 43,
                    "end": 49,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 46,
                      "end": 49,
                      "body": []
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
            }
          }
        ]
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
