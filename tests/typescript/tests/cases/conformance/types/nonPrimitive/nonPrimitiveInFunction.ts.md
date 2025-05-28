__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 364,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 19,
        "decorators": [],
        "name": "takeObject",
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
          "start": 20,
          "end": 29,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 29,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 23,
              "end": 29
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 33,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 55,
        "decorators": [],
        "name": "returnObject",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 57,
        "end": 65,
        "typeAnnotation": {
          "type": "TSObjectKeyword",
          "start": 59,
          "end": 65
        }
      },
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
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 111,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 110,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 110,
            "decorators": [],
            "name": "nonPrimitive",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 110,
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 104,
                "end": 110
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 135,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 134,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 134,
            "decorators": [],
            "name": "primitive",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 134,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 127,
                "end": 134
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "takeObject",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 148,
            "end": 160,
            "decorators": [],
            "name": "nonPrimitive",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "nonPrimitive",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 178,
          "end": 192,
          "callee": {
            "type": "Identifier",
            "start": 178,
            "end": 190,
            "decorators": [],
            "name": "returnObject",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
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
          "decorators": [],
          "name": "takeObject",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 206,
            "end": 215,
            "decorators": [],
            "name": "primitive",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "primitive",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 246,
          "end": 260,
          "callee": {
            "type": "Identifier",
            "start": 246,
            "end": 258,
            "decorators": [],
            "name": "returnObject",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
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
        "decorators": [],
        "name": "returnError",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 301,
        "end": 309,
        "typeAnnotation": {
          "type": "TSObjectKeyword",
          "start": 303,
          "end": 309
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 310,
        "end": 364,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 316,
            "end": 330,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 320,
                "end": 329,
                "id": {
                  "type": "Identifier",
                  "start": 320,
                  "end": 323,
                  "decorators": [],
                  "name": "ret",
                  "optional": false,
                  "typeAnnotation": null
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
              "decorators": [],
              "name": "ret",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
