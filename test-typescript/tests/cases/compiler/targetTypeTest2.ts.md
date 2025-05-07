__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 64,
  "end": 244,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 64,
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 89,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 77,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 77,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 72,
                "end": 77,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 72,
                  "end": 75
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 80,
            "end": 89,
            "elements": [
              {
                "type": "Literal",
                "start": 81,
                "end": 82,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 83,
                "end": 84,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 85,
                "end": 88,
                "raw": "\"3\"",
                "value": "3",
                "regex": null,
                "bigint": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 93,
      "end": 138,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 121,
        "end": 138,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 123,
            "end": 136,
            "argument": {
              "type": "Identifier",
              "start": 130,
              "end": 135,
              "decorators": [],
              "name": "stuff",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 107,
        "decorators": [],
        "name": "func1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 108,
          "end": 119,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 113,
            "end": 119,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 114,
              "end": 119,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 114,
                "end": 117
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 140,
      "end": 244,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 200,
        "end": 244,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 203,
            "end": 242,
            "argument": {
              "type": "CallExpression",
              "start": 210,
              "end": 241,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "start": 216,
                  "end": 240,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 217,
                      "end": 223,
                      "decorators": [],
                      "name": "stuff1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 225,
                      "end": 231,
                      "decorators": [],
                      "name": "stuff2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 233,
                      "end": 239,
                      "decorators": [],
                      "name": "stuff3",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 210,
                "end": 215,
                "decorators": [],
                "name": "func1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 154,
        "decorators": [],
        "name": "func2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 155,
          "end": 168,
          "decorators": [],
          "name": "stuff1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 161,
            "end": 168,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 162,
              "end": 168
            }
          }
        },
        {
          "type": "Identifier",
          "start": 170,
          "end": 183,
          "decorators": [],
          "name": "stuff2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 176,
            "end": 183,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 177,
              "end": 183
            }
          }
        },
        {
          "type": "Identifier",
          "start": 185,
          "end": 198,
          "decorators": [],
          "name": "stuff3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 191,
            "end": 198,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 192,
              "end": 198
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
