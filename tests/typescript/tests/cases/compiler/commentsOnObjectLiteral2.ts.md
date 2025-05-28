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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 298,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "Person",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 13,
            "end": 298,
            "callee": {
              "type": "Identifier",
              "start": 13,
              "end": 22,
              "decorators": [],
              "name": "makeClass",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 206,
                      "decorators": [],
                      "name": "initialize",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 208,
                      "end": 264,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 217,
                          "end": 221,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
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
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 249,
                                "end": 253,
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "expression": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
