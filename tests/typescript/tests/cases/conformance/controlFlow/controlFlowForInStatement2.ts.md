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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 20,
          "definite": false,
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
            "raw": "'a'",
            "value": "a"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 42,
          "definite": false,
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
            "raw": "'b'",
            "value": "b"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 45,
      "end": 77,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 54,
        "end": 76,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 56,
            "end": 74,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 65,
              "decorators": [],
              "name": "keywordA",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 74,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 68,
                "end": 74
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 78,
      "end": 110,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 87,
        "end": 109,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 89,
            "end": 107,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 98,
              "decorators": [],
              "name": "keywordB",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 107,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 101,
                "end": 107
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 134,
          "definite": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 130,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 133,
                    "end": 134,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 133,
                      "end": 134,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 137,
      "end": 180,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 151,
        "end": 180,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 157,
            "end": 159,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 141,
        "end": 149,
        "operator": "in",
        "left": {
          "type": "Literal",
          "start": 141,
          "end": 144,
          "raw": "'a'",
          "value": "a"
        },
        "right": {
          "type": "Identifier",
          "start": 148,
          "end": 149,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 182,
      "end": 235,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 201,
        "end": 235,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 207,
            "end": 209,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 186,
        "end": 199,
        "operator": "in",
        "left": {
          "type": "Identifier",
          "start": 186,
          "end": 194,
          "decorators": [],
          "name": "keywordA",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 198,
          "end": 199,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 263,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 262,
          "definite": false,
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
            "raw": "'b'",
            "value": "b"
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 265,
      "end": 321,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 292,
        "end": 321,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 298,
            "end": 300,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 298,
              "end": 299,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 269,
        "end": 290,
        "operator": "in",
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
              "raw": "'b'",
              "value": "b"
            }
          }
        },
        "right": {
          "type": "Identifier",
          "start": 289,
          "end": 290,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 323,
      "end": 384,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 358,
        "end": 384,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 364,
            "end": 366,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 364,
              "end": 365,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 327,
        "end": 356,
        "operator": "in",
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
                  "raw": "'a'",
                  "value": "a"
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
                  "raw": "'b'",
                  "value": "b"
                }
              }
            ]
          }
        },
        "right": {
          "type": "Identifier",
          "start": 355,
          "end": 356,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
