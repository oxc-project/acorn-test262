__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 204,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 164,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 73,
        "decorators": [],
        "name": "example",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 80,
        "end": 164,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 84,
            "end": 150,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 88,
                "end": 149,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 98,
                        "end": 101,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 103,
                        "end": 120,
                        "expression": true,
                        "async": false,
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
                                "decorators": [],
                                "name": "T2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false
                            }
                          ]
                        },
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 112,
                                  "end": 114,
                                  "decorators": [],
                                  "name": "T2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "start": 119,
                          "end": 120,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 126,
                      "end": 144,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 126,
                        "end": 129,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 131,
                        "end": 144,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 136,
                                  "end": 138,
                                  "decorators": [],
                                  "name": "T1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "start": 143,
                          "end": 144,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
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
                  "decorators": [],
                  "name": "example",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                },
                "arguments": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 184,
                "end": 187,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 188,
                "end": 195,
                "value": "hello",
                "raw": "\"hello\""
              }
            ],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 197,
            "end": 200,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 201,
            "end": 202,
            "value": 1,
            "raw": "1"
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
