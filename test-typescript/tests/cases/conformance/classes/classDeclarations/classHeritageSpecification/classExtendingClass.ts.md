__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 416,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 67,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 67,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 26,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 42,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 36,
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 42,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 42,
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
            "start": 47,
            "end": 65,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 59,
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 59,
              "end": 65,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 65,
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
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
    {
      "type": "ClassDeclaration",
      "start": 69,
      "end": 107,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 87,
        "end": 107,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 93,
            "end": 105,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 96,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 104,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 98,
                "end": 104
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 76,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 85,
        "end": 86,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 117,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 117,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 117,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 116,
                "end": 117,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "start": 119,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 132,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 124,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 127,
            "end": 132,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 129,
              "end": 132,
              "decorators": [],
              "name": "foo",
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
      "start": 134,
      "end": 149,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 148,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 140,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 143,
            "end": 148,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 145,
              "end": 148,
              "decorators": [],
              "name": "bar",
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
      "start": 150,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 168,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 156,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 159,
            "end": 168,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 159,
              "end": 166,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 159,
                "end": 160,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 161,
                "end": 166,
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 170,
      "end": 189,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 188,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 176,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 179,
            "end": 188,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 179,
              "end": 186,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 179,
                "end": 180,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 181,
                "end": 186,
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 191,
      "end": 268,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 203,
        "end": 268,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 209,
            "end": 216,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 212,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 212,
              "end": 215,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 214,
                "end": 215,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 215,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 221,
            "end": 236,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 221,
              "end": 226,
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 226,
              "end": 236,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 233,
                "end": 236,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 227,
                  "end": 231,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 228,
                    "end": 231,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 230,
                      "end": 231,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 230,
                        "end": 231,
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
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 241,
            "end": 266,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 248,
              "end": 253,
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 253,
              "end": 266,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 263,
                "end": 266,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 257,
                  "end": 261,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 258,
                    "end": 261,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 260,
                      "end": 261,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 260,
                        "end": 261,
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
                "start": 253,
                "end": 256,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 254,
                    "end": 255,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 254,
                      "end": 255,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 199,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 199,
        "end": 202,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 200,
            "end": 201,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
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
    {
      "type": "ClassDeclaration",
      "start": 270,
      "end": 316,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 296,
        "end": 316,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 302,
            "end": 314,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 302,
              "end": 305,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 305,
              "end": 313,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 307,
                "end": 313
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 278,
        "decorators": [],
        "name": "D2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 290,
        "end": 292,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 292,
        "end": 295,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 293,
            "end": 294,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 293,
              "end": 294,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 278,
        "end": 281,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 279,
            "end": 280,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 279,
              "end": 280,
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
    {
      "type": "VariableDeclaration",
      "start": 318,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 336,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 336,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 324,
              "end": 336,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 326,
                "end": 336,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 328,
                  "end": 336,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 329,
                      "end": 335
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 328,
                  "decorators": [],
                  "name": "D2",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "start": 338,
      "end": 354,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 342,
          "end": 353,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 342,
            "end": 344,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 347,
            "end": 353,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 347,
              "end": 349,
              "decorators": [],
              "name": "d2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 350,
              "end": 353,
              "decorators": [],
              "name": "foo",
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
      "start": 355,
      "end": 371,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 370,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 361,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 364,
            "end": 370,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 364,
              "end": 366,
              "decorators": [],
              "name": "d2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 367,
              "end": 370,
              "decorators": [],
              "name": "bar",
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
      "start": 372,
      "end": 394,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 376,
          "end": 393,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 376,
            "end": 378,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 381,
            "end": 393,
            "arguments": [
              {
                "type": "Literal",
                "start": 390,
                "end": 392,
                "raw": "''",
                "value": "",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 381,
              "end": 389,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 381,
                "end": 383,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 384,
                "end": 389,
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 395,
      "end": 416,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 399,
          "end": 415,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 399,
            "end": 401,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 404,
            "end": 415,
            "arguments": [
              {
                "type": "Literal",
                "start": 413,
                "end": 414,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 404,
              "end": 412,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 404,
                "end": 406,
                "decorators": [],
                "name": "D2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 407,
                "end": 412,
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
