__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 8,
            "end": 9
          },
          "definite": false,
          "start": 4,
          "end": 9
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 11,
            "end": 12
          },
          "init": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 15,
            "end": 16
          },
          "definite": false,
          "start": 11,
          "end": 16
        }
      ],
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [],
        "start": 22,
        "end": 24
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 35
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 35
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 34,
              "end": 35
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 41
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 37,
              "end": 41
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 32,
          "end": 43
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 45,
          "end": 47
        },
        "start": 25,
        "end": 47
      },
      "finalizer": null,
      "start": 18,
      "end": 47
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 47
}
```
