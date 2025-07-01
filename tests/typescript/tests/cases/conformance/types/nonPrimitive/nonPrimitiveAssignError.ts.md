__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 17
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 21,
                  "end": 24
                },
                "value": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 26,
                  "end": 31
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 21,
                "end": 31
              }
            ],
            "start": 20,
            "end": 32
          },
          "definite": false,
          "start": 16,
          "end": 32
        }
      ],
      "declare": false,
      "start": 12,
      "end": 33
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 41,
                "end": 47
              },
              "start": 39,
              "end": 47
            },
            "start": 38,
            "end": 47
          },
          "init": null,
          "definite": false,
          "start": 38,
          "end": 47
        }
      ],
      "declare": false,
      "start": 34,
      "end": 48
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 50
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 54
        },
        "start": 49,
        "end": 54
      },
      "directive": null,
      "start": 49,
      "end": 55
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 56,
          "end": 57
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 60,
          "end": 61
        },
        "start": 56,
        "end": 61
      },
      "directive": null,
      "start": 56,
      "end": 62
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 79,
          "end": 80
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 83,
          "end": 84
        },
        "start": 79,
        "end": 84
      },
      "directive": null,
      "start": 79,
      "end": 85
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 86,
          "end": 87
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 90,
          "end": 91
        },
        "start": 86,
        "end": 91
      },
      "directive": null,
      "start": 86,
      "end": 92
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 99
          },
          "init": {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 102,
            "end": 105
          },
          "definite": false,
          "start": 98,
          "end": 105
        }
      ],
      "declare": false,
      "start": 94,
      "end": 106
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 112
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 115,
            "end": 119
          },
          "definite": false,
          "start": 111,
          "end": 119
        }
      ],
      "declare": false,
      "start": 107,
      "end": 120
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 126
          },
          "init": {
            "type": "Literal",
            "value": "fooo",
            "raw": "\"fooo\"",
            "start": 129,
            "end": 135
          },
          "definite": false,
          "start": 125,
          "end": 135
        }
      ],
      "declare": false,
      "start": 121,
      "end": 136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 138,
          "end": 139
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 142,
          "end": 143
        },
        "start": 138,
        "end": 143
      },
      "directive": null,
      "start": 138,
      "end": 144
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 161,
          "end": 162
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 166
        },
        "start": 161,
        "end": 166
      },
      "directive": null,
      "start": 161,
      "end": 167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 184,
          "end": 185
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 188,
          "end": 189
        },
        "start": 184,
        "end": 189
      },
      "directive": null,
      "start": 184,
      "end": 190
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 208,
          "end": 209
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 212,
          "end": 213
        },
        "start": 208,
        "end": 213
      },
      "directive": null,
      "start": 208,
      "end": 214
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 231,
          "end": 232
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 235,
          "end": 236
        },
        "start": 231,
        "end": 236
      },
      "directive": null,
      "start": 231,
      "end": 237
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 254,
          "end": 255
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 258,
          "end": 259
        },
        "start": 254,
        "end": 259
      },
      "directive": null,
      "start": 254,
      "end": 260
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
            "name": "numObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 290,
                  "end": 296
                },
                "typeArguments": null,
                "start": 290,
                "end": 296
              },
              "start": 288,
              "end": 296
            },
            "start": 282,
            "end": 296
          },
          "init": {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 299,
            "end": 302
          },
          "definite": false,
          "start": 282,
          "end": 302
        }
      ],
      "declare": false,
      "start": 278,
      "end": 303
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
            "name": "boolObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Boolean",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 324
                },
                "typeArguments": null,
                "start": 317,
                "end": 324
              },
              "start": 315,
              "end": 324
            },
            "start": 308,
            "end": 324
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 327,
            "end": 331
          },
          "definite": false,
          "start": 308,
          "end": 331
        }
      ],
      "declare": false,
      "start": 304,
      "end": 332
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
            "name": "strObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 345,
                  "end": 351
                },
                "typeArguments": null,
                "start": 345,
                "end": 351
              },
              "start": 343,
              "end": 351
            },
            "start": 337,
            "end": 351
          },
          "init": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 354,
            "end": 362
          },
          "definite": false,
          "start": 337,
          "end": 362
        }
      ],
      "declare": false,
      "start": 333,
      "end": 363
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 365,
          "end": 366
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numObj",
          "optional": false,
          "typeAnnotation": null,
          "start": 369,
          "end": 375
        },
        "start": 365,
        "end": 375
      },
      "directive": null,
      "start": 365,
      "end": 376
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 383,
          "end": 384
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "boolObj",
          "optional": false,
          "typeAnnotation": null,
          "start": 387,
          "end": 394
        },
        "start": 383,
        "end": 394
      },
      "directive": null,
      "start": 383,
      "end": 395
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 402,
          "end": 403
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "strObj",
          "optional": false,
          "typeAnnotation": null,
          "start": 406,
          "end": 412
        },
        "start": 402,
        "end": 412
      },
      "directive": null,
      "start": 402,
      "end": 413
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 419
}
```
