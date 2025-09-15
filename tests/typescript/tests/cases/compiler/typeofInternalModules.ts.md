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
        "name": "Outer",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "instantiated",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 51
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
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
                        "start": 75,
                        "end": 76
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 77,
                        "end": 80
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 69,
                      "end": 80
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 62,
                    "end": 80
                  }
                ],
                "start": 52,
                "end": 86
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 29,
              "end": 86
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 22,
            "end": 86
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "uninstantiated",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 122
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 150,
                        "end": 151
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [],
                        "start": 152,
                        "end": 155
                      },
                      "declare": false,
                      "start": 140,
                      "end": 155
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 133,
                    "end": 155
                  }
                ],
                "start": 123,
                "end": 161
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 98,
              "end": 161
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 91,
            "end": 161
          }
        ],
        "start": 16,
        "end": 163
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 163
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "importInst",
        "optional": false,
        "typeAnnotation": null,
        "start": 172,
        "end": 182
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Outer",
          "optional": false,
          "typeAnnotation": null,
          "start": 185,
          "end": 190
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "instantiated",
          "optional": false,
          "typeAnnotation": null,
          "start": 191,
          "end": 203
        },
        "start": 185,
        "end": 203
      },
      "importKind": "value",
      "start": 165,
      "end": 204
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "importUninst",
        "optional": false,
        "typeAnnotation": null,
        "start": 212,
        "end": 224
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Outer",
          "optional": false,
          "typeAnnotation": null,
          "start": 227,
          "end": 232
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "uninstantiated",
          "optional": false,
          "typeAnnotation": null,
          "start": 233,
          "end": 247
        },
        "start": 227,
        "end": 247
      },
      "importKind": "value",
      "start": 205,
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "importInst",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 265,
                    "end": 275
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 276,
                    "end": 277
                  },
                  "start": 265,
                  "end": 277
                },
                "typeArguments": null,
                "start": 258,
                "end": 277
              },
              "start": 256,
              "end": 277
            },
            "start": 254,
            "end": 277
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "importInst",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 290
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 292
            },
            "optional": false,
            "computed": false,
            "start": 280,
            "end": 292
          },
          "definite": false,
          "start": 254,
          "end": 292
        }
      ],
      "declare": false,
      "start": 250,
      "end": 293
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "importInst",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 302,
                    "end": 312
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 313,
                    "end": 314
                  },
                  "start": 302,
                  "end": 314
                },
                "typeArguments": null,
                "start": 302,
                "end": 314
              },
              "start": 300,
              "end": 314
            },
            "start": 298,
            "end": 314
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 323
            },
            "typeArguments": null,
            "arguments": [],
            "start": 317,
            "end": 325
          },
          "definite": false,
          "start": 298,
          "end": 325
        }
      ],
      "declare": false,
      "start": 294,
      "end": 326
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "importUninst",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 342,
                    "end": 354
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 355,
                    "end": 356
                  },
                  "start": 342,
                  "end": 356
                },
                "typeArguments": null,
                "start": 335,
                "end": 356
              },
              "start": 333,
              "end": 356
            },
            "start": 331,
            "end": 356
          },
          "init": null,
          "definite": false,
          "start": 331,
          "end": 356
        }
      ],
      "declare": false,
      "start": 327,
      "end": 357
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
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Outer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 382,
                  "end": 387
                },
                "typeArguments": null,
                "start": 382,
                "end": 387
              },
              "start": 380,
              "end": 387
            },
            "start": 378,
            "end": 387
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null,
            "start": 390,
            "end": 395
          },
          "definite": false,
          "start": 378,
          "end": 395
        }
      ],
      "declare": false,
      "start": 374,
      "end": 396
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
            "name": "x5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "importInst",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 412,
                  "end": 422
                },
                "typeArguments": null,
                "start": 405,
                "end": 422
              },
              "start": 403,
              "end": 422
            },
            "start": 401,
            "end": 422
          },
          "init": null,
          "definite": false,
          "start": 401,
          "end": 422
        }
      ],
      "declare": false,
      "start": 397,
      "end": 423
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 424,
          "end": 426
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Outer",
          "optional": false,
          "typeAnnotation": null,
          "start": 429,
          "end": 434
        },
        "start": 424,
        "end": 434
      },
      "directive": null,
      "start": 424,
      "end": 435
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 436,
          "end": 438
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null,
            "start": 441,
            "end": 446
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "instantiated",
            "optional": false,
            "typeAnnotation": null,
            "start": 447,
            "end": 459
          },
          "optional": false,
          "computed": false,
          "start": 441,
          "end": 459
        },
        "start": 436,
        "end": 459
      },
      "directive": null,
      "start": 436,
      "end": 460
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
            "name": "x6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "importUninst",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 476,
                  "end": 488
                },
                "typeArguments": null,
                "start": 469,
                "end": 488
              },
              "start": 467,
              "end": 488
            },
            "start": 465,
            "end": 488
          },
          "init": null,
          "definite": false,
          "start": 465,
          "end": 488
        }
      ],
      "declare": false,
      "start": 461,
      "end": 489
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
            "name": "x7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Outer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 505,
                  "end": 510
                },
                "typeArguments": null,
                "start": 498,
                "end": 510
              },
              "start": 496,
              "end": 510
            },
            "start": 494,
            "end": 510
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null,
            "start": 513,
            "end": 518
          },
          "definite": false,
          "start": 494,
          "end": 518
        }
      ],
      "declare": false,
      "start": 490,
      "end": 519
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x7",
          "optional": false,
          "typeAnnotation": null,
          "start": 520,
          "end": 522
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "importInst",
          "optional": false,
          "typeAnnotation": null,
          "start": 525,
          "end": 535
        },
        "start": 520,
        "end": 535
      },
      "directive": null,
      "start": 520,
      "end": 536
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 536
}
```
