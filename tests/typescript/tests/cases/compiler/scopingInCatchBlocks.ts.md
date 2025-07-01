__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [],
        "start": 4,
        "end": 7
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "ex1",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 17
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ThrowStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "ex1",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 32
              },
              "start": 23,
              "end": 33
            }
          ],
          "start": 19,
          "end": 35
        },
        "start": 8,
        "end": 35
      },
      "finalizer": null,
      "start": 0,
      "end": 35
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [],
        "start": 41,
        "end": 44
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "ex1",
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 54
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 56,
          "end": 59
        },
        "start": 45,
        "end": 59
      },
      "finalizer": null,
      "start": 37,
      "end": 59
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [],
        "start": 85,
        "end": 88
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "ex1",
          "optional": false,
          "typeAnnotation": null,
          "start": 95,
          "end": 98
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 100,
          "end": 103
        },
        "start": 89,
        "end": 103
      },
      "finalizer": null,
      "start": 81,
      "end": 103
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 130
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ex1",
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 136
          },
          "definite": false,
          "start": 129,
          "end": 136
        }
      ],
      "declare": false,
      "start": 125,
      "end": 137
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 153
}
```
