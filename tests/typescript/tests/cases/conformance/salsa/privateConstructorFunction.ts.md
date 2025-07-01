__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "FunctionDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 156
          },
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 169,
                      "end": 173
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 174,
                      "end": 175
                    },
                    "optional": false,
                    "computed": false,
                    "start": 169,
                    "end": 175
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 178,
                    "end": 179
                  },
                  "start": 169,
                  "end": 179
                },
                "directive": null,
                "start": 169,
                "end": 179
              }
            ],
            "start": 159,
            "end": 185
          },
          "expression": false,
          "start": 146,
          "end": 185
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 194,
              "end": 195
            },
            "typeArguments": null,
            "arguments": [],
            "start": 190,
            "end": 197
          },
          "directive": null,
          "start": 190,
          "end": 197
        }
      ],
      "start": 0,
      "end": 199
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 199
}
```
