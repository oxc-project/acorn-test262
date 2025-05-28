__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 341,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 67,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 67,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 46,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 46,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 25,
                  "end": 31,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 26,
                    "end": 31,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 28,
                      "end": 31
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 46,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 35,
                    "end": 44,
                    "argument": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
                      "decorators": [],
                      "name": "x",
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
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 51,
            "end": 65,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 63,
              "end": 64,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 69,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 80,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 89,
          "end": 90,
          "expression": {
            "type": "Identifier",
            "start": 89,
            "end": 90,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 91,
        "end": 118,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 97,
            "end": 116,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 102,
              "decorators": [],
              "name": "other",
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
                "start": 103,
                "end": 109,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 104,
                  "end": 109,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 106,
                    "end": 109
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 115,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 112,
                "end": 115
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 120,
      "end": 237,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 127,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 136,
        "end": 137,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 149,
          "end": 150,
          "expression": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 151,
        "end": 237,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 157,
            "end": 189,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 164,
              "end": 167,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 167,
              "end": 189,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 168,
                  "end": 174,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 169,
                    "end": 174,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 171,
                      "end": 174
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 176,
                "end": 189,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 178,
                    "end": 187,
                    "argument": {
                      "type": "Identifier",
                      "start": 185,
                      "end": 186,
                      "decorators": [],
                      "name": "x",
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 194,
            "end": 221,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 194,
              "end": 199,
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 199,
              "end": 221,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 200,
                  "end": 206,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 201,
                    "end": 206,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 203,
                      "end": 206
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 208,
                "end": 221,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 210,
                    "end": 219,
                    "argument": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 218,
                      "decorators": [],
                      "name": "x",
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
          },
          {
            "type": "MethodDefinition",
            "start": 226,
            "end": 235,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 229,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 229,
              "end": 235,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 232,
                "end": 235,
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
      "type": "VariableDeclaration",
      "start": 240,
      "end": 249,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 244,
          "end": 248,
          "id": {
            "type": "Identifier",
            "start": 244,
            "end": 248,
            "decorators": [],
            "name": "c",
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
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 250,
      "end": 259,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 254,
          "end": 258,
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 258,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 258,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 257,
                "end": 258,
                "typeName": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 258,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 260,
      "end": 269,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 264,
          "end": 268,
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 268,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 265,
              "end": 268,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 267,
                "end": 268,
                "typeName": {
                  "type": "Identifier",
                  "start": 267,
                  "end": 268,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 271,
      "end": 277,
      "expression": {
        "type": "AssignmentExpression",
        "start": 271,
        "end": 276,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 271,
          "end": 272,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 275,
          "end": 276,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 278,
      "end": 284,
      "expression": {
        "type": "AssignmentExpression",
        "start": 278,
        "end": 283,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 278,
          "end": 279,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 282,
          "end": 283,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 295,
      "end": 301,
      "expression": {
        "type": "AssignmentExpression",
        "start": 295,
        "end": 300,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 295,
          "end": 296,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 299,
          "end": 300,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 302,
      "end": 308,
      "expression": {
        "type": "AssignmentExpression",
        "start": 302,
        "end": 307,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 302,
          "end": 303,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 306,
          "end": 307,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 319,
      "end": 325,
      "expression": {
        "type": "AssignmentExpression",
        "start": 319,
        "end": 324,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 319,
          "end": 320,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 323,
          "end": 324,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 326,
      "end": 332,
      "expression": {
        "type": "AssignmentExpression",
        "start": 326,
        "end": 331,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 326,
          "end": 327,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 330,
          "end": 331,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
