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
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 11,
                "end": 14
              },
              "start": 9,
              "end": 14
            },
            "start": 4,
            "end": 14
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 14
        }
      ],
      "declare": false,
      "start": 0,
      "end": 15
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              },
              "start": 62,
              "end": 70
            },
            "start": 60,
            "end": 70
          },
          "init": null,
          "definite": false,
          "start": 60,
          "end": 70
        }
      ],
      "declare": false,
      "start": 56,
      "end": 71
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 74
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 79,
          "end": 84
        },
        "start": 72,
        "end": 84
      },
      "directive": null,
      "start": 72,
      "end": 85
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 99
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 104,
              "end": 110
            },
            "start": 102,
            "end": 110
          },
          "start": 100,
          "end": 110
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "**=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 120
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 130
              },
              "start": 118,
              "end": 130
            },
            "directive": null,
            "start": 118,
            "end": 131
          }
        ],
        "start": 112,
        "end": 133
      },
      "expression": false,
      "start": 87,
      "end": 133
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 166,
                      "end": 167
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 169,
                        "end": 175
                      },
                      "start": 167,
                      "end": 175
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 166,
                    "end": 175
                  }
                ],
                "start": 164,
                "end": 177
              },
              "start": 162,
              "end": 177
            },
            "start": 160,
            "end": 177
          },
          "init": null,
          "definite": false,
          "start": 160,
          "end": 177
        }
      ],
      "declare": false,
      "start": 156,
      "end": 178
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 181
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 183
          },
          "optional": false,
          "computed": false,
          "start": 179,
          "end": 183
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 188,
          "end": 193
        },
        "start": 179,
        "end": 193
      },
      "directive": null,
      "start": 179,
      "end": 194
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 198
          },
          "property": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 199,
            "end": 202
          },
          "optional": false,
          "computed": true,
          "start": 196,
          "end": 203
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 208,
          "end": 213
        },
        "start": 196,
        "end": 213
      },
      "directive": null,
      "start": 196,
      "end": 214
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 271,
          "end": 273
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 279,
          "end": 284
        },
        "start": 270,
        "end": 284
      },
      "directive": null,
      "start": 270,
      "end": 285
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 296,
        "end": 299
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 304,
              "end": 310
            },
            "start": 302,
            "end": 310
          },
          "start": 300,
          "end": 310
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "**=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 321
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 327,
                "end": 332
              },
              "start": 318,
              "end": 332
            },
            "directive": null,
            "start": 318,
            "end": 333
          }
        ],
        "start": 312,
        "end": 335
      },
      "expression": false,
      "start": 287,
      "end": 335
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 340
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 341,
            "end": 342
          },
          "optional": false,
          "computed": false,
          "start": 338,
          "end": 342
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 348,
          "end": 353
        },
        "start": 337,
        "end": 353
      },
      "directive": null,
      "start": 337,
      "end": 354
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 357,
            "end": 359
          },
          "property": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 360,
            "end": 363
          },
          "optional": false,
          "computed": true,
          "start": 357,
          "end": 364
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 370,
          "end": 375
        },
        "start": 356,
        "end": 375
      },
      "directive": null,
      "start": 356,
      "end": 376
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 376
}
```
