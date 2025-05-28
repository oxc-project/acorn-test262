__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 194,
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
      "end": 77,
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
          "end": 50,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 42,
            "end": 50,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 44,
              "end": 50
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 51,
        "end": 59,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 53,
          "end": 59
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 77,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 66,
            "end": 75,
            "argument": {
              "type": "Literal",
              "start": 73,
              "end": 74,
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
      "start": 79,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 89,
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
          "start": 90,
          "end": 98,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 91,
            "end": 98,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 93,
              "end": 98,
              "literal": {
                "type": "Literal",
                "start": 93,
                "end": 98,
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 99,
        "end": 107,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 101,
          "end": 107
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 109,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 119,
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
          "start": 120,
          "end": 129,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 121,
            "end": 129,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 123,
              "end": 129
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 130,
        "end": 138,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 132,
          "end": 138
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 139,
        "end": 156,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 145,
            "end": 154,
            "argument": {
              "type": "Literal",
              "start": 152,
              "end": 153,
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
      "start": 158,
      "end": 168,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 167,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 163,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 166,
            "end": 167,
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
      "start": 169,
      "end": 179,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 178,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 174,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 177,
            "end": 178,
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
      "start": 181,
      "end": 187,
      "expression": {
        "type": "AssignmentExpression",
        "start": 181,
        "end": 186,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 181,
          "end": 182,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 185,
          "end": 186,
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
      "start": 188,
      "end": 194,
      "expression": {
        "type": "AssignmentExpression",
        "start": 188,
        "end": 193,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 188,
          "end": 189,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 192,
          "end": 193,
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
