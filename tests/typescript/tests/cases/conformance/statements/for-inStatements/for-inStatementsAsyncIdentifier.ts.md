__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "async",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "async",
        "optional": false,
        "typeAnnotation": null
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
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "Literal",
              "start": 30,
              "end": 31,
              "value": 1,
              "raw": "1"
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false
          },
          {
            "type": "Property",
            "start": 33,
            "end": 37,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "Literal",
              "start": 36,
              "end": 37,
              "value": 2,
              "raw": "2"
            },
            "method": false,
            "shorthand": false,
            "computed": false,
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
