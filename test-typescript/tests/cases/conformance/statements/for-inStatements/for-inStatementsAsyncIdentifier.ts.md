__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "name": "async",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForInStatement",
      "start": 11,
      "end": 43,
      "left": {
        "type": "Identifier",
        "start": 16,
        "end": 21,
        "name": "async",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "right": {
        "type": "ObjectExpression",
        "start": 25,
        "end": 39,
        "properties": [
          {
            "type": "Property",
            "start": 27,
            "end": 31,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 30,
              "end": 31,
              "value": 1,
              "raw": "1"
            },
            "kind": "init",
            "optional": false
          },
          {
            "type": "Property",
            "start": 33,
            "end": 37,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 36,
              "end": 37,
              "value": 2,
              "raw": "2"
            },
            "kind": "init",
            "optional": false
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 43,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
