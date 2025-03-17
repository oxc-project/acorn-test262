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
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 77,
            "name": "a",
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
            },
            "decorators": [],
            "optional": false
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 83,
                "end": 84,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 85,
                "end": 88,
                "value": "3",
                "raw": "\"3\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 93,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 107,
        "name": "func1",
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
          "start": 108,
          "end": 119,
          "name": "stuff",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "stuff",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 140,
      "end": 244,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 154,
        "name": "func2",
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
          "start": 155,
          "end": 168,
          "name": "stuff1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 161,
            "end": 168,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 162,
              "end": 168
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 170,
          "end": 183,
          "name": "stuff2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 176,
            "end": 183,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 177,
              "end": 183
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 185,
          "end": 198,
          "name": "stuff3",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 191,
            "end": 198,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 192,
              "end": 198
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "callee": {
                "type": "Identifier",
                "start": 210,
                "end": 215,
                "name": "func1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "stuff1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 225,
                      "end": 231,
                      "name": "stuff2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 233,
                      "end": 239,
                      "name": "stuff3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
