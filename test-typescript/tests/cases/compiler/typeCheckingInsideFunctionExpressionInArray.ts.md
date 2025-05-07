__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 125,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 124,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "functions",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 16,
            "end": 124,
            "elements": [
              {
                "type": "FunctionExpression",
                "start": 17,
                "end": 123,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 29,
                  "end": 123,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 33,
                      "end": 52,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 37,
                          "end": 51,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 37,
                            "end": 46,
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 38,
                              "end": 46,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 40,
                                "end": 46
                              }
                            }
                          },
                          "init": {
                            "type": "Literal",
                            "start": 49,
                            "end": 51,
                            "raw": "10",
                            "value": 10,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 57,
                      "end": 74,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 57,
                        "end": 73,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 58,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "NewExpression",
                          "start": 61,
                          "end": 73,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 65,
                            "end": 71,
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 79,
                      "end": 109,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 79,
                        "end": 108,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 79,
                          "end": 106,
                          "computed": false,
                          "object": {
                            "type": "ArrayExpression",
                            "start": 79,
                            "end": 88,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 80,
                                "end": 81,
                                "raw": "1",
                                "value": 1,
                                "regex": null,
                                "bigint": null
                              },
                              {
                                "type": "Literal",
                                "start": 83,
                                "end": 84,
                                "raw": "2",
                                "value": 2,
                                "regex": null,
                                "bigint": null
                              },
                              {
                                "type": "Literal",
                                "start": 86,
                                "end": 87,
                                "raw": "3",
                                "value": 3,
                                "regex": null,
                                "bigint": null
                              }
                            ]
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 89,
                            "end": 106,
                            "decorators": [],
                            "name": "NonexistantMethod",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 114,
                      "end": 121,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 114,
                        "end": 120,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 114,
                          "end": 118,
                          "decorators": [],
                          "name": "derp",
                          "optional": false,
                          "typeAnnotation": null
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
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
