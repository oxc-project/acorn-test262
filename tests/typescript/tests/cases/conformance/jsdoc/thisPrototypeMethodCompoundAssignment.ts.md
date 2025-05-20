__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 83,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 82,
        "operator": "??=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 24,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 0,
            "end": 17,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 0,
              "end": 7,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 8,
              "end": 17,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 18,
            "end": 24,
            "decorators": [],
            "name": "remove",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 29,
          "end": 82,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 41,
            "end": 82,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 45,
                "end": 80,
                "directive": null,
                "expression": {
                  "type": "ChainExpression",
                  "start": 45,
                  "end": 79,
                  "expression": {
                    "type": "CallExpression",
                    "start": 45,
                    "end": 79,
                    "arguments": [
                      {
                        "type": "ThisExpression",
                        "start": 74,
                        "end": 78
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 45,
                      "end": 73,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 45,
                        "end": 60,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 45,
                          "end": 49
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 50,
                          "end": 60,
                          "decorators": [],
                          "name": "parentNode",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": true,
                      "property": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 73,
                        "decorators": [],
                        "name": "removeChild",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": null,
          "typeParameters": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
