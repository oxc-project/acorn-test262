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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 38,
        "name": "potentialPredicateUnusedParam",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 39,
          "end": 49,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 40,
            "end": 49,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 42,
              "end": 49
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 63,
                "end": 77,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "CallExpression",
                  "start": 64,
                  "end": 77,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 64,
                    "end": 75,
                    "object": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 68,
                      "name": "Math",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 75,
                      "name": "random",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
