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
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 7,
                    "end": 13
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 16,
                    "end": 23
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 26,
                    "end": 32
                  }
                ],
                "start": 7,
                "end": 32
              },
              "start": 5,
              "end": 32
            },
            "start": 4,
            "end": 32
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 32
        }
      ],
      "declare": false,
      "start": 0,
      "end": 33
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 43,
                "end": 46
              },
              "start": 41,
              "end": 46
            },
            "start": 38,
            "end": 46
          },
          "init": null,
          "definite": false,
          "start": 38,
          "end": 46
        }
      ],
      "declare": false,
      "start": 34,
      "end": 47
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
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 53,
          "end": 55
        },
        "start": 49,
        "end": 55
      },
      "directive": null,
      "start": 49,
      "end": 56
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
          "start": 57,
          "end": 58
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 62
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 69
          },
          "optional": false,
          "computed": false,
          "start": 61,
          "end": 69
        },
        "start": 57,
        "end": 69
      },
      "directive": null,
      "start": 57,
      "end": 70
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 72
      },
      "directive": null,
      "start": 71,
      "end": 73
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
          "start": 85,
          "end": 86
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 89,
          "end": 93
        },
        "start": 85,
        "end": 93
      },
      "directive": null,
      "start": 85,
      "end": 94
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 97
                },
                "right": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 100,
                  "end": 102
                },
                "start": 96,
                "end": 102
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 104,
                "end": 107
              }
            ],
            "start": 96,
            "end": 107
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 112
          },
          "optional": false,
          "computed": false,
          "start": 95,
          "end": 112
        },
        "right": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 117
          },
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 121
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 128
            },
            "optional": false,
            "computed": false,
            "start": 120,
            "end": 128
          },
          "start": 116,
          "end": 128
        },
        "start": 95,
        "end": 129
      },
      "directive": null,
      "start": 95,
      "end": 130
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 132
      },
      "directive": null,
      "start": 131,
      "end": 133
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 207
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 212,
                  "end": 216
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 218,
                      "end": 222
                    },
                    "start": 218,
                    "end": 222
                  },
                  "start": 216,
                  "end": 222
                },
                "accessibility": null,
                "static": false,
                "start": 212,
                "end": 223
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 224,
                  "end": 229
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 231,
                      "end": 232
                    },
                    "start": 231,
                    "end": 232
                  },
                  "start": 229,
                  "end": 232
                },
                "accessibility": null,
                "static": false,
                "start": 224,
                "end": 232
              }
            ],
            "start": 210,
            "end": 234
          },
          {
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
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 239,
                  "end": 243
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 245,
                      "end": 250
                    },
                    "start": 245,
                    "end": 250
                  },
                  "start": 243,
                  "end": 250
                },
                "accessibility": null,
                "static": false,
                "start": 239,
                "end": 251
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 257
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 259,
                      "end": 260
                    },
                    "start": 259,
                    "end": 260
                  },
                  "start": 257,
                  "end": 260
                },
                "accessibility": null,
                "static": false,
                "start": 252,
                "end": 260
              }
            ],
            "start": 237,
            "end": 262
          }
        ],
        "start": 210,
        "end": 262
      },
      "declare": false,
      "start": 201,
      "end": 263
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 281,
        "end": 283
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 288
          },
          "typeArguments": null,
          "start": 287,
          "end": 288
        },
        "start": 285,
        "end": 288
      },
      "body": null,
      "expression": false,
      "start": 264,
      "end": 289
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
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 298
                },
                "typeArguments": null,
                "start": 297,
                "end": 298
              },
              "start": 295,
              "end": 298
            },
            "start": 294,
            "end": 298
          },
          "init": null,
          "definite": false,
          "start": 294,
          "end": 298
        }
      ],
      "declare": false,
      "start": 290,
      "end": 299
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 305,
            "end": 306
          },
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 311
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 309,
            "end": 313
          },
          "start": 305,
          "end": 313
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "done",
          "optional": false,
          "typeAnnotation": null,
          "start": 315,
          "end": 319
        },
        "optional": false,
        "computed": false,
        "start": 304,
        "end": 319
      },
      "consequent": {
        "type": "BlockStatement",
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 336,
                        "end": 337
                      },
                      "start": 336,
                      "end": 337
                    },
                    "start": 334,
                    "end": 337
                  },
                  "start": 333,
                  "end": 337
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 340,
                    "end": 341
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 342,
                    "end": 347
                  },
                  "optional": false,
                  "computed": false,
                  "start": 340,
                  "end": 347
                },
                "definite": false,
                "start": 333,
                "end": 347
              }
            ],
            "declare": false,
            "start": 327,
            "end": 348
          }
        ],
        "start": 321,
        "end": 350
      },
      "alternate": null,
      "start": 300,
      "end": 350
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 350
}
```
