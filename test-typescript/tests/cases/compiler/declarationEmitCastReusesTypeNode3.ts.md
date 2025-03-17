__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 666,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "P",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 9,
        "end": 31,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 9,
            "end": 12,
            "members": []
          },
          {
            "type": "TSTypeLiteral",
            "start": 15,
            "end": 31,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 17,
                "end": 29,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 21,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 21,
                  "end": 29,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 23,
                    "end": 29
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 59,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 40,
        "end": 59,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 44,
            "end": 59,
            "id": {
              "type": "Identifier",
              "start": 44,
              "end": 48,
              "name": "vLet",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "TSTypeAssertion",
              "start": 51,
              "end": 59,
              "expression": {
                "type": "TSNonNullExpression",
                "start": 54,
                "end": 59,
                "expression": {
                  "type": "Literal",
                  "start": 54,
                  "end": 58,
                  "value": null,
                  "raw": "null"
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 52,
                "end": 53,
                "typeName": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 53,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 60,
      "end": 90,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 67,
        "end": 90,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 73,
            "end": 90,
            "id": {
              "type": "Identifier",
              "start": 73,
              "end": 79,
              "name": "vConst",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "TSTypeAssertion",
              "start": 82,
              "end": 90,
              "expression": {
                "type": "TSNonNullExpression",
                "start": 85,
                "end": 90,
                "expression": {
                  "type": "Literal",
                  "start": 85,
                  "end": 89,
                  "value": null,
                  "raw": "null"
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 83,
                "end": 84,
                "typeName": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 92,
      "end": 127,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 99,
        "end": 127,
        "id": {
          "type": "Identifier",
          "start": 108,
          "end": 110,
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 111,
            "end": 123,
            "left": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "TSTypeAssertion",
              "start": 115,
              "end": 123,
              "expression": {
                "type": "TSNonNullExpression",
                "start": 118,
                "end": 123,
                "expression": {
                  "type": "Literal",
                  "start": 118,
                  "end": 122,
                  "value": null,
                  "raw": "null"
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 116,
                "end": 117,
                "typeName": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 125,
          "end": 127,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 129,
      "end": 201,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 136,
        "end": 201,
        "id": {
          "type": "Identifier",
          "start": 145,
          "end": 171,
          "name": "fnWithRequiredDefaultParam",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 172,
            "end": 184,
            "left": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "TSTypeAssertion",
              "start": 176,
              "end": 184,
              "expression": {
                "type": "TSNonNullExpression",
                "start": 179,
                "end": 184,
                "expression": {
                  "type": "Literal",
                  "start": 179,
                  "end": 183,
                  "value": null,
                  "raw": "null"
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 177,
                "end": 178,
                "typeName": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 178,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 186,
            "end": 197,
            "name": "req",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 197,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 191,
                "end": 197
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 199,
          "end": 201,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 203,
      "end": 487,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 210,
        "end": 487,
        "id": {
          "type": "Identifier",
          "start": 216,
          "end": 217,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 218,
          "end": 487,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 224,
              "end": 240,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 224,
                "end": 229,
                "name": "field",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "TSTypeAssertion",
                "start": 232,
                "end": 240,
                "expression": {
                  "type": "TSNonNullExpression",
                  "start": 235,
                  "end": 240,
                  "expression": {
                    "type": "Literal",
                    "start": 235,
                    "end": 239,
                    "value": null,
                    "raw": "null"
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 233,
                  "end": 234,
                  "typeName": {
                    "type": "Identifier",
                    "start": 233,
                    "end": 234,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 245,
              "end": 265,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 245,
                "end": 253,
                "name": "optField",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "TSTypeAssertion",
                "start": 257,
                "end": 265,
                "expression": {
                  "type": "TSNonNullExpression",
                  "start": 260,
                  "end": 265,
                  "expression": {
                    "type": "Literal",
                    "start": 260,
                    "end": 264,
                    "value": null,
                    "raw": "null"
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 258,
                  "end": 259,
                  "typeName": {
                    "type": "Identifier",
                    "start": 258,
                    "end": 259,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": true,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 270,
              "end": 298,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 279,
                "end": 286,
                "name": "roFiled",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "TSTypeAssertion",
                "start": 289,
                "end": 297,
                "expression": {
                  "type": "TSNonNullExpression",
                  "start": 292,
                  "end": 297,
                  "expression": {
                    "type": "Literal",
                    "start": 292,
                    "end": 296,
                    "value": null,
                    "raw": "null"
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 290,
                  "end": 291,
                  "typeName": {
                    "type": "Identifier",
                    "start": 290,
                    "end": 291,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 303,
              "end": 326,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 303,
                "end": 309,
                "name": "method",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 309,
                "end": 326,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "start": 310,
                    "end": 322,
                    "left": {
                      "type": "Identifier",
                      "start": 310,
                      "end": 311,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "TSTypeAssertion",
                      "start": 314,
                      "end": 322,
                      "expression": {
                        "type": "TSNonNullExpression",
                        "start": 317,
                        "end": 322,
                        "expression": {
                          "type": "Literal",
                          "start": 317,
                          "end": 321,
                          "value": null,
                          "raw": "null"
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 315,
                        "end": 316,
                        "typeName": {
                          "type": "Identifier",
                          "start": 315,
                          "end": 316,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 324,
                  "end": 326,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 331,
              "end": 386,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 331,
                "end": 356,
                "name": "methodWithRequiredDefault",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 356,
                "end": 386,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "start": 357,
                    "end": 369,
                    "left": {
                      "type": "Identifier",
                      "start": 357,
                      "end": 358,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "TSTypeAssertion",
                      "start": 361,
                      "end": 369,
                      "expression": {
                        "type": "TSNonNullExpression",
                        "start": 364,
                        "end": 369,
                        "expression": {
                          "type": "Literal",
                          "start": 364,
                          "end": 368,
                          "value": null,
                          "raw": "null"
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 362,
                        "end": 363,
                        "typeName": {
                          "type": "Identifier",
                          "start": 362,
                          "end": 363,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 371,
                    "end": 382,
                    "name": "req",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 374,
                      "end": 382,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 376,
                        "end": 382
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 384,
                  "end": 386,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 392,
              "end": 435,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 392,
                "end": 403,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 403,
                "end": 435,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 404,
                    "end": 431,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "AssignmentPattern",
                      "start": 411,
                      "end": 431,
                      "left": {
                        "type": "Identifier",
                        "start": 411,
                        "end": 420,
                        "name": "ctorField",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "TSTypeAssertion",
                        "start": 423,
                        "end": 431,
                        "expression": {
                          "type": "TSNonNullExpression",
                          "start": 426,
                          "end": 431,
                          "expression": {
                            "type": "Literal",
                            "start": 426,
                            "end": 430,
                            "value": null,
                            "raw": "null"
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 424,
                          "end": 425,
                          "typeName": {
                            "type": "Identifier",
                            "start": 424,
                            "end": 425,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 433,
                  "end": 435,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 441,
              "end": 468,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 445,
                "end": 446,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 446,
                "end": 468,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 449,
                  "end": 468,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 451,
                      "end": 466,
                      "argument": {
                        "type": "TSTypeAssertion",
                        "start": 458,
                        "end": 466,
                        "expression": {
                          "type": "TSNonNullExpression",
                          "start": 461,
                          "end": 466,
                          "expression": {
                            "type": "Literal",
                            "start": 461,
                            "end": 465,
                            "value": null,
                            "raw": "null"
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 459,
                          "end": 460,
                          "typeName": {
                            "type": "Identifier",
                            "start": 459,
                            "end": 460,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 473,
              "end": 485,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 477,
                "end": 478,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 478,
                "end": 485,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 479,
                    "end": 480,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 482,
                  "end": 485,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
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
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 489,
      "end": 513,
      "declaration": {
        "type": "TSTypeAssertion",
        "start": 504,
        "end": 512,
        "expression": {
          "type": "TSNonNullExpression",
          "start": 507,
          "end": 512,
          "expression": {
            "type": "Literal",
            "start": 507,
            "end": 511,
            "value": null,
            "raw": "null"
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 505,
          "end": 506,
          "typeName": {
            "type": "Identifier",
            "start": 505,
            "end": 506,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 582,
      "end": 666,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 589,
        "end": 666,
        "id": {
          "type": "Identifier",
          "start": 598,
          "end": 635,
          "name": "fnWithPartialAnnotationOnDefaultparam",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 636,
            "end": 651,
            "left": {
              "type": "Identifier",
              "start": 636,
              "end": 640,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 637,
                "end": 640,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 639,
                  "end": 640,
                  "typeName": {
                    "type": "Identifier",
                    "start": 639,
                    "end": 640,
                    "name": "P",
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
            "right": {
              "type": "TSTypeAssertion",
              "start": 643,
              "end": 651,
              "expression": {
                "type": "TSNonNullExpression",
                "start": 646,
                "end": 651,
                "expression": {
                  "type": "Literal",
                  "start": 646,
                  "end": 650,
                  "value": null,
                  "raw": "null"
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 644,
                "end": 645,
                "typeName": {
                  "type": "Identifier",
                  "start": 644,
                  "end": 645,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 653,
            "end": 662,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 654,
              "end": 662,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 656,
                "end": 662
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 664,
          "end": 666,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
