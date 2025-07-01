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
        "name": "DiscriminatorTrue",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 44
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "disc",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 57
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 59,
                  "end": 63
                },
                "start": 59,
                "end": 63
              },
              "start": 57,
              "end": 63
            },
            "accessibility": null,
            "static": false,
            "start": 53,
            "end": 64
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 71
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 77,
                        "end": 83
                      },
                      "start": 75,
                      "end": 83
                    },
                    "start": 74,
                    "end": 83
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 88,
                    "end": 92
                  },
                  "start": 85,
                  "end": 92
                },
                "start": 73,
                "end": 92
              },
              "start": 71,
              "end": 92
            },
            "accessibility": null,
            "static": false,
            "start": 69,
            "end": 93
          }
        ],
        "start": 47,
        "end": 95
      },
      "declare": false,
      "start": 22,
      "end": 95
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DiscriminatorFalse",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 120
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "disc",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 133
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 136,
                  "end": 141
                },
                "start": 136,
                "end": 141
              },
              "start": 134,
              "end": 141
            },
            "accessibility": null,
            "static": false,
            "start": 129,
            "end": 142
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 149
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 155,
                        "end": 161
                      },
                      "start": 153,
                      "end": 161
                    },
                    "start": 152,
                    "end": 161
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 166,
                    "end": 170
                  },
                  "start": 163,
                  "end": 170
                },
                "start": 151,
                "end": 170
              },
              "start": 149,
              "end": 170
            },
            "accessibility": null,
            "static": false,
            "start": 147,
            "end": 171
          }
        ],
        "start": 123,
        "end": 173
      },
      "declare": false,
      "start": 97,
      "end": 173
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 180,
        "end": 185
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "DiscriminatorTrue",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 205
            },
            "typeArguments": null,
            "start": 188,
            "end": 205
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "DiscriminatorFalse",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 226
            },
            "typeArguments": null,
            "start": 208,
            "end": 226
          }
        ],
        "start": 188,
        "end": 226
      },
      "declare": false,
      "start": 175,
      "end": 227
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 246,
        "end": 247
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DiscriminatorTrue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 257,
                    "end": 274
                  },
                  "typeArguments": null,
                  "start": 257,
                  "end": 274
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DiscriminatorFalse",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 277,
                    "end": 295
                  },
                  "typeArguments": null,
                  "start": 277,
                  "end": 295
                }
              ],
              "start": 257,
              "end": 295
            },
            "start": 255,
            "end": 295
          },
          "start": 248,
          "end": 295
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 298,
          "end": 301
        },
        "start": 296,
        "end": 301
      },
      "body": null,
      "expression": false,
      "start": 229,
      "end": 302
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 324,
          "end": 325
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "disc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 332,
                  "end": 336
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 338,
                  "end": 342
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 332,
                "end": 342
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 348,
                  "end": 350
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 352,
                      "end": 353
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "parseInt",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 357,
                      "end": 365
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 366,
                        "end": 367
                      }
                    ],
                    "optional": false,
                    "start": 357,
                    "end": 368
                  },
                  "id": null,
                  "generator": false,
                  "start": 352,
                  "end": 368
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 348,
                "end": 368
              }
            ],
            "start": 326,
            "end": 370
          }
        ],
        "optional": false,
        "start": 324,
        "end": 371
      },
      "directive": null,
      "start": 324,
      "end": 372
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 394,
          "end": 395
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "disc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 402,
                  "end": 406
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 408,
                  "end": 413
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 402,
                "end": 413
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 419,
                  "end": 421
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 423,
                      "end": 424
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 428,
                        "end": 429
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 430,
                        "end": 437
                      },
                      "optional": false,
                      "computed": false,
                      "start": 428,
                      "end": 437
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 428,
                    "end": 439
                  },
                  "id": null,
                  "generator": false,
                  "start": 423,
                  "end": 439
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 419,
                "end": 439
              }
            ],
            "start": 396,
            "end": 441
          }
        ],
        "optional": false,
        "start": 394,
        "end": 442
      },
      "directive": null,
      "start": 394,
      "end": 443
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 501,
          "end": 502
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "disc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 509,
                  "end": 513
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 515,
                  "end": 524
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 509,
                "end": 524
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 530,
                  "end": 532
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 534,
                      "end": 535
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 539,
                        "end": 540
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 541,
                        "end": 548
                      },
                      "optional": false,
                      "computed": false,
                      "start": 539,
                      "end": 548
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 539,
                    "end": 550
                  },
                  "id": null,
                  "generator": false,
                  "start": 534,
                  "end": 550
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 530,
                "end": 550
              }
            ],
            "start": 503,
            "end": 552
          }
        ],
        "optional": false,
        "start": 501,
        "end": 553
      },
      "directive": null,
      "start": 501,
      "end": 554
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 637,
          "end": 638
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 645,
                  "end": 647
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 649,
                      "end": 650
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 654,
                        "end": 655
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 656,
                        "end": 663
                      },
                      "optional": false,
                      "computed": false,
                      "start": 654,
                      "end": 663
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 654,
                    "end": 665
                  },
                  "id": null,
                  "generator": false,
                  "start": 649,
                  "end": 665
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 645,
                "end": 665
              }
            ],
            "start": 639,
            "end": 667
          }
        ],
        "optional": false,
        "start": 637,
        "end": 668
      },
      "directive": null,
      "start": 637,
      "end": 669
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 669
}
```
