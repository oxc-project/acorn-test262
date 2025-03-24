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
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 35,
          "end": 93,
          "name": "arg",
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                  "name": "t",
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
                },
                {
                  "type": "RestElement",
                  "start": 72,
                  "end": 82,
                  "argument": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 79,
                    "name": "rest",
                    "typeAnnotation": null,
                    "decorators": [],
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
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 96,
        "end": 99,
        "body": []
      },
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "returnType": null
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
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 105,
            "end": 126,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 109,
                "end": 118,
                "name": "u",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 110,
                  "end": 118,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 112,
                    "end": 118
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "MemberExpression",
              "start": 123,
              "end": 126,
              "object": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
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
