__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 154,
  "body": [
    {
      "type": "TryStatement",
      "start": 0,
      "end": 35,
      "block": {
        "type": "BlockStatement",
        "start": 4,
        "end": 7,
        "body": []
      },
      "finalizer": null,
      "handler": {
        "type": "CatchClause",
        "start": 8,
        "end": 35,
        "body": {
          "type": "BlockStatement",
          "start": 19,
          "end": 35,
          "body": [
            {
              "type": "ThrowStatement",
              "start": 23,
              "end": 33,
              "argument": {
                "type": "Identifier",
                "start": 29,
                "end": 32,
                "decorators": [],
                "name": "ex1",
                "optional": false
              }
            }
          ]
        },
        "param": {
          "type": "Identifier",
          "start": 14,
          "end": 17,
          "decorators": [],
          "name": "ex1",
          "optional": false
        }
      }
    },
    {
      "type": "TryStatement",
      "start": 37,
      "end": 59,
      "block": {
        "type": "BlockStatement",
        "start": 41,
        "end": 44,
        "body": []
      },
      "finalizer": null,
      "handler": {
        "type": "CatchClause",
        "start": 45,
        "end": 59,
        "body": {
          "type": "BlockStatement",
          "start": 56,
          "end": 59,
          "body": []
        },
        "param": {
          "type": "Identifier",
          "start": 51,
          "end": 54,
          "decorators": [],
          "name": "ex1",
          "optional": false
        }
      }
    },
    {
      "type": "TryStatement",
      "start": 81,
      "end": 103,
      "block": {
        "type": "BlockStatement",
        "start": 85,
        "end": 88,
        "body": []
      },
      "finalizer": null,
      "handler": {
        "type": "CatchClause",
        "start": 89,
        "end": 103,
        "body": {
          "type": "BlockStatement",
          "start": 100,
          "end": 103,
          "body": []
        },
        "param": {
          "type": "Identifier",
          "start": 95,
          "end": 98,
          "decorators": [],
          "name": "ex1",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 136,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 133,
            "end": 136,
            "decorators": [],
            "name": "ex1",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
