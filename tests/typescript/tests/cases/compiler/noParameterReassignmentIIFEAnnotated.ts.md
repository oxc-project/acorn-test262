__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 200,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 200,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 199,
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
          "end": 199,
          "callee": {
            "type": "FunctionExpression",
            "start": 22,
            "end": 183,
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
              "end": 183,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 101,
                  "end": 181,
                  "argument": {
                    "type": "FunctionExpression",
                    "start": 108,
                    "end": 180,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 120,
                      "end": 180,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 130,
                          "end": 174,
                          "argument": {
                            "type": "CallExpression",
                            "start": 137,
                            "end": 173,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 137,
                              "end": 156,
                              "object": {
                                "type": "Identifier",
                                "start": 137,
                                "end": 150,
                                "decorators": [],
                                "name": "importScripts",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 151,
                                "end": 156,
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
                                "start": 157,
                                "end": 161
                              },
                              {
                                "type": "Identifier",
                                "start": 163,
                                "end": 172,
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
              "start": 185,
              "end": 198,
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
