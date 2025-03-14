__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 28,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 4,
            "end": 19,
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "start": 5,
                "end": 18,
                "argument": {
                  "type": "ObjectPattern",
                  "start": 8,
                  "end": 18,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 9,
                      "end": 13,
                      "computed": false,
                      "key": {
                        "type": "Literal",
                        "start": 9,
                        "end": 10,
                        "raw": "0",
                        "value": 0
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
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
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 22,
            "end": 28,
            "elements": [
              {
                "type": "Literal",
                "start": 23,
                "end": 24,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 26,
                "end": 27,
                "raw": "1",
                "value": 1
              }
            ]
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
