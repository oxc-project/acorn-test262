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
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 156,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 159,
            "end": 185,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 169,
                "end": 179,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 169,
                  "end": 179,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 169,
                    "end": 175,
                    "object": {
                      "type": "ThisExpression",
                      "start": 169,
                      "end": 173
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 175,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 178,
                    "end": 179,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "directive": null
              }
            ]
          },
          "expression": false
        },
        {
          "type": "ExpressionStatement",
          "start": 190,
          "end": 197,
          "expression": {
            "type": "NewExpression",
            "start": 190,
            "end": 197,
            "callee": {
              "type": "Identifier",
              "start": 194,
              "end": 195,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "directive": null
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
