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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 80,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 15,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "TSTypeAssertion",
                  "start": 17,
                  "end": 51,
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
                            "decorators": [],
                            "name": "T",
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 26,
                              "end": 27,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 32,
                          "end": 33,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 37,
                    "end": 50,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
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
                    "body": {
                      "type": "Literal",
                      "start": 49,
                      "end": 50,
                      "value": 1,
                      "raw": "1"
                    },
                    "id": null,
                    "generator": false
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 57,
                "end": 78,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 58,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 60,
                  "end": 78,
                  "expression": false,
                  "async": false,
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
                          "decorators": [],
                          "name": "T",
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 67,
                            "end": 68,
                            "decorators": [],
                            "name": "T",
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
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "directive": null
                      }
                    ]
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
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
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
        "optional": false
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
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 212,
            "end": 213,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
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
        },
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
