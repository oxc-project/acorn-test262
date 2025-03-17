__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 365,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 19,
        "name": "takeObject",
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
          "start": 20,
          "end": 29,
          "name": "o",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 29,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 23,
              "end": 29
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 33,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 55,
        "name": "returnObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 66,
        "end": 84,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 72,
            "end": 82,
            "argument": {
              "type": "ObjectExpression",
              "start": 79,
              "end": 81,
              "properties": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 57,
        "end": 65,
        "typeAnnotation": {
          "type": "TSObjectKeyword",
          "start": 59,
          "end": 65
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 110,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 110,
            "name": "nonPrimitive",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 110,
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 104,
                "end": 110
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 134,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 134,
            "name": "primitive",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 134,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 127,
                "end": 134
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 137,
      "end": 162,
      "expression": {
        "type": "CallExpression",
        "start": 137,
        "end": 161,
        "callee": {
          "type": "Identifier",
          "start": 137,
          "end": 147,
          "name": "takeObject",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 148,
            "end": 160,
            "name": "nonPrimitive",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 163,
      "end": 193,
      "expression": {
        "type": "AssignmentExpression",
        "start": 163,
        "end": 192,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 163,
          "end": 175,
          "name": "nonPrimitive",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 178,
          "end": 192,
          "callee": {
            "type": "Identifier",
            "start": 178,
            "end": 190,
            "name": "returnObject",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 195,
      "end": 217,
      "expression": {
        "type": "CallExpression",
        "start": 195,
        "end": 216,
        "callee": {
          "type": "Identifier",
          "start": 195,
          "end": 205,
          "name": "takeObject",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 206,
            "end": 215,
            "name": "primitive",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 234,
      "end": 261,
      "expression": {
        "type": "AssignmentExpression",
        "start": 234,
        "end": 260,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 234,
          "end": 243,
          "name": "primitive",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 246,
          "end": 260,
          "callee": {
            "type": "Identifier",
            "start": 246,
            "end": 258,
            "name": "returnObject",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 279,
      "end": 364,
      "id": {
        "type": "Identifier",
        "start": 288,
        "end": 299,
        "name": "returnError",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 310,
        "end": 364,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 316,
            "end": 330,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 320,
                "end": 329,
                "id": {
                  "type": "Identifier",
                  "start": 320,
                  "end": 323,
                  "name": "ret",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 326,
                  "end": 329,
                  "value": 123,
                  "raw": "123"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 335,
            "end": 346,
            "argument": {
              "type": "Identifier",
              "start": 342,
              "end": 345,
              "name": "ret",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 301,
        "end": 309,
        "typeAnnotation": {
          "type": "TSObjectKeyword",
          "start": 303,
          "end": 309
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
