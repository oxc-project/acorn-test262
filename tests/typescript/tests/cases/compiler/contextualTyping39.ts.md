__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 57,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 56,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 10,
            "end": 56,
            "expression": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 56,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 56,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 41,
                    "end": 54,
                    "argument": {
                      "type": "Literal",
                      "start": 48,
                      "end": 53,
                      "raw": "\"err\"",
                      "value": "err"
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 11,
              "end": 26,
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 13,
                  "end": 24,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 15,
                    "end": 23,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 17,
                      "end": 23
                    }
                  },
                  "typeParameters": null
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
