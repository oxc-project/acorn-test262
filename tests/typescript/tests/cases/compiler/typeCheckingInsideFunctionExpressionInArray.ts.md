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
            "name": "functions",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 13
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
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
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 40,
                                "end": 46
                              },
                              "start": 38,
                              "end": 46
                            },
                            "start": 37,
                            "end": 46
                          },
                          "init": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 49,
                            "end": 51
                          },
                          "definite": false,
                          "start": 37,
                          "end": 51
                        }
                      ],
                      "declare": false,
                      "start": 33,
                      "end": 52
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 57,
                          "end": 58
                        },
                        "right": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 65,
                            "end": 71
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 61,
                          "end": 73
                        },
                        "start": 57,
                        "end": 73
                      },
                      "directive": null,
                      "start": 57,
                      "end": 74
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 80,
                                "end": 81
                              },
                              {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 83,
                                "end": 84
                              },
                              {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 86,
                                "end": 87
                              }
                            ],
                            "start": 79,
                            "end": 88
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "NonexistantMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 89,
                            "end": 106
                          },
                          "optional": false,
                          "computed": false,
                          "start": 79,
                          "end": 106
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 79,
                        "end": 108
                      },
                      "directive": null,
                      "start": 79,
                      "end": 109
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "derp",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 114,
                          "end": 118
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 114,
                        "end": 120
                      },
                      "directive": null,
                      "start": 114,
                      "end": 121
                    }
                  ],
                  "start": 29,
                  "end": 123
                },
                "expression": false,
                "start": 17,
                "end": 123
              }
            ],
            "start": 16,
            "end": 124
          },
          "definite": false,
          "start": 4,
          "end": 124
        }
      ],
      "declare": false,
      "start": 0,
      "end": 125
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 125
}
```
