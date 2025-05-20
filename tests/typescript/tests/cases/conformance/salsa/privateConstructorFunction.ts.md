__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 199,
  "body": [
    {
      "type": "BlockStatement",
      "start": 0,
      "end": 199,
      "body": [
        {
          "type": "FunctionDeclaration",
          "start": 146,
          "end": 185,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 159,
            "end": 185,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 169,
                "end": 179,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 169,
                  "end": 179,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 169,
                    "end": 175,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 169,
                      "end": 173
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 175,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 178,
                    "end": 179,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 156,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "params": [],
          "returnType": null,
          "typeParameters": null
        },
        {
          "type": "ExpressionStatement",
          "start": 190,
          "end": 197,
          "directive": null,
          "expression": {
            "type": "NewExpression",
            "start": 190,
            "end": 197,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 194,
              "end": 195,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
