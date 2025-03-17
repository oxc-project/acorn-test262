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
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 51,
        "decorators": [],
        "name": "myRandBool",
        "optional": false,
        "typeAnnotation": null
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
      },
      "typeParameters": null
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
            "start": 80,
            "end": 85,
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
      "start": 87,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 105,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 95,
            "end": 105,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 100,
              "end": 105,
              "raw": "\"foo\"",
              "value": "foo"
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 119,
            "decorators": [],
            "name": "c",
            "optional": false,
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
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 133,
            "end": 143,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 138,
              "end": 143,
              "raw": "\"bar\"",
              "value": "bar"
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 165,
            "decorators": [],
            "name": "e",
            "optional": false,
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
                      "raw": "\"foo\"",
                      "value": "foo"
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
                      "raw": "\"bar\"",
                      "value": "bar"
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
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
