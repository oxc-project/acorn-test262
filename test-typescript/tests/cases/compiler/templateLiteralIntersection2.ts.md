__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 439,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 41,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Path",
        "optional": false,
        "typeAnnotation": null
      },
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 33,
                  "decorators": [],
                  "name": "_pathBrand",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 33,
                  "end": 38,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 35,
                    "end": 38
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 43,
      "end": 79,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 58,
        "decorators": [],
        "name": "JoinedPath",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 61,
        "end": 78,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 61,
            "end": 64,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 68,
            "end": 72,
            "tail": false,
            "value": {
              "cooked": "/",
              "raw": "/"
            }
          },
          {
            "type": "TemplateElement",
            "start": 76,
            "end": 78,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 64,
            "end": 68,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 64,
              "end": 68,
              "decorators": [],
              "name": "Path",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 72,
            "end": 76,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 72,
              "end": 76,
              "decorators": [],
              "name": "Path",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 81,
      "end": 130,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 108,
        "decorators": [],
        "name": "joinedPath",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 109,
          "end": 122,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 110,
            "end": 122,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 112,
              "end": 122,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 112,
                "end": 122,
                "decorators": [],
                "name": "JoinedPath",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 123,
        "end": 129,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 125,
          "end": 129
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 132,
      "end": 154,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 132,
        "end": 153,
        "arguments": [
          {
            "type": "Literal",
            "start": 143,
            "end": 152,
            "raw": "\"foo/bar\"",
            "value": "foo/bar",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 132,
          "end": 142,
          "decorators": [],
          "name": "joinedPath",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 184,
            "decorators": [],
            "name": "somePath",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 178,
              "end": 184,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 180,
                "end": 184,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 184,
                  "decorators": [],
                  "name": "Path",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "type": "ExpressionStatement",
      "start": 187,
      "end": 225,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 187,
        "end": 224,
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
                "decorators": [],
                "name": "somePath",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 213,
                "end": 221,
                "decorators": [],
                "name": "somePath",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 198,
                "end": 201,
                "tail": false,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              },
              {
                "type": "TemplateElement",
                "start": 209,
                "end": 213,
                "tail": false,
                "value": {
                  "cooked": "/",
                  "raw": "/"
                }
              },
              {
                "type": "TemplateElement",
                "start": 221,
                "end": 223,
                "tail": true,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 187,
          "end": 197,
          "decorators": [],
          "name": "joinedPath",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 228,
      "end": 260,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 244,
        "decorators": [],
        "name": "StartsWithA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 247,
        "end": 259,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 247,
            "end": 251,
            "tail": false,
            "value": {
              "cooked": "a",
              "raw": "a"
            }
          },
          {
            "type": "TemplateElement",
            "start": 257,
            "end": 259,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
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
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 261,
      "end": 291,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 266,
        "end": 275,
        "decorators": [],
        "name": "EndsWithA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 278,
        "end": 290,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 278,
            "end": 281,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 287,
            "end": 290,
            "tail": true,
            "value": {
              "cooked": "a",
              "raw": "a"
            }
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
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 294,
      "end": 354,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 319,
        "decorators": [],
        "name": "withinAs",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 320,
          "end": 346,
          "decorators": [],
          "name": "p",
          "optional": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 323,
                    "end": 334,
                    "decorators": [],
                    "name": "StartsWithA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 337,
                  "end": 346,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 337,
                    "end": 346,
                    "decorators": [],
                    "name": "EndsWithA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 347,
        "end": 353,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 349,
          "end": 353
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 356,
      "end": 369,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 356,
        "end": 368,
        "arguments": [
          {
            "type": "Literal",
            "start": 365,
            "end": 367,
            "raw": "\"\"",
            "value": "",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 356,
          "end": 364,
          "decorators": [],
          "name": "withinAs",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 370,
      "end": 384,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 370,
        "end": 383,
        "arguments": [
          {
            "type": "Literal",
            "start": 379,
            "end": 382,
            "raw": "\"a\"",
            "value": "a",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 370,
          "end": 378,
          "decorators": [],
          "name": "withinAs",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 385,
      "end": 400,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 385,
        "end": 399,
        "arguments": [
          {
            "type": "Literal",
            "start": 394,
            "end": 398,
            "raw": "\"ab\"",
            "value": "ab",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 385,
          "end": 393,
          "decorators": [],
          "name": "withinAs",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 401,
      "end": 417,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 401,
        "end": 416,
        "arguments": [
          {
            "type": "Literal",
            "start": 410,
            "end": 415,
            "raw": "\"aba\"",
            "value": "aba",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 401,
          "end": 409,
          "decorators": [],
          "name": "withinAs",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 418,
      "end": 439,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 418,
        "end": 438,
        "arguments": [
          {
            "type": "Literal",
            "start": 427,
            "end": 437,
            "raw": "\"abavvvva\"",
            "value": "abavvvva",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 418,
          "end": 426,
          "decorators": [],
          "name": "withinAs",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
