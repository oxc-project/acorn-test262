__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 146,
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
      "end": 62,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 61,
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
            "start": 56,
            "end": 61,
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
      "start": 63,
      "end": 82,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 81,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 68,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 71,
            "end": 81,
            "left": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "start": 76,
              "end": 81,
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
      "start": 83,
      "end": 100,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 99,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 95,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 95,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 90,
                "end": 95,
                "literal": {
                  "type": "Literal",
                  "start": 90,
                  "end": 95,
                  "value": "foo",
                  "raw": "\"foo\""
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 120,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 119,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 109,
            "end": 119,
            "left": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "start": 114,
              "end": 119,
              "value": "bar",
              "raw": "\"bar\""
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 121,
      "end": 146,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 145,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 141,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 141,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 128,
                "end": 141,
                "types": [
                  {
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
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 136,
                    "end": 141,
                    "literal": {
                      "type": "Literal",
                      "start": 136,
                      "end": 141,
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 144,
            "end": 145,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
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
