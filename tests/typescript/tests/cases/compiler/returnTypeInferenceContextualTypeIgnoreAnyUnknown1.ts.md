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
        "name": "outer1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 23
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 31,
                    "end": 35
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 37,
                      "end": 40
                    },
                    "start": 35,
                    "end": 40
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 31,
                  "end": 40
                }
              ],
              "start": 29,
              "end": 42
            },
            "start": 27,
            "end": 42
          },
          "start": 24,
          "end": 42
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 45,
          "end": 49
        },
        "start": 43,
        "end": 49
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "outer2",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 74
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 82,
                    "end": 86
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 88,
                      "end": 95
                    },
                    "start": 86,
                    "end": 95
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 82,
                  "end": 95
                }
              ],
              "start": 80,
              "end": 97
            },
            "start": 78,
            "end": 97
          },
          "start": 75,
          "end": 97
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 100,
          "end": 104
        },
        "start": 98,
        "end": 104
      },
      "body": null,
      "expression": false,
      "start": 51,
      "end": 105
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inner1",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 130
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 132
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 147,
                      "end": 153
                    },
                    "start": 145,
                    "end": 153
                  },
                  "start": 142,
                  "end": 153
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 158,
                  "end": 161
                },
                "start": 155,
                "end": 161
              },
              "start": 141,
              "end": 161
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 131,
            "end": 161
          }
        ],
        "start": 130,
        "end": 162
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 169
              },
              "typeArguments": null,
              "start": 168,
              "end": 169
            },
            "start": 166,
            "end": 169
          },
          "start": 163,
          "end": 169
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 173
          },
          "typeArguments": null,
          "start": 172,
          "end": 173
        },
        "start": 170,
        "end": 173
      },
      "body": null,
      "expression": false,
      "start": 107,
      "end": 174
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
            "name": "result1",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 189
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner1",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 198
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 200,
                    "end": 203
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 208,
                  "end": 211
                },
                "id": null,
                "generator": false,
                "start": 199,
                "end": 211
              }
            ],
            "optional": false,
            "start": 192,
            "end": 212
          },
          "definite": false,
          "start": 182,
          "end": 212
        }
      ],
      "declare": false,
      "start": 176,
      "end": 213
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "outer1",
          "optional": false,
          "typeAnnotation": null,
          "start": 215,
          "end": 221
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
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 230
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inner1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 238
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 240,
                          "end": 243
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 248,
                        "end": 251
                      },
                      "id": null,
                      "generator": false,
                      "start": 239,
                      "end": 251
                    }
                  ],
                  "optional": false,
                  "start": 232,
                  "end": 252
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 226,
                "end": 252
              }
            ],
            "start": 222,
            "end": 255
          }
        ],
        "optional": false,
        "start": 215,
        "end": 256
      },
      "directive": null,
      "start": 215,
      "end": 257
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "outer2",
          "optional": false,
          "typeAnnotation": null,
          "start": 259,
          "end": 265
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
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 274
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inner1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 276,
                    "end": 282
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 284,
                          "end": 287
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 292,
                        "end": 295
                      },
                      "id": null,
                      "generator": false,
                      "start": 283,
                      "end": 295
                    }
                  ],
                  "optional": false,
                  "start": 276,
                  "end": 296
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 270,
                "end": 296
              }
            ],
            "start": 266,
            "end": 299
          }
        ],
        "optional": false,
        "start": 259,
        "end": 300
      },
      "directive": null,
      "start": 259,
      "end": 301
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inner2",
        "optional": false,
        "typeAnnotation": null,
        "start": 320,
        "end": 326
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 328
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 327,
            "end": 328
          }
        ],
        "start": 326,
        "end": 329
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 335,
                    "end": 336
                  },
                  "typeArguments": null,
                  "start": 335,
                  "end": 336
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 346,
                          "end": 352
                        },
                        "start": 344,
                        "end": 352
                      },
                      "start": 341,
                      "end": 352
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 357,
                      "end": 360
                    },
                    "start": 354,
                    "end": 360
                  },
                  "start": 340,
                  "end": 360
                }
              ],
              "start": 335,
              "end": 361
            },
            "start": 333,
            "end": 361
          },
          "start": 330,
          "end": 361
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 365
          },
          "typeArguments": null,
          "start": 364,
          "end": 365
        },
        "start": 362,
        "end": 365
      },
      "body": null,
      "expression": false,
      "start": 303,
      "end": 366
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
            "name": "result2",
            "optional": false,
            "typeAnnotation": null,
            "start": 374,
            "end": 381
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner2",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 390
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 392,
                    "end": 395
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 400,
                  "end": 403
                },
                "id": null,
                "generator": false,
                "start": 391,
                "end": 403
              }
            ],
            "optional": false,
            "start": 384,
            "end": 404
          },
          "definite": false,
          "start": 374,
          "end": 404
        }
      ],
      "declare": false,
      "start": 368,
      "end": 405
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "outer1",
          "optional": false,
          "typeAnnotation": null,
          "start": 407,
          "end": 413
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
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 418,
                  "end": 422
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inner2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 424,
                    "end": 430
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 432,
                          "end": 435
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 440,
                        "end": 443
                      },
                      "id": null,
                      "generator": false,
                      "start": 431,
                      "end": 443
                    }
                  ],
                  "optional": false,
                  "start": 424,
                  "end": 444
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 418,
                "end": 444
              }
            ],
            "start": 414,
            "end": 447
          }
        ],
        "optional": false,
        "start": 407,
        "end": 448
      },
      "directive": null,
      "start": 407,
      "end": 449
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "outer2",
          "optional": false,
          "typeAnnotation": null,
          "start": 451,
          "end": 457
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
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 462,
                  "end": 466
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inner2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 468,
                    "end": 474
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 476,
                          "end": 479
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 484,
                        "end": 487
                      },
                      "id": null,
                      "generator": false,
                      "start": 475,
                      "end": 487
                    }
                  ],
                  "optional": false,
                  "start": 468,
                  "end": 488
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 462,
                "end": 488
              }
            ],
            "start": 458,
            "end": 491
          }
        ],
        "optional": false,
        "start": 451,
        "end": 492
      },
      "directive": null,
      "start": 451,
      "end": 493
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 493
}
```
