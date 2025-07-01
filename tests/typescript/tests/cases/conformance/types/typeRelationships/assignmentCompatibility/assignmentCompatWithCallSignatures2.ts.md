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
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 121
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 129
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 133,
                    "end": 139
                  },
                  "start": 131,
                  "end": 139
                },
                "start": 130,
                "end": 139
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 142,
                "end": 146
              },
              "start": 140,
              "end": 146
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 128,
            "end": 147
          }
        ],
        "start": 122,
        "end": 149
      },
      "declare": false,
      "start": 110,
      "end": 149
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
            "name": "t",
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
                  "start": 157,
                  "end": 158
                },
                "typeArguments": null,
                "start": 157,
                "end": 158
              },
              "start": 155,
              "end": 158
            },
            "start": 154,
            "end": 158
          },
          "init": null,
          "definite": false,
          "start": 154,
          "end": 158
        }
      ],
      "declare": false,
      "start": 150,
      "end": 159
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 170
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 174,
                            "end": 180
                          },
                          "start": 172,
                          "end": 180
                        },
                        "start": 171,
                        "end": 180
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 183,
                        "end": 187
                      },
                      "start": 181,
                      "end": 187
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 169,
                    "end": 187
                  }
                ],
                "start": 167,
                "end": 189
              },
              "start": 165,
              "end": 189
            },
            "start": 164,
            "end": 189
          },
          "init": null,
          "definite": false,
          "start": 164,
          "end": 189
        }
      ],
      "declare": false,
      "start": 160,
      "end": 190
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 192,
          "end": 193
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 196,
          "end": 197
        },
        "start": 192,
        "end": 197
      },
      "directive": null,
      "start": 192,
      "end": 198
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 199,
          "end": 200
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 203,
          "end": 204
        },
        "start": 199,
        "end": 204
      },
      "directive": null,
      "start": 199,
      "end": 205
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 218
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 226
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 230,
                    "end": 236
                  },
                  "start": 228,
                  "end": 236
                },
                "start": 227,
                "end": 236
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 239,
                "end": 245
              },
              "start": 237,
              "end": 245
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 225,
            "end": 246
          }
        ],
        "start": 219,
        "end": 248
      },
      "declare": false,
      "start": 207,
      "end": 248
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 257
                },
                "typeArguments": null,
                "start": 256,
                "end": 257
              },
              "start": 254,
              "end": 257
            },
            "start": 253,
            "end": 257
          },
          "init": null,
          "definite": false,
          "start": 253,
          "end": 257
        }
      ],
      "declare": false,
      "start": 249,
      "end": 258
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 269,
                      "end": 270
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 274,
                            "end": 280
                          },
                          "start": 272,
                          "end": 280
                        },
                        "start": 271,
                        "end": 280
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 283,
                        "end": 289
                      },
                      "start": 281,
                      "end": 289
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 269,
                    "end": 289
                  }
                ],
                "start": 267,
                "end": 291
              },
              "start": 265,
              "end": 291
            },
            "start": 263,
            "end": 291
          },
          "init": null,
          "definite": false,
          "start": 263,
          "end": 291
        }
      ],
      "declare": false,
      "start": 259,
      "end": 292
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 293,
          "end": 294
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 297,
          "end": 298
        },
        "start": 293,
        "end": 298
      },
      "directive": null,
      "start": 293,
      "end": 299
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 300,
          "end": 301
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 304,
          "end": 306
        },
        "start": 300,
        "end": 306
      },
      "directive": null,
      "start": 300,
      "end": 307
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 308,
          "end": 309
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 313
        },
        "start": 308,
        "end": 313
      },
      "directive": null,
      "start": 308,
      "end": 314
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 315,
          "end": 316
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 319,
          "end": 321
        },
        "start": 315,
        "end": 321
      },
      "directive": null,
      "start": 315,
      "end": 322
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 324,
          "end": 325
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 330,
                "end": 331
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 339,
                  "end": 340
                },
                "id": null,
                "generator": false,
                "start": 333,
                "end": 340
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 330,
              "end": 340
            }
          ],
          "start": 328,
          "end": 342
        },
        "start": 324,
        "end": 342
      },
      "directive": null,
      "start": 324,
      "end": 343
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 344,
          "end": 345
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 350,
                "end": 351
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
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
                        "start": 354,
                        "end": 355
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 354,
                      "end": 355
                    }
                  ],
                  "start": 353,
                  "end": 356
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
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
                          "start": 359,
                          "end": 360
                        },
                        "typeArguments": null,
                        "start": 359,
                        "end": 360
                      },
                      "start": 358,
                      "end": 360
                    },
                    "start": 357,
                    "end": 360
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 365,
                  "end": 366
                },
                "id": null,
                "generator": false,
                "start": 353,
                "end": 366
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 350,
              "end": 366
            }
          ],
          "start": 348,
          "end": 368
        },
        "start": 344,
        "end": 368
      },
      "directive": null,
      "start": 344,
      "end": 369
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 370,
          "end": 371
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 376,
                "end": 377
              },
              "value": {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 388,
                  "end": 389
                },
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
                        "value": 1,
                        "raw": "1",
                        "start": 401,
                        "end": 402
                      },
                      "start": 394,
                      "end": 402
                    }
                  ],
                  "start": 392,
                  "end": 404
                },
                "expression": false,
                "start": 379,
                "end": 404
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 376,
              "end": 404
            }
          ],
          "start": 374,
          "end": 406
        },
        "start": 370,
        "end": 406
      },
      "directive": null,
      "start": 370,
      "end": 407
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 408,
          "end": 409
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 414,
                "end": 415
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 419,
                        "end": 425
                      },
                      "start": 417,
                      "end": 425
                    },
                    "start": 416,
                    "end": 425
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 436,
                        "end": 438
                      },
                      "start": 429,
                      "end": 439
                    }
                  ],
                  "start": 427,
                  "end": 441
                },
                "expression": false,
                "start": 415,
                "end": 441
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 414,
              "end": 441
            }
          ],
          "start": 412,
          "end": 443
        },
        "start": 408,
        "end": 443
      },
      "directive": null,
      "start": 408,
      "end": 443
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 444,
          "end": 445
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 450,
                "end": 451
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 459,
                  "end": 460
                },
                "id": null,
                "generator": false,
                "start": 453,
                "end": 460
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 450,
              "end": 460
            }
          ],
          "start": 448,
          "end": 462
        },
        "start": 444,
        "end": 462
      },
      "directive": null,
      "start": 444,
      "end": 462
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 463,
          "end": 464
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 469,
                "end": 470
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
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
                        "start": 473,
                        "end": 474
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 473,
                      "end": 474
                    }
                  ],
                  "start": 472,
                  "end": 475
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
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
                          "start": 479,
                          "end": 480
                        },
                        "typeArguments": null,
                        "start": 479,
                        "end": 480
                      },
                      "start": 477,
                      "end": 480
                    },
                    "start": 476,
                    "end": 480
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 485,
                  "end": 486
                },
                "id": null,
                "generator": false,
                "start": 472,
                "end": 486
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 469,
              "end": 486
            }
          ],
          "start": 467,
          "end": 488
        },
        "start": 463,
        "end": 488
      },
      "directive": null,
      "start": 463,
      "end": 489
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 490,
          "end": 491
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 496,
                "end": 497
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 512,
                        "end": 518
                      },
                      "start": 510,
                      "end": 518
                    },
                    "start": 509,
                    "end": 518
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 529,
                        "end": 531
                      },
                      "start": 522,
                      "end": 532
                    }
                  ],
                  "start": 520,
                  "end": 534
                },
                "expression": false,
                "start": 499,
                "end": 534
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 496,
              "end": 534
            }
          ],
          "start": 494,
          "end": 536
        },
        "start": 490,
        "end": 536
      },
      "directive": null,
      "start": 490,
      "end": 536
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 548,
          "end": 549
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 558,
            "end": 559
          },
          "id": null,
          "generator": false,
          "start": 552,
          "end": 559
        },
        "start": 548,
        "end": 559
      },
      "directive": null,
      "start": 548,
      "end": 560
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 561,
          "end": 562
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
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
                  "start": 578,
                  "end": 584
                },
                "start": 576,
                "end": 584
              },
              "start": 575,
              "end": 584
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 595,
                  "end": 597
                },
                "start": 588,
                "end": 598
              }
            ],
            "start": 586,
            "end": 600
          },
          "expression": false,
          "start": 565,
          "end": 600
        },
        "start": 561,
        "end": 600
      },
      "directive": null,
      "start": 561,
      "end": 600
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 601,
          "end": 602
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 611,
            "end": 612
          },
          "id": null,
          "generator": false,
          "start": 605,
          "end": 612
        },
        "start": 601,
        "end": 612
      },
      "directive": null,
      "start": 601,
      "end": 613
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 614,
          "end": 615
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
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
                  "start": 631,
                  "end": 637
                },
                "start": 629,
                "end": 637
              },
              "start": 628,
              "end": 637
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 648,
                  "end": 650
                },
                "start": 641,
                "end": 651
              }
            ],
            "start": 639,
            "end": 653
          },
          "expression": false,
          "start": 618,
          "end": 653
        },
        "start": 614,
        "end": 653
      },
      "directive": null,
      "start": 614,
      "end": 653
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S2",
        "optional": false,
        "typeAnnotation": null,
        "start": 665,
        "end": 667
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 674,
              "end": 675
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 679,
                    "end": 685
                  },
                  "start": 677,
                  "end": 685
                },
                "start": 676,
                "end": 685
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 688,
                "end": 692
              },
              "start": 686,
              "end": 692
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 674,
            "end": 693
          }
        ],
        "start": 668,
        "end": 695
      },
      "declare": false,
      "start": 655,
      "end": 695
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
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 704,
                  "end": 706
                },
                "typeArguments": null,
                "start": 704,
                "end": 706
              },
              "start": 702,
              "end": 706
            },
            "start": 700,
            "end": 706
          },
          "init": null,
          "definite": false,
          "start": 700,
          "end": 706
        }
      ],
      "declare": false,
      "start": 696,
      "end": 707
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 718,
                      "end": 719
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 723,
                            "end": 729
                          },
                          "start": 721,
                          "end": 729
                        },
                        "start": 720,
                        "end": 729
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 732,
                        "end": 736
                      },
                      "start": 730,
                      "end": 736
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 718,
                    "end": 736
                  }
                ],
                "start": 716,
                "end": 738
              },
              "start": 714,
              "end": 738
            },
            "start": 712,
            "end": 738
          },
          "init": null,
          "definite": false,
          "start": 712,
          "end": 738
        }
      ],
      "declare": false,
      "start": 708,
      "end": 739
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 760,
          "end": 761
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 764,
          "end": 766
        },
        "start": 760,
        "end": 766
      },
      "directive": null,
      "start": 760,
      "end": 767
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 768,
          "end": 769
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": null,
          "start": 772,
          "end": 774
        },
        "start": 768,
        "end": 774
      },
      "directive": null,
      "start": 768,
      "end": 775
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 776,
          "end": 777
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
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
                  "start": 784,
                  "end": 790
                },
                "start": 782,
                "end": 790
              },
              "start": 781,
              "end": 790
            }
          ],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 795,
            "end": 796
          },
          "id": null,
          "generator": false,
          "start": 780,
          "end": 796
        },
        "start": 776,
        "end": 796
      },
      "directive": null,
      "start": 776,
      "end": 797
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 798,
          "end": 799
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
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
                  "start": 815,
                  "end": 821
                },
                "start": 813,
                "end": 821
              },
              "start": 812,
              "end": 821
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 832,
                  "end": 834
                },
                "start": 825,
                "end": 835
              }
            ],
            "start": 823,
            "end": 837
          },
          "expression": false,
          "start": 802,
          "end": 837
        },
        "start": 798,
        "end": 837
      },
      "directive": null,
      "start": 798,
      "end": 837
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 838,
          "end": 839
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 842,
          "end": 844
        },
        "start": 838,
        "end": 844
      },
      "directive": null,
      "start": 838,
      "end": 845
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 846,
          "end": 847
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": null,
          "start": 850,
          "end": 852
        },
        "start": 846,
        "end": 852
      },
      "directive": null,
      "start": 846,
      "end": 853
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 854,
          "end": 855
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
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
                  "start": 862,
                  "end": 868
                },
                "start": 860,
                "end": 868
              },
              "start": 859,
              "end": 868
            }
          ],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 873,
            "end": 874
          },
          "id": null,
          "generator": false,
          "start": 858,
          "end": 874
        },
        "start": 854,
        "end": 874
      },
      "directive": null,
      "start": 854,
      "end": 875
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 876,
          "end": 877
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
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
                  "start": 893,
                  "end": 899
                },
                "start": 891,
                "end": 899
              },
              "start": 890,
              "end": 899
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 910,
                  "end": 912
                },
                "start": 903,
                "end": 913
              }
            ],
            "start": 901,
            "end": 915
          },
          "expression": false,
          "start": 880,
          "end": 915
        },
        "start": 876,
        "end": 915
      },
      "directive": null,
      "start": 876,
      "end": 915
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 110,
  "end": 915
}
```
