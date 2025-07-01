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
                  "type": "TSAnyKeyword",
                  "start": 72,
                  "end": 75
                },
                "start": 72,
                "end": 77
              },
              "start": 70,
              "end": 77
            },
            "start": 68,
            "end": 77
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 81,
                "end": 82
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 83,
                "end": 84
              },
              {
                "type": "Literal",
                "value": "3",
                "raw": "\"3\"",
                "start": 85,
                "end": 88
              }
            ],
            "start": 80,
            "end": 89
          },
          "definite": false,
          "start": 68,
          "end": 89
        }
      ],
      "declare": false,
      "start": 64,
      "end": 90
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func1",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 107
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
                "start": 114,
                "end": 117
              },
              "start": 114,
              "end": 119
            },
            "start": 113,
            "end": 119
          },
          "start": 108,
          "end": 119
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
              "start": 130,
              "end": 135
            },
            "start": 123,
            "end": 136
          }
        ],
        "start": 121,
        "end": 138
      },
      "expression": false,
      "start": 93,
      "end": 138
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func2",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 154
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
              "start": 162,
              "end": 168
            },
            "start": 161,
            "end": 168
          },
          "start": 155,
          "end": 168
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
              "start": 177,
              "end": 183
            },
            "start": 176,
            "end": 183
          },
          "start": 170,
          "end": 183
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
              "start": 192,
              "end": 198
            },
            "start": 191,
            "end": 198
          },
          "start": 185,
          "end": 198
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
                "start": 210,
                "end": 215
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
                      "start": 217,
                      "end": 223
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stuff2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 225,
                      "end": 231
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stuff3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 233,
                      "end": 239
                    }
                  ],
                  "start": 216,
                  "end": 240
                }
              ],
              "optional": false,
              "start": 210,
              "end": 241
            },
            "start": 203,
            "end": 242
          }
        ],
        "start": 200,
        "end": 244
      },
      "expression": false,
      "start": 140,
      "end": 244
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 64,
  "end": 244
}
```
