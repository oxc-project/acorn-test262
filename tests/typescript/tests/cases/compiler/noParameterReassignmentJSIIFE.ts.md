__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 4
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "importScripts",
            "optional": false,
            "typeAnnotation": null,
            "start": 5,
            "end": 18
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 18
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "importScripts",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 45
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "importScripts",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 89,
                                "end": 102
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "apply",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 103,
                                "end": 108
                              },
                              "optional": false,
                              "computed": false,
                              "start": 89,
                              "end": 108
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ThisExpression",
                                "start": 109,
                                "end": 113
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arguments",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 115,
                                "end": 124
                              }
                            ],
                            "optional": false,
                            "start": 89,
                            "end": 125
                          },
                          "start": 82,
                          "end": 126
                        }
                      ],
                      "start": 72,
                      "end": 132
                    },
                    "expression": false,
                    "start": 60,
                    "end": 132
                  },
                  "start": 53,
                  "end": 133
                }
              ],
              "start": 47,
              "end": 135
            },
            "expression": false,
            "start": 22,
            "end": 135
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "importScripts",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 150
            }
          ],
          "optional": false,
          "start": 21,
          "end": 151
        },
        "start": 0,
        "end": 151
      },
      "directive": null,
      "start": 0,
      "end": 152
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 152
}
```
