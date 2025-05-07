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
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 27,
        "decorators": [],
        "name": "myRandBool",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 63,
          "definite": false,
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
                  "raw": "\"foo\"",
                  "value": "foo",
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 57,
            "end": 62,
            "raw": "\"foo\"",
            "value": "foo",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 95,
          "definite": false,
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
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
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
                      "raw": "\"bar\"",
                      "value": "bar",
                      "regex": null,
                      "bigint": null
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
            "raw": "\"foo\"",
            "value": "foo",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 142,
          "definite": false,
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
                  "raw": "\"foo\"",
                  "value": "foo",
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 113,
            "end": 141,
            "alternate": {
              "type": "Literal",
              "start": 135,
              "end": 140,
              "raw": "\"foo\"",
              "value": "foo",
              "regex": null,
              "bigint": null
            },
            "consequent": {
              "type": "Literal",
              "start": 126,
              "end": 131,
              "raw": "\"foo\"",
              "value": "foo",
              "regex": null,
              "bigint": null
            },
            "test": {
              "type": "Identifier",
              "start": 113,
              "end": 123,
              "decorators": [],
              "name": "myRandBool",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 144,
      "end": 198,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 197,
          "definite": false,
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
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
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
                      "raw": "\"bar\"",
                      "value": "bar",
                      "regex": null,
                      "bigint": null
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
            "alternate": {
              "type": "Literal",
              "start": 190,
              "end": 195,
              "raw": "\"bar\"",
              "value": "bar",
              "regex": null,
              "bigint": null
            },
            "consequent": {
              "type": "Literal",
              "start": 181,
              "end": 186,
              "raw": "\"foo\"",
              "value": "foo",
              "regex": null,
              "bigint": null
            },
            "test": {
              "type": "Identifier",
              "start": 168,
              "end": 178,
              "decorators": [],
              "name": "myRandBool",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
