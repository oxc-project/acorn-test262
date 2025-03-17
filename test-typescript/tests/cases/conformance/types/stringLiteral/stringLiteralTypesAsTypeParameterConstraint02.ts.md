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
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 36,
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
          "start": 54,
          "end": 68,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 68,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 57,
              "end": 68,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 58,
                  "end": 62,
                  "name": "x",
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
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "f",
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
        "start": 36,
        "end": 53,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 37,
            "end": 52,
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSLiteralType",
              "start": 47,
              "end": 52,
              "literal": {
                "type": "Literal",
                "start": 47,
                "end": 52,
                "value": "foo",
                "raw": "\"foo\""
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
      "type": "VariableDeclaration",
      "start": 89,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 147,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 97,
            "end": 147,
            "callee": {
              "type": "Identifier",
              "start": 97,
              "end": 100,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 101,
                "end": 146,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 102,
                    "end": 118,
                    "name": "y",
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
                              "value": "foo",
                              "raw": "\"foo\""
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
                              "value": "bar",
                              "raw": "\"bar\""
                            }
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "ConditionalExpression",
                  "start": 123,
                  "end": 146,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 123,
                    "end": 134,
                    "left": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 124,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 129,
                      "end": 134,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 138,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 141,
                    "end": 146,
                    "value": "foo",
                    "raw": "\"foo\""
                  }
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 160,
            "name": "fResult",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 163,
            "end": 171,
            "callee": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 165,
                "end": 170,
                "value": "foo",
                "raw": "\"foo\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
