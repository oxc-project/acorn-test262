__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 126,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "name": "functions",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                          "id": {
                            "type": "Identifier",
                            "start": 37,
                            "end": 46,
                            "name": "k",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 38,
                              "end": 46,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 40,
                                "end": 46
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 49,
                            "end": 51,
                            "value": 10,
                            "raw": "10"
                          },
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 57,
                      "end": 74,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 57,
                        "end": 73,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 58,
                          "name": "k",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "NewExpression",
                          "start": 61,
                          "end": 73,
                          "callee": {
                            "type": "Identifier",
                            "start": 65,
                            "end": 71,
                            "name": "Object",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": null
                        }
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 79,
                      "end": 109,
                      "expression": {
                        "type": "CallExpression",
                        "start": 79,
                        "end": 108,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 79,
                          "end": 106,
                          "object": {
                            "type": "ArrayExpression",
                            "start": 79,
                            "end": 88,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 80,
                                "end": 81,
                                "value": 1,
                                "raw": "1"
                              },
                              {
                                "type": "Literal",
                                "start": 83,
                                "end": 84,
                                "value": 2,
                                "raw": "2"
                              },
                              {
                                "type": "Literal",
                                "start": 86,
                                "end": 87,
                                "value": 3,
                                "raw": "3"
                              }
                            ]
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 89,
                            "end": 106,
                            "name": "NonexistantMethod",
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
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 114,
                      "end": 121,
                      "expression": {
                        "type": "CallExpression",
                        "start": 114,
                        "end": 120,
                        "callee": {
                          "type": "Identifier",
                          "start": 114,
                          "end": 118,
                          "name": "derp",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              }
            ]
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
