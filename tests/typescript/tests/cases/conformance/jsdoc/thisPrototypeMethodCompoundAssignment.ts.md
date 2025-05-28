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
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 8,
              "end": 17,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 18,
            "end": 24,
            "decorators": [],
            "name": "remove",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 29,
          "end": 82,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
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
                          "decorators": [],
                          "name": "parentNode",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 73,
                        "decorators": [],
                        "name": "removeChild",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": true,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ThisExpression",
                        "start": 74,
                        "end": 78
                      }
                    ],
                    "optional": false
                  }
                },
                "directive": null
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
