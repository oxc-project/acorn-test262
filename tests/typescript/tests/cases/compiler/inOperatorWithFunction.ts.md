__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 48,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 9,
            "end": 48,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 31,
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 22,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 24,
                    "end": 31
                  }
                }
              }
            ],
            "returnType": null,
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
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                  "kind": "init",
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
