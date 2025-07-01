__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 72,
                  "end": 78
                },
                "start": 72,
                "end": 80
              },
              "start": 70,
              "end": 80
            },
            "start": 68,
            "end": 80
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 84,
                "end": 85
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 86,
                "end": 87
              },
              {
                "type": "Literal",
                "value": "3",
                "raw": "\"3\"",
                "start": 88,
                "end": 91
              }
            ],
            "start": 83,
            "end": 92
          },
          "definite": false,
          "start": 68,
          "end": 92
        }
      ],
      "declare": false,
      "start": 64,
      "end": 93
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func1",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 137
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 144,
                "end": 147
              },
              "start": 144,
              "end": 149
            },
            "start": 143,
            "end": 149
          },
          "start": 138,
          "end": 149
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "stuff",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 165
            },
            "start": 153,
            "end": 166
          }
        ],
        "start": 151,
        "end": 168
      },
      "expression": false,
      "start": 123,
      "end": 168
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func2",
        "optional": false,
        "typeAnnotation": null,
        "start": 179,
        "end": 184
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 192,
              "end": 198
            },
            "start": 191,
            "end": 198
          },
          "start": 185,
          "end": 198
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 207,
              "end": 213
            },
            "start": 206,
            "end": 213
          },
          "start": 200,
          "end": 213
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 222,
              "end": 228
            },
            "start": 221,
            "end": 228
          },
          "start": 215,
          "end": 228
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "func1",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 245
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stuff1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 247,
                      "end": 253
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stuff2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 255,
                      "end": 261
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stuff3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 263,
                      "end": 269
                    }
                  ],
                  "start": 246,
                  "end": 270
                }
              ],
              "optional": false,
              "start": 240,
              "end": 271
            },
            "start": 233,
            "end": 272
          }
        ],
        "start": 230,
        "end": 274
      },
      "expression": false,
      "start": 170,
      "end": 274
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 64,
  "end": 274
}
```
