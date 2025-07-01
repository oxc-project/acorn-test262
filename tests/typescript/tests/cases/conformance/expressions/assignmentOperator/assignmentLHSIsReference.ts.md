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
        "operator": "=",
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
          "start": 77,
          "end": 82
        },
        "start": 72,
        "end": 82
      },
      "directive": null,
      "start": 72,
      "end": 83
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 97
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
              "start": 102,
              "end": 108
            },
            "start": 100,
            "end": 108
          },
          "start": 98,
          "end": 108
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
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 118
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 126
              },
              "start": 116,
              "end": 126
            },
            "directive": null,
            "start": 116,
            "end": 127
          }
        ],
        "start": 110,
        "end": 129
      },
      "expression": false,
      "start": 85,
      "end": 129
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
                      "start": 162,
                      "end": 163
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 165,
                        "end": 171
                      },
                      "start": 163,
                      "end": 171
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 162,
                    "end": 171
                  }
                ],
                "start": 160,
                "end": 174
              },
              "start": 158,
              "end": 174
            },
            "start": 156,
            "end": 174
          },
          "init": null,
          "definite": false,
          "start": 156,
          "end": 174
        }
      ],
      "declare": false,
      "start": 152,
      "end": 175
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 178
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 180
          },
          "optional": false,
          "computed": false,
          "start": 176,
          "end": 180
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 183,
          "end": 188
        },
        "start": 176,
        "end": 188
      },
      "directive": null,
      "start": 176,
      "end": 189
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 192
          },
          "property": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 193,
            "end": 196
          },
          "optional": false,
          "computed": true,
          "start": 190,
          "end": 197
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 200,
          "end": 205
        },
        "start": 190,
        "end": 205
      },
      "directive": null,
      "start": 190,
      "end": 206
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 263,
          "end": 265
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 269,
          "end": 274
        },
        "start": 262,
        "end": 274
      },
      "directive": null,
      "start": 262,
      "end": 275
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 286,
        "end": 289
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
              "start": 294,
              "end": 300
            },
            "start": 292,
            "end": 300
          },
          "start": 290,
          "end": 300
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
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 311
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 315,
                "end": 320
              },
              "start": 308,
              "end": 320
            },
            "directive": null,
            "start": 308,
            "end": 321
          }
        ],
        "start": 302,
        "end": 323
      },
      "expression": false,
      "start": 277,
      "end": 323
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 328
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 329,
            "end": 330
          },
          "optional": false,
          "computed": false,
          "start": 326,
          "end": 330
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 334,
          "end": 339
        },
        "start": 325,
        "end": 339
      },
      "directive": null,
      "start": 325,
      "end": 340
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 342,
            "end": 344
          },
          "property": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 345,
            "end": 348
          },
          "optional": false,
          "computed": true,
          "start": 342,
          "end": 349
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 353,
          "end": 358
        },
        "start": 341,
        "end": 358
      },
      "directive": null,
      "start": 341,
      "end": 359
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 359
}
```
