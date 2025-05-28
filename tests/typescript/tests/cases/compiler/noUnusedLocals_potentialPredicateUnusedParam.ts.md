__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 80,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 38,
        "decorators": [],
        "name": "potentialPredicateUnusedParam",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      ],
      "returnType": null,
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
              "argument": {
                "type": "UnaryExpression",
                "start": 63,
                "end": 77,
                "operator": "!",
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
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 75,
                      "decorators": [],
                      "name": "random",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "prefix": true
              },
              "prefix": true
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
