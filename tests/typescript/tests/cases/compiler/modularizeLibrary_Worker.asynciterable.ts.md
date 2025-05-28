__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 140,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 139,
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 37,
          "object": {
            "type": "CallExpression",
            "start": 0,
            "end": 32,
            "callee": {
              "type": "MemberExpression",
              "start": 0,
              "end": 30,
              "object": {
                "type": "MemberExpression",
                "start": 0,
                "end": 17,
                "object": {
                  "type": "Identifier",
                  "start": 0,
                  "end": 9,
                  "decorators": [],
                  "name": "navigator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 17,
                  "decorators": [],
                  "name": "storage",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 18,
                "end": 30,
                "decorators": [],
                "name": "getDirectory",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 33,
            "end": 37,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 38,
            "end": 138,
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 44,
                "end": 53,
                "decorators": [],
                "name": "directory",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 57,
              "end": 138,
              "body": [
                {
                  "type": "ForOfStatement",
                  "start": 63,
                  "end": 136,
                  "await": true,
                  "left": {
                    "type": "VariableDeclaration",
                    "start": 74,
                    "end": 93,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 80,
                        "end": 93,
                        "id": {
                          "type": "ArrayPattern",
                          "start": 80,
                          "end": 93,
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 81,
                              "end": 84,
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "Identifier",
                              "start": 86,
                              "end": 92,
                              "decorators": [],
                              "name": "handle",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 106,
                    "decorators": [],
                    "name": "directory",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 108,
                    "end": 136,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 118,
                        "end": 130,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 118,
                          "end": 129,
                          "object": {
                            "type": "Identifier",
                            "start": 118,
                            "end": 124,
                            "decorators": [],
                            "name": "handle",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 125,
                            "end": 129,
                            "decorators": [],
                            "name": "kind",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "directive": null
                      }
                    ]
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
