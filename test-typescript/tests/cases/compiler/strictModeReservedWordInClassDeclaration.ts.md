__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 562,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 1,
      "end": 21,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 17,
        "name": "public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 21,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 153,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 32,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 33,
        "end": 153,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 39,
            "end": 118,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 50,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 50,
              "end": 118,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 51,
                  "end": 58,
                  "name": "private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 60,
                  "end": 66,
                  "name": "public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 68,
                  "end": 74,
                  "name": "static",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 76,
                "end": 118,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 86,
                    "end": 112,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 86,
                      "end": 111,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 93,
                        "name": "private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "AssignmentExpression",
                        "start": 96,
                        "end": 111,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 96,
                          "end": 102,
                          "name": "public",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 105,
                          "end": 111,
                          "name": "static",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    },
                    "directive": null
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
            "start": 123,
            "end": 151,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 136,
              "name": "banana",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 136,
              "end": 151,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 137,
                  "end": 146,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 138,
                    "end": 146,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 140,
                      "end": 146,
                      "typeName": {
                        "type": "Identifier",
                        "start": 140,
                        "end": 146,
                        "name": "public",
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
                "start": 148,
                "end": 151,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
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
    {
      "type": "ClassDeclaration",
      "start": 155,
      "end": 353,
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 162,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 163,
        "end": 353,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 169,
            "end": 208,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 180,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 180,
              "end": 208,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 181,
                  "end": 194,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 188,
                    "end": 194,
                    "name": "public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "Identifier",
                  "start": 196,
                  "end": 199,
                  "name": "let",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 201,
                "end": 208,
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
            "start": 213,
            "end": 313,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 213,
              "end": 217,
              "name": "foo1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 217,
              "end": 313,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 218,
                  "end": 225,
                  "name": "private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 227,
                  "end": 233,
                  "name": "static",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 235,
                  "end": 241,
                  "name": "public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 243,
                "end": 313,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 253,
                    "end": 271,
                    "id": {
                      "type": "Identifier",
                      "start": 262,
                      "end": 265,
                      "name": "let",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 268,
                      "end": 271,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 280,
                    "end": 307,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 284,
                        "end": 306,
                        "id": {
                          "type": "Identifier",
                          "start": 284,
                          "end": 285,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "FunctionExpression",
                          "start": 288,
                          "end": 306,
                          "id": {
                            "type": "Identifier",
                            "start": 297,
                            "end": 300,
                            "name": "let",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 303,
                            "end": 306,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
            "start": 319,
            "end": 338,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 326,
              "end": 332,
              "name": "pulbic",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 332,
              "end": 338,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 335,
                "end": 338,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
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
    {
      "type": "ClassDeclaration",
      "start": 355,
      "end": 382,
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 362,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 379,
        "end": 382,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 362,
        "end": 379,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 363,
            "end": 369,
            "name": {
              "type": "Identifier",
              "start": 363,
              "end": 369,
              "name": "public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 371,
            "end": 378,
            "name": {
              "type": "Identifier",
              "start": 371,
              "end": 378,
              "name": "private",
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
      "type": "ClassDeclaration",
      "start": 384,
      "end": 413,
      "id": {
        "type": "Identifier",
        "start": 390,
        "end": 391,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 410,
        "end": 413,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 403,
          "end": 409,
          "expression": {
            "type": "Identifier",
            "start": 403,
            "end": 409,
            "name": "public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 415,
      "end": 454,
      "id": {
        "type": "Identifier",
        "start": 421,
        "end": 422,
        "name": "F",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 451,
        "end": 454,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 434,
          "end": 450,
          "expression": {
            "type": "MemberExpression",
            "start": 434,
            "end": 450,
            "object": {
              "type": "MemberExpression",
              "start": 434,
              "end": 448,
              "object": {
                "type": "Identifier",
                "start": 434,
                "end": 440,
                "name": "public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 441,
                "end": 448,
                "name": "private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 449,
              "end": 450,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 455,
      "end": 504,
      "id": {
        "type": "Identifier",
        "start": 461,
        "end": 463,
        "name": "F1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 501,
        "end": 504,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 475,
          "end": 500,
          "expression": {
            "type": "MemberExpression",
            "start": 475,
            "end": 500,
            "object": {
              "type": "MemberExpression",
              "start": 475,
              "end": 489,
              "object": {
                "type": "Identifier",
                "start": 475,
                "end": 481,
                "name": "public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 482,
                "end": 489,
                "name": "private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 490,
              "end": 500,
              "name": "implements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 505,
      "end": 532,
      "id": {
        "type": "Identifier",
        "start": 511,
        "end": 512,
        "name": "G",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 521,
        "end": 528,
        "name": "package",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 529,
        "end": 532,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 533,
      "end": 562,
      "id": {
        "type": "Identifier",
        "start": 539,
        "end": 540,
        "name": "H",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 549,
        "end": 558,
        "object": {
          "type": "Identifier",
          "start": 549,
          "end": 556,
          "name": "package",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 557,
          "end": 558,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 559,
        "end": 562,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
