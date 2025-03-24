__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 527,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 154,
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 154,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 80,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 26,
              "end": 80,
              "body": {
                "type": "TSModuleBlock",
                "start": 46,
                "end": 80,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 56,
                    "end": 74,
                    "attributes": [],
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 63,
                      "end": 74,
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "start": 71,
                        "end": 74,
                        "body": []
                      },
                      "declare": false,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 70,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "implements": [],
                      "superClass": null,
                      "superTypeArguments": null,
                      "typeParameters": null
                    },
                    "exportKind": "value",
                    "source": null,
                    "specifiers": []
                  }
                ]
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 45,
                "decorators": [],
                "name": "instantiated",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 85,
            "end": 152,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 92,
              "end": 152,
              "body": {
                "type": "TSModuleBlock",
                "start": 114,
                "end": 152,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 124,
                    "end": 146,
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 131,
                      "end": 146,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 143,
                        "end": 146,
                        "body": []
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "start": 141,
                        "end": 142,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": []
                  }
                ]
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 99,
                "end": 113,
                "decorators": [],
                "name": "uninstantiated",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "Outer",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 156,
      "end": 195,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 173,
        "decorators": [],
        "name": "importInst",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 176,
        "end": 194,
        "left": {
          "type": "Identifier",
          "start": 176,
          "end": 181,
          "decorators": [],
          "name": "Outer",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 182,
          "end": 194,
          "decorators": [],
          "name": "instantiated",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 196,
      "end": 239,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 215,
        "decorators": [],
        "name": "importUninst",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 218,
        "end": 238,
        "left": {
          "type": "Identifier",
          "start": 218,
          "end": 223,
          "decorators": [],
          "name": "Outer",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 224,
          "end": 238,
          "decorators": [],
          "name": "uninstantiated",
          "optional": false,
          "typeAnnotation": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 268,
            "decorators": [],
            "name": "x1",
            "optional": false,
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
                    "decorators": [],
                    "name": "importInst",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 267,
                    "end": 268,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 271,
            "end": 283,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 271,
              "end": 281,
              "decorators": [],
              "name": "importInst",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 282,
              "end": 283,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 305,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 291,
              "end": 305,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 293,
                "end": 305,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 293,
                  "end": 305,
                  "left": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 303,
                    "decorators": [],
                    "name": "importInst",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 305,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 308,
            "end": 316,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 312,
              "end": 314,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 347,
            "decorators": [],
            "name": "x3",
            "optional": false,
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
                    "decorators": [],
                    "name": "importUninst",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 346,
                    "end": 347,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 369,
            "end": 378,
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 371,
              "end": 378,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 373,
                "end": 378,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 373,
                  "end": 378,
                  "decorators": [],
                  "name": "Outer",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 381,
            "end": 386,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 392,
            "end": 413,
            "decorators": [],
            "name": "x5",
            "optional": false,
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
                  "decorators": [],
                  "name": "importInst",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 415,
      "end": 426,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 415,
        "end": 425,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 415,
          "end": 417,
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 420,
          "end": 425,
          "decorators": [],
          "name": "Outer",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 427,
      "end": 451,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 427,
        "end": 450,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 427,
          "end": 429,
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 432,
          "end": 450,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 432,
            "end": 437,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 438,
            "end": 450,
            "decorators": [],
            "name": "instantiated",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 456,
            "end": 479,
            "decorators": [],
            "name": "x6",
            "optional": false,
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
                  "decorators": [],
                  "name": "importUninst",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 485,
            "end": 501,
            "decorators": [],
            "name": "x7",
            "optional": false,
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
                  "decorators": [],
                  "name": "Outer",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 504,
            "end": 509,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 511,
      "end": 527,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 511,
        "end": 526,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 511,
          "end": 513,
          "decorators": [],
          "name": "x7",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 516,
          "end": 526,
          "decorators": [],
          "name": "importInst",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
