__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyPropertyDescriptor",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 30
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 40
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 46,
                "end": 49
              },
              "start": 44,
              "end": 49
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 37,
            "end": 50
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 58
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 64,
                    "end": 67
                  },
                  "start": 62,
                  "end": 67
                },
                "start": 61,
                "end": 67
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 70,
                "end": 74
              },
              "start": 68,
              "end": 74
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 55,
            "end": 75
          }
        ],
        "start": 31,
        "end": 77
      },
      "declare": false,
      "start": 0,
      "end": 77
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "defineMyProperty",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 112
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 116,
              "end": 119
            },
            "start": 114,
            "end": 119
          },
          "start": 113,
          "end": 119
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 124,
              "end": 130
            },
            "start": 122,
            "end": 130
          },
          "start": 121,
          "end": 130
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attributes",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyPropertyDescriptor",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 164
              },
              "typeArguments": null,
              "start": 144,
              "end": 164
            },
            "start": 142,
            "end": 164
          },
          "start": 132,
          "end": 164
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 167,
          "end": 170
        },
        "start": 165,
        "end": 170
      },
      "body": null,
      "expression": false,
      "start": 79,
      "end": 171
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "defineMyProperty",
          "optional": false,
          "typeAnnotation": null,
          "start": 172,
          "end": 188
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 189,
            "end": 191
          },
          {
            "type": "Literal",
            "value": "name",
            "raw": "\"name\"",
            "start": 193,
            "end": 199
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 206
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 229,
                          "end": 230
                        },
                        "start": 222,
                        "end": 231
                      }
                    ],
                    "start": 220,
                    "end": 233
                  },
                  "expression": false,
                  "start": 208,
                  "end": 233
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 203,
                "end": 233
              }
            ],
            "start": 201,
            "end": 235
          }
        ],
        "optional": false,
        "start": 172,
        "end": 236
      },
      "directive": null,
      "start": 172,
      "end": 237
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyPropertyDescriptor2",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 270
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 280
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 289,
                    "end": 292
                  },
                  "start": 286,
                  "end": 292
                },
                "start": 283,
                "end": 292
              },
              "start": 281,
              "end": 292
            },
            "accessibility": null,
            "static": false,
            "start": 277,
            "end": 293
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 301
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 308,
                        "end": 311
                      },
                      "start": 306,
                      "end": 311
                    },
                    "start": 305,
                    "end": 311
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 316,
                    "end": 320
                  },
                  "start": 313,
                  "end": 320
                },
                "start": 304,
                "end": 320
              },
              "start": 302,
              "end": 320
            },
            "accessibility": null,
            "static": false,
            "start": 298,
            "end": 321
          }
        ],
        "start": 271,
        "end": 323
      },
      "declare": false,
      "start": 239,
      "end": 323
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "defineMyProperty2",
        "optional": false,
        "typeAnnotation": null,
        "start": 342,
        "end": 359
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 363,
              "end": 366
            },
            "start": 361,
            "end": 366
          },
          "start": 360,
          "end": 366
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 371,
              "end": 377
            },
            "start": 369,
            "end": 377
          },
          "start": 368,
          "end": 377
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attributes",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyPropertyDescriptor2",
                "optional": false,
                "typeAnnotation": null,
                "start": 391,
                "end": 412
              },
              "typeArguments": null,
              "start": 391,
              "end": 412
            },
            "start": 389,
            "end": 412
          },
          "start": 379,
          "end": 412
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 415,
          "end": 418
        },
        "start": 413,
        "end": 418
      },
      "body": null,
      "expression": false,
      "start": 325,
      "end": 419
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "defineMyProperty2",
          "optional": false,
          "typeAnnotation": null,
          "start": 420,
          "end": 437
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 438,
            "end": 440
          },
          {
            "type": "Literal",
            "value": "name",
            "raw": "\"name\"",
            "start": 442,
            "end": 448
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 452,
                  "end": 455
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 478,
                          "end": 479
                        },
                        "start": 471,
                        "end": 480
                      }
                    ],
                    "start": 469,
                    "end": 482
                  },
                  "expression": false,
                  "start": 457,
                  "end": 482
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 452,
                "end": 482
              }
            ],
            "start": 450,
            "end": 484
          }
        ],
        "optional": false,
        "start": 420,
        "end": 485
      },
      "directive": null,
      "start": 420,
      "end": 486
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 486
}
```
