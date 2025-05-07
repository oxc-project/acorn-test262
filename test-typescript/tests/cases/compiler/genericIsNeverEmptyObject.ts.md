__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 210,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 22,
      "end": 132,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 69,
        "end": 132,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 75,
            "end": 100,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 79,
                "end": 99,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 79,
                  "end": 93,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 81,
                      "end": 82,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 82,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 82,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "RestElement",
                      "start": 84,
                      "end": 91,
                      "argument": {
                        "type": "Identifier",
                        "start": 87,
                        "end": 91,
                        "decorators": [],
                        "name": "rest",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 99,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ReturnStatement",
            "start": 105,
            "end": 130,
            "argument": {
              "type": "ObjectExpression",
              "start": 112,
              "end": 129,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 114,
                  "end": 121,
                  "argument": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 121,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 123,
                  "end": 127,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 124,
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
                    "type": "Identifier",
                    "start": 126,
                    "end": 127,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 35,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 61,
          "end": 67,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 64,
            "end": 67,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 66,
              "end": 67,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
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
        "start": 35,
        "end": 60,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 36,
            "end": 59,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 46,
              "end": 59,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 48,
                  "end": 57,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 49,
                    "end": 57,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 51,
                      "end": 57
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 164,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 140,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 143,
            "end": 164,
            "properties": [
              {
                "type": "Property",
                "start": 145,
                "end": 155,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
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
                  "type": "Literal",
                  "start": 148,
                  "end": 155,
                  "raw": "'hello'",
                  "value": "hello",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 157,
                "end": 162,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 158,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 160,
                  "end": 162,
                  "raw": "42",
                  "value": 42,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 209,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 198,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 198,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 174,
                "end": 198,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 176,
                    "end": 186,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 176,
                      "end": 177,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 177,
                      "end": 185,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 179,
                        "end": 185
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 187,
                    "end": 196,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 187,
                      "end": 188,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 188,
                      "end": 196,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 190,
                        "end": 196
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 201,
            "end": 209,
            "arguments": [
              {
                "type": "Identifier",
                "start": 206,
                "end": 208,
                "decorators": [],
                "name": "o1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 201,
              "end": 205,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
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
