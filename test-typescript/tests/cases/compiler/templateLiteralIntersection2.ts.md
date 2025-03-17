__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 440,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "name": "Path",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 12,
        "end": 40,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 12,
            "end": 18
          },
          {
            "type": "TSTypeLiteral",
            "start": 21,
            "end": 40,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 23,
                "end": 38,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 33,
                  "name": "_pathBrand",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 33,
                  "end": 38,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 35,
                    "end": 38
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 43,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 58,
        "name": "JoinedPath",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 61,
        "end": 78,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 61,
            "end": 64,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 68,
            "end": 72,
            "value": {
              "cooked": "/",
              "raw": "/"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 76,
            "end": 78,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 64,
            "end": 68,
            "typeName": {
              "type": "Identifier",
              "start": 64,
              "end": 68,
              "name": "Path",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 72,
            "end": 76,
            "typeName": {
              "type": "Identifier",
              "start": 72,
              "end": 76,
              "name": "Path",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 81,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 108,
        "name": "joinedPath",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 109,
          "end": 122,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 110,
            "end": 122,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 112,
              "end": 122,
              "typeName": {
                "type": "Identifier",
                "start": 112,
                "end": 122,
                "name": "JoinedPath",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 123,
        "end": 129,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 125,
          "end": 129
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 132,
      "end": 154,
      "expression": {
        "type": "CallExpression",
        "start": 132,
        "end": 153,
        "callee": {
          "type": "Identifier",
          "start": 132,
          "end": 142,
          "name": "joinedPath",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 143,
            "end": 152,
            "value": "foo/bar",
            "raw": "\"foo/bar\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 184,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 184,
            "name": "somePath",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 178,
              "end": 184,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 180,
                "end": 184,
                "typeName": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 184,
                  "name": "Path",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 187,
      "end": 225,
      "expression": {
        "type": "CallExpression",
        "start": 187,
        "end": 224,
        "callee": {
          "type": "Identifier",
          "start": 187,
          "end": 197,
          "name": "joinedPath",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TemplateLiteral",
            "start": 198,
            "end": 223,
            "expressions": [
              {
                "type": "Identifier",
                "start": 201,
                "end": 209,
                "name": "somePath",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 213,
                "end": 221,
                "name": "somePath",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 198,
                "end": 201,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 209,
                "end": 213,
                "value": {
                  "cooked": "/",
                  "raw": "/"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 221,
                "end": 223,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": true
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 228,
      "end": 260,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 244,
        "name": "StartsWithA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 247,
        "end": 259,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 247,
            "end": 251,
            "value": {
              "cooked": "a",
              "raw": "a"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 257,
            "end": 259,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": true
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 251,
            "end": 257
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 261,
      "end": 291,
      "id": {
        "type": "Identifier",
        "start": 266,
        "end": 275,
        "name": "EndsWithA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 278,
        "end": 290,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 278,
            "end": 281,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 287,
            "end": 290,
            "value": {
              "cooked": "a",
              "raw": "a"
            },
            "tail": true
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 281,
            "end": 287
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 294,
      "end": 354,
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 319,
        "name": "withinAs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 320,
          "end": 346,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 321,
            "end": 346,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 323,
              "end": 346,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 323,
                  "end": 334,
                  "typeName": {
                    "type": "Identifier",
                    "start": 323,
                    "end": 334,
                    "name": "StartsWithA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 337,
                  "end": 346,
                  "typeName": {
                    "type": "Identifier",
                    "start": 337,
                    "end": 346,
                    "name": "EndsWithA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 347,
        "end": 353,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 349,
          "end": 353
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 356,
      "end": 369,
      "expression": {
        "type": "CallExpression",
        "start": 356,
        "end": 368,
        "callee": {
          "type": "Identifier",
          "start": 356,
          "end": 364,
          "name": "withinAs",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 365,
            "end": 367,
            "value": "",
            "raw": "\"\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 370,
      "end": 384,
      "expression": {
        "type": "CallExpression",
        "start": 370,
        "end": 383,
        "callee": {
          "type": "Identifier",
          "start": 370,
          "end": 378,
          "name": "withinAs",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 379,
            "end": 382,
            "value": "a",
            "raw": "\"a\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 385,
      "end": 400,
      "expression": {
        "type": "CallExpression",
        "start": 385,
        "end": 399,
        "callee": {
          "type": "Identifier",
          "start": 385,
          "end": 393,
          "name": "withinAs",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 394,
            "end": 398,
            "value": "ab",
            "raw": "\"ab\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 401,
      "end": 417,
      "expression": {
        "type": "CallExpression",
        "start": 401,
        "end": 416,
        "callee": {
          "type": "Identifier",
          "start": 401,
          "end": 409,
          "name": "withinAs",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 410,
            "end": 415,
            "value": "aba",
            "raw": "\"aba\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 418,
      "end": 439,
      "expression": {
        "type": "CallExpression",
        "start": 418,
        "end": 438,
        "callee": {
          "type": "Identifier",
          "start": 418,
          "end": 426,
          "name": "withinAs",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 427,
            "end": 437,
            "value": "abavvvva",
            "raw": "\"abavvvva\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
