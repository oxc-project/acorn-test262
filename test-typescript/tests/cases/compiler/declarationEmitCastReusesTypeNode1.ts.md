__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 694,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 31,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "P",
        "optional": false,
        "typeAnnotation": null
      },
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 21,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 21,
                  "end": 29,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 23,
                    "end": 29
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 61,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 40,
        "end": 61,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 44,
            "end": 61,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 44,
              "end": 48,
              "decorators": [],
              "name": "vLet",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TSAsExpression",
              "start": 51,
              "end": 61,
              "expression": {
                "type": "TSNonNullExpression",
                "start": 51,
                "end": 56,
                "expression": {
                  "type": "Literal",
                  "start": 51,
                  "end": 55,
                  "raw": "null",
                  "value": null
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 60,
                "end": 61,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 62,
      "end": 94,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 69,
        "end": 94,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 75,
            "end": 94,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 75,
              "end": 81,
              "decorators": [],
              "name": "vConst",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TSAsExpression",
              "start": 84,
              "end": 94,
              "expression": {
                "type": "TSNonNullExpression",
                "start": 84,
                "end": 89,
                "expression": {
                  "type": "Literal",
                  "start": 84,
                  "end": 88,
                  "raw": "null",
                  "value": null
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 93,
                "end": 94,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 96,
      "end": 133,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 103,
        "end": 133,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 131,
          "end": 133,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 112,
          "end": 114,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 115,
            "end": 129,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "TSAsExpression",
              "start": 119,
              "end": 129,
              "expression": {
                "type": "TSNonNullExpression",
                "start": 119,
                "end": 124,
                "expression": {
                  "type": "Literal",
                  "start": 119,
                  "end": 123,
                  "raw": "null",
                  "value": null
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 128,
                "end": 129,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 129,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 135,
      "end": 209,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 142,
        "end": 209,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 207,
          "end": 209,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 151,
          "end": 177,
          "decorators": [],
          "name": "fnWithRequiredDefaultParam",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 178,
            "end": 192,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "TSAsExpression",
              "start": 182,
              "end": 192,
              "expression": {
                "type": "TSNonNullExpression",
                "start": 182,
                "end": 187,
                "expression": {
                  "type": "Literal",
                  "start": 182,
                  "end": 186,
                  "raw": "null",
                  "value": null
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 191,
                "end": 192,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 192,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 194,
            "end": 205,
            "decorators": [],
            "name": "req",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 205,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 199,
                "end": 205
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 211,
      "end": 511,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 218,
        "end": 511,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 226,
          "end": 511,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 232,
              "end": 251,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 232,
                "end": 237,
                "decorators": [],
                "name": "field",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "start": 240,
                "end": 250,
                "expression": {
                  "type": "TSNonNullExpression",
                  "start": 240,
                  "end": 245,
                  "expression": {
                    "type": "Literal",
                    "start": 240,
                    "end": 244,
                    "raw": "null",
                    "value": null
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 249,
                  "end": 250,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 249,
                    "end": 250,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 256,
              "end": 279,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 256,
                "end": 264,
                "decorators": [],
                "name": "optField",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "start": 268,
                "end": 278,
                "expression": {
                  "type": "TSNonNullExpression",
                  "start": 268,
                  "end": 273,
                  "expression": {
                    "type": "Literal",
                    "start": 268,
                    "end": 272,
                    "raw": "null",
                    "value": null
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 277,
                  "end": 278,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 277,
                    "end": 278,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 284,
              "end": 314,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 293,
                "end": 300,
                "decorators": [],
                "name": "roFiled",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "start": 303,
                "end": 313,
                "expression": {
                  "type": "TSNonNullExpression",
                  "start": 303,
                  "end": 308,
                  "expression": {
                    "type": "Literal",
                    "start": 303,
                    "end": 307,
                    "raw": "null",
                    "value": null
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 312,
                  "end": 313,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 312,
                    "end": 313,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 319,
              "end": 344,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 319,
                "end": 325,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 325,
                "end": 344,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 342,
                  "end": 344,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "start": 326,
                    "end": 340,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 326,
                      "end": 327,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "TSAsExpression",
                      "start": 330,
                      "end": 340,
                      "expression": {
                        "type": "TSNonNullExpression",
                        "start": 330,
                        "end": 335,
                        "expression": {
                          "type": "Literal",
                          "start": 330,
                          "end": 334,
                          "raw": "null",
                          "value": null
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 339,
                        "end": 340,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 339,
                          "end": 340,
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 349,
              "end": 406,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 349,
                "end": 374,
                "decorators": [],
                "name": "methodWithRequiredDefault",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 374,
                "end": 406,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 404,
                  "end": 406,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "start": 375,
                    "end": 389,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 375,
                      "end": 376,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "TSAsExpression",
                      "start": 379,
                      "end": 389,
                      "expression": {
                        "type": "TSNonNullExpression",
                        "start": 379,
                        "end": 384,
                        "expression": {
                          "type": "Literal",
                          "start": 379,
                          "end": 383,
                          "raw": "null",
                          "value": null
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 388,
                        "end": 389,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 388,
                          "end": 389,
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 391,
                    "end": 402,
                    "decorators": [],
                    "name": "req",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 394,
                      "end": 402,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 396,
                        "end": 402
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 412,
              "end": 457,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 412,
                "end": 423,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 423,
                "end": 457,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 455,
                  "end": 457,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 424,
                    "end": 453,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "AssignmentPattern",
                      "start": 431,
                      "end": 453,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 431,
                        "end": 440,
                        "decorators": [],
                        "name": "ctorField",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "right": {
                        "type": "TSAsExpression",
                        "start": 443,
                        "end": 453,
                        "expression": {
                          "type": "TSNonNullExpression",
                          "start": 443,
                          "end": 448,
                          "expression": {
                            "type": "Literal",
                            "start": 443,
                            "end": 447,
                            "raw": "null",
                            "value": null
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 452,
                          "end": 453,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 452,
                            "end": 453,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeAnnotation": null
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 463,
              "end": 492,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 467,
                "end": 468,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 468,
                "end": 492,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 471,
                  "end": 492,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 473,
                      "end": 490,
                      "argument": {
                        "type": "TSAsExpression",
                        "start": 480,
                        "end": 490,
                        "expression": {
                          "type": "TSNonNullExpression",
                          "start": 480,
                          "end": 485,
                          "expression": {
                            "type": "Literal",
                            "start": 480,
                            "end": 484,
                            "raw": "null",
                            "value": null
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 489,
                          "end": 490,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 489,
                            "end": 490,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ]
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
              "start": 497,
              "end": 509,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 501,
                "end": 502,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 502,
                "end": 509,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 506,
                  "end": 509,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 503,
                    "end": 504,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 224,
          "end": 225,
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
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 513,
      "end": 539,
      "declaration": {
        "type": "TSAsExpression",
        "start": 528,
        "end": 538,
        "expression": {
          "type": "TSNonNullExpression",
          "start": 528,
          "end": 533,
          "expression": {
            "type": "Literal",
            "start": 528,
            "end": 532,
            "raw": "null",
            "value": null
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 537,
          "end": 538,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 537,
            "end": 538,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 608,
      "end": 694,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 615,
        "end": 694,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 692,
          "end": 694,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 624,
          "end": 661,
          "decorators": [],
          "name": "fnWithPartialAnnotationOnDefaultparam",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 662,
            "end": 679,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 662,
              "end": 666,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 663,
                "end": 666,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 665,
                  "end": 666,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 665,
                    "end": 666,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "optional": false,
            "right": {
              "type": "TSAsExpression",
              "start": 669,
              "end": 679,
              "expression": {
                "type": "TSNonNullExpression",
                "start": 669,
                "end": 674,
                "expression": {
                  "type": "Literal",
                  "start": 669,
                  "end": 673,
                  "raw": "null",
                  "value": null
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 678,
                "end": 679,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 678,
                  "end": 679,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 681,
            "end": 690,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 682,
              "end": 690,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 684,
                "end": 690
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
