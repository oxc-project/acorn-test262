__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "??=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 0,
              "end": 7
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 8,
              "end": 17
            },
            "optional": false,
            "computed": false,
            "start": 0,
            "end": 17
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "remove",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 24
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 24
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 45,
                          "end": 49
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "parentNode",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 50,
                          "end": 60
                        },
                        "optional": false,
                        "computed": false,
                        "start": 45,
                        "end": 60
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "removeChild",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 62,
                        "end": 73
                      },
                      "optional": true,
                      "computed": false,
                      "start": 45,
                      "end": 73
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ThisExpression",
                        "start": 74,
                        "end": 78
                      }
                    ],
                    "optional": false,
                    "start": 45,
                    "end": 79
                  },
                  "start": 45,
                  "end": 79
                },
                "directive": null,
                "start": 45,
                "end": 80
              }
            ],
            "start": 41,
            "end": 82
          },
          "expression": false,
          "start": 29,
          "end": 82
        },
        "start": 0,
        "end": 82
      },
      "directive": null,
      "start": 0,
      "end": 83
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 83
}
```
