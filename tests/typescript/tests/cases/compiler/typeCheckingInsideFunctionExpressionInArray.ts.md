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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 124,
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
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 29,
                  "end": 123,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 33,
                      "end": 52,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 37,
                          "end": 51,
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
                            "value": 10,
                            "raw": "10"
                          },
                          "definite": false
                        }
                      ],
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
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "NewExpression",
                          "start": 61,
                          "end": 73,
                          "callee": {
                            "type": "Identifier",
                            "start": 65,
                            "end": 71,
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": []
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
                            "decorators": [],
                            "name": "NonexistantMethod",
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
                          "decorators": [],
                          "name": "derp",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "directive": null
                    }
                  ]
                },
                "expression": false
              }
            ]
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
