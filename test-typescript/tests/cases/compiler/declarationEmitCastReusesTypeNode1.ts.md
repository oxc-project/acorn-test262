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
      "end": 61,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 40,
        "end": 61,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 44,
            "end": 61,
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
                  "value": null,
                  "raw": "null"
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 60,
                "end": 61,
                "typeName": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
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
      "start": 62,
      "end": 94,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 69,
        "end": 94,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 75,
            "end": 94,
            "id": {
              "type": "Identifier",
              "start": 75,
              "end": 81,
              "name": "vConst",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "value": null,
                  "raw": "null"
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 93,
                "end": 94,
                "typeName": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
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
      "start": 96,
      "end": 133,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 103,
        "end": 133,
        "id": {
          "type": "Identifier",
          "start": 112,
          "end": 114,
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
            "start": 115,
            "end": 129,
            "left": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": null,
                  "raw": "null"
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 128,
                "end": 129,
                "typeName": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 129,
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
          "start": 131,
          "end": 133,
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
      "start": 135,
      "end": 209,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 142,
        "end": 209,
        "id": {
          "type": "Identifier",
          "start": 151,
          "end": 177,
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
            "start": 178,
            "end": 192,
            "left": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": null,
                  "raw": "null"
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 191,
                "end": 192,
                "typeName": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 192,
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
            "start": 194,
            "end": 205,
            "name": "req",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 205,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 199,
                "end": 205
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 207,
          "end": 209,
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
      "start": 211,
      "end": 511,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 218,
        "end": 511,
        "id": {
          "type": "Identifier",
          "start": 224,
          "end": 225,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 226,
          "end": 511,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 232,
              "end": 251,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 232,
                "end": 237,
                "name": "field",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                    "value": null,
                    "raw": "null"
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 249,
                  "end": 250,
                  "typeName": {
                    "type": "Identifier",
                    "start": 249,
                    "end": 250,
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
              "start": 256,
              "end": 279,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 256,
                "end": 264,
                "name": "optField",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                    "value": null,
                    "raw": "null"
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 277,
                  "end": 278,
                  "typeName": {
                    "type": "Identifier",
                    "start": 277,
                    "end": 278,
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
              "start": 284,
              "end": 314,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 293,
                "end": 300,
                "name": "roFiled",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                    "value": null,
                    "raw": "null"
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 312,
                  "end": 313,
                  "typeName": {
                    "type": "Identifier",
                    "start": 312,
                    "end": 313,
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
              "start": 319,
              "end": 344,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 319,
                "end": 325,
                "name": "method",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 325,
                "end": 344,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "start": 326,
                    "end": 340,
                    "left": {
                      "type": "Identifier",
                      "start": 326,
                      "end": 327,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                          "value": null,
                          "raw": "null"
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 339,
                        "end": 340,
                        "typeName": {
                          "type": "Identifier",
                          "start": 339,
                          "end": 340,
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
                  "start": 342,
                  "end": 344,
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
              "start": 349,
              "end": 406,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 349,
                "end": 374,
                "name": "methodWithRequiredDefault",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 374,
                "end": 406,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "start": 375,
                    "end": 389,
                    "left": {
                      "type": "Identifier",
                      "start": 375,
                      "end": 376,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                          "value": null,
                          "raw": "null"
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 388,
                        "end": 389,
                        "typeName": {
                          "type": "Identifier",
                          "start": 388,
                          "end": 389,
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
                    "start": 391,
                    "end": 402,
                    "name": "req",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 394,
                      "end": 402,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 396,
                        "end": 402
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 404,
                  "end": 406,
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
              "start": 412,
              "end": 457,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 412,
                "end": 423,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 423,
                "end": 457,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
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
                      "left": {
                        "type": "Identifier",
                        "start": 431,
                        "end": 440,
                        "name": "ctorField",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                            "value": null,
                            "raw": "null"
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 452,
                          "end": 453,
                          "typeName": {
                            "type": "Identifier",
                            "start": 452,
                            "end": 453,
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
                  "start": 455,
                  "end": 457,
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
              "start": 463,
              "end": 492,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 467,
                "end": 468,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 468,
                "end": 492,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                            "value": null,
                            "raw": "null"
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 489,
                          "end": 490,
                          "typeName": {
                            "type": "Identifier",
                            "start": 489,
                            "end": 490,
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
              "start": 497,
              "end": 509,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 501,
                "end": 502,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 502,
                "end": 509,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 503,
                    "end": 504,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 506,
                  "end": 509,
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
            "value": null,
            "raw": "null"
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 537,
          "end": 538,
          "typeName": {
            "type": "Identifier",
            "start": 537,
            "end": 538,
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
      "start": 608,
      "end": 694,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 615,
        "end": 694,
        "id": {
          "type": "Identifier",
          "start": 624,
          "end": 661,
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
            "start": 662,
            "end": 679,
            "left": {
              "type": "Identifier",
              "start": 662,
              "end": 666,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 663,
                "end": 666,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 665,
                  "end": 666,
                  "typeName": {
                    "type": "Identifier",
                    "start": 665,
                    "end": 666,
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
                  "value": null,
                  "raw": "null"
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 678,
                "end": 679,
                "typeName": {
                  "type": "Identifier",
                  "start": 678,
                  "end": 679,
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
            "start": 681,
            "end": 690,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 682,
              "end": 690,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 684,
                "end": 690
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 692,
          "end": 694,
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
