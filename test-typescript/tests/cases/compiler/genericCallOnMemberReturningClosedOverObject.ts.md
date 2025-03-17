__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 205,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 164,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 73,
        "name": "example",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 80,
        "end": 164,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 84,
            "end": 150,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 88,
                "end": 149,
                "id": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 92,
                  "end": 149,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 98,
                      "end": 120,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 98,
                        "end": 101,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 103,
                        "end": 120,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 108,
                            "end": 114,
                            "name": "t2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 110,
                              "end": 114,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 112,
                                "end": 114,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 112,
                                  "end": 114,
                                  "name": "T2",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "Identifier",
                          "start": 119,
                          "end": 120,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 103,
                          "end": 107,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 104,
                              "end": 106,
                              "name": {
                                "type": "Identifier",
                                "start": 104,
                                "end": 106,
                                "name": "T2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false
                            }
                          ]
                        },
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 126,
                      "end": 144,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 126,
                        "end": 129,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 131,
                        "end": 144,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 132,
                            "end": 138,
                            "name": "t1",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 134,
                              "end": 138,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 136,
                                "end": 138,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 136,
                                  "end": 138,
                                  "name": "T1",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "Identifier",
                          "start": 143,
                          "end": 144,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 153,
            "end": 162,
            "argument": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 73,
        "end": 77,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 74,
            "end": 76,
            "name": {
              "type": "Identifier",
              "start": 74,
              "end": 76,
              "name": "T1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 166,
      "end": 204,
      "expression": {
        "type": "CallExpression",
        "start": 166,
        "end": 203,
        "callee": {
          "type": "MemberExpression",
          "start": 166,
          "end": 200,
          "object": {
            "type": "CallExpression",
            "start": 166,
            "end": 196,
            "callee": {
              "type": "MemberExpression",
              "start": 166,
              "end": 187,
              "object": {
                "type": "CallExpression",
                "start": 166,
                "end": 183,
                "callee": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 173,
                  "name": "example",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 173,
                  "end": 181,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 174,
                      "end": 180
                    }
                  ]
                }
              },
              "property": {
                "type": "Identifier",
                "start": 184,
                "end": 187,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 188,
                "end": 195,
                "value": "hello",
                "raw": "\"hello\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 197,
            "end": 200,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 201,
            "end": 202,
            "value": 1,
            "raw": "1"
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
