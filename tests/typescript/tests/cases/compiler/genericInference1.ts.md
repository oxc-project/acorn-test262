__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 1,
                "end": 4
              },
              {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 6,
                "end": 9
              },
              {
                "type": "Literal",
                "value": "c",
                "raw": "'c'",
                "start": 11,
                "end": 14
              }
            ],
            "start": 0,
            "end": 15
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 19
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 19
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 20,
                "end": 21
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 25,
                "end": 26
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 33
              },
              "optional": false,
              "computed": false,
              "start": 25,
              "end": 33
            },
            "id": null,
            "generator": false,
            "start": 20,
            "end": 33
          }
        ],
        "optional": false,
        "start": 0,
        "end": 34
      },
      "directive": null,
      "start": 0,
      "end": 35
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 35
}
```
