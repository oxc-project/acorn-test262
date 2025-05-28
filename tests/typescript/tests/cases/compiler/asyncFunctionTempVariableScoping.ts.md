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
        "expression": true,
        "async": true,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 64,
            "end": 85,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 66,
                "end": 69,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 69,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 69,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 71,
                "end": 74,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 74,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 74,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 76,
                "end": 83,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 83,
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "body": {
          "type": "CallExpression",
          "start": 90,
          "end": 104,
          "callee": {
            "type": "Identifier",
            "start": 90,
            "end": 93,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "AwaitExpression",
              "start": 94,
              "end": 103,
              "argument": {
                "type": "Identifier",
                "start": 100,
                "end": 103,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "optional": false
        },
        "id": null,
        "generator": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
