__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [],
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 28
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 31,
            "end": 35
          },
          "definite": false,
          "start": 26,
          "end": 35
        }
      ],
      "declare": false,
      "start": 22,
      "end": 36
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [],
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 45
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 48,
            "end": 52
          },
          "definite": false,
          "start": 42,
          "end": 52
        }
      ],
      "declare": false,
      "start": 38,
      "end": 53
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [],
          "optional": false,
          "typeAnnotation": null,
          "start": 56,
          "end": 58
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 61,
          "end": 65
        },
        "start": 56,
        "end": 65
      },
      "directive": null,
      "start": 55,
      "end": 67
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [],
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 76
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 88
          },
          "definite": false,
          "start": 73,
          "end": 88
        }
      ],
      "declare": false,
      "start": 69,
      "end": 89
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [],
          "optional": false,
          "typeAnnotation": null,
          "start": 92,
          "end": 94
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 97,
          "end": 106
        },
        "start": 92,
        "end": 106
      },
      "directive": null,
      "start": 91,
      "end": 108
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [],
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 117
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 124
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 131
                },
                "optional": false,
                "computed": false,
                "start": 120,
                "end": 131
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 120,
              "end": 133
            },
            "consequent": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 136,
              "end": 138
            },
            "alternate": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 141,
              "end": 145
            },
            "start": 120,
            "end": 145
          },
          "definite": false,
          "start": 114,
          "end": 145
        }
      ],
      "declare": false,
      "start": 110,
      "end": 146
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [],
          "optional": false,
          "typeAnnotation": null,
          "start": 149,
          "end": 151
        },
        "right": {
          "type": "ConditionalExpression",
          "test": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 158
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "random",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 165
              },
              "optional": false,
              "computed": false,
              "start": 154,
              "end": 165
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 154,
            "end": 167
          },
          "consequent": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 170,
            "end": 172
          },
          "alternate": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 175,
            "end": 179
          },
          "start": 154,
          "end": 179
        },
        "start": 149,
        "end": 179
      },
      "directive": null,
      "start": 148,
      "end": 181
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [],
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 190
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 197
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 198,
                  "end": 204
                },
                "optional": false,
                "computed": false,
                "start": 193,
                "end": 204
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 193,
              "end": 206
            },
            "consequent": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 209,
              "end": 211
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 223
            },
            "start": 193,
            "end": 223
          },
          "definite": false,
          "start": 187,
          "end": 223
        }
      ],
      "declare": false,
      "start": 183,
      "end": 224
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [],
          "optional": false,
          "typeAnnotation": null,
          "start": 227,
          "end": 229
        },
        "right": {
          "type": "ConditionalExpression",
          "test": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 236
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "random",
                "optional": false,
                "typeAnnotation": null,
                "start": 237,
                "end": 243
              },
              "optional": false,
              "computed": false,
              "start": 232,
              "end": 243
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 232,
            "end": 245
          },
          "consequent": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 248,
            "end": 250
          },
          "alternate": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 253,
            "end": 262
          },
          "start": 232,
          "end": 262
        },
        "start": 227,
        "end": 262
      },
      "directive": null,
      "start": 226,
      "end": 264
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [],
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 273
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 280
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 287
                },
                "optional": false,
                "computed": false,
                "start": 276,
                "end": 287
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 276,
              "end": 289
            },
            "consequent": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 292,
              "end": 296
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 308
            },
            "start": 276,
            "end": 308
          },
          "definite": false,
          "start": 270,
          "end": 308
        }
      ],
      "declare": false,
      "start": 266,
      "end": 309
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [],
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 314
        },
        "right": {
          "type": "ConditionalExpression",
          "test": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 321
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "random",
                "optional": false,
                "typeAnnotation": null,
                "start": 322,
                "end": 328
              },
              "optional": false,
              "computed": false,
              "start": 317,
              "end": 328
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 317,
            "end": 330
          },
          "consequent": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 333,
            "end": 337
          },
          "alternate": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 340,
            "end": 349
          },
          "start": 317,
          "end": 349
        },
        "start": 312,
        "end": 349
      },
      "directive": null,
      "start": 311,
      "end": 351
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 351
}
```
