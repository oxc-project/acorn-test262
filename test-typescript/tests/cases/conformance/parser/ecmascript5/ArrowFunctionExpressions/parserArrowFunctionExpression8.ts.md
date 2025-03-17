__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 31,
      "expression": {
        "type": "ConditionalExpression",
        "start": 0,
        "end": 31,
        "test": {
          "type": "Identifier",
          "start": 0,
          "end": 1,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "consequent": {
          "type": "ArrowFunctionExpression",
          "start": 4,
          "end": 16,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 4,
              "end": 5,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 15,
            "properties": [
              {
                "type": "Property",
                "start": 12,
                "end": 13,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 12,
                  "end": 13,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 12,
                  "end": 13,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "typeParameters": null,
          "returnType": null
        },
        "alternate": {
          "type": "ArrowFunctionExpression",
          "start": 19,
          "end": 31,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "ObjectExpression",
            "start": 25,
            "end": 30,
            "properties": [
              {
                "type": "Property",
                "start": 27,
                "end": 28,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 28,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 28,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
