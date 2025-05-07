__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 199,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 36,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 33,
        "end": 36,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 31,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 31,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 17,
              "end": 31,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 19,
                  "end": 29,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 19,
                    "end": 20,
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
                    "start": 20,
                    "end": 28,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 22,
                      "end": 28
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 37,
      "end": 52,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 37,
        "end": 51,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 42,
            "end": 50,
            "properties": [
              {
                "type": "Property",
                "start": 44,
                "end": 48,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
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
                  "type": "Literal",
                  "start": 47,
                  "end": 48,
                  "raw": "5",
                  "value": 5,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 37,
          "end": 41,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 54,
      "end": 84,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 81,
        "end": 84,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 67,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 68,
          "end": 79,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 69,
            "end": 79,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 71,
              "end": 79,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 71,
                "end": 77
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 85,
      "end": 102,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 85,
        "end": 101,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 90,
            "end": 100,
            "elements": [
              {
                "type": "Literal",
                "start": 91,
                "end": 94,
                "raw": "\"s\"",
                "value": "s",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 96,
                "end": 99,
                "raw": "\"t\"",
                "value": "t",
                "regex": null,
                "bigint": null
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 85,
          "end": 89,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 104,
      "end": 146,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 143,
        "end": 146,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 117,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 118,
          "end": 141,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 119,
            "end": 141,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 121,
              "end": 141,
              "params": [
                {
                  "type": "Identifier",
                  "start": 122,
                  "end": 131,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 123,
                    "end": 131,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 125,
                      "end": 131
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 133,
                "end": 141,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 135,
                  "end": 141
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 146,
      "end": 147
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 172,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 148,
        "end": 171,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 153,
            "end": 170,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 167,
              "end": 170,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 154,
                "end": 162,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 155,
                  "end": 162,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 156,
                    "end": 162
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 148,
          "end": 152,
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 173,
      "end": 198,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 173,
        "end": 197,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 178,
            "end": 196,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 185,
              "end": 196,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 187,
                  "end": 194,
                  "argument": null
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 179,
                "end": 180,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 173,
          "end": 177,
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
