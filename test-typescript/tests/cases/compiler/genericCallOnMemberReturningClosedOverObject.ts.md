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
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
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
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 98,
                        "end": 101,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 103,
                        "end": 120,
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "start": 119,
                          "end": 120,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 108,
                            "end": 114,
                            "decorators": [],
                            "name": "t2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 110,
                              "end": 114,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 112,
                                "end": 114,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 112,
                                  "end": 114,
                                  "decorators": [],
                                  "name": "T2",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ],
                        "returnType": null,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 103,
                          "end": 107,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 104,
                              "end": 106,
                              "const": false,
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "name": {
                                "type": "Identifier",
                                "start": 104,
                                "end": 106,
                                "decorators": [],
                                "name": "T2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "out": false
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "start": 126,
                      "end": 144,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 126,
                        "end": 129,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 131,
                        "end": 144,
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "start": 143,
                          "end": 144,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 132,
                            "end": 138,
                            "decorators": [],
                            "name": "t1",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 134,
                              "end": 138,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 136,
                                "end": 138,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 136,
                                  "end": 138,
                                  "decorators": [],
                                  "name": "T1",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ReturnStatement",
            "start": 153,
            "end": 162,
            "argument": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 73,
        "decorators": [],
        "name": "example",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 73,
        "end": 77,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 74,
            "end": 76,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 74,
              "end": 76,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 166,
      "end": 204,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 166,
        "end": 203,
        "arguments": [
          {
            "type": "Literal",
            "start": 201,
            "end": 202,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 166,
          "end": 200,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 166,
            "end": 196,
            "arguments": [
              {
                "type": "Literal",
                "start": 188,
                "end": 195,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 166,
              "end": 187,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 166,
                "end": 183,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 173,
                  "decorators": [],
                  "name": "example",
                  "optional": false,
                  "typeAnnotation": null
                },
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
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 184,
                "end": 187,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 197,
            "end": 200,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
