__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "name": "fn",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 9,
            "end": 48,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 31,
                "name": "val",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 22,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 24,
                    "end": 31
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 33,
              "end": 48,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 35,
                  "end": 46,
                  "argument": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 45,
                    "name": "val",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 49,
      "end": 74,
      "expression": {
        "type": "CallExpression",
        "start": 49,
        "end": 73,
        "callee": {
          "type": "Identifier",
          "start": 49,
          "end": 51,
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 52,
            "end": 72,
            "left": {
              "type": "Literal",
              "start": 52,
              "end": 55,
              "value": "a",
              "raw": "\"a\""
            },
            "operator": "in",
            "right": {
              "type": "ObjectExpression",
              "start": 59,
              "end": 72,
              "properties": [
                {
                  "type": "Property",
                  "start": 61,
                  "end": 70,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 61,
                    "end": 64,
                    "value": "a",
                    "raw": "\"a\""
                  },
                  "value": {
                    "type": "Literal",
                    "start": 66,
                    "end": 70,
                    "value": true,
                    "raw": "true"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
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
