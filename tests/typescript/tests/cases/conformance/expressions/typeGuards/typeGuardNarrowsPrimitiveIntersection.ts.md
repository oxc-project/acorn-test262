__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 558,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Tag",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 11,
        "end": 23,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 12,
            "end": 22,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 17,
              "decorators": [],
              "name": "__tag",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 22,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
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
      "type": "TSDeclareFunction",
      "start": 25,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 52,
        "decorators": [],
        "name": "isNonBlank",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 53,
          "end": 66,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 58,
            "end": 66,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 60,
              "end": 66
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 68,
        "end": 93,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 70,
          "end": 93,
          "parameterName": {
            "type": "Identifier",
            "start": 70,
            "end": 75,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 80,
            "end": 92,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 80,
              "end": 92,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 80,
                  "end": 86
                },
                {
                  "type": "TSTypeReference",
                  "start": 89,
                  "end": 92,
                  "typeName": {
                    "type": "Identifier",
                    "start": 89,
                    "end": 92,
                    "decorators": [],
                    "name": "Tag",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 95,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 118,
        "decorators": [],
        "name": "doThis",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 119,
          "end": 138,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 124,
            "end": 138,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 126,
              "end": 138,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 126,
                  "end": 132
                },
                {
                  "type": "TSTypeReference",
                  "start": 135,
                  "end": 138,
                  "typeName": {
                    "type": "Identifier",
                    "start": 135,
                    "end": 138,
                    "decorators": [],
                    "name": "Tag",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 139,
        "end": 145,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 141,
          "end": 145
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 147,
      "end": 193,
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 170,
        "decorators": [],
        "name": "doThat",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 171,
          "end": 184,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 176,
            "end": 184,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 178,
              "end": 184
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 186,
        "end": 192,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 188,
          "end": 192
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 194,
      "end": 212,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 211,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 211,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 203,
              "end": 211,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 205,
                "end": 211
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 213,
      "end": 286,
      "test": {
        "type": "CallExpression",
        "start": 217,
        "end": 234,
        "callee": {
          "type": "Identifier",
          "start": 217,
          "end": 227,
          "decorators": [],
          "name": "isNonBlank",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 228,
            "end": 233,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 236,
        "end": 258,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 242,
            "end": 256,
            "expression": {
              "type": "CallExpression",
              "start": 242,
              "end": 255,
              "callee": {
                "type": "Identifier",
                "start": 242,
                "end": 248,
                "decorators": [],
                "name": "doThis",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 249,
                  "end": 254,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 264,
        "end": 286,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 270,
            "end": 284,
            "expression": {
              "type": "CallExpression",
              "start": 270,
              "end": 283,
              "callee": {
                "type": "Identifier",
                "start": 270,
                "end": 276,
                "decorators": [],
                "name": "doThat",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 277,
                  "end": 282,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 289,
      "end": 307,
      "id": {
        "type": "Identifier",
        "start": 300,
        "end": 304,
        "decorators": [],
        "name": "Tag2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 305,
        "end": 307,
        "members": []
      },
      "const": true,
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 308,
      "end": 379,
      "id": {
        "type": "Identifier",
        "start": 325,
        "end": 336,
        "decorators": [],
        "name": "isNonBlank2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 337,
          "end": 350,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 342,
            "end": 350,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 344,
              "end": 350
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 352,
        "end": 378,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 354,
          "end": 378,
          "parameterName": {
            "type": "Identifier",
            "start": 354,
            "end": 359,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 364,
            "end": 377,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 364,
              "end": 377,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 364,
                  "end": 370
                },
                {
                  "type": "TSTypeReference",
                  "start": 373,
                  "end": 377,
                  "typeName": {
                    "type": "Identifier",
                    "start": 373,
                    "end": 377,
                    "decorators": [],
                    "name": "Tag2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 380,
      "end": 433,
      "id": {
        "type": "Identifier",
        "start": 397,
        "end": 404,
        "decorators": [],
        "name": "doThis2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 405,
          "end": 425,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 410,
            "end": 425,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 412,
              "end": 425,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 412,
                  "end": 418
                },
                {
                  "type": "TSTypeReference",
                  "start": 421,
                  "end": 425,
                  "typeName": {
                    "type": "Identifier",
                    "start": 421,
                    "end": 425,
                    "decorators": [],
                    "name": "Tag2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 426,
        "end": 432,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 428,
          "end": 432
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 434,
      "end": 481,
      "id": {
        "type": "Identifier",
        "start": 451,
        "end": 458,
        "decorators": [],
        "name": "doThat2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 459,
          "end": 472,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 464,
            "end": 472,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 466,
              "end": 472
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 474,
        "end": 480,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 476,
          "end": 480
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "IfStatement",
      "start": 482,
      "end": 558,
      "test": {
        "type": "CallExpression",
        "start": 486,
        "end": 504,
        "callee": {
          "type": "Identifier",
          "start": 486,
          "end": 497,
          "decorators": [],
          "name": "isNonBlank2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 498,
            "end": 503,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 506,
        "end": 529,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 512,
            "end": 527,
            "expression": {
              "type": "CallExpression",
              "start": 512,
              "end": 526,
              "callee": {
                "type": "Identifier",
                "start": 512,
                "end": 519,
                "decorators": [],
                "name": "doThis2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 520,
                  "end": 525,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 535,
        "end": 558,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 541,
            "end": 556,
            "expression": {
              "type": "CallExpression",
              "start": 541,
              "end": 555,
              "callee": {
                "type": "Identifier",
                "start": 541,
                "end": 548,
                "decorators": [],
                "name": "doThat2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 549,
                  "end": 554,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
