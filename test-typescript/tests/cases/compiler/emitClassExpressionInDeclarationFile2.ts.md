__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 600,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 119,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 119,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 119,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 21,
              "decorators": [],
              "name": "noPrivates",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ClassExpression",
              "start": 24,
              "end": 119,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 30,
                "end": 119,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 36,
                    "end": 56,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 50,
                      "decorators": [],
                      "name": "getTags",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 50,
                      "end": 56,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 53,
                        "end": 56,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 61,
                    "end": 71,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 65,
                      "decorators": [],
                      "name": "tags",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 65,
                      "end": 71,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 68,
                        "end": 71,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 76,
                    "end": 98,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 91,
                      "end": 93,
                      "decorators": [],
                      "name": "ps",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "typeAnnotation": null,
                    "value": {
                      "type": "UnaryExpression",
                      "start": 96,
                      "end": 98,
                      "argument": {
                        "type": "Literal",
                        "start": 97,
                        "end": 98,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      },
                      "operator": "-",
                      "prefix": true
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 103,
                    "end": 117,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 112,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "start": 115,
                      "end": 117,
                      "raw": "12",
                      "value": 12,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 174,
      "end": 273,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 181,
        "end": 273,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 195,
          "end": 273,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 201,
              "end": 216,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 201,
                "end": 204,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 204,
                "end": 216,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 213,
                  "end": 216,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 206,
                  "end": 212,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 208,
                    "end": 212
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 221,
              "end": 235,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 221,
                "end": 225,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 226,
                "end": 234,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 228,
                  "end": 234
                }
              },
              "value": null
            },
            {
              "type": "PropertyDefinition",
              "start": 240,
              "end": 271,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 248,
                "end": 256,
                "decorators": [],
                "name": "property",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 259,
                "end": 271,
                "raw": "\"capitalism\"",
                "value": "capitalism",
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 187,
          "end": 194,
          "decorators": [],
          "name": "FooItem",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 275,
      "end": 329,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 282,
        "end": 329,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 287,
          "end": 298,
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "start": 304,
          "end": 328,
          "abstract": false,
          "params": [
            {
              "type": "RestElement",
              "start": 308,
              "end": 322,
              "argument": {
                "type": "Identifier",
                "start": 311,
                "end": 315,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 315,
                "end": 322,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 317,
                  "end": 322,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 317,
                    "end": 320
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 324,
            "end": 328,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 327,
              "end": 328,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 327,
                "end": 328,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 298,
          "end": 301,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 299,
              "end": 300,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 299,
                "end": 300,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 330,
      "end": 497,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 337,
        "end": 497,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 396,
          "end": 497,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 402,
              "end": 495,
              "argument": {
                "type": "ClassExpression",
                "start": 409,
                "end": 495,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 428,
                  "end": 495,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 438,
                      "end": 464,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 445,
                        "end": 452,
                        "decorators": [],
                        "name": "getTags",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "override": false,
                      "static": true,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 452,
                        "end": 464,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 461,
                          "end": 464,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 454,
                          "end": 460,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 456,
                            "end": 460
                          }
                        },
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 473,
                      "end": 489,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 473,
                        "end": 477,
                        "decorators": [],
                        "name": "tags",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 477,
                        "end": 489,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 486,
                          "end": 489,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 479,
                          "end": 485,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 481,
                            "end": 485
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  ]
                },
                "declare": false,
                "decorators": [],
                "id": null,
                "implements": [],
                "superClass": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 427,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 346,
          "end": 354,
          "decorators": [],
          "name": "WithTags",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 387,
            "end": 394,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 391,
              "end": 394,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 393,
                "end": 394,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 393,
                  "end": 394,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 354,
          "end": 386,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 355,
              "end": 385,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 365,
                "end": 385,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 376,
                  "end": 385,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 377,
                      "end": 384,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 377,
                        "end": 384,
                        "decorators": [],
                        "name": "FooItem",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 365,
                  "end": 376,
                  "decorators": [],
                  "name": "Constructor",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 355,
                "end": 356,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 499,
      "end": 545,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 506,
        "end": 545,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 543,
          "end": 545,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 512,
          "end": 516,
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "CallExpression",
          "start": 525,
          "end": 542,
          "arguments": [
            {
              "type": "Identifier",
              "start": 534,
              "end": 541,
              "decorators": [],
              "name": "FooItem",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 525,
            "end": 533,
            "decorators": [],
            "name": "WithTags",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 547,
      "end": 571,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 553,
          "end": 570,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 553,
            "end": 557,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 560,
            "end": 570,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 564,
              "end": 568,
              "decorators": [],
              "name": "Test",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 573,
      "end": 587,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 573,
        "end": 587,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 573,
          "end": 585,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 573,
            "end": 577,
            "decorators": [],
            "name": "Test",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 578,
            "end": 585,
            "decorators": [],
            "name": "getTags",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 588,
      "end": 600,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 588,
        "end": 599,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 588,
          "end": 597,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 588,
            "end": 592,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 593,
            "end": 597,
            "decorators": [],
            "name": "tags",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
