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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 11,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 15,
            "end": 16,
            "value": 2,
            "raw": "2"
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
      "handler": {
        "type": "CatchClause",
        "start": 25,
        "end": 47,
        "param": {
          "type": "ObjectPattern",
          "start": 32,
          "end": 43,
          "properties": [
            {
              "type": "Property",
              "start": 34,
              "end": 35,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 37,
              "end": 41,
              "argument": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "name": "b",
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
        },
        "body": {
          "type": "BlockStatement",
          "start": 45,
          "end": 47,
          "body": []
        }
      },
      "finalizer": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
