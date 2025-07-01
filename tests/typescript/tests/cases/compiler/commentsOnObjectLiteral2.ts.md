__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Person",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 10
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 22
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "initialize",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 196,
                      "end": 206
                    },
                    "value": {
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
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 217,
                          "end": 221
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 237,
                                  "end": 241
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 242,
                                  "end": 246
                                },
                                "optional": false,
                                "computed": false,
                                "start": 237,
                                "end": 246
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 249,
                                "end": 253
                              },
                              "start": 237,
                              "end": 253
                            },
                            "directive": null,
                            "start": 237,
                            "end": 254
                          }
                        ],
                        "start": 223,
                        "end": 264
                      },
                      "expression": false,
                      "start": 208,
                      "end": 264
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 196,
                    "end": 264
                  }
                ],
                "start": 28,
                "end": 295
              }
            ],
            "optional": false,
            "start": 13,
            "end": 298
          },
          "definite": false,
          "start": 4,
          "end": 298
        }
      ],
      "declare": false,
      "start": 0,
      "end": 299
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 299
}
```
