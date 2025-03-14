__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "raw": "1",
            "value": 1
          }
        },
        {
          "type": "VariableDeclarator",
          "start": 11,
          "end": 16,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 15,
            "end": 16,
            "raw": "2",
            "value": 2
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TryStatement",
      "start": 18,
      "end": 47,
      "block": {
        "type": "BlockStatement",
        "start": 22,
        "end": 24,
        "body": []
      },
      "finalizer": null,
      "handler": {
        "type": "CatchClause",
        "start": 25,
        "end": 47,
        "body": {
          "type": "BlockStatement",
          "start": 45,
          "end": 47,
          "body": []
        },
        "param": {
          "type": "ObjectPattern",
          "start": 32,
          "end": 43,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 34,
              "end": 35,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            {
              "type": "RestElement",
              "start": 37,
              "end": 41,
              "argument": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "decorators": [],
              "optional": false
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
