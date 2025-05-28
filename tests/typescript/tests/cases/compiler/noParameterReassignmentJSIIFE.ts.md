__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 152,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 152,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 151,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 18,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 4,
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 5,
            "end": 18,
            "decorators": [],
            "name": "importScripts",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "CallExpression",
          "start": 21,
          "end": 151,
          "callee": {
            "type": "FunctionExpression",
            "start": 22,
            "end": 135,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 32,
                "end": 45,
                "decorators": [],
                "name": "importScripts",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 47,
              "end": 135,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 53,
                  "end": 133,
                  "argument": {
                    "type": "FunctionExpression",
                    "start": 60,
                    "end": 132,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 72,
                      "end": 132,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 82,
                          "end": 126,
                          "argument": {
                            "type": "CallExpression",
                            "start": 89,
                            "end": 125,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 89,
                              "end": 108,
                              "object": {
                                "type": "Identifier",
                                "start": 89,
                                "end": 102,
                                "decorators": [],
                                "name": "importScripts",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 103,
                                "end": 108,
                                "decorators": [],
                                "name": "apply",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
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
                                "start": 115,
                                "end": 124,
                                "decorators": [],
                                "name": "arguments",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "expression": false
                  }
                }
              ]
            },
            "expression": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "start": 137,
              "end": 150,
              "decorators": [],
              "name": "importScripts",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
