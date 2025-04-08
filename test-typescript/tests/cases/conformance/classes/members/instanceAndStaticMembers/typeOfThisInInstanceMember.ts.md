__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 385,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 227,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 227,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 23,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ThisExpression",
              "start": 18,
              "end": 22
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
            "type": "MethodDefinition",
            "start": 28,
            "end": 62,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 31,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 62,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 62,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 44,
                    "end": 56,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 51,
                      "end": 55
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
            "start": 67,
            "end": 183,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 78,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 183,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 79,
                  "end": 88,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 88,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 82,
                      "end": 88
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 90,
                "end": 183,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 100,
                    "end": 113,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 104,
                        "end": 112,
                        "id": {
                          "type": "Identifier",
                          "start": 104,
                          "end": 105,
                          "name": "t",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 108,
                          "end": 112
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 122,
                    "end": 126,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 122,
                      "end": 125,
                      "object": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 123,
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 124,
                        "end": 125,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 135,
                    "end": 139,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 135,
                      "end": 138,
                      "object": {
                        "type": "Identifier",
                        "start": 135,
                        "end": 136,
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 138,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 148,
                    "end": 152,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 148,
                      "end": 151,
                      "object": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 149,
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 151,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 161,
                    "end": 177,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 165,
                        "end": 176,
                        "id": {
                          "type": "Identifier",
                          "start": 165,
                          "end": 166,
                          "name": "r",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 169,
                          "end": 176,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 169,
                            "end": 174,
                            "object": {
                              "type": "Identifier",
                              "start": 169,
                              "end": 170,
                              "name": "t",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 171,
                              "end": 174,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
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
            "start": 189,
            "end": 225,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 194,
              "end": 225,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 197,
                "end": 225,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 207,
                    "end": 219,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 214,
                      "end": 218
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 229,
      "end": 238,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 233,
          "end": 237,
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 237,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 234,
              "end": 237,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 236,
                "end": 237,
                "typeName": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 237,
                  "name": "C",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 249,
      "end": 261,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 253,
          "end": 260,
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 254,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 257,
            "end": 260,
            "object": {
              "type": "Identifier",
              "start": 257,
              "end": 258,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 259,
              "end": 260,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 262,
      "end": 279,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 266,
          "end": 278,
          "id": {
            "type": "Identifier",
            "start": 266,
            "end": 268,
            "name": "ra",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 271,
            "end": 278,
            "object": {
              "type": "MemberExpression",
              "start": 271,
              "end": 276,
              "object": {
                "type": "MemberExpression",
                "start": 271,
                "end": 274,
                "object": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 272,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 274,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 275,
                "end": 276,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 277,
              "end": 278,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 280,
      "end": 293,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 292,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 286,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 289,
            "end": 292,
            "object": {
              "type": "Identifier",
              "start": 289,
              "end": 290,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 294,
      "end": 311,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 298,
          "end": 310,
          "id": {
            "type": "Identifier",
            "start": 298,
            "end": 300,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 303,
            "end": 310,
            "callee": {
              "type": "MemberExpression",
              "start": 303,
              "end": 308,
              "object": {
                "type": "Identifier",
                "start": 303,
                "end": 304,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 305,
                "end": 308,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 312,
      "end": 333,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 316,
          "end": 332,
          "id": {
            "type": "Identifier",
            "start": 316,
            "end": 318,
            "name": "rs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 321,
            "end": 332,
            "elements": [
              {
                "type": "Identifier",
                "start": 322,
                "end": 323,
                "name": "r",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 325,
                "end": 327,
                "name": "r2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 329,
                "end": 331,
                "name": "r3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 335,
      "end": 385,
      "expression": {
        "type": "CallExpression",
        "start": 335,
        "end": 384,
        "callee": {
          "type": "MemberExpression",
          "start": 335,
          "end": 345,
          "object": {
            "type": "Identifier",
            "start": 335,
            "end": 337,
            "name": "rs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 338,
            "end": 345,
            "name": "forEach",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 346,
            "end": 383,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 346,
                "end": 347,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 351,
              "end": 383,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 357,
                  "end": 363,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 357,
                    "end": 362,
                    "object": {
                      "type": "Identifier",
                      "start": 357,
                      "end": 358,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 359,
                      "end": 362,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 368,
                  "end": 372,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 368,
                    "end": 371,
                    "object": {
                      "type": "Identifier",
                      "start": 368,
                      "end": 369,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 370,
                      "end": 371,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 377,
                  "end": 381,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 377,
                    "end": 380,
                    "object": {
                      "type": "Identifier",
                      "start": 377,
                      "end": 378,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 379,
                      "end": 380,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
