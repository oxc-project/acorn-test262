__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 148,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 63,
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSLiteralType",
              "start": 23,
              "end": 28,
              "literal": {
                "type": "Literal",
                "start": 23,
                "end": 28,
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
      "params": [
        {
          "type": "Identifier",
          "start": 30,
          "end": 44,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 44,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 33,
              "end": 44,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 34,
                  "end": 38,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 38,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 37,
                      "end": 38,
                      "typeName": {
                        "type": "Identifier",
                        "start": 37,
                        "end": 38,
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
                "start": 40,
                "end": 44,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 43,
                  "end": 44,
                  "typeName": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 44,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 46,
        "end": 63,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 52,
            "end": 61,
            "argument": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 124,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 123,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 73,
            "end": 123,
            "callee": {
              "type": "Identifier",
              "start": 73,
              "end": 76,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 77,
                "end": 122,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 78,
                    "end": 94,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 79,
                      "end": 94,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 81,
                        "end": 94,
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "start": 81,
                            "end": 86,
                            "literal": {
                              "type": "Literal",
                              "start": 81,
                              "end": 86,
                              "value": "foo",
                              "raw": "\"foo\""
                            }
                          },
                          {
                            "type": "TSLiteralType",
                            "start": 89,
                            "end": 94,
                            "literal": {
                              "type": "Literal",
                              "start": 89,
                              "end": 94,
                              "value": "bar",
                              "raw": "\"bar\""
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ConditionalExpression",
                  "start": 99,
                  "end": 122,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 99,
                    "end": 110,
                    "left": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 105,
                      "end": 110,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 114,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 117,
                    "end": 122,
                    "value": "foo",
                    "raw": "\"foo\""
                  }
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 148,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 147,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 136,
            "decorators": [],
            "name": "fResult",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 139,
            "end": 147,
            "callee": {
              "type": "Identifier",
              "start": 139,
              "end": 140,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 141,
                "end": 146,
                "value": "foo",
                "raw": "\"foo\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
