__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 32
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 46,
                          "end": 47
                        },
                        "init": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 50,
                          "end": 51
                        },
                        "definite": false,
                        "start": 46,
                        "end": 51
                      }
                    ],
                    "declare": false,
                    "start": 42,
                    "end": 52
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 35,
                  "end": 52
                }
              ],
              "start": 33,
              "end": 54
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 19,
            "end": 54
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 76
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 79,
                    "end": 90
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 91,
                        "end": 94
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 90,
                    "end": 96
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 79,
                  "end": 96
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 97,
                    "end": 100
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 104,
                        "end": 108
                      },
                      "start": 102,
                      "end": 108
                    },
                    "body": null,
                    "expression": false,
                    "start": 100,
                    "end": 110
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 97,
                  "end": 110
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 121
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 121,
                    "end": 124
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 111,
                  "end": 124
                }
              ],
              "start": 77,
              "end": 126
            },
            "abstract": false,
            "declare": true,
            "start": 59,
            "end": 126
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 135,
                  "end": 136
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 146
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 139,
                  "end": 148
                },
                "definite": false,
                "start": 135,
                "end": 148
              }
            ],
            "declare": false,
            "start": 131,
            "end": 149
          }
        ],
        "start": 13,
        "end": 160
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 160
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 172,
        "end": 174
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 198
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 201,
                    "end": 212
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 213,
                        "end": 216
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 212,
                    "end": 218
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 201,
                  "end": 218
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 222
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 226,
                        "end": 230
                      },
                      "start": 224,
                      "end": 230
                    },
                    "body": null,
                    "expression": false,
                    "start": 222,
                    "end": 231
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 219,
                  "end": 231
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 239,
                    "end": 242
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 242,
                    "end": 245
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 232,
                  "end": 245
                }
              ],
              "start": 199,
              "end": 247
            },
            "abstract": false,
            "declare": true,
            "start": 181,
            "end": 247
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 265
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 279,
                          "end": 280
                        },
                        "init": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 283,
                          "end": 284
                        },
                        "definite": false,
                        "start": 279,
                        "end": 284
                      }
                    ],
                    "declare": false,
                    "start": 275,
                    "end": 285
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 268,
                  "end": 285
                }
              ],
              "start": 266,
              "end": 287
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 252,
            "end": 287
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 296,
                  "end": 297
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 304,
                    "end": 307
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 300,
                  "end": 309
                },
                "definite": false,
                "start": 296,
                "end": 309
              }
            ],
            "declare": false,
            "start": 292,
            "end": 310
          }
        ],
        "start": 175,
        "end": 321
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 162,
      "end": 321
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 333,
        "end": 335
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 355
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 369,
                          "end": 370
                        },
                        "init": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 373,
                          "end": 374
                        },
                        "definite": false,
                        "start": 369,
                        "end": 374
                      }
                    ],
                    "declare": false,
                    "start": 365,
                    "end": 375
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 358,
                  "end": 375
                }
              ],
              "start": 356,
              "end": 377
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 342,
            "end": 377
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "typeAnnotation": null,
              "start": 396,
              "end": 399
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 402,
                    "end": 405
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 409,
                        "end": 413
                      },
                      "start": 407,
                      "end": 413
                    },
                    "body": null,
                    "expression": false,
                    "start": 405,
                    "end": 414
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 402,
                  "end": 414
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 422,
                    "end": 425
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 425,
                    "end": 428
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 415,
                  "end": 428
                }
              ],
              "start": 400,
              "end": 430
            },
            "abstract": false,
            "declare": true,
            "start": 382,
            "end": 430
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 439,
                  "end": 440
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 447,
                    "end": 450
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 443,
                  "end": 452
                },
                "definite": false,
                "start": 439,
                "end": 452
              }
            ],
            "declare": false,
            "start": 435,
            "end": 453
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 458,
                  "end": 459
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 460,
                  "end": 463
                },
                "optional": false,
                "computed": false,
                "start": 458,
                "end": 463
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 458,
              "end": 465
            },
            "directive": null,
            "start": 458,
            "end": 466
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 471,
                  "end": 472
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 473,
                  "end": 476
                },
                "optional": false,
                "computed": false,
                "start": 471,
                "end": 476
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 471,
              "end": 478
            },
            "directive": null,
            "start": 471,
            "end": 479
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 494
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 495,
                "end": 496
              },
              "optional": false,
              "computed": false,
              "start": 493,
              "end": 496
            },
            "directive": null,
            "start": 493,
            "end": 497
          }
        ],
        "start": 336,
        "end": 508
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 323,
      "end": 508
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 520,
        "end": 522
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "typeAnnotation": null,
              "start": 543,
              "end": 546
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 549,
                    "end": 552
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 556,
                        "end": 560
                      },
                      "start": 554,
                      "end": 560
                    },
                    "body": null,
                    "expression": false,
                    "start": 552,
                    "end": 561
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 549,
                  "end": 561
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 569,
                    "end": 572
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 572,
                    "end": 575
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 562,
                  "end": 575
                }
              ],
              "start": 547,
              "end": 577
            },
            "abstract": false,
            "declare": true,
            "start": 529,
            "end": 577
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "typeAnnotation": null,
              "start": 592,
              "end": 595
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 609,
                          "end": 610
                        },
                        "init": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 613,
                          "end": 614
                        },
                        "definite": false,
                        "start": 609,
                        "end": 614
                      }
                    ],
                    "declare": false,
                    "start": 605,
                    "end": 615
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 598,
                  "end": 615
                }
              ],
              "start": 596,
              "end": 617
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 582,
            "end": 617
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 626,
                  "end": 627
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 634,
                    "end": 637
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 630,
                  "end": 639
                },
                "definite": false,
                "start": 626,
                "end": 639
              }
            ],
            "declare": false,
            "start": 622,
            "end": 640
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 645,
                  "end": 646
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 647,
                  "end": 650
                },
                "optional": false,
                "computed": false,
                "start": 645,
                "end": 650
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 645,
              "end": 652
            },
            "directive": null,
            "start": 645,
            "end": 653
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 658,
                  "end": 659
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 660,
                  "end": 663
                },
                "optional": false,
                "computed": false,
                "start": 658,
                "end": 663
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 658,
              "end": 665
            },
            "directive": null,
            "start": 658,
            "end": 666
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null,
                "start": 680,
                "end": 681
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 682,
                "end": 683
              },
              "optional": false,
              "computed": false,
              "start": 680,
              "end": 683
            },
            "directive": null,
            "start": 680,
            "end": 684
          }
        ],
        "start": 523,
        "end": 695
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 510,
      "end": 695
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3d",
        "optional": false,
        "typeAnnotation": null,
        "start": 707,
        "end": 710
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 724,
                    "end": 725
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 728,
                    "end": 729
                  },
                  "definite": false,
                  "start": 724,
                  "end": 729
                }
              ],
              "declare": false,
              "start": 720,
              "end": 730
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 713,
            "end": 730
          }
        ],
        "start": 711,
        "end": 732
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 697,
      "end": 732
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3d",
        "optional": false,
        "typeAnnotation": null,
        "start": 747,
        "end": 750
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 753,
              "end": 764
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 765,
                  "end": 768
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 764,
              "end": 770
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 753,
            "end": 770
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 771,
              "end": 774
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 778,
                  "end": 782
                },
                "start": 776,
                "end": 782
              },
              "body": null,
              "expression": false,
              "start": 774,
              "end": 783
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 771,
            "end": 783
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 791,
              "end": 794
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 794,
              "end": 797
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 784,
            "end": 797
          }
        ],
        "start": 751,
        "end": 799
      },
      "abstract": false,
      "declare": true,
      "start": 733,
      "end": 799
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 804,
            "end": 805
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3d",
              "optional": false,
              "typeAnnotation": null,
              "start": 812,
              "end": 815
            },
            "typeArguments": null,
            "arguments": [],
            "start": 808,
            "end": 817
          },
          "definite": false,
          "start": 804,
          "end": 817
        }
      ],
      "declare": false,
      "start": 800,
      "end": 818
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4d",
        "optional": false,
        "typeAnnotation": null,
        "start": 843,
        "end": 846
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3d",
        "optional": false,
        "typeAnnotation": null,
        "start": 855,
        "end": 858
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 859,
        "end": 862
      },
      "abstract": false,
      "declare": true,
      "start": 829,
      "end": 862
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 867,
            "end": 869
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4d",
              "optional": false,
              "typeAnnotation": null,
              "start": 876,
              "end": 879
            },
            "typeArguments": null,
            "arguments": [],
            "start": 872,
            "end": 881
          },
          "definite": false,
          "start": 867,
          "end": 881
        }
      ],
      "declare": false,
      "start": 863,
      "end": 882
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 891
}
```
