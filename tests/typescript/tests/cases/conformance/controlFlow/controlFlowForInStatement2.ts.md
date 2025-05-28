__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 384,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 14,
            "decorators": [],
            "name": "keywordA",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 17,
            "end": 20,
            "value": "a",
            "raw": "'a'"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 43,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 42,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 36,
            "decorators": [],
            "name": "keywordB",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 39,
            "end": 42,
            "value": "b",
            "raw": "'b'"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 45,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 54,
        "end": 76,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 56,
            "end": 74,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 65,
              "decorators": [],
              "name": "keywordA",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 74,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 68,
                "end": 74
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 78,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 87,
        "end": 109,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 89,
            "end": 107,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 98,
              "decorators": [],
              "name": "keywordB",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 107,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 101,
                "end": 107
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 135,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 134,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 134,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 127,
              "end": 134,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 129,
                "end": 134,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 129,
                    "end": 130,
                    "typeName": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 130,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 133,
                    "end": 134,
                    "typeName": {
                      "type": "Identifier",
                      "start": 133,
                      "end": 134,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 137,
      "end": 180,
      "test": {
        "type": "BinaryExpression",
        "start": 141,
        "end": 149,
        "left": {
          "type": "Literal",
          "start": 141,
          "end": 144,
          "value": "a",
          "raw": "'a'"
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "start": 148,
          "end": 149,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 151,
        "end": 180,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 157,
            "end": 159,
            "expression": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 182,
      "end": 235,
      "test": {
        "type": "BinaryExpression",
        "start": 186,
        "end": 199,
        "left": {
          "type": "Identifier",
          "start": 186,
          "end": 194,
          "decorators": [],
          "name": "keywordA",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "start": 198,
          "end": 199,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 201,
        "end": 235,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 207,
            "end": 209,
            "expression": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 263,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 262,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 256,
            "decorators": [],
            "name": "stringB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 248,
              "end": 256,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 250,
                "end": 256
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 259,
            "end": 262,
            "value": "b",
            "raw": "'b'"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 265,
      "end": 321,
      "test": {
        "type": "BinaryExpression",
        "start": 269,
        "end": 290,
        "left": {
          "type": "TSAsExpression",
          "start": 270,
          "end": 284,
          "expression": {
            "type": "Identifier",
            "start": 270,
            "end": 277,
            "decorators": [],
            "name": "stringB",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSLiteralType",
            "start": 281,
            "end": 284,
            "literal": {
              "type": "Literal",
              "start": 281,
              "end": 284,
              "value": "b",
              "raw": "'b'"
            }
          }
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "start": 289,
          "end": 290,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 292,
        "end": 321,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 298,
            "end": 300,
            "expression": {
              "type": "Identifier",
              "start": 298,
              "end": 299,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 323,
      "end": 384,
      "test": {
        "type": "BinaryExpression",
        "start": 327,
        "end": 356,
        "left": {
          "type": "TSAsExpression",
          "start": 328,
          "end": 350,
          "expression": {
            "type": "Identifier",
            "start": 328,
            "end": 335,
            "decorators": [],
            "name": "stringB",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSUnionType",
            "start": 340,
            "end": 349,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 340,
                "end": 343,
                "literal": {
                  "type": "Literal",
                  "start": 340,
                  "end": 343,
                  "value": "a",
                  "raw": "'a'"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 346,
                "end": 349,
                "literal": {
                  "type": "Literal",
                  "start": 346,
                  "end": 349,
                  "value": "b",
                  "raw": "'b'"
                }
              }
            ]
          }
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "start": 355,
          "end": 356,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 358,
        "end": 384,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 364,
            "end": 366,
            "expression": {
              "type": "Identifier",
              "start": 364,
              "end": 365,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
