__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 73,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 72,
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
            "end": 72,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 11,
              "end": 43,
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 12,
                  "end": 22,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 14,
                    "end": 21,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 15,
                      "end": 21
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 23,
                  "end": 41,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 24,
                      "end": 32,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 25,
                        "end": 32,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 26,
                          "end": 32
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 40,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 34,
                      "end": 40
                    }
                  }
                }
              ]
            },
            "expression": {
              "type": "FunctionExpression",
              "start": 46,
              "end": 71,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 56,
                "end": 71,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 57,
                    "end": 70,
                    "argument": {
                      "type": "Literal",
                      "start": 64,
                      "end": 69,
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
