__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 200,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "name": "foo1",
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
          "start": 14,
          "end": 31,
          "name": "x",
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 19,
                    "end": 20,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 20,
                    "end": 28,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 22,
                      "end": 28
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 33,
        "end": 36,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 37,
      "end": 52,
      "expression": {
        "type": "CallExpression",
        "start": 37,
        "end": 51,
        "callee": {
          "type": "Identifier",
          "start": 37,
          "end": 41,
          "name": "foo1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 47,
                  "end": 48,
                  "value": 5,
                  "raw": "5"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 54,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 67,
        "name": "foo2",
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
          "start": 68,
          "end": 79,
          "name": "x",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 81,
        "end": 84,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 85,
      "end": 102,
      "expression": {
        "type": "CallExpression",
        "start": 85,
        "end": 101,
        "callee": {
          "type": "Identifier",
          "start": 85,
          "end": 89,
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "value": "s",
                "raw": "\"s\""
              },
              {
                "type": "Literal",
                "start": 96,
                "end": 99,
                "value": "t",
                "raw": "\"t\""
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 104,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 117,
        "name": "foo3",
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
          "start": 118,
          "end": 141,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 119,
            "end": 141,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 121,
              "end": 141,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 122,
                  "end": 131,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 123,
                    "end": 131,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 125,
                      "end": 131
                    }
                  },
                  "decorators": [],
                  "optional": false
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 143,
        "end": 146,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
      "expression": {
        "type": "CallExpression",
        "start": 148,
        "end": 171,
        "callee": {
          "type": "Identifier",
          "start": 148,
          "end": 152,
          "name": "foo3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 153,
            "end": 170,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 154,
                "end": 162,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 155,
                  "end": 162,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 156,
                    "end": 162
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 167,
              "end": 170,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 173,
      "end": 198,
      "expression": {
        "type": "CallExpression",
        "start": 173,
        "end": 197,
        "callee": {
          "type": "Identifier",
          "start": 173,
          "end": 177,
          "name": "foo3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 178,
            "end": 196,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 179,
                "end": 180,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
