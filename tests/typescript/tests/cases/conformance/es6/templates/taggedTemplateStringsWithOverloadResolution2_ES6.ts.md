__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 20,
                "end": 40
              },
              "typeArguments": null,
              "start": 20,
              "end": 40
            },
            "start": 18,
            "end": 40
          },
          "start": 14,
          "end": 40
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 45,
              "end": 51
            },
            "start": 43,
            "end": 51
          },
          "start": 42,
          "end": 51
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 54,
          "end": 60
        },
        "start": 52,
        "end": 60
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 61
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 75
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 82,
                "end": 88
              },
              "start": 82,
              "end": 90
            },
            "start": 80,
            "end": 90
          },
          "start": 76,
          "end": 90
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 95,
              "end": 101
            },
            "start": 93,
            "end": 101
          },
          "start": 92,
          "end": 101
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 104,
          "end": 110
        },
        "start": 102,
        "end": 110
      },
      "body": null,
      "expression": false,
      "start": 62,
      "end": 111
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 125
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 134
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 136,
                "end": 139
              },
              "start": 136,
              "end": 141
            },
            "start": 134,
            "end": 141
          },
          "value": null,
          "start": 126,
          "end": 141
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 144,
          "end": 147
        },
        "start": 142,
        "end": 147
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 170
            },
            "start": 154,
            "end": 171
          }
        ],
        "start": 148,
        "end": 173
      },
      "expression": false,
      "start": 112,
      "end": 173
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
            "typeAnnotation": null,
            "start": 179,
            "end": 180
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 187
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 188,
                  "end": 191
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 192,
                  "end": 194
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 191,
                  "end": 192
                }
              ],
              "start": 188,
              "end": 194
            },
            "start": 183,
            "end": 194
          },
          "definite": false,
          "start": 179,
          "end": 194
        }
      ],
      "declare": false,
      "start": 175,
      "end": 195
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
            "start": 200,
            "end": 201
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 208
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 209,
                "end": 211
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 213,
                "end": 214
              }
            ],
            "optional": false,
            "start": 204,
            "end": 215
          },
          "definite": false,
          "start": 200,
          "end": 215
        }
      ],
      "declare": false,
      "start": 196,
      "end": 216
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 227,
        "end": 231
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 238,
                "end": 244
              },
              "start": 238,
              "end": 246
            },
            "start": 236,
            "end": 246
          },
          "start": 232,
          "end": 246
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 251,
              "end": 257
            },
            "start": 249,
            "end": 257
          },
          "start": 248,
          "end": 257
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 260,
          "end": 266
        },
        "start": 258,
        "end": 266
      },
      "body": null,
      "expression": false,
      "start": 218,
      "end": 267
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 277,
        "end": 281
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 288,
                "end": 308
              },
              "typeArguments": null,
              "start": 288,
              "end": 308
            },
            "start": 286,
            "end": 308
          },
          "start": 282,
          "end": 308
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 313,
              "end": 319
            },
            "start": 311,
            "end": 319
          },
          "start": 310,
          "end": 319
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 322,
          "end": 328
        },
        "start": 320,
        "end": 328
      },
      "body": null,
      "expression": false,
      "start": 268,
      "end": 329
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 339,
        "end": 343
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 347,
            "end": 352
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 354,
                "end": 357
              },
              "start": 354,
              "end": 359
            },
            "start": 352,
            "end": 359
          },
          "value": null,
          "start": 344,
          "end": 359
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 362,
          "end": 365
        },
        "start": 360,
        "end": 365
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 379,
              "end": 388
            },
            "start": 372,
            "end": 389
          }
        ],
        "start": 366,
        "end": 391
      },
      "expression": false,
      "start": 330,
      "end": 391
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 397,
            "end": 398
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "tag": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 401,
              "end": 405
            },
            "typeArguments": null,
            "quasi": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 406,
                  "end": 409
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 410,
                  "end": 412
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 409,
                  "end": 410
                }
              ],
              "start": 406,
              "end": 412
            },
            "start": 401,
            "end": 412
          },
          "definite": false,
          "start": 397,
          "end": 412
        }
      ],
      "declare": false,
      "start": 393,
      "end": 413
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 418,
            "end": 419
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 422,
              "end": 426
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 427,
                "end": 429
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 431,
                "end": 432
              }
            ],
            "optional": false,
            "start": 422,
            "end": 433
          },
          "definite": false,
          "start": 418,
          "end": 433
        }
      ],
      "declare": false,
      "start": 414,
      "end": 434
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 434
}
```
