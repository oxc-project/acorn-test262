__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 51,
        "name": "myRandBool",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 77,
            "name": "a",
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
                  "value": "foo",
                  "raw": "\"foo\""
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 81,
            "end": 86,
            "value": "foo",
            "raw": "\"foo\""
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 109,
            "name": "b",
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
                      "value": "foo",
                      "raw": "\"foo\""
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
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 113,
            "end": 118,
            "value": "foo",
            "raw": "\"foo\""
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 133,
            "name": "c",
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
                  "value": "foo",
                  "raw": "\"foo\""
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 137,
            "end": 165,
            "test": {
              "type": "Identifier",
              "start": 137,
              "end": 147,
              "name": "myRandBool",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "Literal",
              "start": 150,
              "end": 155,
              "value": "foo",
              "raw": "\"foo\""
            },
            "alternate": {
              "type": "Literal",
              "start": 159,
              "end": 164,
              "value": "foo",
              "raw": "\"foo\""
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 188,
            "name": "d",
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
                      "value": "foo",
                      "raw": "\"foo\""
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
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 192,
            "end": 220,
            "test": {
              "type": "Identifier",
              "start": 192,
              "end": 202,
              "name": "myRandBool",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "Literal",
              "start": 205,
              "end": 210,
              "value": "foo",
              "raw": "\"foo\""
            },
            "alternate": {
              "type": "Literal",
              "start": 214,
              "end": 219,
              "value": "bar",
              "raw": "\"bar\""
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
