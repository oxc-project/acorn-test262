__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 73
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 75
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "aa",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 79
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 94
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 95,
                  "end": 98
                },
                "optional": false,
                "computed": false,
                "start": 87,
                "end": 98
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 99,
                    "end": 100
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "aa",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 103,
                    "end": 105
                  },
                  "start": 99,
                  "end": 105
                }
              ],
              "optional": false,
              "start": 87,
              "end": 106
            },
            "directive": null,
            "start": 87,
            "end": 107
          }
        ],
        "start": 81,
        "end": 109
      },
      "expression": false,
      "start": 61,
      "end": 109
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 185,
        "end": 188
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 189,
          "end": 190
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "aa",
          "optional": false,
          "typeAnnotation": null,
          "start": 192,
          "end": 194
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 202,
                  "end": 209
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 210,
                  "end": 213
                },
                "optional": false,
                "computed": false,
                "start": 202,
                "end": 213
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 214,
                    "end": 215
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "aa",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 218,
                    "end": 220
                  },
                  "start": 214,
                  "end": 220
                }
              ],
              "optional": false,
              "start": 202,
              "end": 221
            },
            "directive": null,
            "start": 202,
            "end": 222
          }
        ],
        "start": 196,
        "end": 224
      },
      "expression": false,
      "start": 176,
      "end": 224
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 61,
  "end": 224
}
```
