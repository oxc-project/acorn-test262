__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 486,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 30,
        "decorators": [],
        "name": "MyPropertyDescriptor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 31,
        "end": 77,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 37,
            "end": 50,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 40,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 49,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 46,
                "end": 49
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 55,
            "end": 75,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 58,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 61,
                "end": 67,
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 62,
                  "end": 67,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 64,
                    "end": 67
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 74,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 70,
                "end": 74
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 79,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 112,
        "decorators": [],
        "name": "defineMyProperty",
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
          "start": 113,
          "end": 119,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 114,
            "end": 119,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 116,
              "end": 119
            }
          }
        },
        {
          "type": "Identifier",
          "start": 121,
          "end": 130,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 122,
            "end": 130,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 124,
              "end": 130
            }
          }
        },
        {
          "type": "Identifier",
          "start": 132,
          "end": 164,
          "decorators": [],
          "name": "attributes",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 142,
            "end": 164,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 144,
              "end": 164,
              "typeName": {
                "type": "Identifier",
                "start": 144,
                "end": 164,
                "decorators": [],
                "name": "MyPropertyDescriptor",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 165,
        "end": 170,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 167,
          "end": 170
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 172,
      "end": 237,
      "expression": {
        "type": "CallExpression",
        "start": 172,
        "end": 236,
        "callee": {
          "type": "Identifier",
          "start": 172,
          "end": 188,
          "decorators": [],
          "name": "defineMyProperty",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 189,
            "end": 191,
            "properties": []
          },
          {
            "type": "Literal",
            "start": 193,
            "end": 199,
            "value": "name",
            "raw": "\"name\""
          },
          {
            "type": "ObjectExpression",
            "start": 201,
            "end": 235,
            "properties": [
              {
                "type": "Property",
                "start": 203,
                "end": 233,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 206,
                  "decorators": [],
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 208,
                  "end": 233,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 220,
                    "end": 233,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 222,
                        "end": 231,
                        "argument": {
                          "type": "Literal",
                          "start": 229,
                          "end": 230,
                          "value": 5,
                          "raw": "5"
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 239,
      "end": 323,
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 270,
        "decorators": [],
        "name": "MyPropertyDescriptor2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 271,
        "end": 323,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 277,
            "end": 293,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 277,
              "end": 280,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 281,
              "end": 292,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 283,
                "end": 292,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 286,
                  "end": 292,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 289,
                    "end": 292
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 298,
            "end": 321,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 298,
              "end": 301,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 302,
              "end": 320,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 304,
                "end": 320,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 305,
                    "end": 311,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 306,
                      "end": 311,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 308,
                        "end": 311
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 313,
                  "end": 320,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 316,
                    "end": 320
                  }
                }
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
      "start": 325,
      "end": 419,
      "id": {
        "type": "Identifier",
        "start": 342,
        "end": 359,
        "decorators": [],
        "name": "defineMyProperty2",
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
          "start": 360,
          "end": 366,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 361,
            "end": 366,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 363,
              "end": 366
            }
          }
        },
        {
          "type": "Identifier",
          "start": 368,
          "end": 377,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 369,
            "end": 377,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 371,
              "end": 377
            }
          }
        },
        {
          "type": "Identifier",
          "start": 379,
          "end": 412,
          "decorators": [],
          "name": "attributes",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 389,
            "end": 412,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 391,
              "end": 412,
              "typeName": {
                "type": "Identifier",
                "start": 391,
                "end": 412,
                "decorators": [],
                "name": "MyPropertyDescriptor2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 413,
        "end": 418,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 415,
          "end": 418
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 420,
      "end": 486,
      "expression": {
        "type": "CallExpression",
        "start": 420,
        "end": 485,
        "callee": {
          "type": "Identifier",
          "start": 420,
          "end": 437,
          "decorators": [],
          "name": "defineMyProperty2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 438,
            "end": 440,
            "properties": []
          },
          {
            "type": "Literal",
            "start": 442,
            "end": 448,
            "value": "name",
            "raw": "\"name\""
          },
          {
            "type": "ObjectExpression",
            "start": 450,
            "end": 484,
            "properties": [
              {
                "type": "Property",
                "start": 452,
                "end": 482,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 452,
                  "end": 455,
                  "decorators": [],
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 457,
                  "end": 482,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 469,
                    "end": 482,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 471,
                        "end": 480,
                        "argument": {
                          "type": "Literal",
                          "start": 478,
                          "end": 479,
                          "value": 5,
                          "raw": "5"
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
