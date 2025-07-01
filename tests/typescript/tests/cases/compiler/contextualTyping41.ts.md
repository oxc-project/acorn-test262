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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 15,
                      "end": 21
                    },
                    "start": 14,
                    "end": 21
                  },
                  "start": 12,
                  "end": 22
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 26,
                          "end": 32
                        },
                        "start": 25,
                        "end": 32
                      },
                      "start": 24,
                      "end": 32
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 34,
                      "end": 40
                    },
                    "start": 33,
                    "end": 40
                  },
                  "start": 23,
                  "end": 41
                }
              ],
              "start": 11,
              "end": 43
            },
            "expression": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "err",
                      "raw": "\"err\"",
                      "start": 64,
                      "end": 69
                    },
                    "start": 57,
                    "end": 70
                  }
                ],
                "start": 56,
                "end": 71
              },
              "expression": false,
              "start": 46,
              "end": 71
            },
            "start": 10,
            "end": 72
          },
          "definite": false,
          "start": 4,
          "end": 72
        }
      ],
      "declare": false,
      "start": 0,
      "end": 73
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 73
}
```
