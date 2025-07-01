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
        "start": 7,
        "end": 12
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
                "start": 33,
                "end": 45
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
                        "start": 69,
                        "end": 70
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 71,
                        "end": 74
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 63,
                      "end": 74
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 56,
                    "end": 74
                  }
                ],
                "start": 46,
                "end": 80
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 26,
              "end": 80
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 80
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
                "start": 99,
                "end": 113
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
                        "start": 141,
                        "end": 142
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [],
                        "start": 143,
                        "end": 146
                      },
                      "declare": false,
                      "start": 131,
                      "end": 146
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 124,
                    "end": 146
                  }
                ],
                "start": 114,
                "end": 152
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 92,
              "end": 152
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 85,
            "end": 152
          }
        ],
        "start": 13,
        "end": 154
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 154
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "importInst",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 173
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Outer",
          "optional": false,
          "typeAnnotation": null,
          "start": 176,
          "end": 181
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "instantiated",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 194
        },
        "start": 176,
        "end": 194
      },
      "importKind": "value",
      "start": 156,
      "end": 195
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "importUninst",
        "optional": false,
        "typeAnnotation": null,
        "start": 203,
        "end": 215
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Outer",
          "optional": false,
          "typeAnnotation": null,
          "start": 218,
          "end": 223
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "uninstantiated",
          "optional": false,
          "typeAnnotation": null,
          "start": 224,
          "end": 238
        },
        "start": 218,
        "end": 238
      },
      "importKind": "value",
      "start": 196,
      "end": 239
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
                    "start": 256,
                    "end": 266
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 267,
                    "end": 268
                  },
                  "start": 256,
                  "end": 268
                },
                "typeArguments": null,
                "start": 249,
                "end": 268
              },
              "start": 247,
              "end": 268
            },
            "start": 245,
            "end": 268
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "importInst",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 281
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 283
            },
            "optional": false,
            "computed": false,
            "start": 271,
            "end": 283
          },
          "definite": false,
          "start": 245,
          "end": 283
        }
      ],
      "declare": false,
      "start": 241,
      "end": 284
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
                    "start": 293,
                    "end": 303
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 304,
                    "end": 305
                  },
                  "start": 293,
                  "end": 305
                },
                "typeArguments": null,
                "start": 293,
                "end": 305
              },
              "start": 291,
              "end": 305
            },
            "start": 289,
            "end": 305
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 314
            },
            "typeArguments": null,
            "arguments": [],
            "start": 308,
            "end": 316
          },
          "definite": false,
          "start": 289,
          "end": 316
        }
      ],
      "declare": false,
      "start": 285,
      "end": 317
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
                    "start": 333,
                    "end": 345
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 346,
                    "end": 347
                  },
                  "start": 333,
                  "end": 347
                },
                "typeArguments": null,
                "start": 326,
                "end": 347
              },
              "start": 324,
              "end": 347
            },
            "start": 322,
            "end": 347
          },
          "init": null,
          "definite": false,
          "start": 322,
          "end": 347
        }
      ],
      "declare": false,
      "start": 318,
      "end": 348
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
                  "start": 373,
                  "end": 378
                },
                "typeArguments": null,
                "start": 373,
                "end": 378
              },
              "start": 371,
              "end": 378
            },
            "start": 369,
            "end": 378
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null,
            "start": 381,
            "end": 386
          },
          "definite": false,
          "start": 369,
          "end": 386
        }
      ],
      "declare": false,
      "start": 365,
      "end": 387
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
                  "start": 403,
                  "end": 413
                },
                "typeArguments": null,
                "start": 396,
                "end": 413
              },
              "start": 394,
              "end": 413
            },
            "start": 392,
            "end": 413
          },
          "init": null,
          "definite": false,
          "start": 392,
          "end": 413
        }
      ],
      "declare": false,
      "start": 388,
      "end": 414
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
          "start": 415,
          "end": 417
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Outer",
          "optional": false,
          "typeAnnotation": null,
          "start": 420,
          "end": 425
        },
        "start": 415,
        "end": 425
      },
      "directive": null,
      "start": 415,
      "end": 426
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
          "start": 427,
          "end": 429
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null,
            "start": 432,
            "end": 437
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "instantiated",
            "optional": false,
            "typeAnnotation": null,
            "start": 438,
            "end": 450
          },
          "optional": false,
          "computed": false,
          "start": 432,
          "end": 450
        },
        "start": 427,
        "end": 450
      },
      "directive": null,
      "start": 427,
      "end": 451
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
                  "start": 467,
                  "end": 479
                },
                "typeArguments": null,
                "start": 460,
                "end": 479
              },
              "start": 458,
              "end": 479
            },
            "start": 456,
            "end": 479
          },
          "init": null,
          "definite": false,
          "start": 456,
          "end": 479
        }
      ],
      "declare": false,
      "start": 452,
      "end": 480
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
                  "start": 496,
                  "end": 501
                },
                "typeArguments": null,
                "start": 489,
                "end": 501
              },
              "start": 487,
              "end": 501
            },
            "start": 485,
            "end": 501
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null,
            "start": 504,
            "end": 509
          },
          "definite": false,
          "start": 485,
          "end": 509
        }
      ],
      "declare": false,
      "start": 481,
      "end": 510
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
          "start": 511,
          "end": 513
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "importInst",
          "optional": false,
          "typeAnnotation": null,
          "start": 516,
          "end": 526
        },
        "start": 511,
        "end": 526
      },
      "directive": null,
      "start": 511,
      "end": 527
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 527
}
```
