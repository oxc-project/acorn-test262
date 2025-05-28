__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 35,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 34,
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 19,
          "object": {
            "type": "ArrayExpression",
            "start": 0,
            "end": 15,
            "elements": [
              {
                "type": "Literal",
                "start": 1,
                "end": 4,
                "value": "a",
                "raw": "'a'"
              },
              {
                "type": "Literal",
                "start": 6,
                "end": 9,
                "value": "b",
                "raw": "'b'"
              },
              {
                "type": "Literal",
                "start": 11,
                "end": 14,
                "value": "c",
                "raw": "'c'"
              }
            ]
          },
          "property": {
            "type": "Identifier",
            "start": 16,
            "end": 19,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 20,
            "end": 33,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "start": 25,
              "end": 33,
              "object": {
                "type": "Identifier",
                "start": 25,
                "end": 26,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 27,
                "end": 33,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
