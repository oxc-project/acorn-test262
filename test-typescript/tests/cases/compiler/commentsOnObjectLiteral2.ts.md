__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 299,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 298,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "name": "Person",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 13,
            "end": 298,
            "callee": {
              "type": "Identifier",
              "start": 13,
              "end": 22,
              "name": "makeClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 28,
                "end": 295,
                "properties": [
                  {
                    "type": "Property",
                    "start": 196,
                    "end": 264,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 206,
                      "name": "initialize",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 208,
                      "end": 264,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 217,
                          "end": 221,
                          "name": "name",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 223,
                        "end": 264,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 237,
                            "end": 254,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 237,
                              "end": 253,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 237,
                                "end": 246,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 237,
                                  "end": 241
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 242,
                                  "end": 246,
                                  "name": "name",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 249,
                                "end": 253,
                                "name": "name",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
