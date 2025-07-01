__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myRandBool",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 27
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 31,
          "end": 38
        },
        "start": 29,
        "end": 38
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 48,
                  "end": 53
                },
                "start": 48,
                "end": 53
              },
              "start": 46,
              "end": 53
            },
            "start": 45,
            "end": 53
          },
          "init": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 57,
            "end": 62
          },
          "definite": false,
          "start": 45,
          "end": 63
        }
      ],
      "declare": false,
      "start": 41,
      "end": 64
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 72,
                      "end": 77
                    },
                    "start": 72,
                    "end": 77
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 80,
                      "end": 85
                    },
                    "start": 80,
                    "end": 85
                  }
                ],
                "start": 72,
                "end": 85
              },
              "start": 70,
              "end": 85
            },
            "start": 69,
            "end": 85
          },
          "init": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 89,
            "end": 94
          },
          "definite": false,
          "start": 69,
          "end": 95
        }
      ],
      "declare": false,
      "start": 65,
      "end": 96
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 104,
                  "end": 109
                },
                "start": 104,
                "end": 109
              },
              "start": 102,
              "end": 109
            },
            "start": 101,
            "end": 109
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "myRandBool",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 123
            },
            "consequent": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 126,
              "end": 131
            },
            "alternate": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 135,
              "end": 140
            },
            "start": 113,
            "end": 141
          },
          "definite": false,
          "start": 101,
          "end": 142
        }
      ],
      "declare": false,
      "start": 97,
      "end": 143
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 151,
                      "end": 156
                    },
                    "start": 151,
                    "end": 156
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 159,
                      "end": 164
                    },
                    "start": 159,
                    "end": 164
                  }
                ],
                "start": 151,
                "end": 164
              },
              "start": 149,
              "end": 164
            },
            "start": 148,
            "end": 164
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "myRandBool",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 178
            },
            "consequent": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 181,
              "end": 186
            },
            "alternate": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 190,
              "end": 195
            },
            "start": 168,
            "end": 196
          },
          "definite": false,
          "start": 148,
          "end": 197
        }
      ],
      "declare": false,
      "start": 144,
      "end": 198
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 198
}
```
