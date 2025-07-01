__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": true,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 66,
                  "end": 69
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 66,
                  "end": 69
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 66,
                "end": 69
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 74
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 74
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 71,
                "end": 74
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 83
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 76,
                "end": 83
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 85
          }
        ],
        "returnType": null,
        "body": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 93
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 103
              },
              "start": 94,
              "end": 103
            }
          ],
          "optional": false,
          "start": 90,
          "end": 104
        },
        "id": null,
        "generator": false,
        "start": 57,
        "end": 104
      },
      "directive": null,
      "start": 57,
      "end": 105
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 105
}
```
