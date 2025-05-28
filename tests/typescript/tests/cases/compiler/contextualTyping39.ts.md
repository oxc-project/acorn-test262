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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 56,
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
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 11,
              "end": 26,
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 13,
                  "end": 24,
                  "typeParameters": null,
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
                  }
                }
              ]
            },
            "expression": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 56,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": "err",
                      "raw": "\"err\""
                    }
                  }
                ]
              },
              "expression": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
