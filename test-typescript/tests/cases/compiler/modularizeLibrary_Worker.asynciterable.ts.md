__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 166,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 25,
      "end": 165,
      "expression": {
        "type": "CallExpression",
        "start": 25,
        "end": 164,
        "callee": {
          "type": "MemberExpression",
          "start": 25,
          "end": 62,
          "object": {
            "type": "CallExpression",
            "start": 25,
            "end": 57,
            "callee": {
              "type": "MemberExpression",
              "start": 25,
              "end": 55,
              "object": {
                "type": "MemberExpression",
                "start": 25,
                "end": 42,
                "object": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 34,
                  "name": "navigator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 42,
                  "name": "storage",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 43,
                "end": 55,
                "name": "getDirectory",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 58,
            "end": 62,
            "name": "then",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 63,
            "end": 163,
            "id": null,
            "expression": false,
            "generator": false,
            "async": true,
            "params": [
              {
                "type": "Identifier",
                "start": 69,
                "end": 78,
                "name": "directory",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 82,
              "end": 163,
              "body": [
                {
                  "type": "ForOfStatement",
                  "start": 88,
                  "end": 161,
                  "await": true,
                  "left": {
                    "type": "VariableDeclaration",
                    "start": 99,
                    "end": 118,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 105,
                        "end": 118,
                        "id": {
                          "type": "ArrayPattern",
                          "start": 105,
                          "end": 118,
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 106,
                              "end": 109,
                              "name": "key",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 111,
                              "end": 117,
                              "name": "handle",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 131,
                    "name": "directory",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 133,
                    "end": 161,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 143,
                        "end": 155,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 143,
                          "end": 154,
                          "object": {
                            "type": "Identifier",
                            "start": 143,
                            "end": 149,
                            "name": "handle",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 150,
                            "end": 154,
                            "name": "kind",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
