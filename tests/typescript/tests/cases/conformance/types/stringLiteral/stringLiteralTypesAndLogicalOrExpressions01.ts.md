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
            "start": 56,
            "end": 61
          },
          "definite": false,
          "start": 45,
          "end": 61
        }
      ],
      "declare": false,
      "start": 41,
      "end": 62
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
            "typeAnnotation": null,
            "start": 67,
            "end": 68
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 72
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 76,
              "end": 81
            },
            "start": 71,
            "end": 81
          },
          "definite": false,
          "start": 67,
          "end": 81
        }
      ],
      "declare": false,
      "start": 63,
      "end": 82
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
                  "start": 90,
                  "end": 95
                },
                "start": 90,
                "end": 95
              },
              "start": 88,
              "end": 95
            },
            "start": 87,
            "end": 95
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 99
          },
          "definite": false,
          "start": 87,
          "end": 99
        }
      ],
      "declare": false,
      "start": 83,
      "end": 100
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
            "typeAnnotation": null,
            "start": 105,
            "end": 106
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 110
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 114,
              "end": 119
            },
            "start": 109,
            "end": 119
          },
          "definite": false,
          "start": 105,
          "end": 119
        }
      ],
      "declare": false,
      "start": 101,
      "end": 120
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
            "name": "e",
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
                      "start": 128,
                      "end": 133
                    },
                    "start": 128,
                    "end": 133
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 136,
                      "end": 141
                    },
                    "start": 136,
                    "end": 141
                  }
                ],
                "start": 128,
                "end": 141
              },
              "start": 126,
              "end": 141
            },
            "start": 125,
            "end": 141
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 145
          },
          "definite": false,
          "start": 125,
          "end": 145
        }
      ],
      "declare": false,
      "start": 121,
      "end": 146
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 146
}
```
