__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 192,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 19,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 19,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 14,
              "end": 19,
              "literal": {
                "type": "Literal",
                "start": 14,
                "end": 19,
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 20,
        "end": 28,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 22,
          "end": 28
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 30,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 41,
          "end": 49,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 42,
            "end": 49,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 44,
              "end": 49,
              "literal": {
                "type": "Literal",
                "start": 44,
                "end": 49,
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 50,
        "end": 58,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 52,
          "end": 58
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 76,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 65,
            "end": 74,
            "argument": {
              "type": "Literal",
              "start": 72,
              "end": 73,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 78,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 88,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 89,
          "end": 97,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 90,
            "end": 97,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 92,
              "end": 97,
              "literal": {
                "type": "Literal",
                "start": 92,
                "end": 97,
                "value": "bar",
                "raw": "\"bar\""
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 98,
        "end": 106,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 100,
          "end": 106
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 108,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 118,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 119,
          "end": 127,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 120,
            "end": 127,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 122,
              "end": 127,
              "literal": {
                "type": "Literal",
                "start": 122,
                "end": 127,
                "value": "bar",
                "raw": "\"bar\""
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 128,
        "end": 136,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 130,
          "end": 136
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 137,
        "end": 154,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 143,
            "end": 152,
            "argument": {
              "type": "Literal",
              "start": 150,
              "end": 151,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 166,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 165,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 161,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 164,
            "end": 165,
            "decorators": [],
            "name": "f",
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
      "start": 167,
      "end": 177,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 176,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 172,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 175,
            "end": 176,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 179,
      "end": 185,
      "expression": {
        "type": "AssignmentExpression",
        "start": 179,
        "end": 184,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 179,
          "end": 180,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 183,
          "end": 184,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 186,
      "end": 192,
      "expression": {
        "type": "AssignmentExpression",
        "start": 186,
        "end": 191,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 186,
          "end": 187,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 190,
          "end": 191,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
