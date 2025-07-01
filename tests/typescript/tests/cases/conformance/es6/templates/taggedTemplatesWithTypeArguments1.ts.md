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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 18
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
              "start": 19,
              "end": 20
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 20
          }
        ],
        "start": 18,
        "end": 21
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 48
              },
              "typeArguments": null,
              "start": 28,
              "end": 48
            },
            "start": 26,
            "end": 48
          },
          "start": 22,
          "end": 48
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "callbacks",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 62
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 69
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 74,
                              "end": 75
                            },
                            "typeArguments": null,
                            "start": 74,
                            "end": 75
                          },
                          "start": 72,
                          "end": 75
                        },
                        "start": 71,
                        "end": 75
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 80,
                        "end": 83
                      },
                      "start": 77,
                      "end": 83
                    },
                    "start": 70,
                    "end": 83
                  }
                ],
                "start": 69,
                "end": 84
              },
              "start": 64,
              "end": 84
            },
            "start": 62,
            "end": 84
          },
          "value": null,
          "start": 50,
          "end": 84
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 87,
          "end": 91
        },
        "start": 85,
        "end": 91
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 92
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Stuff",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 109
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 119,
                "end": 125
              },
              "start": 117,
              "end": 125
            },
            "accessibility": null,
            "static": false,
            "start": 116,
            "end": 126
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 132
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 134,
                "end": 140
              },
              "start": 132,
              "end": 140
            },
            "accessibility": null,
            "static": false,
            "start": 131,
            "end": 141
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 147
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 149,
                "end": 156
              },
              "start": 147,
              "end": 156
            },
            "accessibility": null,
            "static": false,
            "start": 146,
            "end": 157
          }
        ],
        "start": 110,
        "end": 159
      },
      "declare": false,
      "start": 94,
      "end": 159
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 175
            },
            "init": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 179
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Stuff",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 180,
                      "end": 185
                    },
                    "typeArguments": null,
                    "start": 180,
                    "end": 185
                  }
                ],
                "start": 179,
                "end": 186
              },
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\n    hello\n    ",
                      "cooked": "\n    hello\n    "
                    },
                    "tail": false,
                    "start": 187,
                    "end": 205
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\n    brave\n    ",
                      "cooked": "\n    brave\n    "
                    },
                    "tail": false,
                    "start": 221,
                    "end": 239
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\n    world\n    ",
                      "cooked": "\n    world\n    "
                    },
                    "tail": false,
                    "start": 255,
                    "end": 273
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\n",
                      "cooked": "\n"
                    },
                    "tail": true,
                    "start": 289,
                    "end": 292
                  }
                ],
                "expressions": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 205,
                        "end": 210
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 214,
                        "end": 219
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 220,
                        "end": 221
                      },
                      "optional": false,
                      "computed": false,
                      "start": 214,
                      "end": 221
                    },
                    "id": null,
                    "generator": false,
                    "start": 205,
                    "end": 221
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 239,
                        "end": 244
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 248,
                        "end": 253
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 254,
                        "end": 255
                      },
                      "optional": false,
                      "computed": false,
                      "start": 248,
                      "end": 255
                    },
                    "id": null,
                    "generator": false,
                    "start": 239,
                    "end": 255
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 273,
                        "end": 278
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 282,
                        "end": 287
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 288,
                        "end": 289
                      },
                      "optional": false,
                      "computed": false,
                      "start": 282,
                      "end": 289
                    },
                    "id": null,
                    "generator": false,
                    "start": 273,
                    "end": 289
                  }
                ],
                "start": 187,
                "end": 292
              },
              "start": 178,
              "end": 292
            },
            "definite": false,
            "start": 174,
            "end": 292
          }
        ],
        "declare": false,
        "start": 168,
        "end": 293
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 161,
      "end": 293
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 312,
        "end": 313
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
              "name": "Input",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 319
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 314,
            "end": 319
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 322
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 321,
            "end": 322
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 325
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 324,
            "end": 325
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
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
        "start": 313,
        "end": 329
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 361
              },
              "typeArguments": null,
              "start": 341,
              "end": 361
            },
            "start": 339,
            "end": 361
          },
          "start": 335,
          "end": 361
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Input",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 374,
                        "end": 379
                      },
                      "typeArguments": null,
                      "start": 374,
                      "end": 379
                    },
                    "start": 372,
                    "end": 379
                  },
                  "start": 371,
                  "end": 379
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
                    "start": 384,
                    "end": 385
                  },
                  "typeArguments": null,
                  "start": 384,
                  "end": 385
                },
                "start": 381,
                "end": 385
              },
              "start": 370,
              "end": 385
            },
            "start": 368,
            "end": 385
          },
          "start": 367,
          "end": 385
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Input",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 394,
                        "end": 399
                      },
                      "typeArguments": null,
                      "start": 394,
                      "end": 399
                    },
                    "start": 392,
                    "end": 399
                  },
                  "start": 391,
                  "end": 399
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 404,
                    "end": 405
                  },
                  "typeArguments": null,
                  "start": 404,
                  "end": 405
                },
                "start": 401,
                "end": 405
              },
              "start": 390,
              "end": 405
            },
            "start": 388,
            "end": 405
          },
          "start": 387,
          "end": 405
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Input",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 414,
                        "end": 419
                      },
                      "typeArguments": null,
                      "start": 414,
                      "end": 419
                    },
                    "start": 412,
                    "end": 419
                  },
                  "start": 411,
                  "end": 419
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 424,
                    "end": 425
                  },
                  "typeArguments": null,
                  "start": 424,
                  "end": 425
                },
                "start": 421,
                "end": 425
              },
              "start": 410,
              "end": 425
            },
            "start": 408,
            "end": 425
          },
          "start": 407,
          "end": 425
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 428,
                "end": 429
              },
              "typeArguments": null,
              "start": 428,
              "end": 429
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 432,
                "end": 433
              },
              "typeArguments": null,
              "start": 432,
              "end": 433
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 436,
                "end": 437
              },
              "typeArguments": null,
              "start": 436,
              "end": 437
            }
          ],
          "start": 428,
          "end": 437
        },
        "start": 426,
        "end": 437
      },
      "body": null,
      "expression": false,
      "start": 295,
      "end": 438
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 454
            },
            "init": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 457,
                "end": 458
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Stuff",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 459,
                      "end": 464
                    },
                    "typeArguments": null,
                    "start": 459,
                    "end": 464
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 466,
                    "end": 472
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 474,
                    "end": 480
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 482,
                    "end": 489
                  }
                ],
                "start": 458,
                "end": 490
              },
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\n    hello\n    ",
                      "cooked": "\n    hello\n    "
                    },
                    "tail": false,
                    "start": 491,
                    "end": 509
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\n    brave\n    ",
                      "cooked": "\n    brave\n    "
                    },
                    "tail": false,
                    "start": 525,
                    "end": 543
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\n    world\n    ",
                      "cooked": "\n    world\n    "
                    },
                    "tail": false,
                    "start": 559,
                    "end": 577
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\n",
                      "cooked": "\n"
                    },
                    "tail": true,
                    "start": 593,
                    "end": 596
                  }
                ],
                "expressions": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 509,
                        "end": 514
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 518,
                        "end": 523
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 524,
                        "end": 525
                      },
                      "optional": false,
                      "computed": false,
                      "start": 518,
                      "end": 525
                    },
                    "id": null,
                    "generator": false,
                    "start": 509,
                    "end": 525
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 543,
                        "end": 548
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 552,
                        "end": 557
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 558,
                        "end": 559
                      },
                      "optional": false,
                      "computed": false,
                      "start": 552,
                      "end": 559
                    },
                    "id": null,
                    "generator": false,
                    "start": 543,
                    "end": 559
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 577,
                        "end": 582
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 586,
                        "end": 591
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 592,
                        "end": 593
                      },
                      "optional": false,
                      "computed": false,
                      "start": 586,
                      "end": 593
                    },
                    "id": null,
                    "generator": false,
                    "start": 577,
                    "end": 593
                  }
                ],
                "start": 491,
                "end": 596
              },
              "start": 457,
              "end": 596
            },
            "definite": false,
            "start": 453,
            "end": 596
          }
        ],
        "declare": false,
        "start": 447,
        "end": 597
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 440,
      "end": 597
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
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
                      "start": 622,
                      "end": 626
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
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
                                "start": 629,
                                "end": 630
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 629,
                              "end": 630
                            }
                          ],
                          "start": 628,
                          "end": 631
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "strs",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TemplateStringsArray",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 638,
                                  "end": 658
                                },
                                "typeArguments": null,
                                "start": 638,
                                "end": 658
                              },
                              "start": 636,
                              "end": 658
                            },
                            "start": 632,
                            "end": 658
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "input",
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
                                          "start": 671,
                                          "end": 672
                                        },
                                        "typeArguments": null,
                                        "start": 671,
                                        "end": 672
                                      },
                                      "start": 669,
                                      "end": 672
                                    },
                                    "start": 664,
                                    "end": 672
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
                                      "start": 677,
                                      "end": 678
                                    },
                                    "typeArguments": null,
                                    "start": 677,
                                    "end": 678
                                  },
                                  "start": 674,
                                  "end": 678
                                },
                                "start": 663,
                                "end": 678
                              },
                              "start": 661,
                              "end": 678
                            },
                            "start": 660,
                            "end": 678
                          }
                        ],
                        "returnType": {
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
                                  "name": "returnedObjProp",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 693,
                                  "end": 708
                                },
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
                                      "start": 710,
                                      "end": 711
                                    },
                                    "typeArguments": null,
                                    "start": 710,
                                    "end": 711
                                  },
                                  "start": 708,
                                  "end": 711
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 693,
                                "end": 711
                              }
                            ],
                            "start": 683,
                            "end": 717
                          },
                          "start": 680,
                          "end": 717
                        },
                        "start": 628,
                        "end": 717
                      },
                      "start": 626,
                      "end": 717
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 622,
                    "end": 717
                  }
                ],
                "start": 616,
                "end": 719
              },
              "start": 614,
              "end": 719
            },
            "start": 611,
            "end": 719
          },
          "init": null,
          "definite": false,
          "start": 611,
          "end": 719
        }
      ],
      "declare": true,
      "start": 599,
      "end": 719
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 732,
              "end": 733
            },
            "init": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 736,
                  "end": 739
                },
                "property": {
                  "type": "Literal",
                  "value": "prop",
                  "raw": "\"prop\"",
                  "start": 740,
                  "end": 746
                },
                "optional": false,
                "computed": true,
                "start": 736,
                "end": 747
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Stuff",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 748,
                      "end": 753
                    },
                    "typeArguments": null,
                    "start": 748,
                    "end": 753
                  }
                ],
                "start": 747,
                "end": 754
              },
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 755,
                    "end": 758
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 783,
                    "end": 785
                  }
                ],
                "expressions": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "input",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 759,
                        "end": 764
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "input",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 775,
                            "end": 780
                          },
                          "start": 772,
                          "end": 780
                        }
                      ],
                      "start": 770,
                      "end": 782
                    },
                    "id": null,
                    "generator": false,
                    "start": 758,
                    "end": 783
                  }
                ],
                "start": 755,
                "end": 785
              },
              "start": 736,
              "end": 785
            },
            "definite": false,
            "start": 732,
            "end": 785
          }
        ],
        "declare": false,
        "start": 728,
        "end": 785
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 721,
      "end": 785
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 786,
            "end": 787
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 788,
            "end": 803
          },
          "optional": false,
          "computed": false,
          "start": 786,
          "end": 803
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 804,
          "end": 805
        },
        "optional": false,
        "computed": false,
        "start": 786,
        "end": 805
      },
      "directive": null,
      "start": 786,
      "end": 806
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 807,
            "end": 808
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 809,
            "end": 824
          },
          "optional": false,
          "computed": false,
          "start": 807,
          "end": 824
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 825,
          "end": 826
        },
        "optional": false,
        "computed": false,
        "start": 807,
        "end": 826
      },
      "directive": null,
      "start": 807,
      "end": 827
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 828,
            "end": 829
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 830,
            "end": 845
          },
          "optional": false,
          "computed": false,
          "start": 828,
          "end": 845
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 846,
          "end": 847
        },
        "optional": false,
        "computed": false,
        "start": 828,
        "end": 847
      },
      "directive": null,
      "start": 828,
      "end": 848
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 850,
          "end": 851
        },
        "right": {
          "type": "TaggedTemplateExpression",
          "tag": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 854,
              "end": 857
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 858,
              "end": 862
            },
            "optional": false,
            "computed": false,
            "start": 854,
            "end": 862
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Stuff",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 863,
                  "end": 868
                },
                "typeArguments": null,
                "start": 863,
                "end": 868
              }
            ],
            "start": 862,
            "end": 869
          },
          "quasi": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 870,
                "end": 873
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 898,
                "end": 900
              }
            ],
            "expressions": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 874,
                    "end": 879
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "input",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 890,
                        "end": 895
                      },
                      "start": 887,
                      "end": 895
                    }
                  ],
                  "start": 885,
                  "end": 897
                },
                "id": null,
                "generator": false,
                "start": 873,
                "end": 898
              }
            ],
            "start": 870,
            "end": 900
          },
          "start": 854,
          "end": 900
        },
        "start": 850,
        "end": 900
      },
      "directive": null,
      "start": 850,
      "end": 900
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 901,
            "end": 902
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 903,
            "end": 918
          },
          "optional": false,
          "computed": false,
          "start": 901,
          "end": 918
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 919,
          "end": 920
        },
        "optional": false,
        "computed": false,
        "start": 901,
        "end": 920
      },
      "directive": null,
      "start": 901,
      "end": 921
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 922,
            "end": 923
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 924,
            "end": 939
          },
          "optional": false,
          "computed": false,
          "start": 922,
          "end": 939
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 940,
          "end": 941
        },
        "optional": false,
        "computed": false,
        "start": 922,
        "end": 941
      },
      "directive": null,
      "start": 922,
      "end": 942
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 943,
            "end": 944
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 945,
            "end": 960
          },
          "optional": false,
          "computed": false,
          "start": 943,
          "end": 960
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 961,
          "end": 962
        },
        "optional": false,
        "computed": false,
        "start": 943,
        "end": 962
      },
      "directive": null,
      "start": 943,
      "end": 963
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 963
}
```
