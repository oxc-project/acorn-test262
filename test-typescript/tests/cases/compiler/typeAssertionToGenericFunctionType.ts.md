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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 15,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "TSTypeAssertion",
                  "start": 17,
                  "end": 51,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 37,
                    "end": 50,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 38,
                        "end": 44,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 39,
                          "end": 44,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 41,
                            "end": 44
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "Literal",
                      "start": 49,
                      "end": 50,
                      "value": 1,
                      "raw": "1"
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 19,
                    "end": 33,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 19,
                      "end": 22,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 20,
                          "end": 21,
                          "name": {
                            "type": "Identifier",
                            "start": 20,
                            "end": 21,
                            "name": "T",
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 23,
                        "end": 27,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 24,
                          "end": 27,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 26,
                            "end": 27,
                            "typeName": {
                              "type": "Identifier",
                              "start": 26,
                              "end": 27,
                              "name": "T",
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 29,
                      "end": 33,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 32,
                        "end": 33,
                        "typeName": {
                          "type": "Identifier",
                          "start": 32,
                          "end": 33,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 57,
                "end": 78,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 58,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 60,
                  "end": 78,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 64,
                      "end": 68,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 65,
                        "end": 68,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 67,
                          "end": 68,
                          "typeName": {
                            "type": "Identifier",
                            "start": 67,
                            "end": 68,
                            "name": "T",
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
                    "type": "BlockStatement",
                    "start": 73,
                    "end": 78,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 75,
                        "end": 76,
                        "expression": {
                          "type": "Identifier",
                          "start": 75,
                          "end": 76,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 60,
                    "end": 63,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 61,
                        "end": 62,
                        "name": {
                          "type": "Identifier",
                          "start": 61,
                          "end": 62,
                          "name": "T",
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
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 96,
      "expression": {
        "type": "CallExpression",
        "start": 81,
        "end": 95,
        "callee": {
          "type": "MemberExpression",
          "start": 81,
          "end": 84,
          "object": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "name": "a",
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
            "start": 93,
            "end": 94,
            "value": 1,
            "raw": "1"
          }
        ],
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
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 210,
      "end": 224,
      "expression": {
        "type": "CallExpression",
        "start": 210,
        "end": 223,
        "callee": {
          "type": "MemberExpression",
          "start": 210,
          "end": 213,
          "object": {
            "type": "Identifier",
            "start": 210,
            "end": 211,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 212,
            "end": 213,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
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
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
