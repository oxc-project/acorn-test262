__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 172,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 24,
      "end": 87,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 70,
        "end": 87,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 76,
            "end": 85,
            "argument": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "decorators": [],
              "name": "f",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 36,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 54,
          "end": 68,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 68,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 57,
              "end": 68,
              "params": [
                {
                  "type": "Identifier",
                  "start": 58,
                  "end": 62,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 59,
                    "end": 62,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 61,
                      "end": 62,
                      "typeName": {
                        "type": "Identifier",
                        "start": 61,
                        "end": 62,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 64,
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
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 36,
        "end": 53,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 37,
            "end": 52,
            "const": false,
            "constraint": {
              "type": "TSLiteralType",
              "start": 47,
              "end": 52,
              "literal": {
                "type": "Literal",
                "start": 47,
                "end": 52,
                "raw": "\"foo\"",
                "value": "foo"
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 147,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 97,
            "end": 147,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 101,
                "end": 146,
                "async": false,
                "body": {
                  "type": "ConditionalExpression",
                  "start": 123,
                  "end": 146,
                  "alternate": {
                    "type": "Literal",
                    "start": 141,
                    "end": 146,
                    "raw": "\"foo\"",
                    "value": "foo"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 138,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 123,
                    "end": 134,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 124,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 129,
                      "end": 134,
                      "raw": "\"foo\"",
                      "value": "foo"
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 102,
                    "end": 118,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 103,
                      "end": 118,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 105,
                        "end": 118,
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "start": 105,
                            "end": 110,
                            "literal": {
                              "type": "Literal",
                              "start": 105,
                              "end": 110,
                              "raw": "\"foo\"",
                              "value": "foo"
                            }
                          },
                          {
                            "type": "TSLiteralType",
                            "start": 113,
                            "end": 118,
                            "literal": {
                              "type": "Literal",
                              "start": 113,
                              "end": 118,
                              "raw": "\"bar\"",
                              "value": "bar"
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 97,
              "end": 100,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 149,
      "end": 172,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 171,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 160,
            "decorators": [],
            "name": "fResult",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 163,
            "end": 171,
            "arguments": [
              {
                "type": "Literal",
                "start": 165,
                "end": 170,
                "raw": "\"foo\"",
                "value": "foo"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
