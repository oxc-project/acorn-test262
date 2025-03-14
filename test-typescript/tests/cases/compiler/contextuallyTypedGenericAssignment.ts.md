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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 96,
        "end": 99,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
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
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 72,
                  "end": 82,
                  "argument": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 79,
                    "decorators": [],
                    "name": "rest",
                    "optional": false
                  },
                  "decorators": [],
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
                        "optional": false
                      }
                    }
                  }
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
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 40,
                "end": 65,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 41,
                    "end": 64,
                    "const": false,
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
                          "key": {
                            "type": "Identifier",
                            "start": 53,
                            "end": 54,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 54,
                            "end": 62,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 56,
                              "end": 62
                            }
                          }
                        }
                      ]
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 41,
                      "end": 42,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 29,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 28,
            "const": false,
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 101,
      "end": 127,
      "expression": {
        "type": "CallExpression",
        "start": 101,
        "end": 127,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 105,
            "end": 126,
            "async": false,
            "body": {
              "type": "MemberExpression",
              "start": 123,
              "end": 126,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "decorators": [],
                "name": "t",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "decorators": [],
                "name": "t",
                "optional": false
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
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 101,
          "end": 104,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
