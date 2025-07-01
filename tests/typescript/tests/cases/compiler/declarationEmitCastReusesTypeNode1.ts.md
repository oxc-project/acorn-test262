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
        "name": "P",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 9,
            "end": 12
          },
          {
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 17,
                  "end": 21
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 23,
                    "end": 29
                  },
                  "start": 21,
                  "end": 29
                },
                "accessibility": null,
                "static": false,
                "start": 17,
                "end": 29
              }
            ],
            "start": 15,
            "end": 31
          }
        ],
        "start": 9,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 31
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
              "name": "vLet",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 48
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 51,
                  "end": 55
                },
                "start": 51,
                "end": 56
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 61
                },
                "typeArguments": null,
                "start": 60,
                "end": 61
              },
              "start": 51,
              "end": 61
            },
            "definite": false,
            "start": 44,
            "end": 61
          }
        ],
        "declare": false,
        "start": 40,
        "end": 61
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 33,
      "end": 61
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
              "name": "vConst",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 81
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 84,
                  "end": 88
                },
                "start": 84,
                "end": 89
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 94
                },
                "typeArguments": null,
                "start": 93,
                "end": 94
              },
              "start": 84,
              "end": 94
            },
            "definite": false,
            "start": 75,
            "end": 94
          }
        ],
        "declare": false,
        "start": 69,
        "end": 94
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 62,
      "end": 94
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 112,
          "end": 114
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 116
            },
            "right": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 119,
                  "end": 123
                },
                "start": 119,
                "end": 124
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 129
                },
                "typeArguments": null,
                "start": 128,
                "end": 129
              },
              "start": 119,
              "end": 129
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 129
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 131,
          "end": 133
        },
        "expression": false,
        "start": 103,
        "end": 133
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 96,
      "end": 133
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fnWithRequiredDefaultParam",
          "optional": false,
          "typeAnnotation": null,
          "start": 151,
          "end": 177
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 179
            },
            "right": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 182,
                  "end": 186
                },
                "start": 182,
                "end": 187
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 192
                },
                "typeArguments": null,
                "start": 191,
                "end": 192
              },
              "start": 182,
              "end": 192
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 178,
            "end": 192
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "req",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 199,
                "end": 205
              },
              "start": 197,
              "end": 205
            },
            "start": 194,
            "end": 205
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 207,
          "end": 209
        },
        "expression": false,
        "start": 142,
        "end": 209
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 135,
      "end": 209
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 224,
          "end": 225
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "field",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 237
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 240,
                    "end": 244
                  },
                  "start": 240,
                  "end": 245
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 249,
                    "end": 250
                  },
                  "typeArguments": null,
                  "start": 249,
                  "end": 250
                },
                "start": 240,
                "end": 250
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 232,
              "end": 251
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "optField",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 264
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 268,
                    "end": 272
                  },
                  "start": 268,
                  "end": 273
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 277,
                    "end": 278
                  },
                  "typeArguments": null,
                  "start": 277,
                  "end": 278
                },
                "start": 268,
                "end": 278
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": true,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 256,
              "end": 279
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "roFiled",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 300
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 303,
                    "end": 307
                  },
                  "start": 303,
                  "end": 308
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 312,
                    "end": 313
                  },
                  "typeArguments": null,
                  "start": 312,
                  "end": 313
                },
                "start": 303,
                "end": 313
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null,
              "start": 284,
              "end": 314
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 325
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
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 326,
                      "end": 327
                    },
                    "right": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 330,
                          "end": 334
                        },
                        "start": 330,
                        "end": 335
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 339,
                          "end": 340
                        },
                        "typeArguments": null,
                        "start": 339,
                        "end": 340
                      },
                      "start": 330,
                      "end": 340
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 326,
                    "end": 340
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 342,
                  "end": 344
                },
                "expression": false,
                "start": 325,
                "end": 344
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 319,
              "end": 344
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "methodWithRequiredDefault",
                "optional": false,
                "typeAnnotation": null,
                "start": 349,
                "end": 374
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
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 375,
                      "end": 376
                    },
                    "right": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 379,
                          "end": 383
                        },
                        "start": 379,
                        "end": 384
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 388,
                          "end": 389
                        },
                        "typeArguments": null,
                        "start": 388,
                        "end": 389
                      },
                      "start": 379,
                      "end": 389
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 375,
                    "end": 389
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "req",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 396,
                        "end": 402
                      },
                      "start": 394,
                      "end": 402
                    },
                    "start": 391,
                    "end": 402
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 404,
                  "end": 406
                },
                "expression": false,
                "start": 374,
                "end": 406
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 349,
              "end": 406
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 412,
                "end": 423
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
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ctorField",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 431,
                        "end": 440
                      },
                      "right": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "TSNonNullExpression",
                          "expression": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 443,
                            "end": 447
                          },
                          "start": 443,
                          "end": 448
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 452,
                            "end": 453
                          },
                          "typeArguments": null,
                          "start": 452,
                          "end": 453
                        },
                        "start": 443,
                        "end": 453
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 431,
                      "end": 453
                    },
                    "readonly": false,
                    "static": false,
                    "start": 424,
                    "end": 453
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 455,
                  "end": 457
                },
                "expression": false,
                "start": 423,
                "end": 457
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 412,
              "end": 457
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 467,
                "end": 468
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
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "TSNonNullExpression",
                          "expression": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 480,
                            "end": 484
                          },
                          "start": 480,
                          "end": 485
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 489,
                            "end": 490
                          },
                          "typeArguments": null,
                          "start": 489,
                          "end": 490
                        },
                        "start": 480,
                        "end": 490
                      },
                      "start": 473,
                      "end": 490
                    }
                  ],
                  "start": 471,
                  "end": 492
                },
                "expression": false,
                "start": 468,
                "end": 492
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 463,
              "end": 492
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 501,
                "end": 502
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
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 503,
                    "end": 504
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 506,
                  "end": 509
                },
                "expression": false,
                "start": 502,
                "end": 509
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 497,
              "end": 509
            }
          ],
          "start": 226,
          "end": 511
        },
        "abstract": false,
        "declare": false,
        "start": 218,
        "end": 511
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 211,
      "end": 511
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "TSAsExpression",
        "expression": {
          "type": "TSNonNullExpression",
          "expression": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 528,
            "end": 532
          },
          "start": 528,
          "end": 533
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 537,
            "end": 538
          },
          "typeArguments": null,
          "start": 537,
          "end": 538
        },
        "start": 528,
        "end": 538
      },
      "exportKind": "value",
      "start": 513,
      "end": 539
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fnWithPartialAnnotationOnDefaultparam",
          "optional": false,
          "typeAnnotation": null,
          "start": 624,
          "end": 661
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
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
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 665,
                    "end": 666
                  },
                  "typeArguments": null,
                  "start": 665,
                  "end": 666
                },
                "start": 663,
                "end": 666
              },
              "start": 662,
              "end": 666
            },
            "right": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 669,
                  "end": 673
                },
                "start": 669,
                "end": 674
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 678,
                  "end": 679
                },
                "typeArguments": null,
                "start": 678,
                "end": 679
              },
              "start": 669,
              "end": 679
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 662,
            "end": 679
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 684,
                "end": 690
              },
              "start": 682,
              "end": 690
            },
            "start": 681,
            "end": 690
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 692,
          "end": 694
        },
        "expression": false,
        "start": 615,
        "end": 694
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 608,
      "end": 694
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 694
}
```
