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
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 80,
            "name": "a",
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
            },
            "decorators": [],
            "optional": false
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 86,
                "end": 87,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 88,
                "end": 91,
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
      "start": 123,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 137,
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
          "start": 138,
          "end": 149,
          "name": "stuff",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
      "start": 170,
      "end": 274,
      "id": {
        "type": "Identifier",
        "start": 179,
        "end": 184,
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
          "start": 185,
          "end": 198,
          "name": "stuff1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 191,
            "end": 198,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 192,
              "end": 198
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 200,
          "end": 213,
          "name": "stuff2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 206,
            "end": 213,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 207,
              "end": 213
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 215,
          "end": 228,
          "name": "stuff3",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 221,
            "end": 228,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 222,
              "end": 228
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "callee": {
                "type": "Identifier",
                "start": 240,
                "end": 245,
                "name": "func1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "stuff1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 255,
                      "end": 261,
                      "name": "stuff2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 263,
                      "end": 269,
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
