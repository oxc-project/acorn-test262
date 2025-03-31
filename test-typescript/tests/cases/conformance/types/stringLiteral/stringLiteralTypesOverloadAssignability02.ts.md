__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 216,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 24,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 34,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 35,
          "end": 43,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 43,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 38,
              "end": 43,
              "literal": {
                "type": "Literal",
                "start": 38,
                "end": 43,
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 44,
        "end": 52,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 46,
          "end": 52
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 54,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 64,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 65,
          "end": 73,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 66,
            "end": 73,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 68,
              "end": 73,
              "literal": {
                "type": "Literal",
                "start": 68,
                "end": 73,
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 100,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 89,
            "end": 98,
            "argument": {
              "type": "Literal",
              "start": 96,
              "end": 97,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 74,
        "end": 82,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 76,
          "end": 82
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 102,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 112,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 113,
          "end": 121,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 114,
            "end": 121,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 116,
              "end": 121,
              "literal": {
                "type": "Literal",
                "start": 116,
                "end": 121,
                "value": "bar",
                "raw": "\"bar\""
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 122,
        "end": 130,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 124,
          "end": 130
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 132,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 142,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 143,
          "end": 151,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 144,
            "end": 151,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 146,
              "end": 151,
              "literal": {
                "type": "Literal",
                "start": 146,
                "end": 151,
                "value": "bar",
                "raw": "\"bar\""
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 161,
        "end": 178,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 167,
            "end": 176,
            "argument": {
              "type": "Literal",
              "start": 174,
              "end": 175,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 152,
        "end": 160,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 154,
          "end": 160
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 180,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 189,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 185,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "name": "f",
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
      "start": 191,
      "end": 201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 200,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 196,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 199,
            "end": 200,
            "name": "g",
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
      "type": "ExpressionStatement",
      "start": 203,
      "end": 209,
      "expression": {
        "type": "AssignmentExpression",
        "start": 203,
        "end": 208,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 203,
          "end": 204,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 207,
          "end": 208,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 210,
      "end": 216,
      "expression": {
        "type": "AssignmentExpression",
        "start": 210,
        "end": 215,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 210,
          "end": 211,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 214,
          "end": 215,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
