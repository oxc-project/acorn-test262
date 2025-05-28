__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 669,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 44,
        "decorators": [],
        "name": "DiscriminatorTrue",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 47,
        "end": 95,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 53,
            "end": 64,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 57,
              "decorators": [],
              "name": "disc",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 63,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 59,
                "end": 63,
                "literal": {
                  "type": "Literal",
                  "start": 59,
                  "end": 63,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 69,
            "end": 93,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 71,
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 92,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 73,
                "end": 92,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 74,
                    "end": 83,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 75,
                      "end": 83,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 77,
                        "end": 83
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 85,
                  "end": 92,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 88,
                    "end": 92
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
      "type": "TSTypeAliasDeclaration",
      "start": 97,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 120,
        "decorators": [],
        "name": "DiscriminatorFalse",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 123,
        "end": 173,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 129,
            "end": 142,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 133,
              "decorators": [],
              "name": "disc",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 141,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 136,
                "end": 141,
                "literal": {
                  "type": "Literal",
                  "start": 136,
                  "end": 141,
                  "value": false,
                  "raw": "false"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 147,
            "end": 171,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 149,
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 170,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 151,
                "end": 170,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 152,
                    "end": 161,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 153,
                      "end": 161,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 155,
                        "end": 161
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 163,
                  "end": 170,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 166,
                    "end": 170
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
      "type": "TSTypeAliasDeclaration",
      "start": 175,
      "end": 227,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 185,
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 188,
        "end": 226,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 188,
            "end": 205,
            "typeName": {
              "type": "Identifier",
              "start": 188,
              "end": 205,
              "decorators": [],
              "name": "DiscriminatorTrue",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 208,
            "end": 226,
            "typeName": {
              "type": "Identifier",
              "start": 208,
              "end": 226,
              "decorators": [],
              "name": "DiscriminatorFalse",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 229,
      "end": 302,
      "id": {
        "type": "Identifier",
        "start": 246,
        "end": 247,
        "decorators": [],
        "name": "f",
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
          "start": 248,
          "end": 295,
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 255,
            "end": 295,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 257,
              "end": 295,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 257,
                  "end": 274,
                  "typeName": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 274,
                    "decorators": [],
                    "name": "DiscriminatorTrue",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 277,
                  "end": 295,
                  "typeName": {
                    "type": "Identifier",
                    "start": 277,
                    "end": 295,
                    "decorators": [],
                    "name": "DiscriminatorFalse",
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
        "start": 296,
        "end": 301,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 298,
          "end": 301
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 324,
      "end": 372,
      "expression": {
        "type": "CallExpression",
        "start": 324,
        "end": 371,
        "callee": {
          "type": "Identifier",
          "start": 324,
          "end": 325,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 326,
            "end": 370,
            "properties": [
              {
                "type": "Property",
                "start": 332,
                "end": 342,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 332,
                  "end": 336,
                  "decorators": [],
                  "name": "disc",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 338,
                  "end": 342,
                  "value": true,
                  "raw": "true"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 348,
                "end": 368,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 348,
                  "end": 350,
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 352,
                  "end": 368,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 352,
                      "end": 353,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "start": 357,
                    "end": 368,
                    "callee": {
                      "type": "Identifier",
                      "start": 357,
                      "end": 365,
                      "decorators": [],
                      "name": "parseInt",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 366,
                        "end": 367,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "id": null,
                  "generator": false
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
      "type": "ExpressionStatement",
      "start": 394,
      "end": 443,
      "expression": {
        "type": "CallExpression",
        "start": 394,
        "end": 442,
        "callee": {
          "type": "Identifier",
          "start": 394,
          "end": 395,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 396,
            "end": 441,
            "properties": [
              {
                "type": "Property",
                "start": 402,
                "end": 413,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 406,
                  "decorators": [],
                  "name": "disc",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 408,
                  "end": 413,
                  "value": false,
                  "raw": "false"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 419,
                "end": 439,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 419,
                  "end": 421,
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 423,
                  "end": 439,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 423,
                      "end": 424,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "start": 428,
                    "end": 439,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 428,
                      "end": 437,
                      "object": {
                        "type": "Identifier",
                        "start": 428,
                        "end": 429,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 430,
                        "end": 437,
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "id": null,
                  "generator": false
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
      "type": "ExpressionStatement",
      "start": 501,
      "end": 554,
      "expression": {
        "type": "CallExpression",
        "start": 501,
        "end": 553,
        "callee": {
          "type": "Identifier",
          "start": 501,
          "end": 502,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 503,
            "end": 552,
            "properties": [
              {
                "type": "Property",
                "start": 509,
                "end": 524,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 509,
                  "end": 513,
                  "decorators": [],
                  "name": "disc",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 515,
                  "end": 524,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 530,
                "end": 550,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 530,
                  "end": 532,
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 534,
                  "end": 550,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 534,
                      "end": 535,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "start": 539,
                    "end": 550,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 539,
                      "end": 548,
                      "object": {
                        "type": "Identifier",
                        "start": 539,
                        "end": 540,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 541,
                        "end": 548,
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "id": null,
                  "generator": false
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
      "type": "ExpressionStatement",
      "start": 637,
      "end": 669,
      "expression": {
        "type": "CallExpression",
        "start": 637,
        "end": 668,
        "callee": {
          "type": "Identifier",
          "start": 637,
          "end": 638,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 639,
            "end": 667,
            "properties": [
              {
                "type": "Property",
                "start": 645,
                "end": 665,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 645,
                  "end": 647,
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 649,
                  "end": 665,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 649,
                      "end": 650,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "start": 654,
                    "end": 665,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 654,
                      "end": 663,
                      "object": {
                        "type": "Identifier",
                        "start": 654,
                        "end": 655,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 656,
                        "end": 663,
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "id": null,
                  "generator": false
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
