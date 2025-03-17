__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 84,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 83,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 82,
        "operator": "??=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 24,
          "object": {
            "type": "MemberExpression",
            "start": 0,
            "end": 17,
            "object": {
              "type": "Identifier",
              "start": 0,
              "end": 7,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 8,
              "end": 17,
              "name": "prototype",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 18,
            "end": 24,
            "name": "remove",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 29,
          "end": 82,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "BlockStatement",
            "start": 41,
            "end": 82,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 45,
                "end": 80,
                "expression": {
                  "type": "ChainExpression",
                  "start": 45,
                  "end": 79,
                  "expression": {
                    "type": "CallExpression",
                    "start": 45,
                    "end": 79,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 45,
                      "end": 73,
                      "object": {
                        "type": "MemberExpression",
                        "start": 45,
                        "end": 60,
                        "object": {
                          "type": "ThisExpression",
                          "start": 45,
                          "end": 49
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 50,
                          "end": 60,
                          "name": "parentNode",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 73,
                        "name": "removeChild",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": true
                    },
                    "arguments": [
                      {
                        "type": "ThisExpression",
                        "start": 74,
                        "end": 78
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                },
                "directive": null
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
