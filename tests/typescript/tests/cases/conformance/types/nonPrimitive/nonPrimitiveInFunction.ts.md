__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takeObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 19
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 23,
              "end": 29
            },
            "start": 21,
            "end": 29
          },
          "start": 20,
          "end": 29
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 31,
        "end": 33
      },
      "expression": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "returnObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 55
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSObjectKeyword",
          "start": 59,
          "end": 65
        },
        "start": 57,
        "end": 65
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 79,
              "end": 81
            },
            "start": 72,
            "end": 82
          }
        ],
        "start": 66,
        "end": 84
      },
      "expression": false,
      "start": 34,
      "end": 84
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nonPrimitive",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 104,
                "end": 110
              },
              "start": 102,
              "end": 110
            },
            "start": 90,
            "end": 110
          },
          "init": null,
          "definite": false,
          "start": 90,
          "end": 110
        }
      ],
      "declare": false,
      "start": 86,
      "end": 111
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "primitive",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 127,
                "end": 134
              },
              "start": 125,
              "end": 134
            },
            "start": 116,
            "end": 134
          },
          "init": null,
          "definite": false,
          "start": 116,
          "end": 134
        }
      ],
      "declare": false,
      "start": 112,
      "end": 135
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "takeObject",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 147
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nonPrimitive",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 160
          }
        ],
        "optional": false,
        "start": 137,
        "end": 161
      },
      "directive": null,
      "start": 137,
      "end": 162
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonPrimitive",
          "optional": false,
          "typeAnnotation": null,
          "start": 163,
          "end": 175
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "returnObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 178,
            "end": 190
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 178,
          "end": 192
        },
        "start": 163,
        "end": 192
      },
      "directive": null,
      "start": 163,
      "end": 193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "takeObject",
          "optional": false,
          "typeAnnotation": null,
          "start": 195,
          "end": 205
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "primitive",
            "optional": false,
            "typeAnnotation": null,
            "start": 206,
            "end": 215
          }
        ],
        "optional": false,
        "start": 195,
        "end": 216
      },
      "directive": null,
      "start": 195,
      "end": 217
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "primitive",
          "optional": false,
          "typeAnnotation": null,
          "start": 234,
          "end": 243
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "returnObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 246,
            "end": 258
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 246,
          "end": 260
        },
        "start": 234,
        "end": 260
      },
      "directive": null,
      "start": 234,
      "end": 261
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "returnError",
        "optional": false,
        "typeAnnotation": null,
        "start": 288,
        "end": 299
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSObjectKeyword",
          "start": 303,
          "end": 309
        },
        "start": 301,
        "end": 309
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ret",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 320,
                  "end": 323
                },
                "init": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 326,
                  "end": 329
                },
                "definite": false,
                "start": 320,
                "end": 329
              }
            ],
            "declare": false,
            "start": 316,
            "end": 330
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ret",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 345
            },
            "start": 335,
            "end": 346
          }
        ],
        "start": 310,
        "end": 364
      },
      "expression": false,
      "start": 279,
      "end": 364
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 364
}
```
