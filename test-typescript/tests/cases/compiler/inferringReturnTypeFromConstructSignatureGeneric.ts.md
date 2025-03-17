__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 533,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 19,
        "name": "GenericObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 83,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 43,
            "end": 81,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 47,
              "name": "give",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 47,
              "end": 81,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 48,
                  "end": 56,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 53,
                    "end": 56,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 55,
                      "end": 56,
                      "typeName": {
                        "type": "Identifier",
                        "start": 55,
                        "end": 56,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 58,
                "end": 81,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 64,
                    "end": 77,
                    "argument": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 76,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 38,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 37,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 30,
              "end": 32,
              "members": []
            },
            "default": {
              "type": "TSTypeLiteral",
              "start": 35,
              "end": 37,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 84,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 103,
        "name": "GenericNumber",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 122,
        "end": 166,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 126,
            "end": 164,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 130,
              "name": "give",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 130,
              "end": 164,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 131,
                  "end": 139,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 136,
                    "end": 139,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 138,
                      "end": 139,
                      "typeName": {
                        "type": "Identifier",
                        "start": 138,
                        "end": 139,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 141,
                "end": 164,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 147,
                    "end": 160,
                    "argument": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 159,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 103,
        "end": 121,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 104,
            "end": 120,
            "name": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 114,
              "end": 120
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 167,
      "end": 266,
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 194,
        "name": "GenericNumberOrString",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 222,
        "end": 266,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 226,
            "end": 264,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 230,
              "name": "give",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 230,
              "end": 264,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 231,
                  "end": 239,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 236,
                    "end": 239,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 238,
                      "end": 239,
                      "typeName": {
                        "type": "Identifier",
                        "start": 238,
                        "end": 239,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 241,
                "end": 264,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 247,
                    "end": 260,
                    "argument": {
                      "type": "Identifier",
                      "start": 254,
                      "end": 259,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 194,
        "end": 221,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 195,
            "end": 220,
            "name": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 205,
              "end": 220,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 205,
                  "end": 211
                },
                {
                  "type": "TSStringKeyword",
                  "start": 214,
                  "end": 220
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 268,
      "end": 330,
      "id": {
        "type": "Identifier",
        "start": 277,
        "end": 278,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 282,
          "end": 299,
          "name": "type",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 286,
            "end": 299,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 288,
              "end": 299,
              "abstract": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 295,
                "end": 299,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 298,
                  "end": 299,
                  "typeName": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 299,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 304,
        "end": 330,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 310,
            "end": 328,
            "argument": {
              "type": "NewExpression",
              "start": 317,
              "end": 327,
              "callee": {
                "type": "Identifier",
                "start": 321,
                "end": 325,
                "name": "type",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 278,
        "end": 281,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 279,
            "end": 280,
            "name": {
              "type": "Identifier",
              "start": 279,
              "end": 280,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 300,
        "end": 303,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 302,
          "end": 303,
          "typeName": {
            "type": "Identifier",
            "start": 302,
            "end": 303,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 332,
      "end": 360,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 338,
          "end": 359,
          "id": {
            "type": "Identifier",
            "start": 338,
            "end": 340,
            "name": "g1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 343,
            "end": 359,
            "callee": {
              "type": "Identifier",
              "start": 343,
              "end": 344,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 345,
                "end": 358,
                "name": "GenericObject",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 361,
      "end": 373,
      "expression": {
        "type": "CallExpression",
        "start": 361,
        "end": 372,
        "callee": {
          "type": "MemberExpression",
          "start": 361,
          "end": 368,
          "object": {
            "type": "Identifier",
            "start": 361,
            "end": 363,
            "name": "g1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 364,
            "end": 368,
            "name": "give",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 369,
            "end": 371,
            "properties": []
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 375,
      "end": 403,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 381,
          "end": 402,
          "id": {
            "type": "Identifier",
            "start": 381,
            "end": 383,
            "name": "g2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 386,
            "end": 402,
            "callee": {
              "type": "Identifier",
              "start": 386,
              "end": 387,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 388,
                "end": 401,
                "name": "GenericNumber",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 404,
      "end": 415,
      "expression": {
        "type": "CallExpression",
        "start": 404,
        "end": 414,
        "callee": {
          "type": "MemberExpression",
          "start": 404,
          "end": 411,
          "object": {
            "type": "Identifier",
            "start": 404,
            "end": 406,
            "name": "g2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 407,
            "end": 411,
            "name": "give",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 412,
            "end": 413,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 417,
      "end": 453,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 423,
          "end": 452,
          "id": {
            "type": "Identifier",
            "start": 423,
            "end": 425,
            "name": "g3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 428,
            "end": 452,
            "callee": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 430,
                "end": 451,
                "name": "GenericNumberOrString",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 454,
      "end": 465,
      "expression": {
        "type": "CallExpression",
        "start": 454,
        "end": 464,
        "callee": {
          "type": "MemberExpression",
          "start": 454,
          "end": 461,
          "object": {
            "type": "Identifier",
            "start": 454,
            "end": 456,
            "name": "g3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 457,
            "end": 461,
            "name": "give",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 462,
            "end": 463,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 466,
      "end": 479,
      "expression": {
        "type": "CallExpression",
        "start": 466,
        "end": 478,
        "callee": {
          "type": "MemberExpression",
          "start": 466,
          "end": 473,
          "object": {
            "type": "Identifier",
            "start": 466,
            "end": 468,
            "name": "g3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 469,
            "end": 473,
            "name": "give",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 474,
            "end": 477,
            "value": "1",
            "raw": "'1'"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 502,
      "end": 515,
      "id": {
        "type": "Identifier",
        "start": 508,
        "end": 509,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 513,
        "end": 515,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 509,
        "end": 512,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 510,
            "end": 511,
            "name": {
              "type": "Identifier",
              "start": 510,
              "end": 511,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 516,
      "end": 532,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 522,
          "end": 531,
          "id": {
            "type": "Identifier",
            "start": 522,
            "end": 524,
            "name": "g4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 527,
            "end": 531,
            "callee": {
              "type": "Identifier",
              "start": 527,
              "end": 528,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 529,
                "end": 530,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
