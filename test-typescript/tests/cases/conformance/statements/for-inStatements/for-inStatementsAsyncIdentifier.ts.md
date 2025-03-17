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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "async",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForInStatement",
      "start": 11,
      "end": 43,
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 43,
        "body": []
      },
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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 30,
              "end": 31,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "Property",
            "start": 33,
            "end": 37,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 36,
              "end": 37,
              "raw": "2",
              "value": 2
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
