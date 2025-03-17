__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 34,
  "end": 713,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 54,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 54,
            "name": "BOOLEAN",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 54,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 47,
                "end": 54
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
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 69,
        "name": "foo",
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
        "start": 81,
        "end": 97,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 83,
            "end": 95,
            "argument": {
              "type": "Literal",
              "start": 90,
              "end": 94,
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 71,
        "end": 80,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 73,
          "end": 80
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 99,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 106,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 107,
        "end": 168,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 113,
            "end": 131,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 130,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 123,
                "end": 130
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 136,
            "end": 166,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 143,
              "end": 146,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 146,
              "end": 166,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 149,
                "end": 166,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 151,
                    "end": 164,
                    "argument": {
                      "type": "Literal",
                      "start": 158,
                      "end": 163,
                      "value": false,
                      "raw": "false"
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
      "type": "TSModuleDeclaration",
      "start": 169,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 177,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 178,
        "end": 208,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 184,
            "end": 206,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 191,
              "end": 206,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 195,
                  "end": 205,
                  "id": {
                    "type": "Identifier",
                    "start": 195,
                    "end": 205,
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 196,
                      "end": 205,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 198,
                        "end": 205
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 210,
      "end": 229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 214,
          "end": 228,
          "id": {
            "type": "Identifier",
            "start": 214,
            "end": 218,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 221,
            "end": 228,
            "callee": {
              "type": "Identifier",
              "start": 225,
              "end": 226,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
      "start": 251,
      "end": 283,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 282,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 267,
            "name": "ResultIsAny1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 270,
            "end": 282,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 275,
              "end": 282,
              "name": "BOOLEAN",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 309,
      "end": 338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 313,
          "end": 337,
          "id": {
            "type": "Identifier",
            "start": 313,
            "end": 325,
            "name": "ResultIsAny2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 328,
            "end": 337,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 333,
              "end": 337,
              "value": true,
              "raw": "true"
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 339,
      "end": 385,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 343,
          "end": 384,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 355,
            "name": "ResultIsAny3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 358,
            "end": 384,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "ObjectExpression",
              "start": 363,
              "end": 384,
              "properties": [
                {
                  "type": "Property",
                  "start": 365,
                  "end": 372,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 365,
                    "end": 366,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 368,
                    "end": 372,
                    "value": true,
                    "raw": "true"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 374,
                  "end": 382,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 374,
                    "end": 375,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 377,
                    "end": 382,
                    "value": false,
                    "raw": "false"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 415,
      "end": 446,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 419,
          "end": 445,
          "id": {
            "type": "Identifier",
            "start": 419,
            "end": 431,
            "name": "ResultIsAny4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 434,
            "end": 445,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 439,
              "end": 445,
              "object": {
                "type": "Identifier",
                "start": 439,
                "end": 443,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 444,
                "end": 445,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 447,
      "end": 475,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 451,
          "end": 474,
          "id": {
            "type": "Identifier",
            "start": 451,
            "end": 463,
            "name": "ResultIsAny5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 466,
            "end": 474,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 471,
              "end": 474,
              "object": {
                "type": "Identifier",
                "start": 471,
                "end": 472,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 473,
                "end": 474,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 476,
      "end": 506,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 480,
          "end": 505,
          "id": {
            "type": "Identifier",
            "start": 480,
            "end": 492,
            "name": "ResultIsAny6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 495,
            "end": 505,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 500,
              "end": 505,
              "callee": {
                "type": "Identifier",
                "start": 500,
                "end": 503,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 507,
      "end": 539,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 511,
          "end": 538,
          "id": {
            "type": "Identifier",
            "start": 511,
            "end": 523,
            "name": "ResultIsAny7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 526,
            "end": 538,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 531,
              "end": 538,
              "callee": {
                "type": "MemberExpression",
                "start": 531,
                "end": 536,
                "object": {
                  "type": "Identifier",
                  "start": 531,
                  "end": 532,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 533,
                  "end": 536,
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
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 568,
      "end": 605,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 572,
          "end": 604,
          "id": {
            "type": "Identifier",
            "start": 572,
            "end": 584,
            "name": "ResultIsAny8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 587,
            "end": 604,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 592,
              "end": 604,
              "operator": "void",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 597,
                "end": 604,
                "name": "BOOLEAN",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 636,
      "end": 646,
      "expression": {
        "type": "UnaryExpression",
        "start": 636,
        "end": 645,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "Literal",
          "start": 641,
          "end": 645,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 647,
      "end": 660,
      "expression": {
        "type": "UnaryExpression",
        "start": 647,
        "end": 659,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 652,
          "end": 659,
          "name": "BOOLEAN",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 661,
      "end": 672,
      "expression": {
        "type": "UnaryExpression",
        "start": 661,
        "end": 671,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "CallExpression",
          "start": 666,
          "end": 671,
          "callee": {
            "type": "Identifier",
            "start": 666,
            "end": 669,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 673,
      "end": 690,
      "expression": {
        "type": "SequenceExpression",
        "start": 673,
        "end": 689,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 673,
            "end": 682,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 678,
              "end": 682,
              "value": true,
              "raw": "true"
            }
          },
          {
            "type": "Literal",
            "start": 684,
            "end": 689,
            "value": false,
            "raw": "false"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 691,
      "end": 703,
      "expression": {
        "type": "UnaryExpression",
        "start": 691,
        "end": 702,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 696,
          "end": 702,
          "object": {
            "type": "Identifier",
            "start": 696,
            "end": 700,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 701,
            "end": 702,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 704,
      "end": 713,
      "expression": {
        "type": "UnaryExpression",
        "start": 704,
        "end": 712,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 709,
          "end": 712,
          "object": {
            "type": "Identifier",
            "start": 709,
            "end": 710,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 711,
            "end": 712,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
