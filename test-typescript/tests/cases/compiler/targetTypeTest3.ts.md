__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 64,
  "end": 274,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 64,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 92,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 80,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 80,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 72,
                "end": 80,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 72,
                  "end": 78
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 83,
            "end": 92,
            "elements": [
              {
                "type": "Literal",
                "start": 84,
                "end": 85,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 86,
                "end": 87,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 88,
                "end": 91,
                "raw": "\"3\"",
                "value": "3"
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
      "start": 123,
      "end": 168,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 151,
        "end": 168,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 153,
            "end": 166,
            "argument": {
              "type": "Identifier",
              "start": 160,
              "end": 165,
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
        "start": 132,
        "end": 137,
        "decorators": [],
        "name": "func1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 138,
          "end": 149,
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 143,
            "end": 149,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 144,
              "end": 149,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 144,
                "end": 147
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
      "start": 170,
      "end": 274,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 230,
        "end": 274,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 233,
            "end": 272,
            "argument": {
              "type": "CallExpression",
              "start": 240,
              "end": 271,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "start": 246,
                  "end": 270,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 247,
                      "end": 253,
                      "decorators": [],
                      "name": "stuff1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 255,
                      "end": 261,
                      "decorators": [],
                      "name": "stuff2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 263,
                      "end": 269,
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
                "start": 240,
                "end": 245,
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
        "start": 179,
        "end": 184,
        "decorators": [],
        "name": "func2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 185,
          "end": 198,
          "decorators": [],
          "name": "stuff1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 191,
            "end": 198,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 192,
              "end": 198
            }
          }
        },
        {
          "type": "Identifier",
          "start": 200,
          "end": 213,
          "decorators": [],
          "name": "stuff2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 206,
            "end": 213,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 207,
              "end": 213
            }
          }
        },
        {
          "type": "Identifier",
          "start": 215,
          "end": 228,
          "decorators": [],
          "name": "stuff3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 221,
            "end": 228,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 222,
              "end": 228
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
