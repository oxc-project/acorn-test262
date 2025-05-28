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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 55,
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
                "typeParameters": null,
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
                          "value": "hi",
                          "raw": "'hi'"
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
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 29,
            "end": 55,
            "expression": false,
            "async": false,
            "typeParameters": null,
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
                      "value": "hi",
                      "raw": "'hi'"
                    }
                  }
                }
              }
            ],
            "returnType": null,
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
                    "value": 1,
                    "raw": "1"
                  }
                }
              ]
            },
            "id": null,
            "generator": false
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
