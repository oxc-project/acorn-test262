__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Path",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 12,
            "end": 18
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
                  "name": "_pathBrand",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 33
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 35,
                    "end": 38
                  },
                  "start": 33,
                  "end": 38
                },
                "accessibility": null,
                "static": false,
                "start": 23,
                "end": 38
              }
            ],
            "start": 21,
            "end": 40
          }
        ],
        "start": 12,
        "end": 40
      },
      "declare": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JoinedPath",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 58
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 61,
            "end": 64
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "/",
              "cooked": "/"
            },
            "tail": false,
            "start": 68,
            "end": 72
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 76,
            "end": 78
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Path",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 68
            },
            "typeArguments": null,
            "start": 64,
            "end": 68
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Path",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 76
            },
            "typeArguments": null,
            "start": 72,
            "end": 76
          }
        ],
        "start": 61,
        "end": 78
      },
      "declare": false,
      "start": 43,
      "end": 79
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "joinedPath",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 108
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JoinedPath",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 122
              },
              "typeArguments": null,
              "start": 112,
              "end": 122
            },
            "start": 110,
            "end": 122
          },
          "start": 109,
          "end": 122
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 125,
          "end": 129
        },
        "start": 123,
        "end": 129
      },
      "body": null,
      "expression": false,
      "start": 81,
      "end": 130
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "joinedPath",
          "optional": false,
          "typeAnnotation": null,
          "start": 132,
          "end": 142
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo/bar",
            "raw": "\"foo/bar\"",
            "start": 143,
            "end": 152
          }
        ],
        "optional": false,
        "start": 132,
        "end": 153
      },
      "directive": null,
      "start": 132,
      "end": 154
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
            "name": "somePath",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Path",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 184
                },
                "typeArguments": null,
                "start": 180,
                "end": 184
              },
              "start": 178,
              "end": 184
            },
            "start": 170,
            "end": 184
          },
          "init": null,
          "definite": false,
          "start": 170,
          "end": 184
        }
      ],
      "declare": true,
      "start": 156,
      "end": 185
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "joinedPath",
          "optional": false,
          "typeAnnotation": null,
          "start": 187,
          "end": 197
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 198,
                "end": 201
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "/",
                  "cooked": "/"
                },
                "tail": false,
                "start": 209,
                "end": 213
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 221,
                "end": 223
              }
            ],
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "somePath",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 209
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "somePath",
                "optional": false,
                "typeAnnotation": null,
                "start": 213,
                "end": 221
              }
            ],
            "start": 198,
            "end": 223
          }
        ],
        "optional": false,
        "start": 187,
        "end": 224
      },
      "directive": null,
      "start": 187,
      "end": 225
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StartsWithA",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 244
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "a",
              "cooked": "a"
            },
            "tail": false,
            "start": 247,
            "end": 251
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 257,
            "end": 259
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 251,
            "end": 257
          }
        ],
        "start": 247,
        "end": 259
      },
      "declare": false,
      "start": 228,
      "end": 260
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EndsWithA",
        "optional": false,
        "typeAnnotation": null,
        "start": 266,
        "end": 275
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 278,
            "end": 281
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "a",
              "cooked": "a"
            },
            "tail": true,
            "start": 287,
            "end": 290
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 281,
            "end": 287
          }
        ],
        "start": 278,
        "end": 290
      },
      "declare": false,
      "start": 261,
      "end": 291
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withinAs",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 319
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StartsWithA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 323,
                    "end": 334
                  },
                  "typeArguments": null,
                  "start": 323,
                  "end": 334
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EndsWithA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 337,
                    "end": 346
                  },
                  "typeArguments": null,
                  "start": 337,
                  "end": 346
                }
              ],
              "start": 323,
              "end": 346
            },
            "start": 321,
            "end": 346
          },
          "start": 320,
          "end": 346
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 349,
          "end": 353
        },
        "start": 347,
        "end": 353
      },
      "body": null,
      "expression": false,
      "start": 294,
      "end": 354
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withinAs",
          "optional": false,
          "typeAnnotation": null,
          "start": 356,
          "end": 364
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 365,
            "end": 367
          }
        ],
        "optional": false,
        "start": 356,
        "end": 368
      },
      "directive": null,
      "start": 356,
      "end": 369
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withinAs",
          "optional": false,
          "typeAnnotation": null,
          "start": 370,
          "end": 378
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 379,
            "end": 382
          }
        ],
        "optional": false,
        "start": 370,
        "end": 383
      },
      "directive": null,
      "start": 370,
      "end": 384
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withinAs",
          "optional": false,
          "typeAnnotation": null,
          "start": 385,
          "end": 393
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "ab",
            "raw": "\"ab\"",
            "start": 394,
            "end": 398
          }
        ],
        "optional": false,
        "start": 385,
        "end": 399
      },
      "directive": null,
      "start": 385,
      "end": 400
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withinAs",
          "optional": false,
          "typeAnnotation": null,
          "start": 401,
          "end": 409
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "aba",
            "raw": "\"aba\"",
            "start": 410,
            "end": 415
          }
        ],
        "optional": false,
        "start": 401,
        "end": 416
      },
      "directive": null,
      "start": 401,
      "end": 417
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withinAs",
          "optional": false,
          "typeAnnotation": null,
          "start": 418,
          "end": 426
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "abavvvva",
            "raw": "\"abavvvva\"",
            "start": 427,
            "end": 437
          }
        ],
        "optional": false,
        "start": 418,
        "end": 438
      },
      "directive": null,
      "start": 418,
      "end": 439
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 439
}
```
