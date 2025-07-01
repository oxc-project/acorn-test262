__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "keywordA",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 14
          },
          "init": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 17,
            "end": 20
          },
          "definite": false,
          "start": 6,
          "end": 20
        }
      ],
      "declare": false,
      "start": 0,
      "end": 21
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "keywordB",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 36
          },
          "init": {
            "type": "Literal",
            "value": "b",
            "raw": "'b'",
            "start": 39,
            "end": 42
          },
          "definite": false,
          "start": 28,
          "end": 42
        }
      ],
      "declare": false,
      "start": 22,
      "end": 43
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 51
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "keywordA",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 65
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 68,
                "end": 74
              },
              "start": 66,
              "end": 74
            },
            "accessibility": null,
            "static": false,
            "start": 56,
            "end": 74
          }
        ],
        "start": 54,
        "end": 76
      },
      "declare": false,
      "start": 45,
      "end": 77
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 84
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "keywordB",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 98
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 101,
                "end": 107
              },
              "start": 99,
              "end": 107
            },
            "accessibility": null,
            "static": false,
            "start": 89,
            "end": 107
          }
        ],
        "start": 87,
        "end": 109
      },
      "declare": false,
      "start": 78,
      "end": 110
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 129,
                      "end": 130
                    },
                    "typeArguments": null,
                    "start": 129,
                    "end": 130
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 133,
                      "end": 134
                    },
                    "typeArguments": null,
                    "start": 133,
                    "end": 134
                  }
                ],
                "start": 129,
                "end": 134
              },
              "start": 127,
              "end": 134
            },
            "start": 126,
            "end": 134
          },
          "init": null,
          "definite": false,
          "start": 126,
          "end": 134
        }
      ],
      "declare": true,
      "start": 112,
      "end": 135
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": "a",
          "raw": "'a'",
          "start": 141,
          "end": 144
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 148,
          "end": 149
        },
        "start": 141,
        "end": 149
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 158
            },
            "directive": null,
            "start": 157,
            "end": 159
          }
        ],
        "start": 151,
        "end": 180
      },
      "alternate": null,
      "start": 137,
      "end": 180
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "keywordA",
          "optional": false,
          "typeAnnotation": null,
          "start": 186,
          "end": 194
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 198,
          "end": 199
        },
        "start": 186,
        "end": 199
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 208
            },
            "directive": null,
            "start": 207,
            "end": 209
          }
        ],
        "start": 201,
        "end": 235
      },
      "alternate": null,
      "start": 182,
      "end": 235
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 250,
                "end": 256
              },
              "start": 248,
              "end": 256
            },
            "start": 241,
            "end": 256
          },
          "init": {
            "type": "Literal",
            "value": "b",
            "raw": "'b'",
            "start": 259,
            "end": 262
          },
          "definite": false,
          "start": 241,
          "end": 262
        }
      ],
      "declare": false,
      "start": 237,
      "end": 263
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "TSAsExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringB",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 277
          },
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "b",
              "raw": "'b'",
              "start": 281,
              "end": 284
            },
            "start": 281,
            "end": 284
          },
          "start": 270,
          "end": 284
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 289,
          "end": 290
        },
        "start": 269,
        "end": 290
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 299
            },
            "directive": null,
            "start": 298,
            "end": 300
          }
        ],
        "start": 292,
        "end": 321
      },
      "alternate": null,
      "start": 265,
      "end": 321
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "TSAsExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringB",
            "optional": false,
            "typeAnnotation": null,
            "start": 328,
            "end": 335
          },
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 340,
                  "end": 343
                },
                "start": 340,
                "end": 343
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 346,
                  "end": 349
                },
                "start": 346,
                "end": 349
              }
            ],
            "start": 340,
            "end": 349
          },
          "start": 328,
          "end": 350
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 355,
          "end": 356
        },
        "start": 327,
        "end": 356
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 364,
              "end": 365
            },
            "directive": null,
            "start": 364,
            "end": 366
          }
        ],
        "start": 358,
        "end": 384
      },
      "alternate": null,
      "start": 323,
      "end": 384
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 384
}
```
