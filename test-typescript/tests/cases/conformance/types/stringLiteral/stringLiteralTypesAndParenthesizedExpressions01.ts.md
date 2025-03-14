stringLiteralTypesAndParenthesizedExpressions01.ts
```json
{
  "type": "Program",
  "start": 24,
  "end": 223,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 24,
      "end": 63,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 51,
        "decorators": [],
        "name": "myRandBool",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 53,
        "end": 62,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 55,
          "end": 62
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 87,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 77,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 77,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 72,
                "end": 77,
                "literal": {
                  "type": "Literal",
                  "start": 72,
                  "end": 77,
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 81,
            "end": 86,
            "raw": "\"foo\"",
            "value": "foo"
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 119,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 109,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 109,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 96,
                "end": 109,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 96,
                    "end": 101,
                    "literal": {
                      "type": "Literal",
                      "start": 96,
                      "end": 101,
                      "raw": "\"foo\"",
                      "value": "foo"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 104,
                    "end": 109,
                    "literal": {
                      "type": "Literal",
                      "start": 104,
                      "end": 109,
                      "raw": "\"bar\"",
                      "value": "bar"
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 113,
            "end": 118,
            "raw": "\"foo\"",
            "value": "foo"
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 121,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 166,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 133,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 133,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 128,
                "end": 133,
                "literal": {
                  "type": "Literal",
                  "start": 128,
                  "end": 133,
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 137,
            "end": 165,
            "alternate": {
              "type": "Literal",
              "start": 159,
              "end": 164,
              "raw": "\"foo\"",
              "value": "foo"
            },
            "consequent": {
              "type": "Literal",
              "start": 150,
              "end": 155,
              "raw": "\"foo\"",
              "value": "foo"
            },
            "test": {
              "type": "Identifier",
              "start": 137,
              "end": 147,
              "decorators": [],
              "name": "myRandBool",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 168,
      "end": 222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 221,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 188,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 173,
              "end": 188,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 175,
                "end": 188,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 175,
                    "end": 180,
                    "literal": {
                      "type": "Literal",
                      "start": 175,
                      "end": 180,
                      "raw": "\"foo\"",
                      "value": "foo"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 183,
                    "end": 188,
                    "literal": {
                      "type": "Literal",
                      "start": 183,
                      "end": 188,
                      "raw": "\"bar\"",
                      "value": "bar"
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 192,
            "end": 220,
            "alternate": {
              "type": "Literal",
              "start": 214,
              "end": 219,
              "raw": "\"bar\"",
              "value": "bar"
            },
            "consequent": {
              "type": "Literal",
              "start": 205,
              "end": 210,
              "raw": "\"foo\"",
              "value": "foo"
            },
            "test": {
              "type": "Identifier",
              "start": 192,
              "end": 202,
              "decorators": [],
              "name": "myRandBool",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
