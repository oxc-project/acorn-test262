__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 127,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 29,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 28,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 23,
              "end": 28,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 23,
                "end": 26
              }
            },
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
          "start": 35,
          "end": 93,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 38,
            "end": 93,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 40,
              "end": 93,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 40,
                "end": 65,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 41,
                    "end": 64,
                    "name": {
                      "type": "Identifier",
                      "start": 41,
                      "end": 42,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeLiteral",
                      "start": 51,
                      "end": 64,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 53,
                          "end": 62,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 53,
                            "end": 54,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 54,
                            "end": 62,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 56,
                              "end": 62
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
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
                  "start": 66,
                  "end": 70,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 67,
                    "end": 70,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 69,
                      "end": 70,
                      "typeName": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 70,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 72,
                  "end": 82,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 79,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 79,
                    "end": 82,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 81,
                      "end": 82,
                      "typeName": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 82,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 84,
                "end": 93,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 87,
                  "end": 93
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 96,
        "end": 99,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 101,
      "end": 127,
      "expression": {
        "type": "CallExpression",
        "start": 101,
        "end": 127,
        "callee": {
          "type": "Identifier",
          "start": 101,
          "end": 104,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 105,
            "end": 126,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 109,
                "end": 118,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 110,
                  "end": 118,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 112,
                    "end": 118
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "start": 123,
              "end": 126,
              "object": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "id": null,
            "generator": false
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
