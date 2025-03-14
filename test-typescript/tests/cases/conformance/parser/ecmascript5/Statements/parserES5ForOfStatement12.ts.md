__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 27,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 24,
        "end": 27,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 17,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 17,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 11,
              "end": 17,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 12,
                  "end": 13,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 12,
                    "end": 13,
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
                    "start": 12,
                    "end": 13,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                },
                {
                  "type": "Property",
                  "start": 15,
                  "end": 16,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 15,
                    "end": 16,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "start": 15,
                    "end": 16,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                }
              ]
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "Identifier",
        "start": 21,
        "end": 22,
        "decorators": [],
        "name": "X",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
