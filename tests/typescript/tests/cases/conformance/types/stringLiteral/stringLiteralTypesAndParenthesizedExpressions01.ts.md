__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 198,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 27,
        "decorators": [],
        "name": "myRandBool",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 29,
        "end": 38,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 31,
          "end": 38
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 64,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 63,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 53,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 53,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 48,
                "end": 53,
                "literal": {
                  "type": "Literal",
                  "start": 48,
                  "end": 53,
                  "value": "foo",
                  "raw": "\"foo\""
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 57,
            "end": 62,
            "value": "foo",
            "raw": "\"foo\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 96,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 85,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 85,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 72,
                "end": 85,
                "types": [
                  {
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
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 80,
                    "end": 85,
                    "literal": {
                      "type": "Literal",
                      "start": 80,
                      "end": 85,
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 89,
            "end": 94,
            "value": "foo",
            "raw": "\"foo\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 143,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 142,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 109,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 109,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 104,
                "end": 109,
                "literal": {
                  "type": "Literal",
                  "start": 104,
                  "end": 109,
                  "value": "foo",
                  "raw": "\"foo\""
                }
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 113,
            "end": 141,
            "test": {
              "type": "Identifier",
              "start": 113,
              "end": 123,
              "decorators": [],
              "name": "myRandBool",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "Literal",
              "start": 126,
              "end": 131,
              "value": "foo",
              "raw": "\"foo\""
            },
            "alternate": {
              "type": "Literal",
              "start": 135,
              "end": 140,
              "value": "foo",
              "raw": "\"foo\""
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 144,
      "end": 198,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 197,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 164,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 164,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 151,
                "end": 164,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 151,
                    "end": 156,
                    "literal": {
                      "type": "Literal",
                      "start": 151,
                      "end": 156,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 159,
                    "end": 164,
                    "literal": {
                      "type": "Literal",
                      "start": 159,
                      "end": 164,
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 168,
            "end": 196,
            "test": {
              "type": "Identifier",
              "start": 168,
              "end": 178,
              "decorators": [],
              "name": "myRandBool",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "Literal",
              "start": 181,
              "end": 186,
              "value": "foo",
              "raw": "\"foo\""
            },
            "alternate": {
              "type": "Literal",
              "start": 190,
              "end": 195,
              "value": "bar",
              "raw": "\"bar\""
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
