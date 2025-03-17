__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 171,
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
      "end": 86,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 85,
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
            "start": 80,
            "end": 85,
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
      "start": 87,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 105,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 95,
            "end": 105,
            "left": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "start": 100,
              "end": 105,
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
      "start": 107,
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 123,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 119,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 119,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 114,
                "end": 119,
                "literal": {
                  "type": "Literal",
                  "start": 114,
                  "end": 119,
                  "value": "foo",
                  "raw": "\"foo\""
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 144,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 143,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 133,
            "end": 143,
            "left": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "start": 138,
              "end": 143,
              "value": "bar",
              "raw": "\"bar\""
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
      "start": 145,
      "end": 170,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 169,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 165,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 165,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 152,
                "end": 165,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 152,
                    "end": 157,
                    "literal": {
                      "type": "Literal",
                      "start": 152,
                      "end": 157,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 160,
                    "end": 165,
                    "literal": {
                      "type": "Literal",
                      "start": 160,
                      "end": 165,
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
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
