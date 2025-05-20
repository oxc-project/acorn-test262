__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 26,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 26,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 7,
                "end": 26,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 8,
                    "end": 15,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 9,
                      "end": 15,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 11,
                        "end": 15,
                        "literal": {
                          "type": "Literal",
                          "start": 11,
                          "end": 15,
                          "raw": "'hi'",
                          "value": "hi"
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 17,
                  "end": 26,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 20,
                    "end": 26
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 29,
            "end": 55,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 42,
              "end": 55,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 44,
                  "end": 53,
                  "argument": {
                    "type": "Literal",
                    "start": 51,
                    "end": 52,
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 30,
                "end": 37,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 31,
                  "end": 37,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 33,
                    "end": 37,
                    "literal": {
                      "type": "Literal",
                      "start": 33,
                      "end": 37,
                      "raw": "'hi'",
                      "value": "hi"
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
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
