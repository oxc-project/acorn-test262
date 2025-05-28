__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 779,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 21,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 19,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 19,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 16,
              "end": 19,
              "literal": {
                "type": "Literal",
                "start": 16,
                "end": 19,
                "value": "a",
                "raw": "'a'"
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 22,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 34,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 35,
          "end": 44,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 44,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 38,
              "end": 44
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 46,
        "end": 49,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 119,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 119,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 77,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 68,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 68,
              "end": 77,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 69,
                  "end": 75,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 70,
                    "end": 75,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 72,
                      "end": 75,
                      "literal": {
                        "type": "Literal",
                        "start": 72,
                        "end": 75,
                        "value": "a",
                        "raw": "'a'"
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 82,
            "end": 97,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 85,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 85,
              "end": 97,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 86,
                  "end": 95,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 87,
                    "end": 95,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 89,
                      "end": 95
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 102,
            "end": 117,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 105,
              "end": 117,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 106,
                  "end": 112,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 112,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 109,
                      "end": 112
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 114,
                "end": 117,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 121,
      "end": 188,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 129,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 129,
        "end": 132,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 130,
            "end": 131,
            "name": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 133,
        "end": 188,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 139,
            "end": 151,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 142,
              "end": 151,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 143,
                  "end": 149,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 144,
                    "end": 149,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 146,
                      "end": 149,
                      "literal": {
                        "type": "Literal",
                        "start": 146,
                        "end": 149,
                        "value": "a",
                        "raw": "'a'"
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 156,
            "end": 166,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 159,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 159,
              "end": 166,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 160,
                  "end": 164,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 161,
                    "end": 164,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 163,
                      "end": 164,
                      "typeName": {
                        "type": "Identifier",
                        "start": 163,
                        "end": 164,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 171,
            "end": 186,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 174,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 174,
              "end": 186,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 175,
                  "end": 181,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 176,
                    "end": 181,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 178,
                      "end": 181
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 183,
                "end": 186,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 190,
      "end": 272,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 196,
        "end": 198,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 198,
        "end": 216,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 199,
            "end": 215,
            "name": {
              "type": "Identifier",
              "start": 199,
              "end": 200,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 209,
              "end": 215,
              "typeName": {
                "type": "Identifier",
                "start": 209,
                "end": 215,
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 217,
        "end": 272,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 223,
            "end": 235,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 223,
              "end": 226,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 226,
              "end": 235,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 227,
                  "end": 233,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 228,
                    "end": 233,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 230,
                      "end": 233,
                      "literal": {
                        "type": "Literal",
                        "start": 230,
                        "end": 233,
                        "value": "a",
                        "raw": "'a'"
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 240,
            "end": 250,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 240,
              "end": 243,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 243,
              "end": 250,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 244,
                  "end": 248,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 245,
                    "end": 248,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 247,
                      "end": 248,
                      "typeName": {
                        "type": "Identifier",
                        "start": 247,
                        "end": 248,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 255,
            "end": 270,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 255,
              "end": 258,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 258,
              "end": 270,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 259,
                  "end": 265,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 260,
                    "end": 265,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 262,
                      "end": 265
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 267,
                "end": 270,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 274,
      "end": 357,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 285,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 286,
        "end": 357,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 292,
            "end": 301,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 293,
                "end": 299,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 294,
                  "end": 299,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 296,
                    "end": 299,
                    "literal": {
                      "type": "Literal",
                      "start": 296,
                      "end": 299,
                      "value": "a",
                      "raw": "'a'"
                    }
                  }
                }
              }
            ],
            "returnType": null
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 306,
            "end": 318,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 307,
                "end": 316,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 308,
                  "end": 316,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 310,
                    "end": 316
                  }
                }
              }
            ],
            "returnType": null
          },
          {
            "type": "TSMethodSignature",
            "start": 323,
            "end": 335,
            "key": {
              "type": "Identifier",
              "start": 323,
              "end": 326,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 327,
                "end": 333,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 328,
                  "end": 333,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 330,
                    "end": 333,
                    "literal": {
                      "type": "Literal",
                      "start": 330,
                      "end": 333,
                      "value": "a",
                      "raw": "'a'"
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 340,
            "end": 355,
            "key": {
              "type": "Identifier",
              "start": 340,
              "end": 343,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 344,
                "end": 353,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 345,
                  "end": 353,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 347,
                    "end": 353
                  }
                }
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 359,
      "end": 436,
      "id": {
        "type": "Identifier",
        "start": 369,
        "end": 371,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 371,
        "end": 374,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 372,
            "end": 373,
            "name": {
              "type": "Identifier",
              "start": 372,
              "end": 373,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 375,
        "end": 436,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 381,
            "end": 390,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 382,
                "end": 388,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 383,
                  "end": 388,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 385,
                    "end": 388,
                    "literal": {
                      "type": "Literal",
                      "start": 385,
                      "end": 388,
                      "value": "a",
                      "raw": "'a'"
                    }
                  }
                }
              }
            ],
            "returnType": null
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 395,
            "end": 402,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 396,
                "end": 400,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 397,
                  "end": 400,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 399,
                    "end": 400,
                    "typeName": {
                      "type": "Identifier",
                      "start": 399,
                      "end": 400,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null
          },
          {
            "type": "TSMethodSignature",
            "start": 407,
            "end": 419,
            "key": {
              "type": "Identifier",
              "start": 407,
              "end": 410,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 411,
                "end": 417,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 412,
                  "end": 417,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 414,
                    "end": 417,
                    "literal": {
                      "type": "Literal",
                      "start": 414,
                      "end": 417,
                      "value": "a",
                      "raw": "'a'"
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 424,
            "end": 434,
            "key": {
              "type": "Identifier",
              "start": 424,
              "end": 427,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 428,
                "end": 432,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 429,
                  "end": 432,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 431,
                    "end": 432,
                    "typeName": {
                      "type": "Identifier",
                      "start": 431,
                      "end": 432,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 438,
      "end": 530,
      "id": {
        "type": "Identifier",
        "start": 448,
        "end": 450,
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 450,
        "end": 468,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 451,
            "end": 467,
            "name": {
              "type": "Identifier",
              "start": 451,
              "end": 452,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 461,
              "end": 467,
              "typeName": {
                "type": "Identifier",
                "start": 461,
                "end": 467,
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 469,
        "end": 530,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 475,
            "end": 484,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 476,
                "end": 482,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 477,
                  "end": 482,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 479,
                    "end": 482,
                    "literal": {
                      "type": "Literal",
                      "start": 479,
                      "end": 482,
                      "value": "a",
                      "raw": "'a'"
                    }
                  }
                }
              }
            ],
            "returnType": null
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 489,
            "end": 496,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 490,
                "end": 494,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 491,
                  "end": 494,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 493,
                    "end": 494,
                    "typeName": {
                      "type": "Identifier",
                      "start": 493,
                      "end": 494,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null
          },
          {
            "type": "TSMethodSignature",
            "start": 501,
            "end": 513,
            "key": {
              "type": "Identifier",
              "start": 501,
              "end": 504,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 505,
                "end": 511,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 506,
                  "end": 511,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 508,
                    "end": 511,
                    "literal": {
                      "type": "Literal",
                      "start": 508,
                      "end": 511,
                      "value": "a",
                      "raw": "'a'"
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 518,
            "end": 528,
            "key": {
              "type": "Identifier",
              "start": 518,
              "end": 521,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 522,
                "end": 526,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 523,
                  "end": 526,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 525,
                    "end": 526,
                    "typeName": {
                      "type": "Identifier",
                      "start": 525,
                      "end": 526,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 532,
      "end": 610,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 536,
          "end": 610,
          "id": {
            "type": "Identifier",
            "start": 536,
            "end": 610,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 537,
              "end": 610,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 539,
                "end": 610,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 545,
                    "end": 554,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 546,
                        "end": 552,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 547,
                          "end": 552,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 549,
                            "end": 552,
                            "literal": {
                              "type": "Literal",
                              "start": 549,
                              "end": 552,
                              "value": "a",
                              "raw": "'a'"
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 559,
                    "end": 571,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 560,
                        "end": 569,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 561,
                          "end": 569,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 563,
                            "end": 569
                          }
                        }
                      }
                    ],
                    "returnType": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 576,
                    "end": 588,
                    "key": {
                      "type": "Identifier",
                      "start": 576,
                      "end": 579,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 580,
                        "end": 586,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 581,
                          "end": 586,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 583,
                            "end": 586,
                            "literal": {
                              "type": "Literal",
                              "start": 583,
                              "end": 586,
                              "value": "a",
                              "raw": "'a'"
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 593,
                    "end": 608,
                    "key": {
                      "type": "Identifier",
                      "start": 593,
                      "end": 596,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 597,
                        "end": 606,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 598,
                          "end": 606,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 600,
                            "end": 606
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 612,
      "end": 687,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 616,
          "end": 687,
          "id": {
            "type": "Identifier",
            "start": 616,
            "end": 687,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 618,
              "end": 687,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 620,
                "end": 687,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 626,
                    "end": 635,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 627,
                        "end": 633,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 628,
                          "end": 633,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 630,
                            "end": 633,
                            "literal": {
                              "type": "Literal",
                              "start": 630,
                              "end": 633,
                              "value": "a",
                              "raw": "'a'"
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 640,
                    "end": 650,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 640,
                      "end": 643,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 641,
                          "end": 642,
                          "name": {
                            "type": "Identifier",
                            "start": 641,
                            "end": 642,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 644,
                        "end": 648,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 645,
                          "end": 648,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 647,
                            "end": 648,
                            "typeName": {
                              "type": "Identifier",
                              "start": 647,
                              "end": 648,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 655,
                    "end": 667,
                    "key": {
                      "type": "Identifier",
                      "start": 655,
                      "end": 658,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 659,
                        "end": 665,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 660,
                          "end": 665,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 662,
                            "end": 665,
                            "literal": {
                              "type": "Literal",
                              "start": 662,
                              "end": 665,
                              "value": "a",
                              "raw": "'a'"
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 672,
                    "end": 685,
                    "key": {
                      "type": "Identifier",
                      "start": 672,
                      "end": 675,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 675,
                      "end": 678,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 676,
                          "end": 677,
                          "name": {
                            "type": "Identifier",
                            "start": 676,
                            "end": 677,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 679,
                        "end": 683,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 680,
                          "end": 683,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 682,
                            "end": 683,
                            "typeName": {
                              "type": "Identifier",
                              "start": 682,
                              "end": 683,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 689,
      "end": 779,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 693,
          "end": 779,
          "id": {
            "type": "Identifier",
            "start": 693,
            "end": 779,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 695,
              "end": 779,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 697,
                "end": 779,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 703,
                    "end": 712,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 704,
                        "end": 710,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 705,
                          "end": 710,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 707,
                            "end": 710,
                            "literal": {
                              "type": "Literal",
                              "start": 707,
                              "end": 710,
                              "value": "a",
                              "raw": "'a'"
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 717,
                    "end": 727,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 717,
                      "end": 720,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 718,
                          "end": 719,
                          "name": {
                            "type": "Identifier",
                            "start": 718,
                            "end": 719,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 721,
                        "end": 725,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 722,
                          "end": 725,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 724,
                            "end": 725,
                            "typeName": {
                              "type": "Identifier",
                              "start": 724,
                              "end": 725,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 732,
                    "end": 744,
                    "key": {
                      "type": "Identifier",
                      "start": 732,
                      "end": 735,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 736,
                        "end": 742,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 737,
                          "end": 742,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 739,
                            "end": 742,
                            "literal": {
                              "type": "Literal",
                              "start": 739,
                              "end": 742,
                              "value": "a",
                              "raw": "'a'"
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 749,
                    "end": 777,
                    "key": {
                      "type": "Identifier",
                      "start": 749,
                      "end": 752,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 752,
                      "end": 770,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 753,
                          "end": 769,
                          "name": {
                            "type": "Identifier",
                            "start": 753,
                            "end": 754,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 763,
                            "end": 769,
                            "typeName": {
                              "type": "Identifier",
                              "start": 763,
                              "end": 769,
                              "decorators": [],
                              "name": "String",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 771,
                        "end": 775,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 772,
                          "end": 775,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 774,
                            "end": 775,
                            "typeName": {
                              "type": "Identifier",
                              "start": 774,
                              "end": 775,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
