__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 532,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 83,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 19,
        "decorators": [],
        "name": "GenericObject",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 83,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 43,
            "end": 81,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 47,
              "decorators": [],
              "name": "give",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 47,
              "end": 81,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 48,
                  "end": 56,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
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
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
      "start": 84,
      "end": 166,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 103,
        "decorators": [],
        "name": "GenericNumber",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 122,
        "end": 166,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 126,
            "end": 164,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 130,
              "decorators": [],
              "name": "give",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 130,
              "end": 164,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 131,
                  "end": 139,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
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
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
      "start": 167,
      "end": 266,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 194,
        "decorators": [],
        "name": "GenericNumberOrString",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 222,
        "end": 266,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 226,
            "end": 264,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 230,
              "decorators": [],
              "name": "give",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 230,
              "end": 264,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 231,
                  "end": 239,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
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
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
      "type": "FunctionDeclaration",
      "start": 268,
      "end": 330,
      "id": {
        "type": "Identifier",
        "start": 277,
        "end": 278,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
          "start": 282,
          "end": 299,
          "decorators": [],
          "name": "type",
          "optional": false,
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
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
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 332,
      "end": 360,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 338,
          "end": 359,
          "id": {
            "type": "Identifier",
            "start": 338,
            "end": 340,
            "decorators": [],
            "name": "g1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 343,
            "end": 359,
            "callee": {
              "type": "Identifier",
              "start": 343,
              "end": 344,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 345,
                "end": 358,
                "decorators": [],
                "name": "GenericObject",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "g1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 364,
            "end": 368,
            "decorators": [],
            "name": "give",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 369,
            "end": 371,
            "properties": []
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 375,
      "end": 403,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 381,
          "end": 402,
          "id": {
            "type": "Identifier",
            "start": 381,
            "end": 383,
            "decorators": [],
            "name": "g2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 386,
            "end": 402,
            "callee": {
              "type": "Identifier",
              "start": 386,
              "end": 387,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 388,
                "end": 401,
                "decorators": [],
                "name": "GenericNumber",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "g2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 407,
            "end": 411,
            "decorators": [],
            "name": "give",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 412,
            "end": 413,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 417,
      "end": 453,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 423,
          "end": 452,
          "id": {
            "type": "Identifier",
            "start": 423,
            "end": 425,
            "decorators": [],
            "name": "g3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 428,
            "end": 452,
            "callee": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 430,
                "end": 451,
                "decorators": [],
                "name": "GenericNumberOrString",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "g3",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 457,
            "end": 461,
            "decorators": [],
            "name": "give",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 462,
            "end": 463,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false
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
            "decorators": [],
            "name": "g3",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 469,
            "end": 473,
            "decorators": [],
            "name": "give",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 474,
            "end": 477,
            "value": "1",
            "raw": "'1'"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 502,
      "end": 515,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 508,
        "end": 509,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
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
        "start": 513,
        "end": 515,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 516,
      "end": 532,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 522,
          "end": 531,
          "id": {
            "type": "Identifier",
            "start": 522,
            "end": 524,
            "decorators": [],
            "name": "g4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 527,
            "end": 531,
            "callee": {
              "type": "Identifier",
              "start": 527,
              "end": 528,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 529,
                "end": 530,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
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
