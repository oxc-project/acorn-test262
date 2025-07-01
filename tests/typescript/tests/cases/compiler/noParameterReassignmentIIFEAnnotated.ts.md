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
                                "start": 137,
                                "end": 150
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "apply",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 151,
                                "end": 156
                              },
                              "optional": false,
                              "computed": false,
                              "start": 137,
                              "end": 156
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
                                "decorators": [],
                                "name": "arguments",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 163,
                                "end": 172
                              }
                            ],
                            "optional": false,
                            "start": 137,
                            "end": 173
                          },
                          "start": 130,
                          "end": 174
                        }
                      ],
                      "start": 120,
                      "end": 180
                    },
                    "expression": false,
                    "start": 108,
                    "end": 180
                  },
                  "start": 101,
                  "end": 181
                }
              ],
              "start": 47,
              "end": 183
            },
            "expression": false,
            "start": 22,
            "end": 183
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "importScripts",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 198
            }
          ],
          "optional": false,
          "start": 21,
          "end": 199
        },
        "start": 0,
        "end": 199
      },
      "directive": null,
      "start": 0,
      "end": 200
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 200
}
```
