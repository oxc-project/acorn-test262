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
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 151,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 18,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 4,
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 5,
            "end": 18,
            "decorators": [],
            "name": "importScripts",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "CallExpression",
          "start": 21,
          "end": 151,
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
          "callee": {
            "type": "FunctionExpression",
            "start": 22,
            "end": 135,
            "async": false,
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
                    "async": false,
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
                            "callee": {
                              "type": "MemberExpression",
                              "start": 89,
                              "end": 108,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 89,
                                "end": 102,
                                "decorators": [],
                                "name": "importScripts",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 103,
                                "end": 108,
                                "decorators": [],
                                "name": "apply",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
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
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
