__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 528,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "Outer",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 154,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 80,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 26,
              "end": 80,
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 45,
                "name": "instantiated",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 46,
                "end": 80,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 56,
                    "end": 74,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 63,
                      "end": 74,
                      "id": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 70,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 71,
                        "end": 74,
                        "body": []
                      },
                      "decorators": [],
                      "typeParameters": null,
                      "implements": [],
                      "abstract": false,
                      "declare": false,
                      "superTypeArguments": null
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 85,
            "end": 152,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 92,
              "end": 152,
              "id": {
                "type": "Identifier",
                "start": 99,
                "end": 113,
                "name": "uninstantiated",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 114,
                "end": 152,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 124,
                    "end": 146,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 131,
                      "end": 146,
                      "id": {
                        "type": "Identifier",
                        "start": 141,
                        "end": 142,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": null,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 143,
                        "end": 146,
                        "body": []
                      },
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "type"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 156,
      "end": 195,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 173,
        "name": "importInst",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 176,
        "end": 194,
        "left": {
          "type": "Identifier",
          "start": 176,
          "end": 181,
          "name": "Outer",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 182,
          "end": 194,
          "name": "instantiated",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 196,
      "end": 239,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 215,
        "name": "importUninst",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 218,
        "end": 238,
        "left": {
          "type": "Identifier",
          "start": 218,
          "end": 223,
          "name": "Outer",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 224,
          "end": 238,
          "name": "uninstantiated",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 284,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 283,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 268,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 247,
              "end": 268,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 249,
                "end": 268,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 256,
                  "end": 268,
                  "left": {
                    "type": "Identifier",
                    "start": 256,
                    "end": 266,
                    "name": "importInst",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 267,
                    "end": 268,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 271,
            "end": 283,
            "object": {
              "type": "Identifier",
              "start": 271,
              "end": 281,
              "name": "importInst",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 282,
              "end": 283,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 285,
      "end": 317,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 289,
          "end": 316,
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 305,
            "name": "x2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 291,
              "end": 305,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 293,
                "end": 305,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 293,
                  "end": 305,
                  "left": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 303,
                    "name": "importInst",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 305,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 308,
            "end": 316,
            "callee": {
              "type": "Identifier",
              "start": 312,
              "end": 314,
              "name": "x1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 318,
      "end": 348,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 347,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 347,
            "name": "x3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 324,
              "end": 347,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 326,
                "end": 347,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 333,
                  "end": 347,
                  "left": {
                    "type": "Identifier",
                    "start": 333,
                    "end": 345,
                    "name": "importUninst",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 346,
                    "end": 347,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 365,
      "end": 387,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 369,
          "end": 386,
          "id": {
            "type": "Identifier",
            "start": 369,
            "end": 378,
            "name": "x4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 371,
              "end": 378,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 373,
                "end": 378,
                "typeName": {
                  "type": "Identifier",
                  "start": 373,
                  "end": 378,
                  "name": "Outer",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 381,
            "end": 386,
            "name": "Outer",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 388,
      "end": 414,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 392,
          "end": 413,
          "id": {
            "type": "Identifier",
            "start": 392,
            "end": 413,
            "name": "x5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 394,
              "end": 413,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 396,
                "end": 413,
                "exprName": {
                  "type": "Identifier",
                  "start": 403,
                  "end": 413,
                  "name": "importInst",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 415,
      "end": 426,
      "expression": {
        "type": "AssignmentExpression",
        "start": 415,
        "end": 425,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 415,
          "end": 417,
          "name": "x5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 420,
          "end": 425,
          "name": "Outer",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 427,
      "end": 451,
      "expression": {
        "type": "AssignmentExpression",
        "start": 427,
        "end": 450,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 427,
          "end": 429,
          "name": "x5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 432,
          "end": 450,
          "object": {
            "type": "Identifier",
            "start": 432,
            "end": 437,
            "name": "Outer",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 438,
            "end": 450,
            "name": "instantiated",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 452,
      "end": 480,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 456,
          "end": 479,
          "id": {
            "type": "Identifier",
            "start": 456,
            "end": 479,
            "name": "x6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 458,
              "end": 479,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 460,
                "end": 479,
                "exprName": {
                  "type": "Identifier",
                  "start": 467,
                  "end": 479,
                  "name": "importUninst",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 481,
      "end": 510,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 485,
          "end": 509,
          "id": {
            "type": "Identifier",
            "start": 485,
            "end": 501,
            "name": "x7",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 487,
              "end": 501,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 489,
                "end": 501,
                "exprName": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 501,
                  "name": "Outer",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 504,
            "end": 509,
            "name": "Outer",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 511,
      "end": 527,
      "expression": {
        "type": "AssignmentExpression",
        "start": 511,
        "end": 526,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 511,
          "end": 513,
          "name": "x7",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 516,
          "end": 526,
          "name": "importInst",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
