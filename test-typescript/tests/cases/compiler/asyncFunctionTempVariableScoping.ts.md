__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 105,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 57,
      "end": 105,
      "expression": {
        "type": "ArrowFunctionExpression",
        "start": 57,
        "end": 104,
        "id": null,
        "expression": true,
        "generator": false,
        "async": true,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 64,
            "end": 85,
            "properties": [
              {
                "type": "Property",
                "start": 66,
                "end": 69,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 69,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 69,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 71,
                "end": 74,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 74,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 74,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 76,
                "end": 83,
                "argument": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 83,
                  "name": "rest",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "body": {
          "type": "CallExpression",
          "start": 90,
          "end": 104,
          "callee": {
            "type": "Identifier",
            "start": 90,
            "end": 93,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "AwaitExpression",
              "start": 94,
              "end": 103,
              "argument": {
                "type": "Identifier",
                "start": 100,
                "end": 103,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "typeParameters": null,
        "returnType": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
