__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 81,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 80,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 51,
        "end": 80,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 55,
            "end": 78,
            "argument": {
              "type": "UnaryExpression",
              "start": 62,
              "end": 77,
              "argument": {
                "type": "UnaryExpression",
                "start": 63,
                "end": 77,
                "argument": {
                  "type": "CallExpression",
                  "start": 64,
                  "end": 77,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 64,
                    "end": 75,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 68,
                      "decorators": [],
                      "name": "Math",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 75,
                      "decorators": [],
                      "name": "random",
                      "optional": false
                    }
                  },
                  "optional": false
                },
                "operator": "!",
                "prefix": true
              },
              "operator": "!",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 38,
        "decorators": [],
        "name": "potentialPredicateUnusedParam",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 39,
          "end": 49,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 40,
            "end": 49,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 42,
              "end": 49
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
