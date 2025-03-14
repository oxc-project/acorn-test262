stringLiteralTypesOverloadAssignability04.ts
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
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 34,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 35,
          "end": 43,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "raw": "\"foo\"",
                "value": "foo"
              }
            }
          }
        }
      ],
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
      "async": false,
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
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 64,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 65,
          "end": 73,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "raw": "\"foo\"",
                "value": "foo"
              }
            }
          }
        }
      ],
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
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 112,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 113,
          "end": 121,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "raw": "\"foo\"",
                "value": "foo"
              }
            }
          }
        }
      ],
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
      "async": false,
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
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 142,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 143,
          "end": 151,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "raw": "\"foo\"",
                "value": "foo"
              }
            }
          }
        }
      ],
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 185,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 196,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 199,
            "end": 200,
            "decorators": [],
            "name": "g",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 207,
          "end": 208,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 214,
          "end": 215,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
