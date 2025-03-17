__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 233,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 80,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 80,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 51,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 15,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSTypeAssertion",
                  "start": 17,
                  "end": 51,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 37,
                    "end": 50,
                    "async": false,
                    "body": {
                      "type": "Literal",
                      "start": 49,
                      "end": 50,
                      "raw": "1",
                      "value": 1
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 38,
                        "end": 44,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 39,
                          "end": 44,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 41,
                            "end": 44
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  },
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 19,
                    "end": 33,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 23,
                        "end": 27,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 24,
                          "end": 27,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 26,
                            "end": 27,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 26,
                              "end": 27,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 29,
                      "end": 33,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 32,
                        "end": 33,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 32,
                          "end": 33,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 19,
                      "end": 22,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 20,
                          "end": 21,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 20,
                            "end": 21,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
                    }
                  }
                }
              },
              {
                "type": "Property",
                "start": 57,
                "end": 78,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 58,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 60,
                  "end": 78,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 73,
                    "end": 78,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 75,
                        "end": 76,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 75,
                          "end": 76,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 64,
                      "end": 68,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 65,
                        "end": 68,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 67,
                          "end": 68,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 67,
                            "end": 68,
                            "decorators": [],
                            "name": "T",
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
                    "start": 60,
                    "end": 63,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 61,
                        "end": 62,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 61,
                          "end": 62,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 96,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 81,
        "end": 95,
        "arguments": [
          {
            "type": "Literal",
            "start": 93,
            "end": 94,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 81,
          "end": 84,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 84,
          "end": 92,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 85,
              "end": 91
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 210,
      "end": 224,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 210,
        "end": 223,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 210,
          "end": 213,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 210,
            "end": 211,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 212,
            "end": 213,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 213,
          "end": 221,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 214,
              "end": 220
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
