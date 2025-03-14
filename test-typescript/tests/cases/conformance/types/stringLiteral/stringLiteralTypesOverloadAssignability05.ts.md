stringLiteralTypesOverloadAssignability05.ts
```json
{
  "type": "Program",
  "start": 24,
  "end": 249,
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
      "type": "TSDeclareFunction",
      "start": 54,
      "end": 84,
      "async": false,
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
          "end": 74,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 66,
            "end": 74,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 68,
              "end": 74
            }
          }
        }
      ],
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
      "type": "FunctionDeclaration",
      "start": 85,
      "end": 132,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 115,
        "end": 132,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 121,
            "end": 130,
            "argument": {
              "type": "Literal",
              "start": 128,
              "end": 129,
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
        "start": 94,
        "end": 95,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 96,
          "end": 105,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 97,
            "end": 105,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 99,
              "end": 105
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 106,
        "end": 114,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 108,
          "end": 114
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 134,
      "end": 163,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 144,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 145,
          "end": 153,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 146,
            "end": 153,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 148,
              "end": 153,
              "literal": {
                "type": "Literal",
                "start": 148,
                "end": 153,
                "raw": "\"foo\"",
                "value": "foo"
              }
            }
          }
        }
      ],
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
      "type": "FunctionDeclaration",
      "start": 164,
      "end": 211,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 194,
        "end": 211,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 200,
            "end": 209,
            "argument": {
              "type": "Literal",
              "start": 207,
              "end": 208,
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
        "start": 173,
        "end": 174,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 175,
          "end": 184,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 176,
            "end": 184,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 178,
              "end": 184
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 185,
        "end": 193,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 187,
          "end": 193
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 213,
      "end": 223,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 222,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 218,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 221,
            "end": 222,
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
      "start": 224,
      "end": 234,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 228,
          "end": 233,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 228,
            "end": 229,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 232,
            "end": 233,
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
      "start": 236,
      "end": 242,
      "expression": {
        "type": "AssignmentExpression",
        "start": 236,
        "end": 241,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 236,
          "end": 237,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 240,
          "end": 241,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 243,
      "end": 249,
      "expression": {
        "type": "AssignmentExpression",
        "start": 243,
        "end": 248,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 243,
          "end": 244,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 247,
          "end": 248,
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
