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
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 6
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 24,
                    "end": 31
                  },
                  "start": 22,
                  "end": 31
                },
                "start": 19,
                "end": 31
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
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 42,
                    "end": 45
                  },
                  "start": 35,
                  "end": 46
                }
              ],
              "start": 33,
              "end": 48
            },
            "expression": false,
            "start": 9,
            "end": 48
          },
          "definite": false,
          "start": 4,
          "end": 48
        }
      ],
      "declare": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 51
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 52,
              "end": 55
            },
            "operator": "in",
            "right": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 61,
                    "end": 64
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 66,
                    "end": 70
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 61,
                  "end": 70
                }
              ],
              "start": 59,
              "end": 72
            },
            "start": 52,
            "end": 72
          }
        ],
        "optional": false,
        "start": 49,
        "end": 73
      },
      "directive": null,
      "start": 49,
      "end": 74
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 74
}
```
