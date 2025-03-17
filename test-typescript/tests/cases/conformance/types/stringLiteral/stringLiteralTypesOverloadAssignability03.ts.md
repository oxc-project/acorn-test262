__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 218,
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
      "end": 101,
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
          "end": 74,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 66,
            "end": 74,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 68,
              "end": 74
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 84,
        "end": 101,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 90,
            "end": 99,
            "argument": {
              "type": "Literal",
              "start": 97,
              "end": 98,
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
        "start": 75,
        "end": 83,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 77,
          "end": 83
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 103,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
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
          "start": 114,
          "end": 122,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 115,
            "end": 122,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 117,
              "end": 122,
              "literal": {
                "type": "Literal",
                "start": 117,
                "end": 122,
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
        "start": 123,
        "end": 131,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 125,
          "end": 131
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 133,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 143,
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
          "start": 144,
          "end": 153,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 145,
            "end": 153,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 147,
              "end": 153
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 163,
        "end": 180,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 169,
            "end": 178,
            "argument": {
              "type": "Literal",
              "start": 176,
              "end": 177,
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
        "start": 154,
        "end": 162,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 156,
          "end": 162
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 182,
      "end": 192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 186,
          "end": 191,
          "id": {
            "type": "Identifier",
            "start": 186,
            "end": 187,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 190,
            "end": 191,
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
      "start": 193,
      "end": 203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 197,
          "end": 202,
          "id": {
            "type": "Identifier",
            "start": 197,
            "end": 198,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 201,
            "end": 202,
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
      "start": 205,
      "end": 211,
      "expression": {
        "type": "AssignmentExpression",
        "start": 205,
        "end": 210,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 205,
          "end": 206,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 209,
          "end": 210,
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
      "start": 212,
      "end": 218,
      "expression": {
        "type": "AssignmentExpression",
        "start": 212,
        "end": 217,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 212,
          "end": 213,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 216,
          "end": 217,
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
